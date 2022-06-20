import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push , remove} from "firebase/database";
import app from "./firebaseInitialization";

const auth = getAuth(app);
const db = getDatabase(app);

const signUpUser = (obj) => {
  const { email, password } = obj;
  return createUserWithEmailAndPassword(auth, email, password);
};

const SignInUser = (obj) => {
  const { email, password } = obj;
  return signInWithEmailAndPassword(auth, email, password);
};

const writeOperation = (nodeName, obj, id) => {
        if (!id) {
                let postListRef = ref(db, nodeName);
                obj.id = push(postListRef).key;
        }
        let referecne = ref(db, `${nodeName}/,${id ? id : obj.id}`);
  return set(referecne, obj);
};

const readOperation = (nodeName) => {
  const arr = [];
  const dbRef = ref(db, nodeName);
  onValue(
    dbRef,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        arr.push({ key: childKey, data: childData });
      });
    },
    {
      onlyOnce: false,
    }
  );
  return arr;
};

let deleteData = (nodeName, id) => {
        const refrence = ref(db, nodeName + "/" + id);
        return remove(refrence);
      };

export default {
  signUpUser,
  SignInUser,
  writeOperation,
  readOperation,
  deleteData,
  db,
  onValue,
  ref
};

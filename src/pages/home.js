import { Button } from "@mui/material";
import React, { useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";

import firebaseMethods from "../confiq/firebase/firebaseMethods";

function Home(props) {
  const { id } = useParams();
  const { state } = useLocation();
  console.log("i am not useEfftect");
  useEffect(() => {
    console.log("useEfftect here");
    let writePromise = firebaseMethods.writeOperation("users", id, state);
    writePromise
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
    ////////*******read Data***** */
    firebaseMethods.readOperation("users/");
  }, []);

  return (
    <div>
      <h1>Welcome to Home</h1>

      <Button variant="contained"> Read</Button>
    </div>
  );
}

export default Home;

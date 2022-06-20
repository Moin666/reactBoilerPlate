import React from 'react';

function BTButton({type, placeholder, widthCustom,onChange,value}) {
    return (
        <React.Fragment>
           <input type={type} class="form-control" onChange={onChange} value = {value} className={widthCustom} id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder={placeholder}/>
        </React.Fragment>
    );
}

export default BTButton;
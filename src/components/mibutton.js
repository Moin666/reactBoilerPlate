import React from 'react';

function MIBUTTON({type, placeholder,value,onChange}) {
    return (
        <input type={type} class="form-control "  value ={value} onChange={onChange}  style={{borderRadius:"15px"}} id="inputPassword2" placeholder={placeholder} />
    );
}

export default MIBUTTON;
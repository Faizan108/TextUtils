import React from "react";

function Alert(props) {
    const capital=(word)=>{
        const low=word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
  return (
    props.alert && <>
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capital(props.alert.type)}</strong> {props.alert.msg}
      </div>
    </>
  );
}

export default Alert;
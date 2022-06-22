import React, {useState} from "react";
import './TextForm.css';
function TextForm(props) {
    
    const[text,setText]=useState("");
    function clickuphandle(){
        // console.log("Button clicked");
        const newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Changed to UpperCase!","success");
    }
    function clicklohandle(){
        // console.log("Button clicked");
        const newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Changed to Lower Case!","success");
    }
    function clickclearhandle(){
      setText("");
      props.showalert("Cleared text!","success");
    }
    function clickcopyhandle(){
        navigator.clipboard.writeText(text);
        props.showalert("Text copied to clipboard!","success");
    }
    function handleonchange(event){
        // console.log("chnages");
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#0d2241'}}>
      <h1 className="my-2">{props.heading}</h1>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'#0d2241'}}>
        <textarea
          className="form-control brd"
          id="Textarea1"
          placeholder="Enter your text"
          rows="10" value={text} onChange={handleonchange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#0d2241'}}
          
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary me-3" onClick={clickuphandle}>Change to UpperCase</button>
      <button type="button" className="btn btn-primary mx-3" onClick={clicklohandle}>Change to LowerCase</button>
      <button type="button" className="btn btn-primary mx-3" onClick={clickclearhandle}>Clear Text</button>
      <button type="button" className="btn btn-primary mx-3" onClick={clickcopyhandle}>Copy Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0d2241'}}>
        <h2>Words Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#0d2241'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Write something in textbox to preview'}</p>
      </div>
    </>
  );
}
export default TextForm;

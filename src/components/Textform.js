import React, {useState} from 'react'


export default function  (props) {
    const [text, setText]= useState('');
    const handleUpClick = ()=>{
        console.log("uppercase was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Success")
    }
    const handleOnChange = (event)=>{
        console.log("onchange")
        setText(event.target.value);
    }
    const handleDnClick = ()=>{
        console.log("lowercase was clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","Success")
    }
    const handleclrClick = ()=>{
        console.log("clear was clicked"+ text)
        let newText = ("");
        setText(newText)
        props.showAlert("Text Cleared","Success")
    }
    const handleExtClick = ()=>{
        console.log("Extra soace was clicked"+ text)
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText)
        props.showAlert("Extra space removed","Success")
    }
   
    
    
    
    
    // setText("New text");
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        < div className="mb-3">
  
        <textarea className="form-control" value = {text} onChange={handleOnChange} placeholder="Enter your text" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>

    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDnClick}>Convert to lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclrClick}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtClick}>Remove Extra space</button>
    
    </div>
    <div className='conatiner my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
        {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p> 
        <p>time taken to read out {0.008*text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length }</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  )
}

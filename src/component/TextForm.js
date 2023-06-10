import React, {useState} from 'react'


export default function TextForm(props) {
  const [myStyle, setmyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });
  const [btnTxt, setbtnTxt] = useState("Enable Dark Mode");
  const toggleStyle= ()=>{
    if (myStyle.color === 'white'){
      setmyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
      setbtnTxt("Enable dark mode")
    }
    else{
      setmyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
      setbtnTxt("Enable light mode")
    }
  }
  const copy = ()=>{
    console.log("i am copy function");
    var text = document.getElementById('mybox');
    text.select();
navigator.clipboard.writeText(text.value);
  }
    const upclick = ()=>{
        console.log("upper button is clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const loclick = ()=>{
        console.log("upper button is clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearclick = ()=>{
        console.log("Cleared");
        let newText = '';
        setText(newText);
    }
    const tArea = (event)=>{
        console.log("textarea is open");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>

      <div className='container' style={myStyle}>
      <h1>{props.heading} </h1>
      <div style={myStyle}>
        <textarea ClassName="form-control" onChange={tArea} value={text} id="mybox"  cols="80" rows="8" ></textarea>
      </div>
      <button onClick={upclick}>{props.Bvalue}</button>
      <button onClick={loclick}>{props.lvalue}</button>
      <button onClick={clearclick}>{props.ClearValue}</button>
      <button onClick={toggleStyle}>{btnTxt}</button>
      <button onClick={copy}>copy</button>
      
      <div>
        <h1>count</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"type something to preview" }</p>
      </div>
      </div>
    </>
  )
}

import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function About(props) {
//     const [myStyle, setMyStyle]=useState({
//         color: 'black',
//         backgroundColor : "white"
        
//     })
//     const[btntext, setBtnText] = useState("Enable Dark mode")

let myStyle = {
    color:props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
}

//     const toggleStyle = ()=>{
//         if(myStyle.color === 'black'){
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border:"1px solid white"
//             })
//             setBtnText("Enable Light mode")
//     }
//     else{
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white'
//         })
//         setBtnText("Enable Dark mode");
//     }
// }
  return (
            <div className="container" >
                <h1 className="my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>About us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong>
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong>
            </div>
        </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong>
            </div>
        </div>
        </div>

        
            </div>
            </div>
        )
    }

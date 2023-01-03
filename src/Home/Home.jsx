import React, { useState } from "react";
import "../asset/Style/Home/home.css";
import VectorOne from "../asset/Images/vectone.png";
import VectorTwo from "../asset/Images/vecttwo.png";
import VectorThree from "../asset/Images/vectthree.png";
import Mine from "../asset/Images/mine3.jpg";
import Mine2 from "../asset/Images/MINE2.gif";
import Mine3 from "../asset/Images/MINE1.gif";

const Home = () => {
    const [Stylecolor, setStylecolor] = useState("0");
    const [Stylecolor2,setStylecolor2]=useState("#F9DC5CFF");
    const [StyleDisp, setStyleDisp] = useState("none");
    const [StyleDisp2, setStyleDisp2] = useState("none");
    const [StyleDisp3,setStyleDisp3]=useState("block");

    const Developer = () => {
        if (Stylecolor==="0" || Stylecolor==="1") {
            setStyleDisp("block");
            setStyleDisp2("none");
            setStyleDisp3("none");
            setStylecolor2("transparent");
            setStylecolor("1");
        }
    }
    const Designer = () => {
        
        if (Stylecolor==="1" || Stylecolor==="0" ) {
            setStyleDisp2("block");
            setStyleDisp("none");
            setStyleDisp3("none");
            setStylecolor2("transparent");
            setStylecolor("0");
        }
    }
    return (
        <React.Fragment>
            <div className="DisplayScreen">
                <div className="Image" style={{backgroundColor:Stylecolor2}}>
                    <div className="ImageDisp" style={{backgroundColor:"#011936FF",display:StyleDisp}}>
                    </div>
                    <div className="ImageDisp" style={{backgroundColor:"#F9DC5CFF",display:StyleDisp2}}>
                    </div>
                    <img src={Mine} alt="mine" style={{display:StyleDisp3}}/>
                    <img src={Mine2} alt="mine" style={{display:StyleDisp}}/>
                    <img src={Mine3} alt="mine" style={{display:StyleDisp2}}/>
                    <div className="Vect">
                        <img src={VectorOne} alt="vectone" />
                        <img src={VectorTwo} alt="vectone" />
                        <img src={VectorThree} alt="vectone" />
                    </div>
                </div>
                <div className="Disp2" style={{backgroundColor:"#ED254EFF"}}>
                    <div className="Content" >
                        <div className="Hi">
                            <h1>Hi 👋</h1>
                        </div>
                        <div className="Name">
                            <h1>I am Mohd Rehan Ali</h1>
                        </div>
                        <div className="Change">
                            <h1>I am a</h1>
                            <div className="ChangeBtn">
                                <button onClick={Developer}>Web Developer</button>
                                <button onClick={Designer}>Web Designer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
import React, { useState } from "react";
import "../asset/Style/Contact/Contact.css";
import Github from "../asset/Images/github.png";
import Insta from "../asset/Images/instagram.png";
import LinkedIn from "../asset/Images/linkedin.png";
import Whatsapp from "../asset/Images/whatsapp.png";
import Phone from "../asset/Images/phone.png";
import Mail from "../asset/Images/email.png";
import Chat from "../asset/Images/chat.png";
import Chat2 from "../asset/Images/chat2.png";
const Contact = () => {
    const [email, setemail] = useState("");
    const [feedback, setfeedback] = useState("");

    const SendForm = (e) => {
        e.preventDefault();
        if(email==="" && feedback===""){
            alert("Please enter the valid data");
        }
        else{
            alert("Thank You for your feedback");
            setemail("");
            setfeedback("");
        }
    }
    return (
        <React.Fragment>
            <div className="Contact">
                <div className="Heading">
                    <h1>ContactMe</h1>
                </div>
                <div className="ContactOne">
                    <div className="LastWords">
                        <p>Hope You Like My Work and will get in touch soon.</p>
                    </div>
                    <div className="SocialMediaHandling">
                        <div className="SocialMedia" style={{ justifyContent: "space-evenly" }}>
                            <a href="tel: +917017337726"><img src={Phone} alt="phone" /></a>
                            <a href="mailto:mohdrehanali40@gmail.com"><img src={Mail} alt="mail" /></a>
                        </div>
                        <div className="SocialMedia">
                            <a href="https://github.com/RehanAli357"><img src={Github} alt="github" /></a>
                            <a href="https://www.instagram.com/invites/contact/?=8xqkt1kh3gt&utm_content=cdnjx65"><img src={Insta} alt="insta" /></a>
                            <a href="https://www.linkedin.com/in/rehan-ali-b97964247"><img src={LinkedIn} alt="linkedin" /></a>
                            <a href="https://wa.me/917017337726"><img src={Whatsapp} alt="whatsapp" /></a>
                        </div>
                        <img src={Chat} alt="chat" />
                    </div>
                </div>

                <div className="ContactTwo">
                    <img src={Chat2} alt="chat2" />
                    <div className="Form">
                        <div className="Name">
                            <input type="email" required placeholder="Email" name="email" value={email} onChange={(e) => { setemail(e.target.value); }} />
                        </div>
                        <div className="Message">
                            <textarea placeholder="Your Name and Feedback" required name="feedback" value={feedback} onChange={(e) => { setfeedback(e.target.value); }}></textarea>
                        </div>
                        <div className="Submit"><button onClick={SendForm}>Submit</button></div>
                    </div>
                    <div className="LastWord">
                        <h1>Thanks for your Feedback</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
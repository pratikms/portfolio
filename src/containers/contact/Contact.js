import React from "react";
import "./Contact.css";
import Button from "../../components/button/Button";
import {contactInfo} from "../../portfolio";

export default function Contact() {
    return (
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                        <Button text={"Say Hello"} className="project-button" href={"mailto:" + contactInfo.email_address} />
                    </div>
                </div>
            </div>
        </div>
    );
}

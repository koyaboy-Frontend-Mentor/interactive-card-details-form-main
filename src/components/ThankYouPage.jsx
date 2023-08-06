import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function ThankYouPage(props) {
    const { formik } = props
    const nav = useNavigate()
    const handleClick = () => {
        formik.resetForm();
        nav("/")
    }
    return (
        <div className="thankYou-container">
            <img src="./images/icon-complete.svg" alt="icon-complete" />
            <h2>THANK YOU!</h2>
            <p>We've added your card details</p>
            <button onClick={handleClick}>Continue</button>
        </div>
    )
}
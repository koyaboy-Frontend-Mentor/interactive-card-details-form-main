import React from "react";

export default function ThankYouPage() {

    const handleClick = () => {
        console.log('2')
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
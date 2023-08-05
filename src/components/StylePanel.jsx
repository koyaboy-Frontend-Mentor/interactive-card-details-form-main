import React from "react";

export default function StylePanel(props) {
    const { formik } = props

    console.log(formik.values)
    return (
        <div className="style-panel">
            <div className="front-img-container">
                <img
                    src="./images/bg-card-front.png"
                    alt="card-front-img"
                    className="card-front-img"
                />
                <div className="img-content">
                    <img
                        src="./images/card-logo.svg"
                        alt="card-front-img"
                        className="card-logo"
                    />
                    <p className="card-number"> {formik.values.cardNumber}</p>
                    <div className="footer">
                        <p>{formik.values.name}</p>
                        <p>{formik.values.expiryMonth}/{formik.values.expiryYear}</p>
                    </div>
                </div>

            </div>
            <div className="back-img-container">
                <img
                    src="./images/bg-card-back.png"
                    alt="card-back-img"
                    className="card-back-img"
                />
                <p className="cvc">{formik.values.cvc}</p>
            </div>
        </div>
    )
}
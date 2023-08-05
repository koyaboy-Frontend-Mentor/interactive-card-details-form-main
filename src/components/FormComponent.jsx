import React from "react";

import { Link } from "react-router-dom";

export default function FormComponent(props) {
    const { formik } = props
    return (
        <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
                <div className="name">
                    <label htmlFor="name">CARDHOLDER NAME</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        style={{
                            border: formik.touched.name && formik.errors.name ? " 1px solid hsl(0, 100%, 66%)" : formik.touched.name ? " 1px solid hsl(278, 94%, 30%)" : "1px solid hsla(249, 99%, 64%, 0.3)"
                        }}
                        placeholder="e.g. Jane Appleseed"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <p className="error-name"> {formik.errors.name}</p> : null}
                </div>


                <div className="cardNumber">
                    <label htmlFor="cardNumber"> CARD NUMBER</label>
                    <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        style={{
                            border: formik.touched.cardNumber && formik.errors.cardNumber ? " 1px solid hsl(0, 100%, 66%)" : formik.touched.cardNumber ? " 1px solid hsl(278, 94%, 30%)" : "1px solid hsla(249, 99%, 64%, 0.3)"
                        }}
                        placeholder="e.g. 1234 5678 9123 0000"
                        onChange={formik.handleChange}
                        value={formik.values.cardNumber}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber ? <p className="error-cardNumber"> {formik.errors.cardNumber}</p> : null}
                </div>



                <div className="dateCvcLabel-container">
                    <label htmlFor="expiryDate">EXP.DATE (MM/YY)</label>
                    <label htmlFor="cvc"> CVC</label>
                </div>

                <div className="dateCvcInput-container">
                    <input
                        type="text"
                        name="expiryMonth"
                        id="expiryDate"
                        style={{
                            border: formik.touched.expiryMonth && formik.errors.expiryMonth ? " 1px solid hsl(0, 100%, 66%)" : formik.touched.expiryMonth ? " 1px solid hsl(278, 94%, 30%)" : "1px solid hsla(249, 99%, 64%, 0.3)"
                        }}
                        placeholder="MM"
                        onChange={formik.handleChange}
                        value={formik.values.expiryMonth}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.expiryMonth && formik.errors.expiryMonth ? <p className="errors error-month">{formik.errors.expiryMonth}</p> : null}

                    <input
                        type="text"
                        name="expiryYear"
                        id="expiryDate"
                        style={{
                            border: formik.touched.expiryYear && formik.errors.expiryYear ? " 1px solid hsl(0, 100%, 66%)" : formik.touched.expiryYear ? " 1px solid hsl(278, 94%, 30%)" : "1px solid hsla(249, 99%, 64%, 0.3)"
                        }}
                        placeholder="YY"
                        onChange={formik.handleChange}
                        value={formik.values.expiryYear}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.expiryYear && formik.errors.expiryYear ? <p className="errors error-year">{formik.errors.expiryYear}</p> : null}

                    <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        className="cvc"
                        style={{
                            border: formik.touched.cvc && formik.errors.cvc ? " 1px solid hsl(0, 100%, 66%)" : formik.touched.cvc ? " 1px solid hsl(278, 94%, 30%)" : "1px solid hsla(249, 99%, 64%, 0.3)"
                        }}
                        placeholder="e.g. 123"
                        onChange={formik.handleChange}
                        value={formik.values.cvc}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.cvc && formik.errors.cvc ? <p className="errors error-cvc">{formik.errors.cvc}</p> : null}

                </div>

                <button> <Link to="/confirmationPage"> Confirm</Link></button>
            </form>
        </div>
    )

}
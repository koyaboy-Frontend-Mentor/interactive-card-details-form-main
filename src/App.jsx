import "./index.css"
import { useFormik } from "formik";
import * as Yup from "yup"
import ThankYouPage from "./components/ThankYouPage";
import { useState } from "react";


function App() {

  const [submitted, setSubmitted] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required"),
      cardNumber: Yup.string()
        .required("Card number is required")
        .matches(/^[0-9\s]+$/, "Wrong format, numbers only")
        .test("len", "Card number must be exactly 16 digits", (val) => {
          if (!val) return true; // Empty value will be handled by the required validation.
          const cardNumberWithoutSpaces = val.replace(/\s/g, ""); // Remove spaces from the input.
          return (cardNumberWithoutSpaces.length === 16); // Validate only if 16 digits are entered.
        }),
      expiryMonth: Yup.string()
        .required("Can't be blank"),

      expiryYear: Yup.string()
        .required("Can't be blank"),

      cvc: Yup.number()
        .required("Can't be blank")
    }),

    onSubmit: (values) => {
      setSubmitted(true)
    }
  })

  return (
    <main>
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


      {submitted ? <ThankYouPage /> : <div className="form-container">
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

          <button> Confirm</button>
        </form>
      </div>

      }

    </main>
  );
}

export default App;
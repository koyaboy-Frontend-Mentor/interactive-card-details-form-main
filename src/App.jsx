import "./index.css"
import { useFormik } from "formik";
import * as Yup from "yup"
function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: ""
    },

    validationSchema: Yup.object({
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
  })





  console.log(formik.values)
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

        </div>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />

          <div className="cardNumber">
            <label htmlFor="cardNumber"> CARD NUMBER</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
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
              placeholder="e.g. 123"
              onChange={formik.handleChange}
              value={formik.values.cvc}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cvc && formik.errors.cvc ? <p className="errors error-cvc">{formik.errors.cvc}</p> : null}

          </div>







          {/* <div className="date-cvc">
            <div className="one">
              <label htmlFor="expiryDate">EXP.DATE (MM/YY)</label>
              <div className="input">
                <input
                  type="text"
                  name="expiryMonth"
                  id="expiryDate"
                  placeholder="MM"
                  onChange={formik.handleChange}
                  value={formik.values.expiryMonth}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.expiryMonth && formik.errors.expiryMonth ? <p className="errors">{formik.errors.expiryMonth}</p> : null}

                <input
                  type="text"
                  name="expiryYear"
                  id="expiryDate"
                  placeholder="YY"
                  onChange={formik.handleChange}
                  value={formik.values.expiryYear}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.expiryYear && formik.errors.expiryYear ? <p className="errors">{formik.errors.expiryYear}</p> : null}

              </div>

            </div>

            <div className="three">
              <label htmlFor="cvc"> CVC</label>
              <input
                type="number"
                name="cvc"
                id="cvc"
                className="cvc"
                placeholder="e.g. 123"
                onChange={formik.handleChange}
                value={formik.values.cvc}
              />
              {formik.touched.cvc && formik.errors.cvc ? <p className="errors">{formik.errors.cvc}</p> : null}
            </div>

          </div> */}

          <button> Confirm</button>
        </form>
      </div>
    </main>
  );
}

export default App;

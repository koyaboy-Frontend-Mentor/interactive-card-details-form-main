import "./index.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup"



import StylePanel from "./components/StylePanel";
import FormComponent from "./components/FormComponent";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const nav = useNavigate()

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

    onSubmit: () => {
      nav("/confirmationPage")
    }
  })

  return (
    <main>
      <StylePanel formik={formik} />
      <Routes>
        <Route path="/confirmationPage" element={<ThankYouPage formik={formik} />} />
        <Route path="/" element={<FormComponent formik={formik} />} />
      </Routes>
    </main>
  );
}

export default App;
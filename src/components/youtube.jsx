import React from "react"
import { FormikContext, useFormik } from "formik"
import * as Yup from "yup"


export default function YoutubeForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(8, "Must be 8 characters or less")
                .required("Reuired")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });

    console.log(formik.errors);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.errors.name && <p>{formik.errors.name}</p>}

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.channel} />

                <button>
                    SUBMIT
                </button>


            </form>
        </div>
    )

}
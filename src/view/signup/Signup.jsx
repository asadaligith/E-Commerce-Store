import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router";

function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Signup Form
                </h2>

                <Formik
                    initialValues={{ fullName: "", email: "", password: "" }}
                    validate={(values) => {
                        const errors = {};

                        // Full Name
                        if (!values.fullName) {
                            errors.fullName = "Full name is required";
                        } else if (values.fullName.length < 3) {
                            errors.fullName = "At least 3 characters";
                        }

                        // Email
                        if (!values.email) {
                            errors.email = "Email is required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = "Invalid email";
                        }

                        // Password
                        if (!values.password) {
                            errors.password = "Password is required";
                        } else if (values.password.length < 6) {
                            errors.password = "Min 6 characters required";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">

                            {/* Full Name */}
                            <div>
                                <label className="block mb-1 font-medium">
                                    Full Name
                                </label>
                                <Field
                                    type="text"
                                    name="fullName"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <ErrorMessage
                                    name="fullName"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-1 font-medium">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block mb-1 font-medium">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>

                            {/* Login Link */}
                            <p className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    to="/"
                                    className="text-blue-500 font-medium hover:underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Signup;
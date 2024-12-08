import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SignUpFormValues } from "../types";
import PasswordStrength from "./PasswordStrength";

interface SignUpFormProps {
  toggle: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ toggle }) => {
  const initialValues: SignUpFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handleSubmit = (
    values: SignUpFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    // Simulate API call
    setTimeout(() => {
      alert("Sign Up Successful!");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                aria-label="Email address"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                aria-label="Password"
              />
              <PasswordStrength password={values.password} />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                aria-label="Confirm password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>

            <div className="form-group">
              <p>
                Already have an account?{" "}
                <button className="toggle" tabIndex={0} role="button" onClick={() => toggle()}>Log In</button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;

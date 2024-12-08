import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginFormValues } from "../types";

interface LoginFormProps {
  toggle: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggle }) => {
  const initialValues: LoginFormValues = {
    email: localStorage.getItem("rememberedEmail") || "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    // Handle remember me
    if (values.rememberMe) {
      localStorage.setItem("rememberedEmail", values.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    // Simulate API call
    setTimeout(() => {
      alert("Login Successful!");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <Field
                type="email"
                id="login-email"
                name="email"
                aria-label="Email address"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <Field
                type="password"
                id="login-password"
                name="password"
                aria-label="Password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group checkbox">
              <label>
                <Field
                  type="checkbox"
                  name="rememberMe"
                  aria-label="Remember me"
                />
                Remember Me
              </label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <div>
              <p>
                Don't have an account?{" "}
                <button className="toggle" tabIndex={0} role="button" onClick={() => toggle()}>Sign Up</button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

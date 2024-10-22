import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

import useUser from "../hooks/useUser";

export default function UserRegistration() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(50, "Name must be 50 characters or less")
          .required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        mobile: Yup.string()
          .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
          .required("Phone number is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm your password"),
      }),
      onSubmit: async (values) => {
        try {
          const user = await axios.post("/api/user/register", values);
          setUser({ ...user.data });
          navigate(`/${user.data.email}/restaurants`);
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <div className="flex justify-center items-center h-screen bg-green-800">
      <div className="bg-white rounded-lg shadow-lg flex">
        <div className="w-1/2 h-full p-0 bg-green-700 rounded-l-lg flex justify-center items-center">
          <div className="w-full h-full">
            <img
              alt="Food sharing illustration"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Seva Meal</h2>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Sign Up</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? (
                <div className="text-red-500">{errors.name}</div>
              ) : null}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <div className="text-red-500">{errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.mobile && errors.mobile ? (
                <div className="text-red-500">{errors.mobile}</div>
              ) : null}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className="text-red-500">{errors.confirmPassword}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 bg-light-green-700 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import useUser from "../hooks/useUser";

export default function UserLogin() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const user = await axios.post("/api/user/login", values);
        setUser({ ...user.data });
        navigate(`/${user.data.email}/restaurants`);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-green-800">
        <div className="bg-white rounded-lg shadow-lg flex">
          <div className="w-1/2 h-full p-0 bg-green-700 rounded-l-lg flex justify-center items-center">
            <div className="w-full h-full">
              <img
                src={""}
                alt="Food sharing illustration"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
          </div>

          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Seva Meal
            </h2>
            <h3 className="text-xl font-semibold text-green-700 mb-4">Login</h3>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105`}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              
              <button
                type="submit"
                className="w-full bg-green text-white py-2 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

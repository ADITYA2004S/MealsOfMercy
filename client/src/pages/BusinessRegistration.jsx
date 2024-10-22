import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function BusinessRegistration() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      manager: {
        name: "",
        mobile: "",
      },
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Hotel name must be at least 3 characters long")
        .max(50, "Hotel name can't exceed 50 characters")
        .required("Hotel name is required"),
      address: Yup.string()
        .min(10, "Hotel address must be at least 10 characters long")
        .max(100, "Hotel address can't exceed 100 characters")
        .required("Hotel address is required"),
      manager: Yup.object().shape({
        name: Yup.string()
          .min(2, "Manager name must be at least 2 characters long")
          .max(30, "Manager name can't exceed 30 characters")
          .required("Manager name is required"),
        mobile: Yup.string()
          .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
          .required("Phone number is required"),
      }),
    }),
    onSubmit: async (values) => {
      values.manager.mobile = parseInt(values.manager.mobile);

      try {
        await axios.post("/api/restaurant", values);
        navigate("/restaurant/item/add");
      } catch (error) {
        console.log("Error");
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6 md:mb-0 md:mr-10 w-64 h-64">
          <img
            src=""
            alt="Dummy Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Seva Meal</h2>
            <p className="text-xl text-gray-600 mt-2">Sign Up</p>
          </div>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Hotel Details
              </h3>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500">{formik.errors.name}</div>
                    ) : null}
                    <label
                      htmlFor="hotelName"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Hotel Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-red-500">
                        {formik.errors.address}
                      </div>
                    ) : null}
                    <label
                      htmlFor="address"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Hotel Address
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Manager Details
              </h3>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="manager.name"
                      name="manager.name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                      value={formik.values.manager.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.manager?.name &&
                    formik.errors.manager?.name ? (
                      <div className="text-red-500">
                        {formik.errors.manager.name}
                      </div>
                    ) : null}
                    <label
                      htmlFor="manager.name"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Manager Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="manager.mobile"
                      name="manager.mobile"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                      value={formik.values.manager.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.manager?.mobile &&
                    formik.errors.manager?.mobile ? (
                      <div className="text-red-500">
                        {formik.errors.manager.mobile}
                      </div>
                    ) : null}
                    <label
                      htmlFor="manager.mobile"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-light-green-700 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

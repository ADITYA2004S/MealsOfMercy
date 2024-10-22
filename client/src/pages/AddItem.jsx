import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import useRestaurant from "../hooks/useRestaurant";

export default function AddItem() {
  const { restaurantID } = useRestaurant();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      quantity: "",
      timing: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .required("Name is required"),
      description: Yup.string()
        .min(10, "Description must be at least 10 characters long")
        .required("Description is required"),
      quantity: Yup.number()
        .min(1, "Quantity must be at least 1")
        .required("Quantity is required"),
      timing: Yup.date()
        .required("Timing is required")
        .typeError("Please enter a valid date and time"),
    }),
    onSubmit: (values) => {
      try {
        axios.post(`/api/restaurant/${restaurantID}/item`, {
          items: [values],
        });

        navigate("/restaurant/item");
      } catch (error) {
        navigate("/error");
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Today’s Menu</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 flex space-x-10">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 border-2 border-gray-300 rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-gray-100">
            <img
              src="https://via.placeholder.com/150"
              alt="Dish Preview"
              className="w-48 h-48 object-cover"
            />
          </div>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Go Live
          </button>
        </div>

        {/* Input Form Section */}
        <form
          className="flex flex-col space-y-6 w-full max-w-lg"
          onSubmit={formik.handleSubmit}
        >
          {/* Dish Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Dish Name"
              className="border-2 border-gray-300 p-4 rounded-full w-full focus:outline-none focus:border-green-500 placeholder-gray-500 hover:placeholder-green-400"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-2">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          {/* Dish Description Input */}
          <div>
            <textarea
              name="description"
              placeholder="Enter Dish Description"
              className="border-2 border-gray-300 p-4 rounded-lg w-full h-40 focus:outline-none focus:border-green-500 placeholder-gray-500 hover:placeholder-green-400"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm mt-2">
                {formik.errors.description}
              </div>
            ) : null}
          </div>

          {/* Quantity and Timing Inputs */}
          <div className="flex space-x-6">
            <div className="w-full">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="border-2 border-gray-300 p-4 rounded-full w-full focus:outline-none focus:border-green-500 placeholder-gray-500 hover:placeholder-green-400"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.quantity}
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <input
                type="datetime-local"
                name="timing"
                placeholder="Timing"
                className="border-2 border-gray-300 p-4 rounded-full w-full focus:outline-none focus:border-green-500 placeholder-gray-500 hover:placeholder-green-400"
                value={formik.values.timing}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.timing && formik.errors.timing ? (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.timing}
                </div>
              ) : null}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <p className="mt-8 text-gray-500 cursor-pointer hover:underline">Edit</p>
    </div>
  );
}

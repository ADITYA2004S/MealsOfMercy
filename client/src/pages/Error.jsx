import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center transform transition duration-700 ease-in-out scale-95 animate-fade-in-scale">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          We&apos;re Sorry!
        </h2>

        <p className="text-gray-700 mb-6">
          But you have already booked a meal.
        </p>

        <p className="text-gray-700 mb-6">
          Please wait for some time before booking another meal.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

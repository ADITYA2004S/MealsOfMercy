import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center transform transition duration-700 ease-in-out scale-95 animate-fade-in-scale">
        <h2 className="text-6xl font-bold text-red-500 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Oops!</h3>
        <p className="text-gray-700 mb-6">
          The page you are looking for does not exist.
        </p>
        <p className="text-gray-700 mb-6">You might have taken a wrong turn.</p>

        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

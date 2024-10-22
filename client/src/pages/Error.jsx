import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-[10rem] font-bold text-red-600 leading-none">
          404
        </h1>
        <span className="text-2xl font-semibold text-gray-800">ERROR</span>
      </div>

      <h2 className="text-[4rem] font-bold mt-4">
        <span className="text-black">OH NO!</span>
        <span className="text-red-600"> But that&apos;s okay!</span>
      </h2>

      <p className="text-md mt-4 text-gray-500 text-center px-6 max-w-2xl">
        Even cool people lose their way online at some point, and today is your
        point. Don&apos;t worry, you&apos;ll find your way back.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 bg-red-600 text-white py-4 px-10 text-xl font-semibold rounded-lg hover:bg-red-500 transition"
      >
        Back to home
      </button>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Ticket() {
  const navigate = useNavigate();
  const { email, id } = useParams();

  const [item, setItem] = useState(undefined);
  const [timeLeft, setTimeLeft] = useState(null); // State to hold time left
  const [isExpired, setIsExpired] = useState(false); // State to track if ticket is expired

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/api/user/${email}/${id}`);

        response.data.timing = new Date();

        setItem(response.data);

        const ticketTime = new Date(response.data.timing);
        const expirationTime = new Date(
          ticketTime.getTime() + 6 * 60 * 60 * 1000
        ); // 6 hours
        setTimeLeft(expirationTime - new Date());

        if (new Date() >= expirationTime) {
          setIsExpired(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [email, id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1000);
      } else {
        clearInterval(interval);
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  if (item === undefined) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB").format(date);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
          Ticket Details
        </h2>

        <div className="mb-4 border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-600">ID:</span>
          <p className="text-gray-800">{item.id}</p>
        </div>

        <div className="mb-4 border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-600">Name:</span>
          <p className="text-gray-800">{item.name}</p>
        </div>

        <div className="mb-4 border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-600">Description:</span>
          <p className="text-gray-800">{item.description}</p>
        </div>

        <div className="mb-4 border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-600">Quantity:</span>
          <p className="text-gray-800">{item.quantity}</p>
        </div>

        <div className="mb-4 border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-600">Timing:</span>
          <p className="text-gray-800">{formatDate(item.timing)}</p>
        </div>

        <div className="mb-4 text-center">
          {isExpired ? (
            <p className="text-red-600 font-bold">TICKET EXPIRED</p>
          ) : (
            <p className="text-green-600 font-bold">TICKET IS LIVE</p>
          )}
        </div>

        <button
          onClick={() => navigate(`/${email}/restaurants`)}
          className="w-full bg-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Done
        </button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useUser from "../hooks/useUser";

export default function Item() {
  const navigate = useNavigate();
  const { email } = useUser();
  const { id } = useParams();

  const [item, setItem] = useState(undefined);

  const handleSelect = async () => {
    await axios.post(`/api/user/${email}/${item.id}`);
    navigate(`/${email}/ticket/${item.id}`);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const restaurant = await axios.get(`/api/restaurant/${id}/item`);
        setItem(restaurant.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [id]);

  if (item === undefined) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Food Menu</h2>
          <p className="text-lg text-gray-600 mt-2">
            Select your favorite food
          </p>
        </div>
        <div className="space-y-4">
          <div
            key={item.id}
            className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <img
              src={""}
              alt={item.name}
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col w-full">
              <h4 className="text-lg font-medium text-gray-800 max-w-full w-fit m-auto text-left">
                {item.name}
              </h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg bg-green transition-all"
              onClick={handleSelect}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

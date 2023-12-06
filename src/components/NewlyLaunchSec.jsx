import React from "react";
import { NewlyLaunchPlaces } from "../assets/constants/places.jsx";

function NewlyLaunchSec() {
  const Card = ({ place }) => (
    <div className="w-full md:w-[30%] border border-gray-500 pb-4 rounded-lg mb-2">
      <div>
        <img className="h-60 w-full" src={place.imageUrl} alt="" />
      </div>
      <div className="px-4 pt-2">
        <div>
          <div className="">
            <h1 className="text-lg font-bold leading-3">{place.name}</h1>
            <p className="text-gray-600">{place.builder}</p>
          </div>
          <div className="mt-2">
            <p>{place.bhk} BHK Apartment</p>
            <p className="text-gray-600 leading-3 mb-3">{place.address}</p>
          </div>
        </div>
        <div className="font-bold text-lg flex gap-6 items-center">
          <span className="mt-1">{place.price} cr</span>
          <button className="text-xl px-2 py-1 rounded-lg  bg-indigo-700   text-white text-red-700 mt-3 ">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-full md:w-5/6 mx-auto mt-20 p-6 items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl mr-4 font-bold mb-2">Newly Launch</h1>
        <p className="text-gray-400 text-lg">
          Launched in lowest price nearest you
        </p>
      </div>
      <div className="mt-5 bg-slate-100 flex justify-between flex-col md:flex-row">
        {NewlyLaunchPlaces.map((place) => (
          <Card place={place} />
        ))}
      </div>
    </div>
  );
}

export default NewlyLaunchSec;

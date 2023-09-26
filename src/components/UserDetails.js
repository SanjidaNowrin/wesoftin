import React from "react";
import { useParams } from "react-router";
import { useUserContext } from "../hooks/UserContext";
import Loading from "../shared/Loading";
import { Link } from "react-router-dom";
const UserDetails = () => {
  const { userId } = useParams();
  const { users, loading } = useUserContext();

  const matchingUser = users?.find(
    (user) => Number(user.id) === Number(userId)
  );
  const {
    firstName,
    lastName,
    birthDate,
    gender,
    age,
    address,
    weight,
    height,
    email,
    image,
    hair,
    eyeColor,
  } = matchingUser || {};
  // loading set
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mt-10">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-2 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {firstName} {lastName}
        </h5>
        <div className="flex justify-between">
          <p className="mb-3 text-slate-500 text-sm font-medium">
            <i className="fa-regular fa-envelope me-2"></i>
            {email}
          </p>
          <p className="mb-3 text-slate-500 text-sm font-medium">
            <i className="fa-solid fa-cake-candles me-2"></i>
            {birthDate}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="mb-3 text-slate-700 text-sm font-medium">
            Gender: <span className="text-slate-500">{gender}</span>
          </p>
          <p className="mb-3 text-slate-700 text-sm font-medium">
            Age: <span className="text-slate-500">{age}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="mb-3 text-slate-700 text-sm font-medium">
            Height: <span className="text-slate-500">{height}</span>
          </p>
          <p className="mb-3 ms-3 text-slate-700 text-sm font-medium">
            Weight: <span className="text-slate-500">{weight}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="mb-3 text-slate-700 text-sm font-medium">
            Eye Color: <span className="text-slate-500"> {eyeColor}</span>
          </p>
          <p className="mb-3 ms-5 text-slate-700 text-sm font-medium">
            Hair Color: <span className="text-slate-500"> {hair.color}</span>
          </p>
        </div>
        <p className="mb-3  text-slate-700 text-sm font-medium">
          Address:{" "}
          <span className="text-slate-500">
            {address?.address} &#59; {address?.city} &#59; {address?.postalCode}
            &#59; {address?.state}
          </span>
        </p>
        <Link to="/">
          <button
            type="button"
            className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            <i className="fa-solid fa-backward"></i> Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;

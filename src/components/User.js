import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { firstName, lastName, image, email, id } = user || {};
  console.log(user);
  return (
    <Link to={`/user/${id}`}>
      <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
        <div className="p-4 sm:p-2 rounded-t-lg">
          <img
            className="w-full h-auto rounded-lg"
            src={image}
            alt="UserImage"
          />
        </div>
        <div className="text-center mb-4">
          <h2 className="font-bold mt-4">
            {firstName} {lastName}
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            <i className="fa-solid fa-envelope"></i> {email}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default User;

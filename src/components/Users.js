import React, { useState } from "react";
import { useUserContext } from "../hooks/UserContext";
import User from "./User";
import Loading from "../shared/Loading";

function Users() {
  const { users, loading } = useUserContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }
  // loading set
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="mt-6 text-3xl font-semibold text-center">All Users</h1>

      <div className="container p-3 mx-auto">
        <div className="text-center">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-1/2 p-2 mx-auto mt-4 mb-4 border rounded-md shadow-md sm:w-1/3"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;

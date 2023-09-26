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
      <h1 className="text-3xl text-center font-semibold mt-6">All Users</h1>

      <div className="container mx-auto p-3">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full p-2 border rounded-md shadow-md mb-4 mt-4"
        />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;

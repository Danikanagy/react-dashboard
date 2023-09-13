import { useContext } from "react";
import { UserContext, UserDispatchContext } from "./UserContext";

const Profile = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);
  let handleEdit = () => {
    if (event.target.value == "edit") {
      return console.log("true");
    } else return console.log("false");
  };

  if (!user) {
    return <div>User data can't be displayed</div>;
  }

  return (
    <div className="profile-container">
      <h2>My user</h2>
      <div className="profile-data">
        <p>
          First name:{" "}
          <input
            text="text"
            value={user.firstName}
            onChange={(event) => {
              const newUser = {
                ...user,
                firstName: event.target.value,
              };

              setUser(newUser);
            }}
          />
          <br />
          Last name: {user.lastName}
          <br />
          Occupation: {user.occupation}
        </p>
        <select
          onChange={(event) => {
            handleEdit(event);
          }}>
          <option value="edit">Edit</option>
          <option value="view">View</option>
        </select>
      </div>
    </div>
  );
};

export default Profile;

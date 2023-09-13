import { useContext } from "react";
import { UserContext, SetColor } from "./UserContext";

const TopNav = () => {
  const user = useContext(UserContext);
  const [themeColor, setColor] = useContext(SetColor);
  return (
    <div className="top-nav-container">
      <div>
        <label>Choose Theme:</label>
        <select
          style={{ backgroundColor: themeColor }}
          onChange={(event) => {
            setColor(event.target.value);
          }}>
          <option value="white">White✅</option>
          <option value="blue">Blue✅</option>
          <option value="green">Green✅</option>
          <option value="gray">Dark✅</option>
        </select>
      </div>
      <div className="user-container">
        {user != null
          ? `${user.firstName} ${user.lastName}`
          : "No signed in user"}
      </div>
    </div>
  );
};

export default TopNav;

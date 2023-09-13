import SideNav from "./SideNav";
import Main from "./Main";
import { UserContext, UserDispatchContext, SetColor } from "./UserContext";
import { useState } from "react";

const Dashboard = () => {
  const [currentUser, setUser] = useState({
    id: "alskdasdalskdjl",
    firstName: "Barack",
    lastName: "Obama",
    occupation: "ex-president",
  });
  const [color, setColor] = useState("white");

  return (
    <div className="dashboard-container" style={{ backgroundColor: color }}>
      <SideNav />
      <SetColor.Provider value={[color, setColor]}>
        <UserContext.Provider value={currentUser}>
          <UserDispatchContext.Provider value={setUser}>
            <Main />
          </UserDispatchContext.Provider>
        </UserContext.Provider>
      </SetColor.Provider>
    </div>
  );
};

export default Dashboard;

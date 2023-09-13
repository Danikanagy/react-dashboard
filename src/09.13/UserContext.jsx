import { createContext } from "react";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);
const SetColor = createContext("white");

export { UserContext, UserDispatchContext, SetColor };

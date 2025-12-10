import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  const [username, setUsername] = useState("Guest User");
  const [counter, setCounter] = useState(0);

  return (
    <AppContext.Provider value={{ username, setUsername, counter, setCounter }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

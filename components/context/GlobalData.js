import { createContext, useReducer, useContext } from "react";
import dataReducer from "./DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //instantiate the basic dispatcher and data, using a reducer I created

  const [data, dispatch] = useReducer(dataReducer, {
    room: null,
    rooms: [],
    chatLog: [],
    username: null,
  });

  //this is the actual provider of the data this allows us to access the data quickly and
  // export what data from the context we actually want and need, so we don't need to export all the data cause something are context background
  const provider = {
    username: data.username,
    room: data.room,
    rooms: data.rooms,
    chatLog: data.chatLog,
    dispatch: dispatch,
  };

  //return the context with our data and reducer while passing down the children
  return (
    <DataContext.Provider value={provider}>{children}</DataContext.Provider>
  );
};

//this just makes it easier to access the context without having to import useContext in another file
export function useDataContext() {
  return useContext(DataContext);
}

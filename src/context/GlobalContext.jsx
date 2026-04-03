import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props)=>{
    const [activator, setActivator]= useState(false); // this state variable will control the behavior of the toggle switch and the navbar
    return(
        <GlobalContext.Provider value={{activator, setActivator}}>{props.children}</GlobalContext.Provider>
    )
}

export default GlobalContextProvider;

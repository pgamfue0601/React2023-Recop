import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider(props){
    const [login, setLogin] = useState(null);
    const value = {login, setLogin};

    return(
        <LoginContext.Provider value={value}>
            {props.children}
        </LoginContext.Provider>
    )
}
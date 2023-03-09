import { createContext, useState } from "react";


export const LoginContext = createContext();

export function LoginContextProvider(props){
    const [usuario, setUsuario] = useState(null);

    const value = {usuario, setUsuario};

    return(
        <LoginContext.Provider value={value}>
            {props.children}
        </LoginContext.Provider>
    )
}
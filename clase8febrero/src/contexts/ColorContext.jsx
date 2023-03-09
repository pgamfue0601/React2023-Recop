import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorContextProvider(props) {
    const [login, setLogin] = useState(false);

    if(login){
        document.body.style.setProperty("background-color","grey");
        document.querySelector(".botonsito").innerHTML = "Cerrar sesión";
    }else{
        document.body.style.setProperty("background-color", "white");
        document.querySelector(".botonsito").innerHTML = "Login";
    }

    const value = {login, setLogin};

    return(
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    )
}
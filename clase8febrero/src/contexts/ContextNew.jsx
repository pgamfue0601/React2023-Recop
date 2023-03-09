import { createContext, useState } from "react";

export const ContextNew = createContext();

export function ContextNewProvider(props){
    const miUsuario = {
        DNI: "",
        nombre: "",
        edad: 0,
    }
    
    const [usuario, setUsuario] = useState(null);
    const value = {usuario, setUsuario};

    return(
        <ContextNew.Provider value={value}>
            {props.children}
        </ContextNew.Provider>
    )
}
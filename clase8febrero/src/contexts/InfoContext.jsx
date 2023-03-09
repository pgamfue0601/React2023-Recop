import { createContext, useContext, useState } from "react";
// 1.- Importar la función createContext que permite crear el contexto.

export const InfoContext = createContext();
// 2.- Creamos el provider que permite envolver a los componentes a los que quiero mandar el contexto.

export function InfoContextProvider(props) {
    // Aquí pondremos todo aquello que queremos que se vea en todos los componentes.
    const [edad, setEdad]=useState(0);
    const value = {edad, setEdad};

// 3.- Debemos de exportar un componente de tipo provider.
    return (
        <InfoContext.Provider value={value}>
            {props.children}
        </InfoContext.Provider>
    )

// 4.- Debemos debemos exportar el contexto (InfoContext) y el provider con export
}

// 5.- Para agilizar, creamos un hook personalizado con mi contexto:
export function useInfoContext() {
    const context = useContext(InfoContext);
    return context;
}
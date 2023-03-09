import React from 'react';
import { useForm } from "react-hook-form";
import { validarEdad } from './misValidaciones';

const FormularioDatos = () => {
    const { register, handleSubmit, formState:{errors}, watch } = useForm({
        defaultValues: {
            nombre: "Pablo",
        }
    });
    const miSubmit = (data) =>{
        console.log(data);
    }

    const tieneCarnet = watch("carnet");

  return (
    <div>
        <form onSubmit={handleSubmit(miSubmit)}>
            <div>
                <label>Nombre:</label>
                <input type="text" {...register("nombre", { required: true, maxLength:15 } )} />
                {errors.nombre?.type === "required" && <p style={{color:"red", fontSize:"8pt"}}>Error, este campo es obligatorio</p>}
                {errors.nombre?.type === "maxLength" && <p style={{color:"red"}}>¡No puedes añadir más de 15 carácteres!</p>}
            </div>
            <div>
                <label>Apellidos:</label>
                <input type="text" {...register("apellidos")} />
            </div>
            <div>
                <label>Edad:</label>
                <input type="text" {...register("edad", { required: true, validate: validarEdad })} />
                {errors.edad && <p>Introduzca una edad válida</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register("email", {required:true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g })} />
                {errors.email?.type === "pattern" && <p>Email incorrecto</p>}
            </div>
            <div>
                <label>Código Postal:</label>
                <input type="text" {...register("codigopostal", { required: true, minLength:5, maxLength:5, pattern:/^\d{5}$/i})} />
                {errors.codigopostal?.type === "minLength" && <p style={{color:"red"}}>Código Postal inválido.</p>}
                {errors.codigopostal?.type === "maxLength" && <p style={{color:"red"}}>Código Postal inválido.</p>}
                {errors.codigopostal?.type === "pattern" && <p style={{color:"red"}}>Código Postal inválido.</p>}
            </div>
            <div>
                <select {...register("selector")} >
                    <option value="andalucia">Andalucia</option>
                    <option value="no_andalucia">Fuera de Andalucia</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Enviar" />
            </div>
            <label>Uso del Watch: {watch("nombre")}</label>
            <div>
                <label>¿Dispone de carnet de conducir?</label>
                <input type="checkbox" {...register("carnet")} />
            </div>
            {tieneCarnet && (
            <div>
                <label>Introduzca fecha de expedición:</label>
                <input type="text" {...register("fechaexp")} />
            </div>
            )}
        </form>
    </div>
  )
}

export default FormularioDatos
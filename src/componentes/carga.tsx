import React, { createRef, FormEvent } from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';


export const FormCarga : React.FC = () => {

    let {register,handleSubmit} = useForm()

    let cargarDatos: SubmitHandler<{archivo : FileList}> = async (data, event: React.BaseSyntheticEvent) => {
        let datos = await data.archivo.item(0).arrayBuffer();
        let textDecoder = new TextDecoder()
        console.log(textDecoder.decode(datos))
    }

    return <form onSubmit={handleSubmit(cargarDatos)} encType="multipart/form-data">
        <h3>Importar JSON</h3>
        <input type="file" accept="application/json" {...register("archivo")} />
        <button>Subir</button>
    </form>
}
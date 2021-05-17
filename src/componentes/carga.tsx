import axios from 'axios';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

export const FormCarga : React.FC = () => {

    const [subida, setSubida] = useState("");

    let {register,handleSubmit} = useForm()

    let cargarDatos: SubmitHandler<{archivo : FileList}> = async (data, event: React.BaseSyntheticEvent) => {
        let datos = await data.archivo.item(0).arrayBuffer();
        
        let textDecoder = new TextDecoder()
        let json = JSON.parse(textDecoder.decode(datos))

        json.instrumentos.map(async (i) => {
            try{
                await axios.post('http://localhost:8080/instrumentos', i)
                setSubida('Exitosa')
                return;
            }catch(error){
                setSubida('Fallida')
            }
            
        })

    }

    return <form onSubmit={handleSubmit(cargarDatos)} encType="multipart/form-data">
        <h3>Importar JSON</h3>
        <input type="file" accept="application/json" {...register("archivo")} />
        <h5>{subida}</h5>
        <button>Subir</button>
    </form>
}
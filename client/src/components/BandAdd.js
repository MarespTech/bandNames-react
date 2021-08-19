import React, { useState, useContext } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {

    const [ name, setName ] = useState("");
    const { socket } = useContext( SocketContext );
    

    const onChange = e => {
        setName(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if(name.trim() !== "") {
            socket.emit('add-band', name);
            setName("");
        }
    }

    return (
        <>
            <h3>Agregar nueva banda</h3>  

            <form
                onSubmit={onSubmit}
            >
                <input 
                    className="form-control"
                    placeholder="Ingrese nombre de banda"
                    value={name}
                    onChange={onChange}
                />
            </form>
        </>
    )
}

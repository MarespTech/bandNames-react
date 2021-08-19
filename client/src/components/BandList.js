import React, { useState, useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandList = () => {

    const [bands, setBands] = useState([]);
    const { socket } = useContext( SocketContext );

    useEffect( () => {
        socket.on('current-bands', bands => {
            setBands(bands);
        });
        
        return () => socket.off('current-bands');
    }, [socket]);
    
    const changeName = ( e, id ) => {
        const newName = e.target.value;

        setBands( bands => bands.map( band => {
            if( band.id === id) {
                band.name = newName;    
            }

            return band;
        }));
    }

    const onBlurOff = (id, name) => {
        socket.emit('change-band-name', {id, name});
    }

    const vote = id => {
        socket.emit('vote-band', id);
    }

    const removeBand = id => {
        socket.emit('remove-band', id);
    }

    const crearRows = () => {
        return (
            bands.map( band => (
                <tr key={band.id}>
                    <td>
                        <button 
                            className="btn btn-primary"
                            onClick={() => vote( band.id )}
                        > +1 </button>
                    </td>
                    <td>
                        <input 
                            className="form-control"
                            value={ band.name }
                            onChange={ (e) => changeName(e, band.id) }
                            onBlur = { e => onBlurOff(band.id, band.name)}
                        />
                    </td>
                    <td><h3> { band.votes } </h3></td>
                    <td>
                        <button 
                            onClick={ () =>  removeBand(band.id)}
                            className="btn btn-danger"
                        >
                            Borrar
                        </button>
                    </td>
                </tr>
            ))
        )
    }
    
    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {crearRows()}
                </tbody>
            </table>
        </>
    )
}

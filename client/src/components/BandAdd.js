import React from 'react'

export const BandAdd = () => {
    return (
        <>
            <h3>Agregar nueva banda</h3>  

            <form>
                <input 
                    className="form-control"
                    placeholder="Ingrese nombre de banda"
                />
            </form>
        </>
    )
}

import React from 'react'

function Order({ id, nombre, image }) {

    return (
        <div>
            
                <p>{id}</p>
                <p>{nombre}</p>  
                <img src={image}/>
            
        </div>
    )
}

export default Order
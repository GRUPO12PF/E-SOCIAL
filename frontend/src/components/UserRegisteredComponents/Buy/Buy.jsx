import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
    return (
        <div>
            <Link to='/checkout'>
                <button>COMPRAR</button>
            </Link>
        </div>
    )
}

export default Buy
import React from 'react'
import spinner from '../assets/loader.gif'

const Loader = () => {
    return (
        <div>
            <img 
            style={{ width: '50%', height: '50%' }} 
            src={spinner} alt={spinner} />
        </div>
    )
}

export default Loader

import React, { useState } from 'react';

const Even = ({ user, handleClick, handleChange, handleSubmit }) => {
    const [count, setCount] = useState("0");
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={count} onChange={() => handleChange()}/>
                <button onClick={() => handleClick(user.id)}></button>
            </form>
        </div>
    );
}
 
export default Even;
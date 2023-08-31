import React, { useContext, useState } from 'react';
import { userContext } from '../contexts/userContext';

// اینجا در فانکشنال کامپوننت برای تست رویداد آنچنج
// و رویداد آنکلیک
// بوسیله زیر عمل میکنیم
// یک پراپرتی پاس میدهیم
const Form = ({ user, handleChange, handleClick, handleSubmit }) => {
    const [count, setCount] = useState("1");
    const [unit, setUnit] = useState("1");
//     const name = useContext(userContext);
// console.log(name)
    return (
        <div>
            <form onSubmit={() => handleSubmit(setUnit(unit+1))}>
                ss
            {/* <h1>{name}</h1> */}
                <input 
                    className='myInput' 
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <input 
                    className='myInput2' 
                    onChange={handleChange}
                />
                <input
                    className="myInput3"
                    value={unit} 
                    />
                {/* <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.age}</p> */}
                <button onClick={() => handleClick(user.id)}></button>
            </form>
        </div>
    );
}
 
export default Form;
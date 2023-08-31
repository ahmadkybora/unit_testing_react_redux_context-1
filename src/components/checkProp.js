import PropTypes from 'prop-types';
import React from 'react';
import { userContext } from '../contexts/userContext';
import Form from './form';

const CheckProp = (props) => {
    // const name= 'nancy'
    return (
    <div className='myUsers'>   
    {/* <userContext.Provider value={name}>
        <Form />
    </userContext.Provider> */}
            {(props.users.length === 3) && 
            props.users.map((user, index) => (
                <div className="myUser" key={index}>
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                </div>
            ))}
    </div>);
}
 
CheckProp.propTypes = {
    // این متد برای اعتبار سنجی پراپرتی در صورتی است که 
    // یک عدد باشد
    success: PropTypes.number.isRequired,
    // این متد برای اعتبار سنجی پراپرتی در صورتی است که 
    // یک رشته باشد
    user: PropTypes.string.isRequired,
    // تست یک ارایه
    users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
        })
    ),
}

export default CheckProp;
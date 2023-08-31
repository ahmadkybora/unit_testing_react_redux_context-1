import React from 'react';
import PropTypes from 'prop-types';

const FuncLoop = (props) => {
    return (
        <div>
            {(props.users.length === 3 && (
                props.users.map((user, index) => (
                    <div className='loop' key={index}>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                    </div>
                ))
            ))}
        </div>
    );
}
// بوسیله متد زیر پراپرتی ها اعتبار سنجی میشوند
FuncLoop.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired
        })
    )
}
export default FuncLoop;
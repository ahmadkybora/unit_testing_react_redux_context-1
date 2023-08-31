import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loop extends Component {
    render() { 
        return (
            <div>
                <h1></h1>
                {(this.props.users.length === 3) &&(
                    this.props.users.map((user, index)=> (
                        <div className="loop" key={index}>
                            <p>{user.first_name}</p>
                            <p>{user.last_name}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

Loop.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
        })
    ),
}

export default Loop;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Condition extends Component {
    state = {
        success: true
    }
    render() {
        return (
            <div>
                {(this.state.success) && (
                    <div>
                        <p>hello</p>
                    </div>
                )}
            </div>
        );
    }
}

Condition.propTypes = {
    success: PropTypes.bool
}

export default Condition;
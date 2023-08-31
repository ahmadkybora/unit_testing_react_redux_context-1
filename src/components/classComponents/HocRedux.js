import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/userAction';

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    }
}

const mapDispacthToProps = dispatch => {
    return {
        getUsers: () => {
          dispatch({ type: "GET_USERS" })
      },   
    }
};

class HocRedux extends Component {
    render() { 
        return <div></div>;
    }
}
 
export default connect(mapStateToProps, {getUsers})(HocRedux);

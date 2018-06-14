import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class U_ser extends Component {
    static get propTypes() {
        return {
            user: PropTypes.object,
            getAllUsers: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.getAllUsers = this.props.getAllUsers;
    }


    render() {
        return (<tr>
            <td>{this.user._id || this.user.id}</td>
            <td>{this.user.name}</td>

        </tr>)
    }
}

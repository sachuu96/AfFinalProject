import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import SC from './SC';

class SCs extends Component {
    static get propTypes() {
        return {
            sampleCenter: PropTypes.array
        }
    }

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }


    render(){
        this.sampleCenter = this.props.sampleCenter;
        return (
            <div>
                <table width="100%" className="table table-striped table-bordered table-hover"
                       id="dataTables-example">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sample Center Type</th>
                        <th>Sample Center Name</th>
                        <th>Incharge</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Contact1</th>
                        <th>Contact2</th>

                    </tr>
                    </thead>
                    <tbody>


                    {
                        this.sampleCenter.map(CenterRequest => {
                            return <SC key={CenterRequest._id} CenterRequest={CenterRequest} getAllCenterReqs={() => this.props.getAllCenterReqs()}/>
                        })
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default SCs;

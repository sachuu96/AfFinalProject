import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import LT from './LT';

class LTs extends Component {
    static get propTypes() {
        return {
            LabTestName: PropTypes.array
        }
    }

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }


    render(){
        this.LabTestName = this.props.LabTestName;
        return (
            <div>
                <table width="100%" className="table table-striped table-bordered table-hover"
                       id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Lab Test ID</th>
                        <th>Laboratory:</th>
                        <th>Category:</th>
                        <th>Sub Category:</th>
                        <th>Test Name:</th>


                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.LabTestName.map(TestNameRequest => {
                            return <LT key={TestNameRequest._id} TestNameRequest={TestNameRequest} getAllTestNameReqs={() => this.props.getAllTestNameReqs()}/>
                        })
                    }




                    </tbody>
                </table>
            </div>
        );
    }
}

export default LTs;

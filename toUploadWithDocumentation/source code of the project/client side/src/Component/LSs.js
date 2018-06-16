import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import LS from './LS';

class LSs extends Component {
    static get propTypes() {
        return {
            sampleCenType: PropTypes.array
        }
    }

    constructor(props) {
        super(props);

        }

    componentWillReceiveProps(props) {
        this.setState(props)
    }


    render(){
        this.sampleCenType = this.props.sampleCenType;
        return (
            <div>
                <table width="100%" className="table table-striped table-bordered table-hover"
                       id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Sample Center Type ID</th>
                        <th>Sample Center Type Name</th>


                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.sampleCenType.map(TypeRequest => {
                            return <LS key={TypeRequest._id} TypeRequest={TypeRequest} getAllTypeReqs={() => this.props.getAllTypeReqs()}/>
                        })
                    }




                    </tbody>
                </table>
            </div>
        );
    }
}

export default LSs;

import React, { Component } from 'react';

import propTypes from 'prop-types';

class viewLabs extends Component{
    static get propTypes(){
        labs :propTypes.array;

    }
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props){
        this.setState(props)
        console.log('will receive called');
    }




    render(){
        this.labs=this.props.allLabs;
        return (
            <div>


                <table width="100%" className="table table-striped  table-hover" id="dataTables-example">
                    <thead>
                    <tr class="info">
                        <th>Lab ID</th>
                        <th>Lab Name</th>
                        <th>Lab Type</th>
                        <th>Department</th>
                        <th>Count</th>
                        <th>Lab Incharge</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Contact 1</th>
                        <th>Contact 2</th>

                    </tr>
                    </thead>
                    <tbody>
                        {this.labs.map(item=>

                            <tr className="odd gradeX active" key ={item._id}>
                                <td>{item._id}</td>
                                <td>{item.lab_name}</td>
                                <td>{item.lab_type}</td>
                                <td>{item.department}</td>
                                <td>{item.count}</td>
                                <td>{item.incharge}</td>
                                <td>{item.location}</td>
                                <td>{item.email}</td>
                                <td>{item.contact_1}</td>
                                <td>{item.contact_2}</td>

                            </tr>
                        )}

                    </tbody>
                </table>


            </div>
        );
    }
}

export default viewLabs;
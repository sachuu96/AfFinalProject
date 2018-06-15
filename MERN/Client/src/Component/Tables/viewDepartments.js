import React, { Component } from 'react';

import propTypes from 'prop-types';

class viewDepartments extends Component{
    static get propTypes(){
        departments :propTypes.array;

    }
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props){
        this.setState(props)
        console.log('will receive called');
    }




    render(){
        this.departments=this.props.allDepartment;
        console.log(this.props.allDepartments+"dashdkj");
        return (
            <div>
                <table width="100%" className="table table-striped  table-hover" id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.departments.map(item=>

                        <tr className="odd gradeX" key ={item._id}>
                            <td>{item._id}</td>
                            <td>{item.department_name}</td>
                        </tr>
                    )}


                    </tbody>
                </table>


            </div>
        );
    }
}

export default viewDepartments;
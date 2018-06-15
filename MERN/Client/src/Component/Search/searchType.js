import React, { Component } from 'react';

import propTypes from 'prop-types';

class searchType extends Component{
    static get propTypes(){
        types :propTypes.array;

    }
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props){
        this.setState(props)
        console.log('will receive called');
    }




    render(){
        this.types=this.props.allTypes;
        return (
            <div>
                <table width="100%" className="table table-striped  table-hover" id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Laboratory ID</th>
                        <th>Laboratory Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.types.map(item=>

                        <tr className="odd gradeX" key ={item._id}>
                            <td>{item._id}</td>
                            <td>{item.lab_type_name}</td>
                            <td>
                                <button type="button" className="btn btn-primary">Edit</button>
                            </td>
                        </tr>
                    )}


                    </tbody>
                </table>


            </div>
        );
    }
}

export default searchType;
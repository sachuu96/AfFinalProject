import React, { Component } from 'react';

import propTypes from 'prop-types';

class viewLabTypes extends Component{
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

    edit(edit,update,name){
        edit.classList.add("hide");
        update.classList.add("show");
        name.contentEditable="true";
    }
    update(){

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
                            <td id="id">{item._id}</td>
                            <td id="name">{item.lab_type_name}</td>
                            <td>
                                <button id="edit" type="button"  onClick={()=>{this.edit(document.getElementById('edit'),document.getElementById('update'),document.getElementById('name'))}} className="btn btn-primary">Edit</button>
                                <button id="update" type="button"  className="btn btn-danger hide ">Update</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                    )}


                    </tbody>
                </table>


            </div>
        );
    }
}

export default viewLabTypes;
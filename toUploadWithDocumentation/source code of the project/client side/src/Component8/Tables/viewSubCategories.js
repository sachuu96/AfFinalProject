import React, { Component } from 'react';

import propTypes from 'prop-types';
import axios from "axios/index";

class viewSubCategories extends Component{
    static get propTypes(){
        return {
            types: propTypes.array,
            getAllSub:propTypes.func
        }
    }
    constructor(props){
        super(props);
    }

    update(id,name){
        var updatedName = prompt("please enter updated test sub category name",name);
        axios.put('http://localhost:8081/subcategory/'+id,{subcategoryName:updatedName}).then(results => {
            if(results.status==200){
                this.getAllSub();
            }
        })
    }
    delete(id){
        axios.delete('http://localhost:8081/subcategory/' +id).then(results =>{
            if(results.status == 200){
                this.getAllSub();
            }
        })
    }
    componentWillReceiveProps(props){
        this.setState(props)
        console.log('will receive called');
    }

    render(){
        this.types=this.props.allsubcategory;
        return (
            <div>
                <table width="100%" className="table table-striped  table-hover" id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Sub Category ID</th>
                        <th>Sub Category Name</th>

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.types.map(item=>

                        <tr className="odd gradeX" key ={item._id}>
                            <td>{item._id}</td>
                            <td>{item.subcategoryName}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={(e) => this.update(item._id,item.subcategoryName)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={(e) => this.delete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default viewSubCategories;
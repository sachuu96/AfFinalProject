import React, { Component } from 'react';

import propTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class viewTestNames extends Component{
    static get propTypes(){
        types:propTypes.array
            selected:propTypes.object
    }
    constructor(props){
        super(props);
        this.state ={
            access: false


    }}
    componentWillReceiveProps(props){
        this.setState(props)
        console.log('will receive called');
    }
    onClick(id){


        axios.get('http://localhost:8081/test/'+id).then(data =>{

            this.selected = data.data.data;

            this.setState({access: true});
        }).catch(err =>{
            alert('Some thing went wrong :)');
        })

    }

    render(){
        if(this.state.access){
            return <Redirect to={{
                pathname: '/testnameeditor',
                state: {referrer: this.selected}
            }}/>
        }
        this.types=this.props.allTypes;
        return(
            <div>
                <table width="100%" className="table table-striped  table-hover" id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Test ID</th>
                        <th>Test Name</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.types.map(item=>

                        <tr className="odd gradeX" key ={item._id}>
                            <td>{item._id}</td>
                            <td>{item.testname}</td>
                            <td>{item.category}</td>
                            <td>{item. subcategory}</td>
                            <td>
                                <button onClick={id =>{this.onClick(item._id)} } type="button" className="btn btn-primary">Edit</button>
                            </td>
                        </tr>


                    )}



                    </tbody>
                </table>
            </div>
        )
    }
}

export default  viewTestNames;

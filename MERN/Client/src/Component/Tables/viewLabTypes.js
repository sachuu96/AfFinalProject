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

   /*
     onClick={()=>{this.edit(document.getElementById('id'),document.getElementById('edit'),document.getElementById('update'),document.getElementById('dataTables-example'))}}
   edit(id,edit,update,name){


        var tbl = name;

        if(tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {


                for (var j = 0; j < tbl.rows[i].cells.length; j++)


                if(tbl.rows[i].cells[j] == id){
                    console.log(tbl.rows[i].cells[j]);
                    tbl.rows[i].cells[j].classList.add("hide");
                    tbl.rows[i].cells[j].classList.add("show");
                }

            }

        }

    }

    update(){

    }
*/

    render(){
        this.types=this.props.allTypes;
        return (
            <div>
                <table  width="100%" className="table table-striped  table-hover" id="dataTables-example">
                    <thead>
                    <tr class="info">
                        <th>Laboratory ID</th>
                        <th>Laboratory Name</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.types.map(item=>

                        <tr className="odd gradeX active" key ={item._id}>
                            <td id="id">{item._id}</td>
                            <td id="name">{item.lab_type_name}</td>

                        </tr>
                    )}


                    </tbody>
                </table>


            </div>
        );
    }
}

export default viewLabTypes;
import React, { Component } from 'react';
import axios from 'axios';
import addCenterType from './addCenterType';

class addCenterTypeParent extends Component {
    constructor(props){
        super(props);

        this.state={
            typeName:"",



        };
        this.onSubmit=this.onSubmit.bind(this);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }


    addSampleType=function(event){
        event.preventDefault();
        const typeName = event.target.elements.typeName.value;


        axios.post('http://localhost:8081/sample_center_types',
            {
                typeName:typeName,


            }).then(result => {
            if(result.status == 200) {
                //this.getAllUsers();

                alert("added new type request!")
                window.location.reload(true);

            }
        }).catch(err => {
            alert(err);
        })

    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();

    }

    render() {
        return (

            <div>
                <addCenterType addSampleType={this.addSampleType}/>
            </div>

        );
    }
}

export default addCenterTypeParent;

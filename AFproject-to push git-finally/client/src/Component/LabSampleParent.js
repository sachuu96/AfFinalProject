import React, {Component} from 'react';
import LabSample from './LabSample';
import axios from 'axios';

class LabTestParent extends Component{
    constructor(props){
        super(props);


        this.state={
            typeName:""
        };

        //this.onSubmit=this.onSubmit.bind(this);
    }

    addSampleCenType = function (event) {
        event.preventDefault();
        const typeName = event.target.elements.typeName.value;

        console.log(typeName);
        axios.post('http://localhost:8081/sample_center_types', {
            typeName:typeName
        }).then(result => {
            if(result.status==200){
                alert("Added Center details");

            }    }).catch(err => {
            alert(err);
        })

    }

    render(){
        return(
            <div>
                <p>This is to add</p>
                <LabSample addSampleCenType={this.addSampleCenType}/>
            </div>
        )
    }
}

export default LabTestParent;

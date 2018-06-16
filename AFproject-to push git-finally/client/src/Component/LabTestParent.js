import React, {Component} from 'react';
import LabTest from './LabTest';
import axios from 'axios';

class LabTestParent extends Component{
    constructor(props){
        super(props);


        this.state={
            testName:""
        };

        //this.onSubmit=this.onSubmit.bind(this);
    }

addLabTest = function (event) {
    event.preventDefault();
    const testName = event.target.elements.testName.value;

    console.log(testName);
    axios.post('http://localhost:8081/sample_center_types', {
        typeName:testName
    }).then(result => {
        if(result.status==200){
            alert("Added Lab details");

        }    }).catch(err => {
            alert(err);
    })

}

render(){
        return(
            <div>

                <LabTest addLabTest={this.addLabTest}/>
            </div>
        )
}
}

export default LabTestParent;

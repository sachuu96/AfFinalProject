import React, {Component} from 'react';
import SampleCenters from './SampleCenters';
import axios from 'axios';

class SampleCentersParent extends Component{
    constructor(props){
        super(props);


        this.state={
            typeName:"",
            centerName: "",
            incharge: "",
            locn: "",
            emailaddress: "",
            cont1: "",
            cont2: ""
        };

        //this.onSubmit=this.onSubmit.bind(this);
    }

    addSampleCenter = function (event) {
        event.preventDefault();
        const typeName = event.target.elements.typeName.value;
        const centerName = event.target.elements.centerName.value;
        const incharge = event.target.elements.incharge.value;
        const locn = event.target.elements.locn.value;
        const emailaddress = event.target.elements.emailaddress.value;
        const cont1 = event.target.elements.cont1.value;
        const cont2 = event.target.elements.cont2.value;

        //console.log(typeName);
        axios.post('http://localhost:8081/sample_center', {
            typeName:typeName,
            centerName:centerName,
            incharge:incharge,
            locn:locn,
            emailaddress:emailaddress,
            cont1:cont1,
            cont2:cont2
        }).then(result => {
            if(result.status===200){
                alert("Added Center details");

            }    }).catch(err => {
            alert(err);
        })

    }

    render(){
        return(
            <div>

                <SampleCenters addSampleCenter={this.addSampleCenter}/>
            </div>
        )
    }
}

export default SampleCentersParent;

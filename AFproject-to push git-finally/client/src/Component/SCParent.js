import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';
import axios from 'axios';
import SCs from './SCs';
//import addCenterTypeParent from './addCenterTypeParent';
import Nav from '../components/Nav';


class SCParent extends Component{

    constructor(props){
        super(props)
        this.state={
            sampleCenter: [],
            sampleTypes: []

        }
        //this.addSampleType= this.props.addSampleCenType;

        this.getAllCenterReqs();
    }

    componentDidMount(){
        axios.get('http://localhost:8081/sample_center_types/getType').then( res => {
            this.setState({
                sampleTypes: res.data.data
            });
        })
    }

    getAllCenterReqs() {
        axios.get('http://localhost:8081/sample_center').then(res=>{
            console.log(res);
            this.setState({
                sampleCenter:res.data.data
            });
            console.log(this.state.sampleCenter);
        })
    }

    addSampleCenter=function(event){
        event.preventDefault();
        const typeName = event.target.elements.typeName.value;
        const centerName = event.target.elements.centerName.value;
        const incharge = event.target.elements.incharge.value;
        const locn = event.target.elements.locn.value;
        const emailaddress = event.target.elements.emailaddress.value;
        const cont1 = event.target.elements.cont1.value;
        const cont2 = event.target.elements.cont2.value;


        axios.post('http://localhost:8081/sample_center',
            {
                typeName:typeName,
                centerName:centerName,
                incharge:incharge,
                locn:locn,
                emailaddress:emailaddress,
                cont1:cont1,
                cont2:cont2


            }).then(result => {
            if(result.status == 200) {
                //this.getAllUsers();

                alert("added new center request!")
                window.location.reload(true);

            }
        }).catch(err => {
            alert(err);
        })

    }

    // addSampleType(request){
    //     axios.post('http://localhost:3001/sample_center_types',
    //         {
    //             typeName:request.typeName,
    //
    //         }
    //     ).then(result => {
    //         if(result.status == 200) {
    //             this.getAllTypeReqs();
    //         }
    //     }).catch(err => {
    //         alert(err);
    //     })
    // }


    render() {
        return (
            <div id="wrapper">

                <Nav/>



                <div id="page-wrapper">
                    <br/>

                    <div class="row">
                        <div className="col-lg-12">

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    DataTables Advanced Tables
                                </div>

                                <div className="panel-body">
                                    <div className="col-lg-6">
                                        <form onSubmit={this.addSampleCenter} role="from">
                                            <div className="form-group">

                                                <label>Sample Center Type:</label>

                                                <select className="form-control" name="typeName">
                                                    {this.state.sampleTypes.map(TypeRequest =>
                                                        <option>{TypeRequest.typeName}</option>

                                                    )}
                                                </select>

                                                <label>Sample Center Name:</label>
                                                <input className="form-control" name="centerName"/>
                                                <label>Incharge:</label>
                                                <input className="form-control" name="incharge"/>
                                                <label>Location:</label>
                                                <input className="form-control" name="locn"/>
                                                <label>Email:</label>
                                                <input className="form-control" name="emailaddress"/>
                                                <label>Contact 01:</label>
                                                <input className="form-control" name="cont1"/>
                                                <label>Contact 02:</label>
                                                <input className="form-control" name="cont2"/>
                                                <br/>

                                                <p>

                                                    <button type="submit" className="btn btn-primary">Add New Sample Center</button>

                                                </p>

                                            </div>
                                        </form>

                                    </div>
                                    <br/>
                                    <br/>


                                    <div className="panel-body">



                                        <SCs sampleCenter={this.state.sampleCenter} getAllCenterReqs={()=>this.getAllCenterReqs()}/>








                                    </div>

                                </div>


                            </div>


                        </div>


                    </div>
                </div>


            </div>


        )
    }
}

export default SCParent;

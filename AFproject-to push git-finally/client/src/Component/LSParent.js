import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';
import axios from 'axios';
import LSs from './LSs';
import Nav from '../components/Nav';
//import addCenterTypeParent from './addCenterTypeParent';



class LSParent extends Component{

    constructor(props){
        super(props)
        this.state={
            sampleCenType: [],
            maxId: [],
            onesampleCenType: []

        }
        //this.addSampleType= this.props.addSampleCenType;

        this.getAllTypeReqs();
        //this.getmaxId();
    }

    // componentWillMount(){
    //     axios.get('http://localhost:3001/sample_center_types/').then( res => {
    //          console.log(res.data.data._id);
    //         this.setState({
    //             maxId: res.data.data
    //         });
    //     })
    //     console.log(this.state.maxId);
    // }

     // getmaxId(){
     //     axios.get('http://localhost:3001/sample_center_types/').then( res => {
     //         console.log(res.data.data._id);
     //         this.setState({
     //             maxId: res.data.data._id
     //         });
     //         console.log(this.state.maxId+1);
     //     })
     //
     //
     // }

    getAllTypeReqs() {
        axios.get('http://localhost:8081/sample_center_types/getType').then(res=>{
            console.log(res);
            this.setState({
                sampleCenType:res.data.data
            });
            console.log(this.state.sampleCenType);
        })
    }

    // getTypeReqs(id){
    //     axios.get('http://localhost:3001/sample_center_types/' + id).then(res=>{
    //         //console.log(res);
    //         this.setState({
    //             onesampleCenType:res.data.data
    //         });
    //         //console.log(this.state.sampleCenType);
    //     })
    //
    // }

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
                                    <div className="add_button pull-left">
                                        <form onSubmit={this.addSampleType} role="from">
                                            <div>

                                                <input className="form-control" placeholder="Enter Sample Center Types.."
                                                       name="typeName"/>
                                                <br/>


                                                <button type="submit" id="Btn01" value className="btn btn-primary"
                                                        title="Add" data-toggle="tooltip" data-placement="right  "
                                                        data-original-title="Edit">Add New Sample Center Type
                                                </button>


                                            </div>
                                        </form>

                                    </div>
                                    <br/>
                                    <br/>

                                    <div className="add_button pull-right">

                                        <a href="http://localhost:3000/samplecenter" className="btn btn-primary">Add New Sample Center</a>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="panel-body">



                                        <LSs sampleCenType={this.state.sampleCenType} getAllTypeReqs={()=>this.getAllTypeReqs()}/>








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

export default LSParent;

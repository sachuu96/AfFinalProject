import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';
import axios from 'axios';
import LTs from './LTs';
import Nav from '../components/Nav';
//import addCenterTypeParent from './addCenterTypeParent';



class LTParent extends Component{

    constructor(props){
        super(props)
        this.state={
            LabTestName: [],
            Laboratory: [],
            Category: [],
            Subcategory: []

        }
        //this.addSampleType= this.props.addSampleCenType;

        this.getAllTestNameReqs();
    }

    // componentDidMount(){
    //     axios.get('http://localhost:3001/test_name/get').then( res => {
    //         this.setState({
    //             sampleCenType: res.data.data
    //         });
    //     })
    // }

    getAllTestNameReqs() {
        axios.get('http://localhost:8081/test_name').then(res=>{
            console.log(res);
            this.setState({
                LabTestName:res.data.data
            });
            console.log(this.state.LabTestName);
        })
    }

    componentDidMount(){
        axios.get('http://localhost:8081/laboratory').then( res => {
            this.setState({
                Laboratory: res.data.data
            });
        })

        axios.get('http://localhost:8081/category').then( res => {
            this.setState({
                Category: res.data.data
            });
        })

        axios.get('http://localhost:8081/subcategory').then( res => {
            this.setState({
                Subcategory: res.data.data
            });
        })
    }

    addTestName=function(event){
        event.preventDefault();
        const labName = event.target.elements.labName.value;
        const catName = event.target.elements.catName.value;
        const subcatName = event.target.elements.subcatName.value;
        const testName = event.target.elements.testName.value;



        axios.post('http://localhost:8081/test_name',
            {
                labName:labName,
                catName:catName,
                subcatName:subcatName,
                testName:testName


            }).then(result => {
            if(result.status == 200) {
                //this.getAllUsers();

                alert("added new test name request!")
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
                                        <form onSubmit={this.addTestName} role="from">
                                            <div className="form-group">
                                                <label>Laboratory:</label>
                                                  <select className="form-control" name="labName">
                                                      {this.state.Laboratory.map(LabRequest =>
                                                          <option>{LabRequest.lab_name}</option>

                                                      )}
                                                  </select>
                                                <label>Category:</label>
                                                  <select className="form-control" name="catName">
                                                      {this.state.Category.map(CatRequest =>
                                                          <option>{CatRequest.categoryName}</option>

                                                      )}
                                                  </select>
                                                <label>Sub Category:</label>
                                                  <select className="form-control" name="subcatName">
                                                      {this.state.Subcategory.map(SubCatRequest =>
                                                          <option>{SubCatRequest.subcategoryName}</option>

                                                      )}
                                                  </select>
                                                <label>Test Name:</label>
                                                <input className="form-control" name="testName"/>
                                                <br/>

                                                <p>

                                                    <button type="submit" className="btn btn-primary">Submit</button>

                                                </p>

                                            </div>
                                        </form>

                                    </div>
                                    <br/>
                                    <br/>


                                    <div className="panel-body">



                                        <LTs LabTestName={this.state.LabTestName} getAllTestNameReqs={()=>this.getAllTestNameReqs()}/>








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

export default LTParent;

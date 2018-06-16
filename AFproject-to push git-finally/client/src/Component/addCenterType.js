import React, { Component } from 'react';
import PropTypes 			from "prop-types";

const addCenterType =function(props) {

    return(

        <div>
        <form onSubmit={props.addSampleType} role="from">
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


    )
}

export default addCenterType;

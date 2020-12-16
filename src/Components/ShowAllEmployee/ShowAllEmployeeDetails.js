import React from 'react';


// --------------Employee Details Section-------------


const ShowAllEmployeeDetails = (props) => {
    const { name, email, education, post, number, birth } = props.details;
    return (
        <div style={{ boxShadow: "2px 2px 2px 2px grey", borderRadius:"30px", padding: "30px", margin:"40px" }}>
            <div className="row">
                <div className="col-md-6 col-sm-12" style={{ padding: "20px" }}>
                    <h3> <b>Name:</b>  <span style={{color: "grey"}}> {name}</span></h3>
                    <h3> <b> Email:</b> <span style={{color: "grey"}}> {email}</span></h3>
                    <h3> <b> Education:</b> <span style={{color: "grey"}}> {education}</span></h3>
                </div>
                <div className="col-md-6 col-sm-12" style={{ padding: "20px" }}>
                    <h3> <b>Job Position:</b>  <span style={{color: "grey"}}> {post}</span></h3>
                    <h3> <b>Phone Number:</b>  <span style={{color: "grey"}}> {number}</span></h3>
                    <h3> <b>Date Of Birth: </b> <span style={{color: "grey"}}> {birth}</span></h3>
                </div>
            </div>


        </div>
    );
};

export default ShowAllEmployeeDetails;
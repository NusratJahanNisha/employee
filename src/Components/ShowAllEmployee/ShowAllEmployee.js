import React, { useEffect, useState } from 'react';
import ShowAllEmployeeDetails from './ShowAllEmployeeDetails';


// ---------Showing all employee details-------------

const ShowAllEmployee = () => {
    const [allEmployee, setAllEmployee] = useState([]);
    useEffect(() => {
        fetch(`https://vast-gorge-12174.herokuapp.com/allEmployee`)
            .then(res => res.json())
            .then(data => setAllEmployee(data));
    }, []
    )
    return (
        <div>
            <h1 style={{ fontSize: "40px", margin:"20px" }}>All Employee List</h1>
            {
                allEmployee.map(details => <ShowAllEmployeeDetails details={details}></ShowAllEmployeeDetails>)
            }
        </div>
    );
};

export default ShowAllEmployee;
import React from 'react';
import { useForm } from 'react-hook-form';

// --------------Created Employee Form---------------------------------


const SubmitDetails = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        const employeeDetails = { ...data }
        fetch(`https://vast-gorge-12174.herokuapp.com/employeeDetails`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employeeDetails)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your employee is created successfully. Please refresh/reload the website. After that, You'll see the your created employee details under the register form.")
                console.log(data);
            })
    }

    return (
        <div>

            <form style={{ backgroundColor: "grey" }} className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{fontSize:"40px"}}>Create Employee</h1>
                <input name="name" style={{ margin: '10px', marginLeft: "40px", marginTop: "0px", width: '400px', height: '40px', border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Your name" />
                {errors.name && <span className="error" style={{ color: "red", margin: "5px" }} >Your name is required </span>} <br />

                <input name="email" style={{ margin: '10px', marginLeft: "40px", width: '400px', height: '40px', border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Your email" />
                {errors.reviewCompanyName && <span className="error" style={{ color: "red", margin: "5px" }}> Your email is required</span>} <br />

                <input name="education" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Your education" />
                {errors.education && <span className="error" style={{ color: "red", margin: "5px" }}>Your education is required</span>}<br />

                <input name="post" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Your job post" />
                {errors.education && <span className="error" style={{ color: "red", margin: "5px" }}>Your job post is required</span>}<br />

                <input name="number" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Your phone number" />
                {errors.number && <span className="error" style={{ color: "red", margin: "5px" }}>Your phone number is required</span>}<br />

                <input name="birth" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Your date of birth" />
                {errors.education && <span className="error" style={{ color: "red", margin: "5px" }}>Your date of birth is required</span>}<br />

                <input style={{ margin: '10px', width: '100px', marginLeft: "40px", height: '40px', color: "white", backgroundColor: "black" }} type="submit" /> <br />
            </form>

        </div>
    );
};

export default SubmitDetails;
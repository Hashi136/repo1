import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <nav className="Register">
            <h2>COMPANION</h2>
            <h1>Register</h1>
            <div className='links'>
                <ul className='center'>
                    <li className='registerItem button'>
                        <Link to="/ClientRegister">Company</Link>
                    </li>
                    <li className='registerItem button'>
                        <Link to="/DriverRegister">Driver</Link>
                    </li>
                    <li className='registerItem button'>
                        <Link to="/VehicleRegister">Vehicle</Link>
                    </li>
                </ul>

                <hr/>

            </div>
        </nav>


    );
}

export default Register;




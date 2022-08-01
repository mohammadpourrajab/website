import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import useTitle from "../../hooks/useTitle";

function About(props) {

   useTitle('About Us')

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/', {replace: true});
    }

    return (
        <div>
            <h1>About Us</h1>
            <button onClick={clickHandler}>Go Home</button>

            <ul>
                <li><Link to="programmers">Programmers</Link></li>
                <li><Link to="drivers">Drivers</Link></li>
            </ul>


            <Outlet/>

        </div>
    );
}

export default About;
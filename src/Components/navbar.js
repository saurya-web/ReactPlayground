import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/CallForwardRef">CallForwardRef</Link>
            </li>
            <li>
                <Link to="/InteractWithRedux">InteractWithRedux</Link>
            </li>
            <li>
                <Link to="/UseRefExample">UseRefExample</Link>
            </li>
            <li>
                <Link to="/Handsontable">Handsontable</Link>
            </li>
            <li>
                <Link to="/Employees">Employees</Link>
            </li>
            <li>
                <Link to="/Registration">Registration</Link>
            </li>
        </ul>

    )
}

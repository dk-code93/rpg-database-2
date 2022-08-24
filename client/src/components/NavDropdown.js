import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Auth from '../utils/auth';


function NavDropdown() {
    const { data: { username }} = Auth.getProfile();
    return (
        <Dropdown>
            <Dropdown.Toggle variant='dark' id='nav-drop'>
                Hello {username}!
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='/profile'>My Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => Auth.logout()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
    )
}

export default NavDropdown;
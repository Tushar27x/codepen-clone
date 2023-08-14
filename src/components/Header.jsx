import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import logo from '../assets/codepen-icon-logo-png-transparent-3561134844.png';
const Header = () => {
    const Container = styled(AppBar)`
        background: #060606;
    `
    return (
        <div>
            <Container position='static'>
                <Toolbar>
                    <img className='nav-logo' src={logo} alt=''/>
                </Toolbar>
            </Container>
        </div>
    )
}

export default Header
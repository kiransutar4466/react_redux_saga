import React from 'react'
import SimpleBar from 'simplebar-react'
import { Container } from 'reactstrap'

import VerticalLayout from './VerticalLayout'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <React.Fragment>
            <div className='app-menu navbar-menu'>
                <div className='navbar-brand-box'>
                    <Link to='/' className='logo'>
                        <p className='logo'>DEMO TEMPLATE</p>
                    </Link>
                </div>
                <SimpleBar id='scrollbar' className='h-100'>
                    <Container fluid className='p-0'>
                        <ul className='navbar-nav' id='navbar-nav'>
                            <VerticalLayout />
                        </ul>
                    </Container>
                </SimpleBar>
            </div>
        </React.Fragment>
    )
}

export default Sidebar

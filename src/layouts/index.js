import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const index = props => {
    return (
        <React.Fragment>
            <div id='layout-wrapper'>
                <Header />
                <Sidebar />
                <div className='main-content'>
                    <div className='page-content'>
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default index

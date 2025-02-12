import React from 'react'
import Subcontent from './subcontent'
import Ad from './Ad'

const MainContent = () => {
    return (

        <div className='d-flex flex-column col-10 bg-dark-subtle p-3' >
            <div className='d-flex gap-3 align-items-center' style={{ minHeight: '50vh' }}>
                <Subcontent></Subcontent>
                <Subcontent></Subcontent>
                <Subcontent></Subcontent>
            </div>
            <Ad />
        </div>
    )
}

export default MainContent
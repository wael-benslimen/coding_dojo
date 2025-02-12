import React from 'react'
import PersonCard from './PersonCard'

const DataHandler = () => {
    const persons = [
        { name: 'jhon', age: 45, hair: 'black' },
        { name: 'obama', age: 455, hair: 'no hair' },
        { name: 'kakashi', age: 1000, hair: 'white' }
    ]
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary-subtle' style={{minHeight:'100vh'}}>
            {persons.map((p, index) =>
                <PersonCard key={index} person={p}></PersonCard>
            )}
        </div>
    )
}

export default DataHandler
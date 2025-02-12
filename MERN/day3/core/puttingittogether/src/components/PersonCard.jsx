import React from 'react'
import { useState } from 'react'
const PersonCard = (props) => {
    const [count, setCount] = useState(props.person.age)
    return (
        <div >
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title"> {props.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> age: {count} </h6>
                    <p> hair color : {props.person.hair} </p>
                    <button className=' btn btn-success' onClick={() => setCount((count) => count + 1)}> happy b-day </button>
                </div>
            </div>
        </div>
    )
}

export default PersonCard
import React from 'react'

const PersonCard = (props) => {
    return (
        <div >
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title"> {props.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> age: {props.person.age} </h6>
                    <p> hair color : {props.person.hair} </p>
                </div>
            </div>
        </div>
    )
}

export default PersonCard
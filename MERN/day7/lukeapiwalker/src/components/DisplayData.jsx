import React from 'react'

const DisplayData = ({ info, genre }) => {
    if (info) {
        if (genre == 'people') {
            return (
                <div className='p-5 flex flex-col items-center mt-20 '>
                    <div className=' w-100'>
                        <h1 className=' text-4xl font-semibold'> {info.name} </h1>
                        <p><span className=' font-semibold'>height : </span>{info.height}</p>
                        <p><span className=' font-semibold'>hair Color: </span>{info.hair_color}</p>
                        <p><span className=' font-semibold'>eye color: </span>{info.eye_color}</p>
                        <p><span className=' font-semibold'>skin color: </span>{info.skin_color}</p>
                    </div>
                </div>
            )
        }
            
        if (genre == 'planets') {
        return (
            <div className='p-5 flex flex-col items-center mt-20 '>
                <div className=' w-100'>
                    <h1 className=' text-4xl font-semibold'> {info.name} </h1>
                    <p><span className=' font-semibold'>climate : </span>{info.climate}</p>
                    <p><span className=' font-semibold'>terrain: </span>{info.terrain}</p>
                    <p><span className=' font-semibold'>surface_water: </span>{info.surface_water}</p>
                    <p><span className=' font-semibold'>population: </span>{info.population}</p>
                </div>
            </div>
            )
        }
        if (genre == 'films') {
        return (
            <div className='p-5 flex flex-col items-center mt-20 '>
                <div className=' w-100'>
                    <h1 className=' text-4xl font-semibold'> {info.title} </h1>
                    <p><span className=' font-semibold'>release_date : </span>{info.release_date}</p>
                    <p><span className=' font-semibold'>director: </span>{info.director}</p>
                    <p><span className=' font-semibold'>producer: </span>{info.producer}</p>
                    <p><span className=' font-semibold'>episode_id: </span>{info.episode_id}</p>
                </div>
            </div>
            )
        }
        if (genre == 'species') {
        return (
            <div className='p-5 flex flex-col items-center mt-20 '>
                <div className=' w-100'>
                    <h1 className=' text-4xl font-semibold'> {info.name} </h1>
                    <p><span className=' font-semibold'>classification : </span>{info.classification}</p>
                    <p><span className=' font-semibold'>designation: </span>{info.designation}</p>
                    <p><span className=' font-semibold'>average_lifespan: </span>{info.average_lifespan}</p>
                    <p><span className=' font-semibold'>language: </span>{info.language}</p>
                </div>
            </div>
            )
        }
        if (genre == 'vehicles') {
        return (
            <div className='p-5 flex flex-col items-center mt-20 '>
                <div className=' w-100'>
                    <h1 className=' text-4xl font-semibold'> {info.name} </h1>
                    <p><span className=' font-semibold'>model : </span>{info.model}</p>
                    <p><span className=' font-semibold'>manifacturer: </span>{info.manifacturer}</p>
                    <p><span className=' font-semibold'>cost_in_credits: </span>{info.cost_in_credits}</p>
                    <p><span className=' font-semibold'>cargo_capacity: </span>{info.cargo_capacity}</p>
                </div>
            </div>
        )}
    }
    else {
        return (
            <p className=' text-center text-2xl mt-5'>look for a char</p>
        )
    }
    }

export default DisplayData

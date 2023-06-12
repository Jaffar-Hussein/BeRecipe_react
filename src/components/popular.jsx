

import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./cards";
function Popular() {
    const [recipies, setRecipies] = useState([])
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/all_recipies`)
            .then((response) => {
                setRecipies(response.data)
            })
    }, [])
    return (
        <>
            <div className="container mx-auto">
                <div className="text-2xl font-bold tracking-widest">
                    <p className="text-center my-8"> Top Recommended Recipes</p>
                </div>
                <div className="grid grid-cols-3">
                    <Cards rec={recipies}/>
                    {/* {recipies.map((rec) => {
                        return (

                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow my-4">
                                <a href="#">
                                    <img className="rounded-t-lg w-[100vw]" src={`https://res.cloudinary.com/hanancodes/${rec.recipes_image}`} alt="" />
                                </a>
                                <div className="p-5 text-center">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{rec.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{rec.description}</p>
                                    <hr className="h-px my-8 bg-red-200 border-2 dark:bg-gray-700 mb-4">
                                    </hr>
                                    <p className="text-gray-400 text-left">Time</p>
                                    <p className="text-left">{rec.time}</p>
                                </div>

                            </div>


                        )

                    })} */}

                </div>
            </div>
           
        </>


    )
}
export default Popular;
import pancakes from '../assets/pancake.svg'
import axios from "axios";
import React, { useEffect, useState } from "react";
function RecipeCategory() {
    const [recipies, setRecipies] = useState([])
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/all_categories`)
            .then((response) => {
                setRecipies(response.data)
            })
    }, [])
    return (
        <div>
            <div className="container mx-auto my-12">
                <p className="font-bold my-5">Recipe Categories</p>
                <div className="grid grid-cols-2 border border-2 border-gray-400">
                    {recipies.map((rec) => {

                        return (<div className="flex items-center gap-0 border border-2 border-gray-400">
                            <div className='m-5 '>
                                <img className='' src={`https://res.cloudinary.com/hanancodes/${rec.category_image}`} />
                            </div>
                            <div>
                                <p className="mb-3">{rec.name}</p>
                                <p>{rec.description}</p>
                           
                            </div>

                        </div>)
                    })}

                </div>
            </div>

        </div>
    )

}
export default RecipeCategory;
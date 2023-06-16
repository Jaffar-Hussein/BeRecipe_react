import NavBar from "./Nav";
import recDetails from '../assets/recDetails.svg'
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function RecipeDetails() {
    const [recipies, setRecipies] = useState({})
    let { id } = useParams();

    React.useEffect(() => {
        axios.get(`https://berecipedjango-production.up.railway.app/filter_recipes?id=${id}`)
            .then((response) => {
                setRecipies(response.data[0])
            })
    }, [])
    console.log(recipies);
    return (
        <div className="bg-sysBackgroundColor min-h-screen bg-cover">
            <NavBar />
            <div className="flex justify-center mt-8">
                <img src={recDetails} />

            </div>
            <hr className="h-px my-8 bg-greenPaste border-1 border-greenPaste">
            </hr>
            <div className="container mx-auto text-center my-7 tracking-widest">
                {recipies ?
                    <div>
                        <p className="font-bold text-2xl">{recipies.name}</p>
                        <p>{recipies.description}</p>
                        <div className="flex justify-center my-5 md:h-[50vh]">
                        <img src={`https://res.cloudinary.com/hanancodes/${recipies.recipes_image}`}/>
                        </div>
                    </div>
                    :

                    <></>}


            </div>
        </div>
    )

}
export default RecipeDetails;
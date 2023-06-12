import NavBar from "./Nav";
import axios from "axios";
import React, { useEffect, useState } from "react"
import Cards from "./cards";
import { NavLink } from "react-router-dom";
function BaseCategories({ categoryId }) {
    const [category, setCategories] = useState([])
    const [recipies, setRecipies] = useState([])
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/all_categories`)
            .then((response) => {
                setCategories(response.data)
            })
    }, [])
    React.useEffect(() => {
        axios.get(`http://localhost:8000/recipies_details?rec=${categoryId}`)
            .then((response) => {
                setRecipies(response.data)
            })
    }, [])
    // console.log(recipies)
    // }
    return (
        <>
            <NavBar />
            <div className="container mx-auto mt-4">
                <div className="bg-recipeBg h-[80vh]  bg-no-repeat bg-contain">

                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="">
                        <p className="text-2xl font-bold mb-4 mx-2">Recipes</p>
                        <div className=" grid grid-row-auto justify-between">
                            {category.map((cat, index) => {
                                return (
                                    <NavLink key={index} className="rounded-full border border-2 px-4 py-1 mb-3" to={'/meal/' + cat.id}>{cat.name}

                                    </NavLink>

                                )
                            })}

                        </div>
                    </div>
                    <div className="col-span-3">
                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search recipes or ingredients ..." required />
                                {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                                <div className="grid grid-cols-3 gap-5">
                                    <Cards rec={recipies} />
                                </div>
                            </div>
                        </form>

                    </div>


                </div>
            </div>

        </>
    )

}
export default BaseCategories;
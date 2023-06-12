import BaseCategories from "./BaseCategories";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from "axios";

function CategoryDetails() {
    let { category } = useParams();
    const [recipies, setRecipies] = useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:8000/recipies_details?rec=${category}`)
            .then((response) => {
                setRecipies(response.data)
            })
    }, [category])
    return (
        <>
            <BaseCategories categoryId={recipies} />
        </>
    )

}
export default CategoryDetails;
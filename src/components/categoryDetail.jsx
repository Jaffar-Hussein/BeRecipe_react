import BaseCategories from "./BaseCategories";
import { useParams } from "react-router-dom";

function CategoryDetails() {
    let { category } = useParams();

    return (
        <>
            <BaseCategories categoryId={category} />
        </>
    )

}
export default CategoryDetails;
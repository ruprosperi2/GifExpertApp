import {getGifs} from "../helpers";
import {useEffect, useState} from "react";
import CategoryItem from "./CategoryItem";
const ListCategories = ({category}: { category: string }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(img => setImages(img))


    }, [category])

    return (
        <>
            <h2>{category}</h2>

             <div className={"card-grid"}>
                {images.map((image) => {
                    return (
                        <CategoryItem
                            key={image.id}
                            {...image}
                            />)
                })}
             </div>
        </>
    )
}

export default ListCategories
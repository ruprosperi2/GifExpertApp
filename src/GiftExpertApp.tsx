import AddCategory from "./components/AddCategory";
import ListCategories from "./components/ListCategories";
import {useState} from "react";

const GiftExpertApp = () => {
    const [catetories, setCategories] = useState(['Pokemon'])
    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    catetories.map((category) => {
                        return <ListCategories key={category} category={category}/>
                    })
                }
            </ol>

        </>
    )
}

export default GiftExpertApp
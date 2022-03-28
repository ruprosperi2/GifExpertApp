import CategoryItem from "./CategoryItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

const ListCategories = ({category}: { category: string }) => {

    const {data, loading} = useFetchGifs(category)

    return (
        <>
            <h2>{category}</h2>

            {loading ? 'Cargando' :''}

              <div className={"card-grid"}>
                {data.map((image) => {
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
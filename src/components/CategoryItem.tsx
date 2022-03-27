const CategoryItem = ({id, title, url}: { id: string, title: string, url: string }) => {
    return(
        <div>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default CategoryItem
import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";

const AddCategory = ({setCategories}: {
    setCategories: Dispatch<SetStateAction<string[]>>
}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (inputValue.trim().length >= 2) {
            setCategories((categories) => [inputValue, ...categories])
        }

        setInputValue('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder={"ingrese la categoría"}
                onChange={handleChange}
                type="text"
                value={inputValue}
            />
        </form>
    )
}

export default AddCategory
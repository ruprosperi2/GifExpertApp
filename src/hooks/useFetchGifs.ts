import {useState, useEffect} from "react";
import {getGifs} from "../helpers";
import {Image} from "../components/types";

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category).then(imgs => {
                setTimeout(() => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 3000);
            }
        )
    }, [category])

    return state as { data: Image[]; loading: boolean }
}
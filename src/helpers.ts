import axios from "axios";

export const getGifs = async (category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3vA3kC27hf6fKZ1UF20Sc92rzsuuirtX&q=${category}&limit=4`

    const response = await axios.get(url).then(resp => resp)

    const gitfs = await response.data.data;

    return gitfs.map(
        ({
             id,
             title,
             images,
         }: {
            id: string,
            title: string,
            images: { downsized: { url: string } }
        }) => {
            return {
                id,
                title,
                url: images.downsized.url
            }
        })

}
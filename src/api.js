import axios from "axios"

export const getGiphyApi = async (searchText) => {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Vu7iR3tyCmCW29l66WsWPr8aujtrexiT&q=${searchText}`)
    return res.data.data
}
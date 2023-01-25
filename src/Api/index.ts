import axios from "axios"
const url = "https://api.openweathermap.org/data/2.5/weather"

export const fetchData = async (query:String) => {
    const {data} = await axios.get(url, {
        params:{
            q:query,
            units:"metric",
            APPID:"daab4dc677e548b1e9c39cdfdf7aa9cc"
        }
    })

    return data
}
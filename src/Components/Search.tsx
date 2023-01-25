import React, { useState } from 'react'
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"

import { fetchData } from '../Api/index';
const Search = () => {

    const [query, setQuery] = useState<String>('')
    const [data, setData] = useState<any>()
    const [weather, setWeather] = useState<any>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const onKeySearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const data = await fetchData(query)

            setData(data)
            setWeather(data.main)
            setQuery('')
        }
    }

    console.log(data)
    return (
        <React.Fragment>
            <TextField id="standard-basic" label="Search" variant="standard" value={query} onChange={handleChange} onKeyDown={onKeySearch} />
            {
                weather && (
                    <div className="city">
                        <h2 className="city-name">
                            <Badge badgeContent={data.sys.country} color="secondary">
                                <Typography variant='h4' sx={{ marginTop: "10px" }}>
                                    {data.name}
                                </Typography>
                            </Badge>
                        </h2>
                        <div className="city-temp">
                            {Math.round(data.main.temp)}
                            <sup>&deg;C</sup>
                        </div>
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                            <p>{data.weather[0].description}</p>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default Search
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "../Components/UI/Card"

 const Movie = ()=> {
    const [data, setData] = useState([])

    const API = "https://openlibrary.org/search.json?q=your_query"

const getApiData = async () => {
    try {
        const res = await axios.get(API)
        console.log(res.data.docs)
        setData(res.data.docs)
    } catch (error) {
        console.log(error)
    }
}

    useEffect (() => {
        getApiData()

    },[])

        return (
        <>
<ul>
    {data.map((curElem)=>{
        return <Card key={curElem.key} movieData={curElem}/>
    })}
</ul>

        </>
    )
}

export default Movie
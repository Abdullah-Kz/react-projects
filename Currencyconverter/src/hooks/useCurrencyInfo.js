import {useEffect, useState} from "react"


function useCurrencyInfo(fromcurrency,tocurrency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${fromcurrency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[tocurrency]))
        console.log(data);
    }, [tocurrency,fromcurrency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
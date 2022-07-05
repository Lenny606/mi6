import { useState, useEffect } from "react";

const Search = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {

        const response = await fetch('/api/people-of-interest')
        const parsedResponse = await response.json();

        setData(parsedResponse);
    }

    useEffect(() => {
        fetchData()
    }, [])


    const input = document.querySelector('.search-input');
    input.addEventListener('keyup', (e) => {
        console.log(e.target.value);
    })



}

export default Search;
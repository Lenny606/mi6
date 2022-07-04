import { divide } from "lodash";
import { useState, useEffect } from "react";

const App = () => {

    const [data, setData] = useState([]);

    const fetchData = async() => {

        const response = await fetch('/api/people-of-interest')
        const parsedResponse = await response.json();

        setData(parsedResponse);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        data == null ? 
         <h1>Loading</h1>
         :
         <div className="">
         {data.map((person) => {
            return  <p>{person.name} : {person.occupation}</p>
         })}
         
         </div>
    )
}
export default App;
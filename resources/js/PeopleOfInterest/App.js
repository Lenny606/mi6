import { useState, useEffect } from "react";
import StatusFilter from "./StatusFilter";

const App = () => {

    const [data, setData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');

    const fetchData = async () => {

        const response = await fetch('/api/people-of-interest')
        const parsedResponse = await response.json();

        setData(parsedResponse);
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log('im here')
    return (
        data == null ?
            <h1>Loading</h1>
            :
            <div className="">
                {data.map((person) => {
                    return <>
                        <h3>{person.name}</h3>
                        <p><em>{person.occupation}</em></p>

                        <p>Known aliases:</p>
                        <ul>
                            {person.aliases.map((alias) => {
                                <li>{alias.alias}</li>
                            })}
                        </ul>
                        <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                    </>
                })}

            </div>
    )
}
export default App;
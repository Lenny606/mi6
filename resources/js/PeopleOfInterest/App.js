import { useState, useEffect } from "react";
import StatusFilter from "./StatusFilter";
import PeopleList from "./PeopleList";

const App = () => {
    const [data, setData] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");

    const fetchData = async () => {
        const response = await fetch("/api/people-of-interest");
        const parsedResponse = await response.json();

        setData(parsedResponse);
    };

    useEffect(() => {
        fetchData()
    }, [])
    
    // const input = document.querySelector('.search-input');
    // input.addEventListener('onkeyup', (e)=>{
    //     console.log(e.target.value);
    // });
   
   
    return (
        <div className="">
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />

            <PeopleList
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />
        </div>
    );
};

export default App;

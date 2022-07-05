import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {

        
            const parsedResponse = await axios.get('/api/statuses');
            // const response = await fetch('/api/statuses')
            // const parsedResponse = await response.json();

       

        setStatuses(parsedResponse.data);
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    return (
        <div className="status-filter">
            {statuses.map((status, i) => {
                return (
                    <button
                        key={i}
                        onClick={setSelectedStatus(status.id)}
                        className={"status-filter__status"}
                    >
                        {status.name}
                    </button>
                )
            })}
        </div>
    );
};

export default StatusFilter;

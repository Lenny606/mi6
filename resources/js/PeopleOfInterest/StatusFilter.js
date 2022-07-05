import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const parsedResponse = await axios.get("/api/statuses");
        console.log(parsedResponse);
        setStatuses(parsedResponse.data);
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    return (
        <div className="status-filter">
            This is the status filter
            {statuses.map((status) => {
                return (
                    <button
                        onClick={setSelectedStatus(status.id)}
                        className={"status-filter__status"}
                    >
                        {status.name}
                    </button>
                );
            })}
        </div>
    );
};

export default StatusFilter;

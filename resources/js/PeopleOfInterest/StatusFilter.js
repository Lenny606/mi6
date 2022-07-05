import React from 'react';
import { useState, useEffect } from "react";

const StatusFilter = ({ selectedStatus, setSelectedStatus}) => {

    const [statuses, setStatuses] = useState([])

    const loadStatuses = async () => {

        const response = await fetch('/api/statuses')
        const parsedResponse = await response.json();

        setStatuses(parsedResponse);
    }
    
    useEffect(() => {
        loadStatuses()
    }, [])

    return (
        <div className='status-filter'>
            This is the status filter
            {statuses.map((status) => {
                <div onClick={setStatuses(status.id)} className={ 'status-filter__status' }>
                { status.name }
            </div>
            })}
        </div>
    )

}

export default StatusFilter;

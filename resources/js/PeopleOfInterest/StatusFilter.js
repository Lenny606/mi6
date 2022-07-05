import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {

    const [statuses, setStatuses] = useState([])

    const loadStatuses = async () => {

        try {
            const parsedResponse = await axios.get('/api/statuses');
            // const response = await fetch('/api/statuses')
            // const parsedResponse = await response.json();

        } catch (error) {
            console.log(error)
        }

        setStatuses(parsedResponse.data);
    }

    useEffect(() => {
        loadStatuses()
    }, [])

    return (
        <div className='status-filter'>
            This is the status filter
            {statuses.map((status) => {
                <div onClick={setSelectedStatus(status.id)} className={'status-filter__status'}>
                    {status.name}
                </div>
            })}
        </div>
    )

}

export default StatusFilter;

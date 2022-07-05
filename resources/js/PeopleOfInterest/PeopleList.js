import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const PeopleList = ({ selectedStatus }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const parsedResponse = await axios.get(
            "/api/people-of-interest" +
                "?status=" +
                encodeURIComponent(selectedStatus)
        );
        console.log(parsedResponse);
        setData(parsedResponse.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return data == null ? (
        <h1>Loading</h1>
    ) : (
        <div className="">
            {data.map((person) => {
                return (
                    <>
                        <p>
                            {person.name} - {person.occupation}
                        </p>

                        <p>Known aliases:</p>
                        <ul>
                            {person.aliases.map((alias) => {
                                <li>{alias.alias}</li>;
                            })}
                        </ul>
                    </>
                );
            })}
        </div>
    );
};

export default PeopleList;

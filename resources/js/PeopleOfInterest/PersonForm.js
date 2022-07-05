import { useState } from 'react';
import axios from 'axios';
import { values } from 'lodash';

const PersonForm = ({ id, name }) => {

    const [data, setData] = useState({ 'id': id, 'name': name })

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event)
        setData(data => {
            return ({
                ...data,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('/people-of-interest/edit', data)
    }

    return (
        <form action='' method='post' onSubmit={handleSubmit}>
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}
export default PersonForm;
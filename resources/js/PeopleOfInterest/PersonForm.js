import { useState } from 'react';

const PersonForm = ({ name }) => {

    const [data, setData] = useState('')

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setData(data => {
            return ({...data, 
                [event.target.name]:event.target.name
            });
        });
    }

    return (
        <form action='' method='post' onSubmit={ handleClick }>
            <input type="text" name="name" value = {name} />
            <input type="submit" />
        </form>
    )
}
export default PersonForm;
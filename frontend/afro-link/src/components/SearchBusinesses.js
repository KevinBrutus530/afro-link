import React, {useState, useEffect} from 'react';
import {useInput} from "../util/useInput";
import axios from 'axios';

// this app is looking to promote bob in NYC
// users look for businesses by category
// grab categories using axios call
// populate the select
// on select of category, new axios call
// all businesses in said category populate the resultsPage
// ***stretch*** businesses will appear in distance order

const SearchBusinessForm = () => {
    // const location = useInput("");
    // const category = useInput("");
    const [ businessTypes, setBusinessTypes ] = useState([]) 
    // const [search, setSearch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                let res = await axios.get("http://localhost:3000/categories/");
                setBusinessTypes(res.data.payload);
            } catch (err) {
                console.log(err);
                setBusinessTypes([]);
            }
        }
        fetchData()
    },[])

    const handleSearch = () => {
        debugger
        // e.preventDefault();
    }

    const types = businessTypes.map((type, i) => {
        return <option value={i} key={i}>{type.type_name}</option>
    })

    return (
        <div>
            <form onSubmit={handleSearch}>
                <select>
                    {types}
                </select>
                {/* <input type="text" placeholder="What you looking for?" {...location}/> */}
                <button type="submit">Connect</button>
            </form>
        </div>
    )
}

export default SearchBusinessForm;
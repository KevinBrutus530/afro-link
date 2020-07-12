import React, {useState} from 'react';
import {useInput} from "../util/useInput";

// this app is looking to promote bob in NYC
// users look for businesses by category
// grab categories using axios call
// populate the select
// on select of category, new axios call
// all businesses in said category populate the resultsPage
// ***stretch*** businesses will appear in distance order

const SearchBusinessForm = () => {
    // const location = useInput("");
    const category = useInput("");
    // const [search, setSearch] = useState([]);

    const handleSearch = () => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <select>
                    <option>Food & Drink</option>
                    <option>Arts & Culture</option>
                    <option>Education & Career</option>
                    <option>Gifts & Beyond</option>
                    <option>Beauty</option>
                    <option>Health & Fitness</option>
                    <option>Bookstore</option>
                    <option>Home Decor</option>
                    <option>Clothing & Accessories</option>
                </select>
                {/* <input type="text" placeholder="What you looking for?" {...location}/> */}
                <button type="submit">Connect</button>
            </form>
        </div>
    )
}

export default SearchBusinessForm;
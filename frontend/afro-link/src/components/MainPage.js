import React from 'react';
import SearchBusinessForm from './SearchBusinesses';

const MainPage = () => {
    return (
        <div>
            <div className="search">
                Search Business
                <SearchBusinessForm />
            </div>
            <div className="add">
                Add Business
                <br/>
                <button>Click Here to Add Your Business</button>
            </div>
        </div>
    )
}

export default MainPage
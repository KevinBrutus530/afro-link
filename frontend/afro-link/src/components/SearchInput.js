import React, { Component } from 'react'
import { useHistory } from "react-router-dom";


const SearchInput =({location})=> {
  

  const searchBiz = () => {
    if(location.includes("/categories")){
      return (
        <div>
          <form>
            <label>
              Search
              <input type="text" placeholder="Search Businesses" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    } else {
      return null
    }
   };
        return (
            <div>
                {searchBiz()}
            </div>
        )
    }

export default SearchInput

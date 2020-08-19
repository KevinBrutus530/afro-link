import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { getAPI } from "../util/getAPI";
import "../css/Results.css";
import SearchBar from "./SearchBar";
import ResultsIndex from "./ResultsIndex";
import Pagination from "./Pagination";

const Results = () => {
  const API = getAPI();
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [bizType, setBizType] = useState("");
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const getResults = async () => {
    try {
      let res = await axios.get(`${API}/categories/${id}`);
      setResults(res.data.payload);
      let res2 = await axios.get(`${API}/types/${id}`);
      setBizType(res2.data.payload[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="resultsPage">
      <div className="resultsMainDiv" style={{ color: "white" }}>
        <SearchBar type={bizType.id}/>

        <h1 className="heavyFont ctgTitle">{bizType.type_name}</h1>
       
        <ResultsIndex results={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={results.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Results;

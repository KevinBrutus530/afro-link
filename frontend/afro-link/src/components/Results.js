import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { getAPI } from "../util/getAPI";
// import SearchBusinessForm from "./SearchBusinesses";
// import FilterResults from "./FilterResults";
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
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getResults = async () => {
    // debugger
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

  // const handleBusiness = (e) => {
  //   history.push(`/businesses/${e}`);
  // };

  // let resultDisplay = results.map((biz) => {
  //   let noAddress = "";
  //   let noHours = "Not Available";
  //   let bizz = biz.street === null ? (biz.street = noAddress) : biz.street;
  //   let hrsSub = biz.hours === "" ? (biz.hours = noHours) : biz.hours;
  //   return (
  //     <div>
  //       <div
  //         className="resultsDiv"
  //         key={biz.biz_id}
  //         value={biz.biz_id}
  //         onClick={() => handleBusiness(biz.biz_id)}
  //       >
  //         <div className="businessCard">
  //           <h3 className="heavyFont">{biz.biz_name}</h3>
  //           {/* <li>Hours: {hrsSub}</li> */}
  //           <p>
  //             {bizz} {biz.city} {biz.state} {biz.zip}
  //           </p>
  //           <p>
  //             <a className="hyperLink" href={biz.website} target="_blank">
  //               Visit Website
  //             </a>
  //           </p>
  //         </div>
  //         <br />
  //       </div>
  //     </div>
  //   );
  // });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="resultsPage">
      <div className="resultsMainDiv" style={{ color: "white" }}>
        <SearchBar type={bizType.id}/>

        <h1 className="heavyFont">{bizType.type_name}</h1>
        {/* <FilterResults results={results} /> */}
        {/* <div>
          <ul className="resultsUL" style={{ listStyleType: "none" }}>
            {resultDisplay}
          </ul>
        </div> */}
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

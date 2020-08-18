import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ margin: "auto", padding: "1em" }}>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((num) => {
            return (
              <li className="page-item" key={num}>
                <a onClick={() => paginate(num)} href="#" className="page-link">
                  {num}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

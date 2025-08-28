import React, { useState } from "react";
import "../../Styles/Project_Style/Pagination.css";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const goToPage = (num) => {
    if (num >= 1 && num <= totalPages) setPage(num);
  };

  return (
    <div className="pagination">
      {/* <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
        Prev
      </button> */}

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={page === i + 1 ? "active" : ""}
          onClick={() => goToPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {/* <button onClick={() => goToPage(page + 1)} disabled={page === totalPages}>
        Next
      </button> */}
    </div>
  );
}

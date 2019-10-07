import React from 'react'

const Pagination = ({ productsPerPage, totalProduct, paginate }) => {
  // array pagination
  const pageNumbers = []
  // push pagenumber to array
  for(let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <nav>
      <ul className="pagination" >
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
import React from 'react'
import PropTypes from 'prop-types'

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
            <a onClick={(event) => paginate(event, number)} className="page-link" href={number}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination

Pagination.propTypes = {
  productsPerPage: PropTypes.number,
  totalProduct: PropTypes.number,
  paginate: PropTypes.func
}
import React from 'react';

function Pagination({ filmesPerPage, totalFilmes, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalFilmes / filmesPerPage); i++) {
    pageNumber.push(i)

  }
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pageNumber.map(numberPage => (
          <li className='page-item' key={numberPage}>
            <a className="page-link" href="!#"
              onClick={() => paginate(numberPage)}>{numberPage}</a>
          </li>
        ))}
      </ul>
    </nav >

  )

}

export default Pagination;
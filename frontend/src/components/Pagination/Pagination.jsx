import s from './Pagination.module.css';
import React from "react";




export default function Pagination({ pageSize, allBooks, page, goToNextPage, goToPreviousPage}) {

  const pageNumbers = [];


  for (let i = 0; i < Math.ceil(allBooks / pageSize); i++) {
    pageNumbers.push(i + 1)
  };
  




  return (
            <nav className={s.nav}>
            <div className={s.pag}>
                <button onClick={goToPreviousPage} className={s.btn}>Prev</button>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <ul key={number}>
                          <li className={s.num} key={number}>
                            <button className={s.btn} onClick={() => page(number)}>{number}</button>
                           </li>
                        </ul>
                    )
                })}
                <button onClick={goToNextPage} className={s.btn}>Next</button>
            </div>
        </nav>
  )
}


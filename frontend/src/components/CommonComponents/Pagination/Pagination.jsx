import s from './Pagination.module.css';
import React from "react";



export default function Pagination({ pageSize, allBooks, page, pageCurrent}) {

  let pageNumbers = [];

  let Paginas = Math.ceil(allBooks / pageSize)
  for (let i = 1; i <= Paginas; i++) {
    pageNumbers.push(i)
  }
  
  return (
        <nav className={s.nav}>
          <div className={s.pag}>
             
            {Paginas > 1 ? <>
            {pageCurrent - 1 > 0 ? (
            <button className={s.num} onClick={() => page(pageCurrent = 1)}>First</button> 
            ) : null }
            {pageCurrent >= 3 ? <li><button className={s.num} onClick={() => page(pageCurrent - 2)}>{pageCurrent - 2}</button></li> : null}
            {pageCurrent >= 2 ? <li><button className={s.num} onClick={() => page(pageCurrent - 1)}>{pageCurrent - 1}</button></li> : null}
              <li><button className={s.num1} onClick={() => page(pageCurrent)}>{pageCurrent}</button></li>
            {pageCurrent <= pageNumbers.length - 1 ? <li><button className={s.num} onClick={() => page(pageCurrent + 1)}>{pageCurrent + 1}</button></li> : null}
            {pageCurrent <= pageNumbers.length - 2 ? <li><button className={s.num} onClick={() => page(pageCurrent + 2)}>{pageCurrent + 2}</button></li> : null}
            {pageCurrent < Paginas ? (
              <button className={s.num} onClick={() => page(pageCurrent = Paginas)}>Last</button>  
            ) : null }
            </> : null }

          </div>
        </nav>
  )
}


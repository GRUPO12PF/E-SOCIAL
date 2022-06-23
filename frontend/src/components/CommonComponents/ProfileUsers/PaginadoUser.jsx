import React from 'react';




export default function PaginadoUser({ allVideogames, pageSize, page, goToPreviousPage, goToNextPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allVideogames / pageSize); i++) {
        pageNumbers.push(i);;
    }
    return (
        <nav>
            <div  className="paginado-f">
                <button onClick={goToPreviousPage} >Prev</button>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <ul className='number' key={number}>
                            <button onClick={() => page(number)}>{number}</button>
                        </ul>
                    )
                })}
                <button onClick={goToNextPage} >Next</button>
            </div>
        </nav>
    );
}
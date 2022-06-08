
import s from './Pagination.module.css';

export default function Pagination({ allBooks, pageSize, page, goToPreviousPage, goToNextPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allBooks / pageSize); i++) {
        pageNumbers.push(i);;
    }
     
    return (
        <nav className={s.pagination}>
            <div className={s.nav}>
                <button onClick={goToPreviousPage} className={s.btn}>Prev</button>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <ul key={number}>
                            <button className={s.number} onClick={() => page(number)}>{number}</button>
                        </ul>
                    )
                })}
                <button onClick={goToNextPage} className={s.btn}>Next</button>
            </div>
        </nav>
    );
}

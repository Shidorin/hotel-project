import '../Home.css'

interface IPagination {
    cardPerPage: number,
    totalCards: number,
    currentPage: number;
    paginate: (pageNumber: number) => void
}

export function Pagination({ cardPerPage, totalCards, currentPage, paginate }: IPagination) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        pageNumbers.push(i);
    }




    return (
        <div>
            <ul className="pagination">
                <button className="page-circle" aria-label="previous page" disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
                    <i className="material-icons">keyboard_arrow_left</i>
                </button>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}

                <button className="page-circle" aria-label="previous page" disabled={currentPage === Math.ceil(totalCards / cardPerPage)} onClick={() => {
                    // console.log(currentPage, totalCards, cardPerPage);           // console log
                    paginate(currentPage + 1)
                }}>
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
            </ul>
        </div>
    );
}



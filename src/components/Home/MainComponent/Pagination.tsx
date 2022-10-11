import '../Home.css'

interface IPagination {
    cardPerPage: number,
    totalCards: number,
    paginate: (pageNumber: number) => void
}

export function Pagination({ cardPerPage, totalCards, paginate }: IPagination) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}



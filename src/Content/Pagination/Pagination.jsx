import { current } from '@reduxjs/toolkit';
import './Pagination.css';
import { useState } from 'react';

function Pagination(props) {
    const currentPage = props.currentPage;
    const maxPages = props.pages;
    const mode = props.mode;
    const textMode = (mode === 'light') ? 'dark' : 'light';
    const BUTTON_STYLE = `page-link bg-${mode} text-${textMode} fw-bold`;

    const pages = (maxPages, currentPage) => {
        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5];
        } else if (currentPage >= maxPages - 2) {
            return [maxPages - 4, maxPages - 3, maxPages - 2, maxPages - 1, maxPages];
        } else {
            return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        }
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item"><button className={`${BUTTON_STYLE}`}>Previous</button></li>
                {
                    pages(maxPages, currentPage).map((page) => {
                        return <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={page}><button className={`${BUTTON_STYLE}`}>{page}</button></li>
                    })
                }
                <li className="page-item"><button className={`${BUTTON_STYLE}`}>Next</button></li>
            </ul>
        </nav>
    );
}

export default Pagination;
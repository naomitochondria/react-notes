import React from "react";

function SearchForm({ doSearch }) {
    return (
        <form action="" id="action-bar__search">
            <input type="text" id="action-bar__search-title"
                onChange={doSearch}
                placeholder="Semua catatan"/>
            <button id="action-bar__search-button">
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
}

export default SearchForm;
import React from "react";
import SearchForm from "./SearchForm";
import ModalButton from "./ModalButton";

function ActionBar({doSearch, openModal}) {
    return (
        <div id="action-bar">
            <SearchForm doSearch={ doSearch } />
            <ModalButton openModal={ openModal } />
        </div>
    );
}

export default ActionBar;
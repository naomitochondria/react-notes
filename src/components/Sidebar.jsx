import React from "react";

function Sidebar({ sidebarWidth, closeSidebar, showUnarchivedNotes, showArchivedNotes, isShowArchivedNotes }) {
    let unarchivedTextColor, archivedTextColor;
    if (isShowArchivedNotes) {
        archivedTextColor = { color: "aliceblue" }
    } else {
        unarchivedTextColor = { color: "aliceblue" }
    }

    return (
        <div id="sidebar" style={ sidebarWidth }>
            <button className="sidebar__close-button" onClick={ () => closeSidebar() }>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <a className="sidebar__item" onClick={ () => showUnarchivedNotes() }
                style={ unarchivedTextColor }>
                <i className="fa-solid fa-note-sticky"></i> Catatan utama</a>
            <a className="sidebar__item" onClick={ () => showArchivedNotes() }
                style={ archivedTextColor }>
                <i className="fa-solid fa-box-archive"></i> Catatan arsip</a>
        </div>
    );
}

export default Sidebar;
import React from "react";

function SidebarButton({ openSidebar }) {
    return (
        <button className="sidebar-button" onClick={ () => openSidebar() }>
            <i className="fa-solid fa-bars"></i>
        </button>
    );  
}

export default SidebarButton;
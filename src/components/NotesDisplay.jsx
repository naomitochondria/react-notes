import React from "react";
import SidebarButton from "./SidebarButton";
import NoteList from "./NoteList";

function NotesDisplay({ openSidebar, notes, deleteNote, archiveNote, 
    unarchiveNote, isShowArchivedNotes, searchTitle, dateFormatter }) {
    return (
        <div id="notes-display">
            <SidebarButton openSidebar={ openSidebar } />
            <NoteList notes={ notes } 
                deleteNote={ deleteNote } 
                archiveNote={ archiveNote } 
                unarchiveNote={ unarchiveNote }
                isShowArchivedNotes={ isShowArchivedNotes }
                searchTitle={ searchTitle }
                dateFormatter={ dateFormatter } />
        </div>
    );
}

export default NotesDisplay;
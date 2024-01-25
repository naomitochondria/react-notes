import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, archiveNote, unarchiveNote, isShowArchivedNotes, searchTitle, dateFormatter }) {
    notes = notes.filter((note) => (note.archived === isShowArchivedNotes));
    if (searchTitle.length > 0) {
        notes = notes.filter((note) => (note.title.toLowerCase().includes(searchTitle.toLowerCase())));
    }
    
    if (notes.length > 0) {
        return (
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem {...note} key={ note.id } 
                            deleteNote={ deleteNote } 
                            archiveNote={ archiveNote }
                            unarchiveNote={ unarchiveNote }
                            dateFormatter={ dateFormatter } />
                    ))
                }
            </div>
        );
    } else {
        return (
            <div className="notes-empty-message">
                Tidak ada catatan
            </div>
        );
    }
}

export default NoteList;
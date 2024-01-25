import React from "react";

function DeleteNoteButton({ id, deleteNote }) {
    return (
        <div className="notes-list__item-action-delete" 
            id={`${id}-delete-btn`} onClick={ () => deleteNote(id) }>
            Hapus
        </div>
    );
}

function ArchiveNoteButton({ id, archiveNote }) {
    return (
        <div className="notes-list__item-action-archive" 
            id={`${id}-archive-btn`} onClick={ () => archiveNote(id) }>
            Arsipkan
        </div>
    );
}

function UnarchiveNoteButton({ id, unarchiveNote }) {
    return (
        <div className="notes-list__item-action-archive" 
            id={`${id}-unarchive-btn`} onClick={ () => unarchiveNote(id) }>
            Batal arsipkan
        </div>
    );
}

function NoteItem({ id, title, createdAt, body, archived, deleteNote, archiveNote, unarchiveNote, dateFormatter }) {
    return (
        <div className="notes-list__item">
            <div className="notes-list__item-title">
                { title }
            </div>
            <div className="notes-list__item-date">
                { dateFormatter(createdAt) }
            </div>
            <div className="notes-list__item-body">
                { body }
            </div>
            <div className="notes-list__item-action">
                <DeleteNoteButton id={ id } deleteNote={ deleteNote } />
                {
                    (() => {
                        switch(archived) {
                            case true: 
                                return (
                                    <UnarchiveNoteButton id={ id } unarchiveNote={ unarchiveNote } />
                                );
                            case false:
                                return (
                                    <ArchiveNoteButton id={ id } archiveNote={ archiveNote } />
                                );
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default NoteItem;
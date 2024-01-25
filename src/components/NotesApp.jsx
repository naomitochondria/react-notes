import React from "react";
import Sidebar from "./Sidebar";
import NotesDisplay from "./NotesDisplay";
import ActionBar from "./ActionBar";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import moment from "moment";
import { getInitialData, showFormattedDate } from "../utils/index";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarWidth: { width : "0px" },
            modalDisplay: { display : "none" },
            isShowArchivedNotes: false,
            notes: getInitialData(),
            searchTitle: "",
        };

        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.archiveNote = this.archiveNote.bind(this);
        this.unarchiveNote = this.unarchiveNote.bind(this);
        this.showUnarchivedNotes = this.showUnarchivedNotes.bind(this);
        this.showArchivedNotes = this.showArchivedNotes.bind(this);
        this.doSearchOnType = this.doSearchOnType.bind(this);
    }

    openSidebar() {
        this.setState((prevState) => {
            return {
                sidebarWidth: { width : "250px" },
            };
        });
    }

    closeSidebar() {
        this.setState((prevState) => {
            return {
                sidebarWidth: { width : "0px" }  
            };
        });
    }

    openModal() {
        this.setState((prevState) => {
            return {
                modalDisplay: { display: "block" }
            };
        });
    }

    closeModal() {
        this.setState((prevState) => {
            return {
                modalDisplay: { display: "none" }
            };
        });
    }

    addNote(title, body, archived) {
        let dateNow = moment();

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +dateNow,
                        title,
                        body,
                        createdAt: dateNow.format('dddd[,] D MMMM YYYY'),
                        archived,
                    },
                ]
            };
        });

        this.closeModal();
    }

    deleteNote(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter((note) => (note.id !== id)),
            };
        });
    }

    archiveNote(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => {
                    if (note.id === id) {
                        return { ...note, archived: true}
                    }

                    return note
                }),
            }
        });
    }

    unarchiveNote(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => {
                    if (note.id === id) {
                        return { ...note, archived: false}
                    }

                    return note
                }),
            }
        });
    }

    showUnarchivedNotes() {
        this.setState((prevState) => {
            return {
                isShowArchivedNotes: false,
            };
        });

        this.closeSidebar();
    }

    showArchivedNotes() {
        this.setState((prevState) => {
            return {
                isShowArchivedNotes: true,
            };
        });

        this.closeSidebar();
    }

    doSearchOnType(event) {
        this.setState((prevState) => {
            return {
                searchTitle: event.target.value,
            };
        });
    }

    render() {
        let noteForm = (
            <NoteForm addNote={ this.addNote } />
        );

        return (
            <div className="notes-app">
                <Sidebar sidebarWidth={ this.state.sidebarWidth } 
                    closeSidebar={ this.closeSidebar }
                    showUnarchivedNotes={ this.showUnarchivedNotes }
                    showArchivedNotes={ this.showArchivedNotes }
                    isShowArchivedNotes={ this.state.isShowArchivedNotes } />
                <Modal modalDisplay={ this.state.modalDisplay } 
                    closeModal={ this.closeModal }
                    content={ noteForm } />
                <ActionBar openModal={ this.openModal } doSearch={ this.doSearchOnType } />
                <NotesDisplay openSidebar={ this.openSidebar} 
                    notes={ this.state.notes } 
                    deleteNote={ this.deleteNote }
                    archiveNote={ this.archiveNote } 
                    unarchiveNote={ this.unarchiveNote }
                    isShowArchivedNotes={ this.state.isShowArchivedNotes }
                    searchTitle={ this.state.searchTitle }
                    dateFormatter={ showFormattedDate } />
            </div>
        );
    }
}

export default NotesApp;
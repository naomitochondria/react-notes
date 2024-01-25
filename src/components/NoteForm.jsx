import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            archived: false,
            titleCharLeft: 50,
        }

        this.onChangeNoteTitle = this.onChangeNoteTitle.bind(this);
        this.onChangeNoteBody = this.onChangeNoteBody.bind(this);
        this.onChangeNoteStatus = this.onChangeNoteStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeNoteTitle(event) {
        this.setState((prevState) => {
            let curNoteTitle = event.target.value; 
            let charAllowed = 50;
            if (curNoteTitle.length > charAllowed) {
                return {
                    title: prevState.title,
                    titleCharLeft: 0,
                }
            } else {
                return {
                    title: curNoteTitle,
                    titleCharLeft: charAllowed - curNoteTitle.length,
                };
            }
        });
    }

    onChangeNoteBody(event) {
        this.setState((prevState) => {
            return {
                body: event.target.value,
            };
        });
    }

    onChangeNoteStatus(event) {
        this.setState((prevState) => {
            return {
                archived: event.target.checked,
            };
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addNote(this.state.title, this.state.body, this.state.archived);
        
        this.setState((prevState) => {
            return {
                title: "",
                body: "",
                titleCharLeft: 50,
                archived: false,
            };
        });
    }

    render() {
        return (
            <form id="modal__form" onSubmit={ this.onSubmit }>
                <div className="modal__form-group">
                    <label htmlFor="modal__form-title">Judul catatan</label>
                    <input type="text" id="modal__form-title" 
                        value={ this.state.title } onChange={ this.onChangeNoteTitle } required/>
                    <div className="modal__title-char">Sisa <span className="modal__title-char-value">
                        { this.state.titleCharLeft } </span> karakter</div>
                </div>
                <div className="modal__form-group">
                    <label htmlFor="modal__form-body">Isi catatan</label>
                    <textarea id="modal__form-body" cols="30" rows="10"
                        value={ this.state.body }
                        onChange={ this.onChangeNoteBody } ></textarea>
                </div>

                <div className="modal__form-status">
                    <input type="checkbox" id="modal__form-archived" value={ this.state.archived }
                        onChange={ this.onChangeNoteStatus } checked={ this.state.archived }/>
                    <label htmlFor="modal__form-archived"> Arsipkan</label>
                </div>

                <div className="modal__form-group">
                    <button type="submit" id="modal__add-button" 
                        className="book-submit">TAMBAHKAN CATATAN</button>
                </div>
            </form>
        );
    }
}

export default NoteForm;
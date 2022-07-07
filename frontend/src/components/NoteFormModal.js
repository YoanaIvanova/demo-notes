import { useState } from 'react';

import axios from 'axios';
import Form from 'react-bootstrap/form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const NoteFormModal = (props) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createNote = () => {
        axios.post("http://localhost:8080/notes", {
            "title": title,
            "content": content
        }).then(res => {
            props.getNotes();
            handleClose();
        });
    };

    return (
        <div className="mt-3 mb-2">
            <Button variant="primary" onClick={handleShow}>
                Add new note
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="add-note-form">
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Note Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Control as="textarea" placeholder="Note Content" rows={3}
                                onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createNote}>
                        Create Note
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NoteFormModal;
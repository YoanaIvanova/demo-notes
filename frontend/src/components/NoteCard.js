import axios from 'axios';

import { Card } from 'react-bootstrap';
import { BsFillTrashFill, BsStar, BsStarFill } from 'react-icons/bs';

const NoteCard = (props) => {
    const deleteNote = (url) => {
        axios.delete(url).then(res => {
            console.log(res);
            props.getNotes();
        });
    };

    const flagNote = (url) => {
        axios.put(url, {
            "title": props.note.title,
            "content": props.note.content,
            "important": !props.note.important
        },
        ).then((res) => {
            console.log(res);
            props.getNotes();
        });
    };

    return (
        <Card className="note-card">
            <Card.Header className="pt-3 border-0 d-flex justify-content-end">
                {props.note.important ?
                    <BsStarFill role="button" size="1.5rem" className="icon me-3"
                        onClick={() => flagNote(props.note._links.self.href)} />
                    :
                    <BsStar role="button" size="1.5rem" className="icon me-3"
                        onClick={() => flagNote(props.note._links.self.href)} />}

                <BsFillTrashFill role="button" size="1.5rem" className="icon"
                    onClick={() => deleteNote(props.note._links.self.href)} />
            </Card.Header>
            <Card.Body className="pt-0">
                <Card.Title>{props.note.title}</Card.Title>
                <Card.Text>
                    {props.note.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NoteCard;
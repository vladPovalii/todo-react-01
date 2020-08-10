import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




export default function Todo(props) {
    const [isEdit, setIsEdit] = React.useState(false);
    const [newName, setNewName] = React.useState('');

    const dateEdit = new Date();
    const formatDateEdit = dateEdit.toDateString();

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName, formatDateEdit);
        setNewName('');
        setIsEdit(false);
    }

    function handleChange(e) {
        setNewName(e.target.value);
    }

    const viewTemplate = (
        <React.Fragment>
            <Checkbox
                onChange={() => props.toggleTaskCompleted(props.id)}
                defaultChecked={props.completed}
            />
            <ListItemText primary={props.name} secondary={props.date} />
            <IconButton onClick={() => setIsEdit(true)}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => props.deleteTask(props.id)}>
                <HighlightOffIcon />
            </IconButton>
        </React.Fragment >
    );

    const editTemplate = (
        <form onSubmit={handleSubmit}>
            <TextField
                value={newName}
                onChange={handleChange}
                autoFocus
                placeholder='edit'
                multiline
                fullWidth
            />
            <Button onClick={handleSubmit}>Save</Button>
            <Button onClick={() => setIsEdit(false)}>Cancel</Button>
        </form>
    );

    return (
        <ListItem
            divider
            disabled={props.completed}
        >
            {isEdit ? editTemplate : viewTemplate}
        </ListItem>
    );
}
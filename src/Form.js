import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function Form(props) {
    const [name, setname] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setname('')
    }

    function handleChange(e) {
        setname(e.target.value);
    }

    return (

        <form onSubmit={handleSubmit}>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <TextField
                        value={name}
                        onChange={handleChange}
                        autoFocus
                        label='add todo'
                        fullWidth
                    // multiline
                    />
                </Grid>
                <Grid item>
                    <Button
                        onClick={handleSubmit}
                        variant='contained'
                        fullWidth
                        // style={{ marginTop: 10 }}
                        color='primary'
                    >
                        ADD
            </Button>
                </Grid>
            </Grid>
        </form>

    );
}
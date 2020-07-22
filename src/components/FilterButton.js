import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function FilterButton(props) {
    return (
        <Grid item>
            <Button
                disabled={props.isPressed}
                onClick={() => props.setFilter(props.name)}
                // variant='outlined'
                color='secondary'
            >
                {props.name}
            </Button>
        </Grid >
    );
}
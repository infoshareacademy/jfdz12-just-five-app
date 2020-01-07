import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const UserFavList = (props) => {
    return (
        <ListItem>
            <ListItemIcon>
                <LocalBarOutlinedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={props.name} secondary={props.recipe} />
            <ListItemSecondaryAction>
                <IconButton aria-label="delete" color="secondary">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default UserFavList;
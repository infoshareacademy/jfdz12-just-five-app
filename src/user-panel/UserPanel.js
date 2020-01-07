import React from 'react';

import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import UserFavList from './UserFavList'

class UserPanel extends React.Component {
    state = {
        drinks: [],
        users: [],
        loggedUser: 1,
    }


    componentDidMount() {
        fetch("./drinks.json")
            .then(r => r.json())
            .then(data => {
                this.setState({
                    drinks: data.drinks
                })
            })
            .catch((error) => {
                console.error(error);
            });
        fetch("./users.json")
            .then(r => r.json())
            .then(data => {
                this.setState({
                    users: data.users
                })
            })
    }

    render() {
        const { users } = this.state
        const drinks = this.state.drinks.map(drink => (
            <UserFavList
                key={drink.id}
                name={drink.name}
                recipe={drink.recipe}
                delete={this.handleDelete}
            />
        ))

        return (
            <div>
                <Fab
                    size="small"
                    style={{
                        position: 'absolute',
                        top: "5px",
                        right: "5px"
                    }}
                    color="secondary" aria-label="close">
                    <CloseIcon />
                </Fab>
                <Card style={{ margin: "16px" }}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">JK</Avatar>
                        }
                        title="Jan Kowalski" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Wiek: {this.state.users.age} lat.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Waga: {this.state.users.weight} kg.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Wzrost: {this.state.users.height} cm.
                        </Typography>
                    </CardContent>
                    <Divider />
                    <List >
                        {drinks}
                    </List>
                </Card>
            </div >
        )
    }

}
export default UserPanel;
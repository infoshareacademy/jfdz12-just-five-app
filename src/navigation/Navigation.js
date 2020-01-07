import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FontDownloadRoundedIcon from '@material-ui/icons/FontDownloadRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import UserPanel from '../user-panel/UserPanel';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 'auto',
    },
    list: {
        width: 500,
    },
    fullList: {
        width: '800px',
    },
});

export function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        right: false,
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <UserPanel />
            </List>
        </div>
    );

    return (
        <AppBar>
            <Paper square className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor='secondary'
                    textColor='secondary'
                >
                    <Tab icon={<LocalBarRoundedIcon />} label="drinki" component={Link} to="/drinks"></Tab>
                    <Tab icon={<ShoppingCartRoundedIcon />} label="sklepy" component={Link} to="/shops"></Tab>
                    <Tab icon={<FontDownloadRoundedIcon />} label="alkomat"></Tab>
                    <Tab icon={<AddRoundedIcon />} label="dodaj drinka"></Tab>
                    <Tab icon={<AccountCircleRoundedIcon />} label="konto" onClick={toggleDrawer('right', true)}></Tab>
                </Tabs>
                <SwipeableDrawer
                    anchor="right"
                    open={state.right}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {sideList('right')}
                </SwipeableDrawer>
            </Paper>
        </AppBar>
    );
}

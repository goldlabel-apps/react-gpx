import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { configureStore } from "./store/configureStore";
import { withStyles } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './style/theme';
// import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import Home from './views/Home';

const styles = () => ({
    container: {
        margin: 'auto',
        maxWidth: 800,
    }
});
const store = configureStore();
const persistor = persistStore(store);

class GPXReplay extends Component {

    render() {
        // const { classes } = this.props
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MuiThemeProvider theme={createMuiTheme(theme)}>
                        <CssBaseline />
                        <Router>
                            <Switch>
                                <Route exact path="/" render={props => {
                                    return (<Home />);
                                }} />
                            </Switch>
                        </Router>
                    </MuiThemeProvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default withStyles(styles)(GPXReplay);

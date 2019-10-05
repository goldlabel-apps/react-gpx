import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../style/AppShell.Style';
import {
    Avatar,
    IconButton,
    Card,
    CardHeader,
    CardMedia,
} from '@material-ui/core/';
import IconRefresh from '@material-ui/icons/RefreshTwoTone';

class Home extends Component {

    render() {
        const {
            classes,
            history
        } = this.props;

        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={`GPX Replay`}
                            subheader="RESTful API with Cloud Functions"
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <IconRefresh icon={`refresh`} />
                                </Avatar>
                            }
                            action={
                                <IconButton
                                    aria-label={`Home`}
                                    color={`primary`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/`);
                                    }}>
                                    <IconRefresh icon={`refresh`} />
                                </IconButton>
                            }
                        />
                        <CardMedia
                            className={classes.media}
                            image={`/logo512.png`}
                            title={`Firebase/Node REST API`}
                        />
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // systemToggleTopAppBar: (bool) => dispatch(systemToggleTopAppBar(bool)),
    };
};

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles, { withTheme: true })(withRouter(Home)))
);

/*
<CardContent>
  <Typography variant={`body1`}>
    An application program interface (API) is a set of routines, protocols,
    and tools for building software applications. A good API makes it easier to develop a program by providing all the building blocks.
    A programmer then puts the blocks together.
  </Typography>
</CardContent>
*/
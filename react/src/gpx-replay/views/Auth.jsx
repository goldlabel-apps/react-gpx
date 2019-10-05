import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../style/AppShell.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core/';
// import IconRefresh from '@material-ui/icons/RefreshTwoTone';

class Auth extends Component {

    render() {
        const {
            classes,
            // history,
            store
        } = this.props;
        console.log('store', store)

        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={`GPX Replay`}
                            subheader="Authentication"
                            avatar={<Avatar src={`/logo192.png`} />}
                        />
                        <CardMedia
                            className={classes.media}
                            image={`/logo512.png`}
                            title={`Firebase/Node REST API`}
                        />
                        <CardContent>
                            <Typography variant={`body1`}>
                                GPX, or GPS Exchange Format
                            </Typography>
                        </CardContent>
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
    )(withStyles(styles, { withTheme: true })(withRouter(Auth)))
);

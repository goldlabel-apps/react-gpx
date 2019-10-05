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

class Home extends Component {

    render() {
        const {
            classes,
            history,
            user
        } = this.props;
        console.log('user', user)
        if (!user.authed) {
            history.push(`/auth`)
            return null;
        }

        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={`GPX Replay`}
                            subheader="Got location data?"
                            avatar={<Avatar src={`/logo192.png`} />}
                        />
                        <CardContent>
                            <Typography variant={`body1`}>
                                GPX, or GPS Exchange Format, is an XML schema designed as a common GPS data format for software applications. It can be used to describe waypoints, tracks, and routes. The format is open and can be used without the need to pay license fees. Location data (and optionally elevation, time, and other information) is stored in tags and can be interchanged between GPS devices and software. Common software applications for the data include viewing tracks projected onto various map sources, annotating maps, and geotagging photographs based on the time they were taken.
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
        user: store.userEntity.userEntityState.user,
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

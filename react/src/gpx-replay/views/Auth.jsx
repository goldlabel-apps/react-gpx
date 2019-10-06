import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { newFingerprint } from '../store/userEntity/userEntity.actions';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../style/AppShell.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core/';
// import IconRefresh from '@material-ui/icons/RefreshTwoTone';

class Auth extends Component {

    componentDidMount() {
        const {
            newFingerprint,
            user,
        } = this.props;
        const {
            fingerprint
        } = user;

        if (!fingerprint) {

            newFingerprint();

        }
    }



    render() {
        const {
            classes,
            // history,
            user
        } = this.props;




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
                                Fingerprint > {user.fingerprint}
                            </Typography>
                            <Typography variant={`body1`}>
                                IP > {user.fingerprint}
                            </Typography>
                            <Typography variant={`body1`}>
                                User Agent > {user.userAgent}
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
        newFingerprint: () => dispatch(newFingerprint()),
    };
};

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles, { withTheme: true })(withRouter(Auth)))
);


// import commonStyles from "./commonStyles";
const drawerWidth = 240;

export const styles = theme => ({
    // ...commonStyles(theme),
    root: {
        display: 'flex',
    },
    teaser: {
        padding: theme.spacing(0.5),
    },
    media: {
        height: 200,
    },
    homeButton: {
        margin: theme.spacing(1),
    },
    confirmSizer: {
        minWidth: 360,
    },
    primaryColor: {
        color: theme.palette.primary.main,
    },
    appBar: {
        marginLeft: drawerWidth,
        background: 'none',
        boxShadow: 'none'
    },
    navList: {
        marginTop: 50,
    },
    listColor: {
        color: 'rgba(255,255,255,0.9)',
    },
    toolbar: theme.mixins.toolbar,
    toolbarConstrain: {
        display: 'flex',
        flexGrow: 1,
        maxWidth: 900,
        margin: 'auto',
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'rgba(0,0,0,0.2)'
    },
    content: {
        flexGrow: 1,
    },
    text: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    paper: {
        width: `100%`,
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBarBottom: {
        top: 'auto',
        bottom: 0,
        background: 'none',
        boxShadow: 'none',
    },
    toolbarBottom: {
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'none',

    },
    fabButtonBottom: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

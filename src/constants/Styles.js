const appTheme = require('./Theme').default;


export default {
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: appTheme.container
    },
    headerSearch: {
        paddingLeft: appTheme.spacing * 2,
        backgroundColor: appTheme.decoration,
    },
    content: {
        padding: appTheme.spacing * 4
    },
    background: {
        backgroundColor: appTheme.background
    },
    marginTop: {
        marginTop: appTheme.spacing * 2
    },
    marginBottom: {
        marginBottom: appTheme.spacing * 2
    },
    marginSides: {
        marginLeft: appTheme.spacing * 2,
        marginRight: appTheme.spacing * 2
    },
    tabStyle: {
        backgroundColor: appTheme.container
    },
    tabTextStyle: {
        color: appTheme.greyFont
    },
    tabUnderLine: {
        backgroundColor: appTheme.primary
    },
    card: {
        elevation: 0,
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: appTheme.spacing * 2,
        marginRight: appTheme.spacing * 2,
        marginBottom: appTheme.spacing * 2,
        backgroundColor: appTheme.container
    }
};
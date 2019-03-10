const appTheme = require('../json/AppTheme');


export default  {
    title: {
        color: appTheme.darkFont
    },
    content: {
        flex: 1,
        padding: appTheme.spacing * 4,
        backgroundColor: appTheme.background
    },
    header: {
        backgroundColor: appTheme.container
    },
    gutterBottom: {
        marginBottom: appTheme.spacing * 2
    },
    tabUnderLine: {
        backgroundColor: appTheme.primary
    },
    tabStyle: {
        backgroundColor: appTheme.container
    },
    tabTextStyle: {
        color: appTheme.greyFont
    },
    activeTabTextStyle: {
        color: appTheme.darkFont
    }
};
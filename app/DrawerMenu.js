// Core 
import React, { PureComponent } from 'react';

// Libs 
import styled from 'styled-components/native';
import { NavigationActions } from 'react-navigation';
import { View, Text, Animated, SafeAreaView, ScrollView } from 'react-native';

//Local 
import Background from '../theme/Background';
import DrawerHeader from './DrawerHeader';
import DrawerFooter from './DrawerFooter';
import { withContext } from './AppContext';


const StyledItemText = styled(Text)`
    font-size: 24;
    padding-bottom: 4px;
`

const DrawerItemText = ({ item, ...props }) =>
    <StyledItemText onPress={props.navigateTo(item.key)} style={{
        fontWeight: props.activeItemKey === item.key ? 'bold' : '300',
        color: props.palette[`${props.activeItemKey === item.key ? 'primary' : 'secondary'}Font`]
    }}>
        {item.routeName}
    </StyledItemText>

const DrawerItems = props => props.items.map((item, index) =>
    <View key={`item.routeName-${index}`} style={{ display: 'flex', flexDirection: 'row' }}>
        <DrawerItemText {...props} item={item} />
    </View>
)

const StyledList = styled(ScrollView)`
    flex: 1;
    padding: 0px 32px 0px 32px;
`

const DrawerList = props =>
    <StyledList>
        <DrawerItems {...props} />
    </StyledList>

const DrawerContainerStyle = props => ({
    flex: 1,
    transform: [{ translateX: props.translateX }, { translateY: props.translateY }]
})

const DrawerContainer = props =>
    <Animated.View style={DrawerContainerStyle(props)}>
        <DrawerHeader {...props} />
        <DrawerList {...props} />
        <DrawerFooter {...props} />
    </Animated.View>

const DrawerBackground = props =>
    <Background
        style={{ flex: 1 }}
        darkMode={props.darkMode}
        darkBackground={props.background}>
        <DrawerContainer {...props} />
    </Background>

const DrawerLayout = props => {
    const isString = typeof (props.palette.background) === 'string';
    const background = isString ? props.palette.background : props.palette.background[0];
    return <DrawerBackground {...props} background={background} />
}

/**
 * ? Wrap with this to animate
 * <Animated.View style={{ flex: 1, transform: [{ translateX }] }}>
 */
class DrawerContent extends PureComponent {

    state = {
        user: null
    }

    translateX = this.props.drawerOpenProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [-80, 0],
    })

    translateY = this.props.drawerOpenProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [-80, 0],
    })

    navigateTo = routeName => () => {
        const navigateAction = NavigationActions.navigate({ routeName });
        this.props.navigation.dispatch(navigateAction);
    }

    componentDidMount() {
        this.props.actions.watchUser(user => this.setState({ user }));
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <DrawerLayout
                    {...this.props}
                    user={this.state.user}
                    translateX={this.translateX}
                    translateY={this.translateY}
                    navigateTo={this.navigateTo} />
            </SafeAreaView>
        )
    }

}

export default withContext(DrawerContent);
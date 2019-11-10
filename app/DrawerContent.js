// Core 
import React, { PureComponent } from 'react';

// Libs 
import styled from 'styled-components/native';
import { NavigationActions } from 'react-navigation';
import { View, Text, Animated, SafeAreaView } from 'react-native';

//Local 
import { withContext } from './AppContext';
import Avatar from '../shared/Avatar';
import Background from '../theme/Background';

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

const StyledList = styled(Animated.View)`
    padding: 0px 32px 0px 32px;
`

const DrawerList = props =>
    <StyledList style={{ flex: 1, transform: [{ translateX: props.translateX }, { translateY: props.translateY }] }}>
        <DrawerItems {...props} />
    </StyledList>

const DrawerAvatar = props =>
    <Avatar
        size={48}
        title={props.user ? props.user.username : ''}
        source={require('../assets/images/robot-prod.png')}
    />

const DrawerUsername = props =>
    <Text style={{ color: props.palette.primaryFont, fontWeight: 'bold' }} numberOfLines={1}>
        {props.user ? props.user.username : ''}
    </Text>

const DrawerEmail = props =>
    <Text style={{ color: props.palette.primaryFont, fontWeight: '100', fontSize: 12 }} numberOfLines={1}>
        {props.user ? props.user.email : ''}
    </Text>

const DrawerUser = props =>
    <View>
        <DrawerUsername {...props} />
        <DrawerEmail {...props} />
    </View>

const StyledHeader = styled(Animated.View)`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    padding: 64px 32px 16px 32px; 
`

const DrawerHeader = props =>
    <StyledHeader style={{ flex: 1, transform: [{ translateX: props.translateX }, { translateY: props.translateY }] }}>
        <DrawerAvatar {...props} />
        <View style={{ margin: 8 }} />
        <DrawerUser {...props} />
    </StyledHeader>

const ScrollableDrawer = props =>
    <Animated.ScrollView>
        <DrawerHeader {...props} />
        <DrawerList {...props} />
    </Animated.ScrollView>

const DrawerBackground = props =>
    <Background
        style={{ flex: 1 }}
        darkMode={props.darkMode}
        darkBackground={props.palette.background}>
        <ScrollableDrawer {...props} />
    </Background>

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
                <DrawerBackground
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
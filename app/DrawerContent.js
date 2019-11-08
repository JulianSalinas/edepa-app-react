// Core 
import React, { PureComponent } from 'react';

import { Text, Animated, ScrollView, SafeAreaView } from 'react-native';
import Background from '../theme/Background';
import { Avatar } from 'react-native-paper';
import { withContext } from './AppContext';
import { View } from 'native-base';
import styled from 'styled-components/native';


const DrawerItems = props => props.items.map((item, index) => 
    <View key={`item.routeName-${index}`} style={{ padding: 4 }}>
        {/* {props.renderIcon(props.activeItemKey)} */}
        <Text style={{
            fontSize: 24,
            paddingHorizontal: 32,
            color: props.activeItemKey === item.key ? 
                props.palette.primaryFont : props.palette.secondaryFont,
            fontWeight: props.activeItemKey === item.key ? 'bold' : '300'
        }}>
            {item.routeName}
        </Text>
        
    </View>
)

const StyledHeader = styled(View)`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    padding: 64px 32px 16px 32px; 
`

const ScrollableDrawer = props =>
    <ScrollView>
        <StyledHeader>

            <View style={{ padding: 4 }}>
                <Avatar.Image 
                    size={48} 
                    source={props.user ? props.user.photoUrl : require('../assets/images/robot-dev.png')}
                />
            </View>
            
            <View style={{ padding: 4 }}>
                <Text style={{ color: props.palette.primaryFont, fontWeight: 'bold' }}>
                    {props.user ? props.user.username : ''}
                </Text>
                <Text style={{ color: props.palette.primaryFont }}>
                    {props.user ? props.user.email : ''}
                </Text>
            </View>

        </StyledHeader>
        <View>
            <DrawerItems {...props} />
        </View>
    </ScrollView>

const DrawerBackground = props => 
    <Background 
        style={{ flex: 1 }}
        darkMode={props.darkMode} 
        darkBackground={props.palette.background}>
        <ScrollableDrawer {...props}/>
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
        outputRange: [-100, 0],
    })

    componentDidMount(){
        console.log('Drawer Content Props', this.props)
        this.props.actions.watchUser(user => this.setState({ user }));
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <DrawerBackground {...this.props} user={this.state.user}/>
            </SafeAreaView>
        )
    }

}

export default withContext(DrawerContent);
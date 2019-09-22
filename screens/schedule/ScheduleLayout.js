import React from 'react';
import PropTypes from 'prop-types';
import EventTypes from '../../types/Event';
import SearchScreen from '../search/SearchScreen';
import StatusBar from '../../components/StatusBar';
import SchedulePageScreen from './SchedulePageScreen';

import styles from '../../constants/Styles';
import withAppContext from '../../app/Context';

import {
    Tab,
    Tabs,
    Icon,
    Item,
    Text,
    Input,
    Header,
    Container,
    TabHeading
} from 'native-base';


const SearchBar = props => props.isSeachBarOpen ?
    <Header searchBar rounded hasTabs style={styles.header}>
        <Item style={styles.headerSearch}>
            <Input placeholder={'¿Qué quieres encontrar?'}/>
        </Item>
    </Header> : null;

const ScheduleLayout = props =>
    <Container>
        <StatusBar/>
        <SearchBar {...props}/>
        <Tabs
            initialPage={0}
            onChangeTab={({i}) => i === 0 ? props.showSearchBar() : props.hideSearchBar()}
            tabBarUnderlineStyle={styles.tabUnderLine}>
            <Tab heading={
                <TabHeading
                    style={styles.tabStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.tabStyle}
                    textStyle={styles.tabTextStyle}
                    activeTextStyle={styles.tabTextStyle}>
                    <Icon name='md-search' fontSize={8} style={styles.tabTextStyle}/>
                    <Text style={styles.tabTextStyle}>Buscar</Text>
                </TabHeading>
            }>
                <SearchScreen/>
            </Tab>
            <Tab
                heading={'Eventos'}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.tabStyle}
                textStyle={styles.tabTextStyle}
                activeTextStyle={styles.tabTextStyle}>
                <SchedulePageScreen events={props.events}/>
            </Tab>
            <Tab
                heading={'Favoritos'}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.tabStyle}
                textStyle={styles.tabTextStyle}
                activeTextStyle={styles.tabTextStyle}>
                <SchedulePageScreen events={props.events}/>
            </Tab>
        </Tabs>
    </Container>;


ScheduleLayout.propsTypes = {
    events: PropTypes.arrayOf(EventTypes),
    appTheme: PropTypes.object.isRequired,
    showSearchBar: PropTypes.func.isRequired,
    hideSearchBar: PropTypes.func.isRequired,
    isSeachBarOpen: PropTypes.bool.isRequired
};

export default withAppContext(ScheduleLayout);
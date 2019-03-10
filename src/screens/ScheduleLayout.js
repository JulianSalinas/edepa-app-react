import React from 'react';
import styles from './ScreenStyles';
import withAppContext from '../controller/AppContext';


import {
    Tab,
    Tabs,
    Icon,
    Container,
    TabHeading,
    ScrollableTab
} from 'native-base';

import { ExpoConfigView } from "@expo/samples";


const ScheduleLayout = props =>
    <Container>
        <Tabs
            tabBarUnderlineStyle={styles.tabUnderLine}
            tabBarBackgroundColor={props.appTheme.lightFont}
            renderTabBar={()=> <ScrollableTab/>}>
            <Tab heading={'Eventos'}
                 tabStyle={styles.tabStyle}
                 activeTabStyle={styles.tabStyle}
                 textStyle={styles.tabTextStyle}
                 activeTextStyle={styles.activeTabTextStyle}>
                <ExpoConfigView/>
            </Tab>
            <Tab heading={'Favoritos'}
                 tabStyle={styles.tabStyle}
                 activeTabStyle={styles.tabStyle}
                 textStyle={styles.tabTextStyle}
                 activeTextStyle={styles.activeTabTextStyle}>
                <ExpoConfigView/>
            </Tab>
            <Tab heading={
                <TabHeading
                    style={styles.tabStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.tabStyle}>
                    <Icon name="md-search" fontSize={24} style={styles.tabTextStyle}/>
                </TabHeading>
            }>
                <ExpoConfigView/>
            </Tab>
        </Tabs>
    </Container>;

export default withAppContext(ScheduleLayout);
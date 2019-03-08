import React from 'react';
import withAppContext from '../controller/AppContext';

import { ScrollView, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

const EventLayout = props =>
    <ScrollView>
        <View style={{
            padding: 16,
            display: 'flex'
        }}>
            <Text h4 style={{ marginBottom: 16 }}>
                {props.message}
            </Text>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Button
                raised
                type={'outline'}
                title={'Fuck go back!'}
                onPress={() => props.navigation.navigate('ScheduleScreen')}
            />
        </View>
    </ScrollView>;

export default withAppContext(EventLayout);
import React from 'react';
import withAppContext from '../controller/AppContext';

import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

const ScheduleLayout = props =>
    <ScrollView>
        <View style={{
            padding: 16,
            display: 'flex'
        }}>
            <Button
                raised
                type={'outline'}
                title={'Take to the Wonderland!'}
                onPress={
                    () => props.navigation.navigate('EventScreen', {
                        message: 'The police is cumming'
                    })
                }
            />
        </View>
    </ScrollView>;

export default withAppContext(ScheduleLayout);
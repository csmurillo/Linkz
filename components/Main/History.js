import * as React from 'react';
import { View, Text } from 'react-native';

import LinkzHeader from './LinkzHeader';

const History = ({navigation}) => {
    return (
        <>
            <LinkzHeader navigation={navigation}></LinkzHeader>
            <View style={{flexGrow:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>No History Found</Text>
            </View> 
        </>
    );
};

export default History;
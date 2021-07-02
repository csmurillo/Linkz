import * as React from 'react';
import { View, Button, Image, TextInput } from 'react-native';
import LinkzLogo from '../../images/linkzLogo.png';
import LinkzHeader from './LinkzHeader';

const Send = ({navigation}) => {
    return (
        <>
            <LinkzHeader navigation={navigation}></LinkzHeader>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image source={LinkzLogo}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Url"
                        keyboardType="numeric"
                    />
                    <Button title="Send">
                    </Button>
                </View>
            </View> 
        </>
    );
};

export default Send;
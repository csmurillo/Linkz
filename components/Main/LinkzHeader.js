import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Header } from 'react-native-elements';
import LinkzLogo from '../../images/linkzLogo.png';
import Icon from 'react-native-vector-icons/Ionicons';


const LinkzHeader = () => {

    const Menu = ()=>(
        <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="menu" size={30} color="black" />
        </View>
    );

    return (
        <Header
        containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
          }}        
        leftComponent={<Image style={{width:100, height:40}} source={LinkzLogo} />}
        // centerComponent={{ text: 'MY TITLE', style: { color: '#white' } }}
        // rightComponent={{ icon: 'menu', color: 'black' }}
        rightComponent={<Menu></Menu>}
        />
    );
};

export default LinkzHeader;
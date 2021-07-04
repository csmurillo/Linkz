import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinkzLogo from '../images/linkzLogo.png';

const Entry = ( { navigation } ) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View>
                    <Image source={LinkzLogo}></Image>
                </View>
                <View>
                    <View style={styles.spaceBottom}>
                    <TouchableOpacity style={{height:50, backgroundColor:'#24a0ed'}}>
                        <Text style={{fontSize:30,textAlign:'center', color: 'white'}} onPress={() => navigation.navigate('Login')}>Login</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity style={{height:50, backgroundColor:'#24a0ed'}}>
                        <Text style={{fontSize:30,textAlign:'center', color: 'white'}} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{position:'absolute',bottom:10,right:10,width:55}} >
                <Text style={{fontSize:14}} onPress={() => navigation.navigate('Send')}>Quick Network</Text>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    spaceBottom:{
        marginBottom:10
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Entry;
import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinkzLogo from '../images/linkzLogo.png';

const Entry = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View>
                    <Image source={LinkzLogo}></Image>
                </View>
                <View>
                    <View style={styles.spaceBottom}>
                    <TouchableOpacity style={{height:50, backgroundColor:'#24a0ed'}}>
                        <Text style={{fontSize:30,textAlign:'center', color: 'white'}}>Login</Text>
                    </TouchableOpacity>
                        {/* <Button title="Login"></Button> */}
                    </View>
                    <View>
                    <TouchableOpacity style={{height:50, backgroundColor:'#24a0ed'}}>
                        <Text style={{fontSize:30,textAlign:'center', color: 'white'}}>Sign Up</Text>
                    </TouchableOpacity>
                        {/* <Button title="Sign Up"></Button> */}
                    </View>
                </View>
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
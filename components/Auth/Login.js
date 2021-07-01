import * as React from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.spaceBottom}>
                <Text style={{fontSize:50}}>Login</Text>
            </View>
            <View style={styles.spaceBottom}>
                <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Email"
                        keyboardType="numeric"
                    />
            </View>
            <View style={styles.spaceBottom}>
                <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Password"
                        keyboardType="numeric"
                    />
            </View>
            <View style={styles.spaceBottom}>
                <Button title="Sign Up" style={{fontSize:20}}></Button>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    spaceBottom:{
        marginBottom:10
    }
});

export default Login;
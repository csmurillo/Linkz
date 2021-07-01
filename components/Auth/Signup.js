import * as React from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

const Signup = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.spaceBottom}>
                <Text style={{fontSize:50}}>Signup</Text>
            </View>
            <View style={styles.spaceBottom}>
                <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Name"
                        keyboardType="numeric"
                    />
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
                <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Retype Password"
                        keyboardType="numeric"
                    />
            </View>
            <View style={styles.spaceBottom}>
                <Button title="Sign Up"></Button>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    spaceBottom:{
        marginBottom:10
    }
});

export default Signup;
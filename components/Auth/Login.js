import * as React from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller } from "react-hook-form";

const Login = ( { navigation } ) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => {
        console.log(data);
        navigation.navigate('MainNavigation');
      };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.spaceBottom}>
                <Text style={{fontSize:50}}>Login</Text>
            </View>
            <View style={styles.spaceBottom}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Email"
                        // style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="email"
                    defaultValue=""
                />
                {errors.email && <Text>This is required.</Text>}
                {/* <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Email"
                        keyboardType="numeric"
                    /> */}
            </View>
            <View style={styles.spaceBottom}>
                <Controller
                    control={control}
                    rules={{
                    maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        // style={styles.input}
                        style={{borderWidth:1, width:200}}
                        placeholder="Password"
                        keyboardType="numeric"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="Password"
                    defaultValue=""
                />
                {/* <TextInput
                        style={{borderWidth:1, width:200}}
                        placeholder="Password"
                        keyboardType="numeric"
                    /> */}
            </View>
            <View style={styles.spaceBottom}>
                <Button title="Login" onPress={handleSubmit(onSubmit)} />
                {/* <Button title="Sign Up" style={{fontSize:20}}></Button> */}
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
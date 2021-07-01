import * as React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeaterIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {

    const ProfilePic = ()=>(
        <View style={{flexDirection:"row"}}>
            <FeaterIcon name="home" size={20} style={{marginLeft:15}}/>
            <Text style={{paddingLeft:5}}>Home</Text>
        </View>
    );
    const ProfileName = ()=>(
        <View style={{flexDirection:"row",marginTop:50}}>
            <View style={{flexDirection:'column'}}>
                <View style={[styles.center,{flexGrow:1}]}>
                    <EvilIcon name="user" size={150} />
                </View>
                <View style={[styles.center,{flexGrow:1}]}>
                    <Button title="Edit" style={{fontSize:25}}/>
                </View>
            </View>
            <View style={[styles.center,{flexGrow:1}]}>
                <Text style={{fontSize:25, padding:10}}>FullName</Text>
            </View>
        </View>
    );
    const SmallBag = ()=>(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'column',borderWidth:1, borderRadius:5}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="bag-personal-outline" size={120}/>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text>Small Bag</Text>
                </View>
            </View>
        </View>
    );
    const Security= ()=>(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'column',borderWidth:1, borderRadius:5}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <MaterialCommunityIcons name="security-network" size={120}/>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text>Security</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={{flexGrow:1, flexDirection:'column'}}>
           <View style={{flex:2}}>
               {<ProfilePic></ProfilePic>}
               {<ProfileName></ProfileName>}
           </View>
           <View style={{flex:2, flexDirection:'row'}}>
               {<SmallBag></SmallBag>}
               {<Security></Security>}
           </View>
        </View> 
    );
};
const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
  });

export default Home;
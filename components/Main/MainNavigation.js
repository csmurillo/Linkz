import React from 'react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

// components for main navigation
import Home from './Home';
import History from './History';
import Send from './Send';

// drawer navigation for main components(component which are to be accessed by login user)
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <EvilIcon name="user" size={150} />
        <DrawerItem
            label="Login As:"
        />
        <DrawerItemList {...props} />
        <DrawerItem
            label="Sign Out"
            onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

const MainNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false,}}>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="History" component={History}/>
                <Drawer.Screen name="Send" component={Send}/>
        </Drawer.Navigator>
    );
};

export default MainNavigation;







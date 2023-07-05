import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StyleSheet } from "react-native";

// Components
import DrawerNavigator from './DrawerNavigator';
import Filter from '../Screens/TabScreens/Filter';
import Cart from '../Screens/TabScreens/Cart';
import Delivery from '../Screens/TabScreens/Delivery';

// Images
import HomeIcon from "../assets/home.png";
import FilterIcon from "../assets/filter.png";
import CartIcon from "../assets/cart.png";
import DeliveryIcon from "../assets/delivery.png"

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator style={styles.tabBar}>
            <Tab.Screen name='home' component={DrawerNavigator} options={{
                headerShown: false, tabBarActiveTintColor: "", tabBarStyle: { height: 70 }, tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
                    <Image source={HomeIcon} style={styles.IconSize} />
                )
            }} />
            <Tab.Screen name='filter' component={Filter} options={{
                headerShown: false, tabBarActiveTintColor: "", tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
                    <Image source={FilterIcon} style={styles.IconSize} />
                )
            }} />
            <Tab.Screen name='cart' component={Cart} options={{
                headerShown: false, tabBarActiveTintColor: "", tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
                    <Image source={CartIcon} style={styles.IconSize} />
                )
            }} />
            <Tab.Screen name='delivery' component={Delivery} options={{
                headerShown: false, tabBarActiveTintColor: "", tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
                    <Image source={DeliveryIcon} style={styles.IconSize} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    IconSize: {
        width: 25,
        height: 25,
    },
    drawerColor: {
        backgroundColor: 'blue',
    },
    tabBar: {
        backgroundColor: 'blue',
    },
})
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import colors from '../Themes/colors';

export default function Song({ id, index, imageURL, title, artist, album_name, duration }) {
    return (
        <View style={styles.container}>
            {/* <ScrollView style={styles.scrollView}> */}
            <Text style={styles.index}> {index}
            </Text>
            <Image style={styles.imageURL} source={{uri:imageURL,}}/>
            <View style={styles.title_artist}>
                <Text style={styles.title} numberOfLines={1}> {title} 
                </Text>
                <Text style={styles.artist} numberOfLines={1}> {artist}
                </Text>
            </View>
            <Text style={styles.album_name}> {album_name}
            </Text>
            <Text style={styles.duration}> {duration}
            </Text>
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    

    scrollView: {
        flex: 1,
        //justifyContent: 'space-between',
    },

    container: {
        backgroundColor: colors.background,
        flex: 1, 
        flexDirection: 'row',
        left: 5,
    },

    index: {
        color: colors.gray,
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 10, 
        top: 5,
        
    },

    imageURL: {
        height: 50, 
        width: 50,
        padding: 10,
        //paddingHorizontal: 10,
        //paddingVertical: 10, 
        alignItems: "center",
    },

    title_artist :{
        height: 60, 
        width: 120,
        
    },

    title: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 10, 
        
    },

    artist: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
        paddingHorizontal: 10,
        bottom: 10,
    },

    album_name: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
        fontWeight: 'bold',
        height: 60, 
        width: 80,
        paddingVertical: 10, 
        top: 7,
        alignItems: "center",
    },

    duration: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
        fontWeight: 'bold',
        height: 60, 
        width: 80,
        paddingVertical: 10, 
        top: 7,
        alignItems: "center",
    },


});
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import colors from '../Themes/colors';
import { Ionicons } from '@expo/vector-icons';

export default function Song({ id, index, imageURL, title, artist, album_name, duration, preview, external, navigation}) {

    return (
        <View style={styles.container}>
            <Pressable onPress={() => (navigation.navigate("Preview", {webview_url: preview}))}>
                <Ionicons name="caret-forward-circle-outline" size={32} color="green"/>
            </Pressable>
            <Image style={styles.imageURL} source={{uri:imageURL,}}/>
            <View style={styles.title_artist}>
                <Pressable onPress={() => (navigation.navigate("Details", {webview_url: external}))}>
                    <Text style={styles.title} numberOfLines={1}> {title} 
                    </Text>
                    <Text style={styles.artist} numberOfLines={1}> {artist}
                    </Text>
                </Pressable>
            </View>
            <Text style={styles.album_name}> {album_name}
            </Text>
            <Text style={styles.duration}> {duration}
            </Text>
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
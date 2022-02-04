import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import colors from '../Themes/colors';

export default function Song({ id, index, imageURL, title, artist, album_name, duration }) {
    return (
        <View style={styles.container}>
            <Text style={styles.index}>
            </Text>
            <Image style={styles.imageURL} source={{uri:url,}}/>
            <View style={styles.title_artist}>
                <Text style={styles.title}> {title}
                </Text>
                <Text style={styles.artist}> {artist}
                </Text>
            </View>
            <Text style={styles.album_name}> {album_name}
            </Text>
            <Text style={styles.duration}> {duration}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1, 
        flexDirection: 'row',
    },

    index: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
    },

    imageURL: {

    },

    title_artist :{

    },

    title: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
    },

    artist: {

    },

    album_name: {

    },

    duration: {
        color: colors.gray,
        fontSize: 15,
        justifyContent: 'center',
    },


});
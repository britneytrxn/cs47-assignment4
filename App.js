import { StyleSheet, Text, SafeAreaView, View, Image, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import  colors  from './Themes/colors';
import  images  from './Themes/images';
import   Song   from './Components/song';
import millisToMinuteSeconds from './utils/millisToMinuteSeconds';

// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function App() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      // TODO: Select which option you want: Top Tracks or Album Tracks

      // Comment out the one you are not using
       //myTopTracks(setTracks, token);
       //console.log(tracks);
      albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);

  const renderItem = ({item}) => {
  let imageUrl = "";
  if (item.album.images === undefined) {
    imageUrl='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/514dc845-04f5-4538-8a4f-869b64243265/1-2.jpg';
  } else {
    imageUrl=item.album.images[0].url
  }
  console.log(item)
    return(
    <Song
    id={item.id}
    index={item.track_number}
    imageURL={imageUrl}
    title={item.name}
    artist={item.artists[0].name}
    album_name={item.album.name}
    duration={millisToMinuteSeconds(item.duration_ms)} />
  );
  }



  let contentDisplayed = null; 
  
  if (token) {
    contentDisplayed = (
     <View style={styles.container}>
       <View style={styles.top}>
          <Image style={styles.logo_top} source={images.spotify} />
          <Text style={styles.justice}> Justice
          </Text>
       </View>
     <FlatList
       data={tracks}
       renderItem={(item) => renderItem(item)}
       keyExtractor={(item) => item.id}
     />
     </View>
    );
  } else {
    contentDisplayed = (
      <Pressable style={styles.connect_button} onPress={promptAsync}>
        <Text style={styles.connect_text}>
          CONNECT WITH SPOTIFY
        </Text>
        <Image style={styles.connect_logo} source={images.spotify} />
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  
  top: {
    flexDirection:'row',
  },

  logo_top: {
    height: 30,
    width: 30,
    top: 15,
    left:15,
  },

  justice: {
    fontSize: 20, 
    fontWeight: 'bold',
    margin: 20, 
    color: "white",
  },

  connect_button: {
    height: 35,
    width: 205,
    backgroundColor: colors.spotify,
    borderWidth: 1,
    borderColor: 0,
    borderRadius: 20,
  },

  connect_text: {
    fontSize: 13,
    left: 33,
    top: 8,
    fontWeight: "bold",
    color: "white"
  },

  connect_logo: {
    height: 20,
    width: 20,
    bottom: 10,
    left: 8,
  }
});


import { WebView } from "react-native-webview";


export default function NextScreen({ route }) {
    const {webview_url} = route.params;
    return (
      <WebView source ={{uri: webview_url}}/>
    );
  }



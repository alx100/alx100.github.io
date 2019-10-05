import { AppRegistry } from "react-native";
import App from "./src/screens/App";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader"
]);
AppRegistry.registerComponent("src", () => App);

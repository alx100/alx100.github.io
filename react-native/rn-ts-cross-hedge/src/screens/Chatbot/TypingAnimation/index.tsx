import React from "react";
import { Image, View } from "react-native";
import { TypingAnimation } from "react-native-typing-animation";
import { RH, RW } from "../../../constants/window";
import { theme } from "./theme";

const TypingAnimationComponent = () => (
    <View style={theme.wrapper}>
        <Image
            style={theme.avatar}
            source={require("../../../assets/common/user_icon.png")}
        />
        <TypingAnimation
            style={theme.animationWrapper}
            dotColor="grey"
            dotMargin={0.6 * RW}
            dotAmplitude={2}
            dotRadius={0.35 * RH}
            dotX={2.6 * RW}
            dotY={0.9 * RH}
        />
    </View>
);

export default TypingAnimationComponent;

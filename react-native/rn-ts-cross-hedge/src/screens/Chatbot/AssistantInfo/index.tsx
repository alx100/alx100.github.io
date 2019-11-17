import React from "react";
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Icon } from "../../../components/Icons";
import { colors } from "../../../constants/colors";
import { RH } from "../../../constants/window";
import { router } from "../../../services/router";
import { theme } from "./theme";

interface AssistantInfo {
    avatarUrl: ImageSourcePropType;
    name: string;
    description: string;
}

type ComponentProps = AssistantInfo;

const AssistantInfo = (props: ComponentProps) => (
    <View style={theme.wrapper}>
        <View style={theme.avatarOuterWrapper}>
            <View style={theme.avatarInnerWrapper}>
                <Image style={theme.avatar} source={props.avatarUrl} />
            </View>
        </View>
        <Text style={theme.name}>{props.name}</Text>
        <Text style={theme.description}>{props.description}</Text>
        <TouchableOpacity
            onPress={() => router.replaceRoute("activities")}
            style={theme.closeIcon}
        >
            <Icon size={1.4 * RH} name={"close_icon"} color={colors.black} />
        </TouchableOpacity>
    </View>
);

export default AssistantInfo;

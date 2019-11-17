import React from "react";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import { router } from "../../services/router";
import { storage } from "../../services/storage";
import { User } from "../../types/userInfo";
import Avatar from "../Avatar/index";
import { theme } from "./theme";

interface OwnProps {
    hideName?: boolean;
    large?: boolean;
    isEmpty?: boolean;
    editable?: boolean;
    imgUri: ImageSourcePropType;
}

interface State {
    name: string;
}

type ComponentProps = OwnProps;

class ProfilePhoto extends React.Component<ComponentProps, State> {
    state: State = {
        name: ""
    };

    async componentDidMount() {
        const res = await storage.getStorageItem<User>("user");

        const name =
            res && res.user_info && res.user_info.name && res.user_info.lastName
                ? res!.user_info!.name + " " + res!.user_info!.lastName
                : "";

        this.setState({ name });
    }

    render() {
        return (
            <View style={theme.wrapper}>
                <ImageBackground
                    source={require("../../assets/activities/planet.png")}
                    style={theme.background}
                />
                {this.props.hideName ? null : (
                    <Text style={theme.name}>{this.state.name}</Text>
                )}
                <Avatar
                    onPhotoEdit={this.onPhotoEdit}
                    editable={this.props.editable!}
                    empty={this.props.isEmpty!}
                    style={theme.avatar}
                    large={this.props.large!}
                    imgUrl={this.props.imgUri}
                />
            </View>
        );
    }

    onPhotoEdit = () => router.replaceRoute("edit_photo");
}

export default ProfilePhoto;

import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import BottomBar from "../../../components/BottomBar";
import { Button } from "../../../components/Button";
import { Icon } from "../../../components/Icons";
import ProfilePhoto from "../../../components/ProfilePhoto";
import { colors } from "../../../constants/colors";
import { RFS, RH } from "../../../constants/window";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    imgOptions: {
        uri: string;
    };
}

type ComponentState = State;

type ComponentProps = any;

class EditPhoto extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            imgOptions: {
                uri: ""
            }
        };
    }

    render() {
        const { imgOptions } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <ProfilePhoto
                    imgUri={{ uri: imgOptions.uri ? imgOptions.uri : "" }}
                    large={true}
                    isEmpty={this.state.imgOptions.uri ? false : true}
                    hideName={true}
                />
                <View style={theme.container}>
                    <TouchableOpacity
                        onPress={this.openLibrary}
                        style={theme.instructionWrapper}
                    >
                        <Icon
                            name="example_photo"
                            size={4.5 * RH}
                            color={colors.textLight}
                            style={theme.instructionIcon}
                        />
                        <Text style={theme.instructionContext}>
                            Choose the best photo in your phone
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.launchCamera}
                        style={theme.instructionWrapper}
                    >
                        <Icon
                            name="camera_icon"
                            size={4.5 * RH}
                            color={colors.lightBlueCrossButton}
                            style={theme.instructionIcon}
                        />
                        <Text style={theme.instructionContext}>
                            Choose the best photo in your phone
                        </Text>
                    </TouchableOpacity>
                    <Button
                        content={t("btn_content_save")}
                        onPress={() => void 0}
                        buttonStyle={
                            !imgOptions.uri
                                ? theme.saveBtnWrapper
                                : theme.saveBtnWrapperActive
                        }
                        textStyle={
                            !imgOptions.uri
                                ? theme.saveBtnContent
                                : theme.saveBtnContentActive
                        }
                    />
                </View>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }

    openLibrary = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.launchImageLibrary(options, response => {
            try {
                const imgOptions = {
                    uri: response.uri
                };
                this.setState({ imgOptions });
            } catch (error) {
                // tslint:disable-next-line:no-console
                console.warn(error);
            }
        });
    };

    launchCamera = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.launchCamera(options, response => {
            try {
                const imgOptions = {
                    uri: response.uri
                };
                this.setState({ imgOptions });
            } catch (error) {
                // tslint:disable-next-line:no-console
                console.warn(error);
            }
        });
    };
}

export default EditPhoto;

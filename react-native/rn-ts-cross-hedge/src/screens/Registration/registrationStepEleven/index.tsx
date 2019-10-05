import React from "react";
import { Image, Text, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import { Icon } from "../../../components/Icons";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate";
import { colors } from "../../../constants/colors";
import { RH, RW } from "../../../constants/window";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

interface State {
    imageOptions: {
        uri: string;
        height: number;
        width: number;
    };
}

type ComponentProps = OwnProps;

class RegistrationStepEleven extends React.PureComponent<
    ComponentProps,
    State
> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            imageOptions: {
                uri: "",
                height: 0,
                width: 0
            }
        };
    }
    render() {
        const { imageOptions } = this.state;
        return (
            <RegistrationTemplate
                isDefaultTitle={true}
                isDefaultContinueButton={true}
                isBtnActive={true}
                isWarning={false}
                title={"Scan your ID"}
                btnContent={
                    imageOptions.uri
                        ? t("btn_content_continue")
                        : t("btn_content_scan").toLocaleUpperCase()
                }
                onStepForward={
                    imageOptions.uri
                        ? this.props.stepForward
                        : this.openImagePicker
                }
            >
                <View
                    style={
                        !imageOptions.width
                            ? theme.imageWrapper
                            : [
                                  theme.imageWrapper,
                                  {
                                      width: imageOptions.width + 2 * RW,
                                      height: imageOptions.height + 2 * RH
                                  }
                              ]
                    }
                >
                    {imageOptions.uri ? (
                        <Image
                            resizeMode="contain"
                            style={{
                                height: imageOptions.height,
                                width: imageOptions.width
                            }}
                            source={{ uri: imageOptions.uri }}
                        />
                    ) : (
                        <Icon
                            name="camera_id"
                            size={12 * RH}
                            color={colors.white}
                        />
                    )}
                </View>

                <View style={theme.textWrapper}>
                    <Text style={theme.text}>Now take your ID.</Text>
                    <Text style={theme.text}>Find a well-lit place.</Text>
                    <Text style={theme.text}>
                        Whenever you're ready click on SCAN.
                    </Text>
                </View>
            </RegistrationTemplate>
        );
    }

    openImagePicker = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.showImagePicker(options, response => {
            try {
                const imageOptions = {
                    uri: response.uri,
                    height: response.height / 2,
                    width: response.width / 2
                };
                this.setState({ imageOptions });
            } catch (error) {
                // tslint:disable-next-line:no-console
                console.warn(error);
            }
        });
    };
}

export default RegistrationStepEleven;

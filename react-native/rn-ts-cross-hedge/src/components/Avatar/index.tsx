import React from "react";
import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    View,
    ViewProperties
} from "react-native";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface OwnProps {
    large: boolean;
    empty: boolean;
    editable: boolean;
    onPhotoEdit: () => void;
    imgUrl?: ImageSourcePropType;
}

type ComponentProps = OwnProps & ViewProperties;

class Avatar extends React.Component<ComponentProps> {
    render() {
        return (
            <View {...this.props}>
                <View
                    style={
                        this.props.large
                            ? theme.wrapperLarge
                            : theme.wrapperCommon
                    }
                >
                    <View
                        style={
                            !this.props.empty
                                ? theme.innerCircle
                                : theme.innerCircleEmpty
                        }
                    >
                        <Image
                            style={
                                !this.props.empty
                                    ? this.props.large
                                        ? theme.imageLarge
                                        : theme.imageCommon
                                    : null
                            }
                            source={
                                this.props.empty
                                    ? require("../../assets/common/emptyAvatar.png")
                                    : this.props.imgUrl
                            }
                        />
                    </View>
                </View>
                {this.props.editable ? (
                    <TouchableOpacity
                        onPress={this.props.onPhotoEdit}
                        style={theme.edit}
                    >
                        <Icon
                            name="pen_icon"
                            color={colors.lightBlueCrossButton}
                            size={1.5 * RH}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        );
    }
}

export default Avatar;

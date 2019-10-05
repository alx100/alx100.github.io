import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { clearErrors } from "../../redux/actions/errorHandler";
import { ErrorHandlerStore } from "../../redux/reducers/errorHandlerReducer";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface StoreProps {
    errorHandler: ErrorHandlerStore;
}

type ComponentProps = StoreProps & DispatchProp;

class Notification extends React.PureComponent<ComponentProps> {
    render() {
        return this.props.errorHandler.notification.msg ? (
            <View style={theme.wrapper}>
                <View style={theme.title}>
                    <View style={theme.titleWrapper}>
                        <Icon
                            size={1.6 * RH}
                            name="warning_icon"
                            color={colors.lightBlueCrossButton}
                        />
                        <Text style={theme.titleMsg}>
                            {"Ooops, an error occured!"}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this.closeNotification}>
                        <Icon
                            size={1.6 * RH}
                            name={"close_circle_icon"}
                            color={colors.textLight}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={theme.msg}>
                    {this.props.errorHandler.notification.msg}
                </Text>
            </View>
        ) : null;
    }

    closeNotification = (): void => {
        this.props.dispatch(clearErrors());

        if (this.props.errorHandler.notification.onClose) {
            this.props.errorHandler.notification.onClose();
        }
    };
}

export default connect((store: StoreProps) => ({
    errorHandler: store.errorHandler
}))(Notification);

import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface State {
    phone: string;
}
interface OwnProps {
    stepForward: () => void;
}
type ComponentProps = OwnProps;

class SyncPhoneStepOne extends React.Component<ComponentProps, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            phone: ""
        };
    }

    async componentDidMount() {
        storage
            .getStorageItem<User>("user")
            .then(res =>
                this.setState({ phone: res!.user_info!.phone_number! })
            );
    }

    render() {
        const { phone } = this.state;
        const { stepForward } = this.props;
        return (
            <View style={theme.container}>
                <Image
                    source={require("../../../assets/common/sync_phone_logo.png")}
                    style={theme.image}
                />
                <View style={theme.textWrapper}>
                    <Text style={theme.text}>
                        {t("sync_phone_step_one")} {phone}
                    </Text>
                </View>
                <Button
                    onPress={stepForward}
                    content={t("btn_content_desync")}
                    buttonStyle={theme.buttonWrapper}
                    textStyle={theme.buttonContent}
                />
            </View>
        );
    }
}

export default SyncPhoneStepOne;

import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { colors } from "../../../constants/colors";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
    stepBack: () => void;
}

interface State {
    phone: string;
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
                this.setState({ phone: res!.user_info!.new_phone_number! })
            );
    }

    render() {
        const { phone } = this.state;
        const { stepForward, stepBack } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
                <View style={theme.container}>
                    <Text style={theme.text}>
                        {t("sync_phone_step_three_text")}
                    </Text>
                    <Text style={[theme.textWrapper, theme.text]}>
                        {t("sync_phone_step_three_phone_confirm")}
                    </Text>
                    <Text style={theme.phone}>{phone}</Text>
                    <View style={theme.btnWrapper}>
                        <Button
                            onPress={stepForward}
                            content={t("btn_content_yes")}
                            buttonStyle={theme.leftBtnWrapper}
                            textStyle={theme.leftBtnContent}
                        />
                        <Button
                            onPress={stepBack}
                            content={t("btn_content_no")}
                            buttonStyle={theme.rightBtnWrapper}
                            textStyle={theme.rightBtnContent}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default SyncPhoneStepOne;

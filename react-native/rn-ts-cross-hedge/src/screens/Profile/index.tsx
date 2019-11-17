import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { connect } from "react-redux";
import BottomBar from "../../components/BottomBar/index";
import EditableInfo from "../../components/EditableInfo";
import Block from "../../components/InnerPagesBlock";
import ProfileLink from "../../components/ProfileLink";
import ProfilePhoto from "../../components/ProfilePhoto";
import RegistrationBlancScreen from "../../components/RegistrationBlancScreen";
import { colors } from "../../constants/colors";
import { UserStore } from "../../redux/reducers/userReducer";
import { router } from "../../services/router";
import { storage } from "../../services/storage";
import { User } from "../../types/userInfo";
import { theme } from "./theme";

interface State {
    bankAccount: string;
    publicKey: string;
}

interface StoreProps {
    user: UserStore;
}

type ComponentProps = StoreProps;

class Profile extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            bankAccount: "",
            publicKey: ""
        };
    }

    async componentDidMount() {
        const res = await storage.getStorageItem<User>("user");

        if (
            res &&
            res.user_info &&
            res.user_info.bank_account &&
            res.user_info.public_key
        ) {
            this.setState({
                bankAccount: res.user_info.bank_account,
                publicKey: res.user_info.public_key
            });
        }
    }

    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.backgroundLight }}
            >
                <View style={{ flex: 1 }}>
                    {this.props.user.reg_type !== "full" ? (
                        <RegistrationBlancScreen />
                    ) : null}
                    <ProfilePhoto
                        imgUri={require("../../assets/common/Bitmap.png")}
                        editable={true}
                    />
                    <ScrollView>
                        <Block style={theme.infoBlock}>
                            <EditableInfo
                                editable={true}
                                theme={"light"}
                                title={"Iban"}
                                value={this.state.bankAccount}
                                onEdit={() => {
                                    router.replaceRoute("bank_details");
                                }}
                            />
                            <EditableInfo
                                editable={false}
                                theme={"light"}
                                title={"Public Key"}
                                value={this.state.publicKey}
                                divider={true}
                            />
                            <EditableInfo
                                editable={true}
                                theme={"light"}
                                title={"Your Risk Profile"}
                                value={"Bold"}
                            />
                        </Block>
                        <Block
                            style={[theme.infoBlock, { borderBottomWidth: 0 }]}
                        >
                            <ProfileLink content={"Invite Friends"} />
                            <ProfileLink
                                content={"Settings"}
                                redirect={() =>
                                    router.replaceRoute("profile_settings")
                                }
                            />
                        </Block>
                    </ScrollView>
                </View>
                <BottomBar screen={"Profile"} />
            </SafeAreaView>
        );
    }
}

export default connect((store: StoreProps) => ({ user: store.user }))(Profile);

import React from "react";
import { Image, SafeAreaView, ScrollView } from "react-native";
import BottomBar from "../../../components/BottomBar";
import EditableInfo from "../../../components/EditableInfo";
import Block from "../../../components/InnerPagesBlock";
import { colors } from "../../../constants/colors";
import { RH } from "../../../constants/window";
import { router } from "../../../services/router";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { theme } from "./theme";

interface State {
    name: string;
    birthday: string;
    phone: string;
    email: string;
    street: string;
    city: string;
    stateCountry: string;
    country: string;
}

type ComponentProps = any;

class PersonalInfo extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            name: "",
            birthday: "",
            phone: "",
            email: "",
            street: "",
            city: "",
            stateCountry: "",
            country: ""
        };
    }

    async componentDidMount() {
        const res = await storage.getStorageItem<User>("user");

        this.setState({
            name: res!.user_info!.name
                ? res!.user_info!.name + " " + res!.user_info!.lastName!
                : "---",
            birthday: res!.user_info!.birthday! || "---",
            phone: res!.user_info!.phone_number! || "---",
            email: res!.user_info!.email! || "---",
            street: res!.user_info!.address!.street! || "---",
            city:
                `${res!.user_info!.address!.city!} (${res!.user_info!.address!
                    .zip!})` || "---",
            stateCountry: res!.user_info!.address!.state! || "---",
            country: res!.user_info!.country! || "---"
        });
    }

    render() {
        const {
            name,
            birthday,
            phone,
            email,
            street,
            city,
            stateCountry,
            country
        } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <ScrollView>
                    <Block style={theme.personalInfoBlock}>
                        <Image
                            style={theme.image}
                            source={require("../../../assets/common/big_map.png")}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Name"}
                            value={name}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                            valueRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Date of Birth"}
                            value={birthday}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                            valueRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Phone number"}
                            value={phone}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Email"}
                            value={email}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                            valueRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Nationality"}
                            value={country}
                        />
                    </Block>
                    <Block style={theme.addressInfoBlock}>
                        <EditableInfo
                            editable={true}
                            theme={"light"}
                            title={"Address"}
                            divider={true}
                            titleStyle={theme.title}
                            iconColor={colors.activeTitleColor}
                            onEdit={() =>
                                router.replaceRoute("edit_address_info")
                            }
                            titleRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Street"}
                            value={street}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                            valueRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"City"}
                            value={city}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                            valueRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"State"}
                            value={stateCountry}
                            wrapperStyle={{ marginBottom: 1.5 * RH }}
                            valueRegular={true}
                        />
                        <EditableInfo
                            editable={false}
                            theme={"dark"}
                            title={"Country"}
                            value={country}
                        />
                    </Block>
                </ScrollView>
                <BottomBar screen="Profile" />
            </SafeAreaView>
        );
    }
}

export default PersonalInfo;

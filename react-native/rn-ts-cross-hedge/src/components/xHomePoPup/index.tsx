import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { toggleMenu } from "../../redux/actions/menu";
import { fetchChatbotData } from "../../redux/asyncActions/chatbot";
import { ChatbotStore } from "../../redux/reducers/chatbotReducer/index";
import { MenuStore } from "../../redux/reducers/menuReducer/index";
import { RouteNames, router } from "../../services/router";
import { AsyncDispatcher } from "../../types/dispatch";
import { t } from "../../utils/t";
import ItemImage from "../BottomBar/ItemImage";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface StoreProps {
    menu: MenuStore;
    chatbot: ChatbotStore;
}

type ComponentProps = StoreProps & AsyncDispatcher & DispatchProp;

class MenuWindow extends React.PureComponent<ComponentProps> {
    async componentDidMount() {
        this.props.dispatch(fetchChatbotData());
    }

    render() {
        const { showMenu } = this.props.menu;
        return (
            <Modal
                {...this.props}
                visible={showMenu}
                animationType={"slide"}
                transparent={true}
            >
                <View style={theme.container}>
                    {!this.props.chatbot.isCompleted ? (
                        <View style={theme.chatbotInfoWrapper}>
                            <Text style={theme.chatbotInfoContent}>
                                {t("chatbot_chatbotInfo_content")}
                            </Text>
                            <TouchableOpacity onPress={this.launchChatBot}>
                                <Image
                                    source={require("../../assets/BottomBarIcon/centerButton.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : null}
                    <View style={theme.flexRow}>
                        <ItemImage
                            onPress={this.handleRoute}
                            title={"Invest"}
                            iconName={"euro_icon"}
                            routeName="invest"
                        />
                        <ItemImage
                            onPress={this.handleRoute}
                            title="Retreat"
                            iconName={"umbrella_icon"}
                            routeName={"desinvest"}
                        />
                        <ItemImage
                            onPress={this.handleRoute}
                            title="Withdraw"
                            iconName={"withdraw_icon"}
                            routeName={"withdrawal"}
                        />
                    </View>

                    <View style={theme.position_cross}>
                        <TouchableOpacity
                            onPress={() => this.props.dispatch(toggleMenu())}
                        >
                            <Icon
                                size={1.5 * RH}
                                name="close_icon"
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }

    launchChatBot = (): void => {
        this.props.dispatch(toggleMenu());
        router.replaceRoute("chatbot");
    };

    handleRoute = (routeName: keyof RouteNames): void => {
        this.props.dispatch(toggleMenu());
        router.replaceRoute(routeName);
    };
}

export default connect((store: StoreProps) => ({
    menu: store.menu,
    chatbot: store.chatbot
}))(MenuWindow);

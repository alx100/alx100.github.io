import React from "react";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../constants/colors";
import { toggleMenu } from "../../redux/actions/menu";
import { router } from "../../services/router";
import Tabbar from "../Tabbar";

interface OwnProps {
    screen: string;
}

interface Tab {
    page: string;
    iconText?: string;
    iconName?: string;
    iconColor?: string;
    selectedIconColor?: string;
    imgIcon?: any;
    imgIconSelect?: any;
}

interface State {
    page: string;
}

type ComponentProps = OwnProps & DispatchProp;

class BottomBar extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            page: this.props.screen
        };
    }

    router = (tab: Tab) => {
        this.setState({ page: tab.page });
        switch (tab.page) {
            case "Activities":
                router.replaceRoute("activities");
                break;
            case "Account":
                router.replaceRoute("account");
                break;
            case "centerButton":
                this.props.dispatch(toggleMenu());
                break;
            case "Portfolio":
                router.replaceRoute("portfolio");
                break;
            case "Profile":
                router.replaceRoute("profile");
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <Tabbar
                stateFunc={(tab: Tab) => {
                    this.router(tab);
                }}
                tabbarBgColor={colors.white}
                selectedLabelColor={colors.lightBlueCrossButton}
                labelColor={colors.activeTitleColor}
                activePage={this.state.page}
                tabs={[
                    {
                        page: "Activities",
                        iconText: "Activities",
                        iconName: "eye_icon",
                        iconColor: colors.activeTitleColor,
                        selectedIconColor: colors.lightBlueCrossButton
                    },
                    {
                        page: "Account",
                        iconText: "Account",
                        iconName: "account",
                        iconColor: colors.activeTitleColor,
                        selectedIconColor: colors.lightBlueCrossButton
                    },
                    {
                        page: "centerButton",
                        imgIcon: require("../../assets/BottomBarIcon/centerButton.png"),
                        imgIconSelect: require("../../assets/BottomBarIcon/centerButton.png")
                    },
                    {
                        page: "Portfolio",
                        iconText: "Portfolio",
                        iconName: "portfolio",
                        iconColor: colors.activeTitleColor,
                        selectedIconColor: colors.lightBlueCrossButton
                    },
                    {
                        page: "Profile",
                        iconText: "Profile",
                        iconName: "profile",
                        iconColor: colors.activeTitleColor,
                        selectedIconColor: colors.lightBlueCrossButton
                    }
                ]}
            />
        );
    }
}
export default connect()(BottomBar);

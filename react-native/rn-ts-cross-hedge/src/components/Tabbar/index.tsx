import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RFS, RH } from "../../constants/window";
import { Icon } from "../Icons";
import { styles } from "./theme";

interface Tab {
    page: string;
    iconText?: string;
    iconName?: string;
    iconColor?: string;
    selectedIconColor?: string;
    imgIcon?: any;
    imgIconSelect?: any;
}

interface Props {
    tabbarBgColor?: string;
    tabbarBorderTopColor?: string;
    labelSize?: number;
    labelColor?: string;
    selectedLabelColor?: string;

    stateFunc: (tab: Tab) => void;
    activePage: string;
    tabs: Tab[];
}

export default class Tabbar extends Component<Props> {
    static defaultProps = {
        tabbarBgColor: "#16394f",
        tabbarBorderTopColor: null,
        iconColor: "#ccc",
        selectedIconColor: "#fff",
        labelSize: 1.1 * RFS,
        labelColor: "#ccc",
        selectedLabelColor: "#fff"
    };

    render() {
        return (
            <View style={[styles.tabBar, this.getTabbarStyle()]}>
                {this.renderTabs()}
            </View>
        );
    }

    getTabbarStyle = () => {
        const style = {};
        if (this.props.tabbarBgColor) {
            Object.assign(style, {
                backgroundColor: this.props.tabbarBgColor,
                elevation: 10,
                shadowColor: "rgba(10, 10, 10, 0.4)",
                shadowOpacity: 0.75,
                shadowRadius: 1,
                shadowOffset: { height: 0, width: 0 }
            });
        }
        if (this.props.tabbarBorderTopColor) {
            Object.assign(style, {
                borderTopColor: this.props.tabbarBorderTopColor
            });
            Object.assign(style, { borderTopWidth: 1 });
        }
        return style;
    };

    renderTabs = () => {
        return this.props.tabs.map((tab, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.iconView}
                    onPress={() => this.props.stateFunc(tab)}
                >
                    <View style={styles.tabButton}>
                        {tab.imgIcon ? (
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width: tab.iconText ? RH * 2.2 : RH * 4.5,
                                    height: tab.iconText ? RH * 2.2 : RH * 4.5,
                                    backgroundColor: "rgba(0,0,0,0)"
                                }}
                                source={
                                    this.getIconActive(tab)
                                        ? tab.imgIcon
                                        : tab.imgIconSelect
                                }
                            />
                        ) : (
                            <Icon
                                name={tab.iconName}
                                size={tab.iconText ? RH * 2.2 : RH * 4.5}
                                color={
                                    this.getIconActive(tab)
                                        ? tab.selectedIconColor
                                        : tab.iconColor
                                }
                            />
                        )}
                        {this.renderIconText(tab)}
                    </View>
                </TouchableOpacity>
            );
        });
    };

    renderIconText = (tab: Tab) => {
        if (tab.iconText) {
            return (
                <Text numberOfLines={1} style={this.getLabelStyle(tab)}>
                    {tab.iconText}
                </Text>
            );
        }
        return;
    };

    getLabelStyle = (tab: Tab) => {
        const style = {
            marginTop: 0.5 * RH,
            fontSize: this.props.labelSize
        };

        if (this.props.activePage === tab.page) {
            return Object.assign(style, {
                color: this.props.selectedLabelColor
            });
        } else {
            return Object.assign(style, { color: this.props.labelColor });
        }
    };

    getIconActive = (tab: Tab) => {
        if (this.props.activePage === tab.page) return true;
        else return false;
    };
}

import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import Block from "../../components/InnerPagesBlock";
import WithdrawDropdown from "../../components/WithdrawDropdown";
import WithdrawDropdownContent from "../../components/WithdrawDropdownContent";
import { showModal } from "../../redux/actions/modal";
import { t } from "../../utils/t";
import ModalContents from "./ModalContents";
import { theme } from "./theme";

interface State {
    dropdown: {
        safe: boolean;
        bold: boolean;
        dynamic: boolean;
        trader: boolean;
    };
}

// interface OwnProps {}

type ComponentProps = DispatchProp;

class Disinvest extends React.Component<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            dropdown: {
                safe: false,
                bold: false,
                dynamic: false,
                trader: false
            }
        };
    }
    render() {
        const { dropdown } = this.state;
        return (
            <SafeAreaView style={theme.safeArea}>
                <Block style={theme.headBlock}>
                    <Text style={theme.headText}>
                        {t("disinvest_head_block_title")}
                    </Text>
                </Block>
                <ScrollView>
                    <Block style={theme.mainBlock}>
                        <View style={theme.dropdownBlockWrapper}>
                            <WithdrawDropdown
                                content={t("safe")}
                                amount={800}
                                status={dropdown.safe}
                                getValue={value => {
                                    this.handleDropdown("safe", value);
                                }}
                            />
                            {dropdown.safe && (
                                <WithdrawDropdownContent
                                    profitValue={30.04}
                                    returnsValue={5.04}
                                    btnContent={t("btn_content_continue")}
                                    btnOnPress={() => {
                                        this.handleModal("safe");
                                    }}
                                />
                            )}
                        </View>
                        <View style={theme.dropdownBlockWrapper}>
                            <WithdrawDropdown
                                content={t("bold")}
                                amount={200}
                                status={dropdown.bold}
                                getValue={value => {
                                    this.handleDropdown("bold", value);
                                }}
                            />
                            {dropdown.bold && (
                                <WithdrawDropdownContent
                                    profitValue={30.04}
                                    returnsValue={5.04}
                                    btnContent={t("btn_content_continue")}
                                    btnOnPress={() => {
                                        this.handleModal("bold");
                                    }}
                                />
                            )}
                        </View>
                        <View style={theme.dropdownBlockWrapper}>
                            <WithdrawDropdown
                                content={t("dynamic")}
                                amount={500}
                                status={dropdown.dynamic}
                                getValue={value => {
                                    this.handleDropdown("dynamic", value);
                                }}
                            />
                            {dropdown.dynamic && (
                                <WithdrawDropdownContent
                                    profitValue={30.04}
                                    returnsValue={5.04}
                                    btnContent={t("btn_content_continue")}
                                    btnOnPress={() => {
                                        this.handleModal("dynamic");
                                    }}
                                />
                            )}
                        </View>
                        <View style={theme.dropdownBlockWrapper}>
                            <WithdrawDropdown
                                content={t("trader")}
                                amount={1300}
                                status={dropdown.trader}
                                getValue={value => {
                                    this.handleDropdown("trader", value);
                                }}
                            />
                            {dropdown.trader && (
                                <WithdrawDropdownContent
                                    profitValue={30.04}
                                    returnsValue={5.04}
                                    btnContent={t("btn_content_continue")}
                                    btnOnPress={() => {
                                        this.handleModal("trader");
                                    }}
                                />
                            )}
                        </View>
                    </Block>
                </ScrollView>
            </SafeAreaView>
        );
    }

    handleDropdown = (name: string, value: boolean) => {
        this.setState(prevState => ({
            dropdown: {
                ...prevState.dropdown,
                [name]: value
            }
        }));
    };

    handleModal = (name: string) => {
        this.props.dispatch(
            showModal({
                showBackground: true,
                elements: (
                    <ModalContents
                        title={[t(name), t("disinvest_confirmed_title")]}
                    />
                ),
                closeType: "default"
            })
        );
    };
}

export default connect()(Disinvest);

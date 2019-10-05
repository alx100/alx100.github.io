import React from "react";
import { ScrollView } from "react-native";
import { router } from "../../../services/router";
import { storage } from "../../../services/storage";
import { t } from "../../../utils/t";
import ChatMessageBlock from "../MessageBlock";
import ProfileType from "../ProfileType";
import TypingAnimationComponent from "../TypingAnimation";
import UserOptionTable from "../UserOptions/Table";

export const CHATBOT_INFO = "_ChatbotInfo";

export interface ChatBotInfo {
    withdrawalType?: number;
    spendingType?: number;
    investmentKnowledge?: number;
    concernedType?: number;
    lossType?: number;
    valuablesType?: number;
    outcomesType?: number;
    isCompleted?: boolean;
}

interface State {
    isTyping: boolean;
    step: number;
    blockFourConfirmed: boolean;
}

class Chat extends React.PureComponent<any, State> {
    state: State = {
        isTyping: false,
        step: 1,
        blockFourConfirmed: true
    };
    private scrollView: ScrollView | null = null;
    render() {
        return (
            <ScrollView
                ref={ref => (this.scrollView = ref)}
                onContentSizeChange={() => {
                    if (this.scrollView && this.state.step !== 9) {
                        this.scrollView.scrollToEnd({ animated: true });
                    }
                }}
            >
                <ChatMessageBlock
                    onSubmit={this.handleBlockOne}
                    botMsg={t("chatbot_blockOne_botMsg")}
                    options={[
                        {
                            name: "option_one",
                            value: 0,
                            content: t("chatbot_blockOne_optionOne")
                        },
                        {
                            name: "option_two",
                            value: 1,
                            content: t("chatbot_blockOne_optionTwo")
                        }
                    ]}
                />
                {this.state.step > 1 ? (
                    <ChatMessageBlock
                        onSubmit={this.handleBlockTwo}
                        botMsg={t("chatbot_blockTwo_botMsg")}
                        options={[
                            {
                                name: "option_one",
                                value: 0,
                                content: t("chatbot_blockTwo_optionOne")
                            },
                            {
                                name: "option_two",
                                value: 1,
                                content: t("chatbot_blockTwo_optionTwo")
                            },
                            {
                                name: "option_three",
                                value: 2,
                                content: t("chatbot_blockTwo_optionThree")
                            },
                            {
                                name: "option_four",
                                value: 3,
                                content: t("chatbot_blockTwo_optionFour")
                            }
                        ]}
                    />
                ) : null}
                {this.state.step > 2 ? (
                    <ChatMessageBlock
                        onSubmit={this.handleBlockThree}
                        botMsg={t("chatbot_blockThree_botMsg")}
                        options={[
                            {
                                name: "option_one",
                                value: 0,
                                content: t("chatbot_blockThree_optionOne")
                            },
                            {
                                name: "option_two",
                                value: 1,
                                content: t("chatbot_blockThree_optionTwo")
                            },
                            {
                                name: "option_three",
                                value: 2,
                                content: t("chatbot_blockThree_optionThree")
                            },
                            {
                                name: "option_four",
                                value: 3,
                                content: t("chatbot_blockThree_optionFour")
                            }
                        ]}
                    />
                ) : null}
                {this.state.step > 3 ? (
                    <ChatMessageBlock
                        onSubmit={this.handleBlockFour}
                        botMsg={t("chatbot_blockFour_botMsg")}
                        options={[
                            {
                                name: "option_one",
                                value: 0,
                                content: t("chatbot_blockFour_optionOne")
                            },
                            {
                                name: "option_two",
                                value: 1,
                                content: t("chatbot_blockFour_optionTwo")
                            }
                        ]}
                    />
                ) : null}
                {this.state.step > 4 ? (
                    this.state.blockFourConfirmed ? (
                        <ChatMessageBlock
                            onSubmit={this.handleBlockFive}
                            botMsg={t("chatbot_blockFive_confirmed_botMsg")}
                            options={[
                                {
                                    name: "option_one",
                                    value: 0,
                                    content: t(
                                        "chatbot_blockFive_confirmed_optionOne"
                                    )
                                },
                                {
                                    name: "option_two",
                                    value: 1,
                                    content: t(
                                        "chatbot_blockFive_confirmed_optionTwo"
                                    )
                                },
                                {
                                    name: "option_three",
                                    value: 2,
                                    content: t(
                                        "chatbot_blockFive_confirmed_optionThree"
                                    )
                                },
                                {
                                    name: "option_four",
                                    value: 3,
                                    content: t(
                                        "chatbot_blockFive_confirmed_optionFour"
                                    )
                                }
                            ]}
                        />
                    ) : (
                        <ChatMessageBlock
                            onSubmit={this.handleBlockFive}
                            botMsg={t("chatbot_blockFive_declined_botMsg")}
                            options={[
                                {
                                    name: "option_one",
                                    value: 0,
                                    content: t(
                                        "chatbot_blockFive_declined_optionOne"
                                    )
                                },
                                {
                                    name: "option_two",
                                    value: 1,
                                    content: t(
                                        "chatbot_blockFive_declined_optionTwo"
                                    )
                                }
                            ]}
                        />
                    )
                ) : null}
                {this.state.step > 5 ? (
                    this.state.blockFourConfirmed ? (
                        <ChatMessageBlock
                            onSubmit={this.handleBlockSix}
                            botMsg={t("chatbot_blockSix_confirmed_botMsg")}
                            options={[
                                {
                                    name: "option_one",
                                    value: 0,
                                    content: t(
                                        "chatbot_blockSix_confirmed_optionOne"
                                    )
                                },
                                {
                                    name: "option_two",
                                    value: 1,
                                    content: t(
                                        "chatbot_blockSix_confirmed_optionTwo"
                                    )
                                },
                                {
                                    name: "option_three",
                                    value: 2,
                                    content: t(
                                        "chatbot_blockSix_confirmed_optionThree"
                                    )
                                }
                            ]}
                        />
                    ) : (
                        <ChatMessageBlock
                            onSubmit={this.handleBlockSix}
                            botMsg={t("chatbot_blockSix_declined_botMsg")}
                            options={[
                                {
                                    name: "option_one",
                                    value: 0,
                                    content: t(
                                        "chatbot_blockSix_declined_optionOne"
                                    )
                                },
                                {
                                    name: "option_two",
                                    value: 1,
                                    content: t(
                                        "chatbot_blockSix_declined_optionTwo"
                                    )
                                }
                            ]}
                        />
                    )
                ) : null}
                {this.state.step > 6 ? (
                    this.state.blockFourConfirmed ? (
                        <ChatMessageBlock
                            onSubmit={this.handleBlockSeven}
                            botMsg={t("chatbot_blockSeven_confirmed_botMsg")}
                            options={[
                                {
                                    name: "option_one",
                                    value: 0,
                                    content: t(
                                        "chatbot_blockSeven_confirmed_optionOne"
                                    )
                                },
                                {
                                    name: "option_two",
                                    value: 1,
                                    content: t(
                                        "chatbot_blockSeven_confirmed_optionTwo"
                                    )
                                },
                                {
                                    name: "option_three",
                                    value: 2,
                                    content: t(
                                        "chatbot_blockSeven_confirmed_optionThree"
                                    )
                                },
                                {
                                    name: "option_four",
                                    value: 3,
                                    content: t(
                                        "chatbot_blockSeven_confirmed_optionFour"
                                    )
                                }
                            ]}
                        />
                    ) : (
                        <ChatMessageBlock
                            onSubmit={this.handleBlockSeven}
                            botMsg={t("chatbot_blockSeven_declined_botMsg")}
                            options={[
                                {
                                    name: "option_one",
                                    value: 0,
                                    content: t(
                                        "chatbot_blockSeven_declined_optionOne"
                                    )
                                }
                            ]}
                        />
                    )
                ) : null}
                {this.state.step > 7 ? (
                    <ChatMessageBlock
                        onSubmit={this.handleBlockEight}
                        botMsg={t("chatbot_blockEight_botMsg")}
                        options={[
                            {
                                name: "option_one",
                                value: 0,
                                content: t("chatbot_blockEight_optionOne")
                            },
                            {
                                name: "option_two",
                                value: 1,
                                content: t("chatbot_blockEight_optionTwo")
                            },
                            {
                                name: "option_three",
                                value: 2,
                                content: t("chatbot_blockEight_optionThree")
                            }
                        ]}
                    />
                ) : null}
                {this.state.step > 8 ? (
                    <ChatMessageBlock
                        onSubmit={this.handleBlockNine}
                        botMsg={t("chatbot_blockNine_botMsg")}
                        options={[
                            {
                                name: "option_one",
                                value: 0,
                                content: (
                                    <UserOptionTable
                                        fields={[
                                            {
                                                name: "Plan:",
                                                value: "A"
                                            },
                                            {
                                                name: "Average annual return:",
                                                value: "7.2%"
                                            },
                                            {
                                                name: "Best-case",
                                                value: "25.0%"
                                            },
                                            {
                                                name: "Worst-case",
                                                value: "-5.6%"
                                            }
                                        ]}
                                    />
                                )
                            },
                            {
                                name: "option_two",
                                value: 1,
                                content: (
                                    <UserOptionTable
                                        fields={[
                                            {
                                                name: "Plan:",
                                                value: "B"
                                            },
                                            {
                                                name: "Average annual return:",
                                                value: "9.0%"
                                            },
                                            {
                                                name: "Best-case",
                                                value: "33.6%"
                                            },
                                            {
                                                name: "Worst-case",
                                                value: "-12.1%"
                                            }
                                        ]}
                                    />
                                )
                            },
                            {
                                name: "option_three",
                                value: 2,
                                content: (
                                    <UserOptionTable
                                        fields={[
                                            {
                                                name: "Plan:",
                                                value: "C"
                                            },
                                            {
                                                name: "Average annual return:",
                                                value: "10.4%"
                                            },
                                            {
                                                name: "Best-case",
                                                value: "42.8%"
                                            },
                                            {
                                                name: "Worst-case",
                                                value: "-18.2%"
                                            }
                                        ]}
                                    />
                                )
                            },
                            {
                                name: "option_four",
                                value: 3,
                                content: (
                                    <UserOptionTable
                                        fields={[
                                            {
                                                name: "Plan:",
                                                value: "D"
                                            },
                                            {
                                                name: "Average annual return:",
                                                value: "11.7%"
                                            },
                                            {
                                                name: "Best-case",
                                                value: "50.0%"
                                            },
                                            {
                                                name: "Worst-case",
                                                value: "-24.0%"
                                            }
                                        ]}
                                    />
                                )
                            },
                            {
                                name: "option_five",
                                value: 4,
                                content: (
                                    <UserOptionTable
                                        fields={[
                                            {
                                                name: "Plan:",
                                                value: "E"
                                            },
                                            {
                                                name: "Average annual return:",
                                                value: "12.5%"
                                            },
                                            {
                                                name: "Best-case",
                                                value: "16.3%"
                                            },
                                            {
                                                name: "Worst-case",
                                                value: "-28.2%"
                                            }
                                        ]}
                                    />
                                )
                            }
                        ]}
                    />
                ) : null}
                {this.state.step > 9 ? (
                    <ChatMessageBlock botMsg={t("chatbot_blockTen_botMsg")} />
                ) : null}
                {this.state.isTyping ? <TypingAnimationComponent /> : null}
                {this.state.step > 9 ? (
                    <ProfileType profileType={"bold"} />
                ) : null}
            </ScrollView>
        );
    }

    setStep = (step: number, duration?: number): void => {
        this.setState({ isTyping: true });
        setTimeout(
            () => {
                this.setState({ isTyping: false, step });
            },
            duration ? duration * 1000 : 2000
        );
    };

    handleBlockOne = (value: number): void => {
        switch (value) {
            case 0:
                this.setStep(2, 4);
                break;

            default:
                router.replaceRoute("activities");
                break;
        }
    };

    handleBlockTwo = (withdrawalType: number): void => {
        storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, { withdrawalType });
        this.setStep(3);
    };

    handleBlockThree = (spendingType: number): void => {
        storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, { spendingType });
        this.setStep(4, 3);
    };

    handleBlockFour = (value: number): void => {
        switch (value) {
            case 0:
                this.setStep(5, 3);
                break;

            default:
                this.setState({ blockFourConfirmed: false });
                this.setStep(5, 2);
                break;
        }
    };

    handleBlockFive = (investmentKnowledge: number): void => {
        if (this.state.blockFourConfirmed) {
            storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, {
                investmentKnowledge
            });
            this.setStep(6, 1);
            return;
        }

        this.setStep(6);
    };

    handleBlockSix = (concernedType: number): void => {
        if (this.state.blockFourConfirmed) {
            storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, {
                concernedType
            });
            this.setStep(7);
            return;
        }

        this.setStep(7);
    };

    handleBlockSeven = (lossType: number): void => {
        if (this.state.blockFourConfirmed) {
            storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, {
                lossType
            });
            this.setStep(8);
            return;
        }

        router.replaceRoute("activities");
    };

    handleBlockEight = (valuablesType: number): void => {
        storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, {
            valuablesType
        });
        this.setStep(9, 1);
    };

    handleBlockNine = (outcomesType: number) => {
        storage.setStorageItem<ChatBotInfo>(CHATBOT_INFO, {
            outcomesType,
            isCompleted: true
        });

        this.setStep(10, 5);
    };
}

export default Chat;

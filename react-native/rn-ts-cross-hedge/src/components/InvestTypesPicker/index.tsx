import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { InvestTypes } from "../../screens/Invest";
import { t } from "../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    access: 1 | 2 | 3 | 4;
    loadData: (type: InvestTypes) => void;
}

interface State {
    selected: string;
}

interface Item {
    range: number;
    type: InvestTypes;
    content: string;
}

class InvestTypesPicker extends React.PureComponent<OwnProps, State> {
    private Items: Item[] = [
        {
            range: 1,
            type: "safe",
            content: t("safe")
        },
        {
            range: 2,
            type: "bold",
            content: t("bold")
        },
        {
            range: 3,
            type: "dynamic",
            content: t("dynamic")
        },
        {
            range: 4,
            type: "trader",
            content: t("trader")
        }
    ];

    constructor(props: OwnProps) {
        super(props);

        this.state = {
            selected: this.Items[0].content
        };
    }

    render() {
        return (
            <View style={theme.wrapper}>
                {this.Items.map((el, i) => (
                    <TouchableOpacity
                        key={i}
                        disabled={el.range > this.props.access}
                        onPress={() => this.loadData(el.type, el.content)}
                        style={
                            el.content === this.state.selected
                                ? theme.activeBtnWrapper
                                : theme.btnWrapper
                        }
                    >
                        <Text
                            style={
                                el.range > this.props.access
                                    ? theme.bluredRange
                                    : theme.activeRange
                            }
                        >
                            {el.content.toLocaleUpperCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    loadData = (type: InvestTypes, content: string) => {
        this.setState({ selected: content });
        this.props.loadData(type);
    };
}

export default InvestTypesPicker;

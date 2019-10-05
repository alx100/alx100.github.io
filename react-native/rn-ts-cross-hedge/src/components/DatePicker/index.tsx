import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { t } from "../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    loadData: (range: number) => void;
}

interface State {
    selected: string;
}

interface Item {
    range: number;
    content: string;
}

class DatePicker extends React.PureComponent<OwnProps, State> {
    private Items: Item[] = [
        {
            range: 1,
            content: t("datePicker_month_one")
        },
        {
            range: 3,
            content: t("datePicker_month_three")
        },
        {
            range: 6,
            content: t("datePicker_month_six")
        },
        {
            range: 12,
            content: t("datePicker_month_twelve")
        },
        {
            range: 60,
            content: t("datePicker_month_sixty")
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
                        onPress={() => this.loadData(el.range, el.content)}
                    >
                        <Text
                            style={
                                el.content === this.state.selected
                                    ? theme.activeRange
                                    : theme.bluredRange
                            }
                        >
                            {el.content}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    loadData = (range: number, content: string) => {
        this.setState({ selected: content });
        this.props.loadData(range);
    };
}

export default DatePicker;

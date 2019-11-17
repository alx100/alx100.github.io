import React from "react";
import { TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";
import RegistrationTemplate from "../../../components/RegistrationScreenTemplate/index";
import { months } from "../../../constants/birthdays";
import { storage } from "../../../services/storage";
import { User } from "../../../types/userInfo";
import { t } from "../../../utils/t";
import { theme } from "./theme";

interface OwnProps {
    stepForward: () => void;
}

interface State {
    birthday: string;
    date: Date;
}

type ComponentProps = OwnProps;

class RegistrationStepFive extends React.PureComponent<ComponentProps, State> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            birthday: "Birthday",
            date: new Date()
        };
    }

    render() {
        // tslint:disable-next-line:no-shadowed-variable
        const { birthday, date } = this.state;
        return (
            <RegistrationTemplate
                isDefaultTitle={true}
                isDefaultContinueButton={true}
                isWarning={false}
                isBtnActive={birthday !== "Birthday" && birthday.length > 1}
                onStepForward={this.stepForward}
                btnContent={t("btn_content_continue")}
                title={"What is your date of birth?"}
            >
                <TextInput
                    value={birthday}
                    editable={false}
                    selectTextOnFocus={false}
                    style={theme.input}
                    underlineColorAndroid={"rgba(0,0,0,0)"}
                />
                <DatePicker
                    date={date}
                    onDateChange={this.handleDate}
                    maximumDate={new Date(2019, 0)}
                    minimumDate={new Date(0)}
                    locale={"en"}
                    mode={"date"}
                    timeZoneOffsetInMinutes={0}
                    style={theme.datepicker}
                    textColor={"#ffffff"}
                    fadeToColor={"none"}
                />
            </RegistrationTemplate>
        );
    }

    handleDate = (newDate: Date) => {
        this.setState({
            date: newDate,
            birthday: this.formatDate(
                newDate.getDate(),
                months[newDate.getMonth()],
                newDate.getFullYear()
            )
        });
    };

    formatDate = (day: number, month: string, year: number) => {
        const suffix: () => string = () => {
            if (day === 1 || day === 21 || day === 31) return "st";
            if (day === 2 || day === 22) return "nd";
            if (day === 3 || day === 23) return "rd";
            return "th";
        };
        return `${day + suffix()} of ${month} ${year}`;
    };

    stepForward = () => {
        if (this.state.birthday !== "Birthday" && this.state.birthday) {
            storage
                .setStorageItem<User>("user", {
                    user_info: {
                        birthday: this.state.birthday
                    }
                })
                .then(() => this.props.stepForward());
        }
    };
}

export default RegistrationStepFive;

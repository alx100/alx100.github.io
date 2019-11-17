import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../../constants/colors";
import { RH } from "../../../constants/window";
import { hideModal } from "../../../redux/actions/modal";
import { Icon } from "../../Icons";
import DetailViewInfoRow from "../DetailedViewInfoRow";
import { theme } from "./theme";

interface OwnProps {
    title: string;
    info: Array<{ name: string; value: string }>;
}

type ComponentProps = OwnProps & DispatchProp;

const DetailedView = (props: ComponentProps) => (
    <View style={theme.wrapper}>
        <View style={theme.titleWrapper}>
            <Text style={theme.title}>{props.title}</Text>
            <TouchableOpacity
                style={theme.btn}
                onPress={() => props.dispatch(hideModal())}
            >
                <Icon
                    name={"close_icon"}
                    size={1.5 * RH}
                    color={colors.lightBlueCrossButton}
                />
            </TouchableOpacity>
        </View>
        <View>
            {props.info.map((el, i) => (
                <DetailViewInfoRow key={i} {...el} />
            ))}
        </View>
    </View>
);

export default connect()(DetailedView);

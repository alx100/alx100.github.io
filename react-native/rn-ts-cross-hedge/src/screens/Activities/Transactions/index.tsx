import React from "react";
import { ScrollView } from "react-native";
import { ListForMonth } from "../../../api/resources/index";
import MonthBlock from "../../../components/MonthlyTransactions";
import { theme } from "./theme";

interface OwnProps {
    list: ListForMonth[];
}

type ComponentProps = OwnProps;

const TransactionList = (props: ComponentProps) => (
    <ScrollView
        contentContainerStyle={theme.scrollViewContent}
        style={theme.scrollView}
    >
        {props.list.map((el, i) => (
            <MonthBlock
                key={i}
                month={el.month}
                data={el.data}
                name={"calendar_icon"}
            />
        ))}
    </ScrollView>
);

export default TransactionList;

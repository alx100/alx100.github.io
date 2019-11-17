import React, { Fragment } from "react";
import { Text, View } from "react-native";
import { theme } from "./theme";

interface OwnProps {
    title: string[];
    subtitle?: string[];
    step: number;
}

type ComponentProps = OwnProps;

class InvestModalTemplate extends React.Component<ComponentProps> {
    render() {
        const { title, subtitle, children, step } = this.props;
        return (
            <Fragment>
                {title[step] && (
                    <View style={theme.headWrapper}>
                        <Text
                            style={
                                subtitle && subtitle[step]
                                    ? theme.title
                                    : theme.titleBig
                            }
                        >
                            {title[step]}
                        </Text>
                        {subtitle && subtitle[step] && (
                            <Text style={theme.subtitle}>{subtitle[step]}</Text>
                        )}
                    </View>
                )}
                {children}
            </Fragment>
        );
    }
}
export default InvestModalTemplate;

import React from "react";
import {
    ImageBackground,
    Linking,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { getNews } from "../../api/resources";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { t } from "../../utils/t";
import { Icon } from "../Icons";
import Block from "../InnerPagesBlock";
import { theme } from "./theme";

interface OwnProps {
    onClose: () => void;
}

interface State {
    descriptonNews: string;
    link: string;
}

class News extends React.PureComponent<OwnProps, State> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            descriptonNews: "",
            link: ""
        };
    }

    async componentDidMount() {
        const res = await getNews();

        this.setState({
            descriptonNews: res.articles[0].title,
            link: res.articles[0].url
        });
    }

    render() {
        const { descriptonNews, link } = this.state;
        return (
            <Block style={theme.container}>
                <ImageBackground
                    style={theme.image}
                    source={require("../../assets/activities/planet.png")}
                >
                    <View>
                        <View style={theme.titleWrapper}>
                            <Text style={theme.newsTitle}>
                                {t("business_news_title")}
                            </Text>
                            <TouchableOpacity onPress={this.props.onClose}>
                                <Icon
                                    size={1.6 * RH}
                                    style={theme.crossIcon}
                                    name={"close_circle_icon"}
                                    color={colors.textLight}
                                />
                            </TouchableOpacity>
                        </View>
                        {descriptonNews && link ? (
                            <React.Fragment>
                                <Text style={theme.newsDescription}>
                                    {descriptonNews}
                                </Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(link);
                                    }}
                                >
                                    <Text style={theme.link}>> Read</Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        ) : null}
                    </View>
                </ImageBackground>
            </Block>
        );
    }
}

export default News;

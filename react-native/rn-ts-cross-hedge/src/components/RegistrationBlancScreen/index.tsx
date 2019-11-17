import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "../../services/router";
import { theme } from "./theme";

const RegistrationBlancScreen = () => (
    <View style={theme.wrapper}>
        <TouchableOpacity onPress={() => router.replaceRoute("registration")}>
            <View style={theme.button}>
                <Text style={theme.text}>{"Finish registration process"}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default RegistrationBlancScreen;

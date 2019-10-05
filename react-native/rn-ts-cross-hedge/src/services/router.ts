import { Actions } from "react-native-router-flux";

export interface RouteNames {
    login: string;
    partlyRegistration: string;
    registration: string;
    activities: string;
    profile: string;
    depositInfo: string;
    syncphone: string;
    test: string;
    regTypes_crypto_step_one: string;
    regTypes_crypto_step_two: string;
    regTypes_crypto_step_three: string;
    regTypes_crypto_step_four: string;
    regTypes_bank_step_one: string;
    regTypes_both_step_one: string;
    regTypes_both_step_two: string;
    account: string;
    portfolio: string;
    portfolio_globalView: string;
    portfolio_type_safe: string;
    portfolio_type_bold: string;
    portfolio_type_dynamic: string;
    invest: string;
    invest_history: string;
    desinvest: string;
    withdrawal: string;
    bank_details: string;
    edit_bank_account: string;
    edit_wallet: string;
    profile_settings: string;
    modify_password: string;
    notifications_setting: string;
    change_language: string;
    personal_info: string;
    edit_address_info: string;
    edit_photo: string;
    chatbot: string;
    registration_completed: string;
}

class RouterService {
    public routes: RouteNames = {
        login: "login",
        partlyRegistration: "partlyRegistration",
        registration: "registration",
        activities: "activities",
        profile: "profile",
        depositInfo: "depositInfo",
        syncphone: "syncphone",
        test: "test",
        regTypes_crypto_step_one: "regTypes_crypto_step_one",
        regTypes_crypto_step_two: "regTypes_crypto_step_two",
        regTypes_crypto_step_three: "regTypes_crypto_step_three",
        regTypes_crypto_step_four: "regTypes_crypto_step_four",
        regTypes_bank_step_one: "regTypes_bank_step_one",
        regTypes_both_step_one: "regTypes_both_step_one",
        regTypes_both_step_two: "regTypes_both_step_two",
        account: "account",
        portfolio: "portfolio",
        portfolio_globalView: "portfolio_globalView",
        portfolio_type_bold: "portfolio_type_bold",
        portfolio_type_safe: "portfolio_type_safe",
        portfolio_type_dynamic: "portfolio_type_dynamic",
        invest: "invest",
        invest_history: "invest_history",
        desinvest: "desinvest",
        withdrawal: "withdrawal",
        bank_details: "bank_details",
        edit_bank_account: "edit_bank_account",
        edit_wallet: "edit_wallet",
        profile_settings: "profile_settings",
        modify_password: "modify_password",
        notifications_setting: "notifications_setting",
        change_language: "change_language",
        personal_info: "personal_info",
        edit_address_info: "edit_address_info",
        edit_photo: "edit_photo",
        chatbot: "chatbot",
        registration_completed: "registration_completed"
    };

    public replaceRoute<Props>(route: keyof RouteNames, props?: Props): void {
        Actions.push(route, props);
    }
}

export const router = new RouterService();

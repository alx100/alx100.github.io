import { ReduxAction } from "../../../types/action";
import { SET_EN_LOCALE, SET_ES_LOCALE, SET_FR_LOCALE } from "../../constants";

export type Languages = "en" | "fr" | "es";

export interface LocaleStore {
    currentLocale: string;
    en: Record<string, string>;
    fr: Record<string, string>;
    es: Record<string, string>;
}

export interface LocalePayload {
    locale: Record<string, string>;
}

const initialState: LocaleStore = {
    currentLocale: "en",
    en: {},
    fr: {},
    es: {}
};

export default function locale(
    state = initialState,
    action: ReduxAction<LocalePayload>
) {
    switch (action.type) {
        case SET_EN_LOCALE:
            return {
                ...state,
                currentLocale: "en",
                en: action.payload!.locale
            };
        case SET_FR_LOCALE:
            return {
                ...state,
                currentLocale: "fr",
                fr: action.payload!.locale
            };
        case SET_ES_LOCALE:
            return {
                ...state,
                currentLocale: "es",
                es: action.payload!.locale
            };
        default:
            return state;
    }
}

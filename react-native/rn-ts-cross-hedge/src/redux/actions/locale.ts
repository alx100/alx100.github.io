import {
    SET_EN_LOCALE,
    SET_ES_LOCALE,
    SET_FR_LOCALE
} from "../constants/index";
import { Languages, LocalePayload } from "../reducers/localeReducer";

export function setLocale(lang: Languages, payload: LocalePayload) {
    switch (lang) {
        case "en":
            return {
                type: SET_EN_LOCALE,
                payload
            };
        case "fr":
            return {
                type: SET_FR_LOCALE,
                payload
            };
        case "es":
            return {
                type: SET_ES_LOCALE,
                payload
            };
    }
}

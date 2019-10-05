import { Dispatch } from "redux";
import { getLocale, LocaleResponse } from "../../api/locales";
import { Store } from "../../screens/App";
import { storage } from "../../services/storage";
import { User } from "../../types/userInfo";
import { setLocale } from "../actions/locale";
import { Languages } from "../reducers/localeReducer";

export const fetchLocale = (
    lang: Languages,
    callback?: (lang: Languages) => void
) => (dispatch: Dispatch) => {
    const { locale } = Store.getState();
    storage.setStorageItem<User>("user", {
        user_info: {
            language: lang
        }
    });

    if (Object.keys(locale[lang]).length < 1) {
        getLocale(lang).then((res: LocaleResponse) => {
            dispatch(setLocale(lang, res));
            return callback!(lang);
        });
    } else {
        const res: LocaleResponse = {
            locale: locale[lang]
        };
        dispatch(setLocale(lang, res));
    }
    return callback!(lang);
};

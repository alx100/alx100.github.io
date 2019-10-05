import * as EN_RESOURCES from "../../assets/locales/en.json";
import { Languages } from "../../redux/reducers/localeReducer";
import callApi from "../callApi";

export interface LocaleResponse {
    locale: Record<string, string>;
}

export const getLocale = (lang: Languages): Promise<LocaleResponse> =>
    callApi<never, LocaleResponse>("testUrl", {
        mock: {
            data: {
                locale: getResources(lang)
            }
        }
    });

const getResources = (lang: Languages) => {
    switch (lang) {
        case "en":
            return EN_RESOURCES;
        case "fr":
            return {};
        case "es":
            return {};
    }
};

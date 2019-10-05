import { EN_RESOURCES } from "../../locales/en";
import callApi from "../callApi";

interface EnLocaleResponse {
    locale: Record<string, string>;
}

export const getEnLocale = () =>
    callApi<never, EnLocaleResponse>("testUrl", {
        mock: {
            locale: EN_RESOURCES
        }
    });

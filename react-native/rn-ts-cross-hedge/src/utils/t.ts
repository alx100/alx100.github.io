import { Store } from "../screens/App";

export const t = (key: string) => {
    const { locale } = Store.getState();
    return locale[locale.currentLocale][key]
        ? locale[locale.currentLocale][key]
        : "";
};

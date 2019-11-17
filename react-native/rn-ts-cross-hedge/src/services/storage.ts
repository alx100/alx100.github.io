// tslint:disable:no-console
import { AsyncStorage } from "react-native";

export const CHART_INFO = "_ChartInfo";

export interface ChartTutorial {
    isTutorialShown: boolean;
}

class StorageService {
    public async setStorageItem<Req>(key: string, value: Req) {
        try {
            const storageValue = await AsyncStorage.getItem(key);

            storageValue !== null
                ? await AsyncStorage.mergeItem(key, JSON.stringify(value))
                : await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn(error);
        }
    }

    public async getStorageItem<Res>(key: string) {
        try {
            const res: Res = await AsyncStorage.getItem(key).then(resp =>
                JSON.parse(resp)
            );
            return res;
        } catch (error) {
            console.warn(error);
        }
        return;
    }

    public async removeStorageItem(key: string) {
        try {
            AsyncStorage.removeItem(key);
        } catch (error) {
            console.warn(error);
        }
    }
}

export const storage = new StorageService();

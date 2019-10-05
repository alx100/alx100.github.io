import { Languages } from "../redux/reducers/localeReducer";

export interface User {
    step?: number;
    user_info?: UserInfo;
}

export interface UserInfo {
    registration_type?: "bank" | "crypto" | "both";
    phone_number?: string;
    name?: string;
    lastName?: string;
    birthday?: string;
    address?: {
        street: string;
        zip: string;
        city: string;
        state?: string;
    };
    email?: string;
    nationality?: string;
    new_phone_number?: string;
    country?: string;
    bank_account?: string;
    public_key?: string;
    language?: Languages;
}

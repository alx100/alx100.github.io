import { ReduxAction } from "../../../types/action";
import { TOGGLE_MENU } from "../../constants";

export interface MenuStore {
    showMenu: boolean;
    onClose?: () => void;
}

export interface MenuPayload {
    onClose?: () => void;
}

const initialState: MenuStore = {
    showMenu: false
};

export default function modal(
    state = initialState,
    action: ReduxAction<never>
) {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                showMenu: !state.showMenu
            };

        default:
            return state;
    }
}

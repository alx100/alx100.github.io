import { ReduxAction } from "../../../types/action";
import { Omit } from "../../../types/omit";
import { HIDE_MODAL, SHOW_MODAL } from "../../constants/index";

export interface ModalStore {
    showModal: boolean;
    title?: string;
    content?: string;
    onClose?: () => void;
    elements?: React.ReactNode;
    closeType: "default" | "custom";
    showBackground?: boolean;
    animationType?: "none" | "slide" | "fade" | undefined;
}

export type ModalPayload = Omit<ModalStore, "showModal">;

const initialState: ModalStore = {
    showModal: false,
    closeType: "default",
    showBackground: false
};

export default function modal(
    state = initialState,
    action: ReduxAction<ModalPayload>
) {
    switch (action.type) {
        case SHOW_MODAL:
            const {
                title,
                content,
                onClose,
                elements,
                closeType,
                showBackground,
                animationType
            } = action.payload!;
            return {
                ...state,
                showModal: true,
                title,
                content,
                onClose,
                elements,
                closeType,
                showBackground,
                animationType
            };

        case HIDE_MODAL:
            return initialState;

        default:
            return state;
    }
}

import { HIDE_MODAL, SHOW_MODAL } from "../constants/index";
import { ModalPayload } from "../reducers/modalReducer";

export function showModal(payload?: ModalPayload) {
    return {
        type: SHOW_MODAL,
        payload
    };
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    };
}

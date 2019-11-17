import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../constants/colors";
import { RH } from "../../constants/window";
import { hideModal } from "../../redux/actions/modal";
import { ModalStore } from "../../redux/reducers/modalReducer/index";
import { Icon } from "../Icons";
import { theme } from "./theme";

interface StoreProps {
    modal: ModalStore;
}

type ComponentProps = StoreProps & DispatchProp;

class ModalWindow extends React.PureComponent<ComponentProps> {
    render() {
        const {
            showModal,
            title,
            content,
            elements,
            closeType,
            showBackground,
            animationType
        } = this.props.modal;
        return (
            <Modal
                {...this.props}
                visible={showModal}
                animationType={animationType || "slide"}
                transparent={true}
            >
                {showBackground && <View style={theme.modalBackground} />}
                {closeType === "default" ? (
                    <View style={theme.positionCross}>
                        <TouchableOpacity onPress={this.closeModal}>
                            <Icon
                                size={1.5 * RH}
                                name="close_icon"
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                ) : null}
                <View style={elements ? theme.customModal : theme.defaultModal}>
                    {elements ? (
                        elements
                    ) : (
                        <React.Fragment>
                            <Text style={theme.title}>{title}</Text>
                            <Text style={theme.content}>{content}</Text>
                        </React.Fragment>
                    )}
                </View>
            </Modal>
        );
    }

    closeModal = () => {
        this.props.modal.onClose && this.props.modal.onClose();
        this.props.dispatch(hideModal());
    };
}

export default connect((store: StoreProps) => ({ modal: store.modal }))(
    ModalWindow
);

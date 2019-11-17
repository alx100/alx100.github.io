import React from "react";
import { View, ViewProperties } from "react-native";
import FormField, { FormElement } from "../ValidatableInput";
import { theme } from "./theme";

interface FieldItem {
    name: string;
    props: FormElement;
}

interface OwnProps {
    fields: FieldItem[];
    onRef: (context: FormBuilder) => void;
}

type ComponentProps = OwnProps;

class FormBuilder extends React.PureComponent<ComponentProps> {
    componentDidMount() {
        this.props.onRef(this);
    }

    validate = () => {
        this.props.fields.forEach(el => {
            this[el.name].validateValue();
        });
    };

    getValues = () => {
        const FormValues: Array<Record<string, string>> = [];

        this.props.fields.forEach(el => {
            const value: string = this[el.name].getValue();

            const Field = Object.assign({}, { [el.name]: value });

            FormValues.push(Field);
        });

        return FormValues;
    };

    reset = () => {
        this.props.fields.forEach(el => this[el.name].resetField());
    };

    hasError = () => {
        if (this.props.fields.some(el => this[el.name].hasError())) {
            return true;
        }

        return false;
    };

    render() {
        return (
            <View style={theme.formWrapper}>
                {this.props.fields.map(el => (
                    <FormField
                        onRef={(ref: FormField) => {
                            return (this[el.name] = ref);
                        }}
                        key={el.name}
                        {...el.props}
                    />
                ))}
            </View>
        );
    }
}

export default FormBuilder;

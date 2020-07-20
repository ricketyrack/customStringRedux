import { __awaiter } from '../../../node_modules/tslib/tslib.es6';
import { flattenStyles } from '../../util-widgets/dist/styles';
import '../../util-widgets/dist/objectFilters';
import { Component, createElement, Fragment } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text, Switch, ActivityIndicator } from 'react-native';
import Dialog from '../node_modules/react-native-dialog/src/index';
import { captureScreen } from 'react-native-view-shot';
import { defaultFeedbackStyle, processStyles, floatingButtonContainer, imageStyle, commentIcon, switchContainer, activityIndicatorStyle } from './ui/styles';
import { sendToSprintr } from './utils/sprintrApi';

class Feedback extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            status: "initial",
            sendScreenshot: true,
            feedbackMessage: "",
            screenshot: ""
        };
        this.onFeedbackButtonPressHandler = this.onFeedbackButtonPress.bind(this);
        this.onChangeTextHandler = this.onChangeText.bind(this);
        this.onScreenshotToggleChangeHandler = this.onScreenshotToggleValueChange.bind(this);
        this.onCancelHandler = this.onCancel.bind(this);
        this.onSendHandler = this.onSend.bind(this);
        this.onDialogHideHandler = this.onDialogHide.bind(this);
        this.styles = flattenStyles(defaultFeedbackStyle, this.props.style);
        this.processedStyles = processStyles(this.styles);
        this.dialogContainerProps = {
            contentStyle: this.processedStyles.dialogStyle,
            buttonSeparatorStyle: this.processedStyles.buttonSeparatorIos,
            footerStyle: this.processedStyles.borderIos,
            blurStyle: this.processedStyles.blurStyle
        };
    }
    render() {
        return (createElement(Fragment, null,
            this.renderFloatingButton(),
            this.renderTodoDialog(),
            this.renderInProgressDialog(),
            this.renderDoneDialog(),
            this.renderErrorDialog()));
    }
    renderFloatingButton() {
        return this.state.status === "initial" ? (createElement(View, { style: floatingButtonContainer },
            createElement(View, { style: this.styles.floatingButton },
                createElement(TouchableOpacity, { onPress: this.onFeedbackButtonPressHandler },
                    this.props.logo && this.props.logo.value ? renderImage(this.props.logo.value) : null,
                    renderImage(commentIcon))))) : null;
    }
    renderTodoDialog() {
        const { button, buttonDisabled, switchInput } = this.styles;
        const trackColor = { true: switchInput.trackColorOn || "", false: switchInput.trackColorOff || "" };
        const thumbColor = this.state.sendScreenshot ? switchInput.thumbColorOn : switchInput.thumbColorOff;
        const disabled = this.state.feedbackMessage.trim().length === 0;
        const sendButtonColor = disabled && buttonDisabled.color ? buttonDisabled.color : button.color;
        return (createElement(Dialog.Container, Object.assign({ visible: this.state.status === "todo" }, { avoidKeyboard: true, onModalHide: this.onDialogHideHandler }, this.dialogContainerProps),
            createElement(Dialog.Title, { style: this.styles.title }, "Send Feedback"),
            createElement(TextInput, Object.assign({ multiline: true, style: this.processedStyles.textAreaInputStyles, value: this.state.feedbackMessage, onChangeText: this.onChangeTextHandler, placeholder: "Type your feedback here" }, this.processedStyles.textAreaInputProps)),
            this.props.allowScreenshot && (createElement(View, { style: switchContainer },
                createElement(Text, { style: this.styles.switchLabel }, "Include Screenshot"),
                createElement(Switch, { style: this.processedStyles.switchInputStyles, value: this.state.sendScreenshot, onValueChange: this.onScreenshotToggleChangeHandler, trackColor: trackColor, thumbColor: thumbColor }))),
            createElement(Dialog.Button, { label: "Cancel", color: this.styles.button.color, onPress: this.onCancelHandler }),
            createElement(Dialog.Button, { label: "Send", disabled: disabled, color: sendButtonColor, onPress: this.onSendHandler })));
    }
    renderInProgressDialog() {
        return (createElement(Dialog.Container, Object.assign({ visible: this.state.status === "inprogress" }, { onModalHide: this.onDialogHideHandler }, this.dialogContainerProps),
            createElement(Dialog.Title, { style: this.styles.title }, "Sending..."),
            createElement(ActivityIndicator, { color: this.styles.activityIndicator.color, size: "large", style: activityIndicatorStyle })));
    }
    renderDoneDialog() {
        return (createElement(Dialog.Container, Object.assign({ visible: this.state.status === "done" }, this.dialogContainerProps),
            createElement(Dialog.Title, { style: this.styles.title }, "Result"),
            createElement(Dialog.Description, { style: this.processedStyles.descriptionStyle }, "Feedback successfully sent"),
            createElement(Dialog.Button, { label: "OK", onPress: this.onCancelHandler, color: this.styles.button.color })));
    }
    renderErrorDialog() {
        return (createElement(Dialog.Container, Object.assign({ visible: this.state.status === "error" }, this.dialogContainerProps),
            createElement(Dialog.Title, { style: this.styles.title }, "Result"),
            createElement(Dialog.Description, { style: this.processedStyles.descriptionStyle }, "Error sending feedback"),
            createElement(Dialog.Button, { label: "OK", onPress: this.onCancelHandler, color: this.styles.button.color })));
    }
    onFeedbackButtonPress() {
        this.setState({ status: "takingScreenshot" }, () => __awaiter(this, void 0, void 0, function* () {
            const screenshot = yield this.getScreenshot();
            this.setState({ status: "todo", screenshot });
        }));
    }
    onChangeText(value) {
        this.setState({ feedbackMessage: value });
    }
    onScreenshotToggleValueChange(value) {
        this.setState({ sendScreenshot: value });
    }
    onCancel() {
        this.setState({ status: "initial", nextStatus: undefined });
    }
    onDialogHide() {
        if (this.state.status === "closingDialog" && this.state.nextStatus) {
            this.setState({ status: this.state.nextStatus, nextStatus: undefined });
        }
    }
    onSend() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ status: "closingDialog", nextStatus: "inprogress" });
            const success = yield sendToSprintr({
                feedbackMsg: this.state.feedbackMessage,
                sprintrAppId: this.props.sprintrapp,
                screenshot: this.state.sendScreenshot ? this.state.screenshot : ""
            });
            this.setState({
                status: "closingDialog",
                nextStatus: success ? "done" : "error",
                feedbackMessage: "",
                screenshot: ""
            });
        });
    }
    getScreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.props.allowScreenshot) {
                return Promise.resolve("");
            }
            try {
                const uri = yield captureScreen({
                    format: "jpg",
                    result: "base64",
                    quality: 0.4
                });
                return uri.replace(/(\r\n|\n|\r)/gm, "");
            }
            catch (_a) {
                return "";
            }
        });
    }
}
function renderImage(source) {
    return createElement(Image, { style: imageStyle, source: source });
}

export { Feedback };

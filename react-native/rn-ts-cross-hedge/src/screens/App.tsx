import React from "react";
import { Modal, Router, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { getLocale } from "../api/locales";
import RenderLeftTitle from "../components/LeftScreenTitle";
import ModalWindow from "../components/Modal";
import Notification from "../components/Notification";
import RegistrationCompleted from "../components/RegistrationCompleted/index";
import RenderRightTitle from "../components/RightScreenTitle";
import MenuWindow from "../components/xHomePoPup/index";
import { colors } from "../constants/colors";
import { setLocale } from "../redux/actions/locale";
import { Languages } from "../redux/reducers/localeReducer";
import rootReducer from "../redux/reducers/rootReducer/index";
import { router } from "../services/router";
import { t } from "../utils/t";
import DepositInfo from "./Account/DepositInfo/index";
import Account from "./Account/index";
import ActivitiesTitleButtons from "./Activities/ActivitiesTitleButtons";
import Activities from "./Activities/index";
import ChatBot from "./Chatbot/index";
import Disinvest from "./Disinvest";
import Invest from "./Invest";
import InvestHistory from "./Invest/History";
import Login from "./Login/index";
import PartlyRegistration from "./PartlyRegistration";
import Portfolio from "./Portfolio/index";
import PortfolioGlobalView from "./Portfolio/PortfolioGlobalView/index";
import PortfolioTypeBold from "./Portfolio/PortfolioTypeBold";
import PortfolioTypeDynamic from "./Portfolio/PortfolioTypeDynamic/index";
import PortfolioTypeSafe from "./Portfolio/PortfolioTypeSafe/index";
import BankDetails from "./Profile/BankDetails";
import EditAddressForm from "./Profile/EditAddressForm";
import EditBankForm from "./Profile/EditBankForm";
import EditPhoto from "./Profile/EditPhoto";
import Profile from "./Profile/index";
import LanguageSettings from "./Profile/LanguageSettings";
import ModifyPassword from "./Profile/ModifyPassword";
import NotificationSettings from "./Profile/Notifications";
import PersonalInfo from "./Profile/PersonalInfo";
import ProfileSettings from "./Profile/Settings";
import Registration from "./Registration/index";
import BankStepOne from "./RegistrationTypes/Bank/StepOne";
import BothStepOne from "./RegistrationTypes/Both/StepOne";
import BothStepTwo from "./RegistrationTypes/Both/StepTwo";
import CryptoStepFour from "./RegistrationTypes/Crypto/StepFour/index";
import CryptoStepOne from "./RegistrationTypes/Crypto/StepOne/index";
import CryptoStepThree from "./RegistrationTypes/Crypto/StepThree/index";
import CryptoStepTwo from "./RegistrationTypes/Crypto/StepTwo/index";
import SyncPhone from "./SyncPhone/index";
import Test from "./Test/index";
import { theme } from "./theme";
import Withdrawal from "./Withdrawal";

export const Store = createStore(rootReducer, applyMiddleware(thunk));

interface State {
    isLocaleLoaded: boolean;
    language: Languages;
}

interface LangContext {
    language: Languages;
    setLanguage: (lang: Languages) => void;
}

export const LanguageContext = React.createContext<LangContext>({
    language: "en",
    setLanguage: () => void 0
});

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            isLocaleLoaded: false,
            language: "en"
        };
    }

    async componentDidMount() {
        const locale = await getLocale("en");

        Store.dispatch(setLocale("en", locale));
        this.setState({ isLocaleLoaded: true });
    }

    setLanguage = (language: Languages) => {
        this.setState({ language });
    };

    render() {
        const { routes, replaceRoute } = router;
        return (
            <Provider store={Store}>
                {this.state.isLocaleLoaded ? (
                    <LanguageContext.Provider
                        value={{
                            language: this.state.language,
                            setLanguage: this.setLanguage
                        }}
                    >
                        <Router>
                            <Modal key="root" duration={0}>
                                <Scene
                                    key={routes.login}
                                    component={Login}
                                    hideNavBar={true}
                                    panHandlers={null}
                                    initial={true}
                                />
                                <Scene
                                    key={routes.partlyRegistration}
                                    component={PartlyRegistration}
                                    panHandlers={null}
                                    showLabel={true}
                                    title={"Registration"}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={"Back"}
                                        />
                                    )}
                                    titleStyle={[
                                        theme.textHeader,
                                        { color: colors.white }
                                    ]}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.registration}
                                    component={Registration}
                                    hideNavBar={true}
                                    panHandlers={null}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.activities}
                                    component={Activities}
                                    title={t("header_title_activities_feed")}
                                    titleStyle={theme.textHeader}
                                    panHandlers={null}
                                    renderLeftButton={() => null}
                                    renderRightButton={() => (
                                        <ActivitiesTitleButtons />
                                    )}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.profile}
                                    component={Profile}
                                    title={t("profileBlock_title")}
                                    titleStyle={theme.textHeader}
                                    panHandlers={null}
                                    renderLeftButton={() => null}
                                    renderRightButton={() => null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.depositInfo}
                                    component={DepositInfo}
                                    title={t("depositInfo_title")}
                                    titleStyle={theme.textHeader}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.syncphone}
                                    component={SyncPhone}
                                    panHandlers={null}
                                    hideNavBar={true}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.test}
                                    component={Test}
                                    title={t("title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.regTypes_crypto_step_one}
                                    component={CryptoStepOne}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={t(
                                                "left_header_title_workWith"
                                            )}
                                        />
                                    )}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="light"
                                            rightTitle={t(
                                                "right_header_title_cancel"
                                            )}
                                        />
                                    )}
                                    // headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.regTypes_crypto_step_two}
                                    component={CryptoStepTwo}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={t(
                                                "left_header_title_workWith"
                                            )}
                                        />
                                    )}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="light"
                                            rightTitle={t(
                                                "right_header_title_cancel"
                                            )}
                                        />
                                    )}
                                    // headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.regTypes_crypto_step_three}
                                    component={CryptoStepThree}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={t(
                                                "left_header_title_bank_step_two"
                                            )}
                                        />
                                    )}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="light"
                                            rightTitle={t(
                                                "right_header_title_cancel"
                                            )}
                                        />
                                    )}
                                    // headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.regTypes_crypto_step_four}
                                    component={CryptoStepFour}
                                    hideNavBar={true}
                                    headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.regTypes_both_step_one}
                                    component={BothStepOne}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={t(
                                                "left_header_title_workWith"
                                            )}
                                        />
                                    )}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="light"
                                            rightTitle={t(
                                                "right_header_title_cancel"
                                            )}
                                        />
                                    )}
                                    // headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.regTypes_both_step_two}
                                    component={BothStepTwo}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={t(
                                                "left_header_title_wallet"
                                            )}
                                        />
                                    )}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="light"
                                            rightTitle={t(
                                                "right_header_title_cancel"
                                            )}
                                        />
                                    )}
                                    // headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />

                                <Scene
                                    key={routes.regTypes_bank_step_one}
                                    component={BankStepOne}
                                    navigationBarStyle={theme.navBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"light"}
                                            titleLeft={t(
                                                "left_header_title_bank_step_one"
                                            )}
                                        />
                                    )}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="light"
                                            rightTitle={t(
                                                "right_header_title_cancel"
                                            )}
                                        />
                                    )}
                                    // headerForceInset={{ top: "never" }}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.account}
                                    component={Account}
                                    title={t("accountBlock_title")}
                                    titleStyle={theme.textHeader}
                                    panHandlers={null}
                                    renderLeftButton={() => null}
                                    renderRightButton={() => null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.portfolio}
                                    component={Portfolio}
                                    title={t("portfolio_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    renderLeftButton={() => null}
                                    renderRightButton={() => null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.portfolio_globalView}
                                    component={PortfolioGlobalView}
                                    title={t("portfolioGlobalView_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.portfolio_type_safe}
                                    component={PortfolioTypeSafe}
                                    title={t("portfolioType_safe_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.portfolio_type_bold}
                                    component={PortfolioTypeBold}
                                    title={t("portfolioType_bold_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.portfolio_type_dynamic}
                                    component={PortfolioTypeDynamic}
                                    title={t("portfolioType_dynamic_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.invest_history}
                                    component={InvestHistory}
                                    title={t("invest_history_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    showLabel={true}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.desinvest}
                                    component={Disinvest}
                                    title={t("disinvest_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    renderLeftButton={() => null}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="dark"
                                            closeIcon={true}
                                            press={() =>
                                                replaceRoute("activities")
                                            }
                                        />
                                    )}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.withdrawal}
                                    component={Withdrawal}
                                    title={t("withdraw_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    titleStyle={theme.textHeader}
                                    renderLeftButton={() => null}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="dark"
                                            closeIcon={true}
                                            press={() =>
                                                replaceRoute("activities")
                                            }
                                        />
                                    )}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.bank_details}
                                    component={BankDetails}
                                    title={t("bank_details_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    renderBackButton={() => (
                                        <RenderLeftTitle
                                            styleBackTitle={"dark"}
                                            titleLeft={t("btn_content_back")}
                                            press={() =>
                                                replaceRoute("profile")
                                            }
                                        />
                                    )}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.invest}
                                    component={Invest}
                                    title={t("invest_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    renderLeftButton={() => null}
                                    titleStyle={theme.textHeader}
                                    renderRightButton={() => (
                                        <RenderRightTitle
                                            theme="dark"
                                            closeIcon={true}
                                            press={() =>
                                                replaceRoute("activities")
                                            }
                                        />
                                    )}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.edit_bank_account}
                                    component={props => (
                                        <EditBankForm
                                            inputName="bank_account"
                                            {...props}
                                        />
                                    )}
                                    title={t("bank_account_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.edit_wallet}
                                    component={props => (
                                        <EditBankForm
                                            inputName="public_key"
                                            placeholder="New public key"
                                            {...props}
                                        />
                                    )}
                                    title={t("wallet_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.profile_settings}
                                    component={ProfileSettings}
                                    title={t("profile_settings_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.modify_password}
                                    component={ModifyPassword}
                                    title={t("modify_password_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.notifications_setting}
                                    component={NotificationSettings}
                                    title={t(
                                        "profile_settings_notifications_title"
                                    )}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.change_language}
                                    component={LanguageSettings}
                                    title={t(
                                        "profile_settings_language_header"
                                    )}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.personal_info}
                                    component={PersonalInfo}
                                    title={t("personal_info_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.edit_address_info}
                                    component={EditAddressForm}
                                    title={t("modify_address_title")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.edit_photo}
                                    component={EditPhoto}
                                    title={t("profile_edit_photo_header")}
                                    navigationBarStyle={theme.lightNavBarStyle}
                                    panHandlers={null}
                                />
                                <Scene
                                    key={routes.chatbot}
                                    component={ChatBot}
                                    hideNavBar={true}
                                    panHandlers={null}
                                    // initial={true}
                                />
                                <Scene
                                    key={routes.registration_completed}
                                    component={RegistrationCompleted}
                                    hideNavBar={true}
                                    panHandlers={null}
                                    // initial={true}
                                />
                            </Modal>
                        </Router>
                        <ModalWindow />
                        <MenuWindow />
                        <Notification />
                    </LanguageContext.Provider>
                ) : null}
            </Provider>
        );
    }
}

export default App;

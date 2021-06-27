import * as DriverLicence from 'pages/DriverLicence';
import * as GetHelp from 'pages/GetHelp';
import * as MyRides from 'pages/MyRides';
import * as News from 'pages/News';
import * as PaymentMethods from 'pages/PaymentMethods';
import * as Settings from 'pages/Settings';
import * as Wallets from 'pages/Wallets';
import * as Welcome from 'pages/Welcome';
import { CssBaseline } from '@material-ui/core';
import { GlobalCss } from './App.styles';
import { Home, ServiceProviders, Splash } from 'pages';
import { IntlProvider, Theming } from 'components';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { PrivateRoute } from './helpers/PrivateRoute';
import { Redirect, Route } from 'react-router-dom';
// import { configureStore } from './redux/Store';
import React from 'react';

import { AppContext, getStorageData } from './providers/State';

export const App: React.FunctionComponent = () => {
	const { state } = React.useContext(AppContext);
	const [isLoaded, setLoaded] = React.useState(state.appLoaded);
	React.useEffect(() => {
		console.log('Loaded', state.appLoaded); // at first time-> false ====>1
		getStorageData(state).then(() => {
			console.log('=======');
			setLoaded(state.appLoaded); // true
		});
	}, [state]);

	return !isLoaded ? null : (
		<IntlProvider>
			<Theming>
				<CssBaseline />
				<GlobalCss />
				<IonApp>
					<IonReactRouter>
						<IonRouterOutlet>
							<PrivateRoute path="/home" component={Home} exact />
							<PrivateRoute path="/settings" component={Settings.Settings} exact />
							<PrivateRoute path="/service-providers/:provider?" component={ServiceProviders} exact />
							<Route path="/splash" component={Splash} exact />
							<Route path="/welcome" component={Welcome.Welcome} exact />
							<Route path="/welcome/login" component={Welcome.Login} exact />
							<Route path="/welcome/forgot-password" component={Welcome.ForgotPassword} exact />
							<Route path="/welcome/create-account" component={Welcome.CreateAccount} exact />
							<PrivateRoute path="/news" component={News.News} exact />
							<PrivateRoute path="/news/:social?" component={News.NewsDetail} exact />
							<PrivateRoute path="/settings/change-password" component={Settings.ChangePassword} exact />
							<PrivateRoute path="/driver-licence" component={DriverLicence.DriverLicence} exact />
							<PrivateRoute path="/settings/change-password" component={Settings.ChangePassword} exact />
							<PrivateRoute path="/settings/notifications" component={Settings.Notifications} exact />
							<PrivateRoute path="/settings/languages" component={Settings.Languages} exact />
							<PrivateRoute path="/settings/profile" component={Settings.Profile} exact />
							<PrivateRoute path="/settings/change-email" component={Settings.ChangeEmail} exact />
							<PrivateRoute path="/settings/dark-mode" component={Settings.DarkMode} exact />
							<PrivateRoute path="/get-help" component={GetHelp.GetHelp} exact />
							<PrivateRoute path="/get-help/faq" component={GetHelp.Faq} exact />
							<PrivateRoute path="/get-help/faq-unlock" component={GetHelp.FaqUnlock} exact />
							<PrivateRoute path="/get-help/faq-start" component={GetHelp.FaqStart} exact />
							<PrivateRoute path="/get-help/faq-pause" component={GetHelp.FaqPause} exact />
							<PrivateRoute path="/get-help/faq-lock" component={GetHelp.FaqLock} exact />
							<PrivateRoute path="/get-help/faq-finding" component={GetHelp.FaqFinding} exact />
							<PrivateRoute path="/get-help/faq-park" component={GetHelp.FaqPark} exact />
							<PrivateRoute path="/get-help/faq-zones" component={GetHelp.FaqZones} exact />
							<PrivateRoute path="/get-help/privacy-policy" component={GetHelp.Privacy} exact />
							<PrivateRoute path="/get-help/contact-us" component={GetHelp.ContactUs} exact />
							<PrivateRoute path="/get-help/regulations" component={GetHelp.SafetyRegulations} exact />
							<PrivateRoute path="/get-help/regulations-scooter" component={GetHelp.SafetyScooter} exact />
							<PrivateRoute path="/get-help/regulations-car" component={GetHelp.SafetyScooter} exact />
							<PrivateRoute path="/get-help/regulations-bike" component={GetHelp.SafetyScooter} exact />
							<PrivateRoute path="/get-help/my-reports" component={GetHelp.MyReports} exact />
							<PrivateRoute path="/get-help/how-to-ride" component={GetHelp.HowToRide} exact />
							<PrivateRoute path="/wallets" component={Wallets.Wallets} exact />
							<PrivateRoute path="/wallets/create-wallet" component={Wallets.CreateWallet} exact />
							<PrivateRoute path="/wallets/create-wallet-description" component={Wallets.CreateWalletDescription} exact />
							<PrivateRoute path="/wallets/create-wallet-store" component={Wallets.CreateWalletStore} exact />
							<PrivateRoute path="/wallets/create-wallet-place" component={Wallets.CreateWalletPlace} exact />
							<PrivateRoute path="/wallets/add-funds" component={Wallets.AddFunds} exact />
							<PrivateRoute path="/wallets/add-funds/add-credit-card" component={Wallets.AddCreditCard} exact />
							<PrivateRoute path="/wallets/template" component={Wallets.Template} exact />
							<PrivateRoute path="/wallets/transfer" component={Wallets.Transfer} exact />
							<PrivateRoute path="/wallets/confirmation" component={Wallets.Confirmation} exact />
							<PrivateRoute path="/wallets/ruler-wallet" component={Wallets.RulerWallet} exact />
							<PrivateRoute path="/wallets/send" component={Wallets.Send} exact />
							<PrivateRoute path="/wallets/qr-code" component={Wallets.QrCode} exact />
							<PrivateRoute path="/wallets/receive" component={Wallets.Receive} exact />
							<PrivateRoute path="/payment-methods" component={PaymentMethods.PaymentMethods} exact />
							<PrivateRoute path="/payment-methods/add-payment-method" component={PaymentMethods.AddPaymentMethod} exact />
							<PrivateRoute path="/payment-methods/add-payment-method/card" component={PaymentMethods.AddDebitCreditCard} exact />
							<PrivateRoute path="/my-rides" component={MyRides.MyRides} exact />
							<PrivateRoute path="/my-rides/damaged-vehicle" component={MyRides.DamagedVehicle} exact />
							<PrivateRoute path="/my-rides/badly-parked-vehicle" component={MyRides.DamagedVehicle} exact />
							<PrivateRoute path="/my-rides/report" component={MyRides.Report} exact />
							<Route exact path="/" render={() => <Redirect to="/splash" />} />
							{/* <Redirect from="/" to="/splash" /> */}
						</IonRouterOutlet>
					</IonReactRouter>
				</IonApp>
			</Theming>
		</IntlProvider>
	);
};

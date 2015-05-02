//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Session = Package.session.Session;
var Spacebars = Package.spacebars.Spacebars;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var i18n = Package['anti:i18n'].i18n;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var accountsUIBootstrap3, ptPT, ptBR, $modal;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/accounts_ui.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (!Accounts.ui){                                                                                                     // 1
	Accounts.ui = {};                                                                                                     // 2
}                                                                                                                      // 3
                                                                                                                       // 4
if (!Accounts.ui._options) {                                                                                           // 5
	Accounts.ui._options = {                                                                                              // 6
		extraSignupFields: [],                                                                                               // 7
		requestPermissions: {},                                                                                              // 8
		requestOfflineToken: {},                                                                                             // 9
		forceApprovalPrompt: {},                                                                                             // 10
		forceEmailLowercase: false,                                                                                          // 11
		forceUsernameLowercase: false,                                                                                       // 12
		forcePasswordLowercase: false                                                                                        // 13
	};                                                                                                                    // 14
}                                                                                                                      // 15
                                                                                                                       // 16
Accounts.ui.navigate = function (route, hash) {                                                                        // 17
	// if router is iron-router                                                                                           // 18
	if (window.Router && _.isFunction(Router.go)) {                                                                       // 19
		Router.go(route, hash);                                                                                              // 20
	}                                                                                                                     // 21
}                                                                                                                      // 22
                                                                                                                       // 23
Accounts.ui.config = function(options) {                                                                               // 24
	// validate options keys                                                                                              // 25
	var VALID_KEYS = ['passwordSignupFields', 'extraSignupFields', 'forceEmailLowercase', 'forceUsernameLowercase','forcePasswordLowercase',
					  'requestPermissions', 'requestOfflineToken', 'forceApprovalPrompt'];                                            // 27
                                                                                                                       // 28
	_.each(_.keys(options), function(key) {                                                                               // 29
		if (!_.contains(VALID_KEYS, key)){                                                                                   // 30
			throw new Error("Accounts.ui.config: Invalid key: " + key);                                                         // 31
		}                                                                                                                    // 32
	});                                                                                                                   // 33
	                                                                                                                      // 34
	options.extraSignupFields = options.extraSignupFields || [];                                                          // 35
	                                                                                                                      // 36
	// deal with `passwordSignupFields`                                                                                   // 37
	if (options.passwordSignupFields) {                                                                                   // 38
		if (_.contains([                                                                                                     // 39
			"USERNAME_AND_EMAIL_CONFIRM",                                                                                       // 40
			"USERNAME_AND_EMAIL",                                                                                               // 41
			"USERNAME_AND_OPTIONAL_EMAIL",                                                                                      // 42
			"USERNAME_ONLY",                                                                                                    // 43
			"EMAIL_ONLY"                                                                                                        // 44
		], options.passwordSignupFields)) {                                                                                  // 45
			if (Accounts.ui._options.passwordSignupFields){                                                                     // 46
				throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");                            // 47
			} else {                                                                                                            // 48
				Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;                                          // 49
			}                                                                                                                   // 50
		} else {                                                                                                             // 51
			throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);  // 52
		}                                                                                                                    // 53
	}                                                                                                                     // 54
                                                                                                                       // 55
	Accounts.ui._options.forceEmailLowercase = options.forceEmailLowercase;                                               // 56
	Accounts.ui._options.forceUsernameLowercase = options.forceUsernameLowercase;                                         // 57
	Accounts.ui._options.forcePasswordLowercase = options.forcePasswordLowercase;                                         // 58
                                                                                                                       // 59
	// deal with `requestPermissions`                                                                                     // 60
	if (options.requestPermissions) {                                                                                     // 61
		_.each(options.requestPermissions, function(scope, service) {                                                        // 62
			if (Accounts.ui._options.requestPermissions[service]) {                                                             // 63
				throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);               // 64
			} else if (!(scope instanceof Array)) {                                                                             // 65
				throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");                            // 66
			} else {                                                                                                            // 67
				Accounts.ui._options.requestPermissions[service] = scope;                                                          // 68
			}                                                                                                                   // 69
		});                                                                                                                  // 70
		if (typeof options.extraSignupFields !== 'object' || !options.extraSignupFields instanceof Array) {                  // 71
			throw new Error("Accounts.ui.config: `extraSignupFields` must be an array.");                                       // 72
		} else {                                                                                                             // 73
			if (options.extraSignupFields) {                                                                                    // 74
				_.each(options.extraSignupFields, function(field, index) {                                                         // 75
					if (!field.fieldName || !field.fieldLabel){                                                                       // 76
						throw new Error("Accounts.ui.config: `extraSignupFields` objects must have `fieldName` and `fieldLabel` attributes.");
					}                                                                                                                 // 78
					if (typeof field.visible === 'undefined'){                                                                        // 79
						field.visible = true;                                                                                            // 80
					}                                                                                                                 // 81
					Accounts.ui._options.extraSignupFields[index] = field;                                                            // 82
				});                                                                                                                // 83
			}                                                                                                                   // 84
		}                                                                                                                    // 85
	}                                                                                                                     // 86
                                                                                                                       // 87
	// deal with `requestOfflineToken`                                                                                    // 88
	if (options.requestOfflineToken) {                                                                                    // 89
		_.each(options.requestOfflineToken, function (value, service) {                                                      // 90
			if (service !== 'google'){                                                                                          // 91
				throw new Error("Accounts.ui.config: `requestOfflineToken` only supported for Google login at the moment.");       // 92
			}                                                                                                                   // 93
			if (Accounts.ui._options.requestOfflineToken[service]) {                                                            // 94
				throw new Error("Accounts.ui.config: Can't set `requestOfflineToken` more than once for " + service);              // 95
			} else {                                                                                                            // 96
				Accounts.ui._options.requestOfflineToken[service] = value;                                                         // 97
			}                                                                                                                   // 98
		});                                                                                                                  // 99
	}                                                                                                                     // 100
                                                                                                                       // 101
	// deal with `forceApprovalPrompt`                                                                                    // 102
	if (options.forceApprovalPrompt) {                                                                                    // 103
		_.each(options.forceApprovalPrompt, function (value, service) {                                                      // 104
			if (service !== 'google'){                                                                                          // 105
				throw new Error("Accounts.ui.config: `forceApprovalPrompt` only supported for Google login at the moment.");       // 106
			}                                                                                                                   // 107
			if (Accounts.ui._options.forceApprovalPrompt[service]) {                                                            // 108
				throw new Error("Accounts.ui.config: Can't set `forceApprovalPrompt` more than once for " + service);              // 109
			} else {                                                                                                            // 110
				Accounts.ui._options.forceApprovalPrompt[service] = value;                                                         // 111
			}                                                                                                                   // 112
		});                                                                                                                  // 113
	}                                                                                                                     // 114
};                                                                                                                     // 115
                                                                                                                       // 116
Accounts.ui._passwordSignupFields = function() {                                                                       // 117
	return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";                                                     // 118
};                                                                                                                     // 119
                                                                                                                       // 120
                                                                                                                       // 121
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/en.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("en", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Reset your password",                                                                                        // 3
		newPassword: "New password",                                                                                         // 4
		newPasswordAgain: "New Password (again)",                                                                            // 5
		cancel: "Cancel",                                                                                                    // 6
		submit: "Set password"                                                                                               // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Choose a password",                                                                                          // 10
		newPassword: "New password",                                                                                         // 11
		newPasswordAgain: "New Password (again)",                                                                            // 12
		cancel: "Close",                                                                                                     // 13
		submit: "Set password"                                                                                               // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Email address verified",                                                                                  // 17
		dismiss: "Dismiss"                                                                                                   // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Dismiss",                                                                                                  // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Change password",                                                                                         // 24
		signOut: "Sign out"                                                                                                  // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Sign in",                                                                                                   // 28
		up: "Join"                                                                                                           // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "or"                                                                                                             // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Create",                                                                                                    // 35
		signIn: "Sign in",                                                                                                   // 36
		forgot: "Forgot password?",                                                                                          // 37
		createAcc: "Create account"                                                                                          // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Email",                                                                                                      // 41
		reset: "Reset password",                                                                                             // 42
		invalidEmail: "Invalid email"                                                                                        // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Cancel"                                                                                                       // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Change password",                                                                                           // 49
		cancel: "Cancel"                                                                                                     // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Sign in with",                                                                                          // 53
		configure: "Configure",                                                                                              // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Sign out"                                                                                                  // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "No login services configured"                                                                      // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Username or Email",                                                                                // 63
		username: "Username",                                                                                                // 64
		email: "Email",                                                                                                      // 65
		password: "Password"                                                                                                 // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Username",                                                                                                // 69
		email: "Email",                                                                                                      // 70
		emailOpt: "Email (optional)",                                                                                        // 71
		password: "Password",                                                                                                // 72
		passwordAgain: "Password (again)"                                                                                    // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Current Password",                                                                                 // 76
		newPassword: "New Password",                                                                                         // 77
		newPasswordAgain: "New Password (again)"                                                                             // 78
	},                                                                                                                    // 79
	infoMessages : {                                                                                                      // 80
		emailSent: "Email sent",                                                                                             // 81
		passwordChanged: "Password changed"                                                                                  // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "User not found",                                                                                      // 85
		invalidEmail: "Invalid email",                                                                                       // 86
		incorrectPassword: "Incorrect password",                                                                             // 87
		usernameTooShort: "Username must be at least 3 characters long",                                                     // 88
		passwordTooShort: "Password must be at least 6 characters long",                                                     // 89
		passwordsDontMatch: "Passwords don't match",                                                                         // 90
		newPasswordSameAsOld: "New and old passwords must be different",                                                     // 91
		signupsForbidden: "Signups forbidden"                                                                                // 92
	}                                                                                                                     // 93
});                                                                                                                    // 94
                                                                                                                       // 95
                                                                                                                       // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/es.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("es", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Restablece tu contraseña",                                                                                   // 3
		newPassword: "Nueva contraseña",                                                                                     // 4
		newPasswordAgain: "Nueva contraseña (otra vez)",                                                                     // 5
		cancel: "Cancelar",                                                                                                  // 6
		submit: "Guardar"                                                                                                    // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Escribe una contraseña",                                                                                     // 10
		newPassword: "Nueva contraseña",                                                                                     // 11
		newPasswordAgain: "Nueva contraseña (otra vez)",                                                                     // 12
		cancel: "Cerrar",                                                                                                    // 13
		submit: "Guardar contraseña"                                                                                         // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Correo electrónico verificado",                                                                           // 17
		dismiss: "Cerrar"                                                                                                    // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Cerrar",                                                                                                   // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Cambiar contraseña",                                                                                      // 24
		signOut: "Cerrar sesión"                                                                                             // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Iniciar sesión",                                                                                            // 28
		up: "registrarse"                                                                                                    // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "o"                                                                                                              // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Crear",                                                                                                     // 35
		signIn: "Iniciar sesión",                                                                                            // 36
		forgot: "¿Ha olvidado su contraseña?",                                                                               // 37
		createAcc: "Registrarse"                                                                                             // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Correo electrónico",                                                                                         // 41
		reset: "Restablecer contraseña",                                                                                     // 42
		invalidEmail: "Correo electrónico inválido"                                                                          // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Cancelar"                                                                                                     // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Cambiar contraseña",                                                                                        // 49
		cancel: "Cancelar"                                                                                                   // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Inicia sesión con",                                                                                     // 53
		configure: "Configurar",                                                                                             // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Cerrar sesión"                                                                                             // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "No hay ningún servicio configurado"                                                                // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Usuario o correo electrónico",                                                                     // 63
		username: "Usuario",                                                                                                 // 64
		email: "Correo electrónico",                                                                                         // 65
		password: "Contraseña"                                                                                               // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Usuario",                                                                                                 // 69
		email: "Correo electrónico",                                                                                         // 70
		emailOpt: "Correo elect. (opcional)",                                                                                // 71
		password: "Contraseña",                                                                                              // 72
		passwordAgain: "Contraseña (otra vez)"                                                                               // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Contraseña Actual",                                                                                // 76
		newPassword: "Nueva Contraseña",                                                                                     // 77
		newPasswordAgain: "Nueva Contraseña (otra vez)"                                                                      // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		sent: "Email enviado",                                                                                               // 81
		passwordChanged: "Contraseña modificada"                                                                             // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "El usuario no existe",                                                                                // 85
		invalidEmail: "Correo electrónico inválido",                                                                         // 86
		incorrectPassword: "Contraseña incorrecta",                                                                          // 87
		usernameTooShort: "El nombre de usuario tiene que tener 3 caracteres como mínimo",                                   // 88
		passwordTooShort: "La contraseña tiene que tener 6 caracteres como mínimo",                                          // 89
		passwordsDontMatch: "Las contraseñas no son iguales",                                                                // 90
		newPasswordSameAsOld: "La contraseña nueva y la actual no pueden ser iguales"                                        // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/ca.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ca", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Restablir la contrasenya",                                                                                   // 3
		newPassword: "Nova contrasenya",                                                                                     // 4
		newPasswordAgain: "Nova contrasenya (un altre cop)",                                                                 // 5
		cancel: "Cancel·lar",                                                                                                // 6
		submit: "Guardar"                                                                                                    // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Escriu una contrasenya",                                                                                     // 10
		newPassword: "Nova contrasenya",                                                                                     // 11
		newPasswordAgain: "Nova contrasenya (un altre cop)",                                                                 // 12
		cancel: "Tancar",                                                                                                    // 13
		submit: "Guardar contrasenya"                                                                                        // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Adreça electrònica verificada",                                                                           // 17
		dismiss: "Tancar"                                                                                                    // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Tancar",                                                                                                   // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Canviar contrasenya",                                                                                     // 24
		signOut: "Tancar sessió"                                                                                             // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Iniciar sessió",                                                                                            // 28
		up: "Registrar-se"                                                                                                   // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "o bé"                                                                                                           // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Crear",                                                                                                     // 35
		signIn: "Iniciar sessió",                                                                                            // 36
		forgot: "Ha oblidat la contrasenya?",                                                                                // 37
		createAcc: "Registrar-se"                                                                                            // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Adreça electrònica",                                                                                         // 41
		reset: "Restablir contrasenya",                                                                                      // 42
		invalidEmail: "Adreça invàlida"                                                                                      // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Cancel·lar"                                                                                                   // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Canviar contrasenya",                                                                                       // 49
		cancel: "Cancel·lar"                                                                                                 // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Inicia sessió amb",                                                                                     // 53
		configure: "Configurar"                                                                                              // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Tancar sessió"                                                                                             // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "No hi ha cap servei configurat"                                                                    // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Usuari o correu electrònic",                                                                       // 63
		username: "Usuari",                                                                                                  // 64
		email: "Adreça electrònica",                                                                                         // 65
		password: "Contrasenya"                                                                                              // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Usuari",                                                                                                  // 69
		email: "Adreça electrònica",                                                                                         // 70
		emailOpt: "Adreça elect. (opcional)",                                                                                // 71
		password: "Contrasenya",                                                                                             // 72
		passwordAgain: "Contrasenya (un altre cop)"                                                                          // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Contrasenya Actual",                                                                               // 76
		newPassword: "Nova Contrasenya",                                                                                     // 77
		newPasswordAgain: "Nova Contrasenya (un altre cop)"                                                                  // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		sent: "Email enviat",                                                                                                // 81
		passwordChanged: "Contrasenya canviada"                                                                              // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "L'usuari no existeix",                                                                                // 85
		invalidEmail: "Adreça invàlida",                                                                                     // 86
		incorrectPassword: "Contrasenya incorrecta",                                                                         // 87
		usernameTooShort: "El nom d'usuari ha de tenir 3 caracters com a mínim",                                             // 88
		passwordTooShort: "La contrasenya ha de tenir 6 caracters como a mínim",                                             // 89
		passwordsDontMatch: "Les contrasenyes no són iguals",                                                                // 90
		newPasswordSameAsOld: "La contrasenya nova i l'actual no poden ser iguals"                                           // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/fr.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("fr", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Réinitialiser mon mot de passe",                                                                             // 3
		newPassword: "Nouveau mot de passe",                                                                                 // 4
		newPasswordAgain: "Nouveau mot de passe (confirmation)",                                                             // 5
		cancel: "Annuler",                                                                                                   // 6
		submit: "Définir le mot de passe"                                                                                    // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Choisir un mot de passe",                                                                                    // 10
		newPassword: "Nouveau mot de passe",                                                                                 // 11
		newPasswordAgain: "Nouveau mot de passe (confirmation)",                                                             // 12
		cancel: "Fermer",                                                                                                    // 13
		submit: "Définir le mot de passe"                                                                                    // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "L'adresse email a été vérifiée",                                                                          // 17
		dismiss: "Fermer"                                                                                                    // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Fermer",                                                                                                   // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Changer le mot de passe",                                                                                 // 24
		signOut: "Déconnexion"                                                                                               // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Connexion",                                                                                                 // 28
		up: "Inscription"                                                                                                    // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "ou"                                                                                                             // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Créer",                                                                                                     // 35
		signIn: "Connexion",                                                                                                 // 36
		forgot: "Mot de passe oublié ?",                                                                                     // 37
		createAcc: "Inscription"                                                                                             // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Email",                                                                                                      // 41
		reset: "Réinitialiser le mot de passe",                                                                              // 42
		invalidEmail: "L'adresse email est invalide"                                                                         // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Annuler"                                                                                                      // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Changer le mot de passe",                                                                                   // 49
		cancel: "Annuler"                                                                                                    // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Se connecter avec",                                                                                     // 53
		configure: "Configurer",                                                                                             // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Déconnexion"                                                                                               // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Aucun service d'authentification n'est configuré"                                                  // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Nom d'utilisateur ou email",                                                                       // 63
		username: "Nom d'utilisateur",                                                                                       // 64
		email: "Email",                                                                                                      // 65
		password: "Mot de passe"                                                                                             // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Nom d'utilisateur",                                                                                       // 69
		email: "Email",                                                                                                      // 70
		emailOpt: "Email (optionnel)",                                                                                       // 71
		password: "Mot de passe",                                                                                            // 72
		passwordAgain: "Mot de passe (confirmation)"                                                                         // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Mot de passe actuel",                                                                              // 76
		newPassword: "Nouveau mot de passe",                                                                                 // 77
		newPasswordAgain: "Nouveau mot de passe (confirmation)"                                                              // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		sent: "Email envoyé",                                                                                                // 81
		passwordChanged: "Mot de passe modifié"                                                                              // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "Utilisateur non trouvé",                                                                              // 85
		invalidEmail: "L'adresse email est invalide",                                                                        // 86
		incorrectPassword: "Mot de passe incorrect",                                                                         // 87
		usernameTooShort: "Le nom d'utilisateur doit comporter au moins 3 caractères",                                       // 88
		passwordTooShort: "Le mot de passe doit comporter au moins 6 caractères",                                            // 89
		passwordsDontMatch: "Les mots de passe ne sont pas identiques",                                                      // 90
		newPasswordSameAsOld: "Le nouveau et le vieux mot de passe doivent être différent"                                   // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/de.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("de", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Passwort zurücksetzen",                                                                                      // 3
		newPassword: "Neues Passwort",                                                                                       // 4
		newPasswordAgain: "Neues Passwort (wiederholen)",                                                                    // 5
		cancel: "Abbrechen",                                                                                                 // 6
		submit: "Passwort ändern"                                                                                            // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Passwort wählen",                                                                                            // 10
		newPassword: "Neues Passwort",                                                                                       // 11
		newPasswordAgain: "Neues Passwort (wiederholen)",                                                                    // 12
		cancel: "Schließen",                                                                                                 // 13
		submit: "Passwort ändern"                                                                                            // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Email Adresse verifiziert",                                                                               // 17
		dismiss: "Schließen"                                                                                                 // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Schließen"                                                                                                 // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Passwort ändern",                                                                                         // 24
		signOut: "Abmelden"                                                                                                  // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Anmelden",                                                                                                  // 28
		up: "Registrieren"                                                                                                   // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "oder"                                                                                                           // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Erstellen",                                                                                                 // 35
		signIn: "Anmelden",                                                                                                  // 36
		forgot: "Passwort vergessen?",                                                                                       // 37
		createAcc: "Account erstellen"                                                                                       // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Email",                                                                                                      // 41
		reset: "Passwort zurücksetzen",                                                                                      // 42
		invalidEmail: "Ungültige Email Adresse"                                                                              // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Abbrechen"                                                                                                    // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Passwort ändern",                                                                                           // 49
		cancel: "Abbrechen"                                                                                                  // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Anmelden mit",                                                                                          // 53
		configure: "Konfigurieren",                                                                                          // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Abmelden"                                                                                                  // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Keine Anmelde Services konfiguriert"                                                               // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Benutzername oder Email",                                                                          // 63
		username: "Benutzername",                                                                                            // 64
		email: "Email",                                                                                                      // 65
		password: "Passwort"                                                                                                 // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Benutzername",                                                                                            // 69
		email: "Email",                                                                                                      // 70
		emailOpt: "Email (freiwillig)",                                                                                      // 71
		password: "Passwort",                                                                                                // 72
		passwordAgain: "Passwort (wiederholen)"                                                                              // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Aktuelles Passwort",                                                                               // 76
		newPassword: "Neues Passwort",                                                                                       // 77
		newPasswordAgain: "Neues Passwort (wiederholen)"                                                                     // 78
	},                                                                                                                    // 79
	infoMessages : {                                                                                                      // 80
		sent: "Email gesendet",                                                                                              // 81
		passwordChanged: "Passwort geändert"                                                                                 // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "Benutzer nicht gefunden",                                                                             // 85
		invalidEmail: "Ungültige Email Adresse",                                                                             // 86
		incorrectPassword: "Falsches Passwort",                                                                              // 87
		usernameTooShort: "Der Benutzername muss mindestens 3 Buchstaben lang sein",                                         // 88
		passwordTooShort: "Passwort muss mindestens 6 Zeichen lang sein",                                                    // 89
		passwordsDontMatch: "Die Passwörter stimmen nicht überein",                                                          // 90
		newPasswordSameAsOld: "Neue und aktuelle Passwörter müssen unterschiedlich sein"                                     // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/it.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("it", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Reimposta la password",                                                                                      // 3
		newPassword: "Nuova password",                                                                                       // 4
		newPasswordAgain: "Nuova password (di nuovo)",                                                                       // 5
		cancel: "Annulla",                                                                                                   // 6
		submit: "Imposta password"                                                                                           // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Scegli una password",                                                                                        // 10
		newPassword: "Nuova password",                                                                                       // 11
		newPasswordAgain: "Nuova password (di nuovo)",                                                                       // 12
		cancel: "Chiudi",                                                                                                    // 13
		submit: "Imposta password"                                                                                           // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Indirizzo email verificato",                                                                              // 17
		dismiss: "Chiudi"                                                                                                    // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Chiudi",                                                                                                   // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Cambia password",                                                                                         // 24
		signOut: "Esci"                                                                                                      // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Accedi",                                                                                                    // 28
		up: "Registrati"                                                                                                     // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "oppure"                                                                                                         // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Crea",                                                                                                      // 35
		signIn: "Accedi",                                                                                                    // 36
		forgot: "Password dimenticata?",                                                                                     // 37
		createAcc: "Crea un account"                                                                                         // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Email",                                                                                                      // 41
		reset: "Reimposta la password",                                                                                      // 42
		invalidEmail: "Email non valida"                                                                                     // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Cancella"                                                                                                     // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Cambia password",                                                                                           // 49
		cancel: "Annulla"                                                                                                    // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Accedi con",                                                                                            // 53
		configure: "Configura",                                                                                              // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Esci"                                                                                                      // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Nessun servizio di accesso configurato"                                                            // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Username o Email",                                                                                 // 63
		username: "Username",                                                                                                // 64
		email: "Email",                                                                                                      // 65
		password: "Password"                                                                                                 // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Username",                                                                                                // 69
		email: "Email",                                                                                                      // 70
		emailOpt: "Email (opzionale)",                                                                                       // 71
		password: "Password",                                                                                                // 72
		passwordAgain: "Password (di nuovo)"                                                                                 // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Password corrente",                                                                                // 76
		newPassword: "Nuova password",                                                                                       // 77
		newPasswordAgain: "Nuova password (di nuovo)"                                                                        // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		sent: "Email inviata",                                                                                               // 81
		passwordChanged: "Password changed"                                                                                  // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "User not found",                                                                                      // 85
		invalidEmail: "Email non valida",                                                                                    // 86
		incorrectPassword: "Incorrect password",                                                                             // 87
		usernameTooShort: "La Username deve essere almeno di 3 caratteri",                                                   // 88
		passwordTooShort: "La Password deve essere almeno di 6 caratteri",                                                   // 89
		passwordsDontMatch: "Le password non corrispondono",                                                                 // 90
		newPasswordSameAsOld: "New and old passwords must be different"                                                      // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/pt-PT.i18n.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
ptPT = {                                                                                                               // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Esqueci-me da palavra-passe",                                                                                // 3
		newPassword: "Nova palavra-passe",                                                                                   // 4
		newPasswordAgain: "Nova palavra-passe (confirmacao)",                                                                // 5
		cancel: "Cancelar",                                                                                                  // 6
		submit: "Alterar palavra-passe"                                                                                      // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Introduza a nova palavra-passe",                                                                             // 10
		newPassword: "Nova palavra-passe",                                                                                   // 11
		newPasswordAgain: "Nova palavra-passe (confirmacao)",                                                                // 12
		cancel: "Fechar",                                                                                                    // 13
		submit: "Alterar palavra-passe"                                                                                      // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "E-mail verificado!",                                                                                      // 17
		dismiss: "Ignorar"                                                                                                   // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Ignorar"                                                                                                   // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Mudar palavra-passe",                                                                                     // 24
		signOut: "Sair"                                                                                                      // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Entrar",                                                                                                    // 28
		up: "Registar"                                                                                                       // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "ou"                                                                                                             // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Criar",                                                                                                     // 35
		signIn: "Entrar",                                                                                                    // 36
		forgot: "Esqueci-me da palavra-passe",                                                                               // 37
		createAcc: "Registar"                                                                                                // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "E-mail",                                                                                                     // 41
		reset: "Alterar palavra-passe",                                                                                      // 42
		sent: "E-mail enviado",                                                                                              // 43
		invalidEmail: "E-mail inválido"                                                                                      // 44
	},                                                                                                                    // 45
	loginButtonsBackToLoginLink: {                                                                                        // 46
		back: "Cancelar"                                                                                                     // 47
	},                                                                                                                    // 48
	loginButtonsChangePassword: {                                                                                         // 49
		submit: "Mudar palavra-passe",                                                                                       // 50
		cancel: "Cancelar"                                                                                                   // 51
	},                                                                                                                    // 52
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 53
		signInWith: "Entrar com",                                                                                            // 54
		configure: "Configurar"                                                                                              // 55
	},                                                                                                                    // 56
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 57
		signOut: "Sair"                                                                                                      // 58
	},                                                                                                                    // 59
	loginButtonsLoggedOut: {                                                                                              // 60
		noLoginServices: "Nenhum servico de login configurado"                                                               // 61
	},                                                                                                                    // 62
	loginFields: {                                                                                                        // 63
		usernameOrEmail: "Utilizador ou E-mail",                                                                             // 64
		username: "Utilizador",                                                                                              // 65
		email: "E-mail",                                                                                                     // 66
		password: "Palavra-passe"                                                                                            // 67
	},                                                                                                                    // 68
	signupFields: {                                                                                                       // 69
		username: "Utilizador",                                                                                              // 70
		email: "E-mail",                                                                                                     // 71
		emailOpt: "E-mail (opcional)",                                                                                       // 72
		password: "Palavra-passe",                                                                                           // 73
		passwordAgain: "Palavra-passe (confirmacão)"                                                                         // 74
	},                                                                                                                    // 75
	changePasswordFields: {                                                                                               // 76
		currentPassword: "Palavra-passe atual",                                                                              // 77
		newPassword: "Nova palavra-passe",                                                                                   // 78
		newPasswordAgain: "Nova palavra-passe (confirmacao)"                                                                 // 79
	},                                                                                                                    // 80
	infoMessages: {                                                                                                       // 81
		sent: "E-mail enviado",                                                                                              // 82
		passwordChanged: "Palavra-passe alterada"                                                                            // 83
	},                                                                                                                    // 84
	errorMessages: {                                                                                                      // 85
		usernameTooShort: "Utilizador precisa de ter mais de 3 caracteres",                                                  // 86
		invalidEmail: "E-mail inválido",                                                                                     // 87
		passwordTooShort: "Palavra-passe precisa ter mais de 6 caracteres",                                                  // 88
		passwordsDontMatch: "As Palavras-passe estão diferentes",                                                            // 89
		userNotFound: "Utilizador não encontrado",                                                                           // 90
		incorrectPassword: "Palavra-passe incorreta",                                                                        // 91
		newPasswordSameAsOld: "A nova palavra-passe tem de ser diferente da antiga"                                          // 92
	}                                                                                                                     // 93
};                                                                                                                     // 94
                                                                                                                       // 95
                                                                                                                       // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/pt-BR.i18n.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
ptBR = {                                                                                                               // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Esqueceu sua senha?",                                                                                        // 3
		newPassword: "Nova senha",                                                                                           // 4
		newPasswordAgain: "Nova senha (confirmacao)",                                                                        // 5
		cancel: "Cancelar",                                                                                                  // 6
		submit: "Alterar senha"                                                                                              // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Digite a nova senha",                                                                                        // 10
		newPassword: "Nova senha",                                                                                           // 11
		newPasswordAgain: "Nova senha (confirmacao)",                                                                        // 12
		cancel: "Fechar",                                                                                                    // 13
		submit: "Alterar senha"                                                                                              // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "E-mail verificado!",                                                                                      // 17
		dismiss: "Ignorar"                                                                                                   // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Ignorar"                                                                                                   // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Mudar senha",                                                                                             // 24
		signOut: "Sair"                                                                                                      // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Entrar",                                                                                                    // 28
		up: "Cadastrar"                                                                                                      // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "ou"                                                                                                             // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Criar",                                                                                                     // 35
		signIn: "Login",                                                                                                     // 36
		forgot: "Esqueceu sua senha?",                                                                                       // 37
		createAcc: "Cadastrar"                                                                                               // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "E-mail",                                                                                                     // 41
		reset: "Alterar senha",                                                                                              // 42
		invalidEmail: "E-mail inválido"                                                                                      // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Cancelar"                                                                                                     // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Mudar senha",                                                                                               // 49
		cancel: "Cancelar"                                                                                                   // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Logar com",                                                                                             // 53
		configure: "Configurar",                                                                                             // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Sair"                                                                                                      // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Nenhum servico de login configurado"                                                               // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Usuário ou E-mail",                                                                                // 63
		username: "Usuário",                                                                                                 // 64
		email: "E-mail",                                                                                                     // 65
		password: "Senha"                                                                                                    // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Usuário",                                                                                                 // 69
		email: "E-mail",                                                                                                     // 70
		emailOpt: "E-mail (opcional)",                                                                                       // 71
		password: "Senha",                                                                                                   // 72
		passwordAgain: "Senha (confirmacão)"                                                                                 // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Senha atual",                                                                                      // 76
		newPassword: "Nova Senha",                                                                                           // 77
		newPasswordAgain: "Nova Senha (confirmacao)"                                                                         // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		sent: "E-mail enviado",                                                                                              // 81
		passwordChanged: "Senha alterada"                                                                                    // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "Usuário não encontrado",                                                                              // 85
		invalidEmail: "E-mail inválido",                                                                                     // 86
		incorrectPassword: "Senha incorreta",                                                                                // 87
		usernameTooShort: "Usuário precisa ter mais de 3 caracteres",                                                        // 88
		passwordTooShort: "Senha precisa ter mais de 6 caracteres",                                                          // 89
		passwordsDontMatch: "Senhas estão diferentes",                                                                       // 90
		newPasswordSameAsOld: "A nova senha tem de ser diferente da antiga"                                                  // 91
	}                                                                                                                     // 92
};                                                                                                                     // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/pt.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map('pt', ptPT);                                                                                                  // 1
i18n.map('pt-PT', ptPT);                                                                                               // 2
i18n.map('pt-BR', ptBR);                                                                                               // 3
                                                                                                                       // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/ru.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ru", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Сбросить пароль",                                                                                            // 3
		newPassword: "Новый пароль",                                                                                         // 4
		newPasswordAgain: "Новый пароль (еще раз)",                                                                          // 5
		cancel: "Отмена",                                                                                                    // 6
		submit: "Сохранить пароль"                                                                                           // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Выбрать пароль",                                                                                             // 10
		newPassword: "Новый пароль",                                                                                         // 11
		newPasswordAgain: "Новый пароль (еще раз)",                                                                          // 12
		cancel: "Отмена",                                                                                                    // 13
		submit: "Сохранить пароль"                                                                                           // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Email подтвержден",                                                                                       // 17
	    dismiss: "Закрыть"                                                                                                // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
	    dismiss: "Закрыть"                                                                                                // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Изменить пароль",                                                                                         // 24
		signOut: "Выйти"                                                                                                     // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Войти",                                                                                                     // 28
		up: "Зарегистрироваться"                                                                                             // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "или"                                                                                                            // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Создать",                                                                                                   // 35
		signIn: "Войти",                                                                                                     // 36
		forgot: "Забыли пароль?",                                                                                            // 37
		createAcc: "Создать аккаунт"                                                                                         // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Email",                                                                                                      // 41
		reset: "Сбросить пароль",                                                                                            // 42
		invalidEmail: "Некорректный email"                                                                                   // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Отмена"                                                                                                       // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Изменить пароль",                                                                                           // 49
		cancel: "Отмена"                                                                                                     // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Войти через",                                                                                           // 53
		configure: "Настроить вход через",                                                                                   // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Выйти"                                                                                                     // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Сервис для входа не настроен"                                                                      // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Имя пользователя или email",                                                                       // 63
		username: "Имя пользователя",                                                                                        // 64
		email: "Email",                                                                                                      // 65
		password: "Пароль"                                                                                                   // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Имя пользователя",                                                                                        // 69
		email: "Email",                                                                                                      // 70
		emailOpt: "Email (необязательный)",                                                                                  // 71
		password: "Пароль",                                                                                                  // 72
		passwordAgain: "Пароль (еще раз)"                                                                                    // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Текущий пароль",                                                                                   // 76
		newPassword: "Новый пароль",                                                                                         // 77
		newPasswordAgain: "Новый пароль (еще раз)"                                                                           // 78
	},                                                                                                                    // 79
	infoMessages : {                                                                                                      // 80
		sent: "Вам отправлено письмо",                                                                                       // 81
		passwordChanged: "Пароль изменён"                                                                                    // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "Пользователь не найден",                                                                              // 85
		invalidEmail: "Некорректный email",                                                                                  // 86
		incorrectPassword: "Неправильный пароль",                                                                            // 87
		usernameTooShort: "Имя пользователя должно быть длиной не менее 3-х символов",                                       // 88
		passwordTooShort: "Пароль должен быть длиной не менее 6-ти символов",                                                // 89
		passwordsDontMatch: "Пароли не совпадают",                                                                           // 90
		newPasswordSameAsOld: "Новый и старый пароли должны быть разными"                                                    // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/el.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("el", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Ακύρωση κωδικού",                                                                                            // 3
		newPassword: "Νέος κωδικός",                                                                                         // 4
		newPasswordAgain: "Νέος Κωδικός (ξανά)",                                                                             // 5
		cancel: "Ακύρωση",                                                                                                   // 6
		submit: "Ορισμός κωδικού"                                                                                            // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Επιλέξτε κωδικό",                                                                                            // 10
		newPassword: "Νέος κωδικός",                                                                                         // 11
		newPasswordAgain: "Νέος Κωδικός (ξανά)",                                                                             // 12
		cancel: "Ακύρωση",                                                                                                   // 13
		submit: "Ορισμός κωδικού"                                                                                            // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Ο λογαριασμός ηλεκτρονικού ταχυδρομείου έχει επιβεβαιωθεί",                                               // 17
		dismiss: "Κλείσιμο"                                                                                                  // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Κλείσιμο",                                                                                                 // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Αλλαγή κωδικού",                                                                                          // 24
		signOut: "Αποσύνδεση"                                                                                                // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Είσοδος",                                                                                                   // 28
		up: "Εγγραφή"                                                                                                        // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "ή"                                                                                                              // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Δημιουργία",                                                                                                // 35
		signIn: "Είσοδος",                                                                                                   // 36
		forgot: "Ξεχάσατε τον κωδικό σας;",                                                                                  // 37
		createAcc: "Δημιουργία λογαριασμού"                                                                                  // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Ηλεκτρονικό ταχυδρομείο (email)",                                                                            // 41
		reset: "Ακύρωση κωδικού",                                                                                            // 42
		invalidEmail: "Μη έγκυρος λογαριασμός ηλεκτρονικού ταχυδρομείου (email)"                                             // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Επιστροφή"                                                                                                    // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Αλλαγή κωδικού",                                                                                            // 49
		cancel: "Ακύρωση"                                                                                                    // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Είσοδος με",                                                                                            // 53
		configure: "Διαμόρφωση",                                                                                             // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Αποσύνδεση"                                                                                                // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Δεν έχουν διαμορφωθεί υπηρεσίες εισόδου"                                                           // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Όνομα χρήστη ή Λογαριασμός Ηλεκτρονικού Ταχυδρομείου",                                             // 63
		username: "Όνομα χρήστη",                                                                                            // 64
		email: "Ηλεκτρονικό ταχυδρομείο (email)",                                                                            // 65
		password: "Κωδικός"                                                                                                  // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Όνομα χρήστη",                                                                                            // 69
		email: "Ηλεκτρονικό ταχυδρομείο (email)",                                                                            // 70
		emailOpt: "Ηλεκτρονικό ταχυδρομείο (προαιρετικό)",                                                                   // 71
		password: "Κωδικός",                                                                                                 // 72
		passwordAgain: "Κωδικός (ξανά)"                                                                                      // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Ισχύων Κωδικός",                                                                                   // 76
		newPassword: "Νέος Κωδικός",                                                                                         // 77
		newPasswordAgain: "Νέος Κωδικός (ξανά)"                                                                              // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		emailSent: "Το email έχει αποσταλεί",                                                                                // 81
		passwordChanged: "Password changed"                                                                                  // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "User not found",                                                                                      // 85
		invalidEmail: "Μη έγκυρος λογαριασμός ηλεκτρονικού ταχυδρομείου (email)",                                            // 86
		incorrectPassword: "Incorrect password",                                                                             // 87
		usernameTooShort: "Το όνομα χρήστη πρέπει να είναι τουλάχιστον 3 χαρακτήρες",                                        // 88
		passwordTooShort: "Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες",                                              // 89
		passwordsDontMatch: "Οι κωδικοί δεν ταιριάζουν",                                                                     // 90
		newPasswordSameAsOld: "New and old passwords must be different"                                                      // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/ko.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ko", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "비밀번호 초기화하기",                                                                                                 // 3
		newPassword: "새로운 비밀번호",                                                                                             // 4
		newPasswordAgain: "새로운 비밀번호 (확인)",                                                                                   // 5
		cancel: "취소",                                                                                                        // 6
		submit: "변경"                                                                                                         // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "비밀번호를 입력해주세요",                                                                                               // 10
		newPassword: "새로운 비밀번호",                                                                                             // 11
		newPasswordAgain: "새로운 비밀번호 (확인)",                                                                                   // 12
		cancel: "닫기",                                                                                                        // 13
		submit: "변경"                                                                                                         // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "이메일 주소가 인증되었습니다",                                                                                         // 17
		dismiss: "취소"                                                                                                        // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "취소",                                                                                                       // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "비밀번호 변경하기",                                                                                               // 24
		signOut: "로그아웃"                                                                                                      // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "로그인",                                                                                                       // 28
		up: "계정 만들기"                                                                                                         // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "또는"                                                                                                             // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "만들기",                                                                                                       // 35
		signIn: "로그인",                                                                                                       // 36
		forgot: "비밀번호를 잊어버리셨나요?",                                                                                            // 37
		createAcc: "계정 만들기"                                                                                                  // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "이메일 주소",                                                                                                     // 41
		reset: "비밀번호 초기화하기",                                                                                                 // 42
		invalidEmail: "올바르지 않은 이메일 주소입니다"                                                                                    // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "취소"                                                                                                           // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "비밀번호 변경하기",                                                                                                 // 49
		cancel: "취소"                                                                                                         // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "다음으로 로그인하기:",                                                                                           // 53
		configure: "설정",                                                                                                     // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "로그아웃"                                                                                                      // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "사용 가능한 로그인 서비스가 없습니다"                                                                              // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "사용자 이름 또는 이메일 주소",                                                                                 // 63
		username: "사용자 이름",                                                                                                  // 64
		email: "이메일 주소",                                                                                                     // 65
		password: "비밀번호"                                                                                                     // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "사용자 이름",                                                                                                  // 69
		email: "이메일 주소",                                                                                                     // 70
		emailOpt: "이메일 주소 (선택)",                                                                                             // 71
		password: "비밀번호",                                                                                                    // 72
		passwordAgain: "비밀번호 (확인)"                                                                                           // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "현재 비밀번호",                                                                                          // 76
		newPassword: "새로운 비밀번호",                                                                                             // 77
		newPasswordAgain: "새로운 비밀번호 (확인)"                                                                                    // 78
	},                                                                                                                    // 79
	infoMessages: {                                                                                                       // 80
		sent: "이메일이 발송되었습니다",                                                                                                // 81
		passwordChanged: "비밀번호가 변경되었습니다"                                                                                     // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "찾을 수 없는 회원입니다",                                                                                       // 85
		invalidEmail: "잘못된 이메일 주소",                                                                                          // 86
		incorrectPassword: "비밀번호가 틀렸습니다",                                                                                    // 87
		usernameTooShort: "사용자 이름은 최소 3글자 이상이어야 합니다",                                                                        // 88
		passwordTooShort: "비밀번호는 최소 6글자 이상이어야 합니다",                                                                          // 89
		passwordsDontMatch: "비밀번호가 같지 않습니다",                                                                                 // 90
		newPasswordSameAsOld: "새 비밀번호와 기존 비밀번호는 달라야합니다"                                                                      // 91
	}                                                                                                                     // 92
});                                                                                                                    // 93
                                                                                                                       // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/ar.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ar", {                                                                                                       // 1
  resetPasswordDialog: {                                                                                               // 2
    title: "استرجع كلمة المرور",                                                                                       // 3
    newPassword: "كلمة المرور الجديدة",                                                                                // 4
    newPasswordAgain: "أعد كتابة كلمة السر الجديدة",                                                                   // 5
    cancel: "إلغ",                                                                                                     // 6
    submit: "تم"                                                                                                       // 7
  },                                                                                                                   // 8
  enrollAccountDialog: {                                                                                               // 9
    title: "اختر كلمة سر",                                                                                             // 10
    newPassword: "كلمة السر",                                                                                          // 11
    newPasswordAgain: "أعد كتابة كلمة السر الجديدة",                                                                   // 12
    cancel: "أغلق",                                                                                                    // 13
    submit: "تم"                                                                                                       // 14
  },                                                                                                                   // 15
  justVerifiedEmailDialog: {                                                                                           // 16
    verified: "تم تأكيد البريد",                                                                                       // 17
    dismiss:  "حسنًا"                                                                                                  // 18
  },                                                                                                                   // 19
  loginButtonsMessagesDialog: {                                                                                        // 20
    dismiss: "حسنًا"                                                                                                   // 21
  },                                                                                                                   // 22
  loginButtonsLoggedInDropdownActions: {                                                                               // 23
    password: "غير كلمة السر",                                                                                         // 24
    signOut: "تسجيل الخروج"                                                                                            // 25
  },                                                                                                                   // 26
  loginButtonsLoggedOutDropdown: {                                                                                     // 27
    signIn: "دخول",                                                                                                    // 28
    up: "إنشاء حساب"                                                                                                   // 29
  },                                                                                                                   // 30
  loginButtonsLoggedOutPasswordServiceSeparator: {                                                                     // 31
    or: "أو"                                                                                                           // 32
  },                                                                                                                   // 33
  loginButtonsLoggedOutPasswordService: {                                                                              // 34
    create: "أنشئ",                                                                                                    // 35
    signIn: "دخول",                                                                                                    // 36
    forgot: "نسيت كلمة السر؟",                                                                                         // 37
    createAcc: "أنشئ حسابا"                                                                                            // 38
  },                                                                                                                   // 39
  forgotPasswordForm: {                                                                                                // 40
    email: "البريد",                                                                                                   // 41
    reset: "إعادة تعين كلمة السر",                                                                                     // 42
    invalidEmail: "البريد خاطئ"                                                                                        // 43
  },                                                                                                                   // 44
  loginButtonsBackToLoginLink: {                                                                                       // 45
    back: "إلغ"                                                                                                        // 46
  },                                                                                                                   // 47
  loginButtonsChangePassword: {                                                                                        // 48
    submit: "غير كلمة السر",                                                                                           // 49
    cancel: "إلغ"                                                                                                      // 50
  },                                                                                                                   // 51
  loginButtonsLoggedOutSingleLoginButton: {                                                                            // 52
    signInWith: "سجل الدخول عبر",                                                                                      // 53
    configure: "تعيين"                                                                                                 // 54
  },                                                                                                                   // 55
  loginButtonsLoggedInSingleLogoutButton: {                                                                            // 56
    signOut: "اخرج"                                                                                                    // 57
  },                                                                                                                   // 58
  loginButtonsLoggedOut: {                                                                                             // 59
    noLoginServices: "لا يوجد خدمة دخول مفعله"                                                                         // 60
  },                                                                                                                   // 61
  loginFields: {                                                                                                       // 62
    usernameOrEmail: "اسم المستخدم او عنوان البريد",                                                                   // 63
    username: "اسم المستخدم",                                                                                          // 64
    email: "البريد",                                                                                                   // 65
    password: "كلمة السر"                                                                                              // 66
  },                                                                                                                   // 67
  signupFields: {                                                                                                      // 68
    username: "اسم المستخدم",                                                                                          // 69
    email: "البريد",                                                                                                   // 70
    emailOpt: "-اختياري- البريد",                                                                                      // 71
    password: "كلمة السر",                                                                                             // 72
    passwordAgain: "أعد كتابة كلمة السر"                                                                               // 73
  },                                                                                                                   // 74
  changePasswordFields: {                                                                                              // 75
    currentPassword: "كلمة السر الحالية",                                                                              // 76
    newPassword: "كلمة السر الجديدة",                                                                                  // 77
    newPasswordAgain: "أعد كتابة كلمة السر الجديدة"                                                                    // 78
  },                                                                                                                   // 79
  infoMessages : {                                                                                                     // 80
    emailSent: "تم الارسال",                                                                                           // 81
    passwordChanged: "تمت إعادة تعيين كلمة السر"                                                                       // 82
  },                                                                                                                   // 83
  errorMessages: {                                                                                                     // 84
    userNotFound: "المستخدم غير موجود",                                                                                // 85
    invalidEmail: "بريد خاطئ",                                                                                         // 86
    incorrectPassword: "كلمة السر خطأ",                                                                                // 87
    usernameTooShort: "اسم المستخدم لابد ان يكون علي الاقل ٣ حروف",                                                    // 88
    passwordTooShort: "كلمة السر لابد ان تكون علي الاقل ٦ احرف",                                                       // 89
    passwordsDontMatch: "كلمة السر غير متطابقة",                                                                       // 90
    newPasswordSameAsOld: "لابد من اختيار كلمة سر مختلفة عن السابقة",                                                  // 91
    signupsForbidden: "التسجيل مغلق"                                                                                   // 92
  }                                                                                                                    // 93
});                                                                                                                    // 94
                                                                                                                       // 95
                                                                                                                       // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/pl.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("pl", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Resetuj hasło",                                                                                              // 3
		newPassword: "Nowe hasło",                                                                                           // 4
		newPasswordAgain: "Nowe hasło (powtórz)",                                                                            // 5
		cancel: "Anuluj",                                                                                                    // 6
		submit: "Ustaw hasło"                                                                                                // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Wybierz hasło",                                                                                              // 10
		newPassword: "Nowe hasło",                                                                                           // 11
		newPasswordAgain: "Nowe hasło (powtórz)",                                                                            // 12
		cancel: "Zamknij",                                                                                                   // 13
		submit: "Ustaw hasło"                                                                                                // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "Adres email został zweryfikowany",                                                                        // 17
		dismiss: "Odrzuć"                                                                                                    // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Odrzuć"                                                                                                    // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Zmień hasło",                                                                                             // 24
		signOut: "Wyloguj się"                                                                                               // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Zaloguj się",                                                                                               // 28
		up: "Zarejestruj się"                                                                                                // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "lub"                                                                                                            // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Stwórz",                                                                                                    // 35
		signIn: "Zaloguj się ",                                                                                              // 36
		forgot: "Nie pamiętasz hasła?",                                                                                      // 37
		createAcc: "Utwórz konto"                                                                                            // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "Email",                                                                                                      // 41
		reset: "Resetuj hasło",                                                                                              // 42
		invalidEmail: "Niepoprawny email"                                                                                    // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Anuluj"                                                                                                       // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Zmień hasło",                                                                                               // 49
		cancel: "Anuluj"                                                                                                     // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Zaloguj się przez",                                                                                     // 53
		configure: "Configure"                                                                                               // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Wyloguj się"                                                                                               // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Nie skonfigurowano usługi logowania"                                                               // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Nazwa użytkownika lub email",                                                                      // 63
		username: "Nazwa użytkownika",                                                                                       // 64
		email: "Email",                                                                                                      // 65
		password: "Hasło"                                                                                                    // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Nazwa użytkownika",                                                                                       // 69
		email: "Email",                                                                                                      // 70
		emailOpt: "Email (opcjonalnie)",                                                                                     // 71
		password: "Hasło",                                                                                                   // 72
		passwordAgain: "Hasło (powtórz)"                                                                                     // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Obecne hasło",                                                                                     // 76
		newPassword: "Nowe hasło",                                                                                           // 77
		newPasswordAgain: "Nowe hasło (powtórz)"                                                                             // 78
	},                                                                                                                    // 79
	infoMessages : {                                                                                                      // 80
		emailSent: "Wysłano email",                                                                                          // 81
		passwordChanged: "Hasło zostało zmienione"                                                                           // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "Nie znaleziono użytkownika",                                                                          // 85
		invalidEmail: "Niepoprawny email",                                                                                   // 86
		incorrectPassword: "Niepoprawne hasło",                                                                              // 87
		usernameTooShort: "Nazwa użytkowika powinna mieć przynajmniej 3 znaki",                                              // 88
		passwordTooShort: "Hasło powinno składać się przynajmnej z 6 znaków",                                                // 89
		passwordsDontMatch: "Hasło są różne",                                                                                // 90
		newPasswordSameAsOld: "Nowe hasło musi się różnić od starego",                                                       // 91
		signupsForbidden: "Rejstracja wyłączona"                                                                             // 92
	}                                                                                                                     // 93
});                                                                                                                    // 94
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/zh.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("zh", {                                                                                                       // 1
    resetPasswordDialog: {                                                                                             // 2
        title: "重置密码",                                                                                                 // 3
        newPassword: "新密码",                                                                                            // 4
        newPasswordAgain: "重复新密码",                                                                                     // 5
        cancel: "取消",                                                                                                  // 6
        submit: "确定"                                                                                                   // 7
    },                                                                                                                 // 8
    enrollAccountDialog: {                                                                                             // 9
        title: "选择一个密码",                                                                                               // 10
        newPassword: "新密码",                                                                                            // 11
        newPasswordAgain: "重复新密码",                                                                                     // 12
        cancel: "取消",                                                                                                  // 13
        submit: "确定"                                                                                                   // 14
    },                                                                                                                 // 15
    justVerifiedEmailDialog: {                                                                                         // 16
        verified: "Email地址验证",                                                                                         // 17
        dismiss: "失败"                                                                                                  // 18
    },                                                                                                                 // 19
    loginButtonsMessagesDialog: {                                                                                      // 20
        dismiss: "失败"                                                                                                  // 21
    },                                                                                                                 // 22
    loginButtonsLoggedInDropdownActions: {                                                                             // 23
        password: "更改密码",                                                                                              // 24
        signOut: "退出"                                                                                                  // 25
    },                                                                                                                 // 26
    loginButtonsLoggedOutDropdown: {                                                                                   // 27
        signIn: "登陆",                                                                                                  // 28
        up: "注册"                                                                                                       // 29
    },                                                                                                                 // 30
    loginButtonsLoggedOutPasswordServiceSeparator: {                                                                   // 31
        or: "或"                                                                                                        // 32
    },                                                                                                                 // 33
    loginButtonsLoggedOutPasswordService: {                                                                            // 34
        create: "新建",                                                                                                  // 35
        signIn: "登陆",                                                                                                  // 36
        forgot: "忘记密码?",                                                                                               // 37
        createAcc: "新建用户"                                                                                              // 38
    },                                                                                                                 // 39
    forgotPasswordForm: {                                                                                              // 40
        email: "Email",                                                                                                // 41
        reset: "重置密码",                                                                                                 // 42
        invalidEmail: "email格式不正确"                                                                                     // 43
    },                                                                                                                 // 44
    loginButtonsBackToLoginLink: {                                                                                     // 45
        back: "取消"                                                                                                     // 46
    },                                                                                                                 // 47
    loginButtonsChangePassword: {                                                                                      // 48
        submit: "更改密码",                                                                                                // 49
        cancel: "取消"                                                                                                   // 50
    },                                                                                                                 // 51
    loginButtonsLoggedOutSingleLoginButton: {                                                                          // 52
        signInWith: "登陆以",                                                                                             // 53
        configure: "配置"                                                                                                // 54
    },                                                                                                                 // 55
    loginButtonsLoggedInSingleLogoutButton: {                                                                          // 56
        signOut: "退出"                                                                                                  // 57
    },                                                                                                                 // 58
    loginButtonsLoggedOut: {                                                                                           // 59
        noLoginServices: "没有配置登录服务"                                                                                    // 60
    },                                                                                                                 // 61
    loginFields: {                                                                                                     // 62
        usernameOrEmail: "用户名或者Email",                                                                                 // 63
        username: "用户名",                                                                                               // 64
        email: "Email",                                                                                                // 65
        password: "密码"                                                                                                 // 66
    },                                                                                                                 // 67
    signupFields: {                                                                                                    // 68
        username: "用户名",                                                                                               // 69
        email: "Email",                                                                                                // 70
        emailOpt: "Email (可选)",                                                                                        // 71
        password: "密码",                                                                                                // 72
        passwordAgain: "重复密码"                                                                                          // 73
    },                                                                                                                 // 74
    changePasswordFields: {                                                                                            // 75
        currentPassword: "当前密码",                                                                                       // 76
        newPassword: "新密码",                                                                                            // 77
        newPasswordAgain: "重复新密码"                                                                                      // 78
    },                                                                                                                 // 79
    infoMessages: {                                                                                                    // 80
        emailSent: "发送Email",                                                                                          // 81
        passwordChanged: "密码更改成功"                                                                                      // 82
    },                                                                                                                 // 83
    errorMessages: {                                                                                                   // 84
        userNotFound: "用户不存在",                                                                                         // 85
        invalidEmail: "Email格式不正确",                                                                                    // 86
        incorrectPassword: "密码错误",                                                                                     // 87
        usernameTooShort: "用户名必需大于3位",                                                                                 // 88
        passwordTooShort: "密码必需大于6位",                                                                                  // 89
        passwordsDontMatch: "密码输入不一致",                                                                                 // 90
        newPasswordSameAsOld: "新密码和旧的不能一样",                                                                            // 91
        signupsForbidden: "没有权限"                                                                                       // 92
    }                                                                                                                  // 93
});                                                                                                                    // 94
                                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/nl.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("nl", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Wachtwoord resetten",                                                                                        // 3
		newPassword: "Nieuw wachtwoord",                                                                                     // 4
		newPasswordAgain: "Nieuw wachtwoord (opnieuw)",                                                                      // 5
		cancel: "Annuleren",                                                                                                 // 6
		submit: "Wachtwoord instellen"                                                                                       // 7
	},                                                                                                                    // 8
	enrollAccountDialog: {                                                                                                // 9
		title: "Stel een wachtwoord in",                                                                                     // 10
		newPassword: "Nieuw wachtwoord",                                                                                     // 11
		newPasswordAgain: "Nieuw wachtwoord (opnieuw)",                                                                      // 12
		cancel: "Sluiten",                                                                                                   // 13
		submit: "Wachtwoord instellen"                                                                                       // 14
	},                                                                                                                    // 15
	justVerifiedEmailDialog: {                                                                                            // 16
		verified: "E-mailadres geverifieerd",                                                                                // 17
		dismiss: "Sluiten"                                                                                                   // 18
	},                                                                                                                    // 19
	loginButtonsMessagesDialog: {                                                                                         // 20
		dismiss: "Sluiten",                                                                                                  // 21
	},                                                                                                                    // 22
	loginButtonsLoggedInDropdownActions: {                                                                                // 23
		password: "Wachtwoord veranderen",                                                                                   // 24
		signOut: "Afmelden"                                                                                                  // 25
	},                                                                                                                    // 26
	loginButtonsLoggedOutDropdown: {                                                                                      // 27
		signIn: "Aanmelden",                                                                                                 // 28
		up: "Registreren"                                                                                                    // 29
	},                                                                                                                    // 30
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 31
		or: "of"                                                                                                             // 32
	},                                                                                                                    // 33
	loginButtonsLoggedOutPasswordService: {                                                                               // 34
		create: "Aanmaken",                                                                                                  // 35
		signIn: "Aanmelden",                                                                                                 // 36
		forgot: "Wachtwoord vergeten?",                                                                                      // 37
		createAcc: "Account aanmaken"                                                                                        // 38
	},                                                                                                                    // 39
	forgotPasswordForm: {                                                                                                 // 40
		email: "E-mailadres",                                                                                                // 41
		reset: "Wachtwoord opnieuw instellen",                                                                               // 42
		invalidEmail: "Ongeldig e-mailadres"                                                                                 // 43
	},                                                                                                                    // 44
	loginButtonsBackToLoginLink: {                                                                                        // 45
		back: "Annuleren"                                                                                                    // 46
	},                                                                                                                    // 47
	loginButtonsChangePassword: {                                                                                         // 48
		submit: "Wachtwoord veranderen",                                                                                     // 49
		cancel: "Annuleren"                                                                                                  // 50
	},                                                                                                                    // 51
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 52
		signInWith: "Aanmelden via",                                                                                         // 53
		configure: "Instellen",                                                                                              // 54
	},                                                                                                                    // 55
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 56
		signOut: "Afmelden"                                                                                                  // 57
	},                                                                                                                    // 58
	loginButtonsLoggedOut: {                                                                                              // 59
		noLoginServices: "Geen aanmelddienst ingesteld"                                                                      // 60
	},                                                                                                                    // 61
	loginFields: {                                                                                                        // 62
		usernameOrEmail: "Gebruikersnaam of e-mailadres",                                                                    // 63
		username: "Gebruikersnaam",                                                                                          // 64
		email: "E-mailadres",                                                                                                // 65
		password: "Wachtwoord"                                                                                               // 66
	},                                                                                                                    // 67
	signupFields: {                                                                                                       // 68
		username: "Gebruikersnaam",                                                                                          // 69
		email: "E-mailadres",                                                                                                // 70
		emailOpt: "E-mailadres (niet verplicht)",                                                                            // 71
		password: "Wachtwoord",                                                                                              // 72
		passwordAgain: "Wachtwoord (opnieuw)"                                                                                // 73
	},                                                                                                                    // 74
	changePasswordFields: {                                                                                               // 75
		currentPassword: "Huidig wachtwoord",                                                                                // 76
		newPassword: "Nieuw wachtwoord",                                                                                     // 77
		newPasswordAgain: "Nieuw wachtwoord (opnieuw)"                                                                       // 78
	},                                                                                                                    // 79
	infoMessages : {                                                                                                      // 80
		emailSent: "E-mail verstuurd",                                                                                       // 81
		passwordChanged: "Wachtwoord veranderd"                                                                              // 82
	},                                                                                                                    // 83
	errorMessages: {                                                                                                      // 84
		userNotFound: "Gebruiker niet gevonden",                                                                             // 85
		invalidEmail: "Ongeldig e-mailadres",                                                                                // 86
		incorrectPassword: "Onjuist wachtwoord",                                                                             // 87
		usernameTooShort: "De gebruikersnaam moet minimaal uit 3 tekens bestaan",                                            // 88
		passwordTooShort: "Het wachtwoord moet minimaal uit 6 tekens bestaan",                                               // 89
		passwordsDontMatch: "De wachtwoorden komen niet overeen",                                                            // 90
		newPasswordSameAsOld: "Het oude en het nieuwe wachtwoord mogen niet hetzelfde zijn",                                 // 91
		signupsForbidden: "Aanmeldingen niet toegestaan"                                                                     // 92
	}                                                                                                                     // 93
});                                                                                                                    // 94
                                                                                                                       // 95
                                                                                                                       // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.setDefaultLanguage('en')                                                                                          // 1
                                                                                                                       // 2
accountsUIBootstrap3 = {                                                                                               // 3
	setLanguage: function (lang) {                                                                                        // 4
		return i18n.setLanguage(lang)                                                                                        // 5
	},                                                                                                                    // 6
	getLanguage: function () {                                                                                            // 7
		return i18n.getLanguage()                                                                                            // 8
	},                                                                                                                    // 9
	map: function (lang, obj) {                                                                                           // 10
		return i18n.map(lang, obj)                                                                                           // 11
	}                                                                                                                     // 12
}                                                                                                                      // 13
                                                                                                                       // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtons");                                                                                 // 2
Template["_loginButtons"] = new Template("Template._loginButtons", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n		", Blaze.Unless(function() {                                                                         // 8
      return Spacebars.call(view.lookup("loggingIn"));                                                                 // 9
    }, function() {                                                                                                    // 10
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedIn")), "\n		" ];                     // 11
    }), "\n	" ];                                                                                                       // 12
  }, function() {                                                                                                      // 13
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOut")), "\n	" ];                        // 14
  });                                                                                                                  // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
Template.__checkName("_loginButtonsLoggedIn");                                                                         // 18
Template["_loginButtonsLoggedIn"] = new Template("Template._loginButtonsLoggedIn", (function() {                       // 19
  var view = this;                                                                                                     // 20
  return Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdown"));                                      // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
Template.__checkName("_loginButtonsLoggedOut");                                                                        // 24
Template["_loginButtonsLoggedOut"] = new Template("Template._loginButtonsLoggedOut", (function() {                     // 25
  var view = this;                                                                                                     // 26
  return Blaze.If(function() {                                                                                         // 27
    return Spacebars.call(view.lookup("services"));                                                                    // 28
  }, function() {                                                                                                      // 29
    return [ " \n		", Blaze.If(function() {                                                                            // 30
      return Spacebars.call(view.lookup("configurationLoaded"));                                                       // 31
    }, function() {                                                                                                    // 32
      return [ "\n			", Blaze.If(function() {                                                                          // 33
        return Spacebars.call(view.lookup("dropdown"));                                                                // 34
      }, function() {                                                                                                  // 35
        return [ " \n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutDropdown")), "\n			" ];       // 36
      }, function() {                                                                                                  // 37
        return [ "\n				", Spacebars.With(function() {                                                                 // 38
          return Spacebars.call(view.lookup("singleService"));                                                         // 39
        }, function() {                                                                                                // 40
          return [ " \n					", Blaze.Unless(function() {                                                               // 41
            return Spacebars.call(view.lookup("logginIn"));                                                            // 42
          }, function() {                                                                                              // 43
            return [ "\n						", HTML.DIV({                                                                            // 44
              "class": "navbar-form"                                                                                   // 45
            }, "\n							", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n						"), "\n					" ];
          }), "\n				" ];                                                                                              // 47
        }), "\n			" ];                                                                                                 // 48
      }), "\n		" ];                                                                                                    // 49
    }), "\n	" ];                                                                                                       // 50
  }, function() {                                                                                                      // 51
    return [ "\n		", HTML.DIV({                                                                                        // 52
      "class": "no-services"                                                                                           // 53
    }, Blaze.View("lookup:i18n", function() {                                                                          // 54
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOut.noLoginServices");                         // 55
    })), "\n	" ];                                                                                                      // 56
  });                                                                                                                  // 57
}));                                                                                                                   // 58
                                                                                                                       // 59
Template.__checkName("_loginButtonsMessages");                                                                         // 60
Template["_loginButtonsMessages"] = new Template("Template._loginButtonsMessages", (function() {                       // 61
  var view = this;                                                                                                     // 62
  return [ Blaze.If(function() {                                                                                       // 63
    return Spacebars.call(view.lookup("errorMessage"));                                                                // 64
  }, function() {                                                                                                      // 65
    return [ "\n		", HTML.DIV({                                                                                        // 66
      "class": "alert alert-danger"                                                                                    // 67
    }, Blaze.View("lookup:errorMessage", function() {                                                                  // 68
      return Spacebars.mustache(view.lookup("errorMessage"));                                                          // 69
    })), "\n	" ];                                                                                                      // 70
  }), "\n	", Blaze.If(function() {                                                                                     // 71
    return Spacebars.call(view.lookup("infoMessage"));                                                                 // 72
  }, function() {                                                                                                      // 73
    return [ "\n		", HTML.DIV({                                                                                        // 74
      "class": "alert alert-success no-margin"                                                                         // 75
    }, Blaze.View("lookup:infoMessage", function() {                                                                   // 76
      return Spacebars.mustache(view.lookup("infoMessage"));                                                           // 77
    })), "\n	" ];                                                                                                      // 78
  }) ];                                                                                                                // 79
}));                                                                                                                   // 80
                                                                                                                       // 81
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons_single.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtonsLoggedOutSingleLoginButton");                                                       // 2
Template["_loginButtonsLoggedOutSingleLoginButton"] = new Template("Template._loginButtonsLoggedOutSingleLoginButton", (function() {
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("configured"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n		", HTML.BUTTON({                                                                                     // 8
      "class": function() {                                                                                            // 9
        return [ "login-button btn btn-block btn-", Spacebars.mustache(view.lookup("capitalizedName")) ];              // 10
      }                                                                                                                // 11
    }, Blaze.View("lookup:i18n", function() {                                                                          // 12
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutSingleLoginButton.signInWith");             // 13
    }), " ", Blaze.View("lookup:capitalizedName", function() {                                                         // 14
      return Spacebars.mustache(view.lookup("capitalizedName"));                                                       // 15
    })), "\n	" ];                                                                                                      // 16
  }, function() {                                                                                                      // 17
    return [ "\n		", HTML.BUTTON({                                                                                     // 18
      "class": "login-button btn btn-block configure-button btn-danger"                                                // 19
    }, Blaze.View("lookup:i18n", function() {                                                                          // 20
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutSingleLoginButton.configure");              // 21
    }), " ", Blaze.View("lookup:capitalizedName", function() {                                                         // 22
      return Spacebars.mustache(view.lookup("capitalizedName"));                                                       // 23
    })), "\n	" ];                                                                                                      // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons_dropdown.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtonsLoggedInDropdown");                                                                 // 2
Template["_loginButtonsLoggedInDropdown"] = new Template("Template._loginButtonsLoggedInDropdown", (function() {       // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    id: "login-dropdown-list",                                                                                         // 6
    "class": "dropdown"                                                                                                // 7
  }, "\n		", HTML.A({                                                                                                  // 8
    "class": "dropdown-toggle",                                                                                        // 9
    "data-toggle": "dropdown"                                                                                          // 10
  }, "\n			", Blaze.View("lookup:displayName", function() {                                                            // 11
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 12
  }), "\n			", Spacebars.With(function() {                                                                             // 13
    return Spacebars.call(view.lookup("user_profile_picture"));                                                        // 14
  }, function() {                                                                                                      // 15
    return [ "\n				", HTML.IMG({                                                                                      // 16
      src: function() {                                                                                                // 17
        return Spacebars.mustache(view.lookup("."));                                                                   // 18
      },                                                                                                               // 19
      width: "30px",                                                                                                   // 20
      "class": "img-circular",                                                                                         // 21
      alt: "#"                                                                                                         // 22
    }), "\n			" ];                                                                                                     // 23
  }), "\n			", HTML.Raw('<b class="caret"></b>'), "\n		"), "\n		", HTML.DIV({                                          // 24
    "class": "dropdown-menu"                                                                                           // 25
  }, "\n			", Blaze.If(function() {                                                                                    // 26
    return Spacebars.call(view.lookup("inMessageOnlyFlow"));                                                           // 27
  }, function() {                                                                                                      // 28
    return [ "\n				", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n			" ];                     // 29
  }, function() {                                                                                                      // 30
    return [ "\n				", Blaze.If(function() {                                                                           // 31
      return Spacebars.call(view.lookup("inChangePasswordFlow"));                                                      // 32
    }, function() {                                                                                                    // 33
      return [ "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsChangePassword")), "\n				" ];           // 34
    }, function() {                                                                                                    // 35
      return [ "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdownActions")), "\n				" ];  // 36
    }), "\n			" ];                                                                                                     // 37
  }), "\n		"), "\n	");                                                                                                 // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
Template.__checkName("_loginButtonsLoggedInDropdownActions");                                                          // 41
Template["_loginButtonsLoggedInDropdownActions"] = new Template("Template._loginButtonsLoggedInDropdownActions", (function() {
  var view = this;                                                                                                     // 43
  return [ Blaze.If(function() {                                                                                       // 44
    return Spacebars.call(view.lookup("additionalLoggedInDropdownActions"));                                           // 45
  }, function() {                                                                                                      // 46
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsAdditionalLoggedInDropdownActions")), "\n	" ];
  }), "\n\n	", Blaze.If(function() {                                                                                   // 48
    return Spacebars.call(view.lookup("allowChangingPassword"));                                                       // 49
  }, function() {                                                                                                      // 50
    return [ "\n		", HTML.BUTTON({                                                                                     // 51
      "class": "btn btn-default btn-block",                                                                            // 52
      id: "login-buttons-open-change-password"                                                                         // 53
    }, Blaze.View("lookup:i18n", function() {                                                                          // 54
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInDropdownActions.password");                  // 55
    })), "\n	" ];                                                                                                      // 56
  }), "\n\n	", HTML.BUTTON({                                                                                           // 57
    "class": "btn btn-block btn-primary",                                                                              // 58
    id: "login-buttons-logout"                                                                                         // 59
  }, Blaze.View("lookup:i18n", function() {                                                                            // 60
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInDropdownActions.signOut");                     // 61
  })) ];                                                                                                               // 62
}));                                                                                                                   // 63
                                                                                                                       // 64
Template.__checkName("_loginButtonsLoggedOutDropdown");                                                                // 65
Template["_loginButtonsLoggedOutDropdown"] = new Template("Template._loginButtonsLoggedOutDropdown", (function() {     // 66
  var view = this;                                                                                                     // 67
  return HTML.LI({                                                                                                     // 68
    id: "login-dropdown-list",                                                                                         // 69
    "class": "dropdown"                                                                                                // 70
  }, "\n		", HTML.A({                                                                                                  // 71
    "class": "dropdown-toggle",                                                                                        // 72
    "data-toggle": "dropdown"                                                                                          // 73
  }, Blaze.View("lookup:i18n", function() {                                                                            // 74
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutDropdown.signIn");                            // 75
  }), Blaze.Unless(function() {                                                                                        // 76
    return Spacebars.call(view.lookup("forbidClientAccountCreation"));                                                 // 77
  }, function() {                                                                                                      // 78
    return [ " / ", Blaze.View("lookup:i18n", function() {                                                             // 79
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutDropdown.up");                              // 80
    }) ];                                                                                                              // 81
  }), " ", HTML.Raw('<b class="caret"></b>')), "\n		", HTML.DIV({                                                      // 82
    "class": "dropdown-menu"                                                                                           // 83
  }, "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutAllServices")), "\n		"), "\n	");            // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
Template.__checkName("_loginButtonsLoggedOutAllServices");                                                             // 87
Template["_loginButtonsLoggedOutAllServices"] = new Template("Template._loginButtonsLoggedOutAllServices", (function() {
  var view = this;                                                                                                     // 89
  return Blaze.Each(function() {                                                                                       // 90
    return Spacebars.call(view.lookup("services"));                                                                    // 91
  }, function() {                                                                                                      // 92
    return [ "\n	", Blaze.Unless(function() {                                                                          // 93
      return Spacebars.call(view.lookup("hasPasswordService"));                                                        // 94
    }, function() {                                                                                                    // 95
      return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n	" ];                       // 96
    }), "\n		", Blaze.If(function() {                                                                                  // 97
      return Spacebars.call(view.lookup("isPasswordService"));                                                         // 98
    }, function() {                                                                                                    // 99
      return [ "\n			", Blaze.If(function() {                                                                          // 100
        return Spacebars.call(view.lookup("hasOtherServices"));                                                        // 101
      }, function() {                                                                                                  // 102
        return [ " \n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordServiceSeparator")), "\n			" ];
      }), "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordService")), "\n		" ];          // 104
    }, function() {                                                                                                    // 105
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n		" ];   // 106
    }), "\n	" ];                                                                                                       // 107
  });                                                                                                                  // 108
}));                                                                                                                   // 109
                                                                                                                       // 110
Template.__checkName("_loginButtonsLoggedOutPasswordServiceSeparator");                                                // 111
Template["_loginButtonsLoggedOutPasswordServiceSeparator"] = new Template("Template._loginButtonsLoggedOutPasswordServiceSeparator", (function() {
  var view = this;                                                                                                     // 113
  return HTML.DIV({                                                                                                    // 114
    "class": "or"                                                                                                      // 115
  }, HTML.Raw('\n		<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n		'), HTML.SPAN({
    "class": "or-text"                                                                                                 // 117
  }, Blaze.View("lookup:i18n", function() {                                                                            // 118
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordServiceSeparator.or");                // 119
  })), HTML.Raw('\n		<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n	'));    // 120
}));                                                                                                                   // 121
                                                                                                                       // 122
Template.__checkName("_loginButtonsLoggedOutPasswordService");                                                         // 123
Template["_loginButtonsLoggedOutPasswordService"] = new Template("Template._loginButtonsLoggedOutPasswordService", (function() {
  var view = this;                                                                                                     // 125
  return Blaze.If(function() {                                                                                         // 126
    return Spacebars.call(view.lookup("inForgotPasswordFlow"));                                                        // 127
  }, function() {                                                                                                      // 128
    return [ "\n		", Spacebars.include(view.lookupTemplate("_forgotPasswordForm")), "\n	" ];                           // 129
  }, function() {                                                                                                      // 130
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n		", Blaze.Each(function() {  // 131
      return Spacebars.call(view.lookup("fields"));                                                                    // 132
    }, function() {                                                                                                    // 133
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n		" ];                    // 134
    }), "\n		", HTML.BUTTON({                                                                                          // 135
      "class": "btn btn-primary col-xs-12 col-sm-12",                                                                  // 136
      id: "login-buttons-password",                                                                                    // 137
      type: "button"                                                                                                   // 138
    }, "\n			", Blaze.If(function() {                                                                                  // 139
      return Spacebars.call(view.lookup("inSignupFlow"));                                                              // 140
    }, function() {                                                                                                    // 141
      return [ "\n				", Blaze.View("lookup:i18n", function() {                                                        // 142
        return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.create");                 // 143
      }), "\n			" ];                                                                                                   // 144
    }, function() {                                                                                                    // 145
      return [ "\n				", Blaze.View("lookup:i18n", function() {                                                        // 146
        return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.signIn");                 // 147
      }), "\n			" ];                                                                                                   // 148
    }), "\n		"), "\n		", Blaze.If(function() {                                                                         // 149
      return Spacebars.call(view.lookup("inLoginFlow"));                                                               // 150
    }, function() {                                                                                                    // 151
      return [ "\n			", HTML.DIV({                                                                                     // 152
        id: "login-other-options"                                                                                      // 153
      }, "\n			", Blaze.If(function() {                                                                                // 154
        return Spacebars.call(view.lookup("showForgotPasswordLink"));                                                  // 155
      }, function() {                                                                                                  // 156
        return [ "\n				", HTML.A({                                                                                    // 157
          id: "forgot-password-link",                                                                                  // 158
          "class": "pull-left"                                                                                         // 159
        }, Blaze.View("lookup:i18n", function() {                                                                      // 160
          return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.forgot");               // 161
        })), "\n			" ];                                                                                                // 162
      }), "\n			", Blaze.If(function() {                                                                               // 163
        return Spacebars.call(view.lookup("showCreateAccountLink"));                                                   // 164
      }, function() {                                                                                                  // 165
        return [ "\n				", HTML.A({                                                                                    // 166
          id: "signup-link",                                                                                           // 167
          "class": "pull-right"                                                                                        // 168
        }, Blaze.View("lookup:i18n", function() {                                                                      // 169
          return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.createAcc");            // 170
        })), "\n			" ];                                                                                                // 171
      }), "\n			"), "\n		" ];                                                                                          // 172
    }), "\n		", Blaze.If(function() {                                                                                  // 173
      return Spacebars.call(view.lookup("inSignupFlow"));                                                              // 174
    }, function() {                                                                                                    // 175
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n		" ];              // 176
    }), "\n	" ];                                                                                                       // 177
  });                                                                                                                  // 178
}));                                                                                                                   // 179
                                                                                                                       // 180
Template.__checkName("_forgotPasswordForm");                                                                           // 181
Template["_forgotPasswordForm"] = new Template("Template._forgotPasswordForm", (function() {                           // 182
  var view = this;                                                                                                     // 183
  return HTML.DIV({                                                                                                    // 184
    "class": "login-form"                                                                                              // 185
  }, "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n		", HTML.DIV({                       // 186
    id: "forgot-password-email-label-and-input"                                                                        // 187
  }, " \n			", HTML.INPUT({                                                                                            // 188
    id: "forgot-password-email",                                                                                       // 189
    type: "email",                                                                                                     // 190
    placeholder: function() {                                                                                          // 191
      return Spacebars.mustache(view.lookup("i18n"), "forgotPasswordForm.email");                                      // 192
    },                                                                                                                 // 193
    "class": "form-control"                                                                                            // 194
  }), "\n		"), "\n		", HTML.BUTTON({                                                                                   // 195
    "class": "btn btn-primary login-button-form-submit col-xs-12 col-sm-12",                                           // 196
    id: "login-buttons-forgot-password"                                                                                // 197
  }, Blaze.View("lookup:i18n", function() {                                                                            // 198
    return Spacebars.mustache(view.lookup("i18n"), "forgotPasswordForm.reset");                                        // 199
  })), "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n	");                         // 200
}));                                                                                                                   // 201
                                                                                                                       // 202
Template.__checkName("_loginButtonsBackToLoginLink");                                                                  // 203
Template["_loginButtonsBackToLoginLink"] = new Template("Template._loginButtonsBackToLoginLink", (function() {         // 204
  var view = this;                                                                                                     // 205
  return HTML.BUTTON({                                                                                                 // 206
    id: "back-to-login-link",                                                                                          // 207
    "class": "btn btn-default col-xs-12 col-sm-12"                                                                     // 208
  }, Blaze.View("lookup:i18n", function() {                                                                            // 209
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsBackToLoginLink.back");                                // 210
  }));                                                                                                                 // 211
}));                                                                                                                   // 212
                                                                                                                       // 213
Template.__checkName("_loginButtonsFormField");                                                                        // 214
Template["_loginButtonsFormField"] = new Template("Template._loginButtonsFormField", (function() {                     // 215
  var view = this;                                                                                                     // 216
  return Blaze.If(function() {                                                                                         // 217
    return Spacebars.call(view.lookup("visible"));                                                                     // 218
  }, function() {                                                                                                      // 219
    return [ "\n		", HTML.Comment(" TODO: Implement more input types "), "\n		", Blaze.If(function() {                 // 220
      return Spacebars.dataMustache(view.lookup("equals"), view.lookup("inputType"), "checkbox");                      // 221
    }, function() {                                                                                                    // 222
      return [ "\n			", HTML.DIV({                                                                                     // 223
        "class": "checkbox"                                                                                            // 224
      }, "\n				", HTML.LABEL(HTML.INPUT({                                                                             // 225
        type: "checkbox",                                                                                              // 226
        id: function() {                                                                                               // 227
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];                                           // 228
        },                                                                                                             // 229
        name: function() {                                                                                             // 230
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];                                           // 231
        },                                                                                                             // 232
        value: "true"                                                                                                  // 233
      }), "\n				", Blaze.View("lookup:fieldLabel", function() {                                                       // 234
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("fieldLabel")));                                       // 235
      })), "\n			"), "\n		" ];                                                                                         // 236
    }, function() {                                                                                                    // 237
      return [ "\n		", HTML.INPUT({                                                                                    // 238
        id: function() {                                                                                               // 239
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];                                           // 240
        },                                                                                                             // 241
        type: function() {                                                                                             // 242
          return Spacebars.mustache(view.lookup("inputType"));                                                         // 243
        },                                                                                                             // 244
        placeholder: function() {                                                                                      // 245
          return Spacebars.mustache(view.lookup("fieldLabel"));                                                        // 246
        },                                                                                                             // 247
        "class": "form-control"                                                                                        // 248
      }), "\n		" ];                                                                                                    // 249
    }), "\n	" ];                                                                                                       // 250
  });                                                                                                                  // 251
}));                                                                                                                   // 252
                                                                                                                       // 253
Template.__checkName("_loginButtonsChangePassword");                                                                   // 254
Template["_loginButtonsChangePassword"] = new Template("Template._loginButtonsChangePassword", (function() {           // 255
  var view = this;                                                                                                     // 256
  return [ Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n	", Blaze.Each(function() {             // 257
    return Spacebars.call(view.lookup("fields"));                                                                      // 258
  }, function() {                                                                                                      // 259
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n	" ];                        // 260
  }), "\n	", HTML.BUTTON({                                                                                             // 261
    "class": "btn btn-block btn-primary",                                                                              // 262
    id: "login-buttons-do-change-password"                                                                             // 263
  }, Blaze.View("lookup:i18n", function() {                                                                            // 264
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsChangePassword.submit");                               // 265
  })), "\n	", HTML.BUTTON({                                                                                            // 266
    "class": "btn btn-block btn-default",                                                                              // 267
    id: "login-buttons-cancel-change-password"                                                                         // 268
  }, Blaze.View("lookup:i18n", function() {                                                                            // 269
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsChangePassword.cancel");                               // 270
  })) ];                                                                                                               // 271
}));                                                                                                                   // 272
                                                                                                                       // 273
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons_dialogs.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return [ Spacebars.include(view.lookupTemplate("_resetPasswordDialog")), "\n	", Spacebars.include(view.lookupTemplate("_enrollAccountDialog")), "\n	", Spacebars.include(view.lookupTemplate("_justVerifiedEmailDialog")), "\n	", Spacebars.include(view.lookupTemplate("_configureLoginServiceDialog")), "\n\n	\n	", Spacebars.include(view.lookupTemplate("_loginButtonsMessagesDialog")) ];
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
Template.__checkName("_resetPasswordDialog");                                                                          // 8
Template["_resetPasswordDialog"] = new Template("Template._resetPasswordDialog", (function() {                         // 9
  var view = this;                                                                                                     // 10
  return Blaze.If(function() {                                                                                         // 11
    return Spacebars.call(view.lookup("inResetPasswordFlow"));                                                         // 12
  }, function() {                                                                                                      // 13
    return [ "\n		", HTML.DIV({                                                                                        // 14
      "class": "modal",                                                                                                // 15
      id: "login-buttons-reset-password-modal"                                                                         // 16
    }, "\n			", HTML.DIV({                                                                                             // 17
      "class": "modal-dialog"                                                                                          // 18
    }, "\n				", HTML.DIV({                                                                                            // 19
      "class": "modal-content"                                                                                         // 20
    }, "\n					", HTML.DIV({                                                                                           // 21
      "class": "modal-header"                                                                                          // 22
    }, "\n						", HTML.BUTTON({                                                                                       // 23
      type: "button",                                                                                                  // 24
      "class": "close",                                                                                                // 25
      "data-dismiss": "modal",                                                                                         // 26
      "aria-hidden": "true"                                                                                            // 27
    }, HTML.CharRef({                                                                                                  // 28
      html: "&times;",                                                                                                 // 29
      str: "×"                                                                                                         // 30
    })), "\n						", HTML.H4({                                                                                         // 31
      "class": "modal-title"                                                                                           // 32
    }, Blaze.View("lookup:i18n", function() {                                                                          // 33
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.title");                                     // 34
    })), "\n					"), "\n					", HTML.DIV({                                                                             // 35
      "class": "modal-body"                                                                                            // 36
    }, "\n						", HTML.INPUT({                                                                                        // 37
      id: "reset-password-new-password",                                                                               // 38
      "class": "form-control",                                                                                         // 39
      type: "password",                                                                                                // 40
      placeholder: function() {                                                                                        // 41
        return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.newPassword");                             // 42
      }                                                                                                                // 43
    }), HTML.BR(), "\n                        ", HTML.INPUT({                                                          // 44
      id: "reset-password-new-password-again",                                                                         // 45
      "class": "form-control",                                                                                         // 46
      type: "password",                                                                                                // 47
      placeholder: function() {                                                                                        // 48
        return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.newPasswordAgain");                        // 49
      }                                                                                                                // 50
    }), HTML.BR(), "\n						", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n					"), "\n					", HTML.DIV({
      "class": "modal-footer"                                                                                          // 52
    }, "\n						", HTML.A({                                                                                            // 53
      "class": "btn btn-default",                                                                                      // 54
      id: "login-buttons-cancel-reset-password"                                                                        // 55
    }, Blaze.View("lookup:i18n", function() {                                                                          // 56
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.cancel");                                    // 57
    })), "\n						", HTML.BUTTON({                                                                                     // 58
      "class": "btn btn-primary",                                                                                      // 59
      id: "login-buttons-reset-password-button"                                                                        // 60
    }, "\n							", Blaze.View("lookup:i18n", function() {                                                             // 61
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.submit");                                    // 62
    }), "\n						"), "\n					"), "\n				"), HTML.Comment(" /.modal-content "), "\n			"), HTML.Comment(" /.modal-dalog "), "\n		"), HTML.Comment(" /.modal "), "\n	" ];
  });                                                                                                                  // 64
}));                                                                                                                   // 65
                                                                                                                       // 66
Template.__checkName("_enrollAccountDialog");                                                                          // 67
Template["_enrollAccountDialog"] = new Template("Template._enrollAccountDialog", (function() {                         // 68
  var view = this;                                                                                                     // 69
  return Blaze.If(function() {                                                                                         // 70
    return Spacebars.call(view.lookup("inEnrollAccountFlow"));                                                         // 71
  }, function() {                                                                                                      // 72
    return [ "\n		", HTML.DIV({                                                                                        // 73
      "class": "modal",                                                                                                // 74
      id: "login-buttons-enroll-account-modal"                                                                         // 75
    }, "\n			", HTML.DIV({                                                                                             // 76
      "class": "modal-dialog"                                                                                          // 77
    }, "\n				", HTML.DIV({                                                                                            // 78
      "class": "modal-content"                                                                                         // 79
    }, "\n					", HTML.DIV({                                                                                           // 80
      "class": "modal-header"                                                                                          // 81
    }, "\n						", HTML.BUTTON({                                                                                       // 82
      type: "button",                                                                                                  // 83
      "class": "close",                                                                                                // 84
      "data-dismiss": "modal",                                                                                         // 85
      "aria-hidden": "true"                                                                                            // 86
    }, HTML.CharRef({                                                                                                  // 87
      html: "&times;",                                                                                                 // 88
      str: "×"                                                                                                         // 89
    })), "\n						", HTML.H4({                                                                                         // 90
      "class": "modal-title"                                                                                           // 91
    }, Blaze.View("lookup:i18n", function() {                                                                          // 92
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.title");                                     // 93
    })), "\n					"), "\n					", HTML.DIV({                                                                             // 94
      "class": "modal-body"                                                                                            // 95
    }, "\n						", HTML.INPUT({                                                                                        // 96
      id: "enroll-account-password",                                                                                   // 97
      "class": "form-control",                                                                                         // 98
      type: "password",                                                                                                // 99
      placeholder: function() {                                                                                        // 100
        return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.newPassword");                             // 101
      }                                                                                                                // 102
    }), HTML.BR(), "\n                        ", HTML.INPUT({                                                          // 103
      id: "enroll-account-password-again",                                                                             // 104
      "class": "form-control",                                                                                         // 105
      type: "password",                                                                                                // 106
      placeholder: function() {                                                                                        // 107
        return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.newPasswordAgain");                        // 108
      }                                                                                                                // 109
    }), HTML.BR(), "\n						", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n					"), "\n					", HTML.DIV({
      "class": "modal-footer"                                                                                          // 111
    }, "\n						", HTML.A({                                                                                            // 112
      "class": "btn btn-default",                                                                                      // 113
      id: "login-buttons-cancel-enroll-account-button"                                                                 // 114
    }, Blaze.View("lookup:i18n", function() {                                                                          // 115
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.cancel");                                    // 116
    })), "\n						", HTML.BUTTON({                                                                                     // 117
      "class": "btn btn-primary",                                                                                      // 118
      id: "login-buttons-enroll-account-button"                                                                        // 119
    }, "\n							", Blaze.View("lookup:i18n", function() {                                                             // 120
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.submit");                                    // 121
    }), "\n						"), "\n					"), "\n				"), HTML.Comment(" /.modal-content "), "\n			"), HTML.Comment(" /.modal-dalog "), "\n		"), HTML.Comment(" /.modal "), "\n	" ];
  });                                                                                                                  // 123
}));                                                                                                                   // 124
                                                                                                                       // 125
Template.__checkName("_justVerifiedEmailDialog");                                                                      // 126
Template["_justVerifiedEmailDialog"] = new Template("Template._justVerifiedEmailDialog", (function() {                 // 127
  var view = this;                                                                                                     // 128
  return Blaze.If(function() {                                                                                         // 129
    return Spacebars.call(view.lookup("visible"));                                                                     // 130
  }, function() {                                                                                                      // 131
    return [ "\n		", HTML.DIV({                                                                                        // 132
      "class": "modal",                                                                                                // 133
      id: "login-buttons-email-address-verified-modal"                                                                 // 134
    }, "\n			", HTML.DIV({                                                                                             // 135
      "class": "modal-dialog"                                                                                          // 136
    }, "\n				", HTML.DIV({                                                                                            // 137
      "class": "modal-content"                                                                                         // 138
    }, "\n					", HTML.DIV({                                                                                           // 139
      "class": "modal-body"                                                                                            // 140
    }, "\n						", HTML.H4(HTML.B(Blaze.View("lookup:i18n", function() {                                               // 141
      return Spacebars.mustache(view.lookup("i18n"), "justVerifiedEmailDialog.verified");                              // 142
    }))), "\n					"), "\n					", HTML.DIV({                                                                            // 143
      "class": "modal-footer"                                                                                          // 144
    }, "\n						", HTML.BUTTON({                                                                                       // 145
      "class": "btn btn-info login-button",                                                                            // 146
      id: "just-verified-dismiss-button",                                                                              // 147
      "data-dismiss": "modal"                                                                                          // 148
    }, Blaze.View("lookup:i18n", function() {                                                                          // 149
      return Spacebars.mustache(view.lookup("i18n"), "justVerifiedEmailDialog.dismiss");                               // 150
    })), "\n					"), "\n				"), "\n			"), "\n		"), "\n	" ];                                                            // 151
  });                                                                                                                  // 152
}));                                                                                                                   // 153
                                                                                                                       // 154
Template.__checkName("_configureLoginServiceDialog");                                                                  // 155
Template["_configureLoginServiceDialog"] = new Template("Template._configureLoginServiceDialog", (function() {         // 156
  var view = this;                                                                                                     // 157
  return Blaze.If(function() {                                                                                         // 158
    return Spacebars.call(view.lookup("visible"));                                                                     // 159
  }, function() {                                                                                                      // 160
    return [ "\n	", HTML.DIV({                                                                                         // 161
      "class": "modal",                                                                                                // 162
      id: "configure-login-service-dialog-modal"                                                                       // 163
    }, "\n			", HTML.DIV({                                                                                             // 164
      "class": "modal-dialog"                                                                                          // 165
    }, "\n					", HTML.DIV({                                                                                           // 166
      "class": "modal-content"                                                                                         // 167
    }, "\n							", HTML.DIV({                                                                                         // 168
      "class": "modal-header"                                                                                          // 169
    }, "\n									", HTML.H4({                                                                                        // 170
      "class": "modal-title"                                                                                           // 171
    }, "Configure Service"), "\n							"), "\n							", HTML.DIV({                                                     // 172
      "class": "modal-body"                                                                                            // 173
    }, "\n									", HTML.DIV({                                                                                       // 174
      id: "configure-login-service-dialog",                                                                            // 175
      "class": "accounts-dialog accounts-centered-dialog"                                                              // 176
    }, "\n											", Spacebars.include(view.lookupTemplate("configurationSteps")), "\n											", HTML.P("\n											Now, copy over some details.\n											"), "\n											", HTML.P("\n											", HTML.TABLE("\n													", HTML.COLGROUP("\n															", HTML.COL({
      span: "1",                                                                                                       // 178
      "class": "configuration_labels"                                                                                  // 179
    }), "\n															", HTML.COL({                                                                                // 180
      span: "1",                                                                                                       // 181
      "class": "configuration_inputs"                                                                                  // 182
    }), "\n													"), "\n													", Blaze.Each(function() {                                                 // 183
      return Spacebars.call(view.lookup("configurationFields"));                                                       // 184
    }, function() {                                                                                                    // 185
      return [ "\n													", HTML.TR("\n															", HTML.TD("\n																	", HTML.LABEL({             // 186
        "for": function() {                                                                                            // 187
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];                   // 188
        }                                                                                                              // 189
      }, Blaze.View("lookup:label", function() {                                                                       // 190
        return Spacebars.mustache(view.lookup("label"));                                                               // 191
      })), "\n															"), "\n															", HTML.TD("\n																	", HTML.INPUT({                      // 192
        id: function() {                                                                                               // 193
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];                   // 194
        },                                                                                                             // 195
        type: "text"                                                                                                   // 196
      }), "\n															"), "\n													"), "\n													" ];                                               // 197
    }), "\n											"), "\n											"), "\n											", HTML.P({                                                  // 198
      "class": "new-section"                                                                                           // 199
    }, "\n												Choose the login style:\n											"), "\n											", HTML.P("\n												", HTML.CharRef({ // 200
      html: "&emsp;",                                                                                                  // 201
      str: " "                                                                                                         // 202
    }), HTML.INPUT({                                                                                                   // 203
      id: "configure-login-service-dialog-popupBasedLogin",                                                            // 204
      type: "radio",                                                                                                   // 205
      checked: "checked",                                                                                              // 206
      name: "loginStyle",                                                                                              // 207
      value: "popup"                                                                                                   // 208
    }), "\n												", HTML.LABEL({                                                                                 // 209
      "for": "configure-login-service-dialog-popupBasedLogin"                                                          // 210
    }, "Popup-based login (recommended for most applications)"), "\n\n												", HTML.BR(), HTML.CharRef({         // 211
      html: "&emsp;",                                                                                                  // 212
      str: " "                                                                                                         // 213
    }), HTML.INPUT({                                                                                                   // 214
      id: "configure-login-service-dialog-redirectBasedLogin",                                                         // 215
      type: "radio",                                                                                                   // 216
      name: "loginStyle",                                                                                              // 217
      value: "redirect"                                                                                                // 218
    }), "\n												", HTML.LABEL({                                                                                 // 219
      "for": "configure-login-service-dialog-redirectBasedLogin"                                                       // 220
    }, "\n												Redirect-based login (special cases explained\n												", HTML.A({                           // 221
      href: "https://github.com/meteor/meteor/wiki/OAuth-for-mobile-Meteor-clients#popup-versus-redirect-flow",        // 222
      target: "_blank"                                                                                                 // 223
    }, "here"), ")\n												"), "\n											"), "\n									"), "\n							"), "\n							", HTML.DIV({            // 224
      "class": "modal-footer new-section"                                                                              // 225
    }, "\n									", HTML.DIV({                                                                                       // 226
      "class": "login-button btn btn-danger configure-login-service-dismiss-button"                                    // 227
    }, "\n											I'll do this later\n									"), "\n									", HTML.DIV({                                        // 228
      "class": function() {                                                                                            // 229
        return [ "login-button login-button-configure btn btn-success ", Blaze.If(function() {                         // 230
          return Spacebars.call(view.lookup("saveDisabled"));                                                          // 231
        }, function() {                                                                                                // 232
          return "login-button-disabled";                                                                              // 233
        }) ];                                                                                                          // 234
      },                                                                                                               // 235
      id: "configure-login-service-dialog-save-configuration"                                                          // 236
    }, "\n											Save Configuration\n									"), "\n							"), "\n					"), "\n			"), "\n	"), "\n	" ];             // 237
  });                                                                                                                  // 238
}));                                                                                                                   // 239
                                                                                                                       // 240
Template.__checkName("_loginButtonsMessagesDialog");                                                                   // 241
Template["_loginButtonsMessagesDialog"] = new Template("Template._loginButtonsMessagesDialog", (function() {           // 242
  var view = this;                                                                                                     // 243
  return Blaze.If(function() {                                                                                         // 244
    return Spacebars.call(view.lookup("visible"));                                                                     // 245
  }, function() {                                                                                                      // 246
    return [ "\n		", HTML.DIV({                                                                                        // 247
      "class": "accounts-dialog accounts-centered-dialog",                                                             // 248
      id: "login-buttons-message-dialog"                                                                               // 249
    }, "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n			", HTML.DIV({                   // 250
      "class": "login-button",                                                                                         // 251
      id: "messages-dialog-dismiss-button"                                                                             // 252
    }, Blaze.View("lookup:i18n", function() {                                                                          // 253
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsMessagesDialog.dismiss");                            // 254
    })), "\n		"), "\n	" ];                                                                                             // 255
  });                                                                                                                  // 256
}));                                                                                                                   // 257
                                                                                                                       // 258
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_session.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
	var VALID_KEYS = [                                                                                                    // 2
		'dropdownVisible',                                                                                                   // 3
                                                                                                                       // 4
		// XXX consider replacing these with one key that has an enum for values.                                            // 5
		'inSignupFlow',                                                                                                      // 6
		'inForgotPasswordFlow',                                                                                              // 7
		'inChangePasswordFlow',                                                                                              // 8
		'inMessageOnlyFlow',                                                                                                 // 9
                                                                                                                       // 10
		'errorMessage',                                                                                                      // 11
		'infoMessage',                                                                                                       // 12
                                                                                                                       // 13
		// dialogs with messages (info and error)                                                                            // 14
		'resetPasswordToken',                                                                                                // 15
		'enrollAccountToken',                                                                                                // 16
		'justVerifiedEmail',                                                                                                 // 17
                                                                                                                       // 18
		'configureLoginServiceDialogVisible',                                                                                // 19
		'configureLoginServiceDialogServiceName',                                                                            // 20
		'configureLoginServiceDialogSaveDisabled'                                                                            // 21
	];                                                                                                                    // 22
                                                                                                                       // 23
	var validateKey = function (key) {                                                                                    // 24
		if (!_.contains(VALID_KEYS, key)){                                                                                   // 25
			throw new Error("Invalid key in loginButtonsSession: " + key);                                                      // 26
		}                                                                                                                    // 27
	};                                                                                                                    // 28
                                                                                                                       // 29
	var KEY_PREFIX = "Meteor.loginButtons.";                                                                              // 30
                                                                                                                       // 31
	// XXX we should have a better pattern for code private to a package like this one                                    // 32
	Accounts._loginButtonsSession = {                                                                                     // 33
		set: function(key, value) {                                                                                          // 34
			validateKey(key);                                                                                                   // 35
			if (_.contains(['errorMessage', 'infoMessage'], key)){                                                              // 36
				throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");  // 37
			}                                                                                                                   // 38
                                                                                                                       // 39
			this._set(key, value);                                                                                              // 40
		},                                                                                                                   // 41
                                                                                                                       // 42
		_set: function(key, value) {                                                                                         // 43
			Session.set(KEY_PREFIX + key, value);                                                                               // 44
		},                                                                                                                   // 45
                                                                                                                       // 46
		get: function(key) {                                                                                                 // 47
			validateKey(key);                                                                                                   // 48
			return Session.get(KEY_PREFIX + key);                                                                               // 49
		},                                                                                                                   // 50
                                                                                                                       // 51
		closeDropdown: function () {                                                                                         // 52
			this.set('inSignupFlow', false);                                                                                    // 53
			this.set('inForgotPasswordFlow', false);                                                                            // 54
			this.set('inChangePasswordFlow', false);                                                                            // 55
			this.set('inMessageOnlyFlow', false);                                                                               // 56
			this.set('dropdownVisible', false);                                                                                 // 57
			this.resetMessages();                                                                                               // 58
		},                                                                                                                   // 59
                                                                                                                       // 60
		infoMessage: function(message) {                                                                                     // 61
			this._set("errorMessage", null);                                                                                    // 62
			this._set("infoMessage", message);                                                                                  // 63
			this.ensureMessageVisible();                                                                                        // 64
		},                                                                                                                   // 65
                                                                                                                       // 66
		errorMessage: function(message) {                                                                                    // 67
			this._set("errorMessage", message);                                                                                 // 68
			this._set("infoMessage", null);                                                                                     // 69
			this.ensureMessageVisible();                                                                                        // 70
		},                                                                                                                   // 71
                                                                                                                       // 72
		// is there a visible dialog that shows messages (info and error)                                                    // 73
		isMessageDialogVisible: function () {                                                                                // 74
			return this.get('resetPasswordToken') ||                                                                            // 75
				this.get('enrollAccountToken') ||                                                                                  // 76
				this.get('justVerifiedEmail');                                                                                     // 77
		},                                                                                                                   // 78
                                                                                                                       // 79
		// ensure that somethings displaying a message (info or error) is                                                    // 80
		// visible.  if a dialog with messages is open, do nothing;                                                          // 81
		// otherwise open the dropdown.                                                                                      // 82
		//                                                                                                                   // 83
		// notably this doesn't matter when only displaying a single login                                                   // 84
		// button since then we have an explicit message dialog                                                              // 85
		// (_loginButtonsMessageDialog), and dropdownVisible is ignored in                                                   // 86
		// this case.                                                                                                        // 87
		ensureMessageVisible: function () {                                                                                  // 88
			if (!this.isMessageDialogVisible()){                                                                                // 89
				this.set("dropdownVisible", true);                                                                                 // 90
			}                                                                                                                   // 91
		},                                                                                                                   // 92
                                                                                                                       // 93
		resetMessages: function () {                                                                                         // 94
			this._set("errorMessage", null);                                                                                    // 95
			this._set("infoMessage", null);                                                                                     // 96
		},                                                                                                                   // 97
                                                                                                                       // 98
		configureService: function (name) {                                                                                  // 99
			this.set('configureLoginServiceDialogVisible', true);                                                               // 100
			this.set('configureLoginServiceDialogServiceName', name);                                                           // 101
			this.set('configureLoginServiceDialogSaveDisabled', true);                                                          // 102
			setTimeout(function(){                                                                                              // 103
				$('#configure-login-service-dialog-modal').modal();                                                                // 104
			}, 500)                                                                                                             // 105
		}                                                                                                                    // 106
	};                                                                                                                    // 107
}) ();                                                                                                                 // 108
                                                                                                                       // 109
                                                                                                                       // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	if (!Accounts._loginButtons){                                                                                         // 2
		Accounts._loginButtons = {};                                                                                         // 3
	}                                                                                                                     // 4
                                                                                                                       // 5
	// for convenience                                                                                                    // 6
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 7
                                                                                                                       // 8
	UI.registerHelper("loginButtons", function() {                                                                        // 9
		return Template._loginButtons;                                                                                       // 10
	});                                                                                                                   // 11
                                                                                                                       // 12
	// shared between dropdown and single mode                                                                            // 13
	Template._loginButtons.events({                                                                                       // 14
		'click #login-buttons-logout': function() {                                                                          // 15
			Meteor.logout(function(error) {                                                                                     // 16
				loginButtonsSession.closeDropdown();                                                                               // 17
				if (typeof accountsUIBootstrap3.logoutCallback === 'function') {                                                   // 18
					accountsUIBootstrap3.logoutCallback(error);                                                                       // 19
				}                                                                                                                  // 20
			});                                                                                                                 // 21
		}                                                                                                                    // 22
	});                                                                                                                   // 23
                                                                                                                       // 24
	//                                                                                                                    // 25
	// loginButtonLoggedOut template                                                                                      // 26
	//                                                                                                                    // 27
	Template._loginButtonsLoggedOut.helpers({                                                                             // 28
		dropdown: function() {                                                                                               // 29
			return Accounts._loginButtons.dropdown();                                                                           // 30
		},                                                                                                                   // 31
		services: function() {                                                                                               // 32
			return Accounts._loginButtons.getLoginServices();                                                                   // 33
		},                                                                                                                   // 34
		singleService: function() {                                                                                          // 35
			var services = Accounts._loginButtons.getLoginServices();                                                           // 36
			if (services.length !== 1){                                                                                         // 37
				throw new Error(                                                                                                   // 38
					"Shouldn't be rendering this template with more than one configured service");                                    // 39
			}                                                                                                                   // 40
			return services[0];                                                                                                 // 41
		},                                                                                                                   // 42
		configurationLoaded: function() {                                                                                    // 43
			return Accounts.loginServicesConfigured();                                                                          // 44
		}                                                                                                                    // 45
	});                                                                                                                   // 46
                                                                                                                       // 47
                                                                                                                       // 48
                                                                                                                       // 49
	//                                                                                                                    // 50
	// loginButtonsLoggedIn template                                                                                      // 51
	//                                                                                                                    // 52
                                                                                                                       // 53
	// decide whether we should show a dropdown rather than a row of                                                      // 54
	// buttons                                                                                                            // 55
	Template._loginButtonsLoggedIn.helpers({                                                                              // 56
		dropdown: function() {                                                                                               // 57
			return Accounts._loginButtons.dropdown();                                                                           // 58
		},                                                                                                                   // 59
		displayName: function() {                                                                                            // 60
			return Accounts._loginButtons.displayName();                                                                        // 61
		}                                                                                                                    // 62
	})                                                                                                                    // 63
                                                                                                                       // 64
                                                                                                                       // 65
                                                                                                                       // 66
	//                                                                                                                    // 67
	// loginButtonsMessage template                                                                                       // 68
	//                                                                                                                    // 69
                                                                                                                       // 70
	Template._loginButtonsMessages.helpers({                                                                              // 71
		errorMessage: function() {                                                                                           // 72
			return loginButtonsSession.get('errorMessage');                                                                     // 73
		},                                                                                                                   // 74
		infoMessage: function() {                                                                                            // 75
			return loginButtonsSession.get('infoMessage');                                                                      // 76
		}                                                                                                                    // 77
	});                                                                                                                   // 78
                                                                                                                       // 79
                                                                                                                       // 80
                                                                                                                       // 81
	//                                                                                                                    // 82
	// helpers                                                                                                            // 83
	//                                                                                                                    // 84
                                                                                                                       // 85
	Accounts._loginButtons.displayName = function() {                                                                     // 86
		var user = Meteor.user();                                                                                            // 87
		if (!user){                                                                                                          // 88
			return '';                                                                                                          // 89
		}                                                                                                                    // 90
                                                                                                                       // 91
		if (user.profile && user.profile.name){                                                                              // 92
			return user.profile.name;                                                                                           // 93
		}                                                                                                                    // 94
		if (user.username){                                                                                                  // 95
			return user.username;                                                                                               // 96
		}                                                                                                                    // 97
		if (user.emails && user.emails[0] && user.emails[0].address){                                                        // 98
			return user.emails[0].address;                                                                                      // 99
		}                                                                                                                    // 100
                                                                                                                       // 101
		return '';                                                                                                           // 102
	};                                                                                                                    // 103
                                                                                                                       // 104
	Accounts._loginButtons.getLoginServices = function() {                                                                // 105
		// First look for OAuth services.                                                                                    // 106
		var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];                                       // 107
                                                                                                                       // 108
		// Be equally kind to all login services. This also preserves                                                        // 109
		// backwards-compatibility. (But maybe order should be                                                               // 110
		// configurable?)                                                                                                    // 111
		services.sort();                                                                                                     // 112
                                                                                                                       // 113
		// Add password, if it's there; it must come last.                                                                   // 114
		if (this.hasPasswordService()){                                                                                      // 115
			services.push('password');                                                                                          // 116
		}                                                                                                                    // 117
                                                                                                                       // 118
		return _.map(services, function(name) {                                                                              // 119
			return {                                                                                                            // 120
				name: name                                                                                                         // 121
			};                                                                                                                  // 122
		});                                                                                                                  // 123
	};                                                                                                                    // 124
                                                                                                                       // 125
	Accounts._loginButtons.hasPasswordService = function() {                                                              // 126
		return !!Package['accounts-password'];                                                                               // 127
	};                                                                                                                    // 128
                                                                                                                       // 129
	Accounts._loginButtons.dropdown = function() {                                                                        // 130
		return this.hasPasswordService() || Accounts._loginButtons.getLoginServices().length > 1;                            // 131
	};                                                                                                                    // 132
                                                                                                                       // 133
	// XXX improve these. should this be in accounts-password instead?                                                    // 134
	//                                                                                                                    // 135
	// XXX these will become configurable, and will be validated on                                                       // 136
	// the server as well.                                                                                                // 137
	Accounts._loginButtons.validateUsername = function(username) {                                                        // 138
		if (username.length >= 3) {                                                                                          // 139
			return true;                                                                                                        // 140
		} else {                                                                                                             // 141
			loginButtonsSession.errorMessage(i18n('errorMessages.usernameTooShort'));                                           // 142
			return false;                                                                                                       // 143
		}                                                                                                                    // 144
	};                                                                                                                    // 145
	Accounts._loginButtons.validateEmail = function(email) {                                                              // 146
		if (Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === ''){                          // 147
			return true;                                                                                                        // 148
		}                                                                                                                    // 149
                                                                                                                       // 150
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                                       // 152
		if (re.test(email)) {                                                                                                // 153
			return true;                                                                                                        // 154
		} else {                                                                                                             // 155
			loginButtonsSession.errorMessage(i18n('errorMessages.invalidEmail'));                                               // 156
			return false;                                                                                                       // 157
		}                                                                                                                    // 158
	};                                                                                                                    // 159
	Accounts._loginButtons.validatePassword = function(password, passwordAgain) {                                         // 160
		if (password.length >= 6) {                                                                                          // 161
			if (passwordAgain && (password != passwordAgain)) {                                                                 // 162
				loginButtonsSession.errorMessage(i18n('errorMessages.passwordsDontMatch'));                                        // 163
				return false;                                                                                                      // 164
			}                                                                                                                   // 165
			return true;                                                                                                        // 166
		} else {                                                                                                             // 167
			loginButtonsSession.errorMessage(i18n('errorMessages.passwordTooShort'));                                           // 168
			return false;                                                                                                       // 169
		}                                                                                                                    // 170
	};                                                                                                                    // 171
                                                                                                                       // 172
	Accounts._loginButtons.rendered = function() {                                                                        // 173
		debugger;                                                                                                            // 174
	};                                                                                                                    // 175
                                                                                                                       // 176
})();                                                                                                                  // 177
                                                                                                                       // 178
                                                                                                                       // 179
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_single.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	// for convenience                                                                                                    // 2
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 3
                                                                                                                       // 4
	Template._loginButtonsLoggedOutSingleLoginButton.events({                                                             // 5
		'click .login-button': function() {                                                                                  // 6
			var serviceName = this.name;                                                                                        // 7
			loginButtonsSession.resetMessages();                                                                                // 8
			var callback = function(err) {                                                                                      // 9
				if (!err) {                                                                                                        // 10
					loginButtonsSession.closeDropdown();                                                                              // 11
				} else if (err instanceof Accounts.LoginCancelledError) {                                                          // 12
					// do nothing                                                                                                     // 13
				} else if (err instanceof Accounts.ConfigError) {                                                                  // 14
					loginButtonsSession.configureService(serviceName);                                                                // 15
				} else {                                                                                                           // 16
					loginButtonsSession.errorMessage(err.reason || "Unknown error");                                                  // 17
				}                                                                                                                  // 18
			};                                                                                                                  // 19
                                                                                                                       // 20
			var loginWithService = Meteor["loginWith" + capitalize(serviceName)];                                               // 21
                                                                                                                       // 22
			var options = {}; // use default scope unless specified                                                             // 23
			if (Accounts.ui._options.requestPermissions[serviceName]){                                                          // 24
				options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];                                 // 25
			}                                                                                                                   // 26
                                                                                                                       // 27
			loginWithService(options, callback);                                                                                // 28
		}                                                                                                                    // 29
	});                                                                                                                   // 30
                                                                                                                       // 31
	Template._loginButtonsLoggedOutSingleLoginButton.helpers({                                                            // 32
		configured: function() {                                                                                             // 33
			return !!Accounts.loginServiceConfiguration.findOne({                                                               // 34
				service: this.name                                                                                                 // 35
			});                                                                                                                 // 36
		},                                                                                                                   // 37
		capitalizedName: function() {                                                                                        // 38
			if (this.name === 'github'){                                                                                        // 39
			// XXX we should allow service packages to set their capitalized name                                               // 40
				return 'GitHub';                                                                                                   // 41
			} else {                                                                                                            // 42
				return capitalize(this.name);                                                                                      // 43
			}                                                                                                                   // 44
		}                                                                                                                    // 45
	});                                                                                                                   // 46
                                                                                                                       // 47
                                                                                                                       // 48
	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                        // 49
	var capitalize = function(str) {                                                                                      // 50
		str = (str == null) ? '' : String(str);                                                                              // 51
		return str.charAt(0).toUpperCase() + str.slice(1);                                                                   // 52
	};                                                                                                                    // 53
})();                                                                                                                  // 54
                                                                                                                       // 55
                                                                                                                       // 56
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_dropdown.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
                                                                                                                       // 2
	// for convenience                                                                                                    // 3
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 4
                                                                                                                       // 5
	// events shared between loginButtonsLoggedOutDropdown and                                                            // 6
	// loginButtonsLoggedInDropdown                                                                                       // 7
	Template._loginButtons.events({                                                                                       // 8
		'click input': function(event) {                                                                                     // 9
			event.stopPropagation();                                                                                            // 10
		},                                                                                                                   // 11
		'click #login-name-link, click #login-sign-in-link': function(event) {                                               // 12
			event.stopPropagation();                                                                                            // 13
			loginButtonsSession.set('dropdownVisible', true);                                                                   // 14
			Meteor.flush();                                                                                                     // 15
		},                                                                                                                   // 16
		'click .login-close': function() {                                                                                   // 17
			loginButtonsSession.closeDropdown();                                                                                // 18
		},                                                                                                                   // 19
		'click .dropdown-toggle': function(event) {                                                                          // 20
			event.stopPropagation();                                                                                            // 21
			Template._loginButtons.toggleDropdown();                                                                            // 22
		}                                                                                                                    // 23
	});                                                                                                                   // 24
                                                                                                                       // 25
	Template._loginButtons.toggleDropdown = function() {                                                                  // 26
		toggleDropdown();                                                                                                    // 27
		focusInput();                                                                                                        // 28
	};                                                                                                                    // 29
                                                                                                                       // 30
	//                                                                                                                    // 31
	// loginButtonsLoggedInDropdown template and related                                                                  // 32
	//                                                                                                                    // 33
                                                                                                                       // 34
	Template._loginButtonsLoggedInDropdown.events({                                                                       // 35
		'click #login-buttons-open-change-password': function(event) {                                                       // 36
			event.stopPropagation();                                                                                            // 37
			loginButtonsSession.resetMessages();                                                                                // 38
			loginButtonsSession.set('inChangePasswordFlow', true);                                                              // 39
			Meteor.flush();                                                                                                     // 40
		}                                                                                                                    // 41
	});                                                                                                                   // 42
                                                                                                                       // 43
	Template._loginButtonsLoggedInDropdown.helpers({                                                                      // 44
		displayName: function() {                                                                                            // 45
			return Accounts._loginButtons.displayName();                                                                        // 46
		},                                                                                                                   // 47
                                                                                                                       // 48
		inChangePasswordFlow: function() {                                                                                   // 49
			return loginButtonsSession.get('inChangePasswordFlow');                                                             // 50
		},                                                                                                                   // 51
                                                                                                                       // 52
		inMessageOnlyFlow: function() {                                                                                      // 53
			return loginButtonsSession.get('inMessageOnlyFlow');                                                                // 54
		},                                                                                                                   // 55
                                                                                                                       // 56
		dropdownVisible: function() {                                                                                        // 57
			return loginButtonsSession.get('dropdownVisible');                                                                  // 58
		}                                                                                                                    // 59
	});                                                                                                                   // 60
                                                                                                                       // 61
                                                                                                                       // 62
	Template._loginButtonsLoggedInDropdownActions.helpers({                                                               // 63
		allowChangingPassword: function() {                                                                                  // 64
			// it would be more correct to check whether the user has a password set,                                           // 65
			// but in order to do that we'd have to send more data down to the client,                                          // 66
			// and it'd be preferable not to send down the entire service.password document.                                    // 67
			//                                                                                                                  // 68
			// instead we use the heuristic: if the user has a username or email set.                                           // 69
			var user = Meteor.user();                                                                                           // 70
			return user.username || (user.emails && user.emails[0] && user.emails[0].address);                                  // 71
		},                                                                                                                   // 72
		additionalLoggedInDropdownActions: function() {                                                                      // 73
			return Template._loginButtonsAdditionalLoggedInDropdownActions !== undefined;                                       // 74
		}                                                                                                                    // 75
	});                                                                                                                   // 76
                                                                                                                       // 77
                                                                                                                       // 78
	//                                                                                                                    // 79
	// loginButtonsLoggedOutDropdown template and related                                                                 // 80
	//                                                                                                                    // 81
                                                                                                                       // 82
	Template._loginButtonsLoggedOutDropdown.events({                                                                      // 83
		'click #login-buttons-password': function(event) {                                                                   // 84
			event.stopPropagation();                                                                                            // 85
			loginOrSignup();                                                                                                    // 86
		},                                                                                                                   // 87
                                                                                                                       // 88
		'keypress #forgot-password-email': function(event) {                                                                 // 89
			event.stopPropagation();                                                                                            // 90
			if (event.keyCode === 13){                                                                                          // 91
				forgotPassword();                                                                                                  // 92
			}                                                                                                                   // 93
		},                                                                                                                   // 94
                                                                                                                       // 95
		'click #login-buttons-forgot-password': function(event) {                                                            // 96
			event.stopPropagation();                                                                                            // 97
			forgotPassword();                                                                                                   // 98
		},                                                                                                                   // 99
                                                                                                                       // 100
		'click #signup-link': function(event) {                                                                              // 101
			event.stopPropagation();                                                                                            // 102
			loginButtonsSession.resetMessages();                                                                                // 103
                                                                                                                       // 104
			// store values of fields before swtiching to the signup form                                                       // 105
			var username = trimmedElementValueById('login-username');                                                           // 106
			var email = trimmedElementValueById('login-email');                                                                 // 107
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                           // 108
			// notably not trimmed. a password could (?) start or end with a space                                              // 109
			var password = elementValueById('login-password');                                                                  // 110
                                                                                                                       // 111
			loginButtonsSession.set('inSignupFlow', true);                                                                      // 112
			loginButtonsSession.set('inForgotPasswordFlow', false);                                                             // 113
                                                                                                                       // 114
			// force the ui to update so that we have the approprate fields to fill in                                          // 115
			Meteor.flush();                                                                                                     // 116
                                                                                                                       // 117
			// update new fields with appropriate defaults                                                                      // 118
			if (username !== null){                                                                                             // 119
				document.getElementById('login-username').value = username;                                                        // 120
			} else if (email !== null){                                                                                         // 121
				document.getElementById('login-email').value = email;                                                              // 122
			} else if (usernameOrEmail !== null){                                                                               // 123
				if (usernameOrEmail.indexOf('@') === -1){                                                                          // 124
					document.getElementById('login-username').value = usernameOrEmail;                                                // 125
				} else {                                                                                                           // 126
					document.getElementById('login-email').value = usernameOrEmail;                                                   // 127
				}                                                                                                                  // 128
			}                                                                                                                   // 129
		},                                                                                                                   // 130
		'click #forgot-password-link': function(event) {                                                                     // 131
			event.stopPropagation();                                                                                            // 132
			loginButtonsSession.resetMessages();                                                                                // 133
                                                                                                                       // 134
			// store values of fields before swtiching to the signup form                                                       // 135
			var email = trimmedElementValueById('login-email');                                                                 // 136
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                           // 137
                                                                                                                       // 138
			loginButtonsSession.set('inSignupFlow', false);                                                                     // 139
			loginButtonsSession.set('inForgotPasswordFlow', true);                                                              // 140
                                                                                                                       // 141
			// force the ui to update so that we have the approprate fields to fill in                                          // 142
			Meteor.flush();                                                                                                     // 143
			//toggleDropdown();                                                                                                 // 144
                                                                                                                       // 145
			// update new fields with appropriate defaults                                                                      // 146
			if (email !== null){                                                                                                // 147
				document.getElementById('forgot-password-email').value = email;                                                    // 148
			} else if (usernameOrEmail !== null){                                                                               // 149
				if (usernameOrEmail.indexOf('@') !== -1){                                                                          // 150
					document.getElementById('forgot-password-email').value = usernameOrEmail;                                         // 151
				}                                                                                                                  // 152
			}                                                                                                                   // 153
		},                                                                                                                   // 154
		'click #back-to-login-link': function(event) {                                                                       // 155
			event.stopPropagation();                                                                                            // 156
			loginButtonsSession.resetMessages();                                                                                // 157
                                                                                                                       // 158
			var username = trimmedElementValueById('login-username');                                                           // 159
			var email = trimmedElementValueById('login-email') || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?
                                                                                                                       // 161
			loginButtonsSession.set('inSignupFlow', false);                                                                     // 162
			loginButtonsSession.set('inForgotPasswordFlow', false);                                                             // 163
                                                                                                                       // 164
			// force the ui to update so that we have the approprate fields to fill in                                          // 165
			Meteor.flush();                                                                                                     // 166
                                                                                                                       // 167
			if (document.getElementById('login-username')){                                                                     // 168
				document.getElementById('login-username').value = username;                                                        // 169
			}                                                                                                                   // 170
			if (document.getElementById('login-email')){                                                                        // 171
				document.getElementById('login-email').value = email;                                                              // 172
			}                                                                                                                   // 173
			// "login-password" is preserved thanks to the preserve-inputs package                                              // 174
			if (document.getElementById('login-username-or-email')){                                                            // 175
				document.getElementById('login-username-or-email').value = email || username;                                      // 176
			}                                                                                                                   // 177
		},                                                                                                                   // 178
		'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function(event) {
			if (event.keyCode === 13){                                                                                          // 180
				loginOrSignup();                                                                                                   // 181
			}                                                                                                                   // 182
		}                                                                                                                    // 183
	});                                                                                                                   // 184
                                                                                                                       // 185
                                                                                                                       // 186
	Template._loginButtonsLoggedOutDropdown.helpers({                                                                     // 187
		// additional classes that can be helpful in styling the dropdown                                                    // 188
		additionalClasses: function() {                                                                                      // 189
			if (!Accounts.password) {                                                                                           // 190
				return false;                                                                                                      // 191
			} else {                                                                                                            // 192
				if (loginButtonsSession.get('inSignupFlow')) {                                                                     // 193
					return 'login-form-create-account';                                                                               // 194
				} else if (loginButtonsSession.get('inForgotPasswordFlow')) {                                                      // 195
					return 'login-form-forgot-password';                                                                              // 196
				} else {                                                                                                           // 197
					return 'login-form-sign-in';                                                                                      // 198
				}                                                                                                                  // 199
			}                                                                                                                   // 200
		},                                                                                                                   // 201
                                                                                                                       // 202
		dropdownVisible: function() {                                                                                        // 203
			return loginButtonsSession.get('dropdownVisible');                                                                  // 204
		},                                                                                                                   // 205
                                                                                                                       // 206
		hasPasswordService: function() {                                                                                     // 207
			return Accounts._loginButtons.hasPasswordService();                                                                 // 208
		},                                                                                                                   // 209
                                                                                                                       // 210
		forbidClientAccountCreation: function() {                                                                            // 211
			return Accounts._options.forbidClientAccountCreation;                                                               // 212
		}                                                                                                                    // 213
	});                                                                                                                   // 214
                                                                                                                       // 215
	Template._loginButtonsLoggedOutAllServices.helpers({                                                                  // 216
		services: function() {                                                                                               // 217
			return Accounts._loginButtons.getLoginServices();                                                                   // 218
		},                                                                                                                   // 219
                                                                                                                       // 220
		isPasswordService: function() {                                                                                      // 221
			return this.name === 'password';                                                                                    // 222
		},                                                                                                                   // 223
                                                                                                                       // 224
		hasOtherServices: function() {                                                                                       // 225
			return Accounts._loginButtons.getLoginServices().length > 1;                                                        // 226
		},                                                                                                                   // 227
                                                                                                                       // 228
		hasPasswordService: function() {                                                                                     // 229
			return Accounts._loginButtons.hasPasswordService();                                                                 // 230
		}                                                                                                                    // 231
	});                                                                                                                   // 232
                                                                                                                       // 233
                                                                                                                       // 234
	Template._loginButtonsLoggedOutPasswordService.helpers({                                                              // 235
		fields: function() {                                                                                                 // 236
			var loginFields = [{                                                                                                // 237
				fieldName: 'username-or-email',                                                                                    // 238
				fieldLabel: i18n('loginFields.usernameOrEmail'),                                                                   // 239
				visible: function() {                                                                                              // 240
					return _.contains(                                                                                                // 241
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],                             // 242
						Accounts.ui._passwordSignupFields());                                                                            // 243
				}                                                                                                                  // 244
			}, {                                                                                                                // 245
				fieldName: 'username',                                                                                             // 246
				fieldLabel: i18n('loginFields.username'),                                                                          // 247
				visible: function() {                                                                                              // 248
					return Accounts.ui._passwordSignupFields() === "USERNAME_ONLY";                                                   // 249
				}                                                                                                                  // 250
			}, {                                                                                                                // 251
				fieldName: 'email',                                                                                                // 252
				fieldLabel: i18n('loginFields.email'),                                                                             // 253
				inputType: 'email',                                                                                                // 254
				visible: function() {                                                                                              // 255
					return Accounts.ui._passwordSignupFields() === "EMAIL_ONLY";                                                      // 256
				}                                                                                                                  // 257
			}, {                                                                                                                // 258
				fieldName: 'password',                                                                                             // 259
				fieldLabel: i18n('loginFields.password'),                                                                          // 260
				inputType: 'password',                                                                                             // 261
				visible: function() {                                                                                              // 262
					return true;                                                                                                      // 263
				}                                                                                                                  // 264
			}];                                                                                                                 // 265
                                                                                                                       // 266
			var signupFields = [{                                                                                               // 267
				fieldName: 'username',                                                                                             // 268
				fieldLabel: i18n('signupFields.username'),                                                                         // 269
				visible: function() {                                                                                              // 270
					return _.contains(                                                                                                // 271
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],            // 272
						Accounts.ui._passwordSignupFields());                                                                            // 273
				}                                                                                                                  // 274
			}, {                                                                                                                // 275
				fieldName: 'email',                                                                                                // 276
				fieldLabel: i18n('signupFields.email'),                                                                            // 277
				inputType: 'email',                                                                                                // 278
				visible: function() {                                                                                              // 279
					return _.contains(                                                                                                // 280
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "EMAIL_ONLY"],                                              // 281
						Accounts.ui._passwordSignupFields());                                                                            // 282
				}                                                                                                                  // 283
			}, {                                                                                                                // 284
				fieldName: 'email',                                                                                                // 285
				fieldLabel: i18n('signupFields.emailOpt'),                                                                         // 286
				inputType: 'email',                                                                                                // 287
				visible: function() {                                                                                              // 288
					return Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";                                     // 289
				}                                                                                                                  // 290
			}, {                                                                                                                // 291
				fieldName: 'password',                                                                                             // 292
				fieldLabel: i18n('signupFields.password'),                                                                         // 293
				inputType: 'password',                                                                                             // 294
				visible: function() {                                                                                              // 295
					return true;                                                                                                      // 296
				}                                                                                                                  // 297
			}, {                                                                                                                // 298
				fieldName: 'password-again',                                                                                       // 299
				fieldLabel: i18n('signupFields.passwordAgain'),                                                                    // 300
				inputType: 'password',                                                                                             // 301
				visible: function() {                                                                                              // 302
					// No need to make users double-enter their password if                                                           // 303
					// they'll necessarily have an email set, since they can use                                                      // 304
					// the "forgot password" flow.                                                                                    // 305
					return _.contains(                                                                                                // 306
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                  // 307
						Accounts.ui._passwordSignupFields());                                                                            // 308
				}                                                                                                                  // 309
			}];                                                                                                                 // 310
                                                                                                                       // 311
			signupFields = signupFields.concat(Accounts.ui._options.extraSignupFields);                                         // 312
                                                                                                                       // 313
			return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;                                        // 314
		},                                                                                                                   // 315
                                                                                                                       // 316
		inForgotPasswordFlow: function() {                                                                                   // 317
			return loginButtonsSession.get('inForgotPasswordFlow');                                                             // 318
		},                                                                                                                   // 319
                                                                                                                       // 320
		inLoginFlow: function() {                                                                                            // 321
			return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');                // 322
		},                                                                                                                   // 323
                                                                                                                       // 324
		inSignupFlow: function() {                                                                                           // 325
			return loginButtonsSession.get('inSignupFlow');                                                                     // 326
		},                                                                                                                   // 327
                                                                                                                       // 328
		showForgotPasswordLink: function() {                                                                                 // 329
			return _.contains(                                                                                                  // 330
				["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],                 // 331
				Accounts.ui._passwordSignupFields());                                                                              // 332
		},                                                                                                                   // 333
                                                                                                                       // 334
		showCreateAccountLink: function() {                                                                                  // 335
			return !Accounts._options.forbidClientAccountCreation;                                                              // 336
		}                                                                                                                    // 337
	});                                                                                                                   // 338
                                                                                                                       // 339
	Template._loginButtonsFormField.helpers({                                                                             // 340
		equals: function(a, b) {                                                                                             // 341
			return (a === b);                                                                                                   // 342
		},                                                                                                                   // 343
		inputType: function() {                                                                                              // 344
			return this.inputType || "text";                                                                                    // 345
		}                                                                                                                    // 346
	});                                                                                                                   // 347
                                                                                                                       // 348
	//                                                                                                                    // 349
	// loginButtonsChangePassword template                                                                                // 350
	//                                                                                                                    // 351
	Template._loginButtonsChangePassword.events({                                                                         // 352
		'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function(event) {          // 353
			if (event.keyCode === 13){                                                                                          // 354
				changePassword();                                                                                                  // 355
			}                                                                                                                   // 356
		},                                                                                                                   // 357
		'click #login-buttons-do-change-password': function(event) {                                                         // 358
			event.stopPropagation();                                                                                            // 359
			changePassword();                                                                                                   // 360
		},                                                                                                                   // 361
		'click #login-buttons-cancel-change-password': function(event) {                                                     // 362
			event.stopPropagation();                                                                                            // 363
			loginButtonsSession.resetMessages();                                                                                // 364
			Accounts._loginButtonsSession.set('inChangePasswordFlow', false);                                                   // 365
			Meteor.flush();                                                                                                     // 366
		}                                                                                                                    // 367
	});                                                                                                                   // 368
                                                                                                                       // 369
	Template._loginButtonsChangePassword.helpers({                                                                        // 370
		fields: function() {                                                                                                 // 371
			return [{                                                                                                           // 372
				fieldName: 'old-password',                                                                                         // 373
				fieldLabel: i18n('changePasswordFields.currentPassword'),                                                          // 374
				inputType: 'password',                                                                                             // 375
				visible: function() {                                                                                              // 376
					return true;                                                                                                      // 377
				}                                                                                                                  // 378
			}, {                                                                                                                // 379
				fieldName: 'password',                                                                                             // 380
				fieldLabel: i18n('changePasswordFields.newPassword'),                                                              // 381
				inputType: 'password',                                                                                             // 382
				visible: function() {                                                                                              // 383
					return true;                                                                                                      // 384
				}                                                                                                                  // 385
			}, {                                                                                                                // 386
				fieldName: 'password-again',                                                                                       // 387
				fieldLabel: i18n('changePasswordFields.newPasswordAgain'),                                                         // 388
				inputType: 'password',                                                                                             // 389
				visible: function() {                                                                                              // 390
					// No need to make users double-enter their password if                                                           // 391
					// they'll necessarily have an email set, since they can use                                                      // 392
					// the "forgot password" flow.                                                                                    // 393
					return _.contains(                                                                                                // 394
						["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                                // 395
						Accounts.ui._passwordSignupFields());                                                                            // 396
				}                                                                                                                  // 397
			}];                                                                                                                 // 398
		}                                                                                                                    // 399
	});                                                                                                                   // 400
                                                                                                                       // 401
	//                                                                                                                    // 402
	// helpers                                                                                                            // 403
	//                                                                                                                    // 404
                                                                                                                       // 405
	var elementValueById = function(id) {                                                                                 // 406
		var element = document.getElementById(id);                                                                           // 407
		if (!element){                                                                                                       // 408
			return null;                                                                                                        // 409
		} else {                                                                                                             // 410
			return element.value;                                                                                               // 411
		}                                                                                                                    // 412
	};                                                                                                                    // 413
                                                                                                                       // 414
	var trimmedElementValueById = function(id) {                                                                          // 415
		var element = document.getElementById(id);                                                                           // 416
		if (!element){                                                                                                       // 417
			return null;                                                                                                        // 418
		} else {                                                                                                             // 419
			return element.value.replace(/^\s*|\s*$/g, ""); // trim;                                                            // 420
		}                                                                                                                    // 421
	};                                                                                                                    // 422
                                                                                                                       // 423
	var loginOrSignup = function() {                                                                                      // 424
		if (loginButtonsSession.get('inSignupFlow')){                                                                        // 425
			signup();                                                                                                           // 426
		} else {                                                                                                             // 427
			login();                                                                                                            // 428
		}                                                                                                                    // 429
	};                                                                                                                    // 430
                                                                                                                       // 431
	var login = function() {                                                                                              // 432
		loginButtonsSession.resetMessages();                                                                                 // 433
                                                                                                                       // 434
		var username = trimmedElementValueById('login-username');                                                            // 435
		if (username && Accounts.ui._options.forceUsernameLowercase) {                                                       // 436
			username = username.toLowerCase();                                                                                  // 437
		}                                                                                                                    // 438
		var email = trimmedElementValueById('login-email');                                                                  // 439
		if (email && Accounts.ui._options.forceEmailLowercase) {                                                             // 440
			email = email.toLowerCase();                                                                                        // 441
		}                                                                                                                    // 442
		var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                            // 443
		if (usernameOrEmail && Accounts.ui._options.forceEmailLowercase && Accounts.ui._options.forceUsernameLowercase) {    // 444
			usernameOrEmail = usernameOrEmail.toLowerCase();                                                                    // 445
		}                                                                                                                    // 446
                                                                                                                       // 447
		// notably not trimmed. a password could (?) start or end with a space                                               // 448
		var password = elementValueById('login-password');                                                                   // 449
		if (password && Accounts.ui._options.forcePasswordLowercase) {                                                       // 450
			password = password.toLowerCase();                                                                                  // 451
		}                                                                                                                    // 452
                                                                                                                       // 453
		var loginSelector;                                                                                                   // 454
		if (username !== null) {                                                                                             // 455
			if (!Accounts._loginButtons.validateUsername(username)){                                                            // 456
				return;                                                                                                            // 457
			} else {                                                                                                            // 458
				loginSelector = {                                                                                                  // 459
					username: username                                                                                                // 460
				};                                                                                                                 // 461
			}                                                                                                                   // 462
		} else if (email !== null) {                                                                                         // 463
			if (!Accounts._loginButtons.validateEmail(email)){                                                                  // 464
				return;                                                                                                            // 465
			} else {                                                                                                            // 466
				loginSelector = {                                                                                                  // 467
					email: email                                                                                                      // 468
				};                                                                                                                 // 469
			}                                                                                                                   // 470
		} else if (usernameOrEmail !== null) {                                                                               // 471
			// XXX not sure how we should validate this. but this seems good enough (for now),                                  // 472
			// since an email must have at least 3 characters anyways                                                           // 473
			if (!Accounts._loginButtons.validateUsername(usernameOrEmail)){                                                     // 474
				return;                                                                                                            // 475
			} else {                                                                                                            // 476
				loginSelector = usernameOrEmail;                                                                                   // 477
			}                                                                                                                   // 478
		} else {                                                                                                             // 479
			throw new Error("Unexpected -- no element to use as a login user selector");                                        // 480
		}                                                                                                                    // 481
                                                                                                                       // 482
		Meteor.loginWithPassword(loginSelector, password, function(error, result) {                                          // 483
			if (error) {                                                                                                        // 484
				if (error.reason == 'User not found'){                                                                             // 485
					loginButtonsSession.errorMessage(i18n('errorMessages.userNotFound'))                                              // 486
				} else if (error.reason == 'Incorrect password'){                                                                  // 487
					loginButtonsSession.errorMessage(i18n('errorMessages.incorrectPassword'))                                         // 488
				} else {                                                                                                           // 489
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 490
				}                                                                                                                  // 491
			} else {                                                                                                            // 492
				loginButtonsSession.closeDropdown();                                                                               // 493
			}                                                                                                                   // 494
		});                                                                                                                  // 495
	};                                                                                                                    // 496
                                                                                                                       // 497
	var toggleDropdown = function() {                                                                                     // 498
		$("#login-dropdown-list").toggleClass("open");                                                                       // 499
	}                                                                                                                     // 500
                                                                                                                       // 501
	var focusInput = function() {                                                                                         // 502
		setTimeout(function() {                                                                                              // 503
			$("#login-dropdown-list input").first().focus();                                                                    // 504
		}, 0);                                                                                                               // 505
	};                                                                                                                    // 506
                                                                                                                       // 507
	var signup = function() {                                                                                             // 508
		loginButtonsSession.resetMessages();                                                                                 // 509
                                                                                                                       // 510
		// to be passed to Accounts.createUser                                                                               // 511
		var options = {};                                                                                                    // 512
		if(typeof accountsUIBootstrap3.setCustomSignupOptions === 'function') {                                              // 513
			options = accountsUIBootstrap3.setCustomSignupOptions();                                                            // 514
			if (!(options instanceof Object)){ options = {}; }                                                                  // 515
		}                                                                                                                    // 516
                                                                                                                       // 517
		var username = trimmedElementValueById('login-username');                                                            // 518
		if (username && Accounts.ui._options.forceUsernameLowercase) {                                                       // 519
			username = username.toLowerCase();                                                                                  // 520
		}                                                                                                                    // 521
		if (username !== null) {                                                                                             // 522
			if (!Accounts._loginButtons.validateUsername(username)){                                                            // 523
				return;                                                                                                            // 524
			} else {                                                                                                            // 525
				options.username = username;                                                                                       // 526
			}                                                                                                                   // 527
		}                                                                                                                    // 528
                                                                                                                       // 529
		var email = trimmedElementValueById('login-email');                                                                  // 530
		if (email && Accounts.ui._options.forceEmailLowercase) {                                                             // 531
			email = email.toLowerCase();                                                                                        // 532
		}                                                                                                                    // 533
		if (email !== null) {                                                                                                // 534
			if (!Accounts._loginButtons.validateEmail(email)){                                                                  // 535
				return;                                                                                                            // 536
			} else {                                                                                                            // 537
				options.email = email;                                                                                             // 538
			}                                                                                                                   // 539
		}                                                                                                                    // 540
                                                                                                                       // 541
		// notably not trimmed. a password could (?) start or end with a space                                               // 542
		var password = elementValueById('login-password');                                                                   // 543
		if (password && Accounts.ui._options.forcePasswordLowercase) {                                                       // 544
			password = password.toLowerCase();                                                                                  // 545
		}                                                                                                                    // 546
		if (!Accounts._loginButtons.validatePassword(password)){                                                             // 547
			return;                                                                                                             // 548
		} else {                                                                                                             // 549
			options.password = password;                                                                                        // 550
		}                                                                                                                    // 551
                                                                                                                       // 552
		if (!matchPasswordAgainIfPresent()){                                                                                 // 553
			return;                                                                                                             // 554
		}                                                                                                                    // 555
                                                                                                                       // 556
		// prepare the profile object                                                                                        // 557
		// it could have already been set through setCustomSignupOptions                                                     // 558
		if (!(options.profile instanceof Object)){                                                                           // 559
			options.profile = {};                                                                                               // 560
		}                                                                                                                    // 561
                                                                                                                       // 562
		// define a proxy function to allow extraSignupFields set error messages                                             // 563
		var errorFunction = function(errorMessage) {                                                                         // 564
			Accounts._loginButtonsSession.errorMessage(errorMessage);                                                           // 565
		};                                                                                                                   // 566
                                                                                                                       // 567
		var invalidExtraSignupFields = false;                                                                                // 568
		// parse extraSignupFields to populate account's profile data                                                        // 569
		_.each(Accounts.ui._options.extraSignupFields, function(field, index) {                                              // 570
			var value = elementValueById('login-' + field.fieldName);                                                           // 571
			if (typeof field.validate === 'function') {                                                                         // 572
				if (field.validate(value, errorFunction)) {                                                                        // 573
					if (typeof field.saveToProfile !== 'undefined' && !field.saveToProfile){                                          // 574
						options[field.fieldName] = value;                                                                                // 575
					} else {                                                                                                          // 576
						options.profile[field.fieldName] = value;                                                                        // 577
					}                                                                                                                 // 578
				} else {                                                                                                           // 579
					invalidExtraSignupFields = true;                                                                                  // 580
				}                                                                                                                  // 581
			} else {                                                                                                            // 582
				options.profile[field.fieldName] = value;                                                                          // 583
			}                                                                                                                   // 584
		});                                                                                                                  // 585
                                                                                                                       // 586
		if (invalidExtraSignupFields){                                                                                       // 587
			return;                                                                                                             // 588
		}                                                                                                                    // 589
		console.log(options)                                                                                                 // 590
		Accounts.createUser(options, function(error) {                                                                       // 591
			if (error) {                                                                                                        // 592
				if (error.reason == 'Signups forbidden'){                                                                          // 593
					loginButtonsSession.errorMessage(i18n('errorMessages.signupsForbidden'))                                          // 594
				} else {                                                                                                           // 595
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 596
				}                                                                                                                  // 597
			} else {                                                                                                            // 598
				loginButtonsSession.closeDropdown();                                                                               // 599
			}                                                                                                                   // 600
		});                                                                                                                  // 601
	};                                                                                                                    // 602
                                                                                                                       // 603
	var forgotPassword = function() {                                                                                     // 604
		loginButtonsSession.resetMessages();                                                                                 // 605
                                                                                                                       // 606
		var email = trimmedElementValueById("forgot-password-email");                                                        // 607
		if (email.indexOf('@') !== -1) {                                                                                     // 608
			Accounts.forgotPassword({                                                                                           // 609
				email: email                                                                                                       // 610
			}, function(error) {                                                                                                // 611
				if (error) {                                                                                                       // 612
					if (error.reason == 'User not found'){                                                                            // 613
						loginButtonsSession.errorMessage(i18n('errorMessages.userNotFound'))                                             // 614
					} else {                                                                                                          // 615
						loginButtonsSession.errorMessage(error.reason || "Unknown error");                                               // 616
					}                                                                                                                 // 617
				} else {                                                                                                           // 618
					loginButtonsSession.infoMessage(i18n('infoMessages.emailSent'));                                                  // 619
				}                                                                                                                  // 620
			});                                                                                                                 // 621
		} else {                                                                                                             // 622
			loginButtonsSession.errorMessage(i18n('forgotPasswordForm.invalidEmail'));                                          // 623
		}                                                                                                                    // 624
	};                                                                                                                    // 625
	var changePassword = function() {                                                                                     // 626
		loginButtonsSession.resetMessages();                                                                                 // 627
		// notably not trimmed. a password could (?) start or end with a space                                               // 628
		var oldPassword = elementValueById('login-old-password');                                                            // 629
		// notably not trimmed. a password could (?) start or end with a space                                               // 630
		var password = elementValueById('login-password');                                                                   // 631
		                                                                                                                     // 632
		if (password == oldPassword) {                                                                                       // 633
			loginButtonsSession.errorMessage(i18n('errorMessages.newPasswordSameAsOld'));                                       // 634
			return;                                                                                                             // 635
		}                                                                                                                    // 636
                                                                                                                       // 637
		if (!Accounts._loginButtons.validatePassword(password)){                                                             // 638
			return;                                                                                                             // 639
		}                                                                                                                    // 640
                                                                                                                       // 641
		if (!matchPasswordAgainIfPresent()){                                                                                 // 642
			return;                                                                                                             // 643
		}                                                                                                                    // 644
                                                                                                                       // 645
		Accounts.changePassword(oldPassword, password, function(error) {                                                     // 646
			if (error) {                                                                                                        // 647
				if (error.reason == 'Incorrect password'){                                                                         // 648
					loginButtonsSession.errorMessage(i18n('errorMessages.incorrectPassword'))                                         // 649
				} else {                                                                                                           // 650
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 651
				}                                                                                                                  // 652
			} else {                                                                                                            // 653
				loginButtonsSession.infoMessage(i18n('infoMessages.passwordChanged'));                                             // 654
                                                                                                                       // 655
				// wait 3 seconds, then expire the msg                                                                             // 656
				Meteor.setTimeout(function() {                                                                                     // 657
					loginButtonsSession.resetMessages();                                                                              // 658
				}, 3000);                                                                                                          // 659
			}                                                                                                                   // 660
		});                                                                                                                  // 661
	};                                                                                                                    // 662
                                                                                                                       // 663
	var matchPasswordAgainIfPresent = function() {                                                                        // 664
		// notably not trimmed. a password could (?) start or end with a space                                               // 665
		var passwordAgain = elementValueById('login-password-again');                                                        // 666
		if (passwordAgain !== null) {                                                                                        // 667
			// notably not trimmed. a password could (?) start or end with a space                                              // 668
			var password = elementValueById('login-password');                                                                  // 669
			if (password !== passwordAgain) {                                                                                   // 670
				loginButtonsSession.errorMessage(i18n('errorMessages.passwordsDontMatch'));                                        // 671
				return false;                                                                                                      // 672
			}                                                                                                                   // 673
		}                                                                                                                    // 674
		return true;                                                                                                         // 675
	};                                                                                                                    // 676
})();                                                                                                                  // 677
                                                                                                                       // 678
                                                                                                                       // 679
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_dialogs.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	// for convenience                                                                                                    // 2
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 3
                                                                                                                       // 4
                                                                                                                       // 5
	//                                                                                                                    // 6
	// populate the session so that the appropriate dialogs are                                                           // 7
	// displayed by reading variables set by accounts-urls, which parses                                                  // 8
	// special URLs. since accounts-ui depends on accounts-urls, we are                                                   // 9
	// guaranteed to have these set at this point.                                                                        // 10
	//                                                                                                                    // 11
                                                                                                                       // 12
	if (Accounts._resetPasswordToken) {                                                                                   // 13
		loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);                                         // 14
	}                                                                                                                     // 15
                                                                                                                       // 16
	if (Accounts._enrollAccountToken) {                                                                                   // 17
		loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);                                         // 18
	}                                                                                                                     // 19
                                                                                                                       // 20
	// Needs to be in Meteor.startup because of a package loading order                                                   // 21
	// issue. We can't be sure that accounts-password is loaded earlier                                                   // 22
	// than accounts-ui so Accounts.verifyEmail might not be defined.                                                     // 23
	Meteor.startup(function() {                                                                                           // 24
		if (Accounts._verifyEmailToken) {                                                                                    // 25
			Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {                                                  // 26
				Accounts._enableAutoLogin();                                                                                       // 27
				if (!error){                                                                                                       // 28
					loginButtonsSession.set('justVerifiedEmail', true);                                                               // 29
				}                                                                                                                  // 30
				// XXX show something if there was an error.                                                                       // 31
			});                                                                                                                 // 32
		}                                                                                                                    // 33
	});                                                                                                                   // 34
                                                                                                                       // 35
	//                                                                                                                    // 36
	// resetPasswordDialog template                                                                                       // 37
	//                                                                                                                    // 38
                                                                                                                       // 39
	Template._resetPasswordDialog.events({                                                                                // 40
		'click #login-buttons-reset-password-button': function(event) {                                                      // 41
			event.stopPropagation();                                                                                            // 42
			resetPassword();                                                                                                    // 43
		},                                                                                                                   // 44
		'keypress #reset-password-new-password': function(event) {                                                           // 45
			if (event.keyCode === 13){                                                                                          // 46
				resetPassword();                                                                                                   // 47
			}                                                                                                                   // 48
		},                                                                                                                   // 49
		'click #login-buttons-cancel-reset-password': function(event) {                                                      // 50
			event.stopPropagation();                                                                                            // 51
			loginButtonsSession.set('resetPasswordToken', null);                                                                // 52
			Accounts._enableAutoLogin();                                                                                        // 53
			$('#login-buttons-reset-password-modal').modal("hide");                                                             // 54
		}                                                                                                                    // 55
	});                                                                                                                   // 56
                                                                                                                       // 57
	var resetPassword = function() {                                                                                      // 58
		loginButtonsSession.resetMessages();                                                                                 // 59
		var newPassword = document.getElementById('reset-password-new-password').value;                                      // 60
		var passwordAgain= document.getElementById('reset-password-new-password-again').value;                               // 61
		if (!Accounts._loginButtons.validatePassword(newPassword,passwordAgain)){                                            // 62
			return;                                                                                                             // 63
		}                                                                                                                    // 64
                                                                                                                       // 65
		Accounts.resetPassword(                                                                                              // 66
			loginButtonsSession.get('resetPasswordToken'), newPassword,                                                         // 67
			function(error) {                                                                                                   // 68
				if (error) {                                                                                                       // 69
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 70
				} else {                                                                                                           // 71
					loginButtonsSession.set('resetPasswordToken', null);                                                              // 72
					Accounts._enableAutoLogin();                                                                                      // 73
					$('#login-buttons-reset-password-modal').modal("hide");                                                           // 74
				}                                                                                                                  // 75
			});                                                                                                                 // 76
	};                                                                                                                    // 77
                                                                                                                       // 78
	Template._resetPasswordDialog.helpers({                                                                               // 79
		inResetPasswordFlow: function() {                                                                                    // 80
			return loginButtonsSession.get('resetPasswordToken');                                                               // 81
		}                                                                                                                    // 82
	});                                                                                                                   // 83
                                                                                                                       // 84
	Template._resetPasswordDialog.rendered = function() {                                                                 // 85
		var $modal = $(this.find('#login-buttons-reset-password-modal'));                                                    // 86
		if (!_.isFunction($modal.modal)) {                                                                                   // 87
			console.error("You have to add a Bootstrap package, i.e. meteor add twbs:bootstrap");                               // 88
		} else {                                                                                                             // 89
			$modal.modal();                                                                                                     // 90
		}                                                                                                                    // 91
	};                                                                                                                    // 92
                                                                                                                       // 93
	//                                                                                                                    // 94
	// enrollAccountDialog template                                                                                       // 95
	//                                                                                                                    // 96
                                                                                                                       // 97
	Template._enrollAccountDialog.events({                                                                                // 98
		'click #login-buttons-enroll-account-button': function() {                                                           // 99
			enrollAccount();                                                                                                    // 100
		},                                                                                                                   // 101
		'keypress #enroll-account-password': function(event) {                                                               // 102
			if (event.keyCode === 13){                                                                                          // 103
				enrollAccount();                                                                                                   // 104
			}                                                                                                                   // 105
		},                                                                                                                   // 106
		'click #login-buttons-cancel-enroll-account-button': function() {                                                    // 107
			loginButtonsSession.set('enrollAccountToken', null);                                                                // 108
			Accounts._enableAutoLogin();                                                                                        // 109
			$modal.modal("hide");                                                                                               // 110
		}                                                                                                                    // 111
	});                                                                                                                   // 112
                                                                                                                       // 113
	var enrollAccount = function() {                                                                                      // 114
		loginButtonsSession.resetMessages();                                                                                 // 115
		var password = document.getElementById('enroll-account-password').value;                                             // 116
		var passwordAgain= document.getElementById('enroll-account-password-again').value;                                   // 117
		if (!Accounts._loginButtons.validatePassword(password,passwordAgain)){                                               // 118
			return;                                                                                                             // 119
		}                                                                                                                    // 120
                                                                                                                       // 121
		Accounts.resetPassword(                                                                                              // 122
			loginButtonsSession.get('enrollAccountToken'), password,                                                            // 123
			function(error) {                                                                                                   // 124
				if (error) {                                                                                                       // 125
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 126
				} else {                                                                                                           // 127
					loginButtonsSession.set('enrollAccountToken', null);                                                              // 128
					Accounts._enableAutoLogin();                                                                                      // 129
					$modal.modal("hide");                                                                                             // 130
				}                                                                                                                  // 131
			});                                                                                                                 // 132
	};                                                                                                                    // 133
                                                                                                                       // 134
	Template._enrollAccountDialog.helpers({                                                                               // 135
		inEnrollAccountFlow: function() {                                                                                    // 136
			return loginButtonsSession.get('enrollAccountToken');                                                               // 137
		}                                                                                                                    // 138
	});                                                                                                                   // 139
                                                                                                                       // 140
	Template._enrollAccountDialog.rendered = function() {                                                                 // 141
		$modal = $(this.find('#login-buttons-enroll-account-modal'));                                                        // 142
		if (!_.isFunction($modal.modal)) {                                                                                   // 143
			console.error("You have to add a Bootstrap package, i.e. meteor add twbs:bootstrap");                               // 144
		} else {                                                                                                             // 145
			$modal.modal();                                                                                                     // 146
		}                                                                                                                    // 147
	};                                                                                                                    // 148
                                                                                                                       // 149
	//                                                                                                                    // 150
	// justVerifiedEmailDialog template                                                                                   // 151
	//                                                                                                                    // 152
                                                                                                                       // 153
	Template._justVerifiedEmailDialog.events({                                                                            // 154
		'click #just-verified-dismiss-button': function() {                                                                  // 155
			loginButtonsSession.set('justVerifiedEmail', false);                                                                // 156
		}                                                                                                                    // 157
	});                                                                                                                   // 158
                                                                                                                       // 159
	Template._justVerifiedEmailDialog.helpers({                                                                           // 160
		visible: function() {                                                                                                // 161
			if (loginButtonsSession.get('justVerifiedEmail')) {                                                                 // 162
				setTimeout(function() {                                                                                            // 163
					$('#login-buttons-email-address-verified-modal').modal()                                                          // 164
				}, 500)                                                                                                            // 165
			}                                                                                                                   // 166
			return loginButtonsSession.get('justVerifiedEmail');                                                                // 167
		}                                                                                                                    // 168
	});                                                                                                                   // 169
                                                                                                                       // 170
                                                                                                                       // 171
	//                                                                                                                    // 172
	// loginButtonsMessagesDialog template                                                                                // 173
	//                                                                                                                    // 174
                                                                                                                       // 175
	// Template._loginButtonsMessagesDialog.rendered = function() {                                                       // 176
	//   var $modal = $(this.find('#configure-login-service-dialog-modal'));                                              // 177
	// 	 if (!_.isFunction($modal.modal)) {                                                                               // 178
	// 	 	console.error("You have to add a Bootstrap package, i.e. meteor add twbs:bootstrap");                           // 179
	// 	 } else {                                                                                                         // 180
	// 	 	$modal.modal();                                                                                                 // 181
	// 	 }                                                                                                                // 182
	// }                                                                                                                  // 183
                                                                                                                       // 184
	Template._loginButtonsMessagesDialog.events({                                                                         // 185
		'click #messages-dialog-dismiss-button': function() {                                                                // 186
			loginButtonsSession.resetMessages();                                                                                // 187
		}                                                                                                                    // 188
	});                                                                                                                   // 189
                                                                                                                       // 190
	Template._loginButtonsMessagesDialog.helpers({                                                                        // 191
		visible: function() {                                                                                                // 192
			var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');                 // 193
			return !Accounts._loginButtons.dropdown() && hasMessage;                                                            // 194
		}                                                                                                                    // 195
	});                                                                                                                   // 196
                                                                                                                       // 197
                                                                                                                       // 198
	//                                                                                                                    // 199
	// configureLoginServiceDialog template                                                                               // 200
	//                                                                                                                    // 201
                                                                                                                       // 202
	Template._configureLoginServiceDialog.events({                                                                        // 203
		'click .configure-login-service-dismiss-button': function(event) {                                                   // 204
			event.stopPropagation();                                                                                            // 205
			loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                               // 206
			$('#configure-login-service-dialog-modal').modal('hide');                                                           // 207
		},                                                                                                                   // 208
		'click #configure-login-service-dialog-save-configuration': function() {                                             // 209
			if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&                                                // 210
				!loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {                                             // 211
				// Prepare the configuration document for this login service                                                       // 212
				var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                               // 213
				var configuration = {                                                                                              // 214
					service: serviceName                                                                                              // 215
				};                                                                                                                 // 216
				_.each(configurationFields(), function(field) {                                                                    // 217
					configuration[field.property] = document.getElementById(                                                          // 218
						'configure-login-service-dialog-' + field.property).value                                                        // 219
						.replace(/^\s*|\s*$/g, ""); // trim;                                                                             // 220
				});                                                                                                                // 221
                                                                                                                       // 222
				configuration.loginStyle =                                                                                         // 223
				$('#configure-login-service-dialog input[name="loginStyle"]:checked')                                              // 224
				.val();                                                                                                            // 225
                                                                                                                       // 226
				// Configure this login service                                                                                    // 227
				Meteor.call("configureLoginService", configuration, function(error, result) {                                      // 228
					if (error){                                                                                                       // 229
						Meteor._debug("Error configuring login service " + serviceName, error);                                          // 230
					} else {                                                                                                          // 231
						loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                            // 232
					}                                                                                                                 // 233
					$('#configure-login-service-dialog-modal').modal('hide');                                                         // 234
				});                                                                                                                // 235
			}                                                                                                                   // 236
		},                                                                                                                   // 237
		// IE8 doesn't support the 'input' event, so we'll run this on the keyup as                                          // 238
		// well. (Keeping the 'input' event means that this also fires when you use                                          // 239
		// the mouse to change the contents of the field, eg 'Cut' menu item.)                                               // 240
		'input, keyup input': function(event) {                                                                              // 241
			// if the event fired on one of the configuration input fields,                                                     // 242
			// check whether we should enable the 'save configuration' button                                                   // 243
			if (event.target.id.indexOf('configure-login-service-dialog') === 0){                                               // 244
				updateSaveDisabled();                                                                                              // 245
			}                                                                                                                   // 246
		}                                                                                                                    // 247
	});                                                                                                                   // 248
                                                                                                                       // 249
	// check whether the 'save configuration' button should be enabled.                                                   // 250
	// this is a really strange way to implement this and a Forms                                                         // 251
	// Abstraction would make all of this reactive, and simpler.                                                          // 252
	var updateSaveDisabled = function() {                                                                                 // 253
		var anyFieldEmpty = _.any(configurationFields(), function(field) {                                                   // 254
			return document.getElementById(                                                                                     // 255
				'configure-login-service-dialog-' + field.property).value === '';                                                  // 256
		});                                                                                                                  // 257
                                                                                                                       // 258
		loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);                                   // 259
	};                                                                                                                    // 260
                                                                                                                       // 261
	// Returns the appropriate template for this login service.  This                                                     // 262
	// template should be defined in the service's package                                                                // 263
	var configureLoginServiceDialogTemplateForService = function() {                                                      // 264
		var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                                 // 265
		return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];                                         // 266
	};                                                                                                                    // 267
                                                                                                                       // 268
	var configurationFields = function() {                                                                                // 269
		var template = configureLoginServiceDialogTemplateForService();                                                      // 270
		return template.fields();                                                                                            // 271
	};                                                                                                                    // 272
                                                                                                                       // 273
	Template._configureLoginServiceDialog.helpers({                                                                       // 274
		configurationFields: function() {                                                                                    // 275
			return configurationFields();                                                                                       // 276
		},                                                                                                                   // 277
                                                                                                                       // 278
		visible: function() {                                                                                                // 279
			return loginButtonsSession.get('configureLoginServiceDialogVisible');                                               // 280
		},                                                                                                                   // 281
                                                                                                                       // 282
		configurationSteps: function() {                                                                                     // 283
			// renders the appropriate template                                                                                 // 284
			return configureLoginServiceDialogTemplateForService();                                                             // 285
		},                                                                                                                   // 286
                                                                                                                       // 287
		saveDisabled: function() {                                                                                           // 288
			return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');                                          // 289
		}                                                                                                                    // 290
	});                                                                                                                   // 291
                                                                                                                       // 292
                                                                                                                       // 293
	;                                                                                                                     // 294
                                                                                                                       // 295
                                                                                                                       // 296
                                                                                                                       // 297
	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                        // 298
	var capitalize = function(str) {                                                                                      // 299
		str = str == null ? '' : String(str);                                                                                // 300
		return str.charAt(0).toUpperCase() + str.slice(1);                                                                   // 301
	};                                                                                                                    // 302
                                                                                                                       // 303
})();                                                                                                                  // 304
                                                                                                                       // 305
                                                                                                                       // 306
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ian:accounts-ui-bootstrap-3'] = {
  accountsUIBootstrap3: accountsUIBootstrap3
};

})();

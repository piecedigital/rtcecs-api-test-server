(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LookupUserHandler(res) {
    return "LookupUserHandler";
}
exports.LookupUserHandler = LookupUserHandler;
;
function SearchUsersHandler(res) {
    return "SearchUsersHandler";
}
exports.SearchUsersHandler = SearchUsersHandler;
;
function CreateUserHandler(res) {
    return "CreateUserHandler";
}
exports.CreateUserHandler = CreateUserHandler;
;
function UpdateUserHandler(res) {
    return "UpdateUserHandler";
}
exports.UpdateUserHandler = UpdateUserHandler;
;
function SetUserContactAddressHandler(res) {
    return "SetUserContactAddressHandler";
}
exports.SetUserContactAddressHandler = SetUserContactAddressHandler;
;
function SetUserAccessHandler(res) {
    return "SetUserAccessHandler";
}
exports.SetUserAccessHandler = SetUserAccessHandler;
;
function SetUserLoginStatusHandler(res) {
    return "SetUserLoginStatusHandler";
}
exports.SetUserLoginStatusHandler = SetUserLoginStatusHandler;
;
function ResetUserPasswordHandler(res) {
    return "ResetUserPasswordHandler";
}
exports.ResetUserPasswordHandler = ResetUserPasswordHandler;
;
function NukeHandleHandler(res) {
    return "NukeHandleHandler";
}
exports.NukeHandleHandler = NukeHandleHandler;
;
function GetHandleHistoryHandler(res) {
    return "GetHandleHistoryHandler";
}
exports.GetHandleHistoryHandler = GetHandleHistoryHandler;
;
function SendUserEmailNotificationHandler(res) {
    return "SendUserEmailNotificationHandler";
}
exports.SendUserEmailNotificationHandler = SendUserEmailNotificationHandler;
;
function SearchAuditHistoryHandler(res) {
    return "SearchAuditHistoryHandler";
}
exports.SearchAuditHistoryHandler = SearchAuditHistoryHandler;
;
function GetAppConfigHandler(res) {
    return "GetAppConfigHandler";
}
exports.GetAppConfigHandler = GetAppConfigHandler;
;
function GetGlobalConfigHandler(res) {
    return "GetGlobalConfigHandler";
}
exports.GetGlobalConfigHandler = GetGlobalConfigHandler;
;
function SetGlobalConfigHandler(res) {
    return "SetGlobalConfigHandler";
}
exports.SetGlobalConfigHandler = SetGlobalConfigHandler;
;
function GetMatchQueueConfigHandler(res) {
    return "GetMatchQueueConfigHandler";
}
exports.GetMatchQueueConfigHandler = GetMatchQueueConfigHandler;
;
function SetMatchQueueConfigHandler(res) {
    return "SetMatchQueueConfigHandler";
}
exports.SetMatchQueueConfigHandler = SetMatchQueueConfigHandler;
;
function GetMatchUserConfigHandler(res) {
    return "GetMatchUserConfigHandler";
}
exports.GetMatchUserConfigHandler = GetMatchUserConfigHandler;
;
function SetMatchUserConfigHandler(res) {
    return "SetMatchUserConfigHandler";
}
exports.SetMatchUserConfigHandler = SetMatchUserConfigHandler;
;
function GetLobbyConfigHandler(res) {
    return "GetLobbyConfigHandler";
}
exports.GetLobbyConfigHandler = GetLobbyConfigHandler;
;
function SetLobbyConfigHandler(res) {
    return "SetLobbyConfigHandler";
}
exports.SetLobbyConfigHandler = SetLobbyConfigHandler;
;
function ListFeatureDefinitionsHandler(res) {
    return "ListFeatureDefinitionsHandler";
}
exports.ListFeatureDefinitionsHandler = ListFeatureDefinitionsHandler;
;
function SetFeatureDefinitionHandler(res) {
    return "SetFeatureDefinitionHandler";
}
exports.SetFeatureDefinitionHandler = SetFeatureDefinitionHandler;
;
function DeleteFeatureDefinitionHandler(res) {
    return "DeleteFeatureDefinitionHandler";
}
exports.DeleteFeatureDefinitionHandler = DeleteFeatureDefinitionHandler;
;
function ListFeatureRulesHandler(res) {
    return "ListFeatureRulesHandler";
}
exports.ListFeatureRulesHandler = ListFeatureRulesHandler;
;
function GetActiveFeaturesHandler(res) {
    return "GetActiveFeaturesHandler";
}
exports.GetActiveFeaturesHandler = GetActiveFeaturesHandler;
;
function CreateFeatureRuleHandler(res) {
    return "CreateFeatureRuleHandler";
}
exports.CreateFeatureRuleHandler = CreateFeatureRuleHandler;
;
function UpdateFeatureRuleHandler(res) {
    return "UpdateFeatureRuleHandler";
}
exports.UpdateFeatureRuleHandler = UpdateFeatureRuleHandler;
;
function DeleteFeatureRuleHandler(res) {
    return "DeleteFeatureRuleHandler";
}
exports.DeleteFeatureRuleHandler = DeleteFeatureRuleHandler;
;
function GetMatchQueueUsersHandler(res) {
    return "GetMatchQueueUsersHandler";
}
exports.GetMatchQueueUsersHandler = GetMatchQueueUsersHandler;
;
function GetLobbiesHandler(res) {
    return "GetLobbiesHandler";
}
exports.GetLobbiesHandler = GetLobbiesHandler;
;
function GetLobbyHandler(res) {
    return "GetLobbyHandler";
}
exports.GetLobbyHandler = GetLobbyHandler;
;
function GetActiveMatchesHandler(res) {
    return "GetActiveMatchesHandler";
}
exports.GetActiveMatchesHandler = GetActiveMatchesHandler;
;
function GetActiveMatchHandler(res) {
    return "GetActiveMatchHandler";
}
exports.GetActiveMatchHandler = GetActiveMatchHandler;
;
function GetRecentMatchesHandler(res) {
    return "GetRecentMatchesHandler";
}
exports.GetRecentMatchesHandler = GetRecentMatchesHandler;
;
function GetMatchDetailHandler(res) {
    return "GetMatchDetailHandler";
}
exports.GetMatchDetailHandler = GetMatchDetailHandler;
;
function GetPlayerDetailHandler(res) {
    return "GetPlayerDetailHandler";
}
exports.GetPlayerDetailHandler = GetPlayerDetailHandler;
;
function ListDesyncsHandler(res) {
    return "ListDesyncsHandler";
}
exports.ListDesyncsHandler = ListDesyncsHandler;
;
function ListCrashesHandler(res) {
    return "ListCrashesHandler";
}
exports.ListCrashesHandler = ListCrashesHandler;
;
function ListCrashBuildIdentifiersHandler(res) {
    return "ListCrashBuildIdentifiersHandler";
}
exports.ListCrashBuildIdentifiersHandler = ListCrashBuildIdentifiersHandler;
;
function ListCrashCollectionsHandler(res) {
    return "ListCrashCollectionsHandler";
}
exports.ListCrashCollectionsHandler = ListCrashCollectionsHandler;
;
function SearchPurchaseOrdersHandler(res) {
    return "SearchPurchaseOrdersHandler";
}
exports.SearchPurchaseOrdersHandler = SearchPurchaseOrdersHandler;
;
function SyncPurchaseOrderHandler(res) {
    return "SyncPurchaseOrderHandler";
}
exports.SyncPurchaseOrderHandler = SyncPurchaseOrderHandler;
;
function VoidPurchaseOrderHandler(res) {
    return "VoidPurchaseOrderHandler";
}
exports.VoidPurchaseOrderHandler = VoidPurchaseOrderHandler;
;
function RefundPurchaseOrderHandler(res) {
    return "RefundPurchaseOrderHandler";
}
exports.RefundPurchaseOrderHandler = RefundPurchaseOrderHandler;
;
function CountUsersHandler(res) {
    return "CountUsersHandler";
}
exports.CountUsersHandler = CountUsersHandler;
;
function GetSessionsHandler(res) {
    return "GetSessionsHandler";
}
exports.GetSessionsHandler = GetSessionsHandler;
;
function GetCharacterUsageHandler(res) {
    return "GetCharacterUsageHandler";
}
exports.GetCharacterUsageHandler = GetCharacterUsageHandler;
;
function CheckHandleHandler(res) {
    return "CheckHandleHandler";
}
exports.CheckHandleHandler = CheckHandleHandler;
;
function RegisterUserHandler(res) {
    return "RegisterUserHandler";
}
exports.RegisterUserHandler = RegisterUserHandler;
;
function ValidateUserHandler(res) {
    return "ValidateUserHandler";
}
exports.ValidateUserHandler = ValidateUserHandler;
;
function GetSecretQuestionHandler(res) {
    return "GetSecretQuestionHandler";
}
exports.GetSecretQuestionHandler = GetSecretQuestionHandler;
;
function SendPasswordResetEmailHandler(res) {
    return "SendPasswordResetEmailHandler";
}
exports.SendPasswordResetEmailHandler = SendPasswordResetEmailHandler;
;
function VerifyResetPasswordCodeHandler(res) {
    return "VerifyResetPasswordCodeHandler";
}
exports.VerifyResetPasswordCodeHandler = VerifyResetPasswordCodeHandler;
;
function ResetPasswordHandler(res) {
    return "ResetPasswordHandler";
}
exports.ResetPasswordHandler = ResetPasswordHandler;
;
function GetUserInfoHandler(res) {
    return "GetUserInfoHandler";
}
exports.GetUserInfoHandler = GetUserInfoHandler;
;
function ResendValidationEmailHandler(res) {
    return "ResendValidationEmailHandler";
}
exports.ResendValidationEmailHandler = ResendValidationEmailHandler;
;
function SetLocaleHandler(res) {
    return "SetLocaleHandler";
}
exports.SetLocaleHandler = SetLocaleHandler;
;
function SetContactAddressHandler(res) {
    return "SetContactAddressHandler";
}
exports.SetContactAddressHandler = SetContactAddressHandler;
;
function GetUserPrefsHandler(res) {
    return "GetUserPrefsHandler";
}
exports.GetUserPrefsHandler = GetUserPrefsHandler;
;
function SetUserPrefsHandler(res) {
    return "SetUserPrefsHandler";
}
exports.SetUserPrefsHandler = SetUserPrefsHandler;
;
function ChangePasswordHandler(res) {
    return "ChangePasswordHandler";
}
exports.ChangePasswordHandler = ChangePasswordHandler;
;
function ChangeEmailAddressHandler(res) {
    return "ChangeEmailAddressHandler";
}
exports.ChangeEmailAddressHandler = ChangeEmailAddressHandler;
;
function RedeemAccessCodeHandler(res) {
    return "RedeemAccessCodeHandler";
}
exports.RedeemAccessCodeHandler = RedeemAccessCodeHandler;
;
function CrashReportHandler(res) {
    return "CrashReportHandler";
}
exports.CrashReportHandler = CrashReportHandler;
;
function EventPingHandler(res) {
    return "EventPingHandler";
}
exports.EventPingHandler = EventPingHandler;
;
function CreateLobbyHandler(res) {
    return "CreateLobbyHandler";
}
exports.CreateLobbyHandler = CreateLobbyHandler;
;
function GetLobbyJoinCodeHandler(res) {
    return "GetLobbyJoinCodeHandler";
}
exports.GetLobbyJoinCodeHandler = GetLobbyJoinCodeHandler;
;
function JoinLobbyByCodeHandler(res) {
    return "JoinLobbyByCodeHandler";
}
exports.JoinLobbyByCodeHandler = JoinLobbyByCodeHandler;
;
function LeaveLobbyHandler(res) {
    return "LeaveLobbyHandler";
}
exports.LeaveLobbyHandler = LeaveLobbyHandler;
;
function LobbySetReadyHandler(res) {
    return "LobbySetReadyHandler";
}
exports.LobbySetReadyHandler = LobbySetReadyHandler;
;
function LobbySetOwnerHandler(res) {
    return "LobbySetOwnerHandler";
}
exports.LobbySetOwnerHandler = LobbySetOwnerHandler;
;
function LobbySetGameOptionsHandler(res) {
    return "LobbySetGameOptionsHandler";
}
exports.LobbySetGameOptionsHandler = LobbySetGameOptionsHandler;
;
function LobbyBanUserHandler(res) {
    return "LobbyBanUserHandler";
}
exports.LobbyBanUserHandler = LobbyBanUserHandler;
;
function LobbyRemoveUserHandler(res) {
    return "LobbyRemoveUserHandler";
}
exports.LobbyRemoveUserHandler = LobbyRemoveUserHandler;
;
function GetGameProfileHandler(res) {
    return "GetGameProfileHandler";
}
exports.GetGameProfileHandler = GetGameProfileHandler;
;
function PingTestHandler(res) {
    return "PingTestHandler";
}
exports.PingTestHandler = PingTestHandler;
;
function GetMatchHandler(res) {
    return "GetMatchHandler";
}
exports.GetMatchHandler = GetMatchHandler;
;
function ResumeGetMatchHandler(res) {
    return "ResumeGetMatchHandler";
}
exports.ResumeGetMatchHandler = ResumeGetMatchHandler;
;
function CancelGetMatchHandler(res) {
    return "CancelGetMatchHandler";
}
exports.CancelGetMatchHandler = CancelGetMatchHandler;
;
function ResetGameHandler(res) {
    return "ResetGameHandler";
}
exports.ResetGameHandler = ResetGameHandler;
;
function GetGameReplayRecordHandler(res) {
    return "GetGameReplayRecordHandler";
}
exports.GetGameReplayRecordHandler = GetGameReplayRecordHandler;
;
function DesyncReportHandler(res) {
    return "DesyncReportHandler";
}
exports.DesyncReportHandler = DesyncReportHandler;
;
function UpdatePlayerPreferencesHandler(res) {
    return "UpdatePlayerPreferencesHandler";
}
exports.UpdatePlayerPreferencesHandler = UpdatePlayerPreferencesHandler;
;
function GetPlayerStatsHandler(res) {
    return "GetPlayerStatsHandler";
}
exports.GetPlayerStatsHandler = GetPlayerStatsHandler;
;
function GetRecentGamesHandler(res) {
    return "GetRecentGamesHandler";
}
exports.GetRecentGamesHandler = GetRecentGamesHandler;
;
function LoginHandler(res) {
    return "LoginHandler";
}
exports.LoginHandler = LoginHandler;
;
function GetGameSessionTicketHandler(res) {
    return "GetGameSessionTicketHandler";
}
exports.GetGameSessionTicketHandler = GetGameSessionTicketHandler;
;
function RedeemGameSessionTicketHandler(res) {
    return "RedeemGameSessionTicketHandler";
}
exports.RedeemGameSessionTicketHandler = RedeemGameSessionTicketHandler;
;
function LogoutHandler(res) {
    return "LogoutHandler";
}
exports.LogoutHandler = LogoutHandler;
;
function GetStoredPaymentMethodsHandler(res) {
    return "GetStoredPaymentMethodsHandler";
}
exports.GetStoredPaymentMethodsHandler = GetStoredPaymentMethodsHandler;
;
function CreateStoredPaymentMethodHandler(res) {
    return "CreateStoredPaymentMethodHandler";
}
exports.CreateStoredPaymentMethodHandler = CreateStoredPaymentMethodHandler;
;
function UpdateStoredPaymentMethodHandler(res) {
    return "UpdateStoredPaymentMethodHandler";
}
exports.UpdateStoredPaymentMethodHandler = UpdateStoredPaymentMethodHandler;
;
function SetDefaultStoredPaymentMethodHandler(res) {
    return "SetDefaultStoredPaymentMethodHandler";
}
exports.SetDefaultStoredPaymentMethodHandler = SetDefaultStoredPaymentMethodHandler;
;
function RemoveStoredPaymentMethodHandler(res) {
    return "RemoveStoredPaymentMethodHandler";
}
exports.RemoveStoredPaymentMethodHandler = RemoveStoredPaymentMethodHandler;
;
function SubmitPurchaseOrderHandler(res) {
    return "SubmitPurchaseOrderHandler";
}
exports.SubmitPurchaseOrderHandler = SubmitPurchaseOrderHandler;
;
function GetPurchaseOrderHandler(res) {
    return "GetPurchaseOrderHandler";
}
exports.GetPurchaseOrderHandler = GetPurchaseOrderHandler;
;
function GetAccountOrderHistoryHandler(res) {
    return "GetAccountOrderHistoryHandler";
}
exports.GetAccountOrderHistoryHandler = GetAccountOrderHistoryHandler;
;
function GetAccountBalanceHistoryHandler(res) {
    return "GetAccountBalanceHistoryHandler";
}
exports.GetAccountBalanceHistoryHandler = GetAccountBalanceHistoryHandler;
;
function GetAccountBalanceHandler(res) {
    return "GetAccountBalanceHandler";
}
exports.GetAccountBalanceHandler = GetAccountBalanceHandler;
;
function GetUserCountHandler(res) {
    return "GetUserCountHandler";
}
exports.GetUserCountHandler = GetUserCountHandler;
;
function GetUsersInRankedCountHandler(res) {
    return "GetUsersInRankedCountHandler";
}
exports.GetUsersInRankedCountHandler = GetUsersInRankedCountHandler;
;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
run();
function run() {
    populateTestRoutesUI();
}
function populateTestRoutesUI() {
    routes_1.listOfRoutes.map(function (route) { return document.querySelector(".list-of-test-routes")
        .appendChild(generateHTML(route)); });
}
function generateHTML(route) {
    var container = document.createElement("div");
    container.className = "route-container";
    var info = document.createElement("div");
    info.className = "route-info";
    container.appendChild(info);
    do {
        var url = document.createElement("label");
        url.className = "route-info-url";
        url.innerText = "URL: " + route.url;
        info.appendChild(url);
    } while (false);
    var actions = document.createElement("div");
    actions.className = "route-actions";
    container.appendChild(actions);
    do {
        var allowExecution = document.createElement("input");
        allowExecution.type = "checkbox";
        actions.appendChild(allowExecution);
        var executeRoute = document.createElement("button");
        executeRoute.innerText = "Run Route";
        executeRoute.addEventListener("click", function () {
            routes_1.request(route.url, route.func);
        });
        actions.appendChild(executeRoute);
    } while (false);
    return container;
}

},{"./routes":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var handlers = require("./handlers");
var RouteListItem = /** @class */ (function () {
    function RouteListItem(url, func) {
        this.url = url;
        this.func = func;
    }
    return RouteListItem;
}());
exports.RouteListItem = RouteListItem;
exports.listOfRoutes = [
    new RouteListItem('/ryzthn/LookupUser', handlers.LookupUserHandler),
    new RouteListItem('/ryzthn/SearchUsers', handlers.SearchUsersHandler),
    new RouteListItem('/ryzthn/CreateUser', handlers.CreateUserHandler),
    new RouteListItem('/ryzthn/UpdateUser', handlers.UpdateUserHandler),
    new RouteListItem('/ryzthn/SetUserContactAddress', handlers.SetUserContactAddressHandler),
    new RouteListItem('/ryzthn/SetUserAccess', handlers.SetUserAccessHandler),
    new RouteListItem('/ryzthn/SetUserLoginStatus', handlers.SetUserLoginStatusHandler),
    new RouteListItem('/ryzthn/ResetUserPassword', handlers.ResetUserPasswordHandler),
    new RouteListItem('/ryzthn/NukeHandle', handlers.NukeHandleHandler),
    new RouteListItem('/ryzthn/GetHandleHistory', handlers.GetHandleHistoryHandler),
    new RouteListItem('/ryzthn/SendUserEmailNotification', handlers.SendUserEmailNotificationHandler),
    new RouteListItem('/ryzthn/SearchAuditHistory', handlers.SearchAuditHistoryHandler),
    new RouteListItem('/ryzthn/GetAppConfig', handlers.GetAppConfigHandler),
    new RouteListItem('/ryzthn/GetGlobalConfig', handlers.GetGlobalConfigHandler),
    new RouteListItem('/ryzthn/SetGlobalConfig', handlers.SetGlobalConfigHandler),
    new RouteListItem('/ryzthn/GetMatchQueueConfig', handlers.GetMatchQueueConfigHandler),
    new RouteListItem('/ryzthn/SetMatchQueueConfig', handlers.SetMatchQueueConfigHandler),
    new RouteListItem('/ryzthn/GetMatchUserConfig', handlers.GetMatchUserConfigHandler),
    new RouteListItem('/ryzthn/SetMatchUserConfig', handlers.SetMatchUserConfigHandler),
    new RouteListItem('/ryzthn/GetLobbyConfig', handlers.GetLobbyConfigHandler),
    new RouteListItem('/ryzthn/SetLobbyConfig', handlers.SetLobbyConfigHandler),
    new RouteListItem('/ryzthn/ListFeatureDefinitions', handlers.ListFeatureDefinitionsHandler),
    new RouteListItem('/ryzthn/SetFeatureDefinition', handlers.SetFeatureDefinitionHandler),
    new RouteListItem('/ryzthn/DeleteFeatureDefinition', handlers.DeleteFeatureDefinitionHandler),
    new RouteListItem('/ryzthn/ListFeatureRules', handlers.ListFeatureRulesHandler),
    new RouteListItem('/ryzthn/GetActiveFeatures', handlers.GetActiveFeaturesHandler),
    new RouteListItem('/ryzthn/CreateFeatureRule', handlers.CreateFeatureRuleHandler),
    new RouteListItem('/ryzthn/UpdateFeatureRule', handlers.UpdateFeatureRuleHandler),
    new RouteListItem('/ryzthn/DeleteFeatureRule', handlers.DeleteFeatureRuleHandler),
    new RouteListItem('/ryzthn/GetMatchQueueUsers', handlers.GetMatchQueueUsersHandler),
    new RouteListItem('/ryzthn/GetLobbies', handlers.GetLobbiesHandler),
    new RouteListItem('/ryzthn/GetLobby', handlers.GetLobbyHandler),
    new RouteListItem('/ryzthn/GetActiveMatches', handlers.GetActiveMatchesHandler),
    new RouteListItem('/ryzthn/GetActiveMatch', handlers.GetActiveMatchHandler),
    new RouteListItem('/ryzthn/GetRecentMatches', handlers.GetRecentMatchesHandler),
    new RouteListItem('/ryzthn/GetMatchDetail', handlers.GetMatchDetailHandler),
    new RouteListItem('/ryzthn/GetPlayerDetail', handlers.GetPlayerDetailHandler),
    new RouteListItem('/ryzthn/ListDesyncs', handlers.ListDesyncsHandler),
    new RouteListItem('/ryzthn/ListCrashes', handlers.ListCrashesHandler),
    new RouteListItem('/ryzthn/ListCrashBuildIdentifiers', handlers.ListCrashBuildIdentifiersHandler),
    new RouteListItem('/ryzthn/ListCrashCollections', handlers.ListCrashCollectionsHandler),
    new RouteListItem('/ryzthn/SearchPurchaseOrders', handlers.SearchPurchaseOrdersHandler),
    new RouteListItem('/ryzthn/SyncPurchaseOrder', handlers.SyncPurchaseOrderHandler),
    new RouteListItem('/ryzthn/VoidPurchaseOrder', handlers.VoidPurchaseOrderHandler),
    new RouteListItem('/ryzthn/RefundPurchaseOrder', handlers.RefundPurchaseOrderHandler),
    new RouteListItem('/ryzthn/CountUsers', handlers.CountUsersHandler),
    new RouteListItem('/ryzthn/GetSessions', handlers.GetSessionsHandler),
    new RouteListItem('/ryzthn/GetCharacterUsage', handlers.GetCharacterUsageHandler),
    new RouteListItem('/ryzthn/CheckHandle', handlers.CheckHandleHandler),
    new RouteListItem('/ryzthn/RegisterUser', handlers.RegisterUserHandler),
    new RouteListItem('/ryzthn/ValidateUser', handlers.ValidateUserHandler),
    new RouteListItem('/ryzthn/GetSecretQuestion', handlers.GetSecretQuestionHandler),
    new RouteListItem('/ryzthn/SendPasswordResetEmail', handlers.SendPasswordResetEmailHandler),
    new RouteListItem('/ryzthn/VerifyResetPasswordCode', handlers.VerifyResetPasswordCodeHandler),
    new RouteListItem('/ryzthn/ResetPassword', handlers.ResetPasswordHandler),
    new RouteListItem('/ryzthn/GetUserInfo', handlers.GetUserInfoHandler),
    new RouteListItem('/ryzthn/ResendValidationEmail', handlers.ResendValidationEmailHandler),
    new RouteListItem('/ryzthn/SetLocale', handlers.SetLocaleHandler),
    new RouteListItem('/ryzthn/SetContactAddress', handlers.SetContactAddressHandler),
    new RouteListItem('/ryzthn/GetUserPrefs', handlers.GetUserPrefsHandler),
    new RouteListItem('/ryzthn/SetUserPrefs', handlers.SetUserPrefsHandler),
    new RouteListItem('/ryzthn/ChangePassword', handlers.ChangePasswordHandler),
    new RouteListItem('/ryzthn/ChangeEmailAddress', handlers.ChangeEmailAddressHandler),
    new RouteListItem('/ryzthn/RedeemAccessCode', handlers.RedeemAccessCodeHandler),
    new RouteListItem('/ryzthn/CrashReport', handlers.CrashReportHandler),
    new RouteListItem('/ryzthn/EventPing', handlers.EventPingHandler),
    new RouteListItem('/ryzthn/CreateLobby', handlers.CreateLobbyHandler),
    new RouteListItem('/ryzthn/GetLobbyJoinCode', handlers.GetLobbyJoinCodeHandler),
    new RouteListItem('/ryzthn/JoinLobbyByCode', handlers.JoinLobbyByCodeHandler),
    new RouteListItem('/ryzthn/LeaveLobby', handlers.LeaveLobbyHandler),
    new RouteListItem('/ryzthn/LobbySetReady', handlers.LobbySetReadyHandler),
    new RouteListItem('/ryzthn/LobbySetOwner', handlers.LobbySetOwnerHandler),
    new RouteListItem('/ryzthn/LobbySetGameOptions', handlers.LobbySetGameOptionsHandler),
    new RouteListItem('/ryzthn/LobbyBanUser', handlers.LobbyBanUserHandler),
    new RouteListItem('/ryzthn/LobbyRemoveUser', handlers.LobbyRemoveUserHandler),
    new RouteListItem('/ryzthn/GetGameProfile', handlers.GetGameProfileHandler),
    new RouteListItem('/ryzthn/PingTest', handlers.PingTestHandler),
    new RouteListItem('/ryzthn/GetMatch', handlers.GetMatchHandler),
    new RouteListItem('/ryzthn/ResumeGetMatch', handlers.ResumeGetMatchHandler),
    new RouteListItem('/ryzthn/CancelGetMatch', handlers.CancelGetMatchHandler),
    new RouteListItem('/ryzthn/ResetGame', handlers.ResetGameHandler),
    new RouteListItem('/ryzthn/GetGameReplayRecord', handlers.GetGameReplayRecordHandler),
    new RouteListItem('/ryzthn/DesyncReport', handlers.DesyncReportHandler),
    new RouteListItem('/ryzthn/UpdatePlayerPreferences', handlers.UpdatePlayerPreferencesHandler),
    new RouteListItem('/ryzthn/GetPlayerStats', handlers.GetPlayerStatsHandler),
    new RouteListItem('/ryzthn/GetRecentGames', handlers.GetRecentGamesHandler),
    new RouteListItem('/ryzthn/Login', handlers.LoginHandler),
    new RouteListItem('/ryzthn/GetGameSessionTicket', handlers.GetGameSessionTicketHandler),
    new RouteListItem('/ryzthn/RedeemGameSessionTicket', handlers.RedeemGameSessionTicketHandler),
    new RouteListItem('/ryzthn/Logout', handlers.LogoutHandler),
    new RouteListItem('/ryzthn/GetStoredPaymentMethods', handlers.GetStoredPaymentMethodsHandler),
    new RouteListItem('/ryzthn/CreateStoredPaymentMethod', handlers.CreateStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/UpdateStoredPaymentMethod', handlers.UpdateStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/SetDefaultStoredPaymentMethod', handlers.SetDefaultStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/RemoveStoredPaymentMethod', handlers.RemoveStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/SubmitPurchaseOrder', handlers.SubmitPurchaseOrderHandler),
    new RouteListItem('/ryzthn/GetPurchaseOrder', handlers.GetPurchaseOrderHandler),
    new RouteListItem('/ryzthn/GetAccountOrderHistory', handlers.GetAccountOrderHistoryHandler),
    new RouteListItem('/ryzthn/GetAccountBalanceHistory', handlers.GetAccountBalanceHistoryHandler),
    new RouteListItem('/ryzthn/GetAccountBalance', handlers.GetAccountBalanceHandler),
    new RouteListItem('/ryzthn/GetUserCount', handlers.GetUserCountHandler),
    new RouteListItem('/ryzthn/GetUsersInRankedCount', handlers.GetUsersInRankedCountHandler),
];
function request(url, callback) {
    node_fetch_1.default("http://localhost:8000" + url)
        .then(function (res) { return callback(res); })
        .catch(function (e) {
        console.error("Could not complete the request. " + e);
    });
}
exports.request = request;

},{"./handlers":1,"node-fetch":4}],4:[function(require,module,exports){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
},{}]},{},[2]);

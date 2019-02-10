(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LookupUserHandler(res) {
    console.log("LookupUserHandler");
    return "LookupUserHandler";
}
exports.LookupUserHandler = LookupUserHandler;
;
function SearchUsersHandler(res) {
    console.log("SearchUsersHandler");
    return "SearchUsersHandler";
}
exports.SearchUsersHandler = SearchUsersHandler;
;
function CreateUserHandler(res) {
    console.log("CreateUserHandler");
    return "CreateUserHandler";
}
exports.CreateUserHandler = CreateUserHandler;
;
function UpdateUserHandler(res) {
    console.log("UpdateUserHandler");
    return "UpdateUserHandler";
}
exports.UpdateUserHandler = UpdateUserHandler;
;
function SetUserContactAddressHandler(res) {
    console.log("SetUserContactAddressHandler");
    return "SetUserContactAddressHandler";
}
exports.SetUserContactAddressHandler = SetUserContactAddressHandler;
;
function SetUserAccessHandler(res) {
    console.log("SetUserAccessHandler");
    return "SetUserAccessHandler";
}
exports.SetUserAccessHandler = SetUserAccessHandler;
;
function SetUserLoginStatusHandler(res) {
    console.log("SetUserLoginStatusHandler");
    return "SetUserLoginStatusHandler";
}
exports.SetUserLoginStatusHandler = SetUserLoginStatusHandler;
;
function ResetUserPasswordHandler(res) {
    console.log("ResetUserPasswordHandler");
    return "ResetUserPasswordHandler";
}
exports.ResetUserPasswordHandler = ResetUserPasswordHandler;
;
function NukeHandleHandler(res) {
    console.log("NukeHandleHandler");
    return "NukeHandleHandler";
}
exports.NukeHandleHandler = NukeHandleHandler;
;
function GetHandleHistoryHandler(res) {
    console.log("GetHandleHistoryHandler");
    return "GetHandleHistoryHandler";
}
exports.GetHandleHistoryHandler = GetHandleHistoryHandler;
;
function SendUserEmailNotificationHandler(res) {
    console.log("SendUserEmailNotificationHandler");
    return "SendUserEmailNotificationHandler";
}
exports.SendUserEmailNotificationHandler = SendUserEmailNotificationHandler;
;
function SearchAuditHistoryHandler(res) {
    console.log("SearchAuditHistoryHandler");
    return "SearchAuditHistoryHandler";
}
exports.SearchAuditHistoryHandler = SearchAuditHistoryHandler;
;
function GetAppConfigHandler(res) {
    console.log("GetAppConfigHandler");
    return "GetAppConfigHandler";
}
exports.GetAppConfigHandler = GetAppConfigHandler;
;
function GetGlobalConfigHandler(res) {
    console.log("GetGlobalConfigHandler");
    return "GetGlobalConfigHandler";
}
exports.GetGlobalConfigHandler = GetGlobalConfigHandler;
;
function SetGlobalConfigHandler(res) {
    console.log("SetGlobalConfigHandler");
    return "SetGlobalConfigHandler";
}
exports.SetGlobalConfigHandler = SetGlobalConfigHandler;
;
function GetMatchQueueConfigHandler(res) {
    console.log("GetMatchQueueConfigHandler");
    return "GetMatchQueueConfigHandler";
}
exports.GetMatchQueueConfigHandler = GetMatchQueueConfigHandler;
;
function SetMatchQueueConfigHandler(res) {
    console.log("SetMatchQueueConfigHandler");
    return "SetMatchQueueConfigHandler";
}
exports.SetMatchQueueConfigHandler = SetMatchQueueConfigHandler;
;
function GetMatchUserConfigHandler(res) {
    console.log("GetMatchUserConfigHandler");
    return "GetMatchUserConfigHandler";
}
exports.GetMatchUserConfigHandler = GetMatchUserConfigHandler;
;
function SetMatchUserConfigHandler(res) {
    console.log("SetMatchUserConfigHandler");
    return "SetMatchUserConfigHandler";
}
exports.SetMatchUserConfigHandler = SetMatchUserConfigHandler;
;
function GetLobbyConfigHandler(res) {
    console.log("GetLobbyConfigHandler");
    return "GetLobbyConfigHandler";
}
exports.GetLobbyConfigHandler = GetLobbyConfigHandler;
;
function SetLobbyConfigHandler(res) {
    console.log("SetLobbyConfigHandler");
    return "SetLobbyConfigHandler";
}
exports.SetLobbyConfigHandler = SetLobbyConfigHandler;
;
function ListFeatureDefinitionsHandler(res) {
    console.log("ListFeatureDefinitionsHandler");
    return "ListFeatureDefinitionsHandler";
}
exports.ListFeatureDefinitionsHandler = ListFeatureDefinitionsHandler;
;
function SetFeatureDefinitionHandler(res) {
    console.log("SetFeatureDefinitionHandler");
    return "SetFeatureDefinitionHandler";
}
exports.SetFeatureDefinitionHandler = SetFeatureDefinitionHandler;
;
function DeleteFeatureDefinitionHandler(res) {
    console.log("DeleteFeatureDefinitionHandler");
    return "DeleteFeatureDefinitionHandler";
}
exports.DeleteFeatureDefinitionHandler = DeleteFeatureDefinitionHandler;
;
function ListFeatureRulesHandler(res) {
    console.log("ListFeatureRulesHandler");
    return "ListFeatureRulesHandler";
}
exports.ListFeatureRulesHandler = ListFeatureRulesHandler;
;
function GetActiveFeaturesHandler(res) {
    console.log("GetActiveFeaturesHandler");
    return "GetActiveFeaturesHandler";
}
exports.GetActiveFeaturesHandler = GetActiveFeaturesHandler;
;
function CreateFeatureRuleHandler(res) {
    console.log("CreateFeatureRuleHandler");
    return "CreateFeatureRuleHandler";
}
exports.CreateFeatureRuleHandler = CreateFeatureRuleHandler;
;
function UpdateFeatureRuleHandler(res) {
    console.log("UpdateFeatureRuleHandler");
    return "UpdateFeatureRuleHandler";
}
exports.UpdateFeatureRuleHandler = UpdateFeatureRuleHandler;
;
function DeleteFeatureRuleHandler(res) {
    console.log("DeleteFeatureRuleHandler");
    return "DeleteFeatureRuleHandler";
}
exports.DeleteFeatureRuleHandler = DeleteFeatureRuleHandler;
;
function GetMatchQueueUsersHandler(res) {
    console.log("GetMatchQueueUsersHandler");
    return "GetMatchQueueUsersHandler";
}
exports.GetMatchQueueUsersHandler = GetMatchQueueUsersHandler;
;
function GetLobbiesHandler(res) {
    console.log("GetLobbiesHandler");
    return "GetLobbiesHandler";
}
exports.GetLobbiesHandler = GetLobbiesHandler;
;
function GetLobbyHandler(res) {
    console.log("GetLobbyHandler");
    return "GetLobbyHandler";
}
exports.GetLobbyHandler = GetLobbyHandler;
;
function GetActiveMatchesHandler(res) {
    console.log("GetActiveMatchesHandler");
    return "GetActiveMatchesHandler";
}
exports.GetActiveMatchesHandler = GetActiveMatchesHandler;
;
function GetActiveMatchHandler(res) {
    console.log("GetActiveMatchHandler");
    return "GetActiveMatchHandler";
}
exports.GetActiveMatchHandler = GetActiveMatchHandler;
;
function GetRecentMatchesHandler(res) {
    console.log("GetRecentMatchesHandler");
    return "GetRecentMatchesHandler";
}
exports.GetRecentMatchesHandler = GetRecentMatchesHandler;
;
function GetMatchDetailHandler(res) {
    console.log("GetMatchDetailHandler");
    return "GetMatchDetailHandler";
}
exports.GetMatchDetailHandler = GetMatchDetailHandler;
;
function GetPlayerDetailHandler(res) {
    console.log("GetPlayerDetailHandler");
    return "GetPlayerDetailHandler";
}
exports.GetPlayerDetailHandler = GetPlayerDetailHandler;
;
function ListDesyncsHandler(res) {
    console.log("ListDesyncsHandler");
    return "ListDesyncsHandler";
}
exports.ListDesyncsHandler = ListDesyncsHandler;
;
function ListCrashesHandler(res) {
    console.log("ListCrashesHandler");
    return "ListCrashesHandler";
}
exports.ListCrashesHandler = ListCrashesHandler;
;
function ListCrashBuildIdentifiersHandler(res) {
    console.log("ListCrashBuildIdentifiersHandler");
    return "ListCrashBuildIdentifiersHandler";
}
exports.ListCrashBuildIdentifiersHandler = ListCrashBuildIdentifiersHandler;
;
function ListCrashCollectionsHandler(res) {
    console.log("ListCrashCollectionsHandler");
    return "ListCrashCollectionsHandler";
}
exports.ListCrashCollectionsHandler = ListCrashCollectionsHandler;
;
function SearchPurchaseOrdersHandler(res) {
    console.log("SearchPurchaseOrdersHandler");
    return "SearchPurchaseOrdersHandler";
}
exports.SearchPurchaseOrdersHandler = SearchPurchaseOrdersHandler;
;
function SyncPurchaseOrderHandler(res) {
    console.log("SyncPurchaseOrderHandler");
    return "SyncPurchaseOrderHandler";
}
exports.SyncPurchaseOrderHandler = SyncPurchaseOrderHandler;
;
function VoidPurchaseOrderHandler(res) {
    console.log("VoidPurchaseOrderHandler");
    return "VoidPurchaseOrderHandler";
}
exports.VoidPurchaseOrderHandler = VoidPurchaseOrderHandler;
;
function RefundPurchaseOrderHandler(res) {
    console.log("RefundPurchaseOrderHandler");
    return "RefundPurchaseOrderHandler";
}
exports.RefundPurchaseOrderHandler = RefundPurchaseOrderHandler;
;
function CountUsersHandler(res) {
    console.log("CountUsersHandler");
    return "CountUsersHandler";
}
exports.CountUsersHandler = CountUsersHandler;
;
function GetSessionsHandler(res) {
    console.log("GetSessionsHandler");
    return "GetSessionsHandler";
}
exports.GetSessionsHandler = GetSessionsHandler;
;
function GetCharacterUsageHandler(res) {
    console.log("GetCharacterUsageHandler");
    return "GetCharacterUsageHandler";
}
exports.GetCharacterUsageHandler = GetCharacterUsageHandler;
;
function CheckHandleHandler(res) {
    console.log("CheckHandleHandler");
    return "CheckHandleHandler";
}
exports.CheckHandleHandler = CheckHandleHandler;
;
function RegisterUserHandler(res) {
    console.log("RegisterUserHandler");
    return "RegisterUserHandler";
}
exports.RegisterUserHandler = RegisterUserHandler;
;
function ValidateUserHandler(res) {
    console.log("ValidateUserHandler");
    return "ValidateUserHandler";
}
exports.ValidateUserHandler = ValidateUserHandler;
;
function GetSecretQuestionHandler(res) {
    console.log("GetSecretQuestionHandler");
    return "GetSecretQuestionHandler";
}
exports.GetSecretQuestionHandler = GetSecretQuestionHandler;
;
function SendPasswordResetEmailHandler(res) {
    console.log("SendPasswordResetEmailHandler");
    return "SendPasswordResetEmailHandler";
}
exports.SendPasswordResetEmailHandler = SendPasswordResetEmailHandler;
;
function VerifyResetPasswordCodeHandler(res) {
    console.log("VerifyResetPasswordCodeHandler");
    return "VerifyResetPasswordCodeHandler";
}
exports.VerifyResetPasswordCodeHandler = VerifyResetPasswordCodeHandler;
;
function ResetPasswordHandler(res) {
    console.log("ResetPasswordHandler");
    return "ResetPasswordHandler";
}
exports.ResetPasswordHandler = ResetPasswordHandler;
;
function GetUserInfoHandler(res) {
    console.log("GetUserInfoHandler");
    return "GetUserInfoHandler";
}
exports.GetUserInfoHandler = GetUserInfoHandler;
;
function ResendValidationEmailHandler(res) {
    console.log("ResendValidationEmailHandler");
    return "ResendValidationEmailHandler";
}
exports.ResendValidationEmailHandler = ResendValidationEmailHandler;
;
function SetLocaleHandler(res) {
    console.log("SetLocaleHandler");
    return "SetLocaleHandler";
}
exports.SetLocaleHandler = SetLocaleHandler;
;
function SetContactAddressHandler(res) {
    console.log("SetContactAddressHandler");
    return "SetContactAddressHandler";
}
exports.SetContactAddressHandler = SetContactAddressHandler;
;
function GetUserPrefsHandler(res) {
    console.log("GetUserPrefsHandler");
    return "GetUserPrefsHandler";
}
exports.GetUserPrefsHandler = GetUserPrefsHandler;
;
function SetUserPrefsHandler(res) {
    console.log("SetUserPrefsHandler");
    return "SetUserPrefsHandler";
}
exports.SetUserPrefsHandler = SetUserPrefsHandler;
;
function ChangePasswordHandler(res) {
    console.log("ChangePasswordHandler");
    return "ChangePasswordHandler";
}
exports.ChangePasswordHandler = ChangePasswordHandler;
;
function ChangeEmailAddressHandler(res) {
    console.log("ChangeEmailAddressHandler");
    return "ChangeEmailAddressHandler";
}
exports.ChangeEmailAddressHandler = ChangeEmailAddressHandler;
;
function RedeemAccessCodeHandler(res) {
    console.log("RedeemAccessCodeHandler");
    return "RedeemAccessCodeHandler";
}
exports.RedeemAccessCodeHandler = RedeemAccessCodeHandler;
;
function CrashReportHandler(res) {
    console.log("CrashReportHandler");
    return "CrashReportHandler";
}
exports.CrashReportHandler = CrashReportHandler;
;
function EventPingHandler(res) {
    console.log("EventPingHandler");
    return "EventPingHandler";
}
exports.EventPingHandler = EventPingHandler;
;
function CreateLobbyHandler(res) {
    console.log("CreateLobbyHandler");
    return "CreateLobbyHandler";
}
exports.CreateLobbyHandler = CreateLobbyHandler;
;
function GetLobbyJoinCodeHandler(res) {
    console.log("GetLobbyJoinCodeHandler");
    return "GetLobbyJoinCodeHandler";
}
exports.GetLobbyJoinCodeHandler = GetLobbyJoinCodeHandler;
;
function JoinLobbyByCodeHandler(res) {
    console.log("JoinLobbyByCodeHandler");
    return "JoinLobbyByCodeHandler";
}
exports.JoinLobbyByCodeHandler = JoinLobbyByCodeHandler;
;
function LeaveLobbyHandler(res) {
    console.log("LeaveLobbyHandler");
    return "LeaveLobbyHandler";
}
exports.LeaveLobbyHandler = LeaveLobbyHandler;
;
function LobbySetReadyHandler(res) {
    console.log("LobbySetReadyHandler");
    return "LobbySetReadyHandler";
}
exports.LobbySetReadyHandler = LobbySetReadyHandler;
;
function LobbySetOwnerHandler(res) {
    console.log("LobbySetOwnerHandler");
    return "LobbySetOwnerHandler";
}
exports.LobbySetOwnerHandler = LobbySetOwnerHandler;
;
function LobbySetGameOptionsHandler(res) {
    console.log("LobbySetGameOptionsHandler");
    return "LobbySetGameOptionsHandler";
}
exports.LobbySetGameOptionsHandler = LobbySetGameOptionsHandler;
;
function LobbyBanUserHandler(res) {
    console.log("LobbyBanUserHandler");
    return "LobbyBanUserHandler";
}
exports.LobbyBanUserHandler = LobbyBanUserHandler;
;
function LobbyRemoveUserHandler(res) {
    console.log("LobbyRemoveUserHandler");
    return "LobbyRemoveUserHandler";
}
exports.LobbyRemoveUserHandler = LobbyRemoveUserHandler;
;
function GetGameProfileHandler(res) {
    console.log("GetGameProfileHandler");
    return "GetGameProfileHandler";
}
exports.GetGameProfileHandler = GetGameProfileHandler;
;
function PingTestHandler(res) {
    console.log("PingTestHandler");
    return "PingTestHandler";
}
exports.PingTestHandler = PingTestHandler;
;
function GetMatchHandler(res) {
    console.log("GetMatchHandler");
    return "GetMatchHandler";
}
exports.GetMatchHandler = GetMatchHandler;
;
function ResumeGetMatchHandler(res) {
    console.log("ResumeGetMatchHandler");
    return "ResumeGetMatchHandler";
}
exports.ResumeGetMatchHandler = ResumeGetMatchHandler;
;
function CancelGetMatchHandler(res) {
    console.log("CancelGetMatchHandler");
    return "CancelGetMatchHandler";
}
exports.CancelGetMatchHandler = CancelGetMatchHandler;
;
function ResetGameHandler(res) {
    console.log("ResetGameHandler");
    return "ResetGameHandler";
}
exports.ResetGameHandler = ResetGameHandler;
;
function GetGameReplayRecordHandler(res) {
    console.log("GetGameReplayRecordHandler");
    return "GetGameReplayRecordHandler";
}
exports.GetGameReplayRecordHandler = GetGameReplayRecordHandler;
;
function DesyncReportHandler(res) {
    console.log("DesyncReportHandler");
    return "DesyncReportHandler";
}
exports.DesyncReportHandler = DesyncReportHandler;
;
function UpdatePlayerPreferencesHandler(res) {
    console.log("UpdatePlayerPreferencesHandler");
    return "UpdatePlayerPreferencesHandler";
}
exports.UpdatePlayerPreferencesHandler = UpdatePlayerPreferencesHandler;
;
function GetPlayerStatsHandler(res) {
    console.log("GetPlayerStatsHandler");
    return "GetPlayerStatsHandler";
}
exports.GetPlayerStatsHandler = GetPlayerStatsHandler;
;
function GetRecentGamesHandler(res) {
    console.log("GetRecentGamesHandler");
    return "GetRecentGamesHandler";
}
exports.GetRecentGamesHandler = GetRecentGamesHandler;
;
function LoginHandler(res) {
    console.log("LoginHandler");
    return "LoginHandler";
}
exports.LoginHandler = LoginHandler;
;
function GetGameSessionTicketHandler(res) {
    console.log("GetGameSessionTicketHandler");
    return "GetGameSessionTicketHandler";
}
exports.GetGameSessionTicketHandler = GetGameSessionTicketHandler;
;
function RedeemGameSessionTicketHandler(res) {
    console.log("RedeemGameSessionTicketHandler");
    return "RedeemGameSessionTicketHandler";
}
exports.RedeemGameSessionTicketHandler = RedeemGameSessionTicketHandler;
;
function LogoutHandler(res) {
    console.log("LogoutHandler");
    return "LogoutHandler";
}
exports.LogoutHandler = LogoutHandler;
;
function GetStoredPaymentMethodsHandler(res) {
    console.log("GetStoredPaymentMethodsHandler");
    return "GetStoredPaymentMethodsHandler";
}
exports.GetStoredPaymentMethodsHandler = GetStoredPaymentMethodsHandler;
;
function CreateStoredPaymentMethodHandler(res) {
    console.log("CreateStoredPaymentMethodHandler");
    return "CreateStoredPaymentMethodHandler";
}
exports.CreateStoredPaymentMethodHandler = CreateStoredPaymentMethodHandler;
;
function UpdateStoredPaymentMethodHandler(res) {
    console.log("UpdateStoredPaymentMethodHandler");
    return "UpdateStoredPaymentMethodHandler";
}
exports.UpdateStoredPaymentMethodHandler = UpdateStoredPaymentMethodHandler;
;
function SetDefaultStoredPaymentMethodHandler(res) {
    console.log("SetDefaultStoredPaymentMethodHandler");
    return "SetDefaultStoredPaymentMethodHandler";
}
exports.SetDefaultStoredPaymentMethodHandler = SetDefaultStoredPaymentMethodHandler;
;
function RemoveStoredPaymentMethodHandler(res) {
    console.log("RemoveStoredPaymentMethodHandler");
    return "RemoveStoredPaymentMethodHandler";
}
exports.RemoveStoredPaymentMethodHandler = RemoveStoredPaymentMethodHandler;
;
function SubmitPurchaseOrderHandler(res) {
    console.log("SubmitPurchaseOrderHandler");
    return "SubmitPurchaseOrderHandler";
}
exports.SubmitPurchaseOrderHandler = SubmitPurchaseOrderHandler;
;
function GetPurchaseOrderHandler(res) {
    console.log("GetPurchaseOrderHandler");
    return "GetPurchaseOrderHandler";
}
exports.GetPurchaseOrderHandler = GetPurchaseOrderHandler;
;
function GetAccountOrderHistoryHandler(res) {
    console.log("GetAccountOrderHistoryHandler");
    return "GetAccountOrderHistoryHandler";
}
exports.GetAccountOrderHistoryHandler = GetAccountOrderHistoryHandler;
;
function GetAccountBalanceHistoryHandler(res) {
    console.log("GetAccountBalanceHistoryHandler");
    return "GetAccountBalanceHistoryHandler";
}
exports.GetAccountBalanceHistoryHandler = GetAccountBalanceHistoryHandler;
;
function GetAccountBalanceHandler(res) {
    console.log("GetAccountBalanceHandler");
    return "GetAccountBalanceHandler";
}
exports.GetAccountBalanceHandler = GetAccountBalanceHandler;
;
function GetUserCountHandler(res) {
    console.log("GetUserCountHandler");
    return "GetUserCountHandler";
}
exports.GetUserCountHandler = GetUserCountHandler;
;
function GetUsersInRankedCountHandler(res) {
    console.log("GetUsersInRankedCountHandler");
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
    do {
        var padder = document.createElement("div");
        padder.className = "padder";
        container.appendChild(padder);
        do {
            var info = document.createElement("div");
            info.className = "route-info";
            padder.appendChild(info);
            do {
                var url = document.createElement("label");
                url.className = "route-info-url";
                url.innerText = "URL: " + route.url;
                info.appendChild(url);
            } while (false);
            var actions = document.createElement("div");
            actions.className = "route-actions";
            padder.appendChild(actions);
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
        } while (false);
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
    // new RouteListItem('/ryzthn/rpc/LookupUser',handlers.LookupUserHandler),
    // new RouteListItem('/ryzthn/rpc/SearchUsers',handlers.SearchUsersHandler),
    // new RouteListItem('/ryzthn/rpc/CreateUser',handlers.CreateUserHandler),
    // new RouteListItem('/ryzthn/rpc/UpdateUser',handlers.UpdateUserHandler),
    // new RouteListItem('/ryzthn/rpc/SetUserContactAddress',handlers.SetUserContactAddressHandler),
    // new RouteListItem('/ryzthn/rpc/SetUserAccess',handlers.SetUserAccessHandler),
    // new RouteListItem('/ryzthn/rpc/SetUserLoginStatus',handlers.SetUserLoginStatusHandler),
    // new RouteListItem('/ryzthn/rpc/ResetUserPassword',handlers.ResetUserPasswordHandler),
    // new RouteListItem('/ryzthn/rpc/NukeHandle',handlers.NukeHandleHandler),
    // new RouteListItem('/ryzthn/rpc/GetHandleHistory',handlers.GetHandleHistoryHandler),
    // new RouteListItem('/ryzthn/rpc/SendUserEmailNotification',handlers.SendUserEmailNotificationHandler),
    // new RouteListItem('/ryzthn/rpc/SearchAuditHistory',handlers.SearchAuditHistoryHandler),
    // new RouteListItem('/ryzthn/rpc/GetAppConfig',handlers.GetAppConfigHandler),
    // new RouteListItem('/ryzthn/rpc/GetGlobalConfig',handlers.GetGlobalConfigHandler),
    // new RouteListItem('/ryzthn/rpc/SetGlobalConfig',handlers.SetGlobalConfigHandler),
    // new RouteListItem('/ryzthn/rpc/GetMatchQueueConfig',handlers.GetMatchQueueConfigHandler),
    // new RouteListItem('/ryzthn/rpc/SetMatchQueueConfig',handlers.SetMatchQueueConfigHandler),
    // new RouteListItem('/ryzthn/rpc/GetMatchUserConfig',handlers.GetMatchUserConfigHandler),
    // new RouteListItem('/ryzthn/rpc/SetMatchUserConfig',handlers.SetMatchUserConfigHandler),
    // new RouteListItem('/ryzthn/rpc/GetLobbyConfig',handlers.GetLobbyConfigHandler),
    // new RouteListItem('/ryzthn/rpc/SetLobbyConfig',handlers.SetLobbyConfigHandler),
    // new RouteListItem('/ryzthn/rpc/ListFeatureDefinitions',handlers.ListFeatureDefinitionsHandler),
    // new RouteListItem('/ryzthn/rpc/SetFeatureDefinition',handlers.SetFeatureDefinitionHandler),
    // new RouteListItem('/ryzthn/rpc/DeleteFeatureDefinition',handlers.DeleteFeatureDefinitionHandler),
    // new RouteListItem('/ryzthn/rpc/ListFeatureRules',handlers.ListFeatureRulesHandler),
    // new RouteListItem('/ryzthn/rpc/GetActiveFeatures',handlers.GetActiveFeaturesHandler),
    // new RouteListItem('/ryzthn/rpc/CreateFeatureRule',handlers.CreateFeatureRuleHandler),
    // new RouteListItem('/ryzthn/rpc/UpdateFeatureRule',handlers.UpdateFeatureRuleHandler),
    // new RouteListItem('/ryzthn/rpc/DeleteFeatureRule',handlers.DeleteFeatureRuleHandler),
    // new RouteListItem('/ryzthn/rpc/GetMatchQueueUsers',handlers.GetMatchQueueUsersHandler),
    // new RouteListItem('/ryzthn/rpc/GetLobbies',handlers.GetLobbiesHandler),
    // new RouteListItem('/ryzthn/rpc/GetLobby',handlers.GetLobbyHandler),
    // new RouteListItem('/ryzthn/rpc/GetActiveMatches',handlers.GetActiveMatchesHandler),
    // new RouteListItem('/ryzthn/rpc/GetActiveMatch',handlers.GetActiveMatchHandler),
    // new RouteListItem('/ryzthn/rpc/GetRecentMatches',handlers.GetRecentMatchesHandler),
    // new RouteListItem('/ryzthn/rpc/GetMatchDetail',handlers.GetMatchDetailHandler),
    // new RouteListItem('/ryzthn/rpc/GetPlayerDetail',handlers.GetPlayerDetailHandler),
    // new RouteListItem('/ryzthn/rpc/ListDesyncs',handlers.ListDesyncsHandler),
    // new RouteListItem('/ryzthn/rpc/ListCrashes',handlers.ListCrashesHandler),
    // new RouteListItem('/ryzthn/rpc/ListCrashBuildIdentifiers',handlers.ListCrashBuildIdentifiersHandler),
    // new RouteListItem('/ryzthn/rpc/ListCrashCollections',handlers.ListCrashCollectionsHandler),
    // new RouteListItem('/ryzthn/rpc/SearchPurchaseOrders',handlers.SearchPurchaseOrdersHandler),
    // new RouteListItem('/ryzthn/rpc/SyncPurchaseOrder',handlers.SyncPurchaseOrderHandler),
    // new RouteListItem('/ryzthn/rpc/VoidPurchaseOrder',handlers.VoidPurchaseOrderHandler),
    // new RouteListItem('/ryzthn/rpc/RefundPurchaseOrder',handlers.RefundPurchaseOrderHandler),
    // new RouteListItem('/ryzthn/rpc/CountUsers',handlers.CountUsersHandler),
    // new RouteListItem('/ryzthn/rpc/GetSessions',handlers.GetSessionsHandler),
    // new RouteListItem('/ryzthn/rpc/GetCharacterUsage',handlers.GetCharacterUsageHandler),
    // new RouteListItem('/ryzthn/rpc/CheckHandle',handlers.CheckHandleHandler),
    // new RouteListItem('/ryzthn/rpc/RegisterUser',handlers.RegisterUserHandler),
    // new RouteListItem('/ryzthn/rpc/ValidateUser',handlers.ValidateUserHandler),
    // new RouteListItem('/ryzthn/rpc/GetSecretQuestion',handlers.GetSecretQuestionHandler),
    // new RouteListItem('/ryzthn/rpc/SendPasswordResetEmail',handlers.SendPasswordResetEmailHandler),
    // new RouteListItem('/ryzthn/rpc/VerifyResetPasswordCode',handlers.VerifyResetPasswordCodeHandler),
    // new RouteListItem('/ryzthn/rpc/ResetPassword',handlers.ResetPasswordHandler),
    // new RouteListItem('/ryzthn/rpc/GetUserInfo',handlers.GetUserInfoHandler),
    // new RouteListItem('/ryzthn/rpc/ResendValidationEmail',handlers.ResendValidationEmailHandler),
    // new RouteListItem('/ryzthn/rpc/SetLocale',handlers.SetLocaleHandler),
    // new RouteListItem('/ryzthn/rpc/SetContactAddress',handlers.SetContactAddressHandler),
    // new RouteListItem('/ryzthn/rpc/GetUserPrefs',handlers.GetUserPrefsHandler),
    // new RouteListItem('/ryzthn/rpc/SetUserPrefs',handlers.SetUserPrefsHandler),
    // new RouteListItem('/ryzthn/rpc/ChangePassword',handlers.ChangePasswordHandler),
    // new RouteListItem('/ryzthn/rpc/ChangeEmailAddress',handlers.ChangeEmailAddressHandler),
    // new RouteListItem('/ryzthn/rpc/RedeemAccessCode',handlers.RedeemAccessCodeHandler),
    // new RouteListItem('/ryzthn/rpc/CrashReport',handlers.CrashReportHandler),
    // new RouteListItem('/ryzthn/rpc/EventPing',handlers.EventPingHandler),
    // new RouteListItem('/ryzthn/rpc/CreateLobby',handlers.CreateLobbyHandler),
    // new RouteListItem('/ryzthn/rpc/GetLobbyJoinCode',handlers.GetLobbyJoinCodeHandler),
    // new RouteListItem('/ryzthn/rpc/JoinLobbyByCode',handlers.JoinLobbyByCodeHandler),
    // new RouteListItem('/ryzthn/rpc/LeaveLobby',handlers.LeaveLobbyHandler),
    // new RouteListItem('/ryzthn/rpc/LobbySetReady',handlers.LobbySetReadyHandler),
    // new RouteListItem('/ryzthn/rpc/LobbySetOwner',handlers.LobbySetOwnerHandler),
    // new RouteListItem('/ryzthn/rpc/LobbySetGameOptions',handlers.LobbySetGameOptionsHandler),
    // new RouteListItem('/ryzthn/rpc/LobbyBanUser',handlers.LobbyBanUserHandler),
    // new RouteListItem('/ryzthn/rpc/LobbyRemoveUser',handlers.LobbyRemoveUserHandler),
    // new RouteListItem('/ryzthn/rpc/GetGameProfile',handlers.GetGameProfileHandler),
    // new RouteListItem('/ryzthn/rpc/PingTest',handlers.PingTestHandler),
    // new RouteListItem('/ryzthn/rpc/GetMatch',handlers.GetMatchHandler),
    // new RouteListItem('/ryzthn/rpc/ResumeGetMatch',handlers.ResumeGetMatchHandler),
    // new RouteListItem('/ryzthn/rpc/CancelGetMatch',handlers.CancelGetMatchHandler),
    // new RouteListItem('/ryzthn/rpc/ResetGame',handlers.ResetGameHandler),
    // new RouteListItem('/ryzthn/rpc/GetGameReplayRecord',handlers.GetGameReplayRecordHandler),
    // new RouteListItem('/ryzthn/rpc/DesyncReport',handlers.DesyncReportHandler),
    // new RouteListItem('/ryzthn/rpc/UpdatePlayerPreferences',handlers.UpdatePlayerPreferencesHandler),
    // new RouteListItem('/ryzthn/rpc/GetPlayerStats',handlers.GetPlayerStatsHandler),
    // new RouteListItem('/ryzthn/rpc/GetRecentGames',handlers.GetRecentGamesHandler),
    new RouteListItem('/ryzthn/rpc/Login', handlers.LoginHandler),
];
function request(url, callback) {
    node_fetch_1.default("https://localhost:" + (getPort() || 8000) + url, {
        method: "POST"
    })
        .then(function (res) { return callback(res); })
        .catch(function (e) {
        console.error("Could not complete the request. " + e);
    });
}
exports.request = request;
function parseURLSearch() {
    var searchValues = {};
    location.search.replace(/^./, "")
        .split("&")
        .map(function (pair) {
        var pairArray = pair.split("=");
        searchValues[pairArray[0]] = pairArray[1];
    });
    return searchValues;
}
function getPort() {
    return document.querySelector(".port-input").value;
}

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

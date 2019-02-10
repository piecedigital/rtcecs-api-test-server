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

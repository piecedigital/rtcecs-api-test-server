"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var handlers_1 = require("./handlers"), handlers = handlers_1;
var protos = null;
function InitRoutes(p) {
    protos = p;
    onProtosLoad();
    handlers_1.default(p);
}
exports.default = InitRoutes;
var RouteListItem = /** @class */ (function () {
    function RouteListItem(url, data, handler) {
        this.url = url;
        this.data = data;
        this.handler = handler;
    }
    return RouteListItem;
}());
exports.RouteListItem = RouteListItem;
exports.listOfRoutes = [];
function onProtosLoad() {
    exports.listOfRoutes = [
        new RouteListItem("/ryzthn/rpc/GetEvent", protos.messages.Empty.create({}), handlers.GetEventHandler),
        new RouteListItem("/ryzthn/rpc/LookupUser", protos.messages.UserInfo.create({}), handlers.LookupUserHandler),
        new RouteListItem("/ryzthn/rpc/SearchUsers", protos.messages.SearchUsersResult.create({}), handlers.SearchUsersHandler),
        new RouteListItem("/ryzthn/rpc/CreateUser", protos.messages.CreateUserResult.create({}), handlers.CreateUserHandler),
        new RouteListItem("/ryzthn/rpc/UpdateUser", protos.messages.Empty.create({}), handlers.UpdateUserHandler),
        new RouteListItem("/ryzthn/rpc/SetUserContactAddress", protos.messages.Empty.create({}), handlers.SetUserContactAddressHandler),
        new RouteListItem("/ryzthn/rpc/SetUserAccess", protos.messages.Empty.create({}), handlers.SetUserAccessHandler),
        new RouteListItem("/ryzthn/rpc/SetUserLoginStatus", protos.messages.Empty.create({}), handlers.SetUserLoginStatusHandler),
        new RouteListItem("/ryzthn/rpc/ResetUserPassword", protos.messages.Empty.create({}), handlers.ResetUserPasswordHandler),
        new RouteListItem("/ryzthn/rpc/NukeHandle", protos.messages.NukeHandleResult.create({}), handlers.NukeHandleHandler),
        new RouteListItem("/ryzthn/rpc/GetHandleHistory", protos.messages.GetHandleHistoryResult.create({}), handlers.GetHandleHistoryHandler),
        new RouteListItem("/ryzthn/rpc/SendUserEmailNotification", protos.messages.Empty.create({}), handlers.SendUserEmailNotificationHandler),
        new RouteListItem("/ryzthn/rpc/SearchAuditHistory", protos.messages.SearchAuditHistoryResult.create({}), handlers.SearchAuditHistoryHandler),
        new RouteListItem("/ryzthn/rpc/GetAppConfig", protos.messages.AppConfig.create({}), handlers.GetAppConfigHandler),
        new RouteListItem("/ryzthn/rpc/GetGlobalConfig", protos.messages.GetGlobalConfigResult.create({}), handlers.GetGlobalConfigHandler),
        new RouteListItem("/ryzthn/rpc/SetGlobalConfig", protos.messages.Empty.create({}), handlers.SetGlobalConfigHandler),
        new RouteListItem("/ryzthn/rpc/GetMatchQueueConfig", protos.messages.GetMatchQueueConfigResult.create({}), handlers.GetMatchQueueConfigHandler),
        new RouteListItem("/ryzthn/rpc/SetMatchQueueConfig", protos.messages.Empty.create({}), handlers.SetMatchQueueConfigHandler),
        new RouteListItem("/ryzthn/rpc/GetMatchUserConfig", protos.messages.GetMatchUserConfigResult.create({}), handlers.GetMatchUserConfigHandler),
        new RouteListItem("/ryzthn/rpc/SetMatchUserConfig", protos.messages.Empty.create({}), handlers.SetMatchUserConfigHandler),
        new RouteListItem("/ryzthn/rpc/GetLobbyConfig", protos.messages.GetLobbyConfigResult.create({}), handlers.GetLobbyConfigHandler),
        new RouteListItem("/ryzthn/rpc/SetLobbyConfig", protos.messages.Empty.create({}), handlers.SetLobbyConfigHandler),
        new RouteListItem("/ryzthn/rpc/ListFeatureDefinitions", protos.messages.ListFeatureDefinitionsResult.create({}), handlers.ListFeatureDefinitionsHandler),
        new RouteListItem("/ryzthn/rpc/SetFeatureDefinition", protos.messages.Empty.create({}), handlers.SetFeatureDefinitionHandler),
        new RouteListItem("/ryzthn/rpc/DeleteFeatureDefinition", protos.messages.Empty.create({}), handlers.DeleteFeatureDefinitionHandler),
        new RouteListItem("/ryzthn/rpc/ListFeatureRules", protos.messages.ListFeatureRulesResult.create({}), handlers.ListFeatureRulesHandler),
        new RouteListItem("/ryzthn/rpc/GetActiveFeatures", protos.messages.GetActiveFeaturesResult.create({}), handlers.GetActiveFeaturesHandler),
        new RouteListItem("/ryzthn/rpc/CreateFeatureRule", protos.messages.Empty.create({}), handlers.CreateFeatureRuleHandler),
        new RouteListItem("/ryzthn/rpc/UpdateFeatureRule", protos.messages.Empty.create({}), handlers.UpdateFeatureRuleHandler),
        new RouteListItem("/ryzthn/rpc/DeleteFeatureRule", protos.messages.Empty.create({}), handlers.DeleteFeatureRuleHandler),
        new RouteListItem("/ryzthn/rpc/GetMatchQueueUsers", protos.messages.GetMatchQueueUsersResult.create({}), handlers.GetMatchQueueUsersHandler),
        new RouteListItem("/ryzthn/rpc/GetLobbies", protos.messages.GetLobbiesResult.create({}), handlers.GetLobbiesHandler),
        new RouteListItem("/ryzthn/rpc/GetLobby", protos.messages.GetLobbyResult.create({}), handlers.GetLobbyHandler),
        new RouteListItem("/ryzthn/rpc/GetActiveMatches", protos.messages.GetActiveMatchesResult.create({}), handlers.GetActiveMatchesHandler),
        new RouteListItem("/ryzthn/rpc/GetActiveMatch", protos.messages.GetActiveMatchResult.create({}), handlers.GetActiveMatchHandler),
        new RouteListItem("/ryzthn/rpc/GetRecentMatches", protos.messages.GetRecentMatchesResult.create({}), handlers.GetRecentMatchesHandler),
        new RouteListItem("/ryzthn/rpc/GetMatchDetail", protos.messages.GetMatchDetailResult.create({}), handlers.GetMatchDetailHandler),
        new RouteListItem("/ryzthn/rpc/GetPlayerDetail", protos.messages.GetPlayerDetailResult.create({}), handlers.GetPlayerDetailHandler),
        new RouteListItem("/ryzthn/rpc/ListDesyncs", protos.messages.ListDesyncsResult.create({}), handlers.ListDesyncsHandler),
        new RouteListItem("/ryzthn/rpc/ListCrashes", protos.messages.ListCrashesResult.create({}), handlers.ListCrashesHandler),
        new RouteListItem("/ryzthn/rpc/ListCrashBuildIdentifiers", protos.messages.ListCrashBuildIdentifiersResult.create({}), handlers.ListCrashBuildIdentifiersHandler),
        new RouteListItem("/ryzthn/rpc/ListCrashCollections", protos.messages.ListCrashCollectionsResult.create({}), handlers.ListCrashCollectionsHandler),
        new RouteListItem("/ryzthn/rpc/SearchPurchaseOrders", protos.messages.SearchPurchaseOrdersResult.create({}), handlers.SearchPurchaseOrdersHandler),
        new RouteListItem("/ryzthn/rpc/SyncPurchaseOrder", protos.messages.Empty.create({}), handlers.SyncPurchaseOrderHandler),
        new RouteListItem("/ryzthn/rpc/VoidPurchaseOrder", protos.messages.Empty.create({}), handlers.VoidPurchaseOrderHandler),
        new RouteListItem("/ryzthn/rpc/RefundPurchaseOrder", protos.messages.Empty.create({}), handlers.RefundPurchaseOrderHandler),
        new RouteListItem("/ryzthn/rpc/CountUsers", protos.messages.UserCountStats.create({}), handlers.CountUsersHandler),
        new RouteListItem("/ryzthn/rpc/GetSessions", protos.messages.GetSessionsResult.create({}), handlers.GetSessionsHandler),
        new RouteListItem("/ryzthn/rpc/GetCharacterUsage", protos.messages.GetCharacterUsageResult.create({}), handlers.GetCharacterUsageHandler),
        new RouteListItem("/ryzthn/rpc/CheckHandle", protos.messages.Empty.create({}), handlers.CheckHandleHandler),
        new RouteListItem("/ryzthn/rpc/RegisterUser", protos.messages.Empty.create({}), handlers.RegisterUserHandler),
        new RouteListItem("/ryzthn/rpc/ValidateUser", protos.messages.UserInfo.create({}), handlers.ValidateUserHandler),
        new RouteListItem("/ryzthn/rpc/GetSecretQuestion", protos.messages.GetSecretQuestionResult.create({}), handlers.GetSecretQuestionHandler),
        new RouteListItem("/ryzthn/rpc/SendPasswordResetEmail", protos.messages.Empty.create({}), handlers.SendPasswordResetEmailHandler),
        new RouteListItem("/ryzthn/rpc/VerifyResetPasswordCode", protos.messages.Empty.create({}), handlers.VerifyResetPasswordCodeHandler),
        new RouteListItem("/ryzthn/rpc/ResetPassword", protos.messages.Empty.create({}), handlers.ResetPasswordHandler),
        new RouteListItem("/ryzthn/rpc/GetUserInfo", protos.messages.UserInfo.create({}), handlers.GetUserInfoHandler),
        new RouteListItem("/ryzthn/rpc/ResendValidationEmail", protos.messages.Empty.create({}), handlers.ResendValidationEmailHandler),
        new RouteListItem("/ryzthn/rpc/SetLocale", protos.messages.Empty.create({}), handlers.SetLocaleHandler),
        new RouteListItem("/ryzthn/rpc/SetContactAddress", protos.messages.Empty.create({}), handlers.SetContactAddressHandler),
        new RouteListItem("/ryzthn/rpc/GetUserPrefs", protos.messages.UserPrefs.create({}), handlers.GetUserPrefsHandler),
        new RouteListItem("/ryzthn/rpc/SetUserPrefs", protos.messages.Empty.create({}), handlers.SetUserPrefsHandler),
        new RouteListItem("/ryzthn/rpc/ChangePassword", protos.messages.Empty.create({}), handlers.ChangePasswordHandler),
        new RouteListItem("/ryzthn/rpc/ChangeEmailAddress", protos.messages.Empty.create({}), handlers.ChangeEmailAddressHandler),
        new RouteListItem("/ryzthn/rpc/RedeemAccessCode", protos.messages.Empty.create({}), handlers.RedeemAccessCodeHandler),
        new RouteListItem("/ryzthn/rpc/CrashReport", protos.messages.Empty.create({}), handlers.CrashReportHandler),
        new RouteListItem("/ryzthn/rpc/EventPing", protos.messages.Empty.create({}), handlers.EventPingHandler),
        new RouteListItem("/ryzthn/rpc/CreateLobby", protos.messages.Empty.create({}), handlers.CreateLobbyHandler),
        new RouteListItem("/ryzthn/rpc/GetLobbyJoinCode", protos.messages.GetLobbyJoinCodeResult.create({}), handlers.GetLobbyJoinCodeHandler),
        new RouteListItem("/ryzthn/rpc/JoinLobbyByCode", protos.messages.Empty.create({}), handlers.JoinLobbyByCodeHandler),
        new RouteListItem("/ryzthn/rpc/LeaveLobby", protos.messages.Empty.create({}), handlers.LeaveLobbyHandler),
        new RouteListItem("/ryzthn/rpc/LobbySetReady", protos.messages.Empty.create({}), handlers.LobbySetReadyHandler),
        new RouteListItem("/ryzthn/rpc/LobbySetOwner", protos.messages.Empty.create({}), handlers.LobbySetOwnerHandler),
        new RouteListItem("/ryzthn/rpc/LobbySetGameOptions", protos.messages.Empty.create({}), handlers.LobbySetGameOptionsHandler),
        new RouteListItem("/ryzthn/rpc/LobbyBanUser", protos.messages.Empty.create({}), handlers.LobbyBanUserHandler),
        new RouteListItem("/ryzthn/rpc/LobbyRemoveUser", protos.messages.Empty.create({}), handlers.LobbyRemoveUserHandler),
        new RouteListItem("/ryzthn/rpc/GetGameProfile", protos.messages.GameProfile.create({}), handlers.GetGameProfileHandler),
        new RouteListItem("/ryzthn/rpc/PingTest", protos.messages.PingTestResult.create({}), handlers.PingTestHandler),
        new RouteListItem("/ryzthn/rpc/GetMatch", protos.messages.Empty.create({}), handlers.GetMatchHandler),
        new RouteListItem("/ryzthn/rpc/ResumeGetMatch", protos.messages.Empty.create({}), handlers.ResumeGetMatchHandler),
        new RouteListItem("/ryzthn/rpc/CancelGetMatch", protos.messages.Empty.create({}), handlers.CancelGetMatchHandler),
        new RouteListItem("/ryzthn/rpc/ResetGame", protos.messages.Empty.create({}), handlers.ResetGameHandler),
        new RouteListItem("/ryzthn/rpc/GetGameReplayRecord", protos.messages.GetGameReplayRecordResult.create({}), handlers.GetGameReplayRecordHandler),
        new RouteListItem("/ryzthn/rpc/DesyncReport", protos.messages.Empty.create({}), handlers.DesyncReportHandler),
        new RouteListItem("/ryzthn/rpc/UpdatePlayerPreferences", protos.messages.Empty.create({}), handlers.UpdatePlayerPreferencesHandler),
        new RouteListItem("/ryzthn/rpc/GetPlayerStats", protos.messages.GetPlayerStatsResult.create({}), handlers.GetPlayerStatsHandler),
        new RouteListItem("/ryzthn/rpc/GetRecentGames", protos.messages.GetRecentGamesResult.create({}), handlers.GetRecentGamesHandler),
        new RouteListItem("/ryzthn/rpc/Login", protos.messages.LoginRequest.create({
            // Either handle or e-mail address can be used.
            login: "1",
            password: "2",
            // Client build.  May require certain version to login.
            buildVersion: "5",
        }), handlers.LoginHandler),
        new RouteListItem("/ryzthn/rpc/GetGameSessionTicket", protos.messages.GetGameSessionTicketResult.create({}), handlers.GetGameSessionTicketHandler),
        new RouteListItem("/ryzthn/rpc/RedeemGameSessionTicket", protos.messages.Empty.create({}), handlers.RedeemGameSessionTicketHandler),
        new RouteListItem("/ryzthn/rpc/Logout", protos.messages.Empty.create({}), handlers.LogoutHandler),
        new RouteListItem("/ryzthn/rpc/GetStoredPaymentMethods", protos.messages.GetStoredPaymentMethodsResult.create({}), handlers.GetStoredPaymentMethodsHandler),
        new RouteListItem("/ryzthn/rpc/CreateStoredPaymentMethod", protos.messages.Empty.create({}), handlers.CreateStoredPaymentMethodHandler),
        new RouteListItem("/ryzthn/rpc/UpdateStoredPaymentMethod", protos.messages.Empty.create({}), handlers.UpdateStoredPaymentMethodHandler),
        new RouteListItem("/ryzthn/rpc/SetDefaultStoredPaymentMethod", protos.messages.Empty.create({}), handlers.SetDefaultStoredPaymentMethodHandler),
        new RouteListItem("/ryzthn/rpc/RemoveStoredPaymentMethod", protos.messages.Empty.create({}), handlers.RemoveStoredPaymentMethodHandler),
        new RouteListItem("/ryzthn/rpc/SubmitPurchaseOrder", protos.messages.SubmitPurchaseOrderResult.create({}), handlers.SubmitPurchaseOrderHandler),
        new RouteListItem("/ryzthn/rpc/GetPurchaseOrder", protos.messages.PurchaseOrder.create({}), handlers.GetPurchaseOrderHandler),
        new RouteListItem("/ryzthn/rpc/GetAccountOrderHistory", protos.messages.GetAccountOrderHistoryResult.create({}), handlers.GetAccountOrderHistoryHandler),
        new RouteListItem("/ryzthn/rpc/GetAccountBalanceHistory", protos.messages.GetAccountBalanceHistoryResult.create({}), handlers.GetAccountBalanceHistoryHandler),
        new RouteListItem("/ryzthn/rpc/GetAccountBalance", protos.messages.GetAccountBalanceResult.create({}), handlers.GetAccountBalanceHandler),
    ];
}
exports.onProtosLoad = onProtosLoad;
function request(route) {
    console.log(route.data);
    // const final = createResultPayload(route.data.$type.encode(route.data).finish());
    var final = route.data.$type.encode(route.data).finish();
    node_fetch_1.default("https://localhost:" + (getPort() || 8000) + route.url, {
        "method": "POST",
        "body": JSON.stringify(Array.from(final))
    })
        .then(function (res) { return route.handler(res); })
        .catch(function (e) {
        console.error("Could not complete the request. " + e);
    });
}
exports.request = request;
function createResultPayload(mainDataEncoded) {
    var ResultPayload = {
        result: protos.enums.Status.values.S_SUCCESS,
        content: mainDataEncoded
    };
    var err = protos.messages.Result.verify(ResultPayload);
    if (err) {
        console.error(err);
        return;
    }
    var resultData = protos.messages.Result.create(ResultPayload);
    var final = protos.messages.Result.encode(resultData).finish();
    return final;
}
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

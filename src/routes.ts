import fetch, { Response } from "node-fetch";
import * as handlers from "./handlers";
import { Message } from "protobufjs";
import { Protos } from "./pb-handlers";

let protos: Protos = null;

export default function getProtos(p: Protos) {
    protos = p;
    onProtosLoad();
}

export class RouteListItem {
    url: string;
    handler: Function;
    data: Message<{}>

    constructor(url: string, data: Message<{}>, handler: Function) {
        this.url = url;
        this.data = data;
        this.handler = handler;
    }
}

export let listOfRoutes: RouteListItem[] = [];

export function onProtosLoad() {
    listOfRoutes = [
        // new RouteListItem('/ryzthn/rpc/LookupUser', protos.messages.LookupUser.create({}), handlers.LookupUserHandler),
        // new RouteListItem('/ryzthn/rpc/SearchUsers', protos.messages.SearchUsers.create({}), handlers.SearchUsersHandler),
        // new RouteListItem('/ryzthn/rpc/CreateUser', protos.messages.CreateUser.create({}), handlers.CreateUserHandler),
        // new RouteListItem('/ryzthn/rpc/UpdateUser', protos.messages.UpdateUser.create({}), handlers.UpdateUserHandler),
        // new RouteListItem('/ryzthn/rpc/SetUserContactAddress', protos.messages.SetUserContactAddress.create({}), handlers.SetUserContactAddressHandler),
        // new RouteListItem('/ryzthn/rpc/SetUserAccess', protos.messages.SetUserAccess.create({}), handlers.SetUserAccessHandler),
        // new RouteListItem('/ryzthn/rpc/SetUserLoginStatus', protos.messages.SetUserLoginStatus.create({}), handlers.SetUserLoginStatusHandler),
        // new RouteListItem('/ryzthn/rpc/ResetUserPassword', protos.messages.ResetUserPassword.create({}), handlers.ResetUserPasswordHandler),
        // new RouteListItem('/ryzthn/rpc/NukeHandle', protos.messages.NukeHandle.create({}), handlers.NukeHandleHandler),
        // new RouteListItem('/ryzthn/rpc/GetHandleHistory', protos.messages.GetHandleHistory.create({}), handlers.GetHandleHistoryHandler),
        // new RouteListItem('/ryzthn/rpc/SendUserEmailNotification', protos.messages.SendUserEmailNotification.create({}), handlers.SendUserEmailNotificationHandler),
        // new RouteListItem('/ryzthn/rpc/SearchAuditHistory', protos.messages.SearchAuditHistory.create({}), handlers.SearchAuditHistoryHandler),
        // new RouteListItem('/ryzthn/rpc/GetAppConfig', protos.messages.GetAppConfig.create({}), handlers.GetAppConfigHandler),
        // new RouteListItem('/ryzthn/rpc/GetGlobalConfig', protos.messages.GetGlobalConfig.create({}), handlers.GetGlobalConfigHandler),
        // new RouteListItem('/ryzthn/rpc/SetGlobalConfig', protos.messages.SetGlobalConfig.create({}), handlers.SetGlobalConfigHandler),
        // new RouteListItem('/ryzthn/rpc/GetMatchQueueConfig', protos.messages.GetMatchQueueConfig.create({}), handlers.GetMatchQueueConfigHandler),
        // new RouteListItem('/ryzthn/rpc/SetMatchQueueConfig', protos.messages.SetMatchQueueConfig.create({}), handlers.SetMatchQueueConfigHandler),
        // new RouteListItem('/ryzthn/rpc/GetMatchUserConfig', protos.messages.GetMatchUserConfig.create({}), handlers.GetMatchUserConfigHandler),
        // new RouteListItem('/ryzthn/rpc/SetMatchUserConfig', protos.messages.SetMatchUserConfig.create({}), handlers.SetMatchUserConfigHandler),
        // new RouteListItem('/ryzthn/rpc/GetLobbyConfig', protos.messages.GetLobbyConfig.create({}), handlers.GetLobbyConfigHandler),
        // new RouteListItem('/ryzthn/rpc/SetLobbyConfig', protos.messages.SetLobbyConfig.create({}), handlers.SetLobbyConfigHandler),
        // new RouteListItem('/ryzthn/rpc/ListFeatureDefinitions', protos.messages.ListFeatureDefinitions.create({}), handlers.ListFeatureDefinitionsHandler),
        // new RouteListItem('/ryzthn/rpc/SetFeatureDefinition', protos.messages.SetFeatureDefinition.create({}), handlers.SetFeatureDefinitionHandler),
        // new RouteListItem('/ryzthn/rpc/DeleteFeatureDefinition', protos.messages.DeleteFeatureDefinition.create({}), handlers.DeleteFeatureDefinitionHandler),
        // new RouteListItem('/ryzthn/rpc/ListFeatureRules', protos.messages.ListFeatureRules.create({}), handlers.ListFeatureRulesHandler),
        // new RouteListItem('/ryzthn/rpc/GetActiveFeatures', protos.messages.GetActiveFeatures.create({}), handlers.GetActiveFeaturesHandler),
        // new RouteListItem('/ryzthn/rpc/CreateFeatureRule', protos.messages.CreateFeatureRule.create({}), handlers.CreateFeatureRuleHandler),
        // new RouteListItem('/ryzthn/rpc/UpdateFeatureRule', protos.messages.UpdateFeatureRule.create({}), handlers.UpdateFeatureRuleHandler),
        // new RouteListItem('/ryzthn/rpc/DeleteFeatureRule', protos.messages.DeleteFeatureRule.create({}), handlers.DeleteFeatureRuleHandler),
        // new RouteListItem('/ryzthn/rpc/GetMatchQueueUsers', protos.messages.GetMatchQueueUsers.create({}), handlers.GetMatchQueueUsersHandler),
        // new RouteListItem('/ryzthn/rpc/GetLobbies', protos.messages.GetLobbies.create({}), handlers.GetLobbiesHandler),
        // new RouteListItem('/ryzthn/rpc/GetLobby', protos.messages.GetLobby.create({}), handlers.GetLobbyHandler),
        // new RouteListItem('/ryzthn/rpc/GetActiveMatches', protos.messages.GetActiveMatches.create({}), handlers.GetActiveMatchesHandler),
        // new RouteListItem('/ryzthn/rpc/GetActiveMatch', protos.messages.GetActiveMatch.create({}), handlers.GetActiveMatchHandler),
        // new RouteListItem('/ryzthn/rpc/GetRecentMatches', protos.messages.GetRecentMatches.create({}), handlers.GetRecentMatchesHandler),
        // new RouteListItem('/ryzthn/rpc/GetMatchDetail', protos.messages.GetMatchDetail.create({}), handlers.GetMatchDetailHandler),
        // new RouteListItem('/ryzthn/rpc/GetPlayerDetail', protos.messages.GetPlayerDetail.create({}), handlers.GetPlayerDetailHandler),
        // new RouteListItem('/ryzthn/rpc/ListDesyncs', protos.messages.ListDesyncs.create({}), handlers.ListDesyncsHandler),
        // new RouteListItem('/ryzthn/rpc/ListCrashes', protos.messages.ListCrashes.create({}), handlers.ListCrashesHandler),
        // new RouteListItem('/ryzthn/rpc/ListCrashBuildIdentifiers', protos.messages.ListCrashBuildIdentifiers.create({}), handlers.ListCrashBuildIdentifiersHandler),
        // new RouteListItem('/ryzthn/rpc/ListCrashCollections', protos.messages.ListCrashCollections.create({}), handlers.ListCrashCollectionsHandler),
        // new RouteListItem('/ryzthn/rpc/SearchPurchaseOrders', protos.messages.SearchPurchaseOrders.create({}), handlers.SearchPurchaseOrdersHandler),
        // new RouteListItem('/ryzthn/rpc/SyncPurchaseOrder', protos.messages.SyncPurchaseOrder.create({}), handlers.SyncPurchaseOrderHandler),
        // new RouteListItem('/ryzthn/rpc/VoidPurchaseOrder', protos.messages.VoidPurchaseOrder.create({}), handlers.VoidPurchaseOrderHandler),
        // new RouteListItem('/ryzthn/rpc/RefundPurchaseOrder', protos.messages.RefundPurchaseOrder.create({}), handlers.RefundPurchaseOrderHandler),
        // new RouteListItem('/ryzthn/rpc/CountUsers', protos.messages.CountUsers.create({}), handlers.CountUsersHandler),
        // new RouteListItem('/ryzthn/rpc/GetSessions', protos.messages.GetSessions.create({}), handlers.GetSessionsHandler),
        // new RouteListItem('/ryzthn/rpc/GetCharacterUsage', protos.messages.GetCharacterUsage.create({}), handlers.GetCharacterUsageHandler),
        // new RouteListItem('/ryzthn/rpc/CheckHandle', protos.messages.CheckHandle.create({}), handlers.CheckHandleHandler),
        // new RouteListItem('/ryzthn/rpc/RegisterUser', protos.messages.RegisterUser.create({}), handlers.RegisterUserHandler),
        // new RouteListItem('/ryzthn/rpc/ValidateUser', protos.messages.ValidateUser.create({}), handlers.ValidateUserHandler),
        // new RouteListItem('/ryzthn/rpc/GetSecretQuestion', protos.messages.GetSecretQuestion.create({}), handlers.GetSecretQuestionHandler),
        // new RouteListItem('/ryzthn/rpc/SendPasswordResetEmail', protos.messages.SendPasswordResetEmail.create({}), handlers.SendPasswordResetEmailHandler),
        // new RouteListItem('/ryzthn/rpc/VerifyResetPasswordCode', protos.messages.VerifyResetPasswordCode.create({}), handlers.VerifyResetPasswordCodeHandler),
        // new RouteListItem('/ryzthn/rpc/ResetPassword', protos.messages.ResetPassword.create({}), handlers.ResetPasswordHandler),
        // new RouteListItem('/ryzthn/rpc/GetUserInfo', protos.messages.GetUserInfo.create({}), handlers.GetUserInfoHandler),
        // new RouteListItem('/ryzthn/rpc/ResendValidationEmail', protos.messages.ResendValidationEmail.create({}), handlers.ResendValidationEmailHandler),
        // new RouteListItem('/ryzthn/rpc/SetLocale', protos.messages.SetLocale.create({}), handlers.SetLocaleHandler),
        // new RouteListItem('/ryzthn/rpc/SetContactAddress', protos.messages.SetContactAddress.create({}), handlers.SetContactAddressHandler),
        // new RouteListItem('/ryzthn/rpc/GetUserPrefs', protos.messages.GetUserPrefs.create({}), handlers.GetUserPrefsHandler),
        // new RouteListItem('/ryzthn/rpc/SetUserPrefs', protos.messages.SetUserPrefs.create({}), handlers.SetUserPrefsHandler),
        // new RouteListItem('/ryzthn/rpc/ChangePassword', protos.messages.ChangePassword.create({}), handlers.ChangePasswordHandler),
        // new RouteListItem('/ryzthn/rpc/ChangeEmailAddress', protos.messages.ChangeEmailAddress.create({}), handlers.ChangeEmailAddressHandler),
        // new RouteListItem('/ryzthn/rpc/RedeemAccessCode', protos.messages.RedeemAccessCode.create({}), handlers.RedeemAccessCodeHandler),
        // new RouteListItem('/ryzthn/rpc/CrashReport', protos.messages.CrashReport.create({}), handlers.CrashReportHandler),
        // new RouteListItem('/ryzthn/rpc/EventPing', protos.messages.EventPing.create({}), handlers.EventPingHandler),
        // new RouteListItem('/ryzthn/rpc/CreateLobby', protos.messages.CreateLobby.create({}), handlers.CreateLobbyHandler),
        // new RouteListItem('/ryzthn/rpc/GetLobbyJoinCode', protos.messages.GetLobbyJoinCode.create({}), handlers.GetLobbyJoinCodeHandler),
        // new RouteListItem('/ryzthn/rpc/JoinLobbyByCode', protos.messages.JoinLobbyByCode.create({}), handlers.JoinLobbyByCodeHandler),
        // new RouteListItem('/ryzthn/rpc/LeaveLobby', protos.messages.LeaveLobby.create({}), handlers.LeaveLobbyHandler),
        // new RouteListItem('/ryzthn/rpc/LobbySetReady', protos.messages.LobbySetReady.create({}), handlers.LobbySetReadyHandler),
        // new RouteListItem('/ryzthn/rpc/LobbySetOwner', protos.messages.LobbySetOwner.create({}), handlers.LobbySetOwnerHandler),
        // new RouteListItem('/ryzthn/rpc/LobbySetGameOptions', protos.messages.LobbySetGameOptions.create({}), handlers.LobbySetGameOptionsHandler),
        // new RouteListItem('/ryzthn/rpc/LobbyBanUser', protos.messages.LobbyBanUser.create({}), handlers.LobbyBanUserHandler),
        // new RouteListItem('/ryzthn/rpc/LobbyRemoveUser', protos.messages.LobbyRemoveUser.create({}), handlers.LobbyRemoveUserHandler),
        // new RouteListItem('/ryzthn/rpc/GetGameProfile', protos.messages.GetGameProfile.create({}), handlers.GetGameProfileHandler),
        // new RouteListItem('/ryzthn/rpc/PingTest', protos.messages.PingTest.create({}), handlers.PingTestHandler),
        // new RouteListItem('/ryzthn/rpc/GetMatch', protos.messages.GetMatch.create({}), handlers.GetMatchHandler),
        // new RouteListItem('/ryzthn/rpc/ResumeGetMatch', protos.messages.ResumeGetMatch.create({}), handlers.ResumeGetMatchHandler),
        // new RouteListItem('/ryzthn/rpc/CancelGetMatch', protos.messages.CancelGetMatch.create({}), handlers.CancelGetMatchHandler),
        // new RouteListItem('/ryzthn/rpc/ResetGame', protos.messages.ResetGame.create({}), handlers.ResetGameHandler),
        // new RouteListItem('/ryzthn/rpc/GetGameReplayRecord', protos.messages.GetGameReplayRecord.create({}), handlers.GetGameReplayRecordHandler),
        // new RouteListItem('/ryzthn/rpc/DesyncReport', protos.messages.DesyncReport.create({}), handlers.DesyncReportHandler),
        // new RouteListItem('/ryzthn/rpc/UpdatePlayerPreferences', protos.messages.UpdatePlayerPreferences.create({}), handlers.UpdatePlayerPreferencesHandler),
        // new RouteListItem('/ryzthn/rpc/GetPlayerStats', protos.messages.GetPlayerStats.create({}), handlers.GetPlayerStatsHandler),
        // new RouteListItem('/ryzthn/rpc/GetRecentGames', protos.messages.GetRecentGames.create({}), handlers.GetRecentGamesHandler),
        new RouteListItem('/ryzthn/rpc/Login', protos.messages.LoginRequest.create({
            // Either handle or e-mail address can be used.
            login: "1",
            password: "2",
            // Client build.  May require certain version to login.
            build_version: "5",
        }), handlers.LoginHandler),
        // new RouteListItem('/ryzthn/rpc/GetGameSessionTicket', protos.messages.GetGameSessionTicket.create({}), handlers.GetGameSessionTicketHandler),
        // new RouteListItem('/ryzthn/rpc/RedeemGameSessionTicket', protos.messages.RedeemGameSessionTicket.create({}), handlers.RedeemGameSessionTicketHandler),
        // new RouteListItem('/ryzthn/rpc/Logout', protos.messages.Logout.create({}), handlers.LogoutHandler),
        // new RouteListItem('/ryzthn/rpc/GetStoredPaymentMethods', protos.messages.GetStoredPaymentMethods.create({}), handlers.GetStoredPaymentMethodsHandler),
        // new RouteListItem('/ryzthn/rpc/CreateStoredPaymentMethod', protos.messages.CreateStoredPaymentMethod.create({}), handlers.CreateStoredPaymentMethodHandler),
        // new RouteListItem('/ryzthn/rpc/UpdateStoredPaymentMethod', protos.messages.UpdateStoredPaymentMethod.create({}), handlers.UpdateStoredPaymentMethodHandler),
        // new RouteListItem('/ryzthn/rpc/SetDefaultStoredPaymentMethod', protos.messages.SetDefaultStoredPaymentMethod.create({}), handlers.SetDefaultStoredPaymentMethodHandler),
        // new RouteListItem('/ryzthn/rpc/RemoveStoredPaymentMethod', protos.messages.RemoveStoredPaymentMethod.create({}), handlers.RemoveStoredPaymentMethodHandler),
        // new RouteListItem('/ryzthn/rpc/SubmitPurchaseOrder', protos.messages.SubmitPurchaseOrder.create({}), handlers.SubmitPurchaseOrderHandler),
        // new RouteListItem('/ryzthn/rpc/GetPurchaseOrder', protos.messages.GetPurchaseOrder.create({}), handlers.GetPurchaseOrderHandler),
        // new RouteListItem('/ryzthn/rpc/GetAccountOrderHistory', protos.messages.GetAccountOrderHistory.create({}), handlers.GetAccountOrderHistoryHandler),
        // new RouteListItem('/ryzthn/rpc/GetAccountBalanceHistory', protos.messages.GetAccountBalanceHistory.create({}), handlers.GetAccountBalanceHistoryHandler),
        // new RouteListItem('/ryzthn/rpc/GetAccountBalance', protos.messages.GetAccountBalance.create({}), handlers.GetAccountBalanceHandler),
        // new RouteListItem('/ryzthn/rpc/GetUserCount', protos.messages.GetUserCount.create({}), handlers.GetUserCountHandler),
        // new RouteListItem('/ryzthn/rpc/GetUsersInRankedCount', protos.messages.GetUsersInRankedCount.create({}), handlers.GetUsersInRankedCountHandler),
    ];
}

export function request(route: RouteListItem) {
    console.log(route.data);

    const final = createResultPayload(route.data.$type.encode(route.data).finish());

    fetch(`https://localhost:${getPort() || 8000}${route.url}`, {
        "method": "POST",
        "body": JSON.stringify(Array.from(final))
    })
    .then((res: Response) => route.handler(res))
    .catch(e => {
        console.error(`Could not complete the request. ${e}`);
    });
}

function createResultPayload(mainDataEncoded: Uint8Array): Uint8Array {
    const ResultPayload = {
        result: protos.enums.Status.values.S_SUCCESS,
        content: mainDataEncoded
    };

    const err = protos.messages.Result.verify(ResultPayload)
    if (err) {
        console.error(err);
        return;
    }

    var resultData = protos.messages.Result.create(ResultPayload);
    var final = protos.messages.Result.encode(resultData).finish();

    return final;
}

function parseURLSearch(): Record<string, string> {
    const searchValues: Record<string, string> = {};

    location.search.replace(/^./, "")
    .split("&")
    .map(pair => {
        const pairArray = pair.split("=");

        searchValues[pairArray[0]] = pairArray[1];
    });

    return searchValues;
}

function getPort() {
    return document.querySelector<HTMLInputElement>(".port-input").value;
}
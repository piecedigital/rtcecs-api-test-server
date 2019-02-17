"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pb = require("protobufjs");
var protos = null;
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
    res.json()
        .then(function (data) {
        console.log(data);
        var r = new pb.Reader(data);
        console.log(r);
        var x = protos.messages.Result.decode(r);
        console.log(x);
    })
        .catch(function (e) { return console.error(e); });
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
function InitHandlers(p) {
    protos = p;
}
exports.default = InitHandlers;

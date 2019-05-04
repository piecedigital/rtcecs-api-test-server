"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pb = require("protobufjs");
var protos = null;
function GetEventHandler(req, res) {
    console.log("GetEventHandler");
    return "GetEventHandler";
}
exports.GetEventHandler = GetEventHandler;
;
function LookupUserHandler(req, res) {
    console.log("LookupUserHandler");
    return "LookupUserHandler";
}
exports.LookupUserHandler = LookupUserHandler;
;
function SearchUsersHandler(req, res) {
    console.log("SearchUsersHandler");
    return "SearchUsersHandler";
}
exports.SearchUsersHandler = SearchUsersHandler;
;
function CreateUserHandler(req, res) {
    console.log("CreateUserHandler");
    return "CreateUserHandler";
}
exports.CreateUserHandler = CreateUserHandler;
;
function UpdateUserHandler(req, res) {
    console.log("UpdateUserHandler");
    return "UpdateUserHandler";
}
exports.UpdateUserHandler = UpdateUserHandler;
;
function SetUserContactAddressHandler(req, res) {
    console.log("SetUserContactAddressHandler");
    return "SetUserContactAddressHandler";
}
exports.SetUserContactAddressHandler = SetUserContactAddressHandler;
;
function SetUserAccessHandler(req, res) {
    console.log("SetUserAccessHandler");
    return "SetUserAccessHandler";
}
exports.SetUserAccessHandler = SetUserAccessHandler;
;
function SetUserLoginStatusHandler(req, res) {
    console.log("SetUserLoginStatusHandler");
    return "SetUserLoginStatusHandler";
}
exports.SetUserLoginStatusHandler = SetUserLoginStatusHandler;
;
function ResetUserPasswordHandler(req, res) {
    console.log("ResetUserPasswordHandler");
    return "ResetUserPasswordHandler";
}
exports.ResetUserPasswordHandler = ResetUserPasswordHandler;
;
function NukeHandleHandler(req, res) {
    console.log("NukeHandleHandler");
    return "NukeHandleHandler";
}
exports.NukeHandleHandler = NukeHandleHandler;
;
function GetHandleHistoryHandler(req, res) {
    console.log("GetHandleHistoryHandler");
    return "GetHandleHistoryHandler";
}
exports.GetHandleHistoryHandler = GetHandleHistoryHandler;
;
function SendUserEmailNotificationHandler(req, res) {
    console.log("SendUserEmailNotificationHandler");
    return "SendUserEmailNotificationHandler";
}
exports.SendUserEmailNotificationHandler = SendUserEmailNotificationHandler;
;
function SearchAuditHistoryHandler(req, res) {
    console.log("SearchAuditHistoryHandler");
    return "SearchAuditHistoryHandler";
}
exports.SearchAuditHistoryHandler = SearchAuditHistoryHandler;
;
function GetAppConfigHandler(req, res) {
    console.log("GetAppConfigHandler");
    return "GetAppConfigHandler";
}
exports.GetAppConfigHandler = GetAppConfigHandler;
;
function GetGlobalConfigHandler(req, res) {
    console.log("GetGlobalConfigHandler");
    return "GetGlobalConfigHandler";
}
exports.GetGlobalConfigHandler = GetGlobalConfigHandler;
;
function SetGlobalConfigHandler(req, res) {
    console.log("SetGlobalConfigHandler");
    return "SetGlobalConfigHandler";
}
exports.SetGlobalConfigHandler = SetGlobalConfigHandler;
;
function GetMatchQueueConfigHandler(req, res) {
    console.log("GetMatchQueueConfigHandler");
    return "GetMatchQueueConfigHandler";
}
exports.GetMatchQueueConfigHandler = GetMatchQueueConfigHandler;
;
function SetMatchQueueConfigHandler(req, res) {
    console.log("SetMatchQueueConfigHandler");
    return "SetMatchQueueConfigHandler";
}
exports.SetMatchQueueConfigHandler = SetMatchQueueConfigHandler;
;
function GetMatchUserConfigHandler(req, res) {
    console.log("GetMatchUserConfigHandler");
    return "GetMatchUserConfigHandler";
}
exports.GetMatchUserConfigHandler = GetMatchUserConfigHandler;
;
function SetMatchUserConfigHandler(req, res) {
    console.log("SetMatchUserConfigHandler");
    return "SetMatchUserConfigHandler";
}
exports.SetMatchUserConfigHandler = SetMatchUserConfigHandler;
;
function GetLobbyConfigHandler(req, res) {
    console.log("GetLobbyConfigHandler");
    return "GetLobbyConfigHandler";
}
exports.GetLobbyConfigHandler = GetLobbyConfigHandler;
;
function SetLobbyConfigHandler(req, res) {
    console.log("SetLobbyConfigHandler");
    return "SetLobbyConfigHandler";
}
exports.SetLobbyConfigHandler = SetLobbyConfigHandler;
;
function ListFeatureDefinitionsHandler(req, res) {
    console.log("ListFeatureDefinitionsHandler");
    return "ListFeatureDefinitionsHandler";
}
exports.ListFeatureDefinitionsHandler = ListFeatureDefinitionsHandler;
;
function SetFeatureDefinitionHandler(req, res) {
    console.log("SetFeatureDefinitionHandler");
    return "SetFeatureDefinitionHandler";
}
exports.SetFeatureDefinitionHandler = SetFeatureDefinitionHandler;
;
function DeleteFeatureDefinitionHandler(req, res) {
    console.log("DeleteFeatureDefinitionHandler");
    return "DeleteFeatureDefinitionHandler";
}
exports.DeleteFeatureDefinitionHandler = DeleteFeatureDefinitionHandler;
;
function ListFeatureRulesHandler(req, res) {
    console.log("ListFeatureRulesHandler");
    return "ListFeatureRulesHandler";
}
exports.ListFeatureRulesHandler = ListFeatureRulesHandler;
;
function GetActiveFeaturesHandler(req, res) {
    console.log("GetActiveFeaturesHandler");
    return "GetActiveFeaturesHandler";
}
exports.GetActiveFeaturesHandler = GetActiveFeaturesHandler;
;
function CreateFeatureRuleHandler(req, res) {
    console.log("CreateFeatureRuleHandler");
    return "CreateFeatureRuleHandler";
}
exports.CreateFeatureRuleHandler = CreateFeatureRuleHandler;
;
function UpdateFeatureRuleHandler(req, res) {
    console.log("UpdateFeatureRuleHandler");
    return "UpdateFeatureRuleHandler";
}
exports.UpdateFeatureRuleHandler = UpdateFeatureRuleHandler;
;
function DeleteFeatureRuleHandler(req, res) {
    console.log("DeleteFeatureRuleHandler");
    return "DeleteFeatureRuleHandler";
}
exports.DeleteFeatureRuleHandler = DeleteFeatureRuleHandler;
;
function GetMatchQueueUsersHandler(req, res) {
    console.log("GetMatchQueueUsersHandler");
    return "GetMatchQueueUsersHandler";
}
exports.GetMatchQueueUsersHandler = GetMatchQueueUsersHandler;
;
function GetLobbiesHandler(req, res) {
    console.log("GetLobbiesHandler");
    return "GetLobbiesHandler";
}
exports.GetLobbiesHandler = GetLobbiesHandler;
;
function GetLobbyHandler(req, res) {
    console.log("GetLobbyHandler");
    return "GetLobbyHandler";
}
exports.GetLobbyHandler = GetLobbyHandler;
;
function GetActiveMatchesHandler(req, res) {
    console.log("GetActiveMatchesHandler");
    return "GetActiveMatchesHandler";
}
exports.GetActiveMatchesHandler = GetActiveMatchesHandler;
;
function GetActiveMatchHandler(req, res) {
    console.log("GetActiveMatchHandler");
    return "GetActiveMatchHandler";
}
exports.GetActiveMatchHandler = GetActiveMatchHandler;
;
function GetRecentMatchesHandler(req, res) {
    console.log("GetRecentMatchesHandler");
    return "GetRecentMatchesHandler";
}
exports.GetRecentMatchesHandler = GetRecentMatchesHandler;
;
function GetMatchDetailHandler(req, res) {
    console.log("GetMatchDetailHandler");
    return "GetMatchDetailHandler";
}
exports.GetMatchDetailHandler = GetMatchDetailHandler;
;
function GetPlayerDetailHandler(req, res) {
    console.log("GetPlayerDetailHandler");
    return "GetPlayerDetailHandler";
}
exports.GetPlayerDetailHandler = GetPlayerDetailHandler;
;
function ListDesyncsHandler(req, res) {
    console.log("ListDesyncsHandler");
    return "ListDesyncsHandler";
}
exports.ListDesyncsHandler = ListDesyncsHandler;
;
function ListCrashesHandler(req, res) {
    console.log("ListCrashesHandler");
    return "ListCrashesHandler";
}
exports.ListCrashesHandler = ListCrashesHandler;
;
function ListCrashBuildIdentifiersHandler(req, res) {
    console.log("ListCrashBuildIdentifiersHandler");
    return "ListCrashBuildIdentifiersHandler";
}
exports.ListCrashBuildIdentifiersHandler = ListCrashBuildIdentifiersHandler;
;
function ListCrashCollectionsHandler(req, res) {
    console.log("ListCrashCollectionsHandler");
    return "ListCrashCollectionsHandler";
}
exports.ListCrashCollectionsHandler = ListCrashCollectionsHandler;
;
function SearchPurchaseOrdersHandler(req, res) {
    console.log("SearchPurchaseOrdersHandler");
    return "SearchPurchaseOrdersHandler";
}
exports.SearchPurchaseOrdersHandler = SearchPurchaseOrdersHandler;
;
function SyncPurchaseOrderHandler(req, res) {
    console.log("SyncPurchaseOrderHandler");
    return "SyncPurchaseOrderHandler";
}
exports.SyncPurchaseOrderHandler = SyncPurchaseOrderHandler;
;
function VoidPurchaseOrderHandler(req, res) {
    console.log("VoidPurchaseOrderHandler");
    return "VoidPurchaseOrderHandler";
}
exports.VoidPurchaseOrderHandler = VoidPurchaseOrderHandler;
;
function RefundPurchaseOrderHandler(req, res) {
    console.log("RefundPurchaseOrderHandler");
    return "RefundPurchaseOrderHandler";
}
exports.RefundPurchaseOrderHandler = RefundPurchaseOrderHandler;
;
function CountUsersHandler(req, res) {
    console.log("CountUsersHandler");
    return "CountUsersHandler";
}
exports.CountUsersHandler = CountUsersHandler;
;
function GetSessionsHandler(req, res) {
    console.log("GetSessionsHandler");
    return "GetSessionsHandler";
}
exports.GetSessionsHandler = GetSessionsHandler;
;
function GetCharacterUsageHandler(req, res) {
    console.log("GetCharacterUsageHandler");
    return "GetCharacterUsageHandler";
}
exports.GetCharacterUsageHandler = GetCharacterUsageHandler;
;
function CheckHandleHandler(req, res) {
    console.log("CheckHandleHandler");
    return "CheckHandleHandler";
}
exports.CheckHandleHandler = CheckHandleHandler;
;
function RegisterUserHandler(req, res) {
    console.log("RegisterUserHandler");
    return "RegisterUserHandler";
}
exports.RegisterUserHandler = RegisterUserHandler;
;
function ValidateUserHandler(req, res) {
    console.log("ValidateUserHandler");
    return "ValidateUserHandler";
}
exports.ValidateUserHandler = ValidateUserHandler;
;
function GetSecretQuestionHandler(req, res) {
    console.log("GetSecretQuestionHandler");
    return "GetSecretQuestionHandler";
}
exports.GetSecretQuestionHandler = GetSecretQuestionHandler;
;
function SendPasswordResetEmailHandler(req, res) {
    console.log("SendPasswordResetEmailHandler");
    return "SendPasswordResetEmailHandler";
}
exports.SendPasswordResetEmailHandler = SendPasswordResetEmailHandler;
;
function VerifyResetPasswordCodeHandler(req, res) {
    console.log("VerifyResetPasswordCodeHandler");
    return "VerifyResetPasswordCodeHandler";
}
exports.VerifyResetPasswordCodeHandler = VerifyResetPasswordCodeHandler;
;
function ResetPasswordHandler(req, res) {
    console.log("ResetPasswordHandler");
    return "ResetPasswordHandler";
}
exports.ResetPasswordHandler = ResetPasswordHandler;
;
function GetUserInfoHandler(req, res) {
    console.log("GetUserInfoHandler");
    return "GetUserInfoHandler";
}
exports.GetUserInfoHandler = GetUserInfoHandler;
;
function ResendValidationEmailHandler(req, res) {
    console.log("ResendValidationEmailHandler");
    return "ResendValidationEmailHandler";
}
exports.ResendValidationEmailHandler = ResendValidationEmailHandler;
;
function SetLocaleHandler(req, res) {
    console.log("SetLocaleHandler");
    return "SetLocaleHandler";
}
exports.SetLocaleHandler = SetLocaleHandler;
;
function SetContactAddressHandler(req, res) {
    console.log("SetContactAddressHandler");
    return "SetContactAddressHandler";
}
exports.SetContactAddressHandler = SetContactAddressHandler;
;
function GetUserPrefsHandler(req, res) {
    console.log("GetUserPrefsHandler");
    return "GetUserPrefsHandler";
}
exports.GetUserPrefsHandler = GetUserPrefsHandler;
;
function SetUserPrefsHandler(req, res) {
    console.log("SetUserPrefsHandler");
    return "SetUserPrefsHandler";
}
exports.SetUserPrefsHandler = SetUserPrefsHandler;
;
function ChangePasswordHandler(req, res) {
    console.log("ChangePasswordHandler");
    return "ChangePasswordHandler";
}
exports.ChangePasswordHandler = ChangePasswordHandler;
;
function ChangeEmailAddressHandler(req, res) {
    console.log("ChangeEmailAddressHandler");
    return "ChangeEmailAddressHandler";
}
exports.ChangeEmailAddressHandler = ChangeEmailAddressHandler;
;
function RedeemAccessCodeHandler(req, res) {
    console.log("RedeemAccessCodeHandler");
    return "RedeemAccessCodeHandler";
}
exports.RedeemAccessCodeHandler = RedeemAccessCodeHandler;
;
function CrashReportHandler(req, res) {
    console.log("CrashReportHandler");
    return "CrashReportHandler";
}
exports.CrashReportHandler = CrashReportHandler;
;
function EventPingHandler(req, res) {
    console.log("EventPingHandler");
    return "EventPingHandler";
}
exports.EventPingHandler = EventPingHandler;
;
function CreateLobbyHandler(req, res) {
    console.log("CreateLobbyHandler");
    return "CreateLobbyHandler";
}
exports.CreateLobbyHandler = CreateLobbyHandler;
;
function GetLobbyJoinCodeHandler(req, res) {
    console.log("GetLobbyJoinCodeHandler");
    return "GetLobbyJoinCodeHandler";
}
exports.GetLobbyJoinCodeHandler = GetLobbyJoinCodeHandler;
;
function JoinLobbyByCodeHandler(req, res) {
    console.log("JoinLobbyByCodeHandler");
    return "JoinLobbyByCodeHandler";
}
exports.JoinLobbyByCodeHandler = JoinLobbyByCodeHandler;
;
function LeaveLobbyHandler(req, res) {
    console.log("LeaveLobbyHandler");
    return "LeaveLobbyHandler";
}
exports.LeaveLobbyHandler = LeaveLobbyHandler;
;
function LobbySetReadyHandler(req, res) {
    console.log("LobbySetReadyHandler");
    return "LobbySetReadyHandler";
}
exports.LobbySetReadyHandler = LobbySetReadyHandler;
;
function LobbySetOwnerHandler(req, res) {
    console.log("LobbySetOwnerHandler");
    return "LobbySetOwnerHandler";
}
exports.LobbySetOwnerHandler = LobbySetOwnerHandler;
;
function LobbySetGameOptionsHandler(req, res) {
    console.log("LobbySetGameOptionsHandler");
    return "LobbySetGameOptionsHandler";
}
exports.LobbySetGameOptionsHandler = LobbySetGameOptionsHandler;
;
function LobbyBanUserHandler(req, res) {
    console.log("LobbyBanUserHandler");
    return "LobbyBanUserHandler";
}
exports.LobbyBanUserHandler = LobbyBanUserHandler;
;
function LobbyRemoveUserHandler(req, res) {
    console.log("LobbyRemoveUserHandler");
    return "LobbyRemoveUserHandler";
}
exports.LobbyRemoveUserHandler = LobbyRemoveUserHandler;
;
function GetGameProfileHandler(req, res) {
    console.log("GetGameProfileHandler");
    return "GetGameProfileHandler";
}
exports.GetGameProfileHandler = GetGameProfileHandler;
;
function PingTestHandler(req, res) {
    console.log("PingTestHandler");
    return "PingTestHandler";
}
exports.PingTestHandler = PingTestHandler;
;
function GetMatchHandler(req, res) {
    console.log("GetMatchHandler");
    return "GetMatchHandler";
}
exports.GetMatchHandler = GetMatchHandler;
;
function ResumeGetMatchHandler(req, res) {
    console.log("ResumeGetMatchHandler");
    return "ResumeGetMatchHandler";
}
exports.ResumeGetMatchHandler = ResumeGetMatchHandler;
;
function CancelGetMatchHandler(req, res) {
    console.log("CancelGetMatchHandler");
    return "CancelGetMatchHandler";
}
exports.CancelGetMatchHandler = CancelGetMatchHandler;
;
function ResetGameHandler(req, res) {
    console.log("ResetGameHandler");
    return "ResetGameHandler";
}
exports.ResetGameHandler = ResetGameHandler;
;
function GetGameReplayRecordHandler(req, res) {
    console.log("GetGameReplayRecordHandler");
    return "GetGameReplayRecordHandler";
}
exports.GetGameReplayRecordHandler = GetGameReplayRecordHandler;
;
function DesyncReportHandler(req, res) {
    console.log("DesyncReportHandler");
    return "DesyncReportHandler";
}
exports.DesyncReportHandler = DesyncReportHandler;
;
function UpdatePlayerPreferencesHandler(req, res) {
    console.log("UpdatePlayerPreferencesHandler");
    return "UpdatePlayerPreferencesHandler";
}
exports.UpdatePlayerPreferencesHandler = UpdatePlayerPreferencesHandler;
;
function GetPlayerStatsHandler(req, res) {
    console.log("GetPlayerStatsHandler");
    return "GetPlayerStatsHandler";
}
exports.GetPlayerStatsHandler = GetPlayerStatsHandler;
;
function GetRecentGamesHandler(req, res) {
    console.log("GetRecentGamesHandler");
    return "GetRecentGamesHandler";
}
exports.GetRecentGamesHandler = GetRecentGamesHandler;
;
function LoginHandler(req, res) {
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
function GetGameSessionTicketHandler(req, res) {
    console.log("GetGameSessionTicketHandler");
    return "GetGameSessionTicketHandler";
}
exports.GetGameSessionTicketHandler = GetGameSessionTicketHandler;
;
function RedeemGameSessionTicketHandler(req, res) {
    console.log("RedeemGameSessionTicketHandler");
    return "RedeemGameSessionTicketHandler";
}
exports.RedeemGameSessionTicketHandler = RedeemGameSessionTicketHandler;
;
function LogoutHandler(req, res) {
    console.log("LogoutHandler");
    return "LogoutHandler";
}
exports.LogoutHandler = LogoutHandler;
;
function GetStoredPaymentMethodsHandler(req, res) {
    console.log("GetStoredPaymentMethodsHandler");
    return "GetStoredPaymentMethodsHandler";
}
exports.GetStoredPaymentMethodsHandler = GetStoredPaymentMethodsHandler;
;
function CreateStoredPaymentMethodHandler(req, res) {
    console.log("CreateStoredPaymentMethodHandler");
    return "CreateStoredPaymentMethodHandler";
}
exports.CreateStoredPaymentMethodHandler = CreateStoredPaymentMethodHandler;
;
function UpdateStoredPaymentMethodHandler(req, res) {
    console.log("UpdateStoredPaymentMethodHandler");
    return "UpdateStoredPaymentMethodHandler";
}
exports.UpdateStoredPaymentMethodHandler = UpdateStoredPaymentMethodHandler;
;
function SetDefaultStoredPaymentMethodHandler(req, res) {
    console.log("SetDefaultStoredPaymentMethodHandler");
    return "SetDefaultStoredPaymentMethodHandler";
}
exports.SetDefaultStoredPaymentMethodHandler = SetDefaultStoredPaymentMethodHandler;
;
function RemoveStoredPaymentMethodHandler(req, res) {
    console.log("RemoveStoredPaymentMethodHandler");
    return "RemoveStoredPaymentMethodHandler";
}
exports.RemoveStoredPaymentMethodHandler = RemoveStoredPaymentMethodHandler;
;
function SubmitPurchaseOrderHandler(req, res) {
    console.log("SubmitPurchaseOrderHandler");
    return "SubmitPurchaseOrderHandler";
}
exports.SubmitPurchaseOrderHandler = SubmitPurchaseOrderHandler;
;
function GetPurchaseOrderHandler(req, res) {
    console.log("GetPurchaseOrderHandler");
    return "GetPurchaseOrderHandler";
}
exports.GetPurchaseOrderHandler = GetPurchaseOrderHandler;
;
function GetAccountOrderHistoryHandler(req, res) {
    console.log("GetAccountOrderHistoryHandler");
    return "GetAccountOrderHistoryHandler";
}
exports.GetAccountOrderHistoryHandler = GetAccountOrderHistoryHandler;
;
function GetAccountBalanceHistoryHandler(req, res) {
    console.log("GetAccountBalanceHistoryHandler");
    return "GetAccountBalanceHistoryHandler";
}
exports.GetAccountBalanceHistoryHandler = GetAccountBalanceHistoryHandler;
;
function GetAccountBalanceHandler(req, res) {
    console.log("GetAccountBalanceHandler");
    return "GetAccountBalanceHandler";
}
exports.GetAccountBalanceHandler = GetAccountBalanceHandler;
;
function GetUserCountHandler(req, res) {
    console.log("GetUserCountHandler");
    return "GetUserCountHandler";
}
exports.GetUserCountHandler = GetUserCountHandler;
;
function GetUsersInRankedCountHandler(req, res) {
    console.log("GetUsersInRankedCountHandler");
    return "GetUsersInRankedCountHandler";
}
exports.GetUsersInRankedCountHandler = GetUsersInRankedCountHandler;
;
function InitHandlers(p) {
    protos = p;
}
exports.default = InitHandlers;

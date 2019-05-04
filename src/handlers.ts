import * as pb from 'protobufjs';
import { Protos } from "./pb-handlers";

let protos: Protos = null;

export function GetEventHandler(req: Request, res: Response) {
    console.log("GetEventHandler");
    return "GetEventHandler";
};
export function LookupUserHandler(req: Request, res: Response) {
    console.log("LookupUserHandler");
    return "LookupUserHandler";
};
export function SearchUsersHandler(req: Request, res: Response) {
    console.log("SearchUsersHandler");
    return "SearchUsersHandler";
};
export function CreateUserHandler(req: Request, res: Response) {
    console.log("CreateUserHandler");
    return "CreateUserHandler";
};
export function UpdateUserHandler(req: Request, res: Response) {
    console.log("UpdateUserHandler");
    return "UpdateUserHandler";
};
export function SetUserContactAddressHandler(req: Request, res: Response) {
    console.log("SetUserContactAddressHandler");
    return "SetUserContactAddressHandler";
};
export function SetUserAccessHandler(req: Request, res: Response) {
    console.log("SetUserAccessHandler");
    return "SetUserAccessHandler";
};
export function SetUserLoginStatusHandler(req: Request, res: Response) {
    console.log("SetUserLoginStatusHandler");
    return "SetUserLoginStatusHandler";
};
export function ResetUserPasswordHandler(req: Request, res: Response) {
    console.log("ResetUserPasswordHandler");
    return "ResetUserPasswordHandler";
};
export function NukeHandleHandler(req: Request, res: Response) {
    console.log("NukeHandleHandler");
    return "NukeHandleHandler";
};
export function GetHandleHistoryHandler(req: Request, res: Response) {
    console.log("GetHandleHistoryHandler");
    return "GetHandleHistoryHandler";
};
export function SendUserEmailNotificationHandler(req: Request, res: Response) {
    console.log("SendUserEmailNotificationHandler");
    return "SendUserEmailNotificationHandler";
};
export function SearchAuditHistoryHandler(req: Request, res: Response) {
    console.log("SearchAuditHistoryHandler");
    return "SearchAuditHistoryHandler";
};
export function GetAppConfigHandler(req: Request, res: Response) {
    console.log("GetAppConfigHandler");
    return "GetAppConfigHandler";
};
export function GetGlobalConfigHandler(req: Request, res: Response) {
    console.log("GetGlobalConfigHandler");
    return "GetGlobalConfigHandler";
};
export function SetGlobalConfigHandler(req: Request, res: Response) {
    console.log("SetGlobalConfigHandler");
    return "SetGlobalConfigHandler";
};
export function GetMatchQueueConfigHandler(req: Request, res: Response) {
    console.log("GetMatchQueueConfigHandler");
    return "GetMatchQueueConfigHandler";
};
export function SetMatchQueueConfigHandler(req: Request, res: Response) {
    console.log("SetMatchQueueConfigHandler");
    return "SetMatchQueueConfigHandler";
};
export function GetMatchUserConfigHandler(req: Request, res: Response) {
    console.log("GetMatchUserConfigHandler");
    return "GetMatchUserConfigHandler";
};
export function SetMatchUserConfigHandler(req: Request, res: Response) {
    console.log("SetMatchUserConfigHandler");
    return "SetMatchUserConfigHandler";
};
export function GetLobbyConfigHandler(req: Request, res: Response) {
    console.log("GetLobbyConfigHandler");
    return "GetLobbyConfigHandler";
};
export function SetLobbyConfigHandler(req: Request, res: Response) {
    console.log("SetLobbyConfigHandler");
    return "SetLobbyConfigHandler";
};
export function ListFeatureDefinitionsHandler(req: Request, res: Response) {
    console.log("ListFeatureDefinitionsHandler");
    return "ListFeatureDefinitionsHandler";
};
export function SetFeatureDefinitionHandler(req: Request, res: Response) {
    console.log("SetFeatureDefinitionHandler");
    return "SetFeatureDefinitionHandler";
};
export function DeleteFeatureDefinitionHandler(req: Request, res: Response) {
    console.log("DeleteFeatureDefinitionHandler");
    return "DeleteFeatureDefinitionHandler";
};
export function ListFeatureRulesHandler(req: Request, res: Response) {
    console.log("ListFeatureRulesHandler");
    return "ListFeatureRulesHandler";
};
export function GetActiveFeaturesHandler(req: Request, res: Response) {
    console.log("GetActiveFeaturesHandler");
    return "GetActiveFeaturesHandler";
};
export function CreateFeatureRuleHandler(req: Request, res: Response) {
    console.log("CreateFeatureRuleHandler");
    return "CreateFeatureRuleHandler";
};
export function UpdateFeatureRuleHandler(req: Request, res: Response) {
    console.log("UpdateFeatureRuleHandler");
    return "UpdateFeatureRuleHandler";
};
export function DeleteFeatureRuleHandler(req: Request, res: Response) {
    console.log("DeleteFeatureRuleHandler");
    return "DeleteFeatureRuleHandler";
};
export function GetMatchQueueUsersHandler(req: Request, res: Response) {
    console.log("GetMatchQueueUsersHandler");
    return "GetMatchQueueUsersHandler";
};
export function GetLobbiesHandler(req: Request, res: Response) {
    console.log("GetLobbiesHandler");
    return "GetLobbiesHandler";
};
export function GetLobbyHandler(req: Request, res: Response) {
    console.log("GetLobbyHandler");
    return "GetLobbyHandler";
};
export function GetActiveMatchesHandler(req: Request, res: Response) {
    console.log("GetActiveMatchesHandler");
    return "GetActiveMatchesHandler";
};
export function GetActiveMatchHandler(req: Request, res: Response) {
    console.log("GetActiveMatchHandler");
    return "GetActiveMatchHandler";
};
export function GetRecentMatchesHandler(req: Request, res: Response) {
    console.log("GetRecentMatchesHandler");
    return "GetRecentMatchesHandler";
};
export function GetMatchDetailHandler(req: Request, res: Response) {
    console.log("GetMatchDetailHandler");
    return "GetMatchDetailHandler";
};
export function GetPlayerDetailHandler(req: Request, res: Response) {
    console.log("GetPlayerDetailHandler");
    return "GetPlayerDetailHandler";
};
export function ListDesyncsHandler(req: Request, res: Response) {
    console.log("ListDesyncsHandler");
    return "ListDesyncsHandler";
};
export function ListCrashesHandler(req: Request, res: Response) {
    console.log("ListCrashesHandler");
    return "ListCrashesHandler";
};
export function ListCrashBuildIdentifiersHandler(req: Request, res: Response) {
    console.log("ListCrashBuildIdentifiersHandler");
    return "ListCrashBuildIdentifiersHandler";
};
export function ListCrashCollectionsHandler(req: Request, res: Response) {
    console.log("ListCrashCollectionsHandler");
    return "ListCrashCollectionsHandler";
};
export function SearchPurchaseOrdersHandler(req: Request, res: Response) {
    console.log("SearchPurchaseOrdersHandler");
    return "SearchPurchaseOrdersHandler";
};
export function SyncPurchaseOrderHandler(req: Request, res: Response) {
    console.log("SyncPurchaseOrderHandler");
    return "SyncPurchaseOrderHandler";
};
export function VoidPurchaseOrderHandler(req: Request, res: Response) {
    console.log("VoidPurchaseOrderHandler");
    return "VoidPurchaseOrderHandler";
};
export function RefundPurchaseOrderHandler(req: Request, res: Response) {
    console.log("RefundPurchaseOrderHandler");
    return "RefundPurchaseOrderHandler";
};
export function CountUsersHandler(req: Request, res: Response) {
    console.log("CountUsersHandler");
    return "CountUsersHandler";
};
export function GetSessionsHandler(req: Request, res: Response) {
    console.log("GetSessionsHandler");
    return "GetSessionsHandler";
};
export function GetCharacterUsageHandler(req: Request, res: Response) {
    console.log("GetCharacterUsageHandler");
    return "GetCharacterUsageHandler";
};
export function CheckHandleHandler(req: Request, res: Response) {
    console.log("CheckHandleHandler");
    return "CheckHandleHandler";
};
export function RegisterUserHandler(req: Request, res: Response) {
    console.log("RegisterUserHandler");
    return "RegisterUserHandler";
};
export function ValidateUserHandler(req: Request, res: Response) {
    console.log("ValidateUserHandler");
    return "ValidateUserHandler";
};
export function GetSecretQuestionHandler(req: Request, res: Response) {
    console.log("GetSecretQuestionHandler");
    return "GetSecretQuestionHandler";
};
export function SendPasswordResetEmailHandler(req: Request, res: Response) {
    console.log("SendPasswordResetEmailHandler");
    return "SendPasswordResetEmailHandler";
};
export function VerifyResetPasswordCodeHandler(req: Request, res: Response) {
    console.log("VerifyResetPasswordCodeHandler");
    return "VerifyResetPasswordCodeHandler";
};
export function ResetPasswordHandler(req: Request, res: Response) {
    console.log("ResetPasswordHandler");
    return "ResetPasswordHandler";
};
export function GetUserInfoHandler(req: Request, res: Response) {
    console.log("GetUserInfoHandler");
    return "GetUserInfoHandler";
};
export function ResendValidationEmailHandler(req: Request, res: Response) {
    console.log("ResendValidationEmailHandler");
    return "ResendValidationEmailHandler";
};
export function SetLocaleHandler(req: Request, res: Response) {
    console.log("SetLocaleHandler");
    return "SetLocaleHandler";
};
export function SetContactAddressHandler(req: Request, res: Response) {
    console.log("SetContactAddressHandler");
    return "SetContactAddressHandler";
};
export function GetUserPrefsHandler(req: Request, res: Response) {
    console.log("GetUserPrefsHandler");
    return "GetUserPrefsHandler";
};
export function SetUserPrefsHandler(req: Request, res: Response) {
    console.log("SetUserPrefsHandler");
    return "SetUserPrefsHandler";
};
export function ChangePasswordHandler(req: Request, res: Response) {
    console.log("ChangePasswordHandler");
    return "ChangePasswordHandler";
};
export function ChangeEmailAddressHandler(req: Request, res: Response) {
    console.log("ChangeEmailAddressHandler");
    return "ChangeEmailAddressHandler";
};
export function RedeemAccessCodeHandler(req: Request, res: Response) {
    console.log("RedeemAccessCodeHandler");
    return "RedeemAccessCodeHandler";
};
export function CrashReportHandler(req: Request, res: Response) {
    console.log("CrashReportHandler");
    return "CrashReportHandler";
};
export function EventPingHandler(req: Request, res: Response) {
    console.log("EventPingHandler");
    return "EventPingHandler";
};
export function CreateLobbyHandler(req: Request, res: Response) {
    console.log("CreateLobbyHandler");
    return "CreateLobbyHandler";
};
export function GetLobbyJoinCodeHandler(req: Request, res: Response) {
    console.log("GetLobbyJoinCodeHandler");
    return "GetLobbyJoinCodeHandler";
};
export function JoinLobbyByCodeHandler(req: Request, res: Response) {
    console.log("JoinLobbyByCodeHandler");
    return "JoinLobbyByCodeHandler";
};
export function LeaveLobbyHandler(req: Request, res: Response) {
    console.log("LeaveLobbyHandler");
    return "LeaveLobbyHandler";
};
export function LobbySetReadyHandler(req: Request, res: Response) {
    console.log("LobbySetReadyHandler");
    return "LobbySetReadyHandler";
};
export function LobbySetOwnerHandler(req: Request, res: Response) {
    console.log("LobbySetOwnerHandler");
    return "LobbySetOwnerHandler";
};
export function LobbySetGameOptionsHandler(req: Request, res: Response) {
    console.log("LobbySetGameOptionsHandler");
    return "LobbySetGameOptionsHandler";
};
export function LobbyBanUserHandler(req: Request, res: Response) {
    console.log("LobbyBanUserHandler");
    return "LobbyBanUserHandler";
};
export function LobbyRemoveUserHandler(req: Request, res: Response) {
    console.log("LobbyRemoveUserHandler");
    return "LobbyRemoveUserHandler";
};
export function GetGameProfileHandler(req: Request, res: Response) {
    console.log("GetGameProfileHandler");
    return "GetGameProfileHandler";
};
export function PingTestHandler(req: Request, res: Response) {
    console.log("PingTestHandler");
    return "PingTestHandler";
};
export function GetMatchHandler(req: Request, res: Response) {
    console.log("GetMatchHandler");
    return "GetMatchHandler";
};
export function ResumeGetMatchHandler(req: Request, res: Response) {
    console.log("ResumeGetMatchHandler");
    return "ResumeGetMatchHandler";
};
export function CancelGetMatchHandler(req: Request, res: Response) {
    console.log("CancelGetMatchHandler");
    return "CancelGetMatchHandler";
};
export function ResetGameHandler(req: Request, res: Response) {
    console.log("ResetGameHandler");
    return "ResetGameHandler";
};
export function GetGameReplayRecordHandler(req: Request, res: Response) {
    console.log("GetGameReplayRecordHandler");
    return "GetGameReplayRecordHandler";
};
export function DesyncReportHandler(req: Request, res: Response) {
    console.log("DesyncReportHandler");
    return "DesyncReportHandler";
};
export function UpdatePlayerPreferencesHandler(req: Request, res: Response) {
    console.log("UpdatePlayerPreferencesHandler");
    return "UpdatePlayerPreferencesHandler";
};
export function GetPlayerStatsHandler(req: Request, res: Response) {
    console.log("GetPlayerStatsHandler");
    return "GetPlayerStatsHandler";
};
export function GetRecentGamesHandler(req: Request, res: Response) {
    console.log("GetRecentGamesHandler");
    return "GetRecentGamesHandler";
};
export function LoginHandler(req: Request, res: Response) {
    res.json()
    .then(data => {
        console.log(data);
        var r = new pb.Reader(data);
        console.log(r);
        var x = protos.messages.Result.decode(r);
        console.log(x);
    })
    .catch(e => console.error(e));

    console.log("LoginHandler");
    return "LoginHandler";
};
export function GetGameSessionTicketHandler(req: Request, res: Response) {
    console.log("GetGameSessionTicketHandler");
    return "GetGameSessionTicketHandler";
};
export function RedeemGameSessionTicketHandler(req: Request, res: Response) {
    console.log("RedeemGameSessionTicketHandler");
    return "RedeemGameSessionTicketHandler";
};
export function LogoutHandler(req: Request, res: Response) {
    console.log("LogoutHandler");
    return "LogoutHandler";
};
export function GetStoredPaymentMethodsHandler(req: Request, res: Response) {
    console.log("GetStoredPaymentMethodsHandler");
    return "GetStoredPaymentMethodsHandler";
};
export function CreateStoredPaymentMethodHandler(req: Request, res: Response) {
    console.log("CreateStoredPaymentMethodHandler");
    return "CreateStoredPaymentMethodHandler";
};
export function UpdateStoredPaymentMethodHandler(req: Request, res: Response) {
    console.log("UpdateStoredPaymentMethodHandler");
    return "UpdateStoredPaymentMethodHandler";
};
export function SetDefaultStoredPaymentMethodHandler(req: Request, res: Response) {
    console.log("SetDefaultStoredPaymentMethodHandler");
    return "SetDefaultStoredPaymentMethodHandler";
};
export function RemoveStoredPaymentMethodHandler(req: Request, res: Response) {
    console.log("RemoveStoredPaymentMethodHandler");
    return "RemoveStoredPaymentMethodHandler";
};
export function SubmitPurchaseOrderHandler(req: Request, res: Response) {
    console.log("SubmitPurchaseOrderHandler");
    return "SubmitPurchaseOrderHandler";
};
export function GetPurchaseOrderHandler(req: Request, res: Response) {
    console.log("GetPurchaseOrderHandler");
    return "GetPurchaseOrderHandler";
};
export function GetAccountOrderHistoryHandler(req: Request, res: Response) {
    console.log("GetAccountOrderHistoryHandler");
    return "GetAccountOrderHistoryHandler";
};
export function GetAccountBalanceHistoryHandler(req: Request, res: Response) {
    console.log("GetAccountBalanceHistoryHandler");
    return "GetAccountBalanceHistoryHandler";
};
export function GetAccountBalanceHandler(req: Request, res: Response) {
    console.log("GetAccountBalanceHandler");
    return "GetAccountBalanceHandler";
};
export function GetUserCountHandler(req: Request, res: Response) {
    console.log("GetUserCountHandler");
    return "GetUserCountHandler";
};
export function GetUsersInRankedCountHandler(req: Request, res: Response) {
    console.log("GetUsersInRankedCountHandler");
    return "GetUsersInRankedCountHandler";
};

export default function InitHandlers(p: Protos) {
    protos = p;
}
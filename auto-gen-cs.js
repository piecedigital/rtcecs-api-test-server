var fs = require("fs");

var listOfNames = [
    'GetEvent',
    'LookupUser',
    'SearchUsers',
    'CreateUser',
    'UpdateUser',
    'SetUserContactAddress',
    'SetUserAccess',
    'SetUserLoginStatus',
    'ResetUserPassword',
    'NukeHandle',
    'GetHandleHistory',
    'SendUserEmailNotification',
    'SearchAuditHistory',
    'GetAppConfig',
    'GetGlobalConfig',
    'SetGlobalConfig',
    'GetMatchQueueConfig',
    'SetMatchQueueConfig',
    'GetMatchUserConfig',
    'SetMatchUserConfig',
    'GetLobbyConfig',
    'SetLobbyConfig',
    'ListFeatureDefinitions',
    'SetFeatureDefinition',
    'DeleteFeatureDefinition',
    'ListFeatureRules',
    'GetActiveFeatures',
    'CreateFeatureRule',
    'UpdateFeatureRule',
    'DeleteFeatureRule',
    'GetMatchQueueUsers',
    'GetLobbies',
    'GetLobby',
    'GetActiveMatches',
    'GetActiveMatch',
    'GetRecentMatches',
    'GetMatchDetail',
    'GetPlayerDetail',
    'ListDesyncs',
    'ListCrashes',
    'ListCrashBuildIdentifiers',
    'ListCrashCollections',
    'SearchPurchaseOrders',
    'SyncPurchaseOrder',
    'VoidPurchaseOrder',
    'RefundPurchaseOrder',
    'CountUsers',
    'GetSessions',
    'GetCharacterUsage',
    'CheckHandle',
    'RegisterUser',
    'ValidateUser',
    'GetSecretQuestion',
    'SendPasswordResetEmail',
    'VerifyResetPasswordCode',
    'ResetPassword',
    'GetUserInfo',
    'ResendValidationEmail',
    'SetLocale',
    'SetContactAddress',
    'GetUserPrefs',
    'SetUserPrefs',
    'ChangePassword',
    'ChangeEmailAddress',
    'RedeemAccessCode',
    'CrashReport',
    'EventPing',
    'CreateLobby',
    'GetLobbyJoinCode',
    'JoinLobbyByCode',
    'LeaveLobby',
    'LobbySetReady',
    'LobbySetOwner',
    'LobbySetGameOptions',
    'LobbyBanUser',
    'LobbyRemoveUser',
    'GetGameProfile',
    'PingTest',
    'GetMatch',
    'ResumeGetMatch',
    'CancelGetMatch',
    'ResetGame',
    'GetGameReplayRecord',
    'DesyncReport',
    'UpdatePlayerPreferences',
    'GetPlayerStats',
    'GetRecentGames',
    'Login',
    'GetGameSessionTicket',
    'RedeemGameSessionTicket',
    'Logout',
    'GetStoredPaymentMethods',
    'CreateStoredPaymentMethod',
    'UpdateStoredPaymentMethod',
    'SetDefaultStoredPaymentMethod',
    'RemoveStoredPaymentMethod',
    'SubmitPurchaseOrder',
    'GetPurchaseOrder',
    'GetAccountOrderHistory',
    'GetAccountBalanceHistory',
    'GetAccountBalance',
    'GetUserCount',
    'GetUsersInRankedCount',
];

function makeCode(name) {
    return `using Rising_Thunder_Server_CS.Protobufs.Tbportal;
using Rising_Thunder_Server_CS.Protobufs.Tbadmin;
using Rising_Thunder_Server_CS.Protobufs.Tbmatch;
using Rising_Thunder_Server_CS.Protobufs.Tbrpc;
using Rising_Thunder_Server_CS.Protobufs.Tbui;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
using Google.Protobuf;
using Newtonsoft.Json;
using System.IO;
using System;

namespace Rising_Thunder_Server_CS.Controllers
{
    public partial class RPCController : ControllerBase
    {
        [HttpPost("{{NAME}}")]
        public ByteString {{NAME}}()
        {

            byte[] payload = null;
            Empty content = null;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                payload = JsonConvert.DeserializeObject<Byte[]>(reader.ReadToEnd());
            }

            if (payload != null)
            {
                content = Empty.Parser.ParseFrom(payload);
            }

            // do logout stuff here...

            // success
            Result resultPayload = new Result()
            {
                Result_ = Status.SSuccess
            };

            var outData = resultPayload.ToByteString();

            Debug.Print("\\n\\r\\n\\rSome converted data: '" + content.ToString() + "'\\n\\r\\n\\r");
            Debug.Print("\\n\\r\\n\\rSome resulted data: '" + resultPayload.ToString() + "'\\n\\r\\n\\r");
            return outData;
        }
    }
}`.replace(/\{\{NAME\}\}/g, name);
}

var arr = [
    "EventPing",
    "GetUserInfo",
    "Login",
    "Logout",
    "PingTest",
    "RPC",
];

listOfNames.filter(x => {
    return arr.indexOf(x) < 0;
}).map(name => {
    var code = makeCode(name);
    var filename = name + "Controller.cs";
    fs.writeFile("../server/Rising Thunder Server CS/Controllers/" + filename, code, err => {
        if (err) throw err;
    });
});
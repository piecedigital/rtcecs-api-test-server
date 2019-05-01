"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pb = require("protobufjs");
// import * as uuid from "uuid/v1";
var Protos = /** @class */ (function () {
    // {
    //     Status: pb.Type,
    //     // enum Status {
    //     //     S_SUCCESS = 0;
    //     //     S_ERROR = 1;
    //     //     S_SERVER_ERROR = 2;
    //     //     S_TIMEOUT = 3;
    //     //     S_TRANSPORT_ERROR = 4;
    //     //     S_UNKNOWN = 128;
    //     // }
    //     GameType: pb.Type,
    //     // enum GameType {
    //     //     GT_RISING_THUNDER = 100;
    //     // }
    // };
    function Protos() {
        var _this = this;
        var root = new pb.Root({
            root: "/proto3 versions",
        });
        root.resolvePath = function (origin, file) {
            var str = this.options.root + "/" + file;
            // console.log(`Origin: "${origin}"; String: "${str}"`);
            return str;
        };
        // console.log(root.resolvePath);
        pb.load([
            "tbui/tbcharacter.proto",
            "tbmatch/event.proto",
            "tbmatch/match.proto",
            "tbportal/portal.proto",
            "tbrpc/tbrpc.proto",
            "tbmatch/session.proto",
        ], root)
            .then(function (root) { return root.resolveAll(); })
            .then(function (root) {
            _this.messages = {
                Empty: root.lookupType(["tbrpc", "Empty"]),
                WaitMatchProgressEvent: root.lookupType(["tbmatch", "WaitMatchProgressEvent"]),
                Result: root.lookupType(["tbrpc", "Result"]),
                PingTestResult: root.lookupType(["tbmatch", "PingTestResult"]),
                GameEndpointConfig: root.lookupType(["tbmatch", "GameEndpointConfig"]),
                NetworkAddr: root.lookupType(["tbmatch", "NetworkAddr"]),
                LoginRequest: root.lookupType(["tbmatch", "LoginRequest"]),
                GetGameSessionTicketRequest: root.lookupType(["tbmatch", "GetGameSessionTicketRequest"]),
                GetGameSessionTicketResult: root.lookupType(["tbmatch", "GetGameSessionTicketResult"]),
                RedeemGameSessionTicketRequest: root.lookupType(["tbmatch", "RedeemGameSessionTicketRequest"]),
                GetMatchRequest: root.lookupType(["tbmatch", "GetMatchRequest"]),
                CreateLobbyRequest: root.lookupType(["tbmatch", "CreateLobbyRequest"]),
                GetLobbyJoinCodeRequest: root.lookupType(["tbmatch", "GetLobbyJoinCodeRequest"]),
                GetEventResult: root.lookupType(["tbmatch", "GetEventResult"]),
                Event: root.lookupType(["tbmatch", "Event"]),
                GetEventRequest: root.lookupType(["tbmatch", "GetEventRequest"]),
                PingTestCompleteEvent: root.lookupType(["tbmatch", "PingTestCompleteEvent"]),
                GameProfile: root.lookupType(["tbmatch", "GameProfile"]),
                PlayerStats: root.lookupType(["tbmatch", "PlayerStats"]),
                CharacterStats: root.lookupType(["tbmatch", "CharacterStats"]),
                PlayerPreferences: root.lookupType(["tbmatch", "PlayerPreferences"]),
                ClientFeatureSet: root.lookupType(["tbmatch", "ClientFeatureSet"]),
                FeatureValue: root.lookupType(["tbmatch", "FeatureValue"]),
                MatchCreatedEvent: root.lookupType(["tbmatch", "MatchCreatedEvent"]),
                GameConfig: root.lookupType(["tbmatch", "GameConfig"]),
                Player: root.lookupType(["tbmatch", "GameConfig", "Player"]),
                GameOptions: root.lookupType(["tbmatch", "GameOptions"]),
                CharacterSpec: root.lookupType(["tbmatch", "CharacterSpec"]),
                VariantSpec: root.lookupType(["tbmatch", "VariantSpec"]),
                LocMsg: root.lookupType(["tbrpc", "LocMsg"]),
                MsgParam: root.lookupType(["tbrpc", "MsgParam"]),
                MsgParamStr: root.lookupType(["tbrpc", "MsgParam", "Str"]),
                GameSessionRequest: root.lookupType(["tbportal", "GameSessionRequest"]),
                ClientSpec: root.lookupType(["tbportal", "ClientSpec"]),
            };
            _this.enums = {
                Status: root.lookupEnum(["tbrpc", "Status"]),
                GameType: root.lookupEnum(["tbmatch", "GameType"]),
            };
            _this.onProtosLoad();
        })
            .catch(function (e) { return console.error("Problem loading protos: " + e); });
    }
    return Protos;
}());
exports.Protos = Protos;

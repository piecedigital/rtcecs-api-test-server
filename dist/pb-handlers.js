"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pb = require("protobufjs");
// import * as uuid from "uuid/v1";
var Protos = /** @class */ (function () {
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
            "tbrpc/tbrpc.proto",
            "tbmatch/match.proto",
            "tbui/tbcharacter.proto",
        ], root)
            .then(function (root) { return root.resolveAll(); })
            .then(function (root) {
            _this.messages = {
                WaitMatchProgressEvent: root.lookup(["tbmatch", "WaitMatchProgressEvent"]),
                Result: root.lookup(["tbrpc", "Result"]),
                PingTestResult: root.lookup(["tbrpc", "PingTestResult"]),
                GameEndpointConfig: root.lookup(["tbrpc", "GameEndpointConfig"]),
                NetworkAddr: root.lookup(["tbrpc", "NetworkAddr"]),
                LoginRequest: root.lookup(["tbmatch", "LoginRequest"]),
                GetGameSessionTicketRequest: root.lookup(["tbrpc", "GetGameSessionTicketRequest"]),
                GetGameSessionTicketResult: root.lookup(["tbrpc", "GetGameSessionTicketResult"]),
                RedeemGameSessionTicketRequest: root.lookup(["tbrpc", "RedeemGameSessionTicketRequest"]),
                GetMatchRequest: root.lookup(["tbmatch", "GetMatchRequest"]),
                CreateLobbyRequest: root.lookup(["tbmatch", "CreateLobbyRequest"]),
                GetLobbyJoinCodeRequest: root.lookup(["tbmatch", "GetLobbyJoinCodeRequest"]),
                GetEventResult: root.lookup(["tbmatch", "GetEventResult"]),
                Event: root.lookup(["tbmatch", "Event"]),
                GetEventRequest: root.lookup(["tbmatch", "GetEventRequest"]),
                PingTestCompleteEvent: root.lookup(["tbmatch", "PingTestCompleteEvent"]),
                GameProfile: root.lookup(["tbmatch", "GameProfile"]),
                PlayerStats: root.lookup(["tbmatch", "PlayerStats"]),
                CharacterStats: root.lookup(["tbmatch", "CharacterStats"]),
                PlayerPreferences: root.lookup(["tbmatch", "PlayerPreferences"]),
                ClientFeatureSet: root.lookup(["tbmatch", "ClientFeatureSet"]),
                FeatureValue: root.lookup(["tbmatch", "FeatureValue"]),
                MatchCreatedEvent: root.lookup(["tbmatch", "MatchCreatedEvent"]),
                GameConfig: root.lookup(["tbmatch", "GameConfig"]),
                Player: root.lookup(["tbmatch", "GameConfiglookup", "Player"]),
                GameOptions: root.lookup(["tbmatch", "GameOptions"]),
                CharacterSpec: root.lookup(["tbmatch", "CharacterSpec"]),
                VariantSpec: root.lookup(["tbmatch", "VariantSpec"]),
                LocMsg: root.lookup(["tbmatch", "LocMsg"]),
                MsgParam: root.lookup(["tbmatch", "MsgParam"]),
                MsgParamStr: root.lookup(["tbmatch", "MsgParamlookup", "Str"]),
                GameSessionRequest: root.lookup(["tbmatch", "GameSessionRequest"]),
                ClientSpec: root.lookup(["tbmatch", "ClientSpec"]),
            };
            _this.enums = {
                Status: root.lookup(["tbrpc", "Status"]),
                GameType: root.lookup(["tbmatch", "GameType"]),
            };
            console.log(_this.messages);
        })
            .catch(function (e) { return console.error("Problem loading protos: " + e); });
    }
    return Protos;
}());
exports.Protos = Protos;
/*
class User {
    profile = null;
    events = [];
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}

var eventId = 0;
var AuthPool = {};
var Users = {};

const Events = {
    PingTestComplete: function (message, req, res) {
        var Result = protos.messages.Result;
        var GetEventRequest = protos.messages.GetEventRequest;
        var Event = protos.messages.Event;
        var Type = Event.getEnum("Type");

        var PingTestCompleteEvent = protos.messages.PingTestCompleteEvent;

        var e = Event.create({
            eventId: getNextUniqueID(),
            type: Type.E_PING_TEST_COMPLETE,
            pingTestComplete: PingTestCompleteEvent.create({
                success: true
            })
        })

        return e;
    },
    WaitMatchProgressEvent: function (queueData, matchId, secret, message, req, res) {
        var WaitMatchProgressEvent = protos.messages.WaitMatchProgressEvent;
        var GameConfig = protos.messages.GameConfig;
        var Player = protos.messages.Player;
        var GameOptions = protos.messages.GameOptions;

        var GameEndpointConfig = protos.messages.GameEndpointConfig;
        var NetworkAddr = protos.messages.NetworkAddr;

        var Event = protos.messages.Event;
        var Type = Event.getEnum("Type");

        var e = Event.create({
            eventId: getNextUniqueID(),
            type: Type.E_WAIT_MATCH_PROGRESS,
            matchCreated: WaitMatchProgressEvent.create({
                status: 3,
                matchId,
                gameConfig: GameConfig.create({
                    player: [Player.create({
                        userId: Users[queueData.session].accountId,
                        handle: Users[queueData.session].handle,
                        character: queueData.request.character
                    })],
                    gameOptions: GameOptions.create({
                        mode: 1
                    }),
                    matchId,
                }),
                endPoint: GameEndpointConfig.create({
                    server: NetworkAddr.create({
                        // Host name or IP address where the client or server can be reached.
                        // optional string host_name = 1;

                        // UDP port on which the client will be listening for a match.
                        // optional int32 port = 2;
                    }),
                    secret, // TODO to add
                    pingScoreThreshold: frameDelay(20),
                    // sharedKey, // TODO to add
                }),
            })
        })

        return e;
    },
    MatchCreatedEvent: function (queueData, matchId, message, req, res) {
        var MatchCreatedEvent = protos.messages.MatchCreatedEvent;
        var GameConfig = protos.messages.GameConfig;
        var GameOptions = protos.messages.GameOptions;
        var Player = protos.messages.Player;

        var Event = protos.messages.Event;
        var Type = Event.getEnum("Type");

        var e = Event.create({
            eventId: getNextUniqueID(),
            type: Type.E_MATCH_CREATED,
            matchCreated: MatchCreatedEvent.create({
                gameConfig: GameConfig.create({
                    player: [Player.create({
                        userId: Users[queueData.session].accountId,
                        handle: Users[queueData.session].handle,
                        character: queueData.request.character
                    })],
                    gameOptions: GameOptions.create({
                        mode: 1
                    }),
                    matchId,
                })
            })
        })

        return e;
    }
}

function getNextUniqueID() {
    return eventId++;
}

function frameDelay(x) {
    var frame = 1000 / 60;
    return frame * x;
}

function makeErrorMessage(message) {
    var LocMsg = protos.messages.LocMsg;
    // message LocMsg {
    // 	optional string id = 1;
    // 	repeated MsgParam param = 2;
    // }
    // Parameters to a message.  Using a message type
    // for each primitive works around protobuf-net's limitation
    // of not recording unset primitives.
    var MsgParam = protos.messages.MsgParam;
    var MsgParamStr = MsgParam.lookupType("Str");
    // message MsgParam {
    // 	message Str {
    // 	optional string value = 1;
    // 	}
    // 	message Int {
    // 	optional int32 value = 1;
    // 	}
    // 	message Float {
    // 	optional float value = 1;
    // 	}
    // 	optional Str str = 1;
    // 	optional Int int = 2;
    // 	optional Float flt = 3;
    // }

    return LocMsg.create({
        id: getNextUniqueID().toString(),
        param: [
            MsgParam.create({
                str: MsgParamStr.create({ value: "No user found tied to this session" })
            })
        ]
    })
}

var MatchMaking = function () {
    this.queues = {
        ranked: {}
    }
    var MatchType = {
        // Earn experience, but not ranking points.
        1: "MT_UNRANKED",

        // Earn experience, ranking points adjusted from outcome.
        2: "MT_RANKED",

        // Join elimination tournament.
        3: "MT_TOURNAMENT",

        // Custom lobby match.
        4: "MT_LOBBY",
    }

    var getMatchType = function (typeInt) {
        var type = MatchType[typeInt].replace(/^MT_/, "").toLowerCase();
        return type;
    }

    this.addToQueue = function (data) {
        this.queues[getMatchType(data.request.type)][data.session] = data;
    }
    this.removeFromQueue = function (data) {
        Object.keys(this.queues).map(queueKey => {
            delete this.queues[queueKey][data.session];
        })
    }


    // def CreateGameSessionRequest(p1_character, p2_character):
    //     game_session = tbportal.portal_pb2.GameSessionRequest()
    //     p1_session = game_session.spec.add()
    //     p1_session.secret = server.GetNewSecret()
    //     p1_session.character.CopyFrom(p1_character)
    //
    //     p2_session = game_session.spec.add()
    //     p2_session.secret = server.GetNewSecret()
    //     p2_session.character.CopyFrom(p2_character)
    //
    //     return game_session
    var createGameSessionRequest = function (p1Character, p2Character) {
        var GameSessionRequest = protos.messages.GameSessionRequest;
        var ClientSpec = protos.messages.ClientSpec;

        return GameSessionRequest.create({
            spec: [
                ClientSpec.create({
                    secret: Date.now(),
                    clientIp: 0,// not actually used
                    character: p1Character
                }),
                ClientSpec.create({
                    secret: Date.now(),
                    clientIp: 0,// not actually used
                    character: p2Character
                }),
            ],
        });
    }

    var makeMatch = function (player1, player2) {
        const matchID = getNextUniqueID();

        const gameSession = createGameSessionRequest(player1.request.character, player2.request.character);

        // TODO: reimplement this
        // p1port, p2port = server.portal.StartGameSession(game_session, game_config, p1.user, p2.user)
        // def StartGameSession(self, game_session, game_config, p1, p2):
        //       s = GameSession(self, game_session, game_config, p1, p2)
        //       return s.p1.port, s.p2.port

        Users[player1.session].events.push(Events.MatchCreatedEvent.bind(null, player1, matchID));
        Users[player2.session].events.push(Events.MatchCreatedEvent.bind(null, player2, matchID));
        delete this.queue[player1.session];
        delete this.queue[player2.session];
    }

    var checkMatchMakingQueues = function () {
        var attemptMatchMaking = (q) => {
            setInterval((q) => {
                var queue = Object.keys(q);
                // console.log(queue.length);
                if (queue.length < 2) return;
                var player1Index = Math.floor(Math.random() * queue.length);
                var player2Index = Math.floor(Math.random() * queue.length);
                // console.log(player1Index, player2Index);
                if (player1Index === player2Index) return;
                // q = a queue in 'queues'
                // queue = array of session ids from a queue
                makeMatch(q[queue[player1Index]], q[queue[player2Index]]);
            }, 1000, q);
        }

        Object.keys(this.queues).map(queueKey => {
            attemptMatchMaking(this.queues[queueKey]);
        })
    }
    checkMatchMakingQueues.call(this);
}

var MM = new MatchMaking();

export function Login (data, req, res) {
    var LoginRequest = protos.messages.LoginRequest;
    var Result = protos.messages.Result;
    var Status = protos.enums.Status;

    var LoginRequestMessage;
    try {
        LoginRequestMessage = LoginRequest.decode(data);
        console.log(LoginRequestMessage);

        res.cookie("username", LoginRequestMessage.login);
        var nonce = uuid();
        AuthPool[LoginRequestMessage.login] = {
            nonce,
            username: LoginRequestMessage.login
        };
    } catch (e) {
        console.error(e);
        return false;
    }

    var ResultPayload = {
        result: Status.S_SUCCESS
    };
    return this.makeFinalBuffer(Result, ResultPayload)
}
export function Logout (data, req, res) {
    var Result = protos.messages.Result;
    var Status = protos.enums.Status;

    var ResultPayload = {
        result: Status.S_SUCCESS
    };
    return this.makeFinalBuffer(Result, ResultPayload);
}
export function PingTest (data, req, res) {
    var Result = protos.messages.Result;
    var PingTestResult = protos.messages.PingTestResult;
    var GameEndpointConfig = protos.messages.GameEndpointConfig;
    var NetworkAddr = protos.messages.NetworkAddr;
    var Status = protos.enums.Status;

    var PingTestResultPayload = {
        config: GameEndpointConfig.create({
            slot: 0,
            server: NetworkAddr.create({
                hostName: "127.0.0.1",
                port: 42424,
            }),
            secret: 123456789,
            pingScoreThreshold: 1000,
            // sharedKey: new Buffer("sesh"),
        })
    }

    Users[req.cookies.session].events.push(Events.PingTestComplete);

    var ResultPayload = {
        result: Status.S_SUCCESS,
        content: PingTestResult.encode(
            PingTestResult.create(PingTestResultPayload)
        ).finish()
    };
    return this.makeFinalBuffer(Result, ResultPayload)
}
export function GetGameProfile (data, req, res) {
    var Result = protos.messages.Result;
    var GameProfile = protos.messages.GameProfile;
    var PlayerStats = protos.messages.PlayerStats;
    var CharacterStats = protos.messages.CharacterStats;
    var PlayerPreferences = protos.messages.PlayerPreferences;
    var CharacterSpec = protos.messages.CharacterSpec;
    var VariantSpec = protos.messages.VariantSpec;
    var ClientFeatureSet = protos.messages.ClientFeatureSet;
    var FeatureValue = protos.messages.FeatureValue;

    var Status = protos.enums.Status;

    var GameProfilePayload = {
        accountId: getNextUniqueID(),
        handle: `${Users[req.cookies.session].username || "User"} ${getNextUniqueID()}`,
        givenName: "Foo Bar",
        locale: "en-US",
        stats: PlayerStats.create({
            xpLevel: 0,
            xp: 0,
            wins: 0,
            losses: 0,
            charStats: CharacterStats.create({
                typeName: "foobar",
                xpLevel: 0,
                xp: 0,
                wins: 0,
                losses: 0,
                levelXpMin: 0,
            }),
            levelXpMin: 0,
            winStreak: 0,
            echelon: 0,
            tier: 0,
            points: 0,
            tierMaxPoints: 0,
            rankedStanding: 0,
        }),
        playerPrefs: PlayerPreferences.create({
            selectedChar: "chel",
            localPlayerPref: Buffer.from(""),
            charPrefs: CharacterSpec.create({
                typeName: "pref1",
                secondaryMeter: 1,
                variants: VariantSpec.create({
                    specials: 3
                }),
            }),
        }),
        featureSet: ClientFeatureSet.create({
            feature: FeatureValue.create({
                tag: "foo",
                value: "bar",
            })
        }),
    };
    Users[req.cookies.session].profile = GameProfilePayload;
    var ResultPayload = {
        result: Status.S_SUCCESS,
        content: GameProfile.encode(
            GameProfile.create(GameProfilePayload)
        ).finish()
    };
    return this.makeFinalBuffer(Result, ResultPayload)
}
export function GetGameSessionTicket (data, req, res) {
    var GetGameSessionTicketRequest = protos.messages.GetGameSessionTicketRequest;
    var GetGameSessionTicketResult = protos.messages.GetGameSessionTicketResult;
    var Result = protos.messages.Result;
    var GameType = protos.enums.GameType;
    var Status = protos.enums.Status;

    var nonce = AuthPool[req.cookies.username].nonce;
    var GetGameSessionTicketResultMessage = GetGameSessionTicketResult.create({
        game: GameType.GT_RISING_THUNDER,
        nonce
    });

    var ResultPayload = {
        result: Status.S_SUCCESS,
        content: GetGameSessionTicketResult.encode(GetGameSessionTicketResultMessage).finish()
    };
    return this.makeFinalBuffer(Result, ResultPayload);
}
export function RedeemGameSessionTicket (data, req, res) {
    var RedeemGameSessionTicketRequest = protos.messages.RedeemGameSessionTicketRequest;
    var Result = protos.messages.Result;
    var Status = protos.enums.Status;

    var RedeemGameSessionTicketRequestMessage = RedeemGameSessionTicketRequest.decode(data).toJSON();
    console.log(RedeemGameSessionTicketRequestMessage);
    const { nonce } = RedeemGameSessionTicketRequestMessage;

    Users[nonce] = new User(AuthPool[req.cookies.username]);
    delete AuthPool[req.cookies.username];

    res.cookie("session", nonce);

    var ResultPayload = {
        result: Status.S_SUCCESS
    };
    return this.makeFinalBuffer(Result, ResultPayload);
}
export function GetMatch (data, req, res) {
    var GetMatchRequest = protos.messages.GetMatchRequest;
    var Result = protos.messages.Result;

    var message = GetMatchRequest.decode(data).toJSON();
    MM.addToQueue({
        session: req.cookies.session,
        request: message
    })

    // Enums
    var Status = protos.enums.Status;

    var ResultPayload = {
        result: Status.S_SUCCESS,
    };
    return this.makeFinalBuffer(Result, ResultPayload);
}
export function CancelGetMatch (data, req, res) {
    var GetMatchRequest = protos.messages.GetMatchRequest;
    var Result = protos.messages.Result;

    var message = GetMatchRequest.decode(data).toJSON();
    MM.removeFromQueue({
        session: req.cookies.session
    })

    // Enums
    var Status = protos.enums.Status;

    var ResultPayload = {
        result: Status.S_SUCCESS,
    };
    return this.makeFinalBuffer(Result, ResultPayload);
}
export function CreateLobby (data) {
    var CreateLobbyRequest = protos.messages.CreateLobbyRequest;
    var Result = protos.messages.Result;
    var Status = protos.enums.Status;
    var CreateLobbyRequestMessage = CreateLobbyRequest.decode(data).toJSON();
    console.log(CreateLobbyRequestMessage);

    var ResultPayload = {
        result: Status.S_SUCCESS
    };
    return this.makeFinalBuffer(Result, ResultPayload)
}
export function JoinLobbyByCode (data) {
    var GetLobbyJoinCodeRequest = protos.messages.GetLobbyJoinCodeRequest;
    var Result = protos.messages.Result;
    var Status = protos.enums.Status;

    try {
        var GetLobbyJoinCodeRequestMessage = GetLobbyJoinCodeRequest.decode(data).toJSON();
        console.log(GetLobbyJoinCodeRequestMessage);
    } catch (e) {
        console.error(e);
        return;
    }

    var ResultPayload = {
        result: Status.S_SUCCESS
    };
    return this.makeFinalBuffer(Result, ResultPayload)
}
export function GetEvent (data, req, res) {
    var GetEventResult = protos.messages.GetEventResult;
    var Result = protos.messages.Result;
    var Status = protos.enums.Status;

    if (Users[req.cookies.session]) {
        if (Users[req.cookies.session].events.length > 0) {
            var GetEventResultMessage = GetEventResult.create({
                version: "3",
                event: Users[req.cookies.session].events.shift()(data, req, res)
            });

            // var eventsLength = Users[req.cookies.session].events.length;
            // while(eventsLength > 0) {
            //   var func = Users[req.cookies.session].events.shift();
            //   if(!func) break;
            //   GetEventResultMessage.event.push(func(data, req, res));
            // }

            var ResultPayload: Record<string, any> = {
                result: Status.S_SUCCESS
            };
            // if(GetEventResultMessage.event.length > 0) {
            ResultPayload.content = GetEventResult.encode(GetEventResultMessage).finish();
            // }
            console.log(GetEventResultMessage);
            return this.makeFinalBuffer(Result, ResultPayload)
        } else {
            var ResultPayload: Record<string, any> = {
                result: Status.S_SUCCESS
            };
            return this.makeFinalBuffer(Result, ResultPayload)
        }
    } else {
        var ResultPayload: Record<string, any> = {
            result: Status.S_ERROR,
            msg: makeErrorMessage("No user found tied to this session")
        };
        return this.makeFinalBuffer(Result, ResultPayload)
    }
}
export function EventPing (data, req, res) {
    var Result = protos.messages.Result;

    var Status = protos.enums.Status;

    var ResultPayload = {
        result: Status.S_SUCCESS
    };
    return this.makeFinalBuffer(Result, ResultPayload)
}

export function makeFinalBuffer (msg, Payload) {
    var errMsg = msg.verify(Payload);
    if (errMsg) {
        console.log(errMsg);
        return false;
    }

    var message = msg.create(Payload);
    // console.log("message:", message);

    var buffer = msg.encode(message).finish();

    return buffer;
}
*/ 

import * as pb from 'protobufjs';
// import * as uuid from "uuid/v1";

export class Protos {
    onProtosLoad: () => void

    messages: Record<string, pb.Type>;
    // {
    //     WaitMatchProgressEvent: pb.Type,
    //     Result: pb.Type,
    //     // message Result {
    //     //     optional Status result = 1 [default = S_UNKNOWN];
    //     //     optional LocMsg msg = 4;
    //     //     optional bytes content = 10;
    //     //     optional string deprecated_msg_id = 2;
    //     //     optional MsgParam deprecated_msg_params = 3;
    //     // }
    //     PingTestResult: pb.Type,
    //     // message PingTestResult {
    //     //     optional GameEndpointConfig config = 1;
    //     // }
    //     GameEndpointConfig: pb.Type,
    //     // message GameEndpointConfig {
    //     //     optional int32 slot = 1;
    //     //     optional NetworkAddr server = 2;
    //     //     optional fixed64 secret = 3;
    //     //     optional float ping_score_threshold = 4;
    //     //     optional bytes shared_key = 5;
    //     // }
    //     NetworkAddr: pb.Type,
    //     // message NetworkAddr {
    //     //     optional string host_name = 1;
    //     //     optional int32 port = 2;
    //     // }
    //     LoginRequest: pb.Type,
    //     // message LoginRequest {
    //     // 	// Either handle or e-mail address can be used.
    //     // 	optional string login = 1;
    //     // 	optional string password = 2;
    //     //
    //     // 	// Client build.  May require certain version to login.
    //     // 	optional string build_version = 5;
    //     //
    //     // 	// Remote IP now passed via XFF header by TBFE
    //     // 	optional string __deprecated_remote_ip = 10;
    //     // }
    //     GetGameSessionTicketRequest: pb.Type,
    //     // message GetGameSessionTicketRequest {
    //     //     optional GameType game = 1;
    //     //     optional string client_build_version = 2;
    //     // }
    //     GetGameSessionTicketResult: pb.Type,
    //     // message GetGameSessionTicketResult {
    //     //     optional GameType game = 1;
    //     //     optional string nonce = 2;
    //     // }
    //     RedeemGameSessionTicketRequest: pb.Type,
    //     // message RedeemGameSessionTicketRequest {
    //     //     optional GameType game = 1;
    //     //     optional string nonce = 2;
    //     //     optional string build_version = 5;
    //     // }
    //     GetMatchRequest: pb.Type,
    //     // message GetMatchRequest {
    //     //     optional MatchType type = 1;
    //     //     optional int64 arena_id = 2;
    //     //     optional NetworkAddr network = 10;
    //     //     optional CharacterSpec character = 11;
    //     //     optional SkillEstimateType skill_estimate = 15;
    //     // }
    //     CreateLobbyRequest: pb.Type,
    //     // message CreateLobbyRequest {
    //     //     optional LobbyType type = 1;
    //     //     optional string name = 2;
    //     // }
    //     GetLobbyJoinCodeRequest: pb.Type,
    //     // message GetLobbyJoinCodeRequest {
    //     //     optional int64 lobby_id = 1;
    //     // }
    //     GetEventResult: pb.Type,
    //     // message GetEventResult {
    //     //     optional string version = 1;
    //     //     optional Event event = 2;
    //     // }
    //     Event: pb.Type,
    //     // message Event {
    //     //     optional int64 event_id = 1;
    //     //     optional Type type = 2 [default = E_UNKNOWN];
    //     //     optional int64 timestamp_msec = 3;
    //     //     optional FilterChangedEvent filter_changed = 13;
    //     //     optional WaitMatchProgressEvent wait_match_progress = 14;
    //     //     optional MatchCreatedEvent match_created = 15;
    //     //     optional MatchOutcomeEvent match_outcome = 18;
    //     //     optional MatchAbandonedEvent match_abandoned = 21;
    //     //     optional MatchConnectedEvent match_connected = 23;
    //     //     optional MatchOverEvent match_over = 24;
    //     //     optional GameBeginEvent game_begin = 25;
    //     //     optional GameInputEvent game_input = 26;
    //     //     optional GameOverEvent game_over = 27;
    //     //     optional UserCheckNetworkEvent user_check_network = 30;
    //     //     optional UserSessionClosedEvent user_session_closed = 31;
    //     //     optional PingTestCompleteEvent ping_test_complete = 40;
    //     //     optional LobbyJoinEvent lobby_join = 50;
    //     //     optional LobbyLeaveEvent lobby_leave = 51;
    //     //     optional LobbyUpdateEvent lobby_update = 52;
    //     //     optional LobbyMatchStartEvent lobby_match_start = 53;
    //     //
    //     //     enum Type {
    //     //         E_UNKNOWN = 0;
    //     //         E_FILTER_CHANGED = 13;
    //     //         E_WAIT_MATCH_PROGRESS = 14;
    //     //         E_MATCH_CREATED = 15;
    //     //         E_MATCH_OUTCOME = 18;
    //     //         E_MATCH_ABANDONED = 21;
    //     //         E_MATCH_CONNECTED = 23;
    //     //         E_MATCH_OVER = 24;
    //     //         E_GAME_BEGIN = 25;
    //     //         E_GAME_INPUT = 26;
    //     //         E_GAME_OVER = 27;
    //     //         E_USER_CHECK_NETWORK = 30;
    //     //         E_USER_SESSION_CLOSED = 31;
    //     //         E_PING_TEST_COMPLETE = 40;
    //     //         E_LOBBY_JOIN = 50;
    //     //         E_LOBBY_LEAVE = 51;
    //     //         E_LOBBY_UPDATE = 52;
    //     //         E_LOBBY_MATCH_START = 53;
    //     //     }
    //     // }
    //     GetEventRequest: pb.Type,
    //     // message GetEventRequest {
    //     //     optional string version = 1;
    //     // }
    //     PingTestCompleteEvent: pb.Type,
    //     // message PingTestCompleteEvent {
    //     //     optional int32 avg_rtt_ms = 1;
    //     //     optional int32 max_rtt_ms = 2;
    //     //     optional float loss_ratio = 3;
    //     //     optional bool success = 4;
    //     // }
    //     GameProfile: pb.Type,
    //     // message GameProfile {
    //     //     optional int64 account_id = 1;
    //     //     optional string handle = 2;
    //     //     optional string given_name = 3;
    //     //     optional string locale = 4;
    //     //     optional PlayerStats stats = 10;
    //     //     optional PlayerPreferences player_prefs = 13;
    //     //     optional ClientFeatureSet feature_set = 20;
    //     // }
    //     PlayerStats: pb.Type,
    //     // message PlayerStats {
    //     //     optional int32 xp_level = 1;
    //     //     optional int32 xp = 2;
    //     //     optional int32 wins = 3;
    //     //     optional int32 losses = 4;
    //     //     optional CharacterStats char_stats = 5;
    //     //     optional int32 level_xp_min = 6;
    //     //     optional int32 win_streak = 10;
    //     //     optional int32 echelon = 20;
    //     //     optional int32 tier = 21;
    //     //     optional int32 points = 22;
    //     //     optional int32 tier_max_points = 23;
    //     //     optional int32 ranked_standing = 24;
    //     // }
    //     CharacterStats: pb.Type,
    //     // message CharacterStats {
    //     //     optional string type_name = 1;
    //     //     optional int32 xp_level = 2;
    //     //     optional int32 xp = 3;
    //     //     optional int32 wins = 4;
    //     //     optional int32 losses = 5;
    //     //     optional int32 level_xp_min = 6;
    //     // }
    //     PlayerPreferences: pb.Type,
    //     // message PlayerPreferences {
    //     //     optional string selected_char = 1;
    //     //     optional bytes local_player_prefs = 2;
    //     //     optional CharacterSpec char_prefs = 10;
    //     // }
    //     ClientFeatureSet: pb.Type,
    //     // message ClientFeatureSet {
    //     //     optional FeatureValue feature = 1;
    //     // }
    //     FeatureValue: pb.Type,
    //     // message FeatureValue {
    //     //     optional string tag = 1;
    //     //     optional string value = 2;
    //     // }
    //     MatchCreatedEvent: pb.Type,
    //     // A new match was created.
    //     // Target queue: match
    //     // message MatchCreatedEvent {
    //     // 	optional GameConfig game_config = 3;
    //     //
    //     // 	optional int64 __deprecated_match_id = 1;
    //     // 	repeated int64 __deprecated_user_id = 2;
    //     // }
    //     GameConfig: pb.Type,
    //     Player: pb.Type,
    //     // Configuration for a single game in a match, suitable for sending
    //     // to one of the participating clients.
    //     // message GameConfig {
    //     // 	message Player {
    //     // 		optional int64 user_id = 1;
    //     // 		optional string handle = 2;
    //     // 		optional CharacterSpec character = 3;
    //     //
    //     // 		optional int32 echelon = 10;
    //     // 		optional int32 tier = 11;
    //     // 	}
    //     //
    //     // 	// Each player's character info.
    //     // 	repeated Player player = 2;
    //     //
    //     // 	// Global options for this game.
    //     // 	optional GameOptions options = 5;
    //     //
    //     // 	// The server-assigned unique ID of the match.
    //     // 	optional int64 match_id = 3;
    //     //
    //     // 	// deprecated
    //     // 	optional int32 __deprecated_game_number = 4;
    //     // }
    //     GameOptions: pb.Type,
    //     // message GameOptions {
    //     // 	enum Mode {
    //     // 		// Fight to the finish -- best of N games, etc.
    //     // 		GM_FIGHT = 1;
    //     //
    //     // 		// No one dies -- client exit completes the match.
    //     // 		GM_TRAINING = 2;
    //     // 	}
    //     //
    //     // 	optional Mode mode = 1		[default = GM_FIGHT];
    //     //
    //     // 	// Stage etc.
    //     // 	optional TrainingGameOptions training_options = 20;
    //     // }
    //     CharacterSpec: pb.Type,
    //     // message CharacterSpec {
    //     // 	// Type name of character, e.g. "atl"
    //     // 	optional string type_name = 1;
    //     //
    //     // 	// Selected option for secondary meter (defensive or offensive)
    //     // 	optional int32 secondary_meter = 10;
    //     //
    //     // 	// Special move variants selection
    //     // 	optional VariantSpec variants = 22;
    //     // }
    //     VariantSpec: pb.Type,
    //     // message VariantSpec {
    //     // 	// 4-element array for variant ids for special 1, 2, 3 and super
    //     // 	repeated int32 specials = 1;
    //     // }
    //     LocMsg: pb.Type,
    //     // message LocMsg {
    //     // 	optional string id = 1;
    //     // 	repeated MsgParam param = 2;
    //     // }
    //     // Parameters to a message.  Using a message type
    //     // for each primitive works around protobuf-net's limitation
    //     // of not recording unset primitives.
    //     MsgParam: pb.Type,
    //     MsgParamStr: pb.Type,
    //     // message MsgParam {
    //     // 	message Str {
    //     // 	optional string value = 1;
    //     // 	}
    //     // 	message Int {
    //     // 	optional int32 value = 1;
    //     // 	}
    //     // 	message Float {
    //     // 	optional float value = 1;
    //     // 	}
    //     // 	optional Str str = 1;
    //     // 	optional Int int = 2;
    //     // 	optional Float flt = 3;
    //     // }
    //     GameSessionRequest: pb.Type,
    //     // message GameSessionRequest {
    //     // 	// Clients of the portal, should be exactly 2.
    //     // 	repeated ClientSpec spec = 1;
    //     //
    //     // 	// Queue to publish input events.
    //     // 	optional EventQueue observer = 2;
    //     //
    //     // 	// Allow GameResetRequest to reset options for next game?
    //     // 	optional bool allow_reset = 3;
    //     // }
    //     ClientSpec: pb.Type,
    //     // message ClientSpec {
    //     // 	// Secret keys for authorize client packets.
    //     // 	optional fixed64 secret = 1;
    //     //
    //     // 	// Client IP address.  Host byte order.
    //     // 	// XXX: Not actually used.
    //     // 	optional int32 client_ip = 2;
    //     //
    //     // 	// The initial character spec for the client.
    //     // 	optional tbmatch.CharacterSpec character = 3;
    //     //
    //     // 	// The 128-bit shared key used to hash client packets
    //     // 	optional bytes shared_key = 4;
    //     // }
    // };

    enums: Record<string, pb.Enum>;
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

    constructor() {
        var root = new pb.Root({
            root: "/proto3 versions",
        });

        root.resolvePath = function(origin: string, file: string): string {
            var str = `${this.options.root}/${file}`
            // console.log(`Origin: "${origin}"; String: "${str}"`);
            return str;
        }

        // console.log(root.resolvePath);

        pb.load([
            "tbui/tbcharacter.proto",
            "tbmatch/event.proto",
            "tbmatch/match.proto",
            "tbportal/portal.proto",
            "tbrpc/tbrpc.proto",
            "tbmatch/session.proto",
        ], root)
            .then(root => root.resolveAll())
            .then(root => {
                this.messages = {
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

                this.enums = {
                    Status: root.lookupEnum(["tbrpc", "Status"]),
                    GameType: root.lookupEnum(["tbmatch", "GameType"]),
                };

                this.onProtosLoad();
            })
            .catch(e => console.error(`Problem loading protos: ${e}`));
    }
}

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
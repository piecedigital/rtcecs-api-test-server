import * as pb from 'protobufjs';
// import * as uuid from "uuid/v1";

// WaitMatchProgressEvent: pb.Type,
interface Result extends pb.Type {
    result: PBEnums["Status"], // optional Status = 1 [default = S_UNKNOWN];
    msg: PBMessages["LocMsg"], // optional LocMsg = 4;
    content: number, // optional bytes = 10;
    deprecated_msg_id: string, // optional string = 2;
    deprecated_msg_params: PBMessages["MsgParam"], // optional MsgParam = 3;
}
interface PingTestResult extends pb.Type  {
    config: PBMessages["GameEndpointConfig"] // optional GameEndpointConfig = 1;
}
interface GameEndpointConfig extends pb.Type {
    slot: number, // optional int32 = 1;
    server: PBMessages["NetworkAddr"], // optional NetworkAddr = 2;
    secret: number, // optional fixed64 = 3;
    ping_score_threshold: number, // optional float = 4;
    shared_key: number, // optional bytes = 5;
}
interface NetworkAddr extends pb.Type {
    host_name: string, // optional string = 1;
    port: number, // optional int32 = 2;
}
interface LoginRequest extends pb.Type {
    // Either handle or e-mail address can be used.
    login: string, // optional string = 1;
    password: string, // optional string = 2;

    // Client build.  May require certain version to login.
    build_version: string, // optional string = 5;

    // Remote IP now passed via XFF header by TBFE
    __deprecated_remote_ip: string, // optional string = 10;
}
interface GetGameSessionTicketRequest extends pb.Type {
    game: PBEnums["GameType"], // optional GameType = 1;
    client_build_version: string, // optional string = 2;
}
interface GetGameSessionTicketResult extends pb.Type {
    game: PBEnums["GameType"], // optional GameType = 1;
    nonce: string, // optional string = 2;
}
interface RedeemGameSessionTicketRequest extends pb.Type {
    game: PBEnums["GameType"], // optional GameType = 1;
    nonce: string, // optional string = 2;
    build_version: string, // optional string = 5;
}
interface GetMatchRequest extends pb.Type {
    type: PBEnums["MatchType"], // optional MatchType = 1;
    arena_id: number, // optional int64 = 2;
    network: PBMessages["NetworkAddr"], // optional NetworkAddr = 10;
    character: PBMessages["CharacterSpec"], // optional CharacterSpec = 11;
    skill_estimate: PBEnums["SkillEstimateType"], // optional SkillEstimateType = 15;
}
interface CreateLobbyRequest extends pb.Type {
    type: PBEnums["LobbyType"], // optional LobbyType = 1;
    name: string, // optional string = 2;
}
interface GetLobbyJoinCodeRequest extends pb.Type {
    lobby_id: number, // optional int64 = 1;
}
interface GetEventResult extends pb.Type {
    version: string, // optional string = 1;
    event: PBMessages["Event"], // optional Event = 2;
}
interface Event extends pb.Type {
    event_id: number, // optional int64 = 1;
    type: {
        E_UNKNOWN: 0,
        E_FILTER_CHANGED: 13,
        E_WAIT_MATCH_PROGRESS: 14,
        E_MATCH_CREATED: 15,
        E_MATCH_OUTCOME: 18,
        E_MATCH_ABANDONED: 21,
        E_MATCH_CONNECTED: 23,
        E_MATCH_OVER: 24,
        E_GAME_BEGIN: 25,
        E_GAME_INPUT: 26,
        E_GAME_OVER: 27,
        E_USER_CHECK_NETWORK: 30,
        E_USER_SESSION_CLOSED: 31,
        E_PING_TEST_COMPLETE: 40,
        E_LOBBY_JOIN: 50,
        E_LOBBY_LEAVE: 51,
        E_LOBBY_UPDATE: 52,
        E_LOBBY_MATCH_START: 53,
    }, // optional Type = 2 [default = E_UNKNOWN];
    timestamp_msec: number, // optional int64 = 3;
    filter_changed: PBMessages["FilterChangedEvent"], // optional FilterChangedEvent = 13;
    wait_match_progress: PBMessages["WaitMatchProgressEvent"], // optional WaitMatchProgressEvent = 14;
    match_created: PBMessages["MatchCreatedEvent"], // optional MatchCreatedEvent = 15;
    match_outcome: PBMessages["MatchOutcomeEvent"], // optional MatchOutcomeEvent = 18;
    match_abandoned: PBMessages["MatchAbandonedEvent"], // optional MatchAbandonedEvent = 21;
    match_connected: PBMessages["MatchConnectedEvent"], // optional MatchConnectedEvent = 23;
    match_over: PBMessages["MatchOverEvent"], // optional MatchOverEvent = 24;
    game_begin: PBMessages["GameBeginEvent"], // optional GameBeginEvent = 25;
    game_input: PBMessages["GameInputEvent"], // optional GameInputEvent = 26;
    game_over: PBMessages["GameOverEvent"], // optional GameOverEvent = 27;
    user_check_network: PBMessages["UserCheckNetworkEvent"], // optional UserCheckNetworkEvent = 30;
    user_session_closed: PBMessages["UserSessionClosedEvent"], // optional UserSessionClosedEvent = 31;
    ping_test_complete: PBMessages["PingTestCompleteEvent"], // optional PingTestCompleteEvent = 40;
    lobby_join: PBMessages["LobbyJoinEvent"], // optional LobbyJoinEvent = 50;
    lobby_leave: PBMessages["LobbyLeaveEvent"], // optional LobbyLeaveEvent = 51;
    lobby_update: PBMessages["LobbyUpdateEvent"], // optional LobbyUpdateEvent = 52;
    lobby_match_start: PBMessages["LobbyMatchStartEvent"], // optional LobbyMatchStartEvent = 53;
}
interface GetEventRequest extends pb.Type {
    version: number, // optional string = 1;
}
interface PingTestCompleteEvent extends pb.Type {
    avg_rtt_ms: number, // optional int32 = 1;
    max_rtt_ms: number, // optional int32 = 2;
    loss_ratio: number, // optional float = 3;
    success: number, // optional bool = 4;
}
interface GameProfile extends pb.Type {
    account_id: number, // optional int64 = 1;
    handle: number, // optional string = 2;
    given_name: number, // optional string = 3;
    locale: number, // optional string = 4;
    stats: number, // optional PlayerStats = 10;
    player_prefs: number, // optional PlayerPreferences = 13;
    feature_set: number, // optional ClientFeatureSet = 20;
}
interface PlayerStats extends pb.Type {
    xp_level: number, // optional int32 = 1;
    xp: number, // optional int32 = 2;
    wins: number, // optional int32 = 3;
    losses: number, // optional int32 = 4;
    char_stats: number, // optional CharacterStats = 5;
    level_xp_min: number, // optional int32 = 6;
    win_streak: number, // optional int32 = 10;
    echelon: number, // optional int32 = 20;
    tier: number, // optional int32 = 21;
    points: number, // optional int32 = 22;
    tier_max_points: number, // optional int32 = 23;
    ranked_standing: number, // optional int32 = 24;
}
interface CharacterStats extends pb.Type {
    type_name: number, // optional string = 1;
    xp_level: number, // optional int32 = 2;
    xp: number, // optional int32 = 3;
    wins: number, // optional int32 = 4;
    losses: number, // optional int32 = 5;
    level_xp_min: number, // optional int32 = 6;
}
interface PlayerPreferences extends pb.Type {
    selected_char: number, // optional string = 1;
    local_player_prefs: string, // optional bytes = 2;
    char_prefs: number, // optional CharacterSpec = 10;
}
interface ClientFeatureSet extends pb.Type {
    feature: number, // optional FeatureValue = 1;
}
interface FeatureValue extends pb.Type {
    tag: number, // optional string = 1;
    value: number, // optional string = 2;
}
// A new match was created.
// Target queue: match
interface MatchCreatedEvent extends pb.Type {
    game_config: number, // optional GameConfig = 3;
    __deprecated_match_id: number, // optional int64 = 1;
    __deprecated_user_id: number, // repeated int64 = 2;
}
interface Player extends pb.Type {}
// Configuration for a single game in a match, suitable for sending
// to one of the participating clients.
interface GameConfig extends pb.Type {
    Player: {
        user_id: number, // optional int64 = 1;
        handle: number, // optional string = 2;
        character: PBMessages["CharacterSpec"], // optional CharacterSpec = 3;
        echelon: number, // optional int32 = 10;
        tier: number, // optional int32 = 11;
    }

    // Each player's character info.
    player: PBMessages["Player"], // repeated Player = 2;

    // Global options for this game.
    options: PBMessages["GameOptions"], // optional GameOptions = 5;

    // The server-assigned unique ID of the match.
    match_id: number, // optional int64 = 3;

    // deprecated
    __deprecated_game_number: number, // optional int32 = 4;
}
interface GameOptions extends pb.Type {
    Mode: {
        // Fight to the finish -- best of N games, etc.
        GM_FIGHT: 1,

        // No one dies -- client exit completes the match.
        GM_TRAINING: 2,
    },
    mode: GameOptions["Mode"], // optional Mode = 1 [default = GM_FIGHT];

    // Stage etc.
    training_options: number, // optional TrainingGameOptions = 20;
}
interface CharacterSpec extends pb.Type {
    // Type name of character, e.g. "atl"
    type_name: number, // optional string = 1;

    // Selected option for secondary meter (defensive or offensive)
    secondary_meter: number, // optional int32 = 10;

    // Special move variants selection
    variants: PBMessages["VariantSpec"], // optional  = 22;
}
interface VariantSpec extends pb.Type {
    // 4-element array for variant ids for special 1, 2, 3 and super
    specials: number, // repeated int32 = 1;
}
interface LocMsg extends pb.Type {
    id: number, // optional string = 1;
    param: number, // repeated MsgParam = 2;
}
// Parameters to a message.  Using a message type
// for each primitive works around protobuf-net's limitation
// of not recording unset primitives.
interface MsgParam extends pb.Type {
    Str: {
        value: number, // optional string = 1;
    },
    Int: {
        value: number, // optional int32 = 1;
    },
    Float: {
        value: number, // optional float = 1;
    },
    str: number, // optional Str = 1;
    int: number, // optional Int = 2;
    flt: number, // optional Float = 3;
}
interface GameSessionRequest extends pb.Type {
    // Clients of the portal, should be exactly 2.
    spec: number, // repeated ClientSpec = 1;

    // Queue to publish input events.
    observer: number, // optional EventQueue = 2;

    // Allow GameResetRequest to reset options for next game?
    allow_reset: number, // optional bool = 3;
}
interface ClientSpec extends pb.Type {
    // Secret keys for authorize client packets.
    secret: number, // optional fixed64 = 1;

    // Client IP address.  Host byte order.
    // XXX: Not actually used.
    client_ip: number, // optional int32 = 2;

    // The initial character spec for the client.
    CharacterSpec: number, // optional tbmatch character = 3;

    // The 128-bit shared key used to hash client packets
    shared_key: string, // optional bytes = 4;
}
interface FilterChangedEvent extends pb.Type {}
interface WaitMatchProgressEvent extends pb.Type {
    Status: {
        STATUS_ZERO: 0,
        // Waiting for an available match.
        WAITING: 1,

        // Gave up waiting.
        TIMEOUT: 2,

        // Match found.
        MATCH: 3,

        // Request canceled by user.
        CANCEL: 4,

        // Failed to enter queue.  A ping test must be performed before
        // re-queuing for a match.
        PING_TEST_REQUIRED: 5,

        // The build version is not allowed to enter the queue.
        // A client update is required.
        DENY_VERSION: 6,

        // The match-making server is down for maintenance.  Try again later.
        SERVER_MAINTENANCE: 7,
    },

    status: WaitMatchProgressEvent["Status"]

    // The ID of the newly created match.
    match_id: number, // = 2;

    // Game config to run for game 0 (when status == MATCH).
    config: PBMessages["GameConfig"],

    // Player slot and connection for game 0 (when status == MATCH).
    endpoint: PBMessages["GameEndpointConfig"], // = 4;

    // Some extra stats for a WAITING progress.
    users_waiting: number, // int32 = 21;

    // DEPRECATED FIELDS
    __deprecated_users_online: number, // int32  = 20;
}
interface MatchOutcomeEvent extends pb.Type {
    // What happened in the match.
    result: PBMessages["MatchResult"], // = 1;
    // Spoils of war.
    exp: PBMessages["MatchExperience"], // = 2;
    // Updates to user stats.
    stats_update: PBMessages["PlayerStats"], // = 3;
}
interface MatchResult extends pb.Type {
    // Match ID.
    match_id: number, // = 1;

    // Type of match played.
    type: MatchType, // = 2;

    // Character played.
    character_type_name: string, // = 3;

    // Won or lost?
    outcome: PBEnums["MatchOutcome"], // = 4;

    // True if we won because the opponent disconnected.
    peer_disconnect: boolean, // = 5;

    // Match start time (RFC3339 string).
    start_time: string, // = 6;

    // Match duration in seconds.
    duration_secs: number, // = 7;

    // Number of games played and won.
    game_count: number, // = 8;
    games_won: number, // = 9;

    // Opponent.
    opponent_character_type_name: string, // = 20;
    opponent_user_id: number, // = 21;
    opponent_handle: string, // = 22;

    // Deprecated fields.
    __deprecated_has_replay: boolean, // = 30;
}
interface MatchExperience extends pb.Type {
    // Starting player total XP.
    player_xp: number, //  = 10;

    // Starting player level.
    player_level: number, //  = 11;

    // Experience thresholds for current player level (index 0),
    // plus a few more in case the player levels up.
    player_level_xp_min: number, // repeated  = 12;

    // XP earned from the match.
    player_match_xp: number, //  = 21;
    // XP bonus for winning.
    player_win_bonus_xp: number, //  = 22;
    // XP boost.
    player_boost_xp: number, //  = 23;

    // Original character XP.
    character_start_xp: number, //  = 30;
    // XP earned by character from the match.
    character_match_xp: number, //  = 31;
    // Character XP bonus for winning.
    character_win_bonus_xp: number, //  = 32;
    // character XP boost.
    character_boost_xp: number, //  = 33;
    // Starting character level.
    character_level: number, //  = 35;

    // Experience thresholds for current character level (index 0),
    // plus a few more in case the character levels up.
    character_level_xp_min: number, // repeated  = 34;

    // Ranking tier points awarded. Could be 0 or negative.
    rank_points: number, //  = 40;
}
interface MatchAbandonedEvent extends pb.Type {
    match_id: number, //int64 = 1;
}
interface MatchConnectedEvent extends pb.Type {
    match_id: number, // int64 = 1;
}
interface MatchOverEvent extends pb.Type {
    match_id: number, // int64 = 1;

    Status: {
        STATUS_ZERO: 0,
        // Match did not complete due to a server error, desync
        // or a network problem that affected both players.
        ABANDONED: 1,

        // Match ended because one player disconnected.
        DISCONNECT: 2,

        // Match ended with a valid outcome.
        VALID: 3,
    },
    status: MatchOverEvent["Status"], // = 2;
    // if status==VALID, player slot that won if any.
    win_slot: number, // int32  = 3;
    // if status==VALID, true iff the result was a draw.
    draw: boolean, // bool  = 4;
}
interface GameBeginEvent extends pb.Type {
    match_id: number, // int64 = 1;
    next_game: PBMessages["NextGameConfig"], // NextGameConfig = 2;

    // Populated from the sequenceId field in Redis under the match's key.
    // Should be used by the client, if present, to determine whether to process this event.
    sequence_id: number, // int32 = 3;
}
interface NextGameConfig extends pb.Type {
    // The new character specs to use for the next game.
    character_spec: PBMessages["CharacterSpec"], // repeated CharacterSpec = 1;

    // Proposed game options for the next game.
    // May only be specified during a training match.
    options: PBMessages["GameOptions"], // GameOptions = 2;
}
interface GameInputEvent extends pb.Type {
    match_id: number, // int64 = 1;

    // First frame number of input stored in bits.
    start_frame: number, // int32 = 2;

    // Number of bits to read from bits.
    num_bits: number, // int32 = 3;

    // Encoded frame inputs.
    bits: string, // bytes = 4;

    // True if this is the last set of inputs for a game.
    final: boolean, // bool = 5;
}
interface GameOverEvent extends pb.Type {
    match_id: number, // int64 = 1;
    report: PBMessages["GameReport"], // GameReport = 2;
    sequence_id: number, // int32 = 3;
}
interface GameReport extends pb.Type {
    // Player slot (0, 1) that won the match.
    win_slot: number, // int32 = 1;

    // Was match a draw?
    draw: boolean, // bool = 2;
}
interface UserCheckNetworkEvent extends pb.Type {}
interface UserSessionClosedEvent extends pb.Type {
    reason_msg_id: string, // string = 1;
}
interface LobbyJoinEvent extends pb.Type {
    // Current state of the joined lobby.
    lobby: PBMessages["Lobby"], // Lobby = 1;
}
interface LobbyLeaveEvent extends pb.Type {
    lobby_id: number, // int64 = 1;
    Reason: {
        REASON_ZERO: 0,
        // Left lobby voluntarily.
        LEFT: 1,
        // Banned from the lobby.
        BANNED: 2,
        // Removed by owner, but not banned permanently
        REMOVED: 3,
    }
    reason: LobbyLeaveEvent["Reason"], // = 2;
}
interface LobbyUpdateEvent extends pb.Type {
    lobby_id: number, // int64 = 1;
	// Members added or whose state changed.
    update: PBMessages["LobbyMember"], // repeated LobbyMember = 2;
	// Members who left.
    removed: number, // repeated int64 = 3;
	// Current state of the lobby.
    state: PBEnums["LobbyState"], // LobbyState = 4;
	// For state == LS_MATCH, GameConfig that started the running match.
    game_config: PBMessages["GameConfig"], // GameConfig = 5;
	// Order of queued members by account_id.
    queue: number, // repeated int64 = 6;
	// Options for games generated by this lobby.
    options: PBMessages["GameOptions"], // GameOptions = 7;
}
interface LobbyMatchStartEvent extends pb.Type {
	lobby_id: number, // int64 = 1;
	// The ID of the newly created match.
	match_id: number, // int64 = 2;
	// Game config for first game of the match.
    config: PBMessages["GameConfig"], // GameConfig = 3;
	// Player slot and connection.
    endpoint: PBMessages["GameEndpointConfig"], // GameEndpointConfig = 4;
}
interface Lobby extends pb.Type {
    // Unique identifier for this lobby.
    lobby_id: number, // int64 = 1;
    // Style of gameplay conducted in the lobby.
    type: PBEnums["LobbyType"], // LobbyType = 2;
    // Name given by creator.
    name: string, // string = 3;
    // Current state of the lobby.
    // Updated by LobbyStatusEvent.
    state: PBEnums["LobbyState"], // LobbyState = 5;
    // People currently in the lobby.
    // Updated by LobbyMemberUpdateEvent.
    member: PBMessages["LobbyMember"], // repeated LobbyMember = 10;
    // Options included for the next match generated by this lobby.
    options: PBMessages["GameOptions"], // GameOptions = 11;
    // For state == LS_MATCH, start config of the game being played.
    game_config: PBMessages["GameConfig"], // GameConfig = 20;
    // For type == LT_QUEUED, this is the current queue order of account IDs.
    // Updated by LobbyMemberUpdateEvent.
    queue: number, // repeated int64 = 30;
}
interface LobbyMember extends pb.Type {
    account_id: number, // int64 = 1;
    handle: string, // string = 2;

    // Lobby owner?
    owner: boolean, // bool = 10;

    // Ready for next match?
    ready: boolean, // bool = 11;
}

interface PBMessages {
    Result: Result,
    PingTestResult: PingTestResult,
    GameEndpointConfig: GameEndpointConfig,
    NetworkAddr: NetworkAddr,
    LoginRequest: LoginRequest,
    GetGameSessionTicketRequest: GetGameSessionTicketRequest,
    GetGameSessionTicketResult: GetGameSessionTicketResult,
    RedeemGameSessionTicketRequest: RedeemGameSessionTicketRequest,
    GetMatchRequest: GetMatchRequest,
    CreateLobbyRequest: CreateLobbyRequest,
    GetLobbyJoinCodeRequest: GetLobbyJoinCodeRequest,
    GetEventResult: GetEventResult,
    Event: Event,
    GetEventRequest: GetEventRequest,
    PingTestCompleteEvent: PingTestCompleteEvent,
    GameProfile: GameProfile,
    PlayerStats: PlayerStats,
    CharacterStats: CharacterStats,
    PlayerPreferences: PlayerPreferences,
    ClientFeatureSet: ClientFeatureSet,
    FeatureValue: FeatureValue,
    MatchCreatedEvent: MatchCreatedEvent,
    Player: Player,
    GameConfig: GameConfig,
    GameOptions: GameOptions,
    CharacterSpec: CharacterSpec,
    VariantSpec: VariantSpec,
    LocMsg: LocMsg,
    MsgParam: MsgParam,
    GameSessionRequest: GameSessionRequest,
    ClientSpec: ClientSpec,
    FilterChangedEvent: FilterChangedEvent,
    WaitMatchProgressEvent: WaitMatchProgressEvent,
    MatchOutcomeEvent: MatchOutcomeEvent,
    MatchResult: MatchResult,
    MatchExperience: MatchExperience,
    MatchAbandonedEvent: MatchAbandonedEvent,
    MatchConnectedEvent: MatchConnectedEvent,
    MatchOverEvent: MatchOverEvent,
    NextGameConfig: NextGameConfig,
    GameBeginEvent: GameBeginEvent,
    GameInputEvent: GameInputEvent,
    GameOverEvent: GameOverEvent,
    GameReport: GameReport,
    UserCheckNetworkEvent: UserCheckNetworkEvent,
    UserSessionClosedEvent: UserSessionClosedEvent,
    LobbyJoinEvent: LobbyJoinEvent,
    LobbyLeaveEvent: LobbyLeaveEvent,
    LobbyUpdateEvent: LobbyUpdateEvent,
    LobbyMatchStartEvent: LobbyMatchStartEvent,
    Lobby: Lobby,
    LobbyMember: LobbyMember,
}

enum Status {
    S_SUCCESS = 0,
    S_ERROR = 1,
    S_SERVER_ERROR = 2,
    S_TIMEOUT = 3,
    S_TRANSPORT_ERROR = 4,
    S_UNKNOWN = 128,
}
enum GameType  {
    GT_RISING_THUNDER = 100
}
enum LobbyType {
    LOBBY_TYPE_ZERO = 0,
    LT_QUEUED = 1,
}
enum MatchType {
    MATCH_TYPE_ZERO = 0,
    // Earn experience, but not ranking points.
    MT_UNRANKED = 1,

    // Earn experience, ranking points adjusted from outcome.
    MT_RANKED = 2,

    // Join elimination tournament.
    MT_TOURNAMENT = 3,

    // Custom lobby match.
    MT_LOBBY = 4,
}
enum SkillEstimateType {
    SET_NONE = 0,
    SET_BEGINNER = 1,
    SET_INTERMEDIATE = 2,
    SET_ADVANCED = 3,
    SET_THUNDEROUS = 4,
}
enum MatchOutcome {
    MATCH_OUTCOME_ZERO = 0,
    MO_WON = 1,
    MO_LOST = 2,
    MO_DISCONNECT = 3,
}
enum LobbyState {
    LOBBY_STATE_ZERO = 0,
    // Waiting for 2 ready players.
    LS_IDLE = 1,

    // Match is ready to start.
    LS_MATCH_PENDING = 2,

    // A match is in progress.
    LS_MATCH = 3,
}

interface PBEnums {
    Status: Status,
    GameType: GameType,
    LobbyType: LobbyType,
    MatchType: MatchType,
    SkillEstimateType: SkillEstimateType,
    MatchOutcome: MatchOutcome,
    LobbyState: LobbyState,
}

export class Protos {
    onProtosLoad: () => void

    messages: Record<string, pb.Type>;

    enums: Record<string, pb.Enum>;

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

                this.enums = {
                    Status: root.lookupEnum(["tbrpc", "Status"]),
                    GameType: root.lookupEnum(["tbmatch", "GameType"]),
                };

                this.onProtosLoad();
            })
            .catch(e => console.error(`Problem loading protos: ${e}`));
    }
}
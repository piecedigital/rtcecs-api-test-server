import * as pb from 'protobufjs';
// import * as uuid from "uuid/v1";

// WaitMatchProgressEvent: pb.Type,

interface Empty extends pb.Type {}
interface Result extends pb.Type {
    result?: PBEnums["Status"], // optional Status = 1 [default = S_UNKNOWN];
    msg?: PBMessages["LocMsg"], // optional LocMsg = 4;
    content?: number[], // optional bytes = 10;
    deprecated_msg_id?: string, // optional string = 2;
    deprecated_msg_params?: PBMessages["MsgParam"], // optional MsgParam = 3;
}
interface PingTestResult extends pb.Type  {
    config?: PBMessages["GameEndpointConfig"] // optional GameEndpointConfig = 1;
}
interface GameEndpointConfig extends pb.Type {
    slot?: number, // optional int32 = 1;
    server?: PBMessages["NetworkAddr"], // optional NetworkAddr = 2;
    secret?: number, // optional fixed64 = 3;
    ping_score_threshold?: number, // optional float = 4;
    shared_key?: number[], // optional bytes = 5;
}
interface NetworkAddr extends pb.Type {
    host_name?: string, // optional string = 1;
    port?: number, // optional int32 = 2;
}
interface LoginRequest extends pb.Type {
    // Either handle or e-mail address can be used.
    login?: string, // optional string = 1;
    password?: string, // optional string = 2;

    // Client build.  May require certain version to login.
    build_version?: string, // optional string = 5;

    // Remote IP now passed via XFF header by TBFE
    __deprecated_remote_ip?: string, // optional string = 10;
}
interface GetGameSessionTicketRequest extends pb.Type {
    game?: PBEnums["GameType"], // optional GameType = 1;
    client_build_version?: string, // optional string = 2;
}
interface GetGameSessionTicketResult extends pb.Type {
    game?: PBEnums["GameType"], // optional GameType = 1;
    nonce?: string, // optional string = 2;
}
interface RedeemGameSessionTicketRequest extends pb.Type {
    game?: PBEnums["GameType"], // optional GameType = 1;
    nonce?: string, // optional string = 2;
    build_version?: string, // optional string = 5;
}
interface GetMatchRequest extends pb.Type {
    type?: PBEnums["MatchType"], // optional MatchType = 1;
    arena_id?: number, // optional int64 = 2;
    network?: PBMessages["NetworkAddr"], // optional NetworkAddr = 10;
    character?: PBMessages["CharacterSpec"], // optional CharacterSpec = 11;
    skill_estimate?: PBEnums["SkillEstimateType"], // optional SkillEstimateType = 15;
}
interface CreateLobbyRequest extends pb.Type {
    type?: PBEnums["LobbyType"], // optional LobbyType = 1;
    name: string, // optional string = 2;
}
interface GetLobbyJoinCodeRequest extends pb.Type {
    lobby_id?: number, // optional int64 = 1;
}
interface GetEventResult extends pb.Type {
    version?: string, // optional string = 1;
    event?: PBMessages["Event"], // optional Event = 2;
}
interface Event extends pb.Type {
    event_id?: number, // optional int64 = 1;
    type?: {
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
    timestamp_msec?: number, // optional int64 = 3;
    filter_changed?: PBMessages["FilterChangedEvent"], // optional FilterChangedEvent = 13;
    wait_match_progress?: PBMessages["WaitMatchProgressEvent"], // optional WaitMatchProgressEvent = 14;
    match_created?: PBMessages["MatchCreatedEvent"], // optional MatchCreatedEvent = 15;
    match_outcome?: PBMessages["MatchOutcomeEvent"], // optional MatchOutcomeEvent = 18;
    match_abandoned?: PBMessages["MatchAbandonedEvent"], // optional MatchAbandonedEvent = 21;
    match_connected?: PBMessages["MatchConnectedEvent"], // optional MatchConnectedEvent = 23;
    match_over?: PBMessages["MatchOverEvent"], // optional MatchOverEvent = 24;
    game_begin?: PBMessages["GameBeginEvent"], // optional GameBeginEvent = 25;
    game_input?: PBMessages["GameInputEvent"], // optional GameInputEvent = 26;
    game_over?: PBMessages["GameOverEvent"], // optional GameOverEvent = 27;
    user_check_network?: PBMessages["UserCheckNetworkEvent"], // optional UserCheckNetworkEvent = 30;
    user_session_closed?: PBMessages["UserSessionClosedEvent"], // optional UserSessionClosedEvent = 31;
    ping_test_complete?: PBMessages["PingTestCompleteEvent"], // optional PingTestCompleteEvent = 40;
    lobby_join?: PBMessages["LobbyJoinEvent"], // optional LobbyJoinEvent = 50;
    lobby_leave?: PBMessages["LobbyLeaveEvent"], // optional LobbyLeaveEvent = 51;
    lobby_update?: PBMessages["LobbyUpdateEvent"], // optional LobbyUpdateEvent = 52;
    lobby_match_start?: PBMessages["LobbyMatchStartEvent"], // optional LobbyMatchStartEvent = 53;
}
interface GetEventRequest extends pb.Type {
    version?: number, // optional string = 1;
}
interface PingTestCompleteEvent extends pb.Type {
    avg_rtt_ms?: number, // optional int32 = 1;
    max_rtt_ms?: number, // optional int32 = 2;
    loss_ratio?: number, // optional float = 3;
    success?: number, // optional bool = 4;
}
interface GameProfile extends pb.Type {
    account_id?: number, // optional int64 = 1;
    handle?: number, // optional string = 2;
    given_name?: number, // optional string = 3;
    locale?: number, // optional string = 4;
    stats?: number, // optional PlayerStats = 10;
    player_prefs?: number, // optional PlayerPreferences = 13;
    feature_set?: number, // optional ClientFeatureSet = 20;
}
interface PlayerStats extends pb.Type {
    xp_level?: number, // optional int32 = 1;
    xp?: number, // optional int32 = 2;
    wins?: number, // optional int32 = 3;
    losses?: number, // optional int32 = 4;
    char_stats?: number, // optional CharacterStats = 5;
    level_xp_min?: number, // optional int32 = 6;
    win_streak?: number, // optional int32 = 10;
    echelon?: number, // optional int32 = 20;
    tier?: number, // optional int32 = 21;
    points?: number, // optional int32 = 22;
    tier_max_points?: number, // optional int32 = 23;
    ranked_standing?: number, // optional int32 = 24;
}
interface CharacterStats extends pb.Type {
    type_name?: number, // optional string = 1;
    xp_level?: number, // optional int32 = 2;
    xp?: number, // optional int32 = 3;
    wins?: number, // optional int32 = 4;
    losses?: number, // optional int32 = 5;
    level_xp_min?: number, // optional int32 = 6;
}
interface PlayerPreferences extends pb.Type {
    selected_char?: number, // optional string = 1;
    local_player_prefs?: number[], // optional bytes = 2;
    char_prefs?: number, // optional CharacterSpec = 10;
}
interface ClientFeatureSet extends pb.Type {
    feature?: number, // optional FeatureValue = 1;
}
interface FeatureValue extends pb.Type {
    tag?: number, // optional string = 1;
    value?: number, // optional string = 2;
}
// A new match was created.
// Target queue: match
interface MatchCreatedEvent extends pb.Type {
    game_config?: number, // optional GameConfig = 3;
    __deprecated_match_id?: number, // optional int64 = 1;
    __deprecated_user_id?: number[], // repeated int64 = 2;
}
interface Player extends pb.Type {}
// Configuration for a single game in a match, suitable for sending
// to one of the participating clients.
interface GameConfig extends pb.Type {
    Player?: {
        user_id?: number, // optional int64 = 1;
        handle?: string, // optional string = 2;
        character?: PBMessages["CharacterSpec"], // optional CharacterSpec = 3;
        echelon?: number, // optional int32 = 10;
        tier?: number, // optional int32 = 11;
    }

    // Each player's character info.
    player?: GameConfig["Player"][], // repeated Player = 2;

    // Global options for this game.
    options?: PBMessages["GameOptions"], // optional GameOptions = 5;

    // The server-assigned unique ID of the match.
    match_id?: number, // optional int64 = 3;

    // deprecated
    __deprecated_game_number?: number, // optional int32 = 4;
}
interface GameOptions extends pb.Type {
    Mode?: {
        MODE_ZERO?: 0,
        // Fight to the finish -- best of N games, etc.
        GM_FIGHT?: 1,

        // No one dies -- client exit completes the match.
        GM_TRAINING?: 2,
    },
    mode?: GameOptions["Mode"], // optional Mode = 1 [default = GM_FIGHT];

    // Stage etc.
    training_options?: PBMessages["TrainingGameOptions"], // optional TrainingGameOptions = 20;
}
interface CharacterSpec extends pb.Type {
    // Type name of character, e.g. "atl"
    type_name?: string, // optional string = 1;

    // Selected option for secondary meter (defensive or offensive)
    secondary_meter?: number, // optional int32 = 10;

    // Special move variants selection
    variants?: PBMessages["VariantSpec"], // optional VariantSpec = 22;
}
interface VariantSpec extends pb.Type {
    // 4-element array for variant ids for special 1, 2, 3 and super
    specials?: number[], // repeated int32 = 1;
}
interface LocMsg extends pb.Type {
    id?: string, // optional string = 1;
    param?: number[], // repeated MsgParam = 2;
}
// Parameters to a message.  Using a message type
// for each primitive works around protobuf-net's limitation
// of not recording unset primitives.
interface MsgParam extends pb.Type {
    Str?: {
        value: string, // optional string = 1;
    },
    Int?: {
        value: number, // optional int32 = 1;
    },
    Float?: {
        value: number, // optional float = 1;
    },
    str?: MsgParam["Str"], // optional Str = 1;
    int?: MsgParam["Int"], // optional Int = 2;
    flt?: MsgParam["Float"], // optional Float = 3;
}
interface GameSessionRequest extends pb.Type {
    // Clients of the portal, should be exactly 2.
    spec?: PBMessages["ClientSpec"][], // repeated ClientSpec = 1;

    // Queue to publish input events.
    observer?: PBMessages["EventQueue"], // optional EventQueue = 2;

    // Allow GameResetRequest to reset options for next game?
    allow_reset?: boolean, // optional bool = 3;
}
interface ClientSpec extends pb.Type {
    // Secret keys for authorize client packets.
    secret?: number, // optional fixed64 = 1;

    // Client IP address.  Host byte order.
    // XXX: Not actually used.
    client_ip?: number, // optional int32 = 2;

    // The initial character spec for the client.
    character?: PBMessages["CharacterSpec"], // optional CharacterSpec = 3;

    // The 128-bit shared key used to hash client packets
    shared_key?: number[], // optional bytes = 4;
}
interface FilterChangedEvent extends pb.Type {}
interface WaitMatchProgressEvent extends pb.Type {
    Status?: {
        STATUS_ZERO?: 0,
        // Waiting for an available match.
        WAITING?: 1,

        // Gave up waiting.
        TIMEOUT?: 2,

        // Match found.
        MATCH?: 3,

        // Request canceled by user.
        CANCEL?: 4,

        // Failed to enter queue.  A ping test must be performed before
        // re-queuing for a match.
        PING_TEST_REQUIRED?: 5,

        // The build version is not allowed to enter the queue.
        // A client update is required.
        DENY_VERSION?: 6,

        // The match-making server is down for maintenance.  Try again later.
        SERVER_MAINTENANCE?: 7,
    },

    status?: WaitMatchProgressEvent["Status"]

    // The ID of the newly created match.
    match_id?: number, // = 2;

    // Game config to run for game 0 (when status == MATCH).
    config?: PBMessages["GameConfig"],

    // Player slot and connection for game 0 (when status == MATCH).
    endpoint?: PBMessages["GameEndpointConfig"], // = 4;

    // Some extra stats for a WAITING progress.
    users_waiting?: number, // int32 = 21;

    // DEPRECATED FIELDS
    __deprecated_users_online?: number, // int32  = 20;
}
interface MatchOutcomeEvent extends pb.Type {
    // What happened in the match.
    result?: PBMessages["MatchResult"], // = 1;
    // Spoils of war.
    exp?: PBMessages["MatchExperience"], // = 2;
    // Updates to user stats.
    stats_update?: PBMessages["PlayerStats"], // = 3;
}
interface MatchResult extends pb.Type {
	// Match ID.
	match_id?: number, // int64  = 1;

	// Type of match played.
	type?: PBEnums["MatchType"], // MatchType  = 2;

	// Character played.
	character_type_name?: string, // string  = 3;

	// Won or lost?
	outcome?: PBEnums["MatchOutcome"], // MatchOutcome  = 4;

	// True if we won because the opponent disconnected.
	peer_disconnect?: boolean, // bool  = 5;

	// Match start time (RFC3339 string).
	start_time?: string, // string  = 6;

	// Match duration in seconds.
	duration_secs?: number, // int32  = 7;

	// Number of games played and won.
	game_count?: number, // int32  = 8;
	games_won?: number, // int32  = 9;

	// Opponent.
	opponent_character_type_name?: string, // string  = 20;
	opponent_user_id?: number, // int64  = 21;
	opponent_handle?: string, // string  = 22;

	// Deprecated fields.
	__deprecated_has_replay?: boolean, // bool  = 30;
}
interface MatchExperience extends pb.Type {
	// Starting player total XP.
	player_xp?: number, // int32  = 10;

	// Starting player level.
	player_level?: number, // int32  = 11;

	// Experience thresholds for current player level (index 0),
	// plus a few more in case the player levels up.
	player_level_xp_min?: number[], // repeated int32  = 12;

	// XP earned from the match.
	player_match_xp?: number, // int32  = 21;
	// XP bonus for winning.
	player_win_bonus_xp?: number, // int32  = 22;
	// XP boost.
	player_boost_xp?: number, // int32  = 23;

	// Original character XP.
	character_start_xp?: number, // int32  = 30;
	// XP earned by character from the match.
	character_match_xp?: number, // int32  = 31;
	// Character XP bonus for winning.
	character_win_bonus_xp?: number, // int32  = 32;
	// character XP boost.
	character_boost_xp?: number, // int32  = 33;
	// Starting character level.
	character_level?: number, // int32  = 35;

	// Experience thresholds for current character level (index 0),
	// plus a few more in case the character levels up.
	character_level_xp_min?: number[], // repeated int32 = 34;

	// Ranking tier points awarded. Could be 0 or negative.
	rank_points?: number, // int32 = 40;
}
interface MatchAbandonedEvent extends pb.Type {
    match_id?: number, //int64 = 1;
}
interface MatchConnectedEvent extends pb.Type {
    match_id?: number, // int64 = 1;
}
interface MatchOverEvent extends pb.Type {
    match_id?: number, // int64 = 1;

    Status?: {
        STATUS_ZERO?: 0,
        // Match did not complete due to a server error, desync
        // or a network problem that affected both players.
        ABANDONED?: 1,

        // Match ended because one player disconnected.
        DISCONNECT?: 2,

        // Match ended with a valid outcome.
        VALID?: 3,
    },
    status?: MatchOverEvent["Status"], // = 2;
    // if status==VALID, player slot that won if any.
    win_slot?: number, // int32  = 3;
    // if status==VALID, true iff the result was a draw.
    draw?: boolean, // bool  = 4;
}
interface GameBeginEvent extends pb.Type {
    match_id?: number, // int64 = 1;
    next_game?: PBMessages["NextGameConfig"], // NextGameConfig = 2;

    // Populated from the sequenceId field in Redis under the match's key.
    // Should be used by the client, if present, to determine whether to process this event.
    sequence_id?: number, // int32 = 3;
}
interface NextGameConfig extends pb.Type {
    // The new character specs to use for the next game.
    character_spec?: PBMessages["CharacterSpec"][], // repeated CharacterSpec = 1;

    // Proposed game options for the next game.
    // May only be specified during a training match.
    options?: PBMessages["GameOptions"], // GameOptions = 2;
}
interface GameInputEvent extends pb.Type {
    match_id?: number, // int64 = 1;

    // First frame number of input stored in bits.
    start_frame?: number, // int32 = 2;

    // Number of bits to read from bits.
    num_bits?: number, // int32 = 3;

    // Encoded frame inputs.
    bits?: number[], // bytes = 4;

    // True if this is the last set of inputs for a game.
    final?: boolean, // bool = 5;
}
interface GameOverEvent extends pb.Type {
    match_id?: number, // int64 = 1;
    report?: PBMessages["GameReport"], // GameReport = 2;
    sequence_id?: number, // int32 = 3;
}
interface GameReport extends pb.Type {
    // Player slot (0, 1) that won the match.
    win_slot?: number, // int32 = 1;

    // Was match a draw?
    draw?: boolean, // bool = 2;
}
interface UserCheckNetworkEvent extends pb.Type {}
interface UserSessionClosedEvent extends pb.Type {
    reason_msg_id?: string, // string = 1;
}
interface LobbyJoinEvent extends pb.Type {
    // Current state of the joined lobby.
    lobby?: PBMessages["Lobby"], // Lobby = 1;
}
interface LobbyLeaveEvent extends pb.Type {
    lobby_id?: number, // int64 = 1;
    Reason?: {
        REASON_ZERO?: 0,
        // Left lobby voluntarily.
        LEFT?: 1,
        // Banned from the lobby.
        BANNED?: 2,
        // Removed by owner, but not banned permanently
        REMOVED?: 3,
    }
    reason?: LobbyLeaveEvent["Reason"], // = 2;
}
interface LobbyUpdateEvent extends pb.Type {
    lobby_id?: number, // int64 = 1;
	// Members added or whose state changed.
    update?: PBMessages["LobbyMember"][], // repeated LobbyMember = 2;
	// Members who left.
    removed?: number[], // repeated int64 = 3;
	// Current state of the lobby.
    state?: PBEnums["LobbyState"], // LobbyState = 4;
	// For state == LS_MATCH, GameConfig that started the running match.
    game_config?: PBMessages["GameConfig"], // GameConfig = 5;
	// Order of queued members by account_id.
    queue?: number[], // repeated int64 = 6;
	// Options for games generated by this lobby.
    options?: PBMessages["GameOptions"], // GameOptions = 7;
}
interface LobbyMatchStartEvent extends pb.Type {
	lobby_id?: number, // int64 = 1;
	// The ID of the newly created match.
	match_id?: number, // int64 = 2;
	// Game config for first game of the match.
    config?: PBMessages["GameConfig"], // GameConfig = 3;
	// Player slot and connection.
    endpoint?: PBMessages["GameEndpointConfig"], // GameEndpointConfig = 4;
}
interface Lobby extends pb.Type {
    // Unique identifier for this lobby.
    lobby_id?: number, // int64 = 1;
    // Style of gameplay conducted in the lobby.
    type?: PBEnums["LobbyType"], // LobbyType = 2;
    // Name given by creator.
    name: string, // string = 3;
    // Current state of the lobby.
    // Updated by LobbyStatusEvent.
    state?: PBEnums["LobbyState"], // LobbyState = 5;
    // People currently in the lobby.
    // Updated by LobbyMemberUpdateEvent.
    member?: PBMessages["LobbyMember"][], // repeated LobbyMember = 10;
    // Options included for the next match generated by this lobby.
    options?: PBMessages["GameOptions"], // GameOptions = 11;
    // For state == LS_MATCH, start config of the game being played.
    game_config?: PBMessages["GameConfig"], // GameConfig = 20;
    // For type == LT_QUEUED, this is the current queue order of account IDs.
    // Updated by LobbyMemberUpdateEvent.
    queue?: number[], // repeated int64 = 30;
}
interface LobbyMember extends pb.Type {
    account_id?: number, // int64 = 1;
    handle?: string, // string = 2;

    // Lobby owner?
    owner?: boolean, // bool = 10;

    // Ready for next match?
    ready?: boolean, // bool = 11;
}
interface TrainingGameOptions extends pb.Type {
    stun_enabled?: boolean, // bool = 1
    super_refill?: PBEnums["MeterRefillType"], // MeterRefillType = 2
    kinetic_refill?: PBEnums["MeterRefillType"], // MeterRefillType = 3
    short_cooldowns?: boolean, // bool = 4
    show_stats?: boolean, // bool = 5
}
interface EventQueue extends pb.Type {
    type?: string, // string = 1;
    id?: string, // string = 2;
}
interface UserInfo extends pb.Type {
    account_id?: number, // optional int64 = 1;

    spec?: PBMessages["UserAccountSpec"], // optional UserAccountSpec = 2;
    contact_address?: PBMessages["ContactAddress"], // optional ContactAddress = 3;
    prefs?: PBMessages["UserPrefs"], // optional UserPrefs = 4;

    access_bits?: number, // optional int32 = 10;
    login_status?: PBEnums["LoginStatus"], // optional LoginStatus = 11;

    // When account was created (RFC 3339 string).
    create_time?: string, // optional string = 60;
    // Last time account was modified (RFC 3339 string).
    modify_time?: string, // optional string = 61;
    // Last login time, if any (RFC3339 string).
    last_login_time?: string, // optional string = 62;
}
interface UserAccountSpec extends pb.Type {
    // E-mail address.  Required.
    email?: string, // optional string = 1;

    // Desired password.  Required for CreateUser and Register;
    // existing accounts must use ResetPassword.
    password?: string, // optional string = 2;

    // Username as seen by other users.
    handle?: string, // optional string = 3;

    // Given (first) name.  Required.
    given_name?: string, // optional string = 4;

    // Family (last) name.  Required.
    family_name?: string, // optional string = 5;

    // Salutation, optional.
    salutation?: string, // optional string = 6;

    // Date of birth (RFC3339 string).  Required.
    birth_date?: string, // optional string = 10;

    // 3-letter code for country of residence.
    country?: string, // optional string = 11;

    // Locale for messages, currency format, etc.
    locale?: string, // optional string = 12;

    // Secret question message ID.  Required.
    secret_question_msg?: string, // optional string = 20;

    // Answer to the secret question.  Required.
    secret_question_answer?: string, // optional string = 21;
}
interface ContactAddress extends pb.Type {
    address_1?: string, // optional string = 1;
    address_2?: string, // optional string = 2;
    city?: string, // optional string = 3;
    region?: string, // optional string = 4;
    zip_code?: string, // optional string = 5;
    phone_number?: string, // optional string = 6;
}
interface UserPrefs extends pb.Type {
    // Allow using account balance for in-game purchases.
    balance_purchase_in_game?: boolean, // optional bool = 1[default = true];

    // Elect to receive special offers and promotional e-mail.
    email_offers?: boolean, // optional bool = 20[default = true];

    // Currency last used/selected.
    default_currency?: string, // optional string = 30;
}
interface SearchUsersResult extends pb.Type {
    // Results do not include preferences or contact address.
    users?: PBMessages["UserInfo"][], // repeated tbmatch.UserInfo = 1;
    end_of_data?: boolean, // optional bool = 2;
}
interface CreateUserResult extends pb.Type {
    account_id?: number, // optional int64 = 1;
}
interface NukeHandleResult extends pb.Type {
    account_id?: number, // optional int64 = 1;
    // New handle assigned to the account.
    new_handle?: string, // optional string = 2;
}
interface GetHandleHistoryResult extends pb.Type {
    account_id?: number, // optional int64 = 1;
    change?: PBMessages["HandleChange"][], // repeated HandleChange = 2;
}
interface HandleChange extends pb.Type {
    // Unix timestamp of the handle change time.
    time?: number, // optional int64 = 1;
    // Old handle.
    old?: string, // optional string = 2;
    // New handle.
    new?: string, // optional string = 3;
}
interface SearchAuditHistoryResult extends pb.Type {
    events?: PBMessages["AuditEvent"][], // repeated AuditEvent = 1;
    end_of_data?: boolean, // optional bool = 2;
}
interface AuditEvent extends pb.Type {
    // User who initiated the operation.
    actor?: PBMessages["AccountSummary"], // optional AccountSummary = 2;

    // When the operation occurred.
    event_time?: string, // optional string = 3;

    // Category of the event.
    event_type?: PBEnums["AuditEventType"], // optional AuditEventType = 4;

    // IP address of the initiating session.
    remote_ip?: string, // optional string = 5;

    // Hostname of the server that handled the request.
    server_host?: string, // optional string = 6;

    // Name of the operation.
    operation?: string, // optional string = 9;

    // Parameters of the query, if one was invoked.
    query?: string, // optional string = 10;

    // Account that was affected, if any.
    account?: PBMessages["AuditAccount"], // optional AuditAccount = 11;

    // Order that was affected, if any.
    order?: PBMessages["AuditOrder"], // optional AuditOrder = 12;
}
interface AccountSummary extends pb.Type {
    account_id?: number, // optional int64 = 1;
    email?: string, // optional string = 2;
    handle?: string, // optional string = 3;
}
interface AuditAccount extends pb.Type {
    // Account that was affected.
    user?: PBMessages["AccountSummary"], // optional AccountSummary = 1;
    login_status?: PBEnums["LoginStatus"], // optional tbmatch.LoginStatus = 2;
}
interface AuditOrder extends pb.Type {
    // Order that was affected.
    order_number?: number, // optional int64 = 1;
    // Order status as of the end of this event.
    status?: PBEnums["OrderStatus"], // optional tbmatch.OrderStatus = 2;
}
interface AppConfig extends pb.Type {
    account_config?: PBMessages["AccountConfig"], // optional AccountConfig = 1;
    match_config?: PBMessages["MatchServiceConfig"], // optional MatchServiceConfig = 2;
    shop_config?: PBMessages["ShopConfig"], // optional ShopConfig = 3;
    event_config?: PBMessages["EventConfig"], // optional EventConfig = 4;
    audit_config?: PBMessages["AuditConfig"], // optional AuditConfig = 5;
    lobby_config?: PBMessages["LobbyServiceConfig"], // optional LobbyServiceConfig = 6;
    crash_report_config?: PBMessages["CrashReportConfig"], // optional CrashReportConfig = 7;
    server_rollout_flags?: PBMessages["ServerRolloutFlags"], // optional ServerRolloutFlags = 8;
    desync_report_config?: PBMessages["DesyncReportConfig"], // optional DesyncReportConfig = 9;
    export_trim_config?: PBMessages["ExportTrimConfig"], // optional ExportTrimConfig = 10;
}
interface AccountConfig extends pb.Type {
    // Minimum length when setting a password.
    min_password_length?: number, // optional int32 = 1[default = 6];

    // Minimum number of unique character classes for a password.
    min_password_classes?: number, // optional int32 = 2[default = 2];

    // Access roles granted to publicly registered accounts.
    register_access?: PBEnums["Access"][], // repeated tbrpc.Access = 3;

    // How long before e-mail validation links expire.
    email_validate_confirm_secs?: number, // optional int32 = 4[default = 7200];

    // Prepended to email validation links.
    email_validate_url_prefix?: string, // optional string = 5;

    // Number of bytes in the generated nonce hex string.
    validate_nonce_length?: number, // optional int32 = 6[default = 16];

    // How long a password reset code is valid for in seconds.
    password_reset_expire_secs?: number, // optional int32 = 7[default = 600];

    // Number of letters and numbers in the reset code.
    password_reset_code_length?: number, // optional int32 = 8[default = 6];

    // Max number of users to return from SearchUsers.
    max_user_search_result?: number, // optional int32 = 10[default = 100];

    // Minutes to keep an account locked out after exceeding lockout_threshold attempts.
    lockout_duration_mins?: number, // optional int32 = 20[default = 30];

    // Number of failed login attempts before account is locked.
    // Set to 0 to disable lockout.
    lockout_threshold?: number, // optional int32 = 21[default = 8];

    // Number of minutes after the last login failure after which the counter is reset to 0.
    reset_lockout_counter_after_mins?: number, // optional int32 = 22[default = 5];

    // How long do session tickets last (SessionService.RequestSessionTicket)?
    session_ticket_expire_secs?: number, // optional int32 = 30[default = 30];

    // Require a registration key?
    require_registration_key?: boolean, // optional bool = 40[default = false];

    // Deny any handle that full-matches one of these expressions.
    disallow_handle_regexp?: string[], // repeated string = 41;

    // Prefix to use when generating a handle to replace an offensive/disallowed one.
    nuke_handle_prefix?: string, // optional string = 42[default = "Donut"];

    // Pre-existing nuked handles to skip over before giving up.
    nuke_retries?: number, // optional int32 = 43[default = 1000];
}
interface MatchServiceConfig extends pb.Type {
    // How long to wait for an opponent to be ready to continue a match.
    match_ready_timeout_ms?: number, // optional int32 = 2[default = 30000];

    // How to award players with the outcome of a match.
    rank?: PBMessages["RankConfig"], // optional RankConfig = 7;

    // Max recent match results to return from GetRecentMatches.
    max_recent_results?: number, // optional int32 = 8[default = 5];

    // If we lost more than this percentage of packets during ping test,
    // advise the user of network issues and don't record the result for matchmaking.
    max_packet_loss_ratio?: number, // optional float = 21[default = 0.25];

    // Max number of seconds between each player's desync report to qualify.
    desync_report_max_drift?: number, // optional int32 = 30[default = 60];

    // How to perform perform Glicko2 rating system updates.
    rating_config?: PBMessages["Glicko2RatingConfig"], // optional Glicko2RatingConfig = 50;

    // Glicko rating to assign to players with zero games played.  Glicko
    // ratings still assume 1500.
    unrated_glicko_rating?: number, // optional float = 60[default = 1500.0];

    // Glicko rating to assign to players with zero games played depending
    // on their SkillEstimateType. SkillEstimateType acts as the index into
    // the array.
    default_glicko_rating?: number[], // repeated float = 61;

    // Max portion of rating difference to adjust for win/loss, scaled by deviation.
    session_rating_adjust_coefficient?: number, // optional float = 65[default = 0.25];

    // How long, in seconds, to re-use the last read values from lua config objects.
    lua_config_cache_sec?: number, // optional int32 = 70[default = 60];

    // Require that only one game may be played at once, only one random match queue
    // can be pending at a time, and cannot enqueue while in a custom lobby.
    strict_game_sessions?: boolean, // optional bool = 80[default = false];

    // deprecated
    __deprecated_get_ranked_timeout_ms?: number, // optional int32 = 1[default = 180000]; // moved to lua config
    __deprecated_provide_local_fsm?: boolean, // optional bool = 3;
    __deprecated_replay_path?: string, // optional string = 4;
    __deprecated_match_lifetime_sec?: number, // optional int32 = 6; // moved to lua config
    __deprecated_select_size?: number, // optional int32 = 9;		// moved to lua config
    __deprecated_desync_report_path?: string, // optional string = 5;
    __ping_test_lifetime_sec?: number, // optional int32 = 20;
    __deprecated_games_to_win?: number, // optional int32 = 40;
}
interface RankConfig extends pb.Type {
    player_progress?: PBMessages["LevelProgression"], // optional LevelProgression = 1;
    char_progress?: PBMessages["LevelProgression"], // optional LevelProgression = 2;

    // Define the ranking echelons.
    echelon_config?: PBMessages["EchelonConfig"], // optional EchelonConfig = 3;
}
interface Glicko2RatingConfig extends pb.Type {
    // How deterministic are matches in this game (0.2 .. 1.2)
    tau?: number, // optional float = 1[default = 0.9];

    // How many minutes in each rating period?
    rating_period_mins?: number, // optional int32 = 2[default = 30];

    // How often should MatchMaker master check for new matches to rate?
    check_period_mins?: number, // optional int32 = 3[default = 5];

    // Rating deviation (RD) for an unrated (or maximum lapsed) player.
    max_deviation?: number, // optional float = 10[default = 350];

    // Rating deviation (RD) never to drop below, to ensure some freedom of movement.
    min_deviation?: number, // optional float = 11[default = 30];

    // Number of rating periods must pass before an active player's deviation
    // becomes as uncertain as that of an unrated player.
    // Determines 'c' in Glicko paper.  Default (for 30 minute period) is 3 weeks.
    deviation_decay_periods?: number, // optional float = 12[default = 1008];

    // Rating deviation of a "typical" active player for computation of 'c'.
    typical_deviation?: number, // optional float = 13[default = 50];
}
interface LevelProgression extends pb.Type {
    // How much XP is required to reach level 2 from level 1.
    baseline?: number, // optional int32 = 1[default = 15000];

    // A level takes this much more XP to reach than the previous level.
    coefficient?: number, // optional double = 2[default = 1.2];

    // XP awarded for playing a match.
    match_xp?: number, // optional int32 = 3[default = 3750];

    // XP awarded for winning a match.
    win_bonus_xp?: number, // optional int32 = 4[default = 4000];
}
interface EchelonConfig extends pb.Type {
    // Define all ranking echelons in progression order (0=Carbon .. N-1=Legend)
    echelon?: PBMessages["EchelonRules"][], // repeated EchelonRules = 1;

    // Number of wins in a streak for bonus to apply.
    win_streak_bonus_minimum?: number, // optional int32 = 10[default = 3];

    // Points to award for a win streak bonus.
    win_streak_bonus_points?: number, // optional int32 = 11[default = 1];
}
interface EchelonRules extends pb.Type {
    // Points required to advance for each tier in this echelon.
    tier_points?: number[], // repeated int32 = 1;

    // If true, don't apply losses while in this echelon.
    ignore_loss?: boolean, // optional bool = 2[default = false];

    // If true, echelon has no tiers or points.
    final?: boolean, // optional bool = 3[default = false];
}
interface ShopConfig extends pb.Type {
    payment?: PBMessages["PaymentConfig"], // optional PaymentConfig = 1;
    currency?: PBMessages["CurrencyConfig"], // optional CurrencyConfig = 2;

    // Max number of orders to return from SearchPurchaseOrders.
    max_order_search_result?: number, // optional int32 = 10[default = 100];

    // Max number of results returned from GetAccountOrderHistory.
    order_history_page_size?: number, // optional int32 = 11[default = 10];

    // Max number of days you can view balance history over.
    max_balance_history_days?: number, // optional int32 = 12[default = 31];
}
interface PaymentConfig extends pb.Type {
    // Amount of time to wait for calls before giving up.
    timeout_ms?: number, // optional int32 = 1[default = 5000];

    // An Authorize.Net account works in a single currency type
    // that is associated with the merchant account.  Use this currency
    // to format and verify input amounts.  If none is given, uses
    // the default system currency in AppConfig.
    currency?: string, // optional string = 2;

    // Whether to use transactionSettings/testRequest=TRUE.
    // This is for phase 2 testing, connecting to the production API endpoint,
    // but still submitting test requests.
    test_mode?: boolean, // optional bool = 3[default = true];

    // How to perform validation of payment profiles on
    // creation and update.  Maps to validationMode parameter
    // of the CIM API.  TEST and LIVE will generate e-mails, but
    // only LIVE will reach the payment processor.
    Validation: {
        NONE: 1,
        TEST: 2,
        LIVE: 3,
    },
    val_mode: PaymentConfig["Validation"], // optional Validation = 4[default = TEST];

    // Character delimiting fields in APIs that return a "direct response".
    // Authorize.Net sets this to comma by default, but we choose pipe and
    // disallow pipe in most fields.
    direct_response_delimiter: string, // optional string = 5[default = '|'];
}
interface CurrencyConfig extends pb.Type {
    desc?: PBMessages["CurrencyDesc"][], // repeated CurrencyDesc = 1;

    // Currency to use for new accounts when the country code
    // is unknown.
    default_currency?: string, // optional string = 2;
}
interface CurrencyDesc extends pb.Type {
    // 3-letter capital code.
    code?: string, // optional string = 1;

    // Digits of precision.
    precision?: number, // optional int32 = 2;

    // Character prepended to distinguish values.
    symbol?: string, // optional string = 3;

    // List of 3-letter country codes that use this currency.
    country_iso3?: string[], // repeated string = 4;

    // Allow balance loads with this currency.
    balance_purchase_allow?: boolean, // optional bool = 40;

    // Default values given for account balance purchases.
    balance_purchase_default?: PBMessages["Money"][], // repeated tbrpc.Money = 41;

    // Range of allowed custom balance purchase amounts.
    balance_purchase_min?: PBMessages["Money"], // optional tbrpc.Money = 42;
    balance_purchase_max?: PBMessages["Money"], // optional tbrpc.Money = 43;

    // Maximum balance an account may hold in this currency.
    // Orders that would exceed this amount are rejected.
    balance_max?: PBMessages["Money"], // optional tbrpc.Money = 50;
}
interface Money extends pb.Type {
    // Amount of whole units of currency.
    whole?: number, // optional int64 = 1;

    // Amount of 1/100 units of currency.
    cents?: number, // optional int32 = 2;
}
interface EventConfig extends pb.Type {
    // Milliseconds that RPCs waiting on changes are
    // allowed to wait before giving up.
    change_wait_timeout_ms?: number, // optional int32 = 10[default = 30000];

    // Default lifetime of time-limited events.
    event_expiry_ms?: number, // optional int32 = 11[default = 15000];

    // Default lifetime of user event queue keys themselves.
    user_key_expiry_sec?: number, // optional int32 = 12[default = 60];
}
interface AuditConfig extends pb.Type {
    // Most number of results to return from an audit query.
    max_audit_search_result?: number, // optional int32 = 1[default = 100];

    // Largest time range allowed for a search.
    max_audit_search_days?: number, // optional int32 = 2[default = 31];
}
interface LobbyServiceConfig extends pb.Type {
    // Number of characters in the join code.
    join_code_length?: number, // optional int32 = 1[default = 6];

    // Maximum number of members allowed in a single lobby.
    max_members?: number, // optional int32 = 2[default = 16];
}
interface CrashReportConfig extends pb.Type {
    should_store_crash_bundles?: boolean, // optional bool = 1[default = true];
    max_versions_to_keep?: number, // optional int32 = 2[default = 3];		// the number of build versions for each client app to keep the crash redis records around for
    polling_interval?: number, // optional int32 = 3[default = 60];		// the interval to check for new crash reports to symbolicate, in seconds
}
interface ServerRolloutFlags extends pb.Type {

    // Provide hashing secret for clients, and check signatures of
    // incoming UDP packets.
    secure_portal_udp_traffic?: boolean, // optional bool = 2[default = false];

    // Search for a ticket to get back into queue at an old spot
    // even when using the GetMatch rpc.
    // Purpose?: backwards compatibility while waiting for client
    //          build to use ResumeGetMatch for auto-requeueing
    __deprecated_auto_resume_get_match?: boolean, // optional bool = 1[default = true];
}
interface DesyncReportConfig extends pb.Type {
    polling_interval?: number, // optional int32 = 3[default = 60];		// the interval to check for new desync reports to process, in seconds
}
interface ExportTrimConfig extends pb.Type {
    // Whether database table trimming is enabled.
    trim_enabled?: boolean, // optional bool = 1[default = false];

    // Don't look for records younger than this age.
    min_age_days?: number, // optional int32 = 2[default = 30];

    // Process at most this many records at once.
    batch_size?: number, // optional int32 = 3[default = 1000];

    // How often to trim the database.
    trim_interval_mins?: number, // optional int32 = 4[default = 60];
}
interface GetGlobalConfigResult extends pb.Type {
    config?: PBMessages["GlobalConfig"], // optional GlobalConfig = 1;
}
interface GlobalConfig extends pb.Type {
    // option(tbrpc.lua_config) = "Global";

    // Build version required by the server to login.
    // If blank, any build will be allowed.
    req_build_version?: string, // optional string = 1[ default="" ];
}
interface GetMatchQueueConfigResult extends pb.Type {
    config?: PBMessages["MatchQueueConfig"], // optional MatchQueueConfig = 1;
}
interface MatchQueueConfig extends pb.Type {
    // option(tbrpc.lua_config) = "MatchQueue";

    // Time to live for proposal keys in seconds.
    proposal_ttl?: number, // optional int32 = 1[ default=3600 ];

    // Time to live for queue tickets.
    queue_ticket_ttl?: number, // optional int32 = 2[ default=15 ];

    // How many users to consider at once from top and bottom of time queue.
    select_size?: number, // optional int32 = 3[ default=200 ];

    // Control how much echelon may differ to qualify.
    echelon_dist_min?: number, // optional double = 4[ default=0 ];
    echelon_dist_max?: number, // optional double = 5[ default=1 ];
    echelon_dist_per_sec?: number, // optional double = 6[ default=0.033 ];
    echelon_score_coeff?: number, // optional double = 7[ default=0.0 ];
    echelon_dist_normalized_min?: number, // optional double = 36[ default=0 ];
    echelon_dist_normalized_max?: number, // optional double = 37[ default=1 ];

    // Control how much total rank points may differ to qualify.
    point_dist_min?: number, // optional double = 8[ default=0 ];
    point_dist_max?: number, // optional double = 9[ default=10000 ];
    point_dist_per_sec?: number, // optional double = 10[ default=1.5 ];
    point_score_coeff?: number, // optional double = 11[ default=0.0 ];
    point_dist_normalized_min?: number, // optional double = 38[ default=100 ];
    point_dist_normalized_max?: number, // optional double = 39[ default=1000 ];

    // How long to prevent 2 players from repeating the same match-up.
    last_opp_exclude_time?: number, // optional double = 12[ default=15 ];
    // How long to remember the last opponent.
    last_opp_timeout?: number, // optional double = 13[ default=900 ];

    // How long to wait before matching to a player on another continent.
    cross_continent_exclude_time?: number, // optional double = 14[ default=60 ];

    // Ping score minimum and increase with wait time.
    ping_score_min?: number, // optional double = 15[ default=70 ];
    ping_score_max?: number, // optional double = 16[ default=250 ];
    ping_score_per_sec?: number, // optional double = 17[ default=10 ];
    ping_score_coeff?: number, // optional double = 18[ default=0.0 ];
    ping_score_normalized_min?: number, // optional double = 30[ default=70 ];
    ping_score_normalized_max?: number, // optional double = 31[ default=150 ];

    // Geo distance minimum and increase with wait time.
    geo_dist_min?: number, // optional double = 19[ default=0 ];

    // 25,000km should be further than any possible distance between two points on earth
    geo_dist_max?: number, // optional double = 20[ default=25000000 ];
    // 200 km per second gets from LA to NY in 20 seconds, covers the world in 2 mins
    geo_dist_per_sec?: number, // optional double = 21[ default=200000 ];
    geo_score_coeff?: number, // optional double = 22[ default=0.0 ];
    geo_dist_normalized_min?: number, // optional double = 32[ default=200000 ];
    geo_dist_normalized_max?: number, // optional double = 33[ default=4000000];

    // Rating distance minimum and increase with wait time.
    rating_dist_min?: number, // optional double = 23[ default=50 ];
    rating_dist_per_sec?: number, // optional double = 25[ default=125 ];
    rating_score_coeff?: number, // optional double = 26[ default=10 ];
    rating_dist_normalized_min?: number, // optional double = 34[ default=100 ];
    rating_dist_normalized_max?: number, // optional double = 35[ default=650 ];

    // 0==normal, 1==in maintenance mode: no one enters queue, message about server maintenance
    maintenance_mode?: number, // optional int32 = 28[ default=0 ];

    // Time after which old active matches are forcibly removed.
    active_match_timeout?: number, // optional double = 29[ default=7200 ];

    // How long to wait in the queue before timing out.
    wait_timeout_sec?: number, // optional int32 = 40[ default=180 ];

    // Unused - rating dist keeps climbing forever
    __deprecated_rating_dist_max?: number, // optional double = 24[ default=650 ];
}

interface GetMatchUserConfigResult extends pb.Type {
    config?: PBMessages["MatchUserConfig"], // optional MatchUserConfig = 1;
}
interface MatchUserConfig extends pb.Type {
    // option(tbrpc.lua_config) = "MatchUser";

    // Time to live for the ping table if we fail to clean up session.
    ping_table_ttl?: number, // optional int32 = 1[default=7200];

    // Time to live for the blacklist if we fail to clean up session.
    blacklist_ttl?: number, // optional int32 = 2[default=7200];
}
interface GetLobbyConfigResult extends pb.Type {
    config?: PBMessages["LobbyConfig"], // optional LobbyConfig = 1;
}
interface LobbyConfig extends pb.Type {
    // option(tbrpc.lua_config) = "Lobby";

    // Max number of users to allow in a lobby.
    max_members?: number, // optional int32 = 1[default = 8];

    // Time-to-live for match keys generated by the lobby.
    match_ttl?: number, // optional int32 = 2[default = 3600];

    // Time to live for lobby keys.
    lobby_ttl?: number, // optional int32 = 3[default = 3600];

    // How long lobby matches remain in the active matches list if leaked.
    active_match_timeout?: number, // optional int32 = 4[default = 7200];
}
interface ListFeatureDefinitionsResult extends pb.Type {
    def?: PBMessages["FeatureDefinition"][], // repeated FeatureDefinition = 1;
}
interface FeatureDefinition extends pb.Type {
    // Unique tag identifying the feature.  Cannot be empty or contain spaces.
    tag?: string, // optional string = 1;

    // Free-form description of the feature.
    description?: string, // optional string = 2;
}
interface ListFeatureRulesResult extends pb.Type {
    rule?: PBMessages["FeatureRule"][], // repeated FeatureRule = 1;
}
interface FeatureRule extends pb.Type {
    // Server-generated unique ID of the rule.
    rule_id?: number, // optional int64 = 1;

    // Feature tags and values enabled by the rule.
    feature_set?: PBMessages["ClientFeatureSet"], // optional tbmatch.ClientFeatureSet = 2;

    // Rule is only effective when enabled.
    enabled?: boolean, // optional bool = 3;

    // Rules are evaluated in increasing priority order, with higher priority
    // rules taking precedence in case of conflict on a feature tag.
    priority?: number, // optional int32 = 4;

    // Who owns this rule?
    owner?: string, // optional string = 5;

    // Free-form text about this rule.
    notes?: string, // optional string = 6;

    // If set, time after which the rule becomes active.
    active_time_unix?: number, // optional int64 = 10;

    // If set, time after which the rule becomes inactive.
    inactive_time_unix?: number, // optional int64 = 11;
}
interface GetActiveFeaturesResult extends pb.Type {
    feature_set?: PBMessages["ClientFeatureSet"], // optional tbmatch.ClientFeatureSet = 1;
}
interface GetMatchQueueUsersResult extends pb.Type {
    user?: PBMessages["QueueUser"][], // repeated QueueUser = 1;
}
interface QueueUser extends pb.Type {
    account_id?: number, // optional int64 = 1;
    handle?: string, // optional string = 2;
    build_version?: string, // optional string = 3;

    network?: NetworkAddr, // optional tbmatch.NetworkAddr = 10;
    character?: CharacterSpec, // optional tbmatch.CharacterSpec = 11;

    wait_time?: number, // optional double = 20;
    rating?: number, // optional double = 21;
    last_opp_id?: number, // optional int64 = 23;
    last_opp_handle?: string, // optional string = 24;
    continent_code?: string, // optional string = 25;
    latitude?: number, // optional double = 26;
    longitude?: number, // optional double = 27;

    echelon?: number, // optional int32 = 30;
    tier?: number, // optional int32 = 31;
    points?: number, // optional int32 = 32;
}
interface GetLobbiesResult extends pb.Type {
    lobby?: PBMessages["LobbySummary"][], // repeated LobbySummary = 1;
}
interface LobbySummary extends pb.Type {
    lobby?: PBMessages["Lobby"], // optional tbmatch.Lobby = 1;

    build_version?: string, // optional string = 10;
    members?: number, // optional int32 = 11;

    create_time_unix?: number, // optional int64 = 31;
    last_active_time_unix?: number, // optional int64 = 32;

    __deprecated_age?: number, // optional double = 21;
    __deprecated_idle?: number, // optional double = 22;
}
interface GetLobbyResult extends pb.Type {
    lobby?: PBMessages["LobbySummary"], // optional LobbySummary = 1;
}
interface GetActiveMatchesResult extends pb.Type {
    match?: PBMessages["ActiveMatch"][], // repeated ActiveMatch = 1;
}
interface ActiveMatch extends pb.Type {
    match_id?: number, // optional int64 = 1;
    desc?: PBMessages["GameDescriptor"], // optional tbmatch.GameDescriptor = 2;
    start_time_unix?: number, // optional int64 = 3;
}
interface GameDescriptor extends pb.Type {
    // Game being played.
    game?: PBMessages["GameConfig"], // optional GameConfig = 1;

    Source?: {
        // Match by blind-queue rating match-maker.
        MATCH_MAKER: 1,

        // Matched by user lobby.
        LOBBY: 2,
    },
    source?: GameDescriptor["Source"], // optional Source = 8;

    Player?: {
        // GameEndpointConfig player is using to connect to Portal.
        endpoint?: PBMessages["GameEndpointConfig"], // optional GameEndpointConfig = 1;

        // Remote IP of the player.
        remote_ip?: string, // optional string = 2;

        // Rating used to create the match.
        rating?: number, // optional float = 3;

        // How long waiting in the match queue, in seconds.
        wait_time?: number, // optional float = 5;
        // The ping score to the opponent in the match. 0 if no existing ping score.
        ping_score?: number, // optional float = 6;

        // Ranking values used to make the match.
        echelon?: number, // optional int32 = 10;
        tier?: number, // optional int32 = 11;
        points?: number, // optional int32 = 12;
    },

    // Extra details for each player slot.
    player?: GameDescriptor["Player"][], // repeated Player = 7;

    // Portal session in use.
    portal_uuid?: number[], // optional bytes = 3;

    // For source == MATCH_MAKER, queue this match was generated by.
    // MT_LOBBY indicates a lobby match.
    type?: PBEnums["MatchType"], // optional MatchType = 4;

    // Build version of the matched clients.
    build_version?: string, // optional string = 5;

    // For source == LOBBY, lobby ID of the owning lobby.
    lobby_id?: number, // optional int64 = 9;

    __deprecated_endpoint?: PBMessages["GameEndpointConfig"][], // repeated GameEndpointConfig = 2;
    __deprecated_remote_ip?: string[], // repeated string = 6;
}
interface GetActiveMatchResult extends pb.Type {
    match?: PBMessages["ActiveMatch"], // optional ActiveMatch = 1;
}
interface GetRecentMatchesResult extends pb.Type {
    match?: PBMessages["RecentMatch"][], // repeated RecentMatch = 1;
}
interface RecentMatch extends pb.Type {
    match_id?: number, // optional int64 = 1;
    start_time_unix?: number, // optional int64 = 2;
    duration_sec?: number, // optional double = 3;
    rated?: boolean, // optional bool = 4;
    build_version?: string, // optional string = 5;
    log?: string, // optional string = 6;
    abandoned?: boolean, // optional bool = 7;

    Player?: {
        account_id: 1, // optional int64
        handle: 2, // optional string
        game_char: 3, // optional string
        winner: 4, // optional bool
        disconnect: 5, // optional bool
    },
    player?: RecentMatch["Player"][], // repeated Player = 10;

    Game?: {
        game?: PBMessages["GameConfig"], // optional GameConfig = 1;
        win_slot?: number, // optional int32 = 2;
        start_time_unix?: number, // optional int64 = 3;
        duration_sec?: number, // optional double = 4;
    },
    game?: RecentMatch["Game"][], // repeated Game = 20;
}
interface GetMatchDetailResult extends pb.Type {
    match?: PBMessages["RecentMatch"], // optional RecentMatch = 1;
}
interface GetPlayerDetailResult extends pb.Type {
    player?: PBMessages["MatchPlayer"], // optional MatchPlayer = 1;
}
interface MatchPlayer extends pb.Type {
    account_id?: number, // optional int64 = 1;
    handle?: string, // optional string = 2;
    create_time_unix?: number, // optional int64 = 3;
    modify_time_unix?: number, // optional int64 = 4;

    ServerStats?: {
        attempts?: number, // optional int32 = 1;
        complete?: number, // optional int32 = 2;
        disconnects?: number, // optional int32 = 3;
    },
    server_stats?: MatchPlayer["ServerStats"], // optional ServerStats = 10;

    player_stats?: PlayerStats, // optional tbmatch.PlayerStats = 11;

    Rating?: {
        type?: PBEnums["MatchType"], // optional tbmatch.MatchType = 1;
        rating?: number, // optional double = 2;
        deviation?: number, // optional double = 3;
        volatility?: number, // optional double = 4;

        session_rating?: number, // optional double = 5;

        last_rating_time_unix?: number, // optional int64 = 10;
    },
    rating?: MatchPlayer["Rating"][], // repeated Rating = 20;
}
interface ListDesyncsResult extends pb.Type {
    desync?: PBMessages["DesyncReportHeader"][], // repeated tbmatch.DesyncReportHeader = 1;
}
interface DesyncReportHeader extends pb.Type {
    match_id?: number, // optional int64 = 1;
    slot?: number, // optional int32 = 2;
    report_path?: string, // optional string = 3;
    game_config?: PBMessages["GameConfig"], // optional GameConfig = 4;
    timestamp?: number, // optional int64 = 5;
    build_version?: string, // optional string = 6;
}
interface ListCrashesResult extends pb.Type {
	collection?: PBMessages["CrashCollection"], // optional CrashCollection = 1;
    reports?: PBMessages["CrashReportHeader"][], // repeated CrashReportHeader = 2;
}
interface CrashCollection extends pb.Type {
    crash_identifier?: string, // optional string = 1;	// The top line of the stack trace, used as a unique identifier to group together the same types of crash.
    build_identifier?: string, // optional string = 2;
    occurrences?: number, // optional uint64 = 3;
    users_affected?: number, // optional uint64 = 4;		// The number of unique users affected by the crash. Less than num_occurrences if a crash happens to the same person more than once.
    stack_trace?: string, // optional string = 5;
}
interface CrashReportHeader extends pb.Type {
    report_path?: string, // optional string = 1;		// The path on gcs
    timestamp?: number, // optional int64 = 2;
    app_name?: string, // optional string = 3;
    build_version?: string, // optional string = 4;
    machine_id?: string, // optional string = 5;
    crash_number?: string, // optional string = 6;		// The crash number on a per-build version basis
}
interface ListCrashBuildIdentifiersResult extends pb.Type {
    identifiers?: PBMessages["CrashBuildIdentifier"][], // repeated CrashBuildIdentifier = 1;
}
interface CrashBuildIdentifier extends pb.Type {
    build_identifier?: string, // optional string = 1;
    app_name?: string, // optional string = 2;
    build_version?: string, // optional string = 3;
}
interface ListCrashCollectionsResult extends pb.Type {
    collections?: PBMessages["CrashCollection"][], // repeated CrashCollection = 1;
}
interface SearchPurchaseOrdersResult extends pb.Type  {
	// Orders that matched the criteria.
    orders?: PBMessages["PurchaseOrder"][], // repeated tbmatch.PurchaseOrder = 1;

	// True when the included results reached the end of the query result.
    end_of_data?: boolean, // optional bool = 2;
}
interface PurchaseOrder extends pb.Type {
    // System-generated order number.  Unset in new requests.
    order_number?: number, // optional int64 = 1;


    // ***** Required fields *****
    // These must be set on creation.

    // Currency used for all items and amounts in this order.
    // For game currency, account balance funding source is required.
    currency?: string, // optional string = 2;

    // List of items requested for purchase.  Minimum 1, max 30.
    item?: PBMessages["PurchaseOrderItem"][], // repeated PurchaseOrderItem = 3;
    // Amount of tax and shipping included in the total.
    tax_amount?: PBMessages["Money"], // optional tbrpc.Money = 4;
    ship_amount?: PBMessages["Money"], // optional tbrpc.Money = 5;
    // Total amount to charge the customer for this order.
    // Must be equal to the sum of each item unit price times quantity, plus tax.
    total_amount?: PBMessages["Money"], // optional tbrpc.Money = 6;

    // ***** End required fields *****

    // Status of the order.
    status?: PBEnums["OrderStatus"], // optional OrderStatus = 10;

    // Was account balance used?
    use_account_balance?: boolean, // optional bool = 11;
    // If not drawn from account balance, snapshot of the payment method used.
    payment_method?: PBMessages["PaymentMethod"], // optional PaymentMethod = 12;

    // Creation and last modification time (RFC3339).
    create_time?: string, // optional string = 13;
    modify_time?: string, // optional string = 14;

    // Account that created the order.
    account_id?: number, // optional int64 = 32;

    payment_transaction?: PBMessages["Transaction"], // optional Transaction = 33;
    refund_transaction?: PBMessages["Transaction"], // optional Transaction = 34;
}
interface PurchaseOrderItem extends pb.Type {
    // Catalog item ID of the item.
    item_id?: number, // optional int64 = 1[default = -1];
    // Quantity of this item to be purchased.
    quantity?: number, // optional int32 = 10;
    // Unit price for the item.
    unit_price?: PBMessages["Money"], // optional tbrpc.Money = 11;
}
interface PaymentMethod extends pb.Type {
    // Unique ID provided by server. Leave unset during creation.
    method_id?: number, // optional int64 = 1;

    // 13-16 digits, no dashes or spaces.
    // Obscured on fetch.  Submit obscured value to leave unchanged.
    card_number?: string, // optional string = 2;

    // YYYY-MM
    // Obscured on fetch.  Submit obscured value to leave unchanged.
    card_exp?: string, // optional string = 3;

    // 3 or 4 digit CCV numeric value.  Not stored in AuthNet, but used
    // during validation of create stored method, update stored method, and
    // for transactions with a custom payment method.
    card_ccv?: string, // optional string = 4;

    // Observed card issuer type (Visa, Discover, etc).  This field is
    // ignored for stored payment methods, but may be returned for
    // processed orders.
    card_type?: string, // optional string = 5;

    // The billing address.
    //
    // Unset indicates this payment method should use the account's
    // first and last name, country, and current contact address.
    // It is an error to leave unset when the contact address has not
    // yet been stored.
    billing?: PBMessages["BillingAddress"], // optional BillingAddress = 10;

    // Payment label, used to easily identify the card to the user.
    label?: string, // optional string = 60;
}
interface BillingAddress extends pb.Type {
    // AuthNet customerAddressType
    first_name?: string, // optional string = 1;			// 50
    last_name?: string, // optional string = 2;			// 50
    company?: string, // optional string = 3;			// 50

    // Obscured on fetch.  Submit obscured value to leave unchanged.
    address?: string, // optional string = 4;			// 60

    city?: string, // optional string = 5;				// 40
    state?: string, // optional string = 6;				// 40
    zip?: string, // optional string = 7;				// 20
    country?: string, // optional string = 8;			// 60

    // Obscured on fetch.  Submit obscured value to leave unchanged.
    phone_number?: string, // optional string = 9;		// 255
}
interface Transaction extends pb.Type {
    // External payment transaction ID.
    transaction_id?: number, // optional int64 = 33;
    // Payment processor generated authorization code.
    authorization_code?: string, // optional string = 34;
    // Last observed external transaction state.
    // See http://www.authorize.net/support/ReportingGuide_XML.pdf page 26.
    transaction_status?: string, // optional string = 35;
}
interface UserCountStats extends pb.Type {
	total?: number, // optional int64 = 1;
    no_access?: number, // optional int64 = 2;

    RoleCount?: {
        role?: PBEnums["Access"], // optional tbrpc.Access = 1;
        count?: number, // optional int64 = 2;
    },
    role ?: UserCountStats["RoleCount"][], // repeated RoleCount = 3;
}
interface GetSessionsResult extends pb.Type {
	game?: PBMessages["Session"][], // repeated Session = 1;
	launcher?: PBMessages["Session"][], // repeated Session = 2;
	web?: PBMessages["Session"][], // repeated Session = 3;

	// Total sessions active.
    total?: number, // optional int32 = 10;
}
interface Session extends pb.Type {
    account_id?: number, // optional int64 = 1;
    handle?: string, // optional string = 2;
    email?: string, // optional string = 3;
    build_version?: string, // optional string = 4;
    start_time_unix?: number, // optional int64 = 5;
    last_active_time_unix?: number, // optional int64 = 6;
    remote_ip?: string, // optional string = 7;
    type?: number, // optional int32 = 8;
}
interface GetCharacterUsageResult extends pb.Type {
    report?: PBMessages["CharacterUsageReport"], // optional CharacterUsageReport = 1;
}
interface CharacterUsageReport extends pb.Type {
    // Time this report was generated.
    report_time?: number, // optional int64 = 1;

    // Query parameters that bounded the report scope.
    options?: PBMessages["CharacterReportOptions"], // optional CharacterReportOptions = 2;

    // Matches observed in this report.
    total_matches?: number, // optional uint32 = 10;

    // Total unique users considered for the report.
    total_users?: number, // optional uint32 = 11;

    // Summary stats for each character.
    char_usage?: PBMessages["CharacterUsage"][], // repeated CharacterUsage = 13;

    // Half-matrix of win/loss ratios for each character combo & rating band.
    win_ratio?: PBMessages["RatingWinRatioReport"][], // repeated RatingWinRatioReport = 14;
}
interface CharacterReportOptions extends pb.Type {
    start_time_unix?: number, // optional int64 = 1;			// Time of first match to include, 0 = all
    end_time_unix?: number, // optional int64 = 2;			// Time of last match to include, 0 = now

    // Global filter options.
    build_version?: string, // optional string = 4;			// Limit results to a specific build.
    match_type?: PBEnums["MatchType"], // optional tbmatch.MatchType = 5;	// Limit results to a specific match type.
    include_disconnect?: boolean, // optional bool = 6;		// Include disconnected matches.
    include_disagree?: boolean, // optional bool = 7;			// Include foul-play matches.

    // Win ratio options.
    max_rating_diff?: number, // optional int32 = 10[default = 100];	// Most allowed rating difference for a win ratio query.
    rating_bucket_size?: number, // optional int32 = 11[default = 150];	// Width of Glicko2 rating buckets.
}
interface CharacterUsage extends pb.Type {
    type_name?: string, // optional string = 1;
    total_matches?: number, // optional uint32 = 2;			// Number of match slots involved in.
    unique_users?: number, // optional uint32 = 3;			// Number of unique users who played the character.
    wins?: number, // optional uint32 = 4;
    disconnects?: number, // optional uint32 = 5;

    VariantUsage?: {
        specials?: string, // optional string = 1;
        count?: number, // optional uint32 = 2;
    },
    variant_top_n?: CharacterUsage["VariantUsage"][], // repeated VariantUsage = 6;
}
interface RatingWinRatioReport extends pb.Type {
    // Max Glicko2 rating for these matchups.
    rating_cap?: number, // optional int32 = 1;
    matchup?: PBMessages["Matchup"][], // repeated Matchup = 2;
}
interface Matchup extends pb.Type {
    // Char type vs. opponent type.
    char_type?: string, // optional string = 1;
    versus_type?: string, // optional string = 2;
    wins?: number, // optional uint32 = 20;
    total?: number, // optional uint32 = 21;
}
interface GetSecretQuestionResult extends pb.Type {
    secret_question_msg?: string, // optional string = 1;
}
interface GetLobbyJoinCodeResult extends pb.Type {
	join_code?: string, // optional string = 1;
}
interface GetGameReplayRecordResult extends pb.Type {
    record?: PBMessages["GameReplayRecord"], // optional GameReplayRecord = 1;
}
interface GameReplayRecord extends pb.Type {
    // Initial config
    config?: PBMessages["GameConfig"], // optional GameConfig = 1;

    // P1 and P2 inputs for all the frames that matter (between GGPO Ready and confirmed last hit)
    input_record?: PBMessages["InputRecord"], // optional InputRecord = 2;

    // Game number
    game_number?: number, // optional int32 = 3;
}
interface InputRecord extends pb.Type {
    // Input record blob. Engine knows how to decode it.
    input_record ?: number[], // optional bytes = 1;
}
interface GetPlayerStatsResult extends pb.Type {
    stats?: PBMessages["PlayerStats"], // optional PlayerStats = 1;
}
interface GetRecentGamesResult extends pb.Type {
    game?: PBMessages["GameRecord"][], // repeated GameRecord = 1;
}
interface GameRecord extends pb.Type {
    match_id?: number, // optional int64 = 1;
    game_number?: number, // optional int32 = 2;

    // Type of match the game belonged to.
    type?: PBEnums["MatchType"], // optional MatchType = 3;

    // Match start conditions.
    config?: PBMessages["GameConfig"], // optional GameConfig = 4;

    // Which slot won the match.
    win_slot?: number, // optional int32 = 5;

    // Game start time (RFC3339 string).
    start_time?: string, // optional string = 6;

    // Game duration in seconds.
    duration_secs?: number, // optional int32 = 7;

    // Is replay data available?
    has_replay?: boolean, // optional bool = 10;
}
interface GetStoredPaymentMethodsResult extends pb.Type {
	// List of all stored payment methods.
    method_list?: PBMessages["PaymentMethod"][], // repeated PaymentMethod = 1;

	// Which method is set as the default.
    default_method_id?: number, // optional int64 = 2;
}
interface SubmitPurchaseOrderResult extends pb.Type {
	// Generated order number.
	order_number?: number, // optional int64 = 1;
	// Current status of the order.
	order_status?: PBEnums["OrderStatus"], // optional OrderStatus = 2;
}
interface GetAccountOrderHistoryResult extends pb.Type {
	// Orders that matched the criteria.
    orders?: PBMessages["PurchaseOrder"][], // repeated PurchaseOrder = 1;

	// True when the included results reached the end of the query result.
    end_of_data?: boolean, // optional bool = 2;
}
interface GetAccountBalanceHistoryResult extends pb.Type {
	// Currency of the affected balance.
	currency?: string, // optional string = 1;

	// Summaries of orders that affected the balance.
    entry?: PBMessages["BalanceEntry"][], // repeated BalanceEntry = 2;

	// True when the included results reached the end of the query result.
	end_of_data?: boolean, // optional bool = 3;
}
interface BalanceEntry extends pb.Type {
    // Order number.
    order_number?: number, // optional int64 = 1;

    // True for balance load events.
    balance_load?: boolean, // optional bool = 2;

    // Amount of the balance change.  Balance loads will be positive,
    // deductions will be negative.
    amount?: PBMessages["Money"], // optional tbrpc.Money = 3;

    // Status of the order.
    order_status?: PBEnums["OrderStatus"], // optional OrderStatus = 4;

    // Creation time of the order.
    create_time?: string, // optional string = 5;
}
interface GetAccountBalanceResult extends pb.Type {
	currency?: string, // optional string = 1;
	balance?: PBMessages["Money"], // optional tbrpc.Money = 2;
	pending?: PBMessages["Money"], // optional tbrpc.Money = 3;
}

interface PBMessages {
    Empty?: Empty,
    Result?: Result,
    PingTestResult?: PingTestResult,
    GameEndpointConfig?: GameEndpointConfig,
    NetworkAddr?: NetworkAddr,
    LoginRequest?: LoginRequest,
    GetGameSessionTicketRequest?: GetGameSessionTicketRequest,
    GetGameSessionTicketResult?: GetGameSessionTicketResult,
    RedeemGameSessionTicketRequest?: RedeemGameSessionTicketRequest,
    GetMatchRequest?: GetMatchRequest,
    CreateLobbyRequest?: CreateLobbyRequest,
    GetLobbyJoinCodeRequest?: GetLobbyJoinCodeRequest,
    GetEventResult?: GetEventResult,
    Event?: Event,
    GetEventRequest?: GetEventRequest,
    PingTestCompleteEvent?: PingTestCompleteEvent,
    GameProfile?: GameProfile,
    PlayerStats?: PlayerStats,
    CharacterStats?: CharacterStats,
    PlayerPreferences?: PlayerPreferences,
    ClientFeatureSet?: ClientFeatureSet,
    FeatureValue?: FeatureValue,
    MatchCreatedEvent?: MatchCreatedEvent,
    Player?: Player,
    GameConfig?: GameConfig,
    GameOptions?: GameOptions,
    CharacterSpec?: CharacterSpec,
    VariantSpec?: VariantSpec,
    LocMsg?: LocMsg,
    MsgParam?: MsgParam,
    GameSessionRequest?: GameSessionRequest,
    ClientSpec?: ClientSpec,
    FilterChangedEvent?: FilterChangedEvent,
    WaitMatchProgressEvent?: WaitMatchProgressEvent,
    MatchOutcomeEvent?: MatchOutcomeEvent,
    MatchResult?: MatchResult,
    MatchExperience?: MatchExperience,
    MatchAbandonedEvent?: MatchAbandonedEvent,
    MatchConnectedEvent?: MatchConnectedEvent,
    MatchOverEvent?: MatchOverEvent,
    NextGameConfig?: NextGameConfig,
    GameBeginEvent?: GameBeginEvent,
    GameInputEvent?: GameInputEvent,
    GameOverEvent?: GameOverEvent,
    GameReport?: GameReport,
    UserCheckNetworkEvent?: UserCheckNetworkEvent,
    UserSessionClosedEvent?: UserSessionClosedEvent,
    LobbyJoinEvent?: LobbyJoinEvent,
    LobbyLeaveEvent?: LobbyLeaveEvent,
    LobbyUpdateEvent?: LobbyUpdateEvent,
    LobbyMatchStartEvent?: LobbyMatchStartEvent,
    Lobby?: Lobby,
    LobbyMember?: LobbyMember,
    TrainingGameOptions?: TrainingGameOptions,
    EventQueue?: EventQueue,
    UserInfo?: UserInfo,
    UserAccountSpec?: UserAccountSpec,
    ContactAddress?: ContactAddress,
    UserPrefs?: UserPrefs,
    SearchUsersResult?: SearchUsersResult,
    CreateUserResult?: CreateUserResult,
    NukeHandleResult?: NukeHandleResult,
    GetHandleHistoryResult?: GetHandleHistoryResult,
    HandleChange?: HandleChange,
    SearchAuditHistoryResult?: SearchAuditHistoryResult,
    AuditEvent?: AuditEvent,
    AccountSummary?: AccountSummary,
    AuditAccount?: AuditAccount,
    AuditOrder?: AuditOrder,
    AppConfig?: AppConfig,
    AccountConfig?: AccountConfig,
    MatchServiceConfig?: MatchServiceConfig,
    RankConfig?: RankConfig,
    Glicko2RatingConfig?: Glicko2RatingConfig,
    LevelProgression?: LevelProgression,
    EchelonConfig?: EchelonConfig,
    EchelonRules?: EchelonRules,
    ShopConfig?: ShopConfig,
    PaymentConfig?: PaymentConfig,
    CurrencyConfig?: CurrencyConfig,
    CurrencyDesc?: CurrencyDesc,
    Money?: Money,
    EventConfig?: EventConfig,
    AuditConfig?: AuditConfig,
    LobbyServiceConfig?: LobbyServiceConfig,
    CrashReportConfig?: CrashReportConfig,
    ServerRolloutFlags?: ServerRolloutFlags,
    DesyncReportConfig?: DesyncReportConfig,
    ExportTrimConfig?: ExportTrimConfig,
    GetGlobalConfigResult?: GetGlobalConfigResult,
    GlobalConfig?: GlobalConfig,
    GetMatchQueueConfigResult?: GetMatchQueueConfigResult,
    MatchQueueConfig?: MatchQueueConfig,
    GetMatchUserConfigResult?: GetMatchUserConfigResult,
    MatchUserConfig?: MatchUserConfig,
    GetLobbyConfigResult?: GetLobbyConfigResult,
    LobbyConfig?: LobbyConfig,
    ListFeatureDefinitionsResult?: ListFeatureDefinitionsResult,
    FeatureDefinition?: FeatureDefinition,
    ListFeatureRulesResult?: ListFeatureRulesResult,
    FeatureRule?: FeatureRule,
    GetActiveFeaturesResult?: GetActiveFeaturesResult,
    GetMatchQueueUsersResult?: GetMatchQueueUsersResult,
    QueueUser?: QueueUser,
    GetLobbiesResult?: GetLobbiesResult,
    LobbySummary?: LobbySummary,
    GetLobbyResult?: GetLobbyResult,
    GetActiveMatchesResult?: GetActiveMatchesResult,
    ActiveMatch?: ActiveMatch,
    GameDescriptor?: GameDescriptor,
    GetActiveMatchResult?: GetActiveMatchResult,
    GetRecentMatchesResult?: GetRecentMatchesResult,
    RecentMatch?: RecentMatch,
    GetMatchDetailResult?: GetMatchDetailResult,
    GetPlayerDetailResult?: GetPlayerDetailResult,
    MatchPlayer?: MatchPlayer,
    ListDesyncsResult?: ListDesyncsResult,
    DesyncReportHeader?: DesyncReportHeader,
    ListCrashesResult?: ListCrashesResult,
    CrashCollection?: CrashCollection,
    CrashReportHeader?: CrashReportHeader,
    ListCrashBuildIdentifiersResult?: ListCrashBuildIdentifiersResult,
    CrashBuildIdentifier?: CrashBuildIdentifier,
    ListCrashCollectionsResult?: ListCrashCollectionsResult,
    SearchPurchaseOrdersResult?: SearchPurchaseOrdersResult,
    PurchaseOrder?: PurchaseOrder,
    PurchaseOrderItem?: PurchaseOrderItem,
    PaymentMethod?: PaymentMethod,
    BillingAddress?: BillingAddress,
    Transaction?: Transaction,
    UserCountStats?: UserCountStats,
    GetSessionsResult?: GetSessionsResult,
    Session?: Session,
    GetCharacterUsageResult?: GetCharacterUsageResult,
    CharacterUsageReport?: CharacterUsageReport,
    CharacterReportOptions?: CharacterReportOptions,
    CharacterUsage?: CharacterUsage,
    RatingWinRatioReport?: RatingWinRatioReport,
    Matchup?: Matchup,
    GetSecretQuestionResult?: GetSecretQuestionResult,
    GetLobbyJoinCodeResult?: GetLobbyJoinCodeResult,
    GetGameReplayRecordResult?: GetGameReplayRecordResult,
    GameReplayRecord?: GameReplayRecord,
    InputRecord?: InputRecord,
    GetPlayerStatsResult?: GetPlayerStatsResult,
    GetRecentGamesResult?: GetRecentGamesResult,
    GameRecord?: GameRecord,
    GetStoredPaymentMethodsResult?: GetStoredPaymentMethodsResult,
    SubmitPurchaseOrderResult?: SubmitPurchaseOrderResult,
    GetAccountOrderHistoryResult?: GetAccountOrderHistoryResult,
    GetAccountBalanceHistoryResult?: GetAccountBalanceHistoryResult,
    BalanceEntry?: BalanceEntry,
    GetAccountBalanceResult?: GetAccountBalanceResult,
}

interface Status extends pb.Enum {
    S_SUCCESS?: 0,
    S_ERROR?: 1,
    S_SERVER_ERROR?: 2,
    S_TIMEOUT?: 3,
    S_TRANSPORT_ERROR?: 4,
    S_UNKNOWN?: 128,
}
interface GameType extends pb.Enum {
    GT_RISING_THUNDER?: 100
}
interface LobbyType extends pb.Enum {
    LOBBY_TYPE_ZERO?: 0,
    LT_QUEUED?: 1,
}
interface MatchType extends pb.Enum {
    MATCH_TYPE_ZERO?: 0,
    // Earn experience, but not ranking points.
    MT_UNRANKED?: 1,

    // Earn experience, ranking points adjusted from outcome.
    MT_RANKED?: 2,

    // Join elimination tournament.
    MT_TOURNAMENT?: 3,

    // Custom lobby match.
    MT_LOBBY?: 4,
}
interface SkillEstimateType extends pb.Enum {
    SET_NONE?: 0,
    SET_BEGINNER?: 1,
    SET_INTERMEDIATE?: 2,
    SET_ADVANCED?: 3,
    SET_THUNDEROUS?: 4,
}
interface MatchOutcome extends pb.Enum {
    MATCH_OUTCOME_ZERO?: 0,
    MO_WON?: 1,
    MO_LOST?: 2,
    MO_DISCONNECT?: 3,
}
interface LobbyState extends pb.Enum {
    LOBBY_STATE_ZERO?: 0,
    // Waiting for 2 ready players.
    LS_IDLE?: 1,

    // Match is ready to start.
    LS_MATCH_PENDING?: 2,

    // A match is in progress.
    LS_MATCH?: 3,
}
interface MeterRefillType extends pb.Enum {
    METER_REFIL_TYPE_ZERO?: 0,
    // Same as in online mode
    MRT_NORMAL?: 1,
    // Increase at constant rate
    MRT_REFILL?: 2,
    // Max out on reset
    MRT_MAX?: 3,
}
interface LoginStatus extends pb.Enum{
    // Account accepts logins with a valid password.
    ACTIVE: 1,
    // Account is permanently frozen and can only be enabled by an administrator.
    DISABLED: 3,
    // Account uses an e-mail address that has not yet been confirmed.
    PENDING_VALIDATION: 4,
}
interface AuditEventType extends pb.Enum {
    USER: 1,
    ACCOUNT: 2,
    ORDER: 3,
    QUERY: 4,
}
interface OrderStatus extends pb.Enum {
    // New order that has not been processed yet.
    NEW: 1,
    // Order accepted and is pending settlement.
    PENDING: 2,
    // Order payment method failed.
    FAILED: 3,
    // Payment has been accepted and goods delivered.
    // For item orders, this state occurs on approval.
    // For balance loads, after settlement has been observed.
    COMPLETE: 4,
    // Order canceled before payment settled.
    // Any goods that delivered in advance have been returned.
    CANCELED: 5,
    // Item return / refund requested; pending settlement.
    RETURN_PENDING: 6,
    // Refund was approved but failed to settle.  Items not returned.
    RETURN_FAILED: 7,
    // Refund settled and items returned.
    RETURNED: 8,
}
interface Access extends pb.Enum {
    // Anonymous; allowed for unauthenticated sessions.
    ANON: 0,

    // Access that merely requires an authenticated session.
    LOGIN: 1,

    // Access all user-facing shop methods; manage stored payments,
    // place orders, check status of orders.
    SHOP: 10,

    // Able to login and play the RisingThunder game client and call match-making functions.
    MATCH: 11,

    // Allowed to use the RisingThunder.com user forum.
    RT_FORUM_USER: 12,

    // Invoke stats reporting queries.
    STATS_READ: 18,

    // Server account that can read global metadata.
    APP: 20,

    // Create, modify, and search user accounts.
    USER_MGMT: 21,

    // Search and sync purchase orders.
    ORDER_READ_SYNC: 22,

    // Void and refund purchase orders.
    ORDER_MANAGER: 23,

    // View the audit log.
    AUDIT: 24,

    // RT Forum administrator
    RT_FORUM_MGMT: 25,

    // RT Forum moderator
    RT_FORUM_MOD: 26,

    // Read & write run-time config state.
    CONFIG_READ: 27,
    CONFIG_WRITE: 28,

    // Super-user who is granted all rights.
    SUPER: 30,
}

interface PBEnums {
    Status?: Status,
    GameType?: GameType,
    LobbyType?: LobbyType,
    MatchType?: MatchType,
    SkillEstimateType?: SkillEstimateType,
    MatchOutcome?: MatchOutcome,
    LobbyState?: LobbyState,
    MeterRefillType?: MeterRefillType,
    LoginStatus?: LoginStatus,
    AuditEventType?: AuditEventType,
    OrderStatus?: OrderStatus,
    Access?: Access,
}

export class Protos {
    onProtosLoad: () => void

    messages: PBMessages;

    enums: PBEnums;

    constructor() {
        var root = new pb.Root({
            root: "/proto3 versions",
        });

        root.resolvePath = function(origin: string, file: string): string {
            var str = `${this.options.root}/${file}`
            // console.log(`Origin: "${origin}"; String: "${str}"`);
            return str;
        }

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
                    GameConfig: (root.lookupType(["tbmatch", "GameConfig"]) as any), // special case
                    Player: root.lookupType(["tbmatch", "GameConfig", "Player"]),
                    GameOptions: root.lookupType(["tbmatch", "GameOptions"]),
                    CharacterSpec: root.lookupType(["tbmatch", "CharacterSpec"]),
                    VariantSpec: root.lookupType(["tbmatch", "VariantSpec"]),
                    LocMsg: root.lookupType(["tbrpc", "LocMsg"]),
                    MsgParam: root.lookupType(["tbrpc", "MsgParam"]),
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
/* eslint-disable */

import { ModSDKGlobalAPI } from "./types/bcModSdk";

export {};

declare global {
  var Dexie: import("dexie").DexieConstructor;
  var FBC_VERSION: string;
  /** @deprecated */
  var bceSendAction: (text: string) => void;
  var fbcSendAction: (text: string) => void;
  var fbcPushEvent: (evt: ExpressionEvent) => void;
  var fbcChatNotify: (node: HTMLElement | HTMLElement[] | string) => void;
  var fbcDebug: (copy?: boolean) => Promise<string>;
  /** @deprecated */
  var bceSettingValue: (key: string) => boolean | number | string;
  var fbcSettingValue: (key: string) => boolean | number | string;
  var bceAnimationEngineEnabled: () => boolean;
  var bce_initializeDefaultExpression: () => void;
  var bceUpdatePasswordForReconnect: () => void;
  var bceMessageReplacements: (msg: string) => string;
  var bce_EventExpressions: { [key: string]: Expression };
  var bceClearPassword: (name: string) => void;
  var bceClearCaches: () => Promise<void>;
  var fbcDisplayText: (
    original: string,
    replacements?: Record<string, string>
  ) => string;
  /** @deprecated */
  var bceDisplayText: (
    original: string,
    replacements?: Record<string, string>
  ) => string;
  var bceStripBeepMetadata: (text: string) => string;
  var bce_ArousalExpressionStages: ArousalExpressionStages;
  var bce_ActivityTriggers: ActivityTrigger[];
  var bcModSdk: ModSDKGlobalAPI | undefined;
  var FUSAM: FUSAMPublicAPI | undefined;
  var ActivityDictionary: string[][];
  var ActivityCheckPrerequisite: (
    pre: string,
    acting: Character,
    acted: Character,
    group: AssetGroup
  ) => boolean;
  var DialogDrawActivityMenu: (C: Character) => void;
  var CommandParse: (msg: string) => void;
  var Player: PlayerCharacter;
  var WardrobeSize: number;
  var WardrobeOffset: number;
  var CraftingSlot: number;
  var CraftingOffset: number;
  var CraftingMode: "Slot" | "Item" | "Property" | "Lock" | "Name" | "Color";
  var CraftingConvertItemToSelected: (craft: Craft) => CraftingItem;
  var CraftingModeSet: (
    mode: "Slot" | "Item" | "Property" | "Lock" | "Name" | "Color"
  ) => void;
  var CraftingItemListBuild: () => void;
  var ChatRoomRegisterMessageHandler: (handler: ChatRoomMessageHandler) => void;
  var ChatRoomHTMLEntities: (text: string) => string;
  var SpeechGarble: (C: Character, text: string) => string;
  var CharacterLoadSimple: (accName: string) => Character;
  var CharacterDelete: (accName: string) => void;
  var CharacterNaked: (C: Character) => void;
  var ChatRoomChatInputRect: [number, number, number, number];
  var DialogMenuMode:
    | "dialog"
    | "items"
    | "colorDefault"
    | "colorExpression"
    | "colorItem"
    | "permissions"
    | "activities"
    | "locking"
    | "locked"
    | "extended"
    | "tighten"
    | "crafted"
    | "struggle";
  var ItemColorLoad: (
    c: Character,
    item: Item,
    x: number,
    y: number,
    width: number,
    height: number,
    includeResetButton?: boolean
  ) => void;
  var ItemColorDraw: (
    c: Character,
    group: string,
    x: number,
    y: number,
    width: number,
    height: number,
    includeResetButton?: boolean
  ) => void;
  var ItemColorOnExit: (cb: (c: Character) => void) => void;
  var ItemColorClick: (
    c: Character,
    group: string,
    x: number,
    y: number,
    width: number,
    height: number,
    includeResetButton?: boolean
  ) => void;
  var DrawCharacter: (
    C: Character,
    x: number,
    y: number,
    zoom: number,
    heightResizeAllowed?: boolean,
    canvas?: CanvasRenderingContext2D
  ) => void;
  var CharacterReleaseTotal: (C: Character) => void;
  var ServerAccountUpdate: AccountUpdater;
  var ChatRoomCurrentTime: () => string;
  var LZString: LZStringType;
  var ElementIsScrolledToEnd: (element: string) => boolean;
  var ElementScrollToEnd: (element: string) => void;
  var RelogChatLog: HTMLDivElement | null;
  var ServerBeep: ServerBeep;
  var ServerSend: (event: string, data: unknown) => void;
  var ServerSendQueueProcess: () => void;
  var GameVersion: string;
  var GLVersion: string;
  var LoginErrorMessage: string;
  var CharacterAppearanceReturnRoom: string;
  var StruggleProgress: number;
  var StruggleProgressCurrentMinigame: Minigame;
  var StruggleMinigames: Record<Minigame, StruggleMinigame>;
  var StruggleLockPickDraw: (C: Character) => void;
  var StruggleProgressDexTarget: number;
  var StruggleProgressDexCurrent: number;
  var StruggleProgressFlexCircles: unknown[];
  var StruggleStrengthProcess: (Reverse: boolean) => void;
  var StruggleFlexibilityProcess: (Reverse: boolean) => void;
  var StruggleDexterityProcess: () => void;
  /** @deprecated */
  var StruggleStrength: (Reverse: boolean) => void;
  /** @deprecated */
  var StruggleFlexibility: (Reverse: boolean, Hover?: boolean) => void;
  /** @deprecated */
  var StruggleDexterity: (Reverse: boolean) => void;
  var StruggleProgressAuto: number;
  var StruggleProgressChallenge: number;
  var DialogAllowBlush: boolean;
  var DialogAllowEyebrows: boolean;
  var DialogAllowFluids: boolean;
  var InformationSheetSelection: Character | null;
  var InformationSheetLoadCharacter: (C: Character) => void;
  var CharacterLoadOnline: (
    data: NetCharacter,
    sourceMemberNumber: number
  ) => Character;
  var CraftingUpdatePreview: () => void;
  var CraftingConvertSelectedToItem: () => Craft;
  var CraftingSelectedItem: CraftingItem;
  var ServerPlayerIsInChatRoom: () => boolean;
  var InventoryItemMiscLoversTimerPadlockDraw: () => void;
  var InventoryItemMiscLoversTimerPadlockClick: () => void;
  var InventoryItemMiscLoversTimerPadlockExit: () => void;
  var InventoryItemMiscLoversTimerPadlockLoad: () => void;
  var InventoryItemMiscMistressTimerPadlockDraw: () => void;
  var InventoryItemMiscMistressTimerPadlockClick: () => void;
  var InventoryItemMiscMistressTimerPadlockExit: () => void;
  var InventoryItemMiscMistressTimerPadlockLoad: () => void;
  var InventoryItemMiscOwnerTimerPadlockDraw: () => void;
  var InventoryItemMiscOwnerTimerPadlockClick: () => void;
  var InventoryItemMiscOwnerTimerPadlockExit: () => void;
  var InventoryItemMiscOwnerTimerPadlockLoad: () => void;
  var InventoryItemMiscTimerPasswordPadlockDraw: () => void;
  var InventoryItemMiscTimerPasswordPadlockClick: () => void;
  var InventoryItemMiscTimerPasswordPadlockExit: () => void;
  var InventoryItemMiscTimerPasswordPadlockLoad: () => void;
  var ServerInit: () => void;
  var DialogFocusSourceItem: Item | null;
  var DialogFocusItem: Item | null;
  var CharacterNickname: (C: BaseCharacter) => string;
  var OnlineProfileExit: (save: boolean) => void;
  var ElementCreateTextArea: (id: string) => HTMLTextAreaElement;
  var ElementCreateInput: (
    id: string,
    type: string,
    value: string,
    maxlength: string
  ) => HTMLInputElement;
  var ElementPosition: (
    id: string,
    x: number,
    y: number,
    w: number,
    h?: number
  ) => void;
  var ElementPositionFix: (
    id: string,
    fontSize: number,
    x: number,
    y: number,
    w: number,
    h?: number
  ) => void;
  var ElementRemove: (id: string) => void;
  var ElementValue: (id: string, newValue?: string) => string;
  var CurrentScreen: string;
  var ChatRoomCharacterItemUpdate: (C: Character, group: string) => void;
  var ChatRoomCharacterUpdate: (C: Character) => void;
  var ChatRoomCreateElement: () => void;
  var ChatRoomChatHidden: boolean;
  var ChatRoomBackground: string;
  var CharacterGetCurrent: () => Character;
  var CharacterLoadCanvas: (C: Character) => void;
  var ServerCharacterNicknameRegex: RegExp;
  var CharacterDelete: (AccountName: string) => void;
  var CharacterAppearanceStringify: (C: Character) => string;
  var CharacterAppearanceBackup: string;
  var ChatRoomCharacter: Character[];
  var ChatRoomCharacterDrawlist: Character[];
  var Character: Character[];
  var ChatRoomTargetMemberNumber: number;
  var bcx:
    | import("./types/bcxExternalInterface").BCX_ConsoleInterface
    | undefined;
  var PreferenceSubscreenList: string[];
  var PreferenceSubscreen: string;
  var PreferenceMessage: string;
  var NotificationGetTotalCount: (type: 0 | 1 | 2 | 3) => number;
  var InventoryGroupIsBlocked: (C: Character, group?: string) => boolean;
  var MainCanvas: HTMLCanvasElement;
  var TranslationLanguage: string;
  var DrawText: (
    text: string,
    x: number,
    y: number,
    color: string,
    backColor?: string
  ) => void;
  var DrawTextFit: (
    text: string,
    x: number,
    y: number,
    w: number,
    color: string,
    backColor?: string
  ) => void;
  var DrawButton: (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    color: string,
    image?: string,
    hoveringText?: string,
    disabled?: boolean
  ) => void;
  var DrawCheckbox: (
    x: number,
    y: number,
    w: number,
    h: number,
    text: string,
    isChecked: boolean,
    disabled?: boolean,
    textColor?: string,
    checkImage?: string
  ) => void;
  var DrawImageResize: (
    image: string,
    x: number,
    y: number,
    w: number,
    h: number
  ) => boolean;
  var MouseIn: (x: number, y: number, w: number, h: number) => boolean;
  var TextLoad: (id?: string) => void;
  var TextGet: (id: string) => string;
  var StruggleDrawLockpickProgress: (C: Character) => void;
  var StruggleLockPickOrder: null | number[];
  var StruggleExpressionStore:
    | Partial<Record<string, string>>
    | null
    | undefined;
  var SkillGetWithRatio: (C: Character, skillType: string) => number;
  var LoginRun: () => void;
  var LoginClick: () => void;
  var CurrentScreenFunctions: ScreenFunctions;
  var ServerIsConnected: boolean;
  var LoginSubmitted: boolean;
  var LoginSetSubmitted: () => void;
  var ServerConnect: () => void;
  var ServerDisconnect: (data: unknown, close?: boolean) => void;
  var PoseFemale3DCG: ClubPose[];
  var ServerSocket: ServerSocket;
  var Commands: Command[];
  var CharacterSetActivePose: (
    C: Character,
    newPose: string | string[],
    force: boolean
  ) => void;
  var CharacterSetFacialExpression: (
    C: Character,
    assetGroup: string,
    expression: string,
    timer?: number,
    color?: string | string[]
  ) => void;
  var CommonColorIsValid: (color: string | string[]) => boolean;
  var ActivityChatRoomArousalSync: (C: Character) => void;
  var ServerAppearanceBundle: (appearance: Item[]) => ItemBundle[];
  var ServerAppearanceLoadFromBundle: (
    C: Character,
    assetFamily: string,
    bundle: ItemBundle[],
    sourceMemberNumber?: number,
    appearanceFull?: boolean
  ) => boolean;
  var CharacterRefresh: (
    C: Character,
    push?: boolean,
    refreshDialog?: boolean
  ) => void;
  var AppearanceExit: () => void;
  var AppearanceLoad: () => void;
  var AppearanceRun: () => void;
  var AppearanceClick: () => void;
  var CharacterAppearanceMode: string;
  var CharacterAppearanceSelection: Character;
  var DialogDrawItemMenu: (C: Character) => void;
  var InventoryGet: (C: Character, groupName: string) => Item | null;
  var DialogDraw: () => void;
  var DialogClick: () => void;
  var CurrentCharacter: Character;
  var GLDrawCanvas: HTMLCanvasElement & {
    GL: { textureCache: Map<unknown, unknown> };
  };
  var GLDrawResetCanvas: () => void;
  var WardrobeFixLength: () => void;
  var ChatRoomDrawCharacterOverlay: (
    C: Character,
    charX: number,
    charY: number,
    zoom: number,
    pos: number
  ) => void;
  var ChatRoomHideIconState: number;
  var CharacterAppearanceWardrobeLoad: (C: Character) => void;
  var ChatRoomData: { Background: string; Name: string };
  var WardrobeBackground: string;
  var WardrobeLoad: () => void;
  var WardrobeRun: () => void;
  var WardrobeClick: () => void;
  var WardrobeExit: () => void;
  var WardrobeCharacter: Character[];
  var WardrobeFastLoad: (
    C: Character,
    position: number,
    update?: boolean
  ) => void;
  var WardrobeFastSave: (
    C: Character,
    position: number,
    update?: boolean
  ) => void;
  var SpeechGarbleByGagLevel: (
    level: number,
    dialogText: string,
    ignoreOOC?: boolean
  ) => string;
  var SpeechGetTotalGagLevel: (C: Character) => number;
  var ChatRoomResize: (load: boolean) => void;
  var ChatRoomRun: () => void;
  var ChatRoomClick: () => void;
  var ServerBundledItemToAppearanceItem: (
    assetFamily: string,
    item: ItemBundle
  ) => Item | null;
  var DrawBackNextButton: (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    color: string,
    image?: string,
    labelPrevious?: () => string,
    labelNext?: () => string,
    disabled?: boolean,
    arrowWidth?: number,
    tooltipPosition?: Position
  ) => void;
  var MouseX: number;
  var MouseY: number;
  var ActivitySetArousal: (C: Character, progress: number) => void;
  var ActivitySetArousalTimer: (
    C: Character,
    activity: Record<string, unknown>,
    zone: string,
    progress: number
  ) => void;
  var ActivityTimerProgress: (C: Character, progress: number) => void;
  var TimerProcess: (timestamp: number) => void;
  var ChatRoomListManipulation: (
    list: number[] | null,
    adding: boolean,
    memberNumber: string | number
  ) => void;
  var ServerOpenFriendList: () => void;
  var ServerAccountBeep: (data: Record<string, unknown>) => void;
  var ServerClickBeep: () => void;
  var BCX_Loaded: boolean;
  var BCX_SOURCE: string;
  var StartBcUtil: () => void;
  var PreferenceSubscreenBCESettingsLoad: () => void;
  var PreferenceSubscreenBCESettingsExit: () => void;
  var PreferenceSubscreenBCESettingsRun: () => void;
  var PreferenceSubscreenBCESettingsClick: () => void;
  var OnlineGameAllowChange: () => boolean;
  var ChatRoomKeyDown: (event: KeyboardEvent) => void;
  var FriendListBeepLog: Beep[];
  var FriendListModeIndex: number;
  var FriendListShowBeep: (id: number) => void;
  var DialogCanUnlock: (C: Character, item: Item) => boolean;
  var CommandExecute: (msg: string) => void;
  var ManagementMistress: NPC;
  var CommonSetScreen: (category: string, screen: string) => void;
  var ChatRoomLeashPlayer: number;
  var ChatRoomClearAllElements: () => void;
  var bceGotoRoom: (room: string) => void;
  var DialogLeave: () => void;
  var ChatRoomStart: (
    space: string,
    game: string,
    leaveRoom: string | null,
    leaveSpace: string | null,
    background: string,
    bgTagList: string[]
  ) => void;
  var BackgroundsTagList: string[];
  var ChatRoomJoinLeash: string;
  var bceStartClubSlave: () => Promise<void>;
  var bceSendToClubSlavery: () => void;
  var bceCanSendToClubSlavery: () => boolean;
  var ChatRoombceSendToClubSlavery: () => void;
  var ChatRoombceCanSendToClubSlavery: () => boolean;
  var CharacterSetCurrent: (C: Character) => void;
  var CommonCSVCache: { [key: string]: string[][] };
  var CharacterBuildDialog: (C: Character, csv: string[][]) => void;
  var ChatRoomAppendChat: (div: HTMLElement) => void;
  var ChatRoomMessage: (data: ChatMessage) => void;
  var ChatRoomSyncPose: (data: {
    MemberNumber: number;
    Character?: Character;
    Pose: string | string[];
  }) => void;
  var ChatRoomSendChat: (skipHistory?: boolean) => void;
  var Asset: Asset[];
  var AssetGroup: AssetGroup[];
  var CharacterDecompressWardrobe: (
    wardrobe: ItemBundle[][] | string
  ) => ItemBundle[][];
  var CharacterCompressWardrobe: (wardrobe: ItemBundle[][]) => string;
  var CharacterAppearanceWardrobeOffset: number;
  var GameRun: (time: DOMHighResTimeStamp) => void;
  var NotificationRaise: (
    eventType: "Beep",
    data: Record<string, unknown>
  ) => void;
  var NotificationReset: (eventType: "Beep") => void;
  var AudioPlayInstantSound: (src: string, volume?: number) => void;
}
declare global {
  interface Window {
    InputChat?: HTMLTextAreaElement;
    MainCanvas: HTMLCanvasElement;
  }
  type Passwords = Record<string, string>;
  type SettingsCategory =
    | "performance"
    | "chat"
    | "activities"
    | "immersion"
    | "appearance"
    | "addons"
    | "misc"
    | "cheats"
    | "buttplug"
    | "hidden";
  type DefaultSettingBase = {
    label: string;
    type?: "boolean" | "string";
    sideEffects: (newValue: boolean | string) => void;
    category: SettingsCategory;
    description: string;
  };

  type DefaultSettingBoolean = DefaultSettingBase & {
    value: boolean;
  };

  type DefaultSettingString = DefaultSettingBase & {
    value: string;
  };

  type DefaultSetting = DefaultSettingBoolean | DefaultSettingString;

  type FBCNote = {
    note: string;
    updatedAt?: number;
  };
  type Duration = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  type ArousalSettings = {
    Progress: number;
    OrgasmCount: number;
    OrgasmStage: number;
    AffectExpression: boolean;
  };
  type OnlineSettings = {
    BCE: string;
    BCEWardrobe: string;
  };
  type OnlineSharedSettings = {
    GameVersion: string;
  };
  type ChatSettings = {
    ColorTheme: string;
  };
  type Activity = {
    Prerequisite: string[];
  };
  type Craft = {
    Color: string;
    Description: string;
    Item: string;
    Lock: string;
    Name: string;
    Property: string;
  };
  type NPC = {
    Stage: string;
    CurrentDialog: string;
  } & Character;
  type NetCharacter = {
    Appearance: ItemBundle[];
  } & BaseCharacter;
  type PlayerCharacter = {
    WhiteList: number[];
    BlackList: number[];
    GhostList: number[];
    FriendList: number[];
    FriendNames: Map<number, string>;
    Inventory: Item[];
    ChatSettings: ChatSettings;
    AudioSettings: { PlayBeeps?: boolean };
    ImmersionSettings: { ShowRoomCustomization: number };
    ExpressionQueue?: ExpressionQueueItem[];
  } & Character;
  type Relationship = {
    Name: string;
    MemberNumber: number;
    Start: number;
    Stage: number;
  };
  interface Character extends BaseCharacter {
    Appearance: Item[];
    AppearanceLayers: ItemLayer[];
    Wardrobe: ItemBundle[][];
    FocusGroup: AssetGroup;
    HasHiddenItems: boolean;
    GetBlindLevel: () => number;
    FBC: string;
    FBCOtherAddons?: readonly import("./types/bcModSdk").ModSDKModInfo[];
    BCEArousal: boolean;
    BCECapabilities: readonly string[];
    BCEArousalProgress: number;
    BCEEnjoyment: number;
    /** @deprecated */
    BCEOriginalName?: string;
    /** @deprecated */
    BCEWardrobe?: string;
    BCESeen: number;
    IsPlayer: () => this is PlayerCharacter;
    IsOnline: () => boolean;
    CanChange?: () => boolean;
    CanChangeOwnClothes?: () => boolean;
    CanInteract: () => boolean;
    LastChatRoom: string;
    LastChatRoomPrivate: boolean;
    Dialog: {
      Function: string;
      NextStage: string;
      Option: string;
      Prerequisite: string;
      Result: string;
      Stage: string;
      Modded?: boolean;
    }[];
  }
  interface BaseCharacter {
    AssetFamily: "Female3DCG";
    ArousalSettings?: ArousalSettings;
    Inventory: unknown;
    OnlineSettings: OnlineSettings;
    OnlineSharedSettings: OnlineSharedSettings;
    MemberNumber: number;
    Reputation: { Type: string; Value: number }[];
    Title: string;
    Name: string;
    Nickname?: string;
    AccountName: string;
    Creation: number;
    LabelColor: string;
    Ownership: Relationship;
    Lovership: Relationship[];
    ActivePose: string[] | null;
    Crafting: Craft[];
  }
  type Beep = {
    Message?: string;
    Private?: boolean;
    Time?: Date;
    IsSecret?: boolean;
    BeepType?: string;
    MemberNumber: number;
    MemberName?: string;
    ChatRoomName?: string;
    Sent?: boolean;
  };
  type AccountUpdater = {
    QueueData: (data: Partial<Character>, force?: boolean) => void;
  };
  type LZStringType = {
    compressToBase64: (data: string) => string;
    compressToUTF16: (data: string) => string;
    decompressFromBase64: (data: string) => string;
    decompressFromUTF16: (data: string) => string;
  };
  type ServerBeep = {
    Timer: number;
    MemberNumber?: number;
    Message: string;
    ChatRoomName?: string;
    IsMail?: boolean;
    ClickAction?: "FriendList";
  };
  type ExpressionQueueItem = {
    Time?: number;
    Group?: string;
    Expression?: string;
  };
  type CraftingItem = {
    Name?: string;
    Description?: string;
    Color?: string;
    Asset?: Asset;
    Property?: string;
    Lock?: Asset;
    Private?: boolean;
    Type: String;
  };
  type ItemProperty = {
    RemoveTimer?: number;
    ShowTimer?: boolean;
    Intensity?: number;
    Expression?: string;
    OverridePriority?: number | Record<string, number>;
    LockMemberNumber?: number;
    LockedBy?: string;
    Effect?: string[];
    BlinkState?: unknown;
  };
  type AssetGroup = {
    Name: string;
    Description: string;
    Category: "Appearance" | "Item";
    AllowNone: boolean;
    BodyCosplay: boolean;
    IsDefault: boolean;
    Clothing: boolean;
    Asset: Asset[];
    IsRestraint: boolean;
    Zone?: [number, number, number, number][];
  };
  type Asset = {
    Name: string;
    Group: AssetGroup;
    Description: string;
    Color: string;
    MaxTimer?: number;
    AllowEffect?: string[];
    AllowLock?: boolean;
    Layer: AssetLayer[];
    Priority?: number;
  };
  type AssetLayer = {
    Name: string | null;
    Priority?: number | null;
  };
  type ItemLayer = Item & { Name: string | null; Priority?: number };
  type Item = {
    Asset: Asset;
    Difficulty?: number;
    Color?: string | string[];
    Property?: ItemProperty;
    Craft?: Craft;
  };
  type ItemBundle = {
    Group: string;
    Name: string;
    Difficulty?: number;
    Color?: string | string[];
    Property?: ItemProperty;
    Craft?: Craft;
  };
  type ScreenFunctions = {
    Run: (time: number) => void;
    Click: (event: MouseEvent | TouchEvent) => void;
    Resize?: (load: boolean) => void;
  };
  type ArousalExpressionStage = {
    Expression: string | null;
    Limit: number;
  };
  type ArousalExpressionStages = Record<string, ArousalExpressionStage[]>;
  type ClubPose = {
    Name: string;
    Category?: string;
    AllowMenu?: boolean;
  };
  type ExpressionStage = {
    Id?: number;
    Expression?: string | null;
    ExpressionModifier?: number;
    Duration: number;
    Priority?: number;
    Skip?: boolean;
    Color?: string;
    Applied?: boolean;
  };
  type ExpressionStages = Record<string, ExpressionStage[]>;
  type Pose = {
    Id?: number;
    Pose: string[] | PoseEx[];
    Duration: number;
    Priority?: number;
  };
  type PoseEx = {
    Pose: string;
    Category?: string;
  };
  type Expression = {
    Type: string;
    Duration: number;
    Priority?: number;
    Expression?: ExpressionStages;
    Poses?: Pose[];
  };
  type EventParams = {
    At?: number;
    Until?: number;
    Id?: number;
  };
  type ExpressionEvent = Expression & EventParams;
  type ActivityTriggerMatcher = {
    Tester: RegExp;
    Criteria?: {
      TargetIsPlayer?: boolean;
      SenderIsPlayer?: boolean;
      DictionaryMatchers?: Record<string, string>[];
    };
  };
  type ActivityTrigger = {
    Event: string;
    Type: string;
    Matchers: ActivityTriggerMatcher[];
  };
  type ServerSocketEvent =
    | "connect"
    | "disconnect"
    | "ServerInfo"
    | "CreationResponse"
    | "LoginResponse"
    | "LoginQueue"
    | "ForceDisconnect"
    | "ChatRoomSearchResult"
    | "ChatRoomSearchResponse"
    | "ChatRoomCreateResponse"
    | "ChatRoomUpdateResponse"
    | "ChatRoomSync"
    | "ChatRoomSyncMemberJoin"
    | "ChatRoomSyncMemberLeave"
    | "ChatRoomSyncRoomProperties"
    | "ChatRoomSyncCharacter"
    | "ChatRoomSyncSwapPlayers"
    | "ChatRoomSyncMovePlayer"
    | "ChatRoomSyncReorderPlayers"
    | "ChatRoomSyncSingle"
    | "ChatRoomSyncExpression"
    | "ChatRoomSyncPose"
    | "ChatRoomSyncArousal"
    | "ChatRoomSyncItem"
    | "ChatRoomMessage"
    | "ChatRoomAllowItem"
    | "ChatRoomGameResponse"
    | "PasswordResetResponse"
    | "AccountQueryResult"
    | "AccountBeep"
    | "AccountOwnership"
    | "AccountLovership";
  type ServerSocket = {
    on: (event: ServerSocketEvent, cb: (data: unknown) => unknown) => void;
    disconnect: () => void;
    io: { connect: () => void; disconnect: () => void };
    connected: boolean;
  };
  type Command = {
    Tag: string;
    Description?: string;
    Reference?: string;
    Action?: (args: string, msg: string, parsed: string[]) => unknown;
    Prerequisite?: () => boolean;
    AutoComplete?: (parsed: string[], low: string, msg: string) => void;
    Clear?: false;
  };
  type Position = {
    X: number;
    Y: number;
    Width: number;
    Height: number;
  };
  type Friend = {
    MemberName: string;
    MemberNumber: number;
  };
  type BCEActivity = "ClubSlavery";
  type BCEMessage = {
    type: string;
    version: string;
    capabilities?: readonly string[];
    alternateArousal?: boolean;
    replyRequested?: boolean;
    progress?: number;
    enjoyment?: number;
    activity?: BCEActivity;
    otherAddons?: readonly import("./types/bcModSdk").ModSDKModInfo[];
  };
  type ChatMessageDictionary = {
    Tag?: string;
    message?: BCEMessage;
    MemberNumber?: number;
    Text?: string;
    TargetCharacter?: number;
    SourceCharacter?: number;
  };
  type ChatMessageBase = {
    Type: string;
    Content: string;
    Sender?: number;
    Target?: number;
  };
  type ChatMessage = ChatMessageBase & {
    Dictionary: ChatMessageDictionary[];
  };
  /** @deprecated */
  type BCEChatMessage = ChatMessageBase & {
    Dictionary: { message: BCEMessage };
  };
  type ChatRoomSyncMemberJoinEvent = {
    MemberNumber: number;
    Character: NetCharacter;
  };
  type ChatRoomSyncSingleEvent = {
    Character?: NetCharacter;
    SourceMemberNumber: number;
  };
  type ChatRoomSyncEvent = {
    Character: NetCharacter[];
    SourceMemberNumber: number;
  };
  type ChatRoomSyncItemEvent = {
    Item: {
      Target: number;
    } & ItemBundle;
    Source: number;
  };
  type BCECharacterState = { clamped: number };

  type ToySetting = {
    Name: string;
    SlotName: string;
    LastIntensity?: number;
  };
  type ToySyncState = {
    client?: import("./types/buttplug.io.1.0.17").ButtplugClient;
    deviceSettings: Map<string, ToySetting>;
  };

  type SavedProfile = {
    memberNumber: number;
    name: string;
    lastNick?: string;
    seen: number;
    characterBundle: string;
  };

  type SocketEventListenerRegister = [ServerSocketEvent, SocketEventListener][];

  type SocketEventListener = () => Promise<void> | void;

  interface ChatRoomMessageHandler {
    Description?: string;
    Priority: number;
    Callback: (
      data: ChatMessage,
      sender: Character,
      msg: string,
      metadata?: any
    ) =>
      | boolean
      | { msg?: string; skip?: (handler: ChatRoomMessageHandler) => boolean };
  }

  type Minigame = "Strength" | "Flexibility" | "Dexterity" | "LockPick";

  interface StruggleMinigame {
    Setup: (C: Character, PrevItem: Item, NextItem: Item) => void;
    Draw: (C: Character) => void;
    HandleEvent?: (EventType: "KeyDown" | "Click") => void;
  }

  type FUSAMPublicAPI = {
    present: true;
    addons: Record<string, FUSAMAddonState>;
    registerDebugMethod: (
      name: string,
      method: () => string | Promise<string>
    ) => void;
  };

  type FUSAMAddonState = {
    distribution: string;
    status: "loading" | "loaded" | "error";
  };
}

// ==UserScript==
// @name Bondage Club Enhancements
// @namespace https://www.bondageprojects.com/
// @version 4.63
// @description FBC - For Better Club - enhancements for the bondage club - old name kept in tampermonkey for compatibility
// @author Sidious
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==
/* eslint-disable no-inline-comments */
// @ts-check
// eslint-disable-next-line
/// <reference path="./node_modules/@total-typescript/ts-reset/dist/recommended.d.ts"/>
// eslint-disable-next-line
/// <reference path="./bce.d.ts" />

/**
 *     BCE/FBC
 *  Copyright (C) 2023  Sid
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const FBC_VERSION = "4.63";
const settingsVersion = 55;

const fbcChangelog = `${FBC_VERSION}
- R98 compatibility
- linked chat embeds to the trusted origins for 3rd party content

4.62
- added a patch to prevent the game from processing serversends while the game does not have connection with the server
- fixes towards a rare error related to ArousalSettings not being defined on remote characters
- removed a duplicate hello message on initial load when automatically rejoining a chatroom
- removed FBC's duplicate implementation of client-side rate limiting

4.61
- fix a bug where the animation can get in a bad state when presented with an invalid expression

4.60
- add ability to define target for /versions command (dDeepLb)
- preserve formatting in IM messages (dDeepLb)
`;

/*
 * Bondage Club Mod Development Kit
 * For more info see: https://github.com/Jomshir98/bondage-club-mod-sdk
 */
/** @type {import('./types/bcModSdk').ModSDKGlobalAPI} */
// eslint-disable-next-line capitalized-comments, multiline-comment-style
// prettier-ignore
// @ts-ignore
// eslint-disable-next-line
var bcModSdk=function(){"use strict";const e="1.1.0";function o(e){alert("Mod ERROR:\n"+e);const o=new Error(e);throw console.error(o),o}const t=new TextEncoder;function n(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function r(e){const o=new Set;return e.filter((e=>!o.has(e)&&o.add(e)))}const i=new Map,a=new Set;function d(e){a.has(e)||(a.add(e),console.warn(e))}function s(e){const o=[],t=new Map,n=new Set;for(const r of p.values()){const i=r.patching.get(e.name);if(i){o.push(...i.hooks);for(const[o,a]of i.patches.entries())t.has(o)&&t.get(o)!==a&&d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o)||""}\nPatch2:\n${a}`),t.set(o,a),n.add(r.name)}}o.sort(((e,o)=>o.priority-e.priority));const r=function(e,o){if(0===o.size)return e;let t=e.toString().replaceAll("\r\n","\n");for(const[n,r]of o.entries())t.includes(n)||d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(e.original,t);let i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,e.name,n),d=r.apply(this,o);return null==a||a(),d};for(let t=o.length-1;t>=0;t--){const n=o[t],r=i;i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,e.name,n.mod),d=n.hook.apply(this,[o,e=>{if(1!==arguments.length||!Array.isArray(o))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`);return r.call(this,e)}]);return null==a||a(),d}}return{hooks:o,patches:t,patchesSources:n,enter:i,final:r}}function c(e,o=!1){let r=i.get(e);if(r)o&&(r.precomputed=s(r));else{let o=window;const a=e.split(".");for(let t=0;t<a.length-1;t++)if(o=o[a[t]],!n(o))throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);const d=o[a[a.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${e} to be patched not found`);const c=function(e){let o=-1;for(const n of t.encode(e)){let e=255&(o^n);for(let o=0;o<8;o++)e=1&e?-306674912^e>>>1:e>>>1;o=o>>>8^e}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:e,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l),router:()=>{},context:o,contextProperty:a[a.length-1]}),r.router=function(e){return function(...o){return e.precomputed.enter.apply(this,[o])}}(r),i.set(e,r),o[r.contextProperty]=r.router}return r}function l(){const e=new Set;for(const o of p.values())for(const t of o.patching.keys())e.add(t);for(const o of i.keys())e.add(o);for(const o of e)c(o,!0)}function f(){const e=new Map;for(const[o,t]of i)e.set(o,{name:o,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:r(t.precomputed.hooks.map((e=>e.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return e}const p=new Map;function u(e){p.get(e.name)!==e&&o(`Failed to unload mod '${e.name}': Not registered`),p.delete(e.name),e.loaded=!1,l()}function g(e,t,r){"string"==typeof e&&"string"==typeof t&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`),e={name:e,fullName:e,version:t},t={allowReplace:!0===r}),e&&"object"==typeof e||o("Failed to register mod: Expected info object, got "+typeof e),"string"==typeof e.name&&e.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;"string"==typeof e.fullName&&e.fullName||o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,"string"!=typeof e.version&&o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),void 0!==e.repository&&"string"!=typeof e.repository&&o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),null==t&&(t={}),t&&"object"==typeof t||o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`);const a=!0===t.allowReplace,d=p.get(e.name);d&&(d.allowReplace&&a||o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),u(d));const s=e=>{"string"==typeof e&&e||o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`);let t=g.patching.get(e);return t||(t={hooks:[],patches:new Map},g.patching.set(e,t)),t},f={unload:()=>u(g),hookFunction:(e,t,n)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);"number"!=typeof t&&o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`),"function"!=typeof n&&o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`);const a={mod:g.name,priority:t,hook:n};return r.hooks.push(a),l(),()=>{const e=r.hooks.indexOf(a);e>=0&&(r.hooks.splice(e,1),l())}},patchFunction:(e,t)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);n(t)||o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`);for(const[n,a]of Object.entries(t))"string"==typeof a?r.patches.set(n,a):null===a?r.patches.delete(n):o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`);l()},removePatches:e=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);s(e).patches.clear(),l()},callOriginal:(e,t,n)=>(g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`),"string"==typeof e&&e||o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`),Array.isArray(t)||o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`),function(e,o,t=window){return c(e).original.apply(t,o)}(e,t,n)),getOriginalHash:e=>("string"==typeof e&&e||o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`),c(e).originalHash)},g={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:a,api:f,loaded:!0,patching:new Map};return p.set(e.name,g),Object.freeze(f)}function h(){const e=[];for(const o of p.values())e.push({name:o.name,fullName:o.fullName,version:o.version,repository:o.repository});return e}let m;const y=function(){if(void 0===window.bcModSdk)return window.bcModSdk=function(){const o={version:e,apiVersion:1,registerMod:g,getModsInfo:h,getPatchingInfo:f,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return m=o,Object.freeze(o)}();if(n(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&void 0===window.bcModSdk._shim10register)){const e=window.bcModSdk,o=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(o,t,n)=>o&&"object"==typeof o&&"string"==typeof o.name&&"string"==typeof o.version?e.registerMod(o.name,o.version,"object"==typeof t&&!!t&&!0===t.allowReplace):e.registerMod(o,t,n),_shim10register:!0}));window.bcModSdk=o}return window.bcModSdk}();return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

async function ForBetterClub() {
	"use strict";

	const SUPPORTED_GAME_VERSIONS = ["R98"];
	const CAPABILITIES = /** @type {const} */ (["clubslave"]);

	const w = window;

	if (w.FBC_VERSION) {
		console.warn("FBC already loaded. Skipping load.");
		return;
	}

	if (!w.bcModSdk) {
		console.warn("bcModSdk not found. Skipping load.");
		return;
	}

	const SDK = w.bcModSdk.registerMod(
		{
			name: "FBC",
			version: FBC_VERSION,
			fullName: "For Better Club",
			repository: "https://gitlab.com/Sidiousious/bce.git",
		},
		{
			allowReplace: false,
		}
	);
	/** @type {import('./types/bcxExternalInterface').BCX_ModAPI | null} */
	let BCX = null;

	w.FBC_VERSION = FBC_VERSION;

	const DISCORD_INVITE_URL = "https://discord.gg/SHJMjEh9VH";
	const WEBSITE_URL = "https://sidiousious.gitlab.io/bce/";

	const BCX_DEVEL_SOURCE =
			"https://jomshir98.github.io/bondage-club-extended/devel/bcx.js",
		BCX_SOURCE = "https://jomshir98.github.io/bondage-club-extended/bcx.js",
		EBCH_SOURCE = "https://e2466.gitlab.io/ebch/master/EBCH.js",
		LSCG_SOURCE = "https://littlesera.github.io/LSCG/bundle.js",
		MBS_SOURCE = "https://bananarama92.github.io/MBS/main/mbs.js";

	const BCE_COLOR_ADJUSTMENTS_CLASS_NAME = "bce-colors",
		BCE_LICENSE = "https://gitlab.com/Sidiousious/bce/-/blob/main/LICENSE",
		BCE_MAX_AROUSAL = 99.6,
		BCE_MSG = "BCEMsg",
		BCX_ORIGINAL_MESSAGE = "BCX_ORIGINAL_MESSAGE",
		BEEP_CLICK_ACTIONS = Object.freeze({
			/** @type {"FriendList"} */
			FriendList: "FriendList",
		}),
		CLOSINGBRACKETINDICATOR = "\\uf130\\u005d",
		DARK_INPUT_CLASS = "bce-dark-input",
		DEFAULT_WARDROBE_SIZE = 24,
		EXPANDED_WARDROBE_SIZE = 96,
		GAGBYPASSINDICATOR = "\uf123",
		HIDDEN = "Hidden",
		INPUT_WARN_CLASS = "bce-input-warn",
		MESSAGE_TYPES = Object.freeze({
			Activity: "Activity",
			ArousalSync: "ArousalSync",
			Hello: "Hello",
		}),
		TIMER_INPUT_ID = "bce_timerInput",
		WHISPER_CLASS = "bce-whisper-input";

	const EMBED_TYPE = /** @type {const} */ ({
		Image: "img",
		None: "",
		Untrusted: "none-img",
	});

	/** @type {Record<"BCX" | "EBCH" | "MBS" | "LSCG", "none" | "external" | "stable" | "devel" | "fusam">} */
	const addonTypes = {
		BCX: "none",
		EBCH: "none",
		MBS: "none",
		LSCG: "none",
	};

	if (typeof ChatRoomCharacter === "undefined") {
		console.warn("Bondage Club not detected. Skipping FBC initialization.");
		return;
	}

	/** @type {{ level: "error" | "warn" | "info" | "debug", message: string }[]} */
	const pastLogs = new Array(100);

	/** @type {Map<string, "allowed" | "denied">} */
	const sessionCustomOrigins = new Map();

	/** @type {Map<number, BCECharacterState>} */
	const characterStates = new Map();

	/** @type {ToySyncState} */
	const toySyncState = {
		deviceSettings: new Map(),
	};

	/** @type {Readonly<{Top: 11; OverrideBehaviour: 10; ModifyBehaviourHigh: 6; ModifyBehaviourMedium: 5; ModifyBehaviourLow: 4; AddBehaviour: 3; Observe: 0}>} */
	const HOOK_PRIORITIES = {
		Top: 11,
		OverrideBehaviour: 10,
		ModifyBehaviourHigh: 6,
		ModifyBehaviourMedium: 5,
		ModifyBehaviourLow: 4,
		AddBehaviour: 3,
		Observe: 0,
	};

	/**
	 * @type {Record<keyof defaultSettings, string | boolean> & {version?: number}}
	 */
	// @ts-ignore -- this is fully initialized in loadSettings
	let fbcSettings = {};
	let postSettingsHasRun = false;

	const defaultSettings = /** @type {const} */ ({
		animationEngine: {
			label: "Animation Engine",
			sideEffects: (newValue) => {
				if (newValue) {
					// Disable conflicting settings
					Player.ArousalSettings.AffectExpression = false;
				}
			},
			value: false,
			category: "activities",
			description:
				"Enables the animation engine. This will replace the game's expression and pose system.",
		},
		expressions: {
			label: "Automatic Arousal Expressions (Replaces Vanilla)",
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.animationEngine = true;
					defaultSettings.animationEngine.sideEffects(true);
				}
				debug("expressions", newValue);
			},
			value: false,
			category: "activities",
			description: "Automatically express arousal when performing an activity.",
		},
		activityExpressions: {
			label: "Activity Expressions",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.animationEngine = true;
					defaultSettings.animationEngine.sideEffects(true);
				}
				debug("activityExpressions", newValue);
			},
			category: "activities",
			description: "Automatically express reactions to certain activities.",
		},
		alternateArousal: {
			label:
				"Alternate Arousal (Replaces Vanilla, requires hybrid/locked arousal meter)",
			value: false,
			sideEffects: (newValue) => {
				sendHello();
				Player.BCEArousal = !!newValue;
				Player.BCEArousalProgress = Math.min(
					BCE_MAX_AROUSAL,
					Player.ArousalSettings.Progress
				);
				debug("alternateArousal", newValue);
			},
			category: "activities",
			description: "More intense activities will affect arousal faster.",
		},
		stutters: {
			label: "Alternative speech stutter",
			value: false,
			sideEffects: (newValue) => {
				debug("stutters", newValue);
			},
			category: "activities",
			description:
				"More stuttering at high arousal, moans between words with vibrators.",
		},
		layeringMenu: {
			label: "Enable layering menus",
			value: false,
			sideEffects: (newValue) => {
				debug("layeringMenu", newValue);
			},
			category: "appearance",
			description:
				"Adds additional options when looking at equipped items or pieces of clothing.",
		},
		extendedWardrobe: {
			label: "Extended wardrobe slots (96)",
			value: false,
			sideEffects: (newValue) => {
				debug("extendedWardrobe", newValue);
				if (newValue) {
					WardrobeSize = EXPANDED_WARDROBE_SIZE;
					loadExtendedWardrobe(Player.Wardrobe);
					// Call compress wardrobe to save existing outfits, if another addon has extended the wardrobe
					CharacterCompressWardrobe(Player.Wardrobe);
				} else {
					// Restore original size
					WardrobeSize = DEFAULT_WARDROBE_SIZE;
					WardrobeFixLength();
					CharacterAppearanceWardrobeOffset = 0;
				}
			},
			category: "appearance",
			description:
				"Increase the amount of wardrobe slots to save more outfits.",
		},
		privateWardrobe: {
			label: "Replace wardrobe list with character previews",
			value: false,
			sideEffects: (newValue) => {
				debug("privateWardrobe", newValue);
			},
			category: "appearance",
			description:
				"Allows you to preview all saved outfits at a glance, no more having to remember names.",
		},
		automateCacheClear: {
			label: "Clear Drawing Cache Hourly",
			value: false,
			sideEffects: (newValue) => {
				debug("automateCacheClear", newValue);
			},
			category: "performance",
			description:
				"Automatically clears the drawing cache every hour, preventing memory usage from growing out of control during long play sessions.",
		},
		instantMessenger: {
			label: "Instant messenger",
			value: true,
			sideEffects: (newValue) => {
				debug("instantMessenger", newValue);
			},
			category: "chat",
			description:
				"Allows you to send messages to other players without having to open the friends list, with enhancements.",
		},
		augmentChat: {
			label: "Chat Links and Embeds",
			value: true,
			sideEffects: (newValue) => {
				debug("augmentChat", newValue);
			},
			category: "chat",
			description:
				"Adds clickable links and image embeds from trusted domains only (e.g. imgur) to chat messages.",
		},
		ctrlEnterOoc: {
			label: "Use Ctrl+Enter to OOC",
			value: true,
			sideEffects: (newValue) => {
				debug("ctrlEnterOoc", newValue);
			},
			category: "chat",
			description: "Allows you to use Ctrl+Enter to send OOC messages.",
		},
		whisperInput: {
			label: "Use italics for input when whispering",
			value: true,
			sideEffects: (newValue) => {
				debug("whisperInput", newValue);
			},
			category: "chat",
			description:
				"Changes the input field to italics when you're in whisper mode to make it more obvious.",
		},
		chatColors: {
			label: "Improve colors for readability",
			value: true,
			sideEffects: (newValue) => {
				if (newValue) {
					document.body.classList.add(BCE_COLOR_ADJUSTMENTS_CLASS_NAME);
				} else {
					document.body.classList.remove(BCE_COLOR_ADJUSTMENTS_CLASS_NAME);
				}
				debug("chatColors", newValue);
			},
			category: "chat",
			description:
				"Improves contrast between the colors used for chat messages to comply with web accessibility standards.",
		},
		friendPresenceNotifications: {
			label: "Show friend presence notifications",
			value: false,
			sideEffects: (newValue) => {
				debug("friendPresenceNotifications", newValue);
			},
			category: "chat",
			description:
				"Enables friend presence tracking and shows a notification when a friend logs in.",
		},
		friendOfflineNotifications: {
			label: "Show friends going offline too",
			value: false,
			sideEffects: (newValue) => {
				debug("friendOfflineNotifications", newValue);
			},
			category: "chat",
			description:
				"Shows a notification when a friend logs out. (Requires friend presence)",
		},
		friendNotificationsInChat: {
			label: "Show friend presence notifications in chat, when possible",
			value: false,
			sideEffects: (newValue) => {
				debug("friendNotificationsInChat", newValue);
			},
			category: "chat",
			description:
				"Shows friend presence notifications in chat, when possible. (Requires friend presence)",
		},
		pastProfiles: {
			label: "Save & browse seen profiles (requires refresh)",
			value: false,
			sideEffects: (newValue) => {
				debug("pastProfiles", newValue);
			},
			category: "chat",
			description:
				"Saves the profiles for everyone you've seen and allows you to browse them using /profiles in chatrooms.",
		},
		pendingMessages: {
			label: "Show sent messages while waiting for server",
			value: true,
			sideEffects: (newValue) => {
				debug("showSentMessages", newValue);
			},
			category: "chat",
			description:
				"Shows messages you've sent while waiting for the server to respond, confirming you have sent the message and the server is just being slow.",
		},
		gagspeak: {
			label: "Understand All Gagged and when Deafened",
			value: false,
			sideEffects: (newValue) => {
				debug("gagspeak", newValue);
			},
			category: "cheats",
			description:
				"Bypasses gagged effect on others and deafen effect on yourself. You'll still be unable to understand others if they use FBC's gag anti-cheat.",
		},
		lockpick: {
			label: "Reveal Lockpicking Order Based on Skill",
			value: false,
			sideEffects: (newValue) => {
				debug("lockpick", newValue);
			},
			category: "cheats",
			description:
				"Randomly reveals the order of some of the pins with higher lockpicking skill revealing more pins on average. Picking can still be impossible like other forms of struggling.",
		},
		allowLayeringWhileBound: {
			label: "Allow layering menus while bound",
			value: false,
			sideEffects: (newValue) => {
				debug("allowLayeringWhileBound", newValue);
				if (newValue && !fbcSettings.layeringMenu) {
					fbcSettings.layeringMenu = true;
					defaultSettings.layeringMenu.sideEffects(true);
				}
			},
			category: "cheats",
			description:
				"Allows you to open menus while bound, even if they're disabled in the settings.",
		},
		autoStruggle: {
			label: "Make automatic progress while struggling",
			value: false,
			sideEffects: (newValue) => {
				debug("autoStruggle", newValue);
			},
			category: "cheats",
			description:
				"All three forms of struggling will be completed automatically in a realistic amount of time, if the restraint is possible to struggle out of.",
		},
		allowIMBypassBCX: {
			label: "Allow IMs to bypass BCX beep restrictions",
			value: false,
			sideEffects: (newValue) => {
				debug("allowIMBypassBCX", newValue);
			},
			category: "cheats",
			description:
				"This setting is temporary until BCX supports a focus mode rule.",
		},
		shareAddons: {
			label: "Share Addons",
			value: true,
			sideEffects: (newValue) => {
				debug("shareAddons", newValue);
			},
			category: "addons",
			description:
				"Share a list of your installed addons with other FBC users in the room, visible via /versions chat command.",
		},
		bcx: {
			label: "Load BCX by Jomshir98",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.bcxDevel = false;
					if (handledByFUSAM("BCX")) {
						logInfo("BCX already loaded via FUSAM, skipping");
					} else {
						w.BCX_SOURCE = BCX_SOURCE;
						loadExternalAddon("BCX", BCX_SOURCE).then((success) => {
							if (success) {
								addonTypes.BCX = "stable";
							}
						});
					}
				}
				debug("bcx", newValue);
			},
			category: "addons",
			description:
				"Load Bondage Club Extended. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.",
		},
		bcxDevel: {
			label: "Load BCX beta",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.bcx = false;
					if (handledByFUSAM("BCX")) {
						logInfo("BCX already loaded via FUSAM, skipping");
					} else {
						w.BCX_SOURCE = BCX_DEVEL_SOURCE;
						loadExternalAddon("BCX", BCX_DEVEL_SOURCE).then((success) => {
							if (success) {
								addonTypes.BCX = "devel";
							}
						});
					}
				}
				debug("bcxDevel", newValue);
			},
			category: "addons",
			description:
				"Load the latest beta version of BCX. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.",
		},
		ebch: {
			label: "Load EBCH by Elicia",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					if (handledByFUSAM("EBCH")) {
						logInfo("EBCH already loaded via FUSAM, skipping");
					} else {
						loadExternalAddon("EBCH", EBCH_SOURCE).then((success) => {
							if (success) {
								addonTypes.EBCH = "stable";
							}
						});
					}
				}
				debug("ebch", newValue);
			},
			category: "addons",
			description:
				"Load the latest stable version of EBCH. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.",
		},
		mbs: {
			label: "Load MBS by Rama",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					if (handledByFUSAM("MBS")) {
						logInfo("MBS already loaded via FUSAM, skipping");
					} else {
						loadExternalAddon("MBS", MBS_SOURCE).then((success) => {
							if (success) {
								addonTypes.MBS = "stable";
							}
						});
					}
				}
			},
			category: "addons",
			description:
				"Load the latest stable version of MBS. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.",
		},
		lscg: {
			label: "Load LSCG by LittleSera",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					if (handledByFUSAM("LSCG")) {
						logInfo("LSCG already loaded via FUSAM, skipping");
					} else {
						loadExternalAddon("LSCG", LSCG_SOURCE).then((success) => {
							if (success) {
								addonTypes.LSCG = "stable";
							}
						});
					}
				}
			},
			category: "addons",
			description:
				"Load the latest stable version of LSCG. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.",
		},
		toySync: {
			label: "Enable buttplug.io (requires refresh)",
			value: false,
			sideEffects: (newValue) => {
				debug("toySync", newValue);
			},
			category: "buttplug",
			description:
				"Allows the game to control your real vibrators. For a list of supported vibrators see https://buttplug.io",
		},
		antiAntiGarble: {
			label: "Limited gag anti-cheat: cloth-gag equivalent garbling",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.antiAntiGarbleStrong = false;
					fbcSettings.antiAntiGarbleExtra = false;
				}
				debug("antiAntiGarble", newValue);
			},
			category: "immersion",
			description:
				"Slur your speech a little bit while gagged forcing others, even those cheating, to have some trouble understanding you.",
		},
		antiAntiGarbleStrong: {
			label: "Full gag anti-cheat: use equipped gags to determine garbling",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.antiAntiGarble = false;
					fbcSettings.antiAntiGarbleExtra = false;
				}
				debug("antiAntiGarbleStrong", newValue);
			},
			category: "immersion",
			description:
				"Use equipped gags' full effect to prevent others from understanding you fully, even those that are cheating.",
		},
		antiAntiGarbleExtra: {
			label:
				"Extra gag anti-cheat: even more garbling for the most extreme gags",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					fbcSettings.antiAntiGarble = false;
					fbcSettings.antiAntiGarbleStrong = false;
				}
				debug("antiAntiGarbleExtra", newValue);
			},
			category: "immersion",
			description:
				"Use equipped gags' full effect to prevent others from understanding you fully, even those that are cheating. This option adds another level of gagging for the most extreme predicaments, preventing you from making much sound at all.",
		},
		blindWithoutGlasses: {
			label: "Require glasses to see",
			value: false,
			sideEffects: (newValue) => {
				if (!newValue) {
					removeCustomEffect("BlurLight");
				}
				debug("blindWithoutGlasses", newValue);
			},
			category: "immersion",
			description: "You will be partially blinded while not wearing glasses.",
		},
		leashAlways: {
			label:
				"Allow leashing without wearing a leashable item (requires leasher to have FBC too)",
			value: false,
			sideEffects: (newValue) => {
				debug("leashAlways", newValue);
				if (newValue) {
					enableLeashing();
				} else {
					disableLeashing();
				}
			},
			category: "immersion",
			description:
				"Allows you to be leashed between rooms even when you are not wearing an item that counts as a leash to allow roleplaying being carried in arms.",
		},
		hideHiddenItemsIcon: {
			label: "Hide the hidden items icon",
			value: false,
			sideEffects: (newValue) => {
				debug("hideHiddenItemsIcon", newValue);
			},
			category: "immersion",
			description:
				"You can choose to hide items (not on extreme difficulty). The game shows an icon on players that have hidden items. This option hides that icon.",
		},
		itemAntiCheat: {
			label: "Enable anti-cheat",
			value: false,
			sideEffects: (newValue) => {
				debug("itemAntiCheat", newValue);
			},
			category: "immersion",
			description:
				"Prevents certain console cheats from impacting your character. Whitelisted actors are exempt from this.",
		},
		antiCheatBlackList: {
			label: "Blacklist detected cheaters automatically",
			value: false,
			sideEffects: (newValue) => {
				debug("antiCheatBlackList", newValue);
			},
			category: "immersion",
			description:
				"Automatically blacklist detected cheaters. Whitelisted actors are exempt from this.",
		},
		checkUpdates: {
			label: "Check for updates",
			sideEffects: (newValue) => {
				debug("checkUpdates", newValue);
			},
			value: true,
			category: "misc",
			description: "Check for FBC updates on startup.",
		},
		relogin: {
			label: "Automatic Relogin on Disconnect",
			sideEffects: (newValue) => {
				debug("relogin", newValue);
			},
			value: true,
			category: "misc",
			description:
				"Automatically re-enter your password after you disconnect from the game. For convenience or AFK. Requires the password for the current account to have been saved in the login screen. Passwords are saved in your browser's local storage in plain text.",
		},
		showQuickAntiGarble: {
			label: "Show gag cheat and anti-cheat options in chat",
			value: false,
			sideEffects: (newValue) => {
				if (newValue) {
					ChatRoomChatInputRect = [1356, 950, 700, 82];
				} else {
					// Default from club
					ChatRoomChatInputRect = [1456, 950, 900, 82];
				}
				debug("showQuickAntiGarble", newValue);
			},
			category: "misc",
			description:
				"Adds a quick switch for the two options next to the chat input area.",
		},
		ghostNewUsers: {
			label: "Automatically ghost+blocklist unnaturally new users",
			value: false,
			sideEffects: (newValue) => {
				debug("ghostNewUsers", newValue);
			},
			category: "misc",
			description:
				"Automatically ghost+blocklist unnaturally new users. This is useful for preventing malicious bots, but is not recommended to be enabled normally.",
		},
		accurateTimerLocks: {
			label: "Use accurate timer inputs",
			value: false,
			sideEffects: (newValue) => {
				debug("accurateTimerLocks", newValue);
			},
			category: "misc",
			description: "Allows you to set specific durations for timer locks.",
		},
		confirmLeave: {
			label: "Confirm leaving the game",
			value: true,
			sideEffects: (newValue) => {
				debug("confirmLeave", newValue);
			},
			category: "misc",
			description:
				"When you leave the game, you will be prompted to confirm your decision. This is useful for preventing accidentally closing the tab, but will cause you to reconnect.",
		},
		discreetMode: {
			label: "Discreet mode (disable drawing)",
			value: false,
			sideEffects: (newValue) => {
				debug("discreetMode", newValue);
				if (newValue) {
					/** @type {HTMLLinkElement} */
					(document.getElementById("favicon")).href =
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oFFAADATTAuQQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAEklEQVQ4y2NgGAWjYBSMAggAAAQQAAGFP6pyAAAAAElFTkSuQmCC";
					document.title = "OnlineChat";
				}
			},
			category: "misc",
			description:
				"Disables drawing on the screen. This is useful for preventing accidental drawing.",
		},
		customContentDomainCheck: {
			label: "Prompt before loading content from a 3rd party domain",
			value: true,
			sideEffects: (newValue) => {
				debug("customContentDomainCheck", newValue);
			},
			category: "misc",
			description:
				"Show a confirmation prompt before allowing content from a 3rd party domain to be loaded.",
		},
		fpsCounter: {
			label: "Show FPS counter",
			value: false,
			sideEffects: (newValue) => {
				debug("fpsCounter", newValue);
			},
			category: "performance",
			description:
				"Shows the current FPS in the top-left corner of the screen.",
		},
		limitFPSInBackground: {
			label: "Limit FPS in background",
			value: false,
			sideEffects: (newValue) => {
				debug("limitFPSInBackground", newValue);
			},
			category: "performance",
			description:
				"Limits the FPS to 10 in the background. This is useful for saving resources when you are not interacting with the game.",
		},
		limitFPSTo15: {
			label: "Limit FPS to ~15",
			value: false,
			sideEffects: (newValue) => {
				debug("limitFPSTo15", newValue);
				if (newValue) {
					fbcSettings.limitFPSTo30 = false;
					fbcSettings.limitFPSTo60 = false;
				}
			},
			category: "performance",
			description: "Limits the FPS to 15. This is useful for saving resources.",
		},
		limitFPSTo30: {
			label: "Limit FPS to ~30",
			value: false,
			sideEffects: (newValue) => {
				debug("limitFPSTo30", newValue);
				if (newValue) {
					fbcSettings.limitFPSTo15 = false;
					fbcSettings.limitFPSTo60 = false;
				}
			},
			category: "performance",
			description: "Limits the FPS to 30. This is useful for saving resources.",
		},
		limitFPSTo60: {
			label: "Limit FPS to ~60",
			value: false,
			sideEffects: (newValue) => {
				debug("limitFPSTo60", newValue);
				if (newValue) {
					fbcSettings.limitFPSTo30 = false;
					fbcSettings.limitFPSTo15 = false;
				}
			},
			category: "performance",
			description: "Limits the FPS to 60. This is useful for saving resources.",
		},
		nickname: {
			label: "Nickname",
			value: "",
			sideEffects: (newValue) => {
				debug("nickname", newValue);
			},
			category: "hidden",
			description: "",
		},
		buttplugDevices: {
			label: "Buttplug Devices",
			value: "",
			sideEffects: (newValue) => {
				debug("buttplugDevices", newValue);
				// Don't handle empty string
				if (newValue === "") {
					return;
				}
				try {
					if (!isString(newValue)) {
						throw new Error("expected string for buttplugDevices");
					}
					const devices = /** @type {ToySetting[]} */ (JSON.parse(newValue));
					if (!Array.isArray(devices)) {
						throw new Error("expected array for devices");
					}
					for (const device of devices) {
						toySyncState.deviceSettings.set(device.Name, device);
					}
				} catch (ex) {
					logError(ex);
				}
			},
			category: "hidden",
			description: "",
		},
	});

	/** @type {SocketEventListenerRegister} */
	const listeners = [];
	/** @type {(event: ServerSocketEvent, cb: SocketEventListener) => void} */
	function registerSocketListener(event, cb) {
		if (!listeners.some((l) => l[1] === cb)) {
			listeners.push([event, cb]);
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			ServerSocket.on(event, cb);
		}
	}

	function appendSocketListenersToInit() {
		SDK.hookFunction(
			"ServerInit",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const ret = next(args);
				for (const [event, cb] of listeners) {
					ServerSocket.on(event, cb);
				}
				return ret;
			}
		);
	}

	function settingsLoaded() {
		return postSettingsHasRun;
	}

	const bceSettingKey = () => `bce.settings.${Player?.AccountName}`;

	/**
	 * @type {() => Promise<typeof fbcSettings>}
	 */
	const bceLoadSettings = async () => {
		await waitFor(() => !!Player?.AccountName);
		const key = bceSettingKey();
		debug("loading settings");
		if (Object.keys(fbcSettings).length === 0) {
			let settings = /** @type {typeof fbcSettings} */ (
				JSON.parse(localStorage.getItem(key))
			);
			const onlineSettings = /** @type {typeof fbcSettings} */ (
				JSON.parse(
					LZString.decompressFromBase64(Player.OnlineSettings.BCE) || null
				)
			);
			if (
				onlineSettings?.version >= settings?.version ||
				(typeof settings?.version === "undefined" &&
					typeof onlineSettings?.version !== "undefined")
			) {
				settings = onlineSettings;
			}
			if (!settings) {
				debug("no settings", key);
				// @ts-ignore -- this is fully populated in the loop below
				settings = {};
			}

			for (const setting of /** @type {(keyof defaultSettings)[]} */ (
				Object.keys(defaultSettings)
			)) {
				if (!(setting in settings)) {
					if (setting === "activityExpressions" && "expressions" in settings) {
						settings[setting] = settings.expressions;
						continue;
					}
					settings[setting] = defaultSettings[setting].value;
				}
			}
			if (
				typeof settings.version === "undefined" ||
				settings.version < settingsVersion
			) {
				beepChangelog();
			}
			settings.version = settingsVersion;
			fbcSettings = settings;
			return settings;
		}
		return fbcSettings;
	};

	const bceSaveSettings = () => {
		if (toySyncState.deviceSettings.size > 0) {
			fbcSettings.buttplugDevices = JSON.stringify(
				Array.from(toySyncState.deviceSettings.values())
			);
		}
		localStorage.setItem(bceSettingKey(), JSON.stringify(fbcSettings));
		Player.OnlineSettings.BCE = LZString.compressToBase64(
			JSON.stringify(fbcSettings)
		);
		ServerAccountUpdate.QueueData({
			OnlineSettings: Player.OnlineSettings,
		});
	};

	/**
	 * @param {string} key
	 * @returns {key is keyof typeof defaultSettings}
	 */
	function isDefaultSettingKey(key) {
		return key in defaultSettings;
	}

	function postSettings() {
		debug("handling settings side effects");
		for (const [k, v] of Object.entries(fbcSettings)) {
			if (isDefaultSettingKey(k)) {
				defaultSettings[k].sideEffects(v);
			}
		}
		bceSaveSettings();

		// Polyfill old functions
		if (typeof Player.CanChange === "undefined") {
			Player.CanChange = Player.CanChangeOwnClothes;
		}
		postSettingsHasRun = true;
	}

	// ICONS
	const ICONS = Object.freeze({
		BCE_USER:
			"data:image/png;base64,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",
		LAYERS:
			"data:image/png;base64,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",
		LOGO: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAQAAAD/X6l8AAAyN3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZxpshy5cqX/YxVvCZiH5WA06x1o+fqOxyWrWNKTybqbrOIdMjMGwP0MDke4+x//57l//etfIeTiXS6t11Gr508eecTJN91/f5b9G3y2f+1PqT+vhT9/736/EPlV4mv6fhzx5/eX3/N9+Pl5/Jwk/Hr/rwP9+iZMvit/vTDnz+/Xn79fPweM/Z8H+rmCFL4z+/PzgZ8DpfhzRfn7ef9cUR29/XFrZ/+cOf/8qv/1f04t1lJDy/ybo2+tDr7v0efGeB5d6NtxfGP0DejvX/z6+ddbI9cUbwrJ829M8bvKpP9jmnwN/BtScnqj/ZBStxeyDbxnKrkErnT8nGj634P597H5a4z+zZ//zW39hImFwe9Z+33sf8TH7+/+ER5t/vw+fb//60D199c/pvXX70P5x+/T79PEP66o/3Xm+PcrSjmuP+75b7P63unvXXuzyzNX7rn+3NSvW7HveOPSaNnHKn8b/xe+b/Z38Lf76Tehc5zfZNTihxEic/xCDifM8MK1rztsLjHHGxtfY9xMsX7XmYsRt01/1l8XXmxppMPkx7SJlcSv4+9rCXbeYafboRP3J/DOGDhYsFj6+ev+/sP/y9//cqD3lDMh+P57rLiuqIjmMjRz+pd3MSHh/YwpM+psiMPvgf77H01sYgaLDXPnBqdf3yFWCX/FVtI8K/sLf7P/sju083MAhohzFy4mJGbA15BKqMG3GBuYmGJnfiZXHhUhwe0QSomHq4w5pcrkkAWcm8+0YO+NJX6/Bj2ZiJJqakzNSJPJyrkQPi13RwzNkkoupdTSSi+jzJqqMqzWVgXDs6WWW2m1tdbbaLOnnnvptbfe++hzxJEcMF0G+Tj6GGNOTjo58uTTk3fMueJKK6+y6mqrr7HmJnx23mXX3XbfY88TT3KHRD71tNPPOPOGSyjdfMutt91+x52PUHvp5Vdefe31N978PWs/s/rnrP1z5v7nWQs/sxZtopLjn/Z71vh1a78OEQQnRXPGjMUcmPGmGSCgo+bM95Bz1MwtssbBO2RFiVxl0eScoBljBvMNsbzwe+7+mrn/dt5c7v9X8xb/OXNOU/f/Y+acpu4fM/df5+2/mbUjMtg2Y5aFzgbVJ9LvNQ7aZx8TlANO3iy5tcAt+DbuuasMjVp7M0NQ907gcb37IMR6r7tvaBj9YOQDL81SUm+MWGJmtk79Yl2eGzntPp/7JpMg8pOb5+pumHNwx92VAczV2/N7oS1IpqFP2pw9r9kDMPhS4lbveEXT+pIiqPTdYmAs4+u3N652uDRuS/Ey5XyEuC5hvLHS2SWPGxm+VEuf2ffzUtzTc96Xjme4du1QQ02PqBvdhaGZXX1cX0+dt5M5d7Uzd37MyO5MHVfaBkMyV37znLV9vwzYyLeFrUta7bpQbk/1rlt4Qx7jcUe+3cEQtneBF443GdXcTnqRAeH1c/Rq+uNV973c/s3Lv1/luhm/cn7/8vf7GGvGcLlsXzSF42bPwIvWF+FNZINpfreR9slrrXO/c/WX6hwtVd1B2Bn9we05ZisyE53JPRke23OttzyxWYQzazPZj2HvZ439eNmfms4lU2Yai9zIpXfI1imMFGQItdxTIW0QQn1pJBfCRld/EWc7r30P/JbT7Zykr8YFM9m+ZsI2NegockmeISI2LpHoSZPHi5e5Wr29loKFV/HnRr+qT8wYsfFeIxjTIyfIe2lICHSFd28qDZzfo4WT7i5xIg8aQm6uwEiP9BZ3wvEZpnPAt5gL+QMdT1CkcGsct3XODoSEXvPWOdasq9dFTPJSi6vMPWJo2+6fKx8leY5LfA5yP/CfA3p8aqjmqkBdih1uhylYN59K8j+AZJ9FOnDFp3My39ZpwS+QlROnxhtLcy2ftfjA5XZHf0T128VS+qTyygVb7kU31OPXQG/mkA4ZNOcu687YgRpQpjwH44E0BZ1BYjIau3K5fo8Ri0Ksi0A3s1RnPIeDttgm8aHhJ1gIoSaCaNXdg4kI+zRoNsxewX7urwFgZBwoVIhDf9srANluvPl6shWt/s4JZynxL8cNjvgEhdO7SxzBxTJZizuMoTKq5xQQyU+CsWN8KkMyoDnw6eAh4m59V7RAftmNXtOtY2SGOU1N9worz7EXY5dCJIQR5m35KUgiswlEfxZzpdktXE8C3l5xYCmQehakFAZwdfO7XWd7ebQd4+pno7FLUNhy0Qkntla520aDiArAeTje3UwArstgdsATkABD4awleB69g2G16dyTKZ4AcS+Le1XoAJMdCg6bNHrXLZKsztcJ5rVP1ExCZABXLUihlhj3w621eQ/QHU8r4EfdkEOQzkSBNiVRcI8orSAFEJ0zs7Gahv4x5boO5KtPpcItlUjuERiFKs4GODZ5Qawit4mmGZ2+ERvmKTOn3/31tdhbJCY7CZAj6hyaTa8fmVZiNpPecxHbizFitggooHwyOxBS4Lfe8u0eopyEg4MVgJXb66fGLkmoJKr2+oRBcYlIP/RHRzZXVEVDGUD3j3CfIfEG+H/njnfWhJMNBVCDTOesYEojIvMlJbjIh80qCgkbjD6WALfjr3osFUpaEX7sFmCKGmjkJmQSKaxBCrMiIeZNeS93N9E7C1M2wDiPJjmwGNzV4DTSCYxBxPhY+qtcNsAXNoIL6CQyJri1C7IjQdlR4pZ8ai+AE2GuM8cBxjPjTIzDfatxETruCMcmGee3TmKuAURwcEFzeBGRasvriuErxCq2lEhjiBkLXLv81N5oDK7jNhQNEqV4MgD0UuZsFM8Aj7Arh1t44DX/1XhrRGnJzhJcGcGCLmgEH4nRuZmyRUCQnoYtq26xx2mZW+tht0eq2a9RRcjIvQkShoA3nHkeGfaYdYDvgLqe+4I+NJ/j7NfhOeIS8OdIBO/mjuGamUflC1CI88qmFJh3JBSijSCC7Os9CLS+/b1xzXcQIKMG1Ej1AOmsBD25vZhLgm+Tj3EgJFCMYLRCWfGInmVAKxHBkMEc2wQ4VxVOnI7LRh5BwXdXxC85AHu/NyuoNTU2l0Q4EdSt55H5AB0satAo1jroPNitTaXI4HwSog+onDNccSx4Bp9gOBWIoZVyC7anLvgbFTUheEQBTCcFr3cUVzjyQAcQaEQAgAORIYMalhM5CmtH0FLBTOhnb7n3TN3VBV6gCDh5rTOBkN0XsC6TCAP8ORrjyeWDR1tmDEEAnSAIuZOrs6N+131KMKiqAZxcwzhu5tfnPJKGXeoc2YjZQIr2mEk/lOEp8MNdMcKGVQffN4t2hHriu4tJyRyo7RIy6pBPkhlwNAO6uSi0ROxlkyMX5gO8oUiGtfZH4p5fgMetiKL9dGjgE4bQDA9Qf2Ath4z28hLJ+QWCE4bFKXCZD7L3c4TOZA5Otz1Ud+qLQG0GocOoqRRz9mglgY54MaVF0iPKSs2g/yxrFoUBo07AEVlp7JqkBVpyZTfgHnqKFR+xhzzHAeAhiQVFzqayRSCzuC6mVMx0OWiCQIkExRBjgpxwGCIUGYqtXlSBkK1OlaEiZqPCFAl4ANeKxUcuqP2KfHuAFEIe9yOdypG2Y0JKIv1fqajH8GwQh68okb5OSdgGU2WgFSGHdk+qxt1ChPv55M70KoL9kAMBC5QVxAFMD7Pwu375BitCfDG7UFFElKApprQRyFdJqzeRePdMNLr0kSQzNpIQGeFK/pLaJeJrPPaZ4CMAITDCfCJNMP5CkloZIxIXhlNAI0Qug52QYUeFmowLTVMJ3UyUZdETw0ZkoYAzdL9UHyWRj0aMz8tdXCzeGsOVvEIhDFvdCHvG+ZyBCWHwHzJI5wNfkbwcjSHb2BVil+8tjBAYaDMGe2eHJMN0X1EmckizhMDdjBkRPUxeIUoySgT1cLDKGlpBabi3cO8cFeGFanIYRUZPlwkjDBhhV3gwSCdebv0+yAooVGah3A7R101hzgIhAj5gEdK7NREkH0NiMgLICIgqCYOb5AAKqMLBp27lOMbrVonKiGfBZF0oF1tA0BSSDMxmCB5vwE8QyVeaAX7F3XdSd0BM8F7ybctPEKkEM0qITFzw8CBWAawcbnBdrz68ImGCizrdsKeTWDLEKD/GgTsmtzLTkyQN+ZFxjw+lQ5iR1msv3BHxifyMBEkNCDEpOC7ySea8Iiox6cQEEUCy6w2BvueGxSKGiFmKCsLmlLsCQSCacXqEH8oug8ToAIkL5D/k3CR9yGp0aJa9aWOBCABLhIJu5DIc9sODCLDuZYJBrPUpj55RN596JL6sAJoi6ls+Mr6HK087WZ7loAqf6yhg44EktRXbwMl/Hx9cZPbjM1KDIeabThZaCjPYZLjEIRehr46s4KYCwaYfoV0Awj7KFPNCVqgn3eGU8MKxY985WyUjhekAFrPEwdwreKJSl/ILmu0BNYyYkX4JIiLkPmgcuxA9SEiobLLi3KAj7hhNvlQ3kWILmPXEKBIdkUlCXb5BdNwV4B3ECaNLEk6YTvICb7cR2cxrMLm1MR2jjuXAllVRZQAdMUvwho0v5Lye2UPzdSKX+xuAY/1D6UIVRheSxys+sv80yBMZEFUAOjITaHNOE/OdXRYaMwXYAGQ3YY9A3fBQpyQNaYwJZtbxQO6gOhunDpAqSHfHSJB4lh9raaIHOnLugK0B3QfQjQjNJUQ0sYLZuklOaYfp9vui5icsLCi0jGJREZQ4INf1iCBQqD/dAEoOIdgC4AFHYjo8Xx3xRKSVsSXR0eQ4ZCaFNONguHWgFlnKgS6IxBAtxQZWD+csF8Wph49maiIcrDhtf8TpX2HKJVUgRe8hwfCDK5wQ5WQF2CgXVYmhFzdAiErkoeVIuN7AHS2CvCRVSRYRdJK62FoQtMB7aMHlQePbBxAZ6unkft0Ova+p5oZQPAi+UGECLo+haPKmMlYDcUFcWhlqYp21CKeSxJsq2JBTxL4jk4FkzFzaAxCtZ976AvlDcO7Fna2qlSI8ikQJsf8+3R9eIKFQN6j9h151K3GKoKIsBoHgWBI+mIZcDWZXxw5I5YLiAeYEM+c+Ew2IO0WG8hI2CM/tRkXU4X89luFC68XQmhE/GP2NIkVhYUqxa5AFkjjJe6towfE87isDpDLqTtUX1Vs3mYzCIejJbPgNkxMROq2ODQ5E5LvAqAVIF7X+PITG+TXOGU2EiEA+F/k5BgZxwU9D2oYJGGlofqOCvPA9sAm945wi4Iy/OtJCLxA+sjbRceU4F+YBRY/g5MZICQOvjCEDki8KjPmA1xdI/zj4BvAUFkQYuF2zLHVwR9wedTdB5A36e3jsLriEAQ2ME2qIC11Rqx8lwyYIf8BIZxhjQu8e/Bgu+PMQC5GpkV5CoXGjxEYROreDb0YpV3wcsBUGqmdsNPSyIGBqYGjJuBAQWo1L1I/+dLgOPRKSZonJxm7BCFXlzaJSB2mJaGG+QYygzI+YO1wSLDOdinaA0eFC8Xsdm6zynBBDchBOPGBaxf/l3IXg4GU0ZQIxR3L3nvjivsm9eIlxRM0WG0WP1Afnj6pfmGitUntp5f4DhioZoFLwGlxuxrwRk1AtB6qcDxhG9MILSHuU+vlRiQ3uV/0NxEkDGjzYJk67kSQdsYAYRFiTRBBO7m4L3KWUW1LVdgofgSXyDxk88JNAve5raLFA9paLQUcvVCXTfXvPOBnSDe4/SxxG4tyAsHrkJ1obOkQpIvGhbAIYcADy2xDNd14NtW4CgYlElj0VVZ1XxMMPCGZN311ZrhmdnQcWE+mZOzgEhQBrfyMR3DVhinqOwBNHRtXCfGTyhk8xLjPjcK7KiIyE7gS5LphUMQCg9HL9gAsBGxPM2G0BXGIuuobc4eVLIPqtgz2JN5Ue0SNDJUuIkM+GTLzs/TJuRFILuZenxMCBaDC/TjIFKYKQY8aKKmZIcUBZHMHY5ACuoWnFwJeEiLzP4B+BtvHD5CTGXSxCNrbNDIQE0TFGR+bp4ruhv8pNK2ARRp2DB49g8MLmhUu1mgamuquKhfJHQ8BEjIL4I4okCT48253EhHwcBIDlwG15MfuF5+Ba0Ukv8pSYJ4YMm0VUoHWu3IPWTL4ltrVqgEhHrAHvhrCThF6c/MnaLuayotTOA0bweTgvrqgyFCJ4FWVLtWIMVhu5EZC/oDvsioiBx6qwyAroTVMM/GBZ4B4sC/eSHDNCYCSBxmXwyAy4hd/EVcLse0fUGvZoTKBKsmCrANjQsdPkNDOTOA8sckfGYaH7oVAV4wAw0IfBuAKTOBGSTILqYgEfgoflrAAzyC9JAcmoGpDPdmaXkctPauNC9iQmODAIaDAT8zHABTx8FhfWB1KjeZg2hpHv8xFZpNa7Y+y1GM6n4E3U37N8fp0hAI/3Qj8g5Ar6DxKGe7h/JiAmlZmZvKGBqASP25Ebi19g7SXVscq0DPPko8SDIHeZ5EULyVwu5CjWbkY5raahzdE74WYWE6GmZoEWU2bYAHyCE6zH6BOthAaAC08ndKAclGmoNzcCZnrVTZ+KdalFrSZhHoAyYToRCKU/yeKKowwS00RyANHS4/0RHXOtBMv4twvVtuV+vf+Wp7UQ0qZBEFWViO2hS8Q1Kf6SbrMimC/hTu7OKsAlmckPBAxx1HoRSvtqxZU7YQsEZ47k5CE1A24GUyp811JzQDOMMrIqQV6OD8vBdHK5Dnx5G4YdhOiWduei4yxaEDgaCuD+psHtFXwybnHJXVdZh/lU+QUQmOV7nPmp+zgNKMiF8snTgpjoqaoN9WgxCORKqku0yxVvuRtVoiB+LBODwlfHxWkFtSfdPNO1i2opa3EPjGJKpu9RS1Ds7Ui+ZpYH4wLOSYRGVP9nauB+eXEkqtma8eN2VCndIQiixq6wQ8LIMRq4i/aJDMY94uigVJ3LTR9Qo3gRuFvO6rNVZf8+3HwMm/REw9arVAzTj6fq5MNjP9V1lcKu4xkC6cLAAg9Q2yMq8wwFzpXT5DrOGJ+iCAmp/MiiAUFsFZALDq2K7o/TkroOVLS8g9YnT1DtqsxeoBksi/gPrgSFtntSJQgzg+Yq+1v3gar6uHHgRWo4aCi4rMdaRygID8JAHTS9fYZ3laEOHPwM0DMlbgCPan5FZDzIIGCEWZtYvY0ZAXe4sNUytgFO7VHl8l25OmgV5plnoYw6GEeCoeX7OlbYQIMdh8xicFqBb+FptU0l0mN8p1ug1EMgQdwgx1IRC0eVQKuK4utna9HzvABSO9j1yKyh3FA12D8OO7Q+HwmlU+JhLC/JGLRUsFHCJamgX7GbUU1OIo3m63K8UsCRXgx2JOiKesPUMHBUoznDixx71crcQikMq0FigxhjYOlnMYoxsrg52P81kG4qbiEkVs1a4KtSp9gwpU0uTCmIhQWrqso9YP411ZkHenPCIpO8jaJJOYKG6JuccfQFswM3Acq4hEREc3LQl7jHBmZ76b4lG7FPBcrcO0uFu0AAQ5zYc1t8SipTXvKjj5YPZJpG4CKW1nk29scqjEcrKilNWwhyZ5I5BIOtSOKGtJ46fbLUxP8DTmoRinkVGHRJP2pVH9gBDJMWtstVWcE7nBKcNYJKP6Ydr/gbRQd/zOUJ/Kx1zibOU42LkR9QNPBW8oVis/ouAE/USMDGSv0/T7QTRCDleknXifFYj4+WGxsBHV/DSHEpN33Vk2MJqBNbJQLQVDUGmbDL94auNSbmQ6sQ5HhJKqr1400a+aey+fr8L36tTYUeCFmCugR8nGDyIt2TtDqDfzrUBpcXLchmvWkNcCHgYqZqMjBdIiqskDsqKSLfRHgWHLrVRZNWV4N8rbI0RfxaZbQ2xhImwVkxJKPZtWMoiL4kCEBnq+yIm+FfeRsuQZSO50kVlXqHrXhj8JmTiB62e0RSAZRayUAAhJnfaNFpMWt7sbFVL3GTjAu0yngiCLhJWzAQXeCIOMSGuxeTY+HxDnE6SapOZPvrv8+iOhmDY8Oo8lEc2ABo/AehMcs21GqJQexEq+YT94xFgMTwItx6/duZ7avcKxrmaulJozJUWVSYMQqqIE60NkfsWob5PuewRFNpw/jyHyof175wpg1lr9o/Y49NAk7USDXLt1z6GCAAXPpAgSwAg46wdQeFlrEnZJmyY0pPYaJkmCGjV6UlVVZGcO5Bplx1+XDRT0sJKlsWMBvyvFqR0ZrZnRnFyiQNH7RO3j55gaFgnvkPolzQAaZavpvISrn1YCLHqfAF+lvpsOHCARM8/7dO+xWdMTxIxpswGIWIz1oyfersQw5ydUcXptX1BFtD4kPjhtifxrcIpfRDkGOpQItZ5MLU9DWYBJJQS81JFwSbMe7eqfGEOYafE2YtjELgv4Flw8ZVrhWpM9RTQILpda53V8QpwSu8kfGpsZacHbE5PTMH/w1yG9iBeeWC4TCscYuMV9HE92CLNId0IOKRISq1ZeIXHlZvDaB2zDh2AIEQlay6DcbjzSdiaXyzlkd5qoajlGBHuq3FJJ9CDnrogQx3OG29Jck1ANBwbFxXSrjCArpyVCOQeRXw4UPYq0I3x94kJvSQtrowXPSbVCV2kPTqdSKCiKmKqEd4MJ14mIa8JWnU4PNmUsvbUcdyrr7vUKUCoDa3vrWAPAsEHVTKx6U2ci5dWSXMPckSCkQFekQZ1tKtAIQGZboZs5lU53a4FWT4wsBwG0+W/H6r/YXgQPcy9aTHJsqRoWGqeQZp0M0D8t6vEyDP6gaQ3dSNu4o5NFk/FSXmIFmAchijqrsHDuSAfDpnVX0NCaCoQQgESGGp0ZvQsCp1f00rZyFu5OCtUs92pFJVq8gX6U7Q4sq+yne2rh5sUq8pBzV76dfyPOpZyUVNbsT8WNa2g775Yn13a18QOXzYD/KXYB17Kk4QR7d88LkY3aTmoj1V7GUMCZScY1ZPY72oD3wgrkRClkEo6gnU6npUy8+EsrW0BPh+KqepDYKgY1i0ft2Urn4T7bx/Tc5wofMm1F/QagZEiQ+ZxOVAGCUXptPmagPCj+n3tsDP8L6CbEjIeIa0qEMzyzyof+AFlPNVfJLH14WD8cLVAeLoTvPJmDmrM6HN1OOFfEUx4gSKyPDgouHPoEYtRjBvFWjzPE6LwLY2i9JUcqIc+LIEqF9firglAkkzXzSb1ZC36m6kHzJHfUZ42yS/Bi/qKrh2tbtpNIKHV1XGuboJoRJcgVUEOpAB54BtQ112aMvC3KCwcNnoxo56WoAjqSmziEn+1kiWlXYC2EqoIJbOwS60bIIbtaR6p8rRpLT0EVpdpVfEKpYd9EDb45F9BAuOVTS4ChAMxZ42g6SSj6pWdYPAASKIQCSoFxwwgRM4LyZuPmmtLCicxlSxCm81OA2UmNV7FtQfu/BjqNv+ZLwabs+apZJKY5m0zKg+prcAVpkBxpTipaCXcAkyLWvzmrjVwBPM1txUWx5Bs6Qzh2tWIURmJ1JSy+zQuVoTiEI5dqUEBhhro0ZUJdhC6TVex+8vATzifaltSBLLqx9JjaBY2Ue8XdPOUofKUsyCzPzjZ0CgPbC85STh1f4mvNyP8iq+fB/PvNVkmjquLNmgwOGRmbupY5QJAnZnkUg6EjKIUOY1O6J5J1U8kAAja9FTdSUVqwE/5SdoqQY2n5Fae6uTSLsEpJbPV6hK+G9SBDgbhyOWXGJQU2pUolUJFwi1Ckb3xChxtJi1vIz/AkSrmnaeQRDjT2y5c/ZQUhJrEAjmXL7kYZS6un4x2mqdWRlGxBwFZFEn6mveYJ3Wq5OapsDqTEB2koebxQFUBgIz8jQWgNVSHTfXqb5ueLQhubGq6oVp5M5ACWghX4XYc4rrCG0+Tl73rw8iIzGIJdB74VMWxoZQSkTNVdmkkAJQb7y/lthQLUW557q3zslOCu7cVPLgYpKa8LS4D7tAZJxMHZ/cuvqOEl5xa0VBcFnUxkVADwfqvFsfYVrVPbYEo0yoNIZP3MgCEg52UTcUJhnXAC3E8qtRTfKq9HlkMQEJSTW1HF3etCSRNj4NCavy5Rha94F0tTyCIcawc5aoVezsGfim6ttTN6N1aKpkCHlpcW3XinVdRZt5EF7BAAyTdWyBxhbMQUsEOAYynq6eJM09R3Pl2sabq4ZuJRwyFGH0sORImJIBBFKeQCDQN1e3UNNPvfPMOBEIDqsk20dVr98i+xhqrFVTW4m1zUblQjnoNbXwJRxwXJh6ZpXZII/f0EJbhWHg9Qh3OCaTcYXkoHqGSbtvsnpHfy0QJLh8C8YJUCJukCBXeHX713vNwKc3kTWy+9ZmQDKh5HqfgBmuLgxrGNDyclN3Of61c5XMfVWrLUPUtAyh3kPVWJZTqZ2ByIPwnzJP0ojkdCF/u3Qk0Gn72WBBlT1VW8N0E05YH5JDK0zQ33Agpxa3pFCmVu+Ghbd2ChAD+F0Ft9B4zGZLJOUHCHHppCIGLKk2F66zFoqjonUoWuEhiB5pgS5XEyx8ma+tTiGGRGNqW7ceDZUUAkIW3gZrBLVczkZEa0kubctAqwsR4ZekL6hOwo/QV2FZ/wI3KisyWLgU1eDUe7ubgwhgy7SQIvXAjkV6F9cme7p6kDlPI2oxY9U+Cb0FOUBF4HLhMgVtWmILLqnN4KdxUv64fUXT+RoaSBVjmQgDao7wAVn062slynf9tBv46OaSMKkG2KaV/BMxl2K9BVZQxI1z51pDQEJByfCilE2xvtYN358B1IIm+P4h97nUcb/VHjRa0zIKsmJZLzXACRYMxNFXqVk4f6gTWb6Q2RvPUEFIcNmrSPzU1IXWhjqYqle1UqbtlFvrM0CPLgkYndqfEDUetyTZ82ouzp1py8BZnYwMsJYntR0C9NXiDRTSVFBWofZqlYaoB0XUQ0g+aIFWNSHAWU2DBFpRWxHIy/BjgeX8ki5N+6bUkYMnKoVgGwzPJvAL58Fl2UCr3VIrMq407JKtmYjr4B/1k3vtYrN67CSEGQ0sMcmGIHlaGyMsJImBXW0NahJCyRVU54RaQN4GTFSVrOC8xr1r0Y9o/RbmtL6iNXOVC8PoOB91x39+CBkqGIFEce93DXXSj2a9upEYBjJMoIqtP8e/rQIQpnqzCeagdNNmEhUC3USsFWAOuTyuOt2SutoPdrhUb+607K+kkK20sBlGMDpzZ1oV1ov2klO3i8r8GNYb1eXNOeAgqeeCJNMuWBCWkfLauiZ8OEwaEej7ghowzYuAKJfpvwL5kVQwKBrNc6QftV6vFd4obArap8sNwpPWFg3sj0HOF+0EWQBcUR9bHkKMpR7BqC5+BDUfILPV5pmqKvCgPVNQTCXCFoDZZAi0Y6pGTQZG0UF6ssVCq8y1akkKYbKhYVH3wGFIDOGJVOb8FDnYBlpfSVi/jpZZUY/O167VH3BR/VJZcr9L8aMjEXIHlfUuZhW9Copom0fkx6StIYvI7hfmYT7J/nXCT90ETMXYaEMWkUEGgCSgJ/r4NSC1D20+0srh1FoDvDG3BrI29ajVBx6R6uGRNaMg+ArRqALNVGULRfiwy4iSrXV7mQqZXu6K+1H7k/9xe5hD9ysOvjD4rJ2kgRq9nhYHOH2wJoGlG1VzXD4M34BOZblyRwEwqi4hJbVuOKftSoEemg5R1/gKLaP99Gh9WJkVid8ahKyMNoZ9bZdODYmbuyKh7yN3IX9hALkZoRJyP7eBVNtgANcLI2/cippxq96Om4hcLezg/JoBVm1BbZyBvKpPLqVoSSebzQZKo+ryUJO2GeyjxomrPnBb2qzy8qc6zRHWD1cQQQZ/1EeF/lEPRdOobzTzI/g0vDNpYVKrTdzqY8aejJPCBk+rpvNPqpPVA1LGq6PRtVVFy1ntmY2wfpoCSiOp1Mz4wznZOAef2vBraj3ZuF81g8wrlmzWokJyH5Xfj3bQt4TMwF999KTDEm6bk8K/4yZUt8B/qbfiDv1Twin9JtWp/OnqIVHRHJyHtonf/tPp3sj5HmIVeXIVSkenfk7sXNZa9Qi+c8uE7GVOIgDZFsKrBvWR3PLUv1MBcgC0aSM0YKEdYGrwHA6ftMDKmYFpCDmqEWD2q5UDhRIHGImoRmYg3hDgqAoQpRxAY6v5Z1kfXwD8reDUs/ouUpjWdFAYgGh4yCjK4MavKsARN5HeQPbQ007ohnn2CeGl5jIvLYjsVmvHwqJowe4ElTjCkF5+2kvRVWQiVFJR2aNwZWPhIYp1XSNPo/tplUgmobS1iETvXHaDklCTGCfSe90bxBFgL1wUVQ2XzhDp5qi9+2+7YztsvJZgOvY8ahsDKgvaLUNDj/FCnpq6OmtZy752tJLDBVCGltS2pcpo1rrR0FrlPsBhHhKqrZFinBTLqm2kYavQDqhgmIgStNMRJ929Ebvax1eu9tQk/GQSIaONv5ZEDBWahDG88hP5IdFEkv/YdTPU08/UoDZHnU7dNP3IHQc1RRX1SwegM6ig2iEj4FdKgNQVzcB3Q8vvhD16n7fAvRmhB4toqypjnLqFg9Z9j0re2l8RS1JLrgqHWcsUXBS5hQrGsDA0CAgmF77F8x5HzDZgjXnqMo+o1T4HJz3gh3qeEwk1f/r0AEuiR/1DAF/OP3mIO6h3Oa4FmvjK84wkxmmpk6upqkgo4mlNh6KxtPHl1R9toI29rxctE3Rb2nDaUwb5hjGVA5w6LGBEV/RUnYJBMJavhW+/CvlcUeACILLe9oECagRZc9rQqs5oyEElx7EX5LXVt7MwIZ5TPEW3R9VBrVsrVxJWmdjEto/OwM8DL7uTrTkUzYyHCCo7yR8uGfVbMwmKydKGliDmL1o1vWOooxX6QHISf7Ir6COreEDpiwDMSLuhOjV3GpUk2mv2kLdBq5Pa0twwZa3ZRk/bwluTSnMQ33DeWFqNjVp2qtp+wb3aBtoytNBzOwEKJSRumkxftXCcizjQChDAebWbtSBGVUReD3NMMstsqXs9qbnNNqPghLX3EDohQoOaAjZyOYG5Ws9AGHMw7QpUa1WTsEpFe6DgiywtfNTBlaYWRLVb2SsCm/bQaH9jHuj2tLQIhEYIUc8HYPrrhviPzeQuVyOlTkiY4MkXwZzasIF/TF0CDPh4+EFGVPPKFOfemjZRVPdWz9ziTGhLbgZvgfpJBAmGWumpvjZ1CRKquSK4UDFd5WB1NC71tbXHcW3pUBuv51MHIRwAYBR4WlsSvY1RUDUdhAswQgFrvW1mfRKCh/Q6z2vT7XxOSH9ESfWonIP87IKyCqmp+0kbIfNiWpdWKgFB1VHL3EdL+oBytrrqSFl71xnPOlThCqpIqg9OtR0FjZoE9bgYGS1hO8IX7Xm0tQusgpi2enkG48atqSUgYKGe7LMk0hAUH3/GjruryjZlSiYmWivKKtipcaijUU47qvOTjtCR6tRbVttrXUNOWWs4T8gNUgwUHE4hET+gXNLViRBTBpm5r4t/n/Aa0+OKOv0AFPVQFS7r6aZBjbu0ZWaENuCwzRSj4SrmoOKBtJ/4/CwlHkZMdR53S19L3Tv4fH7LPV9CR+1mTyEMWvZgwIbg1PInABnflP7SJtUIQKpreSX3pDHgIGgdT6ks62pbIPRVIATs4GzCRL0m2rcM3KgD4mjTLY7J2FitY9PB4/KthJXZFAKjygIgNW2bHT44tGiPIZCvvFpiWlrb8RwwiPQqfhfH6Li/JIziSFgCtP9UPG/1GPlaysL5glK2VSnOULWR0OYymC7q+EX1I+7qQE9V9FdS5+WIKROXyBRVzqbVsEhetelihLRxQ09S4QrUu7RVz9DuLfRYDE4L2YAi18rwqFMFLS8Y0GIf4BH1lBa+t2K+lD7ualWtGajXBp4FbUBUj2DHTQgkjx6+QLrDV5lYTCqB4Gzq1tNkMq4dAtCylDZ8XD2DpKNbsBJla4njHnUfWv9eO0Hi88nBQvdJZWerAy5M/X1HpeIcYZpkJKuMTvenECIbSfYDsCSpsFQbnHHhXRsjbWcsuKqWB9GmarCwAGmJdBEXPllAcAcWX1yNC4SmsDhm0T/23jokxpQrAxgbgSAbk8QZO+vpB5JcWntWd+KNam/CIOKyJ3LdHgqCmb/ak8dRebO2AmnxSLBIAk0hwVXLgTZ8YNRsuUx7+ElUHHBwR03qJOqSIe38inRacg5Z/aFR3cMCOBjU1Av/E7VB7sj6AxDEDAxk72rRZhUssFfzm7b5qmOyR0SGeENd8BL9U4v65g96kniNR6ticAL5BAlElP/xVgl+wsKRUZJrk4g5Qdbfk2YQh+pg93H1ql3D6inD22vJG9mP6lAv43ZBzyW5dW7B8iCbh+3C1wxh7WEwNcAgTJJcRLNuh5u2yqwIIJIZA7998NuRSwh20qDYAiIJCfKoNx48WR3NsUWRV42igvP3a+9xhdoPY4VPkk89jgRkgl80yunfXuANrqnmNMBBLcbj7j2yTtpRKACa6+rUureV+kUr5W6pwbYWVDQJogHt3x4fiWxRvqpIGJIV1HfrTfeCrd/iKtA41vkKd+52r74TIWGPBbmiPc6PK9dDl9Rieb4drLUk1d/s+Sxqs9Fmljf0XCsrCx2XkmHdtxkWBsFafyvH82drcNNCeFKZ44hiwaHwNFjaWKf+IWCm74Sq1cY5LZhrD6qewjWyLUNJRWotY6jHfZFVMgjSPjALLKANOqlg1fNF23EdTttrvhVpTqYFuveZkqIe6cW4yEajC2JTXzOfkcSCGyRsU1R/vp5iNKurWmUq2r5ljU6F21YHMkirZwXwEQxcV7caKMu1Zj1AA0WZcQ8YisucWpPUcwhLOMRrv5k6WIWncyuMkp4BgtvUBmqJNI0V4M7Ub+2U1XrP5c09WeAOp4cWmFbF2Dcta21tty8qQMLV2uAAzmmNmwxogYjX7hKtkSEs0J+IKT0uIx2uCJ3s9cgKeZCrRlpNvS3jIydevQQRI67OJCS7BNjRjiLtzD4PJQ7Lq23NNXUugDaQByIPKxxt2Wj0oQTXHnw95kdN2loVgfX6U99NRpKDSag80JfAry4vdU1NFXJiVcKKfci6QZQwyapXH0IsnpQ69hFxH0PQhn0grqsz49SW0y3E0UGOVD0yjDMjTMlaFPNT3y2ppmcXkcrVvBbOj3nJtrCGfL4+6glDwZZF3eKu6tvasCj1opJG1KPBtINJLcnpmBya6pDVaoIWxYc69dEaVQ8JgyVq78GNoa4pjqrFt7xt4lrL68G0KIvBdGsTLTycK7le9BQUezoZPi7BpVi9Kyx2uF/snNb4iDU1FnStQTStESQ9ZgDN/fTIshAJw0seJBgGlk/qnc6VCdQOtufdVJPz0fYEcqRrRTtt7RkaXAgBj/3p6jfK2OfT0CU6i9YvipY8s21jgrpydp0BIWM8FuFTO9/zdHAhGVDc621V9r/H1HHXSN2q/tgzteJa1e7P9WA/nD87axGeH2R2VmYy+Ktn0YCoQYtJ6q5Ur3XTZcesBSYkJdTdwfr5GDPIyoGVScC5p1pdvkeOMD3a8V/1sI2MBEK8Be3PSHrwh5631JpS1dqfVdJkhq8eE0I2YYvVnUO8mywYYKk8DbqT9H/IRjWeMy9gXrPX9KbVu4S1WuLLdmpFlsUJV6LlHDlYQGlKP2u89IAL9U6F9PN8B7ElOVXUt1nU04NVHue6rVSpGM2jBYRc3hhqGu724Iks16luno66AEysCtG+5gtt9PZDbVnaykAcFWvSyuQAeRxhIWhBj4XBn5cL6RIxNVTtxI9FC1E3LzXuBZyQDH2rZuoZbFwGqqDjvCRk1ZKp7khveATOQFSla4mDOMZjasvsVRuLt0eXTDKu2APGnD3QQ8VQOH9IWBWvzQ972yO0otzwUvdxm98GMdXvVGRA/nE86EoLcO01gG3pMSB6fhYeCcLQnkqEolZVYhbiqAkEED3qCFCRmXFGK2PdCZmsvRpZj2dzMXItQU1TtWrnQtC+d8SKtGxg4NRRDZcxHTKKS/vQhUhabbGGSy3JEyDJHsiVQU/tla9LHchvfl21XW3CZKZ2AHZQfwFzelRkUNVEuzds45LXehAU7FAn5wX10m8ttIANWON8h0hBJljlaiJ5haNHREQVPVEFJS0SlH/1MMWkYpazontEQKkIKcmsgGsiQbQSU76Jdl7RTsRbVF3Uc8bgx+8pBPaUpAdPPad296xmAo6I6LMi4taevCy4wQwR1egO0EoFRy20XSuFf60ekKncVGvFaYeY5AMqBBWqBtbR1Oiop7Vdq8TiQqpqFOoG1OpcwCToWQgrdu2FSe9DSO0y1VNXUIs2p/19CwJ6KMJV259oauppFUAbMaId3PLlYJL2y+Zh8mXBIq1zyr15q545YoSsEQoDBZDVKgJASwFh7668Ahih1QptggfJbL+quoAdI6GHUnQv76n3SOGdrv04V4t2a0JpM1kreFPF7S7rLobmrR9xAgoqYbuI+sWfqMH4fs+NA5Ojdrg9Va7gbrXM6RkYUZuJnmqhqjwV7ejLWrBn7jkYpkaVIbV1ALQg0V3a8ASiaG1PJS0iBavDSa62jPEePZhPAk4jCz8sPZ+hXKcnrvRvp9QQ86jWvRjh063fcYmtcSWmDm2pZ+P20Skd3SyTpAeM6KkAbt1uSwf4Neu4WXpok8DINlloB3b9VheWPIpWpJKGVT/3Y4f4juD+3SFiWNjHdr5g4Betlr8+9n2qqila+5iAfPd+jlPbVusYo3jUY7HxJgBlUcFyaq87TknmREUDZL225KgXgnvENXTP9NuOhdC1Bd82gkGt5E+r2uas3jH1aGsXD0zRmkqo2gHaUYYK3GSrgXokXnERo4j9APzRrPf3G9JXdrVP4djf7v1nqXV+a6Qk7NHCr/oc9FA5RwxOPWStaa19mGwv8Zjlt3+Z+F+vhPfrzV7dH/JKnWH14tjstL9nbu1TWwoetLkq4NdbpGgfvHbG6fEYZNHS3acfjn1RhhQ8QHuhn532biP3CFIrLBLXTTW2pQWuYc8BQrYnP0nrcO0RPWjorO5DVWd+TVWLjuNFbb8LWuVB7qk/2x4ngarnlGfagxV/5j7pgWAXLMaY/fGjhFbTkwaG+q21dJWKeiaRPSidkvUUsSw1M0tC/I3w+5MgeS7aza/y38MHavFgwBRYdNzK8lpAtL3DGuiHZ+hDg45gfFfNZNq42lFWckfaTQemgg9qhsdWaH0TA5GtOaiA8+rYXXJB9jAfPQcr2ENA9NQ7NUHqec/NW9sTemraMpkDLYb7T+cnT1/N5XLcAAAAZ3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHjaPYxBDoBACAPvvMInQEt0fc6G9bA3D/4/NhtjCS1hCDbvp2xbyt3YEnnm8FT9AqIcPDR2gq4GhjLkQS5aopdIsJN6pHCmDr4Vm731JhdgdSADtQAAASRpQ0NQSUNDIHByb2ZpbGUAAHicnZC9SsRQEIW/rKIiaqOIiEUK2wUb18bGHwwWC2s2gtEqm2RxMYkhybL4Bvsm+jBbCIKP4AMoWHtutLAwjQPDfAwz58y90LKTMC3n9yDNqsJxj/wr/9pefMNijRZbHARhmXf7Zx6N8fmqacVL22g1z/0ZC1FchqozZRbmRQXWobgzqXLDSjbuPPdEPBXbUZpF4ifxbpRGhs2umybj8EfTXLMSZ5d901fu4HBOlx42A8aMSKhoq2bqnNJhX9WhIOCBklA1IVZvopmKW1EpJYdjkSfSNQ1+27VfTy4DaYykZRzuSaVp/DD/+732cVFvWpuzPCiCujWnbA2H8P4Iqz6sP8PyTYPX0u+3Ncx06pl/vvELA+dQc7eXtX0AAA+caVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6ZjI0Zjk4NjItYjMyMC00ZWZiLWIwOTEtZjIzYTQwYTYwNjAxIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhhMGY1NmRjLTljYmUtNDMzYS1iMzQ5LWEwOTJmNzczMjFmYiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQzZjM5ZWU5LWQxODEtNGE4NS04ZDg3LWFiNTcyYjYxNGMzNCIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NDIxMjc4ODYyNDUzMTQiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2I4MGJiZmUtMDUzYi00OTU2LTk1ZjQtNzQxZjExNDY4OTJhIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTAxLTEzVDIxOjM4OjA2Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pmcw/BEAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YBDgImBvhP/sMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAV50lEQVRo3qXbeYxleXUf8M+977611u7qfZuZnl5mZxiWGQ/YDJjNHmJjTJxEcSQUOf8QW9ixUKLEUXAiWQrGiSI7kWJLJo4dgrETO8IQSARhWMaAGWDGs/dMd0/vXdW119vvkj/er16/qq7qGfAtlfSq7nbuued8z/d8f+dFRVEgR6GrL1UY07ZsUt2ylmkrZpRBgcirb7lUW1suVhbryURiZRV09RQiiUhJoSdRGp5bNWVFW0VFIlFSEomQFAqFTI5VbR2FvjUXHFa4YMGMVWPScKniNRkLibJrFvRFxuy0bEUuUlLVUFjTVUhM6MmNhbMiZVRdVBhXV1NVliCSDLzQk0osWtFVSHVcMqPunBWzalKZH3wr2WPSFa94Ra7qgKpZq8NrlZApNBQmNEAsFjkh8oqdJowbMyZSQpJLdbV0jFt02qRYrK8p13ZF2RX3yV+TccXI5yiETNkhey067aonZUpqGsq6WloolB2w4qJdquEKZUuOeNFlPV19hUJNSZLralq1pqJpFo0QDJGLFt3qkkMbzHg1M0f/s27wHrt0zLlsRduSjn54JFLfN6aNnRKFyJJlk3Z7XjJ8p2WxJNW2YtWqGbEVZWUtTSVdL4pdNmbyhzB28/5I3RGHZPrWLGrqSqUKibIdlj2LGdCxZK+7PG9RhFjJmJIk1bKkrSk1KbVoRk8TL7viiOe9dSRTfzhT1xGkEIuVNew2SOzBvkikL/es2DRSV+23yx2+rSaSqOqpDjy7qq+rY1pVS65nVddV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",
		MUTE: "data:image/png;base64,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",
		PAINTBRUSH:
			"data:image/png;base64,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",
		TIGHTEN:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwEAYAAAAHkiXEAAACfklEQVR4Xu2bsU4CQRCGT7ERjbFQMTH4AhpjYeEbGC1MbKww4Q2sodAGW2PjA9jb2RkKjMHeBhsrIxRQKQnGgGDi3MRIwNvBndtdd2gW7ib/zHz/7t5xgSCQlxD4JnBwC+8nV4VKLARSKUhzeQljrwdjPh9Len+T7O9D7/X6T/BowMsLHJ+b85cRS+fLyyCLgBH4sPHsjKUMf0WvrgbP+GEGvL9D/NKjv8y0dH54SAOPhjxsaUnvr8j0NPTebNIMKO/5y0xr59SZL+C14g+CiwvazNec3gG5cd4a19d59UV9CIFEAk50OrICfp8kTCtgZQXSohFRM7XRiIr4r+eZDPj4oAGbmqLFS7QigddXN7YgfCal2JY7YeWy3QakF39eq66v4XM2C+PMjDusB1Z6fk4zYOIknoaT4RYZ9Szq7Q3qWXiOpy7tWTIZmgEIZGxHeylfgolNWj3VKk8dsatWKrTG0QhthRK3Qsx/dKStArNC29ujGaDLiKitpv98qWSWF1v209O/GUEFSY1vt6G+tTU2BHYI39/baUQuZwcf9irSaUhRLNphxPExe8t2J8CZh1sAdeugxt/dAY+NDbu5xF4d7r2lWc0rI7ytLRRib8nNhPhoAGd29+lvhrRatnJgehinvd3w7km7rnFBVwwwDoqrAFcMmOQCYFpXDDDsgCsGGMbEl94VA2QL4psDSspigBImviAxgI+t38pyDTDsvxggBhgmYDi9rAAxQIlAUinKwSBXVoCDaNVKdsUA+R6g5idblBjAhlZNWAxQ4yRRVAJyDaAS0xw/oVmPSW7sJhSeD8du34h/COk/vstUkC+ytRp02g3Bjjrij4Pt4/YJN03BbYn5mYwAAAAASUVORK5CYII=",
		USER: "data:image/png;base64,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",
	});

	const DEVS = [23476];

	/**
	 * @param {string} original - The English message
	 * @param {Record<string, string>} [replacements] - The replacements
	 * @returns {string} - The translated message
	 */
	function displayText(original, replacements = {}) {
		/** @type {Readonly<Record<string, Record<string, string>>>} */
		const translations = Object.freeze({
			CN: {
				"Automatic Arousal Expressions (Replaces Vanilla)":
					"自动欲望表情 (替换原版)",
				"Activity Expressions": "活动表示",
				"Alternate Arousal (Replaces Vanilla, requires hybrid/locked arousal meter)":
					"另一种欲望 (替换原版, 需要混合或锁定欲望条)",
				"Alternative speech stutter": "另一种言语不清",
				"Enable layering menus": "开启服装分层选项",
				"Extended wardrobe slots (96)": "扩展衣柜保存槽 (96个)",
				"Replace wardrobe list with character previews":
					"使用角色预览替换衣柜保存列表",
				"Clear Drawing Cache Hourly": "每小时清除绘图缓存",
				"Instant messenger": "即时通讯",
				"Chat Links and Embeds": "聊天链接和嵌入",
				"Use Ctrl+Enter to OOC": "使用Ctrl+Enter进行OOC发言",
				"Use italics for input when whispering": "悄悄话使用斜体字",
				"Improve colors for readability": "改善颜色以提高可读性",
				"Show friend presence notifications": "显示好友在线通知",
				"Show friends going offline too (requires friend presence)":
					"显示朋友离线通知 (需要启用好友在线通知)",
				"Understand All Gagged and when Deafened":
					"在被堵住嘴和被堵住耳朵时可以听懂所有发言",
				"Reveal Lockpicking Order Based on Skill": "根据技能显示撬锁/开锁顺序",
				"Allow layering menus while bound": "允许在捆绑时用分层菜单",
				"Load BCX by Jomshir98 (requires refresh - no auto-update)":
					"加载 BCX by Jomshir98 (需要刷新 - 无自动更新)",
				"Load BCX beta (requires refresh - auto-updates, compatibility not guaranteed)":
					"加载 BCX beta 测试版 (需要刷新 - 自动升级, 不保证兼容性)",
				"Limited gag anti-cheat: cloth-gag equivalent garbling":
					"有限的堵嘴反作弊: 和布堵嘴相同的乱码",
				"Full gag anti-cheat: use equipped gags to determine garbling":
					"完整的堵嘴反作弊: 使用当前装备的堵嘴来确定乱码",
				"Extra gag anti-cheat: even more garbling for the most extreme gags":
					"扩展的堵嘴反作弊: 对于使用最极端的堵嘴更加混乱",
				"Require glasses to see": "需要眼镜才能看清",
				"Check for updates": "检查更新",
				"Automatic Relogin on Disconnect": "断线后自动重连",
				"Show gag cheat and anti-cheat options in chat":
					"在聊天室里显示堵嘴作弊和反作弊选项",
				"Automatically ghost+blocklist unnaturally new users":
					"自动对不自然的用户无视并添加黑名单",
				"Use accurate timer inputs": "使用准确的计时器输入",
				"Confirm leaving the game": "离开游戏前需要确认",
				"Discreet mode (disable drawing)": "谨慎模式 (禁用绘图)",
				"Keep tab active (requires refresh)":
					"保持标签页处于活动状态 (需要刷新)",
				"Show FPS counter": "显示 FPS 计数器",
				"Limit FPS in background": "在后台时限制FPS",
				"Limit FPS to ~15": "限制 FPS 最高为 ~15",
				"Limit FPS to ~30": "限制 FPS 最高为 ~30",
				"Limit FPS to ~60": "限制 FPS 最高为 ~60",
				"Make automatic progress while struggling": "在挣扎时自动增加进度",
				"Allow leashing without wearing a leashable item (requires leasher to have FBC too)":
					"允许在不佩戴牵引绳的情况下也可以进行牵引（需要牵引者也安装有FBC）",
				"Enable buttplug.io (requires refresh)":
					"启用buttplug.io（需要刷新网页)",
				"This page allows configuration of the synchronization of bluetooth connected toys.":
					"此页面允许配置将BC震动器状态同步到蓝牙连接的玩具",
				"Save & browse seen profiles (requires refresh)":
					"保存并浏览已知的个人资料 (需要刷新)",
				"Chat & Social": "聊天 & 社交",
				"Activities & Arousal": "活动 & 欲望",
				"Appearance & Wardrobe": "外观 & 衣柜",
				"Immersion & Anti-Cheat": "沉浸体验 & 反作弊",
				Performance: "表现",
				Misc: "杂项",
				Cheats: "作弊",
				"Other Addons": "其他插件",
				"Show nicknames": "修改你的昵称",
				"Change your nickname": "修改你的昵称",
				ah: "啊",
				aah: "啊❤",
				mnm: "唔姆",
				nn: "嗯啊",
				mnh: "嗯哈",
				mngh: "唔啊",
				haa: "哈啊",
				nng: "嗯嗯❤",
				mnng: "唔啊❤",
			},
		});

		let text =
			TranslationLanguage in translations &&
			original in translations[TranslationLanguage]
				? translations[TranslationLanguage][original]
				: original;
		for (const [key, val] of Object.entries(replacements)) {
			while (text.includes(key)) {
				text = text.replace(key, val);
			}
		}
		return text;
	}

	window.fbcDisplayText = (original, replacements = {}) =>
		displayText(original, replacements);
	window.bceDisplayText = (original, replacements = {}) =>
		displayText(original, replacements);

	/**
	 * @type {(gameVersion: string) => Readonly<{ [key: string]: string }>}
	 */
	const expectedHashes = (gameVersion) => {
		switch (gameVersion) {
			default:
				return /** @type {const} */ ({
					ActivityChatRoomArousalSync: "21318CAF",
					ActivitySetArousal: "3AE28123",
					ActivitySetArousalTimer: "1342AFE2",
					ActivityTimerProgress: "6CD388A7",
					AppearanceClick: "723EA7F1",
					AppearanceExit: "AA300341",
					AppearanceLoad: "4360C485",
					AppearanceRun: "0BBDEE59",
					CharacterAppearanceWardrobeLoad: "A5B63A03",
					CharacterBuildDialog: "85F79C6E",
					CharacterCompressWardrobe: "8D3B1AB1",
					CharacterDecompressWardrobe: "A9FD29CC",
					CharacterDelete: "398D1116",
					CharacterGetCurrent: "45608177",
					CharacterLoadCanvas: "BA6AD4FF",
					CharacterNickname: "A794EFF5",
					CharacterRefresh: "5BF9DA5A",
					CharacterReleaseTotal: "396640D1",
					CharacterSetActivePose: "5BCD2A9E",
					CharacterSetCurrent: "F46573D8",
					CharacterSetFacialExpression: "F8272D7A",
					ChatAdminRoomCustomizationClick: "E194A605",
					ChatAdminRoomCustomizationProcess: "B33D6388",
					ChatRoomCharacterItemUpdate: "263DB2F0",
					ChatRoomCharacterUpdate: "9D0EEA39",
					ChatRoomClearAllElements: "14DAAB05",
					ChatRoomClick: "120B0F0B",
					ChatRoomCreateElement: "9A3FD548",
					ChatRoomCurrentTime: "A462DD3A",
					ChatRoomDrawBackground: "AEE70C4E",
					ChatRoomDrawCharacterOverlay: "06FB4CC3",
					ChatRoomHTMLEntities: "0A7ADB1D",
					ChatRoomKeyDown: "B4BFDB0C",
					ChatRoomListManipulation: "75D28A8B",
					ChatRoomMessage: "BBD61334",
					ChatRoomMessageDisplay: "C7053411",
					ChatRoomRegisterMessageHandler: "C432923A",
					ChatRoomResize: "653445D7",
					ChatRoomRun: "6F4C7B4D",
					ChatRoomSendChat: "7F540ED0",
					ChatRoomStart: "9B822A9A",
					CommandExecute: "5C948CC3",
					CommandParse: "C9061FE8",
					CommonClick: "1F6DF7CB",
					CommonColorIsValid: "390A2CE4",
					CommonSetScreen: "E2AC00F4",
					CraftingClick: "FF76A404",
					CraftingConvertSelectedToItem: "E827EA50",
					CraftingRun: "5BE6E125",
					DialogClick: "D0FA2714",
					DialogDraw: "8A814153",
					DialogDrawItemMenu: "FCE556C2",
					DialogLeave: "C37553DC",
					DrawBackNextButton: "9AF4BA37",
					DrawButton: "A7023A82",
					DrawCharacter: "35E09A1E",
					DrawCheckbox: "00FD87EB",
					DrawImageEx: "3D3D74F5",
					DrawImageResize: "8CF55F04",
					DrawItemPreview: "58E9BA94",
					DrawProcess: "BC1E9396",
					DrawText: "C1BF0F50",
					DrawTextFit: "F9A1B11E",
					ElementCreateInput: "60D2EA73",
					ElementCreateTextArea: "81019A58",
					ElementIsScrolledToEnd: "1CC4FE11",
					ElementPosition: "CC4E3C82",
					ElementRemove: "60809E60",
					ElementScrollToEnd: "1AC45575",
					ElementValue: "4F26C62F",
					FriendListShowBeep: "6C0449BB",
					GameRun: "ED65B730",
					GLDrawResetCanvas: "81214642",
					InformationSheetRun: "E248ADC7",
					InventoryGet: "E666F671",
					InventoryItemMiscMistressTimerPadlockClick: "861419FC",
					InventoryItemMiscMistressTimerPadlockDraw: "4E1628BE",
					InventoryItemMiscMistressTimerPadlockExit: "66BC6923",
					InventoryItemMiscMistressTimerPadlockLoad: "BE46432F",
					InventoryItemMiscOwnerTimerPadlockClick: "C929699B",
					InventoryItemMiscOwnerTimerPadlockDraw: "BCA80BF8",
					InventoryItemMiscOwnerTimerPadlockExit: "1BE66B4A",
					InventoryItemMiscOwnerTimerPadlockLoad: "8A55C0D1",
					InventoryItemMiscTimerPasswordPadlockClick: "BAE0BAC9",
					InventoryItemMiscTimerPasswordPadlockDraw: "0BB8E88D",
					InventoryItemMiscTimerPasswordPadlockExit: "7323E56D",
					InventoryItemMiscTimerPasswordPadlockLoad: "82223608",
					LoginClick: "EE94BEC7",
					LoginRun: "C3926C4F",
					LoginSetSubmitted: "C88F4A8E",
					MouseIn: "CA8B839E",
					NotificationDrawFavicon: "AB88656B",
					NotificationRaise: "E8F29646",
					NotificationTitleUpdate: "0E92F3ED",
					OnlineGameAllowChange: "3779F42C",
					OnlineProfileClick: "CC034993",
					OnlineProfileRun: "B0AF608D",
					RelogRun: "10AF5A60",
					RelogExit: "2DFB2DAD",
					ServerAccountBeep: "F16771D4",
					ServerAppearanceBundle: "4D069622",
					ServerAppearanceLoadFromBundle: "C9F5FFAC",
					ServerClickBeep: "3E6277BE",
					ServerConnect: "845E50A6",
					ServerDisconnect: "06C1A6B0",
					ServerInit: "FEC6457F",
					ServerOpenFriendList: "FA8D3CDE",
					ServerSend: "D356D537",
					ServerSendQueueProcess: "BD4277AC",
					SkillGetWithRatio: "3EB4BC45",
					SpeechGarble: "9D669F73",
					SpeechGarbleByGagLevel: "5F6E16C8",
					SpeechGetTotalGagLevel: "C55B705A",
					StruggleDexterityProcess: "7E19ADA9",
					StruggleFlexibilityCheck: "727CE05B",
					StruggleFlexibilityProcess: "278D7285",
					StruggleLockPickDraw: "2F1F603B",
					StruggleMinigameHandleExpression: "B6E4A1A0",
					StruggleMinigameStop: "206F85E7",
					StruggleStrengthProcess: "D20CF698",
					TextGet: "4DDE5794",
					TextLoad: "ADF7C890",
					TimerInventoryRemove: "1FA771FB",
					TimerProcess: "52458C63",
					TitleExit: "F13F533C",
					ValidationSanitizeProperties: "C6A54638",
					WardrobeClick: "E96F7F63",
					WardrobeExit: "EE83FF29",
					WardrobeFastLoad: "38627DC2",
					WardrobeFastSave: "B62385C1",
					WardrobeFixLength: "CA3334C6",
					WardrobeLoad: "C343A4C7",
					WardrobeRun: "9616EB3A",
				});
		}
	};

	/** @type {(level: "error" | "warn" | "info" | "debug", ...args: unknown[]) => void} */
	const pushLog = (level, ...args) => {
		pastLogs.shift();
		pastLogs.push({
			level,
			message: args
				.map((v) => {
					if (isString(v)) {
						return v;
					}
					try {
						return JSON.stringify(v);
					} catch (e) {
						return v.toString();
					}
				})
				.join(", "),
		});
	};

	/**
	 * @type {(...args: unknown[]) => void}
	 */
	const debug = (...args) => {
		console.debug("FBC", `${w.FBC_VERSION}:`, ...args);
		pushLog("debug", ...args);
	};

	/**
	 * @type {(...args: unknown[]) => void}
	 */
	const logInfo = (...args) => {
		console.info("FBC", `${w.FBC_VERSION}:`, ...args);
		pushLog("info", ...args);
	};

	/**
	 * @type {(...args: unknown[]) => void}
	 */
	const logWarn = (...args) => {
		console.warn("FBC", `${w.FBC_VERSION}:`, ...args);
		pushLog("warn", ...args);
	};

	/**
	 * @type {(...args: unknown[]) => void}
	 */
	const logError = (...args) => {
		console.error("FBC", `${w.FBC_VERSION}:`, ...args);
		pushLog("error", ...args);
	};

	/** @type {string[]} */
	const deviatingHashes = [];
	/** @type {string[]} */
	const skippedFunctionality = [];

	/** @type {(functionName: string, patches: Record<string,string>, affectedFunctionality: string) => void} */
	const patchFunction = (functionName, patches, affectedFunctionality) => {
		// Guard against patching a function that has been modified by another addon not using the shared SDK on supported versions.
		if (
			deviatingHashes.includes(functionName) &&
			SUPPORTED_GAME_VERSIONS.includes(GameVersion)
		) {
			logWarn(
				`Attempted patching of ${functionName} despite detected deviation. Impact may be: ${affectedFunctionality}\n\nSee /fbcdebug in a chatroom for more information or copy(await fbcDebug()) in console.`
			);
			skippedFunctionality.push(affectedFunctionality);
		}
		SDK.patchFunction(functionName, patches);
	};

	/**
	 * @type {(node: HTMLElement | HTMLElement[] | string) => void}
	 */
	const fbcChatNotify = (node) => {
		const div = document.createElement("div");
		div.setAttribute("class", "ChatMessage bce-notification");
		div.setAttribute("data-time", ChatRoomCurrentTime());
		div.setAttribute("data-sender", Player.MemberNumber.toString());
		if (typeof node === "string") {
			div.appendChild(document.createTextNode(node));
		} else if (Array.isArray(node)) {
			div.append(...node);
		} else {
			div.appendChild(node);
		}

		ChatRoomAppendChat(div);
	};
	w.fbcChatNotify = fbcChatNotify;

	/**
	 * @type {(title: string, text: string) => void}
	 */
	const fbcBeepNotify = (title, text) => {
		SDK.callOriginal("ServerAccountBeep", [
			{
				MemberNumber: Player.MemberNumber,
				MemberName: "FBC",
				ChatRoomName: title,
				Private: true,
				Message: text,
				ChatRoomSpace: "",
			},
		]);
	};

	/**
	 * @type {(text: string, duration?: number, properties?: Partial<ServerBeep>) => Promise<void>}
	 */
	const fbcNotify = async (text, duration = 5000, properties = {}) => {
		await waitFor(
			() => !!Player && new Date(ServerBeep?.Timer || 0) < new Date()
		);

		ServerBeep = {
			Timer: Date.now() + duration,
			Message: text,
			...properties,
		};
	};

	w.fbcSendAction = (text) => {
		ServerSend("ChatRoomChat", {
			Content: "Beep",
			Type: "Action",
			Dictionary: [
				// EN
				{ Tag: "Beep", Text: "msg" },
				// CN
				{ Tag: "发送私聊", Text: "msg" },
				// DE
				{ Tag: "Biep", Text: "msg" },
				// FR
				{ Tag: "Sonner", Text: "msg" },
				// Message itself
				{ Tag: "msg", Text: text },
			],
		});
	};
	w.bceSendAction = fbcSendAction;

	w.bceSettingValue = (key) => fbcSettingValue(key);
	w.fbcSettingValue = (key) => {
		if (isDefaultSettingKey(key)) {
			return fbcSettings[key];
		}
		return false;
	};

	w.bceAnimationEngineEnabled = () => !!fbcSettings.animationEngine;

	// Expressions init method for custom expressions
	// eslint-disable-next-line camelcase
	w.bce_initializeDefaultExpression = () => {
		// Here to not break customizer script
	};

	/**
	 * @type {(duration: number) => Duration}
	 */
	const durationToComponents = (duration) => {
		let seconds = Math.floor(duration / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		hours -= days * 24;
		minutes = minutes - days * 24 * 60 - hours * 60;
		seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
		return {
			days,
			hours,
			minutes,
			seconds,
		};
	};

	/**
	 * @type {(dateFuture: Date) => Duration}
	 */
	const timeUntilDate = (dateFuture) => {
		// https://stackoverflow.com/a/13904621/1780502 - jackcogdill
		const dateNow = new Date();
		return durationToComponents(dateFuture.getTime() - dateNow.getTime());
	};

	/**
	 * @type {(timestamp: string | number | Date, days: number, hours: number, minutes: number, seconds: number) => number}
	 */
	const addToTimestamp = (timestamp, days, hours, minutes, seconds) => {
		if (!days) {
			days = 0;
		}
		if (!hours) {
			hours = 0;
		}
		if (!minutes) {
			minutes = 0;
		}
		if (!seconds) {
			seconds = 0;
		}
		const date = new Date(timestamp);
		date.setDate(date.getDate() + days);
		date.setHours(date.getHours() + hours);
		date.setMinutes(date.getMinutes() + minutes);
		date.setSeconds(date.getSeconds() + seconds);
		return date.getTime();
	};

	const incompleteFunctions = [];
	const fbcDebug = async (copy) => {
		/** @type {Map<string, string>} */
		const info = new Map();
		info.set("Browser", navigator.userAgent);
		info.set(
			"Game Version",
			`${GameVersion}${
				SUPPORTED_GAME_VERSIONS.includes(GameVersion) ? "" : " (unsupported)"
			}`
		);
		info.set("WebGL Version", GLVersion);
		info.set("FBC Version", FBC_VERSION);
		info.set(
			"FBC Enabled Settings",
			`\n- ${Object.entries(fbcSettings)
				.filter(([k, v]) => v || k === "version")
				.map(([k, v]) => `${k}: ${v.toString()}`)
				.join("\n- ")}`
		);
		if (toySyncState.client?.Connected) {
			info.set(
				"Buttplug.io Devices",
				toySyncState.client.Devices.map(
					(d) => `${d.Name} (${d.AllowedMessages.join(",")})`
				).join(", ")
			);
		}
		info.set(
			"SDK Mods",
			`\n- ${bcModSdk
				.getModsInfo()
				.map((m) => `${m.name} @ ${m.version}`)
				.join("\n- ")}`
		);
		info.set("Incomplete Functions", incompleteFunctions.join(", "));
		info.set("Modified Functions (non-SDK)", deviatingHashes.join(", "));
		info.set(
			"Skipped Functionality for Compatibility",
			`\n- ${skippedFunctionality.join("\n- ")}`
		);
		info.set(
			"Log",
			pastLogs
				.filter((v) => v)
				.map((v) => `[${v.level.toUpperCase()}] ${v.message}`)
				.join("\n")
		);
		const print = Array.from(info)
			.map(([k, v]) => `${k}: ${v}`)
			.join("\n");
		if (copy) {
			fbcChatNotify(
				`${print}\n\n**The report has been copied to your clipboard.**`
			);
			// Not using FBC's debug() to avoid the report ending up on future reports
			console.debug(
				`${print}\n\n**The report has been copied to your clipboard.**`
			);
			await navigator.clipboard.writeText(print);
		}
		if (skippedFunctionality.length > 0) {
			fbcChatNotify(
				"If you are running another addon that modifies the game, but is not listed above, please tell its developer to use https://github.com/Jomshir98/bondage-club-mod-sdk to hook into the game instead. This is a very cheap and easy way for addon developers to almost guarantee compatibility with other addons."
			);
		}
		return print;
	};
	w.fbcDebug = fbcDebug;

	/** @type {(func: () => (Promise<unknown> | unknown), label: string) => Promise<void>} */
	const registerFunction = async (func, label) => {
		incompleteFunctions.push(label);
		try {
			const ret = func();
			if (ret instanceof Promise) {
				await ret;
			}
			incompleteFunctions.splice(incompleteFunctions.indexOf(label), 1);
		} catch (err) {
			/** @type {Error} */
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const e = err;
			logError(`Error in ${label}: ${e?.toString()}\n${e?.stack}`);
		}
	};

	// Delay game processes until registration is complete
	/** @type {"init" | "enable" | "disable"} */
	let funcsRegistered = "init";
	SDK.hookFunction("LoginResponse", HOOK_PRIORITIES.Top, (args, next) => {
		if (funcsRegistered === "init") {
			funcsRegistered = "disable";
		}
		return next(args);
	});
	SDK.hookFunction("GameRun", HOOK_PRIORITIES.Top, (args, next) => {
		if (funcsRegistered === "disable") {
			requestAnimationFrame(GameRun);
			return null;
		}
		return next(args);
	});

	(async function () {
		await waitFor(() => !!w.FUSAM?.present);
		debug("FUSAM present, registering debug methods");
		w.FUSAM.registerDebugMethod("FBC", fbcDebug);
	})();

	await registerFunction(functionIntegrityCheck, "functionIntegrityCheck");
	registerFunction(bceStyles, "bceStyles");
	registerFunction(commonPatches, "commonPatches");
	registerFunction(extendedWardrobe, "extendedWardrobe");
	registerFunction(automaticReconnect, "automaticReconnect");
	registerFunction(hiddenMessageHandler, "hiddenMessageHandler");
	await registerFunction(bceLoadSettings, "bceLoadSettings");
	registerFunction(postSettings, "postSettings");
	registerFunction(appendSocketListenersToInit, "appendSocketListenersToInit");
	debug(fbcSettings);
	registerFunction(discreetMode, "discreetMode");
	registerFunction(beepImprovements, "beepImprovements");
	registerFunction(settingsPage, "settingsPage");
	registerFunction(alternateArousal, "alternateArousal");
	registerFunction(chatAugments, "chatAugments");
	registerFunction(automaticExpressions, "automaticExpressions");
	registerFunction(layeringMenu, "layeringMenu");
	registerFunction(cacheClearer, "cacheClearer");
	registerFunction(lockpickHelp, "lockpickHelp");
	registerFunction(commands, "commands");
	registerFunction(chatRoomOverlay, "chatRoomOverlay");
	registerFunction(privateWardrobe, "privateWardrobe");
	registerFunction(antiGarbling, "antiGarbling");
	registerFunction(autoGhostBroadcast, "autoGhostBroadcast");
	registerFunction(blindWithoutGlasses, "blindWithoutGlasses");
	registerFunction(friendPresenceNotifications, "friendPresenceNotifications");
	registerFunction(accurateTimerInputs, "accurateTimerInputs");
	registerFunction(forcedClubSlave, "forcedClubSlave");
	registerFunction(fpsCounter, "fpsCounter");
	registerFunction(instantMessenger, "instantMessenger");
	registerFunction(autoStruggle, "autoStruggle");
	registerFunction(nicknames, "nicknames");
	registerFunction(leashAlways, "leashAlways");
	registerFunction(toySync, "toySync");
	registerFunction(pastProfiles, "pastProfiles");
	registerFunction(pendingMessages, "pendingMessages");
	registerFunction(hideHiddenItemsIcon, "hideHiddenItemsIcon");
	registerFunction(crafting, "crafting");
	registerFunction(itemAntiCheat, "itemAntiCheat");
	registerFunction(leashFix, "leashFix");
	registerFunction(hookBCXAPI, "hookBCXAPI");
	registerFunction(customContentDomainCheck, "customContentDomainCheck");
	funcsRegistered = "enable";

	// Post ready when in a chat room
	await fbcNotify(`For Better Club v${w.FBC_VERSION} Loaded`);

	Player.FBC = FBC_VERSION;
	if (fbcSettings.checkUpdates) {
		checkUpdate();
	}

	async function functionIntegrityCheck() {
		await waitFor(
			() =>
				GameVersion !== "R0" &&
				typeof ServerIsConnected === "boolean" &&
				ServerIsConnected
		);
		for (const [func, hash] of Object.entries(expectedHashes(GameVersion))) {
			if (!w[func]) {
				logWarn(`Expected function ${func} not found.`);
				continue;
			}
			if (typeof w[func] !== "function") {
				logWarn(`Expected function ${func} is not a function.`);
				continue;
			}
			// eslint-disable-next-line
			const actualHash = SDK.getOriginalHash(func);
			if (actualHash !== hash) {
				logWarn(
					`Function ${func} has been modified before FBC, potential incompatibility: ${actualHash}`
				);
				deviatingHashes.push(func);
			}
		}
	}

	async function checkUpdate() {
		await sleep(5000);
		// Version check
		debug("checking for updates...");
		fetch(
			`https://sidiousious.gitlab.io/bce/bce.user.js?_=${
				(Date.now() / 1000 / 3600) | 0
			}`
		)
			.then((r) => r.text())
			.then((r) => {
				const [, latest] = /@version (.*)$/mu.exec(r);
				debug("latest version:", latest);
				if (latest !== FBC_VERSION) {
					// Create beep
					fbcBeepNotify(
						displayText("Update"),
						displayText(
							`Your version of FBC is outdated and may not be supported. Please update.

	Your version: $Version
	Latest version: $Latest

	Changelog available on GitLab (raw) and Discord:
	- https://gitlab.com/Sidiousious/bce/-/commits/main/
	- $DiscordUrl`,
							{
								$Version: FBC_VERSION,
								$Latest: latest,
								$DiscordUrl: DISCORD_INVITE_URL,
							}
						)
					);
				}
			})
			.catch((e) => {
				logError("FBC update checker error:", e);
			});
	}

	/**
	 * @type {(func: () => boolean, cancelFunc?: () => boolean) => Promise<boolean>}
	 */
	async function waitFor(func, cancelFunc = () => false) {
		while (!func()) {
			if (cancelFunc()) {
				return false;
			}
			// eslint-disable-next-line no-await-in-loop
			await sleep(10);
		}
		return true;
	}

	function commonPatches() {
		// DrawBackNextButton patch to allow overriding hover text position
		patchFunction(
			"DrawBackNextButton",
			{
				"Disabled, ArrowWidth": "Disabled, ArrowWidth, tooltipPosition",
				"DrawButtonHover(Left, Top, Width, Height,":
					"DrawButtonHover(tooltipPosition?.X || Left, tooltipPosition?.Y || Top, tooltipPosition?.Width || Width, tooltipPosition?.Height || Height,",
			},
			"Tooltip positions may be incorrect."
		);

		// CommandExecute patch to fix /whitelistadd and /whitelistremove
		patchFunction(
			"CommandExecute",
			{
				"key.indexOf(CommandsKey + cmd.Tag) == 0)": `key.substring(1) === cmd.Tag)`,
			},
			"Whitelist commands will not work."
		);

		/*
		 * Chat scroll after relog
		 * delay is the number of frames to delay the scroll
		 */
		let delay = 0;
		SDK.hookFunction(
			"ChatRoomCreateElement",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const isRelog = !!RelogChatLog;
				const ret = next(args);
				if (isRelog) {
					delay = 3;
				}
				if (delay > 0) {
					delay--;
					if (delay === 0) {
						ElementScrollToEnd("TextAreaChatLog");
					}
				}
				return ret;
			}
		);

		// Prevent friendlist results from attempting to load into the HTML outside of the appropriate view
		SDK.hookFunction(
			"FriendListLoadFriendList",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (!document.getElementById("FriendList")) {
					return;
				}
				// eslint-disable-next-line consistent-return
				return next(args);
			}
		);

		// Send responses immediately
		SDK.hookFunction(
			"ServerSend",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const ret = next(args);
				ServerSendQueueProcess();
				return ret;
			}
		);

		// Prevent processing of sent messages when disconnected
		SDK.hookFunction(
			"ServerSendQueueProcess",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (!ServerIsConnected) {
					return null;
				}
				return next(args);
			}
		);
	}

	function fpsCounter() {
		let lastFrame = -1;

		/** @type {(ms: number) => number} */
		const expectedFrameTime = (ms) => (1000 / ms) | 0;

		SDK.hookFunction(
			"GameRun",
			HOOK_PRIORITIES.Observe,
			/** @type {(args: DOMHighResTimeStamp[], next: (args: DOMHighResTimeStamp[]) => void) => void} */
			(args, next) => {
				const [time] = args;
				if (lastFrame >= 0 && time > 0) {
					let ftl = 0;
					if (fbcSettings.limitFPSInBackground && !document.hasFocus()) {
						ftl = 10;
					} else if (fbcSettings.limitFPSTo15) {
						ftl = 15;
					} else if (fbcSettings.limitFPSTo30) {
						ftl = 30;
					} else if (fbcSettings.limitFPSTo60) {
						ftl = 60;
					}
					if (lastFrame + expectedFrameTime(ftl) > time) {
						requestAnimationFrame(GameRun);
						return;
					}
				}
				let frameTime = 10000;
				if (time > 0) {
					frameTime = time - lastFrame;
					lastFrame = time;
				}
				next(args);
				if (time > 0 && fbcSettings.fpsCounter) {
					DrawTextFit(
						(Math.round(10000 / frameTime) / 10).toString(),
						15,
						12,
						30,
						"white",
						"black"
					);
				}
			}
		);
	}

	function beepImprovements() {
		if (typeof StartBcUtil === "function") {
			fbcBeepNotify(
				displayText("Incompatibility"),
				displayText(
					"FBC is incompatible with BCUtil. Some functionality from FBC may not work. BCUtil's wardrobe, appearance, and instant messaging functionality are all available within FBC. Go to FBC settings and enable the relevant options, then disable BCUtil to migrate fully to FBC. This beep will appear every time FBC detects BCUtil as having loaded before FBC."
				)
			);
			return;
		}
		// ServerAccountBeep patch for beep notification improvements in chat
		patchFunction(
			"ServerAccountBeep",
			{
				// eslint-disable-next-line no-template-curly-in-string
				'ChatRoomSendLocal(`<a onclick="ServerOpenFriendList()">(${ServerBeep.Message})</a>`);': `{
					const beepId = FriendListBeepLog.length - 1;
					ChatRoomSendLocal(\`<a id="bce-beep-reply-\${beepId}">\u21a9\ufe0f</a><a class="bce-beep-link" id="bce-beep-\${beepId}">(\${ServerBeep.Message}\${ChatRoomHTMLEntities(data.Message ? \`: \${bceStripBeepMetadata(data.Message.length > 150 ? data.Message.substring(0, 150) + "..." : data.Message)}\` : "")})</a>\`);
					if (document.getElementById("bce-beep-reply-" + beepId)) {
						document.getElementById(\`bce-beep-reply-\${beepId}\`).onclick = (e) => {
							e.preventDefault();
							ElementValue("InputChat", \`/beep \${data.MemberNumber} \${ElementValue("InputChat").replace(/^\\/(beep|w) \\S+ ?/u, '')}\`);
							document.getElementById('InputChat').focus();
						};
					}
					if (document.getElementById("bce-beep-" + beepId)) {
						document.getElementById(\`bce-beep-\${beepId}\`).onclick = (e) => {
							e.preventDefault();
							ServerOpenFriendList();
							FriendListModeIndex = 1;
							FriendListShowBeep(\`\${beepId}\`);
						};
					}
				}`,
			},
			"Beeps are not enhanced by FBC."
		);
	}

	function accurateTimerInputs() {
		const timerInputElement = `ElementPosition("${TIMER_INPUT_ID}", 1400, 930, 250, 70);document.getElementById('${TIMER_INPUT_ID}').disabled = false;`;

		const loadLockTimerInput = () => {
			let defaultValue = "0d0h5m0s";
			if (DialogFocusSourceItem?.Property?.RemoveTimer) {
				const parsedTime = timeUntilDate(
					new Date(DialogFocusSourceItem.Property.RemoveTimer)
				);
				defaultValue = `${parsedTime.days}d${parsedTime.hours}h${parsedTime.minutes}m${parsedTime.seconds}s`;
			}
			ElementCreateInput(TIMER_INPUT_ID, "text", defaultValue, "11");
			ElementPosition(TIMER_INPUT_ID, -100, -100, 0, 0);
			// @ts-ignore
			document.getElementById(TIMER_INPUT_ID).disabled = true;
			/** @type {HTMLInputElement} */
			// @ts-ignore
			const timerInput = document.getElementById(TIMER_INPUT_ID);
			timerInput.onchange = function onchange() {
				/** @type {{ value: string }} */
				// @ts-ignore - value does exist on this type
				const { value } = this;

				// Validate input
				if (!/^[0-9]*d?[0-9]*h?[0-9]*m?[0-9]*s?$/u.test(value)) {
					return;
				}

				/** @type {Duration} */
				const additions = {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				};
				value.replace(
					/([0-9]+)[dhms]/gu,
					/** @type {(match: string, number: string) => string} */
					(match, number) => {
						switch (match.slice(-1)) {
							case "d":
								additions.days = parseInt(number);
								if (additions.days > 7) {
									additions.days = 7;
								}
								break;
							case "h":
								additions.hours = parseInt(number);
								if (additions.hours > 23) {
									additions.hours = 23;
								}
								break;
							case "m":
								additions.minutes = parseInt(number);
								if (additions.minutes > 59) {
									additions.minutes = 59;
								}
								break;
							case "s":
								additions.seconds = parseInt(number);
								if (additions.seconds > 59) {
									additions.seconds = 59;
								}
								break;
							default:
								break;
						}
						return "";
					}
				);
				DialogFocusSourceItem.Property.RemoveTimer = addToTimestamp(
					Date.now(),
					additions.days,
					additions.hours,
					additions.minutes,
					additions.seconds
				);
				if (
					DialogFocusSourceItem.Property.RemoveTimer - Date.now() >
					(DialogFocusItem?.Asset?.MaxTimer || 604800) * 1000
				) {
					DialogFocusSourceItem.Property.RemoveTimer =
						Date.now() + (DialogFocusItem?.Asset?.MaxTimer || 604800) * 1000;
				}
				if (CurrentScreen === "ChatRoom") {
					ChatRoomCharacterItemUpdate(
						CharacterGetCurrent(),
						DialogFocusSourceItem.Asset.Group.Name
					);
					const until = timeUntilDate(
						new Date(DialogFocusSourceItem.Property.RemoveTimer)
					);
					let timeMessage = "";
					if (DialogFocusSourceItem.Property.ShowTimer) {
						timeMessage =
							" to $days days, $hours hours, $minutes minutes, and $seconds seconds";
					}
					fbcSendAction(
						displayText(
							`$PlayerName changed the timer on the $ItemName on $TargetName's $GroupName ${timeMessage}`,
							{
								$PlayerName: CharacterNickname(Player),
								$ItemName: DialogFocusItem?.Asset?.Description?.toLowerCase(),
								$TargetName: CharacterNickname(CharacterGetCurrent()),
								$GroupName:
									CharacterGetCurrent()?.FocusGroup?.Description?.toLowerCase(),
								$days: until.days.toString(),
								$hours: until.hours.toString(),
								$minutes: until.minutes.toString(),
								$seconds: until.seconds.toString(),
							}
						)
					);
				}
			};
		};

		// Owner/Lover locks
		patchFunction(
			"InventoryItemMiscOwnerTimerPadlockDraw",
			{
				"// Draw buttons to add/remove time if available": `if (fbcSettingValue("accurateTimerLocks") && Player.CanInteract() && validator(C)) {${timerInputElement}} else`,
			},
			"Accurate timer inputs are not available for owner/lover locks."
		);
		patchFunction(
			"InventoryItemMiscOwnerTimerPadlockClick",
			{
				"InventoryItemMiscOwnerTimerPadlockAdd(OwnerTimerChooseList[OwnerTimerChooseIndex] * 3600);":
					'if (!fbcSettingValue("accurateTimerLocks")) InventoryItemMiscOwnerTimerPadlockAdd(OwnerTimerChooseList[OwnerTimerChooseIndex] * 3600);',
			},
			"Accurate timer inputs are not available for owner/lover locks."
		);

		const timerLoadMethods = /** @type {const} */ ([
			"InventoryItemMiscMistressTimerPadlockLoad",
			"InventoryItemMiscOwnerTimerPadlockLoad",
			"InventoryItemMiscTimerPasswordPadlockLoad",
		]);
		const timerExitMethods = /** @type {const} */ ([
			"InventoryItemMiscMistressTimerPadlockExit",
			"InventoryItemMiscOwnerTimerPadlockExit",
			"InventoryItemMiscTimerPasswordPadlockExit",
		]);

		for (const fn of timerLoadMethods) {
			SDK.hookFunction(
				fn,
				HOOK_PRIORITIES.AddBehaviour,
				// eslint-disable-next-line no-loop-func
				(args, next) => {
					const ret = next(args);
					if (fbcSettings.accurateTimerLocks) {
						loadLockTimerInput();
					}
					return ret;
				}
			);
		}

		for (const fn of timerExitMethods) {
			SDK.hookFunction(
				fn,
				HOOK_PRIORITIES.AddBehaviour,
				// eslint-disable-next-line no-loop-func
				(args, next) => {
					const ret = next(args);
					if (fbcSettings.accurateTimerLocks) {
						ElementRemove(TIMER_INPUT_ID);
					}
					return ret;
				}
			);
		}

		// Password timer
		patchFunction(
			"InventoryItemMiscTimerPasswordPadlockDraw",
			{
				"// Draw buttons to add/remove time if available": `if (fbcSettingValue("accurateTimerLocks") && Player.CanInteract() && Player.MemberNumber == Property.LockMemberNumber) {${timerInputElement}} else`,
			},
			"Accurate timer inputs are not available for password locks."
		);
		patchFunction(
			"InventoryItemMiscTimerPasswordPadlockClick",
			{
				"InventoryItemMiscTimerPasswordPadlockAdd(PasswordTimerChooseList[PasswordTimerChooseIndex] * 60, false);":
					'if (!fbcSettingValue("accurateTimerLocks")) InventoryItemMiscTimerPasswordPadlockAdd(PasswordTimerChooseList[PasswordTimerChooseIndex] * 60, false);',
			},
			"Accurate timer inputs are not available for password locks."
		);

		// Mistress locks
		patchFunction(
			"InventoryItemMiscMistressTimerPadlockDraw",
			{
				"// Draw buttons to add/remove time if available": `if (fbcSettingValue("accurateTimerLocks") && Player.CanInteract() && (LogQuery("ClubMistress", "Management") || (Player.MemberNumber == DialogFocusSourceItem.Property.LockMemberNumber))) {${timerInputElement}} else`,
			},
			"Accurate timer inputs are not available for mistress locks."
		);
		patchFunction(
			"InventoryItemMiscMistressTimerPadlockClick",
			{
				"InventoryItemMiscMistressTimerPadlockAdd(MistressTimerChooseList[MistressTimerChooseIndex] * 60, false);":
					'if (!fbcSettingValue("accurateTimerLocks")) InventoryItemMiscMistressTimerPadlockAdd(MistressTimerChooseList[MistressTimerChooseIndex] * 60, false);',
			},
			"Accurate timer inputs are not available for mistress locks."
		);
	}

	async function hookBCXAPI() {
		await waitFor(() => !!w.bcx);
		BCX = w.bcx?.getModApi("FBC");
	}

	// Load BCX
	/** @type {(addon: keyof typeof addonTypes, source: string) => Promise<boolean>} */
	async function loadExternalAddon(addon, source) {
		await waitFor(settingsLoaded);

		if (bcModSdk.getModsInfo().some((mod) => mod.name === addon)) {
			addonTypes[addon] = "external";
			debug(`${addon} already loaded, skipping loadExternalAddon()`);
			hookBCXAPI();
			return false;
		}

		const sourceRequestUrl = `${source}?v=${Date.now()}`;

		logInfo("Loading", addon, "from", source, sourceRequestUrl);
		await fetch(sourceRequestUrl)
			.then((resp) => resp.text())
			.then((resp) => {
				resp = resp.replace(
					/sourceMappingURL=.*?.map/u,
					`sourceMappingURL=${source}.map`
				);
				eval?.(resp);
			});
		logInfo("Loaded", addon);
		return true;
	}

	async function commands() {
		await waitFor(() => !!Commands);
		debug("registering additional commands");

		/** @type {Command[]} */
		const cmds = [
			{
				Tag: "fbcdebug",
				Description: displayText(
					"Get debug information to share with developers."
				),
				Action: () => fbcDebug(true),
			},
			{
				Tag: "fbcchangelog",
				Description: displayText("Show recent FBC changelog"),
				Action: () => {
					fbcChatNotify(fbcChangelog);
				},
			},
			{
				Tag: "exportlooks",
				Description: displayText(
					"[target member number]: Copy your or another player's appearance in a format that can be imported with FBC or BCX"
				),
				Action: async (_, _command, args) => {
					const [target] = args;
					/** @type {Character} */
					let targetCharacter = null;
					if (!target) {
						targetCharacter = Player;
					} else {
						targetCharacter = Character.find(
							(c) => c.MemberNumber === parseInt(target)
						);
					}
					if (!targetCharacter) {
						logInfo("Could not find member", target);
						return;
					}
					const [bindSubmit] = await showAsyncModal({
						prompt: displayText("Include binds?"),
						buttons: {
							cancel: "No",
							submit: "Yes",
						},
					});
					const includeBinds = bindSubmit === "submit";
					let includeLocks = false;
					if (includeBinds) {
						const [lockSubmit] = await showAsyncModal({
							prompt: displayText("Include locks?"),
							buttons: {
								cancel: "No",
								submit: "Yes",
							},
						});
						includeLocks = lockSubmit === "submit";
					}
					const [baseSubmit] = await showAsyncModal({
						prompt: displayText("Include height, body type, hair, etc?"),
						buttons: {
							cancel: "No",
							submit: "Yes",
						},
					});
					const includeBase = baseSubmit === "submit";

					const base = targetCharacter.Appearance.filter(
						(a) => a.Asset.Group.IsDefault && !a.Asset.Group.Clothing
					);
					const clothes = targetCharacter.Appearance.filter(
						(a) =>
							a.Asset.Group.Category === "Appearance" && a.Asset.Group.Clothing
					);
					const binds = targetCharacter.Appearance.filter(
						(a) =>
							a.Asset.Group.Category === "Item" &&
							!["ItemNeck", "ItemNeckAccessories"].includes(
								a.Asset.Group.Name
							) &&
							!a.Asset.Group.BodyCosplay
					);

					const appearance = [...clothes];
					if (includeBinds) {
						appearance.push(...binds);
					}
					if (includeBase) {
						appearance.push(...base);
					}

					/** @type {ItemBundle[]} */
					const looks = appearance.map((i) => {
						const property = i.Property ? { ...i.Property } : {};
						if (!includeLocks && property.LockedBy) {
							delete property.LockedBy;
							delete property.LockMemberNumber;
						}
						if (property?.LockMemberNumber) {
							property.LockMemberNumber = Player.MemberNumber;
						}
						return {
							Group: i.Asset.Group.Name,
							Name: i.Asset.Name,
							Color: i.Color,
							Difficulty: i.Difficulty,
							Property: property,
							Craft: i.Craft,
						};
					});

					const targetName = targetCharacter.IsPlayer()
						? "yourself"
						: CharacterNickname(targetCharacter);

					const exportString = LZString.compressToBase64(JSON.stringify(looks));

					showAsyncModal({
						prompt: displayText(displayText("Copy the looks string below")),
						input: {
							initial: exportString,
							readonly: true,
							type: "textarea",
						},
						buttons: {
							submit: "Done",
						},
					});

					await navigator.clipboard.writeText(exportString);
					fbcChatNotify(
						displayText(`Exported looks for $TargetName copied to clipboard`, {
							$TargetName: targetName,
						})
					);
				},
			},
			{
				Tag: "importlooks",
				Description: displayText(
					"Import looks from a string (BCX or FBC export)"
				),
				Action: () => {
					if (!Player.CanChange() || !OnlineGameAllowChange()) {
						fbcChatNotify(
							displayText(
								"You cannot change your appearance while bound or during online games, such as LARP."
							)
						);
						return;
					}

					showModal({
						prompt: displayText("Paste your looks here"),
						input: {
							initial: "",
							readonly: false,
							type: "textarea",
						},
						callback: (act, bundleString) => {
							if (act !== "submit") {
								return;
							}
							if (!bundleString) {
								fbcChatNotify(displayText("No looks string provided"));
								return;
							}
							try {
								const bundle = /** @type {ItemBundle[]} */ (
									bundleString.startsWith("[")
										? JSON.parse(bundleString)
										: JSON.parse(LZString.decompressFromBase64(bundleString))
								);

								if (
									!Array.isArray(bundle) ||
									bundle.length === 0 ||
									!bundle[0].Group
								) {
									throw new Error("Invalid bundle");
								}

								// Keep items you cannot unlock in your appearance
								for (const item of Player.Appearance) {
									if (
										item.Property?.LockedBy &&
										!DialogCanUnlock(Player, item)
									) {
										/** @type {ItemBundle} */
										const itemBundle = {
											Group: item.Asset.Group.Name,
											Name: item.Asset.Name,
											Color: item.Color,
											Difficulty: item.Difficulty,
											Property: item.Property,
										};
										const idx = bundle.findIndex(
											(v) => v.Group === item.Asset.Group.Name
										);
										if (idx < 0) {
											bundle.push(itemBundle);
										} else {
											bundle[idx] = itemBundle;
										}
									}
								}
								ServerAppearanceLoadFromBundle(
									Player,
									"Female3DCG",
									bundle,
									Player.MemberNumber
								);
								ChatRoomCharacterUpdate(Player);
								fbcChatNotify(displayText("Applied looks"));
							} catch (e) {
								console.error(e);
								fbcChatNotify(displayText("Could not parse looks"));
							}
						},
					});
				},
			},
			{
				Tag: "beep",
				Description: displayText("[membernumber] [message]: beep someone"),
				Action: (_, command, args) => {
					const [target] = args,
						[, , ...message] = command.split(" "),
						msg = message?.join(" ");
					if (!target || !msg || !/^\d+$/u.test(target)) {
						fbcChatNotify(displayText(`beep target or message not provided`));
						return;
					}
					const targetMemberNumber = parseInt(target);
					if (!Player.FriendList.includes(targetMemberNumber)) {
						fbcChatNotify(
							displayText(`$Target is not in your friend list`, {
								$Target: target,
							})
						);
						return;
					}
					ServerSend("AccountBeep", {
						BeepType: "",
						MemberNumber: targetMemberNumber,
						Message: msg,
						IsSecret: true,
					});
					FriendListBeepLog.push({
						MemberNumber: targetMemberNumber,
						MemberName: Player.FriendNames.get(targetMemberNumber),
						ChatRoomName: null,
						Sent: true,
						Private: false,
						Time: new Date(),
						Message: msg,
					});
					const beepId = FriendListBeepLog.length - 1;
					const link = document.createElement("a");
					link.href = `#beep-${beepId}`;
					link.onclick = (e) => {
						e.preventDefault();
						ServerOpenFriendList();
						FriendListModeIndex = 1;
						FriendListShowBeep(beepId);
					};
					link.textContent = displayText(
						"(Beep to $Name ($Number): $Message)",
						{
							$Name: Player.FriendNames.get(targetMemberNumber),
							$Number: targetMemberNumber.toString(),
							$Message: msg.length > 150 ? `${msg.substring(0, 150)}...` : msg,
						}
					);
					link.classList.add("bce-beep-link");
					fbcChatNotify(link);
				},
			},
			{
				Tag: "w",
				Description: displayText(
					"[target name] [message]: whisper the target player. Use first name only. Finds the first person in the room with a matching name, left-to-right, top-to-bottom."
				),
				Action: (_, command, args) => {
					const [target] = args;
					const [, , ...message] = command.split(" ");
					const msg = message?.join(" ");
					/** @type {Character[]} */
					const targetMembers = findDrawnCharacters(target);
					if (!target || !targetMembers || targetMembers.length === 0) {
						fbcChatNotify(`Whisper target not found: ${target}`);
					} else if (targetMembers.length > 1) {
						fbcChatNotify(
							displayText(
								"Multiple whisper targets found: $Targets. You can still whisper the player by clicking their name or by using their member number.",
								{
									$Targets: targetMembers
										.map((c) => `${CharacterNickname(c)} (${c.MemberNumber})`)
										.join(", "),
								}
							)
						);
					} else if (!msg) {
						fbcChatNotify(displayText(`No message provided`));
					} else {
						const targetMemberNumber = targetMembers[0].MemberNumber;
						const originalTarget = ChatRoomTargetMemberNumber;
						ChatRoomTargetMemberNumber = targetMemberNumber;
						ElementValue(
							"InputChat",
							`${
								msg.length > 0 && [".", "/"].includes(msg[0]) ? "\u200b" : ""
							}${msg}`
						);
						// True to skip history
						ChatRoomSendChat(true);
						ChatRoomTargetMemberNumber = originalTarget;
					}
				},
			},
			{
				Tag: "versions",
				Description: displayText(
					"show versions of the club, FBC, BCX and other mods in use by players"
				),
				Action: (_, _command, args) => {
					/** @type {(character: Character) => string} */
					const getCharacterModInfo = (character) =>
						`${CharacterNickname(character)} (${character.MemberNumber}) club ${
							character.OnlineSharedSettings?.GameVersion
						}${
							w.bcx?.getCharacterVersion(character.MemberNumber)
								? ` BCX ${bcx.getCharacterVersion(character.MemberNumber)}`
								: ""
						}${
							character.FBC
								? `\nFBC v${
										character.FBC
								  } Alt Arousal: ${character.BCEArousal?.toString()}`
								: ""
						}${
							character.FBCOtherAddons &&
							character.FBCOtherAddons.some(
								(mod) => !["BCX", "FBC"].includes(mod.name)
							)
								? `\nOther Addons:\n- ${character.FBCOtherAddons.filter(
										(mod) => !["BCX", "FBC"].includes(mod.name)
								  )
										.map(
											(mod) =>
												`${mod.name} v${mod.version} ${mod.repository ?? ""}`
										)
										.join("\n- ")}`
								: ""
						}`;

					const targets =
						args.length > 0 ? findDrawnCharacters(args[0], true) : [];

					const printList =
						targets.length > 0 ? targets : ChatRoomCharacterDrawlist;

					const versionOutput = printList
						.map(getCharacterModInfo)
						.filter((info) => info)
						.join("\n\n");

					fbcChatNotify(versionOutput);
					debug(versionOutput);
				},
			},
		];

		// Skip history patch for /w
		patchFunction(
			"ChatRoomSendChat",
			{
				"ChatRoomSendChat()": `ChatRoomSendChat(skipHistory)`,
				"ChatRoomLastMessage.push(msg);": `if (!skipHistory) ChatRoomLastMessage.push(msg);`,
			},
			"Whispers sent via /w will trigger items such as the automated shock collar and futuristic training belt."
		);

		for (const c of cmds) {
			if (Commands.some((a) => a.Tag === c.Tag)) {
				debug("already registered", c);
				continue;
			}
			Commands.push(c);
		}
	}

	// Create settings page
	async function settingsPage() {
		await waitFor(() => !!PreferenceSubscreenList);

		debug("initializing");

		const settingsPerPage = 8,
			settingsYIncrement = 70,
			settingsYStart = 225;

		const settingsPageCount = (category) =>
			Math.ceil(
				Object.values(defaultSettings).filter((v) => v.category === category)
					.length / settingsPerPage
			);

		const discordInvitePosition = /** @type {const} */ ([1500, 60, 250, 50]);
		const licensePosition = /** @type {const} */ ([1500, 120, 250, 50]);
		const websitePosition = /** @type {const} */ ([1240, 60, 250, 50]);
		let currentPageNumber = 0;

		/** @type {SettingsCategory | null} */
		let currentCategory = null;
		let currentSetting = "";
		/**
		 * Excludes hidden
		 * @type {SettingsCategory[]}
		 */
		const settingsCategories = [
			"chat",
			"activities",
			"appearance",
			"immersion",
			"performance",
			"misc",
			"cheats",
			"addons",
			"buttplug",
		];
		const settingCategoryLabels = /** @type {const} */ ({
			chat: "Chat & Social",
			activities: "Activities & Arousal",
			appearance: "Appearance & Wardrobe",
			immersion: "Immersion & Anti-Cheat",
			performance: "Performance",
			misc: "Misc",
			cheats: "Cheats",
			addons: "Other Addons",
			buttplug: "Buttplug.io Toys",
			hidden: "",
		});

		const vibratingSlots = [
			"None",
			...new Set(
				Asset.filter(
					(a) =>
						a.AllowEffect?.includes("Vibrating") ||
						a.AllowEffect?.includes("Egged")
				).map((a) => a.Group.Name)
			),
		];

		const scanButtonPosition = /** @type {const} */ ([1650, 225, 150, 50]);

		const currentDefaultSettings = (category) =>
			Object.entries(defaultSettings).filter(
				([, v]) => v.category === category && v.value === !!v.value
			);

		w.PreferenceSubscreenBCESettingsLoad = function () {
			currentPageNumber = 0;
		};
		w.PreferenceSubscreenBCESettingsExit = function () {
			bceSaveSettings();
			PreferenceSubscreen = "";
			PreferenceMessage = "";
		};
		w.PreferenceSubscreenBCESettingsRun = function () {
			w.MainCanvas.getContext("2d").textAlign = "left";
			DrawText(
				displayText("For Better Club Settings (formerly BCE)"),
				300,
				125,
				"Black",
				"Gray"
			);
			DrawButton(...discordInvitePosition, "", "White", "");
			DrawText(
				displayText("Join Discord"),
				discordInvitePosition[0] + 20,
				discordInvitePosition[1] + discordInvitePosition[3] / 2,
				"Black",
				""
			);
			DrawButton(...licensePosition, "", "White", "");
			DrawText(
				displayText("License"),
				licensePosition[0] + 20,
				licensePosition[1] + licensePosition[3] / 2,
				"Black",
				""
			);
			DrawButton(...websitePosition, "", "White", "");
			DrawText(
				displayText("Information"),
				websitePosition[0] + 20,
				websitePosition[1] + websitePosition[3] / 2,
				"Black",
				""
			);
			DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");

			if (currentCategory) {
				let y = settingsYStart;
				for (const [settingName, defaultSetting] of currentDefaultSettings(
					currentCategory
				).slice(
					currentPageNumber * settingsPerPage,
					currentPageNumber * settingsPerPage + settingsPerPage
				)) {
					DrawCheckbox(
						300,
						y,
						64,
						64,
						displayText(defaultSetting.label),
						!!fbcSettings[settingName],
						false,
						currentSetting === settingName ? "Red" : "Black"
					);
					y += settingsYIncrement;
				}
				if (currentCategory === "buttplug") {
					DrawText(
						displayText(
							"This page allows configuration of the synchronization of bluetooth connected toys."
						),
						300,
						350,
						"Black",
						"Gray"
					);
					if (fbcSettings.toySync) {
						if (!toySyncState.client?.Connected) {
							DrawText(
								displayText("Still connecting or connection failed..."),
								300,
								450,
								"Black",
								"Gray"
							);
						} else {
							w.MainCanvas.getContext("2d").textAlign = "center";
							DrawButton(
								...scanButtonPosition,
								displayText("Scan"),
								toySyncState.client.isScanning ? "Grey" : "White",
								"",
								toySyncState.client.isScanning ? "Already scanning" : null,
								toySyncState.client.isScanning
							);
							w.MainCanvas.getContext("2d").textAlign = "left";
							DrawText(displayText("Device Name"), 300, 420, "Black", "Gray");
							DrawText(
								displayText("Synchronized Slot"),
								800,
								420,
								"Black",
								"Gray"
							);
							y = 500;
							for (const d of toySyncState.client.Devices.filter((dev) =>
								dev.AllowedMessages.includes(0)
							)) {
								let deviceSettings = toySyncState.deviceSettings.get(d.Name);
								if (!deviceSettings) {
									deviceSettings = {
										Name: d.Name,
										SlotName: "None",
									};
									toySyncState.deviceSettings.set(d.Name, deviceSettings);
								}
								const currentIdx = vibratingSlots.indexOf(
									deviceSettings.SlotName
								);
								let nextIdx = 0,
									previousIdx = 0;
								if (currentIdx <= 0) {
									previousIdx = vibratingSlots.length - 1;
								} else {
									previousIdx = currentIdx - 1;
								}
								if (currentIdx === vibratingSlots.length - 1) {
									nextIdx = 0;
								} else {
									nextIdx = currentIdx + 1;
								}
								DrawText(d.Name, 300, y, "Black", "Gray");

								w.MainCanvas.getContext("2d").textAlign = "center";
								DrawBackNextButton(
									800,
									y - 32,
									450,
									64,
									displayText(deviceSettings.SlotName),
									"white",
									"",
									() => displayText(vibratingSlots[previousIdx]),
									() => displayText(vibratingSlots[nextIdx])
								);
								w.MainCanvas.getContext("2d").textAlign = "left";
								y += settingsYIncrement;
								if (y > 950) {
									break;
								}
							}
						}
					}
				} else {
					DrawText(
						displayText("Click on a setting to see its description"),
						300,
						160,
						"Gray",
						"Silver"
					);

					if (isDefaultSettingKey(currentSetting)) {
						drawTooltip(
							300,
							830,
							1400,
							displayText(defaultSettings[currentSetting].description),
							"left"
						);
					}

					DrawText(
						`${currentPageNumber + 1} / ${settingsPageCount(currentCategory)}`,
						1700,
						230,
						"Black",
						"Gray"
					);
					DrawButton(1815, 180, 90, 90, "", "White", "Icons/Next.png");
				}
			} else {
				let y = settingsYStart;
				for (const category of settingsCategories) {
					DrawButton(300, y, 400, 64, "", "White");
					DrawTextFit(
						displayText(settingCategoryLabels[category]),
						310,
						y + 32,
						380,
						"Black"
					);
					y += settingsYIncrement;
				}
			}
			w.MainCanvas.getContext("2d").textAlign = "center";
		};
		// eslint-disable-next-line complexity
		w.PreferenceSubscreenBCESettingsClick = function () {
			let y = settingsYStart;
			if (MouseIn(1815, 75, 90, 90)) {
				if (currentCategory === null) {
					PreferenceSubscreenBCESettingsExit();
				} else {
					currentCategory = null;
				}
			} else if (MouseIn(...licensePosition)) {
				open(BCE_LICENSE, "_blank");
			} else if (MouseIn(...discordInvitePosition)) {
				open(DISCORD_INVITE_URL, "_blank");
			} else if (MouseIn(...websitePosition)) {
				open(WEBSITE_URL, "_blank");
			} else if (currentCategory !== null) {
				if (MouseIn(1815, 180, 90, 90) && currentCategory !== "buttplug") {
					currentPageNumber += 1;
					currentPageNumber %= settingsPageCount(currentCategory);
				} else {
					for (const [settingName, defaultSetting] of currentDefaultSettings(
						currentCategory
					).slice(
						currentPageNumber * settingsPerPage,
						currentPageNumber * settingsPerPage + settingsPerPage
					)) {
						if (MouseIn(300, y, 64, 64)) {
							fbcSettings[settingName] = !fbcSettings[settingName];
							defaultSetting.sideEffects(fbcSettings[settingName]);
						} else if (MouseIn(364, y, 1000, 64)) {
							currentSetting = settingName;
							debug("currentSetting", currentSetting);
						}
						y += settingsYIncrement;
					}
				}
				if (currentCategory === "buttplug" && toySyncState.client?.Connected) {
					if (MouseIn(...scanButtonPosition)) {
						if (!toySyncState.client.isScanning) {
							toySyncState.client.startScanning();
						}
						return;
					}
					y = 500;
					for (const d of toySyncState.client.Devices.filter((dev) =>
						dev.AllowedMessages.includes(0)
					)) {
						if (!MouseIn(800, y - 32, 450, 64)) {
							y += settingsYIncrement;
							continue;
						}
						const deviceSettings = toySyncState.deviceSettings.get(d.Name);
						const currentIdx = vibratingSlots.indexOf(deviceSettings.SlotName);
						let nextIdx = 0,
							previousIdx = 0;
						if (currentIdx <= 0) {
							previousIdx = vibratingSlots.length - 1;
						} else {
							previousIdx = currentIdx - 1;
						}
						if (currentIdx === vibratingSlots.length - 1) {
							nextIdx = 0;
						} else {
							nextIdx = currentIdx + 1;
						}

						if (MouseX < 800 + 450 / 2) {
							deviceSettings.SlotName = vibratingSlots[previousIdx];
						} else {
							deviceSettings.SlotName = vibratingSlots[nextIdx];
						}

						y += settingsYIncrement;
						if (y > 950) {
							break;
						}
					}
				}
			} else {
				for (const category of settingsCategories) {
					if (MouseIn(300, y, 400, 64)) {
						currentCategory = category;
						currentPageNumber = 0;
						break;
					}
					y += settingsYIncrement;
				}
			}
		};

		SDK.hookFunction(
			"DrawButton",
			HOOK_PRIORITIES.ModifyBehaviourMedium,
			(args, next) => {
				// 7th argument is image URL
				switch (args[6]) {
					case "Icons/BCESettings.png":
						args[6] = ICONS.LOGO;
						break;
					default:
						break;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"TextGet",
			HOOK_PRIORITIES.ModifyBehaviourHigh,
			(args, next) => {
				switch (args[0]) {
					case "HomepageBCESettings":
						return displayText("FBC Settings");
					default:
						return next(args);
				}
			}
		);
		PreferenceSubscreenList.push("BCESettings");

		/** @type {(e: KeyboardEvent) => void} */
		function keyHandler(e) {
			if (e.key === "Escape" && currentCategory !== null) {
				currentCategory = null;
				e.stopPropagation();
				e.preventDefault();
			}
		}

		document.addEventListener("keydown", keyHandler, true);
		document.addEventListener("keypress", keyHandler, true);
	}

	async function lockpickHelp() {
		await waitFor(() => !!StruggleMinigames);

		/** @type {(s: number) => () => number} */
		const newRand = (s) =>
			function () {
				s = Math.sin(s) * 10000;
				return s - Math.floor(s);
			};

		const pinSpacing = 100,
			pinWidth = 200,
			x = 1575,
			y = 300;

		SDK.hookFunction(
			"StruggleLockPickDraw",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				if (fbcSettings.lockpick && w.StruggleLockPickOrder) {
					const seed = parseInt(StruggleLockPickOrder.join(""));
					const rand = newRand(seed);
					const threshold = SkillGetWithRatio(Player, "LockPicking") / 20;
					const hints = StruggleLockPickOrder.map((a) => {
						const r = rand();
						return r < threshold ? a : false;
					});
					for (let p = 0; p < hints.length; p++) {
						// Replicates pin rendering in the game Struggle.js
						const xx =
							x - pinWidth / 2 + (0.5 - hints.length / 2 + p) * pinSpacing;
						if (hints[p] !== false) {
							DrawText(
								`${StruggleLockPickOrder.indexOf(p) + 1}`,
								xx,
								y,
								"blue"
							);
						}
					}
				}
				return next(args);
			}
		);
		debug("hooking struggle for lockpick cheat draw", StruggleMinigames);
		StruggleMinigames.LockPick.Draw = StruggleLockPickDraw;
	}

	function automaticReconnect() {
		const localStoragePasswordsKey = "bce.passwords";
		w.bceUpdatePasswordForReconnect = () => {
			let name = "";
			if (CurrentScreen === "Login") {
				name = ElementValue("InputName").toUpperCase();
			} else if (CurrentScreen === "Relog") {
				name = Player.AccountName;
			}

			let passwords = /** @type {Passwords} */ (
				JSON.parse(localStorage.getItem(localStoragePasswordsKey))
			);
			if (!passwords) {
				passwords = {};
			}
			passwords[name] = ElementValue("InputPassword");
			localStorage.setItem(localStoragePasswordsKey, JSON.stringify(passwords));
		};

		w.bceClearPassword = (accountname) => {
			const passwords = /** @type {Passwords} */ (
				JSON.parse(localStorage.getItem(localStoragePasswordsKey))
			);
			if (
				!passwords ||
				!Object.prototype.hasOwnProperty.call(passwords, accountname)
			) {
				return;
			}
			delete passwords[accountname];
			localStorage.setItem(localStoragePasswordsKey, JSON.stringify(passwords));
		};

		let lastClick = Date.now();

		async function loginCheck() {
			await waitFor(() => CurrentScreen === "Login");

			const loadPasswords = () =>
				/** @type {Passwords} */ (
					JSON.parse(localStorage.getItem(localStoragePasswordsKey))
				);

			/** @type {{ passwords: Passwords, posMaps: Record<string, string> }} */
			const loginData = {
				passwords: loadPasswords() || {},
				posMaps: {},
			};

			SDK.hookFunction("LoginRun", HOOK_PRIORITIES.Top, (args, next) => {
				const ret = next(args);
				if (Object.keys(loginData.passwords).length > 0) {
					DrawText(
						displayText("Saved Logins (FBC)"),
						170,
						35,
						"White",
						"Black"
					);
				}
				DrawButton(1250, 385, 180, 60, displayText("Save (FBC)"), "White");

				let y = 60;
				for (const user in loginData.passwords) {
					if (
						!Object.prototype.hasOwnProperty.call(loginData.passwords, user)
					) {
						continue;
					}
					loginData.posMaps[y] = user;
					DrawButton(10, y, 350, 60, user, "White");
					DrawButton(355, y, 60, 60, "X", "White");
					y += 70;
				}
				return ret;
			});

			SDK.hookFunction("LoginClick", HOOK_PRIORITIES.Top, (args, next) => {
				const ret = next(args);
				if (MouseIn(1250, 385, 180, 60)) {
					bceUpdatePasswordForReconnect();
					loginData.posMaps = {};
					loginData.passwords = loadPasswords() || {};
				}
				const now = Date.now();
				if (now - lastClick < 150) {
					return ret;
				}
				lastClick = now;
				for (const pos in loginData.posMaps) {
					if (!Object.prototype.hasOwnProperty.call(loginData.posMaps, pos)) {
						continue;
					}
					const idx = parseInt(pos);
					if (MouseIn(10, idx, 350, 60)) {
						ElementValue("InputName", loginData.posMaps[idx]);
						ElementValue(
							"InputPassword",
							loginData.passwords[loginData.posMaps[idx]]
						);
					} else if (MouseIn(355, idx, 60, 60)) {
						bceClearPassword(loginData.posMaps[idx]);
						loginData.posMaps = {};
						loginData.passwords = loadPasswords() || {};
					}
				}
				return ret;
			});

			CurrentScreenFunctions.Run = LoginRun;
			CurrentScreenFunctions.Click = LoginClick;
		}
		loginCheck();

		let breakCircuit = false;
		let breakCircuitFull = false;

		async function relog() {
			if (
				!Player?.AccountName ||
				!ServerIsConnected ||
				LoginSubmitted ||
				!ServerSocket.connected ||
				breakCircuit ||
				breakCircuitFull ||
				!fbcSettings.relogin
			) {
				return;
			}
			breakCircuit = true;
			let passwords = /** @type {Passwords} */ (
				JSON.parse(localStorage.getItem(localStoragePasswordsKey))
			);
			debug("Attempting to log in again as", Player.AccountName);
			if (!passwords) {
				passwords = {};
			}
			if (!passwords[Player.AccountName]) {
				logWarn("No saved credentials for account", Player.AccountName);
				return;
			}
			LoginSetSubmitted();
			ServerSend("AccountLogin", {
				AccountName: Player.AccountName,
				Password: passwords[Player.AccountName],
			});
			if (
				!(await waitFor(
					() => CurrentScreen !== "Relog",
					() => !breakCircuit
				))
			) {
				logWarn("Relogin failed, circuit was restored");
			}
			await sleep(500);
			SDK.callOriginal("ServerAccountBeep", [
				{
					MemberNumber: Player.MemberNumber,
					MemberName: "VOID",
					ChatRoomName: "VOID",
					Private: true,
					Message: displayText("Reconnected!"),
					ChatRoomSpace: "",
				},
			]);
		}

		SDK.hookFunction("RelogRun", HOOK_PRIORITIES.Top, (args, next) => {
			const forbiddenReasons = ["ErrorDuplicatedLogin"];
			if (!forbiddenReasons.includes(LoginErrorMessage)) {
				relog();
			} else if (!breakCircuit) {
				SDK.callOriginal("ServerAccountBeep", [
					{
						MemberNumber: Player.MemberNumber,
						MemberName: Player.Name,
						ChatRoomName: displayText("ERROR"),
						Private: true,
						Message: displayText(
							"Signed in from a different location! Refresh the page to re-enable relogin in this tab."
						),
						ChatRoomSpace: "",
					},
				]);
				breakCircuit = true;
				breakCircuitFull = true;
			}
			return next(args);
		});

		SDK.hookFunction("RelogExit", HOOK_PRIORITIES.Top, (args, next) => {
			breakCircuit = false;
			breakCircuitFull = false;
			return next(args);
		});

		registerSocketListener("connect", () => {
			breakCircuit = false;
		});

		SDK.hookFunction(
			"ServerDisconnect",
			HOOK_PRIORITIES.ModifyBehaviourHigh,
			/** @type {(args: [unknown, boolean], next: (args: [unknown, boolean]) => void) => void} */
			(args, next) => {
				const [, force] = args;
				args[1] = false;
				const ret = next(args);
				if (force) {
					logWarn("Forcefully disconnected", args);
					ServerSocket.disconnect();
					if (
						isString(args[0]) &&
						["ErrorRateLimited", "ErrorDuplicatedLogin"].includes(args[0])
					) {
						// Reconnect after 3-6 seconds if rate limited
						logWarn("Reconnecting...");
						setTimeout(() => {
							logWarn("Connecting...");
							ServerInit();
						}, 3000 + Math.round(Math.random() * 3000));
					} else {
						logWarn("Disconnected.");
					}
				}
				return ret;
			}
		);
	}

	function bceStyles() {
		const css = /* CSS */ `
		.bce-beep-link {
			text-decoration: none;
		}
		#TextAreaChatLog .bce-notification,
		#TextAreaChatLog .bce-notification {
			background-color: #D696FF;
			color: black;
		}
		#TextAreaChatLog[data-colortheme="dark"] .bce-notification,
		#TextAreaChatLog[data-colortheme="dark2"] .bce-notification {
			background-color: #481D64;
			color: white;
		}
		.bce-img-link {
			vertical-align: top;
		}
		.bce-img {
			max-height: 25rem;
			max-width: 90%;
			display: inline;
			border:1px solid red;
			padding: 0.1rem;
		}
		.bce-color {
			width: 0.8em;
			height: 0.8em;
			display: inline-block;
			vertical-align: middle;
			border: 0.1em solid black;
			margin-right: 0.1em;
		}
		.${BCE_COLOR_ADJUSTMENTS_CLASS_NAME} .${DARK_INPUT_CLASS}.${INPUT_WARN_CLASS} {
			background-color: #400000 !important;
		}
		.${INPUT_WARN_CLASS} {
			background-color: yellow !important;
		}
		#TextAreaChatLog a,
		.bce-message a {
			color: #003f91;
			cursor: pointer;
		}
		#TextAreaChatLog a:visited,
		.bce-message a {
			color: #380091;
		}
		.${BCE_COLOR_ADJUSTMENTS_CLASS_NAME} div.ChatMessageWhisper,
		.${BCE_COLOR_ADJUSTMENTS_CLASS_NAME} div.ChatMessageWhisper {
			color: #646464;
		}
		.${BCE_COLOR_ADJUSTMENTS_CLASS_NAME} #TextAreaChatLog[data-colortheme="dark"] div.ChatMessageWhisper,
		.${BCE_COLOR_ADJUSTMENTS_CLASS_NAME} #TextAreaChatLog[data-colortheme="dark2"] div.ChatMessageWhisper {
			color: #828282;
		}
		#TextAreaChatLog[data-colortheme="dark"] a,
		#TextAreaChatLog[data-colortheme="dark2"] a,
		.bce-message a {
			color: #a9ceff;
		}
		#TextAreaChatLog[data-colortheme="dark"] a:visited,
		#TextAreaChatLog[data-colortheme="dark2"] a:visited,
		.bce-message a {
			color: #3d91ff;
		}
		.${WHISPER_CLASS} {
			font-style: italic;
		}
		.${BCE_COLOR_ADJUSTMENTS_CLASS_NAME} .${DARK_INPUT_CLASS} {
			background-color: #111;
			color: #eee;
			border-color: #333;
		}
		a.bce-button {
			text-decoration: none;
		}
		.bce-hidden {
			display: none !important;
		}
		.bce-false-hidden {
			position: absolute;
			border: 0;
			margin: 0;
			padding: 0;
			top: 0;
			left: 0;
			width: 0.1px;
			height: 0.1px;
			opacity: 0.01;
		}
		#bce-instant-messenger {
			display: flex;
			z-index: 100;
			position: fixed;
			width: 80%;
			height: 70%;
			top: 5%;
			left: 10%;
			padding: 0;
			margin: 0;
			flex-direction: row;
			background-color: #111;
			color: #eee;
			border: 0.2em solid white;
			resize: both;
			overflow: auto;
			max-width: 80%;
			max-height: 75%;
			min-width: 38%;
			min-height: 30%;
			overflow-wrap: break-word;
		}
		#bce-friend-list {
			width: 100%;
			overflow-x: hidden;
			overflow-y: scroll;
		}
		.bce-friend-list-entry {
			padding: 1em;
		}
		.bce-friend-list-entry-name {
			font-weight: bold;
			display: flex;
			flex-direction: column;
		}
		.bce-friend-list-selected {
			font-style: italic;
			border-top: 0.1em solid white;
			border-bottom: 0.1em solid white;
			background-color: #222;
		}
		#bce-message-container {
			width: 100%;
			height: 90%;
			font-size: 1.5rem;
			font-family: Arial, sans-serif;
		}
		#bce-message-right-container {
			width: 80%;
			display: flex;
			flex-direction: column;
			border-left: 0.1em solid white;
		}
		#bce-message-input {
			width: 100%;
			height: 10%;
			border: 0;
			padding: 0;
			margin: 0;
			background-color: #222;
			color: #eee;
			font-size: 1.5rem;
		}
		.bce-friend-list-unread {
			background-color: #a22;
		}
		.bce-message-divider {
			margin: 0.5em 2em;
			border-bottom: 0.2em solid white;
		}
		.bce-message {
			padding: 0.2em 0.4em;
			position: relative;
			white-space: pre-wrap;
		}
		.bce-message::before {
			content: attr(data-time);
			float: right;
			color: gray;
			font-size: 0.5em;
			margin-right: 0.2em;
			font-style: italic;
		}
		.bce-message-sender {
			text-shadow: 0.05em 0.05em #eee;
			font-weight: bold;
		}
		.bce-message-Emote, .bce-message-Action {
			font-style: italic;
			color: gray;
		}
		.bce-message-Message .bce-message-sender {
			text-shadow: 0.05em 0.05em #eee;
		}
		.bce-friend-history {
			overflow-y: scroll;
			overflow-x: hidden;
			height: 100%;
		}
		.bce-friend-list-handshake-false,
		.bce-friend-list-handshake-pending {
			text-decoration: line-through;
			color: gray;
		}
		#bce-message-left-container {
			display: flex;
			flex-direction: column;
			width: 20%;
			height: 100%;
		}
		#bce-friend-search {
			border: 0;
			border-bottom: 0.1em solid white;
			padding: 0.5em;
			height: 1em;
			background-color: #222;
			color: #eee;
		}
		.bce-profile-open {
			margin-right: 0.5em;
		}
		.bce-pending {
			opacity: 0.4;
		}

		.lds-ellipsis {
			display: inline-block;
			position: relative;
			width: 80px;
			height: 1em;
		}
		.lds-ellipsis div {
			position: absolute;
			top: 44%;
			width: 13px;
			height: 13px;
			border-radius: 50%;
			background: #fff;
			animation-timing-function: cubic-bezier(0, 1, 1, 0);
		}
		.lds-ellipsis div:nth-child(1) {
			left: 8px;
			animation: lds-ellipsis1 0.6s infinite;
		}
		.lds-ellipsis div:nth-child(2) {
			left: 8px;
			animation: lds-ellipsis2 0.6s infinite;
		}
		.lds-ellipsis div:nth-child(3) {
			left: 32px;
			animation: lds-ellipsis2 0.6s infinite;
		}
		.lds-ellipsis div:nth-child(4) {
			left: 56px;
			animation: lds-ellipsis3 0.6s infinite;
		}
		@keyframes lds-ellipsis1 {
			0% {
				transform: scale(0);
			}
			100% {
				transform: scale(1);
			}
		}
		@keyframes lds-ellipsis3 {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(0);
			}
		}
		@keyframes lds-ellipsis2 {
			0% {
				transform: translate(0, 0);
			}
			100% {
				transform: translate(24px, 0);
			}
		}

		#bceNoteInput {
			z-index: 100 !important;
		}

		`;
		const head = document.head || document.getElementsByTagName("head")[0];
		const style = document.createElement("style");
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);
	}

	function chatAugments() {
		// CTRL+Enter OOC implementation
		patchFunction(
			"ChatRoomKeyDown",
			{
				"ChatRoomSendChat()": `if (fbcSettingValue("ctrlEnterOoc") && event.ctrlKey && ElementValue("InputChat")?.trim()) {
						let text = ElementValue("InputChat");
						let prefix = "";
						if (!text) {
							fbcChatNotify("Nothing to send!");
							return;
						}
						// Whisper command
						if (text.startsWith("/w ")) {
							const textParts = text.split(' ');
							text = textParts.slice(2).join(' ');
							prefix = textParts.slice(0, 2).join(' ') + ' ';
						} else if (text.startsWith("/") && !text.startsWith("//")) {
							fbcChatNotify("Tried to OOC send a command. Use double // to confirm sending to chat.");
							return;
						}
						
						ElementValue("InputChat", prefix + "(" + text.replace(/\\)/g, "${CLOSINGBRACKETINDICATOR}"));
					}
					ChatRoomSendChat()`,
			},
			"No OOC on CTRL+Enter."
		);
		patchFunction(
			"ChatRoomMessageDisplay",
			{
				"var div": `msg = msg.replace(/${CLOSINGBRACKETINDICATOR}/g, ")");
				var div`,
			},
			"OOC closing brackets may look wonky."
		);

		patchFunction(
			"CommandParse",
			{
				"// Regular chat can be prevented with an owner presence rule":
					"// Regular chat can be prevented with an owner presence rule\nmsg = bceMessageReplacements(msg);\n// ",
				"// The whispers get sent to the server and shown on the client directly":
					"// The whispers get sent to the server and shown on the client directly\nmsg = bceMessageReplacements(msg);",
			},
			"No link or OOC parsing for sent whispers."
		);

		const startSounds = ["..", "--"];
		const endSounds = ["...", "~", "~..", "~~", "..~"];
		const eggedSounds = [
			"ah",
			"aah",
			"mnn",
			"nn",
			"mnh",
			"mngh",
			"haa",
			"nng",
			"mnng",
		];
		/**
		 * StutterWord will add s-stutters to the beginning of words and return 1-2 words, the original word with its stutters and a sound, based on arousal
		 * @type {(word: string, forceStutter?: boolean) => string[]}
		 */
		function stutterWord(word, forceStutter) {
			if (!word?.length) {
				return [word];
			}

			/** @type {(wrd: string) => string} */
			const addStutter = (wrd) =>
				/^\p{L}/u.test(wrd)
					? `${wrd.substring(0, /\uD800-\uDFFF/u.test(wrd[0]) ? 2 : 1)}-${wrd}`
					: wrd;

			const maxIntensity = Math.max(
				0,
				...Player.Appearance.filter((a) => a.Property?.Intensity > -1).map(
					(a) => a.Property.Intensity
				)
			);

			const eggedBonus = maxIntensity * 5;
			const chanceToStutter =
				(Math.max(0, Player.ArousalSettings.Progress - 10 + eggedBonus) * 0.5) /
				100;

			const chanceToMakeSound =
				(Math.max(
					0,
					Player.ArousalSettings.Progress / 2 - 20 + eggedBonus * 2
				) *
					0.5) /
				100;

			const r = Math.random();
			for (let i = Math.min(4, Math.max(1, maxIntensity)); i >= 1; i--) {
				if (
					r < chanceToStutter / i ||
					(i === 1 && forceStutter && chanceToStutter > 0)
				) {
					word = addStutter(word);
				}
			}
			const results = [word];
			if (maxIntensity > 0 && Math.random() < chanceToMakeSound) {
				const startSound =
					startSounds[Math.floor(Math.random() * startSounds.length)];
				const sound =
					eggedSounds[Math.floor(Math.random() * eggedSounds.length)];
				const endSound =
					endSounds[Math.floor(Math.random() * endSounds.length)];
				results.push(" ", `${startSound}${displayText(sound)}${endSound}`);
			}
			return results;
		}

		w.bceMessageReplacements = (msg) => {
			const words = [msg];
			let firstStutter = true,
				inOOC = false;
			const newWords = [];
			for (let i = 0; i < words.length; i++) {
				// Handle other whitespace
				const whitespaceIdx = words[i].search(/[\s\r\n]/u);
				if (whitespaceIdx >= 1) {
					// Insert remainder into list of words
					words.splice(i + 1, 0, words[i].substring(whitespaceIdx));
					// Truncate current word to whitespace
					words[i] = words[i].substring(0, whitespaceIdx);
				} else if (whitespaceIdx === 0) {
					// Insert remainder into list of words
					words.splice(i + 1, 0, words[i].substring(1));
					// Keep space in the message
					[words[i]] = words[i];
					newWords.push(words[i]);
					continue;
				}
				// Handle OOC
				const oocIdx = words[i].search(/[()]/u);
				if (oocIdx > 0) {
					// Insert remainder into list of words
					words.splice(i + 1, 0, words[i].substring(oocIdx + 1));
					// Insert OOC marker into list of words, before remainder
					words.splice(i + 1, 0, words[i].substring(oocIdx, oocIdx + 1));
					// Truncate current word to OOC
					words[i] = words[i].substring(0, oocIdx);
				} else if (oocIdx === 0 && words[i].length > 1) {
					// Insert remainder into list of words
					words.splice(i + 1, 0, words[i].substring(1));
					// Keep OOC marker in the message
					[words[i]] = words[i];
				}

				if (words[i] === "(") {
					inOOC = true;
				}

				if (bceParseUrl(words[i]) && !inOOC) {
					newWords.push("( ");
					newWords.push(words[i]);
					newWords.push(" )");
				} else if (fbcSettings.stutters && !inOOC) {
					newWords.push(...stutterWord(words[i], firstStutter));
					firstStutter = false;
				} else {
					newWords.push(words[i]);
				}

				if (words[i] === ")") {
					inOOC = false;
				}
			}
			return newWords.join("");
		};

		function bceChatAugments() {
			if (CurrentScreen !== "ChatRoom" || !fbcSettings.augmentChat) {
				return;
			}
			const chatLogContainerId = "TextAreaChatLog",
				// Handle chat events
				handledAttributeName = "data-bce-handled",
				unhandledChat = document.querySelectorAll(
					`.ChatMessage:not([${handledAttributeName}=true])`
				);
			for (const chatMessageElement of unhandledChat) {
				chatMessageElement.setAttribute(handledAttributeName, "true");
				if (
					(chatMessageElement.classList.contains("ChatMessageChat") ||
						chatMessageElement.classList.contains("ChatMessageWhisper")) &&
					!chatMessageElement.classList.contains("bce-pending")
				) {
					const scrolledToEnd = ElementIsScrolledToEnd(chatLogContainerId);
					// eslint-disable-next-line no-loop-func
					const scrollToEnd = () => {
						if (scrolledToEnd) {
							ElementScrollToEnd(chatLogContainerId);
						}
					};
					processChatAugmentsForLine(chatMessageElement, scrollToEnd);
					if (scrolledToEnd) {
						ElementScrollToEnd(chatLogContainerId);
					}
				}
			}
		}

		createTimer(bceChatAugments, 500);
	}

	async function automaticExpressions() {
		await waitFor(() => CurrentScreen === "ChatRoom");

		patchFunction(
			"StruggleMinigameHandleExpression",
			{
				'");': '", 3);',
			},
			"Resetting blush, eyes, and eyebrows after struggling"
		);

		SDK.hookFunction(
			"StruggleMinigameStop",
			HOOK_PRIORITIES.ModifyBehaviourMedium,
			(args, next) => {
				if (bceAnimationEngineEnabled()) {
					StruggleExpressionStore = null;
					resetExpressionQueue(
						[GAME_TIMED_EVENT_TYPE],
						[MANUAL_OVERRIDE_EVENT_TYPE]
					);
				}
				return next(args);
			}
		);

		if (!w.bce_ArousalExpressionStages) {
			// eslint-disable-next-line camelcase
			w.bce_ArousalExpressionStages = {
				Blush: [
					{ Expression: "High", Limit: 100 },
					{ Expression: "Medium", Limit: 60 },
					{ Expression: "Low", Limit: 10 },
					{ Expression: null, Limit: 0 },
				],
				Eyebrows: [
					{ Expression: "Soft", Limit: 80 },
					{ Expression: "Lowered", Limit: 50 },
					{ Expression: "Raised", Limit: 20 },
					{ Expression: null, Limit: 0 },
				],
				Fluids: [
					{ Expression: "DroolMedium", Limit: 100 },
					{ Expression: "DroolLow", Limit: 40 },
					{ Expression: null, Limit: 0 },
				],
				Eyes: [
					{ Expression: "Closed", Limit: 100 },
					{ Expression: "Surprised", Limit: 90 },
					{ Expression: "Horny", Limit: 70 },
					{ Expression: "Dazed", Limit: 20 },
					{ Expression: null, Limit: 0 },
				],
				Eyes2: [
					{ Expression: "Closed", Limit: 100 },
					{ Expression: "Surprised", Limit: 90 },
					{ Expression: "Horny", Limit: 70 },
					{ Expression: "Dazed", Limit: 20 },
					{ Expression: null, Limit: 0 },
				],
				// Pussy group includes Penis, which is the only type of "pussy" with expressions and controls erections.
				Pussy: [
					{ Expression: "Hard", Limit: 50 },
					{ Expression: null, Limit: 0 },
				],
			};
		}

		/** @type {{[key: string]: string[]}} */
		const bceExpressionModifierMap = Object.freeze({
			Blush: [null, "Low", "Medium", "High", "VeryHigh", "Extreme"],
		});

		const AUTOMATED_AROUSAL_EVENT_TYPE = "AutomatedByArousal",
			DEFAULT_EVENT_TYPE = "DEFAULT",
			GAME_TIMED_EVENT_TYPE = "GameTimer",
			MANUAL_OVERRIDE_EVENT_TYPE = "ManualOverride",
			POST_ORGASM_EVENT_TYPE = "PostOrgasm";

		/** @type {ExpressionEvent[]} */
		const bceExpressionsQueue = [];
		let lastUniqueId = 0;

		/** @type {() => number} */
		function newUniqueId() {
			lastUniqueId = (lastUniqueId + 1) % (Number.MAX_SAFE_INTEGER - 1);
			return lastUniqueId;
		}

		/** @type {Partial<Record<'Eyes' | 'Eyes2' | 'Eyebrows' | 'Mouth' | 'Fluids' | 'Emoticon' | 'Blush' | 'Pussy', string>>} */
		const manualComponents = {};

		/** @type {(evt: ExpressionEvent) => void} */
		function pushEvent(evt) {
			if (!evt) {
				return;
			}
			switch (evt.Type) {
				case AUTOMATED_AROUSAL_EVENT_TYPE:
				case POST_ORGASM_EVENT_TYPE:
					if (!fbcSettings.expressions) {
						return;
					}
					break;
				case MANUAL_OVERRIDE_EVENT_TYPE:
					break;
				default:
					if (!fbcSettings.activityExpressions) {
						return;
					}
			}
			const time = Date.now();
			// Deep copy
			/** @type {ExpressionEvent} */
			const event = deepCopy(evt);
			event.At = time;
			event.Until = time + event.Duration;
			event.Id = newUniqueId();
			if (typeof event.Priority !== "number") {
				event.Priority = 1;
			}
			if (event.Expression) {
				for (const t of Object.values(event.Expression)) {
					for (const exp of t) {
						exp.Id = newUniqueId();
						if (typeof exp.Priority !== "number") {
							exp.Priority = 1;
						}
						if (typeof exp.Duration !== "number") {
							exp.Duration = event.Duration;
						}
					}
				}
			}
			if (event.Poses) {
				for (const p of event.Poses) {
					p.Id = newUniqueId();
					if (typeof p.Priority !== "number") {
						p.Priority = 1;
					}
					p.Pose = p.Pose.map(
						// eslint-disable-next-line no-loop-func
						(
							/** @type {string | PoseEx} */
							v
						) => {
							/** @type {string} */
							// @ts-ignore
							const poseName = v;
							return {
								Pose: poseName,
								Category: PoseFemale3DCG.find((a) => a.Name === v)?.Category,
							};
						}
					);
				}
			}
			bceExpressionsQueue.push(event);
		}
		w.fbcPushEvent = pushEvent;

		if (!w.bce_EventExpressions) {
			// eslint-disable-next-line camelcase
			w.bce_EventExpressions = {
				PostOrgasm: {
					Type: POST_ORGASM_EVENT_TYPE,
					Duration: 20000,
					Priority: 10000,
					Expression: {
						Blush: [
							{ Expression: "Extreme", Duration: 5000 },
							{ ExpressionModifier: -1, Duration: 5000 },
							{ ExpressionModifier: -1, Duration: 5000, Priority: 1000 },
							{ ExpressionModifier: -1, Duration: 5000, Priority: 200 },
						],
						Eyes: [
							{ Expression: "Closed", Duration: 8500 },
							{ Expression: "Heart", Duration: 7500 },
							{ Expression: "Sad", Duration: 4000, Priority: 200 },
						],
						Eyes2: [
							{ Expression: "Closed", Duration: 8000 },
							{ Expression: "Heart", Duration: 8000 },
							{ Expression: "Sad", Duration: 4000, Priority: 200 },
						],
						Mouth: [
							{ Expression: "Ahegao", Duration: 5000 },
							{ Expression: "Moan", Duration: 5000 },
							{ Expression: "HalfOpen", Duration: 10000, Priority: 200 },
						],
						Fluids: [
							{ Expression: "DroolMessy", Duration: 5000 },
							{ Expression: "DroolSides", Duration: 9000, Priority: 400 },
							{ Expression: "DroolLow", Duration: 6000, Priority: 200 },
						],
						Eyebrows: [
							{ Expression: "Soft", Duration: 10000 },
							{ Expression: "Lowered", Duration: 5000, Priority: 200 },
							{ Expression: null, Duration: 5000, Priority: 1 },
						],
					},
				},
				Pout: {
					Type: "Pout",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Pout", Duration: -1 }],
						Eyes: [{ Expression: "Dazed", Duration: -1 }],
						Eyes2: [{ Expression: "Dazed", Duration: -1 }],
						Eyebrows: [{ Expression: "Harsh", Duration: -1 }],
					},
				},
				ResetBrows: {
					Type: "ResetBrows",
					Duration: -1,
					Expression: {
						Eyebrows: [{ Expression: null, Duration: -1 }],
					},
				},
				RaiseBrows: {
					Type: "RaiseBrows",
					Duration: -1,
					Expression: {
						Eyebrows: [{ Expression: "Raised", Duration: -1 }],
					},
				},
				Confused: {
					Type: "Confused",
					Duration: -1,
					Expression: {
						Eyebrows: [{ Expression: "OneRaised", Duration: -1 }],
					},
				},
				Smirk: {
					Type: "Smirk",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Smirk", Duration: -1 }],
					},
				},
				Wink: {
					Type: "Wink",
					Duration: 1500,
					Expression: {
						Eyes: [{ Expression: "Closed", Duration: 1500 }],
					},
				},
				Laugh: {
					Type: "Laugh",
					Duration: 8000,
					Expression: {
						Mouth: [
							{ Expression: "Laughing", Duration: 1000 },
							{ Expression: "Grin", Duration: 200 },
							{ Expression: "Laughing", Duration: 1000 },
							{ Expression: "Happy", Duration: 200 },
							{ Expression: "Laughing", Duration: 800 },
							{ Expression: "Grin", Duration: 400 },
							{ Expression: "Laughing", Duration: 800 },
							{ Expression: "Happy", Duration: 400 },
							{ Expression: "Laughing", Duration: 600 },
							{ Expression: "Grin", Duration: 600 },
							{ Expression: "Laughing", Duration: 600 },
							{ Expression: "Happy", Duration: 600 },
							{ Expression: "Laughing", Duration: 200 },
							{ Expression: "Grin", Duration: 200 },
							{ Expression: "Laughing", Duration: 200 },
							{ Expression: "Happy", Duration: 200 },
						],
					},
				},
				Giggle: {
					Type: "Giggle",
					Duration: 4000,
					Expression: {
						Mouth: [
							{ Expression: "Laughing", Duration: 800 },
							{ Expression: "Grin", Duration: 200 },
							{ Expression: "Laughing", Duration: 700 },
							{ Expression: "Happy", Duration: 200 },
							{ Expression: "Laughing", Duration: 600 },
							{ Expression: "Grin", Duration: 200 },
							{ Expression: "Laughing", Duration: 500 },
							{ Expression: "Grin", Duration: 200 },
							{ Expression: "Laughing", Duration: 400 },
							{ Expression: "Happy", Duration: 200 },
						],
					},
				},
				Chuckle: {
					Type: "Chuckle",
					Duration: 4000,
					Expression: {
						Mouth: [{ Expression: "Grin", Duration: 4000 }],
					},
				},
				Smile: {
					Type: "Smile",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Grin", Duration: -1 }],
					},
				},
				Blink: {
					Type: "Blink",
					Duration: 200,
					Expression: {
						Eyes: [{ Expression: "Closed", Duration: 200 }],
						Eyes2: [{ Expression: "Closed", Duration: 200 }],
					},
				},
				Grin: {
					Type: "Grin",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: "Horny", Duration: -1 }],
						Eyes2: [{ Expression: "Horny", Duration: -1 }],
						Mouth: [{ Expression: "Grin", Duration: -1 }],
					},
				},
				Cuddle: {
					Type: "Cuddle",
					Duration: 10000,
					Priority: 150,
					Expression: {
						Mouth: [{ Expression: "Happy", Duration: 10000 }],
						Eyes: [{ Expression: "ShylyHappy", Duration: 10000 }],
						Eyes2: [{ Expression: "ShylyHappy", Duration: 10000 }],
						Eyebrows: [{ Expression: "Raised", Duration: 10000 }],
					},
				},
				Blush: {
					Type: "Blush",
					Duration: 10000,
					Expression: {
						Blush: [{ ExpressionModifier: 1, Duration: 10000 }],
					},
				},
				Choke: {
					Type: "Choke",
					Duration: 4000,
					Priority: 150,
					Expression: {
						Blush: [{ ExpressionModifier: 3, Duration: 4000 }],
						Eyes: [
							{ Expression: "VeryLewd", Duration: 3000 },
							{ Expression: "Sad", Duration: 1000 },
						],
						Eyes2: [
							{ Expression: "VeryLewd", Duration: 3000 },
							{ Expression: "Sad", Duration: 1000 },
						],
						Eyebrows: [{ Expression: "Harsh", Duration: 4000 }],
					},
				},
				Stimulated: {
					Type: "Stimulated",
					Duration: 5000,
					Priority: 400,
					Expression: {
						Blush: [{ ExpressionModifier: 2, Duration: 5000 }],
						Eyes: [
							{ Expression: "VeryLewd", Duration: 4000 },
							{ Expression: "Sad", Duration: 1000 },
						],
						Eyes2: [
							{ Expression: "VeryLewd", Duration: 4000 },
							{ Expression: "Sad", Duration: 1000 },
						],
						Eyebrows: [{ Expression: "Soft", Duration: 5000 }],
					},
				},
				StimulatedLong: {
					Type: "StimulatedLong",
					Duration: 20000,
					Priority: 400,
					Expression: {
						Blush: [{ ExpressionModifier: 1, Duration: 20000 }],
					},
				},
				Shock: {
					Type: "Shock",
					Duration: 15000,
					Priority: 1000,
					Expression: {
						Blush: [
							{ ExpressionModifier: 5, Duration: 10000 },
							{ ExpressionModifier: -1, Duration: 2000 },
							{ ExpressionModifier: -1, Duration: 2000 },
							{ ExpressionModifier: -1, Duration: 1000 },
						],
						Eyes: [
							{ Expression: "Dizzy", Duration: 1000 },
							{ Expression: "Scared", Duration: 8000 },
							{ Expression: "Surprised", Duration: 7000 },
						],
						Eyes2: [
							{ Expression: "Dizzy", Duration: 1000 },
							{ Expression: "Scared", Duration: 8000 },
							{ Expression: "Surprised", Duration: 7000 },
						],
						Eyebrows: [{ Expression: "Soft", Duration: 15000 }],
						Mouth: [
							{ Expression: "Pained", Duration: 10000 },
							{ Expression: "Angry", Duration: 5000 },
						],
					},
				},
				ShockLight: {
					Type: "ShockLight",
					Duration: 5000,
					Priority: 900,
					Expression: {
						Blush: [{ ExpressionModifier: 2, Duration: 5000 }],
						Eyes: [
							{ Expression: "Dizzy", Duration: 2000 },
							{ Expression: "Surprised", Duration: 3000 },
						],
						Eyes2: [
							{ Expression: "Dizzy", Duration: 2000 },
							{ Expression: "Surprised", Duration: 3000 },
						],
						Eyebrows: [{ Expression: "Soft", Duration: 5000 }],
						Mouth: [{ Expression: "Angry", Duration: 5000 }],
					},
				},
				Hit: {
					Type: "Hit",
					Duration: 7000,
					Priority: 500,
					Expression: {
						Blush: [{ Expression: "VeryHigh", Duration: 7000 }],
						Eyes: [
							{ Expression: "Daydream", Duration: 1000 },
							{ Expression: "Closed", Duration: 3000 },
							{ Expression: "Daydream", Duration: 3000 },
						],
						Eyes2: [
							{ Expression: "Daydream", Duration: 1000 },
							{ Expression: "Closed", Duration: 3000 },
							{ Expression: "Daydream", Duration: 3000 },
						],
						Eyebrows: [{ Expression: "Soft", Duration: 7000 }],
					},
				},
				Spank: {
					Type: "Spank",
					Duration: 3000,
					Priority: 300,
					Expression: {
						Eyes: [{ Expression: "Lewd", Duration: 3000 }],
						Eyes2: [{ Expression: "Lewd", Duration: 3000 }],
						Eyebrows: [{ Expression: "Soft", Duration: 3000 }],
					},
				},
				Kiss: {
					Type: "Kiss",
					Duration: 2000,
					Priority: 200,
					Expression: {
						Mouth: [{ Expression: "HalfOpen", Duration: 2000 }],
					},
				},
				KissOnLips: {
					Type: "KissOnLips",
					Duration: 2000,
					Priority: 200,
					Expression: {
						Eyes: [{ Expression: "Closed", Duration: 2000 }],
						Eyes2: [{ Expression: "Closed", Duration: 2000 }],
						Mouth: [{ Expression: "HalfOpen", Duration: 2000 }],
						Blush: [
							{ Skip: true, Duration: 1000 },
							{ ExpressionModifier: 1, Duration: 1000 },
						],
					},
				},
				LongKiss: {
					Type: "LongKiss",
					Duration: 4000,
					Priority: 200,
					Expression: {
						Eyes: [{ Expression: "Closed", Duration: 4000 }],
						Eyes2: [{ Expression: "Closed", Duration: 4000 }],
						Mouth: [{ Expression: "Open", Duration: 4000 }],
						Blush: [
							{ Skip: true, Duration: 1000 },
							{ ExpressionModifier: 1, Duration: 1000 },
							{ ExpressionModifier: 1, Duration: 2000 },
						],
					},
				},
				Disoriented: {
					Type: "Disoriented",
					Duration: 8000,
					Priority: 250,
					Expression: {
						Eyes: [{ Expression: "Dizzy", Duration: 8000 }],
						Eyes2: [{ Expression: "Dizzy", Duration: 8000 }],
						Eyebrows: [{ Expression: "Raised", Duration: 8000 }],
						Blush: [{ ExpressionModifier: 2, Duration: 8000 }],
					},
				},
				Angry: {
					Type: "Angry",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Angry", Duration: -1 }],
						Eyes: [{ Expression: "Angry", Duration: -1 }],
						Eyes2: [{ Expression: "Angry", Duration: -1 }],
						Eyebrows: [{ Expression: "Angry", Duration: -1 }],
					},
				},
				Sad: {
					Type: "Sad",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Frown", Duration: -1 }],
						Eyes: [{ Expression: "Shy", Duration: -1 }],
						Eyes2: [{ Expression: "Shy", Duration: -1 }],
						Eyebrows: [{ Expression: "Soft", Duration: -1 }],
					},
				},
				Worried: {
					Type: "Worried",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: "Surprised", Duration: -1 }],
						Eyes2: [{ Expression: "Surprised", Duration: -1 }],
						Eyebrows: [{ Expression: "Soft", Duration: -1 }],
					},
				},
				Distressed: {
					Type: "Distressed",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: "Scared", Duration: -1 }],
						Eyes2: [{ Expression: "Scared", Duration: -1 }],
						Eyebrows: [{ Expression: "Soft", Duration: -1 }],
						Mouth: [{ Expression: "Angry", Duration: -1 }],
					},
				},
				Reset: {
					Type: "Reset",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: null, Duration: -1 }],
						Eyes: [{ Expression: null, Duration: -1 }],
						Eyes2: [{ Expression: null, Duration: -1 }],
						Eyebrows: [{ Expression: null, Duration: -1 }],
						Blush: [{ Expression: null, Duration: -1 }],
						Fluids: [{ Expression: null, Duration: -1 }],
					},
				},
				Cry: {
					Type: "Cry",
					Duration: -1,
					Expression: {
						Fluids: [{ Expression: "TearsMedium", Duration: -1 }],
					},
				},
				DroolReset: {
					Type: "DroolReset",
					Duration: -1,
					Expression: {
						Fluids: [{ Expression: null, Duration: -1 }],
					},
				},
				DroolSides: {
					Type: "DroolSides",
					Duration: -1,
					Expression: {
						Fluids: [{ Expression: "DroolSides", Duration: -1 }],
					},
				},
				BareTeeth: {
					Type: "BareTeeth",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Angry", Duration: -1 }],
					},
				},
				Happy: {
					Type: "Happy",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Happy", Duration: -1 }],
					},
				},
				Frown: {
					Type: "Frown",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Frown", Duration: -1 }],
					},
				},
				Glare: {
					Type: "Glare",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: "Angry", Duration: -1 }],
						Eyes2: [{ Expression: "Angry", Duration: -1 }],
						Eyebrows: [{ Expression: "Harsh", Duration: -1 }],
					},
				},
				NarrowEyes: {
					Type: "NarrowEyes",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: "Horny", Duration: -1 }],
						Eyes2: [{ Expression: "Horny", Duration: -1 }],
					},
				},
				OpenEyes: {
					Type: "OpenEyes",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: null, Duration: -1 }],
						Eyes2: [{ Expression: null, Duration: -1 }],
					},
				},
				CloseEyes: {
					Type: "CloseEyes",
					Duration: -1,
					Expression: {
						Eyes: [{ Expression: "Closed", Duration: -1 }],
						Eyes2: [{ Expression: "Closed", Duration: -1 }],
					},
				},
				CloseMouth: {
					Type: "CloseMouth",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: null, Duration: -1 }],
					},
				},
				OpenMouth: {
					Type: "OpenMouth",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "Moan", Duration: -1 }],
					},
				},
				LipBite: {
					Type: "LipBite",
					Duration: -1,
					Expression: {
						Mouth: [{ Expression: "LipBite", Duration: -1 }],
					},
				},
				Lick: {
					Type: "Lick",
					Duration: 4000,
					Priority: 200,
					Expression: {
						Mouth: [{ Expression: "Ahegao", Duration: 4000 }],
						Blush: [{ ExpressionModifier: 1, Duration: 4000 }],
					},
				},
				GagInflate: {
					Type: "GagInflate",
					Duration: 4000,
					Priority: 400,
					Expression: {
						Eyes: [{ Expression: "Lewd", Duration: 4000 }],
						Eyes2: [{ Expression: "Lewd", Duration: 4000 }],
						Blush: [
							{ ExpressionModifier: 2, Duration: 2000 },
							{ ExpressionModifier: -1, Duration: 2000 },
						],
					},
				},
				Iced: {
					Type: "Iced",
					Duration: 4000,
					Priority: 500,
					Expression: {
						Eyes: [
							{ Expression: "Surprised", Duration: 3000 },
							{ Expression: null, Duration: 1000 },
						],
						Eyes2: [
							{ Expression: "Surprised", Duration: 3000 },
							{ Expression: null, Duration: 1000 },
						],
						Mouth: [{ Expression: "Angry", Duration: 4000 }],
					},
				},
				AllFours: {
					Type: "AllFours",
					Duration: -1,
					Poses: [{ Pose: ["AllFours"], Duration: -1 }],
				},
				SpreadKnees: {
					Type: "SpreadKnees",
					Duration: -1,
					Poses: [{ Pose: ["KneelingSpread"], Duration: -1 }],
				},
				Hogtied: {
					Type: "Hogtied",
					Duration: -1,
					Poses: [{ Pose: ["Hogtied"], Duration: -1 }],
				},
				Handstand: {
					Type: "Handstand",
					Duration: -1,
					Poses: [{ Pose: ["Suspension", "OverTheHead"], Duration: -1 }],
				},
				Stretch: {
					Type: "Stretch",
					Priority: 100,
					Duration: 6000,
					Poses: [
						{ Pose: ["OverTheHead"], Duration: 1000 },
						{ Pose: ["Yoked"], Duration: 1000 },
						{ Pose: ["BaseUpper"], Duration: 1000 },
						{ Pose: ["Spread"], Duration: 1000 },
						{ Pose: ["LegsClosed"], Duration: 1000 },
						{ Pose: ["BaseLower"], Duration: 1000 },
					],
				},
				SpreadLegs: {
					Type: "SpreadLegs",
					Duration: -1,
					Poses: [{ Pose: ["Spread"], Duration: -1 }],
				},
				JumpingJacks: {
					Type: "JumpingJacks",
					Priority: 100,
					Duration: 8000,
					Poses: [
						{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
						{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
						{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
						{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
						{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
						{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
						{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
						{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
					],
				},
			};
		}

		if (!w.bce_ActivityTriggers) {
			// eslint-disable-next-line camelcase
			w.bce_ActivityTriggers = [
				{
					Event: "Blush",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-ItemMouth-PoliteKiss$/u,
						},
					],
				},
				{
					Event: "Stretch",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^stretches (her|his|their) whole body/u,
						},
					],
				},
				{
					Event: "JumpingJacks",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^does jumping[ -]?jacks/u,
						},
					],
				},
				{
					Event: "AllFours",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(gets on all fours|starts crawling)/u,
						},
					],
				},
				{
					Event: "SpreadKnees",
					Type: "Emote",
					Matchers: [
						{
							Tester:
								/^spreads(( (her|his|their) legs)? on)? (her|his|their) knees/u,
						},
					],
				},
				{
					Event: "SpreadLegs",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^spreads (her|his|their) legs apart/u,
						},
					],
				},
				{
					Event: "Handstand",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(does a handstand|stands on (her|his|their) hands)/u,
						},
					],
				},
				{
					Event: "Hogtied",
					Type: "Emote",
					Matchers: [
						{
							Tester:
								/^lies( down)? on (the floor|(her|his|their) (tummy|stomach))/u,
						},
					],
				},
				{
					Event: "Blush",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^blushes/u,
						},
					],
				},
				{
					Event: "Chuckle",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^chuckles/u,
						},
					],
				},
				{
					Event: "Laugh",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^laughs/u,
						},
					],
				},
				{
					Event: "Giggle",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^giggles/u,
						},
					],
				},
				{
					Event: "Smirk",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(smirk(s|ing)|.*with a smirk)/u,
						},
					],
				},
				{
					Event: "Wink",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^winks/u,
						},
					],
				},
				{
					Event: "Pout",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^pouts/u,
						},
					],
				},
				{
					Event: "Blink",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^blinks/u,
						},
					],
				},
				{
					Event: "Frown",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^frowns/u,
						},
					],
				},
				{
					Event: "Grin",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(grins|is grinning)/u,
						},
					],
				},
				{
					Event: "Confused",
					Type: "Emote",
					Matchers: [
						{
							Tester:
								/^((seems|looks) (confused|curious|suspicious)|raises an eyebrow)/u,
						},
					],
				},
				{
					Event: "CloseMouth",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^closes (her|his|their) mouth/u,
						},
					],
				},
				{
					Event: "OpenMouth",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^opens (her|his|their) mouth/u,
						},
					],
				},
				{
					Event: "Happy",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(looks|seems|is|gets|smiles) happ(il)?y/u,
						},
					],
				},
				{
					Event: "Smile",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^smiles/u,
						},
					],
				},
				{
					Event: "Distressed",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(looks|seems|is|gets) distressed/u,
						},
					],
				},
				{
					Event: "Sad",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(looks|seems|is|gets) sad/u,
						},
					],
				},
				{
					Event: "Worried",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(looks|seems|is|gets) (worried|surprised)/u,
						},
					],
				},
				{
					Event: "BareTeeth",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(bares (her|his|their) teeth|snarls)/u,
						},
					],
				},
				{
					Event: "Angry",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(looks angr(il)?y|(gets|is|seems) angry)/u,
						},
					],
				},
				{
					Event: "Glare",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^(glares|looks harshly|gives a (glare|harsh look))/u,
						},
					],
				},
				{
					Event: "OpenEyes",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^opens (her|his|their) eyes/u,
						},
					],
				},
				{
					Event: "NarrowEyes",
					Type: "Emote",
					Matchers: [
						{
							Tester:
								/^((squints|narrows) (her|his|their) eyes|narrowly opens (her|his|their) eyes)/u,
						},
					],
				},
				{
					Event: "CloseEyes",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^closes (her|his|their) eyes/u,
						},
					],
				},
				{
					Event: "ResetBrows",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^lowers (her|his|their) eyebrows/u,
						},
					],
				},
				{
					Event: "RaiseBrows",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^raises (her|his|their) eyebrows/u,
						},
					],
				},
				{
					Event: "DroolSides",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^drools/u,
						},
					],
				},
				{
					Event: "Cry",
					Type: "Emote",
					Matchers: [
						{
							Tester:
								/^(starts to cry|sheds .* tears?|eyes( start( to)?)? leak)/u,
						},
					],
				},
				{
					Event: "Reset",
					Type: "Emote",
					Matchers: [
						{
							Tester: /^'s (expression|face) returns to normal/u,
						},
					],
				},
				{
					Event: "Shock",
					Type: "Action",
					Matchers: [
						{
							Tester:
								/^(ActionActivityShockItem|FuturisticVibratorShockTrigger|FuturisticChastityBeltShock\w+|(TriggerShock|(ShockCollar|Collar(Auto)?ShockUnit|(LoveChastityBelt|SciFiPleasurePanties)Shock)Trigger)(1|2))$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
					],
				},
				{
					Event: "ShockLight",
					Type: "Action",
					Matchers: [
						{
							Tester:
								/^(TriggerShock|(ShockCollar|Collar(Auto)?ShockUnit|(LoveChastityBelt|SciFiPleasurePanties)Shock)Trigger)0$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
					],
				},
				{
					Event: "Hit",
					Type: "Action",
					Matchers: [
						{
							Tester: /^ActionActivitySpankItem$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
					],
				},
				{
					Event: "Spank",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-ItemButt-Spank$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
						{
							Tester: /^ChatSelf-ItemButt-Spank$/u,
						},
					],
				},
				{
					Event: "Cuddle",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-.*-Cuddle$/u,
						},
						{
							Tester: /^ChatSelf-.*-Cuddle$/u,
						},
					],
				},
				{
					Event: "Stimulated",
					Type: "Action",
					Matchers: [
						{
							Tester: /^ActionActivityMasturbateItem$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
					],
				},
				{
					Event: "StimulatedLong",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-.*-(Masturbate|Penetrate).*$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
						{
							Tester: /^ChatSelf-.*-(Masturbate|Penetrate).*$/u,
						},
					],
				},
				{
					Event: "KissOnLips",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-ItemMouth-Kiss$/u,
						},
					],
				},
				{
					Event: "Kiss",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-.*-Kiss$/u,
							Criteria: {
								SenderIsPlayer: true,
							},
						},
					],
				},
				{
					Event: "Disoriented",
					Type: "Action",
					Matchers: [
						{
							Tester: /^(KneelDown|StandUp)Fail$/u,
						},
					],
				},
				{
					Event: "LipBite",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatSelf-ItemMouth-Bite$/u,
						},
					],
				},
				{
					Event: "Lick",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-.*-(Lick|MasturbateTongue)$/u,
							Criteria: {
								SenderIsPlayer: true,
							},
						},
					],
				},
				{
					Event: "DroolReset",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-ItemMouth-Caress$/u,
							Criteria: {
								TargetIsPlayer: true,
							},
						},
						{
							Tester: /^ChatSelf-ItemMouth-Caress$/u,
						},
					],
				},
				{
					Event: "LongKiss",
					Type: "Activity",
					Matchers: [
						{
							Tester: /^ChatOther-ItemMouth-FrenchKiss$/u,
						},
					],
				},
			];
		}

		/** @type {(dict: ChatMessageDictionary[]) => boolean} */
		function dictHasPlayerTarget(dict) {
			return (
				dict?.some(
					(t) =>
						t &&
						/^(Target|Destination)Character(Name)?$/u.test(t.Tag) &&
						t.MemberNumber === Player.MemberNumber
				) ||
				dict?.some((t) => t && t.TargetCharacter === Player.MemberNumber) ||
				false
			);
		}

		registerSocketListener(
			"ChatRoomMessage",
			(
				/** @type {ChatMessage} */
				data
			) => {
				activityTriggers: for (const trigger of w.bce_ActivityTriggers.filter(
					(t) => t.Type === data.Type
				)) {
					for (const matcher of trigger.Matchers) {
						if (matcher.Tester.test(data.Content)) {
							if (matcher.Criteria) {
								if (
									matcher.Criteria.SenderIsPlayer &&
									data.Sender !== Player.MemberNumber
								) {
									continue;
								} else if (
									matcher.Criteria.TargetIsPlayer &&
									!dictHasPlayerTarget(data.Dictionary)
								) {
									continue;
								} else if (
									matcher.Criteria.DictionaryMatchers &&
									!matcher.Criteria.DictionaryMatchers.some((m) =>
										data.Dictionary?.find((t) =>
											// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
											Object.keys(m).every((k) => m[k] === t[k])
										)
									)
								) {
									continue;
								}
								// Criteria met
								pushEvent(w.bce_EventExpressions[trigger.Event]);
							} else if (
								data.Sender === Player.MemberNumber ||
								dictHasPlayerTarget(data.Dictionary)
							) {
								// Lacking criteria, check for presence of player as source or target
								pushEvent(w.bce_EventExpressions[trigger.Event]);
								break activityTriggers;
							}
						}
					}
				}
			}
		);

		/** @type {(faceComponent: string) => [string | null, boolean]} */
		function expression(t) {
			const properties =
				Player.Appearance.filter((a) => a.Asset.Group.Name === t)[0]
					?.Property ?? null;
			return [properties?.Expression || null, !properties?.RemoveTimer];
		}

		/** @type {(faceComponent: string, newExpression: string, color: string) => void} */
		function setExpression(t, n, color) {
			if (!n) {
				n = null;
			}
			for (let i = 0; i < Player.Appearance.length; i++) {
				if (Player.Appearance[i].Asset.Group.Name === t) {
					if (!Player.Appearance[i].Property) {
						Player.Appearance[i].Property = {};
					}
					Player.Appearance[i].Property.Expression = n;
					if (color) {
						Player.Appearance[i].Color = color;
					}
					break;
				}
			}
		}

		/** @type {{[key: string]: { Conflicts: string[] }}} */
		const poseCategories = {
			BodyFull: {
				Conflicts: [
					"BodyUpper",
					"BodyLower",
					// eslint-disable-next-line no-undefined
					undefined,
				],
			},
			BodyUpper: {
				Conflicts: ["BodyFull"],
			},
			BodyLower: {
				Conflicts: ["BodyFull"],
			},
		};

		const faceComponents = [
			"Eyes",
			"Eyes2",
			"Eyebrows",
			"Mouth",
			"Fluids",
			"Emoticon",
			"Blush",
			"Pussy",
		];

		// When first initializing, set the current face as manual override
		pushEvent({
			Type: MANUAL_OVERRIDE_EVENT_TYPE,
			Duration: -1,
			Expression: faceComponents
				.map((t) => {
					const [expr] = expression(t);
					return [t, expr];
				})
				.filter((v) => v[1] !== null)
				.map((v) => [v[0], [{ Expression: v[1] }]])
				// eslint-disable-next-line no-inline-comments
				.reduce((a, v) => ({ ...a, [/** @type {string} */ (v[0])]: v[1] }), {}),
		});

		let lastOrgasm = 0,
			orgasmCount = 0,
			wasDefault = false;

		let PreviousArousal = Player.ArousalSettings;

		const ArousalMeterDirection = {
			None: 0,
			Down: 1,
			Up: 2,
		};
		let PreviousDirection = ArousalMeterDirection.Up;

		/**
		 * @param {string[]} types Types to reset
		 * @param {string[]} skippedTypes Types to skip resetting in addition to automated arousal events
		 */
		function resetExpressionQueue(types, skippedTypes = []) {
			delete Player.ExpressionQueue;
			bceExpressionsQueue.push(
				...bceExpressionsQueue
					.splice(0, bceExpressionsQueue.length)
					.map((e) => {
						if (
							types.includes(e.Type) ||
							(e.Duration <= 0 &&
								e.Type !== AUTOMATED_AROUSAL_EVENT_TYPE &&
								!skippedTypes.includes(e.Type))
						) {
							delete e.Expression;
						}
						return e;
					})
			);
			// Restore manual overrides, if manual not in types
			if (!types.includes(MANUAL_OVERRIDE_EVENT_TYPE)) {
				pushEvent({
					Type: MANUAL_OVERRIDE_EVENT_TYPE,
					Duration: -1,
					Expression: Object.entries(manualComponents).reduce(
						(a, [k, v]) => ({ ...a, [k]: [{ Expression: v }] }),
						{}
					),
				});
			} else {
				for (const k of Object.keys(manualComponents)) {
					delete manualComponents[k];
				}
			}
		}

		Commands.push({
			Tag: "r",
			Description: displayText(
				"[part of face or 'all']: resets expression overrides on part of or all of face"
			),
			Action: (args) => {
				if (args.length === 0 || args === "all") {
					resetExpressionQueue([MANUAL_OVERRIDE_EVENT_TYPE]);
					fbcChatNotify(displayText("Reset all expressions"));
				} else {
					const component = `${args[0].toUpperCase()}${args
						.substring(1)
						.toLowerCase()}`;
					for (const e of bceExpressionsQueue.filter((a) => a.Expression)) {
						if (component === "Eyes" && "Eyes2" in e.Expression) {
							delete e.Expression.Eyes2;
						}
						if (component in e.Expression) {
							delete e.Expression[component];
						}
					}
					fbcChatNotify(
						displayText(`Reset expression on $component`, {
							$component: component,
						})
					);
				}
			},
		});

		Commands.push({
			Tag: "anim",
			Description: displayText("['list' or name of emote]: run an animation"),
			Action: (_1, _2, args) => {
				if (!fbcSettings.activityExpressions) {
					fbcChatNotify(
						displayText(
							"Activity expressions are not enabled in FBC settings. Unable to run animations."
						)
					);
					return;
				}
				if (args[0] === "list") {
					fbcChatNotify(
						displayText(`Available animations: $anims`, {
							$anims: Object.keys(w.bce_EventExpressions).join(", "),
						})
					);
				}
				const animation = Object.keys(w.bce_EventExpressions).find(
					(a) => a.toLowerCase() === args[0]?.toLowerCase()
				);
				if (animation) {
					pushEvent(w.bce_EventExpressions[animation]);
				}
			},
		});

		/**
		 * @param {string[]} poses
		 */
		function setPoses(poses) {
			poses = poses.filter((p) => p).map((p) => p.toLowerCase());
			bceExpressionsQueue.forEach((e) => {
				if (e.Type === MANUAL_OVERRIDE_EVENT_TYPE) {
					e.Poses = [];
				} else if (e.Poses?.length > 0) {
					e.Poses.forEach((p) => {
						if (p.Pose.length === 0) {
							return;
						}
						if (typeof p.Pose[0] === "string") {
							return;
						}
						/** @type {PoseEx[]} */
						// @ts-ignore
						const poseList = p.Pose;
						p.Pose = poseList.filter((pp) => pp.Category);
					});
				}
			});
			const poseNames = PoseFemale3DCG.filter((p) =>
				poses.includes(p.Name.toLowerCase())
			).map((p) => p.Name);
			for (const poseName of poseNames) {
				CharacterSetActivePose(Player, poseName, false);
			}
		}

		Commands.push({
			Tag: "pose",
			Description: displayText("['list' or list of poses]: set your pose"),
			Action: (_1, _2, poses) => {
				if (poses[0] === "list") {
					const categories = [
						...new Set(PoseFemale3DCG.map((a) => a.Category)),
					];
					for (const category of categories) {
						const list = PoseFemale3DCG.filter(
							(a) => a.Category === category
						)?.map((a) => a.Name);
						list.sort();
						fbcChatNotify(`=> ${category}:\n${list.join("\n")}\n\n`);
					}
					return;
				}
				if (!bceAnimationEngineEnabled()) {
					fbcChatNotify(
						displayText(
							"Warning: animation engine in FBC is disabled. Pose may not be synchronized or set. Enable animation engine in FBC settings."
						)
					);
				}
				setPoses(poses);
			},
		});

		patchFunction(
			"TimerInventoryRemove",
			{
				"CharacterSetFacialExpression(C, C.ExpressionQueue[0].Group, C.ExpressionQueue[0].Expression, undefined, undefined, true);": `if (bceAnimationEngineEnabled()) {
					fbcPushEvent({
						Type: "${GAME_TIMED_EVENT_TYPE}",
						Duration: -1,
						Expression: {
							[C.ExpressionQueue[0].Group]: [{ Expression: C.ExpressionQueue[0].Expression, Duration: -1 }]
						}
					})
				} else {
					CharacterSetFacialExpression(C, C.ExpressionQueue[0].Group, C.ExpressionQueue[0].Expression, undefined, undefined, true);
				}`,
			},
			"Game's timed expressions are not hooked to FBC's animation engine"
		);

		patchFunction(
			"ValidationSanitizeProperties",
			{
				"delete property.Expression;": `delete property.Expression;
				if (bceAnimationEngineEnabled()) {
					if (item?.Asset?.Group?.Name) {
						CharacterSetFacialExpression(C, item.Asset.Group.Name, null);
						console.warn("(FBC) Animation engine acknowledged validation-based expression removal for face component", item)
					} else {
						console.warn("Unable to determine asset group name for item", item);
					}
				}`,
			},
			"Prevent animation engine from getting into an endless loop when another addon includes an invalid expression"
		);

		SDK.hookFunction(
			"CharacterSetFacialExpression",
			HOOK_PRIORITIES.OverrideBehaviour,
			/**
			 * @param {[Character, string, string | null, number, string | null]} args
			 */
			(args, next) => {
				// eslint-disable-next-line prefer-const
				let [C, AssetGroup, Expression, Timer, Color] = args;
				if (
					!isCharacter(C) ||
					!isString(AssetGroup) ||
					(!isString(Expression) && Expression !== null) ||
					!C.IsPlayer() ||
					!bceAnimationEngineEnabled()
				) {
					return next(args);
				}

				const duration =
						typeof Timer === "number" && Timer > 0 ? Timer * 1000 : -1,
					/** @type {Record<string, ExpressionStage[]>} */
					e = {},
					types = [AssetGroup];

				if (AssetGroup === "Eyes") {
					types.push("Eyes2");
				} else if (AssetGroup === "Eyes1") {
					types[0] = "Eyes";
				}

				if (
					!Color ||
					!isStringOrStringArray(Color) ||
					!CommonColorIsValid(Color)
				) {
					// eslint-disable-next-line no-undefined
					Color = undefined;
				}

				for (const t of types) {
					e[t] = [{ Expression, Duration: duration, Color }];
					if (duration < 0) {
						manualComponents[t] = Expression;
					}
				}

				const evt = {
					Type: MANUAL_OVERRIDE_EVENT_TYPE,
					Duration: duration,
					Expression: e,
				};
				pushEvent(evt);
				return CustomArousalExpression();
			}
		);

		SDK.hookFunction(
			"CharacterSetActivePose",
			HOOK_PRIORITIES.OverrideBehaviour,
			(/** @type {[Character, string | string[] | null]} */ args, next) => {
				const [C] = args;
				let [, Pose] = args;
				if (
					!isCharacter(C) ||
					(!isStringOrStringArray(Pose) && Pose !== null) ||
					!C.IsPlayer() ||
					!bceAnimationEngineEnabled()
				) {
					return next(args);
				}

				if (!Pose || (Array.isArray(Pose) && Pose.every((p) => !p))) {
					Pose = ["BaseUpper", "BaseLower"];
				}
				const p = {};
				p.Pose = Array.isArray(Pose) ? Pose : [Pose];
				p.Duration = -1;
				const evt = {
					Type: MANUAL_OVERRIDE_EVENT_TYPE,
					Duration: -1,
					Poses: [p],
				};
				pushEvent(evt);
				return CustomArousalExpression();
			}
		);

		registerSocketListener(
			"ChatRoomSyncPose",
			(
				/** @type {{ MemberNumber: number; Character?: Character; Pose: string | string[]; }} */
				data
			) => {
				if (data === null || !isNonNullObject(data)) {
					return;
				}
				if (!bceAnimationEngineEnabled()) {
					return;
				}
				if (data.MemberNumber === Player.MemberNumber) {
					const poses = Array.isArray(data.Pose) ? data.Pose : [data.Pose];
					setPoses(poses);
				}
			}
		);

		registerSocketListener(
			"ChatRoomSyncSingle",
			(
				/** @type {ChatRoomSyncSingleEvent} */
				data
			) => {
				if (data === null || !isNonNullObject(data)) {
					return;
				}
				if (!bceAnimationEngineEnabled()) {
					return;
				}
				if (data.Character?.MemberNumber === Player.MemberNumber) {
					const poses = Array.isArray(data.Character.ActivePose)
						? data.Character.ActivePose
						: [data.Character.ActivePose];
					setPoses(poses);
				}
			}
		);

		resetExpressionQueue([MANUAL_OVERRIDE_EVENT_TYPE, GAME_TIMED_EVENT_TYPE]);

		// This is called once per interval to check for expression changes
		// eslint-disable-next-line complexity
		function CustomArousalExpression() {
			if (!bceAnimationEngineEnabled() || !Player?.AppearanceLayers) {
				return;
			}

			// Ensure none of the expressions have remove timers on them; we handle timers here
			Player.Appearance.filter(
				(a) =>
					faceComponents.includes(a.Asset.Group.Name) && a.Property?.RemoveTimer
			).forEach((a) => {
				delete a.Property.RemoveTimer;
			});

			Player.ArousalSettings.AffectExpression = false;

			if (orgasmCount < Player.ArousalSettings.OrgasmCount) {
				orgasmCount = Player.ArousalSettings.OrgasmCount;
			} else if (orgasmCount > Player.ArousalSettings.OrgasmCount) {
				Player.ArousalSettings.OrgasmCount = orgasmCount;
				ActivityChatRoomArousalSync(Player);
			}

			// Reset everything when face is fully default
			let isDefault = true;
			for (const t of faceComponents) {
				if (expression(t)[0]) {
					isDefault = false;
				}
			}
			if (isDefault) {
				PreviousArousal.Progress = 0;
				PreviousDirection = ArousalMeterDirection.Up;
				if (!wasDefault) {
					for (let i = 0; i < bceExpressionsQueue.length; i++) {
						if (bceExpressionsQueue[i].Type === AUTOMATED_AROUSAL_EVENT_TYPE) {
							continue;
						}
						bceExpressionsQueue[i].Expression = {};
					}
				}
				wasDefault = true;
			} else {
				wasDefault = false;
			}

			// Detect arousal movement
			const arousal = Player.ArousalSettings.Progress;
			let direction = PreviousDirection;
			if (arousal < PreviousArousal.Progress) {
				direction = ArousalMeterDirection.Down;
			} else if (arousal > PreviousArousal.Progress) {
				direction = ArousalMeterDirection.Up;
			}
			PreviousDirection = direction;

			const lastOrgasmAdjustment = () => {
				// Only boost up to the expression at arousal 90
				const lastOrgasmMaxArousal = 90,
					lastOrgasmMaxBoost = 30,
					orgasms = Player.ArousalSettings.OrgasmCount || 0;
				const lastOrgasmBoostDuration = Math.min(300, 60 + orgasms * 5),
					secondsSinceOrgasm = ((Date.now() - lastOrgasm) / 10000) | 0;
				if (secondsSinceOrgasm > lastOrgasmBoostDuration) {
					return 0;
				}
				return Math.min(
					Math.max(0, lastOrgasmMaxArousal - arousal),
					(lastOrgasmMaxBoost *
						(lastOrgasmBoostDuration - secondsSinceOrgasm)) /
						lastOrgasmBoostDuration
				);
			};

			// Handle events
			const OrgasmRecoveryStage = 2;
			if (
				PreviousArousal.OrgasmStage !== OrgasmRecoveryStage &&
				Player.ArousalSettings.OrgasmStage === OrgasmRecoveryStage &&
				bceExpressionsQueue.filter((a) => a.Type === POST_ORGASM_EVENT_TYPE)
					.length === 0
			) {
				pushEvent(w.bce_EventExpressions.PostOrgasm);
				lastOrgasm = Date.now();
			}

			// Keep track of desired changes
			/** @type {{ [key: string]: ExpressionStage }} */
			const desiredExpression = {};

			/** @type {{ [key: string]: { Id: number; Pose: string; Category?: string; Duration: number; Priority: number; Type: string }}} */
			let desiredPose = {};

			/** @type {{ [key: string]: ExpressionStage }} */
			const nextExpression = {};

			/** @type {(expression: string, stage: ExpressionStage, next: ExpressionEvent, faceComponent: string) => void} */
			const trySetNextExpression = (e, exp, next, t) => {
				const priority = exp.Priority || next.Priority || 0;
				if (!nextExpression[t] || nextExpression[t].Priority <= priority) {
					nextExpression[t] = {
						Id: exp.Id,
						Expression: e,
						Duration: exp.Duration,
						Priority: priority,
						Color: exp.Color,
					};
				}
			};

			// Calculate next expression
			for (let j = 0; j < bceExpressionsQueue.length; j++) {
				const next = bceExpressionsQueue[j];
				let active = false;
				if (next.Until > Date.now() || next.Until - next.At < 0) {
					if (Object.keys(next.Expression || {}).length > 0) {
						for (const t of Object.keys(next.Expression)) {
							let durationNow = Date.now() - next.At;
							for (let i = 0; i < next.Expression[t].length; i++) {
								/** @type {ExpressionStage} */
								const exp = next.Expression[t][i];
								durationNow -= exp.Duration;
								if (durationNow < 0 || exp.Duration < 0) {
									active = true;
									if (!exp.Skip) {
										if (
											exp.ExpressionModifier &&
											t in bceExpressionModifierMap
										) {
											const [current] = expression(t);
											if (!exp.Applied) {
												/** @type {number} */
												let idx =
													bceExpressionModifierMap[t].indexOf(current) +
													exp.ExpressionModifier;
												if (idx >= bceExpressionModifierMap[t].length) {
													idx = bceExpressionModifierMap[t].length - 1;
												} else if (idx < 0) {
													idx = 0;
												}
												trySetNextExpression(
													bceExpressionModifierMap[t][idx],
													exp,
													next,
													t
												);
												bceExpressionsQueue[j].Expression[t][i].Applied = true;
											} else {
												// Prevent being overridden by other expressions while also not applying a change
												trySetNextExpression(current, exp, next, t);
											}
										} else {
											trySetNextExpression(exp.Expression, exp, next, t);
										}
									}
									break;
								}
							}
						}
					}
					if (next.Poses?.length) {
						let durationNow = Date.now() - next.At;
						for (const pose of next.Poses) {
							durationNow -= pose.Duration;
							if (durationNow < 0 || pose.Duration < 0) {
								active = true;
								for (const pp of pose.Pose) {
									/** @type {PoseEx} */
									// @ts-ignore
									const p = pp;
									const priority = pose.Priority || next.Priority || 0;
									if (
										!desiredPose[p.Category] ||
										desiredPose[p.Category].Priority <= priority
									) {
										desiredPose[p.Category] = {
											Id: pose.Id,
											Pose: p.Pose,
											Category: p.Category,
											Duration: pose.Duration,
											Priority: priority,
											Type: next.Type,
										};
									}
								}
								break;
							}
						}
					}
				}
				if (!active) {
					const last = bceExpressionsQueue.splice(j, 1);
					j--;
					if (
						!fbcSettings.expressions &&
						last.length > 0 &&
						last[0].Expression
					) {
						for (const t of Object.keys(last[0].Expression)) {
							trySetNextExpression(
								null,
								{ Duration: -1 },
								{
									Priority: 0,
									Type: DEFAULT_EVENT_TYPE,
									Duration: 500,
								},
								t
							);
						}
					}
				}
			}

			// Garbage collect unused expressions - this should occur before manual expressions are detected
			for (let j = 0; j < bceExpressionsQueue.length; j++) {
				for (const t of Object.keys(bceExpressionsQueue[j].Expression || {})) {
					if (!nextExpression[t] || nextExpression[t].Duration > 0) {
						continue;
					}
					const nextId = nextExpression[t].Id,
						nextPriority = nextExpression[t].Priority;

					for (
						let i = 0;
						i < bceExpressionsQueue[j].Expression[t].length;
						i++
					) {
						const exp = bceExpressionsQueue[j].Expression[t][i];
						if (
							exp.Duration < 0 &&
							(exp.Id < nextId || exp.Priority < nextPriority)
						) {
							bceExpressionsQueue[j].Expression[t].splice(i, 1);
							i--;
						}
					}
					if (bceExpressionsQueue[j].Expression[t].length === 0) {
						delete bceExpressionsQueue[j].Expression[t];
					}
				}
				for (let k = 0; k < bceExpressionsQueue[j].Poses?.length; k++) {
					const pose = bceExpressionsQueue[j].Poses[k];
					/** @type {PoseEx[]} */
					// @ts-ignore
					const poseList = pose.Pose;
					const desiredIsNewerAndInfinite = poseList.every(
						// eslint-disable-next-line no-loop-func
						(p) =>
							desiredPose[p.Category]?.Duration < 0 &&
							desiredPose[p.Category]?.Id > pose.Id &&
							(desiredPose[p.Category]?.Type === MANUAL_OVERRIDE_EVENT_TYPE ||
								bceExpressionsQueue[j].Type !== MANUAL_OVERRIDE_EVENT_TYPE)
					);
					if (pose.Duration < 0 && desiredIsNewerAndInfinite) {
						bceExpressionsQueue[j].Poses.splice(k, 1);
						k--;
					}
				}
				if (
					Object.keys(bceExpressionsQueue[j].Expression || {}).length === 0 &&
					bceExpressionsQueue[j].Poses?.length === 0
				) {
					bceExpressionsQueue.splice(j, 1);
					j--;
				}
			}

			// Clean up unused poses
			let needsPoseUpdate = false,
				needsRefresh = false;
			if (Player.ActivePose) {
				for (let i = 0; i < Player.ActivePose.length; i++) {
					const pose = Player.ActivePose[i];
					const p = PoseFemale3DCG.find((pp) => pp.Name === pose);
					if (
						!p?.Category &&
						Object.values(desiredPose).every((v) => v.Pose !== pose)
					) {
						Player.ActivePose.splice(i, 1);
						i--;
						needsPoseUpdate = true;
						needsRefresh = true;
					}
				}
			}

			// Handle arousal-based expressions
			outer: for (const t of Object.keys(w.bce_ArousalExpressionStages)) {
				const [exp] = expression(t);
				// eslint-disable-next-line init-declarations
				let chosenExpression;
				for (const face of w.bce_ArousalExpressionStages[t]) {
					const limit =
						face.Limit - (direction === ArousalMeterDirection.Up ? 0 : 1);
					if (arousal + lastOrgasmAdjustment() >= limit) {
						if (face.Expression !== exp) {
							chosenExpression = face.Expression;
							break;
						} else {
							continue outer;
						}
					}
				}
				if (typeof chosenExpression !== "undefined") {
					const e = {};
					e[t] = [{ Expression: chosenExpression, Duration: -1, Priority: 0 }];
					pushEvent({
						Type: AUTOMATED_AROUSAL_EVENT_TYPE,
						Duration: -1,
						Priority: 0,
						// @ts-ignore
						Expression: e,
					});
				}
			}

			for (const t of faceComponents) {
				const [exp] = expression(t),
					nextExp = nextExpression[t] || {
						Duration: -1,
						Expression: null,
					};
				if (
					nextExp.Expression !== exp &&
					typeof nextExp.Expression !== "undefined"
				) {
					desiredExpression[t] = { ...nextExp };
				}
			}

			if (Object.keys(desiredExpression).length > 0) {
				for (const t of Object.keys(desiredExpression)) {
					if (
						BCX?.getRuleState("block_changing_emoticon").isEnforced &&
						t === "Emoticon"
					) {
						continue;
					}
					setExpression(
						t,
						desiredExpression[t].Expression,
						desiredExpression[t].Color
					);
					ServerSend("ChatRoomCharacterExpressionUpdate", {
						Name: desiredExpression[t].Expression,
						Group: t,
						Appearance: ServerAppearanceBundle(Player.Appearance),
					});
				}

				needsRefresh = true;
			}

			// Figure out desiredPose conflicts
			function resolvePoseConflicts() {
				const maxPriority = Math.max(
						...Object.values(desiredPose).map((p) => p.Priority)
					),
					maxPriorityPoses = Object.entries(desiredPose).filter(
						(p) => p[1].Priority === maxPriority
					);
				let [maxPriorityPose] = maxPriorityPoses;
				if (maxPriorityPoses.length > 1) {
					const maxId = Math.max(...maxPriorityPoses.map((p) => p[1].Id)),
						maxIdPoses = maxPriorityPoses.filter((p) => p[1].Id === maxId);
					[maxPriorityPose] = maxIdPoses;
				} else if (maxPriorityPoses.length === 0) {
					return 0;
				}
				let deleted = 0;
				const conflicts = poseCategories[maxPriorityPose[0]]?.Conflicts || [];
				for (const conflict of conflicts.filter((c) => c in desiredPose)) {
					delete desiredPose[conflict];
					deleted++;
				}
				return deleted;
			}
			while (resolvePoseConflicts() > 0) {
				// Intentionally empty
			}

			if (Object.keys(desiredPose).length === 0) {
				desiredPose = {
					BodyUpper: {
						Pose: "BaseUpper",
						Duration: -1,
						Id: newUniqueId(),
						Priority: 0,
						Type: DEFAULT_EVENT_TYPE,
					},
					BodyLower: {
						Pose: "BaseLower",
						Duration: -1,
						Id: newUniqueId(),
						Priority: 0,
						Type: DEFAULT_EVENT_TYPE,
					},
				};
			}
			const basePoseMatcher = /^Base(Lower|Upper)$/u;
			const newPose = Object.values(desiredPose)
				.map((p) => p.Pose)
				.filter((p) => !basePoseMatcher.test(p));
			if (JSON.stringify(Player.ActivePose) !== JSON.stringify(newPose)) {
				Player.ActivePose = newPose;
				needsPoseUpdate = true;
				needsRefresh = true;
			}

			if (needsPoseUpdate) {
				ServerSend("ChatRoomCharacterPoseUpdate", {
					Pose: Player.ActivePose,
				});
			}

			if (needsRefresh) {
				CharacterRefresh(Player, false, false);
			}

			PreviousArousal = { ...Player.ArousalSettings };
		}

		createTimer(CustomArousalExpression, 250);
	}

	async function layeringMenu() {
		await waitFor(() => !!Player?.AppearanceLayers);

		const canAccessLayeringMenus = () => {
			const c = CharacterGetCurrent();
			return (
				fbcSettings.layeringMenu &&
				(fbcSettings.allowLayeringWhileBound ||
					(Player.CanInteract() &&
						c?.FocusGroup?.Name &&
						!InventoryGroupIsBlocked(c, c.FocusGroup.Name)))
			);
		};

		// Pseudo-items that we do not want to process for color copying
		const ignoredColorCopiableAssets = [
			"LeatherCrop",
			"LeatherWhip",
			"ShockCollarRemote",
			"SpankingToys",
			"VibratorRemote",
		];
		const colorCopiableAssets = Asset.filter(
			(ass) =>
				AssetGroup.filter(
					(a) =>
						a.Name.startsWith("Item") &&
						!/\d$/u.test(a.Name) &&
						a.Asset.find((b) => b.Name === ass.Name)
				).length > 1
		)
			.filter((v, i, a) => a.findIndex((as) => as.Name === v.Name) === i)
			.map((a) => a.Name)
			.filter((a) => !ignoredColorCopiableAssets.includes(a));

		const layerPriority = "bce_LayerPriority";

		/** @type {(C: Character, item: Item) => boolean} */
		function assetVisible(C, item) {
			return item && !!C.AppearanceLayers.find((a) => a.Asset === item.Asset);
		}

		/** @type {(C: Character, item: Item) => boolean} */
		function assetWorn(C, item) {
			return item && !!C.Appearance.find((a) => a === item);
		}

		/** @type {Record<string, number>} */
		let layerPriorities = {};
		let advancedPriorities = false;

		/** @type {(item: Item) => void} */
		function updateItemPriorityFromLayerPriorityInput(item) {
			if (item) {
				if (advancedPriorities) {
					const priorities = Object.entries(layerPriorities);
					if (!item.Property) {
						item.Property = { OverridePriority: {} };
					} else {
						item.Property.OverridePriority = {};
					}
					for (const [layer, priority] of priorities) {
						item.Property.OverridePriority[layer] = priority;
					}
				} else {
					const priority = parseInt(ElementValue(layerPriority));
					if (!item.Property) {
						item.Property = { OverridePriority: priority };
					} else {
						item.Property.OverridePriority = priority;
					}
				}
				CharacterRefresh(preview, false, false);
			}
		}

		let prioritySubscreen = false;
		let layerPage = 0;

		const preview = CharacterLoadSimple(
			`LayeringPreview-${Player.MemberNumber}`
		);

		/**
		 * @param {string} layerName
		 */
		function layerElement(layerName) {
			return `${layerPriority}___${layerName}`;
		}

		patchFunction(
			"DrawCharacter",
			{
				"var OverrideDark = ":
					"var OverrideDark = C.AccountName.startsWith('LayeringPreview') || ",
			},
			"Layering preview affected by blindness"
		);

		/** @type {(C: Character, FocusItem: Item) => void} */
		function prioritySubscreenEnter(C, FocusItem) {
			DialogFocusItem = FocusItem;
			prioritySubscreen = true;
			advancedPriorities = false;
			const initialValue = C.AppearanceLayers.find(
				(a) => a.Asset === FocusItem.Asset
			).Priority;
			layerPriorities = {};
			for (const layer of FocusItem.Asset.Layer) {
				if (!layer.Name) {
					continue;
				}
				const drawnLayer = C.AppearanceLayers.find(
					(a) => a.Asset === FocusItem.Asset && a.Name === layer.Name
				);
				let priority = layer.Priority ?? FocusItem.Asset.Priority ?? -1;
				if (
					isNonNullObject(FocusItem?.Property?.OverridePriority) &&
					layer.Name in FocusItem.Property.OverridePriority
				) {
					priority = FocusItem?.Property?.OverridePriority[layer.Name];
				}
				if (drawnLayer) {
					priority = drawnLayer.Priority ?? priority;
				}
				layerPriorities[layer.Name] = priority;
				const el = ElementCreateInput(
					layerElement(layer.Name),
					"number",
					"",
					"20"
				);
				ElementValue(layerElement(layer.Name), priority.toString());
				el.setAttribute("data-layer", layer.Name);
				el.className = layerPriority;
				// eslint-disable-next-line no-loop-func -- layerPriorities scope is outside the function, ElementValue and InventoryGet are global functions
				el.addEventListener("change", () => {
					layerPriorities[layer.Name] = parseInt(
						ElementValue(layerElement(layer.Name))
					);
					updateItemPriorityFromLayerPriorityInput(
						InventoryGet(preview, FocusItem.Asset.Group.Name)
					);
				});
			}
			hideAllLayerElements();
			if (isNonNullObject(FocusItem?.Property?.OverridePriority)) {
				advancedPriorities = true;
			}
			ElementCreateInput(layerPriority, "number", "", "20");
			ElementValue(layerPriority, initialValue.toString());
			layerPage = 0;
			preview.Appearance = C.Appearance.slice();
			CharacterRefresh(preview, false, false);
			document.getElementById(layerPriority).addEventListener("change", () => {
				updateItemPriorityFromLayerPriorityInput(
					InventoryGet(preview, FocusItem.Asset.Group.Name)
				);
			});
		}
		function prioritySubscreenExit() {
			prioritySubscreen = false;
			ElementRemove(layerPriority);
			document.querySelectorAll(`.${layerPriority}`).forEach((e) => {
				ElementRemove(e.id);
			});
			DialogFocusItem = null;
		}

		for (const func of ["DialogLeave", "DialogLeaveItemMenu"]) {
			SDK.hookFunction(
				func,
				HOOK_PRIORITIES.OverrideBehaviour,
				// eslint-disable-next-line no-loop-func
				(args, next) => {
					if (prioritySubscreen) {
						prioritySubscreenExit();
						return;
					}
					next(args);
				}
			);
		}

		SDK.hookFunction(
			"AppearanceExit",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				if (CharacterAppearanceMode === "") {
					ElementRemove(layerPriority);
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"AppearanceLoad",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const ret = next(args);
				ElementCreateInput(layerPriority, "number", "", "20");
				ElementPosition(layerPriority, -1000, -1000, 0);
				return ret;
			}
		);

		SDK.hookFunction(
			"AppearanceRun",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (prioritySubscreen) {
					prioritySubscreenDraw();
					return null;
				}
				const ret = next(args);
				if (fbcSettings.layeringMenu) {
					const C = CharacterAppearanceSelection;
					const item = C.Appearance.find((a) => a.Asset.Group === C.FocusGroup);
					if (CharacterAppearanceMode === "Cloth" && assetVisible(C, item)) {
						DrawButton(
							110,
							70,
							52,
							52,
							"",
							"White",
							ICONS.LAYERS,
							displayText("Modify layering priority")
						);
					}
				}
				return ret;
			}
		);

		SDK.hookFunction(
			"AppearanceClick",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (fbcSettings.layeringMenu) {
					const C = CharacterAppearanceSelection;
					const item = C.Appearance.find(
						(a) => a.Asset.Group?.Name === C.FocusGroup?.Name
					);
					if (prioritySubscreen) {
						prioritySubscreenClick(C, item);
						return null;
					} else if (
						MouseIn(110, 70, 52, 52) &&
						CharacterAppearanceMode === "Cloth" &&
						assetVisible(C, item)
					) {
						prioritySubscreenEnter(C, item);
					}
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"DialogDraw",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const C = CharacterGetCurrent();
				const ret = next(args);
				if (
					DialogMenuMode === "items" &&
					isCharacter(C) &&
					canAccessLayeringMenus()
				) {
					const focusItem = InventoryGet(C, C.FocusGroup?.Name);
					if (assetWorn(C, focusItem)) {
						if (
							colorCopiableAssets.includes(focusItem.Asset.Name) &&
							Player.CanInteract()
						) {
							DrawButton(
								10,
								832,
								52,
								52,
								"",
								"White",
								ICONS.PAINTBRUSH,
								displayText(`Copy colors to other $Item`, {
									$Item: focusItem.Asset.Description.toLowerCase(),
								})
							);
						}
					}
					if (assetVisible(C, focusItem)) {
						DrawButton(
							10,
							948,
							52,
							52,
							"",
							"White",
							ICONS.LAYERS,
							displayText("Modify layering priority")
						);
					}
				}
				return ret;
			}
		);

		/**
		 * @returns {[number, number, number, number]}
		 */
		function priorityAcceptButtonPosition() {
			return advancedPriorities ? [1715, 75, 90, 90] : [900, 280, 90, 90];
		}

		function hideAllLayerElements() {
			const layerNames = Object.keys(layerPriorities);
			for (let i = 0; i < layerNames.length; i++) {
				ElementPosition(layerElement(layerNames[i]), -1000, -1000, 0, 0);
			}
		}

		const layersPerColumn = 10;
		const layersPerPage = layersPerColumn * 2;
		function prioritySubscreenDraw() {
			DrawCharacter(preview, 1300, 100, 0.9, false);

			const layerNames = Object.keys(layerPriorities);
			if (layerNames.length > 0) {
				DrawCheckbox(100, 50, 64, 64, "", advancedPriorities, false, "White");
				drawTextFitLeft(
					displayText("Adjust individual layers"),
					174,
					82,
					400,
					"White",
					"Black"
				);
			}
			if (advancedPriorities) {
				DrawButton(1815, 180, 90, 90, "", "White", "Icons/Next.png");
				drawTextFitLeft(
					`${layerPage + 1} / ${Math.ceil(layerNames.length / layersPerPage)}`,
					1715,
					235,
					90,
					"White",
					"Black"
				);
				ElementPosition(layerPriority, -1000, -1000, 0, 0);
				for (let i = 0; i < layersPerPage && i < layerNames.length; i++) {
					const layerName = layerNames[i + layerPage * layersPerPage];
					const x = 200 + Math.floor(i / layersPerColumn) * 500,
						y = 160 + (i % layersPerColumn) * 70;
					ElementPosition(layerElement(layerName), x, y, 100);
					drawTextFitLeft(layerName, x + 50, y, 400, "White", "Black");
				}
			} else {
				// Localization guide: valid options for priorityField can be seen in the "const FIELDS" object above
				DrawText(displayText(`Set item priority`), 950, 150, "White", "Black");
				ElementPosition(layerPriority, 950, 230, 100);
				hideAllLayerElements();
			}
			DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
			DrawButton(
				...priorityAcceptButtonPosition(),
				"",
				"White",
				"Icons/Accept.png",
				// Localization guide: valid options for priorityField can be seen in the "const FIELDS" object above
				displayText(`Set priority`)
			);
		}

		/**
		 * @param {Character} C
		 * @param {Item} focusItem
		 */
		function prioritySubscreenClick(C, focusItem) {
			if (MouseIn(100, 50, 64, 64)) {
				advancedPriorities = !advancedPriorities;
			} else if (MouseIn(1815, 75, 90, 90)) {
				prioritySubscreenExit();
			} else if (MouseIn(...priorityAcceptButtonPosition())) {
				savePrioritySubscreenChanges(C, focusItem);
			} else if (advancedPriorities && MouseIn(1815, 180, 90, 90)) {
				layerPage++;
				if (layerPage * layersPerPage >= Object.keys(layerPriorities).length) {
					layerPage = 0;
				}
				hideAllLayerElements();
			}
		}

		SDK.hookFunction(
			"DialogDraw",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				const C = CharacterGetCurrent(),
					focusItem = InventoryGet(C, C.FocusGroup?.Name);
				if (prioritySubscreen) {
					if (canAccessLayeringMenus()) {
						if (focusItem) {
							prioritySubscreenDraw();
							return null;
						}
						prioritySubscreenExit();
					} else {
						prioritySubscreenExit();
					}
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"DialogClick",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (!canAccessLayeringMenus()) {
					return next(args);
				}
				const C = CharacterGetCurrent(),
					focusItem = InventoryGet(C, C.FocusGroup?.Name);
				if (focusItem) {
					if (prioritySubscreen) {
						prioritySubscreenClick(C, focusItem);
						return null;
					}
					if (assetVisible(C, focusItem) && MouseIn(10, 948, 52, 52)) {
						prioritySubscreenEnter(C, focusItem);
						return null;
					} else if (
						assetWorn(C, focusItem) &&
						MouseIn(10, 832, 52, 52) &&
						colorCopiableAssets.includes(focusItem.Asset.Name) &&
						Player.CanInteract()
					) {
						copyColors(C, focusItem);
						return null;
					}
				}
				return next(args);
			}
		);

		/** @type {(C: Character, focusItem: Item) => void} */
		function copyColors(C, focusItem) {
			for (const item of C.Appearance) {
				copyColorTo(item);
			}
			if (CurrentScreen === "ChatRoom") {
				ChatRoomCharacterUpdate(C);
				fbcSendAction(
					displayText(
						"$TargetName's $ItemName colors spread from their $ItemGroup",
						{
							$TargetName: CharacterNickname(C),
							$ItemName: focusItem.Asset.Description.toLowerCase(),
							$ItemGroup: focusItem.Asset.Group.Description.toLowerCase(),
						}
					)
				);
			} else {
				CharacterRefresh(C);
			}

			/** @type {(item: Item) => void} */
			function copyColorTo(item) {
				if (item.Asset.Name === focusItem.Asset.Name) {
					if (Array.isArray(focusItem.Color)) {
						if (Array.isArray(item.Color)) {
							for (
								let i = 0;
								i < item.Color.length && i < focusItem.Color.length;
								i++
							) {
								item.Color[item.Color.length - (i + 1)] =
									focusItem.Color[focusItem.Color.length - (i + 1)];
							}
						} else {
							item.Color = focusItem.Color[focusItem.Color.length - 1];
						}
					} else if (Array.isArray(item.Color)) {
						for (let i = 0; i < item.Color.length; i++) {
							item.Color[i] = focusItem.Color;
						}
					} else {
						item.Color = [...focusItem.Color];
					}
				}
			}
		}

		/** @type {(C: Character, focusItem: Item) => void} */
		function savePrioritySubscreenChanges(C, focusItem) {
			updateItemPriorityFromLayerPriorityInput(focusItem);
			debug("updated item", focusItem);
			CharacterRefresh(C, false, false);
			ChatRoomCharacterItemUpdate(C, C.FocusGroup?.Name);
			prioritySubscreenExit();
		}
	}

	function cacheClearer() {
		const cacheClearInterval = 1 * 60 * 60 * 1000;

		w.bceClearCaches = async function () {
			const start = Date.now();
			if (
				!(await waitFor(
					// Only clear when in chat room and not inspecting a character
					() => CurrentScreen === "ChatRoom" && !CurrentCharacter,
					() => Date.now() - start > cacheClearInterval
				))
			) {
				return;
			}
			if (!fbcSettings.automateCacheClear) {
				return;
			}

			debug("Clearing caches");
			if (GLDrawCanvas.GL.textureCache) {
				GLDrawCanvas.GL.textureCache.clear();
			}
			GLDrawResetCanvas();

			debug("Clearing old characters from cache");
			const oldOnlineCharacters = Character.filter(
				(c) =>
					c.IsOnline?.() &&
					!ChatRoomCharacter.some((cc) => cc.MemberNumber === c.MemberNumber)
			);
			oldOnlineCharacters.forEach((c) => CharacterDelete(c.AccountName));
			Character.filter((c) => c.IsOnline?.()).forEach((c) =>
				CharacterRefresh(c, false, false)
			);
		};

		const clearCaches = () => {
			if (fbcSettings.automateCacheClear) {
				w.bceClearCaches();
			}
		};

		createTimer(clearCaches, cacheClearInterval);
	}

	function chatRoomOverlay() {
		SDK.hookFunction(
			"ChatRoomDrawCharacterOverlay",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const ret = next(args);
				const [C, CharX, CharY, Zoom] = args;
				if (
					isCharacter(C) &&
					typeof CharX === "number" &&
					typeof CharY === "number" &&
					typeof Zoom === "number" &&
					C.FBC &&
					ChatRoomHideIconState === 0
				) {
					const icon = ["1", "2", "3"].includes(C.FBC.split(".")[0])
						? ICONS.BCE_USER
						: ICONS.USER;
					DrawImageResize(
						icon,
						CharX + 270 * Zoom,
						CharY,
						40 * Zoom,
						40 * Zoom
					);
					DrawTextFit(
						/^\d+\.\d+(\.\d+)?$/u.test(C.FBC) ? C.FBC : "",
						CharX + 290 * Zoom,
						CharY + 30 * Zoom,
						40 * Zoom,
						DEVS.includes(C.MemberNumber) ? "#b33cfa" : "White",
						"Black"
					);
					if (
						C.FBC &&
						characterStates.get(C.MemberNumber)?.clamped > Date.now()
					) {
						DrawImageResize(
							ICONS.MUTE,
							CharX + 70 * Zoom,
							CharY + 40 * Zoom,
							40 * Zoom,
							40 * Zoom
						);
					}
				}
				return ret;
			}
		);
	}

	/** @type {(target?: number, requestReply?: boolean) => void} */
	function sendHello(target = null, requestReply = false) {
		if (!settingsLoaded()) {
			// Don't send hello until settings are loaded
			return;
		}
		/** @type {ChatMessage} */
		const message = {
			Type: HIDDEN,
			Content: BCE_MSG,
			Sender: Player.MemberNumber,
			Dictionary: [
				{
					message: {
						type: MESSAGE_TYPES.Hello,
						version: FBC_VERSION,
						alternateArousal: !!fbcSettings.alternateArousal,
						replyRequested: requestReply,
						capabilities: CAPABILITIES,
					},
				},
			],
		};
		if (target) {
			message.Target = target;
		}
		if (fbcSettings.alternateArousal) {
			message.Dictionary[0].message.progress =
				Player.BCEArousalProgress || Player.ArousalSettings.Progress || 0;
			message.Dictionary[0].message.enjoyment = Player.BCEEnjoyment || 1;
		}
		if (fbcSettings.shareAddons) {
			message.Dictionary[0].message.otherAddons = bcModSdk.getModsInfo();
		}
		ServerSend("ChatRoomChat", message);
	}
	if (ServerIsConnected && ServerPlayerIsInChatRoom()) {
		sendHello(null, true);
	}
	createTimer(() => {
		const loadedAddons = bcModSdk.getModsInfo();
		if (
			fbcSettings.shareAddons &&
			JSON.stringify(loadedAddons) !== JSON.stringify(Player.FBCOtherAddons) &&
			ServerIsConnected &&
			ServerPlayerIsInChatRoom()
		) {
			Player.FBCOtherAddons = loadedAddons;
			sendHello(null, true);
		}
	}, 5000);

	async function hiddenMessageHandler() {
		await waitFor(() => ServerSocket && ServerIsConnected);

		/**
		 * @param {ChatMessage | BCEChatMessage} data
		 */
		function parseBCEMessage(data) {
			/** @type {BCEMessage} */
			let message = {
				type: null,
				version: null,
			};
			if (Array.isArray(data.Dictionary)) {
				message = data.Dictionary?.find((t) => t.message)?.message || message;
			} else {
				message = data.Dictionary?.message || message;
			}
			return message;
		}

		/**
		 * @param {Character} sender
		 * @param {BCEMessage} message
		 * @param {boolean} [deferred]
		 */
		function processBCEMessage(sender, message, deferred = false) {
			debug(
				"Processing BCE message",
				sender,
				message,
				deferred ? "(deferred)" : ""
			);
			if (!sender?.ArousalSettings && !deferred) {
				/**
				 * FBC's socket listener may in some cases run before the game's socket listener initializes the character
				 * This is an attempt to fix the issue by ensuring the message gets processed at the end of the current
				 * event loop.
				 */
				logWarn(
					"No arousal settings found for",
					sender,
					"; deferring execution to microtask."
				);
				queueMicrotask(() => {
					processBCEMessage(sender, message, true);
				});
				return;
			}

			if (!sender?.ArousalSettings) {
				logWarn("No arousal settings found for", sender);
			}

			switch (message.type) {
				case MESSAGE_TYPES.Hello:
					sender.FBC = message.version;
					sender.BCEArousal = message.alternateArousal || false;
					sender.BCEArousalProgress =
						message.progress || sender.ArousalSettings?.Progress || 0;
					sender.BCEEnjoyment = message.enjoyment || 1;
					sender.BCECapabilities = message.capabilities;
					if (message.replyRequested) {
						sendHello(sender.MemberNumber);
					}
					sender.FBCOtherAddons = message.otherAddons;
					break;
				case MESSAGE_TYPES.ArousalSync:
					sender.BCEArousal = message.alternateArousal || false;
					sender.BCEArousalProgress = message.progress || 0;
					sender.BCEEnjoyment = message.enjoyment || 1;
					break;
				case MESSAGE_TYPES.Activity:
					// Sender is owner and player is not already wearing a club slave collar
					if (
						sender.MemberNumber === Player.Ownership?.MemberNumber &&
						!Player.Appearance.some((a) => a.Asset.Name === "ClubSlaveCollar")
					) {
						bceStartClubSlave();
					}
					break;
				default:
					break;
			}
		}

		registerSocketListener(
			"ChatRoomMessage",
			// eslint-disable-next-line complexity
			(
				/** @type {ChatMessage | BCEChatMessage} */
				data
			) => {
				if (data.Type !== HIDDEN) {
					return;
				}
				if (data.Content === "BCEMsg") {
					const sender = Character.find((a) => a.MemberNumber === data.Sender);
					if (!sender) {
						return;
					}
					const message = parseBCEMessage(data);
					processBCEMessage(sender, message);
				}
			}
		);

		registerSocketListener(
			"ChatRoomSyncMemberJoin",
			(
				/** @type {ChatRoomSyncMemberJoinEvent} */
				data
			) => {
				if (data.MemberNumber !== Player.MemberNumber) {
					sendHello(data.MemberNumber);
				}
			}
		);

		registerSocketListener("ChatRoomSync", () => {
			sendHello();
		});
	}

	async function privateWardrobe() {
		await waitFor(() => !!Player);

		let inCustomWardrobe = false,
			/** @type {Character} */
			targetCharacter = null;

		/** @type {string} */
		let appearanceBackup = null;

		let excludeBodyparts = false;

		function currentWardrobeTargetIsPlayer() {
			return (
				(inCustomWardrobe && targetCharacter?.IsPlayer()) ||
				CharacterAppearanceSelection?.IsPlayer()
			);
		}

		patchFunction(
			"DrawProcess",
			{
				'CurrentScreen !== "Crafting"':
					'CurrentScreen !== "Crafting" && CurrentScreen !== "Wardrobe"',
			},
			"Full wardrobe may display blur and blindness effects of the target character"
		);

		SDK.hookFunction(
			"CharacterAppearanceWardrobeLoad",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				const [C] = args;
				if (fbcSettings.privateWardrobe && CurrentScreen === "Appearance") {
					inCustomWardrobe = true;
					targetCharacter = isCharacter(C) ? C : CharacterGetCurrent();
					CommonSetScreen("Character", "Wardrobe");
					return null;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"AppearanceLoad",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const ret = next(args);
				if (inCustomWardrobe) {
					CharacterAppearanceBackup = appearanceBackup;
				}
				return ret;
			}
		);

		SDK.hookFunction(
			"AppearanceRun",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				if (
					CharacterAppearanceMode === "Wardrobe" &&
					currentWardrobeTargetIsPlayer()
				) {
					DrawCheckbox(1300, 350, 64, 64, "", excludeBodyparts, false, "white");
					drawTextFitLeft(
						displayText("Load without body parts"),
						1374,
						380,
						630,
						"white"
					);
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"AppearanceClick",
			HOOK_PRIORITIES.ModifyBehaviourMedium,
			(args, next) => {
				if (
					CharacterAppearanceMode === "Wardrobe" &&
					MouseIn(1300, 350, 64, 64) &&
					currentWardrobeTargetIsPlayer()
				) {
					excludeBodyparts = !excludeBodyparts;
					return null;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"WardrobeLoad",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				appearanceBackup = CharacterAppearanceBackup;
				return next(args);
			}
		);

		SDK.hookFunction(
			"WardrobeRun",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const playerBackup = Player;
				// Replace Player with target character in rendering
				if (inCustomWardrobe) {
					// @ts-ignore - explicitly overriding with another Character temporarily
					Player = targetCharacter;
				}
				const ret = next(args);
				if (inCustomWardrobe) {
					Player = playerBackup;
				}
				DrawText(
					`Page: ${((WardrobeOffset / 12) | 0) + 1}/${WardrobeSize / 12}`,
					300,
					35,
					"White"
				);
				DrawCheckbox(10, 74, 64, 64, "", excludeBodyparts, false, "white");
				drawTextFitLeft(
					displayText("Exclude body parts"),
					84,
					106,
					300,
					"white"
				);
				return ret;
			}
		);

		SDK.hookFunction(
			"WardrobeClick",
			HOOK_PRIORITIES.ModifyBehaviourMedium,
			(args, next) => {
				if (MouseIn(10, 74, 64, 64)) {
					excludeBodyparts = !excludeBodyparts;
					return null;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"WardrobeExit",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (!inCustomWardrobe) {
					return next(args);
				}
				CommonSetScreen("Character", "Appearance");
				inCustomWardrobe = false;
				return null;
			}
		);

		SDK.hookFunction(
			"WardrobeFastLoad",
			HOOK_PRIORITIES.OverrideBehaviour,
			/** @type {(args: [Character, number, boolean], next: (args: [Character, number, boolean]) => unknown) => unknown} */
			(args, next) => {
				let [C] = args;
				const base = C.Appearance.filter(
					(a) => a.Asset.Group.IsDefault && !a.Asset.Group.Clothing
				);
				if (inCustomWardrobe && isCharacter(C) && C.IsPlayer()) {
					args[0] = targetCharacter;
					C = targetCharacter;
					args[2] = false;
				}
				const ret = next(args);
				if (excludeBodyparts) {
					C.Appearance = [
						...base,
						...C.Appearance.filter(
							(a) => !a.Asset.Group.IsDefault || a.Asset.Group.Clothing
						),
					];
					CharacterLoadCanvas(C);
				}
				return ret;
			}
		);

		SDK.hookFunction(
			"WardrobeFastSave",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				const [C] = args;
				if (inCustomWardrobe && isCharacter(C) && C.IsPlayer()) {
					args[0] = targetCharacter;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"ServerPlayerIsInChatRoom",
			HOOK_PRIORITIES.AddBehaviour,
			/** @type {(args: [], next: (args: []) => boolean) => boolean} */
			(args, next) =>
				(inCustomWardrobe && CharacterAppearanceReturnRoom === "ChatRoom") ||
				next(args)
		);

		/** @type {(e: KeyboardEvent) => void} */
		function keyHandler(e) {
			if (!fbcSettings.privateWardrobe) {
				return;
			}
			if (e.key === "Escape" && inCustomWardrobe) {
				WardrobeExit();
				e.stopPropagation();
				e.preventDefault();
			}
		}

		document.addEventListener("keydown", keyHandler, true);
		document.addEventListener("keypress", keyHandler, true);
	}

	async function antiGarbling() {
		await waitFor(() => !!SpeechGarbleByGagLevel);

		/*
		 * Antigarble patch for message printing
		 * Whisper reply button
		 */
		patchFunction(
			"ChatRoomMessageDisplay",
			{
				"div.innerHTML = msg;": `div.innerHTML = msg;
				if (data.Type === "Whisper") {
					let repl = document.createElement("a");
					repl.href = "#";
					repl.onclick = (e) => {
						e.preventDefault();
						ElementValue("InputChat", \`/w \${SenderCharacter.MemberNumber} \${ElementValue("InputChat").replace(/^\\/(beep|w) \\S+ ?/u, '')}\`);
						window.InputChat.focus();
					};
					repl.classList.add("bce-button");
					repl.textContent = '\u21a9\ufe0f';
					div.prepend(repl);
				}`,
			},
			"No whisper reply button in chat"
		);

		ChatRoomRegisterMessageHandler({
			Priority: 1,
			Description: "Anti-garbling by FBC",
			Callback: (data, sender, msg) => {
				const clientGagged = msg.endsWith(GAGBYPASSINDICATOR);
				msg = msg.replace(/[\uf123-\uf124]/gu, "");
				let handled = clientGagged;
				if (fbcSettings.gagspeak && !clientGagged) {
					switch (data.Type) {
						case "Whisper":
							{
								let original = msg;
								if (
									data.Dictionary?.some((d) => d.Tag === BCX_ORIGINAL_MESSAGE)
								) {
									original = ChatRoomHTMLEntities(
										data.Dictionary.find((d) => d.Tag === BCX_ORIGINAL_MESSAGE)
											.Text
									);
								}
								if (
									original.toLowerCase().trim() !== msg.toLowerCase().trim()
								) {
									msg += ` (${original})`;
									handled = true;
								}
							}
							break;
						case "Chat":
							{
								const original = msg;
								msg = SpeechGarble(sender, msg);
								if (
									original.toLowerCase().trim() !== msg.toLowerCase().trim() &&
									SpeechGetTotalGagLevel(sender) > 0
								) {
									msg += ` (${original})`;
									handled = true;
								}
							}
							break;
						default:
							break;
					}
				}

				const skip = (
					/** @type {ChatRoomMessageHandler} */
					handler
				) =>
					handler.Description === "Sensory-deprivation processing" &&
					!!fbcSettings.gagspeak &&
					handled;
				return { skip, msg };
			},
		});

		// ServerSend hook for client-side gagspeak, priority lower than BCX's whisper dictionary hook
		SDK.hookFunction("ServerSend", 0, (args, next) => {
			if (args.length < 2) {
				return next(args);
			}
			const [message, data] = args;
			if (!isString(message) || !isChatMessage(data)) {
				return next(args);
			}
			if (message === "ChatRoomChat") {
				switch (data.Type) {
					case "Whisper":
						{
							const idx = data.Dictionary?.findIndex(
								(d) => d.Tag === BCX_ORIGINAL_MESSAGE
							);
							if (
								idx >= 0 &&
								(fbcSettings.antiAntiGarble ||
									fbcSettings.antiAntiGarbleStrong ||
									fbcSettings.antiAntiGarbleExtra)
							) {
								data.Dictionary.splice(idx, 1);
							}
						}
						break;
					case "Chat":
						{
							const gagLevel = SpeechGetTotalGagLevel(Player);
							if (gagLevel > 0) {
								if (fbcSettings.antiAntiGarble) {
									data.Content =
										SpeechGarbleByGagLevel(1, data.Content) +
										GAGBYPASSINDICATOR;
								} else if (fbcSettings.antiAntiGarbleExtra && gagLevel > 24) {
									const icIndicator = "\uF124";
									let inOOC = false;
									data.Content = `${data.Content.split("")
										.map((c) => {
											switch (c) {
												case "(":
													inOOC = true;
													return c;
												case ")":
													inOOC = false;
													return c;
												default:
													return inOOC ? c : icIndicator;
											}
										})
										.join("")
										.replace(
											new RegExp(`${icIndicator}+`, "gu"),
											"m"
										)}${GAGBYPASSINDICATOR}`;
								} else if (
									fbcSettings.antiAntiGarbleStrong ||
									fbcSettings.antiAntiGarbleExtra
								) {
									data.Content =
										SpeechGarbleByGagLevel(gagLevel, data.Content) +
										GAGBYPASSINDICATOR;
								}
							}
						}
						break;
					default:
						break;
				}
			}
			return next([message, data, ...args.slice(2)]);
		});

		// X, Y, width, height. X and Y centered.
		const gagAntiCheatMenuPosition = /** @type {const} */ ([
				1700, 908, 200, 45,
			]),
			/** @type {[number, number, number, number]} */
			gagCheatMenuPosition = [1700, 908 + 45, 200, 45],
			tooltipPosition = { X: 1000, Y: 910, Width: 200, Height: 90 };

		SDK.hookFunction(
			"ChatRoomRun",
			HOOK_PRIORITIES.ModifyBehaviourHigh,
			(args, nextFunc) => {
				const ret = nextFunc(args);

				if (w.InputChat) {
					/** @type {() => boolean} */
					const isWhispering = () =>
						w.InputChat?.value.startsWith("/w ") ||
						!!w.ChatRoomTargetMemberNumber;
					if (
						w.InputChat?.classList.contains(WHISPER_CLASS) &&
						!isWhispering()
					) {
						w.InputChat.classList.remove(WHISPER_CLASS);
					} else if (fbcSettings.whisperInput && isWhispering()) {
						w.InputChat?.classList.add(WHISPER_CLASS);
					}
					if (Player.ChatSettings?.ColorTheme?.startsWith("Dark")) {
						if (!w.InputChat.classList.contains(DARK_INPUT_CLASS)) {
							w.InputChat.classList.add(DARK_INPUT_CLASS);
						}
					} else if (w.InputChat.classList.contains(DARK_INPUT_CLASS)) {
						w.InputChat.classList.remove(DARK_INPUT_CLASS);
					}
				}

				if (!fbcSettings.showQuickAntiGarble || fbcSettings.discreetMode) {
					return ret;
				}
				const shorttip = displayText("Gagging"),
					tooltip = displayText("Antigarble anti-cheat strength");

				let color = "white",
					label = "None";

				const disableBoth = () => displayText("$tip: None", { $tip: tooltip }),
					enableLimited = () => displayText("$tip: Limited", { $tip: tooltip }),
					enableStrong = () => displayText("$tip: Full", { $tip: tooltip }),
					// eslint-disable-next-line sort-vars
					enableExtra = () => displayText("$tip: Extra", { $tip: tooltip });

				let next = enableLimited,
					previous = enableExtra;

				if (fbcSettings.antiAntiGarble) {
					color = "yellow";
					label = "Limited";
					next = enableStrong;
					previous = disableBoth;
				} else if (fbcSettings.antiAntiGarbleStrong) {
					color = "red";
					label = "Full";
					next = enableExtra;
					previous = enableLimited;
				} else if (fbcSettings.antiAntiGarbleExtra) {
					color = "purple";
					label = "Extra";
					next = disableBoth;
					previous = enableStrong;
				}
				DrawBackNextButton(
					...gagAntiCheatMenuPosition,
					// Localization guide: ignore, covered by localizing the arrow functions above
					displayText(`$tip: ${label}`, { $tip: shorttip }),
					color,
					"",
					previous,
					next,
					// eslint-disable-next-line no-undefined
					undefined,
					// eslint-disable-next-line no-undefined
					undefined,
					tooltipPosition
				);

				/** @type {[string, string, string, () => string, () => string, boolean, number, Position]} */
				const gagCheatMenuParams = fbcSettings.gagspeak
					? [
							displayText("Understand: Yes"),
							"green",
							"",
							() => displayText("Understand gagspeak: No"),
							() => displayText("Understand gagspeak: No"),
							// eslint-disable-next-line no-undefined
							undefined,
							// eslint-disable-next-line no-undefined
							undefined,
							tooltipPosition,
					  ]
					: [
							"Understand: No",
							"white",
							"",
							() => displayText("Understand gagspeak: Yes"),
							() => displayText("Understand gagspeak: Yes"),
							// eslint-disable-next-line no-undefined
							undefined,
							// eslint-disable-next-line no-undefined
							undefined,
							tooltipPosition,
					  ];
				DrawBackNextButton(...gagCheatMenuPosition, ...gagCheatMenuParams);

				return ret;
			}
		);

		SDK.hookFunction(
			"ChatRoomClick",
			HOOK_PRIORITIES.ModifyBehaviourHigh,
			(args, nextFunc) => {
				if (fbcSettings.showQuickAntiGarble && !fbcSettings.discreetMode) {
					if (MouseIn(...gagAntiCheatMenuPosition)) {
						const disableAll = () => {
								fbcSettings.antiAntiGarble = false;
								fbcSettings.antiAntiGarbleStrong = false;
								fbcSettings.antiAntiGarbleExtra = false;
								defaultSettings.antiAntiGarble.sideEffects(false);
								defaultSettings.antiAntiGarbleStrong.sideEffects(false);
								defaultSettings.antiAntiGarbleExtra.sideEffects(false);
							},
							enableLimited = () => {
								fbcSettings.antiAntiGarble = true;
								defaultSettings.antiAntiGarble.sideEffects(true);
							},
							enableStrong = () => {
								fbcSettings.antiAntiGarbleStrong = true;
								defaultSettings.antiAntiGarbleStrong.sideEffects(true);
							},
							// eslint-disable-next-line sort-vars
							enableExtra = () => {
								fbcSettings.antiAntiGarbleExtra = true;
								defaultSettings.antiAntiGarbleExtra.sideEffects(true);
							};
						let next = enableLimited,
							previous = enableExtra;
						if (fbcSettings.antiAntiGarble) {
							next = enableStrong;
							previous = disableAll;
						} else if (fbcSettings.antiAntiGarbleStrong) {
							next = enableExtra;
							previous = enableLimited;
						} else if (fbcSettings.antiAntiGarbleExtra) {
							next = disableAll;
							previous = enableStrong;
						}
						if (
							MouseX <
							gagAntiCheatMenuPosition[0] + gagAntiCheatMenuPosition[2] / 2
						) {
							previous();
							bceSaveSettings();
						} else {
							next();
							bceSaveSettings();
						}
					} else if (MouseIn(...gagCheatMenuPosition)) {
						fbcSettings.gagspeak = !fbcSettings.gagspeak;
						defaultSettings.gagspeak.sideEffects(fbcSettings.gagspeak);
						bceSaveSettings();
					}
				}
				return nextFunc(args);
			}
		);

		if (CurrentScreen === "ChatRoom") {
			CurrentScreenFunctions.Run = ChatRoomRun;
			CurrentScreenFunctions.Click = ChatRoomClick;
			CurrentScreenFunctions.Resize = ChatRoomResize;
			ChatRoomResize(false);
		}
	}

	async function alternateArousal() {
		await waitFor(() => !!ServerSocket && ServerIsConnected);

		Player.BCEArousalProgress = Math.min(
			BCE_MAX_AROUSAL,
			Player.ArousalSettings.Progress
		);
		Player.BCEEnjoyment = 1;
		const enjoymentMultiplier = 0.2;

		registerSocketListener(
			"ChatRoomSyncArousal",
			(
				/** @type {{ MemberNumber: number; Progress: number; }} */
				data
			) => {
				if (data.MemberNumber === Player.MemberNumber) {
					// Skip player's own sync messages since we're tracking locally
					return;
				}
				const target = ChatRoomCharacter.find(
					(c) => c.MemberNumber === data.MemberNumber
				);
				if (!target) {
					return;
				}
				target.BCEArousalProgress = Math.min(
					BCE_MAX_AROUSAL,
					data.Progress || 0
				);
				target.ArousalSettings.Progress = Math.round(target.BCEArousalProgress);
			}
		);

		patchFunction(
			"ActivitySetArousalTimer",
			{
				"if (Progress > 0 && (C.ArousalSettings.Progress + Progress) > Max)\n\t\tProgress = (Max - C.ArousalSettings.Progress >= 0) ? Max - C.ArousalSettings.Progress : 0;": `
				if (!C.BCEArousal) {
					if ((Progress > 0) && (C.ArousalSettings.Progress + Progress > Max)) Progress = (Max - C.ArousalSettings.Progress >= 0) ? Max - C.ArousalSettings.Progress : 0;
				} else {
					if (Max === 100) Max = 105;
					const fromMax = Max - (C.BCEArousal ? C.BCEArousalProgress : C.ArousalSettings.Progress);
					if (Progress > 0 && fromMax < Progress) {
						if (fromMax <= 0) {
							Progress = 0;
						} else if (C.BCEArousal) {
							Progress = Math.floor(fromMax / ${enjoymentMultiplier} / (C.BCEEnjoyment || 1));
						} else {
							Progress = fromMax;
						}
					}
				}
			`,

				"if (Progress < -25) Progress = -25;": `
				if (!C.BCEArousal) {
					if (Progress < -25) Progress = -25;
				} else {
					if (Progress < -20) Progress = -20;
				}
				`,

				"if (Progress > 25) Progress = 25;": `
				if (!C.BCEArousal) {
					if (Progress > 25) Progress = 25;
				} else {
					if (Progress > 20) Progress = 20;
				}
				`,
			},
			"Alternate arousal algorithm will be incorrect."
		);

		SDK.hookFunction(
			"ActivityChatRoomArousalSync",
			HOOK_PRIORITIES.Observe,
			(args, next) => {
				const [C] = args;
				if (isCharacter(C) && C.IsPlayer() && CurrentScreen === "ChatRoom") {
					const message = {
						Type: HIDDEN,
						Content: BCE_MSG,
						Dictionary: {
							message: {
								type: MESSAGE_TYPES.ArousalSync,
								version: FBC_VERSION,
								alternateArousal: fbcSettings.alternateArousal,
								progress: C.BCEArousalProgress,
								enjoyment: C.BCEEnjoyment,
							},
						},
					};
					ServerSend("ChatRoomChat", message);
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"ActivitySetArousal",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const [C, Progress] = args;
				const ret = next(args);
				if (
					isCharacter(C) &&
					typeof Progress === "number" &&
					Math.abs(C.BCEArousalProgress - Progress) > 3
				) {
					C.BCEArousalProgress = Math.min(BCE_MAX_AROUSAL, Progress);
				}
				return ret;
			}
		);

		SDK.hookFunction(
			"ActivitySetArousalTimer",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const [C, , , Factor] = args;
				if (isCharacter(C) && typeof Factor === "number") {
					C.BCEEnjoyment = 1 + (Factor > 1 ? Math.round(Math.log2(Factor)) : 0);
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"ActivityTimerProgress",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				const [C, progress] = args;
				if (isCharacter(C) && typeof progress === "number") {
					if (!C.BCEArousalProgress) {
						C.BCEArousalProgress = 0;
					}
					if (!C.BCEEnjoyment) {
						C.BCEEnjoyment = 1;
					}
					C.BCEArousalProgress +=
						progress *
						(progress > 0 ? C.BCEEnjoyment * enjoymentMultiplier : 1);
					C.BCEArousalProgress = Math.min(
						BCE_MAX_AROUSAL,
						C.BCEArousalProgress
					);
					if (C.BCEArousal) {
						C.ArousalSettings.Progress = Math.round(C.BCEArousalProgress);
						args[1] = 0;
						return next(args);
					}
				}
				return next(args);
			}
		);

		patchFunction(
			"TimerProcess",
			{
				"// If the character is egged, we find the highest intensity factor and affect the progress, low and medium vibrations have a cap\n\t\t\t\t\t\t\tlet Factor = -1;": `
				let Factor = -1;
				if (Character[C].BCEArousal) {
					let maxIntensity = 0;
					let vibes = 0;
					let noOrgasmVibes = 0;
					for (let A = 0; A < Character[C].Appearance.length; A++) {
						let Item = Character[C].Appearance[A];
						let ZoneFactor = PreferenceGetZoneFactor(Character[C], Item.Asset.ArousalZone) - 2;
						if (InventoryItemHasEffect(Item, "Egged", true) && typeof Item.Property?.Intensity === "number" && !isNaN(Item.Property.Intensity) && Item.Property.Intensity >= 0 && ZoneFactor >= 0) {
							if (Item.Property.Intensity >= 0) {
								vibes++;
								if (!PreferenceGetZoneOrgasm(Character[C], Item.Asset.ArousalZone)) {
									noOrgasmVibes++;
								}
								maxIntensity = Math.max(Item.Property.Intensity, maxIntensity);
								Factor += Item.Property.Intensity + ZoneFactor + 1;
							}
						}
					}
					// Adds the fetish value to the factor
					if (Factor >= 0) {
						var Fetish = ActivityFetishFactor(Character[C]);
						if (Fetish > 0) Factor = Factor + Math.ceil(Fetish / 3);
						if (Fetish < 0) Factor = Factor + Math.floor(Fetish / 3);
					}

					let maxProgress = 100;
					switch (maxIntensity) {
						case 0:
							maxProgress = 40 + vibes * 5;
							break;
						case 1:
							maxProgress = 70 + vibes * 5;
							break;
						default:
							maxProgress = vibes === 0 || vibes > noOrgasmVibes ? 100 : 95;
							break;
					}
					const topStepInterval = 2;
					let stepInterval = topStepInterval;
					if (Factor < 0) {
						ActivityVibratorLevel(Character[C], 0);
					} else {
						if (Factor < 1) {
							ActivityVibratorLevel(Character[C], 1);
							maxProgress = Math.min(maxProgress, 35);
							stepInterval = 5;
						} else if (Factor < 2) {
							ActivityVibratorLevel(Character[C], 1);
							maxProgress = Math.min(maxProgress, 65);
							stepInterval = 4;
						} else if (Factor < 3) {
							maxProgress = Math.min(maxProgress, 95);
							stepInterval = 3;
							ActivityVibratorLevel(Character[C], 2);
						} else {
							ActivityVibratorLevel(Character[C], Math.min(4, Math.floor(Factor)));
						}
						if (maxProgress === 100) {
							maxProgress = 105;
						}
						let maxIncrease = maxProgress - Character[C].ArousalSettings.Progress;
						if (TimerLastArousalProgressCount % stepInterval === 0 && maxIncrease > 0) {
							Character[C].BCEEnjoyment = 1 + (Factor > 1 ? Math.round(1.5*Math.log2(Factor)) : 0);
							ActivityTimerProgress(Character[C], 1);
						}
					}
				} else {
				`,

				"if ((Factor == -1)) {ActivityVibratorLevel(Character[C], 0);}\n\n\t\t\t\t\t\t}": `if (Factor == -1) {
						ActivityVibratorLevel(Character[C], 0);
					}
				}
			} else {
				ActivityVibratorLevel(Character[C], 0);
			}
			`,

				"// No decay if there's a vibrating item running": `// No decay if there's a vibrating item running
			Character[C].BCEEnjoyment = 1;`,
			},
			"Alternative arousal algorithm will be incorrect."
		);
	}

	async function autoGhostBroadcast() {
		await waitFor(() => !!ServerSocket && ServerIsConnected);
		registerSocketListener(
			"ChatRoomSyncMemberJoin",
			(
				/** @type {ChatRoomSyncMemberJoinEvent} */
				data
			) => {
				if (
					fbcSettings.ghostNewUsers &&
					Date.now() - data.Character.Creation < 30000
				) {
					ChatRoomListManipulation(
						Player.BlackList,
						true,
						data.Character.MemberNumber
					);
					ChatRoomListManipulation(
						Player.GhostList,
						true,
						data.Character.MemberNumber
					);
					debug(
						"Blacklisted",
						data.Character.Name,
						CharacterNickname(data.Character),
						data.Character.MemberNumber,
						"registered",
						(Date.now() - data.Character.Creation) / 1000,
						"seconds ago"
					);
				}
			}
		);
	}

	async function blindWithoutGlasses() {
		await waitFor(() => !!Player && !!Player.Appearance);

		function checkBlindness() {
			if (!fbcSettings.blindWithoutGlasses) {
				return;
			}

			const glasses = [
					"Glasses1",
					"Glasses2",
					"Glasses3",
					"Glasses4",
					"Glasses5",
					"Glasses6",
					"SunGlasses1",
					"SunGlasses2",
					"SunGlassesClear",
					"CatGlasses",
					"VGlasses",
					"GradientSunglasses",
					"FuturisticVisor",
					"InteractiveVisor",
					"InteractiveVRHeadset",
					"FuturisticMask",
					"Goggles",
				],
				hasGlasses = !!Player.Appearance.find((a) =>
					glasses.includes(a.Asset.Name)
				);

			if (hasGlasses) {
				if (removeCustomEffect("BlurLight")) {
					fbcChatNotify(
						displayText("Having recovered your glasses you can see again!")
					);
				}
			} else if (addCustomEffect("BlurLight")) {
				fbcChatNotify(
					displayText("Having lost your glasses your eyesight is impaired!")
				);
			}
		}

		SDK.hookFunction("GameRun", HOOK_PRIORITIES.Observe, (args, next) => {
			checkBlindness();
			return next(args);
		});
	}

	async function friendPresenceNotifications() {
		await waitFor(() => !!Player && ServerSocket && ServerIsConnected);

		function checkFriends() {
			if (
				!fbcSettings.friendPresenceNotifications &&
				!fbcSettings.instantMessenger
			) {
				return;
			}
			if (
				CurrentScreen === "FriendList" ||
				CurrentScreen === "Relog" ||
				CurrentScreen === "Login"
			) {
				return;
			}
			ServerSend("AccountQuery", { Query: "OnlineFriends" });
		}
		createTimer(checkFriends, 20000);

		/** @type {Friend[]} */
		let lastFriends = [];
		registerSocketListener(
			"AccountQueryResult",
			(
				/** @type {{ Query: string; Result: Friend[] }} */
				data
			) => {
				if (
					CurrentScreen === "FriendList" ||
					CurrentScreen === "Relog" ||
					CurrentScreen === "Login"
				) {
					return;
				}
				if (!fbcSettings.friendPresenceNotifications) {
					return;
				}
				if (data.Query !== "OnlineFriends") {
					return;
				}
				const friendMemberNumbers = data.Result.map((f) => f.MemberNumber),
					offlineFriends = lastFriends
						.map((f) => f.MemberNumber)
						.filter((f) => !friendMemberNumbers.includes(f)),
					onlineFriends = friendMemberNumbers.filter(
						(f) => !lastFriends.some((ff) => ff.MemberNumber === f)
					);
				if (onlineFriends.length) {
					const list = onlineFriends
						.map((f) => {
							const { MemberNumber, MemberName } = data.Result.find(
								(d) => d.MemberNumber === f
							);
							return `${MemberName} (${MemberNumber})`;
						})
						.join(", ");
					if (
						fbcSettings.friendNotificationsInChat &&
						CurrentScreen === "ChatRoom"
					) {
						fbcChatNotify(displayText(`Now online: $list`, { $list: list }));
					} else {
						fbcNotify(displayText(`Now online: $list`, { $list: list }), 5000, {
							ClickAction: BEEP_CLICK_ACTIONS.FriendList,
						});
					}
				}
				if (fbcSettings.friendOfflineNotifications && offlineFriends.length) {
					const list = offlineFriends
						.map((f) => {
							const { MemberNumber, MemberName } = lastFriends.find(
								(d) => d.MemberNumber === f
							);
							return `${MemberName} (${MemberNumber})`;
						})
						.join(", ");
					if (
						fbcSettings.friendNotificationsInChat &&
						CurrentScreen === "ChatRoom"
					) {
						fbcChatNotify(displayText(`Now offline: $list`, { $list: list }));
					} else {
						fbcNotify(
							displayText(`Now offline: $list`, { $list: list }),
							5000,
							{
								ClickAction: BEEP_CLICK_ACTIONS.FriendList,
							}
						);
					}
				}
				lastFriends = data.Result;
			}
		);

		SDK.hookFunction(
			"ServerClickBeep",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (
					ServerBeep.Timer > Date.now() &&
					MouseIn(CurrentScreen === "ChatRoom" ? 0 : 500, 0, 1000, 50) &&
					CurrentScreen !== "FriendList"
				) {
					switch (ServerBeep.ClickAction) {
						case BEEP_CLICK_ACTIONS.FriendList:
							ServerOpenFriendList();
							return null;
						default:
							break;
					}
				}
				return next(args);
			}
		);
	}

	function itemAntiCheat() {
		/** @type {Map<number, number>} */
		const noticesSent = new Map();

		/** @type {(sourceCharacter: Character, newItem: ItemBundle) => boolean} */
		function validateNewLockMemberNumber(sourceCharacter, newItem) {
			if (!newItem.Name || !newItem.Property?.LockedBy) {
				return true;
			}
			if (newItem.Property?.LockMemberNumber !== sourceCharacter.MemberNumber) {
				debug(
					"Bad lock member number",
					newItem.Property?.LockMemberNumber,
					"from",
					sourceCharacter.MemberNumber
				);
				return false;
			}
			return true;
		}

		/** @type {(sourceCharacter: Character, oldItem: ItemBundle | null, newItem: ItemBundle | null, ignoreLocks: boolean, ignoreColors: boolean) => { changed: number; prohibited: boolean }} */
		function validateSingleItemChange(
			sourceCharacter,
			oldItem,
			newItem,
			ignoreLocks,
			ignoreColors
		) {
			const changes = {
				changed: 0,
				prohibited: false,
			};

			if (sourceCharacter.IsPlayer()) {
				return changes;
			}

			const sourceName = `${CharacterNickname(sourceCharacter)} (${
				sourceCharacter.MemberNumber
			})`;

			/** @type {(item: ItemBundle) => ItemBundle} */
			function deleteUnneededMetaData(item) {
				if (!item) {
					return item;
				}
				const clone = deepCopy(item);
				if (!clone) {
					return clone;
				}
				if (clone.Property) {
					if (ignoreLocks) {
						delete clone.Property.LockMemberNumber;
						delete clone.Property.LockedBy;
						delete clone.Property.RemoveTimer;
						delete clone.Property.Effect;
					}
					delete clone.Property.BlinkState;
				}
				if (ignoreColors) {
					delete clone.Color;
				}
				return clone;
			}

			function validateMistressLocks() {
				const sourceCanBeMistress =
					(sourceCharacter?.Reputation?.find((a) => a.Type === "Dominant")
						?.Value ?? 0) >= 50 || sourceCharacter.Title === "Mistress";

				if (
					sourceCanBeMistress ||
					sourceCharacter.MemberNumber === Player.Ownership?.MemberNumber ||
					Player.Lovership.some(
						(a) => a.MemberNumber === sourceCharacter.MemberNumber
					)
				) {
					return;
				}

				// Removal
				if (
					(oldItem?.Property?.LockedBy === "MistressPadlock" &&
						newItem.Property?.LockedBy !== "MistressPadlock") ||
					(oldItem?.Property?.LockedBy === "MistressTimerPadlock" &&
						newItem.Property?.LockedBy !== "MistressTimerPadlock")
				) {
					debug(
						"Not a mistress attempting to remove mistress lock",
						sourceName
					);
					changes.prohibited = true;
				}

				// Addition
				if (
					(oldItem?.Property?.LockedBy !== "MistressPadlock" &&
						newItem.Property?.LockedBy === "MistressPadlock") ||
					(oldItem?.Property?.LockedBy !== "MistressTimerPadlock" &&
						newItem.Property?.LockedBy === "MistressTimerPadlock")
				) {
					debug("Not a mistress attempting to add mistress lock", sourceName);
					changes.prohibited = true;
				}

				// Timer change
				if (
					oldItem?.Property?.LockedBy === "MistressTimerPadlock" &&
					Math.abs(
						oldItem.Property?.RemoveTimer - newItem.Property?.RemoveTimer
					) >
						31 * 60 * 1000
				) {
					changes.prohibited = true;
					debug(
						"Not a mistress attempting to change mistress lock timer more than allowed by public entry",
						sourceName
					);
				}
			}

			// Validate lock changes
			if (
				newItem.Property?.LockMemberNumber !==
				oldItem?.Property?.LockMemberNumber
			) {
				if (!validateNewLockMemberNumber(sourceCharacter, newItem)) {
					changes.prohibited = true;
				}
			}
			validateMistressLocks();

			newItem = deleteUnneededMetaData(newItem);
			oldItem = deleteUnneededMetaData(oldItem);

			if (JSON.stringify(newItem) !== JSON.stringify(oldItem)) {
				debug(
					sourceName,
					"changed",
					JSON.stringify(oldItem),
					"to",
					JSON.stringify(newItem),
					"changes:",
					changes
				);
				changes.changed++;
			}
			return changes;
		}

		/** @type {(sourceCharacter: Character) => void} */
		function revertChanges(sourceCharacter) {
			const sourceName = `${CharacterNickname(sourceCharacter)} (${
				sourceCharacter.MemberNumber
			})`;
			debug("Rejected changes from", sourceName);
			fbcChatNotify(
				displayText(
					`[Anti-Cheat] ${sourceName} tried to make suspicious changes! Appearance changes rejected. Consider telling the user to stop, whitelisting the user (if trusted friend), or blacklisting the user (if the behaviour continues, chat command: "/blacklistadd ${sourceCharacter.MemberNumber}").`
				)
			);
			const noticeSent = noticesSent.get(sourceCharacter.MemberNumber) || 0;
			if (Date.now() - noticeSent > 1000 * 60 * 10) {
				noticesSent.set(sourceCharacter.MemberNumber, Date.now());
				fbcSendAction(
					displayText(
						`A magical shield on ${CharacterNickname(
							Player
						)} repelled the suspiciously magical changes attempted by ${sourceName}! [FBC Anti-Cheat]`
					)
				);
			}
			if (
				fbcSettings.antiCheatBlackList &&
				!Player.WhiteList.includes(sourceCharacter.MemberNumber) &&
				!Player.BlackList.includes(sourceCharacter.MemberNumber)
			) {
				ChatRoomListManipulation(
					Player.BlackList,
					true,
					sourceCharacter.MemberNumber
				);
				fbcChatNotify(displayText(`[AntiCheat] ${sourceName} blacklisted.`));
			}
			ChatRoomCharacterUpdate(Player);
		}

		SDK.hookFunction(
			"ChatRoomSyncItem",
			HOOK_PRIORITIES.OverrideBehaviour,
			/** @type {(args: [ChatRoomSyncItemEvent], next: (args: [ChatRoomSyncItemEvent]) => void) => void} */
			(args, next) => {
				const [data] = args;
				if (!fbcSettings.itemAntiCheat) {
					return next(args);
				}
				if (data?.Item?.Target !== Player.MemberNumber) {
					return next(args);
				}
				if (Player.WhiteList.includes(data.Source)) {
					return next(args);
				}
				const sourceCharacter =
					ChatRoomCharacter.find((a) => a.MemberNumber === data.Source) ||
					(data.Source === Player.MemberNumber ? Player : null);
				const ignoreLocks = Player.Appearance.some(
					(a) => a.Asset.Name === "FuturisticCollar"
				);
				const ignoreColors =
					Player.Appearance.some((a) => a.Asset.Name === "FuturisticHarness") ||
					ignoreLocks;
				const oldItem = Player.Appearance.find(
					(i) => i.Asset.Group.Name === data.Item.Group
				);
				const oldItemBundle = oldItem
					? ServerAppearanceBundle([oldItem])[0]
					: null;
				const result = validateSingleItemChange(
					sourceCharacter,
					oldItemBundle,
					data.Item,
					ignoreLocks,
					ignoreColors
				);
				if (result.prohibited) {
					revertChanges(sourceCharacter);
					return null;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"ChatRoomSyncSingle",
			HOOK_PRIORITIES.OverrideBehaviour,
			/** @type {(args: [ChatRoomSyncSingleEvent], next: (args: [ChatRoomSyncSingleEvent]) => void) => void} */
			(args, next) => {
				const [data] = args;
				if (!fbcSettings.itemAntiCheat) {
					return next(args);
				}
				if (!data?.Character) {
					return next(args);
				}
				if (data.Character.MemberNumber !== Player.MemberNumber) {
					return next(args);
				}
				if (Player.WhiteList.includes(data.SourceMemberNumber)) {
					return next(args);
				}

				const sourceCharacter =
					ChatRoomCharacter.find(
						(a) => a.MemberNumber === data.SourceMemberNumber
					) ||
					(data.SourceMemberNumber === Player.MemberNumber ? Player : null);

				if (sourceCharacter.IsPlayer()) {
					return next(args);
				}

				// Gets the item bundles to be used for diff comparison, also making necessary changes for the purpose
				/** @type {(bundle: ItemBundle[]) => Map<string, ItemBundle>} */
				function processItemBundleToMap(bundle) {
					/** @type {(Map<string, ItemBundle>)} */
					const initial = new Map();
					return bundle.reduce((prev, cur) => {
						// Ignoring color changes
						cur = deepCopy(cur);
						delete cur.Color;
						prev.set(`${cur.Group}/${cur.Name}`, cur);
						return prev;
					}, initial);
				}

				// Number of items changed in appearance
				const oldItems = processItemBundleToMap(
					ServerAppearanceBundle(
						Player.Appearance.filter((a) => a.Asset.Group.Category === "Item")
					)
				);
				const newItems = processItemBundleToMap(
					data.Character.Appearance.filter(
						(a) =>
							ServerBundledItemToAppearanceItem("Female3DCG", a)?.Asset.Group
								.Category === "Item"
					)
				);

				// Locks can be modified enmass with futuristic collar
				const ignoreLocks =
					Array.from(oldItems.values()).some(
						(i) => i.Name === "FuturisticCollar"
					) &&
					Array.from(newItems.values()).some(
						(i) => i.Name === "FuturisticCollar"
					);
				const ignoreColors =
					(Array.from(oldItems.values()).some(
						(i) => i.Name === "FuturisticHarness"
					) &&
						Array.from(newItems.values()).some(
							(i) => i.Name === "FuturisticHarness"
						)) ||
					ignoreLocks;

				debug(
					"Anti-Cheat validating bulk change from",
					sourceCharacter.MemberNumber
				);

				// Count number of new items
				const newAndChanges = Array.from(newItems.keys()).reduce(
					(changes, cur) => {
						const newItem = newItems.get(cur);
						if (!oldItems.has(cur)) {
							// Item is new, validate it and mark as new
							if (!validateNewLockMemberNumber(sourceCharacter, newItem)) {
								changes.prohibited = true;
							}
							changes.new++;
							return changes;
						}
						const oldItem = oldItems.get(cur);
						const result = validateSingleItemChange(
							sourceCharacter,
							oldItem,
							newItem,
							ignoreLocks,
							ignoreColors
						);
						changes.prohibited = changes.prohibited || result.prohibited;
						changes.changed += result.changed;
						return changes;
					},
					{ new: 0, changed: 0, prohibited: false }
				);

				// Count number of removed items
				const removed = Array.from(oldItems.keys()).reduce((prev, cur) => {
					if (!newItems.has(cur)) {
						return prev + 1;
					}
					return prev;
				}, 0);
				if (
					newAndChanges.new + newAndChanges.changed + removed > 2 ||
					newAndChanges.prohibited
				) {
					debug(
						"Anti-Cheat tripped on bulk change from",
						sourceCharacter.MemberNumber,
						newAndChanges,
						removed
					);
					revertChanges(sourceCharacter);
					return null;
				}
				return next(args);
			}
		);
	}

	async function forcedClubSlave() {
		const patch = (async function patchDialog() {
			await waitFor(
				() =>
					!!CommonCSVCache["Screens/Online/ChatRoom/Dialog_Online.csv"] &&
					CommonCSVCache["Screens/Online/ChatRoom/Dialog_Online.csv"].length >
						150
			);

			const clubSlaveDialog = [
				[
					"160",
					"100",
					displayText("([FBC] Force them to become a Club Slave.)"),
					displayText("(She will become a Club Slave for the next hour.)"),
					"bceSendToClubSlavery()",
					"bceCanSendToClubSlavery()",
				],
				[
					"160",
					"",
					displayText("([FBC] Force them to become a Club Slave.)"),
					displayText(
						"(Requires both to use compatible versions of FBC and the target to not already be a club slave.)"
					),
					"",
					"!bceCanSendToClubSlavery()",
				],
			];

			const idx =
				CommonCSVCache["Screens/Online/ChatRoom/Dialog_Online.csv"].findIndex(
					(v) => v[0] === "160"
				) + 1;
			CommonCSVCache["Screens/Online/ChatRoom/Dialog_Online.csv"].splice(
				idx,
				0,
				...clubSlaveDialog
			);

			/** @type {(c: Character) => void} */
			const appendDialog = (c) => {
				if (!c.Dialog || c.Dialog.some((v) => v.Modded)) {
					return;
				}
				c.Dialog.splice(
					idx,
					0,
					...clubSlaveDialog.map((v) => ({
						Stage: v[0],
						NextStage: v[1],
						Option: v[2]
							.replace("DialogCharacterName", CharacterNickname(c))
							.replace("DialogPlayerName", CharacterNickname(Player)),
						Result: v[3]
							.replace("DialogCharacterName", CharacterNickname(c))
							.replace("DialogPlayerName", CharacterNickname(Player)),
						Function:
							(v[4].trim().substring(0, 6) === "Dialog" ? "" : "ChatRoom") +
							v[4],
						Prerequisite: v[5],
						Modded: true,
					}))
				);
			};

			for (const c of ChatRoomCharacter.filter(
				(cc) => !cc.IsPlayer() && cc.IsOnline()
			)) {
				appendDialog(c);
			}

			SDK.hookFunction(
				"CharacterBuildDialog",
				HOOK_PRIORITIES.AddBehaviour,
				(args, next) => {
					const ret = next(args);
					const [C] = args;
					if (isCharacter(C) && C.IsOnline()) {
						appendDialog(C);
					}
					return ret;
				}
			);
		})();

		w.bceSendToClubSlavery = function () {
			/** @type {BCEChatMessage} */
			const message = {
				Type: HIDDEN,
				Content: BCE_MSG,
				Sender: Player.MemberNumber,
				Dictionary: {
					message: {
						type: MESSAGE_TYPES.Activity,
						version: FBC_VERSION,
						activity: "ClubSlavery",
					},
				},
			};
			ServerSend("ChatRoomChat", message);
			DialogLeave();
		};

		w.bceCanSendToClubSlavery = function () {
			const C = CurrentCharacter;
			if (!C) {
				return false;
			}
			return (
				C.BCECapabilities?.includes("clubslave") &&
				!C.Appearance.some((a) => a.Asset.Name === "ClubSlaveCollar")
			);
		};

		w.bceGotoRoom = (roomName) => {
			ChatRoomJoinLeash = roomName;
			DialogLeave();
			ChatRoomClearAllElements();
			if (CurrentScreen === "ChatRoom") {
				ServerSend("ChatRoomLeave", "");
				CommonSetScreen("Online", "ChatSearch");
			} else {
				ChatRoomStart("", "", null, null, "Introduction", BackgroundsTagList);
			}
		};

		w.bceStartClubSlave = async () => {
			const managementScreen = "Management";

			if (BCX?.getRuleState("block_club_slave_work").isEnforced) {
				fbcSendAction(
					displayText(
						`BCX rules forbid $PlayerName from becoming a Club Slave.`,
						{ $PlayerName: CharacterNickname(Player) }
					)
				);
				return;
			}

			fbcSendAction(
				displayText(
					`$PlayerName gets grabbed by two maids and escorted to management to serve as a Club Slave.`,
					{ $PlayerName: CharacterNickname(Player) }
				)
			);

			const room = ChatRoomData.Name;
			ChatRoomClearAllElements();
			ServerSend("ChatRoomLeave", "");
			ChatRoomLeashPlayer = null;
			CommonSetScreen("Room", managementScreen);

			await waitFor(() => !!ManagementMistress);

			CharacterSetActivePose(Player, "Kneel", false);
			// eslint-disable-next-line require-atomic-updates
			ManagementMistress.Stage = "320";
			ManagementMistress.CurrentDialog = displayText(
				"(You get grabbed by a pair of maids and brought to management.) Your owner wants you to be a Club Slave. Now strip."
			);
			CharacterSetCurrent(ManagementMistress);

			await waitFor(
				() => CurrentScreen !== managementScreen || !CurrentCharacter
			);

			w.bceGotoRoom(room);
		};

		w.ChatRoombceSendToClubSlavery = w.bceSendToClubSlavery;
		w.ChatRoombceCanSendToClubSlavery = w.bceCanSendToClubSlavery;

		await patch;
	}

	function leashFix() {
		patchFunction(
			"ChatSearchQuery",
			{
				"// Prevent spam searching the same thing.":
					'if (ChatRoomJoinLeash) { SearchData.Language = ""; }\n\t// Prevent spam searching the same thing.',
			},
			"Leashing between language filters"
		);
	}

	// BcUtil-compatible instant messaging with friends
	function instantMessenger() {
		w.bceStripBeepMetadata = (msg) => msg.split("\uf124")[0].trimEnd();

		// Build the DOM
		const container = document.createElement("div");
		container.classList.add("bce-hidden");
		container.id = "bce-instant-messenger";
		const leftContainer = document.createElement("div");
		leftContainer.id = "bce-message-left-container";
		const friendList = document.createElement("div");
		friendList.id = "bce-friend-list";
		const rightContainer = document.createElement("div");
		rightContainer.id = "bce-message-right-container";
		const messageContainer = document.createElement("div");
		messageContainer.id = "bce-message-container";
		const messageInput = document.createElement("textarea");
		messageInput.id = "bce-message-input";
		messageInput.setAttribute("maxlength", "2000");

		const friendSearch = document.createElement("input");
		friendSearch.id = "bce-friend-search";
		friendSearch.setAttribute(
			"placeholder",
			displayText("Search for a friend")
		);
		friendSearch.autocomplete = "off";

		const onlineClass = "bce-friend-list-handshake-completed";
		const offlineClass = "bce-friend-list-handshake-false";

		container.appendChild(leftContainer);
		container.appendChild(rightContainer);
		leftContainer.appendChild(friendSearch);
		leftContainer.appendChild(friendList);
		rightContainer.appendChild(messageContainer);
		rightContainer.appendChild(messageInput);
		document.body.appendChild(container);

		const storageKey = () =>
			`bce-instant-messenger-state-${Player.AccountName.toLowerCase()}`;

		/** @type {number | null} */
		let activeChat = null;

		let unreadSinceOpened = 0;

		/** @typedef {{ author: string, authorId: number, type: "Emote" | "Action" | "Message", message: string, color: string, createdAt: number }} RawHistory */
		/** @typedef {{ unread: number, statusText: HTMLElement, listElement: HTMLElement, historyRaw: RawHistory[], history: HTMLElement, online: boolean }} IMFriendHistory */
		/** @type {Map<number, IMFriendHistory>} */
		const friendMessages = new Map();

		const scrollToBottom = () => {
			const friend = friendMessages.get(activeChat);
			if (friend) {
				friend.history.scrollTop = friend.history.scrollHeight;
			}
		};

		const saveHistory = () => {
			const history = {};
			friendMessages.forEach((friend, id) => {
				if (friend.historyRaw.length === 0) {
					return;
				}
				const historyLength = Math.min(friend.historyRaw.length, 100);
				history[id] = {
					historyRaw: friend.historyRaw.slice(-historyLength),
				};
			});
			localStorage.setItem(storageKey(), JSON.stringify(history));
		};

		/** @type {(friendId: number) => void} */
		const changeActiveChat = (friendId) => {
			const friend = friendMessages.get(friendId);
			messageInput.disabled = !friend?.online;
			messageContainer.innerHTML = "";
			for (const f of friendMessages.values()) {
				f.listElement.classList.remove("bce-friend-list-selected");
			}
			if (friend) {
				friend.listElement.classList.add("bce-friend-list-selected");
				friend.listElement.classList.remove("bce-friend-list-unread");
				messageContainer.appendChild(friend.history);
				friend.unread = 0;
			}

			const previousFriend = friendMessages.get(activeChat);
			if (previousFriend) {
				const divider = previousFriend.history.querySelector(
					".bce-message-divider"
				);
				if (divider) {
					previousFriend.history.removeChild(divider);
				}
			}

			sortIM();

			activeChat = friendId;
			scrollToBottom();
		};

		/** @type {(friendId: number, sent: boolean, beep: Beep, skipHistory: boolean, createdAt: Date) => void} */
		// eslint-disable-next-line complexity
		const addMessage = (friendId, sent, beep, skipHistory, createdAt) => {
			const friend = friendMessages.get(friendId);
			if (!friend || beep.BeepType) {
				return;
			}

			/** @type {{ messageType?: "Message" | "Emote" | "Action"; messageColor?: string; }?} */
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const details = JSON.parse(
				beep.Message?.split("\n")
					.find((line) => line.startsWith("\uf124"))
					?.substring(1) ?? "{}"
			);

			/** @type {"Message" | "Emote" | "Action"} */
			const messageType = ["Message", "Emote", "Action"].includes(
				details?.messageType
			)
				? `${details.messageType}`
				: "Message";
			const messageColor = details?.messageColor ?? "#ffffff";
			const messageText = beep.Message?.split("\n")
				.filter((line) => !line.startsWith("\uf124"))
				.join("\n")
				.trimEnd();

			if (!messageText) {
				debug("skipped empty beep", friendId, beep, sent, skipHistory);
				return;
			}

			const scrolledToEnd =
				friend.history.scrollHeight -
					friend.history.scrollTop -
					friend.history.clientHeight <
				1;
			const message = document.createElement("div");
			message.classList.add("bce-message");
			message.classList.add(sent ? "bce-message-sent" : "bce-message-received");
			message.classList.add(`bce-message-${messageType}`);
			message.setAttribute("data-time", createdAt.toLocaleString());

			const author = sent ? CharacterNickname(Player) : beep.MemberName;

			switch (messageType) {
				case "Emote":
					message.textContent = `*${author}${messageText}*`;
					break;
				case "Action":
					message.textContent = `*${messageText}*`;
					break;
				case "Message":
					{
						const sender = document.createElement("span");
						sender.classList.add("bce-message-sender");
						if (messageColor) {
							sender.style.color = messageColor;
						}
						sender.textContent = `${author}: `;
						message.appendChild(sender);
						message.appendChild(document.createTextNode(messageText));
					}
					break;
				default:
					message.textContent = messageText;
					break;
			}

			if (!skipHistory) {
				friend.historyRaw.push({
					author,
					authorId: sent ? Player.MemberNumber : beep.MemberNumber,
					message: messageText,
					type: messageType,
					color: messageColor,
					createdAt: Date.now(),
				});

				friend.listElement.setAttribute(
					"data-last-updated",
					Date.now().toString()
				);

				if (friendId !== activeChat) {
					friend.listElement.classList.add("bce-friend-list-unread");
					friend.unread++;
				}
				if (
					friend.unread === 1 &&
					(container.classList.contains("bce-hidden") ||
						friendId !== activeChat)
				) {
					const divider = document.createElement("div");
					divider.classList.add("bce-message-divider");
					friend.history.appendChild(divider);
				}

				if (container.classList.contains("bce-hidden")) {
					unreadSinceOpened++;
				}
			}
			const noop = () => null;
			processChatAugmentsForLine(
				message,
				scrolledToEnd ? scrollToBottom : noop
			);

			friend.history.appendChild(message);
			if (scrolledToEnd) {
				scrollToBottom();
			}

			saveHistory();
		};

		/** @type {(friendId: number) => IMFriendHistory} */
		const handleUnseenFriend = (friendId) => {
			if (!friendMessages.has(friendId)) {
				/** @type {IMFriendHistory} */
				const friendData = {
					statusText: document.createElement("span"),
					listElement: document.createElement("div"),
					historyRaw: [],
					history: document.createElement("div"),
					unread: 0,
					online: false,
				};
				friendData.listElement.id = `bce-friend-list-entry-${friendId}`;
				friendData.listElement.classList.add("bce-friend-list-entry");
				friendData.listElement.onclick = () => {
					changeActiveChat(friendId);
				};

				friendData.history.classList.add("bce-friend-history");

				const name = document.createElement("div");
				name.classList.add("bce-friend-list-entry-name");
				name.textContent = Player.FriendNames.get(friendId) || "";
				friendData.listElement.appendChild(name);

				const memberNumber = document.createElement("div");
				memberNumber.classList.add("bce-friend-list-entry-member-number");
				memberNumber.textContent = friendId.toString();
				friendData.listElement.appendChild(memberNumber);

				friendData.listElement.appendChild(friendData.statusText);

				friendList.appendChild(friendData.listElement);

				friendMessages.set(friendId, friendData);
			}
			return friendMessages.get(friendId);
		};

		const history = /** @type {Record<string, {historyRaw: RawHistory[]}>} */ (
			JSON.parse(localStorage.getItem(storageKey()) || "{}")
		);
		for (const [friendIdStr, friendHistory] of Object.entries(history)) {
			const friendId = parseInt(friendIdStr);
			const friend = handleUnseenFriend(friendId);
			friend.historyRaw = friendHistory.historyRaw;
			for (const hist of friendHistory.historyRaw) {
				addMessage(
					friendId,
					hist.authorId === Player.MemberNumber,
					{
						Message: `${hist.message}\n\n\uf124${JSON.stringify({
							messageType: hist.type,
							messageColor: hist.color,
						})}`,
						MemberNumber: hist.authorId,
						MemberName: hist.author,
					},
					true,
					hist.createdAt ? new Date(hist.createdAt) : new Date(0)
				);
				if (hist.createdAt) {
					friend.listElement.setAttribute(
						"data-last-updated",
						hist.createdAt.toString()
					);
				}
			}
		}

		messageInput.addEventListener("keydown", (e) => {
			if (e.key === "Enter" && !e.shiftKey) {
				e.preventDefault();
				if (
					BCX?.getRuleState("speech_restrict_beep_send").isEnforced &&
					!fbcSettings.allowIMBypassBCX
				) {
					fbcNotify(
						displayText("Sending beeps is currently restricted by BCX rules")
					);
					return;
				}
				let messageText = messageInput.value;
				if (messageText.trim() === "") {
					return;
				}
				messageInput.value = "";

				/** @type {"Message" | "Emote" | "Action"} */
				let messageType = "Message";
				if (messageText.startsWith("/me ")) {
					messageText = messageText.substring(4);
					if (!/^[', ]/u.test(messageText)) {
						messageText = ` ${messageText}`;
					}
					messageType = "Emote";
				} else if (messageText.startsWith("/action ")) {
					messageText = messageText.substring(8);
					messageType = "Action";
				} else if (/^\*[^*]/u.test(messageText)) {
					messageText = messageText.substring(1);
					if (!/^[', ]/u.test(messageText)) {
						messageText = ` ${messageText}`;
					}
					messageType = "Emote";
				} else if (/^\*\*/u.test(messageText)) {
					messageText = messageText.substring(2);
					messageType = "Action";
				}

				/** @type {Beep} */
				const message = {
					MemberNumber: activeChat,
					MemberName: Player.FriendNames.get(activeChat) || "aname",
					IsSecret: true,
					Message: `${messageText}\n\n\uf124${JSON.stringify({
						messageType,
						messageColor: Player.LabelColor,
					})}`,
				};
				addMessage(activeChat, true, message, false, new Date());
				FriendListBeepLog.push({
					...message,
					Sent: true,
					Private: false,
					Time: new Date(),
					ChatRoomName: null,
				});
				ServerSend("AccountBeep", message);
			}
		});

		friendSearch.onkeyup = () => {
			const search = friendSearch.value.toLowerCase();
			for (const friendId of friendMessages.keys()) {
				const friend = friendMessages.get(friendId);
				const friendName = Player.FriendNames.get(friendId)?.toLowerCase();
				if (search === "") {
					friend.listElement.classList.remove("bce-hidden");
				} else if (
					!friendId.toString().includes(search) &&
					!friendName?.includes(search)
				) {
					friend.listElement.classList.add("bce-hidden");
				} else {
					friend.listElement.classList.remove("bce-hidden");
				}
			}
			sortIM();
		};

		registerSocketListener(
			"AccountQueryResult",
			(
				/** @type {{ Query: string; Result: Friend[] }} */
				data
			) => {
				if (data.Query !== "OnlineFriends") {
					return;
				}
				if (data.Result && fbcSettings.instantMessenger) {
					for (const friend of data.Result) {
						const f = handleUnseenFriend(friend.MemberNumber);
						f.online = true;
						f.statusText.textContent = displayText("Online");
						f.listElement.classList.remove(offlineClass);
						f.listElement.classList.add(onlineClass);
					}
					for (const friendId of Array.from(friendMessages.keys()).filter(
						(f) => !data.Result.some((f2) => f2.MemberNumber === f)
					)) {
						const f = friendMessages.get(friendId);
						f.online = false;
						f.statusText.textContent = displayText("Offline");
						f.listElement.classList.remove(onlineClass);
						f.listElement.classList.add(offlineClass);
					}
					if (!data.Result.some((f) => f.MemberNumber === activeChat)) {
						// Disable input, current user is offline
						messageInput.disabled = true;
					} else {
						// Enable input, current user is online
						messageInput.disabled = false;
					}
				}
			}
		);

		function sortIM() {
			[...friendList.children]
				.sort((a, b) => {
					const notA = !a.classList.contains(onlineClass);
					const notB = !b.classList.contains(onlineClass);
					if ((notA && notB) || (!notA && !notB)) {
						const aUpdatedAt = a.getAttribute("data-last-updated");
						const bUpdatedAt = b.getAttribute("data-last-updated");
						const au = /^\d+$/u.test(aUpdatedAt) ? parseInt(aUpdatedAt) : 0;
						const bu = /^\d+$/u.test(bUpdatedAt) ? parseInt(bUpdatedAt) : 0;
						return bu - au;
					}
					if (notA) {
						return 1;
					}
					return -1;
				})
				.forEach((node) => {
					friendList.removeChild(node);
					friendList.appendChild(node);
				});
		}

		SDK.hookFunction(
			"ServerAccountBeep",
			HOOK_PRIORITIES.OverrideBehaviour,
			/** @type {(args: Beep[], next: (args: Beep[]) => void) => void} */
			(args, next) => {
				const [beep] = args;
				if (
					beep &&
					isNonNullObject(beep) &&
					!beep.BeepType &&
					fbcSettings.instantMessenger
				) {
					addMessage(beep.MemberNumber, false, beep, false, new Date());
				}
				next(args);
			}
		);

		SDK.hookFunction(
			"ServerSend",
			HOOK_PRIORITIES.Observe,
			/** @type {(args: [string, Beep], next: (args: [string, Beep]) => void) => void} */
			(args, next) => {
				const [command, beep] = args;
				if (
					command === "AccountBeep" &&
					!beep?.BeepType &&
					isString(beep?.Message) &&
					!beep.Message.includes("\uf124")
				) {
					addMessage(beep.MemberNumber, true, beep, false, new Date());
				}
				return next(args);
			}
		);

		/**
		 * Get the position of the IM button dynamically based on current screen properties
		 * @type {() => [number, number, number, number]}
		 */
		function buttonPosition() {
			if (
				CurrentScreen === "ChatRoom" &&
				document.getElementById("TextAreaChatLog")?.offsetParent !== null
			) {
				return [5, 865, 60, 60];
			}
			return [70, 905, 60, 60];
		}

		SDK.hookFunction(
			"DrawProcess",
			HOOK_PRIORITIES.AddBehaviour,
			/** @type {(args: DOMHighResTimeStamp[], next: (args: DOMHighResTimeStamp[]) => void) => void} */
			(args, next) => {
				next(args);
				if (fbcSettings.instantMessenger) {
					if (
						!fbcSettings.allowIMBypassBCX &&
						(BCX?.getRuleState("speech_restrict_beep_receive").isEnforced ||
							(BCX?.getRuleState("alt_hide_friends").isEnforced &&
								Player.GetBlindLevel() >= 3))
					) {
						if (!container.classList.contains("bce-hidden")) {
							hideIM();
						}
						DrawButton(
							...buttonPosition(),
							"",
							"Gray",
							"Icons/Small/Chat.png",
							displayText("Instant Messenger (Disabled by BCX)"),
							false
						);
					} else {
						DrawButton(
							...buttonPosition(),
							"",
							unreadSinceOpened ? "Red" : "White",
							"Icons/Small/Chat.png",
							displayText("Instant Messenger"),
							false
						);
					}
				}
			}
		);

		SDK.hookFunction(
			"CommonClick",
			HOOK_PRIORITIES.OverrideBehaviour,
			/** @type {(args: (MouseEvent | TouchEvent)[], next: (args: (MouseEvent | TouchEvent)[]) => void) => void} */
			(args, next) => {
				if (fbcSettings.instantMessenger && MouseIn(...buttonPosition())) {
					if (!container.classList.contains("bce-hidden")) {
						hideIM();
						return;
					}
					sortIM();
					container.classList.toggle("bce-hidden");
					ServerSend("AccountQuery", { Query: "OnlineFriends" });
					unreadSinceOpened = 0;
					scrollToBottom();
					NotificationReset("Beep");
					return;
				}
				next(args);
			}
		);

		SDK.hookFunction(
			"NotificationRaise",
			HOOK_PRIORITIES.ModifyBehaviourHigh,
			/** @type {(args: [string, Partial<{ body: string }>], next: (args: [string, Partial<{ body: string }>]) => void) => void} */
			(args, next) => {
				if (args[0] === "Beep" && args[1].body) {
					args[1].body = bceStripBeepMetadata(args[1].body);
				}
				return next(args);
			}
		);

		/** @type {(e: KeyboardEvent) => void} */
		function keyHandler(e) {
			if (!fbcSettings.instantMessenger) {
				return;
			}
			if (e.key === "Escape" && !container.classList.contains("bce-hidden")) {
				hideIM();
				e.stopPropagation();
				e.preventDefault();
			}
		}

		function hideIM() {
			container.classList.add("bce-hidden");
			messageInput.blur();
			friendSearch.blur();
		}

		document.addEventListener("keydown", keyHandler, true);
		document.addEventListener("keypress", keyHandler, true);
	}

	async function extendedWardrobe() {
		await waitFor(() => !!ServerSocket);

		SDK.hookFunction(
			"CharacterDecompressWardrobe",
			HOOK_PRIORITIES.ModifyBehaviourMedium,
			(args, next) => {
				let wardrobe = next(args);
				if (
					isWardrobe(wardrobe) &&
					fbcSettings.extendedWardrobe &&
					wardrobe.length < EXPANDED_WARDROBE_SIZE
				) {
					wardrobe = loadExtendedWardrobe(wardrobe);
				}
				return wardrobe;
			}
		);

		SDK.hookFunction(
			"CharacterCompressWardrobe",
			HOOK_PRIORITIES.Top,
			/** @type {(args: (ItemBundle[][] | string)[][], next: (args: (ItemBundle[][] | string)[][]) => string) => string} */
			(args, next) => {
				const [wardrobe] = args;
				if (isWardrobe(wardrobe)) {
					const additionalWardrobe = wardrobe.slice(DEFAULT_WARDROBE_SIZE);
					if (additionalWardrobe.length > 0) {
						Player.OnlineSettings.BCEWardrobe = LZString.compressToUTF16(
							JSON.stringify(additionalWardrobe)
						);
						args[0] = wardrobe.slice(0, DEFAULT_WARDROBE_SIZE);
						ServerAccountUpdate.QueueData({
							OnlineSettings: Player.OnlineSettings,
						});
					}
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"LoginResponse",
			HOOK_PRIORITIES.Top,
			/** @type {(args: Character[], next: (args: Character[]) => void) => void} */
			(args, next) => {
				const [{ BCEWardrobe }] = args;
				if (isString(BCEWardrobe)) {
					Player.BCEWardrobe = BCEWardrobe;
				}
				return next(args);
			}
		);
	}

	/** @type {(wardrobe: ItemBundle[][]) => ItemBundle[][]} */
	function loadExtendedWardrobe(wardrobe) {
		if (fbcSettings.extendedWardrobe) {
			WardrobeSize = EXPANDED_WARDROBE_SIZE;
			WardrobeFixLength();
		}
		if (Player.BCEWardrobe) {
			Player.OnlineSettings.BCEWardrobe = Player.BCEWardrobe;
			Player.BCEWardrobe = null;
			ServerAccountUpdate.QueueData({
				BCEWardrobe: null,
				OnlineSettings: Player.OnlineSettings,
			});
		}
		if (Player.OnlineSettings.BCEWardrobe) {
			try {
				const additionalItemBundle = /** @type {ItemBundle[][]} */ (
					JSON.parse(
						LZString.decompressFromUTF16(Player.OnlineSettings.BCEWardrobe)
					)
				);
				if (isWardrobe(additionalItemBundle)) {
					for (let i = DEFAULT_WARDROBE_SIZE; i < EXPANDED_WARDROBE_SIZE; i++) {
						const additionalIdx = i - DEFAULT_WARDROBE_SIZE;
						if (additionalIdx >= additionalItemBundle.length) {
							break;
						}
						wardrobe[i] = additionalItemBundle[additionalIdx];
					}
				}
			} catch (e) {
				logError("Failed to load extended wardrobe", e);
				fbcBeepNotify(
					"Wardrobe error",
					`Failed to load extended wardrobe.\n\nBackup: ${Player.OnlineSettings.BCEWardrobe}`
				);
			}
		}
		return wardrobe;
	}

	async function beepChangelog() {
		await waitFor(() => !!Player?.AccountName);
		await sleep(5000);
		fbcBeepNotify(
			displayText("FBC Changelog"),
			displayText(
				`FBC has received significant updates since you last used it. See /fbcchangelog in a chatroom.`
			)
		);
		await waitFor(() => !!document.getElementById("TextAreaChatLog"));
		fbcChatNotify(
			`For Better Club (formerly BCE - Bondage Club Enhancements) changelog:\n${fbcChangelog}`
		);
	}

	/** @type {(word: string) => URL | false} */
	function bceParseUrl(word) {
		try {
			const url = new URL(word);
			if (!["http:", "https:"].includes(url.protocol)) {
				return false;
			}
			return url;
		} catch {
			return false;
		}
	}

	/** @type {(url: URL) => "img" | "" | "none-img"} */
	function bceAllowedToEmbed(url) {
		const isTrustedOrigin =
			[
				"cdn.discordapp.com",
				"media.discordapp.com",
				"i.imgur.com",
				"tenor.com",
				"c.tenor.com",
				"media.tenor.com",
				"i.redd.it",
				"puu.sh",
				"fs.kinkop.eu",
			].includes(url.host) ||
			sessionCustomOrigins.get(url.origin) === "allowed";

		if (/\/[^/]+\.(png|jpe?g|gif)$/u.test(url.pathname)) {
			return isTrustedOrigin ? EMBED_TYPE.Image : EMBED_TYPE.Untrusted;
		}
		return EMBED_TYPE.None;
	}

	/** @type {(chatMessageElement: Element, scrollToEnd: () => void) => void} */
	function processChatAugmentsForLine(chatMessageElement, scrollToEnd) {
		const newChildren = [];
		let originalText = "";
		for (const node of chatMessageElement.childNodes) {
			if (node.nodeType !== Node.TEXT_NODE) {
				newChildren.push(node);
				/** @type {HTMLElement} */
				// @ts-ignore
				const el = node;
				if (
					el.classList.contains("ChatMessageName") ||
					el.classList.contains("bce-message-Message")
				) {
					newChildren.push(document.createTextNode(" "));
				}
				continue;
			}
			const contents = node.textContent.trim(),
				words = [contents];

			originalText += node.textContent;

			for (let i = 0; i < words.length; i++) {
				// Handle other whitespace
				const whitespaceIdx = words[i].search(/[\s\r\n]/u);
				if (whitespaceIdx >= 1) {
					words.splice(i + 1, 0, words[i].substring(whitespaceIdx));
					words[i] = words[i].substring(0, whitespaceIdx);
				} else if (whitespaceIdx === 0) {
					words.splice(i + 1, 0, words[i].substring(1));
					[words[i]] = words[i];
					newChildren.push(document.createTextNode(words[i]));
					continue;
				}

				// Handle url linking
				const url = bceParseUrl(words[i].replace(/(^\(+|\)+$)/gu, ""));
				if (url) {
					// Embed or link
					/** @type {HTMLElement | Text} */
					let domNode = null;
					const linkNode = document.createElement("a");
					newChildren.push(linkNode);
					const embedType = bceAllowedToEmbed(url);
					switch (embedType) {
						case EMBED_TYPE.Image:
							{
								const imgNode = document.createElement("img");
								imgNode.src = url.href;
								imgNode.alt = url.href;
								imgNode.onload = scrollToEnd;
								imgNode.classList.add("bce-img");
								linkNode.classList.add("bce-img-link");
								domNode = imgNode;
							}
							break;
						default:
							domNode = document.createTextNode(url.href);
							if (embedType !== EMBED_TYPE.None) {
								const promptTrust = document.createElement("a");
								promptTrust.onclick = (e) => {
									e.preventDefault();
									e.stopPropagation();
									// eslint-disable-next-line prefer-destructuring
									const target = /** @type {HTMLAnchorElement} */ (e.target);
									showModal({
										prompt: displayText(
											"Do you want to add $origin to trusted origins?",
											{
												$origin: url.origin,
											}
										),
										callback: (act) => {
											if (act === "submit") {
												sessionCustomOrigins.set(url.origin, "allowed");
												const parent = target.parentElement;
												parent.removeChild(target);
												const name = parent.querySelector(".ChatMessageName");
												parent.innerHTML = "";
												if (name) {
													parent.appendChild(name);
													parent.appendChild(document.createTextNode(" "));
												}
												parent.appendChild(
													document.createTextNode(
														parent.getAttribute("bce-original-text")
													)
												);
												processChatAugmentsForLine(
													chatMessageElement,
													scrollToEnd
												);
												debug("updated trusted origins", sessionCustomOrigins);
											}
										},
										buttons: {
											submit: displayText("Trust this session"),
										},
									});
								};
								promptTrust.href = "#";
								promptTrust.title = displayText("Trust this session");
								promptTrust.textContent = displayText("(embed)");
								newChildren.push(document.createTextNode(" "));
								newChildren.push(promptTrust);
							}
							break;
					}
					linkNode.href = url.href;
					linkNode.title = url.href;
					linkNode.target = "_blank";
					linkNode.appendChild(domNode);
				} else if (/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/u.test(words[i])) {
					const color = document.createElement("span");
					color.classList.add("bce-color");
					color.style.background = words[i];
					newChildren.push(color);
					newChildren.push(document.createTextNode(words[i]));
				} else {
					newChildren.push(document.createTextNode(words[i]));
				}
			}
		}
		while (chatMessageElement.firstChild) {
			chatMessageElement.removeChild(chatMessageElement.firstChild);
		}
		for (const child of newChildren) {
			chatMessageElement.appendChild(child);
		}
		chatMessageElement.setAttribute("bce-original-text", originalText);
	}

	function customContentDomainCheck() {
		const trustedOrigins = ["https://fs.kinkop.eu", "https://i.imgur.com"];

		let open = false;
		/**
		 * @param {string} origin
		 * @param {"image" | "music"} type
		 */
		function showCustomContentDomainCheckWarning(origin, type = null) {
			if (open) {
				return;
			}
			open = true;
			showModal({
				prompt: displayText(
					`Do you want to allow 3rd party ${
						type ?? "content"
					} to be loaded from $origin? $trusted`,
					{
						$origin: origin,
						$trusted: trustedOrigins.includes(origin)
							? displayText("(This origin is trusted by authors of FBC)")
							: "",
					}
				),
				callback: (act) => {
					open = false;
					if (act === "submit") {
						sessionCustomOrigins.set(origin, "allowed");
					} else if (act === "cancel") {
						sessionCustomOrigins.set(origin, "denied");
					}
				},
				buttons: {
					cancel: displayText("Deny for session"),
					submit: displayText("Allow for session"),
				},
			});
		}

		SDK.hookFunction(
			"ChatAdminRoomCustomizationProcess",
			HOOK_PRIORITIES.OverrideBehaviour,
			/**
			 * @param {[{ ImageURL: string, MusicURL: string }]} args
			 */
			(args, next) => {
				if (!fbcSettings.customContentDomainCheck) {
					return next(args);
				}

				try {
					const [{ ImageURL, MusicURL }] = args;

					const imageOrigin = ImageURL && new URL(ImageURL).origin;
					const musicOrigin = MusicURL && new URL(MusicURL).origin;

					if (imageOrigin && !sessionCustomOrigins.has(imageOrigin)) {
						showCustomContentDomainCheckWarning(imageOrigin, "image");
					} else if (musicOrigin && !sessionCustomOrigins.has(musicOrigin)) {
						showCustomContentDomainCheckWarning(musicOrigin, "music");
					}

					if (
						(!ImageURL ||
							sessionCustomOrigins.get(imageOrigin) === "allowed") &&
						(!MusicURL || sessionCustomOrigins.get(musicOrigin) === "allowed")
					) {
						return next(args);
					}
				} catch (_) {
					// Don't care
				}

				return null;
			}
		);

		SDK.hookFunction(
			"ChatAdminRoomCustomizationClick",
			HOOK_PRIORITIES.Observe,
			(args, next) => {
				for (const s of [
					ElementValue("InputImageURL").trim(),
					ElementValue("InputMusicURL").trim(),
				]) {
					try {
						const url = new URL(s);
						sessionCustomOrigins.set(url.origin, "allowed");
					} catch (_) {
						// Don't care
					}
				}
				return next(args);
			}
		);
	}

	function discreetMode() {
		/** @type {(args: [unknown], next: (args: [unknown]) => unknown) => unknown} */
		const discreetModeHook = (args, next) => {
			if (fbcSettings.discreetMode) {
				return;
			}
			// eslint-disable-next-line consistent-return
			return next(args);
		};

		SDK.hookFunction(
			"ChatRoomDrawBackground",
			HOOK_PRIORITIES.Top,
			discreetModeHook
		);

		SDK.hookFunction("DrawCharacter", HOOK_PRIORITIES.Top, discreetModeHook);
		SDK.hookFunction(
			"NotificationDrawFavicon",
			HOOK_PRIORITIES.Top,
			discreetModeHook
		);

		SDK.hookFunction(
			"DrawImageEx",
			HOOK_PRIORITIES.Top,
			/** @type {(args: [string | HTMLImageElement | HTMLCanvasElement], next: (args: [string | HTMLImageElement | HTMLCanvasElement]) => boolean) => boolean} */
			(args, next) => {
				if (fbcSettings.discreetMode) {
					if (!args) {
						return false;
					}
					const ignoredImages =
						/(^Backgrounds\/(?!Sheet(White)?|grey|White\.)|\b(Kneel|Arousal|Activity|Asylum|Cage|Cell|ChangeLayersMouth|Diaper|Kidnap|Logo|Player|Remote|Restriction|SpitOutPacifier|Struggle|Therapy|Orgasm\d|Poses|HouseVincula|Seducer\w+)\b|^data:|^Assets\/(?!Female3DCG\/Emoticon\/(Afk|Sleep|Read|Gaming|Hearing|Thumbs(Up|Down))\/))/u;
					if (isString(args[0]) && ignoredImages.test(args[0])) {
						return false;
					}
					// @ts-ignore
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					if (args[0]?.src && ignoredImages.test(args[0].src)) {
						return false;
					}
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"NotificationTitleUpdate",
			HOOK_PRIORITIES.Top,
			(args, next) => {
				if (fbcSettings.discreetMode) {
					const notificationCount = NotificationGetTotalCount(1);
					document.title = `${
						notificationCount > 0 ? `(${notificationCount}) ` : ""
					}${displayText("OnlineChat")}`;
					return;
				}
				// eslint-disable-next-line consistent-return
				return next(args);
			}
		);
	}

	function autoStruggle() {
		SDK.hookFunction(
			"StruggleFlexibilityCheck",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (fbcSettings.autoStruggle) {
					if (StruggleProgressFlexCircles.length > 0) {
						StruggleProgressFlexCircles.splice(0, 1);
						return true;
					}
				}
				return next(args);
			}
		);

		createTimer(() => {
			if (!fbcSettings.autoStruggle) {
				return;
			}

			if (typeof StruggleProgress !== "number" || StruggleProgress < 0) {
				return;
			}

			if (StruggleProgressCurrentMinigame === "Strength") {
				StruggleStrengthProcess(false);
			} else if (StruggleProgressCurrentMinigame === "Flexibility") {
				if (StruggleProgressFlexCircles?.length > 0) {
					StruggleFlexibilityProcess(false);
				}
			}
		}, 60);

		createTimer(() => {
			if (!fbcSettings.autoStruggle) {
				return;
			}

			if (typeof StruggleProgress !== "number" || StruggleProgress < 0) {
				return;
			}
			if (StruggleProgressCurrentMinigame === "Dexterity") {
				// Duplicated logic from StruggleDexterity
				const distMult = Math.max(
					-0.5,
					Math.min(
						1,
						(85 -
							Math.abs(
								StruggleProgressDexTarget - StruggleProgressDexCurrent
							)) /
							75
					)
				);
				if (distMult > 0.5) {
					StruggleDexterityProcess();
				}
			}
		}, 0);
	}

	function nicknames() {
		ServerCharacterNicknameRegex = /^[\p{L}0-9\p{Z}'-]+$/u;
	}

	/** @type {(effect: string) => boolean} */
	function addCustomEffect(effect) {
		let updated = false;
		const emoticon = Player.Appearance.find((a) => a.Asset.Name === "Emoticon");
		if (!emoticon) {
			logWarn("Could not find emoticon asset.");
			return updated;
		}
		if (!emoticon.Property) {
			emoticon.Property = { Effect: [effect] };
			updated = true;
		} else if (!emoticon.Property.Effect) {
			emoticon.Property.Effect = [effect];
			updated = true;
		} else if (!emoticon.Property.Effect.includes(effect)) {
			emoticon.Property.Effect.push(effect);
			updated = true;
		}
		if (updated && ServerPlayerIsInChatRoom()) {
			ChatRoomCharacterUpdate(Player);
		}
		return updated;
	}

	/** @type {(effect: string) => boolean} */
	function removeCustomEffect(effect) {
		const emoticon = Player.Appearance.find((a) => a.Asset.Name === "Emoticon");
		let updated = false;
		if (emoticon?.Property?.Effect?.includes(effect)) {
			emoticon.Property.Effect = emoticon.Property.Effect.filter(
				(e) => e !== effect
			);
			updated = true;
		}
		if (updated && ServerPlayerIsInChatRoom()) {
			ChatRoomCharacterUpdate(Player);
		}
		return updated;
	}

	function enableLeashing() {
		addCustomEffect("Leash");
	}

	function disableLeashing() {
		removeCustomEffect("Leash");
	}

	async function leashAlways() {
		await waitFor(() =>
			Player?.Appearance?.some((a) => a.Asset.Name === "Emoticon")
		);
		const emoticon = Player.Appearance.find((a) => a.Asset.Name === "Emoticon");
		if (Array.isArray(emoticon.Asset.AllowEffect)) {
			emoticon.Asset.AllowEffect.push("Leash");
		} else {
			emoticon.Asset.AllowEffect = ["Leash"];
		}
		emoticon.Asset.AllowEffect.push("BlurLight");

		if (fbcSettings.leashAlways) {
			enableLeashing();
		} else {
			disableLeashing();
		}
	}

	function toySync() {
		// Handles synchronizing in-game vibrators with real bluetooth devices via buttplut.io
		if (!fbcSettings.toySync) {
			return;
		}

		const frame = document.createElement("iframe");
		frame.src = "./changelog.html";
		frame.classList.add("bce-false-hidden");
		const script = document.createElement("script");
		const notifierScript = document.createElement("script");
		frame.onload = () => {
			frame.contentDocument.head.appendChild(notifierScript);
			frame.contentDocument.head.appendChild(script);
		};
		logInfo("Loading buttplug.io");

		const onload = async () => {
			logInfo("Loaded Buttplug.io");
			/** @type {import('./types/buttplug.io.1.0.17')} */
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const bp = frame.contentWindow.Buttplug;

			/** @type {import('./types/buttplug.io.1.0.17').ButtplugClient} */
			const client = new bp.ButtplugClient("BceToySync");
			client.addListener(
				"deviceadded",
				(
					/** @type {import('./types/buttplug.io.1.0.17').ButtplugClientDevice} */
					device
				) => {
					debug("Device connected", device);
					fbcChatNotify(
						displayText(`Vibrator connected: $DeviceName`, {
							$DeviceName: device.Name,
						})
					);
					const deviceSettings = toySyncState.deviceSettings.get(device.Name);
					if (deviceSettings) {
						delete deviceSettings.LastIntensity;
					}
				}
			);
			client.addListener(
				"deviceremoved",
				(
					/** @type {import('./types/buttplug.io.1.0.17').ButtplugClientDevice} */
					device
				) => {
					debug("Device disconnected", device);
					fbcChatNotify(
						displayText(`Vibrator disconnected: $DeviceName`, {
							$DeviceName: device.Name,
						})
					);
				}
			);
			client.addListener("scanningfinished", (data) => {
				debug("Scanning finished", data);
			});

			const connector = new bp.ButtplugWebsocketConnectorOptions();
			connector.Address = "ws://127.0.0.1:12345";
			try {
				await client.connect(connector);
				logInfo("Connected buttplug.io");
			} catch (ex) {
				if (ex) {
					// eslint-disable-next-line no-alert
					alert(
						displayText(
							"buttplug.io is enabled, but server could not be contacted at ws://127.0.0.1:12345. Is Intiface Desktop running? Is another client connected to it?"
						)
					);
					logError("buttplug.io could not connect to server", ex);
					return;
				}
			}

			toySyncState.client = client;

			let lastSync = 0;
			// Sync vibrations from slots
			createTimer(() => {
				if (lastSync > Date.now() - 3000) {
					// Don't change vibes more than once per 3 seconds
					return;
				}

				// 0 is VibrateCmd
				for (const d of client.Devices.filter((dev) =>
					dev.AllowedMessages.includes(0)
				)) {
					const deviceSettings = toySyncState.deviceSettings?.get(d.Name);
					if (!deviceSettings) {
						continue;
					}

					const slot = deviceSettings.SlotName;
					const intensity = Player.Appearance.find(
						(a) => a.Asset.Group.Name === slot
					)?.Property?.Intensity;

					if (deviceSettings.LastIntensity === intensity) {
						continue;
					}
					deviceSettings.LastIntensity = intensity;

					lastSync = Date.now();
					if (typeof intensity !== "number" || intensity < 0) {
						d.vibrate(0);
					} else {
						switch (intensity) {
							case 0:
								d.vibrate(0.1);
								debug(d.Name, slot, "intensity 0.1");
								break;
							case 1:
								d.vibrate(0.4);
								debug(d.Name, slot, "intensity 0.4");
								break;
							case 2:
								d.vibrate(0.75);
								debug(d.Name, slot, "intensity 0.75");
								break;
							case 3:
								d.vibrate(1.0);
								debug(d.Name, slot, "intensity 1");
								break;
							default:
								logWarn("Invalid intensity in ", slot, ":", intensity);
								break;
						}
					}
				}
			}, 0);

			Commands.push({
				Tag: "toybatteries",
				Description: displayText(
					"Shows the battery status of all connected buttplug.io toys"
				),
				Action: async () => {
					if (!client.Connected) {
						fbcChatNotify("buttplug.io is not connected");
						return;
					}

					const batteryDevices = client.Devices.filter((dev) =>
						dev.AllowedMessages.includes(8)
					);
					if (batteryDevices.length === 0) {
						fbcChatNotify("No battery devices connected");
						return;
					}

					const batteryStatus = await Promise.all(
						batteryDevices.map((dev) => dev.batteryLevel())
					);
					for (let i = 0; i < batteryDevices.length; i++) {
						const battery = batteryStatus[i] * 100;
						fbcChatNotify(`${batteryDevices[i].Name}: ${battery}%`);
					}
				},
			});

			Commands.push({
				Tag: "toyscan",
				Description: displayText("Scans for connected buttplug.io toys"),
				Action: () => {
					if (!client.Connected) {
						fbcChatNotify(displayText("buttplug.io is not connected"));
						return;
					}

					if (client.isScanning) {
						client.stopScanning();
						fbcChatNotify(displayText("Scanning stopped"));
						return;
					}

					client.startScanning();
					fbcChatNotify(displayText("Scanning for toys"));
				},
			});

			await client.startScanning();
		};

		window.onmessage = (
			/** @type {MessageEvent<unknown>} */
			e
		) => {
			if (e.data === "buttplug-loaded") {
				onload();
			}
		};

		notifierScript.textContent = `
		function sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		}

		(async function () {
			while (typeof Buttplug !== "object" || Buttplug === null) {
				await sleep(10);
			}

			await Buttplug.buttplugInit();

			window.top.postMessage("buttplug-loaded", "${window.location.origin}");
		})();
		`;

		script.src =
			"https://cdn.jsdelivr.net/npm/buttplug@1.0.17/dist/web/buttplug.min.js";
		document.body.appendChild(frame);
	}

	async function pastProfiles() {
		if (!fbcSettings.pastProfiles) {
			return;
		}

		const scriptEl = document.createElement("script");
		scriptEl.src = "https://unpkg.com/dexie@3.2.1/dist/dexie.js";
		document.body.appendChild(scriptEl);

		await waitFor(
			() => typeof Dexie !== "undefined" && ServerSocket && ServerIsConnected
		);

		const db = new Dexie("bce-past-profiles");
		db.version(3).stores({
			profiles: "memberNumber, name, lastNick, seen, characterBundle",
			notes: "memberNumber, note, updatedAt",
		});

		ElementCreateTextArea("bceNoteInput");
		/** @type {HTMLTextAreaElement} */
		// @ts-ignore
		const noteInput = document.getElementById("bceNoteInput");
		noteInput.maxLength = 10000;
		noteInput.classList.add("bce-hidden");

		const profiles = db.table("profiles");
		const notes = db.table("notes");

		/** @type {() => Promise<{ quota: number; usage: number }>} */
		async function readQuota() {
			try {
				const { quota, usage } = await navigator.storage.estimate();
				debug(
					`current quota usage ${usage?.toLocaleString()} out of maximum ${quota?.toLocaleString()}`
				);
				return { quota, usage };
			} catch (e) {
				logError("reading storage quota information", e);
				return { quota: -1, usage: -1 };
			}
		}

		/** @type {(num: number) => Promise<void>} */
		async function trimProfiles(num) {
			/** @type {SavedProfile[]} */
			let list = await profiles.toArray();
			// Oldest first
			list.sort((a, b) => a.seen - b.seen);
			list = list.slice(0, num);
			debug("deleting", list);
			await profiles.bulkDelete(list.map((p) => p.memberNumber));
		}

		async function quotaSafetyCheck() {
			const { quota, usage } = await readQuota();
			if (usage / quota > 0.9) {
				logInfo(
					`storage quota above 90% utilization (${usage}/${quota}), cleaning some of the least recently seen profiles before saving new one`
				);
				await trimProfiles(10);
			}
		}

		/** @type {(characterBundle: NetCharacter) => Promise<void>} */
		async function saveProfile(characterBundle) {
			await quotaSafetyCheck();

			const name = characterBundle.Name;
			const nick = characterBundle.Nickname;

			// Delete unnecessary data
			const unnecessaryFields = [
				"ActivePose",
				"Inventory",
				"BlockItems",
				"LimitedItems",
				"FavoriteItems",
				"ArousalSettings",
				"OnlineSharedSettings",
				"WhiteList",
				"BlackList",
				"Crafting",
			];
			for (const field of unnecessaryFields) {
				delete characterBundle[field];
			}

			debug(`saving profile of ${nick} (${name})`);
			try {
				await profiles.put({
					memberNumber: characterBundle.MemberNumber,
					name,
					lastNick: nick,
					seen: Date.now(),
					characterBundle: JSON.stringify(characterBundle),
				});
			} catch (e) {
				const { quota, usage } = await readQuota();
				logError(`unable to save profile (${usage}/${quota}):`, e);
			}
		}

		SDK.hookFunction(
			"ChatRoomSync",
			HOOK_PRIORITIES.Top,
			/**
			 * @param {ChatRoomSyncEvent[]} args
			 */
			(args, next) => {
				const [data] = args;
				if (data?.Character?.length) {
					for (const char of data.Character) {
						saveProfile(deepCopy(char));
					}
				}
				next(args);
			}
		);

		SDK.hookFunction(
			"ChatRoomSyncSingle",
			HOOK_PRIORITIES.Top,
			/**
			 * @param {ChatRoomSyncSingleEvent[]} args
			 */
			(args, next) => {
				const [data] = args;
				if (data?.Character?.MemberNumber) {
					saveProfile(deepCopy(data.Character));
				}
				next(args);
			}
		);

		SDK.hookFunction(
			"InformationSheetRun",
			HOOK_PRIORITIES.AddBehaviour,
			/** @type {(args: unknown[], next: (args: unknown[]) => unknown) => unknown} */
			(args, next) => {
				if (InformationSheetSelection.BCESeen) {
					w.MainCanvas.getContext("2d").textAlign = "left";
					DrawText(
						displayText("Last seen: ") +
							new Date(InformationSheetSelection.BCESeen).toLocaleString(),
						1200,
						75,
						"grey",
						"black"
					);
					w.MainCanvas.getContext("2d").textAlign = "center";
				}
				// eslint-disable-next-line consistent-return
				return next(args);
			}
		);

		/** @type {(memberNumber: number) => Promise<void>} */
		async function openCharacter(memberNumber) {
			try {
				/** @type {SavedProfile} */
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const profile = await profiles.get(memberNumber);
				const C = CharacterLoadOnline(
					/** @type {NetCharacter} */ (JSON.parse(profile.characterBundle)),
					memberNumber
				);
				C.BCESeen = profile.seen;
				if (CurrentScreen === "ChatRoom") {
					hideChatRoomElements();
					ChatRoomBackground = ChatRoomData.Background;
				}
				InformationSheetLoadCharacter(C);
			} catch (e) {
				fbcChatNotify(displayText("No profile found"));
				logError("reading profile", e);
			}
		}

		Commands.push({
			Tag: "profiles",
			Description: displayText(
				"<filter> - List seen profiles, optionally searching by member number or name"
			),
			Action: async (args) => {
				/** @type {SavedProfile[]} */
				let list = await profiles.toArray();
				list = list.filter(
					(p) =>
						!args ||
						p.name.toLowerCase().includes(args) ||
						p.memberNumber.toString().includes(args) ||
						p.lastNick?.toLowerCase().includes(args)
				);
				list.sort((a, b) => b.seen - a.seen);
				const matches = list.length;
				list = list.slice(0, 100);
				list.sort(
					(a, b) => -(b.lastNick ?? b.name).localeCompare(a.lastNick ?? a.name)
				);
				const lines = list.map((p) => {
					const div = document.createElement("div");
					div.textContent = displayText(
						`$nickAndName ($memberNumber) - Seen: $seen`,
						{
							$nickAndName: p.lastNick ? `${p.lastNick} / ${p.name}` : p.name,
							$memberNumber: p.memberNumber.toString(),
							$seen: new Date(p.seen).toLocaleDateString(),
						}
					);
					const link = document.createElement("a");
					link.textContent = displayText("Open");
					link.href = `#`;
					link.classList.add("bce-profile-open");
					link.addEventListener("click", (e) => {
						e.preventDefault();
						e.stopPropagation();
						openCharacter(p.memberNumber);
					});
					div.prepend(link);
					return div;
				});
				const header = document.createElement("h3");
				header.textContent = displayText("Saved Profiles");
				header.style.marginTop = "0";
				const footer = document.createElement("div");
				footer.textContent = displayText(
					"showing $num most recent of $total total profiles matching search",
					{
						$num: list.length.toLocaleString(),
						$total: matches.toLocaleString(),
					}
				);
				fbcChatNotify([header, ...lines, footer]);
			},
		});

		// Notes view
		let inNotes = false;
		let noteUpdatedAt = 0;

		/**
		 * @param {unknown} n
		 * @returns {n is FBCNote}
		 */
		function isNote(n) {
			return isNonNullObject(n) && typeof n.note === "string";
		}

		function showNoteInput() {
			inNotes = true;
			noteInput.classList.remove("bce-hidden");
			noteInput.value = "Loading...";
			notes
				.get(InformationSheetSelection.MemberNumber)
				.then((note) => {
					if (isNote(note)) {
						noteInput.value = note?.note || "";
						noteUpdatedAt = note?.updatedAt || 0;
					} else {
						throw new Error("invalid note");
					}
				})
				.catch((reason) => {
					noteInput.value = "";
					logError("getting note", reason);
				});
		}

		function hideNoteInput() {
			noteInput.classList.add("bce-hidden");
			inNotes = false;
		}

		/** @type {(e: KeyboardEvent) => void} */
		function keyHandler(e) {
			if (e.key === "Escape" && inNotes) {
				hideNoteInput();
				e.stopPropagation();
				e.preventDefault();
			}
		}

		document.addEventListener("keydown", keyHandler, true);
		document.addEventListener("keypress", keyHandler, true);

		SDK.hookFunction(
			"OnlineProfileRun",
			HOOK_PRIORITIES.OverrideBehaviour,
			(args, next) => {
				if (inNotes) {
					DrawText(
						displayText("Personal notes (only you can read these):"),
						910,
						105,
						"Black",
						"Gray"
					);
					if (noteUpdatedAt) {
						drawTextFitLeft(
							displayText("Last saved: $date", {
								$date: new Date(noteUpdatedAt).toLocaleString(),
							}),
							60,
							105,
							400,
							"Black",
							"Gray"
						);
					}
					ElementPositionFix("bceNoteInput", 36, 100, 160, 1790, 750);
					// Always draw the accept button; normal method shows it when is player
					DrawButton(
						1720,
						60,
						90,
						90,
						"",
						"White",
						"Icons/Accept.png",
						TextGet("LeaveSave")
					);
					DrawButton(
						1820,
						60,
						90,
						90,
						"",
						"White",
						"Icons/Cancel.png",
						TextGet("LeaveNoSave")
					);
					return null;
				}
				DrawButton(
					1620,
					60,
					90,
					90,
					"",
					"White",
					"Icons/Notifications.png",
					displayText("[FBC] Notes")
				);
				return next(args);
			}
		);

		SDK.hookFunction(
			"OnlineProfileClick",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				if (inNotes) {
					if (MouseIn(1720, 60, 90, 90)) {
						(async function () {
							await quotaSafetyCheck();
							// Save note
							await notes.put({
								memberNumber: InformationSheetSelection.MemberNumber,
								note: noteInput.value,
								updatedAt: Date.now(),
							});
						})();
						hideNoteInput();
					} else if (MouseIn(1820, 60, 90, 90)) {
						hideNoteInput();
					}
					return;
				} else if (!inNotes && MouseIn(1620, 60, 90, 90)) {
					showNoteInput();
				}
				next(args);
			}
		);

		if (
			navigator.storage?.persisted &&
			!(await navigator.storage.persisted())
		) {
			if (!(await navigator.storage.persist())) {
				logWarn("Profile storage may not be persistent.");
			}
		}
	}

	function pendingMessages() {
		/** @type {(dictionary: Record<string, unknown>[], key: string, value: unknown) => Record<string, unknown>[]} */
		function addToDictionary(dictionary, key, value) {
			if (!Array.isArray(dictionary)) {
				dictionary = [];
			}
			dictionary.push({ Tag: key, Text: value });
			return dictionary;
		}

		let nonce = 0;

		SDK.hookFunction(
			"ChatRoomMessage",
			HOOK_PRIORITIES.Observe,
			(args, next) => {
				const ret = next(args);
				if (
					fbcSettings.pendingMessages &&
					args?.length &&
					isChatMessage(args[0]) &&
					Array.isArray(args[0].Dictionary)
				) {
					const [message] = args;
					const tag = message.Dictionary?.find?.((d) => d.Tag === "fbc_nonce");
					if (tag) {
						const el = document.querySelector(`[data-nonce='${tag.Text}']`);
						if (el) {
							el.remove();
						}
					}
				}
				return ret;
			}
		);

		SDK.hookFunction(
			"ServerSend",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				if (
					fbcSettings.pendingMessages &&
					args?.length >= 2 &&
					args[0] === "ChatRoomChat" &&
					isChatMessage(args[1]) &&
					args[1].Type !== HIDDEN &&
					!args[1].Target
				) {
					nonce++;
					if (nonce >= Number.MAX_SAFE_INTEGER) {
						nonce = 0;
					}
					args[1].Dictionary = addToDictionary(
						args[1].Dictionary,
						"fbc_nonce",
						nonce
					);
					const div = document.createElement("div");
					div.classList.add("ChatMessage", "bce-pending");
					div.setAttribute("data-time", ChatRoomCurrentTime());
					div.setAttribute("data-sender", Player.MemberNumber.toString());
					div.setAttribute("data-nonce", nonce.toString());
					switch (args[1].Type) {
						case "Chat":
							{
								div.classList.add("ChatMessageChat");
								const name = document.createElement("span");
								name.classList.add("ChatMessageName");
								name.style.color = Player.LabelColor || null;
								name.textContent = CharacterNickname(Player);
								div.appendChild(name);
								div.appendChild(
									document.createTextNode(`: ${args[1].Content}`)
								);
							}
							break;
						case "Emote":
						case "Action":
							div.classList.add("ChatMessageEmote");
							div.appendChild(
								document.createTextNode(
									`*${
										args[1].Type === "Emote"
											? `${CharacterNickname(Player)}: `
											: ""
									}${args[1].Content}*`
								)
							);
							break;
						default:
							return next(args);
					}
					const loader = document.createElement("div");
					loader.classList.add("lds-ellipsis");
					for (let i = 0; i < 4; i++) {
						const dot = document.createElement("div");
						loader.appendChild(dot);
					}
					div.appendChild(loader);
					const scroll = ElementIsScrolledToEnd("TextAreaChatLog");
					if (document.getElementById("TextAreaChatLog")) {
						document.getElementById("TextAreaChatLog").appendChild(div);
						if (scroll) {
							ElementScrollToEnd("TextAreaChatLog");
						}
					}
				}
				return next(args);
			}
		);
	}

	function hideHiddenItemsIcon() {
		SDK.hookFunction(
			"DrawCharacter",
			HOOK_PRIORITIES.ModifyBehaviourLow,
			/** @type {(args: [Character], next: (args: [Character]) => void) => void} */
			(args, next) => {
				const [c] = args;
				if (!c || !fbcSettings.hideHiddenItemsIcon) {
					return next(args);
				}
				const backup = c.HasHiddenItems;
				c.HasHiddenItems = false;
				const ret = next(args);
				c.HasHiddenItems = backup;
				return ret;
			}
		);
	}

	async function crafting() {
		await waitFor(() => Array.isArray(Commands) && Commands.length > 0);

		const importPosition = /** @type {const} */ ([1485, 15, 90, 90]);
		const exportPosition = /** @type {const} */ ([1585, 15, 90, 90]);

		function importCraft() {
			showModal({
				prompt: displayText("Paste the craft here"),
				callback: (action, str) => {
					if (action !== "submit" || !str) {
						return;
					}
					try {
						const craft = /** @type {Craft} */ (
							JSON.parse(LZString.decompressFromBase64(str))
						);
						if (!isNonNullObject(craft)) {
							logError(craft);
							throw new Error(`invalid craft type ${typeof craft} ${str}`);
						}
						for (const [key, value] of Object.entries(craft)) {
							if (
								!isString(value) &&
								!Number.isInteger(value) &&
								value !== false &&
								value !== true &&
								value !== null &&
								!isNonNullObject(value)
							) {
								logWarn("potentially invalid craft bundle:", key, "was", value);
							}
						}
						CraftingSelectedItem = CraftingConvertItemToSelected(craft);
						CraftingModeSet("Name");
					} catch (e) {
						logError("importing craft", e);
					}
				},
				input: {
					initial: "",
					readonly: false,
					type: "textarea",
				},
			});
		}

		SDK.hookFunction(
			"CraftingClick",
			HOOK_PRIORITIES.AddBehaviour,
			(args, next) => {
				switch (CraftingMode) {
					case "Name":
						if (MouseIn(...exportPosition)) {
							showModal({
								prompt: displayText("Copy the craft here"),
								input: {
									initial: LZString.compressToBase64(
										JSON.stringify(CraftingConvertSelectedToItem())
									),
									readonly: true,
									type: "textarea",
								},
								callback: () => {
									debug("exported craft");
								},
							});
						} else if (MouseIn(...importPosition)) {
							importCraft();
						}
						break;
					default:
						break;
				}
				return next(args);
			}
		);

		SDK.hookFunction(
			"CraftingRun",
			HOOK_PRIORITIES.ModifyBehaviourMedium,
			(args, next) => {
				const ret = next(args);
				if (CraftingMode === "Name") {
					DrawButton(...importPosition, displayText("Import"), "white");
					DrawButton(...exportPosition, displayText("Export"), "white");
				}
				return ret;
			}
		);

		SDK.hookFunction(
			"DrawItemPreview",
			HOOK_PRIORITIES.AddBehaviour,
			/**
			 * @param {[Item, Character, number, number, {}]} args
			 * @param {(args: [Item, Character, number, number, {}]) => void} next
			 */
			(args, next) => {
				const ret = next(args);
				const [item, , x, y] = args;
				if (item) {
					const { Craft } = item;
					if (MouseIn(x, y, 225, 275) && Craft) {
						drawTooltip(x, y, 225, displayText(Craft.Property), "center");
						drawTooltip(
							1000,
							y - 70,
							975,
							`${displayText("Description:")} ${
								Craft.Description || "<no description>"
							}`,
							"left"
						);
					}
				}
				return ret;
			}
		);
	}

	let disabledUntil = 0;
	/**
	 * @typedef {{ prompt: string | Node, input?: { initial: string, readonly: boolean, type: "input" | "textarea" }, callback: (action: ModalAction, inputValue?: string) => void, buttons?: { submit?: string, cancel?: string } }} ModalOptions
	 * @typedef {"submit" | "cancel" | "close"} ModalAction
	 */
	/**
	 * @param {ModalOptions} opts
	 */
	function showModal(opts) {
		disabledUntil = Date.now() + 500;
		const modal = document.createElement("dialog");
		modal.style.zIndex = "1001";
		modal.style.display = "flex";
		modal.style.flexDirection = "column";
		modal.style.width = "50em";
		modal.style.fontFamily = "Arial, Helvetica, sans-serif";
		modal.open = true;

		const prompt = document.createElement("div");
		if (isString(opts.prompt)) {
			prompt.textContent = opts.prompt;
		} else {
			prompt.append(opts.prompt);
		}
		modal.append(prompt);
		document.body.append(modal);

		let inputValue = "";

		if (opts.input) {
			const input = document.createElement(opts.input.type);
			switch (opts.input.type) {
				case "input":
					{
						const el = /** @type {HTMLInputElement} */ (input);
						el.type = "text";
					}
					break;
				case "textarea":
					{
						const el = /** @type {HTMLTextAreaElement} */ (input);
						el.rows = 10;
					}
					break;
				default:
					// This should never happen
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					throw new Error(`invalid input type ${opts.input.type}`);
			}
			input.style.width = "100%";
			input.readOnly = opts.input.readonly;
			input.addEventListener("mouseover", () => {
				input.select();
			});
			input.addEventListener("focus", () => {
				input.select();
			});
			input.addEventListener("change", () => {
				inputValue = input.value;
			});

			input.value = opts.input.initial;
			modal.append(input);
		}

		const buttonContainer = document.createElement("div");
		buttonContainer.style.display = "flex";
		buttonContainer.style.flexDirection = "row";
		buttonContainer.style.justifyContent = "space-between";
		buttonContainer.style.marginTop = "1em";
		buttonContainer.style.width = "100%";
		modal.append(buttonContainer);

		const submit = document.createElement("button");
		submit.textContent = opts.buttons?.submit || displayText("Submit");
		submit.addEventListener("click", () => {
			close("submit");
		});

		const cancel = document.createElement("button");
		cancel.textContent = opts.buttons?.cancel || displayText("Cancel");
		cancel.addEventListener("click", () => {
			close("cancel");
		});

		for (const button of [submit, cancel]) {
			button.style.padding = "0.5em";
			button.style.flexGrow = "1";
		}

		buttonContainer.append(cancel, submit);

		modal.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		/**
		 * @param {KeyboardEvent} e
		 */
		const keyClick = (e) => {
			e.stopPropagation();
			if (e.key === "Escape") {
				close();
			}
		};
		document.addEventListener("keydown", keyClick);

		// Click-blocker
		const blocker = document.createElement("div");
		blocker.style.position = "fixed";
		blocker.style.top = "0";
		blocker.style.left = "0";
		blocker.style.width = "100vw";
		blocker.style.height = "100vh";
		blocker.style.zIndex = "1000";
		blocker.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
		blocker.title = displayText("Click to close the modal");
		blocker.addEventListener("click", () => {
			close();
		});
		blocker.addEventListener("focus", () => {
			close();
		});
		document.body.append(blocker);

		/**
		 * @param {ModalAction} action
		 */
		function close(action = "close") {
			if (Date.now() < disabledUntil) {
				return;
			}
			disabledUntil = Date.now() + 500;
			modal.close();
			modal.remove();
			blocker.remove();
			document.removeEventListener("keydown", keyClick);
			opts.callback(action, inputValue);
		}
	}

	/**
	 * @param {Omit<ModalOptions, "callback">} opts
	 * @returns {Promise<[ModalAction, string | null]>}
	 */
	function showAsyncModal(opts) {
		return new Promise((resolve) => {
			showModal({
				...opts,
				callback: (action, inputValue) => {
					resolve([action, inputValue]);
				},
			});
		});
	}

	function hideChatRoomElements() {
		document.getElementById("InputChat").style.display = "none";
		document.getElementById("TextAreaChatLog").style.display = "none";
		ChatRoomChatHidden = true;
	}

	(function () {
		const sendHeartbeat = () => {
			const payload = {
				Version: FBC_VERSION,
				GameVersion,
				// !! to avoid passing room name to statbot, only presence inside a room or not
				InRoom: !!Player.LastChatRoom,
				InPrivate: !!Player.LastChatRoomPrivate,
				// @ts-ignore
				// eslint-disable-next-line camelcase
				InTampermonkey: typeof GM_info !== "undefined",
				FUSAM: !!w.FUSAM?.present,
				FBCviaFUSAM: w.FUSAM?.addons?.FBC?.status === "loaded",
			};
			for (const [key, value] of Object.entries(addonTypes)) {
				if (
					bcModSdk.getModsInfo().some((mod) => mod.name === key) &&
					value === "none"
				) {
					if (handledByFUSAM(key)) {
						payload[key] = "fusam";
					} else {
						payload[key] = "external";
					}
				} else {
					payload[key] = value;
				}
			}
			SDK.callOriginal("ServerSend", [
				"AccountBeep",
				{
					BeepType: "Leash",
					// FBC statbot, which only collects anonymous aggregate version and usage data to justify supporting or dropping support for features
					MemberNumber: 61197,
					Message: JSON.stringify(payload),
					// IsSecret: true to avoid passing room name to statbot
					IsSecret: true,
				},
			]);
		};
		setTimeout(sendHeartbeat, 15000);
		// 5 minutes
		createTimer(sendHeartbeat, 1000 * 60 * 5);
	})();

	/**
	 * @param {string} target
	 * @param {boolean} [limitVisible]
	 */
	function findDrawnCharacters(target, limitVisible = false) {
		const baseList = limitVisible
			? ChatRoomCharacterDrawlist
			: ChatRoomCharacter;
		let targetMembers = [];
		if (/^\d+$/u.test(target)) {
			targetMembers = [
				baseList.find((c) => c.MemberNumber === parseInt(target)),
			];
		} else {
			targetMembers = baseList.filter(
				(c) =>
					CharacterNickname(c).split(" ")[0]?.toLowerCase() ===
						target?.toLowerCase() ||
					c.Name.split(" ")[0].toLowerCase() === target?.toLowerCase()
			);
		}
		return targetMembers.filter((c) => c);
	}

	/** @type {(x: number, y: number, width: number, text: string, align: "left" | "center") => void} */
	function drawTooltip(x, y, width, text, align) {
		const canvas = w.MainCanvas.getContext("2d");
		const bak = canvas.textAlign;
		canvas.textAlign = align;
		canvas.beginPath();
		canvas.rect(x, y, width, 65);
		canvas.fillStyle = "#FFFF88";
		canvas.fillRect(x, y, width, 65);
		canvas.fill();
		canvas.lineWidth = 2;
		canvas.strokeStyle = "black";
		canvas.stroke();
		canvas.closePath();
		DrawTextFit(
			text,
			align === "left" ? x + 3 : x + width / 2,
			y + 33,
			width - 6,
			"black"
		);
		canvas.textAlign = bak;
	}

	/** @type {(text: string, x: number, y: number, width: number, color: string, backColor?: string) => void} */
	function drawTextFitLeft(text, x, y, width, color, backColor = null) {
		const bk = w.MainCanvas.getContext("2d").textAlign;
		w.MainCanvas.getContext("2d").textAlign = "left";
		DrawTextFit(text, x, y, width, color, backColor);
		w.MainCanvas.getContext("2d").textAlign = bk;
	}

	/** @type {(cb: () => void, intval: number) => void} */
	function createTimer(cb, intval) {
		let lastTime = Date.now();
		SDK.hookFunction("GameRun", HOOK_PRIORITIES.Top, (args, next) => {
			if (Date.now() - lastTime > intval) {
				lastTime = Date.now();
				cb();
			}
			return next(args);
		});
	}

	/** @type {(addon: string) => boolean} */
	function handledByFUSAM(addon) {
		return w.FUSAM?.addons && addon in w.FUSAM.addons;
	}

	/** @type {(ms: number) => Promise<void>} */
	function sleep(ms) {
		// eslint-disable-next-line no-promise-executor-return
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/** @type {(s: unknown) => s is string} */
	function isString(s) {
		return typeof s === "string";
	}

	/** @type {(o: unknown) => o is Record<string, any>} */
	function isNonNullObject(o) {
		return o && typeof o === "object" && !Array.isArray(o);
	}

	/** @type {(m: unknown) => m is ChatMessage} */
	function isChatMessage(m) {
		return (
			isNonNullObject(m) &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			typeof m.Type === "string" &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			typeof m.Content === "string"
		);
	}

	/** @type {(c: unknown) => c is Character} */
	function isCharacter(c) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		return isNonNullObject(c) && typeof c.IsPlayer === "function";
	}

	/** @type {(c: unknown) => c is (string | string[])} */
	function isStringOrStringArray(c) {
		return isString(c) || (Array.isArray(c) && c.every(isString));
	}

	/** @type {(o: unknown) => o is ItemBundle[][]} */
	function isWardrobe(o) {
		return (
			Array.isArray(o) && o.every((b) => isItemBundleArray(b) || b === null)
		);
	}

	/** @type {(o: unknown) => o is ItemBundle[]} */
	function isItemBundleArray(o) {
		return Array.isArray(o) && o.every(isItemBundle);
	}

	/** @type {(o: unknown) => o is ItemBundle} */
	function isItemBundle(o) {
		return (
			isNonNullObject(o) &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			typeof o.Name === "string" &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			typeof o.Group === "string"
		);
	}

	/** @type {<T>(o: T) => T} */
	function deepCopy(o) {
		// eslint-disable-next-line
		return structuredClone(o);
	}

	// Confirm leaving the page to prevent accidental back button, refresh, or other navigation-related disruptions
	w.addEventListener(
		"beforeunload",
		(e) => {
			if (toySyncState.client?.Connected) {
				// Stop vibrating toys
				for (const device of toySyncState.client.Devices.filter((d) =>
					d.AllowedMessages.includes(0)
				)) {
					device.vibrate(0);
				}
			}
			if (fbcSettings.confirmLeave) {
				e.preventDefault();
				// The connection is closed, this call gets you relogin immediately
				ServerSocket.io.disconnect();
				CommonSetScreen("Character", "Relog");
				ServerSocket.io.connect();
				return (e.returnValue = "Are you sure you want to leave the club?");
			}
			return null;
		},
		{
			capture: true,
		}
	);
}

ForBetterClub();

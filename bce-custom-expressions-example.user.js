// ==UserScript==
// @name For Better Club Expressions
// @namespace https://www.bondageprojects.com/
// @version 0.1
// @description Customize the expressions used by FBC
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
/* eslint-disable camelcase */

/**
 *     BCE
 *  Copyright (C) 2022  Sid
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

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async function () {
	"use strict";

	const w = window;

	if (typeof ChatRoomCharacter === "undefined") {
		console.warn(
			"Bondage Club not detected. Skipping BCE customizer initialization."
		);
		return;
	}

	await waitFor(() => !!w.Player?.Name && !!w.bce_initializeDefaultExpression);

	// NOTICE: You may delete the ArousalExpressionStages or EventExpressions sections if you don't want to use them, and leave only one. The other will use defaults. EventExpressions must contain keys for all events that ActivityTriggers trigger.

	/**
	 * These are all the different stages your face goes through as your arousal increases. The map should always contain Blush, Eyebrows, Fluids, Eyes, Eyes2, Mouth and Pussy.
	 * The order of the expressions within each facial component is important to keep in a descending order.
	 *
	 * Each expression comes with Expression (refer to the expressions cheatsheet at https://gitlab.com/Sidiousious/bce/-/blob/main/README.md for valid values), and Limit, which has to be between 0 and 100 inclusively.
	 * null means the default expression will be used (e.g. no blush, no fluid, etc.)
	 *
	 * Limit dictates above which the expression will be used.
	 */
	w.bce_ArousalExpressionStages = {
		Blush: [
			{ Expression: "Extreme", Limit: 100 },
			{ Expression: "VeryHigh", Limit: 90 },
			{ Expression: "High", Limit: 70 },
			{ Expression: "Medium", Limit: 50 },
			{ Expression: "Low", Limit: 20 },
			{ Expression: null, Limit: 0 },
		],
		Eyebrows: [
			{ Expression: "Soft", Limit: 80 },
			{ Expression: "Lowered", Limit: 50 },
			{ Expression: "Raised", Limit: 20 },
			{ Expression: null, Limit: 0 },
		],
		Fluids: [
			{ Expression: "DroolMessy", Limit: 99 },
			{ Expression: "DroolMedium", Limit: 90 },
			{ Expression: "DroolSides", Limit: 80 },
			{ Expression: "DroolLow", Limit: 50 },
			{ Expression: null, Limit: 0 },
		],
		Eyes: [
			{ Expression: "VeryLewd", Limit: 100 },
			{ Expression: "Lewd", Limit: 95 },
			{ Expression: "Horny", Limit: 70 },
			{ Expression: "Sad", Limit: 20 },
			{ Expression: null, Limit: 0 },
		],
		Eyes2: [
			{ Expression: "VeryLewd", Limit: 100 },
			{ Expression: "Lewd", Limit: 95 },
			{ Expression: "Horny", Limit: 70 },
			{ Expression: "Sad", Limit: 20 },
			{ Expression: null, Limit: 0 },
		],
		Mouth: [
			{ Expression: "Ahegao", Limit: 100 },
			{ Expression: "Moan", Limit: 95 },
			{ Expression: "HalfOpen", Limit: 90 },
			{ Expression: "LipBite", Limit: 80 },
			{ Expression: "HalfOpen", Limit: 40 },
			{ Expression: null, Limit: 0 },
		],
		// Pussy group includes Penis, which is the only type of "pussy" with expressions and controls erections.
		Pussy: [
			{ Expression: "Hard", Limit: 50 },
			{ Expression: null, Limit: 0 },
		],
	};

	/**
	 * These are the various expressions that BCE can trigger. Most of these are mapped to chat messages using bce_ChatTriggers below.
	 * Special events that are not triggered from chat:
	 * - PostOrgasm: this is triggered when the player begins recovering from orgasm.
	 *
	 * Data model:
	 * - Type: name for the event, should match the key in the object
	 * - Duration: how long the expression lasts, in milliseconds, or -1 for indefinite
	 * - Priority: how important the expression is, higher is more important. Expressions with the same or lower priority are cut short when another expression is triggered.
	 * - Expression: a map of face component (Blush, Eyes, Eyes2, Mouth, Fluids, Eyebrows, Pussy) to the expression timeline.
	 * - Poses: the pose timeline.
	 *
	 * The expression timeline is a list of expressions, which are objects with the following properties:
	 * - Expression: the expression type, e.g. "DroolSides". Refer to the expressions cheatsheet at https://gitlab.com/Sidiousious/bce/-/blob/main/README.md
	 * - Duration: how long the expression lasts, in milliseconds, or -1 for indefinite
	 * - Priority: how important the expression is, higher is more important. Expressions with the same or lower priority are cut short when another expression is triggered.
	 * - ExpressionModifier: a number from -4 to +4 that modifies the intensity of the expression. This is only valid for Blush. Use only Expression or ExpressionModifier, not both.
	 * - Skip: if true, the expression will be skipped for the duration.
	 *
	 * The pose timeline is a list of poses, which are objects with the following properties:
	 * - Pose: the complete pose array, refer to https://github.com/Ben987/Bondage-College/blob/2cc8eabd51c075cb1e88c5ab36317bfc51709470/BondageClub/Assets/Female3DCG/Female3DCG.js#L5711 for a complete list. Max one per category.
	 * - Duration: how long the pose lasts, in milliseconds, or -1 for indefinite
	 * - Priority: how important the pose is, higher is more important. Poses with the same or lower priority are cut short when another pose is triggered.
	 */
	w.bce_EventExpressions = {
		PostOrgasm: {
			Type: "PostOrgasm",
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
				Blush: [{ ExpressionModifier: 2, Duration: 10000 }],
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
				Blush: [{ ExpressionModifier: 5, Duration: 15000 }],
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
				Mouth: [{ Expression: "Pained", Duration: 15000 }],
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
				Drool: [{ Expression: "TearsMedium", Duration: -1 }],
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

	/**
	 * This list maps incoming messages to expressions.
	 *
	 * - Event: The event to trigger.
	 * - Type: The type of the message (Activity, Action, Emote, etc.)
	 * - Matchers: a list of matchers, one of which must match for the expression to be triggered.
	 *
	 * In matchers:
	 * - Tester: a regular expression that must match the Content of the message. For Emote this is the message sent by the user. For Activity/Action this is the label used by the game (e.g. "ChatOther-ItemArms-Pinch" or "ActionActivityShockItem")
	 * - Criteria: a list of additional criteria that must be met for the expression to be triggered.
	 *
	 * In criteria:
	 * - TargetIsPlayer: if present and true, the expression will only be triggered if the target is the player.
	 * - SenderIsPlayer: if present and true, the expression will only be triggered if the sender is the player.
	 */
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
					Tester: /^stretches($| her)/u,
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
					Tester: /^spreads(( her legs)? on)? her knees/u,
				},
			],
		},
		{
			Event: "SpreadLegs",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^spreads her legs/u,
				},
			],
		},
		{
			Event: "Handstand",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^(does a handstand|stands on her hands)/u,
				},
			],
		},
		{
			Event: "Hogtied",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^lies( down)? on (the floor|her (tummy|stomach))/u,
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
					Tester: /^closes her mouth/u,
				},
			],
		},
		{
			Event: "OpenMouth",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^opens her mouth/u,
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
					Tester: /^(bares her teeth|snarls)/u,
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
					Tester: /^opens her eyes/u,
				},
			],
		},
		{
			Event: "NarrowEyes",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^((squints|narrows) her eyes|narrowly opens her eyes)/u,
				},
			],
		},
		{
			Event: "CloseEyes",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^closes her eyes/u,
				},
			],
		},
		{
			Event: "ResetBrows",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^lowers her eyebrows/u,
				},
			],
		},
		{
			Event: "RaiseBrows",
			Type: "Emote",
			Matchers: [
				{
					Tester: /^raises her eyebrows/u,
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
					Tester: /^(starts to cry|sheds .* tears?|eyes( start( to)?)? leak)/u,
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

	/** @type {(func: () => boolean) => Promise<void>} */
	async function waitFor(func) {
		while (!func()) {
			// eslint-disable-next-line no-await-in-loop
			await sleep(100);
		}
	}

	/** @type {(ms: number) => Promise<void>} */
	function sleep(ms) {
		// eslint-disable-next-line no-promise-executor-return
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
})();

// ==UserScript==
// @name FBC fork loader
// @namespace https://www.bondageprojects.com/
// @version 1.1
// @description loader script for the fork of old fbc
// @author Sidious (and others)
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==

/**
 *     BCE/FBC
 *  Copyright (C) 2024  Sid
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

if (GameVersion !== 'R103') {
	if (!GameVersion.startsWith('R104Beta')){
		fetch('https://api.counterapi.dev/v1/wce/fbcLoader/up');
		if (window.confirm("This FBC fork is now named WCE. Please remove the old user script and follow the instructions to add the new WCE version (required for r105+)!")) {
			window.open("https://github.com/KittenApps/WCE?tab=readme-ov-file#wholesome-club-extensions-wce", "_blank");
		}
	}
	if (typeof FUSAM === "object" && FUSAM?.present) {
		import("https://wce.netlify.app/wce.js");
	} else {
		let storeFUSAM;
		Object.defineProperty(window, "FUSAM", {
			set(n) {
				storeFUSAM = n;
				import("https://wce.netlify.app/wce.js");
			},
			get() {
				return storeFUSAM;
			},
		});
	}
} else {
	import(`https://kittenapps.github.io/fbc-fork/fbc.user.js?v=${(Date.now() / 10000).toFixed(0)}`);
}
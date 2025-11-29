/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Auto Save Location - Set where to save markdown files */
	"fileLocation": string;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: View Notes */
	export type Index = ExtensionPreferences & {
		
	}

	/** Command: Create Note */
	export type Create = ExtensionPreferences & {
		
	}

	/** Command: Create Tag */
	export type Tag = ExtensionPreferences & {
		
	}

	/** Command: Search Notes */
	export type Search = ExtensionPreferences & {
		
	}

	/** Command: Export Notes */
	export type Export = ExtensionPreferences & {
		
	}

	/** Command: Sync with Folder */
	export type Sync = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: View Notes */
	export type Index = {
		
	}

	/** Command: Create Note */
	export type Create = {
		/** Title */
		"title": string

		/** Note */
		"note": string
	}

	/** Command: Create Tag */
	export type Tag = {
		/** Tag */
		"tag": string
	}

	/** Command: Search Notes */
	export type Search = {
		/** Search */
		"text": string

		/** Tag */
		"tag": string
	}

	/** Command: Export Notes */
	export type Export = {
		
	}

	/** Command: Sync with Folder */
	export type Sync = {
		
	}
}
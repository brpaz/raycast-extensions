/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Search Documentation */
	export type Index = ExtensionPreferences & {
		/** Language - Select the language of the kubernetes documentation */
		"language"?: "en" | "de" | "id" | "ja" | "zh" | "ko" | "fr" | "it" | "es" | "pt" | "ru" | "pl" | "uk";
	}
}

declare namespace Arguments {
  /** Command: Search Documentation */
	export type Index = {
		
	}
}
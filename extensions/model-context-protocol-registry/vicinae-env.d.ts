/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Search Servers */
	export type SearchServers = ExtensionPreferences & {
		/** Smithery API Key - The API key for the Smithery registry (see: https://smithery.ai/account/api-keys) */
		"smitheryApiKey": string;
	}
}

declare namespace Arguments {
  /** Command: Search Servers */
	export type SearchServers = {
		
	}
}
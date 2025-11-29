/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Tailscale CLI Path - Location to the Tailscale CLI (Defaults to `/Applications/Tailscale.app/Contents/MacOS/Tailscale`) */
	"tailscalePath": string;

	/** Buffer size for parsing CLI output (in megabytes) - Max buffer size (in megabytes, defaults to 10) */
	"tailscaleExecMaxBuffersMB": string;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: All Devices */
	export type Devices = ExtensionPreferences & {
		
	}

	/** Command: My Devices */
	export type MyDevices = ExtensionPreferences & {
		
	}

	/** Command: Switch Account */
	export type AccountSwitcher = ExtensionPreferences & {
		
	}

	/** Command: Exit Node */
	export type Exit = ExtensionPreferences & {
		
	}

	/** Command: Admin Console */
	export type Admin = ExtensionPreferences & {
		/** Admin Console URL - URL to the Tailscale Admin Console. Intended to be used with self-hosted Tailscale installations. */
		"adminConsoleURL": string;
	}

	/** Command: Status */
	export type Status = ExtensionPreferences & {
		
	}

	/** Command: Connect */
	export type Connect = ExtensionPreferences & {
		
	}

	/** Command: Disconnect */
	export type Disconnect = ExtensionPreferences & {
		
	}

	/** Command: Toggle Connection */
	export type Toggle = ExtensionPreferences & {
		
	}

	/** Command: Netcheck */
	export type Netcheck = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: All Devices */
	export type Devices = {
		
	}

	/** Command: My Devices */
	export type MyDevices = {
		
	}

	/** Command: Switch Account */
	export type AccountSwitcher = {
		
	}

	/** Command: Exit Node */
	export type Exit = {
		
	}

	/** Command: Admin Console */
	export type Admin = {
		
	}

	/** Command: Status */
	export type Status = {
		
	}

	/** Command: Connect */
	export type Connect = {
		
	}

	/** Command: Disconnect */
	export type Disconnect = {
		
	}

	/** Command: Toggle Connection */
	export type Toggle = {
		
	}

	/** Command: Netcheck */
	export type Netcheck = {
		
	}
}
/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Completed tasks in Menu Bar - Show only 3 latest completed tasks, or show/hide all. */
	"completed": "latest" | "show_all" | "hide_all";

	/** Task sorting - The order in which task are sorted. */
	"sortOrder": "creation_date_ascending" | "creation_date_descending" | "title_ascending" | "title_descending";

	/** Natural language parsing - Automatically parse dates and tags */
	"nlpParsing": boolean;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Manage Todo List */
	export type Index = ExtensionPreferences & {
		
	}

	/** Command: Todo List */
	export type MenuBar = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Manage Todo List */
	export type Index = {
		
	}

	/** Command: Todo List */
	export type MenuBar = {
		
	}
}
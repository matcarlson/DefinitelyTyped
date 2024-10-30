// Type definitions for chrome.userScripts API

/**
 * Availability: Chrome 120 beta. Manifest v3.
 * https://developer.chrome.com/docs/extensions/reference/api/userScripts
 * Permissions: "userScripts"
 * Description: "A user script is a bit of code injected into a web page to modify its appearance or behavior. Scripts are either created by users or downloaded from a script repository or a user script extension.""
 */

declare namespace chrome.userScripts {
    /**
     * Execution environment for a user script.
     */
    export type ExecutionWorld = "MAIN" | "USER_SCRIPT";

    /**
     * Properties for configuring the user script world.
     */
    export interface WorldProperties {
        /** Specifies the world csp. The default is the `ISOLATED` world csp. */
        csp?: string;
        /** Specifies whether messaging APIs are exposed. The default is false.*/
        messaging?: boolean;
    }

    /**
     * Properties for filtering user scripts.
     */
    export interface UserScriptFilter {
        ids?: string[];
    }

    /**
     * Properties for a registered user script.
     */
    export interface RegisteredUserScript {
        /** If true, it will inject into all frames, even if the frame is not the top-most frame in the tab. Each frame is checked independently for URL requirements; it will not inject into child frames if the URL requirements are not met. Defaults to false, meaning that only the top frame is matched. */
        allFrames?: boolean;
        /** Specifies wildcard patterns for pages this user script will NOT be injected into. */
        excludeGlobs?: string[];
        /**Excludes pages that this user script would otherwise be injected into. See Match Patterns for more details on the syntax of these strings. */
        excludeMatches?: string[];
        /** The ID of the user script specified in the API call. This property must not start with a '_' as it's reserved as a prefix for generated script IDs. */
        id: string;
        /** Specifies wildcard patterns for pages this user script will be injected into. */
        includeGlobs?: string[];
        /** The list of ScriptSource objects defining sources of scripts to be injected into matching pages. */
        js: ScriptSource[];
        /** Specifies which pages this user script will be injected into. See Match Patterns for more details on the syntax of these strings. This property must be specified for ${ref:register}. */
        matches?: string[];
        /** Specifies when JavaScript files are injected into the web page. The preferred and default value is document_idle */
        runAt?: RunAt;
        /** The JavaScript execution environment to run the script in. The default is `USER_SCRIPT` */
        world?: ExecutionWorld;
    }

    /**
     * Properties for a script source.
     */
    export interface ScriptSource {
        /** A string containing the JavaScript code to inject. Exactly one of file or code must be specified. */
        code?: string;
        /** The path of the JavaScript file to inject relative to the extension's root directory. Exactly one of file or code must be specified. */
        file?: string;
    }

    /**
     * Enum for the run-at property.
     */
    export type RunAt = "document_start" | "document_end" | "document_idle";

    /**
     * Configures the `USER_SCRIPT` execution environment.
     *
     * @param properties - Contains the user script world configuration.
     * @returns A Promise that resolves with the same type that is passed to the callback.
     */
    export function configureWorld(properties: WorldProperties): Promise<void>;
    /**
     * Configures the `USER_SCRIPT` execution environment.
     *
     * @param properties - Contains the user script world configuration.
     * @param callback - Callback function to be executed after configuring the world.
     */
    export function configureWorld(properties: WorldProperties, callback: () => void): void;

    /**
     * Returns all dynamically-registered user scripts for this extension.
     *
     * @param filter - If specified, this method returns only the user scripts that match it.
     * @returns A Promise that resolves with the same type that is passed to the callback.
     */
    export function getScripts(filter?: UserScriptFilter): Promise<RegisteredUserScript[]>;
    /**
     * Returns all dynamically-registered user scripts for this extension.
     *
     * @param filter - If specified, this method returns only the user scripts that match it.
     * @param callback - Callback function to be executed after getting user scripts.
     */
    export function getScripts(filter: UserScriptFilter, callback: (scripts: RegisteredUserScript[]) => void): void;

    /**
     * Registers one or more user scripts for this extension.
     *
     * @param scripts - Contains a list of user scripts to be registered.
     * @returns A Promise that resolves with the same type that is passed to the callback.
     */
    export function register(scripts: RegisteredUserScript[]): Promise<void>;
    /**
     * Registers one or more user scripts for this extension.
     *
     * @param scripts - Contains a list of user scripts to be registered.
     * @param callback - Callback function to be executed after registering user scripts.
     */
    export function register(scripts: RegisteredUserScript[], callback: () => void): void;

    /**
     * Unregisters all dynamically-registered user scripts for this extension.
     *
     * @param filter - If specified, this method unregisters only the user scripts that match it.
     * @returns A Promise that resolves with the same type that is passed to the callback.
     */
    export function unregister(filter?: UserScriptFilter): Promise<void>;
    /**
     * Unregisters all dynamically-registered user scripts for this extension.
     *
     * @param filter - If specified, this method unregisters only the user scripts that match it.
     * @param callback - Callback function to be executed after unregistering user scripts.
     */
    export function unregister(filter: UserScriptFilter, callback: () => void): void;

    /**
     * Updates one or more user scripts for this extension.
     *
     * @param scripts - Contains a list of user scripts to be updated. A property is only updated for the existing script
     *                  if it is specified in this object. If there are errors during script parsing/file validation, or if
     *                  the IDs specified do not correspond to a fully registered script, then no scripts are updated.
     * @returns A Promise that resolves with the same type that is passed to the callback.
     */
    export function update(scripts: RegisteredUserScript[]): Promise<void>;
    /**
     * Updates one or more user scripts for this extension.
     *
     * @param scripts - Contains a list of user scripts to be updated. A property is only updated for the existing script
     *                  if it is specified in this object. If there are errors during script parsing/file validation, or if
     *                  the IDs specified do not correspond to a fully registered script, then no scripts are updated.
     * @param callback - Callback function to be executed after updating user scripts.
     */
    export function update(scripts: RegisteredUserScript[], callback: () => void): void;
}
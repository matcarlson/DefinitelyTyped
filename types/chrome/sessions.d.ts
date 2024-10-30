////////////////////
// Sessions
////////////////////
/**
 * Use the chrome.sessions API to query and restore tabs and windows from a browsing session.
 * Permissions:  "sessions"
 * @since Chrome 37
 */
declare namespace chrome.sessions {
    export interface Filter {
        /**
         * Optional.
         * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum number of entries (sessions.MAX_SESSION_RESULTS).
         */
        maxResults?: number | undefined;
    }

    export interface Session {
        /** The time when the window or tab was closed or modified, represented in milliseconds since the epoch. */
        lastModified: number;
        /**
         * Optional.
         * The tabs.Tab, if this entry describes a tab. Either this or sessions.Session.window will be set.
         */
        tab?: tabs.Tab | undefined;
        /**
         * Optional.
         * The windows.Window, if this entry describes a window. Either this or sessions.Session.tab will be set.
         */
        window?: windows.Window | undefined;
    }

    export interface Device {
        /** The name of the foreign device. */
        deviceName: string;
        /** A list of open window sessions for the foreign device, sorted from most recently to least recently modified session. */
        sessions: Session[];
    }

    export interface SessionChangedEvent extends chrome.events.Event<() => void> {}

    /** The maximum number of sessions.Session that will be included in a requested list. */
    export var MAX_SESSION_RESULTS: number;

    /**
     * Gets the list of recently closed tabs and/or windows.
     * @return The `getRecentlyClosed` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getRecentlyClosed(filter?: Filter): Promise<Session[]>;
    /**
     * Gets the list of recently closed tabs and/or windows.
     * @param callback
     * Parameter sessions: The list of closed entries in reverse order that they were closed (the most recently closed tab or window will be at index 0). The entries may contain either tabs or windows.
     */
    export function getRecentlyClosed(filter: Filter, callback: (sessions: Session[]) => void): void;
    /**
     * Gets the list of recently closed tabs and/or windows.
     * @param callback
     * Parameter sessions: The list of closed entries in reverse order that they were closed (the most recently closed tab or window will be at index 0). The entries may contain either tabs or windows.
     */
    export function getRecentlyClosed(callback: (sessions: Session[]) => void): void;
    /**
     * Retrieves all devices with synced sessions.
     * @return The `getDevices` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDevices(filter?: Filter): Promise<Device[]>;
    /**
     * Retrieves all devices with synced sessions.
     * @param callback
     * Parameter devices: The list of sessions.Device objects for each synced session, sorted in order from device with most recently modified session to device with least recently modified session. tabs.Tab objects are sorted by recency in the windows.Window of the sessions.Session objects.
     */
    export function getDevices(filter: Filter, callback: (devices: Device[]) => void): void;
    /**
     * Retrieves all devices with synced sessions.
     * @param callback
     * Parameter devices: The list of sessions.Device objects for each synced session, sorted in order from device with most recently modified session to device with least recently modified session. tabs.Tab objects are sorted by recency in the windows.Window of the sessions.Session objects.
     */
    export function getDevices(callback: (devices: Device[]) => void): void;
    /**
     * Reopens a windows.Window or tabs.Tab.
     * @param sessionId Optional.
     * The windows.Window.sessionId, or tabs.Tab.sessionId to restore. If this parameter is not specified, the most recently closed session is restored.
     * @return The `restore` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function restore(sessionId?: string): Promise<Session>;
    /**
     * Reopens a windows.Window or tabs.Tab, with an optional callback to run when the entry has been restored.
     * @param sessionId Optional.
     * The windows.Window.sessionId, or tabs.Tab.sessionId to restore. If this parameter is not specified, the most recently closed session is restored.
     * @param callback Optional.
     * Parameter restoredSession: A sessions.Session containing the restored windows.Window or tabs.Tab object.
     */
    export function restore(sessionId: string, callback: (restoredSession: Session) => void): void;
    /**
     * Reopens a windows.Window or tabs.Tab, with an optional callback to run when the entry has been restored.
     * @param callback Optional.
     * Parameter restoredSession: A sessions.Session containing the restored windows.Window or tabs.Tab object.
     */
    export function restore(callback: (restoredSession: Session) => void): void;

    /** Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes. */
    export var onChanged: SessionChangedEvent;
}
////////////////////
// Tabs
////////////////////
/**
 * Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.
 * Permissions: The majority of the chrome.tabs API can be used without declaring any permission. However, the "tabs" permission is required in order to populate the url, title, and favIconUrl properties of Tab.
 * @since Chrome 5
 */
declare namespace chrome.tabs {
    /**
     * Tab muted state and the reason for the last state change.
     * @since Chrome 46
     */
    export interface MutedInfo {
        /** Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent to whether the muted audio indicator is showing. */
        muted: boolean;
        /**
         * Optional.
         * The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed.
         * "user": A user input action has set/overridden the muted state.
         * "capture": Tab capture started, forcing a muted state change.
         * "extension": An extension, identified by the extensionId field, set the muted state.
         */
        reason?: string | undefined;
        /**
         * Optional.
         * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed.
         */
        extensionId?: string | undefined;
    }

    export interface Tab {
        /**
         * Optional.
         * Either loading or complete.
         */
        status?: string | undefined;
        /** The zero-based index of the tab within its window. */
        index: number;
        /**
         * Optional.
         * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
         * @since Chrome 18
         */
        openerTabId?: number | undefined;
        /**
         * Optional.
         * The title of the tab. This property is only present if the extension's manifest includes the "tabs" permission.
         */
        title?: string | undefined;
        /**
         * Optional.
         * The URL the tab is displaying. This property is only present if the extension's manifest includes the "tabs" permission.
         */
        url?: string | undefined;
        /**
         * The URL the tab is navigating to, before it has committed.
         * This property is only present if the extension's manifest includes the "tabs" permission and there is a pending navigation.
         * @since Chrome 79
         */
        pendingUrl?: string | undefined;
        /**
         * Whether the tab is pinned.
         * @since Chrome 9
         */
        pinned: boolean;
        /**
         * Whether the tab is highlighted.
         * @since Chrome 16
         */
        highlighted: boolean;
        /** The ID of the window the tab is contained within. */
        windowId: number;
        /**
         * Whether the tab is active in its window. (Does not necessarily mean the window is focused.)
         * @since Chrome 16
         */
        active: boolean;
        /**
         * Optional.
         * The URL of the tab's favicon. This property is only present if the extension's manifest includes the "tabs" permission. It may also be an empty string if the tab is loading.
         */
        favIconUrl?: string | undefined;
        /**
         * Optional.
         * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the sessions API, in which case a session ID may be present. Tab ID can also be set to chrome.tabs.TAB_ID_NONE for apps and devtools windows.
         */
        id?: number | undefined;
        /** Whether the tab is in an incognito window. */
        incognito: boolean;
        /**
         * Whether the tab is selected.
         * @deprecated since Chrome 33. Please use tabs.Tab.highlighted.
         */
        selected: boolean;
        /**
         * Optional.
         * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the speaker audio indicator is showing.
         * @since Chrome 45
         */
        audible?: boolean | undefined;
        /**
         * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
         * @since Chrome 54
         */
        discarded: boolean;
        /**
         * Whether the tab can be discarded automatically by the browser when resources are low.
         * @since Chrome 54
         */
        autoDiscardable: boolean;
        /**
         * Optional.
         * Current tab muted state and the reason for the last state change.
         * @since Chrome 46
         */
        mutedInfo?: MutedInfo | undefined;
        /**
         * Optional. The width of the tab in pixels.
         * @since Chrome 31
         */
        width?: number | undefined;
        /**
         * Optional. The height of the tab in pixels.
         * @since Chrome 31
         */
        height?: number | undefined;
        /**
         * Optional. The session ID used to uniquely identify a Tab obtained from the sessions API.
         * @since Chrome 31
         */
        sessionId?: string | undefined;
        /**
         * The ID of the group that the tab belongs to.
         * @since Chrome 88
         */
        groupId: number;
        /**
         * The last time the tab was accessed as the number of milliseconds since epoch.
         * @since Chrome 121
         */
        lastAccessed?: number | undefined;
    }

    /**
     * Defines how zoom changes in a tab are handled and at what scope.
     * @since Chrome 38
     */
    export interface ZoomSettings {
        /**
         * Optional.
         * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to "automatic".
         * "automatic": Zoom changes are handled automatically by the browser.
         * "manual": Overrides the automatic handling of zoom changes. The onZoomChange event will still be dispatched, and it is the responsibility of the extension to listen for this event and manually scale the page. This mode does not support per-origin zooming, and will thus ignore the scope zoom setting and assume per-tab.
         * "disabled": Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored.
         */
        mode?: string | undefined;
        /**
         * Optional.
         * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to per-origin when in automatic mode, and per-tab otherwise.
         * "per-origin": Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin will be zoomed as well. Moreover, per-origin zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The per-origin scope is only available in the automatic mode.
         * "per-tab": Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also, per-tab zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.
         */
        scope?: string | undefined;
        /**
         * Optional.
         * Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings.
         * @since Chrome 43
         */
        defaultZoomFactor?: number | undefined;
    }

    export interface InjectDetails {
        /**
         * Optional.
         * If allFrames is true, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's false and is only injected into the top frame.
         */
        allFrames?: boolean | undefined;
        /**
         * Optional. JavaScript or CSS code to inject.
         * Warning: Be careful using the code parameter. Incorrect use of it may open your extension to cross site scripting attacks.
         */
        code?: string | undefined;
        /**
         * Optional. The soonest that the JavaScript or CSS will be injected into the tab.
         * One of: "document_start", "document_end", or "document_idle"
         * @since Chrome 20
         */
        runAt?: string | undefined;
        /** Optional. JavaScript or CSS file to inject. */
        file?: string | undefined;
        /**
         * Optional.
         * The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
         * @since Chrome 39
         */
        frameId?: number | undefined;
        /**
         * Optional.
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is false.
         * @since Chrome 39
         */
        matchAboutBlank?: boolean | undefined;
        /**
         * Optional. The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to "author".
         * One of: "author", or "user"
         * @since Chrome 66
         */
        cssOrigin?: string | undefined;
    }

    export interface CreateProperties {
        /** Optional. The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window. */
        index?: number | undefined;
        /**
         * Optional.
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
         * @since Chrome 18
         */
        openerTabId?: number | undefined;
        /**
         * Optional.
         * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string | undefined;
        /**
         * Optional. Whether the tab should be pinned. Defaults to false
         * @since Chrome 9
         */
        pinned?: boolean | undefined;
        /** Optional. The window to create the new tab in. Defaults to the current window. */
        windowId?: number | undefined;
        /**
         * Optional.
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see windows.update). Defaults to true.
         * @since Chrome 16
         */
        active?: boolean | undefined;
        /**
         * Optional. Whether the tab should become the selected tab in the window. Defaults to true
         * @deprecated since Chrome 33. Please use active.
         */
        selected?: boolean | undefined;
    }

    export interface MoveProperties {
        /** The position to move the window to. -1 will place the tab at the end of the window. */
        index: number;
        /** Optional. Defaults to the window the tab is currently in. */
        windowId?: number | undefined;
    }

    export interface UpdateProperties {
        /**
         * Optional. Whether the tab should be pinned.
         * @since Chrome 9
         */
        pinned?: boolean | undefined;
        /**
         * Optional. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         * @since Chrome 18
         */
        openerTabId?: number | undefined;
        /** Optional. A URL to navigate the tab to. */
        url?: string | undefined;
        /**
         * Optional. Adds or removes the tab from the current selection.
         * @since Chrome 16
         */
        highlighted?: boolean | undefined;
        /**
         * Optional. Whether the tab should be active. Does not affect whether the window is focused (see windows.update).
         * @since Chrome 16
         */
        active?: boolean | undefined;
        /**
         * Optional. Whether the tab should be selected.
         * @deprecated since Chrome 33. Please use highlighted.
         */
        selected?: boolean | undefined;
        /**
         * Optional. Whether the tab should be muted.
         * @since Chrome 45
         */
        muted?: boolean | undefined;
        /**
         * Optional. Whether the tab should be discarded automatically by the browser when resources are low.
         * @since Chrome 54
         */
        autoDiscardable?: boolean | undefined;
    }

    export interface CaptureVisibleTabOptions {
        /**
         * Optional.
         * When format is "jpeg", controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
         */
        quality?: number | undefined;
        /**
         * Optional. The format of an image.
         * One of: "jpeg", or "png"
         */
        format?: string | undefined;
    }

    export interface ReloadProperties {
        /** Optional. Whether using any local cache. Default is false. */
        bypassCache?: boolean | undefined;
    }

    export interface ConnectInfo {
        /** Optional. Will be passed into onConnect for content scripts that are listening for the connection event. */
        name?: string | undefined;
        /**
         * Open a port to a specific frame identified by frameId instead of all frames in the tab.
         * @since Chrome 41
         */
        frameId?: number | undefined;
        /**
         * Optional. Open a port to a specific document identified by documentId instead of all frames in the tab.
         * @since Chrome 106
         */
        documentId?: string;
    }

    export interface MessageSendOptions {
        /** Optional. Send a message to a specific frame identified by frameId instead of all frames in the tab. */
        frameId?: number | undefined;
        /**
         * Optional. Send a message to a specific document identified by documentId instead of all frames in the tab.
         * @since Chrome 106
         */
        documentId?: string;
    }

    export interface GroupOptions {
        /** Optional. Configurations for creating a group. Cannot be used if groupId is already specified. */
        createProperties?: {
            /** Optional. The window of the new group. Defaults to the current window. */
            windowId?: number | undefined;
        } | undefined;
        /** Optional. The ID of the group to add the tabs to. If not specified, a new group will be created. */
        groupId?: number | undefined;
        /** TOptional. he tab ID or list of tab IDs to add to the specified group. */
        tabIds?: number | number[] | undefined;
    }

    export interface HighlightInfo {
        /** One or more tab indices to highlight. */
        tabs: number | number[];
        /** Optional. The window that contains the tabs. */
        windowId?: number | undefined;
    }

    export interface QueryInfo {
        /**
         * Optional. Whether the tabs have completed loading.
         * One of: "loading", or "complete"
         */
        status?: "loading" | "complete" | undefined;
        /**
         * Optional. Whether the tabs are in the last focused window.
         * @since Chrome 19
         */
        lastFocusedWindow?: boolean | undefined;
        /** Optional. The ID of the parent window, or windows.WINDOW_ID_CURRENT for the current window. */
        windowId?: number | undefined;
        /**
         * Optional. The type of window the tabs are in.
         * One of: "normal", "popup", "panel", "app", or "devtools"
         */
        windowType?: "normal" | "popup" | "panel" | "app" | "devtools" | undefined;
        /** Optional. Whether the tabs are active in their windows. */
        active?: boolean | undefined;
        /**
         * Optional. The position of the tabs within their windows.
         * @since Chrome 18
         */
        index?: number | undefined;
        /** Optional. Match page titles against a pattern. */
        title?: string | undefined;
        /** Optional. Match tabs against one or more URL patterns. Note that fragment identifiers are not matched. */
        url?: string | string[] | undefined;
        /**
         * Optional. Whether the tabs are in the current window.
         * @since Chrome 19
         */
        currentWindow?: boolean | undefined;
        /** Optional. Whether the tabs are highlighted. */
        highlighted?: boolean | undefined;
        /**
         * Optional.
         * Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
         * @since Chrome 54
         */
        discarded?: boolean | undefined;
        /**
         * Optional.
         * Whether the tabs can be discarded automatically by the browser when resources are low.
         * @since Chrome 54
         */
        autoDiscardable?: boolean | undefined;
        /** Optional. Whether the tabs are pinned. */
        pinned?: boolean | undefined;
        /**
         * Optional. Whether the tabs are audible.
         * @since Chrome 45
         */
        audible?: boolean | undefined;
        /**
         * Optional. Whether the tabs are muted.
         * @since Chrome 45
         */
        muted?: boolean | undefined;
        /**
         * Optional. The ID of the group that the tabs are in, or chrome.tabGroups.TAB_GROUP_ID_NONE for ungrouped tabs.
         * @since Chrome 88
         */
        groupId?: number | undefined;
    }

    export interface TabHighlightInfo {
        windowId: number;
        tabIds: number[];
    }

    export interface TabRemoveInfo {
        /**
         * The window whose tab is closed.
         * @since Chrome 25
         */
        windowId: number;
        /** True when the tab is being closed because its window is being closed. */
        isWindowClosing: boolean;
    }

    export interface TabAttachInfo {
        newPosition: number;
        newWindowId: number;
    }

    export interface TabChangeInfo {
        /** Optional. The status of the tab. Can be either loading or complete. */
        status?: string | undefined;
        /**
         * The tab's new pinned state.
         * @since Chrome 9
         */
        pinned?: boolean | undefined;
        /** Optional. The tab's URL if it has changed. */
        url?: string | undefined;
        /**
         * The tab's new audible state.
         * @since Chrome 45
         */
        audible?: boolean | undefined;
        /**
         * The tab's new discarded state.
         * @since Chrome 54
         */
        discarded?: boolean | undefined;
        /**
         * The tab's new auto-discardable
         * @since Chrome 54
         */
        autoDiscardable?: boolean | undefined;
        /**
         * The tab's new group.
         * @since Chrome 88
         */
        groupId?: number | undefined;
        /**
         * The tab's new muted state and the reason for the change.
         * @since Chrome 46
         */
        mutedInfo?: MutedInfo | undefined;
        /**
         * The tab's new favicon URL.
         * @since Chrome 27
         */
        favIconUrl?: string | undefined;
        /**
         * The tab's new title.
         * @since Chrome 48
         */
        title?: string | undefined;
    }

    export interface TabMoveInfo {
        toIndex: number;
        windowId: number;
        fromIndex: number;
    }

    export interface TabDetachInfo {
        oldWindowId: number;
        oldPosition: number;
    }

    export interface TabActiveInfo {
        /** The ID of the tab that has become active. */
        tabId: number;
        /** The ID of the window the active tab changed inside of. */
        windowId: number;
    }

    export interface TabWindowInfo {
        /** The ID of the window of where the tab is located. */
        windowId: number;
    }

    export interface ZoomChangeInfo {
        tabId: number;
        oldZoomFactor: number;
        newZoomFactor: number;
        zoomSettings: ZoomSettings;
    }

    export interface TabHighlightedEvent extends chrome.events.Event<(highlightInfo: TabHighlightInfo) => void> {}

    export interface TabRemovedEvent extends chrome.events.Event<(tabId: number, removeInfo: TabRemoveInfo) => void> {}

    export interface TabUpdatedEvent
        extends chrome.events.Event<(tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void>
    {}

    export interface TabAttachedEvent extends chrome.events.Event<(tabId: number, attachInfo: TabAttachInfo) => void> {}

    export interface TabMovedEvent extends chrome.events.Event<(tabId: number, moveInfo: TabMoveInfo) => void> {}

    export interface TabDetachedEvent extends chrome.events.Event<(tabId: number, detachInfo: TabDetachInfo) => void> {}

    export interface TabCreatedEvent extends chrome.events.Event<(tab: Tab) => void> {}

    export interface TabActivatedEvent extends chrome.events.Event<(activeInfo: TabActiveInfo) => void> {}

    export interface TabReplacedEvent extends chrome.events.Event<(addedTabId: number, removedTabId: number) => void> {}

    export interface TabSelectedEvent extends chrome.events.Event<(tabId: number, selectInfo: TabWindowInfo) => void> {}

    export interface TabZoomChangeEvent extends chrome.events.Event<(ZoomChangeInfo: ZoomChangeInfo) => void> {}

    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `executeScript` method provides its result via callback or returned as a `Promise` (MV3 only). The result of the script in every injected frame.
     */
    export function executeScript(details: InjectDetails): Promise<any[]>;
    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called after all the JavaScript has been executed.
     * Parameter result: The result of the script in every injected frame.
     */
    export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to run the script; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `executeScript` method provides its result via callback or returned as a `Promise` (MV3 only). The result of the script in every injected frame.
     */
    export function executeScript(tabId: number, details: InjectDetails): Promise<any[]>;
    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to run the script; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called after all the JavaScript has been executed.
     * Parameter result: The result of the script in every injected frame.
     */
    export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
    /** Retrieves details about the specified tab. */
    export function get(tabId: number, callback: (tab: Tab) => void): void;
    /**
     * Retrieves details about the specified tab.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(tabId: number): Promise<Tab>;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     */
    export function getAllInWindow(callback: (tab: Tab) => void): void;
    /**
     * Gets details about all tabs in the specified window.
     * @return The `getAllInWindow` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     */
    export function getAllInWindow(): Promise<Tab>;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     * @param windowId Optional. Defaults to the current window.
     */
    export function getAllInWindow(windowId: number, callback: (tab: Tab) => void): void;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     * @param windowId Optional. Defaults to the current window.
     * @return The `getAllInWindow` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAllInWindow(windowId: number): Promise<Tab>;
    /** Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view). */
    export function getCurrent(callback: (tab?: Tab) => void): void;
    /**
     * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).
     * @return The `getCurrent` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getCurrent(): Promise<Tab | undefined>;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     */
    export function getSelected(callback: (tab: Tab) => void): void;
    /**
     * Gets the tab that is selected in the specified window.
     * @return The `getSelected` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     */
    export function getSelected(): Promise<Tab>;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     * @param windowId Optional. Defaults to the current window.
     */
    export function getSelected(windowId: number, callback: (tab: Tab) => void): void;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     * @param windowId Optional. Defaults to the current window.
     * @return The `getSelected` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSelected(windowId: number): Promise<Tab>;
    /**
     * Creates a new tab.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the created tab. Will contain the ID of the new tab.
     */
    export function create(createProperties: CreateProperties): Promise<Tab>;
    /**
     * Creates a new tab.
     * @param callback Optional.
     * Parameter tab: Details about the created tab. Will contain the ID of the new tab.
     */
    export function create(createProperties: CreateProperties, callback: (tab: Tab) => void): void;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabId The tab to move.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the moved tab.
     */
    export function move(tabId: number, moveProperties: MoveProperties): Promise<Tab>;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabId The tab to move.
     * @param callback Optional.
     * Parameter tab: Details about the moved tab.
     */
    export function move(tabId: number, moveProperties: MoveProperties, callback: (tab: Tab) => void): void;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabIds The tabs to move.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the moved tabs.
     */
    export function move(tabIds: number[], moveProperties: MoveProperties): Promise<Tab[]>;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabIds The tabs to move.
     * @param callback Optional.
     * Parameter tabs: Details about the moved tabs.
     */
    export function move(tabIds: number[], moveProperties: MoveProperties, callback: (tabs: Tab[]) => void): void;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(updateProperties: UpdateProperties): Promise<Tab>;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param callback Optional.
     * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(updateProperties: UpdateProperties, callback: (tab?: Tab) => void): void;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(tabId: number, updateProperties: UpdateProperties): Promise<Tab>;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     * @param callback Optional.
     * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(tabId: number, updateProperties: UpdateProperties, callback: (tab?: Tab) => void): void;
    /**
     * Closes a tab.
     * @param tabId The tab to close.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(tabId: number): Promise<void>;
    /**
     * Closes a tab.
     * @param tabId The tab to close.
     */
    export function remove(tabId: number, callback: Function): void;
    /**
     * Closes several tabs.
     * @param tabIds The list of tabs to close.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(tabIds: number[]): Promise<void>;
    /**
     * Closes several tabs.
     * @param tabIds The list of tabs to close.
     */
    export function remove(tabIds: number[], callback: Function): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(windowId: number): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param options Optional. Details about the format and quality of an image.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(options: CaptureVisibleTabOptions): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param options Optional. Details about the format and quality of an image.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param options Optional. Details about the format and quality of an image.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(
        windowId: number,
        options: CaptureVisibleTabOptions,
    ): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param options Optional. Details about the format and quality of an image.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(
        windowId: number,
        options: CaptureVisibleTabOptions,
        callback: (dataUrl: string) => void,
    ): void;
    /**
     * Reload a tab.
     * @since Chrome 16
     * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
     * @return The `reload` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function reload(tabId: number, reloadProperties?: ReloadProperties): Promise<void>;
    /**
     * Reload a tab.
     * @since Chrome 16
     * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
     */
    export function reload(tabId: number, reloadProperties?: ReloadProperties, callback?: () => void): void;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16
     * @return The `reload` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function reload(reloadProperties: ReloadProperties): Promise<void>;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16
     */
    export function reload(reloadProperties: ReloadProperties, callback: () => void): void;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16
     * @return The `reload` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function reload(): Promise<void>;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16
     */
    export function reload(callback: () => void): void;
    /**
     * Duplicates a tab.
     * @since Chrome 23
     * @param tabId The ID of the tab which is to be duplicated.
     * @return The `duplicate` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function duplicate(tabId: number): Promise<Tab | undefined>;
    /**
     * Duplicates a tab.
     * @since Chrome 23
     * @param tabId The ID of the tab which is to be duplicated.
     * @param callback Optional.
     * Optional parameter tab: Details about the duplicated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function duplicate(tabId: number, callback: (tab?: Tab) => void): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 20
     */
    export function sendMessage<M = any, R = any>(
        tabId: number,
        message: M,
        responseCallback: (response: R) => void,
    ): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 41
     * @param responseCallback Optional.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage<M = any, R = any>(
        tabId: number,
        message: M,
        options: MessageSendOptions,
        responseCallback: (response: R) => void,
    ): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 99
     */
    export function sendMessage<M = any, R = any>(tabId: number, message: M): Promise<R>;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 99
     */
    export function sendMessage<M = any, R = any>(
        tabId: number,
        message: M,
        options: MessageSendOptions,
    ): Promise<R>;
    /**
     * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The extension.onRequest event is fired in each content script running in the specified tab for the current extension.
     * @deprecated since Chrome 33. Please use runtime.sendMessage.
     * @param responseCallback Optional.
     * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendRequest<Request = any, Response = any>(
        tabId: number,
        request: Request,
        responseCallback?: (response: Response) => void,
    ): void;
    /** Connects to the content script(s) in the specified tab. The runtime.onConnect event is fired in each content script running in the specified tab for the current extension. */
    export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `insertCSS` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function insertCSS(details: InjectDetails): Promise<void>;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(details: InjectDetails, callback: Function): void;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `insertCSS` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function insertCSS(tabId: number, details: InjectDetails): Promise<void>;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(tabId: number, details: InjectDetails, callback: Function): void;
    /**
     * Highlights the given tabs.
     * @since Chrome 16
     * @return The `highlight` method provides its result via callback or returned as a `Promise` (MV3 only). Contains details about the window whose tabs were highlighted.
     */
    export function highlight(highlightInfo: HighlightInfo): Promise<chrome.windows.Window>;
    /**
     * Highlights the given tabs.
     * @since Chrome 16
     * @param callback Optional.
     * Parameter window: Contains details about the window whose tabs were highlighted.
     */
    export function highlight(highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     * @since Chrome 16
     */
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    /**
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     * @since Chrome 16
     * @return The `query` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function query(queryInfo: QueryInfo): Promise<Tab[]>;
    /**
     * Detects the primary language of the content in a tab.
     * @param callback
     * Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(callback: (language: string) => void): void;
    /**
     * Detects the primary language of the content in a tab.
     * @return The `detectLanguage` method provides its result via callback or returned as a `Promise` (MV3 only). An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(): Promise<string>;
    /**
     * Detects the primary language of the content in a tab.
     * @param tabId Optional. Defaults to the active tab of the current window.
     * @param callback
     * Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;
    /**
     * Detects the primary language of the content in a tab.
     * @param tabId Optional. Defaults to the active tab of the current window.
     * @return The `detectLanguage` method provides its result via callback or returned as a `Promise` (MV3 only). An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(tabId: number): Promise<string>;
    /**
     * Zooms a specified tab.
     * @since Chrome 42
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @return The `setZoom` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoom(zoomFactor: number): Promise<void>;
    /**
     * Zooms a specified tab.
     * @since Chrome 42
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @param callback Optional. Called after the zoom factor has been changed.
     */
    export function setZoom(zoomFactor: number, callback: () => void): void;
    /**
     * Zooms a specified tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @return The `setZoom` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoom(tabId: number, zoomFactor: number): Promise<void>;
    /**
     * Zooms a specified tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @param callback Optional. Called after the zoom factor has been changed.
     */
    export function setZoom(tabId: number, zoomFactor: number, callback: () => void): void;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42
     * @param callback Called with the tab's current zoom factor after it has been fetched.
     * Parameter zoomFactor: The tab's current zoom factor.
     */
    export function getZoom(callback: (zoomFactor: number) => void): void;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42
     * @return The `getZoom` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom factor.
     */
    export function getZoom(): Promise<number>;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
     * @param callback Called with the tab's current zoom factor after it has been fetched.
     * Parameter zoomFactor: The tab's current zoom factor.
     */
    export function getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
     * @return The `getZoom` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom factor.
     */
    export function getZoom(tabId: number): Promise<number>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @return The `setZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @param callback Optional. Called after the zoom settings have been changed.
     */
    export function setZoomSettings(zoomSettings: ZoomSettings, callback: () => void): void;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @return The `setZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings): Promise<void>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @param callback Optional. Called after the zoom settings have been changed.
     */
    export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings, callback: () => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42
     * @param callback Called with the tab's current zoom settings.
     * Parameter zoomSettings: The tab's current zoom settings.
     */
    export function getZoomSettings(callback: (zoomSettings: ZoomSettings) => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42
     * @return The `getZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom settings.
     */
    export function getZoomSettings(): Promise<ZoomSettings>;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
     * @param callback Called with the tab's current zoom settings.
     * Parameter zoomSettings: The tab's current zoom settings.
     */
    export function getZoomSettings(tabId: number, callback: (zoomSettings: ZoomSettings) => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42
     * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
     * @return The `getZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom settings.
     */
    export function getZoomSettings(tabId: number): Promise<ZoomSettings>;
    /**
     * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
     * @since Chrome 54
     * @param tabId Optional. The ID of the tab to be discarded. If specified, the tab will be discarded unless it's active or already discarded. If omitted, the browser will discard the least important tab. This can fail if no discardable tabs exist.
     * @return The `discard` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function discard(tabId?: number): Promise<Tab>;
    /**
     * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
     * @since Chrome 54
     * @param tabId Optional. The ID of the tab to be discarded. If specified, the tab will be discarded unless it's active or already discarded. If omitted, the browser will discard the least important tab. This can fail if no discardable tabs exist.
     * @param callback Called after the operation is completed.
     */
    export function discard(callback: (tab: Tab) => void): void;
    export function discard(tabId: number, callback: (tab: Tab) => void): void;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72
     * @return The `goForward` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goForward(): Promise<void>;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72
     * @param callback Optional. Called after the operation is completed.
     */
    export function goForward(callback: () => void): void;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72
     * @param tabId Optional. The ID of the tab to navigate forward; defaults to the selected tab of the current window.
     * @return The `goForward` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goForward(tabId: number): Promise<void>;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72
     * @param tabId Optional. The ID of the tab to navigate forward; defaults to the selected tab of the current window.
     * @param callback Optional. Called after the operation is completed.
     */
    export function goForward(tabId: number, callback: () => void): void;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72
     * @return The `goBack` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goBack(): Promise<void>;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72
     * @param callback Optional. Called after the operation is completed.
     */
    export function goBack(callback: () => void): void;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72
     * @param tabId Optional. The ID of the tab to navigate back; defaults to the selected tab of the current window.
     * @return The `goBack` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goBack(tabId: number): Promise<void>;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72
     * @param tabId Optional. The ID of the tab to navigate back; defaults to the selected tab of the current window.
     * @param callback Optional. Called after the operation is completed.
     */
    export function goBack(tabId: number, callback: () => void): void;
    /**
     * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
     * @since Chrome 88
     * @param options Configurations object
     * @return The `group` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function group(options: GroupOptions): Promise<number>;
    /**
     * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
     * @since Chrome 88
     * @param options Configurations object
     * @return The `group` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function group(options: GroupOptions): Promise<number>;
    /**
     * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
     * @since Chrome 88
     * @param options Configurations object
     * @param callback Optional.
     */
    export function group(options: GroupOptions, callback: (groupId: number) => void): void;
    /**
     * Removes one or more tabs from their respective groups. If any groups become empty, they are deleted
     * @since Chrome 88
     * @param tabIds The tabs to ungroup.
     * @return The `ungroup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function ungroup(tabIds: number | number[]): Promise<void>;
    /**
     * Removes one or more tabs from their respective groups. If any groups become empty, they are deleted
     * @since Chrome 88
     * @param tabIds The tabs to ungroup.
     * @param callback Optional. Called after the operation is completed.
     */
    export function ungroup(tabIds: number | number[], callback: () => void): void;
    /**
     * Fired when the highlighted or selected tabs in a window changes.
     * @since Chrome 18
     */
    export var onHighlighted: TabHighlightedEvent;
    /** Fired when a tab is closed. */
    export var onRemoved: TabRemovedEvent;
    /** Fired when a tab is updated. */
    export var onUpdated: TabUpdatedEvent;
    /** Fired when a tab is attached to a window, for example because it was moved between windows. */
    export var onAttached: TabAttachedEvent;
    /**
     * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see tabs.onDetached.
     */
    export var onMoved: TabMovedEvent;
    /** Fired when a tab is detached from a window, for example because it is being moved between windows. */
    export var onDetached: TabDetachedEvent;
    /** Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set. */
    export var onCreated: TabCreatedEvent;
    /**
     * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
     * @since Chrome 18
     */
    export var onActivated: TabActivatedEvent;
    /**
     * Fired when a tab is replaced with another tab due to prerendering or instant.
     * @since Chrome 26
     */
    export var onReplaced: TabReplacedEvent;
    /**
     * @deprecated since Chrome 33. Please use tabs.onActivated.
     * Fires when the selected tab in a window changes.
     */
    export var onSelectionChanged: TabSelectedEvent;
    /**
     * @deprecated since Chrome 33. Please use tabs.onActivated.
     * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to tabs.onUpdated events to be notified when a URL is set.
     */
    export var onActiveChanged: TabSelectedEvent;
    /**
     * @deprecated since Chrome 33. Please use tabs.onHighlighted.
     * Fired when the highlighted or selected tabs in a window changes.
     */
    export var onHighlightChanged: TabHighlightedEvent;
    /**
     * Fired when a tab is zoomed.
     * @since Chrome 38
     */
    export var onZoomChange: TabZoomChangeEvent;

    /**
     * An ID which represents the absence of a browser tab.
     * @since Chrome 46
     */
    export var TAB_ID_NONE: -1;
}
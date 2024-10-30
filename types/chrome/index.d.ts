/// <reference types="filesystem" />
/// <reference path="./har-format/index.d.ts" />
/// <reference path="./chrome-cast/index.d.ts" />   
/// <reference path="runtime.d.ts" />
/// <reference path="declarative-net-requests.d.ts" />
/// <reference path="runtime.d.ts" />
/// <reference path="script-bridge.d.ts" />
/// <reference path="scripting.d.ts" />
/// <reference path="sessions.d.ts" />
/// <reference path="side-panel.d.ts" />
/// <reference path="socket.d.ts" />
/// <reference path="storage.d.ts" />
/// <reference path="system-cpu.d.ts" />
/// <reference path="system-display.d.ts" />
/// <reference path="system-log.d.ts" />
/// <reference path="system-memory.d.ts" />
/// <reference path="system-storage.d.ts" />
/// <reference path="tab-capture.d.ts" />
/// <reference path="tab-groups.d.ts" />
/// <reference path="tabs.d.ts" />
/// <reference path="top-sites.d.ts" />
/// <reference path="tts-engine.d.ts" />
/// <reference path="tts.d.ts" />
/// <reference path="types.d.ts" />
/// <reference path="user-scripts.d.ts" />
/// <reference path="vpn-provider.d.ts" />
/// <reference path="wallpaper.d.ts" />
/// <reference path="web-navigation.d.ts" />
/// <reference path="web-request.d.ts" />
/// <reference path="web-store.d.ts" />
/// <reference path="windows.d.ts" />

////////////////////
// Global object
////////////////////
interface Window {
    chrome: typeof chrome;
}

////////////////////
// Accessibility Features
////////////////////
/**
 * Use the chrome.accessibilityFeatures API to manage Chrome's accessibility features. This API relies on the ChromeSetting prototype of the type API for getting and setting individual accessibility features. In order to get feature states the extension must request accessibilityFeatures.read permission. For modifying feature state, the extension needs accessibilityFeatures.modify permission. Note that accessibilityFeatures.modify does not imply accessibilityFeatures.read permission.
 * @since Chrome 37
 * Permissions: "accessibilityFeatures.read"
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.accessibilityFeatures {
    /** **ChromeOS only.** Spoken feedback (text-to-speech). */
    export var spokenFeedback: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Enlarged cursor. */
    export var largeCursor: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Sticky modifier keys (like shift or alt). */
    export var stickyKeys: chrome.types.ChromeSetting;
    /** **ChromeOS only.** High contrast rendering mode. */
    export var highContrast: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Full screen magnification. */
    export var screenMagnifier: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Auto mouse click after mouse stops moving. */
    export var autoclick: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Virtual on-screen keyboard. */
    export var virtualKeyboard: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Caret highlighting.
     * @since Chrome 51
     */
    export var caretHighlight: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Cursor highlighting.
     * @since Chrome 51
     */
    export var cursorHighlight: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Focus highlighting.
     * @since Chrome 51
     */
    export var focusHighlight: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Select-to-speak.
     * @since Chrome 51
     */
    export var selectToSpeak: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Switch Access.
     * @since Chrome 51
     */
    export var switchAccess: chrome.types.ChromeSetting;
    /**
     * @since Chrome 42
     */
    export var animationPolicy: chrome.types.ChromeSetting;
}

////////////////////
// Action
////////////////////
/**
 * Use the chrome.action API to control the extension's icon in the Google Chrome toolbar.
 * @since Chrome 88, MV3
 * Manifest:  "action": {...}
 */
declare namespace chrome.action {
    /** @deprecated Use BadgeColorDetails instead. */
    export interface BadgeBackgroundColorDetails extends BadgeColorDetails {}

    export interface BadgeColorDetails {
        /** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: string | ColorArray;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export interface BadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export type ColorArray = [number, number, number, number];

    export interface TitleDetails {
        /** The string the action should display when moused over. */
        title: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export interface PopupDetails {
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface BrowserClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

    export interface TabIconDetails {
        /** Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        path?: string | { [index: number]: string } | undefined;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
        /** Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        imageData?: ImageData | { [index: number]: ImageData } | undefined;
    }

    export interface OpenPopupOptions {
        /** Optional. The id of the window to open the action popup in. Defaults to the currently-active window if unspecified.  */
        windowId?: number | undefined;
    }

    export interface TabDetails {
        /** Optional. The ID of the tab to query state for. If no tab is specified, the non-tab-specific state is returned.  */
        tabId?: number | undefined;
    }

    export interface UserSettings {
        /** Whether the extension's action icon is visible on browser windows' top-level toolbar (i.e., whether the extension has been 'pinned' by the user). */
        isOnToolbar: boolean;
    }

    /**
     * @since Chrome 88
     * Disables the action for a tab.
     * @param tabId The id of the tab for which you want to modify the action.
     * @return The `disable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function disable(tabId?: number): Promise<void>;

    /**
     * @since Chrome 88
     * Disables the action for a tab.
     * @param tabId The id of the tab for which you want to modify the action.
     * @param callback
     */
    export function disable(callback: () => void): void;
    export function disable(tabId: number, callback: () => void): void;

    /**
     * @since Chrome 88
     * Enables the action for a tab. By default, actions are enabled.
     * @param tabId The id of the tab for which you want to modify the action.
     * @return The `enable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function enable(tabId?: number): Promise<void>;

    /**
     * @since Chrome 88
     * Enables the action for a tab. By default, actions are enabled.
     * @param tabId The id of the tab for which you want to modify the action.
     * @param callback
     */
    export function enable(callback: () => void): void;
    export function enable(tabId: number, callback: () => void): void;

    /**
     * @since Chrome 88
     * Gets the background color of the action.
     */
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: ColorArray) => void): void;
    /**
     * @since Chrome 88
     * Gets the background color of the action.
     * @return The `getBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeBackgroundColor(details: TabDetails): Promise<ColorArray>;

    /**
     * @since Chrome 88
     * Gets the badge text of the action. If no tab is specified, the non-tab-specific badge text is returned.
     * If displayActionCountAsBadgeText is enabled, a placeholder text will be returned unless the
     * declarativeNetRequestFeedback permission is present or tab-specific badge text was provided.
     */
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;

    /**
     * @since Chrome 88
     * Gets the badge text of the action. If no tab is specified, the non-tab-specific badge text is returned.
     * If displayActionCountAsBadgeText is enabled, a placeholder text will be returned unless the
     * declarativeNetRequestFeedback permission is present or tab-specific badge text was provided.
     * @return The `getBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeText(details: TabDetails): Promise<string>;

    /**
     * @since Chrome 110
     * Gets the text color of the action.
     */
    export function getBadgeTextColor(details: TabDetails, callback: (result: ColorArray) => void): void;

    /**
     * @since Chrome 110
     * Gets the text color of the action.
     * @return The `getBadgeTextColor` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeTextColor(details: TabDetails): Promise<ColorArray>;

    /**
     * @since Chrome 88
     * Gets the html document set as the popup for this action.
     */
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;

    /**
     * @since Chrome 88
     * Gets the html document set as the popup for this action.
     * @return The `getPopup` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPopup(details: TabDetails): Promise<string>;

    /**
     * @since Chrome 88
     * Gets the title of the action.
     */
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;

    /**
     * @since Chrome 88
     * Gets the title of the action.
     * @return The `getTitle` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getTitle(details: TabDetails): Promise<string>;

    /**
     * @since Chrome 91
     * Returns the user-specified settings relating to an extension's action.
     */
    export function getUserSettings(callback: (userSettings: UserSettings) => void): void;

    /**
     * @since Chrome 91
     * Returns the user-specified settings relating to an extension's action.
     * @return The `getUserSettings` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getUserSettings(): Promise<UserSettings>;

    /**
     * @since Chrome 110
     * Indicates whether the extension action is enabled for a tab (or globally if no tabId is provided). Actions enabled using only declarativeContent always return false.
     */
    export function isEnabled(tabId: number | undefined, callback: (isEnabled: boolean) => void): void;

    /**
     * @since Chrome 110
     * Indicates whether the extension action is enabled for a tab (or globally if no tabId is provided). Actions enabled using only declarativeContent always return false.
     * @return True if the extension action is enabled.
     */
    export function isEnabled(tabId?: number): Promise<boolean>;

    /**
     * @since Chrome 99
     * Opens the extension's popup.
     * @param options Specifies options for opening the popup.
     * () => {...}
     * @return The `openPopup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function openPopup(options?: OpenPopupOptions): Promise<void>;

    /**
     * @since Chrome 99
     * Opens the extension's popup.
     * @param options Specifies options for opening the popup.
     */
    export function openPopup(callback: () => void): void;
    export function openPopup(options: OpenPopupOptions, callback: () => void): void;

    /**
     * @since Chrome 88
     * Sets the background color for the badge.
     * @return The `setBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeBackgroundColor(details: BadgeColorDetails): Promise<void>;

    /**
     * @since Chrome 88
     * Sets the background color for the badge.
     */
    export function setBadgeBackgroundColor(details: BadgeColorDetails, callback: () => void): void;

    /**
     * @since Chrome 88
     * Sets the badge text for the action. The badge is displayed on top of the icon.
     * @return The `setBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeText(details: BadgeTextDetails): Promise<void>;

    /**
     * @since Chrome 88
     * Sets the badge text for the action. The badge is displayed on top of the icon.
     */
    export function setBadgeText(details: BadgeTextDetails, callback: () => void): void;

    /**
     * @since Chrome 110
     * Sets the text color for the badge.
     * @return The `setBadgeTextColor` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeTextColor(details: BadgeColorDetails): Promise<void>;

    /**
     * @since Chrome 100
     * Sets the text color for the badge.
     */
    export function setBadgeTextColor(details: BadgeColorDetails, callback: () => void): void;

    /**
     * @since Chrome 88
     * Sets the icon for the action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element,
     * or as dictionary of either one of those. Either the path or the imageData property must be specified.
     * @return The `setIcon` method provides its result via callback or returned as a `Promise` (MV3 only). Since Chrome 96.
     */
    export function setIcon(details: TabIconDetails): Promise<void>;
    export function setIcon(details: TabIconDetails, callback: () => void): void;

    /**
     * @since Chrome 88
     * Sets the html document to be opened as a popup when the user clicks on the action's icon.
     * @return The `setPopup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setPopup(details: PopupDetails): Promise<void>;

    /**
     * @since Chrome 88
     * Sets the html document to be opened as a popup when the user clicks on the action's icon.
     */
    export function setPopup(details: PopupDetails, callback: () => void): void;

    /**
     * @since Chrome 88
     * Sets the title of the action. This shows up in the tooltip.
     * @return The `setTitle` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setTitle(details: TitleDetails): Promise<void>;

    /**
     * @since Chrome 88
     * Sets the title of the action. This shows up in the tooltip.
     */
    export function setTitle(details: TitleDetails, callback: () => void): void;

    /** Fired when an action icon is clicked. This event will not fire if the action has a popup. */
    export var onClicked: BrowserClickedEvent;
}

////////////////////
// Alarms
////////////////////
/**
 * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future.
 * @since Chrome 22
 * Permissions:  "alarms"
 */
declare namespace chrome.alarms {
    export interface AlarmCreateInfo {
        /** Optional. Length of time in minutes after which the onAlarm event should fire.  */
        delayInMinutes?: number | undefined;
        /** Optional. If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.  */
        periodInMinutes?: number | undefined;
        /** Optional. Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).  */
        when?: number | undefined;
    }

    export interface Alarm {
        /** Optional. If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes.  */
        periodInMinutes?: number | undefined;
        /** Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this. */
        scheduledTime: number;
        /** Name of this alarm. */
        name: string;
    }

    export interface AlarmEvent extends chrome.events.Event<(alarm: Alarm) => void> {}

    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function create(alarmInfo: AlarmCreateInfo): Promise<void>;
    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param name Optional name to identify this alarm. Defaults to the empty string.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function create(name: string, alarmInfo: AlarmCreateInfo): Promise<void>;
    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     */
    export function create(alarmInfo: AlarmCreateInfo, callback: () => void): void;
    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param name Optional name to identify this alarm. Defaults to the empty string.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     */
    export function create(name: string, alarmInfo: AlarmCreateInfo, callback: () => void): void;
    /**
     * Gets an array of all the alarms.
     */
    export function getAll(callback: (alarms: Alarm[]) => void): void;
    /**
     * Gets an array of all the alarms.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<Alarm[]>;
    /**
     * Clears all alarms.
     * function(boolean wasCleared) {...};
     * @return The `clearAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function clearAll(): Promise<boolean>;
    /**
     * Clears all alarms.
     */
    export function clearAll(callback: (wasCleared: boolean) => void): void;
    /**
     * Clears the alarm with the given name.
     * @param name The name of the alarm to clear. Defaults to the empty string.
     * @return The `clear` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function clear(name?: string): Promise<boolean>;
    /**
     * Clears the alarm with the given name.
     * @param name The name of the alarm to clear. Defaults to the empty string.
     */
    export function clear(callback: (wasCleared: boolean) => void): void;
    export function clear(name: string, callback: (wasCleared: boolean) => void): void;
    /**
     * Clears the alarm without a name.
     */
    export function clear(callback: (wasCleared: boolean) => void): void;
    /**
     * Clears the alarm without a name.
     * @return The `clear` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function clear(): Promise<void>;
    /**
     * Retrieves details about the specified alarm.
     */
    export function get(callback: (alarm: Alarm) => void): void;
    /**
     * Retrieves details about the specified alarm.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(): Promise<Alarm>;
    /**
     * Retrieves details about the specified alarm.
     * @param name The name of the alarm to get. Defaults to the empty string.
     */
    export function get(name: string, callback: (alarm: Alarm) => void): void;
    /**
     * Retrieves details about the specified alarm.
     * @param name The name of the alarm to get. Defaults to the empty string.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(name: string): Promise<Alarm>;

    /** Fired when an alarm has elapsed. Useful for event pages. */
    export var onAlarm: AlarmEvent;
}

////////////////////
// Audio
////////////////////
/**
 * The chrome.audio API is provided to allow users to get information about and control the audio devices attached to the system.
 * This API is currently only available in kiosk mode for ChromeOS.
 *
 * Permissions: "audio"
 *
 * @platform ChromeOS only
 * @since Chrome 59
 */
declare namespace chrome.audio {
    export interface AudioDeviceInfo {
        /** Device name */
        deviceName: string;
        /** Type of the device */
        deviceType: DeviceType;
        /** The user-friendly name (e.g. "USB Microphone"). */
        displayName: string;
        /** The unique identifier of the audio device. */
        id: string;
        /** True if this is the current active device. */
        isActive: boolean;
        /** The sound level of the device, volume for output, gain for input. */
        level: number;
        /** The stable/persisted device id string when available. */
        stableDeviceId?: string;
        /** Stream type associated with this device. */
        streamType: StreamType;
    }

    export interface DeviceFilter {
        /** If set, only audio devices whose active state matches this value will satisfy the filter. */
        isActive?: boolean;
        /** If set, only audio devices whose stream type is included in this list will satisfy the filter. */
        streamTypes?: StreamType[];
    }

    export interface DeviceIdLists {
        /**
         * List of input devices specified by their ID.
         * To indicate input devices should be unaffected, leave this property unset.
         */
        input?: string[];
        /**
         * List of output devices specified by their ID.
         * To indicate output devices should be unaffected, leave this property unset.
         */
        output?: string[];
    }

    export interface DeviceProperties {
        /**
         * The audio device's desired sound level. Defaults to the device's current sound level.
         * If used with audio input device, represents audio device gain.
         * If used with audio output device, represents audio device volume.
         */
        level?: number;
    }

    /** Available audio device types. */
    export enum DeviceType {
        ALSA_LOOPBACK = "ALSA_LOOPBACK",
        BLUETOOTH = "BLUETOOTH",
        FRONT_MIC = "FRONT_MIC",
        HDMI = "HDMI",
        HEADPHONE = "HEADPHONE",
        HOTWORD = "HOTWORD",
        INTERNAL_MIC = "INTERNAL_MIC",
        INTERNAL_SPEAKER = "INTERNAL_SPEAKER",
        KEYBOARD_MIC = "KEYBOARD_MIC",
        LINEOUT = "LINEOUT",
        MIC = "MIC",
        OTHER = "OTHER",
        POST_DSP_LOOPBACK = "POST_DSP_LOOPBACK",
        POST_MIX_LOOPBACK = "POST_MIX_LOOPBACK",
        REAR_MIC = "REAR_MIC",
        USB = "USB",
    }

    export interface LevelChangedEvent {
        /** ID of device whose sound level has changed. */
        deviceId: string;
        /** The device's new sound level. */
        level: number;
    }

    export interface MuteChangedEvent {
        /** Whether or not the stream is now muted. */
        isMuted: boolean;
        /** The type of the stream for which the mute value changed. The updated mute value applies to all devices with this stream type. */
        streamType: StreamType;
    }

    /** Type of stream an audio device provides. */
    export enum StreamType {
        INPUT = "INPUT",
        OUTPUT = "OUTPUT",
    }

    /**
     * Gets a list of audio devices filtered based on filter.
     * Can return its result via Promise in Manifest V3 or later since Chrome 116.
     */
    export function getDevices(filter?: DeviceFilter): Promise<AudioDeviceInfo[]>;
    export function getDevices(filter: DeviceFilter, callback: (devices: AudioDeviceInfo[]) => void): void;
    export function getDevices(callback: (devices: AudioDeviceInfo[]) => void): void;

    /**
     * Gets the system-wide mute state for the specified stream type.
     * Can return its result via Promise in Manifest V3 or later since Chrome 116.
     */
    export function getMute(streamType: `${StreamType}`): Promise<boolean>;
    export function getMute(streamType: `${StreamType}`, callback: (value: boolean) => void): void;

    /**
     * Sets lists of active input and/or output devices.
     * Can return its result via Promise in Manifest V3 or later since Chrome 116.
     */
    export function setActiveDevices(ids: DeviceIdLists): Promise<void>;
    export function setActiveDevices(ids: DeviceIdLists, callback: () => void): void;

    /**
     * Sets mute state for a stream type. The mute state will apply to all audio devices with the specified audio stream type.
     * Can return its result via Promise in Manifest V3 or later since Chrome 116.
     */
    export function setMute(streamType: `${StreamType}`, isMuted: boolean): Promise<void>;
    export function setMute(streamType: `${StreamType}`, isMuted: boolean, callback: () => void): void;

    /**
     * Sets the properties for the input or output device.
     * Can return its result via Promise in Manifest V3 or later since Chrome 116.
     */
    export function setProperties(id: string, properties: DeviceProperties): Promise<void>;
    export function setProperties(id: string, properties: DeviceProperties, callback: () => void): void;

    /**
     * Fired when audio devices change, either new devices being added, or existing devices being removed.
     */
    export const onDeviceListChanged: chrome.events.Event<(devices: AudioDeviceInfo[]) => void>;

    /**
     * Fired when sound level changes for an active audio device.
     */
    export const onLevelChanged: chrome.events.Event<(event: LevelChangedEvent) => void>;

    /**
     * Fired when the mute state of the audio input or output changes.
     * Note that mute state is system-wide and the new value applies to every audio device with specified stream type.
     */
    export const onMuteChanged: chrome.events.Event<(event: MuteChangedEvent) => void>;
}

////////////////////
// Browser
////////////////////
/**
 * Use the chrome.browser API to interact with the Chrome browser associated with
 * the current application and Chrome profile.
 * @deprecated Part of the deprecated Chrome Apps platform
 */
declare namespace chrome.browser {
    export interface Options {
        /** The URL to navigate to when the new tab is initially opened. */
        url: string;
    }

    /**
     * Opens a new tab in a browser window associated with the current application
     * and Chrome profile. If no browser window for the Chrome profile is opened,
     * a new one is opened prior to creating the new tab.
     * @param options Configures how the tab should be opened.
     * @param callback Called when the tab was successfully
     * created, or failed to be created. If failed, runtime.lastError will be set.
     */
    export function openTab(options: Options, callback: () => void): void;

    /**
     * Opens a new tab in a browser window associated with the current application
     * and Chrome profile. If no browser window for the Chrome profile is opened,
     * a new one is opened prior to creating the new tab.
     * @since Chrome 42
     * @param options Configures how the tab should be opened.
     */
    export function openTab(options: Options): void;
}

////////////////////
// Bookmarks
////////////////////
/**
 * Use the chrome.bookmarks API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages, which you can use to create a custom Bookmark Manager page.
 * @since Chrome 5
 * Permissions:  "bookmarks"
 */
declare namespace chrome.bookmarks {
    /** A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder. */
    export interface BookmarkTreeNode {
        /** Optional. The 0-based position of this node within its parent folder.  */
        index?: number | undefined;
        /** Optional. When this node was created, in milliseconds since the epoch (new Date(dateAdded)).  */
        dateAdded?: number | undefined;
        /** The text displayed for the node. */
        title: string;
        /** Optional. The URL navigated to when a user clicks the bookmark. Omitted for folders.   */
        url?: string | undefined;
        /** Optional. When the contents of this folder last changed, in milliseconds since the epoch.   */
        dateGroupModified?: number | undefined;
        /** The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.  */
        id: string;
        /** Optional. The id of the parent folder. Omitted for the root node.   */
        parentId?: string | undefined;
        /** Optional. An ordered list of children of this node.  */
        children?: BookmarkTreeNode[] | undefined;
        /**
         * Optional.
         * @since Chrome 37
         * Indicates the reason why this node is unmodifiable. The managed value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default).
         */
        unmodifiable?: "managed" | undefined;
    }

    export interface BookmarkRemoveInfo {
        index: number;
        parentId: string;
        node: BookmarkTreeNode;
    }

    export interface BookmarkMoveInfo {
        index: number;
        oldIndex: number;
        parentId: string;
        oldParentId: string;
    }

    export interface BookmarkChangeInfo {
        url?: string | undefined;
        title: string;
    }

    export interface BookmarkReorderInfo {
        childIds: string[];
    }

    export interface BookmarkRemovedEvent
        extends chrome.events.Event<(id: string, removeInfo: BookmarkRemoveInfo) => void>
    {}

    export interface BookmarkImportEndedEvent extends chrome.events.Event<() => void> {}

    export interface BookmarkMovedEvent extends chrome.events.Event<(id: string, moveInfo: BookmarkMoveInfo) => void> {}

    export interface BookmarkImportBeganEvent extends chrome.events.Event<() => void> {}

    export interface BookmarkChangedEvent
        extends chrome.events.Event<(id: string, changeInfo: BookmarkChangeInfo) => void>
    {}

    export interface BookmarkCreatedEvent
        extends chrome.events.Event<(id: string, bookmark: BookmarkTreeNode) => void>
    {}

    export interface BookmarkChildrenReordered
        extends chrome.events.Event<(id: string, reorderInfo: BookmarkReorderInfo) => void>
    {}

    export interface BookmarkSearchQuery {
        query?: string | undefined;
        url?: string | undefined;
        title?: string | undefined;
    }

    export interface BookmarkCreateArg {
        /** Optional. Defaults to the Other Bookmarks folder.  */
        parentId?: string | undefined;
        index?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }

    export interface BookmarkDestinationArg {
        parentId?: string | undefined;
        index?: number | undefined;
    }

    export interface BookmarkChangesArg {
        title?: string | undefined;
        url?: string | undefined;
    }

    /** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    export var MAX_WRITE_OPERATIONS_PER_HOUR: number;
    /** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    export var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;

    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
     */
    export function search(query: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function search(query: string): Promise<BookmarkTreeNode[]>;
    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced.
     */
    export function search(query: BookmarkSearchQuery, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function search(query: BookmarkSearchQuery): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the entire Bookmarks hierarchy.
     */
    export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the entire Bookmarks hierarchy.
     * @return The `getTree` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getTree(): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the recently added bookmarks.
     * @param numberOfItems The maximum number of items to return.
     */
    export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the recently added bookmarks.
     * @param numberOfItems The maximum number of items to return.
     * @return The `getRecent` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param id A single string-valued id
     */
    export function get(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param id A single string-valued id
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(id: string): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param idList An array of string-valued ids
     */
    export function get(idList: string[], callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param idList An array of string-valued ids
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(idList: string[]): Promise<BookmarkTreeNode[]>;
    /**
     * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function create(bookmark: BookmarkCreateArg): Promise<BookmarkTreeNode>;
    /**
     * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
     */
    export function create(bookmark: BookmarkCreateArg, callback: (result: BookmarkTreeNode) => void): void;
    /**
     * Moves the specified BookmarkTreeNode to the provided location.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function move(
        id: string,
        destination: BookmarkDestinationArg,
    ): Promise<BookmarkTreeNode>;
    /**
     * Moves the specified BookmarkTreeNode to the provided location.
     */
    export function move(
        id: string,
        destination: BookmarkDestinationArg,
        callback: (result: BookmarkTreeNode) => void,
    ): void;
    /**
     * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function update(
        id: string,
        changes: BookmarkChangesArg,
    ): Promise<BookmarkTreeNode>;
    /**
     * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported.
     */
    export function update(
        id: string,
        changes: BookmarkChangesArg,
        callback: (result: BookmarkTreeNode) => void,
    ): void;
    /**
     * Removes a bookmark or an empty bookmark folder.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(id: string): Promise<void>;
    /**
     * Removes a bookmark or an empty bookmark folder.
     */
    export function remove(id: string, callback: Function): void;
    /**
     * Retrieves the children of the specified BookmarkTreeNode id.
     */
    export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the children of the specified BookmarkTreeNode id.
     * @return The `getChildren` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getChildren(id: string): Promise<BookmarkTreeNode[]>;
    /**
     * @since Chrome 14
     * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
     * @param id The ID of the root of the subtree to retrieve.
     */
    export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * @since Chrome 14
     * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
     * @param id The ID of the root of the subtree to retrieve.
     * @return The `getSubTree` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSubTree(id: string): Promise<BookmarkTreeNode[]>;
    /**
     * Recursively removes a bookmark folder.
     * @return The `removeTree` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeTree(id: string): Promise<void>;
    /**
     * Recursively removes a bookmark folder.
     */
    export function removeTree(id: string, callback: Function): void;

    /** Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents. */
    export var onRemoved: BookmarkRemovedEvent;
    /** Fired when a bookmark import session is ended. */
    export var onImportEnded: BookmarkImportEndedEvent;
    /** Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until onImportEnded is fired. Observers should still handle other notifications immediately. */
    export var onImportBegan: BookmarkImportBeganEvent;
    /** Fired when a bookmark or folder changes. Note: Currently, only title and url changes trigger this. */
    export var onChanged: BookmarkChangedEvent;
    /** Fired when a bookmark or folder is moved to a different parent folder. */
    export var onMoved: BookmarkMovedEvent;
    /** Fired when a bookmark or folder is created. */
    export var onCreated: BookmarkCreatedEvent;
    /** Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move(). */
    export var onChildrenReordered: BookmarkChildrenReordered;
}

////////////////////
// Browser Action
////////////////////
/**
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 * @since Chrome 5
 * Manifest:  "browser_action": {...}
 */
declare namespace chrome.browserAction {
    export interface BadgeBackgroundColorDetails {
        /** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: string | ColorArray;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export interface BadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text?: string | null | undefined;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export type ColorArray = [number, number, number, number];

    export interface TitleDetails {
        /** The string the browser action should display when moused over. */
        title: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | null;
    }

    export interface TabDetails {
        /** Optional. Specify the tab to get the information. If no tab is specified, the non-tab-specific information is returned.  */
        tabId?: number | null;
    }

    export interface TabIconDetails {
        /** Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        path?: string | { [index: string]: string } | undefined;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
        /** Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        imageData?: ImageData | { [index: number]: ImageData } | undefined;
    }

    export interface PopupDetails {
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | null;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface BrowserClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

    /**
     * @since Chrome 22
     * Enables the browser action for a tab. By default, browser actions are enabled.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @return The `enable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function enable(tabId?: number | null): Promise<void>;
    /**
     * @since Chrome 22
     * Enables the browser action for a tab. By default, browser actions are enabled.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @param callback Supported since Chrome 67
     */
    export function enable(callback?: () => void): void;
    export function enable(tabId: number | null | undefined, callback?: () => void): void;
    /**
     * Sets the background color for the badge.
     * @return The `setBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): Promise<void>;
    /**
     * Sets the background color for the badge.
     * @param callback Supported since Chrome 67
     */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails, callback?: () => void): void;
    /**
     * Sets the badge text for the browser action. The badge is displayed on top of the icon.
     * @return The `setBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeText(details: BadgeTextDetails): Promise<void>;
    /**
     * Sets the badge text for the browser action. The badge is displayed on top of the icon.
     * @param callback Supported since Chrome 67
     */
    export function setBadgeText(details: BadgeTextDetails, callback: () => void): void;
    /**
     * Sets the title of the browser action. This shows up in the tooltip.
     * @return The `setTitle` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setTitle(details: TitleDetails): Promise<void>;
    /**
     * Sets the title of the browser action. This shows up in the tooltip.
     * @param callback Supported since Chrome 67
     */
    export function setTitle(details: TitleDetails, callback: () => void): void;
    /**
     * @since Chrome 19
     * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
     * @param callback Supported since Chrome 67
     */
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;
    /**
     * @since Chrome 19
     * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
     * @return The `getBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeText(details: TabDetails): Promise<string>;
    /**
     * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
     * @return The `setPopup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setPopup(details: PopupDetails): Promise<void>;
    /**
     * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
     * @param callback Supported since Chrome 67
     */
    export function setPopup(details: PopupDetails, callback?: () => void): void;
    /**
     * @since Chrome 22
     * Disables the browser action for a tab.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @return The `disable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function disable(tabId?: number | null): Promise<void>;
    /**
     * @since Chrome 22
     * Disables the browser action for a tab.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @param callback Supported since Chrome 67
     */
    export function disable(callback: () => void): void;
    export function disable(tabId?: number | null, callback?: () => void): void;
    /**
     * @since Chrome 19
     * Gets the title of the browser action.
     */
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;
    /**
     * @since Chrome 19
     * Gets the title of the browser action.
     * @return The `getTitle` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getTitle(details: TabDetails): Promise<string>;
    /**
     * @since Chrome 19
     * Gets the background color of the browser action.
     */
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: ColorArray) => void): void;
    /**
     * @since Chrome 19
     * Gets the background color of the browser action.
     * @return The `getBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeBackgroundColor(details: TabDetails): Promise<ColorArray>;
    /**
     * @since Chrome 19
     * Gets the html document set as the popup for this browser action.
     */
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;
    /**
     * @since Chrome 19
     * Gets the html document set as the popup for this browser action.
     * @return The `getPopup` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPopup(details: TabDetails): Promise<string>;
    /**
     * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
     */
    export function setIcon(details: TabIconDetails, callback?: Function): void;

    /** Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup. */
    export var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
/**
 * Use the chrome.browsingData API to remove browsing data from a user's local profile.
 * @since Chrome 19
 * Permissions:  "browsingData"
 */
declare namespace chrome.browsingData {
    export interface OriginTypes {
        /** Optional. Extensions and packaged applications a user has installed (be _really_ careful!).  */
        extension?: boolean | undefined;
        /** Optional. Websites that have been installed as hosted applications (be careful!).  */
        protectedWeb?: boolean | undefined;
        /** Optional. Normal websites.  */
        unprotectedWeb?: boolean | undefined;
    }

    /** Options that determine exactly what data will be removed. */
    export interface RemovalOptions {
        /**
         * Optional.
         * @since Chrome 74
         * When present, data for origins in this list is excluded from deletion. Can't be used together with origins. Only supported for cookies, storage and cache. Cookies are excluded for the whole registrable domain.
         */
        excludeOrigins?: string[] | undefined;
        /**
         * Optional.
         * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove application data before adding 'protectedWeb' or 'extensions'.
         */
        originTypes?: OriginTypes | undefined;
        /**
         * Optional.
         * @since Chrome 74
         * When present, only data for origins in this list is deleted. Only supported for cookies, storage and cache. Cookies are cleared for the whole registrable domain.
         */
        origins?: string[] | undefined;
        /**
         * Optional.
         * Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the {@link Date.getTime} method). If absent, defaults to 0 (which would remove all browsing data).
         */
        since?: number | undefined;
    }

    /**
     * @since Chrome 27
     * A set of data types. Missing data types are interpreted as false.
     */
    export interface DataTypeSet {
        /** Optional. Websites' WebSQL data.  */
        webSQL?: boolean | undefined;
        /** Optional. Websites' IndexedDB data.  */
        indexedDB?: boolean | undefined;
        /** Optional. The browser's cookies.  */
        cookies?: boolean | undefined;
        /** Optional. Stored passwords.  */
        passwords?: boolean | undefined;
        /**
         * @deprecated Deprecated since Chrome 76.
         * Support for server-bound certificates has been removed. This data type will be ignored.
         *
         * Optional. Server-bound certificates.
         */
        serverBoundCertificates?: boolean | undefined;
        /** Optional. The browser's download list.  */
        downloads?: boolean | undefined;
        /** Optional. The browser's cache. Note: when removing data, this clears the entire cache: it is not limited to the range you specify.  */
        cache?: boolean | undefined;
        /** Optional. The browser's cacheStorage.  */
        cacheStorage?: boolean | undefined;
        /** Optional. Websites' appcaches.  */
        appcache?: boolean | undefined;
        /** Optional. Websites' file systems.  */
        fileSystems?: boolean | undefined;
        /**
         * @deprecated Deprecated since Chrome 88.
         * Support for Flash has been removed. This data type will be ignored.
         *
         * Optional. Plugins' data.
         */
        pluginData?: boolean | undefined;
        /** Optional. Websites' local storage data.  */
        localStorage?: boolean | undefined;
        /** Optional. The browser's stored form data.  */
        formData?: boolean | undefined;
        /** Optional. The browser's history.  */
        history?: boolean | undefined;
        /**
         * Optional.
         * @since Chrome 39
         * Service Workers.
         */
        serviceWorkers?: boolean | undefined;
    }

    export interface SettingsResult {
        options: RemovalOptions;
        /** All of the types will be present in the result, with values of true if they are both selected to be removed and permitted to be removed, otherwise false. */
        dataToRemove: DataTypeSet;
        /** All of the types will be present in the result, with values of true if they are permitted to be removed (e.g., by enterprise policy) and false if not. */
        dataRemovalPermitted: DataTypeSet;
    }

    /**
     * @since Chrome 26
     * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
     * @return The `settings` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function settings(): Promise<SettingsResult>;
    /**
     * @since Chrome 26
     * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
     */
    export function settings(callback: (result: SettingsResult) => void): void;
    /**
     * @deprecated Deprecated since Chrome 88.
     * Support for Flash has been removed. This function has no effect.
     *
     * Clears plugins' data.
     * @return The `removePluginData` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removePluginData(options: RemovalOptions): Promise<void>;
    /**
     * @deprecated Deprecated since Chrome 88.
     * Support for Flash has been removed. This function has no effect.
     *
     * Clears plugins' data.
     * @param callback Called when plugins' data has been cleared.
     */
    export function removePluginData(options: RemovalOptions, callback: () => void): void;
    /**
     * @since Chrome 72
     * Clears websites' service workers.
     * @return The `removeServiceWorkers` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeServiceWorkers(options: RemovalOptions): Promise<void>;
    /**
     * @since Chrome 72
     * Clears websites' service workers.
     * @param callback Called when the browser's service workers have been cleared.
     */
    export function removeServiceWorkers(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's stored form data (autofill).
     * @return The `removeFormData` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeFormData(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's stored form data (autofill).
     * @param callback Called when the browser's form data has been cleared.
     */
    export function removeFormData(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' file system data.
     * @return The `removeFileSystems` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeFileSystems(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' file system data.
     * @param callback Called when websites' file systems have been cleared.
     */
    export function removeFileSystems(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears various types of browsing data stored in a user's profile.
     * @param dataToRemove The set of data types to remove.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet): Promise<void>;
    /**
     * Clears various types of browsing data stored in a user's profile.
     * @param dataToRemove The set of data types to remove.
     * @param callback Called when deletion has completed.
     */
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet, callback: () => void): void;
    /**
     * Clears the browser's stored passwords.
     * @return The `removePasswords` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removePasswords(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's stored passwords.
     * @param callback Called when the browser's passwords have been cleared.
     */
    export function removePasswords(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
     * @return The `removeCookies` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeCookies(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
     * @param callback Called when the browser's cookies and server-bound certificates have been cleared.
     */
    export function removeCookies(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' WebSQL data.
     * @return The `removeWebSQL` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeWebSQL(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' WebSQL data.
     * @param callback Called when websites' WebSQL databases have been cleared.
     */
    export function removeWebSQL(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' appcache data.
     * @return The `removeAppcache` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeAppcache(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' appcache data.
     * @param callback Called when websites' appcache data has been cleared.
     */
    export function removeAppcache(options: RemovalOptions, callback: () => void): void;
    /** Clears websites' cache storage data.
     * @return The `removeCacheStorage` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeCacheStorage(options: RemovalOptions): Promise<void>;
    /** Clears websites' cache storage data.
     * @param callback Called when websites' appcache data has been cleared.
     */
    export function removeCacheStorage(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's list of downloaded files (not the downloaded files themselves).
     * @return The `removeDownloads` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeDownloads(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's list of downloaded files (not the downloaded files themselves).
     * @param callback Called when the browser's list of downloaded files has been cleared.
     */
    export function removeDownloads(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' local storage data.
     * @return The `removeLocalStorage` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeLocalStorage(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' local storage data.
     * @param callback Called when websites' local storage has been cleared.
     */
    export function removeLocalStorage(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's cache.
     * @return The `removeCache` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeCache(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's cache.
     * @param callback Called when the browser's cache has been cleared.
     */
    export function removeCache(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's history.
     * @return The `removeHistory` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeHistory(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's history.
     * @param callback Called when the browser's history has cleared.
     */
    export function removeHistory(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' IndexedDB data.
     * @return The `removeIndexedDB` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeIndexedDB(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' IndexedDB data.
     * @param callback Called when websites' IndexedDB data has been cleared.
     */
    export function removeIndexedDB(options: RemovalOptions, callback: () => void): void;
}

////////////////////
// Commands
////////////////////
/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension.
 * @since Chrome 25
 * Manifest:  "commands": {...}
 */
declare namespace chrome.commands {
    export interface Command {
        /** Optional. The name of the Extension Command  */
        name?: string | undefined;
        /** Optional. The Extension Command description  */
        description?: string | undefined;
        /** Optional. The shortcut active for this command, or blank if not active.  */
        shortcut?: string | undefined;
    }

    export interface CommandEvent extends chrome.events.Event<(command: string, tab: chrome.tabs.Tab) => void> {}

    /**
     * Returns all the registered extension commands for this extension and their shortcut (if active).
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<Command[]>;
    /**
     * Returns all the registered extension commands for this extension and their shortcut (if active).
     * @param callback Called to return the registered commands.
     */
    export function getAll(callback: (commands: Command[]) => void): void;

    /** Fired when a registered command is activated using a keyboard shortcut. */
    export var onCommand: CommandEvent;
}

////////////////////
// Content Settings
////////////////////
/**
 * Use the chrome.contentSettings API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally.
 * @since Chrome 16
 * Permissions:  "contentSettings"
 */
declare namespace chrome.contentSettings {
    type ScopeEnum = "regular" | "incognito_session_only";

    export interface ClearDetails {
        /**
         * Optional.
         * Where to clear the setting (default: regular).
         * The scope of the ContentSetting. One of
         * * regular: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
         * * incognito_session_only: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
         */
        scope?: ScopeEnum | undefined;
    }

    type DefaultContentSettingDetails = "allow" | "ask" | "block" | "detect_important_content" | "session_only";

    export interface SetDetails {
        /** Optional. The resource identifier for the content type.  */
        resourceIdentifier?: ResourceIdentifier | undefined;
        /** The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values. */
        setting: DefaultContentSettingDetails;
        /** Optional. The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns.  */
        secondaryPattern?: string | undefined;
        /** Optional. Where to set the setting (default: regular).  */
        scope?: ScopeEnum | undefined;
        /** The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns. */
        primaryPattern: string;
    }

    export interface CookieSetDetails extends SetDetails {
        setting: "allow" | "block" | "session_only";
    }

    export interface ImagesSetDetails extends SetDetails {
        setting: "allow" | "block";
    }

    export interface JavascriptSetDetails extends SetDetails {
        setting: "allow" | "block";
    }

    export interface LocationSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface PluginsSetDetails extends SetDetails {
        setting: "allow" | "block" | "detect_important_content";
    }

    export interface PopupsSetDetails extends SetDetails {
        setting: "allow" | "block";
    }

    export interface NotificationsSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface FullscreenSetDetails extends SetDetails {
        setting: "allow";
    }

    export interface MouselockSetDetails extends SetDetails {
        setting: "allow";
    }

    export interface MicrophoneSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface CameraSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface PpapiBrokerSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface MultipleAutomaticDownloadsSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface GetDetails {
        /** Optional. The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs.  */
        secondaryUrl?: string | undefined;
        /** Optional. A more specific identifier of the type of content for which the settings should be retrieved.  */
        resourceIdentifier?: ResourceIdentifier | undefined;
        /** Optional. Whether to check the content settings for an incognito session. (default false)  */
        incognito?: boolean | undefined;
        /** The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type. */
        primaryUrl: string;
    }

    export interface ReturnedDetails {
        /** The content setting. See the description of the individual ContentSetting objects for the possible values. */
        setting: DefaultContentSettingDetails;
    }

    export interface ContentSetting {
        /**
         * Clear all content setting rules set by this extension.
         */
        clear(details: ClearDetails, callback?: () => void): void;
        /**
         * Applies a new content setting rule.
         */
        set(details: SetDetails, callback?: () => void): void;
        getResourceIdentifiers(
            callback: (
                /**
                 * A list of resource identifiers for this content type, or undefined if this content type does not use resource identifiers.
                 */
                resourceIdentifiers?: ResourceIdentifier[],
            ) => void,
        ): void;
        /**
         * Gets the current content setting for a given pair of URLs.
         */
        get(details: GetDetails, callback: (details: ReturnedDetails) => void): void;
    }

    export interface CookieContentSetting extends ContentSetting {
        set(details: CookieSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: CookieSetDetails) => void): void;
    }

    export interface PopupsContentSetting extends ContentSetting {
        set(details: PopupsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: PopupsSetDetails) => void): void;
    }

    export interface JavascriptContentSetting extends ContentSetting {
        set(details: JavascriptSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: JavascriptSetDetails) => void): void;
    }

    export interface NotificationsContentSetting extends ContentSetting {
        set(details: NotificationsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: NotificationsSetDetails) => void): void;
    }

    export interface PluginsContentSetting extends ContentSetting {
        set(details: PluginsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: PluginsSetDetails) => void): void;
    }

    export interface ImagesContentSetting extends ContentSetting {
        set(details: ImagesSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: ImagesSetDetails) => void): void;
    }

    export interface LocationContentSetting extends ContentSetting {
        set(details: LocationSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: LocationSetDetails) => void): void;
    }

    export interface FullscreenContentSetting extends ContentSetting {
        set(details: FullscreenSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: FullscreenSetDetails) => void): void;
    }

    export interface MouselockContentSetting extends ContentSetting {
        set(details: MouselockSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: MouselockSetDetails) => void): void;
    }

    export interface MicrophoneContentSetting extends ContentSetting {
        set(details: MicrophoneSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: MicrophoneSetDetails) => void): void;
    }

    export interface CameraContentSetting extends ContentSetting {
        set(details: CameraSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: CameraSetDetails) => void): void;
    }

    export interface PpapiBrokerContentSetting extends ContentSetting {
        set(details: PpapiBrokerSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: PpapiBrokerSetDetails) => void): void;
    }

    export interface MultipleAutomaticDownloadsContentSetting extends ContentSetting {
        set(details: MultipleAutomaticDownloadsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: MultipleAutomaticDownloadsSetDetails) => void): void;
    }

    /** The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers. */
    export interface ResourceIdentifier {
        /** The resource identifier for the given content type. */
        id: string;
        /** Optional. A human readable description of the resource.  */
        description?: string | undefined;
    }

    /**
     * Whether to allow cookies and other local data to be set by websites. One of
     * allow: Accept cookies,
     * block: Block cookies,
     * session_only: Accept cookies only for the current session.
     * Default is allow.
     * The primary URL is the URL representing the cookie origin. The secondary URL is the URL of the top-level frame.
     */
    export var cookies: CookieContentSetting;
    /**
     * Whether to allow sites to show pop-ups. One of
     * allow: Allow sites to show pop-ups,
     * block: Don't allow sites to show pop-ups.
     * Default is block.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var popups: PopupsContentSetting;
    /**
     * Whether to run JavaScript. One of
     * allow: Run JavaScript,
     * block: Don't run JavaScript.
     * Default is allow.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var javascript: JavascriptContentSetting;
    /**
     * Whether to allow sites to show desktop notifications. One of
     * allow: Allow sites to show desktop notifications,
     * block: Don't allow sites to show desktop notifications,
     * ask: Ask when a site wants to show desktop notifications.
     * Default is ask.
     * The primary URL is the URL of the document which wants to show the notification. The secondary URL is not used.
     */
    export var notifications: NotificationsContentSetting;
    /**
     * Whether to run plugins. One of
     * allow: Run plugins automatically,
     * block: Don't run plugins automatically,
     * detect_important_content: Only run automatically those plugins that are detected as the website's main content.
     * Default is allow.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var plugins: PluginsContentSetting;
    /**
     * Whether to show images. One of
     * allow: Show images,
     * block: Don't show images.
     * Default is allow.
     * The primary URL is the URL of the top-level frame. The secondary URL is the URL of the image.
     */
    export var images: ImagesContentSetting;
    /**
     * @since Chrome 42
     * Whether to allow Geolocation. One of
     * allow: Allow sites to track your physical location,
     * block: Don't allow sites to track your physical location,
     * ask: Ask before allowing sites to track your physical location.
     * Default is ask.
     * The primary URL is the URL of the document which requested location data. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
     */
    export var location: LocationContentSetting;
    /**
     * @since Chrome 42
     * Whether to allow sites to toggle the fullscreen mode. One of
     * allow: Allow sites to toggle the fullscreen mode,
     * ask: Ask when a site wants to toggle the fullscreen mode.
     * Default is ask.
     * The primary URL is the URL of the document which requested to toggle the fullscreen mode. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
     */
    export var fullscreen: FullscreenContentSetting;
    /**
     * @since Chrome 42
     * Whether to allow sites to disable the mouse cursor. One of
     * allow: Allow sites to disable the mouse cursor,
     * block: Don't allow sites to disable the mouse cursor,
     * ask: Ask when a site wants to disable the mouse cursor.
     * Default is ask.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var mouselock: MouselockContentSetting;
    /**
     * @since Chrome 46
     * Whether to allow sites to access the microphone. One of
     * allow: Allow sites to access the microphone,
     * block: Don't allow sites to access the microphone,
     * ask: Ask when a site wants to access the microphone.
     * Default is ask.
     * The primary URL is the URL of the document which requested microphone access. The secondary URL is not used.
     * NOTE: The 'allow' setting is not valid if both patterns are ''.
     */
    export var microphone: MicrophoneContentSetting;
    /**
     * @since Chrome 46
     * Whether to allow sites to access the camera. One of
     * allow: Allow sites to access the camera,
     * block: Don't allow sites to access the camera,
     * ask: Ask when a site wants to access the camera.
     * Default is ask.
     * The primary URL is the URL of the document which requested camera access. The secondary URL is not used.
     * NOTE: The 'allow' setting is not valid if both patterns are ''.
     */
    export var camera: CameraContentSetting;
    /**
     * @since Chrome 42
     * Whether to allow sites to run plugins unsandboxed. One of
     * allow: Allow sites to run plugins unsandboxed,
     * block: Don't allow sites to run plugins unsandboxed,
     * ask: Ask when a site wants to run a plugin unsandboxed.
     * Default is ask.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var unsandboxedPlugins: PpapiBrokerContentSetting;
    /**
     * @since Chrome 42
     * Whether to allow sites to download multiple files automatically. One of
     * allow: Allow sites to download multiple files automatically,
     * block: Don't allow sites to download multiple files automatically,
     * ask: Ask when a site wants to download files automatically after the first file.
     * Default is ask.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var automaticDownloads: MultipleAutomaticDownloadsContentSetting;
}

////////////////////
// Context Menus
////////////////////
/**
 * Use the chrome.contextMenus API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 * @since Chrome 6
 * Permissions:  "contextMenus"
 */
declare namespace chrome.contextMenus {
    export interface OnClickData {
        /**
         * Optional.
         * @since Chrome 35
         * The text for the context selection, if any.
         */
        selectionText?: string | undefined;
        /**
         * Optional.
         * @since Chrome 35
         * A flag indicating the state of a checkbox or radio item after it is clicked.
         */
        checked?: boolean | undefined;
        /**
         * @since Chrome 35
         * The ID of the menu item that was clicked.
         */
        menuItemId: number | string;
        /**
         * Optional.
         * @since Chrome 35
         * The ID of the frame of the element where the context menu was
         * clicked, if it was in a frame.
         */
        frameId?: number | undefined;
        /**
         * Optional.
         * @since Chrome 35
         * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
         */
        frameUrl?: string | undefined;
        /**
         * @since Chrome 35
         * A flag indicating whether the element is editable (text input, textarea, etc.).
         */
        editable: boolean;
        /**
         * Optional.
         * @since Chrome 35
         * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
         */
        mediaType?: "image" | "video" | "audio" | undefined;
        /**
         * Optional.
         * @since Chrome 35
         * A flag indicating the state of a checkbox or radio item before it was clicked.
         */
        wasChecked?: boolean | undefined;
        /**
         * @since Chrome 35
         * The URL of the page where the menu item was clicked. This property is not set if the click occurred in a context where there is no current page, such as in a launcher context menu.
         */
        pageUrl: string;
        /**
         * Optional.
         * @since Chrome 35
         * If the element is a link, the URL it points to.
         */
        linkUrl?: string | undefined;
        /**
         * Optional.
         * @since Chrome 35
         * The parent ID, if any, for the item clicked.
         */
        parentMenuItemId?: number | string;
        /**
         * Optional.
         * @since Chrome 35
         * Will be present for elements with a 'src' URL.
         */
        srcUrl?: string | undefined;
    }

    type ContextType =
        | "all"
        | "page"
        | "frame"
        | "selection"
        | "link"
        | "editable"
        | "image"
        | "video"
        | "audio"
        | "launcher"
        | "browser_action"
        | "page_action"
        | "action";

    type ContextItemType = "normal" | "checkbox" | "radio" | "separator";

    export interface CreateProperties {
        /** Optional. Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.  */
        documentUrlPatterns?: string[] | undefined;
        /** Optional. The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.  */
        checked?: boolean | undefined;
        /** Optional. The text to be displayed in the item; this is required unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".  */
        title?: string | undefined;
        /** Optional. List of contexts this menu item will appear in. Defaults to ['page'] if not specified.  */
        contexts?: ContextType | ContextType[] | undefined;
        /**
         * Optional.
         * @since Chrome 20
         * Whether this context menu item is enabled or disabled. Defaults to true.
         */
        enabled?: boolean | undefined;
        /** Optional. Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.  */
        targetUrlPatterns?: string[] | undefined;
        /**
         * Optional.
         * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked.
         * @param info Information sent when a context menu item is clicked.
         * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
         */
        onclick?: ((info: OnClickData, tab: chrome.tabs.Tab) => void) | undefined;
        /** Optional. The ID of a parent menu item; this makes the item a child of a previously added item.  */
        parentId?: number | string | undefined;
        /** Optional. The type of menu item. Defaults to 'normal' if not specified.  */
        type?: ContextItemType | undefined;
        /**
         * Optional.
         * @since Chrome 21
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
         */
        id?: string | undefined;
        /**
         * Optional.
         * @since Chrome 62
         * Whether the item is visible in the menu.
         */
        visible?: boolean | undefined;
    }

    export interface UpdateProperties {
        documentUrlPatterns?: string[] | undefined;
        checked?: boolean | undefined;
        title?: string | undefined;
        contexts?: ContextType[] | undefined;
        /** Optional. @since Chrome 20  */
        enabled?: boolean | undefined;
        targetUrlPatterns?: string[] | undefined;
        onclick?: Function | undefined;
        /** Optional. Note: You cannot change an item to be a child of one of its own descendants.  */
        parentId?: number | string;
        type?: ContextItemType | undefined;
        /**
         * Optional.
         * @since Chrome 62
         * Whether the item is visible in the menu.
         */
        visible?: boolean | undefined;
    }

    export interface MenuClickedEvent extends chrome.events.Event<(info: OnClickData, tab?: chrome.tabs.Tab) => void> {}

    /**
     * @since Chrome 38
     * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored.
     */
    export var ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /**
     * Removes all context menu items added by this extension.
     * @param callback Called when removal is complete.
     */
    export function removeAll(callback?: () => void): void;
    /**
     * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
     * @param callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError.
     * @return The ID of the newly created item.
     */
    export function create(createProperties: CreateProperties, callback?: () => void): number | string;
    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     * @param callback Called when the context menu has been updated.
     */
    export function update(id: string | number, updateProperties: UpdateProperties, callback?: () => void): void;
    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     * @param callback Called when the context menu has been removed.
     */
    export function remove(menuItemId: string | number, callback?: () => void): void;

    /**
     * @since Chrome 21
     * Fired when a context menu item is clicked.
     */
    export var onClicked: MenuClickedEvent;
}

////////////////////
// Cookies
////////////////////
/**
 * Use the chrome.cookies API to query and modify cookies, and to be notified when they change.
 * @since Chrome 6
 * Permissions:  "cookies", host permissions
 */
declare namespace chrome.cookies {
    /** A cookie's 'SameSite' state (https://tools.ietf.org/html/draft-west-first-party-cookies). 'no_restriction' corresponds to a cookie set with 'SameSite=None', 'lax' to 'SameSite=Lax', and 'strict' to 'SameSite=Strict'. 'unspecified' corresponds to a cookie set without the SameSite attribute. **/
    export type SameSiteStatus = "unspecified" | "no_restriction" | "lax" | "strict";

    /** Represents information about an HTTP cookie. */
    export interface Cookie {
        /** The domain of the cookie (e.g. "www.google.com", "example.com"). */
        domain: string;
        /** The name of the cookie. */
        name: string;
        /**
         * The partition key for reading or modifying cookies with the Partitioned attribute.
         * @since Chrome 119
         */
        partitionKey?: CookiePartitionKey;
        /** The ID of the cookie store containing this cookie, as provided in getAllCookieStores(). */
        storeId: string;
        /** The value of the cookie. */
        value: string;
        /** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
        session: boolean;
        /** True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie). */
        hostOnly: boolean;
        /** Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.  */
        expirationDate?: number | undefined;
        /** The path of the cookie. */
        path: string;
        /** True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts). */
        httpOnly: boolean;
        /** True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS). */
        secure: boolean;
        /**
         * The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests).
         * @since Chrome 51
         */
        sameSite: SameSiteStatus;
    }

    /** Represents a partitioned cookie's partition key. */
    export interface CookiePartitionKey {
        /** The top-level site the partitioned cookie is available in. */
        topLevelSite?: string | undefined;
    }

    /** Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window. */
    export interface CookieStore {
        /** The unique identifier for the cookie store. */
        id: string;
        /** Identifiers of all the browser tabs that share this cookie store. */
        tabIds: number[];
    }

    export interface GetAllDetails {
        /** Optional. Restricts the retrieved cookies to those whose domains match or are subdomains of this one.  */
        domain?: string | undefined;
        /** Optional. Filters the cookies by name.  */
        name?: string | undefined;
        /**
         * The partition key for reading or modifying cookies with the Partitioned attribute.
         * @since Chrome 119
         */
        partitionKey?: CookiePartitionKey | undefined;
        /** Optional. Restricts the retrieved cookies to those that would match the given URL.  */
        url?: string | undefined;
        /** Optional. The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.  */
        storeId?: string | undefined;
        /** Optional. Filters out session vs. persistent cookies.  */
        session?: boolean | undefined;
        /** Optional. Restricts the retrieved cookies to those whose path exactly matches this string.  */
        path?: string | undefined;
        /** Optional. Filters the cookies by their Secure property.  */
        secure?: boolean | undefined;
    }

    export interface SetDetails {
        /** Optional. The domain of the cookie. If omitted, the cookie becomes a host-only cookie.  */
        domain?: string | undefined;
        /** Optional. The name of the cookie. Empty by default if omitted.  */
        name?: string | undefined;
        /**
         * The partition key for reading or modifying cookies with the Partitioned attribute.
         * @since Chrome 119
         */
        partitionKey?: CookiePartitionKey | undefined;
        /** The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
        url: string;
        /** Optional. The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store.  */
        storeId?: string | undefined;
        /** Optional. The value of the cookie. Empty by default if omitted.  */
        value?: string | undefined;
        /** Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.  */
        expirationDate?: number | undefined;
        /** Optional. The path of the cookie. Defaults to the path portion of the url parameter.  */
        path?: string | undefined;
        /** Optional. Whether the cookie should be marked as HttpOnly. Defaults to false.  */
        httpOnly?: boolean | undefined;
        /** Optional. Whether the cookie should be marked as Secure. Defaults to false.  */
        secure?: boolean | undefined;
        /**
         * Optional. The cookie's same-site status. Defaults to "unspecified", i.e., if omitted, the cookie is set without specifying a SameSite attribute.
         * @since Chrome 51
         */
        sameSite?: SameSiteStatus | undefined;
    }

    /** Details to identify the cookie. */
    export interface CookieDetails {
        /** The name of the cookie to access. */
        name: string;
        /**
         * The partition key for reading or modifying cookies with the Partitioned attribute.
         * @since Chrome 119
         */
        partitionKey?: CookiePartitionKey | undefined;
        /** The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used. */
        storeId?: string | undefined;
        /** The URL with which the cookie to access is associated. This argument may be a full URL, in which case any data following the URL path (e.g. the query string) is simply ignored. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
        url: string;
    }

    export interface CookieChangeInfo {
        /** Information about the cookie that was set or removed. */
        cookie: Cookie;
        /** True if a cookie was removed. */
        removed: boolean;
        /**
         * @since Chrome 12
         * The underlying reason behind the cookie's change.
         */
        cause: string;
    }

    export interface CookieChangedEvent extends chrome.events.Event<(changeInfo: CookieChangeInfo) => void> {}

    /**
     * Lists all existing cookie stores.
     * Parameter cookieStores: All the existing cookie stores.
     */
    export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;
    /**
     * Lists all existing cookie stores.
     * @return The `getAllCookieStores` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAllCookieStores(): Promise<CookieStore[]>;
    /**
     * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first.
     * @param details Information to filter the cookies being retrieved.
     * Parameter cookies: All the existing, unexpired cookies that match the given cookie info.
     */
    export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void;
    /**
     * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first.
     * @param details Information to filter the cookies being retrieved.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(details: GetAllDetails): Promise<Cookie[]>;
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     * @param details Details about the cookie being set.
     * @return The `set` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function set(details: SetDetails): Promise<Cookie | null>;
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     * @param details Details about the cookie being set.
     * Optional parameter cookie: Contains details about the cookie that's been set. If setting failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set.
     */
    export function set(details: SetDetails, callback: (cookie: Cookie | null) => void): void;
    /**
     * Deletes a cookie by name.
     * @param details Information to identify the cookie to remove.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function remove(details: CookieDetails): Promise<CookieDetails>;
    /**
     * Deletes a cookie by name.
     * @param details Information to identify the cookie to remove.
     */
    export function remove(details: CookieDetails, callback?: (details: CookieDetails) => void): void;
    /**
     * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
     * @param details Details to identify the cookie being retrieved.
     * Parameter cookie: Contains details about the cookie. This parameter is null if no such cookie was found.
     */
    export function get(details: CookieDetails, callback: (cookie: Cookie | null) => void): void;
    /**
     * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
     * @param details Details to identify the cookie being retrieved.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(details: CookieDetails): Promise<Cookie | null>;

    /** Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit". */
    export var onChanged: CookieChangedEvent;
}

////////////////////
// Debugger
////////////////////
/**
 * The chrome.debugger API serves as an alternate transport for Chrome's remote debugging protocol. Use chrome.debugger to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, etc. Use the Debuggee tabId to target tabs with sendCommand and route events by tabId from onEvent callbacks.
 * @since Chrome 18
 * Permissions:  "debugger"
 */
declare namespace chrome {
    namespace _debugger {
        /** Debuggee identifier. Either tabId or extensionId must be specified */
        export interface Debuggee {
            /** Optional. The id of the tab which you intend to debug.  */
            tabId?: number | undefined;
            /**
             * Optional.
             * @since Chrome 27
             * The id of the extension which you intend to debug. Attaching to an extension background page is only possible when 'silent-debugger-extension-api' flag is enabled on the target browser.
             */
            extensionId?: string | undefined;
            /**
             * Optional.
             * @since Chrome 28
             * The opaque id of the debug target.
             */
            targetId?: string | undefined;
        }

        /**
         * @since Chrome 28
         * Debug target information
         */
        export interface TargetInfo {
            /** Target type. */
            type: string;
            /** Target id. */
            id: string;
            /**
             * Optional.
             * @since Chrome 30
             * The tab id, defined if type == 'page'.
             */
            tabId?: number | undefined;
            /**
             * Optional.
             * @since Chrome 30
             * The extension id, defined if type = 'background_page'.
             */
            extensionId?: string | undefined;
            /** True if debugger is already attached. */
            attached: boolean;
            /** Target page title. */
            title: string;
            /** Target URL. */
            url: string;
            /** Optional. Target favicon URL.  */
            faviconUrl?: string | undefined;
        }

        export interface DebuggerDetachedEvent
            extends chrome.events.Event<(source: Debuggee, reason: string) => void>
        {}

        export interface DebuggerEventEvent
            extends chrome.events.Event<(source: Debuggee, method: string, params?: object) => void>
        {}

        /**
         * Attaches debugger to the given target.
         * @param target Debugging target to which you want to attach.
         * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
         * @return The `attach` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
         */
        export function attach(target: Debuggee, requiredVersion: string): Promise<void>;
        /**
         * Attaches debugger to the given target.
         * @param target Debugging target to which you want to attach.
         * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
         * @param callback Called once the attach operation succeeds or fails. If the attach fails, runtime.lastError will be set to the error message.
         */
        export function attach(target: Debuggee, requiredVersion: string, callback: () => void): void;
        /**
         * Detaches debugger from the given target.
         * @param target Debugging target from which you want to detach.
         * @return The `detach` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
         */
        export function detach(target: Debuggee): Promise<void>;
        /**
         * Detaches debugger from the given target.
         * @param target Debugging target from which you want to detach.
         * @param callback Called once the detach operation succeeds or fails. If the detach fails, runtime.lastError will be set to the error message.
         */
        export function detach(target: Debuggee, callback: () => void): void;
        /**
         * Sends given command to the debugging target.
         * @param target Debugging target to which you want to send the command.
         * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
         * @param commandParams Since Chrome 22.
         * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
         * @return The `sendCommand` method provides its result via callback or returned as a `Promise` (MV3 only).
         */
        export function sendCommand(
            target: Debuggee,
            method: string,
            commandParams?: object,
        ): Promise<object>;
        /**
         * Sends given command to the debugging target.
         * @param target Debugging target to which you want to send the command.
         * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
         * @param commandParams Since Chrome 22.
         * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
         * @param callback Response body. If an error occurs while posting the message, the callback will be called with no arguments and runtime.lastError will be set to the error message.
         */
        export function sendCommand(
            target: Debuggee,
            method: string,
            commandParams?: object,
            callback?: (result?: object) => void,
        ): void;
        /**
         * @since Chrome 28
         * Returns the list of available debug targets.
         * @return The `getTargets` method provides its result via callback or returned as a `Promise` (MV3 only).
         */
        export function getTargets(): Promise<TargetInfo[]>;
        /**
         * @since Chrome 28
         * Returns the list of available debug targets.
         * Parameter result: Array of TargetInfo objects corresponding to the available debug targets.
         */
        export function getTargets(callback: (result: TargetInfo[]) => void): void;

        /** Fired when browser terminates debugging session for the tab. This happens when either the tab is being closed or Chrome DevTools is being invoked for the attached tab. */
        export var onDetach: DebuggerDetachedEvent;
        /** Fired whenever debugging target issues instrumentation event. */
        export var onEvent: DebuggerEventEvent;
    }

    export { _debugger as debugger };
}
////////////////////
// Declarative Content
////////////////////
/**
 * Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content.
 * @since Chrome 33
 * Permissions:  "declarativeContent"
 */
declare namespace chrome.declarativeContent {
    export interface PageStateUrlDetails {
        /** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
        hostContains?: string | undefined;
        /** Optional. Matches if the host name of the URL is equal to a specified string.  */
        hostEquals?: string | undefined;
        /** Optional. Matches if the host name of the URL starts with a specified string.  */
        hostPrefix?: string | undefined;
        /** Optional. Matches if the host name of the URL ends with a specified string.  */
        hostSuffix?: string | undefined;
        /** Optional. Matches if the path segment of the URL contains a specified string.  */
        pathContains?: string | undefined;
        /** Optional. Matches if the path segment of the URL is equal to a specified string.  */
        pathEquals?: string | undefined;
        /** Optional. Matches if the path segment of the URL starts with a specified string.  */
        pathPrefix?: string | undefined;
        /** Optional. Matches if the path segment of the URL ends with a specified string.  */
        pathSuffix?: string | undefined;
        /** Optional. Matches if the query segment of the URL contains a specified string.  */
        queryContains?: string | undefined;
        /** Optional. Matches if the query segment of the URL is equal to a specified string.  */
        queryEquals?: string | undefined;
        /** Optional. Matches if the query segment of the URL starts with a specified string.  */
        queryPrefix?: string | undefined;
        /** Optional. Matches if the query segment of the URL ends with a specified string.  */
        querySuffix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlContains?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlEquals?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.  */
        urlMatches?: string | undefined;
        /** Optional. Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.  */
        originAndPathMatches?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlPrefix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlSuffix?: string | undefined;
        /** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
        schemes?: string[] | undefined;
        /** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
        ports?: Array<number | number[]> | undefined;
    }

    export class PageStateMatcherProperties {
        /** Optional. Filters URLs for various criteria. See event filtering. All criteria are case sensitive.  */
        pageUrl?: PageStateUrlDetails | undefined;
        /** Optional. Matches if all of the CSS selectors in the array match displayed elements in a frame with the same origin as the page's main frame. All selectors in this array must be compound selectors to speed up matching. Note that listing hundreds of CSS selectors or CSS selectors that match hundreds of times per page can still slow down web sites.  */
        css?: string[] | undefined;
        /**
         * Optional.
         * @since Chrome 45
         * Matches if the bookmarked state of the page is equal to the specified value. Requires the bookmarks permission.
         */
        isBookmarked?: boolean | undefined;
    }

    /** Matches the state of a web page by various criteria. */
    export class PageStateMatcher {
        constructor(options: PageStateMatcherProperties);
    }

    /**
     * Declarative event action that enables the extension's action while the corresponding conditions are met.
     * Manifest v3.
     */
    export class ShowAction {}

    /**
     * Declarative event action that shows the extension's page action while the corresponding conditions are met.
     * Manifest v2.
     */
    export class ShowPageAction {}

    /** Declarative event action that changes the icon of the page action while the corresponding conditions are met. */
    export class SetIcon {
        constructor(options?: { imageData?: ImageData | { [size: string]: ImageData } | undefined });
    }

    /** Provides the Declarative Event API consisting of addRules, removeRules, and getRules. */
    export interface PageChangedEvent extends chrome.events.Event<() => void> {}

    export var onPageChanged: PageChangedEvent;
}

////////////////////
// Declarative Web Request
////////////////////
declare namespace chrome.declarativeWebRequest {
    export interface HeaderFilter {
        nameEquals?: string | undefined;
        valueContains?: string | string[] | undefined;
        nameSuffix?: string | undefined;
        valueSuffix?: string | undefined;
        valuePrefix?: string | undefined;
        nameContains?: string | string[] | undefined;
        valueEquals?: string | undefined;
        namePrefix?: string | undefined;
    }

    export interface AddResponseHeader {
        name: string;
        value: string;
    }

    export interface RemoveResponseCookie {
        filter: ResponseCookie;
    }

    export interface RemoveResponseHeader {
        name: string;
        value?: string | undefined;
    }

    export interface RequestMatcher {
        contentType?: string[] | undefined;
        url?: chrome.events.UrlFilter | undefined;
        excludeContentType?: string[] | undefined;
        excludeResponseHeader?: HeaderFilter[] | undefined;
        resourceType?: string | undefined;
        responseHeaders?: HeaderFilter[] | undefined;
    }

    export interface IgnoreRules {
        lowerPriorityThan: number;
    }

    export interface RedirectToEmptyDocument {}

    export interface RedirectRequest {
        redirectUrl: string;
    }

    export interface ResponseCookie {
        domain?: string | undefined;
        name?: string | undefined;
        expires?: string | undefined;
        maxAge?: number | undefined;
        value?: string | undefined;
        path?: string | undefined;
        httpOnly?: string | undefined;
        secure?: string | undefined;
    }

    export interface AddResponseCookie {
        cookie: ResponseCookie;
    }

    export interface EditResponseCookie {
        filter: ResponseCookie;
        modification: ResponseCookie;
    }

    export interface CancelRequest {}

    export interface RemoveRequestHeader {
        name: string;
    }

    export interface EditRequestCookie {
        filter: RequestCookie;
        modification: RequestCookie;
    }

    export interface SetRequestHeader {
        name: string;
        value: string;
    }

    export interface RequestCookie {
        name?: string | undefined;
        value?: string | undefined;
    }

    export interface RedirectByRegEx {
        to: string;
        from: string;
    }

    export interface RedirectToTransparentImage {}

    export interface AddRequestCookie {
        cookie: RequestCookie;
    }

    export interface RemoveRequestCookie {
        filter: RequestCookie;
    }

    export interface RequestedEvent extends chrome.events.Event<Function> {}

    export var onRequest: RequestedEvent;
}

////////////////////
// DesktopCapture
////////////////////
/**
 * Desktop Capture API that can be used to capture content of screen, individual windows or tabs.
 * @since Chrome 34
 * Permissions:  "desktopCapture"
 */
declare namespace chrome.desktopCapture {
    /** Contains properties that describe the stream. */
    export interface StreamOptions {
        /** True if "audio" is included in parameter sources, and the end user does not uncheck the "Share audio" checkbox. Otherwise false, and in this case, one should not ask for audio stream through getUserMedia call. */
        canRequestAudioTrack: boolean;
    }
    /**
     * Shows desktop media picker UI with the specified set of sources.
     * @param sources Set of sources that should be shown to the user.
     * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used.
     */
    export function chooseDesktopMedia(
        sources: string[],
        callback: (streamId: string, options: StreamOptions) => void,
    ): number;
    /**
     * Shows desktop media picker UI with the specified set of sources.
     * @param sources Set of sources that should be shown to the user.
     * @param targetTab Optional tab for which the stream is created. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches tab.url.
     * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used.
     */
    export function chooseDesktopMedia(
        sources: string[],
        targetTab: chrome.tabs.Tab,
        callback: (streamId: string, options: StreamOptions) => void,
    ): number;
    /**
     * Hides desktop media picker dialog shown by chooseDesktopMedia().
     * @param desktopMediaRequestId Id returned by chooseDesktopMedia()
     */
    export function cancelChooseDesktopMedia(desktopMediaRequestId: number): void;
}

////////////////////
// Dev Tools - Inspected Window
////////////////////
/**
 * Use the chrome.devtools.inspectedWindow API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page.
 * @since Chrome 18
 */
declare namespace chrome.devtools.inspectedWindow {
    /** A resource within the inspected page, such as a document, a script, or an image. */
    export interface Resource {
        /** The URL of the resource. */
        url: string;
        /**
         * Gets the content of the resource.
         * @param callback A function that receives resource content when the request completes.
         */
        getContent(
            callback: (
                /** Content of the resource (potentially encoded) */
                content: string,
                /** Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported. */
                encoding: string,
            ) => void,
        ): void;
        /**
         * Sets the content of the resource.
         * @param content New content of the resource. Only resources with the text type are currently supported.
         * @param commit True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource.
         * @param callback A function called upon request completion.
         */
        setContent(
            content: string,
            commit: boolean,
            callback?: (
                /**
                 * Set to undefined if the resource content was set successfully; describes error otherwise.
                 */
                error?: object,
            ) => void,
        ): void;
    }

    export interface ReloadOptions {
        /** Optional. If specified, the string will override the value of the User-Agent HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the navigator.userAgent property that's returned to any scripts that are running within the inspected page.  */
        userAgent?: string | undefined;
        /** Optional. When true, the loader will ignore the cache for all inspected page resources loaded before the load event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window.  */
        ignoreCache?: boolean | undefined;
        /** Optional. If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R.  */
        injectedScript?: string | undefined;
        /**
         * Optional.
         * If specified, this script evaluates into a function that accepts three string arguments: the source to preprocess, the URL of the source, and a function name if the source is an DOM event handler. The preprocessorerScript function should return a string to be compiled by Chrome in place of the input source. In the case that the source is a DOM event handler, the returned source must compile to a single JS function.
         * @deprecated Deprecated since Chrome 41. Please avoid using this parameter, it will be removed soon.
         */
        preprocessorScript?: string | undefined;
    }

    export interface EvaluationExceptionInfo {
        /** Set if the error occurred on the DevTools side before the expression is evaluated. */
        isError: boolean;
        /** Set if the error occurred on the DevTools side before the expression is evaluated. */
        code: string;
        /** Set if the error occurred on the DevTools side before the expression is evaluated. */
        description: string;
        /** Set if the error occurred on the DevTools side before the expression is evaluated, contains the array of the values that may be substituted into the description string to provide more information about the cause of the error. */
        details: any[];
        /** Set if the evaluated code produces an unhandled exception. */
        isException: boolean;
        /** Set if the evaluated code produces an unhandled exception. */
        value: string;
    }

    export interface ResourceAddedEvent extends chrome.events.Event<(resource: Resource) => void> {}

    export interface ResourceContentCommittedEvent
        extends chrome.events.Event<(resource: Resource, content: string) => void>
    {}

    /** The ID of the tab being inspected. This ID may be used with chrome.tabs.* API. */
    export var tabId: number;

    /** Reloads the inspected page. */
    export function reload(reloadOptions?: ReloadOptions): void;
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param callback A function called when evaluation completes.
     * Parameter result: The result of evaluation.
     * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
     */
    export function eval<T>(
        expression: string,
        callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void,
    ): void;
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param options The options parameter can contain one or more options.
     * @param callback A function called when evaluation completes.
     * Parameter result: The result of evaluation.
     * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
     */
    export function eval<T>(
        expression: string,
        options?: EvalOptions,
        callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void,
    ): void;
    /**
     * Retrieves the list of resources from the inspected page.
     * @param callback A function that receives the list of resources when the request completes.
     */
    export function getResources(callback: (resources: Resource[]) => void): void;

    /** Fired when a new resource is added to the inspected page. */
    export var onResourceAdded: ResourceAddedEvent;
    /** Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools). */
    export var onResourceContentCommitted: ResourceContentCommittedEvent;

    export interface EvalOptions {
        /** If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the expression is evaluated in the top frame of the inspected page. */
        frameURL?: string | undefined;
        /** Evaluate the expression in the context of the content script of the calling extension, provided that the content script is already injected into the inspected page. If not, the expression is not evaluated and the callback is invoked with the exception parameter set to an object that has the isError field set to true and the code field set to E_NOTFOUND. */
        useContentScriptContext?: boolean | undefined;
        /** Evaluate the expression in the context of a content script of an extension that matches the specified origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext. */
        contextSecurityOrigin?: string | undefined;
    }
}

////////////////////
// Dev Tools - Network
////////////////////
/**
 * Use the chrome.devtools.network API to retrieve the information about network requests displayed by the Developer Tools in the Network panel.
 * @since Chrome 18
 */
declare namespace chrome.devtools.network {
    /** Represents a HAR entry for a specific finished request. */
    export interface HAREntry extends HARFormatEntry {}
    /** Represents a HAR log that contains all known network requests. */
    export interface HARLog extends HARFormatLog {}
    /** Represents a network request for a document resource (script, image and so on). See HAR Specification for reference. */
    export interface Request extends chrome.devtools.network.HAREntry {
        /**
         * Returns content of the response body.
         * @param callback A function that receives the response body when the request completes.
         */
        getContent(
            callback: (
                /** Content of the response body (potentially encoded) */
                content: string,
                /** Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported */
                encoding: string,
            ) => void,
        ): void;
    }

    export interface RequestFinishedEvent extends chrome.events.Event<(request: Request) => void> {}

    export interface NavigatedEvent extends chrome.events.Event<(url: string) => void> {}

    /**
     * Returns HAR log that contains all known network requests.
     * @param callback A function that receives the HAR log when the request completes.
     * Parameter harLog: A HAR log. See HAR specification for details.
     */
    export function getHAR(callback: (harLog: HARLog) => void): void;

    /** Fired when a network request is finished and all request data are available. */
    export var onRequestFinished: RequestFinishedEvent;
    /** Fired when the inspected window navigates to a new page. */
    export var onNavigated: NavigatedEvent;
}

////////////////////
// Dev Tools - Performance
////////////////////
/**
 * The chrome.devtools.performance API allows developers to interact with the recording features of the Performance panel in Chrome DevTools. You can use this API to get notifications when recording starts or stops.
 * @since Chrome 128
 */
declare namespace chrome.devtools.performance {
    export interface ProfilingStartedEvent extends chrome.events.Event<() => void> {}

    export interface ProfilingStoppedEvent extends chrome.events.Event<() => void> {}

    /** Fired when the Performance panel begins recording performance data. */
    export var onProfilingStarted: ProfilingStartedEvent;
    /** Fired when the Performance panel stops recording performance data. */
    export var onProfilingStopped: ProfilingStoppedEvent;
}

////////////////////
// Dev Tools - Panels
////////////////////
/**
 * Use the chrome.devtools.panels API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars.
 * @since Chrome 18
 */
declare namespace chrome.devtools.panels {
    export interface PanelShownEvent extends chrome.events.Event<(window: Window) => void> {}

    export interface PanelHiddenEvent extends chrome.events.Event<() => void> {}

    export interface PanelSearchEvent extends chrome.events.Event<(action: string, queryString?: string) => void> {}

    /** Represents a panel created by extension. */
    export interface ExtensionPanel {
        /**
         * Appends a button to the status bar of the panel.
         * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the button is pressed.
         * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
         * @param disabled Whether the button is disabled.
         */
        createStatusBarButton(iconPath: string, tooltipText: string, disabled: boolean): Button;
        /** Fired when the user switches to the panel. */
        onShown: PanelShownEvent;
        /** Fired when the user switches away from the panel. */
        onHidden: PanelHiddenEvent;
        /** Fired upon a search action (start of a new search, search result navigation, or search being canceled). */
        onSearch: PanelSearchEvent;
    }

    export interface ButtonClickedEvent extends chrome.events.Event<() => void> {}

    /** A button created by the extension. */
    export interface Button {
        /**
         * Updates the attributes of the button. If some of the arguments are omitted or null, the corresponding attributes are not updated.
         * @param iconPath Path to the new icon of the button.
         * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
         * @param disabled Whether the button is disabled.
         */
        update(iconPath?: string | null, tooltipText?: string | null, disabled?: boolean | null): void;
        /** Fired when the button is clicked. */
        onClicked: ButtonClickedEvent;
    }

    export interface SelectionChangedEvent extends chrome.events.Event<() => void> {}

    /** Represents the Elements panel. */
    export interface ElementsPanel {
        /**
         * Creates a pane within panel's sidebar.
         * @param title Text that is displayed in sidebar caption.
         * @param callback A callback invoked when the sidebar is created.
         */
        createSidebarPane(
            title: string,
            callback?: (
                /** An ExtensionSidebarPane object for created sidebar pane */
                result: ExtensionSidebarPane,
            ) => void,
        ): void;
        /** Fired when an object is selected in the panel. */
        onSelectionChanged: SelectionChangedEvent;
    }

    /**
     * @since Chrome 41
     * Represents the Sources panel.
     */
    export interface SourcesPanel {
        /**
         * Creates a pane within panel's sidebar.
         * @param title Text that is displayed in sidebar caption.
         * @param callback A callback invoked when the sidebar is created.
         */
        createSidebarPane(
            title: string,
            callback?: (
                /** An ExtensionSidebarPane object for created sidebar pane. */
                result: ExtensionSidebarPane,
            ) => void,
        ): void;
        /** Fired when an object is selected in the panel. */
        onSelectionChanged: SelectionChangedEvent;
    }

    export interface ExtensionSidebarPaneShownEvent extends chrome.events.Event<(window: Window) => void> {}

    export interface ExtensionSidebarPaneHiddenEvent extends chrome.events.Event<() => void> {}

    /** A sidebar created by the extension. */
    export interface ExtensionSidebarPane {
        /**
         * Sets the height of the sidebar.
         * @param height A CSS-like size specification, such as '100px' or '12ex'.
         */
        setHeight(height: string): void;
        /**
         * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
         * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
         * @param rootTitle An optional title for the root of the expression tree.
         * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results.
         */
        setExpression(expression: string, rootTitle?: string, callback?: () => void): void;
        /**
         * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
         * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
         * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results.
         */
        setExpression(expression: string, callback?: () => void): void;
        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonobject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
         * @param rootTitle An optional title for the root of the expression tree.
         * @param callback A callback invoked after the sidebar is updated with the object.
         */
        setobject(jsonobject: object, rootTitle?: string, callback?: () => void): void;
        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonobject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
         * @param callback A callback invoked after the sidebar is updated with the object.
         */
        setobject(jsonobject: object, callback?: () => void): void;
        /**
         * Sets an HTML page to be displayed in the sidebar pane.
         * @param path Relative path of an extension page to display within the sidebar.
         */
        setPage(path: string): void;
        /** Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it. */
        onShown: ExtensionSidebarPaneShownEvent;
        /** Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts the sidebar pane. */
        onHidden: ExtensionSidebarPaneHiddenEvent;
    }

    /** Elements panel. */
    export var elements: ElementsPanel;
    /**
     * @since Chrome 38
     * Sources panel.
     */
    export var sources: SourcesPanel;

    /**
     * Creates an extension panel.
     * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar.
     * @param iconPath Path of the panel's icon relative to the extension directory.
     * @param pagePath Path of the panel's HTML page relative to the extension directory.
     * @param callback A function that is called when the panel is created.
     * Parameter panel: An ExtensionPanel object representing the created panel.
     */
    export function create(
        title: string,
        iconPath: string,
        pagePath: string,
        callback?: (panel: ExtensionPanel) => void,
    ): void;
    /**
     * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter.
     * @param callback A function that is called when the user clicks on a valid resource link in Developer Tools window. Note that if the user clicks an invalid URL or an XHR, this function is not called.
     * Parameter resource: A devtools.inspectedWindow.Resource object for the resource that was clicked.
     */
    export function setOpenResourceHandler(
        callback?: (resource: chrome.devtools.inspectedWindow.Resource) => void,
    ): void;
    /**
     * @since Chrome 38
     * Requests DevTools to open a URL in a Developer Tools panel.
     * @param url The URL of the resource to open.
     * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
     * @param callback A function that is called when the resource has been successfully loaded.
     */
    export function openResource(url: string, lineNumber: number, callback?: () => void): void;
    /**
     * @since Chrome 96
     * Requests DevTools to open a URL in a Developer Tools panel.
     * @param url The URL of the resource to open.
     * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
     * @param columnNumber Specifies the column number to scroll to when the resource is loaded.
     * @param callback A function that is called when the resource has been successfully loaded.
     */
    export function openResource(
        url: string,
        lineNumber: number,
        columnNumber: number,
        callback?: (response: unknown) => unknown,
    ): void;
    /**
     * @since Chrome 59
     * The name of the color theme set in user's DevTools settings.
     */
    export var themeName: "default" | "dark";
}

////////////////////
// Document Scan
////////////////////
/**
 * Use the chrome.documentScan API to discover and retrieve images from attached paper document scanners.
 * @since Chrome 44
 * Permissions:  "documentScan"
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.documentScan {
    export interface DocumentScanOptions {
        /** Optional. The MIME types that are accepted by the caller.  */
        mimeTypes?: string[] | undefined;
        /** Optional. The number of scanned images allowed (defaults to 1).  */
        maxImages?: number | undefined;
    }

    export interface DocumentScanCallbackArg {
        /** The data image URLs in a form that can be passed as the "src" value to an image tag. */
        dataUrls: string[];
        /** The MIME type of dataUrls. */
        mimeType: string;
    }

    /**
     * Performs a document scan. On success, the PNG data will be sent to the callback.
     * @param options object containing scan parameters.
     * @param callback Called with the result and data from the scan.
     */
    export function scan(options: DocumentScanOptions, callback: (result: DocumentScanCallbackArg) => void): void;
}

////////////////////
// DOM
////////////////////
/**
 * Use the chrome.dom API to programmatically access shadow root in an HTMLElement.
 * @since Chrome 88
 */
declare namespace chrome.dom {
    /**
     * @since Chrome 88
     * Requests chrome to return the open/closed shadow roots else return null.
     * @param element reference of HTMLElement.
     */
    export function openOrClosedShadowRoot(element: HTMLElement): ShadowRoot;
}

////////////////////
// Dev Tools - Downloads
////////////////////
/**
 * Use the chrome.downloads API to programmatically initiate, monitor, manipulate, and search for downloads.
 * @since Chrome 31
 * Permissions:  "downloads"
 */
declare namespace chrome.downloads {
    export interface HeaderNameValuePair {
        /** Name of the HTTP header. */
        name: string;
        /** Value of the HTTP header. */
        value: string;
    }

    export type FilenameConflictAction = "uniquify" | "overwrite" | "prompt";

    export interface DownloadOptions {
        /** Optional. Post body.  */
        body?: string | undefined;
        /** Optional. Use a file-chooser to allow the user to select a filename regardless of whether filename is set or already exists.  */
        saveAs?: boolean | undefined;
        /** The URL to download. */
        url: string;
        /** Optional. A file path relative to the Downloads directory to contain the downloaded file, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will cause an error. onDeterminingFilename allows suggesting a filename after the file's MIME type and a tentative filename have been determined.  */
        filename?: string | undefined;
        /** Optional. Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys name and either value or binaryValue, restricted to those allowed by XMLHttpRequest.  */
        headers?: HeaderNameValuePair[] | undefined;
        /** Optional. The HTTP method to use if the URL uses the HTTP[S] protocol.  */
        method?: "GET" | "POST" | undefined;
        /** Optional. The action to take if filename already exists.  */
        conflictAction?: FilenameConflictAction | undefined;
    }

    export interface DownloadDelta {
        /** The id of the DownloadItem that changed. */
        id: number;
        /** Optional. The change in danger, if any.  */
        danger?: StringDelta | undefined;
        /** Optional. The change in url, if any.  */
        url?: StringDelta | undefined;
        /**
         * Optional. The change in finalUrl, if any.
         * @since Chrome 54
         */
        finalUrl?: StringDelta | undefined;
        /** Optional. The change in totalBytes, if any.  */
        totalBytes?: DoubleDelta | undefined;
        /** Optional. The change in filename, if any.  */
        filename?: StringDelta | undefined;
        /** Optional. The change in paused, if any.  */
        paused?: BooleanDelta | undefined;
        /** Optional. The change in state, if any.  */
        state?: StringDelta | undefined;
        /** Optional. The change in mime, if any.  */
        mime?: StringDelta | undefined;
        /** Optional. The change in fileSize, if any.  */
        fileSize?: DoubleDelta | undefined;
        /** Optional. The change in startTime, if any.  */
        startTime?: StringDelta | undefined;
        /** Optional. The change in error, if any.  */
        error?: StringDelta | undefined;
        /** Optional. The change in endTime, if any.  */
        endTime?: StringDelta | undefined;
        /** Optional. The change in canResume, if any.  */
        canResume?: BooleanDelta | undefined;
        /** Optional. The change in exists, if any.  */
        exists?: BooleanDelta | undefined;
    }

    export interface BooleanDelta {
        current?: boolean | undefined;
        previous?: boolean | undefined;
    }

    /** @since Chrome 34 */
    export interface DoubleDelta {
        current?: number | undefined;
        previous?: number | undefined;
    }

    export interface StringDelta {
        current?: string | undefined;
        previous?: string | undefined;
    }

    export type DownloadInterruptReason =
        | "FILE_FAILED"
        | "FILE_ACCESS_DENIED"
        | "FILE_NO_SPACE"
        | "FILE_NAME_TOO_LONG"
        | "FILE_TOO_LARGE"
        | "FILE_VIRUS_INFECTED"
        | "FILE_TRANSIENT_ERROR"
        | "FILE_BLOCKED"
        | "FILE_SECURITY_CHECK_FAILED"
        | "FILE_TOO_SHORT"
        | "FILE_HASH_MISMATCH"
        | "FILE_SAME_AS_SOURCE"
        | "NETWORK_FAILED"
        | "NETWORK_TIMEOUT"
        | "NETWORK_DISCONNECTED"
        | "NETWORK_SERVER_DOWN"
        | "NETWORK_INVALID_REQUEST"
        | "SERVER_FAILED"
        | "SERVER_NO_RANGE"
        | "SERVER_BAD_CONTENT"
        | "SERVER_UNAUTHORIZED"
        | "SERVER_CERT_PROBLEM"
        | "SERVER_FORBIDDEN"
        | "SERVER_UNREACHABLE"
        | "SERVER_CONTENT_LENGTH_MISMATCH"
        | "SERVER_CROSS_ORIGIN_REDIRECT"
        | "USER_CANCELED"
        | "USER_SHUTDOWN"
        | "CRASH";

    export type DownloadState = "in_progress" | "interrupted" | "complete";

    export type DangerType = "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted";

    export interface DownloadItem {
        /** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived: number;
        /** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger: DangerType;
        /** The absolute URL that this download initiated from, before any redirects. */
        url: string;
        /**
         * The absolute URL that this download is being made from, after all redirects.
         * @since Chrome 54
         */
        finalUrl: string;
        /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes: number;
        /** Absolute local path. */
        filename: string;
        /** True if the download has stopped reading data from the host, but kept the connection open. */
        paused: boolean;
        /** Indicates whether the download is progressing, interrupted, or complete. */
        state: DownloadState;
        /** The file's MIME type. */
        mime: string;
        /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
        fileSize: number;
        /** The time when the download began in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){console.log(new Date(item.startTime))})}) */
        startTime: string;
        /** Optional. Why the download was interrupted. Several kinds of HTTP errors may be grouped under one of the errors beginning with SERVER_. Errors relating to the network begin with NETWORK_, errors relating to the process of writing the file to the file system begin with FILE_, and interruptions initiated by the user begin with USER_.  */
        error?: DownloadInterruptReason | undefined;
        /** Optional. The time when the download ended in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.endTime) console.log(new Date(item.endTime))})})  */
        endTime?: string | undefined;
        /** An identifier that is persistent across browser sessions. */
        id: number;
        /** False if this download is recorded in the history, true if it is not recorded. */
        incognito: boolean;
        /** Absolute URL. */
        referrer: string;
        /** Optional. Estimated time when the download will complete in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.estimatedEndTime) console.log(new Date(item.estimatedEndTime))})})  */
        estimatedEndTime?: string | undefined;
        /** True if the download is in progress and paused, or else if it is interrupted and can be resumed starting from where it was interrupted. */
        canResume: boolean;
        /** Whether the downloaded file still exists. This information may be out of date because Chrome does not automatically watch for file removal. Call search() in order to trigger the check for file existence. When the existence check completes, if the file has been deleted, then an onChanged event will fire. Note that search() does not wait for the existence check to finish before returning, so results from search() may not accurately reflect the file system. Also, search() may be called as often as necessary, but will not check for file existence any more frequently than once every 10 seconds. */
        exists: boolean;
        /** Optional. The identifier for the extension that initiated this download if this download was initiated by an extension. Does not change once it is set.  */
        byExtensionId?: string | undefined;
        /** Optional. The localized name of the extension that initiated this download if this download was initiated by an extension. May change if the extension changes its name or if the user changes their locale.  */
        byExtensionName?: string | undefined;
    }

    export interface GetFileIconOptions {
        /** Optional. * The size of the returned icon. The icon will be square with dimensions size * size pixels. The default and largest size for the icon is 32x32 pixels. The only supported sizes are 16 and 32. It is an error to specify any other size.
         */
        size?: 16 | 32 | undefined;
    }

    export interface DownloadQuery {
        /** Optional. Set elements of this array to DownloadItem properties in order to sort search results. For example, setting orderBy=['startTime'] sorts the DownloadItem by their start time in ascending order. To specify descending order, prefix with a hyphen: '-startTime'.  */
        orderBy?: string[] | undefined;
        /** Optional. Limits results to DownloadItem whose url matches the given regular expression.  */
        urlRegex?: string | undefined;
        /** Optional. Limits results to DownloadItem that ended before the time in ISO 8601 format.  */
        endedBefore?: string | undefined;
        /** Optional. Limits results to DownloadItem whose totalBytes is greater than the given integer.  */
        totalBytesGreater?: number | undefined;
        /** Optional. Indication of whether this download is thought to be safe or known to be suspicious.  */
        danger?: string | undefined;
        /** Optional. Number of bytes in the whole file, without considering file compression, or -1 if unknown.  */
        totalBytes?: number | undefined;
        /** Optional. True if the download has stopped reading data from the host, but kept the connection open.  */
        paused?: boolean | undefined;
        /** Optional. Limits results to DownloadItem whose filename matches the given regular expression.  */
        filenameRegex?: string | undefined;
        /** Optional. This array of search terms limits results to DownloadItem whose filename or url contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.  */
        query?: string[] | undefined;
        /** Optional. Limits results to DownloadItem whose totalBytes is less than the given integer.  */
        totalBytesLess?: number | undefined;
        /** Optional. The id of the DownloadItem to query.  */
        id?: number | undefined;
        /** Optional. Number of bytes received so far from the host, without considering file compression.  */
        bytesReceived?: number | undefined;
        /** Optional. Limits results to DownloadItem that ended after the time in ISO 8601 format.  */
        endedAfter?: string | undefined;
        /** Optional. Absolute local path.  */
        filename?: string | undefined;
        /** Optional. Indicates whether the download is progressing, interrupted, or complete.  */
        state?: string | undefined;
        /** Optional. Limits results to DownloadItem that started after the time in ISO 8601 format.  */
        startedAfter?: string | undefined;
        /** Optional. The file's MIME type.  */
        mime?: string | undefined;
        /** Optional. Number of bytes in the whole file post-decompression, or -1 if unknown.  */
        fileSize?: number | undefined;
        /** Optional. The time when the download began in ISO 8601 format.  */
        startTime?: string | undefined;
        /** Optional. Absolute URL.  */
        url?: string | undefined;
        /** Optional. Limits results to DownloadItem that started before the time in ISO 8601 format.  */
        startedBefore?: string | undefined;
        /** Optional. The maximum number of matching DownloadItem returned. Defaults to 1000. Set to 0 in order to return all matching DownloadItem. See search for how to page through results.  */
        limit?: number | undefined;
        /** Optional. Why a download was interrupted.  */
        error?: number | undefined;
        /** Optional. The time when the download ended in ISO 8601 format.  */
        endTime?: string | undefined;
        /** Optional. Whether the downloaded file exists;  */
        exists?: boolean | undefined;
    }

    export interface DownloadFilenameSuggestion {
        /** The DownloadItem's new target DownloadItem.filename, as a path relative to the user's default Downloads directory, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will be ignored. */
        filename: string;
        /** Optional. The action to take if filename already exists.  */
        conflictAction?: string | undefined;
    }

    export interface UiOptions {
        /** Enable or disable the download UI. */
        enabled: boolean;
    }

    export interface DownloadChangedEvent extends chrome.events.Event<(downloadDelta: DownloadDelta) => void> {}

    export interface DownloadCreatedEvent extends chrome.events.Event<(downloadItem: DownloadItem) => void> {}

    export interface DownloadErasedEvent extends chrome.events.Event<(downloadId: number) => void> {}

    export interface DownloadDeterminingFilenameEvent extends
        chrome.events.Event<
            (downloadItem: DownloadItem, suggest: (suggestion?: DownloadFilenameSuggestion) => void) => void
        >
    {}

    /**
     * Find DownloadItem. Set query to the empty object to get all DownloadItem. To get a specific DownloadItem, set only the id field. To page through a large number of items, set orderBy: ['-startTime'], set limit to the number of items per page, and set startedAfter to the startTime of the last item from the last page.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function search(query: DownloadQuery): Promise<DownloadItem[]>;
    /**
     * Find DownloadItem. Set query to the empty object to get all DownloadItem. To get a specific DownloadItem, set only the id field. To page through a large number of items, set orderBy: ['-startTime'], set limit to the number of items per page, and set startedAfter to the startTime of the last item from the last page.
     */
    export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    /**
     * Pause the download. If the request was successful the download is in a paused state. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to pause.
     * @return The `pause` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function pause(downloadId: number): Promise<void>;
    /**
     * Pause the download. If the request was successful the download is in a paused state. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to pause.
     * @param callback Called when the pause request is completed.
     */
    export function pause(downloadId: number, callback: () => void): void;
    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     * @return The `getFileIcon` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getFileIcon(downloadId: number, options?: GetFileIconOptions): Promise<string>;
    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     * @param callback A URL to an image that represents the download.
     */
    export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     * @param callback A URL to an image that represents the download.
     */
    export function getFileIcon(
        downloadId: number,
        options: GetFileIconOptions,
        callback: (iconURL: string) => void,
    ): void;
    /**
     * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to resume.
     * @return The `resume` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function resume(downloadId: number): Promise<void>;
    /**
     * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to resume.
     * @param callback  Called when the resume request is completed.
     */
    export function resume(downloadId: number, callback: () => void): void;
    /**
     * Cancel a download. When callback is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
     * @param downloadId The id of the download to cancel.
     * @return The `cancel` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function cancel(downloadId: number): Promise<void>;
    /**
     * Cancel a download. When callback is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
     * @param downloadId The id of the download to cancel.
     * @param callback Called when the cancel request is completed.
     */
    export function cancel(downloadId: number, callback: () => void): void;
    /**
     * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both filename and saveAs are specified, then the Save As dialog will be displayed, pre-populated with the specified filename. If the download started successfully, callback will be called with the new DownloadItem's downloadId. If there was an error starting the download, then callback will be called with downloadId=undefined and runtime.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
     * @param options What to download and how.
     * @return The `download` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function download(options: DownloadOptions): Promise<number>;
    /**
     * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both filename and saveAs are specified, then the Save As dialog will be displayed, pre-populated with the specified filename. If the download started successfully, callback will be called with the new DownloadItem's downloadId. If there was an error starting the download, then callback will be called with downloadId=undefined and runtime.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
     * @param options What to download and how.
     * @param callback Called with the id of the new DownloadItem.
     */
    export function download(options: DownloadOptions, callback: (downloadId: number) => void): void;
    /**
     * Open the downloaded file now if the DownloadItem is complete; otherwise returns an error through runtime.lastError. Requires the "downloads.open" permission in addition to the "downloads" permission. An onChanged event will fire when the item is opened for the first time.
     * @param downloadId The identifier for the downloaded file.
     */
    export function open(downloadId: number): void;
    /**
     * Show the downloaded file in its folder in a file manager.
     * @param downloadId The identifier for the downloaded file.
     */
    export function show(downloadId: number): void;
    /** Show the default Downloads folder in a file manager. */
    export function showDefaultFolder(): void;
    /**
     * Erase matching DownloadItem from history without deleting the downloaded file. An onErased event will fire for each DownloadItem that matches query, then callback will be called.
     * @return The `erase` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function erase(query: DownloadQuery): Promise<number[]>;
    /**
     * Erase matching DownloadItem from history without deleting the downloaded file. An onErased event will fire for each DownloadItem that matches query, then callback will be called.
     */
    export function erase(query: DownloadQuery, callback: (erasedIds: number[]) => void): void;
    /**
     * Remove the downloaded file if it exists and the DownloadItem is complete; otherwise return an error through runtime.lastError.
     * @return The `removeFile` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeFile(downloadId: number): Promise<void>;
    /**
     * Remove the downloaded file if it exists and the DownloadItem is complete; otherwise return an error through runtime.lastError.
     */
    export function removeFile(downloadId: number, callback?: () => void): void;
    /**
     * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an onChanged event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and onChanged fires.
     * @param downloadId The identifier for the DownloadItem.
     * @return The `acceptDanger` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function acceptDanger(downloadId: number): Promise<void>;
    /**
     * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an onChanged event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and onChanged fires.
     * @param downloadId The identifier for the DownloadItem.
     * @param callback Called when the danger prompt dialog closes.
     */
    export function acceptDanger(downloadId: number, callback: () => void): void;
    /** Initiate dragging the downloaded file to another application. Call in a javascript ondragstart handler. */
    export function drag(downloadId: number): void;
    /** Enable or disable the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it. Enabling the shelf while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.shelf" permission in addition to the "downloads" permission. */
    export function setShelfEnabled(enabled: boolean): void;
    /**
     * Change the download UI of every window associated with the current browser profile. As long as at least one extension has set UiOptions.enabled to false, the download UI will be hidden. Setting UiOptions.enabled to true while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.ui" permission in addition to the "downloads" permission.
     * @param options Encapsulate a change to the download UI.
     * @since Chrome 105
     */
    export function setUiOptions(options: UiOptions): Promise<void>;
    /**
     * Change the download UI of every window associated with the current browser profile. As long as at least one extension has set UiOptions.enabled to false, the download UI will be hidden. Setting UiOptions.enabled to true while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.ui" permission in addition to the "downloads" permission.
     * @param options Encapsulate a change to the download UI.
     * @param callback Called when the setUiOptions request is completed.
     * @since Chrome 105
     */
    export function setUiOptions(options: UiOptions, callback: () => void): void;

    /** When any of a DownloadItem's properties except bytesReceived and estimatedEndTime changes, this event fires with the downloadId and an object containing the properties that changed. */
    export var onChanged: DownloadChangedEvent;
    /** This event fires with the DownloadItem object when a download begins. */
    export var onCreated: DownloadCreatedEvent;
    /** Fires with the downloadId when a download is erased from history. */
    export var onErased: DownloadErasedEvent;
    /** During the filename determination process, extensions will be given the opportunity to override the target DownloadItem.filename. Each extension may not register more than one listener for this event. Each listener must call suggest exactly once, either synchronously or asynchronously. If the listener calls suggest asynchronously, then it must return true. If the listener neither calls suggest synchronously nor returns true, then suggest will be called automatically. The DownloadItem will not complete until all listeners have called suggest. Listeners may call suggest without any arguments in order to allow the download to use downloadItem.filename for its filename, or pass a suggestion object to suggest in order to override the target filename. If more than one extension overrides the filename, then the last extension installed whose listener passes a suggestion object to suggest wins. In order to avoid confusion regarding which extension will win, users should not install extensions that may conflict. If the download is initiated by download and the target filename is known before the MIME type and tentative filename have been determined, pass filename to download instead. */
    export var onDeterminingFilename: DownloadDeterminingFilenameEvent;
}

////////////////////
// Enterprise Platform Keys
////////////////////
/**
 * Use the chrome.enterprise.platformKeys API to generate hardware-backed keys and to install certificates for these keys. The certificates will be managed by the platform and can be used for TLS authentication, network access or by other extension through chrome.platformKeys.
 * @since Chrome 37
 * Permissions:  "enterprise.platformKeys"
 * Important: This API works only on Chrome OS.
 * Note:  This API is only for extensions pre-installed by policy.
 */
declare namespace chrome.enterprise.platformKeys {
    export interface Token {
        /**
         * Uniquely identifies this Token.
         * Static IDs are `user` and `system`, referring to the platform's user-specific and the system-wide hardware token, respectively. Any other tokens (with other identifiers) might be returned by enterprise.platformKeys.getTokens.
         */
        id: string;
        /**
         * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are hardware-backed.
         * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 and ECDSA with namedCurve P-256 can be generated. Each key can be used for signing data at most once.
         * Keys generated on a specific Token cannot be used with any other Tokens, nor can they be used with window.crypto.subtle. Equally, Key objects created with window.crypto.subtle cannot be used with this interface.
         */
        subtleCrypto: SubtleCrypto;
        /**
         * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are software-backed.
         * Protection of the keys, and thus implementation of the non-extractable property, is done in software, so the keys are less protected than hardware-backed keys.
         * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 can be generated. Each key can be used for signing data at most once.
         * Keys generated on a specific Token cannot be used with any other Tokens, nor can they be used with window.crypto.subtle. Equally, Key objects created with window.crypto.subtle cannot be used with this interface.
         * @since Chrome 97
         */
        softwareBackedSubtleCrypto: SubtleCrypto;
    }

    /** @since Chrome 110 */
    export interface ChallengeKeyOptions {
        /**
         * A challenge as emitted by the Verified Access Web API.
         */
        challenge: ArrayBuffer;
        /**
         * Which Enterprise Key to challenge.
         * @since Chrome 110
         */
        scope: `${Scope}`;
        /**
         * If present, registers the challenged key with the specified scope's token.
         * The key can then be associated with a certificate and used like any other signing key.
         * Subsequent calls to this function will then generate a new Enterprise Key in the specified scope.
         */
        registerKey?: RegisterKeyOptions | undefined;
    }

    /** @since Chrome 110 */
    export interface RegisterKeyOptions {
        /**
         * Which algorithm the registered key should use.
         */
        algorithm: `${Algorithm}`;
    }

    /**
     * Type of key to generate.
     * @since Chrome 110
     */
    export enum Algorithm {
        ECDSA = "ECDSA",
        RSA = "RSA",
    }

    /**
     * Whether to use the Enterprise User Key or the Enterprise Machine Key.
     * @since Chrome 110
     */
    export enum Scope {
        USER = "USER",
        MACHINE = "MACHINE",
    }

    /**
     * Returns the available Tokens. In a regular user's session the list will always contain the user's token with id "user". If a system-wide TPM token is available, the returned list will also contain the system-wide token with id "system". The system-wide token will be the same for all sessions on this device (device in the sense of e.g. a Chromebook).
     * @param callback Invoked by getTokens with the list of available Tokens.
     * Parameter tokens: The list of available tokens.
     */
    export function getTokens(callback: (tokens: Token[]) => void): void;

    /**
     * Returns the list of all client certificates available from the given token. Can be used to check for the existence and expiration of client certificates that are usable for a certain authentication.
     * @param tokenId The id of a Token returned by getTokens.
     * @param callback Called back with the list of the available certificates.
     * Parameter certificates: The list of certificates, each in DER encoding of a X.509 certificate.
     */
    export function getCertificates(tokenId: string, callback: (certificates: ArrayBuffer[]) => void): void;

    /**
     * Imports certificate to the given token if the certified key is already stored in this token. After a successful certification request, this function should be used to store the obtained certificate and to make it available to the operating system and browser for authentication.
     * @param tokenId The id of a Token returned by getTokens.
     * @param certificate The DER encoding of a X.509 certificate.
     * @param callback Called back when this operation is finished.
     */
    export function importCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;

    /**
     * Removes certificate from the given token if present. Should be used to remove obsolete certificates so that they are not considered during authentication and do not clutter the certificate choice. Should be used to free storage in the certificate store.
     * @param tokenId The id of a Token returned by getTokens.
     * @param certificate The DER encoding of a X.509 certificate.
     * @param callback Called back when this operation is finished.
     */
    export function removeCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;

    /**
     * Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol. Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
     *
     * * The current device is a legitimate Chrome OS device.
     * * The current device is managed by the domain specified during verification.
     * * The current signed-in user is managed by the domain specified during verification.
     * * The current device state complies with enterprise device policy. For example, a policy may specify that the device must not be in developer mode.
     * * Any device identity emitted by the verification is tightly bound to the hardware of the current device.
     *
     * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise device policy. The Enterprise Machine Key does not reside in the "system" token and is not accessible by any other API.
     * @param options object containing the fields defined in ChallengeKeyOptions.
     * @param callback Called back with the challenge response.
     * @since Chrome 110
     */
    export function challengeKey(options: ChallengeKeyOptions, callback: (response: ArrayBuffer) => void): void;

    /**
     * @deprecated Deprecated since Chrome 110, use enterprise.platformKeys.challengeKey instead.
     *
     * Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol. Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
     *
     * * The current device is a legitimate Chrome OS device.
     * * The current device is managed by the domain specified during verification.
     * * The current signed-in user is managed by the domain specified during verification.
     * * The current device state complies with enterprise device policy. For example, a policy may specify that the device must not be in developer mode.
     * * Any device identity emitted by the verification is tightly bound to the hardware of the current device.
     *
     * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise device policy. The Enterprise Machine Key does not reside in the "system" token and is not accessible by any other API.
     * @param challenge A challenge as emitted by the Verified Access Web API.
     * @param registerKey If set, the current Enterprise Machine Key is registered with the "system" token and relinquishes the Enterprise Machine Key role. The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise Machine Key. Since Chrome 59.
     * @param callback Called back with the challenge response.
     * @since Chrome 50
     */

    export function challengeMachineKey(
        challenge: ArrayBuffer,
        registerKey: boolean,
        callback: (response: ArrayBuffer) => void,
    ): void;

    export function challengeMachineKey(challenge: ArrayBuffer, callback: (response: ArrayBuffer) => void): void;
    /**
     * @deprecated Deprecated since Chrome 110, use enterprise.platformKeys.challengeKey instead.
     *
     * Challenges a hardware-backed Enterprise User Key and emits the response as part of a remote attestation protocol. Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
     *
     * * The current device is a legitimate Chrome OS device.
     * * The current device is managed by the domain specified during verification.
     * * The current signed-in user is managed by the domain specified during verification.
     * * The current device state complies with enterprise user policy. For example, a policy may specify that the device must not be in developer mode.
     * * The public key emitted by the verification is tightly bound to the hardware of the current device and to the current signed-in user.
     *
     * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise user policy. The Enterprise User Key does not reside in the "user" token and is not accessible by any other API.
     * @param challenge A challenge as emitted by the Verified Access Web API.
     * @param registerKey If set, the current Enterprise User Key is registered with the "user" token and relinquishes the Enterprise User Key role. The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise User Key.
     * @param callback Called back with the challenge response.
     * @since Chrome 50
     */

    export function challengeUserKey(
        challenge: ArrayBuffer,
        registerKey: boolean,
        callback: (response: ArrayBuffer) => void,
    ): void;
}

////////////////////
// Enterprise Device Attributes
////////////////////
/**
 * Use the <code>chrome.enterprise.deviceAttributes</code> API to read device attributes.
 * Permissions:  "enterprise.deviceAttributes"
 * @since Chrome 46
 * Important: This API works only on Chrome OS.
 * Note: This API is only for extensions pre-installed by policy.
 */
declare namespace chrome.enterprise.deviceAttributes {
    /**
     * @description Fetches the value of the device identifier of the directory API, that is generated by the server and identifies the cloud record of the device for querying in the cloud directory API.
     * @param callback Called with the device identifier of the directory API when received.
     */
    export function getDirectoryDeviceId(callback: (deviceId: string) => void): void;
    /**
     * @since Chrome 66
     * @description
     * Fetches the device's serial number.
     * Please note the purpose of this API is to administrate the device
     * (e.g. generating Certificate Sign Requests for device-wide certificates).
     * This API may not be used for tracking devices without the consent of the device's administrator.
     * If the current user is not affiliated, returns an empty string.
     * @param callback Called with the serial number of the device.
     */
    export function getDeviceSerialNumber(callback: (serialNumber: string) => void): void;
    /**
     * @since Chrome 66
     * @description
     * Fetches the administrator-annotated Asset Id.
     * If the current user is not affiliated or no Asset Id has been set by the administrator, returns an empty string.
     * @param callback Called with the Asset ID of the device.
     */
    export function getDeviceAssetId(callback: (assetId: string) => void): void;
    /**
     * @since Chrome 66
     * @description
     * Fetches the administrator-annotated Location.
     * If the current user is not affiliated or no Annotated Location has been set by the administrator, returns an empty string.
     * @param callback Called with the Annotated Location of the device.
     */
    export function getDeviceAnnotatedLocation(callback: (annotatedLocation: string) => void): void;
    /**
     * @since Chrome 82
     * @description
     * Fetches the device's hostname as set by DeviceHostnameTemplate policy.
     * If the current user is not affiliated or no hostname has been set by the enterprise policy, returns an empty string.
     * @param callback Called with the hostname of the device.
     */
    export function getDeviceHostname(callback: (hostname: string) => void): void;
}

////////////////////
// Enterprise Hardware Platform
////////////////////
/**
 * Use the chrome.enterprise.hardwarePlatform API to get the manufacturer and model of the hardware platform where the browser runs.
 *
 * Permissions: "enterprise.hardwarePlatform"
 *
 * Note: This API is only for extensions pre-installed by policy.
 * @platform ChromeOS only
 * @since Chrome 71
 */
declare namespace chrome.enterprise.hardwarePlatform {
    export interface HardwarePlatformInfo {
        manufacturer: string;
        model: string;
    }

    /**
     * Obtains the manufacturer and model for the hardware platform and, if the extension is authorized, returns it via callback.
     * Can return its result via Promise in Manifest V3 or later since Chrome 96.
     */
    export function getHardwarePlatformInfo(): Promise<HardwarePlatformInfo>;
    export function getHardwarePlatformInfo(callback: (info: HardwarePlatformInfo) => void): void;
}

////////////////////
// Enterprise Networking Attributes
////////////////////
/**
 * Use the <code>chrome.enterprise.networkingAttributes</code> API to read information about your current network. Note: This API is only available to extensions force-installed by enterprise policy.
 * Important: This API works only on Chrome OS.
 * @since Chrome 85
 */
declare namespace chrome.enterprise.networkingAttributes {
    export interface NetworkDetails {
        /** The device's MAC address. */
        macAddress: string;
        /** Optional. The device's local IPv4 address (undefined if not configured). */
        ipv4?: string | undefined;
        /** Optional. The device's local IPv6 address (undefined if not configured). */
        ipv6?: string | undefined;
    }

    /**
     * Retrieves the network details of the device's default network. If the user is not affiliated or the device is not connected to a network, runtime.lastError will be set with a failure reason.
     * @param callback Called with the device's default network's NetworkDetails.
     */
    export function getNetworkDetails(callback: (networkDetails: NetworkDetails) => void): void;
}

////////////////////
// Events
////////////////////
/**
 * The chrome.events namespace contains common types used by APIs dispatching events to notify you when something interesting happens.
 * @since Chrome 21
 */
declare namespace chrome.events {
    /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    export interface UrlFilter {
        /** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
        schemes?: string[] | undefined;
        /**
         * Optional.
         * @since Chrome 23
         * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
         */
        urlMatches?: string | undefined;
        /** Optional. Matches if the path segment of the URL contains a specified string.  */
        pathContains?: string | undefined;
        /** Optional. Matches if the host name of the URL ends with a specified string.  */
        hostSuffix?: string | undefined;
        /** Optional. Matches if the host name of the URL starts with a specified string.  */
        hostPrefix?: string | undefined;
        /** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
        hostContains?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlContains?: string | undefined;
        /** Optional. Matches if the query segment of the URL ends with a specified string.  */
        querySuffix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlPrefix?: string | undefined;
        /** Optional. Matches if the host name of the URL is equal to a specified string.  */
        hostEquals?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlEquals?: string | undefined;
        /** Optional. Matches if the query segment of the URL contains a specified string.  */
        queryContains?: string | undefined;
        /** Optional. Matches if the path segment of the URL starts with a specified string.  */
        pathPrefix?: string | undefined;
        /** Optional. Matches if the path segment of the URL is equal to a specified string.  */
        pathEquals?: string | undefined;
        /** Optional. Matches if the path segment of the URL ends with a specified string.  */
        pathSuffix?: string | undefined;
        /** Optional. Matches if the query segment of the URL is equal to a specified string.  */
        queryEquals?: string | undefined;
        /** Optional. Matches if the query segment of the URL starts with a specified string.  */
        queryPrefix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlSuffix?: string | undefined;
        /** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
        ports?: Array<number | number[]> | undefined;
        /**
         * Optional.
         * @since Chrome 28
         * Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
         */
        originAndPathMatches?: string | undefined;
    }

    export interface BaseEvent<T extends Function> {
        addListener(callback: T, filter?: webRequest.RequestFilter): void;
        /**
         * Returns currently registered rules.
         * @param callback Called with registered rules.
         */
        getRules(
            callback: (
                /** Rules that were registered, the optional parameters are filled with values */
                rules: Rule[],
            ) => void,
        ): void;
        /**
         * Returns currently registered rules.
         * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
         * @param callback Called with registered rules.
         */
        getRules(
            ruleIdentifiers: string[],
            callback: (
                /** Rules that were registered, the optional parameters are filled with values */
                rules: Rule[],
            ) => void,
        ): void;
        /**
         * @param callback Listener whose registration status shall be tested.
         */
        hasListener(callback: T): boolean;
        /**
         * Unregisters currently registered rules.
         * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
         * @param callback Called when rules were unregistered.
         */
        removeRules(ruleIdentifiers?: string[], callback?: () => void): void;
        /**
         * Unregisters currently registered rules.
         * @param callback Called when rules were unregistered.
         */
        removeRules(callback?: () => void): void;
        /**
         * Registers rules to handle events.
         * @param rules Rules to be registered. These do not replace previously registered rules.
         * @param callback Called with registered rules.
         */
        addRules(
            rules: Rule[],
            callback?: (
                /** Rules that were registered, the optional parameters are filled with values */
                rules: Rule[],
            ) => void,
        ): void;
        /**
         * Deregisters an event listener callback from an event.
         * @param callback Listener that shall be unregistered.
         */
        removeListener(callback: T): void;
        hasListeners(): boolean;
    }

    /** An object which allows the addition and removal of listeners for a Chrome event. */
    interface Event<T extends Function> extends BaseEvent<T> {
        /**
         * Registers an event listener callback to an event.
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         */
        addListener(callback: T): void;
    }
    export interface EventWithRequiredFilterInAddListener<T extends Function> extends BaseEvent<T> {
        addListener(callback: T, filter: webRequest.RequestFilter): void;
    }

    /** Description of a declarative rule for handling events. */
    export interface Rule {
        /** Optional. Optional priority of this rule. Defaults to 100.  */
        priority?: number | undefined;
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** Optional. Optional identifier that allows referencing this rule.  */
        id?: string | undefined;
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /**
         * Optional.
         * @since Chrome 28
         * Tags can be used to annotate rules and perform operations on sets of rules.
         */
        tags?: string[] | undefined;
    }
}

////////////////////
// Extension
////////////////////
/**
 * The chrome.extension API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing.
 * @since Chrome 5
 */
declare namespace chrome.extension {
    export interface FetchProperties {
        /**
         * Optional.
         * Chrome 54+
         * Find a view according to a tab id. If this field is omitted, returns all views.
         */
        tabId?: number | undefined;
        /** Optional. The window to restrict the search to. If omitted, returns all views.  */
        windowId?: number | undefined;
        /** Optional. The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'notification', 'popup'.  */
        type?: string | undefined;
    }

    export interface LastError {
        /** Description of the error that has taken place. */
        message: string;
    }

    export interface OnRequestEvent extends
        chrome.events.Event<
            | ((request: any, sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
            | ((sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
        >
    {}

    /**
     * @since Chrome 7
     * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior.
     */
    export var inIncognitoContext: boolean;
    /** Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occurred lastError will be undefined. */
    export var lastError: LastError;

    /** Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page. */
    export function getBackgroundPage(): Window | null;
    /**
     * Converts a relative path within an extension install directory to a fully-qualified URL.
     * @param path A path to a resource within an extension expressed relative to its install directory.
     */
    export function getURL(path: string): string;
    /**
     * Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions that are hosted in the Chrome Extension Gallery.
     * @since Chrome 9
     */
    export function setUpdateUrlData(data: string): void;
    /** Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension. */
    export function getViews(fetchProperties?: FetchProperties): Window[];
    /**
     * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
     * @since Chrome 12
     * @return The `isAllowedFileSchemeAccess` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function isAllowedFileSchemeAccess(): Promise<boolean>;
    /**
     * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
     * @since Chrome 12
     * Parameter isAllowedAccess: True if the extension can access the 'file://' scheme, false otherwise.
     */
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
    /**
     * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
     * @since Chrome 12
     * @return The `isAllowedIncognitoAccess` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function isAllowedIncognitoAccess(): Promise<boolean>;
    /**
     * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
     * @since Chrome 12
     * Parameter isAllowedAccess: True if the extension has access to Incognito mode, false otherwise.
     */
    export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;
    /**
     * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension.
     * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
     * @param extensionId The extension ID of the extension you want to connect to. If omitted, default is your own extension.
     * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this:
     * function(any response) {...};
     * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendRequest<Request = any, Response = any>(
        extensionId: string,
        request: Request,
        responseCallback?: (response: Response) => void,
    ): void;
    /**
     * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension.
     * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
     * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this:
     * function(any response) {...};
     * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendRequest<Request = any, Response = any>(
        request: Request,
        responseCallback?: (response: Response) => void,
    ): void;
    /**
     * Returns an array of the JavaScript 'window' objects for each of the tabs running inside the current extension. If windowId is specified, returns only the 'window' objects of tabs attached to the specified window.
     * @deprecated Deprecated since Chrome 33. Please use extension.getViews {type: "tab"}.
     */
    export function getExtensionTabs(windowId?: number): Window[];

    /**
     * Fired when a request is sent from either an extension process or a content script.
     * @deprecated Deprecated since Chrome 33. Please use runtime.onMessage.
     */
    export var onRequest: OnRequestEvent;
    /**
     * Fired when a request is sent from another extension.
     * @deprecated Deprecated since Chrome 33. Please use runtime.onMessageExternal.
     */
    export var onRequestExternal: OnRequestEvent;
}

////////////////////
// File Browser Handler
////////////////////
/**
 * Use the chrome.fileBrowserHandler API to extend the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website.
 * @since Chrome 12
 * Permissions:  "fileBrowserHandler"
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.fileBrowserHandler {
    export interface SelectionParams {
        /**
         * Optional.
         * List of file extensions that the selected file can have. The list is also used to specify what files to be shown in the select file dialog. Files with the listed extensions are only shown in the dialog. Extensions should not include the leading '.'. Example: ['jpg', 'png']
         * @since Chrome 23
         */
        allowedFileExtensions?: string[] | undefined;
        /** Suggested name for the file. */
        suggestedName: string;
    }

    export interface SelectionResult {
        /** Optional. Selected file entry. It will be null if a file hasn't been selected.  */
        entry?: object | null | undefined;
        /** Whether the file has been selected. */
        success: boolean;
    }

    /** Event details payload for fileBrowserHandler.onExecute event. */
    export interface FileHandlerExecuteEventDetails {
        /** Optional. The ID of the tab that raised this event. Tab IDs are unique within a browser session.  */
        tab_id?: number | undefined;
        /** Array of Entry instances representing files that are targets of this action (selected in ChromeOS file browser). */
        entries: any[];
    }

    export interface FileBrowserHandlerExecuteEvent
        extends chrome.events.Event<(id: string, details: FileHandlerExecuteEventDetails) => void>
    {}

    /**
     * Prompts user to select file path under which file should be saved. When the file is selected, file access permission required to use the file (read, write and create) are granted to the caller. The file will not actually get created during the function call, so function caller must ensure its existence before using it. The function has to be invoked with a user gesture.
     * @since Chrome 21
     * @param selectionParams Parameters that will be used while selecting the file.
     * @param callback Function called upon completion.
     * Parameter result: Result of the method.
     */
    export function selectFile(selectionParams: SelectionParams, callback: (result: SelectionResult) => void): void;

    /** Fired when file system action is executed from ChromeOS file browser. */
    export var onExecute: FileBrowserHandlerExecuteEvent;
}

////////////////////
// File System Provider
////////////////////
/**
 * Use the chrome.fileSystemProvider API to create file systems, that can be accessible from the file manager on Chrome OS.
 * @since Chrome 40
 * Permissions:  "fileSystemProvider"
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.fileSystemProvider {
    export interface OpenedFileInfo {
        /** A request ID to be be used by consecutive read/write and close requests. */
        openRequestId: number;
        /** The path of the opened file. */
        filePath: string;
        /** Whether the file was opened for reading or writing. */
        mode: string;
    }

    export interface FileWatchersInfo {
        /** The path of the entry being observed. */
        entryPath: string;
        /** Whether watching should include all child entries recursively. It can be true for directories only. */
        recursive: boolean;
        /** Optional. Tag used by the last notification for the watcher.  */
        lastTag?: string | undefined;
    }

    export interface CloudIdentifier {
        /** Identifier for the cloud storage provider (e.g. 'drive.google.com'). */
        providerName: string;
        /** The provider's identifier for the given file/directory. */
        id: string;
    }

    export interface CloudFileInfo {
        /** A tag that represents the version of the file. */
        versionTag?: string | undefined;
    }

    export interface EntryMetadata {
        /** True if it is a directory. Must be provided if requested in `options`. */
        isDirectory?: boolean;
        /** Name of this entry (not full path name). Must not contain '/'. For root it must be empty. Must be provided if requested in `options`. */
        name?: string;
        /** File size in bytes. Must be provided if requested in `options`. */
        size?: number;
        /** The last modified time of this entry. Must be provided if requested in `options`. */
        modificationTime?: Date;
        /** Optional. Mime type for the entry. Always optional, but should provided if requested in `options`. */
        mimeType?: string | undefined;
        /** Optional. Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32 KB in size. Optional, but can be provided only when explicitly requested by the onGetMetadataRequested event. */
        thumbnail?: string | undefined;
        /** Optional. Cloud storage representation of this entry. Must be provided if requested in `options` and the file is backed by cloud storage. For local files not backed by cloud storage, it should be undefined when requested. */
        cloudIdentifier?: CloudIdentifier | undefined;
        /** Optional. Information that identifies a specific file in the underlying cloud file system. Must be provided if requested in `options` and the file is backed by cloud storage. */
        cloudFileInfo?: CloudFileInfo | undefined;
    }

    export interface FileSystemInfo {
        /** The identifier of the file system. */
        fileSystemId: string;
        /** A human-readable name for the file system. */
        displayName: string;
        /** Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files). */
        writable: boolean;
        /**
         * The maximum number of files that can be opened at once. If 0, then not limited.
         * @since Chrome 42
         */
        openedFilesLimit: number;
        /**
         * List of currently opened files.
         * @since Chrome 42
         */
        openedFiles: OpenedFileInfo[];
        /**
         * Optional.
         * Whether the file system supports the tag field for observing directories.
         * @since Chrome 45
         */
        supportsNotifyTag?: boolean | undefined;
        /**
         * List of watchers.
         * @since Chrome 45
         */
        watchers: FileWatchersInfo[];
    }

    /** @since Chrome 45 */
    export interface GetActionsRequestedOptions {
        /** The identifier of the file system related to this operation. */
        fileSystemId: string;
        /** The unique identifier of this request. */
        requestId: number;
        /** List of paths of entries for the list of actions. */
        entryPaths: string[];
    }

    /** @since Chrome 45 */
    export interface Action {
        /** The identifier of the action. Any string or CommonActionId for common actions. */
        id: string;
        /** Optional. The title of the action. It may be ignored for common actions.  */
        title?: string | undefined;
    }

    /** @since Chrome 45 */
    export interface ExecuteActionRequestedOptions {
        /** The identifier of the file system related to this operation. */
        fileSystemId: string;
        /** The unique identifier of this request. */
        requestId: number;
        /** The set of paths of the entries to be used for the action. */
        entryPaths: string[];
        /** The identifier of the action to be executed. */
        actionId: string;
    }

    export interface MountOptions {
        /** The string identifier of the file system. Must be unique per each extension. */
        fileSystemId: string;
        /** A human-readable name for the file system. */
        displayName: string;
        /** Optional. Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files).  */
        writable?: boolean | undefined;
        /**
         * Optional.
         * The maximum number of files that can be opened at once. If not specified, or 0, then not limited.
         * @since Chrome 41
         */
        openedFilesLimit?: number | undefined;
        /**
         * Optional.
         * Whether the file system supports the tag field for observed directories.
         * @since Chrome 45
         */
        supportsNotifyTag?: boolean | undefined;
    }

    export interface UnmountOptions {
        /** The identifier of the file system to be unmounted. */
        fileSystemId: string;
    }

    export interface NotificationChange {
        /** The path of the changed entry. */
        entryPath: string;
        /** The type of the change which happened to the entry. */
        changeType: string;
        /** Information relating to the file if backed by a cloud file system. */
        cloudFileInfo?: CloudFileInfo | undefined;
    }

    export interface NotificationOptions {
        /** The identifier of the file system related to this change. */
        fileSystemId: string;
        /** The path of the observed entry. */
        observedPath: string;
        /** Mode of the observed entry. */
        recursive: boolean;
        /** The type of the change which happened to the observed entry. If it is DELETED, then the observed entry will be automatically removed from the list of observed entries. */
        changeType: string;
        /** Optional. List of changes to entries within the observed directory (including the entry itself)  */
        changes?: NotificationChange[] | undefined;
        /** Optional. Tag for the notification. Required if the file system was mounted with the supportsNotifyTag option. Note, that this flag is necessary to provide notifications about changes which changed even when the system was shutdown.  */
        tag?: string | undefined;
    }

    export interface RequestedEventOptions {
        /** The identifier of the file system related to this operation. */
        fileSystemId: string;
        /** The unique identifier of this request. */
        requestId: number;
    }

    export interface EntryPathRequestedEventOptions extends RequestedEventOptions {
        /** The path of the entry to which this operation is related to. */
        entryPath: string;
    }

    export interface MetadataRequestedEventOptions extends EntryPathRequestedEventOptions {
        /** Set to true if `is_directory` value is requested. */
        isDirectory: boolean;
        /** Set to true if `name` value is requested. */
        name: boolean;
        /** Set to true if `size` value is requested. */
        size: boolean;
        /** Set to true if `modificationTime` value is requested. */
        modificationTime: boolean;
        /** Set to true if `mimeType` value is requested. */
        mimeType: boolean;
        /** Set to true if `thumbnail` is requested. */
        thumbnail: boolean;
        /** Set to true if `cloudIdentifier` is requested. */
        cloudIdentifier: boolean;
        /** Set to true if `cloudFileInfo` is requested. */
        cloudFileInfo: boolean;
    }

    export interface DirectoryPathRequestedEventOptions extends RequestedEventOptions {
        /** The path of the directory which is to be operated on. */
        directoryPath: string;
        /** Set to true if `is_directory` value is requested. */
        isDirectory: boolean;
        /** Set to true if `name` value is requested. */
        name: boolean;
        /** Set to true if `size` value is requested. */
        size: boolean;
        /** Set to true if `modificationTime` value is requested. */
        modificationTime: boolean;
        /** Set to true if `mimeType` value is requested. */
        mimeType: boolean;
        /** Set to true if `thumbnail` is requested. */
        thumbnail: boolean;
    }

    export interface FilePathRequestedEventOptions extends RequestedEventOptions {
        /** The path of the entry for the operation */
        filePath: string;
    }

    export interface OpenFileRequestedEventOptions extends FilePathRequestedEventOptions {
        /** Whether the file will be used for reading or writing. */
        mode: string;
    }

    export interface OpenedFileRequestedEventOptions extends RequestedEventOptions {
        /** A request ID used to open the file. */
        openRequestId: number;
    }

    export interface OpenedFileOffsetRequestedEventOptions extends OpenedFileRequestedEventOptions {
        /** Position in the file (in bytes) to start reading from. */
        offset: number;
        /** Number of bytes to be returned. */
        length: number;
    }

    export interface CreateDirectoryRequestedEventOptions extends RequestedEventOptions {
        /** The path of the directory to be created. */
        directoryPath: string;

        /** Whether the operation is recursive (for directories only). */
        recursive: boolean;
    }

    export interface EntryPathRecursiveRequestedEventOptions extends EntryPathRequestedEventOptions {
        /** Whether the operation is recursive (for directories only). */
        recursive: boolean;
    }

    export interface SourceTargetPathRequestedEventOptions extends RequestedEventOptions {
        /** The source path for the operation. */
        sourcePath: string;
        /** The destination path for the operation. */
        targetPath: string;
    }

    export interface FilePathLengthRequestedEventOptions extends FilePathRequestedEventOptions {
        /** Number of bytes to be retained after the operation completes. */
        length: number;
    }

    export interface OpenedFileIoRequestedEventOptions extends OpenedFileRequestedEventOptions {
        /** Position in the file (in bytes) to start operating from. */
        offset: number;
        /** Buffer of bytes to be operated on the file. */
        data: ArrayBuffer;
    }

    export interface OperationRequestedEventOptions extends RequestedEventOptions {
        /** An ID of the request to which this operation is related. */
        operationRequestId: number;
    }

    export interface RequestedEvent extends
        chrome.events.Event<
            (options: RequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void
        >
    {}

    export interface MetadataRequestedEvent extends
        chrome.events.Event<
            (
                options: MetadataRequestedEventOptions,
                successCallback: (metadata: EntryMetadata) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface DirectoryPathRequestedEvent extends
        chrome.events.Event<
            (
                options: DirectoryPathRequestedEventOptions,
                successCallback: (entries: EntryMetadata[], hasMore: boolean) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenFileRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenFileRequestedEventOptions,
                successCallback: (metadata?: EntryMetadata) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenedFileRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenedFileRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenedFileOffsetRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenedFileOffsetRequestedEventOptions,
                successCallback: (data: ArrayBuffer, hasMore: boolean) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface CreateDirectoryRequestedEvent extends
        chrome.events.Event<
            (
                options: CreateDirectoryRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface EntryPathRecursiveRequestedEvent extends
        chrome.events.Event<
            (
                options: EntryPathRecursiveRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface FilePathRequestedEvent extends
        chrome.events.Event<
            (
                options: FilePathRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface SourceTargetPathRequestedEvent extends
        chrome.events.Event<
            (
                options: SourceTargetPathRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface FilePathLengthRequestedEvent extends
        chrome.events.Event<
            (
                options: FilePathLengthRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenedFileIoRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenedFileIoRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OperationRequestedEvent extends
        chrome.events.Event<
            (
                options: OperationRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OptionlessRequestedEvent
        extends chrome.events.Event<(successCallback: Function, errorCallback: (error: string) => void) => void>
    {}

    export interface GetActionsRequested extends
        chrome.events.Event<
            (
                options: GetActionsRequestedOptions,
                successCallback: (actions: Action[]) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface ExecuteActionRequested extends
        chrome.events.Event<
            (
                options: ExecuteActionRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    /**
     * Mounts a file system with the given fileSystemId and displayName. displayName will be shown in the left panel of Files.app. displayName can contain any characters including '/', but cannot be an empty string. displayName must be descriptive but doesn't have to be unique. The fileSystemId must not be an empty string.
     * Depending on the type of the file system being mounted, the source option must be set appropriately.
     * In case of an error, runtime.lastError will be set with a corresponding error code.
     * @param callback A generic result callback to indicate success or failure.
     */
    export function mount(options: MountOptions, callback?: () => void): void;
    /**
     * Unmounts a file system with the given fileSystemId. It must be called after onUnmountRequested is invoked. Also, the providing extension can decide to perform unmounting if not requested (eg. in case of lost connection, or a file error).
     * In case of an error, runtime.lastError will be set with a corresponding error code.
     * @param callback A generic result callback to indicate success or failure.
     */
    export function unmount(options: UnmountOptions, callback?: () => void): void;
    /**
     * Returns all file systems mounted by the extension.
     * @param callback Callback to receive the result of getAll function.
     */
    export function getAll(callback: (fileSystems: FileSystemInfo[]) => void): void;
    /**
     * Returns information about a file system with the passed fileSystemId.
     * @since Chrome 42
     * @param callback Callback to receive the result of get function.
     */
    export function get(fileSystemId: string, callback: (fileSystem: FileSystemInfo) => void): void;
    /**
     * Notifies about changes in the watched directory at observedPath in recursive mode. If the file system is mounted with supportsNofityTag, then tag must be provided, and all changes since the last notification always reported, even if the system was shutdown. The last tag can be obtained with getAll.
     * To use, the file_system_provider.notify manifest option must be set to true.
     * Value of tag can be any string which is unique per call, so it's possible to identify the last registered notification. Eg. if the providing extension starts after a reboot, and the last registered notification's tag is equal to "123", then it should call notify for all changes which happened since the change tagged as "123". It cannot be an empty string.
     * Not all providers are able to provide a tag, but if the file system has a changelog, then the tag can be eg. a change number, or a revision number.
     * Note that if a parent directory is removed, then all descendant entries are also removed, and if they are watched, then the API must be notified about the fact. Also, if a directory is renamed, then all descendant entries are in fact removed, as there is no entry under their original paths anymore.
     * In case of an error, runtime.lastError will be set will a corresponding error code.
     * @param callback A generic result callback to indicate success or failure.
     */
    export function notify(options: NotificationOptions, callback: () => void): void;

    /** Raised when unmounting for the file system with the fileSystemId identifier is requested. In the response, the unmount API method must be called together with successCallback. If unmounting is not possible (eg. due to a pending operation), then errorCallback must be called.  */
    export var onUnmountRequested: RequestedEvent;
    /** Raised when metadata of a file or a directory at entryPath is requested. The metadata must be returned with the successCallback call. In case of an error, errorCallback must be called. */
    export var onGetMetadataRequested: MetadataRequestedEvent;
    /** Raised when contents of a directory at directoryPath are requested. The results must be returned in chunks by calling the successCallback several times. In case of an error, errorCallback must be called. */
    export var onReadDirectoryRequested: DirectoryPathRequestedEvent;
    /** Raised when opening a file at filePath is requested. If the file does not exist, then the operation must fail. Maximum number of files opened at once can be specified with MountOptions. */
    export var onOpenFileRequested: OpenFileRequestedEvent;
    /** Raised when opening a file previously opened with openRequestId is requested to be closed. */
    export var onCloseFileRequested: OpenedFileRequestedEvent;
    /** Raised when reading contents of a file opened previously with openRequestId is requested. The results must be returned in chunks by calling successCallback several times. In case of an error, errorCallback must be called. */
    export var onReadFileRequested: OpenedFileOffsetRequestedEvent;
    /** Raised when creating a directory is requested. The operation must fail with the EXISTS error if the target directory already exists. If recursive is true, then all of the missing directories on the directory path must be created. */
    export var onCreateDirectoryRequested: CreateDirectoryRequestedEvent;
    /** Raised when deleting an entry is requested. If recursive is true, and the entry is a directory, then all of the entries inside must be recursively deleted as well. */
    export var onDeleteEntryRequested: EntryPathRecursiveRequestedEvent;
    /** Raised when creating a file is requested. If the file already exists, then errorCallback must be called with the "EXISTS" error code. */
    export var onCreateFileRequested: FilePathRequestedEvent;
    /** Raised when copying an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called. */
    export var onCopyEntryRequested: SourceTargetPathRequestedEvent;
    /** Raised when moving an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called. */
    export var onMoveEntryRequested: SourceTargetPathRequestedEvent;
    /** Raised when truncating a file to a desired length is requested. If an error occurs, then errorCallback must be called. */
    export var onTruncateRequested: FilePathLengthRequestedEvent;
    /** Raised when writing contents to a file opened previously with openRequestId is requested. */
    export var onWriteFileRequested: OpenedFileIoRequestedEvent;
    /** Raised when aborting an operation with operationRequestId is requested. The operation executed with operationRequestId must be immediately stopped and successCallback of this abort request executed. If aborting fails, then errorCallback must be called. Note, that callbacks of the aborted operation must not be called, as they will be ignored. Despite calling errorCallback, the request may be forcibly aborted. */
    export var onAbortRequested: OperationRequestedEvent;
    /**
     * Raised when showing a configuration dialog for fileSystemId is requested. If it's handled, the file_system_provider.configurable manfiest option must be set to true.
     * @since Chrome 44
     */
    export var onConfigureRequested: RequestedEvent;
    /**
     * Raised when showing a dialog for mounting a new file system is requested. If the extension/app is a file handler, then this event shouldn't be handled. Instead app.runtime.onLaunched should be handled in order to mount new file systems when a file is opened. For multiple mounts, the file_system_provider.multiple_mounts manifest option must be set to true.
     * @since Chrome 44
     */
    export var onMountRequested: OptionlessRequestedEvent;
    /**
     * Raised when setting a new directory watcher is requested. If an error occurs, then errorCallback must be called.
     * @since Chrome 45
     */
    export var onAddWatcherRequested: EntryPathRecursiveRequestedEvent;
    /**
     * Raised when the watcher should be removed. If an error occurs, then errorCallback must be called.
     * @since Chrome 45
     */
    export var onRemoveWatcherRequested: EntryPathRecursiveRequestedEvent;

    /**
     * Raised when a list of actions for a set of files or directories at
     * `entryPaths` is requested. All of the returned actions must
     * be applicable to each entry. If there are no such actions, an empty array
     * should be returned. The actions must be returned with the
     * `successCallback` call. In case of an error,
     * `errorCallback` must be called.
     */
    export var onGetActionsRequested: GetActionsRequested;

    /**
     * Raised when executing an action for a set of files or directories is
     * requested. After the action is completed, `successCallback`
     * must be called. On error, `errorCallback` must be called.
     */
    export var onExecuteActionRequested: ExecuteActionRequested;
}

////////////////////
// Font Settings
////////////////////
/**
 * Use the chrome.fontSettings API to manage Chrome's font settings.
 * @since Chrome 22
 * Permissions:  "fontSettings"
 */
declare namespace chrome.fontSettings {
    /** Represents a font name. */
    export interface FontName {
        /** The display name of the font. */
        displayName: string;
        /** The font ID. */
        fontId: string;
    }

    export interface DefaultFontSizeDetails {
        /** The font size in pixels. */
        pixelSize: number;
    }

    export interface FontDetails {
        /** The generic font family for the font. */
        genericFamily:
            | "cursive"
            | "fantasy"
            | "fixed"
            | "sansserif"
            | "serif"
            | "standard";
        /** Optional. The script for the font. If omitted, the global script font setting is affected.  */
        script?: string | undefined;
    }

    export interface FullFontDetails {
        /** The generic font family for which the font setting has changed. */
        genericFamily: string;
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
        /** Optional. The script code for which the font setting has changed.  */
        script?: string | undefined;
        /** The font ID. See the description in getFont. */
        fontId: string;
    }

    export interface FontDetailsResult {
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
        /** The font ID. Rather than the literal font ID preference value, this may be the ID of the font that the system resolves the preference value to. So, fontId can differ from the font passed to setFont, if, for example, the font is not available on the system. The empty string signifies fallback to the global script font setting. */
        fontId: string;
    }

    export interface FontSizeDetails {
        /** The font size in pixels. */
        pixelSize: number;
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
    }

    export interface SetFontSizeDetails {
        /** The font size in pixels. */
        pixelSize: number;
    }

    export interface SetFontDetails extends FontDetails {
        /** The font ID. The empty string means to fallback to the global script font setting. */
        fontId: string;
    }

    export interface DefaultFixedFontSizeChangedEvent extends chrome.events.Event<(details: FontSizeDetails) => void> {}

    export interface DefaultFontSizeChangedEvent extends chrome.events.Event<(details: FontSizeDetails) => void> {}

    export interface MinimumFontSizeChangedEvent extends chrome.events.Event<(details: FontSizeDetails) => void> {}

    export interface FontChangedEvent extends chrome.events.Event<(details: FullFontDetails) => void> {}

    /**
     * Sets the default font size.
     * @return The `setDefaultFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setDefaultFontSize(details: DefaultFontSizeDetails): Promise<void>;
    /**
     * Sets the default font size.
     */
    export function setDefaultFontSize(details: DefaultFontSizeDetails, callback: Function): void;
    /**
     * Gets the font for a given script and generic font family.
     * @return The `getFont` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getFont(details: FontDetails): Promise<FontDetailsResult>;
    /**
     * Gets the font for a given script and generic font family.
     */
    export function getFont(details: FontDetails, callback: (details: FontDetailsResult) => void): void;
    /**
     * Gets the default font size.
     * @param details This parameter is currently unused.
     * @return The `getDefaultFontSize` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDefaultFontSize(details?: object): Promise<FontSizeDetails>;
    /**
     * Gets the default font size.
     * @param details This parameter is currently unused.
     */
    export function getDefaultFontSize(callback: (options: FontSizeDetails) => void): void;
    export function getDefaultFontSize(details: object, callback: (options: FontSizeDetails) => void): void;
    /**
     * Gets the minimum font size.
     * @param details This parameter is currently unused.
     * @return The `getMinimumFontSize` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getMinimumFontSize(details?: object): Promise<FontSizeDetails>;
    /**
     * Gets the minimum font size.
     * @param details This parameter is currently unused.
     */
    export function getMinimumFontSize(callback: (options: FontSizeDetails) => void): void;
    export function getMinimumFontSize(details: object, callback: (options: FontSizeDetails) => void): void;
    /**
     * Sets the minimum font size.
     * @return The `setMinimumFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setMinimumFontSize(details: SetFontSizeDetails): Promise<void>;
    /**
     * Sets the minimum font size.
     */
    export function setMinimumFontSize(details: SetFontSizeDetails, callback: Function): void;
    /**
     * Gets the default size for fixed width fonts.
     * @param details This parameter is currently unused.
     * @return The `getDefaultFixedFontSize` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDefaultFixedFontSize(details?: object): Promise<FontSizeDetails>;
    /**
     * Gets the default size for fixed width fonts.
     * @param details This parameter is currently unused.
     */
    export function getDefaultFixedFontSize(callback: (details: FontSizeDetails) => void): void;
    export function getDefaultFixedFontSize(details: object, callback: (details: FontSizeDetails) => void): void;
    /**
     * Clears the default font size set by this extension, if any.
     * @param details This parameter is currently unused.
     * @return The `clearDefaultFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearDefaultFontSize(details?: object): Promise<void>;
    /**
     * Clears the default font size set by this extension, if any.
     * @param details This parameter is currently unused.
     */
    export function clearDefaultFontSize(callback: Function): void;
    export function clearDefaultFontSize(details: object, callback: Function): void;
    /**
     * Sets the default size for fixed width fonts.
     * @return The `setDefaultFixedFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setDefaultFixedFontSize(details: SetFontSizeDetails): Promise<void>;
    /**
     * Sets the default size for fixed width fonts.
     */
    export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback: Function): void;
    /**
     * Clears the font set by this extension, if any.
     * @return The `clearFont` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearFont(details: FontDetails): Promise<void>;
    /**
     * Clears the font set by this extension, if any.
     */
    export function clearFont(details: FontDetails, callback: Function): void;
    /**
     * Sets the font for a given script and generic font family.
     * @return The `setFont` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setFont(details: SetFontDetails): Promise<void>;
    /**
     * Sets the font for a given script and generic font family.
     */
    export function setFont(details: SetFontDetails, callback: Function): void;
    /**
     * Clears the minimum font size set by this extension, if any.
     * @param details This parameter is currently unused.
     * @return The `clearMinimumFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearMinimumFontSize(details?: object): Promise<void>;
    /**
     * Clears the minimum font size set by this extension, if any.
     * @param details This parameter is currently unused.
     */
    export function clearMinimumFontSize(callback: Function): void;
    export function clearMinimumFontSize(details: object, callback: Function): void;
    /**
     * Gets a list of fonts on the system.
     * @return The `getFontList` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getFontList(): Promise<FontName[]>;
    /**
     * Gets a list of fonts on the system.
     */
    export function getFontList(callback: (results: FontName[]) => void): void;
    /**
     * Clears the default fixed font size set by this extension, if any.
     * @param details This parameter is currently unused.
     * @return The `clearDefaultFixedFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearDefaultFixedFontSize(details: object): Promise<void>;
    /**
     * Clears the default fixed font size set by this extension, if any.
     * @param details This parameter is currently unused.
     */
    export function clearDefaultFixedFontSize(details: object, callback: Function): void;

    /** Fired when the default fixed font size setting changes. */
    export var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
    /** Fired when the default font size setting changes. */
    export var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
    /** Fired when the minimum font size setting changes. */
    export var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
    /** Fired when a font setting changes. */
    export var onFontChanged: FontChangedEvent;
}

////////////////////
// Google Cloud Messaging
////////////////////
/**
 * Use chrome.gcm to enable apps and extensions to send and receive messages through the Google Cloud Messaging Service.
 * @since Chrome 35
 * Permissions:  "gcm"
 */
declare namespace chrome.gcm {
    export interface OutgoingMessage {
        /** The ID of the server to send the message to as assigned by Google API Console. */
        destinationId: string;
        /** The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID. */
        messageId: string;
        /** Optional. Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day). */
        timeToLive?: number | undefined;
        /** Message data to send to the server. Case-insensitive goog. and google, as well as case-sensitive collapse_key are disallowed as key prefixes. Sum of all key/value pairs should not exceed gcm.MAX_MESSAGE_SIZE. */
        data: object;
    }

    export interface IncomingMessage {
        /** The message data. */
        data: object;
        /**
         * Optional.
         * The sender who issued the message.
         * @since Chrome 41
         */
        from?: string | undefined;
        /**
         * Optional.
         * The collapse key of a message. See Collapsible Messages section of Cloud Messaging documentation for details.
         */
        collapseKey?: string | undefined;
    }

    export interface GcmError {
        /** The error message describing the problem. */
        errorMessage: string;
        /** Optional. The ID of the message with this error, if error is related to a specific message. */
        messageId?: string | undefined;
        /** Additional details related to the error, when available. */
        detail: object;
    }

    export interface MessageReceptionEvent extends chrome.events.Event<(message: IncomingMessage) => void> {}

    export interface MessageDeletionEvent extends chrome.events.Event<() => void> {}

    export interface GcmErrorEvent extends chrome.events.Event<(error: GcmError) => void> {}

    /** The maximum size (in bytes) of all key/value pairs in a message. */
    export var MAX_MESSAGE_SIZE: number;

    /**
     * Registers the application with GCM. The registration ID will be returned by the callback. If register is called again with the same list of senderIds, the same registration ID will be returned.
     * @param senderIds A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs.
     * @param callback Function called when registration completes. It should check runtime.lastError for error when registrationId is empty.
     * Parameter registrationId: A registration ID assigned to the application by the GCM.
     */
    export function register(senderIds: string[], callback: (registrationId: string) => void): void;
    /**
     * Unregisters the application from GCM.
     * @param callback A function called after the unregistration completes. Unregistration was successful if runtime.lastError is not set.
     */
    export function unregister(callback: () => void): void;
    /**
     * Sends a message according to its contents.
     * @param message A message to send to the other party via GCM.
     * @param callback A function called after the message is successfully queued for sending. runtime.lastError should be checked, to ensure a message was sent without problems.
     * Parameter messageId: The ID of the message that the callback was issued for.
     */
    export function send(message: OutgoingMessage, callback: (messageId: string) => void): void;

    /** Fired when a message is received through GCM. */
    export var onMessage: MessageReceptionEvent;
    /** Fired when a GCM server had to delete messages sent by an app server to the application. See Messages deleted event section of Cloud Messaging documentation for details on handling this event. */
    export var onMessagesDeleted: MessageDeletionEvent;
    /** Fired when it was not possible to send a message to the GCM server. */
    export var onSendError: GcmErrorEvent;
}

////////////////////
// History
////////////////////
/**
 * Use the chrome.history API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages.
 * @since Chrome 5
 * Permissions:  "history"
 */
declare namespace chrome.history {
    /** An object encapsulating one visit to a URL. */
    export interface VisitItem {
        /** The transition type for this visit from its referrer. */
        transition: string;
        /** Optional. When this visit occurred, represented in milliseconds since the epoch. */
        visitTime?: number | undefined;
        /** The unique identifier for this visit. */
        visitId: string;
        /** The visit ID of the referrer. */
        referringVisitId: string;
        /** The unique identifier for the item. */
        id: string;
    }

    /** An object encapsulating one result of a history query. */
    export interface HistoryItem {
        /** Optional. The number of times the user has navigated to this page by typing in the address. */
        typedCount?: number | undefined;
        /** Optional. The title of the page when it was last loaded. */
        title?: string | undefined;
        /** Optional. The URL navigated to by a user. */
        url?: string | undefined;
        /** Optional. When this page was last loaded, represented in milliseconds since the epoch. */
        lastVisitTime?: number | undefined;
        /** Optional. The number of times the user has navigated to this page. */
        visitCount?: number | undefined;
        /** The unique identifier for the item. */
        id: string;
    }

    export interface HistoryQuery {
        /** A free-text query to the history service. Leave empty to retrieve all pages. */
        text: string;
        /** Optional. The maximum number of results to retrieve. Defaults to 100. */
        maxResults?: number | undefined;
        /** Optional. Limit results to those visited after this date, represented in milliseconds since the epoch. */
        startTime?: number | undefined;
        /** Optional. Limit results to those visited before this date, represented in milliseconds since the epoch. */
        endTime?: number | undefined;
    }

    export interface Url {
        /** The URL for the operation. It must be in the format as returned from a call to history.search. */
        url: string;
    }

    export interface Range {
        /** Items added to history before this date, represented in milliseconds since the epoch. */
        endTime: number;
        /** Items added to history after this date, represented in milliseconds since the epoch. */
        startTime: number;
    }

    export interface RemovedResult {
        /** True if all history was removed. If true, then urls will be empty. */
        allHistory: boolean;
        /** Optional. */
        urls?: string[] | undefined;
    }

    export interface HistoryVisitedEvent extends chrome.events.Event<(result: HistoryItem) => void> {}

    export interface HistoryVisitRemovedEvent extends chrome.events.Event<(removed: RemovedResult) => void> {}

    /**
     * Searches the history for the last visit time of each page matching the query.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function search(query: HistoryQuery): Promise<HistoryItem[]>;
    /**
     * Searches the history for the last visit time of each page matching the query.
     */
    export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void;
    /**
     * Adds a URL to the history at the current time with a transition type of "link".
     * @return The `addUrl` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function addUrl(details: Url): Promise<void>;
    /**
     * Adds a URL to the history at the current time with a transition type of "link".
     */
    export function addUrl(details: Url, callback: () => void): void;
    /**
     * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
     * @return The `deleteRange` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function deleteRange(range: Range): Promise<void>;
    /**
     * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
     */
    export function deleteRange(range: Range, callback: () => void): void;
    /**
     * Deletes all items from the history.
     * @return The `deleteAll` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function deleteAll(): Promise<void>;
    /**
     * Deletes all items from the history.
     */
    export function deleteAll(callback: () => void): void;
    /**
     * Retrieves information about visits to a URL.
     * @return The `getVisits` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getVisits(details: Url): Promise<VisitItem[]>;
    /**
     * Retrieves information about visits to a URL.
     */
    export function getVisits(details: Url, callback: (results: VisitItem[]) => void): void;
    /**
     * Removes all occurrences of the given URL from the history.
     * @return The `deleteUrl` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function deleteUrl(details: Url): Promise<void>;
    /**
     * Removes all occurrences of the given URL from the history.
     */
    export function deleteUrl(details: Url, callback: () => void): void;

    /** Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has loaded. */
    export var onVisited: HistoryVisitedEvent;
    /** Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is purged from history. */
    export var onVisitRemoved: HistoryVisitRemovedEvent;
}

////////////////////
// i18n
////////////////////
/**
 * Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension.
 * @since Chrome 5
 */
declare namespace chrome.i18n {
    /** Holds detected ISO language code and its percentage in the input string */
    export interface DetectedLanguage {
        /** An ISO language code such as 'en' or 'fr'.
         * For a complete list of languages supported by this method, see  [kLanguageInfoTable]{@link https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc}.
         * For an unknown language, 'und' will be returned, which means that [percentage] of the text is unknown to CLD */
        language: string;

        /** The percentage of the detected language */
        percentage: number;
    }

    /** Holds detected language reliability and array of DetectedLanguage */
    export interface LanguageDetectionResult {
        /** CLD detected language reliability */
        isReliable: boolean;

        /** Array of detectedLanguage */
        languages: DetectedLanguage[];
    }

    /**
     * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use i18n.getUILanguage.
     * @return The `getAcceptLanguages` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @since MV3
     */
    export function getAcceptLanguages(): Promise<string[]>;
    /**
     * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use i18n.getUILanguage.
     * Parameter languages: Array of the accept languages of the browser, such as en-US,en,zh-CN
     */
    export function getAcceptLanguages(callback: (languages: string[]) => void): void;
    /**
     * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the getMessage() call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns undefined.
     * @param messageName The name of the message, as specified in the messages.json file.
     * @param substitutions Optional. Up to 9 substitution strings, if the message requires any.
     */
    export function getMessage(messageName: string, substitutions?: string | string[]): string;
    /**
     * Gets the browser UI language of the browser. This is different from i18n.getAcceptLanguages which returns the preferred user languages.
     * @since Chrome 35
     */
    export function getUILanguage(): string;

    /** Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     * @return The `detectLanguage` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @since MV3
     */
    export function detectLanguage(text: string): Promise<LanguageDetectionResult>;
    /** Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     */
    export function detectLanguage(text: string, callback: (result: LanguageDetectionResult) => void): void;
}

////////////////////
// Identity
////////////////////
/**
 * Use the chrome.identity API to get OAuth2 access tokens.
 * Permissions:  "identity"
 * @since Chrome 29
 */
declare namespace chrome.identity {
    /** @since Chrome 32 */
    export interface AccountInfo {
        /** A unique identifier for the account. This ID will not change for the lifetime of the account. */
        id: string;
    }

    /** @since Chrome 84 */
    export enum AccountStatus {
        SYNC = "SYNC",
        ANY = "ANY",
    }

    export interface ProfileDetails {
        /**
         * Optional.
         * A status of the primary account signed into a profile whose ProfileUserInfo should be returned. Defaults to SYNC account status.
         */
        accountStatus?: AccountStatus | undefined;
    }

    export interface TokenDetails {
        /**
         * Optional.
         * Fetching a token may require the user to sign-in to Chrome, or approve the application's requested scopes. If the interactive flag is true, getAuthToken will prompt the user as necessary. When the flag is false or omitted, getAuthToken will return failure any time a prompt would be required.
         */
        interactive?: boolean | undefined;
        /**
         * Optional.
         * The account ID whose token should be returned. If not specified, the primary account for the profile will be used.
         * account is only supported when the "enable-new-profile-management" flag is set.
         * @since Chrome 37
         */
        account?: AccountInfo | undefined;
        /**
         * Optional.
         * A list of OAuth2 scopes to request.
         * When the scopes field is present, it overrides the list of scopes specified in manifest.json.
         * @since Chrome 37
         */
        scopes?: string[] | undefined;
    }

    export interface UserInfo {
        /** An email address for the user account signed into the current profile. Empty if the user is not signed in or the identity.email manifest permission is not specified. */
        email: string;
        /** A unique identifier for the account. This ID will not change for the lifetime of the account. Empty if the user is not signed in or (in M41+) the identity.email manifest permission is not specified. */
        id: string;
    }

    export interface TokenInformation {
        /** The specific token that should be removed from the cache. */
        token: string;
    }

    export interface WebAuthFlowOptions {
        /** The URL that initiates the auth flow. */
        url: string;
        /**
         * Optional.
         * Whether to launch auth flow in interactive mode.
         * Since some auth flows may immediately redirect to a result URL, launchWebAuthFlow hides its web view until the first navigation either redirects to the final URL, or finishes loading a page meant to be displayed.
         * If the interactive flag is true, the window will be displayed when a page load completes. If the flag is false or omitted, launchWebAuthFlow will return with an error if the initial navigation does not complete the flow.
         */
        interactive?: boolean | undefined;
    }

    export interface SignInChangeEvent extends chrome.events.Event<(account: AccountInfo, signedIn: boolean) => void> {}

    export interface GetAuthTokenResult {
        /**
         * Optional.
         * A list of OAuth2 scopes granted to the extension.
         */
        grantedScopes?: string[];
        /**
         * Optional.
         * The specific token associated with the request.
         */
        token?: string;
    }

    /**
     * Resets the state of the Identity API:
     *
     *  * Removes all OAuth2 access tokens from the token cache
     *  * Removes user's account preferences
     *  * De-authorizes the user from all auth flows
     * If `callback` is not provided, the function returns a Promise when the state has been cleared.
     * @since Chrome 87
     * @param callback Called when the state has been cleared.
     */
    export function clearAllCachedAuthTokens(): Promise<void>;
    export function clearAllCachedAuthTokens(callback: () => void): void;

    /**
     * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
     * getAccounts is only supported on dev channel.
     * Dev channel only.
     */
    export function getAccounts(): Promise<AccountInfo[]>;
    export function getAccounts(callback: (accounts: AccountInfo[]) => void): void;

    /**
     * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
     * The Identity API caches access tokens in memory, so it's ok to call getAuthToken non-interactively any time a token is required. The token cache automatically handles expiration.
     * For a good user experience it is important interactive token requests are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests, or Chrome sign in screens if they are not signed in, with with no context. In particular, do not use getAuthToken interactively when your app is first launched.
     * If `callback` is not provided, the function returns a Promise that resolves with the token.
     * @param details Token options.
     * @param callback Called with an OAuth2 access token as specified by the manifest, or undefined if there was an error.
     */
    export function getAuthToken(details: TokenDetails): Promise<GetAuthTokenResult>;
    export function getAuthToken(
        details: TokenDetails,
        callback: (token?: string, grantedScopes?: string[]) => void,
    ): void;

    /**
     * Retrieves email address and obfuscated gaia id of the user signed into a profile.
     * This API is different from identity.getAccounts in two ways. The information returned is available offline, and it only applies to the primary account for the profile.
     * @since Chrome 37
     */
    export function getProfileUserInfo(callback: (userInfo: UserInfo) => void): void;

    /** @since Chrome 84 */
    export function getProfileUserInfo(details: ProfileDetails, callback: (userInfo: UserInfo) => void): void;

    /** @since Chrome 84 */
    export function getProfileUserInfo(details: ProfileDetails): Promise<UserInfo>;

    /**
     * Removes an OAuth2 access token from the Identity API's token cache.
     * If an access token is discovered to be invalid, it should be passed to removeCachedAuthToken to remove it from the cache. The app may then retrieve a fresh token with getAuthToken.
     * If `callback` is not provided, the function returns a Promise when the state has been removed from the cache.
     * @param details Token information.
     * @param callback Called when the token has been removed from the cache.
     */
    export function removeCachedAuthToken(details: TokenInformation): Promise<void>;
    export function removeCachedAuthToken(details: TokenInformation, callback: () => void): void;

    /**
     * Starts an auth flow at the specified URL.
     * This method enables auth flows with non-Google identity providers by launching a web view and navigating it to the first URL in the provider's auth flow. When the provider redirects to a URL matching the pattern https://<app-id>.chromiumapp.org/*, the window will close, and the final redirect URL will be passed to the callback function.
     * For a good user experience it is important interactive auth flows are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests with no context. In particular, do not launch an interactive auth flow when your app is first launched.
     * @param details WebAuth flow options.
     * @param callback Optional. Called with the URL redirected back to your application.
     */
    export function launchWebAuthFlow(details: WebAuthFlowOptions, callback: (responseUrl?: string) => void): void;
    export function launchWebAuthFlow(details: WebAuthFlowOptions): Promise<string | undefined>;

    /**
     * Generates a redirect URL to be used in launchWebAuthFlow.
     * The generated URLs match the pattern https://<app-id>.chromiumapp.org/*.
     * @since Chrome 33
     * @param path Optional. The path appended to the end of the generated URL.
     */
    export function getRedirectURL(path?: string): string;

    /**
     * Fired when signin state changes for an account on the user's profile.
     * @since Chrome 33
     */
    export var onSignInChanged: SignInChangeEvent;
}

////////////////////
// Idle
////////////////////
/**
 * Use the chrome.idle API to detect when the machine's idle state changes.
 * Permissions:  "idle"
 * @since Chrome 6
 */
declare namespace chrome.idle {
    export type IdleState = "active" | "idle" | "locked";
    export interface IdleStateChangedEvent extends chrome.events.Event<(newState: IdleState) => void> {}

    /**
     * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
     * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
     * @since Chrome 116
     */
    export function queryState(detectionIntervalInSeconds: number): Promise<IdleState>;
    /**
     * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
     * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
     * @since Chrome 25
     */
    export function queryState(detectionIntervalInSeconds: number, callback: (newState: IdleState) => void): void;

    /**
     * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
     * @since Chrome 25
     * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
     */
    export function setDetectionInterval(intervalInSeconds: number): void;

    /**
     * Gets the time, in seconds, it takes until the screen is locked automatically while idle. Returns a zero duration if the screen is never locked automatically. Currently supported on Chrome OS only.
     * Parameter delay: Time, in seconds, until the screen is locked automatically while idle. This is zero if the screen never locks automatically.
     */
    export function getAutoLockDelay(): Promise<number>;
    export function getAutoLockDelay(callback: (delay: number) => void): void;

    /** Fired when the system changes to an active, idle or locked state. The event fires with "locked" if the screen is locked or the screensaver activates, "idle" if the system is unlocked and the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system. */
    export var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Input - IME
////////////////////
/**
 * Use the chrome.input.ime API to implement a custom IME for Chrome OS. This allows your extension to handle keystrokes, set the composition, and manage the candidate window.
 * Permissions:  "input"
 * @since Chrome 21
 */
declare namespace chrome.input.ime {
    /** See http://www.w3.org/TR/DOM-Level-3-Events/#events-KeyboardEvent */
    export interface KeyboardEvent {
        /**
         * Optional.
         * Whether or not the SHIFT key is pressed.
         */
        shiftKey?: boolean | undefined;
        /**
         * Optional.
         * Whether or not the ALT key is pressed.
         */
        altKey?: boolean | undefined;
        /**
         * Optional.
         * Whether or not the ALTGR key is pressed.
         * @since Chrome 79
         */
        altgrKey?: boolean | undefined;
        /**
         * Optional.
         * The ID of the request. Use the requestId param from the onKeyEvent event instead.
         * @deprecated since Chrome 79.
         */
        requestId?: string | undefined;
        /** Value of the key being pressed */
        key: string;
        /**
         * Optional.
         * Whether or not the CTRL key is pressed.
         */
        ctrlKey?: boolean | undefined;
        /** One of keyup or keydown. */
        type: string;
        /**
         * Optional.
         * The extension ID of the sender of this keyevent.
         * @since Chrome 34
         */
        extensionId?: string | undefined;
        /**
         * Optional.
         * Value of the physical key being pressed. The value is not affected by current keyboard layout or modifier state.
         * @since Chrome 26
         */
        code: string;
        /**
         * Optional.
         * The deprecated HTML keyCode, which is system- and implementation-dependent numerical code signifying the unmodified identifier associated with the key pressed.
         * @since Chrome 37
         */
        keyCode?: number | undefined;
        /**
         * Optional.
         * Whether or not the CAPS_LOCK is enabled.
         * @since Chrome 29
         */
        capsLock?: boolean | undefined;
    }

    /**
     * The auto-capitalize type of the text field.
     * @since Chrome 69
     */
    export type AutoCapitalizeType = "characters" | "words" | "sentences";
    /** Describes an input Context */
    export interface InputContext {
        /** This is used to specify targets of text field operations. This ID becomes invalid as soon as onBlur is called. */
        contextID: number;
        /** Type of value this text field edits, (Text, Number, URL, etc) */
        type: string;
        /**
         * Whether the text field wants auto-correct.
         * @since Chrome 40
         */
        autoCorrect: boolean;
        /**
         * Whether the text field wants auto-complete.
         * @since Chrome 40
         */
        autoComplete: boolean;
        /**
         * Whether the text field wants spell-check.
         * @since Chrome 40
         */
        spellCheck: boolean;
        /**
         * The auto-capitalize type of the text field.
         * @since Chrome 69
         */
        autoCapitalize: AutoCapitalizeType;
        /**
         * Whether text entered into the text field should be used to improve typing suggestions for the user.
         * @since Chrome 68
         */
        shouldDoLearning: boolean;
    }

    /**
     * A menu item used by an input method to interact with the user from the language menu.
     * @since Chrome 30
     */
    export interface MenuItem {
        /** String that will be passed to callbacks referencing this MenuItem. */
        id: string;
        /** Optional. Text displayed in the menu for this item. */
        label?: string | undefined;
        /** Optional. The type of menu item. */
        style?: string | undefined;
        /** Optional. Indicates this item is visible. */
        visible?: boolean | undefined;
        /** Indicates this item should be drawn with a check. */
        checked?: boolean | undefined;
        /** Indicates this item is enabled. */
        enabled?: boolean | undefined;
    }

    export interface ImeParameters {
        /** MenuItems to use. */
        items: MenuItem[];
        /** ID of the engine to use */
        engineID: string;
    }

    export interface CommitTextParameters {
        /** The text to commit */
        text: string;
        /** ID of the context where the text will be committed */
        contextID: number;
    }

    export interface CandidateUsage {
        /** The title string of details description. */
        title: string;
        /** The body string of detail description. */
        body: string;
    }

    export interface CandidateTemplate {
        /** The candidate */
        candidate: string;
        /** The candidate's id */
        id: number;
        /**
         * Optional.
         * The id to add these candidates under
         */
        parentId?: number | undefined;
        /**
         * Optional.
         * Short string displayed to next to the candidate, often the shortcut key or index
         */
        label?: string | undefined;
        /**
         * Optional.
         * Additional text describing the candidate
         */
        annotation?: string | undefined;
        /**
         * Optional.
         * The usage or detail description of word.
         */
        usage?: CandidateUsage | undefined;
    }

    export interface CandidatesParameters {
        /** ID of the context that owns the candidate window. */
        contextID: number;
        /** List of candidates to show in the candidate window */
        candidates: CandidateTemplate[];
    }

    export interface CompositionParameterSegment {
        /** Index of the character to start this segment at */
        start: number;
        /** Index of the character to end this segment after. */
        end: number;
        /** The type of the underline to modify this segment. */
        style: string;
    }

    export interface CompositionParameters {
        /** ID of the context where the composition text will be set */
        contextID: number;
        /** Text to set */
        text: string;
        /** Optional. List of segments and their associated types. */
        segments?: CompositionParameterSegment[] | undefined;
        /** Position in the text of the cursor. */
        cursor: number;
        /** Optional. Position in the text that the selection starts at. */
        selectionStart?: number | undefined;
        /** Optional. Position in the text that the selection ends at. */
        selectionEnd?: number | undefined;
    }

    export interface MenuItemParameters {
        items: object[];
        engineId: string;
    }

    /** Type of the assistive window. */
    export type AssistiveWindowType = "undo";

    /** ID of a button in an assistive window. */
    export type AssistiveWindowButton = "undo" | "addToDictionary";

    /** Properties of an assistive window. */
    export interface AssistiveWindowProperties {
        type: AssistiveWindowType;
        visible: boolean;
        announceString?: string | undefined;
    }

    export interface CandidateWindowParameterProperties {
        /**
         * Optional.
         * True to show the cursor, false to hide it.
         */
        cursorVisible?: boolean | undefined;
        /**
         * Optional.
         * True if the candidate window should be rendered vertical, false to make it horizontal.
         */
        vertical?: boolean | undefined;
        /**
         * Optional.
         * The number of candidates to display per page.
         */
        pageSize?: number | undefined;
        /**
         * Optional.
         * True to display the auxiliary text, false to hide it.
         */
        auxiliaryTextVisible?: boolean | undefined;
        /**
         * Optional.
         * Text that is shown at the bottom of the candidate window.
         */
        auxiliaryText?: string | undefined;
        /**
         * Optional.
         * True to show the Candidate window, false to hide it.
         */
        visible?: boolean | undefined;
        /**
         * Optional.
         * Where to display the candidate window.
         * @since Chrome 28
         */
        windowPosition?: string | undefined;
        /**
         * Optional.
         * The index of the current chosen candidate out of total candidates.
         * @since Chrome 84
         */
        currentCandidateIndex?: number | undefined;
        /**
         * Optional.
         * The total number of candidates for the candidate window.
         * @since Chrome 84
         */
        totalCandidates?: number | undefined;
    }

    export interface CandidateWindowParameter {
        /** ID of the engine to set properties on. */
        engineID: string;
        properties: CandidateWindowParameterProperties;
    }

    export interface ClearCompositionParameters {
        /** ID of the context where the composition will be cleared */
        contextID: number;
    }

    export interface CursorPositionParameters {
        /** ID of the candidate to select. */
        candidateID: number;
        /** ID of the context that owns the candidate window. */
        contextID: number;
    }

    export interface SendKeyEventParameters {
        /** ID of the context where the key events will be sent, or zero to send key events to non-input field. */
        contextID: number;
        /** Data on the key event. */
        keyData: KeyboardEvent[];
    }

    export interface DeleteSurroundingTextParameters {
        /** ID of the engine receiving the event. */
        engineID: string;
        /** ID of the context where the surrounding text will be deleted. */
        contextID: number;
        /** The offset from the caret position where deletion will start. This value can be negative. */
        offset: number;
        /** The number of characters to be deleted */
        length: number;
    }

    export interface SurroundingTextInfo {
        /** The text around cursor. */
        text: string;
        /** The ending position of the selection. This value indicates caret position if there is no selection. */
        focus: number;
        /** The beginning position of the selection. This value indicates caret position if is no selection. */
        anchor: number;
    }

    export interface AssistiveWindowButtonClickedDetails {
        /** The ID of the button clicked. */
        buttonID: AssistiveWindowButton;
        /** The type of the assistive window. */
        windowType: AssistiveWindowType;
    }

    export interface BlurEvent extends chrome.events.Event<(contextID: number) => void> {}

    export interface AssistiveWindowButtonClickedEvent
        extends chrome.events.Event<(details: AssistiveWindowButtonClickedDetails) => void>
    {}

    export interface CandidateClickedEvent
        extends chrome.events.Event<(engineID: string, candidateID: number, button: string) => void>
    {}

    export interface KeyEventEvent
        extends chrome.events.Event<(engineID: string, keyData: KeyboardEvent, requestId: string) => void>
    {}

    export interface DeactivatedEvent extends chrome.events.Event<(engineID: string) => void> {}

    export interface InputContextUpdateEvent extends chrome.events.Event<(context: InputContext) => void> {}

    export interface ActivateEvent extends chrome.events.Event<(engineID: string, screen: string) => void> {}

    export interface FocusEvent extends chrome.events.Event<(context: InputContext) => void> {}

    export interface MenuItemActivatedEvent extends chrome.events.Event<(engineID: string, name: string) => void> {}

    export interface SurroundingTextChangedEvent
        extends chrome.events.Event<(engineID: string, surroundingInfo: SurroundingTextInfo) => void>
    {}

    export interface InputResetEvent extends chrome.events.Event<(engineID: string) => void> {}

    /**
     * Adds the provided menu items to the language menu when this IME is active.
     */
    export function setMenuItems(parameters: ImeParameters, callback?: () => void): void;
    /**
     * Commits the provided text to the current input.
     * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
     */
    export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void;
    /**
     * Sets the current candidate list. This fails if this extension doesn't own the active IME
     * @param callback Called when the operation completes.
     */
    export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void;
    /**
     * Set the current composition. If this extension does not own the active IME, this fails.
     * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
     */
    export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void;
    /**
     * Updates the state of the MenuItems specified
     * @param callback Called when the operation completes
     */
    export function updateMenuItems(parameters: MenuItemParameters, callback?: () => void): void;
    /**
     * Shows/Hides an assistive window with the given properties.
     * @param parameters
     * @param callback Called when the operation completes.
     */
    export function setAssistiveWindowProperties(
        parameters: {
            contextID: number;
            properties: chrome.input.ime.AssistiveWindowProperties;
        },
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Highlights/Unhighlights a button in an assistive window.
     * @param parameters
     * @param callback Called when the operation completes. On failure, chrome.runtime.lastError is set.
     */
    export function setAssistiveWindowButtonHighlighted(
        parameters: {
            contextID: number;
            buttonID: chrome.input.ime.AssistiveWindowButton;
            windowType: chrome.input.ime.AssistiveWindowType;
            announceString?: string | undefined;
            highlighted: boolean;
        },
        callback?: () => void,
    ): void;
    /**
     * Sets the properties of the candidate window. This fails if the extension doesn't own the active IME
     * @param callback Called when the operation completes.
     */
    export function setCandidateWindowProperties(
        parameters: CandidateWindowParameter,
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Clear the current composition. If this extension does not own the active IME, this fails.
     * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
     */
    export function clearComposition(
        parameters: ClearCompositionParameters,
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Set the position of the cursor in the candidate window. This is a no-op if this extension does not own the active IME.
     * @param callback Called when the operation completes
     */
    export function setCursorPosition(
        parameters: CursorPositionParameters,
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Sends the key events. This function is expected to be used by virtual keyboards. When key(s) on a virtual keyboard is pressed by a user, this function is used to propagate that event to the system.
     * @since Chrome 33
     * @param callback Called when the operation completes.
     */
    export function sendKeyEvents(parameters: SendKeyEventParameters, callback?: () => void): void;
    /**
     * Hides the input view window, which is popped up automatically by system. If the input view window is already hidden, this function will do nothing.
     * @since Chrome 34
     */
    export function hideInputView(): void;
    /**
     * Deletes the text around the caret.
     * @since Chrome 27
     */
    export function deleteSurroundingText(parameters: DeleteSurroundingTextParameters, callback?: () => void): void;
    /**
     * Indicates that the key event received by onKeyEvent is handled. This should only be called if the onKeyEvent listener is asynchronous.
     * @since Chrome 25
     * @param requestId Request id of the event that was handled. This should come from keyEvent.requestId
     * @param response True if the keystroke was handled, false if not
     */
    export function keyEventHandled(requestId: string, response: boolean): void;

    /** This event is sent when focus leaves a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
    export var onBlur: BlurEvent;
    /** This event is sent when a button in an assistive window is clicked. */
    export var onAssistiveWindowButtonClicked: AssistiveWindowButtonClickedEvent;
    /** This event is sent if this extension owns the active IME. */
    export var onCandidateClicked: CandidateClickedEvent;
    /** This event is sent if this extension owns the active IME. */
    export var onKeyEvent: KeyEventEvent;
    /** This event is sent when an IME is deactivated. It signals that the IME will no longer be receiving onKeyPress events. */
    export var onDeactivated: DeactivatedEvent;
    /** This event is sent when the properties of the current InputContext change, such as the type. It is sent to all extensions that are listening to this event, and enabled by the user. */
    export var onInputContextUpdate: InputContextUpdateEvent;
    /** This event is sent when an IME is activated. It signals that the IME will be receiving onKeyPress events. */
    export var onActivate: ActivateEvent;
    /** This event is sent when focus enters a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
    export var onFocus: FocusEvent;
    /** Called when the user selects a menu item */
    export var onMenuItemActivated: MenuItemActivatedEvent;
    /**
     * Called when the editable string around caret is changed or when the caret position is moved. The text length is limited to 100 characters for each back and forth direction.
     * @since Chrome 27
     */
    export var onSurroundingTextChanged: SurroundingTextChangedEvent;
    /**
     * This event is sent when chrome terminates ongoing text input session.
     * @since Chrome 29
     */
    export var onReset: InputResetEvent;
}

/**
 * Use chrome.instanceID to access the Instance ID service.
 * Permissions: "gcm"
 * @since Chrome 44
 */
declare namespace chrome.instanceID {
    export interface TokenRefreshEvent extends chrome.events.Event<() => void> {}

    /**
     * Resets the app instance identifier and revokes all tokens associated with it.
     *
     * The `deleteID()` method doesn't return any value, but can be used with a callback or asynchronously,
     * with a Promise (MV3 only).
     */
    export function deleteID(): Promise<void>;
    export function deleteID(callback: () => void): void;

    interface DeleteTokenParams {
        /**
         * Identifies the entity that is authorized to access resources associated with this Instance ID.
         * It can be a project ID from Google developer console.
         */
        authorizedEntity: string;
        /**
         * Identifies authorized actions that the authorized entity can take.
         * In other words, the scope that is used to obtain the token.
         * E.g. for sending GCM messages, `GCM` scope should be used.
         */
        scope: string;
    }
    /**
     * Revoked a granted token.
     *
     * The `deleteToken()` method doesn't return any value, but can be used with a callback or
     * asynchronously, with a Promise (MV3 only).
     */
    export function deleteToken(deleteTokenParams: DeleteTokenParams): Promise<void>;
    export function deleteToken(
        deleteTokenParams: DeleteTokenParams,
        callback: () => void,
    ): void;

    /**
     * Retrieves the time when the InstanceID has been generated.
     *
     * @return The time when the Instance ID has been generated, represented in milliseconds since the epoch.
     * It can return via a callback or asynchronously, with a Promise (MV3 only).
     */
    export function getCreationTime(): Promise<number>;
    export function getCreationTime(callback: (creationTime: number) => void): void;

    /**
     * Retrieves an identifier for the app instance.
     * The same ID will be returned as long as the application identity has not been revoked or expired.
     *
     * @return An Instance ID assigned to the app instance. Can be returned by a callback or a Promise (MV3 only).
     */
    export function getID(): Promise<string>;
    export function getID(callback: (instanceID: string) => void): void;

    interface GetTokenParams extends DeleteTokenParams {
        /**
         * Allows including a small number of string key/value pairs that will be associated with the token
         * and may be used in processing the request.
         *
         * @deprecated Since Chrome 89. `options` are deprecated and will be ignored.
         */
        options?: { [key: string]: string };
    }
    /**
     * Return a token that allows the authorized entity to access the service defined by scope.
     *
     * @return A token assigned by the requested service. Can be returned by a callback or a Promise (MV3 only).
     */
    export function getToken(getTokenParams: GetTokenParams): Promise<string>;
    export function getToken(getTokenParams: GetTokenParams, callback: (token: string) => void): void;

    export var onTokenRefresh: TokenRefreshEvent;
}

////////////////////
// LoginState
////////////////////
/**
 * Use the chrome.loginState API to read and monitor the login state.
 * Permissions: "loginState"
 * @since Chrome 78
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.loginState {
    export interface SessionStateChangedEvent extends chrome.events.Event<(sessionState: SessionState) => void> {}

    /** Possible profile types. */
    export type ProfileType = "SIGNIN_PROFILE" | "USER_PROFILE";

    /** Possible session states. */
    export type SessionState = "UNKNOWN" | "IN_OOBE_SCREEN" | "IN_LOGIN_SCREEN" | "IN_SESSION" | "IN_LOCK_SCREEN";

    /** Gets the type of the profile the extension is in. */
    export function getProfileType(callback: (profileType: ProfileType) => void): void;

    /** Gets the current session state. */
    export function getSessionState(callback: (sessionState: SessionState) => void): void;

    /** Dispatched when the session state changes. sessionState is the new session state.*/
    export const onSessionStateChanged: SessionStateChangedEvent;
}

////////////////////
// Management
////////////////////
/**
 * The chrome.management API provides ways to manage the list of extensions/apps that are installed and running. It is particularly useful for extensions that override the built-in New Tab page.
 * Permissions:  "management"
 * @since Chrome 8
 */
declare namespace chrome.management {
    /** Information about an installed extension, app, or theme. */
    export interface ExtensionInfo {
        /**
         * Optional.
         * A reason the item is disabled.
         * @since Chrome 17
         */
        disabledReason?: string | undefined;
        /** Optional. The launch url (only present for apps). */
        appLaunchUrl?: string | undefined;
        /**
         * The description of this extension, app, or theme.
         * @since Chrome 9
         */
        description: string;
        /**
         * Returns a list of API based permissions.
         * @since Chrome 9
         */
        permissions: string[];
        /**
         * Optional.
         * A list of icon information. Note that this just reflects what was declared in the manifest, and the actual image at that url may be larger or smaller than what was declared, so you might consider using explicit width and height attributes on img tags referencing these images. See the manifest documentation on icons for more details.
         */
        icons?: IconInfo[] | undefined;
        /**
         * Returns a list of host based permissions.
         * @since Chrome 9
         */
        hostPermissions: string[];
        /** Whether it is currently enabled or disabled. */
        enabled: boolean;
        /**
         * Optional.
         * The URL of the homepage of this extension, app, or theme.
         * @since Chrome 11
         */
        homepageUrl?: string | undefined;
        /**
         * Whether this extension can be disabled or uninstalled by the user.
         * @since Chrome 12
         */
        mayDisable: boolean;
        /**
         * How the extension was installed.
         * @since Chrome 22
         */
        installType: string;
        /** The version of this extension, app, or theme. */
        version: string;
        /** The extension's unique identifier. */
        id: string;
        /**
         * Whether the extension, app, or theme declares that it supports offline.
         * @since Chrome 15
         */
        offlineEnabled: boolean;
        /**
         * Optional.
         * The update URL of this extension, app, or theme.
         * @since Chrome 16
         */
        updateUrl?: string | undefined;
        /**
         * The type of this extension, app, or theme.
         * @since Chrome 23
         */
        type: string;
        /** The url for the item's options page, if it has one. */
        optionsUrl: string;
        /** The name of this extension, app, or theme. */
        name: string;
        /**
         * A short version of the name of this extension, app, or theme.
         * @since Chrome 31
         */
        shortName: string;
        /**
         * True if this is an app.
         * @deprecated since Chrome 33. Please use management.ExtensionInfo.type.
         */
        isApp: boolean;
        /**
         * Optional.
         * The app launch type (only present for apps).
         * @since Chrome 37
         */
        launchType?: string | undefined;
        /**
         * Optional.
         * The currently available launch types (only present for apps).
         * @since Chrome 37
         */
        availableLaunchTypes?: string[] | undefined;
    }

    /** Information about an icon belonging to an extension, app, or theme. */
    export interface IconInfo {
        /** The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append ?grayscale=true to the URL. */
        url: string;
        /** A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16. */
        size: number;
    }

    export interface UninstallOptions {
        /**
         * Optional.
         * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false for self uninstalls. If an extension uninstalls another extension, this parameter is ignored and the dialog is always shown.
         */
        showConfirmDialog?: boolean | undefined;
    }

    export interface ManagementDisabledEvent extends chrome.events.Event<(info: ExtensionInfo) => void> {}

    export interface ManagementUninstalledEvent extends chrome.events.Event<(id: string) => void> {}

    export interface ManagementInstalledEvent extends chrome.events.Event<(info: ExtensionInfo) => void> {}

    export interface ManagementEnabledEvent extends chrome.events.Event<(info: ExtensionInfo) => void> {}

    /**
     * Enables or disables an app or extension.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @param enabled Whether this item should be enabled or disabled.
     * @return The `setEnabled` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setEnabled(id: string, enabled: boolean): Promise<void>;
    /**
     * Enables or disables an app or extension.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @param enabled Whether this item should be enabled or disabled.
     */
    export function setEnabled(id: string, enabled: boolean, callback: () => void): void;
    /**
     * Returns a list of permission warnings for the given extension id.
     * @since Chrome 15
     * @param id The ID of an already installed extension.
     * @return The `getPermissionWarningsById` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPermissionWarningsById(id: string): Promise<string[]>;
    /**
     * Returns a list of permission warnings for the given extension id.
     * @since Chrome 15
     * @param id The ID of an already installed extension.
     */
    export function getPermissionWarningsById(id: string, callback: (permissionWarnings: string[]) => void): void;
    /**
     * Returns information about the installed extension, app, or theme that has the given ID.
     * @since Chrome 9
     * @param id The ID from an item of management.ExtensionInfo.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(id: string): Promise<ExtensionInfo>;
    /**
     * Returns information about the installed extension, app, or theme that has the given ID.
     * @since Chrome 9
     * @param id The ID from an item of management.ExtensionInfo.
     */
    export function get(id: string, callback: (result: ExtensionInfo) => void): void;
    /**
     * Returns a list of information about installed extensions and apps.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<ExtensionInfo[]>;
    /**
     * Returns a list of information about installed extensions and apps.
     */
    export function getAll(callback: (result: ExtensionInfo[]) => void): void;
    /**
     * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 15
     * @param manifestStr Extension manifest JSON string.
     * @return The `getPermissionWarningsByManifest` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPermissionWarningsByManifest(
        manifestStr: string,
    ): Promise<string[]>;
    /**
     * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 15
     * @param manifestStr Extension manifest JSON string.
     */
    export function getPermissionWarningsByManifest(
        manifestStr: string,
        callback: (permissionwarnings: string[]) => void,
    ): void;
    /**
     * Launches an application.
     * @param id The extension id of the application.
     * @return The `launchApp` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function launchApp(id: string): Promise<void>;
    /**
     * Launches an application.
     * @param id The extension id of the application.
     */
    export function launchApp(id: string, callback: () => void): void;
    /**
     * Uninstalls a currently installed app or extension.
     * @since Chrome 21
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @return The `uninstall` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstall(id: string, options?: UninstallOptions): Promise<void>;
    /**
     * Uninstalls a currently installed app or extension.
     * @since Chrome 21
     * @param id This should be the id from an item of management.ExtensionInfo.
     */
    export function uninstall(id: string, callback: () => void): void;
    export function uninstall(id: string, options: UninstallOptions, callback: () => void): void;
    /**
     * Uninstalls a currently installed app or extension.
     * @deprecated since Chrome 21. The options parameter was added to this function.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @return The `uninstall` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstall(id: string): Promise<void>;
    /**
     * Uninstalls a currently installed app or extension.
     * @deprecated since Chrome 21. The options parameter was added to this function.
     * @param id This should be the id from an item of management.ExtensionInfo.
     */
    export function uninstall(id: string, callback: () => void): void;
    /**
     * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 39
     * @return The `getSelf` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSelf(): Promise<ExtensionInfo>;
    /**
     * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 39
     */
    export function getSelf(callback: (result: ExtensionInfo) => void): void;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26
     * @return The `uninstallSelf` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstallSelf(options?: UninstallOptions): Promise<void>;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26
     */
    export function uninstallSelf(callback: () => void): void;
    export function uninstallSelf(options: UninstallOptions, callback: () => void): void;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26
     * @return The `uninstallSelf` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstallSelf(): Promise<void>;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26
     */
    export function uninstallSelf(callback: () => void): void;
    /**
     * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created.
     * @since Chrome 37
     * @return The `createAppShortcut` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function createAppShortcut(id: string): Promise<void>;
    /**
     * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created.
     * @since Chrome 37
     */
    export function createAppShortcut(id: string, callback: () => void): void;
    /**
     * Set the launch type of an app.
     * @since Chrome 37
     * @param id This should be the id from an app item of management.ExtensionInfo.
     * @param launchType The target launch type. Always check and make sure this launch type is in ExtensionInfo.availableLaunchTypes, because the available launch types vary on different platforms and configurations.
     * @return The `setLaunchType` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setLaunchType(id: string, launchType: string): Promise<void>;
    /**
     * Set the launch type of an app.
     * @since Chrome 37
     * @param id This should be the id from an app item of management.ExtensionInfo.
     * @param launchType The target launch type. Always check and make sure this launch type is in ExtensionInfo.availableLaunchTypes, because the available launch types vary on different platforms and configurations.
     */
    export function setLaunchType(id: string, launchType: string, callback: () => void): void;
    /**
     * Generate an app for a URL. Returns the generated bookmark app.
     * @since Chrome 37
     * @param url The URL of a web page. The scheme of the URL can only be "http" or "https".
     * @param title The title of the generated app.
     * @return The `generateAppForLink` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function generateAppForLink(url: string, title: string): Promise<ExtensionInfo>;
    /**
     * Generate an app for a URL. Returns the generated bookmark app.
     * @since Chrome 37
     * @param url The URL of a web page. The scheme of the URL can only be "http" or "https".
     * @param title The title of the generated app.
     */
    export function generateAppForLink(url: string, title: string, callback: (result: ExtensionInfo) => void): void;

    /** Fired when an app or extension has been disabled. */
    export var onDisabled: ManagementDisabledEvent;
    /** Fired when an app or extension has been uninstalled. */
    export var onUninstalled: ManagementUninstalledEvent;
    /** Fired when an app or extension has been installed. */
    export var onInstalled: ManagementInstalledEvent;
    /** Fired when an app or extension has been enabled. */
    export var onEnabled: ManagementEnabledEvent;
}

////////////////////
// Notifications
////////////////////
/**
 * Use the networking.config API to authenticate to captive portals.
 * Permissions:  "networking.config"
 * Important: This API works only on Chrome OS.
 * @since Chrome 43
 */
declare namespace chrome.networking.config {
    export interface NetworkInfo {
        /** Currently only WiFi supported. */
        Type: string;
        /** Optional. A unique identifier of the network. */
        GUID?: string | undefined;
        /** Optional. A hex-encoded byte sequence. */
        HexSSID?: string | undefined;
        /** Optional. The decoded SSID of the network (default encoding is UTF-8). To filter for non-UTF-8 SSIDs, use HexSSID instead. */
        SSID?: string | undefined;
        /** Optional. The basic service set identification (BSSID) uniquely identifying the basic service set. BSSID is represented as a human readable, hex-encoded string with bytes separated by colons, e.g. 45:67:89:ab:cd:ef. */
        BSSID?: string | undefined;
        /** Optional. Identifier indicating the security type of the network. Valid values are None, WEP-PSK, WPA-PSK and WPA-EAP. */
        Security?: string | undefined;
    }

    export interface CaptivePorttalDetectedEvent extends chrome.events.Event<(networkInfo: NetworkInfo) => void> {}

    /**
     * Allows an extension to define network filters for the networks it can handle. A call to this function will remove all filters previously installed by the extension before setting the new list.
     * @param networks Network filters to set. Every NetworkInfo must either have the SSID or HexSSID set. Other fields will be ignored.
     * @param callback Called back when this operation is finished.
     */
    export function setNetworkFilter(networks: NetworkInfo[], callback: () => void): void;
    /**
     * Called by the extension to notify the network config API that it finished a captive portal authentication attempt and hand over the result of the attempt. This function must only be called with the GUID of the latest onCaptivePortalDetected event.
     * @param GUID Unique network identifier obtained from onCaptivePortalDetected.
     * @param result The result of the authentication attempt.
     * unhandled: The extension does not handle this network or captive portal (e.g. server end-point not found or not compatible).
     * succeeded: The extension handled this network and authenticated successfully.
     * rejected: The extension handled this network, tried to authenticate, however was rejected by the server.
     * failed: The extension handled this network, tried to authenticate, however failed due to an unspecified error.
     * @param callback Called back when this operation is finished.
     */
    export function finishAuthentication(GUID: string, result: string, callback?: () => void): void;

    /** This event fires everytime a captive portal is detected on a network matching any of the currently registered network filters and the user consents to use the extension for authentication. Network filters may be set using the setNetworkFilter. Upon receiving this event the extension should start its authentication attempt with the captive portal. When the extension finishes its attempt, it must call finishAuthentication with the GUID received with this event and the appropriate authentication result. */
    export var onCaptivePortalDetected: CaptivePorttalDetectedEvent;
}

////////////////////
// Notifications
// https://developer.chrome.com/extensions/notifications
////////////////////
/**
 * Use the chrome.notifications API to create rich notifications using templates and show these notifications to users in the system tray.
 * Permissions:  "notifications"
 * @since Chrome 28
 */
declare namespace chrome.notifications {
    export type TemplateType = "basic" | "image" | "list" | "progress";

    export interface ButtonOptions {
        title: string;
        iconUrl?: string | undefined;
    }

    export interface ItemOptions {
        /** Title of one item of a list notification. */
        title: string;
        /** Additional details about this item. */
        message: string;
    }

    export type NotificationOptions<T extends boolean = false> =
        & {
            /**
             * Optional.
             * Alternate notification content with a lower-weight font.
             * @since Chrome 31
             */
            contextMessage?: string | undefined;
            /** Optional. Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default. */
            priority?: number | undefined;
            /** Optional. A timestamp associated with the notification, in milliseconds past the epoch (e.g. Date.now() + n). */
            eventTime?: number | undefined;
            /** Optional. Text and icons for up to two notification action buttons. */
            buttons?: ButtonOptions[] | undefined;
            /** Optional. Items for multi-item notifications. */
            items?: ItemOptions[] | undefined;
            /**
             * Optional.
             * Current progress ranges from 0 to 100.
             * @since Chrome 30
             */
            progress?: number | undefined;
            /**
             * Optional.
             * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
             * @since Chrome 32
             */
            isClickable?: boolean | undefined;
            /**
             * Optional.
             * A URL to the app icon mask. URLs have the same restrictions as iconUrl. The app icon mask should be in alpha channel, as only the alpha channel of the image will be considered.
             * @since Chrome 38
             */
            appIconMaskUrl?: string | undefined;
            /** Optional. A URL to the image thumbnail for image-type notifications. URLs have the same restrictions as iconUrl. */
            imageUrl?: string | undefined;
            /**
             * Indicates that the notification should remain visible on screen until the user activates or dismisses the notification.
             * This defaults to false.
             * @since Chrome 50
             */
            requireInteraction?: boolean | undefined;
            /**
             * Optional.
             * Indicates that no sounds or vibrations should be made when the notification is being shown. This defaults to false.
             * @since Chrome 70
             */
            silent?: boolean | undefined;
        }
        & (T extends true ? {
                /**
                 * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
                 * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file. Required for notifications.create method.
                 */
                iconUrl: string;
                /** Main notification content. Required for notifications.create method. */
                message: string;
                /** Which type of notification to display. Required for notifications.create method. */
                type: TemplateType;
                /** Title of the notification (e.g. sender name for email). Required for notifications.create method. */
                title: string;
            }
            : {
                /**
                 * Optional.
                 * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
                 * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file. Required for notifications.create method.
                 */
                iconUrl?: string | undefined;
                /** Optional. Main notification content. Required for notifications.create method. */
                message?: string | undefined;
                /** Optional. Which type of notification to display. Required for notifications.create method. */
                type?: TemplateType | undefined;
                /** Optional. Title of the notification (e.g. sender name for email). Required for notifications.create method. */
                title?: string | undefined;
            });

    export interface NotificationClosedEvent
        extends chrome.events.Event<(notificationId: string, byUser: boolean) => void>
    {}

    export interface NotificationClickedEvent extends chrome.events.Event<(notificationId: string) => void> {}

    export interface NotificationButtonClickedEvent
        extends chrome.events.Event<(notificationId: string, buttonIndex: number) => void>
    {}

    export interface NotificationPermissionLevelChangedEvent extends chrome.events.Event<(level: string) => void> {}

    export interface NotificationShowSettingsEvent extends chrome.events.Event<() => void> {}

    /** The notification closed, either by the system or by user action. */
    export var onClosed: NotificationClosedEvent;
    /** The user clicked in a non-button area of the notification. */
    export var onClicked: NotificationClickedEvent;
    /** The user pressed a button in the notification. */
    export var onButtonClicked: NotificationButtonClickedEvent;
    /**
     * The user changes the permission level.
     * @since Chrome 32
     */
    export var onPermissionLevelChanged: NotificationPermissionLevelChangedEvent;
    /**
     * The user clicked on a link for the app's notification settings.
     * @since Chrome 32
     */
    export var onShowSettings: NotificationShowSettingsEvent;

    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
     * The notificationId parameter is required before Chrome 42.
     * @param options Contents of the notification.
     * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
     * The callback is required before Chrome 42.
     */
    export function create(
        notificationId: string,
        options: NotificationOptions<true>,
        callback?: (notificationId: string) => void,
    ): void;
    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
     * The notificationId parameter is required before Chrome 42.
     * @param options Contents of the notification.
     * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
     * The callback is required before Chrome 42.
     */
    export function create(options: NotificationOptions<true>, callback?: (notificationId: string) => void): void;
    /**
     * Updates an existing notification.
     * @param notificationId The id of the notification to be updated. This is returned by notifications.create method.
     * @param options Contents of the notification to update to.
     * @param callback Called to indicate whether a matching notification existed.
     * The callback is required before Chrome 42.
     */
    export function update(
        notificationId: string,
        options: NotificationOptions,
        callback?: (wasUpdated: boolean) => void,
    ): void;
    /**
     * Clears the specified notification.
     * @param notificationId The id of the notification to be cleared. This is returned by notifications.create method.
     * @param callback Called to indicate whether a matching notification existed.
     * The callback is required before Chrome 42.
     */
    export function clear(notificationId: string, callback?: (wasCleared: boolean) => void): void;
    /**
     * Retrieves all the notifications.
     * @since Chrome 29
     * @param callback Returns the set of notification_ids currently in the system.
     */
    export function getAll(callback: (notifications: object) => void): void;
    /**
     * Retrieves whether the user has enabled notifications from this app or extension.
     * @since Chrome 32
     * @param callback Returns the current permission level.
     */
    export function getPermissionLevel(callback: (level: string) => void): void;
}

////////////////////
// Offscreen
////////////////////
/**
 * Use the offscreen API to create and manage offscreen documents.
 * @since Chrome 109, MV3
 * Permissions: "offscreen"
 */
declare namespace chrome.offscreen {
    /** The reason(s) the extension is creating the offscreen document. */
    export enum Reason {
        /** A reason used for testing purposes only. */
        TESTING = "TESTING",
        /** The offscreen document is responsible for playing audio. */
        AUDIO_PLAYBACK = "AUDIO_PLAYBACK",
        /** The offscreen document needs to embed and script an iframe in order to modify the iframe's content. */
        IFRAME_SCRIPTING = "IFRAME_SCRIPTING",
        /** The offscreen document needs to embed an iframe and scrape its DOM to extract information. */
        DOM_SCRAPING = "DOM_SCRAPING",
        /** The offscreen document needs to interact with Blob objects (including URL.createobjectURL()). */
        BLOBS = "BLOBS",
        /** The offscreen document needs to use the DOMParser API. */
        DOM_PARSER = "DOM_PARSER",
        /** The offscreen document needs to interact with media streams from user media (e.g. getUserMedia()). */
        USER_MEDIA = "USER_MEDIA",
        /** The offscreen document needs to interact with media streams from display media (e.g. getDisplayMedia()). */
        DISPLAY_MEDIA = "DISPLAY_MEDIA",
        /** The offscreen document needs to use WebRTC APIs. */
        WEB_RTC = "WEB_RTC",
        /** The offscreen document needs to interact with the clipboard APIs(e.g. Navigator.clipboard). */
        CLIPBOARD = "CLIPBOARD",
        /** Specifies that the offscreen document needs access to localStorage. */
        LOCAL_STORAGE = "LOCAL_STORAGE",
        /** Specifies that the offscreen document needs to spawn workers. */
        WORKERS = "WORKERS",
        /** Specifies that the offscreen document needs to use navigator.getBattery. */
        BATTERY_STATUS = "BATTERY_STATUS",
        /** Specifies that the offscreen document needs to use window.matchMedia. */
        MATCH_MEDIA = "MATCH_MEDIA",
        /** Specifies that the offscreen document needs to use navigator.geolocation. */
        GEOLOCATION = "GEOLOCATION",
    }

    /** The parameters describing the offscreen document to create. */
    export interface CreateParameters {
        /** The reason(s) the extension is creating the offscreen document. */
        reasons: Reason[];
        /** The (relative) URL to load in the document. */
        url: string;
        /** A developer-provided string that explains, in more detail, the need for the background context. The user agent _may_ use this in display to the user. */
        justification: string;
    }

    /**
     * Creates a new offscreen document for the extension.
     * @param parameters The parameters describing the offscreen document to create.
     * @return The `createDocument` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function createDocument(parameters: CreateParameters): Promise<void>;
    /**
     * Creates a new offscreen document for the extension.
     * @param parameters The parameters describing the offscreen document to create.
     * @param callback Invoked when the offscreen document is created and has completed its initial page load.
     */
    export function createDocument(parameters: CreateParameters, callback: () => void): void;

    /**
     * Closes the currently-open offscreen document for the extension.
     * @return The `closeDocument` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function closeDocument(): Promise<void>;
    /**
     * Closes the currently-open offscreen document for the extension.
     * @param callback Invoked when the offscreen document has been closed.
     */
    export function closeDocument(callback: () => void): void;

    /**
     * Determines whether the extension has an active document.
     * @return The `hasDocument` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function hasDocument(): Promise<boolean>;
    /**
     * Determines whether the extension has an active document.
     * @param callback Invoked with the result of whether the extension has an active offscreen document.
     */
    export function hasDocument(callback: (result: boolean) => void): void;
}

////////////////////
// Omnibox
////////////////////
/**
 * The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox.
 * Manifest:  "omnibox": {...}
 * @since Chrome 9
 */
declare namespace chrome.omnibox {
    /** A suggest result. */
    export interface SuggestResult {
        /** The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry. */
        content: string;
        /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484 */
        description: string;
        /**
         * Whether the suggest result can be deleted by the user.
         * @since Chrome 63
         */
        deletable?: boolean | undefined;
    }

    export interface Suggestion {
        /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. */
        description: string;
    }

    /** The window disposition for the omnibox query. This is the recommended context to display results. */
    export type OnInputEnteredDisposition = "currentTab" | "newForegroundTab" | "newBackgroundTab";

    export interface OmniboxInputEnteredEvent
        extends chrome.events.Event<(text: string, disposition: OnInputEnteredDisposition) => void>
    {}

    export interface OmniboxInputChangedEvent
        extends chrome.events.Event<(text: string, suggest: (suggestResults: SuggestResult[]) => void) => void>
    {}

    export interface OmniboxInputStartedEvent extends chrome.events.Event<() => void> {}

    export interface OmniboxInputCancelledEvent extends chrome.events.Event<() => void> {}

    export interface OmniboxSuggestionDeletedEvent extends chrome.events.Event<(text: string) => void> {}

    /**
     * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the first suggestion row underneath the URL bar.
     * @param suggestion A partial SuggestResult object, without the 'content' parameter.
     */
    export function setDefaultSuggestion(suggestion: Suggestion): void;

    /** User has accepted what is typed into the omnibox. */
    export var onInputEntered: OmniboxInputEnteredEvent;
    /** User has changed what is typed into the omnibox. */
    export var onInputChanged: OmniboxInputChangedEvent;
    /** User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent exactly once per input session, and before any onInputChanged events. */
    export var onInputStarted: OmniboxInputStartedEvent;
    /** User has ended the keyword input session without accepting the input. */
    export var onInputCancelled: OmniboxInputCancelledEvent;
    /**
     * User has deleted a suggested result
     * @since Chrome 63
     */
    export var onDeleteSuggestion: OmniboxSuggestionDeletedEvent;
}

////////////////////
// Page Action
////////////////////
/**
 * Use the chrome.pageAction API to put icons inside the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages.
 * Manifest:  "page_action": {...}
 * @since Chrome 5
 */
declare namespace chrome.pageAction {
    export interface PageActionClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

    export interface TitleDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The tooltip string. */
        title: string;
    }

    export interface GetDetails {
        /** Specify the tab to get the title from. */
        tabId: number;
    }

    export interface PopupDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface IconDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /**
         * Optional.
         * @deprecated This argument is ignored.
         */
        iconIndex?: number | undefined;
        /**
         * Optional.
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?: ImageData | { [index: number]: ImageData } | undefined;
        /**
         * Optional.
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: string | { [index: string]: string } | undefined;
    }

    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     * @param callback Supported since Chrome 67
     */
    export function hide(tabId: number, callback?: () => void): void;
    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     * @param callback Supported since Chrome 67
     */
    export function show(tabId: number, callback?: () => void): void;
    /**
     * Sets the title of the page action. This is displayed in a tooltip over the page action.
     * @param callback Supported since Chrome 67
     */
    export function setTitle(details: TitleDetails, callback?: () => void): void;
    /**
     * Sets the html document to be opened as a popup when the user clicks on the page action's icon.
     * @param callback Supported since Chrome 67
     */
    export function setPopup(details: PopupDetails, callback?: () => void): void;
    /**
     * Gets the title of the page action.
     * @since Chrome 19
     */
    export function getTitle(details: GetDetails, callback: (result: string) => void): void;
    /**
     * Gets the html document set as the popup for this page action.
     * @since Chrome 19
     */
    export function getPopup(details: GetDetails, callback: (result: string) => void): void;
    /**
     * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
     */
    export function setIcon(details: IconDetails, callback?: () => void): void;

    /** Fired when a page action icon is clicked. This event will not fire if the page action has a popup. */
    export var onClicked: PageActionClickedEvent;
}

////////////////////
// Page Capture
////////////////////
/**
 * Use the chrome.pageCapture API to save a tab as MHTML.
 * Permissions:  "pageCapture"
 * @since Chrome 18
 */
declare namespace chrome.pageCapture {
    export interface SaveDetails {
        /** The id of the tab to save as MHTML. */
        tabId: number;
    }

    /**
     * Saves the content of the tab with given id as MHTML.
     * @param callback Called when the MHTML has been generated.
     * Parameter mhtmlData: The MHTML data as a Blob.
     */
    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData?: Blob) => void): void;
    /**
     * Saves the content of the tab with given id as MHTML.
     * @since Chrome 116 MV3
     */
    export function saveAsMHTML(details: SaveDetails): Promise<Blob | undefined>;
}

////////////////////
// Permissions
////////////////////
/**
 * Use the chrome.permissions API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
 * @since Chrome 16
 */
declare namespace chrome.permissions {
    export interface Permissions {
        /**
         * Optional.
         * List of named permissions (does not include hosts or origins). Anything listed here must appear in the optional_permissions list in the manifest.
         */
        permissions?: string[] | undefined;
        /**
         * Optional.
         * List of origin permissions. Anything listed here must be a subset of a host that appears in the optional host permission list in the manifest (optional_permissions in MV2, optional_host_permissions in MV3). For example, if http://*.example.com/ or http://* appears in the optional permissions, you can request an origin of http://help.example.com/. Any path is ignored.
         */
        origins?: string[] | undefined;
    }

    export interface PermissionsRemovedEvent {
        addListener(callback: (/** The permissions that have been removed*/ permissions: Permissions) => void): void;
    }

    export interface PermissionsAddedEvent {
        addListener(callback: (/** The newly-acquired permissions*/ permissions: Permissions) => void): void;
    }

    /**
     * Checks if the extension has the specified permissions.
     * @return A Promise that resolves with boolean: True if the extension has the specified permissions.
     */
    export function contains(permissions: Permissions): Promise<boolean>;
    /**
     * Checks if the extension has the specified permissions.
     * Parameter result: True if the extension has the specified permissions.
     */
    export function contains(permissions: Permissions, callback: (result: boolean) => void): void;
    /**
     * Gets the extension's current set of permissions.
     * @return A Promise that resolves with Permissions object describing the extension's active permissions.
     */
    export function getAll(): Promise<Permissions>;
    /**
     * Gets the extension's current set of permissions.
     */
    export function getAll(callback: (permissions: Permissions) => void): void;
    /**
     * Requests access to the specified permissions. These permissions must be defined in the optional_permissions or optional_host_permissions (MV3 only) fields of the manifest. If there are any problems requesting the permissions, runtime.lastError will be set.
     * @return A Promise that resolves with boolean: True if the user granted the specified permissions.
     */
    export function request(permissions: Permissions): Promise<boolean>;
    /**
     * Requests access to the specified permissions. These permissions must be defined in the optional_permissions or optional_host_permissions (MV3 only) fields of the manifest. If there are any problems requesting the permissions, runtime.lastError will be set.
     * Parameter granted: True if the user granted the specified permissions.
     */
    export function request(permissions: Permissions, callback?: (granted: boolean) => void): void;
    /**
     * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
     * @return A Promise that resolves with boolean: True if the permissions were removed.
     */
    export function remove(permissions: Permissions): Promise<boolean>;
    /**
     * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
     * Parameter removed: True if the permissions were removed.
     */
    export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void;

    /** Fired when access to permissions has been removed from the extension. */
    export var onRemoved: PermissionsRemovedEvent;
    /** Fired when the extension acquires new permissions. */
    export var onAdded: PermissionsAddedEvent;
}

////////////////////
// Platform Keys
////////////////////
/**
 * Use the chrome.platformKeys API to access client certificates managed by the platform. If the user or policy grants the permission, an extension can use such a certficate in its custom authentication protocol. E.g. this allows usage of platform managed certificates in third party VPNs (see chrome.vpnProvider).
 * Permissions:  "platformKeys"
 * Important: This API works only on Chrome OS.
 * @since Chrome 45
 */
declare namespace chrome.platformKeys {
    export interface Match {
        /** The DER encoding of a X.509 certificate. */
        certificate: ArrayBuffer;
        /** The  KeyAlgorithm of the certified key. This contains algorithm parameters that are inherent to the key of the certificate (e.g. the key length). Other parameters like the hash function used by the sign function are not included. */
        keyAlgorithm: KeyAlgorithm;
    }

    export interface ClientCertificateSelectRequestDetails {
        /** This field is a list of the types of certificates requested, sorted in order of the server's preference. Only certificates of a type contained in this list will be retrieved. If certificateTypes is the empty list, however, certificates of any type will be returned. */
        certificateTypes: string[];
        /** List of distinguished names of certificate authorities allowed by the server. Each entry must be a DER-encoded X.509 DistinguishedName. */
        certificateAuthorities: ArrayBuffer[];
    }

    export interface ClientCertificateSelectDetails {
        /** Only certificates that match this request will be returned. */
        request: ClientCertificateSelectRequestDetails;
        /**
         * Optional.
         * If given, the selectClientCertificates operates on this list. Otherwise, obtains the list of all certificates from the platform's certificate stores that are available to this extensions. Entries that the extension doesn't have permission for or which doesn't match the request, are removed.
         */
        clientCerts?: ArrayBuffer[] | undefined;
        /** If true, the filtered list is presented to the user to manually select a certificate and thereby granting the extension access to the certificate(s) and key(s). Only the selected certificate(s) will be returned. If is false, the list is reduced to all certificates that the extension has been granted access to (automatically or manually). */
        interactive: boolean;
    }

    export interface ServerCertificateVerificationDetails {
        /** Each chain entry must be the DER encoding of a X.509 certificate, the first entry must be the server certificate and each entry must certify the entry preceding it. */
        serverCertificateChain: ArrayBuffer[];
        /** The hostname of the server to verify the certificate for, e.g. the server that presented the serverCertificateChain. */
        hostname: string;
    }

    export interface ServerCertificateVerificationResult {
        /** The result of the trust verification: true if trust for the given verification details could be established and false if trust is rejected for any reason. */
        trusted: boolean;
        /**
         * If the trust verification failed, this array contains the errors reported by the underlying network layer. Otherwise, this array is empty.
         * Note: This list is meant for debugging only and may not contain all relevant errors. The errors returned may change in future revisions of this API, and are not guaranteed to be forwards or backwards compatible.
         */
        debug_errors: string[];
    }

    /**
     * This function filters from a list of client certificates the ones that are known to the platform, match request and for which the extension has permission to access the certificate and its private key. If interactive is true, the user is presented a dialog where they can select from matching certificates and grant the extension access to the certificate. The selected/filtered client certificates will be passed to callback.
     * Parameter matches: The list of certificates that match the request, that the extension has permission for and, if interactive is true, that were selected by the user.
     */
    export function selectClientCertificates(
        details: ClientCertificateSelectDetails,
        callback: (matches: Match[]) => void,
    ): void;
    /**
     * Passes the key pair of certificate for usage with platformKeys.subtleCrypto to callback.
     * @param certificate The certificate of a Match returned by selectClientCertificates.
     * @param parameters Determines signature/hash algorithm parameters additionally to the parameters fixed by the key itself. The same parameters are   accepted as by WebCrypto's importKey function, e.g. RsaHashedImportParams for a RSASSA-PKCS1-v1_5 key. For RSASSA-PKCS1-v1_5 keys, additionally the parameters { 'hash': { 'name': 'none' } } are supported. The sign function will then apply PKCS#1 v1.5 padding and but not hash the given data.
     * @param callback The public and private CryptoKey of a certificate which can only be used with platformKeys.subtleCrypto.
     * Optional parameter privateKey: Might be null if this extension does not have access to it.
     */
    export function getKeyPair(
        certificate: ArrayBuffer,
        parameters: object,
        callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void,
    ): void;
    /**
     * Passes the key pair of publicKeySpkiDer for usage with platformKeys.subtleCrypto to callback.
     * @param publicKeySpkiDer A DER-encoded X.509 SubjectPublicKeyInfo, obtained e.g. by calling WebCrypto's exportKey function with format="spki".
     * @param parameters Provides signature and hash algorithm parameters, in addition to those fixed by the key itself. The same parameters are accepted as by WebCrypto's importKey function, e.g. RsaHashedImportParams for a RSASSA-PKCS1-v1_5 key. For RSASSA-PKCS1-v1_5 keys, we need to also pass a "hash" parameter { "hash": { "name": string } }. The "hash" parameter represents the name of the hashing algorithm to be used in the digest operation before a sign. It is possible to pass "none" as the hash name, in which case the sign function will apply PKCS#1 v1.5 padding and but not hash the given data.
     * Currently, this function only supports the "RSASSA-PKCS1-v1_5" algorithm with one of the hashing algorithms "none", "SHA-1", "SHA-256", "SHA-384", and "SHA-512".
     * @param callback The public and private CryptoKey of a certificate which can only be used with platformKeys.subtleCrypto.
     * Optional parameter privateKey: Might be null if this extension does not have access to it.
     * @since Chrome 85
     */
    export function getKeyPairBySpki(
        publicKeySpkiDer: ArrayBuffer,
        parameters: object,
        callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void,
    ): void;
    /** An implementation of WebCrypto's  SubtleCrypto that allows crypto operations on keys of client certificates that are available to this extension. */
    export function subtleCrypto(): SubtleCrypto;
    /**
     * Checks whether details.serverCertificateChain can be trusted for details.hostname according to the trust settings of the platform. Note: The actual behavior of the trust verification is not fully specified and might change in the future. The API implementation verifies certificate expiration, validates the certification path and checks trust by a known CA. The implementation is supposed to respect the EKU serverAuth and to support subject alternative names.
     */
    export function verifyTLSServerCertificate(
        details: ServerCertificateVerificationDetails,
        callback: (result: ServerCertificateVerificationResult) => void,
    ): void;
}

////////////////////
// Power
////////////////////
/**
 * Use the chrome.power API to override the system's power management features.
 * Permissions: "power"
 * @since Chrome 27
 */
declare namespace chrome.power {
    export enum Level {
        /** Prevents the display from being turned off or dimmed, or the system from sleeping in response to user inactivity */
        DISPLAY = "display",
        /** Prevents the system from sleeping in response to user inactivity. */
        SYSTEM = "system",
    }

    /** Requests that power management be temporarily disabled. `level` describes the degree to which power management should be disabled. If a request previously made by the same app is still active, it will be replaced by the new request. */
    export function requestKeepAwake(level: `${Level}`): void;

    /** Releases a request previously made via requestKeepAwake(). */
    export function releaseKeepAwake(): void;

    /**
     * Reports a user activity in order to awake the screen from a dimmed or turned off state or from a screensaver. Exits the screensaver if it is currently active.
     * Can return its result via Promise in Manifest V3 or later.
     * @platform ChromeOS only
     * @since Chrome 113
     */
    export function reportActivity(): Promise<void>;
    export function reportActivity(callback: () => void): void;
}

////////////////////
// Printer Provider
////////////////////
/**
 * The chrome.printerProvider API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers.
 * Permissions:  "printerProvider"
 * @since Chrome 44
 */
declare namespace chrome.printerProvider {
    export interface PrinterInfo {
        /** Unique printer ID. */
        id: string;
        /** Printer's human readable name. */
        name: string;
        /** Optional. Printer's human readable description. */
        description?: string | undefined;
    }

    export interface PrinterCapabilities {
        /** Device capabilities in CDD format. */
        capabilities: any;
    }

    export interface PrintJob {
        /** ID of the printer which should handle the job. */
        printerId: string;
        /** The print job title. */
        title: string;
        /** Print ticket in  CJT format. */
        ticket: object;
        /** The document content type. Supported formats are "application/pdf" and "image/pwg-raster". */
        contentType: string;
        /** Blob containing the document data to print. Format must match |contentType|. */
        document: Blob;
    }

    export interface PrinterRequestedEvent
        extends chrome.events.Event<(resultCallback: (printerInfo: PrinterInfo[]) => void) => void>
    {}

    export interface PrinterInfoRequestedEvent
        extends chrome.events.Event<(device: any, resultCallback: (printerInfo?: PrinterInfo) => void) => void>
    {}

    export interface CapabilityRequestedEvent extends
        chrome.events.Event<
            (printerId: string, resultCallback: (capabilities: PrinterCapabilities) => void) => void
        >
    {}

    export interface PrintRequestedEvent
        extends chrome.events.Event<(printJob: PrintJob, resultCallback: (result: string) => void) => void>
    {}

    /** Event fired when print manager requests printers provided by extensions. */
    export var onGetPrintersRequested: PrinterRequestedEvent;
    /**
     * Event fired when print manager requests information about a USB device that may be a printer.
     * Note: An application should not rely on this event being fired more than once per device. If a connected device is supported it should be returned in the onGetPrintersRequested event.
     * @since Chrome 45
     */
    export var onGetUsbPrinterInfoRequested: PrinterInfoRequestedEvent;
    /** Event fired when print manager requests printer capabilities. */
    export var onGetCapabilityRequested: CapabilityRequestedEvent;
    /** Event fired when print manager requests printing. */
    export var onPrintRequested: PrintRequestedEvent;
}

////////////////////
// Privacy
////////////////////
/**
 * Use the chrome.privacy API to control usage of the features in Chrome that can affect a user's privacy. This API relies on the ChromeSetting prototype of the type API for getting and setting Chrome's configuration.
 * Permissions:  "privacy"
 * The Chrome Privacy Whitepaper gives background detail regarding the features which this API can control.
 * @since Chrome 18
 */
declare namespace chrome.privacy {
    export interface Services {
        /** @since Chrome 20 */
        spellingServiceEnabled: chrome.types.ChromeSetting;
        searchSuggestEnabled: chrome.types.ChromeSetting;
        instantEnabled: chrome.types.ChromeSetting;
        alternateErrorPagesEnabled: chrome.types.ChromeSetting;
        safeBrowsingEnabled: chrome.types.ChromeSetting;
        /** @deprecated since Chrome 70. Please use privacy.services.autofillAddressEnabled and privacy.services.autofillCreditCardEnabled. */
        autofillEnabled: chrome.types.ChromeSetting;
        translationServiceEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 38 */
        passwordSavingEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 42 */
        hotwordSearchEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 42 */
        safeBrowsingExtendedReportingEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 70 */
        autofillAddressEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 70 */
        autofillCreditCardEnabled: chrome.types.ChromeSetting;
    }

    export interface Network {
        networkPredictionEnabled: chrome.types.ChromeSetting;
        /** @deprecated since Chrome 48. Please use privacy.network.webRTCIPHandlingPolicy. */
        webRTCMultipleRoutesEnabled: chrome.types.ChromeSetting;
        /** @deprecated since Chrome 48. Please use privacy.network.webRTCIPHandlingPolicy. */
        webRTCNonProxiedUdpEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 48 */
        webRTCIPHandlingPolicy: chrome.types.ChromeSetting;
    }

    export interface Websites {
        thirdPartyCookiesAllowed: chrome.types.ChromeSetting;
        referrersEnabled: chrome.types.ChromeSetting;
        hyperlinkAuditingEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 21. Available on Windows and ChromeOS only. */
        protectedContentEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 65 */
        doNotTrackEnabled: chrome.types.ChromeSetting;
    }

    /** Settings that enable or disable features that require third-party network services provided by Google and your default search provider. */
    export var services: Services;
    /** Settings that influence Chrome's handling of network connections in general. */
    export var network: Network;
    /** Settings that determine what information Chrome makes available to websites. */
    export var websites: Websites;
}

////////////////////
// Proxy
////////////////////
/**
 * Use the chrome.proxy API to manage Chrome's proxy settings. This API relies on the ChromeSetting prototype of the type API for getting and setting the proxy configuration.
 * Permissions:  "proxy"
 * @since Chrome 13
 */
declare namespace chrome.proxy {
    /** An object holding proxy auto-config information. Exactly one of the fields should be non-empty. */
    export interface PacScript {
        /** Optional. URL of the PAC file to be used. */
        url?: string | undefined;
        /** Optional. If true, an invalid PAC script will prevent the network stack from falling back to direct connections. Defaults to false. */
        mandatory?: boolean | undefined;
        /** Optional. A PAC script. */
        data?: string | undefined;
    }

    /** An object encapsulating a complete proxy configuration. */
    export interface ProxyConfig {
        /** Optional. The proxy rules describing this configuration. Use this for 'fixed_servers' mode. */
        rules?: ProxyRules | undefined;
        /** Optional. The proxy auto-config (PAC) script for this configuration. Use this for 'pac_script' mode. */
        pacScript?: PacScript | undefined;
        /**
         * 'direct' = Never use a proxy
         * 'auto_detect' = Auto detect proxy settings
         * 'pac_script' = Use specified PAC script
         * 'fixed_servers' = Manually specify proxy servers
         * 'system' = Use system proxy settings
         */
        mode: string;
    }

    /** An object encapsulating a single proxy server's specification. */
    export interface ProxyServer {
        /** The URI of the proxy server. This must be an ASCII hostname (in Punycode format). IDNA is not supported, yet. */
        host: string;
        /** Optional. The scheme (protocol) of the proxy server itself. Defaults to 'http'. */
        scheme?: string | undefined;
        /** Optional. The port of the proxy server. Defaults to a port that depends on the scheme. */
        port?: number | undefined;
    }

    /** An object encapsulating the set of proxy rules for all protocols. Use either 'singleProxy' or (a subset of) 'proxyForHttp', 'proxyForHttps', 'proxyForFtp' and 'fallbackProxy'. */
    export interface ProxyRules {
        /** Optional. The proxy server to be used for FTP requests. */
        proxyForFtp?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for HTTP requests. */
        proxyForHttp?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for everything else or if any of the specific proxyFor... is not specified. */
        fallbackProxy?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for all per-URL requests (that is http, https, and ftp). */
        singleProxy?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for HTTPS requests. */
        proxyForHttps?: ProxyServer | undefined;
        /** Optional. List of servers to connect to without a proxy server. */
        bypassList?: string[] | undefined;
    }

    export interface ErrorDetails {
        /** Additional details about the error such as a JavaScript runtime error. */
        details: string;
        /** The error description. */
        error: string;
        /** If true, the error was fatal and the network transaction was aborted. Otherwise, a direct connection is used instead. */
        fatal: boolean;
    }

    export interface ProxyErrorEvent extends chrome.events.Event<(details: ErrorDetails) => void> {}

    export var settings: chrome.types.ChromeSetting;
    /** Notifies about proxy errors. */
    export var onProxyError: ProxyErrorEvent;
}

////////////////////
// Search
////////////////////
/**
 * Use the chrome.search API to search via the default provider.
 * Permissions:  "search"
 */

declare namespace chrome.search {
    export type Disposition = "CURRENT_TAB" | "NEW_TAB" | "NEW_WINDOW";

    export interface QueryInfo {
        /** Location where search results should be displayed. CURRENT_TAB is the default.  */
        disposition?: Disposition | undefined;
        /** Location where search results should be displayed. tabIdcannot be used with disposition. */
        tabId?: number | undefined;
        /** String to query with the default search provider. */
        text?: string | undefined;
    }

    /**
     * Used to query the default search provider. In case of an error, runtime.lastError will be set.
     * @param options search configuration options.
     */
    export function query(options: QueryInfo, callback: () => void): void;

    /**
     * Used to query the default search provider. In case of an error, runtime.lastError will be set.
     * @param options search configuration options.
     * @return The `query` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function query(options: QueryInfo): Promise<void>;
}

////////////////////
// Serial
////////////////////
/**
 * Use the <code>chrome.serial</code> API to read from and write to a device connected to a serial port.
 * Permissions:  "enterprise.serial"
 * @since Chrome 29
 * Important: This API works only on Chrome OS.
 * @deprecated Part of the deprecated Chrome Apps platform
 */
declare namespace chrome.serial {
    export const DataBits: {
        SEVEN: "seven";
        EIGHT: "eight";
    };
    export const ParityBit: {
        NO: "no";
        ODD: "odd";
        EVEN: "even";
    };
    export const StopBits: {
        ONE: "one";
        TWO: "two";
    };

    export interface DeviceInfo {
        /** The device's system path. This should be passed as the path argument to chrome.serial.connect in order to connect to this device. */
        path: string;
        /** Optional. A PCI or USB vendor ID if one can be determined for the underlying device. */
        vendorId?: number | undefined;
        /** Optional. A USB product ID if one can be determined for the underlying device. */
        productId?: number | undefined;
        /** Optional. A human-readable display name for the underlying device if one can be queried from the host driver. */
        displayName?: number | undefined;
    }

    export interface ConnectionInfo {
        /** The id of the serial port connection. */
        connectionId?: number | undefined;
        /** Flag indicating whether the connection is blocked from firing onReceive events. */
        paused: boolean;
        /** See ConnectionOptions.persistent */
        persistent: boolean;
        /** See ConnectionOptions.name */
        name: string;
        /** See ConnectionOptions.bufferSize */
        bufferSize: number;
        /** See ConnectionOptions.receiveTimeout */
        receiveTimeout?: number | undefined;
        /** See ConnectionOptions.sendTimeout */
        sendTimeout?: number | undefined;
        /** Optional. See ConnectionOptions.bitrate.
         * This field may be omitted or inaccurate if a non-standard bitrate is in use, or if an error occurred while querying the underlying device. */
        bitrate?: number | undefined;
        /** Optional. See ConnectionOptions.dataBits. This field may be omitted if an error occurred while querying the underlying device. */
        dataBits?: typeof DataBits[keyof typeof DataBits] | undefined;
        /** Optional. See ConnectionOptions.parityBit. This field may be omitted if an error occurred while querying the underlying device. */
        parityBit?: typeof ParityBit[keyof typeof ParityBit] | undefined;
        /** Optional. See ConnectionOptions.stopBits. This field may be omitted if an error occurred while querying the underlying device. */
        stopBits?: typeof StopBits[keyof typeof StopBits] | undefined;
        /** Optional. Flag indicating whether or not to enable RTS/CTS hardware flow control. Defaults to false. */
        ctsFlowControl?: boolean | undefined;
    }

    export interface ConnectionOptions {
        /** Optional. Flag indicating whether or not the connection should be left open when the application is suspended (see Manage App Lifecycle: https://developer.chrome.com/apps/app_lifecycle).
         *  The default value is "false." When the application is loaded, any serial connections previously opened with persistent=true can be fetched with getConnections. */
        persistent?: boolean | undefined;
        /** Optional. An application-defined string to associate with the connection. */
        name?: string | undefined;
        /** Optional. The size of the buffer used to receive data. The default value is 4096. */
        bufferSize?: number | undefined;
        /** Optional. The requested bitrate of the connection to be opened.
         * For compatibility with the widest range of hardware, this number should match one of commonly-available bitrates,
         * such as 110, 300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, 115200.
         * There is no guarantee, of course, that the device connected to the serial port will support the requested bitrate, even if the port itself supports that bitrate.
         * 9600 will be passed by default. */
        bitrate?: number | undefined;
        /** Optional. "eight" will be passed by default. */
        dataBits?: typeof DataBits[keyof typeof DataBits] | undefined;
        /** Optional. "no" will be passed by default. */
        parityBit?: typeof ParityBit[keyof typeof ParityBit] | undefined;
        /** Optional. "one" will be passed by default. */
        stopBits?: typeof StopBits[keyof typeof StopBits] | undefined;
        /** Optional. Flag indicating whether or not to enable RTS/CTS hardware flow control. Defaults to false. */
        ctsFlowControl?: boolean | undefined;
        /** Optional. The maximum amount of time (in milliseconds) to wait for new data before raising an onReceiveError event with a "timeout" error.
         * If zero, receive timeout errors will not be raised for the connection.
         * Defaults to 0. */
        receiveTimeout?: number | undefined;
        /** Optional. The maximum amount of time (in milliseconds) to wait for a send operation to complete before calling the callback with a "timeout" error.
         * If zero, send timeout errors will not be triggered.
         * Defaults to 0. */
        sendTimeout?: number | undefined;
    }

    /**
     * @since Chrome 33
     * @description Returns information about available serial devices on the system. The list is regenerated each time this method is called.
     * @param callback Called with the list of DeviceInfo objects.
     */
    export function getDevices(callback: (ports: DeviceInfo[]) => void): void;

    /**
     * @since Chrome 33
     * @description Connects to a given serial port.
     * @param path The system path of the serial port to open.
     * @param options Port configuration options.
     * @param callback Called when the connection has been opened.
     */
    export function connect(
        path: string,
        options: ConnectionOptions,
        callback: (connectionInfo: ConnectionInfo) => void,
    ): void;

    /**
     * @since Chrome 33
     * @description Update the option settings on an open serial port connection.
     * @param connectionId The id of the opened connection.
     * @param options Port configuration options.
     * @param callback Called when the configuration has completed.
     */
    export function update(connectionId: number, options: ConnectionOptions, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 33
     * @description Disconnects from a serial port.
     * @param connectionId The id of the opened connection.
     * @param callback Called when the connection has been closed.
     */
    export function disconnect(connectionId: number, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 33
     * @description Pauses or unpauses an open connection.
     * @param connectionId The id of the opened connection.
     * @param paused Flag to indicate whether to pause or unpause.
     * @param callback Called when the connection has been successfully paused or unpaused.
     */
    export function setPaused(connectionId: number, paused: boolean, callback: () => void): void;

    /**
     * @since Chrome 33
     * @description Retrieves the state of a given connection.
     * @param callback Called with connection state information when available.
     */
    export function getInfo(callback: (connectionInfos: ConnectionInfo[]) => void): void;

    /**
     * @since Chrome 33
     * @description Retrieves the list of currently opened serial port connections owned by the application.
     * @param callback Called with the list of connections when available.
     */
    export function getConnections(callback: (connectionInfos: ConnectionInfo[]) => void): void;

    /**
     * @since Chrome 33
     * @description Writes data to the given connection.
     * @param connectionId The id of the connection.
     * @param data The data to send.
     * @param callback Called when the operation has completed.
     */
    export function send(connectionId: number, data: ArrayBuffer, callback: (sendInfo: object) => void): void;

    /**
     * @description Flushes all bytes in the given connection's input and output buffers.
     * @param connectionId The id of the connection.
     * @param callback
     */
    export function flush(connectionId: number, callback: (result: boolean) => void): void;

    /**
     * @description Retrieves the state of control signals on a given connection.
     * @param connectionId The id of the connection.
     * @param callback Called when the control signals are available.
     */
    export function getControlSignals(connectionId: number, callback: (signals: object) => void): void;

    /**
     * @description Sets the state of control signals on a given connection.
     * @param connectionId The id of the connection.
     * @param signals The set of signal changes to send to the device:
     * boolean:    (optional) dtr - DTR (Data Terminal Ready).
     * boolean:    (optional) rts - RTS (Request To Send).
     * @param callback Called once the control signals have been set.
     */
    export function setControlSignals(connectionId: number, signals: object, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 45
     * @description Suspends character transmission on a given connection and places the transmission line in a break state until the clearBreak is called.
     * @param connectionId The id of the connection.
     * @param callback
     */
    export function setBreak(connectionId: number, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 45
     * @description Restore character transmission on a given connection and place the transmission line in a nonbreak state.
     * @param connectionId The id of the connection.
     * @param callback
     */
    export function clearBreak(connectionId: number, callback: (result: boolean) => void): void;
}

declare namespace chrome.serial.onReceive {
    export interface OnReceiveInfo {
        /** The connection identifier. */
        connectionId: number;
        /** The data received. */
        data: ArrayBuffer;
    }

    /**
     * @since Chrome 33
     * @description Event raised when data has been read from the connection.
     * @param callback
     */
    export function addListener(callback: (info: OnReceiveInfo) => void): void;
}

declare namespace chrome.serial.onReceiveError {
    export const OnReceiveErrorEnum: {
        /* The connection was disconnected. */
        disconnected: "disconnected";
        /* No data has been received for receiveTimeout milliseconds. */
        timeout: "timeout";
        /* The device was most likely disconnected from the host. */
        device_lost: "device_lost";
        /* The device detected a break condition. */
        break: "break";
        /* The device detected a framing error. */
        frame_error: "frame_error";
        /* A character-buffer overrun has occurred. The next character is lost. */
        overrun: "overrun";
        /* An input buffer overflow has occurred. There is either no room in the input buffer, or a character was received after the end-of-file (EOF) character. */
        buffer_overflow: "buffer_overflow";
        /* The device detected a parity error. */
        parity_error: "parity_error";
        /* A system error occurred and the connection may be unrecoverable. */
        system_error: "system_error";
    };

    export interface OnReceiveErrorInfo {
        /** The connection identifier. */
        connectionId: number;
        /** The data received. */
        error: ArrayBuffer;
    }

    /**
     * @since Chrome 33
     * @description Event raised when an error occurred while the runtime was waiting for data on the serial port.
     * Once this event is raised, the connection may be set to paused. A "timeout" error does not pause the connection.
     * @param callback
     */
    export function addListener(callback: (info: OnReceiveErrorInfo) => void): void;
}

type DocumentLifecycle = "prerender" | "active" | "cached" | "pending_deletion";
type FrameType = "outermost_frame" | "fenced_frame" | "sub_frame";
















































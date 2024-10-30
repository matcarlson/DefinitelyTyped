////////////////////
// SystemLog
////////////////////
/**
 * Use the chrome.systemLog API to record Chrome system logs from extensions.
 *
 * Permissions: "systemLog"
 *
 * Note: This API is only for extensions pre-installed by policy.
 * @platform ChromeOS only
 * @since Chrome 125
 */
declare namespace chrome.systemLog {
    export interface MessageOptions {
        message: string;
    }

    /**
     * Adds a new log record.
     * Can return its result via Promise in Manifest V3 or later.
     */
    export function add(options: MessageOptions): Promise<void>;
    export function add(options: MessageOptions, callback: () => void): void;
}
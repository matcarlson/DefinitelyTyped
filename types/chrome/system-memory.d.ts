////////////////////
// System Memory
////////////////////
/**
 * The chrome.system.memory API.
 * Permissions:  "system.memory"
 * @since Chrome 32
 */
declare namespace chrome.system.memory {
    export interface MemoryInfo {
        /** The total amount of physical memory capacity, in bytes. */
        capacity: number;
        /** The amount of available capacity, in bytes. */
        availableCapacity: number;
    }

    /** Get physical memory information. */
    export function getInfo(callback: (info: MemoryInfo) => void): void;

    /**
     * Get physical memory information.
     * @return The `getInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getInfo(): Promise<MemoryInfo>;
}
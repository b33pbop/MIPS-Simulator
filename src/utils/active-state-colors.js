/**
 * Utility functions for handling critical/non-critical path colors
 */

export const ACTIVE_COLORS = {
    critical: "#2563eb",    // blue - critical path
    nonCritical: "#16a34a", // green - non-critical path
    inactive: "black",      // default inactive color
};

/**
 * Get stroke color based on active state
 * @param {string|boolean} active - "critical", "nonCritical", or false
 * @param {string} defaultColor - default color when inactive (default: "black")
 * @returns {string} - the stroke color
 */
export function getStrokeColor(active, defaultColor = "black") {
    if (active === "critical") return ACTIVE_COLORS.critical;
    if (active === "nonCritical") return ACTIVE_COLORS.nonCritical;
    return defaultColor;
}

/**
 * Get stroke width based on active state
 * @param {string|boolean} active - "critical", "nonCritical", or false
 * @param {number} activeWidth - width when active (default: 3)
 * @param {number} inactiveWidth - width when inactive (default: 1)
 * @returns {number} - the stroke width
 */
export function getStrokeWidth(active, activeWidth = 3, inactiveWidth = 1) {
    return (active === "critical" || active === "nonCritical") ? activeWidth : inactiveWidth;
}

/**
 * Check if the component is in any active state
 * @param {string|boolean} active - "critical", "nonCritical", or false
 * @returns {boolean}
 */
export function isActive(active) {
    return active === "critical" || active === "nonCritical";
}

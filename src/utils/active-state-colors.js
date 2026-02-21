/**
 * Utility functions for handling critical/non-critical path colors
 * VisualGo-inspired color scheme - Light Theme
 */

export const ACTIVE_COLORS = {
    critical: "#2563eb",    // vibrant blue - critical path
    nonCritical: "#d97706", // darker amber/orange - non-critical path
    inactive: "#94a3b8",    // muted gray - default inactive color
};

/**
 * Get stroke color based on active state
 * @param {string|boolean} active - "critical", "nonCritical", or false
 * @param {string} defaultColor - default color when inactive (default: "#64748b")
 * @returns {string} - the stroke color
 */
export function getStrokeColor(active, defaultColor = "#64748b") {
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

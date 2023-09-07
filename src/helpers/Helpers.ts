/**
 * Check if the given string is a valid URL
 *
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is valid, false otherwise
 */
export function isURL(url: string): boolean {
  return /^(http|https):\/\/[^ "]+$/.test(url);
}

/**
 * Create a valid image path
 *
 * @param {string} url - The URL to check
 * @returns {string} - The valid image path
 */
export function createImagePath(url: string): string {
  return isURL(url) ? url : `/assets/projects/${url}`;
}

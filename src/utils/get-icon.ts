/**
 * Fetches the appropriate icon for the given quiz section.
 *
 * @export
 * @param {string} selectedSection The section to fetch the icon for.
 * @return {(string | null)} The path to the appropriate icon.
 */
export function getIcon(selectedSection: string): string | null {
  return selectedSection
    ? `./assets/images/icon-${selectedSection.toLowerCase()}.svg`
    : null;
}

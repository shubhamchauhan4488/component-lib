import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a unique ID using the uuid library.
 * @param {string} prefix - Prefix to append to the generated ID.
 * @returns {string} A unique ID with an optional prefix.
 */
export const uniqueId = (prefix = ''): string => `${prefix}${uuidv4()}`;
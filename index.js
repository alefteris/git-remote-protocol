'use strict';

const url = require('url');

/**
 * Parse a Git remote URL.
 *
 * @param {string} remoteUrl A Git remote URL.
 * @return {object} The host and path of the parsed URL.
 */
function parseRemote (remoteUrl) {
  const _remoteUrl = remoteUrl.replace(/^git@/, 'ssh://git@');
  const parsedUrl = url.parse(_remoteUrl);
  const host = parsedUrl.host;
  const path = parsedUrl.path.replace(/^\/\:?/, '');
  return {host, path};
}

/**
 * Convert a Git remote URL to the HTTPS protocol.
 *
 * @param {string} remoteUrl A Git remote URL.
 * @return {string} The Git remote URL using the HTTPS protocol.
 */
exports.toHTTPS = function toHTTPS (remoteUrl) {
  const parsedRemote = parseRemote(remoteUrl);
  return `https://${parsedRemote.host}/${parsedRemote.path}`;
};

/**
 * Convert a Git remote URL to the SSH protocol.
 *
 * @param {string} remoteUrl A Git remote URL.
 * @return {string} The Git remote URL using the SSH protocol.
 */
exports.toSSH = function toSSH (remoteUrl) {
  const parsedRemote = parseRemote(remoteUrl);
  return `git@${parsedRemote.host}:${parsedRemote.path}`;
};

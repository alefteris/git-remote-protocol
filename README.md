# git-remote-protocol [![npm version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url]

> Convert an HTTPS Git remote URL to SSH and the opposite.

## Installation

```sh
npm install git-remote-protocol
```

## Usage

```js
const gitRemote = require('git-remote-protocol');

gitRemote.toSSH('https://github.com/torvalds/linux.git')
// git@github.com:torvalds/linux.git
gitRemote.toHTTPS('git@bitbucket.org:mirror/linux.git')
// https://bitbucket.org/mirror/linux.git
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/git-remote-protocol.svg
[npm-url]: https://npmjs.org/package/git-remote-protocol
[travis-image]: https://travis-ci.org/alefteris/git-remote-protocol.svg?branch=master
[travis-url]: https://travis-ci.org/alefteris/git-remote-protocol
[coveralls-image]: https://coveralls.io/repos/alefteris/git-remote-protocol/badge.svg
[coveralls-url]: https://coveralls.io/r/alefteris/git-remote-protocol

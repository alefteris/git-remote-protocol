'use strict';

const test = require('tape');

const gitRemote = require('./index');

const examples = [
  {
    https: 'https://github.com/torvalds/linux.git',
    ssh: 'git@github.com:torvalds/linux.git',
  },
  {
    https: 'https://bitbucket.org/mirror/linux.git',
    ssh: 'git@bitbucket.org:mirror/linux.git',
  },
  {
    https: 'https://gitlab.com/gitlab-org/gitlab-ce.git',
    ssh: 'git@gitlab.com:gitlab-org/gitlab-ce.git',
  },
];

test('Convert HTTPS URLs to SSH URLs', t => {
  t.plan(examples.length);
  examples.forEach(example => {
    t.equal(gitRemote.toSSH(example.https), example.ssh);
  });
});

test('Convert HTTP URL to same type', t => {
  t.plan(examples.length);
  examples.forEach(example => {
    t.equal(gitRemote.toHTTPS(example.https), example.https);
  });
});

test('Convert SSH URLs to HTTPS URLs', t => {
  t.plan(examples.length);
  examples.forEach(example => {
    t.equal(gitRemote.toHTTPS(example.ssh), example.https);
  });
});

test('Convert SSH URL to same type', t => {
  t.plan(examples.length);
  examples.forEach(example => {
    t.equal(gitRemote.toSSH(example.ssh), example.ssh);
  });
});

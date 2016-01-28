// Third party.
import expect     from 'expect';
import deepFreeze from 'deep-freeze';
import React      from 'react';
import TestUtils  from 'react-addons-test-utils';
import { jsdom }  from 'jsdom';

// Set Node environment to test.
process.env.NODE_ENV = 'test';

// Expose globals.
global.expect = expect;
global.deepFreeze = deepFreeze;
global.React = React;
global.TestUtils = TestUtils;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

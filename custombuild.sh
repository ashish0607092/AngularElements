#!/bin/sh
ng build angular-elements --prod --output-hashing=none &&
 cat    dist/angular-elements/polyfills-es2015.js dist/angular-elements/runtime-es2015.js dist/angular-elements/main-es2015.js > angular-element.js

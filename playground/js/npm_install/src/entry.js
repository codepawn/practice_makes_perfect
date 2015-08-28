/** @jsx React.DOM */
'use strict'
require("!style!css!./style/style.css");
var React = require('react')
var Hello = require('./Hello')
React.renderComponent( < Hello / > , document.getElementById('content'));

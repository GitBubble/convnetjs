const compile = require('google-closure-compiler-js').compile;
const path = require('path');
const fs = require('fs');
const root = path.resolve(__dirname,'..'); 

module.exports = { 
  src: path.join(root,'/src/'),
  entry: path.join(root, '/build/'+"nn.js"),
  output: {
    path: path.join(root, '/build/'),
	filename : 'nn.min.js'
  },
  compiler: compile
}; 
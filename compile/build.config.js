const compile = require('google-closure-compiler-js').compile;
const path = require('path');
const fs = require('fs');
const root = path.resolve(__dirname,'..'); 

module.exports = { 
  srcpath: path.join(root,'/src/'),
  entry: path.join(root, '/build/'+"convnet.js"),
  output: {
    path: path.join(root, '/build/'),
	filename : 'convnet.min.js'
  },
  compiler: compile
}; 
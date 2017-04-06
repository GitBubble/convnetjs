var config = require("./build.config.js");
var fs = require('fs');
var src_list = fs.readdirSync(config.src);

var content = '';
src_list.forEach(function(src){
	var stream = fs.readFileSync(config.src + src);
	content += stream;
});

fs.writeFileSync(config.entry,content);

const wrapper = {
	jsCode :[{src:content}],
};

const compresed = config.compiler(wrapper);

fs.writeFileSync(config.output.path+config.output.filename,compresed.compiledCode);
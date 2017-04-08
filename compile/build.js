var config = require("./build.config.js");
var fs = require('fs');

//var src_list = fs.readdirSync(config.srcpath);
// these files have dependency issue, we list files as following sequence
var src_list = [
					"convnet_init.js",
					"convnet_util.js",
					"convnet_vol.js",
					"convnet_vol_util.js",
					"convnet_layers_dotproducts.js",
					"convnet_layers_pool.js",
					"convnet_layers_input.js",
					"convnet_layers_loss.js",
					"convnet_layers_nonlinearities.js",
					"convnet_layers_dropout.js",
					"convnet_layers_normalization.js",
					"convnet_net.js",
					"convnet_trainers.js",
					"convnet_magicnet.js",
					"convnet_export.js"
                ];

var content = '';
src_list.forEach(function(src){
	var stream = fs.readFileSync(config.srcpath + src);
	content += stream;
});

fs.writeFileSync(config.entry,content);

const wrapper = {
	jsCode :[{src:content}],
};

const compresed = config.compiler(wrapper);

fs.writeFileSync(config.output.path+config.output.filename,compresed.compiledCode);

const GUN = (function(){
	require('gun/lib/yson');
	var Gun = require('gun/gun'), u;
	Gun.serve = require('gun/lib/serve');
	//process.env.GUN_ENV = process.env.GUN_ENV || 'debug';
	//console.LOG = {}; // only do this for dev.
	Gun.on('opt', function(root){
		if(u === root.opt.super){ root.opt.super = true }
		if(u === root.opt.faith){ root.opt.faith = true } // HNPERF: This should probably be off, but we're testing performance improvements, please audit.
		root.opt.log = root.opt.log || Gun.log;
		this.to.next(root);
	})
	//require('../nts');
	require('gun/lib/store');
	// require('gun/lib/rfs');
	require('gun/lib/rs3');
	require('gun/lib/wire');

	try{require('gun/sea');}catch(e){}
	try{require('gun/axe');}catch(e){}
	//require('./file');
	//require('./evict');
	// require('./multicast');
	// require('./stats');
	return Gun;
}());


const express = require('express')

const app = express()

const server = require('http').createServer().listen(8080);
const gun = GUN({web: server});

app.all('/', (req, res) => {
    
    console.log("Just got a request!")
    res.send('Yo!')
})

app.listen(server);
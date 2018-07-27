var express = require('express');
var router = express.Router();

var lists =[
	{id:1, username:'yohan'},
	{id:2, username:'hannah'},
	{id:3, username:'Danielle'},
	{id:4, username:'Kass'},
	{id:5, username:'Daian'},
	{id:6, username:'Jean'},
	{id:7, username:'Jeay'},
	{id:8, username:'Aidan'},
	{id:9, username:'Tran'},
	{id:10, username:'Phu'},
	{id:11, username:'hannah'},
	{id:12, username:'Eugene'}				
	];


/* GET users listing. */
router.get('/', function(req, res, next) {


	res.json(lists);

});

router.get('/haha', function(req, res,next) {

	var uname = req.query.uname;

	if(req.query.per){
		var limitPerPage = req.query.per;
	}else{
		var limitPerPage = 3;
	}

	if(req.query.uname){
		var wantedData = lists.filter(function(i) {
			return i.username == uname;
		  //return i.username == uname;
		  //return i.username == req.params.name;
		});
		//console.log(wantedData);

		//var responseObject = { message:'letsee ' + req.params.id + req.params.name };

		var sfinal = wantedData;


//		res.send(final);
//		res.send( wantedData );		
	}else{
		var sfinal = lists;
/*
			{
				total: lists.length,
				per: per,
				userinfo: lists
			};
*/
//		res.send(final);
	}

	// GET PAGE
	var numberOfItems = sfinal.length;
	var totalPages = Math.ceil(numberOfItems / limitPerPage);

	if(req.query.page){
		//var page = req.query.page;
		if(req.query.page > parseInt(totalPages)) { 
			page = 1; 
		} else { 
			page = req.query.page; 
		}
	}else{
		var page = 1;
	}




	var startFrom = (page - 1) * limitPerPage;
	var viewFinal = [];
	var totals = parseInt(startFrom) + parseInt(limitPerPage);

	for(i = startFrom ; i < totals ;  i++){
		if(sfinal[i]){
			viewFinal.push(sfinal[i]);				
		}
	}


	var final = {
		totals: totals,
		total: sfinal.length,
		totalpage: totalPages,
		page: page,
		per: limitPerPage,
		userinfo: viewFinal
	}

	res.send(final);


});



module.exports = router;

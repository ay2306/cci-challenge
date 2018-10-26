var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Product = require('../models/productSchema');
var mongoose = require('mongoose');

router.use(bodyParser.json());


router.get('/',(req,res,next)=>{
    console.log(req.query);
    var search_item = { 
    }
    if('name' in req.query){
        search_item['name'] = req.query.name;
    }
    if('type' in req.query){
        search_item['type'] = req.query.type;
    }
    console.log(search_item);
    Product.find(search_item,(err,result)=>{
        if(err != null){
            console.log(err);
            res.statusCode = 500;
            res.setHeader('Content-type','application/json');
            res.json({
                status: 'error',
                'error': err
            });
        }else{
            console.log(result);
            res.statusCode = 200;
            res.setHeader('Content-type','application/json');
            res.json({
                status: 'success',
                'result': result
            });
        }
    });
});

router.post('/',(req,res,next)=>{
    console.log("This is req.body: ");
    console.log(req.body);
    Product.create(req.body,(err,prod)=>{
        if(err != null){
            res.statusCode = 500;
            res.setHeader('Content-type','application/json');
            res.json({
                status: 'error',
                'error': err
            });
        }else{
            console.log(prod);
            res.statusCode = 200;
            res.setHeader('Content-type','application/json');
            res.json({
                status: 'success',
                'result': prod
            });
        }
    });
});

module.exports = router;
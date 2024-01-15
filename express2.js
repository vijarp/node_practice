var express=require('express');
var app=express();
app.set('view engine','jade');

app.get('/',function(req,res)
{
res.render('index',
{title:'ExpressJS',message:'Welcome'})
});
var server=app.listen(9202,function() {});



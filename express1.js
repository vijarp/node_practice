var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World Express!');
});
var server=app.listen(9202,function() {});


app.get('/Node',function(req,res){
    res.send("Tutorial on Node");
}
);

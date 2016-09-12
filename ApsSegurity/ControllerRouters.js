module.exports = {
  
   ReturnResult: function (res,result) {
        //put in console only by control
        console.log(JSON.stringify(result, null, "    "));
        //return to client all data in json format
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(JSON.stringify(result) + "\n");
        res.end();
    }
};

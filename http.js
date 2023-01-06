const http = require("http");
const customers = require("./object");

// 2 Things Are There Client Side And Server Side

let array = [
    {
        id:1,
        course:"ABC",
    },
    {
        id: 2,
        course:"DEF",
    },
];

let server = http.createServer((req,res) => {
        // console.log("Server Is loading...")
        // res.write("Server is listening on Node JS")
 
        console.log(customers)
        if(req.url == '/courses'){
            res.write(JSON.stringify(customers))
            res.end();
        }

        res.end();
}); 

server.listen(5000)
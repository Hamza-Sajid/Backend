const Events = require('events');
const event = new Events();




//now creating an event

event.on("check_Status" , (code,msg)=>
{
    console.log(`Status ${msg} with ${code}`);
})

event.emit("check_Status", 200 , "ok");
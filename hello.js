const fs = require('fs');

//****1st TASK****
// fs.mkdir("Hamza", (error)=>{
//     console.log(error)
// });

//**2ND TASK */
// fs.writeFile("Hamza/bio.txt","Welcome to the Pakistan", (e)=>
// {
//     console.log(e);
// }
// )

//**3rd Task */
// fs.appendFile("Hamza/bio.txt"," \n NEW DATA" , (e)=>
// {
//     console.log(e);
// })


//**4th task */

// fs.readFile("Hamza/bio.txt","utf8",(e,data)=>
// {
//     console.log(data);
// })

//*5th Task//

// fs.rename("Hamza/bio.txt","mybio.txt",(e)=>{
//     console.log(e)
// })


//**6th Task */

// fs.unlink("mybio.txt",(e)=>
// {
//     console.log(e);
// })


//**7th Task */

fs.rmdir("Hamza",(e)=>
{
    console.log(e);
})

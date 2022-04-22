//Day -1 CRUD Operations in NodeJS using File System 



const fs = require('fs');

//****1st TASK****
// fs.mkdir("Hamza", (error)=>{
//     console.log(error)
// });


//**2ND TASK  || Create a file */
// fs.writeFile("Hamza/bio.txt","Welcome to the Pakistan", (e)=>
// {
//     console.log(e);
// }
// )

//**3rd Task   || Adding data in existing file*/
// fs.appendFile("Hamza/bio.txt"," \n NEW DATA" , (e)=>
// {
//     console.log(e);
// })


//**4th task || Reading with UTF-8*/

// fs.readFile("Hamza/bio.txt","utf8",(e,data)=>
// {
//     console.log(data);
// })

//*5th Task ||Renaming a file//

// fs.rename("Hamza/bio.txt","mybio.txt",(e)=>{
//     console.log(e)
// })


//**6th Task || Deleting a file */

// fs.unlink("mybio.txt",(e)=>
// {
//     console.log(e);
// })


//**7th Task || Deleting a director*/

fs.rmdir("Hamza",(e)=>
{
    console.log(e);
})

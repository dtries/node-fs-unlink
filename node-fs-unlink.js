/* INSTRUCTIONS TO DEMO PROGRAM:
    Create a file called 'fileToGetRidOf.txt' by entering 'touch fileToGetRidOf.txt' in the CLI of the terminal. A file with the designated name is created. Now run the program by entering 'node node-fs-unlink' in the CLI of the terminal. If no error is encountered, the file designated as the argument in the fs.unlink function will be deleted. If no such file exists an error will result and be thrown as a message to the terminal.
*/


const fs = require('fs'); /* a constant is created that implements the built-in file system module in node.js */

fs.unlink('fileToGetRidOf.txt', function (err) {
    if (err) throw (err); /* if an err occurs (i.e., if err = true) print the error to the terminal */
    console.log('File Deleted!'); /* when no error occurs the message File Deleted! will be printed to the terminal and the targeted file is deleted */
});
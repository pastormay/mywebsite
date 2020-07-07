// Import the pug module
import pug from 'pug';

// Compile the template (with the data not yet inserted)
const templateCompiler = compileFile('test.pug');

// Insert your data into the template file
console.log(templateCompiler({ name: 'Mayowa' }));
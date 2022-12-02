// error.error.error();            //  ReferenceError: error is not defined

try {
    error.error.error();
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}
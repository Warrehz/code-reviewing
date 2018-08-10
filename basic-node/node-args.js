let num = 0;
// set args to process.argv array
let args = process.argv;

// loop over array and add arguments, assuming they are nums
for (i = 2; i < args.length; i++) {
  num += parseInt(args[i]);
}

//log total
console.log(num);

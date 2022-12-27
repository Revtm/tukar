module.exports = {
   changePos: (x) => {
	var temp = x[0];
	x[0] = x[1];
	x[1] = temp; 
	
	return x;
   },
};

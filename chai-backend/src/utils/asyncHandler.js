/*
 * Here we are creating an Higher order function or Wrapper function which will wrap our functions in the async await function because we will require this most frequently in our entire project
 *
 */

/*
 * Questions;
 * 1. How we are getting the "req,res,next" parameters?, according to me the function is accepted as parameter and a function 
 * is returned but the returning function has "req,res,next" parameters but it is the parameter required in the given function how can we 
 * pass it as an argument to any function which we are returning ?
 *
 * 
 */


// * code by me (28 Jan, 2024)

/*

const asyncHandlerPromise = (func) => (req,res,next)=>{
	
	const newPr = new Promise(function(resolve,reject){func(req,res,next)});

	newPr.then((res)=>{
		// code
	}).catch((err)=>{
		res.status(err.code || 500).json({
			success: false,
			message: err.message
		})
	})
}

*/

const asyncHandlerPromiseBySir = (requestHandler) =>{
	
	(req,res,next)=>{
		Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
	}
}



//* Wrapper function (try catch fashion)

/**
 * Now here the asyncHandlerTryCatch is a higher order function which is returning a function
 * 
 * */
const asyncHandlerTryCatch = (func) => async (req,res,next) => {
	
	try{
		await func(req,res,next);

	} catch(err){
		
		res.status(err.code || 500).json({
			success: false,
			message: err.message
		})
	}
}


export {asyncHandler};



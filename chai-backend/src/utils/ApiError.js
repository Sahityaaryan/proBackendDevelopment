class ApiError extends Error{
	
	constructor(
		statusCode,
		message="Something went wrong",
		errors=[],
		statck = ""
	){
		super(message)

		this.statusCode = statusCode // overriding the statusCode
		this.data = null // this is a new prop
		this.message = message
		this.success = false // new prop
		this.errors = errors // new prop

		if(statck){
			this.stack = statck
		} else {
			Error.captureStackTrace(this,this.constructor)
		}
	}
}

// # Error format

// * <Error class name> : <error message>

// * at <function name or object method name> (<file location : <line no., char no.>>)


// # stack

// * stack: It will show the each call site from where the error has being generated



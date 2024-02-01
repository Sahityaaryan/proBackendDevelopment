class ApiResponse {
	constructor(statusCode,data,message="Success"){
		this.statusCode = statusCode
		this.data = data
		this.message = message
		this.success = statusCode < 400 //* as all the status above 399 are errors so we did that

	}
}

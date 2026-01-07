exports.loginController = (request, response) => {
    try {
        const {email, password} = request.body; 
    response.json({email,password});   
    } catch (error) {
          response.json({error:error.message})  
    } 
}


exports.registerController = (request, response) => {
   try {
    //  console.log(request.body, "request");
    
    const {email, password} = request.body;   
    response.json({email,password}); 
   } catch (error) {
    response.json({error:error.message})
   } 
}
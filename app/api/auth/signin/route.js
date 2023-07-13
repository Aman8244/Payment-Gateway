// import User from "@/models/Users";
// import bcrypt from "bcrypt";


// export const POST = async(request)=>{
//     //Sign In route
//     try {
//      const reqBody = await request.json();
//      const {username,password} = reqBody;
//      let message,status;

//      const user = await User.findOne({username:username});
//      if(!user){
//          return Response.json({
//              message:"User doesnot exists",
//              status:201
//          })
//      }
//      else{
//         let result = await bcrypt.compare(password,user.password)
//         if(result){
//             message= "User authenticated ";
//             status=200;
//          }
//          else{
//             message = "Password entered is not corrrect";
//             status = 201
//          }
//          return Response.json({
//             message:message,
//             status:status,
            
//          })
//      }
     
 
//     } catch (error) {
//         return Response.json({
//          error:error,
//          status:400
//         })
//     }
//  }
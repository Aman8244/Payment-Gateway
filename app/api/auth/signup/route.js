// import User from "@/models/UserData";
// import bcrypt from "bcrypt";

// export const POST= async(request)=>{
//     // Sign Up Route
//    try {
//     const reqBody = await request.json();
//     const {username,name,password,email} = reqBody;
   
    
//     // Check if User already exists
//     const user = await User.findOne({username:username})

//     if(user){
//         return Response.json({
//             message:"User already exists!",
//             status:201 
//         })
//     }
//     else{
//         bcrypt.hash(password,10,(err,hash)=>{
//             if(hash){
//                 let newUser = new User({
//                     username:username,
//                     name:name,
//                     password:hash,
//                     email:email
//                 });
//                 newUser.save().then(res=>{
//                     console.log(res)  
//                 })
//                 return Response.json({
//                     message:"user created",
//                     status:200 
//                 })
//             }
//             else{
//                 return Response.json({
//                     message:"user not created",
//                     status:400
//                 })
//             }
//         })
//         return Response.json({
//             message:"User created",
//             status:200
//         })
//     }
   
//    } catch (error) {
//      return Response.json({
//         error:error,
//         status:400
//      })
//    }
   
// }
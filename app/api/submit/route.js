const POST= async(request)=>{
     const body = await request.json();
     console.log(body);
     return Response.json({
        status:200
     })
}
export {POST}
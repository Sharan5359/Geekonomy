const Login = require('../model/login.model')
exports.signUp = async(req, res)=>{

    const loginObject = {
        name : req.body.name,
        mobile : req.body.mobile,
        address : req.body.address,
        email : req.body.email
    }

    try{
        const loginCreated = await Login.create(loginObject)
        const response ={
            name : loginCreated.name,
            mobile : loginCreated.mobile, 
            address : loginCreated.address,
            email : loginCreated.email,
            created_at : loginCreated.created_at,
            updated_at : loginCreated.updated_at
        }

        res.status(201).send(response);
    }
    catch(error){
        console.log("Some error happened", error.message);
        res.status(500).send({
            message : "Some internal Server error"
        })

    }
}
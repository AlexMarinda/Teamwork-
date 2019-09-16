import {generateToken,encryptPass,checkPassword} from './../helpers';
import users from '../model/users';
import payLoad from './payload';

//class contain all user operation
class UserController {
    
    // new user 
    static  registerUser(req, res) {
    
    const newUser = payLoad(
    users.length + 1,
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    encryptPass(req.body.password),
    req.body.gender,
    req.body.jobRole,
    req.body.department,
    req.body.address,
    false

    );

  
      
    for (let i =0; i<users.length;i++){
      
        if(users[i].email===req.body.email )
           
          return res.status(409).send({ status: 409, message: "choose another email this was taken" });
          
               
            }
    const token = generateToken(newUser);
    users.push(newUser);
    
    return res.status(201).send({ status: 201, message:'succefully',data: { token,...newUser} });
    
    }
}
export default UserController;
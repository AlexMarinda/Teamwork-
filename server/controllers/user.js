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




     // user signin function
static  login(req, res) {


  const {email, password}=req.body;
  
  
  for (let i =0; i<users.length;i++){
  
      if((users[i].email===email) && (checkPassword(users[i].password,password))){
        const pld= payLoad(           
         users[i].user_id,
         users[i].first_name,
         users[i].last_name,
         users[i].email,
         users[i].password,
         users[i].gender,
         users[i].jobRole,
         users[i].department,
         users[i].is_admin,
         false

          ) ;
          const token = generateToken(pld);
          return res.status(200).send({ status: 200, message:'succefully',data: { token,...pld} });
             }
          }
  
      return res.status(401).send({ status: 401,'message':'User not found!' });
  
  
  }
}
export default UserController;
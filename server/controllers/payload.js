// Pay load
const payLoad = (
  user_id,
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
    address,
    is_admin,
    
  ) => ({
    user_id,
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
    address,
    is_admin,
  });
  
  module.exports = payLoad;

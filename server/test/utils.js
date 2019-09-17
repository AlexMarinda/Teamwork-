import users from '../model/users';
import {generateToken} from '../helpers/index';

// destructure users out of users array
const [regularUser1, regugalarUser2, adminUser] = users;
export default {
  getUserToken: n => {
    if (n === 1) {
      return generateToken(regularUser1);
    }
    return generateToken(regugalarUser2);
  },
  getAdminToken: () => generateToken(adminUser)
};

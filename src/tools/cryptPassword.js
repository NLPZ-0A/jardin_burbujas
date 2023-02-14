const bcrypt = require('bcrypt');

const encrypt = async (password) => {
    const saltRounds = process.env.BCRYPT_SALTS;

    const hashedPassword = await bcrypt.hash(password, 10);

    return await hashedPassword;
 };

 
const pwnedPassword = async(password, userpassword) => {

    const pwnedPass = await bcrypt.compare(password, userpassword);
    
    return await pwnedPass;
 };


 module.exports = {encrypt, pwnedPassword}
const { errStr } = require("../validationErrors");
/**Forma 1
 * // const email = ['@gmail.com', '@hotmail.com', '@outlook.com'];

   // const isEmail = (text) => {
   //     if(typeof text === 'undefined') return;
   //     if(typeof text !== 'string') return errStr;
   //     return email.some(e => text.endsWith(e));
   // }

 */

/**Forma Optimizada para verificar todo tipo de email */

const isEmail = (email) => {
  if (typeof email === "undefined") return;
  if (typeof email !== "string") return errStr;
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );
  return expReg;
};

module.exports = isEmail;

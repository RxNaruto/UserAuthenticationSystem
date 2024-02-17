const zod = require('zod');


const usernameSchema=zod.string().email();
const passwordSchema=zod.string().min(8);
const nameSchema= zod.string();
const mobileSchema=zod.number()

module.exports={
    usernameSchema,
    passwordSchema,
    nameSchema,
    mobileSchema
}
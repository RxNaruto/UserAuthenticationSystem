const zod = require('zod');


 const signupSchema=zod.object({
    username: zod.string().email(),
    password: zod.string(),
    name: zod.string(),
    mobile: zod.number()
})

module.exports={
    signupSchema
}


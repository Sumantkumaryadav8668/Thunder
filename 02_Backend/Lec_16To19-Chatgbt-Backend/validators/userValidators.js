import * as z from "zod";
 
    // name,age,email,password
export const signupValidator = z.object({
    name: 
        z.string()
        .trim()
        .min(3,"minimum length of name should be 3")
        .max(25,"maximum length of name should be 25"),

    age: 
        z.number()
        .min(10,"minimum age of 10")
        .max(100,"maximum age of 100")
        .optional(),

    email: z.preprocess(
        (value)=> typeof value == "string" ? value.trim().toLowerCase():"",
        z.string().email("Email must be valid")
    ),

    password:
        z.string()
        .min(8,"minimum length of password should be 8")
        .max(15,"maximum length of password should be 15")
        .regex(/[A-Z]/,"your password have should be atlist 1 capital letter")
        .regex(/[a-z]/,"your password have should be atlist 1 small letter")
        .regex(/[0-9]/,"your password have should be atlist 1 number")
        .regex(/[!@#$%^&*().,';?/<>{}|]/,"your password have should be atlist 1 spacial character")
})


export const loginValidator = z.object({
    email: z.preprocess(
        (val)=>{
            return typeof val == "string" ? val.trim().toLowerCase():""
        },
        z.string().email("Email must be valid")
    ),

    password:
        z.string()
        .min(8,"minimum length of password should be 8")
        .max(15,"maximum length of password should be 15")
        .regex(/[A-Z]/,"your password have should be atlist 1 capital letter")
        .regex(/[a-z]/,"your password have should be atlist 1 small letter")
        .regex(/[0-9]/,"your password have should be atlist 1 number")
        .regex(/[!@#$%^&*().,';?/<>{}|]/,"your password have should be atlist 1 spacial character")
})
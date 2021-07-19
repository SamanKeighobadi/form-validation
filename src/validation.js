import * as yup from "yup";

export const validatinSchema = yup.object().shape({
  fullname: yup
    .string("fullname is not string")
    .required("this Field is Required")
    .min(4, "least than 4 Charechters")
    .max(150, "more than 150 Charchters"),
  username: yup
    .string()
    .required("this Field is Required")
    .min(4, "least than 4 charechters")
    .max(150, "more than 150 Charechters"),
  email: yup
    .string()
    .email("Email is not Valid")
    .required("this Field is Required"),
  password: yup
    .string()
    .required("this Field is Required")
    .min(4, "Password Must be more than 4 charechters")
    .max(120, "Password Must be least than 120 charechters"),
});

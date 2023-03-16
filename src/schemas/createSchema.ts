import * as yup from "yup";

export const createSchema = yup.object().shape({
  firstName: yup.string().required("Inform the first name of user!"),
  lastName: yup.string().required("Inform the last name of user!"),
  email: yup.string().required("Inform the email of user!"),
});

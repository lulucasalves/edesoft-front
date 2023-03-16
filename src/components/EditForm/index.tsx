import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { createSchema } from "schemas/createSchema";
import { editUser } from "store/users";
import { IUserData } from "types";
import { putUser } from "services/put/putUser";
import { Input } from "components/Input";

interface IEditForm {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export function EditForm({ firstName, lastName, email, id }: IUserData) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditForm>({
    resolver: yupResolver(createSchema),
  });

  useEffect(() => {
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("email", email);
  }, [lastName, firstName, email, setValue]);

  async function onSubmit({ lastName, firstName, email }: IEditForm) {
    await putUser({ id, lastName, firstName, email })
      .then(() =>
        dispatch(
          editUser({
            id,
            lastName,
            firstName,
            email,
          })
        )
      )
      .catch((err) => console.log(err));
    navigate("/");
  }

  return (
    <div className="sectionForm">
      <p className="formTitle">Edit user</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Insert first name"
          type="text"
          label="First Name"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <Input
          placeholder="Insert last name"
          type="text"
          label="Last Name"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
        <Input
          placeholder="Insert email"
          type="email"
          label="Email"
          error={errors.email?.message}
          {...register("email")}
        />
        <div className="buttonsSubmit">
          <button type="button" onClick={() => navigate("/")}>
            Cancelar
          </button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

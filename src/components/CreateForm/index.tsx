import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSchema } from "schemas/createSchema";
import { createUser } from "store/users";
import { postUser } from "services/post/postUser";
import { useSelector } from "react-redux";
import { IRootState } from "store";
import { Input } from "components/Input";

interface ICreateForm {
  email: string;
  firstName: string;
  lastName: string;
}

export function CreateForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((auth: IRootState) => auth.users);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateForm>({
    resolver: yupResolver(createSchema),
  });

  async function onSubmit({ lastName, firstName, email }: ICreateForm) {
    await postUser()
      .then(() =>
        dispatch(
          createUser({
            id: users.length + 1,
            firstName,
            lastName,
            email,
          })
        )
      )
      .catch((err) => console.log(err));
    navigate("/");
  }

  return (
    <div className="sectionForm">
      <p className="formTitle">Create new user</p>
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

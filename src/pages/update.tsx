import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PageTemplate, EditForm } from "components";
import { IUserData } from "types";
import { useSelector } from "react-redux";
import { IRootState } from "store";

export function Update() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserData>({
    id: 0,
    lastName: "",
    firstName: "",
    email: "",
  });
  const { users } = useSelector((auth: IRootState) => auth.users);
  const { id } = useParams();

  useMemo(() => {
    (async () => {
      const usersFilteres = users.filter((val) => val.id === parseInt(id!));

      if (usersFilteres.length) {
        const res = usersFilteres[0];

        setUser({
          id: res.id,
          lastName: res.lastName,
          firstName: res.firstName,
          email: res.email,
        });
      } else {
        navigate("/");
      }
    })();
  }, [id, navigate, users]);

  return (
    <PageTemplate>
      <EditForm
        id={user.id}
        email={user.email}
        firstName={user.firstName}
        lastName={user.lastName}
      />
    </PageTemplate>
  );
}

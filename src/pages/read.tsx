import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { IRootState } from "store";
import { getAllUsers } from "services";
import { setAllUsers } from "store/users";
import { PageTemplate, TableUser } from "components";

export function Read() {
  const { users } = useSelector((auth: IRootState) => auth.users);
  const dispatch = useDispatch();

  useMemo(() => {
    if (users.length < 2) {
      (async () => {
        await getAllUsers()
          .then((res: any) =>
            dispatch(
              setAllUsers(
                res.map((val: any) => {
                  return {
                    firstName: val.name.firstname,
                    lastName: val.name.lastname,
                    email: val.email,
                    id: val.id,
                  };
                })
              )
            )
          )
          .catch((err) => console.log(err));
      })();
    }
  }, []);

  return (
    <PageTemplate scrollWidth>
      <TableUser users={users} />
    </PageTemplate>
  );
}

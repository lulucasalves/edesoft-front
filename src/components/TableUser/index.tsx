import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { excludeUser } from "store/users";
import { IUserStore } from "types";

export function TableUser({ users }: IUserStore) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <table className="tableUser" cellSpacing={0} rules="none">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 1 ? (
          users.map(({ id, firstName, lastName, email }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>
                  <div>
                    <BiEdit
                      size={25}
                      onClick={() => navigate(`/update/${id}`)}
                    />
                    <BiTrash
                      onClick={() => dispatch(excludeUser(id))}
                      size={25}
                    />
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td />
            <td />
            <td>Finding users...</td>
            <td />
            <td />
          </tr>
        )}
      </tbody>
    </table>
  );
}

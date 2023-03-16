import { BiPlus, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function PageTemplate({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();

  return (
    <section className="sectionTemplate">
      <div className="header">
        <BiUser onClick={() => navigate("/")} className="logo" />
        <ul>
          <li onClick={() => navigate("/")}>
            <div>
              <BiUser />
              All Users
            </div>
          </li>
          <li onClick={() => navigate("/create")}>
            <div>
              <BiPlus />
              New User
            </div>
          </li>
        </ul>
      </div>
      <div className="content">{children}</div>
    </section>
  );
}

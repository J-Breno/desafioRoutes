import { NavLink, Outlet } from "react-router-dom";
import homeImg from "../../assets/home.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const linkRoutes = [
    { id: 1, name: "Início", linkRoute: "/home" },
    { id: 2, name: "Produtos", linkRoute: "/products" },
    { id: 3, name: "Sobre nós", linkRoute: "/about" },
  ];

  return (
    <>
      <header className="flex justify-between px-10 items-center bg-blue-600 h-16">
        <div className="flex gap-2">
          {linkRoutes.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block font-bold text-white"
                  : "block font-normal text-white"
              }
              to={link.linkRoute}
              key={link.id}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <Link to={"/home"}>
          <img src={homeImg} alt="Home" />
        </Link>
      </header>
      <Outlet />
    </>
  );
}

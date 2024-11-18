import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Products() {
  const linkRoutes = [
    { id: 1, name: "Computadores", linkRoute: "/computers" },
    { id: 2, name: "Eletrônicos", linkRoute: "/electronics" },
    { id: 3, name: "Livros", linkRoute: "/books" },
  ];

  return (
    <>
      <main className="flex justify-center">
        <div className="bg-zinc-400 h-16 w-960 mt-5 flex flex-row items-center gap-4 px-5">
          {linkRoutes.map((link) => (
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
              to={`/products${link.linkRoute}`}
              key={link.id}
              end
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </main>
      <Outlet />
    </>
  );
}

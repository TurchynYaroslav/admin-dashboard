import { NavLink } from "react-router-dom";

export function AuthNavigation() {
  const styleActive = "font-bold text-purple-600 border-b border-purple-600";
  const styleInactive = "text-gray-500";
  return (
    <div className="flex justify-center items-center gap-2 w-full text-sm">
      <NavLink
        to={"/register"}
        className={({ isActive }) => (isActive ? styleActive : styleInactive)}
      >
        Register
      </NavLink>
      |
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : styleInactive)}
        to={"/login"}
      >
        Login
      </NavLink>
    </div>
  );
}

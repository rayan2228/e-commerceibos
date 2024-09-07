import { NavLink } from "react-router-dom";

const ListItem = ({ list, link = "#", className = null }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? `active ${className}` : className
        }
      >
        {list}
      </NavLink>
    </li>
  );
};

export default ListItem;

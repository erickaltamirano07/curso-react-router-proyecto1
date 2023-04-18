import React from "react";
import { Link, NavLink, Route } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>*/}
        {/* <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            //className={({isActive}) => ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Profile
          </NavLink>
        </li>*/}
        {routes.map((route) => (
          <li>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});

export { Menu };

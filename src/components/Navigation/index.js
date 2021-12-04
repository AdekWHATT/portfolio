import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Вячеслав Килин</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-light">Обо мне</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Портфолио</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-light">Контакты</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font text-light">Ссылки</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;

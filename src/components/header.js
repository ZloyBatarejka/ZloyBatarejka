import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    state = {
        hidden: true
    }

    render() {
        const navClass = ["nav", this.state.hidden ? "hidden" : null];
        const toggle = () => {
            this.setState({ hidden: !this.state.hidden })
        }
        return (
            <header className="header">
                <div className="header__logo">
                    РАСПИСАНИЕ МАТЧЕЙ
                </div>
                <div className="header__burger">
                    <button
                        onClick={toggle}
                    >
                        <i className="fas fa-bars fa-2x"></i>
                    </button>
                </div>
                <nav className={navClass.join(" ")}>
                    <div className="nav__header">
                        <p>Меню</p>
                        <button
                            onClick={toggle}
                        >
                            <i className="fas fa-times fa-2x"></i>
                        </button>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="/all"
                            >
                                Все
                        </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="/live"
                            >
                                Live
                        </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="/results"
                            >
                                Результаты
                        </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="/schedule"
                            >
                                Расписание
                        </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="/forecast"
                            >
                                Прогноз
                        </NavLink>
                        </li>
                    </ul>

                </nav>
                <div className="header__search">
                    <i className="fas fa-search "></i>
                </div>
                <div className="header__login">
                    <button >
                        Войти
                    </button>
                </div>
            </header >
        );
    }
}

export default Header;

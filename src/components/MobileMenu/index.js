import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
    // submenu: [
    //   {
    //     id: 11,
    //     title: "Home style 1",
    //     link: "/home",
    //   },
    //   {
    //     id: 12,
    //     title: "Home style 2",
    //     link: "/home2",
    //   },
    //   {
    //     id: 13,
    //     title: "Home style 3",
    //     link: "/home3",
    //   },
    // ],
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Services",
    link: "/service",
    // submenu: [
    //   {
    //     id: 31,
    //     title: "Service",
    //     link: "/service",
    //   },
    //   {
    //     id: 32,
    //     title: "Service Single",
    //     link: "/service-details",
    //   },
    // ],
  },
  // {
  //   id: 4,
  //   title: "Project",
  //   link: "/project",
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "Project",
  //       link: "/project",
  //     },
  //     {
  //       id: 42,
  //       title: "Project Single",
  //       link: "/project-details",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Pages",
  //   link: "/",
  //   submenu: [
  //     {
  //       id: 71,
  //       title: "Pricing",
  //       link: "/pricing",
  //     },
  //     {
  //       id: 75,
  //       title: "Team",
  //       link: "/team",
  //     },
  //     {
  //       id: 76,
  //       title: "Error 404",
  //       link: "/404",
  //     },

  //     {
  //       id: 79,
  //       title: "Login",
  //       link: "/login",
  //     },
  //     {
  //       id: 790,
  //       title: "Register",
  //       link: "/signup",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: "Blog",
  //   link: "/blog",
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "Blog",
  //       link: "/blog",
  //     },
  //     {
  //       id: 52,
  //       title: "Blog with sidebar",
  //       link: "/blog-list",
  //     },
  //     {
  //       id: 53,
  //       title: "Blog full width",
  //       link: "/blog-fullwidth",
  //     },
  //     {
  //       id: 54,
  //       title: "Blog single",
  //       link: "/blog-single",
  //     },
  //     {
  //       id: 55,
  //       title: "Blog single fullwidth",
  //       link: "/blog-single-fullwidth",
  //     },
  //   ],
  // },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link onClick={ClickHandler} to={item.link}>
                      {item.title}
                    </Link>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpen}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="ti-layout-line-solid" aria-hidden="true"></i>
          <i className="ti-layout-line-solid" aria-hidden="true"></i>
          <i className="ti-layout-line-solid" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

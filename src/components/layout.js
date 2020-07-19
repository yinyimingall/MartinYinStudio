import React from "react";
import { Link } from "gatsby";
import Style from "./style/layout.module.scss";
// import Assistant from "./assistant.js";
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 className={Style.logo}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <span style={{ color: `#000` }}>Martin</span>
          <span style={{ color: `#546bcf` }}>Yin</span>
          <span style={{ color: `#dc4131` }}>Studio</span>
        </Link>
      </h1>
    );
  } else {
    header = (
      <h1 className={Style.smallLogo}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <span style={{ color: `#000` }}>Martin</span>
          <span style={{ color: `#546bcf` }}>Yin</span>
          <span style={{ color: `#dc4131` }}>Studio</span>
        </Link>
      </h1>
    );
  }
  return (
    <div className={Style.container}>
      {/* <Assistant /> */}
      <header>{header}</header>
      <main>{children}</main>
      <footer className={Style.footer}>
        © {new Date().getFullYear()}, MartinYinStudio. Built with
        {` `}
        <a target="_blank" rel='noreferrer' href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;

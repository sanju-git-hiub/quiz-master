import React, { useContext } from "react";
import { useLocation } from "react-router";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./header.module.css";
import Logo from "../../../assets/logo.png";
import QuizContext from "../../../store/quiz_context";
const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const QzCtx = useContext(QuizContext);
  const handleFiter = (event) => {
    const searchQuery = event.target.value;
    QzCtx.filterCategory(searchQuery);
  };
  return (
    <header className={classes.headerComp}>
      <figure className={classes.logo}>
        <img src={Logo} className="img-fit logo" />
      </figure>
      <div>
        {/* {currentPath === "/" && (
          <Paper component="form" className={classes.formHolder}>
            <InputBase
              className={classes.searchInput}
              placeholder="Search Quiz Category"
              inputProps={{ "aria-label": "search quiz category" }}
              onChange={handleFiter}
            />
            <IconButton
              type="submit"
              className={classes.searchIcon}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        )} */}
      </div>
    </header>
  );
};

export default AppHeader;

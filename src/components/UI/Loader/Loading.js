import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./load.module.css";
const Loading = (props) => {
  return (
    <div className={classes.loader}>
      <div className={classes.loadingOverlay}></div>
      <div className={classes.loaderOver}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;

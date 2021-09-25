import {
  Box,
  CircularProgress,
  CircularProgressProps,
  makeStyles,
} from "@material-ui/core";

interface LoaderProps {
  size?: number;
  thickness?: number;
  color?: CircularProgressProps["color"];
}
const useStyles = makeStyles({
  rootLoader: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
});

export const Loader = ({
  color = "inherit",
  size = 50,
  thickness = 5,
  ...restProps
}: LoaderProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.rootLoader} data-testid="loader">
      <CircularProgress
        color={color}
        size={size}
        thickness={thickness}
        {...restProps}
      />
    </Box>
  );
};

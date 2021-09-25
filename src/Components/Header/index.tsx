import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#F28157",
    height: "5vh",
    fontWeight: 500,
    fontSize: "1.5rem",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={5}
      className={classes.header}
    >
      Assignment - Hunain Khalid
    </Box>
  );
};

import { Box, makeStyles, Paper, Typography } from "@material-ui/core";

interface DetailCardProps {
  detailName: string;
  detailValue: string | number;
}

const useStyles = makeStyles({
  paper: {
    display: "flex",
    backgroundColor: "#7969b8",
    padding: "10px",
    justifyContent: "center",
  },
  detailName: {
    color: "#F2F2F2",
    fontWeight: "bolder",
  },
  detailValue: {
    color: "#F2F2F2",
    paddingLeft: "20px",
  },
});

export const DetailCard = ({ detailName, detailValue }: DetailCardProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3}>
      <Box display="flex" alignItems="baseline">
        <Typography className={classes.detailName} variant="h6" gutterBottom>
          {detailName}
        </Typography>
        <Typography className={classes.detailValue}>{detailValue}</Typography>
      </Box>
    </Paper>
  );
};

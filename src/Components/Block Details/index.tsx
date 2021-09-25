import { Box, Grid, Typography } from "@material-ui/core";
import { DetailCard } from "..";

interface BlockDetailsProps {
  blockIndex: number | string;
  size: number | string;
  fee: number | string;
  prevBlock: string;
}

export const BlockDetails = ({
  blockIndex,
  size,
  fee,
  prevBlock,
}: BlockDetailsProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h3"
        style={{ color: "#F2F2F2", fontWeight: "bolder" }}
        gutterBottom
      >
        Block Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <DetailCard detailName="Index:" detailValue={blockIndex} />
        </Grid>
        <Grid item xs={4}>
          <DetailCard detailName="Size:" detailValue={size} />
        </Grid>
        <Grid item xs={4}>
          <DetailCard detailName="Fee:" detailValue={fee} />
        </Grid>
        <Grid item xs={12}>
          <DetailCard detailName="Previous Block:" detailValue={prevBlock} />
        </Grid>
      </Grid>
    </Box>
  );
};

import { Box, TableCellProps, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlockDetails, Loader, Table } from "../../Components";

interface Block {
  blockIndex: number;
  fee: number;
  prevBlock: string;
  size: number;
  transactions: any[];
}

const BlockDetailHeading = () => (
  <Typography
    variant="h3"
    style={{
      color: "#F2F2F2",
      fontWeight: "bolder",
    }}
    gutterBottom
  >
    Transactions
  </Typography>
);

export const Details = () => {
  const { id } = useParams() as { id: string };
  const [blockDetails, setBlockDetails] = useState<Block>({
    blockIndex: 0,
    fee: 0,
    prevBlock: "",
    size: 0,
    transactions: [],
  });
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/blocks/${id}`)
      .then((res) => {
        setBlockDetails(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const { blockIndex, fee, prevBlock, size, transactions } = blockDetails;

  const columns = [
    {
      id: "hash",
      label: "Hash",
    },
    { id: "fee", label: "Fee", align: "center" as TableCellProps["align"] },
    {
      id: "block_index",
      label: "Block Index",
      align: "center" as TableCellProps["align"],
    },
    { id: "size", label: "Size", align: "center" as TableCellProps["align"] },
    {
      id: "time",
      label: "Time",
      format: (value: number) => new Date(value).toLocaleTimeString(),
      align: "center" as TableCellProps["align"],
    },
  ];

  return loading ? (
    <Loader size={100} thickness={5} />
  ) : (
    <Box display="flex" flexDirection="column">
      <BlockDetails
        blockIndex={blockIndex}
        size={size}
        fee={fee}
        prevBlock={prevBlock}
      />
      <Table
        rows={transactions}
        columns={columns}
        heading={<BlockDetailHeading />}
      />
    </Box>
  );
};

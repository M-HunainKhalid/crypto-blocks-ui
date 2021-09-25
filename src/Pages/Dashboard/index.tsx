import { Box, TableCellProps, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, Table } from "../../Components";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { isValid } from "date-fns";

const BlockTableHeading = ({
  date,
  setDate,
}: {
  date: Date | null;
  setDate: (date: MaterialUiPickersDate) => void;
}) => (
  <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h3"
        style={{ color: "#F2F2F2", fontWeight: "bolder" }}
      >
        Blocks
      </Typography>
      <Typography style={{ color: "#F2F2F2" }} gutterBottom>
        Click on the hash and get the details of a block.
      </Typography>
    </Box>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id="date-picker-dialog"
        variant="dialog"
        label="Get blocks on"
        placeholder="MM/DD/YYYY"
        format="MM/dd/yyyy"
        value={date}
        onChange={(changedDate) => {
          if (isValid(changedDate)) setDate(changedDate);
        }}
        disableFuture={true}
        showTodayButton
        InputLabelProps={{
          style: {
            color: "#F2F2F2",
          },
        }}
        InputProps={{
          style: {
            filter: "invert(95%)",
          },
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  </Box>
);

export const Dashboard = () => {
  const [rows, setRows] = useState([]);
  const [date, setDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/blocks?date=${date?.valueOf()}`)
      .then((res) => {
        setRows(res.data);
      })
      .finally(() => setLoading(false));
  }, [date]);

  const columns = [
    {
      id: "hash",
      label: "Hash",
      format: (value: number) => (
        <Link to={`/${value}`} style={{ color: "#433673" }}>
          {value}
        </Link>
      ),
    },
    {
      id: "height",
      label: "Height",
      align: "center" as TableCellProps["align"],
    },
    {
      id: "block_index",
      label: "Block Index",
      align: "center" as TableCellProps["align"],
    },
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
    <Table
      rows={rows}
      columns={columns}
      heading={<BlockTableHeading date={date} setDate={setDate} />}
    />
  );
};

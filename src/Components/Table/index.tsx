import { ChangeEvent, ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core/";

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: TableCellProps["align"];
  format?: (value: number) => ReactElement | string;
}

interface TableProps {
  rows: any[];
  columns: Column[];
  heading?: ReactElement | string;
}

const useStyles = makeStyles({
  container: {
    maxHeight: "calc(60vh)",
    minHeight: "calc(60vh)",
  },
  tableHeaderCell: {
    backgroundColor: "#7969b8",
    color: "#F2F2F2",
    fontWeight: "bold",
    fontSize: "20px",
  },
  tableFooter: {
    backgroundColor: "#7969b8",
    color: "#F2F2F2",
  },
  tableCell: {
    fontWeight: "bold",
  },
  tableRow: {
    backgroundColor: "#E4E1F0",
    "&:hover": { backgroundColor: "#D7D1F0 !important" },
  },
});

export const Table = ({ rows, columns, heading }: TableProps): ReactElement => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" mt={5}>
      {heading}
      <Paper>
        <TableContainer className={classes.container}>
          <MuiTable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(({ id, align, minWidth, label }) => (
                  <TableCell
                    className={classes.tableHeaderCell}
                    key={id}
                    align={align}
                    style={{
                      minWidth: minWidth,
                    }}
                  >
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.hash}
                      data-testid="table-row"
                      className={classes.tableRow}
                    >
                      {columns.map(({ id, align, format }) => {
                        const value = (row as any)[id];
                        return (
                          <TableCell
                            key={id}
                            align={align}
                            className={classes.tableCell}
                          >
                            {format ? format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          className={classes.tableFooter}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

import { GridColDef } from "@mui/x-data-grid";
import { formatToBrlDate } from "../../../utils/dateFormats";
import { Chip } from "@mui/material";


export const columns: GridColDef[] = [
    {
      field: "id_equipamento",
      headerName: "Equipamento",
      width: 160,
    },
    {
      field: "data",
      headerName: "Data",
      width: 150,
      renderCell: (e) => {
        return <div>{formatToBrlDate(e.row.data)}</div>;
      },
    },
    {
      field: "consumo_diario",
      headerName: "Consumo diário",
      type: "number",
      renderCell: (e) => {
        return <div>{Number(e.row.consumo_diario ?? 0).toFixed(2)} L</div>;
      },
      width: 180,
    },
    {
      field: "temperatura",
      headerName: "Temperatura",
      type: "number",
      renderCell: (e) => {
        return <div>{e.row.temperatura} °C</div>;
      },
      width: 150,
    },
    {
      field: "umidade",
      headerName: "Umidade",
      type: "number",
      renderCell: (e) => {
        return <div>{e.row.umidade}%</div>;
      },
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      align: "center",
      renderCell: (e) => {
        return e.row.data ? (
          <Chip label="Sucesso" color="success" />
        ) : (
          <Chip label="Erro" color="error" />
        );
      },
    },
  ];
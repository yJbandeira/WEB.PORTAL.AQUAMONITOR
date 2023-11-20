import { Button, Stack } from "@mui/material";
import IncomeAreaChart from "../../components/bar-chart";
import "./index.scss";

export default function MainDashboard() {
  return (
    <div className="dashboard-page-background">
      <div className="dashboard-chart-card">
        <div className="chart-card-header">
          <h3 className="chart-card-title"> Consumo</h3>
          <Stack direction="row" alignItems="center" spacing={0}>
            <Button
              size="small"
              //onClick={() => setSlot('month')}
              color="secondary"
              variant="text"
            >
              Mês
            </Button>
            <Button
              size="small"
              //onClick={() => setSlot('week')}
              color="primary"
              variant="outlined"
            >
              Semana
            </Button>
          </Stack>
        </div>
        <IncomeAreaChart slot="week" />
      </div>
    </div>
  );
}

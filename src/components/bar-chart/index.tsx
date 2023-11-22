import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";

interface IncomeAreaChartProps {
  slot: any;
  listaConsumos: Number[];
  listaDiasSemana: String[];
}

const areaChartOptions = {
  chart: {
    height: 450,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};

const IncomeAreaChart: FC<IncomeAreaChartProps> = ({ slot, listaConsumos, listaDiasSemana }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<any>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: [theme.palette.primary.main],
      xaxis: {
        categories:
          slot === "month"
            ? [
                "Dez 22",
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov"
              ]
            : listaDiasSemana,
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
        axisBorder: {
          show: true,
          color: line,
        },
        tickAmount: slot === "month" ? 11 : 7,
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary],
          },
        },
      },
      grid: {
        borderColor: line,
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState<any>([
    {
      name: "Consumo em L",
      data: [0, 86, 28, 115, 48, 210, 136],
    },
    {
      name: "Média geral em L",
      data: [0, 43, 14, 56, 24, 105, 68],
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Consumo em L",
        data:
          slot === "month"
            ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            : listaConsumos,
      },
      {
        name: "Média geral em L",
        data:
          slot === "month"
            ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
            : [11, 32, 20, 12],
      },
    ]);
  }, [slot]);

  return (
    <div style={{maxWidth: 1400}}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={450}
      />
    </div>
  );
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string,
};

export default IncomeAreaChart;

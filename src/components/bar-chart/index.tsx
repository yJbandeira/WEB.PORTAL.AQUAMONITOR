import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";

interface IncomeAreaChartProps {
  slot: any;
  height?: string;
  listaConsumoDias: number[];
  listaDiasSemana: string[];
  listaConsumoMeses: number[];
  listaMeses: string[];
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

const IncomeAreaChart: FC<IncomeAreaChartProps> = ({ slot, listaConsumoDias, listaDiasSemana, listaConsumoMeses, listaMeses, height = 450 }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<any>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: ["#1E88E5", "#388E3C"],
      xaxis: {
        categories:
          slot === "month"
            ? listaMeses
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
  }, [primary, secondary, line, theme, slot, listaConsumoDias, listaConsumoMeses, listaMeses, listaDiasSemana]);

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
            ? listaConsumoMeses
            : listaConsumoDias,
      },
      {
        name: "Média geral em L",
        data:
          slot === "month"
            ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
            : [11, 32, 20, 12, 5, 25],
      },
    ]);
  }, [slot, listaConsumoDias, listaConsumoMeses]);

  return (
    <div style={{maxWidth: 1400}}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={height}
      />
    </div>
  );
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string,
};

export default IncomeAreaChart;

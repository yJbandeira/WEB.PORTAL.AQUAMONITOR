import React, { FC, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";

interface TempBarChartProps {
  height?: string;
  listaTemperatura: Number[];
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

const TempBarChart: FC<TempBarChartProps> = ({
  listaTemperatura,
  listaDiasSemana,
  height = 450,
}) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<any>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: ["#1E88E5"],
      xaxis: {
        categories: listaDiasSemana,
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
        tickAmount: 7,
      },
      yaxis: {
        categories: ["0 C", "5 C", "10 C", "25 C", "50 C ", "100 C"],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
        tickAmount: 6,
      },
      grid: {
        borderColor: line,
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [primary, secondary, line, theme, listaTemperatura, listaDiasSemana]);

  const [series, setSeries] = useState<any>([
    {
      name: "Temperatura da Água",
      data: [0, 86, 28, 115, 48, 210, 136],
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Temperatura da Água",
        data: listaTemperatura,
      },
    ]);
  }, [listaTemperatura]);

  return (
    <div style={{ maxWidth: 1400 }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={height}
      />
    </div>
  );
};

export default TempBarChart;

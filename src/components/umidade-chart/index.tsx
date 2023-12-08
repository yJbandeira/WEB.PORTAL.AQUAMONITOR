import React, { FC, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";

interface UmidadeBarChartProps {
  height?: string;
  listaUmidade: Number[];
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

const UmidadeBarChart: FC<UmidadeBarChartProps> = ({ listaUmidade, listaDiasSemana, height = 450 }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<any>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: ["#1E88E5", "#388E3C"],
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
  }, [primary, secondary, line, theme, listaUmidade, listaDiasSemana]);

  const [series, setSeries] = useState<any>([
    {
      name: "Consumo em L",
      data: [0, 86, 28, 115, 48, 210, 136],
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Umidade",
        data: listaUmidade,
      }
    ]);
  }, [listaUmidade]);

  return (
    <div style={{maxWidth: 1400}}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={height}
      />
    </div>
  );
};

export default UmidadeBarChart;

import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import { Box, Button, Stack, SvgIcon } from "@mui/material";
import IncomeAreaChart from "../../components/bar-chart";
import "./index.scss";
import { useEffect, useState } from "react";
import { AquaMonitorService as http } from "../../services/AquaMonitorService";
import { ChartCard } from "../../components/chart-card";
import { HeaderCard } from "../../components/header-card";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./dataGrid/columns";
import { useStore } from "../../store/store";
import TempBarChart from "../../components/temp-chart";
import UmidadeBarChart from "../../components/umidade-chart";

interface IItensConsumoInfo {
  id_equipamento: string;
  temperatura: number;
  dia_da_semana: string;
  vazao_litro_acumulada: number;
  consumo_diario: number;
  id: string;
  data: string;
}

interface IValoresDashboard {
  vazao: number;
  temperatura: number;
  umidade: number;
  dia_semana: string;
  data: Date;
}

export default function MainDashboard() {
  const [listaConsumos, setListaConsumos] = useState<number[]>([]);
  const [listaTemperatura, setListaTemperatura] = useState<number[]>([]);
  const [listaUmidade, setListaUmidade] = useState<number[]>([]);
  const [listaDiasSemana, setListaDiasSemana] = useState<string[]>([]);
  const [dadosConsumo, setDadosConsumo] = useState<IItensConsumoInfo[]>([]);
  const [valoresMesAtual, setValoresMesAtual] = useState<IItensConsumoInfo>();
  const [slot, setSlot] = useState<string>("week");

  const { loading, setLoading } = useStore();

  useEffect(() => {
    getConsumo();
  }, []);

  async function getConsumo() {
    setLoading(true);
    const { status, data } = await http.getInfosConsumos();
    var listaConsumo: number[] = [];
    var listaTemperatura: number[] = [];
    var listaUmidade: number[] = [];
    var listaDias: string[] = [];
    var listaDashboard: Array<IValoresDashboard> = [];
    var listaPorMes: Array<IItensConsumoInfo> = [];

    data.itens = [];

    data.itens.push({
      id_equipamento: "a",
      temperatura: 40,
      dia_da_semana: "terca",
      vazao_litro_acumulada: 90,
      consumo_diario: 40,
      id: "1",
      umidade: 10,
      data: "2023-12-05T23:10:59",
    });

    data.itens.push({
      id_equipamento: "a",
      temperatura: 40,
      dia_da_semana: "segunda",
      vazao_litro_acumulada: 90,
      consumo_diario: 40,
      id: "2",
      umidade: 10,
      data: "2023-12-04T23:10:59",
    });

    data.itens.push({
      id_equipamento: "a",
      temperatura: 50,
      dia_da_semana: "domingo",
      vazao_litro_acumulada: 50,
      consumo_diario: 50,
      id: "3",
      umidade: 10,
      data: "2023-12-03T23:10:59",
    });

    data.itens.push({
      id_equipamento: "a",
      temperatura: 50,
      dia_da_semana: "domingo",
      vazao_litro_acumulada: 50,
      consumo_diario: 60,
      id: "4",
      umidade: 10,
      data: "2023-12-03T23:20:59",
    });

    data.itens.push({
      id_equipamento: "a",
      temperatura: 50,
      dia_da_semana: "domingo",
      vazao_litro_acumulada: 50,
      consumo_diario: 60,
      id: "5",
      umidade: 10,
      data: "2023-11-03T23:20:59",
    });

    data.itens.push({
      id_equipamento: "a",
      temperatura: 50,
      dia_da_semana: "domingo",
      vazao_litro_acumulada: 50,
      consumo_diario: 60,
      id: "6",
      umidade: 10,
      data: "2023-10-03T23:20:59",
    });

    if (status === 200) {
      data.itens.reverse();

      data.itens.forEach((x, index) => {
        const dataAtual = new Date(x.data);

        var dadosDash: IValoresDashboard = {
          vazao: Number(x.consumo_diario?.toFixed(2)),
          dia_semana: x.dia_da_semana.substring(0, 3),
          temperatura: x.temperatura,
          umidade: x.umidade,
          data: dataAtual,
        };

        listaDashboard.push(dadosDash);
      });

      listaDashboard = removerDatasDuplicadas(listaDashboard);
      listaPorMes = filtrarItensPorMes(data.itens);

      setValoresMesAtual(
        listaPorMes.find((x) => {
          var mesAnoAtual = `${new Date().toISOString().split("-")[0]}-${
            new Date().toISOString().split("-")[1]
          }`;

          var mesAno = `${x.data.split("-")[0]}-${x.data.split("-")[1]}`;

          if (mesAno === mesAnoAtual) {
            return x;
          }
        })
      );

      listaDashboard.forEach((x) => {
        listaConsumo.push(Number.isNaN(x.vazao) ? 0 : x.vazao);
        listaTemperatura.push(Number.isNaN(x.temperatura) ? 0 : x.temperatura);
        listaUmidade.push(Number.isNaN(x.umidade) ? 0 : x.umidade);
        listaDias.push(x.dia_semana);
      });

      setListaConsumos(listaConsumo);
      setListaTemperatura(listaTemperatura);
      setListaUmidade(listaUmidade);
      setListaDiasSemana(listaDias);
      setDadosConsumo(data.itens);
    }
    setLoading(false);
  }

  function removerDatasDuplicadas(
    lista: IValoresDashboard[]
  ): IValoresDashboard[] {
    const mapaDataMaisRecente = new Map<string, IValoresDashboard>();

    lista.forEach((objeto) => {
      const dataString = objeto.data.toISOString().split("T")[0];
      const dataMaisRecente = mapaDataMaisRecente.get(dataString);

      if (!dataMaisRecente || objeto.data > dataMaisRecente.data) {
        mapaDataMaisRecente.set(dataString, objeto);
      }
    });

    return Array.from(mapaDataMaisRecente.values());
  }

  function filtrarItensPorMes(itens: IItensConsumoInfo[]): IItensConsumoInfo[] {
    var valoresMensais = new Map<string, number>();

    itens.forEach((x) => {
      const data = new Date(x.data)

      const mesAno = `${data.getMonth() + 1}-${data.getFullYear()}`;

      if (valoresMensais.has(mesAno)) {
        valoresMensais.set(
          mesAno,
          valoresMensais.get(mesAno)! + x.consumo_diario
        );
      } else {
        valoresMensais.set(mesAno, x.consumo_diario);
      }
    });

    itens.sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );

    const itensFiltrados: IItensConsumoInfo[] = [];
    const mesesFiltrados: Set<number> = new Set();

    for (const item of itens) {
      const mes = new Date(item.data).getMonth();

      if (!mesesFiltrados.has(mes)) {
        itensFiltrados.push(item);
        mesesFiltrados.add(mes);
      }
    }

    return itensFiltrados;
  }

  return (
    <div className="dashboard-page-background">
      <div className="headers-cards">
        <HeaderCard
          iconColor="success.main"
          contentText={`${valoresMesAtual?.vazao_litro_acumulada ?? 0} L`}
          title="Consumo total"
        />

        <HeaderCard
          iconColor="success.main"
          contentText={`${
            valoresMesAtual?.vazao_litro_acumulada
              ? (valoresMesAtual?.vazao_litro_acumulada / 1000).toFixed(3)
              : 0
          } m3`}
          title="Consumo total em m3"
        />

        <HeaderCard
          iconColor="success.main"
          contentText={`${valoresMesAtual?.consumo_diario ?? 0} L`}
          gainLoss={{
            gain: false,
            percentage: 20,
            text: "Baseado no mês passado",
          }}
          title="Consumo mensal"
        />

        <HeaderCard
          iconColor="#2e7d32"
          contentText="R$ 350,00"
          gainLoss={{
            gain: true,
            percentage: 16,
            text: "Baseado no mês passado",
          }}
          icon={
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          }
          title="Valor mensal"
        />
      </div>

      <div className="charts-row">
        <ChartCard
          title="Consumo"
          width="70%"
          headerComponent={
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot("month")}
                color={slot === "month" ? "primary" : "secondary"}
                variant={slot === "month" ? "outlined" : "text"}
              >
                Mês
              </Button>
              <Button
                size="small"
                onClick={() => setSlot("week")}
                color={slot === "week" ? "primary" : "secondary"}
                variant={slot === "week" ? "outlined" : "text"}
              >
                Semana
              </Button>
            </Stack>
          }
        >
          <IncomeAreaChart
            slot={slot}
            height="530px"
            listaConsumos={listaConsumos}
            listaDiasSemana={listaDiasSemana}
          />
        </ChartCard>

        <div
          style={{
            width: "30%",
            display: "flex",
            gap: "16px",
            flexDirection: "column",
          }}
        >
          <ChartCard
            title="Temperatura"
            // headerComponent={
            //   <Stack direction="row" alignItems="center" spacing={0}>
            //     <Button
            //       size="small"
            //       onClick={() => setSlot("month")}
            //       color={slot === "month" ? "primary" : "secondary"}
            //       variant={slot === "month" ? "outlined" : "text"}
            //     >
            //       Mês
            //     </Button>
            //     <Button
            //       size="small"
            //       onClick={() => setSlot("week")}
            //       color={slot === "week" ? "primary" : "secondary"}
            //       variant={slot === "week" ? "outlined" : "text"}
            //     >
            //       Semana
            //     </Button>
            //   </Stack>
            // }
          >
            <TempBarChart
              height="225px"
              listaTemperatura={listaTemperatura}
              listaDiasSemana={listaDiasSemana}
            />
          </ChartCard>

          <ChartCard
            title="Umidade"
            // headerComponent={
            //   <Stack direction="row" alignItems="center" spacing={0}>
            //     <Button
            //       size="small"
            //       onClick={() => setSlot("month")}
            //       color={slot === "month" ? "primary" : "secondary"}
            //       variant={slot === "month" ? "outlined" : "text"}
            //     >
            //       Mês
            //     </Button>
            //     <Button
            //       size="small"
            //       onClick={() => setSlot("week")}
            //       color={slot === "week" ? "primary" : "secondary"}
            //       variant={slot === "week" ? "outlined" : "text"}
            //     >
            //       Semana
            //     </Button>
            //   </Stack>
            // }
          >
            <UmidadeBarChart
              height="225px"
              listaUmidade={listaUmidade}
              listaDiasSemana={listaDiasSemana}
            />
          </ChartCard>
        </div>
      </div>

      <ChartCard title="Últimas leituras">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={{ border: "none" }}
            rows={dadosConsumo}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 100,
                },
              },
            }}
            pageSizeOptions={[100]}
            disableRowSelectionOnClick
          />
        </Box>
      </ChartCard>

      <div style={{ height: 100 }} />
    </div>
  );
}

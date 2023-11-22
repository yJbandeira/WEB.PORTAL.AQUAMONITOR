import { httpMqttApi } from "../config/axios.config";

interface IConsumoDiarioResponde {
  ontem: number;
  hoje: number;
  diferenca_consumo: number;
}

interface IConsumoInfos {
  total: Int32Array;
  paginas: Int32Array;
  pagina: Int32Array;
  limite: Int32Array;
  itens: Array<IItensConsumoInfo>;
}

interface IItensConsumoInfo {
  id_equipamento: string;
  temperatura: number;
  dia_da_semana: string;
  vazao_litro_acumulada: number;
  consumo_diario: number;
  id: string;
  data: string;
}

export const AquaMonitorService = {
  getConsumoDiario: async (data: Date | undefined) => {
    return await httpMqttApi.get<IConsumoDiarioResponde>(`/consumo-diario/`);
  },

  getInfosConsumos: async () => {
    return await httpMqttApi.get<IConsumoInfos>(`/mqtt`);
  },
};

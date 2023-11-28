export function formatToBrlDate(dataString: string): string {
  if (!dataString) {
    return "";
  }

  const data = new Date(dataString);

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  const horas = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");
  const segundos = String(data.getSeconds()).padStart(2, "0");

  const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

  return dataFormatada;
}

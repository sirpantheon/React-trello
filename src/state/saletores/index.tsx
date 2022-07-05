import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: "eventosFiltradosState",
    get: ({get}) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)
        const eventos = todosOsEventos.filter(event => {
          if (!filtro.data) {
            return true;
          }
            const MesmoDia = filtro.data.toISOString().slice(0,10) === event.inicio.toISOString().slice(0,10);
            return MesmoDia ;
        })
        return eventos
    }
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respHttp = await fetch('http://localhost:8080/eventos')
    const eventosJson: IEvento[] = await respHttp.json()
    return eventosJson.map(event => ({
      ...event,
      inicio: new Date(event.inicio),
      fim: new Date(event.fim)

    }))
    }
  })


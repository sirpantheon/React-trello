import { selector } from "recoil";
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


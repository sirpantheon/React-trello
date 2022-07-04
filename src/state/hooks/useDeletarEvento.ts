import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export default function useDeletarEvento (){
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
    
        setListaEventos((listaAntiga) => [
          ...listaAntiga.filter(evt => evento.id !== evt.id)
        ])
      }
}
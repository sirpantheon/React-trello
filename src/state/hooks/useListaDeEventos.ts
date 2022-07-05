import { useRecoilValue } from 'recoil';
import { eventosFiltradosState } from '../saletores';


export default function useListaDeEventos(){
    return useRecoilValue(eventosFiltradosState)
}
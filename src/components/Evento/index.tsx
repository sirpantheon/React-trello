import React from 'react';
import { IEvento } from '../../interfaces/IEvento'
import useDeletarEvento from '../../state/hooks/useDeletarEvento';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const excluirEvento = useDeletarEvento();

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => excluirEvento(evento)}></i>
  </div>)
}

export default Evento
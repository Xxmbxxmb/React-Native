import { useState, useRef } from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const seleccionarNumero = (numeroTexto: string) => {
    // No aceptar mas de un .
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') setNumero(numero + '.');
      else if (numeroTexto === '0' && numero.includes('.'))
        setNumero(numero + numeroTexto);
      else if (numeroTexto !== '0' && !numero.includes('.'))
        setNumero(numeroTexto);
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else setNumero(numero + numeroTexto);
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const btnDelete = () => {
    if (numero.startsWith('-')) {
      if (numero.length > 2) setNumero(numero.slice(0, -1));
      else setNumero('0');
    } else {
      if (numero.length > 1) setNumero(numero.slice(0, -1));
      else setNumero('0');
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) setNumeroAnterior(numero.slice(0, -1));
    else setNumeroAnterior(numero);
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.dividir:
        setNumero((num2 / num1).toString());
        break;

      case Operadores.multiplicar:
        setNumero((num2 * num1).toString());
        break;

      case Operadores.sumar:
        setNumero((num2 + num1).toString());
        break;

      case Operadores.restar:
        setNumero((num2 - num1).toString());
    }
    setNumeroAnterior('0');
  };

  return {
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
    limpiar,
    seleccionarNumero,
    btnDelete,
    positivoNegativo,
    numero,
    numeroAnterior,
  };
};

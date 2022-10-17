import React from 'react';
import { View, Text } from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    limpiar,
    numero,
    numeroAnterior,
    positivoNegativo,
    seleccionarNumero,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.smallResult}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="#9B9B9B" onPress={limpiar} />
        <BotonCalculadora
          texto="+/-"
          color="#9B9B9B"
          onPress={positivoNegativo}
        />
        <BotonCalculadora texto="del" color="#9B9B9B" onPress={btnDelete} />
        <BotonCalculadora texto="÷" color="#FF9427" onPress={btnDividir} />
      </View>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="7" onPress={seleccionarNumero} />
        <BotonCalculadora texto="8" onPress={seleccionarNumero} />
        <BotonCalculadora texto="9" onPress={seleccionarNumero} />
        <BotonCalculadora texto="X" color="#FF9427" onPress={btnMultiplicar} />
      </View>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="4" onPress={seleccionarNumero} />
        <BotonCalculadora texto="5" onPress={seleccionarNumero} />
        <BotonCalculadora texto="6" onPress={seleccionarNumero} />
        <BotonCalculadora texto="-" color="#FF9427" onPress={btnRestar} />
      </View>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="1" onPress={seleccionarNumero} />
        <BotonCalculadora texto="2" onPress={seleccionarNumero} />
        <BotonCalculadora texto="3" onPress={seleccionarNumero} />
        <BotonCalculadora texto="+" color="#FF9427" onPress={btnSumar} />
      </View>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="0" ancho onPress={seleccionarNumero} />
        <BotonCalculadora texto="." onPress={seleccionarNumero} />
        <BotonCalculadora texto="=" color="#FF9427" onPress={calcular} />
      </View>
    </View>
  );
};

// #2D2D2D gris oscuro
// #FF9427 naranja
// #9B9B9B gris claro

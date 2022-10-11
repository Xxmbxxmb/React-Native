export const Funciones = () => {
  const sumar = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(5, 10)}</span>
    </>
  );
};

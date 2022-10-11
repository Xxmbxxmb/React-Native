export const TiposBasicos = () => {
  const nombre: string = "Diego";
  const edad: number = 26;
  const activo: boolean = true;

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {activo ? "activo" : "desactivado"}
    </>
  );
};

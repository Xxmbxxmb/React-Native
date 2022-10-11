interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNro: number;
}

export const ObjetosLiterales = () => {
  const persona = {
    nombre: "diego",
    edad: 26,
    direccion: {
      pais: "Chile",
      casaNro: 406,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

import { useState, useRef, useEffect } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuario = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    return () => {
      cargarUsuarios();
    };
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      pageRef.current--;
      alert("No hay mas registros");
    }
  };

  const paginaSiguiente = () => {
    pageRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      cargarUsuarios();
    } else alert("Estas en la primera pagina.");
  };

  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente
  };
};

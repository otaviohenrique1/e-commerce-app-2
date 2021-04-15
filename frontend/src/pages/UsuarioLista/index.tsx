import { useEffect, useState } from "react";
import { Item } from "../../components/Item";
import api from "../../services/api";

interface Usuario {
  nome: string;
  email: string;
}

export default function UsuarioLista() {
  const [usuario, setUsuario] = useState<Usuario[]>([]);

  useEffect(() => {
    api.get(`usuarios`)
      .then((response) => {
        setUsuario(response.data)
      });
  }, []);

  return (
    <>
      <h1 className="mb-5 mt-5">Lista de Usuarios</h1>
      <div>
        {usuario.map((item, index) => {
          return (
            <Item
              key={index}
              valorCampo1={`Nome: ${item.nome}`}
              valorCampo2={`Email: ${item.email}`}
              exibeBotoes={false}
            />
          );
        })}
      </div>
    </>
  );
}

/*
import { useEffect, useState } from "react";
import { ItemUsuario } from "../../components/Item";
import api from "../../services/api";

interface Usuario {
  nome: string;
  email: string;
}

export default function UsuarioLista() {
  const [usuario, setUsuario] = useState<Usuario[]>([]);

  useEffect(() => {
    api.get(`usuarios`)
      .then((response) => {
        setUsuario(response.data)
      });
  }, []);

  function handleView() {
    alert('Exibir Usuario');
  }

  function handleUpdate() {
    alert('Editar Usuario');
  }

  function handleDelete() {
    alert('Remover Usuario');
  }

  return (
    <>
      <h1 className="mb-5 mt-5">Lista de Usuarios</h1>
      <div>
        {usuario.map((item, index) => {
          return (
            <ItemUsuario
              key={index}
              nome={item.nome}
              email={item.email}
              onClickView={handleView}
              onClickUpdate={handleUpdate}
              onClickDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}
*/
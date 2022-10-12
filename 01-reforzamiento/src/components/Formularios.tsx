import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { state, email, password, changeHandler } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formulario</h3>
      <input
        className="form-control"
        type="text"
        placeholder="Email"
        value={email}
        onChange={({ target }) => changeHandler(target.value, "email")}
      />
      <input
        className="form-control mt-2 mb-2"
        type="text"
        placeholder="Password"
        value={password}
        onChange={({ target }) => changeHandler(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(state)}</pre>
      </code>
    </>
  );
};

export default Formularios;

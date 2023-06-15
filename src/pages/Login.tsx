import { GoogleLogo } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-primary w-screen h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">DevDen</h1>

      <h2 className="text-3xl mt-10 font-bold">Login</h2>

      <label htmlFor="email" className="mt-10">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 bg-secondary rounded-lg"
      />

      <label htmlFor="senha" className="mt-10">
        Senha
      </label>
      <input
        type="password"
        name="senha"
        id="senha"
        className="p-2 bg-secondary rounded-lg"
      />

      <button className="mt-10 p-4 bg-secondary rounded-lg font-bold">
        Entrar
      </button>

      <button className="mt-10 p-4 w-64 bg-secondary rounded-3xl flex items-center justify-around">
        <GoogleLogo /> Continuar com o Google
      </button>

      <p>
        Primeira vez aqui?{" "}
        <span
          className="text-blue-600 mt-4"
          onClick={() => {
            navigate("/signup");
          }}
          style={{ cursor: "pointer" }}
        >
          Cadastre-se
        </span>
      </p>
    </div>
  );
}

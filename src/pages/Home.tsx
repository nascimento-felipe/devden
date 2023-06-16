import { useNavigate } from "react-router-dom";
import CardTopico from "../components/CardTopico";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 bg-primary w-screen h-fit overflow-hidden">
      <div>
        {/* esse h1 é só pra ocupar espaço do grid */}
        <h1></h1>
      </div>
      <div className=" flex flex-col items-center">
        <h1
          className="text-6xl mt-10 text-white font-bold"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          DevDen
        </h1>
        <input
          type="text"
          className="p-2 h-10 w-96 bg-text-input text-white rounded-lg m-10 placeholder:text-gray-600"
          placeholder="Ex.: Como fazer casos de uso"
        />
        <div className="flex flex-col justify-evenly h-screen">
          <CardTopico
            titulo="O que é transparência referencial e como ela é 
          implementada em clojure?"
          />

          <CardTopico
            titulo="Como eu posso fazer regressão linear usando a 
          biblioteca Scikit Learn?"
          />

          <CardTopico
            titulo="Como eu poderia aplicar melhor a teoria das cores 
          em meu projeto?"
          />

          <CardTopico titulo="Porque Jorge Aragao eh o cara mais brabo do mundo?" />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          className="text-white w-fit m-4 bg-secondary p-2 rounded-lg font-bold"
          onClick={() => navigate("/login")}
        >
          Login / Signup
        </button>
        <button
          className="text-white m-4 w-fit bg-secondary p-2 rounded-lg font-bold"
          onClick={() => {
            // fazer o modal de ticket
          }}
        >
          Fazer ticket
        </button>
      </div>
    </div>
  );
}

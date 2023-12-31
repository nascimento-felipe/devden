import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardTopico from "../components/CardTopico";
import CriarTopicoForm from "../components/CriarTopicoForm";
import FazerTicket from "../components/FazerTicket";
import UserProfile from "../components/UserProfile";
import VerTickets from "../components/VerTickets";
import { instance } from "../lib/axios";
import { auth } from "../lib/firebase";

interface Topico {
  TOP_ID: number;
  TOP_TITULO: string;
  TOP_MENSAGEM: string;
  FK_USUARIOS_USR_ID: number;
}

export default function Home() {
  const navigate = useNavigate();

  const [topicos, setTopicos] = useState<Topico[]>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log(isAuthenticated);

  useEffect(() => {
    loadTopicos();
  }, []);

  async function loadTopicos() {
    const tops = await instance.get("/topicos");

    setTopicos(tops.data);
  }

  auth.onAuthStateChanged((u) => {
    u ? setIsAuthenticated(true) : setIsAuthenticated(false);
  });

  return (
    <div className="grid grid-cols-3 gap-4 bg-primary w-screen h-fit text-white overflow-hidden">
      {/* Botoes do lado esquerdo */}
      <div>
        {/* Botao do form de Criar topico */}
        {isAuthenticated && (
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className="bg-secondary text-white p-2 m-4 font-bold rounded-lg"
            >
              Criar topico
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
              <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-xl top-40 left-96 ml-72">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>

                <Dialog.Title className="text-white text-center font-bold text-xl">
                  Criar Topico
                </Dialog.Title>

                <CriarTopicoForm />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}

        {/* Botao do form de Ver tickets */}
        {isAuthenticated && (
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className="bg-secondary text-white p-2 m-4 font-bold rounded-lg"
            >
              Ver Tickets
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
              <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-xl top-40 left-96 ml-72">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>

                <VerTickets />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}

        {/* Coluna da parte do meio */}
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
          {topicos ? (
            topicos.map((t) => {
              return <CardTopico key={t.TOP_ID} titulo={t.TOP_TITULO} />;
            })
          ) : (
            <span>Nenhum topico existe no</span>
          )}
        </div>
      </div>

      {/* Botoes do lado direito */}
      <div className="flex flex-row items-start justify-center">
        {isAuthenticated && (
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className="bg-secondary text-white p-2 m-4 font-bold rounded-lg"
            >
              Fazer ticket
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
              <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-xl top-40 left-96 ml-72">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>

                <Dialog.Title className="text-white text-center font-bold text-xl">
                  Fazer ticket
                </Dialog.Title>

                <FazerTicket />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}

        {isAuthenticated ? (
          <UserProfile />
        ) : (
          <button
            className="text-white w-fit m-4 bg-secondary p-2 rounded-lg font-bold"
            onClick={() => navigate("/login")}
          >
            Login / Signup
          </button>
        )}
      </div>
    </div>
  );
}

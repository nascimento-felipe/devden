import CupheadFoto from "../assets/cuphead.png";
import EdFoto from "../assets/edw.png";
import AkameFoto from "../assets/kameeeee.png";
import MichaelFoto from "../assets/michael.jpg";
import MidoriyaFoto from "../assets/midoriya.png";
import Tag from "../components/Tag";
import UserInTopic from "../components/UserInTopic";

export default function Chat() {
  return (
    <div className="bg-primary h-screen w-screen grid grid-rows-3">
      {/* parte de cima do chat */}
      <div className="grid grid-cols-4">
        <div>
          <img
            src={EdFoto}
            alt="Imagem de Edward Elric"
            width={400}
            className="m-10 rounded-lg"
          />
        </div>
        <div className="flex flex-col mt-10">
          <span className="text-blue-600">Eduardo Elrico Lisin</span>
          <span className="text-white font-bold text-5xl">
            Como fazer casos de uso melhores
          </span>
          <div className="flex flex-row w-max">
            <Tag text="Engenharia de Software" />
            <Tag text="Gestao" />
            <Tag text="Desenvolvimento de Software" />
            <Tag text="Documentacao" />
            <Tag text="+" />
          </div>
        </div>

        <div className="col-span-2 flex justify-end items-center m-10">
          <input
            type="text"
            placeholder="Buscar Mensagem"
            className="w-64 h-12 bg-secondary rounded-lg p-2"
          />
        </div>
      </div>

      {/* chat em si, com as conversas e as pessoas do chat*/}
      <div className="grid grid-cols-4 row-span-2">
        <div className="flex flex-col ml-10 bg-secondary m-5 p-5 rounded-lg">
          <h1 className="mb-10 text-white font-bold text-xl self-center">
            Pessoas na conversa
          </h1>

          {/* Aqui vai precisar colocar um scroll infinito pra colocar os usuarios. Talvez tenha que fazer uma <ul> */}
          <UserInTopic
            src={MichaelFoto}
            alt="foto da akame"
            nome="Joao Jorge"
          />
          <UserInTopic
            src={MidoriyaFoto}
            alt="foto do ed"
            nome="Rogerinho Sabe Tudo"
          />
          <UserInTopic src={AkameFoto} alt="foto do ed" nome="Anne Lucy" />
          <UserInTopic
            src={CupheadFoto}
            alt="foto do ed"
            nome="Caue Henrique"
          />
        </div>
        <div className="col-span-3 bg-secondary m-5 max-h-screen rounded-lg"></div>
      </div>
    </div>
  );
}

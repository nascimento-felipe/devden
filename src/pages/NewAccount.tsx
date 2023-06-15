export default function NewAccount() {
  return (
    <div className="bg-primary w-screen h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">DevDen</h1>

      <h2 className="text-3xl mt-10 font-bold">Criar Conta</h2>

      <label htmlFor="nome" className="mt-5">
        Nome Completo
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        className="p-2 bg-secondary rounded-lg"
      />

      <label htmlFor="username" className="mt-5">
        Nome de usuário
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="p-2 bg-secondary rounded-lg"
      />

      <label htmlFor="email" className="mt-5">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 bg-secondary rounded-lg"
      />

      <label htmlFor="senha" className="mt-5">
        Senha
      </label>
      <input
        type="password"
        name="senha"
        id="senha"
        className="p-2 bg-secondary rounded-lg"
      />

      <label htmlFor="confirmarSenha" className="mt-5">
        Confirmar Senha
      </label>
      <input
        type="password"
        name="confirmarSenha"
        id="confirmarSenha"
        className="p-2 bg-secondary rounded-lg"
      />

      <button className="mt-5 p-4 bg-secondary rounded-lg font-bold">
        Entrar
      </button>
    </div>
  );
}

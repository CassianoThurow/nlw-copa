
import Image from 'next/image'
import appPreviewImg from '../assets/aplicacao-trilha-ignite.png'
import LogoNlw from '../assets/logo.svg'
import Avatars from '../assets/avatares.png'
import iconCheck from '../assets/icon.svg'

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto gap-28 grid grid-cols-2 items-center">
      <main>
        <Image src={LogoNlw} alt="NLW Copa" />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={Avatars} alt="Fotos de usuários da aplicação" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando
          </strong>
        </div>
        <form className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text" 
            required 
            placeholder='Qual nome do seu bolão?'
          />
          <button 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm 
            uppercase hover:bg-yellow-700"
            type="submit"
          >
              criar meu bolão
          </button>
        </form>
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para 
          convidar outras pessoas 🚀
        </p>
        <div className="mt-10 pt-10 border-t border-gray-600 text-gray-100 flex justify-between">
          <div className="flex items-center gap-6 ">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className="w-px h-14 bg-gray-600" />
          <div className="flex items-center gap-6 ">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image 
        src={appPreviewImg} 
        alt="Dois celular exibindo uma previa do aplicativo" 
        quality={100}
      />
    </div>
    )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Only Sabers',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br"  className="bg-zinc-950 text-zinc-50 font-mono">
      <body>
      <a href="/" ><h1 className="text-6xl self-center m-16 text-blue-400 "> Only Sabers - Loja de Sabres de Luz </h1></a> 
        {children}
        <footer className='bg-blue-950 p-16 text-zinc-50 '>
    
    <div class="content">

        <div class="colfooter">
            <h3 class="titleFooter text-2xl font-bold"> Menu</h3>
            <ul>
              <li><a href="/" title="Página Inícial">Página Inícial</a></li>
            </ul>
           <h3 class="titleFooter text-2xl font-bold"> Contato</h3>
           <p>onlySabers@gmail.com.br</p>
           <p> 18 99600-3005</p>
           <p> 67 99678-7978</p>
        </div>
    </div>
    <div class="main_footer_copy">
        <p class="m-b-footer"> Only Sabers - 2023, todos os direitos reservados.</p> 
        <p class="by"> Desenvolvido por: Camilly B. Tudes & Caio Loyer </p>
    </div>
    </footer>
      </body>
    </html>
  )
}

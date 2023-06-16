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
        <h1 className="text-6xl self-center m-16 text-blue-400 "> Only Sabers - Loja de Sabres de Luz </h1>
        {children}
        <footer className='bg-gradient-to-r p-16 from-blue-500 to-red-500 main_footer  text-black  '>
    
    <div class="content">

        <div class="colfooter">
            
            <h3 class="titleFooter text-2xl font-bold"> Menu</h3>
            
            <ul>
            
              <li><a href="/" title="Página Inícial">Página Inícial</a></li>
              <li><a href="/" title="Galeria de Fotos">Galeria de Fotos</a></li>
              <li><a href="/" title="Fale Conosco">Fale Conosco</a></li>
            
            </ul>

        </div>       

        <div class="colfooter">
           
           <h3 class="titleFooter text-2xl font-bold"> Contato</h3>
           <p><i class="icon icon-mail"></i> onlySabers@gmail.com.br</p>
           <p><i class="icon icon-phone"></i> 67 99600-3005</p>
           <p><i class="icon icon-whatsapp"></i> 67 99600-3005</p>

        </div>
      
    
    </div>
    <div class="main_footer_copy">
        
        <p class="m-b-footer"> Only Sabers - 2023, todos os direitos reservados.</p> 
        <p class="by"><i class="icon icon-heart-3"></i> Desenvolvido por: Camilly B. Tudes & Caio Loyer </p>
    
    </div>


  </footer>
      </body>
    </html>
  )
}

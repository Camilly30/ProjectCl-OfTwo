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
        <h1 className="text-2xl self-center m-16 "> Only Sabers - Loja de Sabres de Luz </h1>
        {children}
      </body>
    </html>
  )
}

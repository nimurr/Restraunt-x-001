import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar2 from '@/components/Navbar2'
import SubNavbar from '@/components/Home/SubNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <SubNavbar></SubNavbar>
        <Navbar2></Navbar2>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

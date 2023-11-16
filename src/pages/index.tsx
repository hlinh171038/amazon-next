import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import ButtonHeader from '@/components/header/ButtonHeader'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Banner/>
    </div>
  )
}

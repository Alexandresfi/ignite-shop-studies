import Image from "next/image"
import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import Logo from "../assets/Logo.svg"
import { Container, Header } from "../styles/pages/app"
import Link from "next/link"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
    
  return (
    <Container>
      <Header>
        <Link href='/' > 
          <Image src={Logo} alt="" /> 
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

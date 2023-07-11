import { ImageContainer, ProductContainer, ProductSetails } from "../../styles/pages/product"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import axios from "axios"
import { useState } from "react"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({product}: ProductProps) {
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState<boolean>(false)
  async function handleBuyProduct() {
    try {
      setIsCreateCheckoutSession(true)
      const response = await axios.post('/api/createCheckout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
      
    } catch (error) {
      setIsCreateCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout');
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductSetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyProduct} disabled={isCreateCheckoutSession} >comprar</button>
      </ProductSetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }  
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const producId = params.id

  const product = await stripe.products.retrieve(producId, {
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price.unit_amount / 100),
          description: product.description,
          defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}
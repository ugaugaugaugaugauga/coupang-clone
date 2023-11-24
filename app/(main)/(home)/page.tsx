import AdProducts from './_components/ad-products'
import { Hero } from './_components/hero'
import { Briefcase } from 'lucide-react'

const MainPage = () => {
  return (
    <main>
      <Hero />
      <AdProducts title='오늘의 쇼핑 제안' />
      <AdProducts title='좋아할만한 브랜드 상품' />
    </main>
  )
}

export default MainPage

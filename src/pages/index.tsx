import Counter from '@/components/function/Counter/Counter'
import { SEO } from '@/components/function/SEO'
import H1 from '@/components/interface/Heading/H1/H1'
import LinkButton from '@/components/interface/LinkButton/LinkButton'
import type { NextPage } from 'next'
import Layout from '../components/interface/Layout/Layout'

const Index: NextPage = () => {
  return (
    <Layout>
      <SEO path="/" title="Notion文字数カウント" />
      <H1 label="Notionに埋め込める文字数カウンター" />
      <div className="my-4 mx-auto grid grid-cols-2 text-center">
        <LinkButton label="埋め込みページはこちら" href="/embed" role="info" />
        <LinkButton
          label="デモはこちら"
          href="https://cohu.notion.site/0cd45d1441d745a6952cfa47fe91237c"
          role="normal"
        />
      </div>
      <Counter />
    </Layout>
  )
}

export default Index

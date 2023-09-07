import Article from "../../components/Pages/Article/Article"


export default function ArticlePage({params}: {params:{articleid: string}}) {
    return (
     <Article articleId={params.articleid} />
    )
  }
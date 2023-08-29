import Blog from "@/app/components/Pages/Blog/Blog/Blog"

export default function BlogPage({params}: {params:{search: string}}) {
    return (
     <Blog search={params.search} />
    )
  }
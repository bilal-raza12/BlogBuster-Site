import { blogData } from "@/app/data/blogdata"
import BlogPost from "@/components/blogpost"



interface BlogProps {
    params:{slug: string}
}
const Blog = ({params} : any) => {
    const blog = blogData.find((b) => b.slug === params.slug)
   
  return (
    <div className="p-4">
        

        <BlogPost  title={blog?.title} author={blog?.author} publishdate={blog?.publishedate} imageURL={blog?.imageURL} content={blog?.content}/>
    
    </div>
  )
}

export default Blog
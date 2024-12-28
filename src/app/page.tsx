import BlogCard from "@/components/blogcard";
import { blogData} from "./data/blogdata";
export default function Home() {
  return (
 <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 p-4 ">
   {blogData.map((blog) => (
    <BlogCard key={blog.slug} slug={blog.slug} title={blog.title} author={blog.author} description={blog.description} publishdate={blog.publishedate} imageURL={blog.imageURL} />
   ))}
 </div>
  );
}

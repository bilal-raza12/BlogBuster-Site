import BlogCard from "@/components/blogcard";
import { blogData} from "./data/blogdata";
export default function Home() {
  return (
    <>
    <div className="mx-4 p-4 mt-4 md:text-6xl border-y-[1px] md:pl-[350px] pl-9 border-black text-3xl font-bold">
        LATEST BLOGS
    </div>
 <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 p-4 ">
   {blogData.map((blog) => (
    <BlogCard key={blog.slug} slug={blog.slug} title={blog.title} author={blog.author} description={blog.description} publishdate={blog.publishedate} imageURL={blog.imageURL} />
  ))}
 </div>
  </>
  );
}

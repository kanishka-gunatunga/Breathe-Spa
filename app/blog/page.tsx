import styles from "@/styles/page.module.css";
import Image from "next/image";
import BlogCard from "@/components/ReusableComponents/BlogCard";
import { getBlogData } from "@/sanity/libs/api";

const Blog = async () => {

    const blogs = await getBlogData();

    return (
        <div>
            <div>
                <Image
                    className={`m-0 p-0 ${styles.blogCon}`}
                    src="/blog_banner.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: '100%', height: 'auto' }}
                    alt="Blog Banner"
                />
            </div>

            <div className={`${styles.contactContainer} section py-5 px-4 px-lg-5`} id="blogArticles">
                <h3 className={`${styles.section_title} mb-5 text-start`}>Our Recent Posts</h3>
                <div className="row g-4">
                    {blogs.map((post) => (
                        <div key={post._id} className="col-md-4 mobile_padding_remove">
                            {/* <BlogCard post={post}/> */}
                            <BlogCard
                                title={post.title}
                                slug={typeof post.slug === "string" ? post.slug : post.slug.current}
                                feturedText={post.feturedText}
                                mainImage={post.feturedImage}
                                body={post.body}
                                publishedAt={post.publishedAt} _id={post._id} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
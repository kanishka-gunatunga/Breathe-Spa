import Image from "next/image";
import styles from "@/styles/page.module.css";
import {fetchBlogData} from "@/sanity/libs/api";
import {urlFor} from "@/sanity/libs/sanity";
import {PortableText} from "next-sanity";
import style from "@/styles/services.module.css";
import Link from "next/link";
import React from "react";


export default async function BlogPost({params}: { params: Promise<{ slug: string }> }) {

    const {slug} = await params;
    console.log("slug : ", slug);

    const blog = await fetchBlogData(slug);
    console.log("blog : ", blog);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    // const allBlogs = await getBlogData();

    // const sortedBlogs = allBlogs.sort((a, b) =>
    //     new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    // );

    // const currentIndex = sortedBlogs.findIndex(post =>
    //     (typeof post.slug === "string" ? post.slug : post.slug.current) === slug
    // );

    // const prevBlog = currentIndex < sortedBlogs.length - 1 ? sortedBlogs[currentIndex + 1] : null;
    // const nextBlog = currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null;

    // const prevSlug = prevBlog ? (typeof prevBlog.slug === "string" ? prevBlog.slug : prevBlog.slug.current) : "#";
    // const nextSlug = nextBlog ? (typeof nextBlog.slug === "string" ? nextBlog.slug : nextBlog.slug.current) : "#";


    return (
        <div className={`${styles.contactContainer} section py-5 px-lg-5 mobile_padding_remove`}>
            <div className="text-center mb-5">
                <h1 className={`${styles.sectionTitle_v2} mb-3`}>{blog.title}</h1>
                <p className={`text-[14px] ${styles.blogCardDate}`}> {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}</p>
            </div>


            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className={`${styles.blogImageContainer} mb-5 mx-0`}>
                        {blog?.mainImage && (
                            <Image
                                src={urlFor(blog?.mainImage).url() || "/interior.png"}
                                alt={blog.title}
                                layout="responsive"
                                width={1200}
                                height={400}
                                priority
                                className="w-full h-auto object-cover rounded-3"
                            />
                        )}
                    </div>
                    <div
                        className={`${styles.blogContent} mb-5`}
                    >
                        <PortableText value={blog.body}/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link href={`/blog#blog-section`} passHref>
                            <button className={`${style.darkButtonNew}`}
                                    style={{border: "none"}}>Back
                            </button>
                        </Link>
                        {/*<Link href={nextBlog ? `/blog/${nextSlug}` : "#"} passHref>*/}
                        {/*    <button className={`${style.darkButtonNew}`}*/}
                        {/*            disabled={!nextBlog}*/}
                        {/*            style={{border: "none", cursor: !nextBlog ? "not-allowed" : "pointer"}}>Next Post*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

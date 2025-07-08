import styles from "@/styles/page.module.css";
import Image from "next/image";
import BlogCard from "@/components/ReusableComponents/BlogCard";
import {getBlogData, getMetadata} from "@/sanity/libs/api";
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
import React from "react";
import {Metadata} from "next";
import {urlFor} from "@/sanity/libs/sanity";

const Blog = async () => {

    const blogs = await getBlogData();

    return (
        <div>
            <ScrollHandler/>
            <div>
                <Image
                    className={`m-0 p-0 ${styles.blogCon}`}
                    src="/blog_banner.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{width: '100%', height: 'auto'}}
                    alt="Blog Banner"
                />
            </div>

            <div className={`${styles.contactContainer} section py-5 px-4 px-lg-5`}>
                <h3 id="blog-section" className={`${styles.section_title} mb-5 text-start`}>Our Recent Posts</h3>
                <div className="row g-4" id="blogArticles">
                    {blogs.map((post) => (
                        <div key={post._id} className="col-md-4 mobile_padding_remove">
                            {/* <BlogCard post={post}/> */}
                            <BlogCard
                                title={post.title}
                                slug={typeof post.slug === "string" ? post.slug : post.slug.current}
                                feturedText={post.feturedText}
                                mainImage={post.feturedImage}
                                body={post.body}
                                publishedAt={post.publishedAt} _id={post._id}/>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("blog");

    return {
        title: mdata?.title || "Breathe Spa - Blog",
        description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
        keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Blog",
            description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
            url: mdata?.canonicalUrl || "https://breathespa.vercel.app/blog",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/blog",
        },
    };
}
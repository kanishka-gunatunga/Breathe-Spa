"use client";

import styles from "@/styles/page.module.css";
import Image from "next/image";
import BlogCard from "@/components/ReusableComponents/BlogCard";
import { useEffect, useState } from "react";
import { BlogData } from "@/sanity/types";
import { getBlogData } from "@/sanity/libs/api";

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogData = await getBlogData();
                setBlogs(blogData);
                console.log("blogData : ", blogData)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!blogs) return <p>Loading...</p>;

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

            <div className={`${styles.contactContainer} section py-5 px-4 px-lg-5`}>
                <h3 className={`${styles.section_title} mb-5 text-start`}>Our Recent Posts</h3>
                <div className="row g-4">
                    {blogs.map((post) => (
                        <div key={post._id} className="col-md-4 mobile_padding_remove">
                            {/* <BlogCard post={post}/> */}
                            <BlogCard
                                title={post.title}
                                slug={post.slug}
                                feturedText={post.feturedText}
                                mainImage={post.mainImage}
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
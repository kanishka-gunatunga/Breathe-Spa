import Image from "next/image";
import styles from "@/styles/page.module.css";
import { fetchBlogData } from "@/sanity/libs/api";
import { urlFor } from "@/sanity/libs/sanity";
import { PortableText } from "next-sanity";



export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    
    const { slug } =  await params;
    console.log("slug : ", slug);

    const blog = await fetchBlogData(slug);
    console.log("blog : ", blog);

    if (!blog) {
        return <p>Blog not found</p>;
    }



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
                        <PortableText value={blog.body} />
                    </div>
                </div>
            </div>
        </div>
    );
};

import Image from "next/image";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import { BlogData } from "@/sanity/types";
import { urlFor } from "@/sanity/libs/sanity";

const BlogCard: React.FC<BlogData> = ({ title, slug, mainImage, publishedAt, featuredText }) => {
    return (
        <Link href={`/blog/${slug}`} className="text-decoration-none">
            <div
                className={`bg-white blogCardBody rounded-3 overflow-hidden cursor-pointer ${styles.blogCard}`}
            >
                {mainImage && (
                   <div className={styles.blogCardImageWrapper}>
                   <Image
                     src={urlFor(mainImage).url()}
                     alt={title}
                     fill 
                     className="object-cover rounded-[20px]"
                     sizes="(max-width: 768px) 100vw, 300px"
                   />
                 </div>
                )}


                <div className="p-4 px-0">
                    <p className={`text-[14px] ${styles.blogCardDate}`}>
                        {new Date(publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </p>

                    <h3 className={`mb-2 ${styles.blogCardTitle_new}`}>
                        {title}
                    </h3>
                    <p className={styles.blogCardDesc}>{featuredText}</p>
                    {/* <PortableText value={body} /> */}
                    <p className={`${styles.blogCardRead}`}>
                        Read More...
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
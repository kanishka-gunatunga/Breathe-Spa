import Image from "next/image";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import { BlogData } from "@/sanity/types";
import { urlFor } from "@/sanity/libs/sanity";

const BlogCard: React.FC<BlogData> = ({ title, slug, mainImage, publishedAt, feturedText }) => {
    return (
        <Link href={`/blog/${slug}`} className="text-decoration-none">
            <div
                className={`bg-white blogCardBody rounded-3 shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.02] cursor-pointer ${styles.blogCard}`}
            >
                {mainImage && (
                    <Image
                        src={urlFor(mainImage).url()}
                        alt={title}
                        layout="responsive"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover rounded-top-3"
                    />
                )}

                <div className="p-4">
                    <p className={`text-[14px] ${styles.blogCardDate}`}>
                        {new Date(publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </p>

                    <h3 className={`mb-2 ${styles.blogCardTitle}`}>
                        {title}
                    </h3>
                    <p className={styles.blogCardDesc}>{feturedText}</p>
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
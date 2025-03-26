import Image from "next/image";
import styles from "@/styles/page.module.css";

const BlogCard = ({post}) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
            <Image
                src={post.imageUrl}
                alt={post.title}
                layout="responsive"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
            />
            <div className="py-4">
                <p className={`text-[15px] ${styles.blogCardDate}`}>6 January 2025</p>
                <h3 className={`mb-2 ${styles.blogCardTitle}`}>
                    {post.title}
                </h3>
                <p className={styles.blogCardDesc}>{post.description}</p>
                <p className={`${styles.blogCardRead}`}>
                    Read More...
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
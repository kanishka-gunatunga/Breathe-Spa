import styles from "@/styles/page.module.css";
import Image from "next/image";
import BlogCard from "@/components/ReusableComponents/BlogCard";

const Blog =  () => {
    return (
        <div>
            <div>
                <div className={styles.bannerImageDiv}>
                    <Image className={`m-0 p-0 ${styles.headingImage}`} src="/blog_banner.png"
                           width={0}
                           height={0}
                           sizes="100%"
                           style={{width: '100%', height: 'auto'}}
                           alt=""/>
                </div>

                <div className="m-4 py-2 px-lg-5">
                    <h3 className={styles.sectionTitle}>Our Recent Posts</h3>
                    <div>
                        <BlogCard/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog;
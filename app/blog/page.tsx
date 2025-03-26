import styles from "@/styles/page.module.css";
import Image from "next/image";
import BlogCard from "@/components/ReusableComponents/BlogCard";

const Blog = () => {

    const blogPosts = [
        {id: 1, title: 'Unwind & Glow: Your Guide To Ultimate Relaxation', imageUrl: '/blog_card.png', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 2, title: 'The Benefits of Deep Tissue Massage', imageUrl: '/blog_card.png', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 3, title: 'Aromatherapy: Healing Through Scent', imageUrl: '/blog_card.png', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 4, title: 'Mindfulness and Meditation for Stress Relief', imageUrl: '/blog_card.png', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 5, title: 'Healthy Skin Starts from Within', imageUrl: '/blog_card.png', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 6, title: 'Top 10 Spa Treatments for Rejuvenation', imageUrl: '/blog_card.png', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ];

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
                    <h3 className={`${styles.sectionTitle} mb-5 mx-4`}>Our Recent Posts</h3>
                    <main className="bg-gray-50">
                        <div className="py-12">
                            <div className="container">
                                {/*<h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">*/}
                                {/*    Our Recent Posts*/}
                                {/*</h2>*/}
                                <div className="row">
                                    {/* Use the BlogCard component */}
                                    {blogPosts.map((post) => (
                                        <div key={post.id} className="col-md-4 mb-6">
                                            <BlogCard post={post}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    )
}

export default Blog;
import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import AboutStyles from "@/styles/about.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import { url } from "inspector";

const page = () => {
  return (
    <div>
      <div className="about-page">

        {/* banner image part */}
        <div className={styles.bannerImageDiv}>
          <Image className={`m-0 p-0 ${styles.headingImage}`} src="/banner-about.png"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }}
            alt="" />
        </div>



        {/* section 3  about brehte for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide} `}>

          <div className={`d-flex justify-content-center ${AboutStyles.hh}`}>
            <div className="col-5">
              <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={650} width={548} alt="" />
            </div>
            <div className="col-5 d-flex flex-column justify-content-between about">
              <h3 className={styles.sectionTitle}>About Breathe</h3>
              <p className={styles.sectionDescription}>
                Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor.
              </p>
              <Button text="BOOK A TREATMENT" href="#" />
            </div>
          </div>

        </div>



        <div className={`mx-0 px-0 ${styles.baseSection, styles.mobileHide}`}>
          <div className="position-relative">
            <Image className={styles.ethosBackgorund} src="/Group1000003149(1).png" height={368} width={620} alt="" />
            <div className={`position-absolute ${styles.locationDiv}`}>
              <div className="row d-flex justify-content-center p-2 p-md-5 p-lg-5">
                <div className="col-12 col-md-5 col-lg-5 d-flex flex-column justify-content-between">
                  <div className={styles.location}>
                    <h3 className={styles.locationDivTitle}>Why Choose Us</h3>
                    <p className={styles.locationDivP}>
                      Lorem ipsum dolor sit amet consectetur. Ac arcu auctor non imperdiet laoreet morbi tristique metus. Bibendum enim ut non ac aenean malesuada eget lectus. Vitae amet at amet diam. Massa porttitor mi scelerisque praesent auctor pharetra eget ut. Augue elementum consequat lacus sit. Suspendisse ipsum odio eu sagittis semper tincidunt. Sit ultrices egestas arcu odio tristique amet interdum montes. Cras vel sed cursus vulputate viverra mauris. Pellentesque quam ultricies adipiscing quam nunc purus lectus. Vitae amet velit at ut. Adipiscing amet eleifend duis a augue. Maecenas vulputate sed tellus imperdiet dictum imperdiet etiam quis. Blandit consectetur placerat imperdiet in purus amet. Eget posuere ac commodo ultrices tristique dolor turpis interdum semper. Arcu ut ornare placerat dolor scelerisque tincidunt commodo duis egestas. Euismod amet scelerisque nullam purus duis velit. Augue sit aliquet auctor aliquam. Mauris egestas dolor egestas consectetur. Blandit eget egestas mauris sit. Feugiat neque consequat sit lorem mattis enim nibh. Neque odio quis ultrices morbi sit augue ut eget. Bibendum enim proin dui ut in. Ac placerat quisque iaculis rhoncus ut sit. Leo a vulputate purus et.
                    </p>
                  </div>

                  <Button text="EXPLORE OUR SERVICES" href="#" />
                </div>

                <div className="col-12 col-md-5 col-lg-5 d-md-flex d-lg-flex justify-content-end">
                  <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={731} width={640} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.baseSection}>
          <div className="col-10">
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <Image src="/testimonialPic.png" alt="testimonialPic" width={289} height={343} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex flex-column justify-content-between align-items-stretch">
                    <div>
                      <p className="card-text">“Lorem ipsum dolor sit amet consectetur. Nisl in dictum viverra in sagittis tincidunt. Ut aenean id mattis quis consectetur at cras accumsan. Maecenas pulvinar tortor ligula aliquam scelerisque pharetra.”</p>
                    </div>

                    <div>
                      <h5 className={styles.testimonialCardName}>David Miller</h5>
                      <p className={styles.testimonialCardJob}></p>
                      <div className="row">

                      </div>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ExclusiveDeals />
      </div>
    </div>
  )
}

export default page
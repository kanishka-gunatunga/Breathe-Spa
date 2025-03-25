import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";

const page = () => {
  return (
    <div>
      <div>

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

          <div className={`d-flex ${styles.hh}`}>
            <div className="col-6">
            <h3 className={styles.sectionTitle}>About Breathe</h3>
                <p className={styles.sectionDescription}>
                  Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor.
                </p>
            </div>

            <div className="col-6">
            <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={731} width={640} alt="" />
            </div>
          </div>
          {/* <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
            <div className="col-12 col-md-5 col-lg-6 d-md-flex d-lg-flex justify-content-end">
              <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={731} width={640} alt="" />
            </div>
            <div className="col-12 col-md-6 d-block d-md-flex d-lg-flex ">
              <div className="d-flex flex-column justify-content-between pe-md-4 pe-lg-4 p-2">
                
                <h3 className={styles.sectionTitle}>About Breathe</h3>
                <p className={styles.sectionDescription}>
                  Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor.
                </p>
                
                <div>
                  <Button text="EXPLORE MORE" href="#" />
                </div>
              </div>
            </div>
          </div> */}
        </div>


        {/* proffesionalism for mobile and desktop hide*/}
        <div className={`${styles.baseSection}, ${styles.DesktopHide} `}>
          <div className="row p-3">
            <div className="d-flex flex-column justify-content-between p-3 gap-4">

              <h3 className={styles.sectionTitle}>About Breathe</h3>
              <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/Rectangle4431.png" height={368} width={624} alt="" />
              <p className={styles.sectionDescription}>
              Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor.
              </p>

              <div>
                <Button text="EXPLORE MORE" href="#" />
              </div>
            </div>
          </div>
        </div>














        {/* section 04 hygene for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide} `}>
          <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
            <div className="col-12 col-md-6 d-flex">
              <div className="d-flex flex-column justify-content-between pe-md-4 pe-lg-4 p-2">
                {/* <div className="row"> */}
                <h3 className={styles.sectionTitle}>Why Choose Us</h3>
                <p className={styles.sectionDescription}>
                Lorem ipsum dolor sit amet consectetur. Ac arcu auctor non imperdiet laoreet morbi tristique metus. Bibendum enim ut non ac aenean malesuada eget lectus. Vitae amet at amet diam. Massa porttitor mi scelerisque praesent auctor pharetra eget ut. Augue elementum consequat lacus sit. Suspendisse ipsum odio eu sagittis semper tincidunt. Sit ultrices egestas arcu odio tristique amet interdum montes. Cras vel sed cursus vulputate viverra mauris. Pellentesque quam ultricies adipiscing quam nunc purus lectus. Vitae amet velit at ut. Adipiscing amet eleifend duis a augue. Maecenas vulputate sed tellus imperdiet dictum imperdiet etiam quis. Blandit consectetur placerat imperdiet in purus amet. Eget posuere ac commodo ultrices tristique dolor turpis interdum semper. Arcu ut ornare placerat dolor scelerisque tincidunt commodo duis egestas. Euismod amet scelerisque nullam purus duis velit. Augue sit aliquet auctor aliquam. Mauris egestas dolor egestas consectetur. Blandit eget egestas mauris sit. Feugiat neque consequat sit lorem mattis enim nibh. Neque odio quis ultrices morbi sit augue ut eget. Bibendum enim proin dui ut in. Ac placerat quisque iaculis rhoncus ut sit. Leo a vulputate purus et.
                </p>
                {/* </div> */}
                <div>
                  <Button text="EXPLORE MORE" href="#" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6 d-md-flex d-lg-flex justify-content-end">
              <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={731} width={640} alt="" />
            </div>
          </div>
        </div>




        {/* section 04 hygene for mobile and desktop hide*/}
        <div className={`${styles.baseSection}, ${styles.DesktopHide} `}>

          <div className="row p-3">
            <div className="d-flex flex-column justify-content-between p-3 gap-4">

              <h3 className={styles.sectionTitle}>Hygiene</h3>
              <Image className={`img-fluid ${styles.rightBoxShadow}`} src="/hygen.png" height={368} width={624} alt="" />
              <p className={styles.sectionDescription}>
                We are obsessed with hygiene and maintain surgery-grade sterilization standards at all times. We use hospital-grade, EPA-approved disinfectants to sanitize all metal instruments, followed by sterilization in an Autoclave, ensuring surgical-grade standards. We also use high quality metal foot files & crystal foot files which allows us to safely and gently remove calluses. The files are then sanitized and sterilized. We use podiatrist approved products such as Gehwol and Footlogix to treat various nail and skin conditions. Our strict sanitization procedures ensure a safe and hygienic experience for every guest.
              </p>

              <div>
                <Button text="EXPLORE MORE" href="#" />
              </div>
            </div>
          </div>
        </div>












        {/* section 05 personl cr for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide} `}>
          <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
            <div className="col-12 col-md-5 col-lg-6 d-md-flex d-lg-flex justify-content-end">
              <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={731} width={640} alt="" />
            </div>
            <div className="col-12 col-md-6 d-flex">
              <div className="d-flex flex-column justify-content-between pe-md-4 pe-lg-4 p-2">
                {/* <div className="row"> */}
                <h3 className={styles.sectionTitle}>Personalized Care</h3>
                <p className={styles.sectionDescription}>
                  We understand that each client’s wellness and beauty needs are unique. From a simple manicure to a customized massage treatment to help you melt into relaxation, to curating the ultimate Spa Day for your valuable “me-time”, our team will help personalize each experience for you.
                </p>
                {/* </div> */}
                <div>
                  <Button text="EXPLORE MORE" href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* section 05 personl cr for mobile and desktop hide*/}
        <div className={`${styles.baseSection}, ${styles.DesktopHide} `}>
          <div className="row p-3">
            <div className="d-flex flex-column justify-content-between p-3 gap-4">

              <h3 className={styles.sectionTitle}>Personalized Care</h3>
              <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/person.png" height={368} width={624} alt="" />
              <p className={styles.sectionDescription}>
                We understand that each client’s wellness and beauty needs are unique. From a simple manicure to a customized massage treatment to help you melt into relaxation, to curating the ultimate Spa Day for your valuable “me-time”, our team will help personalize each experience for you.
              </p>

              <div>
                <Button text="EXPLORE MORE" href="#" />
              </div>
            </div>
          </div>
          {/* <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/person.png" height={368} width={624} alt="" />
    </div>
    <div className="col-12 col-md-6 d-flex">
      <div className="d-flex flex-column justify-content-between pe-md-4 pe-lg-4 p-2">
        
        <h3 className={styles.sectionTitle}>Personalized Care</h3>
        <p className={styles.sectionDescription}>
          We understand that each client’s wellness and beauty needs are unique. From a simple manicure to a customized massage treatment to help you melt into relaxation, to curating the ultimate Spa Day for your valuable “me-time”, our team will help personalize each experience for you.
        </p>
        
        <div>
          <Button text="EXPLORE MORE" href="#" />
        </div>
      </div>
    </div>
  </div> */}
        </div>



        <div className={`mx-0 px-0 ${styles.baseSection, styles.mobileHide}`}>
          <div className="position-relative">
            <Image className={styles.ethosBackgorund} src="/Group1000003149(1).png" height={368} width={620} alt="" />
            <div className={`position-absolute ${styles.locationDiv}`}>
              <div className="row d-flex justify-content-between p-2 p-md-5 p-lg-5">
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-between">
                  <div className={styles.location}>
                    <h3 className={styles.locationDivTitle}>Conveniently Located in Central Colombo</h3>
                    <p className={styles.locationDivP}>
                      Breathe is within a 15-minute drive from all prominent Hotels in the heart of Colombo. Our neighborhood is in Cinnamon Gardens –  where the old-world charm of tree-lined streets, parks, and large gardens of beautifully preserved colonial homes – is a repository of heritage and beauty within the rapidly evolving urban dynamics of Colombo. We choose a beautiful old bungalow down a leafy, residential cul-de-sac. It is one of the most tranquil quarters of Colombo and ideally suited for Breathe’s bespoke and private experience style. The Spa blends in to the neighborhood with minimal external signage – partly to preserve the serene, residential ambiance, but also to enhance its ‘hidden refuge in Cinnamon Gardens’ vibe.
                    </p>
                  </div>

                  <Button text="Discover Our Location" href="#" />
                </div>

                <div className="col-12 col-md-5 col-lg-6 d-md-flex d-lg-flex justify-content-end">
                  <Image className={`img-fluid ${styles.locationImg}`} src="/interior.png" height={731} width={640} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mx-0 px-0 ${styles.baseSection, styles.DesktopHide}`}>
          {/* <div className="col-12"> */}
          <div className={styles.location}>
            <h3 className={styles.locationDivTitle}>Conveniently Located in Central Colombo</h3>
            <p className={styles.locationDivP}>
              Breathe is within a 15-minute drive from all prominent Hotels in the heart of Colombo. Our neighborhood is in Cinnamon Gardens –  where the old-world charm of tree-lined streets, parks, and large gardens of beautifully preserved colonial homes – is a repository of heritage and beauty within the rapidly evolving urban dynamics of Colombo. We choose a beautiful old bungalow down a leafy, residential cul-de-sac. It is one of the most tranquil quarters of Colombo and ideally suited for Breathe’s bespoke and private experience style. The Spa blends in to the neighborhood with minimal external signage – partly to preserve the serene, residential ambiance, but also to enhance its ‘hidden refuge in Cinnamon Gardens’ vibe.
            </p>
            {/* </div> */}

            <Button text="Discover Our Location" href="#" />
          </div>
        </div>


        <div className={styles.baseSection}>
          <div className={styles.articleDiv}>
            <div className="d-md-flex d-lg-flex d-block justify-content-between">
              <div className="col-12 col-md-6 col-lg-6">
                <div>
                  <h3 className={styles.locationDivTitle}>Recent Articles</h3>
                  <p className={`mt-0 ${styles.locationDivP}`}>
                    Here’s what we've been up to recently.
                  </p>
                </div>
              </div>


              <div className={`col-12 col-md-6 col-lg-6 d-flex justify-content-start justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
                <Button text="View All" href="#" />
              </div>
            </div>


            <div className="d-md-flex d-lg-flex d-block justify-content-evenly">
              <div className={`card ${styles.articleCard1}`}>
                <div className="card-body d-flex align-items-end">
                  <p className={styles.articleCardTitle}>
                    Scarlet Spy tries a Copper Room treatment
                  </p>
                </div>
              </div>


              <div className={`card ${styles.articleCard2}`}>
                <div className="card-body d-flex align-items-end ">
                  <p className={styles.articleCardTitle}>
                    Scarlet Spy tries a Copper Room treatment
                  </p>
                </div>
              </div>


              <div className={`card ${styles.articleCard3}`}>
                <div className="card-body d-flex align-items-end">
                  <p className={styles.articleCardTitle}>
                    Scarlet Spy tries a Copper Room treatment
                  </p>
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
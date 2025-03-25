import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";

export default function Home() {
  return (
    <div>

      {/* banner image part */}
      <div className={styles.bannerImageDiv}>
        <Image className={`m-0 p-0 ${styles.headingImage}`} src="/Vector12.png"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
          alt="" />
      </div>



      {/* section 1 */}
      <div className={styles.baseSection}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <h1 className={styles.bespokeDivTitle}>
              Bespoke Wellness for Relaxation, Rejuvenation, & Personalized Care
            </h1>

            <p className={styles.bespokeDivP}>
              At Breathe Day Spa’s calm and elegant space, we help you look, feel, and be your best. We provide luxurious massages, bespoke manicures and pedicures, and HydraFacial treatments. Our therapists are internationally trained and certified, and we are obsessed with hygiene.
            </p>
            <Image className="img-fluid" src="/Rectangle4422.png" height={400} width={655} alt="" />
            <div>
              <Button href="#" text="Book a Treatment" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className={`card ${styles.card1}`}>
              <div className="card-body">
                <div>
                  <div>
                    <h3 className={styles.cardtitle}>OUR SERVICES</h3>
                  </div>
                  <div>
                    <h3 className={styles.captionTop}>TREATMENTS</h3>
                    <div className="row">
                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Massages</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            Easing you into relaxation, with multiple tissue techniques, aromatherapy, body scrubs and wraps.
                          </p>
                        </div>
                      </div>


                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Nail Treatments</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            Your concierce for clean, hygenic, and glossy nails. Mani’s, Pedi’s and more.
                          </p>
                        </div>
                      </div>


                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Facial Treatments</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            The HydraFacial Glow is a signature Breathe Day Spa experience
                          </p>
                        </div>
                      </div>



                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Gift Vouchers</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            Stylish gift cards to share the benefits of wellness, relaxation, and pampering
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div>
                    <h3 className={styles.captionTop}>HOURS</h3>
                    <div className="row">
                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Tuesday to Saturday</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            9.00am - 8.00pm
                          </p>
                        </div>
                      </div>


                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Monday</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            Closed
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>



                  <div>
                    <h3 className={styles.captionTop}>CONTACT</h3>
                    <div className="row">
                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Phone</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            +94  77 244  4888
                          </p>
                        </div>
                      </div>


                      <div className={`row d-flex justify-content-between ${styles.borderedRow}`}>
                        <div className="col-6">
                          <p className={styles.column1}>Email</p>
                        </div>
                        <div className="col-6">
                          <p className={styles.column2}>
                            shout@breathe-spa.com
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className={styles.privacyPRow}>
                    <p className="text-center">
                      For Same Day appointment please call us so we can respond to you quickly. Please read our
                    </p>
                    <p>
                      <a href="">booking policy </a>
                      below prior to making an appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* section 2 */}
      <div className={`mx-0 px-0 mt-0 ourEthosSection ${styles.baseSection}`}>
        <div className={styles.ourEthos}>
          <div className="position-relative">
            <div className={styles.ethosImageContainer}>
              <Image className={styles.ethosBackgorund} src="/Group1000003148.png" height={368} width={624} alt="" />
            </div>

            <div className={`position-absolute ${styles.ethosContainer}`}>
              <h1 className={styles.ethosTitle}>
                Our Ethos
              </h1>
              <p className={styles.ethosText}>
                We are passionately committed to providing our clients with the most professional, customized, and hygienic wellness experience.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="px-5">

        {/* section 3  proffesionalism for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide} `}>
          <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/Rectangle4431.png" height={368} width={624} alt="" />
            </div>
            <div className="col-12 col-md-6 d-block d-md-flex d-lg-flex ">
              <div className="d-flex flex-column justify-content-between pe-md-5 pe-lg-5 p-2">
                {/* <div className="row"> */}
                <h3 className={styles.sectionTitle}>Professionalism</h3>
                <p className={styles.sectionDescription}>
                  We understand that for our clients, a visit to Breathe Day Spa is an investment in their wellbeing.
                  Our specialist therapists are trained and certified internationally to ensure the highest quality treatments, and their craft is as much an art as it is a talent.
                  Our treatments entail high attention to detail so our appointments run to time. We value our clients’ time and appreciate punctual arrival for treatments.
                </p>
                {/* </div> */}
                <div>
                  <Button text="EXPLORE MORE" href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>


        














        {/* section 04 hygene for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide} `}>
          <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
            <div className="col-12 col-md-6 d-flex">
              <div className="d-flex flex-column justify-content-between px-md-4 px-lg-4 p-2">
                {/* <div className="row"> */}
                <h3 className={styles.sectionTitle}>Hygiene</h3>
                <p className={styles.sectionDescription}>
                  We are obsessed with hygiene and maintain surgery-grade sterilization standards at all times. We use hospital-grade, EPA-approved disinfectants to sanitize all metal instruments, followed by sterilization in an Autoclave, ensuring surgical-grade standards. We also use high quality metal foot files & crystal foot files which allows us to safely and gently remove calluses. The files are then sanitized and sterilized. We use podiatrist approved products such as Gehwol and Footlogix to treat various nail and skin conditions. Our strict sanitization procedures ensure a safe and hygienic experience for every guest.
                </p>
                {/* </div> */}
                <div>
                  <Button text="EXPLORE MORE" href="#" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-end pe-md-5 pe-lg-5 p-2">
              <Image className={`img-fluid ${styles.rightBoxShadow}`} src="/hygen.png" height={368} width={624} alt="" />
            </div>
          </div>
        </div>


        












        {/* section 05 personl cr for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide} `}>
          <div className={`d-block d-md-flex d-lg-flex gap-4 ${styles.marginBottom}`}>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/person.png" height={368} width={624} alt="" />
            </div>
            <div className="col-12 col-md-6 d-flex">
              <div className="d-flex flex-column justify-content-between pe-md-5 pe-lg-5 p-2">
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


        
      </div>

            {/* proffesionalism for mobile and desktop hide*/}
        <div className={`${styles.baseSection}, ${styles.DesktopHide} `}>
          <div className="row p-3">
            <div className="d-flex flex-column justify-content-between p-2 gap-4">

              <h3 className={styles.sectionTitle}>Professionalism</h3>
              <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/Rectangle4431.png" height={368} width={624} alt="" />
              <p className={styles.sectionDescription}>
                We understand that for our clients, a visit to Breathe Day Spa is an investment in their wellbeing.
                Our specialist therapists are trained and certified internationally to ensure the highest quality treatments, and their craft is as much an art as it is a talent.
                Our treatments entail high attention to detail so our appointments run to time. We value our clients’ time and appreciate punctual arrival for treatments.
              </p>

              <div>
                <Button text="EXPLORE MORE" href="#" />
              </div>
            </div>
          </div>
        </div>



        {/* section 04 hygene for mobile and desktop hide*/}
        <div className={`${styles.baseSection}, ${styles.DesktopHide} `}>

          <div className="row p-3">
            <div className="d-flex flex-column justify-content-between p-2 gap-4">

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


        {/* section 05 personl cr for mobile and desktop hide*/}
        <div className={`${styles.baseSection}, ${styles.DesktopHide} `}>
          <div className="row p-3">
            <div className="d-flex flex-column justify-content-between p-2 gap-4">

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
  );
}

import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import style from '@/styles/services.module.css'
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";

export default function Home() {
  return (

    <>
      <div className={`d-flex ${style.imageContainer}`}>
        <Image src={"/Vector12.png"} alt='services hero image' width={1920} height={1080} style={{ width: "100vw", height: "auto", objectFit: 'cover' }} />
      </div>
      <div className="container section">
        <div className="d-block d-md-block d-lg-flex justify-content-center gap-5">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">
            <div>
              <h1 className={styles.bespokeDivTitle}>
                Bespoke Wellness for Relaxation, Rejuvenation, & Personalized Care
              </h1>

              <p className={styles.bespokeDivP}>
                At Breathe Day Spa’s calm and elegant space, we help you look, feel, and be your best. We provide luxurious massages, bespoke manicures and pedicures, and HydraFacial treatments. Our therapists are internationally trained and certified, and we are obsessed with hygiene.
              </p>
              <Image className="img-fluid" src="/Rectangle4422.png" height={400} width={655} alt="" />
            </div>

            <div className="mb-md-4">
              <Button href="#" text="Book a Treatment" />
            </div>
          </div>


          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`card ${styles.card1}`}>
              <div className="card-body">
                {/* main topic our services */}
                <div className="row">
                  <h3 className={styles.cardtitle}>OUR SERVICES</h3>
                </div>


                {/* treatments */}
                <div className="row">
                  <div>
                    <h3 className={styles.captionTop}>TREATMENTS</h3>
                  </div>

                  <div className="row">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Massages</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          Easing you into relaxation, with multiple tissue techniques, aromatherapy, body scrubs and wraps.
                        </p>
                      </div>
                    </div>




                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Nail Treatments</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          Your concierce for clean, hygenic, and glossy nails. Mani’s, Pedi’s and more.
                        </p>
                      </div>
                    </div>



                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Facial Treatments</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          The HydraFacial Glow is a signature Breathe Day Spa experience
                        </p>
                      </div>
                    </div>




                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Gift Vouchers</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          Stylish gift cards to share the benefits of wellness, relaxation, and pampering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Hours */}
                <div className="row">
                  <div>
                    <h3 className={styles.captionTop}>HOURS</h3>
                  </div>

                  <div className="row">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Tuesday to Saturday</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          9.00am - 8.00pm
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className="row">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Monday</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* contact */}
                <div className="row">
                  <div>
                    <h3 className={styles.captionTop}>CONTACT</h3>
                  </div>

                  <div className="row">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Phone</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={styles.column2}>
                          +94  77 244  4888
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className="row">
                    <div className="d-flex">
                      <div className={`col-6 border-0 ${styles.bottomBorder}`}>
                        <p className={styles.column1}>Email</p>
                      </div>

                      <div className={`col-6  border-0 ${styles.bottomBorder}`}>
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

      <DescriptionSection title="Our Ethos" description=" We are passionately committed to providing our clients with the most professional, customized, and hygienic wellness experience." />


      <div className="container section">

        {/* proffesionalism */}
        <div className="d-block d-md-block d-lg-flex gap-5 mb-5">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/Rectangle4431.png" height={368} width={624} alt="" />
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">

            <div className="row">
              <h3 className={styles.sectionTitle}>Professionalism</h3>
              <p className={styles.sectionDescription}>
                We understand that for our clients, a visit to Breathe Day Spa is an investment in their wellbeing.
                Our specialist therapists are trained and certified internationally to ensure the highest quality treatments, and their craft is as much an art as it is a talent.
                Our treatments entail high attention to detail so our appointments run to time. We value our clients’ time and appreciate punctual arrival for treatments.
              </p>
            </div>
            <div>
              <Button text="EXPLORE MORE" href="#" />
            </div>

          </div>
        </div>


        {/* hygene */}
        <div className="row mb-5">
          <div className="d-block d-md-block d-lg-flex gap-5 pb-5">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">
              <div className="row">
                <h3 className={styles.sectionTitle}>Hygiene</h3>
                <p className={styles.sectionDescription}>
                  We are obsessed with hygiene and maintain surgery-grade sterilization standards at all times. We use hospital-grade, EPA-approved disinfectants to sanitize all metal instruments, followed by sterilization in an Autoclave, ensuring surgical-grade standards. We also use high quality metal foot files & crystal foot files which allows us to safely and gently remove calluses. The files are then sanitized and sterilized. We use podiatrist approved products such as Gehwol and Footlogix to treat various nail and skin conditions. Our strict sanitization procedures ensure a safe and hygienic experience for every guest.
                </p>
              </div>
              <div>
                <Button text="EXPLORE MORE" href="#" />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <Image className={`img-fluid ${styles.rightBoxShadow}`} src="/hygen.png" height={368} width={624} alt="" />
            </div>
          </div>
        </div>


        {/* Personalized Care */}
        <div className="row">
          <div className="d-block d-md-block d-lg-flex gap-5 pb-5">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <Image className={`img-fluid ${styles.leftBoxShadow}`} src="/person.png" height={368} width={624} alt="" />
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">

              <div className="row">
                <h3 className={styles.sectionTitle}>Personalized Care</h3>
                <p className={styles.sectionDescription}>
                  We understand that each client’s wellness and beauty needs are unique. From a simple manicure to a customized massage treatment to help you melt into relaxation, to curating the ultimate Spa Day for your valuable “me-time”, our team will help personalize each experience for you.
                </p>
              </div>
              <div>
                <Button text="EXPLORE MORE" href="#" />
              </div>

            </div>
          </div>
        </div>
      </div>



      <YellowBackSection
        title="Conveniently Located in Central Colombo"
        description="Breathe is within a 15-minute drive from all prominent Hotels in the heart of Colombo. Our neighborhood is in Cinnamon Gardens –  where the old-world charm of tree-lined streets, parks, and large gardens of beautifully preserved colonial homes – is a repository of heritage and beauty within the rapidly evolving urban dynamics of Colombo.  We choose a beautiful old bungalow down a leafy, residential cul-de-sac. It is one of the most tranquil quarters of Colombo and ideally suited for Breathe’s bespoke and private experience style. The Spa blends in to the neighborhood with minimal external signage – partly to preserve the serene, residential ambiance, but also to enhance its ‘hidden refuge in Cinnamon Gardens’ vibe."
          image="/interior.png"
        buttonText="Discover Our Location"
        />


        <div className="container position-relative">
        <div className={styles.articleDiv}>
          <div className="d-md-flex d-lg-flex d-block justify-content-between">
            <div className="col-12 col-md-8 col-lg-8">
              <div>
                <h3 className={styles.locationDivTitle}>Recent Articles</h3>
                <p className={`mt-0 ${styles.locationDivP}`}>
                  Here’s what we&apos;ve been up to recently.
                </p>
              </div>
            </div>


            <div className={`col-12 col-md-4 col-lg-4 d-flex justify-content-start justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
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
    </>

  );
}

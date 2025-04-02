import Image from 'next/image';
import React from 'react';
import "./header-footer.css";
import Form from 'next/form'
import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";


const Footer = () => {
  return (

    <>

      <div className="footer position-relative mt-5" style={{ backgroundColor: "#F2EDE6" }}>
      <svg width="100%" height="100%" viewBox="0 0 1440 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M376.779 30.0272C219.86 36.3225 0 89.2316 0 89.2316V-83H1440V89.2316C1440 89.2316 1382.81 108.974 1302.06 126.14C1246.98 137.852 1180.93 148.364 1114.6 150.59C848.186 159.529 643.086 19.3437 376.779 30.0272Z" fill="white" />
          </svg>
        <div className={` ${styles.contactContainer} section`}>
          {/* <svg width="100%" height="100%" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" className='footer-backg'>
  <g clipPath="url(#clip0_711_4869)">
    <rect width="1440" height="738" fill="#F3EEE7" />
    <path d="M376.779 30.0272C219.86 36.3225 0 89.2316 0 89.2316V-83H1440V89.2316C1440 89.2316 1382.81 108.974 1302.06 126.14C1246.98 137.852 1180.93 148.364 1114.6 150.59C848.186 159.529 643.086 19.3437 376.779 30.0272Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_711_4869">
      <rect width="1440" height="738" fill="white" />
    </clipPath>
  </defs>
</svg> */}
          

          <div className='col-12 position-relative footer-content'>
            <div className='row footer-row'>
              <div className='col-12 col-md-8 col-lg-8 d-flex justify-content-start mb-5 mb-md-0 mb-lg-0'>
                <a className="navbar-brand" href="#">
                  <Image src="/BreatheLogo25Black.png" alt="Breathe Logo" width={317} height={33} />
                </a>
              </div>


              <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-end gap-3'>
                <Form action="/search" className='d-flex search-form'>
                  <input name="query" className='form-control' placeholder='Join a Newsletter' />
                  <Button text="Subscribe" href="" />
                </Form>
              </div>
            </div>

            <div className='d-block d-md-flex d-lg-flex footer-row'>
              <div className="col-12 col-md-2 col-lg-2 footer-row-2">
                <div className='quick-links-container'>
                  <h5 className='footer-h5'>Quick Links</h5>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Home</p></a>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>About Breathe </p></a>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Our Services </p></a>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Blog</p></a>
                </div>

              </div>


              <div className="col-12 col-md-2 col-lg-2 footer-row-2">
                <div className='quick-links-container'>
                  <h5 className='footer-h5'>SERVICES</h5>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Nails</p></a>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Body</p></a>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Facial</p></a>
                  <a href="" className='footer-link-tag'><p className='footer-quick-links'>Add - Ons</p></a>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-4 footer-row-2">

                <div className='quick-links-container'>
                  <h5 className='footer-h5'>CONTACT US</h5>
                  <p className='footer-quick-links'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#5B451E" />
                    </svg>

                    14 Albert Cres, Colombo 007</p>
                  <p className='footer-quick-links'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#5B451E" />
                    </svg>

                    shout@breathe-spa.com</p>
                  <p className='footer-quick-links'>


                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#5B451E" />
                    </svg>

                    +94  77 244  4888</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 footer-row-2">
                <div className='quick-links-container'>
                  <h5 className='footer-h5'>JOIN US</h5>
                  <div className="d-flex gap-3">
                    {/* youtuve */}
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.9771 7.31689H8.96276C5.62318 7.31689 2.91797 9.99293 2.91797 13.2946V21.7063C2.91797 25.0079 5.62464 27.6854 8.96276 27.6854H25.9771C29.3167 27.6854 32.0219 25.0079 32.0219 21.7063V13.2946C32.0219 9.99293 29.3153 7.31543 25.9771 7.31543V7.31689ZM21.8894 17.9088L13.9313 21.664C13.8828 21.6873 13.8291 21.6981 13.7753 21.6951C13.7215 21.6922 13.6693 21.6757 13.6236 21.6471C13.5779 21.6186 13.5402 21.579 13.5139 21.532C13.4877 21.4849 13.4737 21.432 13.4734 21.3781V13.6358C13.4744 13.5817 13.489 13.5287 13.516 13.4817C13.543 13.4348 13.5814 13.3954 13.6277 13.3673C13.674 13.3392 13.7267 13.3233 13.7808 13.3211C13.8349 13.3188 13.8887 13.3303 13.9371 13.3544L21.8967 17.3429C21.9497 17.3694 21.9942 17.4102 22.0251 17.4608C22.0559 17.5114 22.0719 17.5696 22.0711 17.6289C22.0703 17.6881 22.0529 17.7459 22.0208 17.7957C21.9886 17.8455 21.9431 17.8852 21.8894 17.9102V17.9088Z" fill="#656565" />
                    </svg>




                    {/* facebook */}
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3066 7.33125V10.7662H8.78906V14.9662H11.3066V27.4487H16.4741V14.9675H19.9428C19.9428 14.9675 20.2678 12.9537 20.4253 10.7512H16.4953V7.87875C16.4953 7.45 17.0578 6.8725 17.6153 6.8725H20.4328V2.5H16.6028C11.1778 2.5 11.3066 6.70375 11.3066 7.33125Z" fill="#656565" />
                    </svg>






                    {/* twitter */}
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.0846 8.61468C30.9914 9.0921 29.8336 9.40514 28.6488 9.54363C29.8924 8.81335 30.8276 7.65525 31.2796 6.28572C30.1013 6.97161 28.8161 7.45472 27.4778 7.71488C26.9142 7.12456 26.2363 6.65524 25.4853 6.33556C24.7344 6.01588 23.9262 5.85254 23.1101 5.85551C19.8055 5.85551 17.1265 8.49509 17.1265 11.7472C17.1265 12.208 17.179 12.6586 17.2811 13.0888C14.9107 12.9761 12.5898 12.3705 10.4665 11.3106C8.34329 10.2507 6.46428 8.7599 4.94943 6.93322C4.41834 7.82922 4.1392 8.85206 4.14151 9.89363C4.14253 10.8678 4.38626 11.8263 4.85068 12.6825C5.31511 13.5388 5.98558 14.2659 6.80151 14.798C5.85284 14.7674 4.92467 14.5141 4.09193 14.0586V14.1316C4.09193 16.987 6.15547 19.3684 8.88984 19.9109C8.37594 20.0473 7.84653 20.1164 7.31484 20.1166C6.92839 20.1166 6.55359 20.0801 6.18755 20.0072C6.57851 21.1854 7.32667 22.2126 8.32812 22.9462C9.32957 23.6798 10.5346 24.0833 11.7759 24.1007C9.64682 25.7407 7.03312 26.6266 4.34568 26.6193C3.86151 26.6193 3.38609 26.5901 2.91797 26.5376C5.66146 28.274 8.84258 29.1936 12.0894 29.1888C23.0955 29.1888 29.1126 20.2099 29.1126 12.4238L29.0921 11.6611C30.2659 10.8352 31.2798 9.80299 32.0846 8.61468Z" fill="#656565" />
                    </svg>




                    {/* insta */}
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3594 2.91699H11.5907C9.29111 2.91969 7.08652 3.83449 5.46062 5.46067C3.83471 7.08685 2.92028 9.29159 2.91797 11.5912L2.91797 23.3599C2.92067 25.6595 3.83547 27.8641 5.46165 29.49C7.08782 31.1159 9.29257 32.0303 11.5921 32.0326H23.3609C25.6605 32.0299 27.865 31.1151 29.4909 29.4889C31.1169 27.8628 32.0313 25.658 32.0336 23.3585V11.5897C32.0309 9.29013 31.1161 7.08554 29.4899 5.45964C27.8637 3.83373 25.659 2.91931 23.3594 2.91699V2.91699ZM29.1053 23.3585C29.1053 24.113 28.9566 24.8602 28.6679 25.5573C28.3791 26.2544 27.9559 26.8878 27.4223 27.4214C26.8888 27.9549 26.2554 28.3782 25.5583 28.6669C24.8611 28.9557 24.114 29.1043 23.3594 29.1043H11.5907C10.067 29.1039 8.60594 28.4984 7.5287 27.4209C6.45146 26.3433 5.8463 24.8821 5.8463 23.3585V11.5897C5.84669 10.0661 6.45222 8.60496 7.52973 7.52773C8.60724 6.45049 10.0685 5.84533 11.5921 5.84533H23.3609C24.8845 5.84571 26.3456 6.45125 27.4229 7.52876C28.5001 8.60627 29.1053 10.0675 29.1053 11.5912V23.3599V23.3585Z" fill="#656565" />
                      <path d="M17.4732 9.94434C15.4774 9.94742 13.5642 10.7417 12.1531 12.1531C10.7419 13.5645 9.94801 15.4779 9.94531 17.4737C9.94763 19.47 10.7416 21.384 12.1531 22.7957C13.5646 24.2075 15.4783 25.0018 17.4747 25.0045C19.4713 25.0022 21.3854 24.2081 22.7972 22.7963C24.209 21.3845 25.0032 19.4703 25.0055 17.4737C25.0024 15.4774 24.2077 13.5638 22.7957 12.1525C21.3837 10.7413 19.4696 9.94772 17.4732 9.94579V9.94434ZM17.4732 22.0762C16.253 22.0762 15.0827 21.5915 14.2198 20.7286C13.3569 19.8657 12.8722 18.6954 12.8722 17.4752C12.8722 16.2549 13.3569 15.0846 14.2198 14.2217C15.0827 13.3589 16.253 12.8741 17.4732 12.8741C18.6935 12.8741 19.8638 13.3589 20.7267 14.2217C21.5895 15.0846 22.0743 16.2549 22.0743 17.4752C22.0743 18.6954 21.5895 19.8657 20.7267 20.7286C19.8638 21.5915 18.6935 22.0762 17.4732 22.0762Z" fill="#656565" />
                      <path d="M25.0188 11.8052C26.0151 11.8052 26.8228 10.9975 26.8228 10.0012C26.8228 9.00492 26.0151 8.19727 25.0188 8.19727C24.0225 8.19727 23.2148 9.00492 23.2148 10.0012C23.2148 10.9975 24.0225 11.8052 25.0188 11.8052Z" fill="#656565" />
                    </svg>


                    {/* linkedin */}
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.0248 20.0064V30.7674H25.7861V20.7268C25.7861 18.2039 24.8834 16.4831 22.6259 16.4831C20.9021 16.4831 19.8755 17.6439 19.4248 18.7654C19.2601 19.1664 19.2178 19.7249 19.2178 20.2864V30.7674H12.9761C12.9761 30.7674 13.0607 13.7633 12.9761 12.0001H19.2178V14.6601L19.1769 14.7214H19.2178V14.6601C20.0461 13.3841 21.5263 11.5597 24.8411 11.5597C28.9463 11.5597 32.0248 14.2431 32.0248 20.0064ZM6.44859 2.9541C4.31505 2.9541 2.91797 4.3541 2.91797 6.19598C2.91797 7.99702 4.27422 9.43931 6.36693 9.43931H6.40776C8.58505 9.43931 9.93693 7.99702 9.93693 6.19598C9.89901 4.3541 8.58651 2.9541 6.45005 2.9541H6.44859ZM3.28839 30.7674H9.52714V12.0001H3.28839V30.7674Z" fill="#656565" />
                    </svg>


                  </div>
                </div>
              </div>
            </div>

            <div className='footer-row d-block d-md-flex d-lg-flex justify-content-between'>
              <p className='bottom-p'>Copyright @ Breathe. All rights reserved.</p>
              <p className='bottom-p'>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
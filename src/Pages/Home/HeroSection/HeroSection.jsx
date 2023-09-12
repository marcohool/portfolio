import "./heroSection.css"
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
   return (
      <section className="hero section" id="hero">
         <div className="hero--container container grid">
            <div className="hero--content grid" id="heroSection">
               <div className="hero--social">
                  <a href="https://github.com/marcohool" target="_blank" className="hero--social--icon">
                     <i className="uil uil-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/marco-b-3244b21a5/" target="_blank" className="hero--social--icon">
                     <i className="uil uil-linkedin"></i>
                  </a>
               </div>
               <div className="hero--img"></div>
               <div className="hero--data">
                  <h1 className="hero--title">
                     <TypeAnimation
                        sequence={[
                           'Mar', 200,
                           'Marco ', 200,
                           'Marco Bou', 200,
                           'Marco Boutchel', 200,
                           'Marco Boutchelski ', 800,
                           'Marco Boutchelski 👋'
                        ]}
                        speed={12}
                     />
                  </h1>
                  <h3 className="hero--subtitle">Computer Science (BSc) Graduate </h3>
                  {/* <p className="hero--description"></p> */}
                  <button className="btn btn-outline-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" id="message"><path fill="currentColor" d="M14.1972579,8.17124146e-14 C17.3979916,0.00978563072 19.990286,2.62120148 20,5.84554455 L20,5.84554455 L20,7.30693069 L19.99354,7.4036631 C19.9466817,7.75161611 19.6506049,8.01980198 19.2923485,8.01980198 L19.2923485,8.01980198 L19.2835029,8.0019802 L19.1721336,7.99309967 C19.0257158,7.96959451 18.889286,7.90013647 18.7831177,7.79318503 C18.6504073,7.65949573 18.5758514,7.47817413 18.5758514,7.28910891 L18.5758514,7.28910891 L18.5758514,5.84554455 C18.5518871,3.41954659 16.6054921,1.45879454 14.1972579,1.43465347 L14.1972579,1.43465347 L5.80274215,1.43465347 C3.39450789,1.45879454 1.44811291,3.41954659 1.42414861,5.84554455 L1.42414861,5.84554455 L1.42414861,12.1544554 C1.44811291,14.5804534 3.39450789,16.5412055 5.80274215,16.5653465 L5.80274215,16.5653465 L14.1972579,16.5653465 C16.6054921,16.5412055 18.5518871,14.5804534 18.5758514,12.1544554 C18.6163388,11.7890822 18.922975,11.5127474 19.2879257,11.5127474 C19.6528764,11.5127474 19.9595126,11.7890822 20,12.1544554 C19.990286,15.3787985 17.3979916,17.9902144 14.1972579,18 L14.1972579,18 L5.80274215,18 C2.599996,17.995093 0.00487110525,15.3808258 -1.42108547e-14,12.1544554 L-1.42108547e-14,12.1544554 L-1.42108547e-14,5.84554455 C-1.42108547e-14,2.61713944 2.59797615,8.17124146e-14 5.80274215,8.17124146e-14 L5.80274215,8.17124146e-14 Z M4.29443312,5.38692655 C4.48070099,5.36682207 4.6671823,5.42289927 4.81203008,5.54257426 L4.81203008,5.54257426 L8.96948253,8.85742574 C9.48880627,9.2678976 10.2192875,9.2678976 10.7386112,8.85742574 L10.7386112,8.85742574 L14.8518355,5.54257426 L14.8606811,5.54257426 L14.9473987,5.48291804 C15.2462388,5.30808809 15.6344967,5.37260085 15.8602388,5.64950495 C15.9785304,5.79800076 16.0329385,5.98799536 16.0113373,6.17714498 C15.9897361,6.36629461 15.8939207,6.53887938 15.7452455,6.65643564 L15.7452455,6.65643564 L11.6320212,9.98019802 C10.5861526,10.8280382 9.09540423,10.8280382 8.0495356,9.98019802 L8.0495356,9.98019802 L3.92746572,6.65643564 L3.8513546,6.58355583 C3.61891283,6.32594359 3.59998262,5.92999594 3.821318,5.64950495 C3.93770999,5.50163353 4.10816526,5.40703103 4.29443312,5.38692655 Z" transform="translate(2 3)"></path></svg>
                     Contact Me
                  </button>
               </div>
            </div>
            <div className="hero--scroll">
               <Link spy={true} smooth={true} offset={-70} duration={500} to="About" className="hero--scroll--button button--flex">
                  <svg
                     width="32px"
                     height="32px"
                     class="hero--scroll--mouse"
                     viewBox="0 0 247 390"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                     }}
                  >
                     <path
                        class="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                           fill: "none",
                           stroke: "var(--primary)",
                           strokeWidth: "20px",
                        }}
                     ></path>
                     <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                           fill: "none",
                           stroke: "var(--primary)",
                           strokeWidth: "20px",
                        }}
                     ></path>
                  </svg>
                  <span className="hero--scroll--name">Scroll Down</span>
                  <HiOutlineArrowSmDown className="hero--scroll--arrow" />
               </Link>
            </div>
         </div>
      </section>
   )
}



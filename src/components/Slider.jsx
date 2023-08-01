import React from "react";
import classes from "./Slider.module.css";
function Slider() {
  return (
<>
<figure className="logo logo--top js-trigger">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/logo.svg"/>
</figure>

<a href="https://codepen.io/ReGGae/full/QZxdVX/" target="_blank" className="resize">
  <div className="resize__inner">
    <figure className="logo logo--resize">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/logo.svg"/>
    </figure>
    <p>Please view in <span>full page</span> mode</p>
  </div>
</a>

<a href="https://twitter.com/Jesper_Landberg?lang=en" target="_blank" className="hi">
  Hi
</a>

<a href="https://dribbble.com/shots/5321013-Habital-Showcase-Alternative" target="_blank" rel="nofollow" className="menu-btn js-menu-btn">
  <div className="menu-btn__circles">
    <span className="menu-btn__circle menu-btn__circle--top js-menu-btn__circle--top"></span>
    <span className="menu-btn__circle menu-btn__circle--bottom js-menu-btn__circle--bottom"></span>
  </div>
  <div className="menu-btn__text">See shot</div>
</a>

<div className="scroll" data-scroll>
  
  <nav className="filter">
    <ul className="filter__list">
      <li className="filter__item">
        <a href="#" className="filter__link is-active js-trigger">
          <div className="filter__link-mask" area-hidden><span>Interiors</span></div>
          Interiors
        </a>   
      </li>
      <li className="filter__item">
        <a href="#" className="filter__link js-trigger">
          <div className="filter__link-mask" area-hidden><span>Residential</span></div>
          Residential
        </a>   
      </li>
      <li className="filter__item">
        <a href="#" className="filter__link js-trigger">
          <div className="filter__link-mask" area-hidden><span>Commercial</span></div>
          Commercial
        </a>   
      </li>
       <li className="filter__item">
        <a href="#" className="filter__link js-trigger">
          <div className="filter__link-mask" area-hidden><span>Installation</span></div>
          Installation
         </a>   
      </li>
    </ul>
  </nav>
  
  <div className="scroll-content" data-scroll-content>
    
    <article className="slide slide--1 js-slide">
      <div className="slide__inner">
        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-one.png" draggable="false"/>
          </figure>
        </div>
      </div>
    </article>
    
    <article className="slide slide--2 js-slide">
      <div className="slide__inner">
        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-two.png" draggable="false"/>
          </figure>
        </div>
      </div>
    </article>
    
    <article className="slide slide--3 js-slide">
      <div className="slide__inner">
        <div className="slide__img">
          <figure>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-three.png" draggable="false"/>
          </figure>
        </div>
      </div>
    </article>

    <article className="slide slide--1 js-slide">
      <div className="slide__inner">
        <div className="slide__img">
          <figure>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-one.png" draggable="false"/>
          </figure>
        </div>
      </div>
    </article>
    
    <article className="slide slide--2 js-slide">
      <div className="slide__inner">
        <div className="slide__img">
          <figure>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-two.png" draggable="false"/>
          </figure>
        </div>
      </div>
    </article>
    
    <article className="slide slide--3 js-slide">
      <div className="slide__inner">
        <div className="slide__img">
          <figure>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-three.png" draggable="false"/>
          </figure>
        </div>
      </div>
    </article>
    
  </div>  
  
  <div className="scroll-content scroll-content--last" data-scroll-content>
    
    <article className="slide slide--1 js-slide">
      <div className="slide__inner">
        <div className="slide__sub-title"><span>Project</span></div>
        <h1 className="slide__title"><div className="js-transition-title">Oak Refuge</div></h1>
        <div className="slide__img slide__img--proxy"></div>
        <div className="slide__project">Corpus Studio</div>
      </div>
    </article>
    
    <article className="slide slide--2 js-slide">
      <div className="slide__inner">
        <div className="slide__sub-title"><span>Project</span></div>
        <h1 className="slide__title"><div className="js-transition-title">Teton Residence</div></h1>
        <div className="slide__img slide__img--proxy"></div>
        <div className="slide__project">Ro Rocket Design</div>
      </div>
    </article>
    
    <article className="slide slide--3 js-slide">
      <div className="slide__inner">
        <div className="slide__sub-title"><span>Project</span></div>
        <h1 className="slide__title">Oak Refuge</h1>
        <div className="slide__img slide__img--proxy"></div>
        <div className="slide__project">Corpus Studio</div>
      </div>
    </article>

    <article className="slide slide--1 js-slide">
      <div className="slide__inner">
        <div className="slide__sub-title"><span>Project</span></div>
        <h1 className="slide__title">Teton Residence</h1>
        <div className="slide__img slide__img--proxy"></div>
        <div className="slide__project">Ro Rocket Design</div>
      </div>
    </article>
    
    <article className="slide slide--2 js-slide">
      <div className="slide__inner">
        <div className="slide__sub-title"><span>Project</span></div>
        <h1 className="slide__title">Oak Refuge</h1>
        <div className="slide__img slide__img--proxy"></div>
        <div className="slide__project">Corpus Studio</div>
      </div>
    </article>
    
    <article className="slide slide--3 js-slide">
      <div className="slide__inner">
        <div className="slide__sub-title"><span>Project</span></div>
        <h1 className="slide__title">Teton Residence</h1>
        <div className="slide__img slide__img--proxy"></div>
        <div className="slide__project">Ro Rocket Design</div>
      </div>
    </article>
    
  </div>
  
  <div className="scrollbar" data-scrollbar>
    <div className="scrollbar__handle js-scrollbar__handle"></div>
  </div>
  
</div>

<div className="mask js-mask">
  <div className="mask__slice js-mask__slice"></div>
  <div className="mask__slice js-mask__slice"></div>
  <div className="mask__slice js-mask__slice"></div>
  <div className="mask__inner">
    <figure className="logo logo--mask">
      <img className="js-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/logo.svg"/>
    </figure>
    <div className="mask-line js-mask-line">
      <div className="mask-line__inner js-mask-line"></div>
    </div>
  </div>
</div>
</>

  )
}

export default Slider;

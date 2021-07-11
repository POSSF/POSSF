---
layout: page
permalink: /
title: global.home_title
---

<section class="content main-first-section page-box-content">
   <div class="page-box-content-padding top-content-txt">
      <h1 class="gradient-text main-title">{% t global.home_first_title %}</h1>
      <p>
         {% t global.home_first_description %}
         <a class="underline" href="register.html">{% t global.home_first_register %}</a>
      </p>
      <br>
      <a href="#" class="button">{% t global.home_register %}</a>
   </div>
</section>
<hr class="gradient">
<section class="speakers">
   <h1>{% t global.home_speakers %}</h1>
   <ul class="speaker-list">
      <li>
         <a href="speaker.html">
            <img alt="جادی میرمیرانی" src="{{ site.url }}/asset/image/jadi_mirmirani.jpg">
            <h3></h3>
            <h4>جادی میرمیرانی</h4>
            <h5>هکر خندون، برنامه نویس خوشحال، مدیرسیستم</h5>
         </a>
      </li>
      <li>
         <a href="speaker.html">
            <img alt="سید علی محمدیه" src="https://i.pravatar.cc/150?img=58">
            <h3></h3>
            <h4>سید علی محمدیه</h4>
            <h5>مهندس نرم‌افزار و توسعه دهنده شرکت گیت هاب</h5>
         </a>
      </li>
      <li>
         <a href="speaker.html">
            <img alt="سید پرهام الوانی" src="{{ site.url }}/asset/image/seyyed_parham_alvani.jpg">
            <h3></h3>
            <h4>سید پرهام الوانی</h4>
            <h5>دانشجوی دکتری، برنامه نویس شرکت اسنپ</h5>
         </a>
      </li>
   </ul>
</section>
<section class="attends">
   <h2>{% t global.home_why_attend %}</h2>
   <div class="attends-box">
      <div class="grid-attends">
         <h4>از بهترین ها بیاموزید</h4>
         <p>Three channels of content dedicated to developers, enterprise teams, and college students.</p>
      </div>
      <div class="grid-attends">
         <h4>جدیدترین ها را دریافت کنید</h4>
         <p>New product announcements and deep dives.</p>
      </div>
      <div class="grid-attends">
         <h4>به فراتر از محتوا وصل شوید</h4>
         <p>Networking and learning opportunities, from Workshops to mentoring sessions.</p>
      </div>
      <div class="grid-attends">
         <h4>در طول راه از آن لذت ببرید</h4>
         <p>Musical performances inspired by code and a few more surprises to come!</p>
      </div>
   </div>
   <!-- <h4 class="text-gradient-purple">از بهترین ها بیاموزید</h4>
      <p>Three channels of content dedicated to developers, enterprise teams, and college students.</p>
      
      <h4 class="text-gradient-purple">جدیدترین ها را دریافت کنید</h4>
      <p>New product announcements and deep dives.</p>
      
      <h4 class="text-gradient-purple">به فراتر از محتوا وصل شوید</h4>
      <p>Networking and learning opportunities, from Workshops to mentoring sessions.</p>
      
      <h4 class="text-gradient-purple">در طول راه از آن لذت ببرید</h4>
      <p>Musical performances inspired by code and a few more surprises to come!</p> -->
</section>
<hr class="gradient">
<section class="subscribe">
   <p>
      {% t global.home_keep_update%}
   </p>
   <br>
   <div class="reg-btn sub-btn-size">
      <a href="{{ site.url }}/{{ page.lang }}/subscribe/" class="button">{% t global.home_subscribe %}</a>
   </div>
   <!-- <a href="contact.html" class="button" target="_blank">
      <span>Subscribe for updates</span>
      </a> -->
</section>
<hr class="gradient">
<div class="page-box-content">
   <div class="page-box-content-padding">
      <br>
      <center>
         <h2 class="page-box-content-title">{% t global.home_posts %}</h2>
      </center>
      <br>
      <ul class="post-list">
         <li>
            <h2>
               <a class="post-link" href="{{ site.url }}/{{ page.lang }}/post/" title="اپن سورس، یک دروغ تجاری قابل باور">اپن سورس، یک دروغ تجاری قابل باور</a>
            </h2>
            <span>
               <p>دوست عزیز ما بابک مقیمی مقاله ای در مورد آزادراه منتشر کرده است که می تواند نقطه شروع خوبی برای یک مقاله کامل در مورد منبع آزاد و رویکردهای اجتماعی...</p>
            </span>
         </li>
         <li>
            <h2>
               <a class="post-link" href="{{ site.url }}/{{ page.lang }}/post/" title="اهدف جشنواره نرم افزار آزاد/اوپن سورس فارسی">اهدف جشنواره نرم افزار آزاد/اوپن سورس فارسی</a>
            </h2>
            <span>
               <p>در این مطلب اهداف جشنواره اوپن سورس و چشم انداز های جشنواره نرم افزار آزاد را توضیح میدهیم و می خواهیم شفاف سازی های لازم را انجام دهیم.</p>
            </span>
         </li>
         <li>
            <h2>
               <a class="post-link" href="{{ site.url }}/{{ page.lang }}/post/" title="سلام دنیا - جشنواره اوپن سورس فارسی">سلام دنیا - جشنواره اوپن سورس فارسی</a>
            </h2>
            <span>
               <p>سلام دنیا، عبارتی است که اصولا برنامه نویس ها و کاربران رایانه ها در اولین تجربه خود با زبان های برنامه نویسی آن را بیان می کنند. این بار از...</p>
            </span>
         </li>
      </ul>
      <br><br>
   </div>
</div>
<hr class="gradient">
<section class="sponsors">
   <h4>{% t global.home_sponsors_thanks %}</h4>
   <div class="sponsor-box">
      {% for sponsor_item in site.translations[site.lang].sponsors %}
      <div class="inner-grid">
         <a>
            <img src="{{ sponsor_item.image }}" alt="{{ sponsor_item.name }}">
         </a>
      </div>
      {% endfor %}
   </div>
   <p>مایل به <a class="underline" href="{{ site.url }}/{{ page.lang }}/contact/">پشتیبانی</a> از جشنواره اوپن سورس فارسی هستید؟</p>
   <br>
   <div class="reg-btn connect-btn-size">
      <a href="{{ site.url }}/{{ page.lang }}/contact/" class="button">{% t global.home_contact_us%}</a>
   </div>
</section>
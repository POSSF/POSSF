---
layout: page
permalink: /
title: home.title
---

<section class="content main-first-section page-box-content">
   <div class="page-box-content-padding top-content-txt">
      <h1 class="gradient-text main-title">{% t home.section_title %}</h1>
      <p>
         {% t home.section_description %}
         <a class="underline" href="{{ site.url }}/{{ page.lang }}/register/">{% t home.section_register %}</a>
      </p>
      <br>
      <a href="{{ site.url }}/{{ page.lang }}/register/" class="button">{% t home.register %}</a>
   </div>
</section>
<hr class="gradient">
<section class="speakers">
   <h1>{% t home.speakers %}</h1>
   <ul class="speaker-list">
      {% for speaker_item in site.speakers %}
         <li>
            <a href="{{ site.url }}/{{ site.lang }}{{ speaker_item.url }}">
               <img src="{{ site.url }}{{ speaker_item.image }}" alt="{% t speaker_item.name %}">
               <h3>{% t speaker_item.talk %}</h3>
               <h4>{% t speaker_item.name %}</h4>
               <h5>{% t speaker_item.role %}</h5>
            </a>
         </li>
      {% endfor %}
   </ul>
</section>
<section class="attends">
   <h2>{% t home.why_attend %}</h2>
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
      {% t home.keep_update%}
   </p>
   <br>
   <div class="reg-btn sub-btn-size">
      <a href="{{ site.url }}/{{ page.lang }}/subscribe/" class="button">{% t home.subscribe %}</a>
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
         <h2 class="page-box-content-title">{% t home.posts %}</h2>
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
   <h4>{% t home.sponsors_thanks %}</h4>
   <div class="sponsor-box">
      {% for sponsor_item in site.translations[site.lang].sponsors.items %}
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
      <a href="{{ site.url }}/{{ page.lang }}/contact/" class="button">{% t home.contact_us %}</a>
   </div>
</section>

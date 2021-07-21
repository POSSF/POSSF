---
layout: page
permalink: /
title: home.title
body_has_image: yep
---

<section class="content main-first-section page-box-content">
   <div class="page-box-content-padding top-content-txt">
      <h1 class="gradient-text main-title">{% t home.section_title %}</h1>
      <p>
         {% t home.section_description %}
         <a class="underline" href="{{ site.url }}/{{ site.lang }}/register/">{% t home.section_register %}</a>
      </p>
      <br>
      <a href="{{ site.url }}/{{ site.lang }}/register/" class="button">{% t home.register %}</a>
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
         <h4>{% t home.attends1_title %}</h4>
         <p>{% t home.attends1_description %}</p>
      </div>
      <div class="grid-attends">
         <h4>{% t home.attends2_title %}</h4>
         <p>{% t home.attends2_description %}</p>
      </div>
      <div class="grid-attends">
         <h4>{% t home.attends3_title %}</h4>
         <p>{% t home.attends3_description %}</p>
      </div>
      <div class="grid-attends">
         <h4>{% t home.attends4_title %}</h4>
         <p>{% t home.attends4_description %}</p>
      </div>
   </div>
</section>

<hr class="gradient">

<section class="subscribe">
   <p>
      {% t home.keep_update %}
   </p>
   <br>
   <div class="reg-btn sub-btn-size">
  <a data-modal-target="#modal" class="button">
  {% t home.subscribe %}</a>
   </div>
    <div class="modal" id="modal">
    <div class="modal-header">
      <div class="title">Subscribe Email</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-body">
    <div class="group">      
   <button class="btn-send"><span>send</span></button>

   <input type="email" required placeholder="Enter Your Email">
   <!-- <button class="btn-send">send</button> -->
   <span class="highlight"></span>
   <span class="bar"></span>
   <label>Email</label>
   </div>
    </div>
  </div>
  <div id="overlay"></div>
</section>

 
<hr class="gradient">

<div class="page-box-content page-box-content-post">
   <div class="page-box-content-padding">
      <br>
      <center>
         <h2 class="page-box-content-title">{% t home.posts %}</h2>
      </center>
      <br>
      <ul class="post-list">
         <li>
            <h2>
               <a class="post-link" href="{{ site.url }}/{{ site.lang }}/post/" title="متن‌باز، یک دروغ تجاری قابل باور">متن‌باز، یک دروغ تجاری قابل باور</a>
            </h2>
            <span>
               <p>دوست عزیز ما بابک مقیمی مقاله ای در مورد آزادراه منتشر کرده است که می تواند نقطه شروع خوبی برای یک مقاله کامل در مورد منبع آزاد و رویکردهای اجتماعی...</p>
            </span>
         </li>
         <li>
            <h2>
               <a class="post-link" href="{{ site.url }}/{{ site.lang }}/post/" title="اهدف جشنواره نرم افزار آزاد/متن‌باز فارسی">اهدف جشنواره نرم افزار آزاد/متن‌باز فارسی</a>
            </h2>
            <span>
               <p>در این مطلب اهداف جشنواره متن‌باز و چشم انداز های جشنواره نرم افزار آزاد را توضیح میدهیم و می خواهیم شفاف سازی های لازم را انجام دهیم.</p>
            </span>
         </li>
         <li>
            <h2>
               <a class="post-link" href="{{ site.url }}/{{ site.lang }}/post/" title="سلام دنیا - جشنواره متن‌باز فارسی">سلام دنیا - جشنواره متن‌باز فارسی</a>
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

{% include sponsors.html %}

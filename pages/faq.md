---
layout: page
permalink: /faq/
title: faq.title
---

<article itemscope itemtype="http://schema.org/BlogPosting">
   <div class="page-box-content">
      <div class="page-box-content-padding">
         <div class="goback">
            <a href="{{ site.url }}/{{ site.lang }}" class="go-back">
               <svg width="24" height="24" viewBox="0 0 34 34" class="back-icon">
                  <path fill="#FFFFFF" d="M17,33.5C7.9,33.5,0.5,26.1,0.5,17C0.5,7.9,7.9,0.5,17,0.5c9.1,0,16.5,7.4,16.5,16.5
                     C33.5,26.1,26.1,33.5,17,33.5z M17,1.5C8.5,1.5,1.5,8.5,1.5,17s7,15.5,15.5,15.5s15.5-7,15.5-15.5S25.5,1.5,17,1.5z"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M15.8,10c-0.3-0.3-0.8-0.3-1.1,0l-6.3,6.3c-0.3,0.3-0.3,0.8,0,1.1
                     l6.3,6.2c0.3,0.3,0.8,0.3,1.1,0s0.3-0.8,0-1.1l-5-5h14.4c0.4,0,0.8-0.3,0.8-0.8S25.7,16,25.2,16H10.8l5-5
                     C16.1,10.7,16.1,10.3,15.8,10z"></path>
               </svg>
               <span>
               {% t global.back_button %}
               </span>
            </a>
         </div>
         <div class="header-faq">
            <div class="container">
               <h3>{% t faq.name %} - {% t global.name_in_pages_with_underline %}</h3>
               <h1 class="gradient-text main-title">{% t faq.short %}</h1>
               <p>
                  {% t faq.description %}
                  <a class="underline" href="{{ site.url }}/{{ site.lang }}/contact/">{% t faq.sendus %}</a>.
               </p>
            </div>
         </div>
         <!-- <hr class="gradient"> -->
         <section class="faq">
            <div class="container">
               <h1>{% t global.faq %}</h1>
               <ul class="faq-question faq-fa">
                  {% for faq_item in site.translations[site.lang].faq.items %}
                  <li>
                     <div class="faq-item">
                        <div class="faq-box">
                           <h2 class="faq-title">
                              {{ faq_item["title"] }}
                           </h2>
                           <svg viewBox="0 0 24 24" version="1.1" width="24" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"></path>
                           </svg>
                        </div>
                        <div class="faq-content">
                           <p>
                              {{ faq_item["content"] }}
                           </p>
                        </div>
                     </div>
                  </li>
                  {% endfor %}
               </ul>
            </div>
         </section>
      </div>
   </div>
</article>

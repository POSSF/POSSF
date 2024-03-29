---
layout: page
permalink: /team/
title: team.title
---

<section class="main-content">
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

   <div class="page-box-content team-container">
      <div class="page-box-content-padding">
         <h1 class="page-box-content-title">{% t team.section_title %}</h1>
         <h2 class="page-box-content-title">{% t team.section_subtitle %}</h2>

         {% assign team_index = 0 %}
         {% for team_item in site.translations[site.lang].team.items %}

            {% if team_index == 1 %}
               <div class="team-grid">
            {% endif %}

            <div class="team-item">
               <div class="team-info">
                  <img class="team-img" src="{{ site.url }}{{ team_item.image }}" alt="{{ team_item.name }}">
                  <p class="team-name">{{ team_item.name }}</p>
                  <p class="team-role">{{ team_item.role }}</p>
               </div>
            </div>

            {% if team_index == 0 %}
               <div class="clear"></div>
               <br>
            {% endif %}

            {% assign team_index = team_index | plus:1 %}

         {% endfor %}

      </div>
   </div>

</div>
</section>

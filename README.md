# اولین جشنواره نرم افزار اوپن سورس فارسی

![](cover.jpg)

# Persian Open Source Software Festival

A community for open-source programmers and software engineers.

## Do you want to Support? So add yourself

- Star this repository
- Fork this repository
- Create a new Markdown file with your GitHub username at `_networks`. For example, if your GitHub username is Max, you should create a Markdown file named `max.md` in the `_networks` folder. So, the directory to your file should be `_networks/max.md`.
- Copy the template below and paste it to the Markdown file you've just created. **(First line should NOT be blank.)**
- Save your file and send a Pull Request.
- Just wait until we merge your PR.
- Voila! You are now a part of our community.

## Card Structure Template

```md
---
layout: network
permalink: /network/your-github-username-without-space/ <!-- GITHUB-USERNAME -->
name: Your full name
github: your-github-username
website: http://site.org/ <!-- LINK TO YOUR WEBSITE or link of a Social network -->
email: your-email@gmail.com
instagram: <!-- LEAVE EMPTY OR PUT LINK TO YOUR PROFILE -->
twitter: <!-- LEAVE EMPTY OR PUT LINK TO YOUR PROFILE -->
linkedin: <!-- LEAVE EMPTY OR PUT LINK TO YOUR PROFILE -->
facebook: <!-- LEAVE EMPTY OR PUT LINK TO YOUR PROFILE -->
country: Iran
location: Isfahan
role: Web Developer
languages: c php js css3 html5 <!-- YOU SHOULDN'T USE SPACE IN THE NAME OF THE PROGRAMMING LANGUAGE -->
---

A short biography and a short text about your technical skills.
```

## POSSF (Persian OSS Festival)

Persian Open Source Software Festival

### جشنواره اوپن سورس فارسی

[جشنواره نرم افزار اوپن سورس فارسی](https://possf.ir/)

[جشنواره نرم افزار منبع باز فارسی](https://possf.ir/)

[جشنواره نرم افزار متن‌باز فارسی](https://possf.ir/)

[نرم افزار متن‌باز](https://possf.ir/)

[نرم افزار منبع باز](https://possf.ir/)

[نرم افزار اوپن سورس](https://possf.ir/)

[اوپن سورس](https://possf.ir/)

[نرم افزار آزاد](https://possf.ir/)

[سخنران های جشنواره اوپن سورس فارسی](https://possf.ir/speaker/)

[کارگاه های جشنواره اوپن سورس فارسی](https://possf.ir/workshop/)

## Compile POSSF Website Project

### Using Docker

Do you want to easily run the project using Docker? Okay so:

- Install docker and docker-compose package
- Start docker service in your operation system
- run `docker-compose up` command in this directory
- open the link at the browser

### Manually

Install requirement packages from Gemfile:

```
$ bundle install
```

Or install manually one by one:

```
$ gem install jekyll
$ gem install jekyll-sitemap
$ gem install jekyll-target-blank
```
#### Running and serve website

```
$ bundle exec jekyll serve
Configuration file: /home/max/OpenSource/POSSF-Web/_config.yml
            Source: /home/max/OpenSource/POSSF-Web
       Destination: /home/max/OpenSource/POSSF-Web/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.13 seconds.
 Auto-regeneration: enabled for '/home/max/OpenSource/POSSF-Web'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

--------

## Known problems

### WARNING:  You don't have /home/max/.gem/ruby/2.7.0/bin in your PATH,

If you face to similar warning/error:
```
WARNING:  You don't have /home/max/.gem/ruby/2.7.0/bin in your PATH,
    gem executables will not run.
Successfully installed jekyll-4.1.1
1 gem installed
```

Try this:

```
nano ~/.bashrc
export PATH="$HOME/.gem/ruby/2.7.0/bin:$PATH"
```
### convertible.rb:222:in `write': Permission denied @ rb_sysopen

```
[max@workstation POSSF]$ jekyll serve
Configuration file: /home/max/Projects/POSSF/POSSF/_config.yml
            Source: /home/max/Projects/POSSF/POSSF
       Destination: /home/max/Projects/POSSF/POSSF/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
Building site for language: "en" to: /home/max/Projects/POSSF/POSSF/_site/en
       Jekyll Feed: Generating feed for posts
Loading translation from file /home/max/Projects/POSSF/POSSF/_i18n/en.yml
                    ------------------------------------------------
      Jekyll 4.2.0   Please append `--trace` to the `serve` command
                     for any additional information or backtrace.
                    ------------------------------------------------
/home/max/.local/share/gem/ruby/3.0.0/gems/jekyll-4.2.0/lib/jekyll/convertible.rb:222:in `write': Permission denied @ rb_sysopen - /home/max/Projects/POSSF/POSSF/_site/en/404.html (Errno::EACCES)
```

You have to remove `_site` directory by `sudo rm -rf _site` and this will fixed.

### Running both of docker image and jekyll

If you run both docker and jekyll localy, maybe some problems cause and you can fix it by easily remove `.jekyll-cache` directory by `sudo rm -rf .jekyll-cache`.

### Related outdated repositories

Template:
- https://github.com/BaseMax/POSSF/
- https://github.com/BaseMax/POSSF-Web/
- https://github.com/BaseMax/GitHubEventWeb

Actions:
- https://github.com/BaseMax/AutoInviteToOrgByIssueComment
- https://github.com/BaseMax/AutoInviteToOrgByStar

--------

© Copyright Max Base 2020

© Copyright POSSF Team 2021

© Copyright GitHub 2021 (During Negotiation to GitHub staff)

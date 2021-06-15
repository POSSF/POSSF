# اولین جشنواره نرم افزار اوپن سورس فارسی

# Persian Open Source Software Festival

A community for open-source programmers and software engineers.

## Do you want to add yourself?

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

[جشنواره نرم افزار متن باز فارسی](https://possf.ir/)

[نرم افزار متن باز](https://possf.ir/)

[نرم افزار منبع باز](https://possf.ir/)

[نرم افزار اوپن سورس](https://possf.ir/)

[اوپن سورس](https://possf.ir/)

[نرم افزار آزاد](https://possf.ir/)

[سخنران های جشنواره اوپن سورس فارسی](https://possf.ir/speaker/)

[کارگاه های جشنواره اوپن سورس فارسی](https://possf.ir/workshop/)

### Compile POSSF Website Project

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

### Running and serve website

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

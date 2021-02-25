# Type on Strap 🎨

[![Build Status](https://travis-ci.org/sylhare/Type-on-Strap.svg?branch=master)](https://travis-ci.org/sylhare/Type-on-Strap)
[![Gem Version](https://badge.fury.io/rb/type-on-strap.svg)](https://badge.fury.io/rb/type-on-strap)
[![Docker Pulls](https://img.shields.io/docker/pulls/sylhare/type-on-strap)](https://hub.docker.com/r/sylhare/type-on-strap)

[![Default Type on Strap blog](https://github.com/Sylhare/Type-on-Strap/blob/master/screenshot.png?raw=true)](https://sylhare.github.io/Type-on-Strap/)

A free and open-source [Jekyll](https://jekyllrb.com) theme. Based on Rohan Chandra [type-theme](https://github.com/rohanchandra/type-theme) packed with extra features and easily cusomizable:

* Responsive design on all devices (🖥, 💻, 📱, ...)
* Portfolio 🗂, Gallery 🖼 pages for your projects
* Tags compatibility 🏷
* Handle Bootstrap'ed pages: [Get Bootstrap](http://getbootstrap.com/)
* 🔎 Search feature: [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)
* Math Rendering : [KateX](https://github.com/Khan/KaTeX)
* Diagram Rendering: [Mermaid-js](https://github.com/mermaid-js/mermaid)
* 🖋 Nice fonts: [Font Awesome](https://fontawesome.com/), [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro), [Pacifico](https://fonts.google.com/specimen/Pacifico?selection.family=Pacifico) 
* Seo Tags: [Jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
* 🛠 Syntax Highlighting: Easily customisable [Base16](https://github.com/chriskempson/base16)
* Find free of rights images on [pexels](https://www.pexels.com/)

> [Demo Site](https://sylhare.github.io/Type-on-Strap/)

## Table of Contents
<!-- TOC GFM -->

- [Usage](#usage)
    - [As a ruby gem 💎](#as-a-ruby-gem-)
    - [As a github page 📋](#as-a-github-page-)
- [Structure](#structure)
- [Configure Type on Strap 🛠](#configure-type-on-strap-)
    - [Site configuration](#site-configuration)
    - [Meta and Branding](#meta-and-branding)
    - [Theme customization 🎨](#theme-customization-)
        - [Footer and Header's text](#footer-and-headers-text)
        - [Localisation string](#localisation-string)
    - [Google Analytics](#google-analytics)
    - [Comments (via Disqus)](#comments-via-disqus)
    - [Math typesetting with KateX](#math-typesetting-with-katex)
    - [Diagrams with Mermaid](#diagrams-with-mermaid)
    - [Social icons](#social-icons)
    - [Cookie consent](#cookie-consent)
        - [Share in article](#share-in-article)
        - [Footer](#footer)
    - [Personalize your Blog Posts 📝](#personalize-your-blog-posts-)
        - [Layout: Post](#layout-post)
        - [Post excerpt](#post-excerpt)
        - [Image aligner](#image-aligner)
        - [Code highlight](#code-highlight)
- [Feature pages and layouts](#feature-pages-and-layouts)
    - [Layout: Default](#layout-default)
    - [Layout: Home 🏡](#layout-home-)
    - [Layout: Page 📄](#layout-page-)
    - [Feature: Portfolio 🗂](#feature-portfolio-)
        - [Portfolio posts](#portfolio-posts)
        - [Portfolio in gem](#portfolio-in-gem)
    - [Feature: Gallery 🖼](#feature-gallery-)
    - [Feature: Search 🔍](#feature-search-)
    - [Feature: Tags 🏷](#feature-tags-)
- [Advanced](#advanced)
    - [Liquid tags](#liquid-tags)
    - [Gulp toolbox](#gulp-toolbox)
        - [Requirements](#requirements)
        - [Minimizing and optimizing: css, js and images](#minimizing-and-optimizing-css-js-and-images)
        - [Create a post](#create-a-post)
    - [Git hooks](#git-hooks)
    - [Use as Ruby Gem 💎](#use-as-ruby-gem-)
    - [Remote Theme](#remote-theme)
- [License](#license)

<!-- /TOC -->
## Usage

### As a ruby gem 💎

Check out this tutorial: [Use as Ruby Gem](https://github.com/Sylhare/Type-on-Strap#use-as-ruby-gem)

### As a github page 📋

1. Fork and clone the [Type on Strap repo](https://github.com/sylhare/Type-On-Strap): `git clone https://github.com/Sylhare/Type-on-Strap.git`
2. Install [Jekyll](https://jekyllrb.com/docs/installation/): `gem install jekyll`, check [#1](https://github.com/Sylhare/Type-on-Strap/issues/1) if you have a problem.
3. Install the theme's dependencies: `bundle install`
4. Customize the theme
	- Github Page: [update `_config.yml`](https://github.com/Sylhare/Type-on-Strap#site-configuration)
5. Run the Jekyll server: `bundle exec jekyll serve`

## Structure

Here are the main files of the template

```bash
Type-on-Strap
├── _includes	               # Theme includes
├── _layouts                   # Theme layouts (see below for details)
├── _portfolio	               # Collection of articles to be populated in the portfolio page
├── _posts                     # Blog posts
├── _sass                      # Sass partials 
├── assets
|  ├── _js	                   # JavaScipt sources *(edit those)*
|  ├── js	                   # JS compiled for distribution 
|  ├── _css                    # CSS sources, bootstrap, font-awesome,etc *(edit those)*
|  ├── css                     # CSS compiled for distribution
|  ├── fonts		           # Font-Awesome, and other fonts
|  ├── _img		               # Images used for the template
|  └── img		               # Images used for the template
├── pages
|   ├── 404.md		           # To be displayed when url is wrong
|   ├── about.md               # About example page
|   ├── gallery.md             # Gallery page for your photos
|   ├── portfolio.md	       # Portfolio page for your projects
|   ├── search.html	           # Search page
|   └── tags.md                # The tag page
├── _config.yml                # sample configuration
├── _data.yml
|  ├── authors.yml             # Update the post authors configurations 
|  ├── language.yml            # Localization configuration
|  └── social.yml              # Social configurations (RSS, Twitter, ...)
└── index.html                 # sample home page (blog page paginated)
```
	
## Configure Type on Strap 🛠

Open `_config.yml` in a text editor to change most of the blog's settings.

If a variable in this document is marked as "optional", disable the feature by removing all text from the variable. 


### Site configuration

Configure Jekyll as your own blog or with a "baseurl" in in `_config.yml`:

Jekyll website *without* a "baseurl" (such as a GitHub Pages website for a given username):

```yml
baseurl: ""
url: "https://username.github.io"
```

Jekyll website *with* "baseurl" (like the Type on Strap [demo](https://sylhare.github.io/Type-on-Strap/) page):

```yml
baseurl: "/sub-directory"
url: "https://username.github.io/"
```

Please configure this  before using the theme.

### Meta and Branding

Meta variables hold basic information about your Jekyll site which will be used throughout the site 
and as meta properties for search engines, browsers, and the site's RSS feed.

Change these variables in `_config.yml`:

```yml
title: My Jekyll Blog                 # Name of website
avatar: assets/img/avatar.png         # Path of avatar image, to be displayed in the theme's header
description: My blog posts            # Short description, primarily used by search engines
favicon: assets/img/favicon.ico       # Icon displayed in the tab
```

You can also customize the seo tags default option following the jekyll-seo-tag plugin [documentation](http://jekyll.github.io/jekyll-seo-tag/advanced-usage/).

### Theme customization 🎨

#### Footer and Header's text

Customize your site header/footer with these variables in `_config.yml`:

```yml
header_text: Welcome to my Jekyll blog
header_feature_image: assets/img/featured/webp/triangular.webp
footer_text: Copyright 2017
```

If you don't want anything, replace the value by `" "`.

#### Localisation string

Localization string is a way to quickly change the template language for text like *Next Post* or *Follow on*, ...
You can find all the properties in `_data/language.yml`.

By default it is in english, but you can easily add your own language.

### Google Analytics

To enable Google Analytics, add your [tracking ID](https://support.google.com/analytics/answer/1032385) 
to `_config.yml` like so:

```yml
google_analytics: UA-NNNNNNNN-N
```

### Comments (via Disqus)

Optionally, if you have a [Disqus](https://disqus.com/) account, you can show a 
comments section below each post.

To enable Disqus comments, add your [Disqus shortname](https://help.disqus.com/customer/portal/articles/466208) 
to your project's `_config.yml` file:

```yml
disqus_shortname: my_disqus_shortname
```

### Math typesetting with KateX

When KateX is set in `_config.yml`:

```yml
katex: true # to Enable it
```

You can then wrap math expressions with `$$` signs in your posts and make sure you have set the `katex` variable 
in `_config.yml` to `true` for math typesetting.

For inline math typesetting, type your math expression on the *same line* as your content. For example:

```latex
Type math within a sentence $$2x^2 + x + c$$ to display inline
```

For display math typesetting, type your math expression on a *new line*. For example:

```latex
$$
  \bar{y} = {1 \over n} \sum_{i = 1}^{n}y_i
$$
```

You can find a cheat sheet of the compatible LaTex symbols [online](https://artofproblemsolving.com/wiki/index.php/LaTeX:Symbols).

### Diagrams with Mermaid

Enable the [mermaid-js](https://github.com/mermaid-js/mermaid) diagram rendering by setting mermaid to true in the `_config.yml`.
This will load and init the [mermaid.min.js](https://mermaid-js.github.io/mermaid/getting-started/n00b-gettingStarted.html#4-calling-mermaid-from-a-relative-link).

```yml
mermaid: true # to Enable it
```

Find all the help you need on the official [mermaid documentation](https://mermaid-js.github.io/mermaid/).
You can create with ease diagrams. Add your mermaid script inside two mermaid divs (default Kramdown does not yet support mermaid).
With the `class="mermaid"` inside the `<div>`:

```html
<div class="mermaid">
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
</div>
```

### Social icons

In `_data/social.yml` you can customize the social icons from other wbesite you wish to display in the blog.
The site icons come from [Font Awesome](https://fontawesome.com/).

### Cookie consent

You can add a cookie consent with a disclaimer if you use Google Analytics while respecting the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
Set to true, there will be a banner at the bottom of the page with the disclaimer and a approve button.
Once the user clicks on "Approve" the cookies will be created for Google Analytics.

#### Share in article

The share icons are the one at the bottom of the blog page if enabled, 
to share the article on those platform.

#### Footer

Display in the footer. 
All icon variables should be your username enclosed in quotes (e.g. "username") in `_data/social.yml`, 
except for the following variables:

```yml
rss: true                                                   
email_address: type@example.com
linkedin: https://www.linkedin.com/in/FirstLast
stack_exchange: https://stackexchangecom/users/0000/first-last
stack_overflow: https://stackoverflow.com/users/0000/first-last
youtube: UCqECaJ8Gagnn7YCbPEzWH6g  # Youtube token of your channel in the url 
```

You can update the RSS settings in `_data/social` to change the default feed path (generated by [jekyll-feel](https://github.com/jekyll/jekyll-feed)).

### Personalize your Blog Posts 📝

When writing a post, be sure in jekyll to:
 - Put it in the `_posts` folder
 - Name it with the date first like `2019-08-21-This-is-my-blog-post.md`

Please refer to the [Jekyll docs for writing posts](https://jekyllrb.com/docs/posts/). 

#### Layout: Post

This are the basic features you can use with the  `post` layout.

```yml

---
layout: post
title: Hello World                                # Title of the page
hide_title: true                                  # Hide the title when displaying the post, but shown in lists of posts
feature-img: "assets/img/sample.png"              # Add a feature-image to the post
thumbnail: "assets/img/thumbnails/sample-th.png"  # Add a thumbnail image on blog view
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
bootstrap: true                                   # Add bootstrap to the page
tags: [sample, markdown, html]
---
```

With `thumbnail`, you can add a smaller image than the `feature-img`. 
If you don't have a thumbnail you can still use the same image as the feature one. Or use the gulp task to create it.

The background used when `color` is set comes from `lineart.png` from [xukimseven](https://github.com/xukimseven) 
you can edit it in the config file (`_config.yml > color_image`). If you want another one, put it in `/assets/img` as well. 

The **bootstrap** is not mandatory and is only useful if you want to add bootstrapped content in your page. 
It will respect the page and theme layout, mind the padding on the sides.

#### Post excerpt

The [excerpt](https://jekyllrb.com/docs/posts/#post-excerpts) are the first lines of an article that is display on the blog page. 
The length of the excerpt has a default of around `250` characters or can be manually set in the post using:

in `conflig.yml`:

```yml
excerpt: true
```

Then in your post, add the `excerpt separator`:

```yml

---
layout: post
title: Sample Page
excerpt_separator: <!--more-->
---

some text in the excerpt
<!--more-->
... rest of the text not shown in the excerpt ...
```

The html is stripped out of the excerpt so it only display text.

#### Image aligner

To easily add align images side by side in your article using the `aligner.html` include:

```ruby
{% include aligner.html images="path/to/img1.png,path/to/img2.png,path/to/img3.png" column=3 %}
```

Use it in any markdown file. There are two fields in the include you need to look into:
  - _images_: Takes a string separated with `,` of all the images path. 
    - It by default look into `assets/img/` so give the path from there.
  - _column_: (OPTIONAL) Set the number of column you want your imaged displayed in.
    - default is 2 columns
    - `column=3` set 3 columns
    - `column="auto"` makes as many columns as images

#### Code highlight

Like all CSS variables in the theme, you can edit the color of the code highlight in _sass > base > _variables.scss.
The code highlighting works with [base16](https://github.com/chriskempson/base16-html-previews/tree/master/css) you can find existing example 
of your favourite highlight color scheme on this format.

## Feature pages and layouts 

All feature pages besides the "home" one are stored in the `page` folder, 
they will appear in the navigation bar unless you set `Hide: true` in the front matter. 

Here are the documentation for the other feature pages that can be added through `_config.yml`. 

Non-standard features are documented below.

### Layout: Default

This layout includes the head, navigation bar and footer around your content. 
Unless you're making a custom layout you won't need it.

### Layout: Home 🏡

This page is used as the home page of the template (in the `index.html`). It displays the list of articles in `_posts`.
You can use this layout in another page (adding a title to it will make it appear in the navigation bar).

The recommended width and height for the home picture is width:`2484px;` and height:`1280px` 
which are the dimensions of the actual picture for it to be rolling down as you scroll the page.

If your posts are not displaying ensure that you have added the line `paginate: 5` to `_config.yml`.

### Layout: Page 📄

The page layout have a bit more features explained here.

```yml

---
layout: page
title: "About" 
subtitle: "This is a subtitle"   
feature-img: "assets/img/sample.png" 
permalink: /about.html               # Set a permalink your your page
hide: true                           # Prevent the page title to appear in the navbar
icon: "fa-search"                    # Will Display only the fontawesome icon (here: fa-search) and not the title
tags: [sample, markdown, html]
---
```

The hide only hides your page from the navigation bar, it is however still generated and can be access through its link. 

### Feature: Portfolio 🗂

Portfolio is a feature page that will take all the markdown/html files in the `_portfolio` folder to create a 3-columns image portfolio matrix.

To use the portfolio, simply create a `portfolio.md` with this information inside:

```yml

--- 
layout: page
title : Portfolio 
---

{% include portfolio.html %}
```

#### Portfolio posts

You can format the portfolio posts in the `_portfolio` folder using the `post layout`. Here are little explaination on some of the possible feature you can use and what they will do.

If you decide to use a date, please be sure to use one that can be parsed such as `yyyy-mm-dd`. You can see more format example on the demo posts that are available for the theme:

```yml

---
layout: post
title: Circus				       # Title of the portfolio post
feature-img: "assets/img/portfolio/cake.png"   # Will display the image in the post
img: "assets/img/portfolio/cake.png"           # Will display the image in the portfolio page
date: 2019-07-25		 	       # Not mandatory, however needs to be in date format to display the date
---
```

#### Portfolio in gem

Make sure your `_config.yml` contains the following if you are using the theme as a gem:

```yml
# PORTFOLIO
collections:
  portfolio:
    output: true
    permalink: /:collection/:name
```    

This creates the collection for Jekyll so it can find and display your portfolio posts.

### Feature: Gallery 🖼

You can create a gallery using [Masonry JS](https://masonry.desandro.com/) which will placing the pictures in optimal position 
based on available vertical space. 
You need to specify the `gallery_path` which will be used to find the pictures to render. 
It will take all of the picture under that directory. Then use the `include` to add it in your page. 

```yml

---
layout: page
title: Gallery
gallery: "assets/img/featured"
---

{% include gallery.html gallery_path=page.gallery %}
```


### Feature: Search 🔍

The search feature is based on [Simple-Jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search) 
there is a `search.json` file that will create a list of all of the site posts, pages and portfolios. 

Then there's a `search.js` displaying the formatted results entered in the `search.html` page.

The search page can be hidden with the `hide` option. You can remove the icon by removing `icon`:

```yml

---
layout: search
title: Search
icon: "search"
---
```

### Feature: Tags 🏷

Tags should be placed between `[]` in your post metadata. Separate each tag with a comma. 
Tags are recommended for posts and portfolio items.

For example:

```yml

---
layout: post
title: Markdown and HTML
tags: [sample, markdown, html]
---
```

> Tags are case sensitive `Tag_nAme` ≠ `tag_name`

All the tags will be listed in `tags.html` with a link toward the pages or posts.
The Tag page can be hidden with the `hide` option. You can remove the icon by removing `icon` (like for the search page).

## Advanced

### Liquid tags

Jekyll works with [liquid](https://shopify.github.io/liquid/) tags usually represented by:

```
{{ liquid.tag | filter }}
```

These are useful to render your jekyll files. 
You can learn more about them on [shopify's doc](https://help.shopify.com/themes/liquid/basics)

### Gulp toolbox

#### Requirements

Before you need to have *node* and `npm` installed:

- Windows: https://nodejs.org/
- Ubuntu/Debian: `apt-get install nodejs npm libgl1 libxi6`
- Fedora (dnf) / RHEL/CentOS (yum): `dnf install node npm libglvnd-glx libXi`

Then you need to install [`gulp-cli`](https://gulpjs.com/) and its dependencies:

```bash
sudo npm install gulp-cli -g
npm install
```

#### Minimizing and optimizing: css, js and images

You can run the default task that will compress the js, css, resize and compress images and create thumbnails for the featured dir.

```bash
gulp default
gulp post -n "Title"    # create a empty post with today's date and the parsed title
gulp js    # merge and uglify js src files
gulp bootstrap    # isolate and uglify bootstrap css
gulp avatar   # resize avatar to 512x and compress
gulp portfolio   # resize portfolio to 512x and compress
gulp featured   # resize featured to 1920x and compress
gulp thumbs    # generate thumbnails of the featured imgs
gulp webp   # generate webps copies of the featured imgs

# tip: run a git status to see the changes
git status
```

You can find more about the gulp tasks in the [gulpfile.js](gulpfile.js).

#### Create a post

To create a `.md` file in the *_posts/* section with the jekyll format of today's date.
Use this command with the title you'd like to create the very basic post.

```bash
gulp post -n 'title of the post'
```

A file will be create following the format `yyyy-mm-dd-title-of-the-post.md` with default post attributes inside.
Nothing will happen if the file exists already.


### Git hooks
Git hooks are provided in `hooks/`. The pre-commit hook, when enabled, will check for Gulp and gulpfile.js and auto-optimize assets every time you commit.

To install the hook:

`ln lib/hooks/pre-commit .git/hooks/pre-commit`

### Use as Ruby Gem 💎

You can use Type-on-strap as a [gem](https://rubygems.org/gems/type-on-strap). 

Ruby Gem Method
Add this line to your Jekyll site's Gemfile (or create one):

```ruby
gem "type-on-strap"
```

Add this line to your Jekyll site's `_config.yml` file:

```yml
theme: type-on-strap
```

Then run Bundler to install the theme gem and dependencies:

```bash
bundle install
```

Then you can start adding content like:
  - Add a `index.html` file
  - Add the feature page you want. (ex: as it is already in `pages`)
  - Add posts in `_posts` and `_portfolio` to be displayed

### Remote Theme

Now you can use any theme gem with github pages with [29/11/2017 Github Pages Broadcast](https://github.com/blog/2464-use-any-theme-with-github-pages).
For that remove all `theme:` attributes from `_config.yml` and add instead:

```yml
remote_theme: sylhare/Type-on-Strap 
```

## License

This theme is licensed under the [The MIT License (MIT)](https://raw.githubusercontent.com/Sylhare/Type-on-Strap/master/LICENSE)

- Pictures from [Pexels](https://www.pexels.com/) are under Creative Commons Zero (CC0) license
- Fonts are licensed under the [SIL Open Font License (OFL)](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL) 

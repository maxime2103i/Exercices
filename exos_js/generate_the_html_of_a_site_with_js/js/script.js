let body = document.querySelector('body');



const createElemet = (attributObjetc) => {

    // je déclare un element 
    let element;    

    if (attributObjetc['tagName']) {

        // je vérifie si l'objet est n'est pas vide

        for (const key in attributObjetc) {

            // je fais une boucle dans l'objet contenant les attribues

            if (key === "tagName") {

                // si l'attribue est tagName alors on creer l'element avec comme tag le contenue de tagName
                element = document.createElement(attributObjetc.tagName);
            } else if (key === "innerHTML") {

                // si l'attribue est innerHTML alors on incrémente l'element avec le contenue de innerHTML
                element.innerHTML += attributObjetc[key];
            } else if (key === "innerTEXT") {

                // si l'attribue est innerTEXT alors on fait une boucle qui incrémente l'element avec ou un objet ou une string
                attributObjetc[key].forEach(textOrObj => {
                    if (typeof textOrObj === "object") {
                        element.appendChild(createElemet(textOrObj));
                    } else {
                        element.innerHTML += textOrObj;
                    };
                });
            } else if (key === "childs") {

                // si l'attribue est un childs alors pour tt les childs on va appeler cette même fonction pour créer un element enfant
                for (const keychild in attributObjetc[key]) {
                    element.appendChild(createElemet(attributObjetc[key][keychild]));
                };
            } else {

                // si tout ca n'est pas respecter nous incrémentons objets d'un attribue et d'un contenue d'attribue 
                element.setAttribute(key, attributObjetc[key]);
            };  

        };
    } else {
        console.log("error object empty");
        return false;
    };
    return element;
};


const divContainer = {
    "tagName": "div",
    "class": "container",
    "childs": [{
        "tagName": "div",
        "class": "site-header clearfix",
        "role": "banner",
        "childs": [{
            "tagName": "div",
            "class": "site-logo",
            "innerTEXT": ["HTML5 ", {"tagName": "span", "class": "star", "innerHTML": "★"}, " Boilerplate"]
        }, {
            "tagName": "ul",
            "class": "site-nav inline-block-list",
            "childs": [{
                "tagName": "li",
                "childs": [{
                    "tagName": "a",
                    "href": "https://github.com/h5bp/html5-boilerplate",
                    "data-ga-category": "Outbound links",
                    "data-ga-action": "Nav click",
                    "data-ga-label": "Source code",
                    "innerHTML": "Source code",
                }]
            }, {
                "tagName": "li",
                "childs": [{
                    "tagName": "a",
                    "href": "https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md",
                    "data-ga-category": "Outbound links",
                    "data-ga-action": "Nav click",
                    "data-ga-label": "Docs",
                    "innerHTML": "Docs",
                }]
            }, {
                "tagName": "li",
                "childs": [{
                    "tagName": "a",
                    "href": "https://h5bp.org",
                    "data-ga-category": "Outbound links",
                    "data-ga-action": "Nav click",
                    "data-ga-label": "Other projects",
                    "innerHTML": "Other projects",
                }]
            }]
        }]
    }, {
        "tagName": "div",
        "class": "site-promo",
        "childs": [{
            "tagName": "h1",
            "innerHTML": "The web’s most popular front-end template",
        }, {
            "tagName": "p",
            "class": "description",
            "innerTEXT": ["HTML5 Boilerplate helps you build ", {"tagName": "strong", "innerHTML": "fast"}, ", ", {"tagName": "strong", "innerHTML": "robust"}, ", and ", {"tagName": "strong", "innerHTML": "adaptable"}, " web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package."],
        }, {
            "tagName": "div",
            "class": "cta-option",
            "childs": [{
                "tagName": "a",
                "class": "btn btn-download",
                "href": "https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip",
                "data-ga-category": "Download",
                "data-ga-action": "Download - top",
                "data-ga-label": "v8.0.0",
                "childs": [{
                    "tagName": "strong",
                    "innerHTML": `Download `
                }, {
                    "tagName": "span",
                    "class": "version",
                    "innerHTML": `v8.0.0`
                }],
            }, {
                "tagName": "a",
                "class": "last-update",
                "href": "https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md",
                "data-ga-category": "Outbound links",
                "data-ga-action": "See the CHANGELOG",
                "data-ga-label": "v8.0.0",
                "innerHTML": "See the CHANGELOG",
            }]
        }]
    }]
};

const divsitesection = {
    "tagName": "div",
    "class": "site-section",
    "childs": [{
        "tagName": "div",
        "class": "container",
        "childs": [{
            "tagName": "h2",
            "innerHTML": `Save time. Create with confidence.`
        }, {
            "tagName": "div",
            "class": "grid",
            "childs": [{
                "tagName": "div",
                "class": "grid-cell",
                "childs": [{
                    "tagName": "h3",
                    "innerTEXT": [{"tagName": "span", "class": "star", "innerHTML": "★"}, " Analytics, icons, and more"],
                }, {
                    "tagName": "p",
                    "innerHTML": `A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.`
                }]
            }, {
                "tagName": "div",
                "class": "grid-cell",
                "childs": [{
                    "tagName": "h3",
                    "innerTEXT": [{"tagName": "span", "class": "star", "innerHTML": "★"}, " Normalize.css and helpers"],
                }, {
                    "tagName": "p",
                    "innerTEXT": ["Includes ",
                    {"tagName": "a", "href": "https://necolas.github.io/normalize.css/", "innerHTML": "Normalize.css"}, 
                    " — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles."]
                }]
            }, {
                "tagName": "div",
                "class": "grid-cell",
                "childs": [{
                    "tagName": "h3",
                    "innerTEXT": [{"tagName": "span", "class": "star", "innerHTML": "★"}, " Modernizr"],
                }, {
                    "tagName": "p",
                    "innerTEXT": ["Get the latest minified versions of Modernizr: ", 
                    {"tagName": "a", "href": "https://modernizr.com/", "innerHTML": "Modernizr"},
                    " feature detection library, complete with a custom build configuration"]
                }]
            }, {
                "tagName": "div",
                "class": "grid-cell",
                "childs": [{
                    "tagName": "h3",
                    "innerTEXT": [{"tagName": "span", "class": "star", "innerHTML": "★"}, "High performance"],
                }, {
                    "tagName": "p",
                    "innerTEXT": ["Apache settings to help you deliver excellent site performance. We independently maintain ",
                    {"tagName": "a", "href": "https://github.com/h5bp/server-configs", "innerHTML": "server configs"},
                    " for multiple platforms."]
                }]
            }]
        }]
    }]
};



const divsitesectionvideo = {
    "tagName": "div",
    "class": "site-section site-section-video",
    "childs": [{
        "tagName": "h2",
        "innerHTML": "Introduction to v8",
    }, {
        "tagName": "div",
        "class": "content",
        "childs": [{
            "tagName": "p",
            "class": "new",
            "innerHTML": "What's new?"
        }, {
            "tagName": "ul",
            "class": "new",
            "childs": [{
                "tagName": "li",
                "innerHTML": "Added a sample package.json with basic Parcel commands to jump start your app development",
            }, {
                "tagName": "li",
                "innerHTML": "Added sample Open Graph metadata",
            }, {
                "tagName": "li",
                "innerHTML": "Updated Modernizr and main.css",
            }, {
                "tagName": "li",
                "innerHTML": "Removed jQuery",
            }, {
                "tagName": "li",
                "innerHTML": "Set anonymizeIp to true in Google Analytics snippet",
            }, {
                "tagName": "li",
                "innerHTML": "Removed Browser Upgrade Prompt",
            }, {
                "tagName": "li",
                "innerTEXT": ["That's just the start of all the goodness. ", {"tagName": "a", "href": "https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md", "innerHTML": "Check out the Changelog for all the details."}],
            }]

        }]
    }]
};


const divsitesection2 = {
    "tagName": "div",
    "class": "site-section",
    "childs": [{
        "tagName": "h2",
        "innerHTML": "Who uses HTML5 Boilerplate?",
    }, {
        "tagName": "p",
        "class": "in-the-wild", 
        "innerTEXT": [{"tagName": "a", "href": "https://www.microsoft.com/surface/", "innerHTML": "Microsoft"},
                      ", ",
                      {"tagName": "a", "href": "https://data.nasa.gov/", "innerHTML": "NASA"},
                      ", ",
                      {"tagName": "a", "href": "http://www.nikeskateboarding.com/", "innerHTML": "Nike"},
                      ", ",
                      {"tagName": "a", "href": "https://www.barackobama.com/", "innerHTML": "Barack Obama"},
                      ", ",
                      {"tagName": "a", "href": "https://www.itv.com/news/", "innerHTML": "ITV News"},
                      ", ",
                      {"tagName": "a", "href": "https://creativecommons.org/", "innerHTML": "Creative Commons"},
                      ", ",
                      {"tagName": "a", "href": "https://auspost.com.au/", "innerHTML": "Australia Post"},
                      ", and ",
                      {"tagName": "a", "href": "https://github.com/h5bp/html5-boilerplate/wiki/sites", "innerHTML": "many more"},
                      "."
                    ]
    }, {
        "tagName": "div",
        "class": "cta-option",
        "childs": [{
            "tagName": "a",
            "class": "btn btn-download",
            "href": "https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip",
            "data-ga-category": "Download",
            "data-ga-action": "Download - bottom",
            "data-ga-label": "v8.0.0",
            "childs": [{
                "tagName": "strong",
                "innerHTML": `Download `
            }, {
                "tagName": "span",
                "class": "version",
                "innerHTML": `v8.0.0`
            }]
        }]

    }]
};

const divaside = {
    "tagName": "div",
    "class": "aside",
    "childs": [{
        "tagName": "div",
        "class": "container",
        "childs": [{
            "tagName": "ul",
            "class": "inline-block-list",
            "childs": [{
                "tagName": "li",
                "childs": [{
                    "tagName": "a",
                    "href": "https://github.com/h5bp/html5-boilerplate/issues",
                    "data-ga-category": "Outbound links",
                    "data-ga-action": "Footer click",
                    "data-ga-label": "Report issues",
                    "innerTEXT": [{"tagName": "span", "class": "Icon Icon--github"}, " Report issues"]
                }]
            }, {
                "tagName": "li",
                "childs": [{
                    "tagName": "a",
                    "href": "https://stackoverflow.com/questions/tagged/html5boilerplate",
                    "data-ga-category": "Outbound links",
                    "data-ga-action": "Footer click",
                    "data-ga-label": "Help on Stack Overflow",
                    "innerTEXT": [{"tagName": "span", "class": "Icon Icon--stackoverflow"}, " Help on Stack Overflow"]
                }]
            }, {
                "tagName": "li",
                "childs": [{
                    "tagName": "a",
                    "href": "https://h5bp.net",
                    "data-ga-category": "Outbound links",
                    "data-ga-action": "Footer click",
                    "data-ga-label": "View the showcase",
                    "innerTEXT": [{"tagName": "span", "class": "Icon Icon--html5"}, " View the showcase"]
                }]
            }]
        }]

    }]
};

const footer = {
    "tagName": "footer",
    "class": "site-footer",
    "childs": [{
        "tagName": "p",
        "innerTEXT": [{
            "tagName": "iframe",
            "id": "twitter-widget-1",
            "scrolling": "no",
            "frameborder": "0",
            "allowtransparency": "true",
            "allowfullscreen": "true",
            "class": "twitter-share-button twitter-share-button-rendered twitter-tweet-button",
            "style": "position: static; visibility: visible; width: 76px; height: 28px;",
            "title": "Twitter Tweet Button",
            "src": "https://platform.twitter.com/widgets/tweet_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-1&lang=en&original_referer=https%3A%2F%2Fhtml5boilerplate.com%2F&size=l&text=HTML5%20Boilerplate%3A%20The%20rock-solid%20professional%20front-end%20template&time=1601748956972&type=share&url=https%3A%2F%2Fhtml5boilerplate.com%2F&via=h5bp",
            "data-url": "https://html5boilerplate.com/",
        },
        " &nbsp ", {
            "tagName": "iframe",
            "id": "twitter-widget-0",
            "scrolling": "no",
            "frameborder": "0",
            "allowtransparency": "true",
            "allowfullscreen": "true",
            "class": "twitter-follow-button twitter-follow-button-rendered",
            "style": "position: static; visibility: visible; width: 125px; height: 28px;",
            "title": "Twitter Follow Button",
            "src": "https://platform.twitter.com/widgets/follow_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=h5bp&show_count=false&show_screen_name=true&size=l&time=1601748956969",
            "data-screen-name": "h5bp",
        }]

    }, {
        "tagName": "p",
        "innerTEXT": ["A project from ", {
            "tagName": "a",
            "href": "https://github.com/h5bp",
            "innerHTML": "H5BP"
        },
        " currently maintained by", {
            "tagName": "br",
        }, {
            "tagName": "a",
            "href": "https://htmlcssjavascript.com/",
            "innerHTML": "Rob Larsen"
        },
        " & ", {
            "tagName": "a",
            "href": "https://github.com/coliff",
            "innerHTML": "Christian Oliff"
        }]
    }, {
        "tagName": "p",
        "innerTEXT": ["This project wouldn't have been possible without our past team members:", {
            "tagName": "br"
        }, {
            "tagName": "a",
            "href": "https://mathiasbynens.be/",
            "innerHTML": "Mathias Bynens"
        },
        ", ", {
            "tagName": "a",
            "href": "https://twitter.com/alrra",
            "innerHTML": "Cătălin Mariș"
        },
        ", ", {
            "tagName": "a",
            "href": "https://drublic.de/",
            "innerHTML": "Hans Christian Reinl"
        },
        ", ", {
            "tagName": "a",
            "href": "http://nicolasgallagher.com/",
            "innerHTML": "Nicolas Gallagher"
        },
        ", ", {
            "tagName": "a",
            "href": "https://www.paulirish.com/",
            "innerHTML": "Paul Irish"
        },
        ", and ", {
            "tagName": "a",
            "href": "http://nimbupani.com/",
            "innerHTML": "Divya Manian"
        },
        "."]
    }]
};


body.appendChild(createElemet(divContainer))
body.appendChild(createElemet(divsitesection))
body.appendChild(createElemet(divsitesectionvideo))
body.appendChild(createElemet(divsitesection2))
body.appendChild(createElemet(divaside))
body.appendChild(createElemet(footer))

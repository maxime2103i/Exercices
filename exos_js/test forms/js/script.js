let detectNumberOfAttributes = document.querySelectorAll('attribute').length;

const createElemet = (attributObjetc) => {
    let element;

    if (attributObjetc['tagName']) {
        for (const key in attributObjetc) {
            if (key === "tagName") {
                element = document.createElement(attributObjetc.tagName);
            } else if (key === "innerHTML") {
                element.innerHTML += attributObjetc[key];
            } else if (key === "innerTEXT") {
                attributObjetc[key].forEach(textOrObj => {
                    if (typeof textOrObj === "object") {
                        element.appendChild(createElemet(textOrObj));
                    } else {
                        element.innerHTML += textOrObj;
                    };
                });
            } else if (key === "childs") {
                for (const keychild in attributObjetc[key]) {
                    element.appendChild(createElemet(attributObjetc[key][keychild]));
                };
            } else if (key === "clone") {

            } else {
                element.setAttribute(key, attributObjetc[key]);
            };
        };
    } else {
        console.log(false);
        return false;
    };
    return element;
};


const element__html = class {
    constructor(tagName, attributs, childs) {
        this.tagName = tagName
        for (const key in attributs) {
            this[attributs[key][0]] = attributs[key][1]
        }
        if (childs[0]) {
            this.childs = []
            childs.forEach(element => {
                if (element[0][2]) {
                    this.childs.push(new element__html(element[0][0], element[0][1], element[0][2]))
                } else if (element[0][1]) {
                    this.childs.push(new element__html(element[0][0], element[0][1]))
                } else {
                    this.childs.push(new element__html(element[0][0]))
                }
            });
            
        }
    }

    create_elemet() {
        let element;

        if (this['tagName']) {
            for (const key in this) {
                console.log(key);
                if (key === "tagName") {
                    element = document.createElement(this.tagName);
                } else if (key === "innerHTML") {
                    element.innerHTML += this[key];
                } else if (key === "innerTEXT") {
                    this[key].forEach(textOrObj => {
                        if (typeof textOrObj === "object") {
                            element.appendChild(new element__html(textOrObj.tagName, textOrObj.attributs).create_elemet());
                        } else {
                            element.innerHTML += textOrObj;
                        };
                    });
                } else if (key === "childs") {
                    element.appendChild(this.childs.create_elemet());
                } else if (key === "clone") {

                } else {
                    element.setAttribute(key, this[key]);
                };
            };
        } else {
            console.log(false);
            return false;
        };
        return element;
    }
}

const jsp = new element__html("div", [["class", "nomDeLaClass"], ["innerTEXT", ["ddd",  {"tagName":"a", "href": "C:/Users/maxim/Documents/GitHub/Exercices/exos_js/test forms/css/style.css"}, "d$qmsld"]], ["sasa", "salut"]], ["div", [["class", "nomDeLaClass"], ["href", "C:/Users/maxim/Documents/GitHub/Exercices/exos_js/test forms/index.html"], ["sasa", "salut"]]])

console.log(jsp.create_elemet());


const addAttribute = () => {
    createElemet({
        'tagName': 'div',
        'class': 'attribute' + detectNumberOfAttributes,
        'innerHTML': `<p>Attribut</p><input name="attribute${detectNumberOfAttributes}" type="text"><p>Valeur de l'attribut</p><input name="value${detectNumberOfAttributes}" type="text">`
    })
}

const removeAttribute = () => {
    document.querySelector('#attributes').removeChild(document.querySelector('.attribute' + detectNumberOfAttributes));
    detectNumberOfAttributes--;
}


// https://stackoverflow.com/questions/41424994/how-to-add-a-div-between-two-divs-by-javascript

// const tagSubmitted = () =>  {

// }


// addAttribute();
// addAttribute();
// addAttribute();
// removeAttribute();
// ElemzntHTML.closest()










let submit = document.querySelector('#submit')
let inputTag = document.querySelector('#tag_name')
let optionsParent = document.querySelector('#dropdown')

let mot = []

inputTag.addEventListener('input', (event) => {
    if (event.data != null) {
        mot.push(event.data)
    } else {
        mot.splice(mot.lastIndexOf(), 1)
    }
    console.log(mot.join(""));
    if (mot.join('') === 'a') {
        console.log('oui');
    }
})



submit.addEventListener('click', (event) => {
    event.preventDefault();
    let inputTagName = document.querySelectorAll('.input');
    let objectData = {}
    objectData.tagName = inputTagName[0].value;
    objectData.id = inputTagName[1].value;
    objectData.class = inputTagName[2].value;
    objectData.innerHTML = inputTagName[3].value;

   
    let parentNodeSelection;

    if (inputTagName[4].value.includes(".")) {
        parentNodeSelection = `.${inputTagName[4].value.split('.')[1]}`
    } else if (inputTagName[4].value.includes("#")) {
        parentNodeSelection = `#${inputTagName[4].value.split('#')[1]}`
    } else {
        parentNodeSelection = `.${inputTagName[4].value}`
    }
    console.log(parentNodeSelection);
    
    let parenNode = document.querySelector(parentNodeSelection)
    parenNode.appendChild(createElemet(objectData))

    let optionClone = document.querySelectorAll('#dropdown option')[1].cloneNode(true)
    let elementName;
    if (objectData.class) {
        elementName = `${objectData.tagName}.${objectData.class}`
    } else {
        elementName = `${objectData.tagName}#${objectData.id}`
    }
    optionClone.setAttribute('value', elementName);
    optionClone.innerHTML = elementName;
    optionsParent.appendChild(optionClone)
    
})


                  ////////////////////////
                 // class plus poussée //
                ////////////////////////    


// const element__html = class {
//     constructor(tagName, attributs, childs) {
//         this.tagName = tagName
//         for (const key in attributs) {
//             this[attributs[key][0]] = attributs[key][1]
//         }
//         if (childs[0]) {
//             this.childs = []
//             childs.forEach(element => {
//                 if (element[0][2]) {
//                     this.childs.push(new element__html(element[0][0], element[0][1], element[0][2]))
//                 } else if (element[0][1]) {
//                     this.childs.push(new element__html(element[0][0], element[0][1]))
//                 } else {
//                     this.childs.push(new element__html(element[0][0]))
//                 }
//             });
            
//         }
//     }

//     create_elemet() {
//         let element;

//         if (this['tagName']) {
//             for (const key in this) {
//                 console.log(key);
//                 if (key === "tagName") {
//                     element = document.createElement(this.tagName);
//                 } else if (key === "innerHTML") {
//                     element.innerHTML += this[key];
//                 } else if (key === "innerTEXT") {
//                     this[key].forEach(textOrObj => {
//                         if (typeof textOrObj === "object") {
//                             element.appendChild(new element__html(textOrObj.tagName, textOrObj.attributs).create_elemet());
//                         } else {
//                             element.innerHTML += textOrObj;
//                         };
//                     });
//                 } else if (key === "childs") {
//                     element.appendChild(this.childs.create_elemet());
//                 } else if (key === "clone") {

//                 } else {
//                     element.setAttribute(key, this[key]);
//                 };
//             };
//         } else {
//             console.log(false);
//             return false;
//         };
//         return element;
//     }
// }
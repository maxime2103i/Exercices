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




// let x = 0;
// let more = document.querySelectorAll('.img_container_label img')[0];
// let less = document.querySelectorAll('.img_container_label img')[1];

// let innerPlaceholder = []

// for (let i = 1; i < 51; i++) {
//     if (i === 2) {innerPlaceholder.push(`${i}nd`)} else if (i === 3) {innerPlaceholder.push(`${i}rd`)} else {innerPlaceholder.push(`${i}th`)}
// }

// more.addEventListener('click', () => {
//     let labelClassName = document.querySelector('#class_name').cloneNode(true);
//     x++
//     labelClassName.setAttribute('id', `class_name${x}`)
//     labelClassName.setAttribute('placeholder', `Enter your ${innerPlaceholder[x]} class`)
//     more.parentNode.parentNode.insertBefore(labelClassName, more.parentNode);
// });

// less.addEventListener('click', () => {
//     if (x === 0) {
//         return
//     }
//     let labelClassName = document.querySelector(`#class_name${x}`)
//     x--
//     labelClassName.remove()
// });
// console.log();
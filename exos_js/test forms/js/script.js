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
let x = 0;
let more = document.querySelectorAll('.img_container_label img')[0];
let less = document.querySelectorAll('.img_container_label img')[1];

let innerPlaceholder = []

for (let i = 1; i < 51; i++) {
    let ii = i.toString().split('').pop();
    if (ii === '1') {
        innerPlaceholder.push(`${i}st`)
    } else if (ii === '2') {
        innerPlaceholder.push(`${i}nd`)
    } else if (ii === '3') {
        innerPlaceholder.push(`${i}rd`)
    } else {
        innerPlaceholder.push(`${i}th`)
    }
}

more.addEventListener('click', () => {
    let labelClassName = document.querySelector('#class_name').cloneNode(true);
    x++
    labelClassName.setAttribute('id', `class_name${x}`)
    labelClassName.setAttribute('placeholder', `Enter your ${innerPlaceholder[x]} class`)
    more.parentNode.parentNode.insertBefore(labelClassName, more.parentNode);
});

less.addEventListener('click', () => {
    if (x === 0) {
        return
    }
    let labelClassName = document.querySelector(`#class_name${x}`)
    x--
    labelClassName.remove()
});
console.log();
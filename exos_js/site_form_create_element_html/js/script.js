
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
    detectNumberOfAttributes++;
    createElemet({
        'tagName': 'div', 
        'class': 'attribute' + detectNumberOfAttributes,
        'innerHTML': '<p>Attribut</p><input name="attribute' + detectNumberOfAttributes + '" type="text"><p>Valeur de l\'attribut</p><input name="value' + detectNumberOfAttributes + '" type="text">',
        
        document.querySelector('#attributes')
    }
}

const removeAttribute = () => {
    document.querySelector('#attributes').removeChild(document.querySelector('.attribute' + detectNumberOfAttributes));
    detectNumberOfAttributes--;
}


// const tagSubmitted = () =>  {

// }


addAttribute();
addAttribute();
addAttribute();
removeAttribute();



// ElemzntHTML.closest()
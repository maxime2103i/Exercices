let tagsAllowed = ['id', 'class', 'role', 'innerText', 'innerHTML', 'data-ga-category', 'data-ga-action', 'data-ga-label', 'href'];
let detectNumberOfAttributes = document.querySelectorAll('attribute').length;
function insertTags(tagToInsert, attributesObject, nodeToApply, numberOfClones) {
  let newTag = document.createElement(tagToInsert);
  for (i = 0; i < Object.keys(attributesObject).length; i++) {
    if (!tagsAllowed.includes(Object.keys(attributesObject)[i])) {
      return false;
    }
  }
  
  for (attribute in attributesObject) {
    if (attribute === 'innerHTML' || attribute === 'innerText') {
      if (attribute === 'innerHTML') {
        newTag.innerHTML = attributesObject['innerHTML'];
      }
      if (attribute === 'innerText') {
        newTag.innerText = attributesObject['innerText'];
      }
    } else {
      newTag.setAttribute(attribute, attributesObject[attribute]);
    }
  }
  for (let i = 0; i < numberOfClones; i++) {
    let clonedNode = newTag.cloneNode(true);
    nodeToApply.appendChild(clonedNode);
  }
}


const addAttribute = () => {
  detectNumberOfAttributes++;
  insertTags('div', {
    class: 'attribute'+detectNumberOfAttributes,
    'innerHTML': 
    '<p>Attribut</p><input name="attribute'+detectNumberOfAttributes+'" type="text"><p>Valeur de l\'attribut</p><input name="value'+detectNumberOfAttributes+'" type="text">'
  }, document.querySelector('#attributes'), 1);
}

const removeAttribute = () => {
  document.querySelector('#attributes').removeChild(document.querySelector('.attribute'+detectNumberOfAttributes));
  detectNumberOfAttributes--;
}


// const tagSubmitted = () =>  {
  
// }


addAttribute();
addAttribute();
addAttribute();
removeAttribute();
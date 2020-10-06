let mot_a_verif = "salut";
let mot_vide = []
let key_pressed = []

for (let i = 0; i < mot_a_verif.length; i++) {
    mot_vide.push("_");
}


let mot = document.querySelector('.mot')

let x = 0;
let game = true;
let partie_du_pendu = [".poutre-droite", ".poutre", ".corde", ".tete", ".corps", ".bras-droit", ".bras-gauche", ".jambe-droite", ".jambe-gauche"];

const testkey = (key) => {
    if (game) {
        if (key_pressed.indexOf(key) === -1) {
            if (key.match(/^[a-zA-Z]+$/) && key.length <= 1) {
                var indices = [];
                key_pressed.push(key)

                for(var i = 0; i < mot_a_verif.length; i++) {
                    if (mot_a_verif[i] === key) indices.push(i);
                }

                if (indices[0] === undefined) {
                    document.querySelector(partie_du_pendu[x]).style.visibility = "visible";
                    x++;
                } else {
                    indices.forEach(element => {
                        mot_vide.splice(element, 1, key)
                    });
                }

                mot.innerHTML = mot_vide.join('')
                
                if (x === 9) {
                    game = false
                    mot.innerHTML += " Défaite"
                } else if (mot_vide.indexOf('_') === -1) {
                    game = false
                    mot.innerHTML += " Victoire"
                }
            }
        }
    }
};


document.addEventListener('keydown', (event) => {
    testkey(event.key)
})



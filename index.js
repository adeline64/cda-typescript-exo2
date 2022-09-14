/*
### Poupées russes
On veut écrire un programme simulant des poupées russes de différentes tailles.
Chaque poupée a une taille donnée, peut s'ouvrir ou se fermer, peut contenir une autre poupée et être contenue
dans une autre poupée.

Écrivez une classe PoupeeRusse contenant les méthodes suivantes :
- un constructeur
- ouvrir(): void : ouvre la poupée si elle n'est pas déjà ouverte et si elle ne se trouve pas à
l'intérieur d'une autre poupée
- fermer(): void : ferme la poupée si elle n'est pas déjà fermée et si elle ne se trouve pas à
l'intérieur d'une autre poupée
- placerDans(p: PoupeeRusse) : place la poupée courante dans la poupée p si c'est
possible. Il faut que la poupée courante soit fermée et ne soit pas déjà dans une autre poupée,
que la poupée p soit ouverte et ne contienne aucune poupée, et que p soit d'une taille supérieure
à la poupée courante.
- void sortirDe(p: PoupeeRusse) : sort la poupée courante de la poupée p si elle est dans p
et si p est ouverte.
*/
var PoupeeRusse = /** @class */ (function () {
    //constructor 
    function PoupeeRusse(taille, nom) {
        this.parent = undefined;
        this.enfant = undefined;
        this.isOpen = false;
        this.taille = taille;
        this.nom = nom;
    }
    PoupeeRusse.prototype.ouvrir = function () {
        console.log(this);
        if (this.isOpen === false && this.parent === undefined) {
            this.isOpen = true;
            console.log("la poupée est ouverte");
        }
    };
    PoupeeRusse.prototype.placerDans = function (p) {
        console.log(p);
        if (this.isOpen === false && this.parent === undefined && p.isOpen === true && p.enfant === undefined && p.taille > this.taille) {
            this.parent = p;
            p.enfant = this;
            console.log("la poupée entre dans une autre");
        }
    };
    PoupeeRusse.prototype.sortirDe = function (p) {
        console.log(p);
        if (p.isOpen === true && this === p.enfant) {
            this.parent = undefined;
            p.enfant = undefined;
            console.log("la poupée est sortie");
        }
    };
    PoupeeRusse.prototype.fermer = function () {
        console.log(this);
        if (this.isOpen === true && this.parent === undefined) {
            this.isOpen = false;
            console.log("la poupée est fermé");
        }
    };
    return PoupeeRusse;
}());
//creation poupée
var poupee1 = new PoupeeRusse(1, 'Adeline');
// console.log("voici la poupee " + poupee1.nom);
poupee1.ouvrir();
// console.log(poupee1.ouvrir());
var poupee2 = new PoupeeRusse(2, 'bob');
// console.log("voici la poupee " + poupee2.nom);
poupee1.ouvrir();
// console.log(poupee2.ouvrir());
poupee1.placerDans(poupee2);
// console.log(poupee1.placerDans(poupee2));
poupee1.sortirDe(poupee2);
// console.log(poupee1.sortirDe(poupee2));
poupee2.fermer();
// console.log(poupee2.fermer());
var poupee3 = new PoupeeRusse(3, "Anne");
// console.log("voici la poupee " + poupee3.nom);
poupee3.ouvrir();
// console.log(poupee3.ouvrir());
poupee2.placerDans(poupee3);
// console.log(poupee2.placerDans(poupee3));
poupee2.sortirDe(poupee3);
// console.log(poupee2.sortirDe(poupee3));
poupee3.fermer();
// console.log(poupee3.fermer());
poupee1.fermer();
// console.log("la première poupée est fermé " + poupee1.fermer());

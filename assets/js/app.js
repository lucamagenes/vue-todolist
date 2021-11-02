/*

stampare in pagina un item per ogni elemento contenuto in un array

ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista

predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

*/

const root = new Vue({
    el: '#root',
    data: {
        tasks: [
            'learn someting',
            'learn else',
            'learn someting else',
        ]
    },
    methods: {
        removeTask(i) {
            console.log('click remove');
            this.tasks.splice(i, 1);
        }
    }
})
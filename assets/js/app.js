/*

stampare in pagina un item per ogni elemento contenuto in un array

ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista

predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

*/

const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato',
        ],
        error: false,
    },
    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1);
        },
        addTask() {
            if (this.newTask.length != '' && this.newTask.length > 6) {
                this.tasks.push(this.newTask);
                this.error = false;
            } else {
                this.error = true;
            }
            this.newTask = '';
        }
    }
})
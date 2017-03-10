class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Create task');
    }

    get done() {
        return this._done === true ? 'Completed' : 'Not completed';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Ошибка! Укажите значениe true или false');
        }
    }
    
    complete() {
        this.done = true;
        console.log(`Task "${this.title}" completed`);
    }
    
    static getDefaultTitle() {
        return 'Zadacha';
    }

}

Task.count = 0;

let task = new Task('Clean the room');
// let task2 = new Task('Buy food');
// let task3 = new Task();

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);

// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);

// console.log(Task.count);

// task2.complete();
'use strict';
/**
 * Создаем шаблон с конструктором и св-ми.
 * Создаем метод, который будет принимать текст, 
 * а потом записывать его в св-во объекта.
 * Выводим данные в консоль.
 * Создаем шаблон с конструктором AttachedPost.
 * Инициализируем его с конструктором Post,
 * для избежания дублирования кода.
 * Наследуем шаблон конструктора Post в объект AttachedPost.
 * Создаем makeTextHighlighted, 
 * чтобы назначить highlighted значение true.
 * Выводим данные в консоль.
 */
class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit (text) {
        this.text = text;
    }
}
const post1 = new Post ('John', 'Lorem ipsum dolor sit amet', '11.08.20');
console.log (post1);
post1.edit ('Lorem');
console.log (post1);

class AttachedPost extends Post {
    constructor (author, text, date) {
        super (author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post2 = new AttachedPost('user', 'Lorem2 ipsum dolor sit amet', '11.08.20', 'dolor');
        console.log(post2);
        post2.makeTextHighlighted();
        post2.edit('Lorem');
        console.log(post2);
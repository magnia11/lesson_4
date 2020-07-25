'use strict';
/**
 * Создаем функцию конструктор.
 * Создаем прототип функцию, которая будет принимать текст, 
 * а потом записывать его в св-во объекта.
 * Выводим данные в консоль.
 * Создаем функцию конструктор AttachedPost.
 * Инициализируем ее с конструктором Post,
 * для избежания дублирования кода.
 * Наследуем прототип Post в объект AttachedPost.
 * Создаем прототип функцию makeTextHighlighted, 
 * чтобы назначить highlighted значение true.
 * Выводим данные в консоль.
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};

const post1 = new Post('John', 'Lorem ipsum dolor sit amet', '11.08.20');
console.log (post1);
post1.edit ('Lorem');
console.log (post1);

function AttachedPost(author, text, date) {
    Post.call (this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeHighlighted = function () {
    this.highlighted = true;
}

const post2 = new AttachedPost ('user', 'Lorem2 ipsum dolor sit amet', '11.08.20', 'dolor');
console.log (post2);
post2.makeHighlighted ();
post2.edit ('Lorem2');
console.log (post2);

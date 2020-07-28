"use strict";

const firstPlayer = {
    name: 'Baltasis',
    color: 'white'
}

const secondPlayer = {
    name: 'Juodasis',
    color: 'black'
}

const board = {
    selector: '#checkers',
    styleSelector: 'style',
    width: 8,
    height: 8,
    color: [firstPlayer.color, secondPlayer.color]
}
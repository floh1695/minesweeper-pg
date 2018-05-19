'use strict';

const stampit = require('stampit');

const Point = stampit()
  .props({ x: 0, y: 0 })
  .init(function({ x = this.x, y = this.y }) {
    this.x = x;
    this.y = y;
  });

const p1 = Point({ x: 1, y: 1 });
console.log(p1);


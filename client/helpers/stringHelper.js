﻿'use strict';

// TODO: Strip all but [a-zA-Z]

String.prototype.camelize = function () {
  return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) {
      return '';
    }// or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

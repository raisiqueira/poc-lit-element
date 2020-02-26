'use strict';
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', {value: raw});
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
var lit_element_1 = require('lit-element');
var JstButton = /** @class */ (function(_super) {
  __extends(JstButton, _super);
  function JstButton() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.disabled = false;
    return _this;
  }
  JstButton.prototype.render = function() {
    return lit_element_1.html(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ['<button ?disabled="', '"><slot></slot></button>'],
          ['<button ?disabled="', '"><slot></slot></button>']
        )),
      this.disabled
    );
  };
  __decorate(
    [lit_element_1.property({type: Boolean})],
    JstButton.prototype,
    'disabled'
  );
  JstButton = __decorate(
    [lit_element_1.customElement('jst-button')],
    JstButton
  );
  return JstButton;
})(lit_element_1.LitElement);
exports.JstButton = JstButton;
var templateObject_1;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/active_admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/active_admin.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/active_admin.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_active_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/active_admin */ "./app/javascript/stylesheets/active_admin.scss");
/* harmony import */ var _stylesheets_active_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_active_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activeadmin_activeadmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @activeadmin/activeadmin */ "./node_modules/@activeadmin/activeadmin/app/assets/javascripts/active_admin/base.js");
/* harmony import */ var _activeadmin_activeadmin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_activeadmin_activeadmin__WEBPACK_IMPORTED_MODULE_1__);
// Load Active Admin's styles into Webpacker,
// see `active_admin.scss` for customization.
//= require jquery-1.5.1-min
//= require jquery_ujs
//= require bootstrap-datepicker



/***/ }),

/***/ "./app/javascript/stylesheets/active_admin.scss":
/*!******************************************************!*\
  !*** ./app/javascript/stylesheets/active_admin.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./active_admin.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/active_admin.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@activeadmin/activeadmin/app/assets/javascripts/active_admin/base.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@activeadmin/activeadmin/app/assets/javascripts/active_admin/base.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Warning: This file is auto-generated, do not modify. Instead, make your changes in 'app/javascript/active_admin/' and run `yarn build`
 */
//= require jquery3
//= require jquery-ui/widgets/datepicker
//= require jquery-ui/widgets/dialog
//= require jquery-ui/widgets/sortable
//= require jquery-ui/widgets/tabs
//= require jquery-ui/widget
//= require jquery_ujs
//= require_self
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery-ui/ui/widgets/datepicker */ "./node_modules/jquery-ui/ui/widgets/datepicker.js"), __webpack_require__(/*! jquery-ui/ui/widgets/dialog */ "./node_modules/jquery-ui/ui/widgets/dialog.js"), __webpack_require__(/*! jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js"), __webpack_require__(/*! jquery-ui/ui/widgets/tabs */ "./node_modules/jquery-ui/ui/widgets/tabs.js"), __webpack_require__(/*! jquery-ui/ui/widget */ "./node_modules/jquery-ui/ui/widget.js"), __webpack_require__(/*! jquery-ujs */ "./node_modules/jquery-ujs/src/rails.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery-ui/ui/widgets/datepicker */ "./node_modules/jquery-ui/ui/widgets/datepicker.js"), __webpack_require__(/*! jquery-ui/ui/widgets/dialog */ "./node_modules/jquery-ui/ui/widgets/dialog.js"), __webpack_require__(/*! jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js"), __webpack_require__(/*! jquery-ui/ui/widgets/tabs */ "./node_modules/jquery-ui/ui/widgets/tabs.js"), __webpack_require__(/*! jquery-ui/ui/widget */ "./node_modules/jquery-ui/ui/widget.js"), __webpack_require__(/*! jquery-ujs */ "./node_modules/jquery-ujs/src/rails.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports) {
  "use strict";

  $.fn.serializeObject = function () {
    return this.serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  };

  $.ui.dialog.prototype._focusTabbable = function () {
    this.uiDialog.focus();
  };

  function ModalDialog(message, inputs, callback) {
    var html = '<form id="dialog_confirm" title="' + message + '"><ul>';

    for (var name in inputs) {
      var opts, wrapper;
      var type = inputs[name];

      if (/^(datepicker|checkbox|text|number)$/.test(type)) {
        wrapper = "input";
      } else if (type === "textarea") {
        wrapper = "textarea";
      } else if ($.isArray(type)) {
        var _ref = ["select", type, ""];
        wrapper = _ref[0];
        opts = _ref[1];
        type = _ref[2];
      } else {
        throw new Error("Unsupported input type: {" + name + ": " + type + "}");
      }

      var klass = type === "datepicker" ? type : "";
      html += "<li>\n      <label>" + (name.charAt(0).toUpperCase() + name.slice(1)) + "</label>\n      <" + wrapper + ' name="' + name + '" class="' + klass + '" type="' + type + '">' + (opts ? function () {
        var result = [];
        opts.forEach(function (v) {
          var $elem = $("<option></option>");

          if ($.isArray(v)) {
            $elem.text(v[0]).val(v[1]);
          } else {
            $elem.text(v);
          }

          result.push($elem.wrap("<div></div>").parent().html());
        });
        return result;
      }().join("") : "") + ("</" + wrapper + ">") + "</li>";
      var _ref2 = [];
      wrapper = _ref2[0];
      opts = _ref2[1];
      type = _ref2[2];
      klass = _ref2[3];
    }

    html += "</ul></form>";
    var form = $(html).appendTo("body");
    $("body").trigger("modal_dialog:before_open", [form]);
    form.dialog({
      modal: true,
      open: function open(_event, _ui) {
        $("body").trigger("modal_dialog:after_open", [form]);
      },
      dialogClass: "active_admin_dialog",
      buttons: {
        OK: function OK() {
          callback($(this).serializeObject());
          $(this).dialog("close");
        },
        Cancel: function Cancel() {
          $(this).dialog("close").remove();
        }
      }
    });
  }

  var onDOMReady = function onDOMReady() {
    $(".batch_actions_selector li a").off("click confirm:complete");
    $(".batch_actions_selector li a").on("click", function (event) {
      var _this = this;

      var message;
      event.stopPropagation();
      event.preventDefault();

      if (message = $(this).data("confirm")) {
        ModalDialog(message, $(this).data("inputs"), function (inputs) {
          $(_this).trigger("confirm:complete", inputs);
        });
      } else {
        $(this).trigger("confirm:complete");
      }
    });
    $(".batch_actions_selector li a").on("confirm:complete", function (event, inputs) {
      var val;

      if (val = JSON.stringify(inputs)) {
        $("#batch_action_inputs").removeAttr("disabled").val(val);
      } else {
        $("#batch_action_inputs").attr("disabled", "disabled");
      }

      $("#batch_action").val($(this).data("action"));
      $("#collection_selection").submit();
    });

    if ($(".batch_actions_selector").length && $(":checkbox.toggle_all").length) {
      if ($(".paginated_collection table.index_table").length) {
        $(".paginated_collection table.index_table").tableCheckboxToggler();
      } else {
        $(".paginated_collection").checkboxToggler();
      }

      $(document).on("change", ".paginated_collection :checkbox", function () {
        if ($(".paginated_collection :checkbox:checked").length && $(".dropdown_menu_list").children().length) {
          $(".batch_actions_selector").each(function () {
            $(this).aaDropdownMenu("enable");
          });
        } else {
          $(".batch_actions_selector").each(function () {
            $(this).aaDropdownMenu("disable");
          });
        }
      });
    }
  };

  $(document).ready(onDOMReady).on("page:load turbolinks:load", onDOMReady);

  var CheckboxToggler = function () {
    function CheckboxToggler(options, container) {
      this.options = options;
      this.container = container;

      this._init();

      this._bind();
    }

    var _proto = CheckboxToggler.prototype;

    _proto.option = function option(_key, _value) {};

    _proto._init = function _init() {
      if (!this.container) {
        throw new Error("Container element not found");
      } else {
        this.$container = $(this.container);
      }

      if (!this.$container.find(".toggle_all").length) {
        throw new Error('"toggle all" checkbox not found');
      } else {
        this.toggle_all_checkbox = this.$container.find(".toggle_all");
      }

      this.checkboxes = this.$container.find(":checkbox").not(this.toggle_all_checkbox);
    };

    _proto._bind = function _bind() {
      var _this = this;

      this.checkboxes.change(function (event) {
        return _this._didChangeCheckbox(event.target);
      });
      this.toggle_all_checkbox.change(function () {
        return _this._didChangeToggleAllCheckbox();
      });
    };

    _proto._didChangeCheckbox = function _didChangeCheckbox(_checkbox) {
      var numChecked = this.checkboxes.filter(":checked").length;
      var allChecked = numChecked === this.checkboxes.length;
      var someChecked = numChecked > 0 && numChecked < this.checkboxes.length;
      this.toggle_all_checkbox.prop({
        checked: allChecked,
        indeterminate: someChecked
      });
    };

    _proto._didChangeToggleAllCheckbox = function _didChangeToggleAllCheckbox() {
      var setting = this.toggle_all_checkbox.prop("checked");
      this.checkboxes.prop({
        checked: setting
      });
      return setting;
    };

    return CheckboxToggler;
  }();

  $.widget.bridge("checkboxToggler", CheckboxToggler);

  (function ($) {
    $(document).on("focus", "input.datepicker:not(.hasDatepicker)", function () {
      var input = $(this);

      if (input[0].type === "date") {
        return;
      }

      var defaults = {
        dateFormat: "yy-mm-dd"
      };
      var options = input.data("datepicker-options");
      input.datepicker($.extend(defaults, options));
    });
  })(jQuery);

  var DropdownMenu = function () {
    function DropdownMenu(options, element) {
      this.options = options;
      this.element = element;
      this.$element = $(this.element);
      var defaults = {
        fadeInDuration: 20,
        fadeOutDuration: 100,
        onClickActionItemCallback: null
      };
      this.options = $.extend(defaults, this.options);
      this.isOpen = false;
      this.$menuButton = this.$element.find(".dropdown_menu_button");
      this.$menuList = this.$element.find(".dropdown_menu_list_wrapper");

      this._buildMenuList();

      this._bind();
    }

    var _proto = DropdownMenu.prototype;

    _proto.open = function open() {
      this.isOpen = true;
      this.$menuList.fadeIn(this.options.fadeInDuration);

      this._position();

      return this;
    };

    _proto.close = function close() {
      this.isOpen = false;
      this.$menuList.fadeOut(this.options.fadeOutDuration);
      return this;
    };

    _proto.destroy = function destroy() {
      this.$element = null;
      return this;
    };

    _proto.isDisabled = function isDisabled() {
      return this.$menuButton.hasClass("disabled");
    };

    _proto.disable = function disable() {
      this.$menuButton.addClass("disabled");
    };

    _proto.enable = function enable() {
      this.$menuButton.removeClass("disabled");
    };

    _proto.option = function option(key, value) {
      if ($.isPlainObject(key)) {
        return this.options = $.extend(true, this.options, key);
      } else if (key != null) {
        return this.options[key];
      } else {
        return this.options[key] = value;
      }
    };

    _proto._buildMenuList = function _buildMenuList() {
      this.$nipple = $('<div class="dropdown_menu_nipple"></div>');
      this.$menuList.prepend(this.$nipple);
      this.$menuList.hide();
    };

    _proto._bind = function _bind() {
      var _this = this;

      $("body").click(function () {
        if (_this.isOpen) {
          _this.close();
        }
      });
      this.$menuButton.click(function () {
        if (!_this.isDisabled()) {
          if (_this.isOpen) {
            _this.close();
          } else {
            _this.open();
          }
        }

        return false;
      });
    };

    _proto._position = function _position() {
      this.$menuList.css("top", this.$menuButton.position().top + this.$menuButton.outerHeight() + 10);
      var button_left = this.$menuButton.position().left;
      var button_center = this.$menuButton.outerWidth() / 2;
      var button_right = button_left + button_center * 2;
      var menu_center = this.$menuList.outerWidth() / 2;
      var nipple_center = this.$nipple.outerWidth() / 2;
      var window_right = $(window).width();
      var centered_menu_left = button_left + button_center - menu_center;
      var centered_menu_right = button_left + button_center + menu_center;

      if (centered_menu_left < 0) {
        this.$menuList.css("left", button_left);
        this.$nipple.css("left", button_center - nipple_center);
      } else if (centered_menu_right > window_right) {
        this.$menuList.css("right", window_right - button_right);
        this.$nipple.css("right", button_center - nipple_center);
      } else {
        this.$menuList.css("left", centered_menu_left);
        this.$nipple.css("left", menu_center - nipple_center);
      }
    };

    return DropdownMenu;
  }();

  $.widget.bridge("aaDropdownMenu", DropdownMenu);

  var onDOMReady$1 = function onDOMReady() {
    return $(".dropdown_menu").aaDropdownMenu();
  };

  $(document).ready(onDOMReady$1).on("page:load turbolinks:load", onDOMReady$1);

  function hasTurbolinks() {
    return typeof Turbolinks !== "undefined" && Turbolinks.supported;
  }

  function turbolinksVisit(params) {
    var path = [window.location.pathname, "?", toQueryString(params)].join("");
    Turbolinks.visit(path);
  }

  function queryString() {
    return (window.location.search || "").replace(/^\?/, "");
  }

  function queryStringToParams() {
    var decode = function decode(value) {
      return decodeURIComponent((value || "").replace(/\+/g, "%20"));
    };

    return queryString().split("&").map(function (pair) {
      return pair.split("=");
    }).map(function (_ref) {
      var key = _ref[0],
          value = _ref[1];
      return {
        name: decode(key),
        value: decode(value)
      };
    });
  }

  function toQueryString(params) {
    var encode = function encode(value) {
      return encodeURIComponent(value || "");
    };

    return params.map(function (_ref2) {
      var name = _ref2.name,
          value = _ref2.value;
      return [encode(name), encode(value)];
    }).map(function (pair) {
      return pair.join("=");
    }).join("&");
  }

  var Filters = function () {
    function Filters() {}

    Filters._clearForm = function _clearForm(event) {
      var regex = /^(q\[|q%5B|q%5b|page|utf8|commit)/;
      var params = queryStringToParams().filter(function (_ref) {
        var name = _ref.name;
        return !name.match(regex);
      });
      event.preventDefault();

      if (hasTurbolinks()) {
        turbolinksVisit(params);
      } else {
        window.location.search = toQueryString(params);
      }
    };

    Filters._disableEmptyInputFields = function _disableEmptyInputFields(event) {
      var params = $(this).find(":input").filter(function (i, input) {
        return input.value === "";
      }).prop({
        disabled: true
      }).end().serializeArray();

      if (hasTurbolinks()) {
        event.preventDefault();
        turbolinksVisit(params);
      }
    };

    Filters._setSearchType = function _setSearchType() {
      $(this).siblings("input").prop({
        name: "q[" + this.value + "]"
      });
    };

    return Filters;
  }();

  (function ($) {
    $(document).on("click", ".clear_filters_btn", Filters._clearForm).on("submit", ".filter_form", Filters._disableEmptyInputFields).on("change", ".filter_form_field.select_and_search select", Filters._setSearchType);
  })(jQuery);

  $(function () {
    $(document).on("click", "a.button.has_many_remove", function (event) {
      event.preventDefault();
      var parent = $(this).closest(".has_many_container");
      var to_remove = $(this).closest("fieldset");
      recompute_positions(parent);
      parent.trigger("has_many_remove:before", [to_remove, parent]);
      to_remove.remove();
      return parent.trigger("has_many_remove:after", [to_remove, parent]);
    });
    $(document).on("click", "a.button.has_many_add", function (event) {
      var before_add;
      event.preventDefault();
      var parent = $(this).closest(".has_many_container");
      parent.trigger(before_add = $.Event("has_many_add:before"), [parent]);

      if (!before_add.isDefaultPrevented()) {
        var index = parent.data("has_many_index") || parent.children("fieldset").length - 1;
        parent.data({
          has_many_index: ++index
        });
        var regex = new RegExp($(this).data("placeholder"), "g");
        var html = $(this).data("html").replace(regex, index);
        var fieldset = $(html).insertBefore(this);
        recompute_positions(parent);
        return parent.trigger("has_many_add:after", [fieldset, parent]);
      }
    });
    $(document).on("change", '.has_many_container[data-sortable] :input[name$="[_destroy]"]', function () {
      recompute_positions($(this).closest(".has_many"));
    });
    init_sortable();
    $(document).on("has_many_add:after", ".has_many_container", init_sortable);
  });

  var init_sortable = function init_sortable() {
    var elems = $(".has_many_container[data-sortable]:not(.ui-sortable)");
    elems.sortable({
      items: "> fieldset",
      handle: "> ol > .handle",
      start: function start(ev, ui) {
        ui.item.css({
          opacity: .3
        });
      },
      stop: function stop(ev, ui) {
        ui.item.css({
          opacity: 1
        });
        recompute_positions($(this));
      }
    });
    elems.each(recompute_positions);
  };

  var recompute_positions = function recompute_positions(parent) {
    parent = parent instanceof jQuery ? parent : $(this);
    var input_name = parent.data("sortable");
    var position = parseInt(parent.data("sortable-start") || 0, 10);
    parent.children("fieldset").each(function () {
      var destroy_input = $(this).find("> ol > .input > :input[name$='[_destroy]']");
      var sortable_input = $(this).find("> ol > .input > :input[name$='[" + input_name + "]']");

      if (sortable_input.length) {
        sortable_input.val(destroy_input.is(":checked") ? "" : position++);
      }
    });
  };

  var PerPage = function () {
    function PerPage(element) {
      this.element = element;
    }

    var _proto = PerPage.prototype;

    _proto.update = function update() {
      var params = queryStringToParams().filter(function (_ref) {
        var name = _ref.name;
        return name != "per_page" || name != "page";
      });
      params.push({
        name: "per_page",
        value: this.element.value
      });

      if (hasTurbolinks()) {
        turbolinksVisit(params);
      } else {
        window.location.search = toQueryString(params);
      }
    };

    PerPage._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data("perPage");

        if (!data) {
          data = new PerPage(this);
          $this.data("perPage", data);
        }

        if (config === "update") {
          data[config]();
        }
      });
    };

    return PerPage;
  }();

  (function ($) {
    $(document).on("change", ".pagination_per_page > select", function (_event) {
      PerPage._jQueryInterface.call($(this), "update");
    });
    $.fn["perPage"] = PerPage._jQueryInterface;
    $.fn["perPage"].Constructor = PerPage;
  })(jQuery);

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var TableCheckboxToggler = function (_CheckboxToggler) {
    _inheritsLoose(TableCheckboxToggler, _CheckboxToggler);

    function TableCheckboxToggler() {
      return _CheckboxToggler.apply(this, arguments) || this;
    }

    var _proto = TableCheckboxToggler.prototype;

    _proto._bind = function _bind() {
      var _this = this;

      _CheckboxToggler.prototype._bind.apply(this, arguments);

      this.$container.find("tbody td").click(function (event) {
        if (event.target.type !== "checkbox") {
          _this._didClickCell(event.target);
        }
      });
    };

    _proto._didChangeCheckbox = function _didChangeCheckbox(checkbox) {
      _CheckboxToggler.prototype._didChangeCheckbox.apply(this, arguments);

      $(checkbox).parents("tr").toggleClass("selected", checkbox.checked);
    };

    _proto._didChangeToggleAllCheckbox = function _didChangeToggleAllCheckbox() {
      this.$container.find("tbody tr").toggleClass("selected", _CheckboxToggler.prototype._didChangeToggleAllCheckbox.apply(this, arguments));
    };

    _proto._didClickCell = function _didClickCell(cell) {
      $(cell).parent("tr").find(":checkbox").click();
    };

    return TableCheckboxToggler;
  }(CheckboxToggler);

  $.widget.bridge("tableCheckboxToggler", TableCheckboxToggler);

  var onDOMReady$2 = function onDOMReady() {
    return $("#active_admin_content .tabs").tabs();
  };

  $(document).ready(onDOMReady$2).on("page:load turbolinks:load", onDOMReady$2);

  function modal_dialog(message, inputs, callback) {
    console.warn("ActiveAdmin.modal_dialog is deprecated in favor of ActiveAdmin.ModalDialog, please update usage.");
    return ModalDialog(message, inputs, callback);
  }

  exports.ModalDialog = ModalDialog;
  exports.modal_dialog = modal_dialog;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/active_admin.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/active_admin.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Active Admin CSS */\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\nhtml {\n  font-size: 100.01%; }\nbody {\n  font-size: 75%;\n  font-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif; }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  color: #5E6469; }\nh1 img, h2 img, h3 img, h4 img, h5 img, h6 img {\n    margin: 0; }\nh1 {\n  font-size: 3em;\n  line-height: 1;\n  margin-bottom: 0.5em; }\nh2 {\n  font-size: 2em;\n  margin-bottom: 0.75em; }\nh3 {\n  font-size: 1.5em;\n  line-height: 1;\n  margin-bottom: 1em; }\nh4 {\n  font-size: 1.2em;\n  line-height: 1.25;\n  margin-bottom: 1.25em; }\nh5 {\n  font-size: 1em;\n  font-weight: bold;\n  margin-bottom: 1.5em; }\nh6 {\n  font-size: 1em;\n  font-weight: bold; }\np {\n  margin: 0 0 1.5em; }\np .left {\n    margin: 1.5em 1.5em 1.5em 0;\n    padding: 0; }\np .right {\n    margin: 1.5em 0 1.5em 1.5em;\n    padding: 0; }\n.left {\n  float: left !important; }\n.right {\n  float: right !important; }\nblockquote {\n  margin: 1.5em;\n  color: #666;\n  font-style: italic; }\nstrong, dfn {\n  font-weight: bold; }\nem, dfn {\n  font-style: italic; }\nsup, sub {\n  line-height: 0; }\nabbr,\nacronym {\n  border-bottom: 1px dotted #666; }\naddress {\n  margin: 0 0 1.5em;\n  font-style: italic; }\ndel {\n  color: #666; }\npre {\n  margin: 1.5em 0;\n  white-space: pre; }\npre, code, tt {\n  font: 1em 'andale mono', 'lucida console', monospace;\n  line-height: 1.5; }\nli ul,\nli ol {\n  margin: 0; }\nul, ol {\n  margin: 0 1.5em 1.5em 0;\n  padding-left: 1.5em; }\nul {\n  list-style-type: disc; }\nol {\n  list-style-type: decimal; }\ndl {\n  margin: 0 0 1.5em 0; }\ndl dt {\n  font-weight: bold; }\ndd {\n  margin-left: 1.5em; }\ntable {\n  margin-bottom: 1.4em;\n  width: 100%; }\nth {\n  font-weight: bold; }\nthead th {\n  background: #c3d9ff; }\nth, td, caption {\n  padding: 4px 10px 4px 5px; }\n.small {\n  font-size: .8em;\n  margin-bottom: 1.875em;\n  line-height: 1.875em; }\n.large {\n  font-size: 1.2em;\n  line-height: 2.5em;\n  margin-bottom: 1.25em; }\n.hide {\n  display: none; }\n.quiet {\n  color: #666; }\n.loud {\n  color: #000; }\n.highlight {\n  background: #ff0; }\n.added {\n  background: #060;\n  color: #fff; }\n.removed {\n  background: #900;\n  color: #fff; }\n.first {\n  margin-left: 0;\n  padding-left: 0; }\n.last {\n  margin-right: 0;\n  padding-right: 0; }\n.top {\n  margin-top: 0;\n  padding-top: 0; }\n.bottom {\n  margin-bottom: 0;\n  padding-bottom: 0; }\n#header {\n  background-color: #6a7176;\n  background-image: linear-gradient(180deg, #6a7176, #4d5256);\n  border-bottom: 1px solid #44484b;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n  text-shadow: #000 0 1px 0;\n  display: table;\n  height: 20px;\n  width: 100%;\n  overflow: visible;\n  position: inherit;\n  padding: 5px 0;\n  z-index: 900; }\n#header h1 {\n    display: table-cell;\n    vertical-align: middle;\n    white-space: nowrap;\n    color: #cdcdcd;\n    margin-right: 20px;\n    margin-bottom: 0px;\n    padding: 3px 30px 0 30px;\n    font-size: 1.3em;\n    font-weight: normal;\n    line-height: 1.2; }\n#header h1 a {\n      text-decoration: none; }\n#header h1 a:hover {\n        color: #fff; }\n#header h1 img {\n      position: relative;\n      top: -2px; }\n#header a, #header a:link {\n    color: #cdcdcd; }\n#header .header-item {\n    top: 2px;\n    position: relative;\n    height: 20px; }\n#header ul.tabs {\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n    margin: 0;\n    padding: 0; }\n#header ul.tabs li {\n      /* Hover on li, display the ul */ }\n#header ul.tabs li:hover > ul {\n        display: block; }\n#header ul.tabs > li {\n      display: inline-block;\n      margin-right: 4px;\n      margin-top: 5px;\n      margin-bottom: 5px;\n      font-size: 1.0em;\n      position: relative;\n      /* Drop down menus */ }\n#header ul.tabs > li a {\n        text-decoration: none;\n        padding: 6px 10px 4px 10px;\n        position: relative;\n        border-radius: 10px; }\n#header ul.tabs > li.current > a {\n        background: #7b8389;\n        color: #fff; }\n#header ul.tabs > li.has_nested > a {\n        background: url(\"data:image/png;base64,R0lGODlhBwAEAKIAAL6+vry8vIiIiJWVlf///3t7ewAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==\") no-repeat calc(100% - 7px) 50%;\n        padding-right: 20px; }\n#header ul.tabs > li.has_nested.current > a {\n        background: #7b8389 url(\"data:image/png;base64,R0lGODlhBwAEAKIAAG1tbWxsbElJSVBQUP///0JCQgAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==\") no-repeat calc(100% - 7px) 50%;\n        padding-right: 20px; }\n#header ul.tabs > li:hover > a {\n        background: #7b8389;\n        color: #fff; }\n#header ul.tabs > li.has_nested:hover > a {\n        border-radius: 0;\n        border-top-right-radius: 10px;\n        border-top-left-radius: 10px;\n        border-bottom: 5px solid #7b8389;\n        background: #7b8389 url(\"data:image/png;base64,R0lGODlhBwAEAKIAAG1tbWxsbElJSVBQUP///0JCQgAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==\") no-repeat calc(100% - 7px) 50%;\n        z-index: 1020; }\n#header ul.tabs > li ul {\n        background: #7b8389;\n        border-top-right-radius: 10px;\n        border-top-left-radius: 0;\n        border-bottom-right-radius: 10px;\n        border-bottom-left-radius: 10px;\n        box-shadow: 0 1px 3px #444;\n        position: absolute;\n        width: 120%;\n        min-width: 175px;\n        max-width: calc(100% + 20px);\n        margin-top: 5px;\n        float: left;\n        display: none;\n        padding: 3px 0px 5px 0;\n        list-style: none;\n        z-index: 1010; }\n#header ul.tabs > li ul li {\n          position: relative;\n          margin: 0px; }\n#header ul.tabs > li ul li a {\n            background: none;\n            display: block; }\n#header ul.tabs > li ul li a:hover {\n              color: #fff;\n              background: none; }\n#header ul.tabs > li ul li.current a {\n            border-radius: 0; }\n#header ul.tabs > li ul li.has_nested > a {\n            background: url(\"data:image/gif;base64,R0lGODlhBAAHAKECAKqqqszMzPkVFfkVFSH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAIALAAAAAAEAAcAAAIJlA0XKbH9nmAFADs=\") no-repeat calc(100% - 7px) 55%;\n            padding-right: 20px; }\n#header ul.tabs > li ul li.has_nested:hover > a {\n            background: url(\"data:image/gif;base64,R0lGODlhBAAHAMIEAG1tbWxsbElJSVBQUPkVFfkVFfkVFfkVFSH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAEAAcAAAMKGKqy02G8OGeACQA7\") no-repeat calc(100% - 7px) 55%;\n            color: #fff; }\n#header ul.tabs > li ul li ul {\n            border-top-right-radius: 10px;\n            border-top-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n            border-bottom-left-radius: 10px;\n            margin-top: 0;\n            top: -3px;\n            left: 100%;\n            /* Create an invisible backdrop that adds 8px margin around the dropdown menu or submenu\n               that maintains the hover. This makes it much easier to navigate to submenus in\n               particular without losing hover accientally, especially near rounded corners. */ }\n#header ul.tabs > li ul li ul:after {\n              content: \"\";\n              display: block;\n              position: absolute;\n              top: -8px;\n              left: -8px;\n              height: calc(100% + 16px);\n              width: calc(100% + 16px);\n              z-index: -2; }\n#header #tabs {\n    width: 100%; }\n#header #utility_nav {\n    color: #aaa;\n    display: table-cell;\n    white-space: nowrap;\n    margin: 0;\n    padding: 0;\n    padding-right: 26px;\n    text-align: right; }\n#header #utility_nav a {\n      text-decoration: none; }\n#header #utility_nav a:hover {\n      color: #fff; }\n#header #utility_nav li {\n      display: inline; }\nform {\n  /* Reset margins & Padding */\n  /* Nested Fieldsets and Legends */\n  /* Text Fields */\n  /* semantic_errors */\n  /* Buttons */ }\nform ul, form ol, form li, form fieldset, form legend, form input, form textarea, form select, form p {\n    margin: 0;\n    padding: 0; }\nform ol, form ul {\n    list-style: none; }\nform fieldset {\n    border: 0;\n    padding: 10px 0;\n    margin-bottom: 20px; }\nform fieldset.inputs {\n      background: #f4f4f4;\n      border-radius: 4px;\n      box-shadow: inset 0 1px 4px #ddd; }\nform fieldset legend {\n      width: 100%; }\nform fieldset legend span {\n        display: block;\n        background-color: #efefef;\n        background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n        text-shadow: #fff 0 1px 0;\n        border: solid 1px #cdcdcd;\n        border-color: #d4d4d4;\n        border-top-color: #e6e6e6;\n        border-right-color: #d4d4d4;\n        border-bottom-color: #cdcdcd;\n        border-left-color: #d4d4d4;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n        font-size: 1em;\n        font-weight: bold;\n        line-height: 18px;\n        margin-bottom: 0.5em;\n        color: #5E6469;\n        padding: 5px 10px 3px 10px; }\nform fieldset ol > li {\n      padding: 10px; }\nform fieldset ol > li label {\n        display: block;\n        width: 20%;\n        float: left;\n        font-size: 1.0em;\n        font-weight: bold;\n        color: #5E6469; }\nform fieldset ol > li label abbr {\n          border: none;\n          color: #aaa; }\nform fieldset ol > li.has_many_container {\n      padding: 20px 10px; }\nform fieldset ol > li.has_many_container h3 {\n        font-size: 12px;\n        font-weight: bold; }\nform fieldset ol > li.has_many_container .has_many_fields {\n        margin: 10px 0; }\nform fieldset ol > li > li label {\n      line-height: 100%;\n      padding-top: 0; }\nform fieldset ol > li > li label input {\n        line-height: 100%;\n        vertical-align: middle;\n        margin-top: -0.1em; }\nform .has_many_fields {\n    position: relative; }\nform .has_many_container .handle {\n    position: absolute;\n    top: calc(50% - 3em / 2);\n    right: 2px;\n    padding: 0;\n    cursor: move; }\nform .has_many_container.ui-sortable .has_many_container {\n    margin-right: 2em; }\nform .ui-sortable input[type=text], form .ui-sortable input[type=password], form .ui-sortable input[type=email], form .ui-sortable input[type=number], form .ui-sortable input[type=url], form .ui-sortable input[type=tel], form .ui-sortable textarea {\n    width: calc(80% - 22px - 2em - 1px); }\nform fieldset > ol > li fieldset {\n    position: relative;\n    padding: 0;\n    margin-bottom: 0; }\nform fieldset > ol > li fieldset:not(.inputs) ol {\n      float: left;\n      width: 74%;\n      margin: 0;\n      padding: 0 0 0 20%; }\nform fieldset > ol > li fieldset:not(.inputs) ol li {\n        padding: 0;\n        border: 0; }\nform fieldset > ol > li fieldset.inputs ol {\n      float: left;\n      width: 100%;\n      margin: 0; }\nform input[type=text],\n  form input[type=password],\n  form input[type=email],\n  form input[type=number],\n  form input[type=url],\n  form input[type=tel],\n  form input[type=date],\n  form input[type=time],\n  form textarea {\n    width: calc(80% - 22px);\n    border: 1px solid #c9d0d6;\n    border-radius: 3px;\n    font-size: 0.95em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    outline: none;\n    padding: 8px 10px 7px; }\nform input[type=text]:focus,\n    form input[type=password]:focus,\n    form input[type=email]:focus,\n    form input[type=number]:focus,\n    form input[type=url]:focus,\n    form input[type=tel]:focus,\n    form input[type=date]:focus,\n    form input[type=time]:focus,\n    form textarea:focus {\n      border: 1px solid #99a2aa;\n      box-shadow: 0 0 4px #99a2aa; }\nform input[type=date] {\n    width: calc(100% - 22px); }\nform fieldset > ol > li {\n    /* Hints */\n    /* Date and Time Fields */\n    /* Check Boxes or Radio fields */\n    /* Boolean Field */\n    /* Hidden fields */\n    /* Errors */ }\nform fieldset > ol > li p.inline-hints {\n      font-size: 0.95em;\n      font-style: italic;\n      color: #666;\n      margin: 0.5em 0 0 20%; }\nform fieldset > ol > li.date_select fieldset ol li, form fieldset > ol > li.time_select fieldset ol li, form fieldset > ol > li.datetime_select fieldset ol li {\n      float: left;\n      width: auto;\n      margin: 0 0.5em 0 0; }\nform fieldset > ol > li.date_select fieldset ol li label, form fieldset > ol > li.time_select fieldset ol li label, form fieldset > ol > li.datetime_select fieldset ol li label {\n        display: none; }\nform fieldset > ol > li.date_select fieldset ol li input, form fieldset > ol > li.time_select fieldset ol li input, form fieldset > ol > li.datetime_select fieldset ol li input {\n        display: inline;\n        margin: 0;\n        padding: 0; }\nform fieldset > ol > li.check_boxes fieldset ol, form fieldset > ol > li.radio fieldset ol {\n      margin-bottom: -0.6em; }\nform fieldset > ol > li.check_boxes fieldset ol li, form fieldset > ol > li.radio fieldset ol li {\n        margin: 0.1em 0 0.5em 0; }\nform fieldset > ol > li.check_boxes fieldset ol li label, form fieldset > ol > li.radio fieldset ol li label {\n          float: none;\n          width: 100%; }\nform fieldset > ol > li.check_boxes fieldset ol li label input, form fieldset > ol > li.radio fieldset ol li label input {\n            margin-right: 0.2em; }\nform fieldset > ol > li.boolean {\n      min-height: 1.1em; }\nform fieldset > ol > li.boolean label {\n        width: 80%;\n        padding-left: 20%;\n        padding-right: 10px;\n        text-transform: none !important;\n        font-weight: normal; }\nform fieldset > ol > li.boolean label input {\n          margin: 0 0.5em 0 0.2em; }\nform fieldset > ol > li.hidden {\n      padding: 0; }\nform fieldset > ol > li p.inline-errors {\n      color: #932419;\n      font-weight: bold;\n      margin: 0.3em 0 0 20%; }\nform fieldset > ol > li ul.errors {\n      color: #932419;\n      margin: 0.5em 0 0 20%;\n      list-style: square; }\nform fieldset > ol > li ul.errors li {\n        padding: 0;\n        border: none;\n        display: list-item; }\nform fieldset > ol > li.error input[type=text], form fieldset > ol > li.error input[type=password], form fieldset > ol > li.error input[type=email], form fieldset > ol > li.error input[type=number], form fieldset > ol > li.error input[type=url], form fieldset > ol > li.error input[type=tel], form fieldset > ol > li.error textarea {\n      border: 1px solid #932419; }\nform ul.errors {\n    background: #fae6e4;\n    border-radius: 4px;\n    color: #932419;\n    font-weight: bold;\n    margin-bottom: 10px;\n    padding: 10px;\n    list-style: square; }\nform ul.errors li {\n      margin-left: 15px;\n      padding: 0;\n      border: none;\n      display: list-item; }\nform input[type=submit], form input[type=button], form button {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #838a90;\n    background-image: linear-gradient(180deg, #838a90, #414549);\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n    border: solid 1px #484e53;\n    border-color: #484e53;\n    border-top-color: #616a71;\n    border-right-color: #484e53;\n    border-bottom-color: #363b3f;\n    border-left-color: #484e53;\n    color: #efefef;\n    cursor: pointer; }\nform input[type=submit].disabled, form input[type=button].disabled, form button.disabled {\n      opacity: 0.5;\n      cursor: default; }\nform input[type=submit]:not(.disabled):hover, form input[type=button]:not(.disabled):hover, form button:not(.disabled):hover {\n      background-color: #8b9297;\n      background-image: linear-gradient(180deg, #8b9297, #484d51); }\nform input[type=submit]:not(.disabled):active, form input[type=button]:not(.disabled):active, form button:not(.disabled):active {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n      background-color: #71797f;\n      background-image: linear-gradient(180deg, #71797f, #35383b); }\nform .buttons, form .actions {\n    margin-top: 15px; }\nform .buttons input[type=submit], form .buttons input[type=button], form .buttons button, form .actions input[type=submit], form .actions input[type=button], form .actions button {\n      margin-right: 10px; }\nform .actions .create_another {\n    float: none;\n    margin-bottom: 10px; }\nform .actions .create_another label {\n      float: none;\n      display: inline; }\nform fieldset.buttons li, form fieldset.actions li {\n    float: left;\n    padding: 0; }\nform fieldset.buttons li.cancel a, form fieldset.actions li.cancel a {\n      border-radius: 200px;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 1.0em;\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      line-height: 12px;\n      margin-right: 3px;\n      padding: 7px 16px 6px;\n      text-decoration: none;\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n      border: solid 1px #c7c7c7;\n      border-color: #c7c7c7;\n      border-top-color: #d3d3d3;\n      border-right-color: #c7c7c7;\n      border-bottom-color: #c2c2c2;\n      border-left-color: #c7c7c7;\n      text-shadow: #fff 0 1px 0;\n      color: #5E6469; }\nform fieldset.buttons li.cancel a.disabled, form fieldset.actions li.cancel a.disabled {\n        opacity: 0.5;\n        cursor: default; }\nform fieldset.buttons li.cancel a:not(.disabled):hover, form fieldset.actions li.cancel a:not(.disabled):hover {\n        background-color: #FFFFFF;\n        background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\nform fieldset.buttons li.cancel a:not(.disabled):active, form fieldset.actions li.cancel a:not(.disabled):active {\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n        border-color: #b9b9b9;\n        border-top-color: #c2c2c2;\n        border-right-color: #b9b9b9;\n        border-bottom-color: #b7b7b7;\n        border-left-color: #b9b9b9;\n        background-color: #F3F3F3;\n        background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.sidebar_section label {\n  display: block;\n  text-transform: uppercase;\n  color: #5E6469;\n  font-size: 0.9em;\n  font-weight: bold; }\n.sidebar_section select {\n  width: 240px; }\n.sidebar_section input[type=text], .sidebar_section input[type=password], .sidebar_section input[type=email], .sidebar_section input[type=url], .sidebar_section input[type=tel], .sidebar_section textarea {\n  width: 220px; }\nform.filter_form .filter_form_field {\n  margin-bottom: 10px;\n  clear: both; }\nform.filter_form .filter_form_field.select_and_search input[type=text] {\n    margin-left: 16px;\n    width: 88px; }\nform.filter_form .filter_form_field.select_and_search select {\n    width: 108px; }\nform.filter_form .filter_form_field.filter_check_boxes label {\n    margin-bottom: 3px; }\nform.filter_form .filter_form_field.filter_check_boxes fieldset {\n    margin-bottom: 0px;\n    padding-bottom: 0px; }\nform.filter_form .filter_form_field.filter_check_boxes .check_boxes_wrapper label {\n    font-weight: normal;\n    margin-bottom: 3px;\n    text-transform: none;\n    font-size: 1.0em; }\nform.filter_form .filter_form_field.filter_check_boxes .check_boxes_wrapper label input {\n      vertical-align: baseline; }\nform.filter_form .filter_form_field.filter_date_range input[type=text] {\n    box-sizing: border-box;\n    width: 114px; }\nform.filter_form .filter_form_field.filter_date_range input[type=text] + input {\n      margin-left: 6px; }\nform.filter_form a.clear_filters_btn {\n  border-radius: 200px;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n  background-color: #FFFFFF;\n  background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n  border: solid 1px #c7c7c7;\n  border-color: #c7c7c7;\n  border-top-color: #d3d3d3;\n  border-right-color: #c7c7c7;\n  border-bottom-color: #c2c2c2;\n  border-left-color: #c7c7c7;\n  text-shadow: #fff 0 1px 0;\n  color: #5E6469; }\nform.filter_form a.clear_filters_btn.disabled {\n    opacity: 0.5;\n    cursor: default; }\nform.filter_form a.clear_filters_btn:not(.disabled):hover {\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\nform.filter_form a.clear_filters_btn:not(.disabled):active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n    border-color: #b9b9b9;\n    border-top-color: #c2c2c2;\n    border-right-color: #b9b9b9;\n    border-bottom-color: #b7b7b7;\n    border-left-color: #b9b9b9;\n    background-color: #F3F3F3;\n    background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.comments .active_admin_comment {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  max-width: 700px; }\n.comments .active_admin_comment:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0; }\n.comments .active_admin_comment .active_admin_comment_meta {\n    width: 130px;\n    float: left;\n    overflow: hidden;\n    font-size: 0.9em;\n    color: #767e84; }\n.comments .active_admin_comment .active_admin_comment_meta .active_admin_comment_author {\n      font-size: 1.2em;\n      font-weight: bold;\n      margin: 0;\n      color: #5E6469; }\n.comments .active_admin_comment .active_admin_comment_body {\n    margin-left: 150px; }\n.comments form.active_admin_comment {\n  margin: 0;\n  padding: 0;\n  margin-left: 150px; }\n.comments form.active_admin_comment fieldset.inputs {\n    margin: 0;\n    padding: 0;\n    background: none;\n    box-shadow: none; }\n.comments form.active_admin_comment li {\n    padding: 0; }\n.comments form.active_admin_comment fieldset.buttons {\n    padding: 0;\n    margin-top: 5px; }\nbody.logged_in .flash {\n  background-color: #f7f1d3;\n  background-image: linear-gradient(180deg, #f7f1d3, #f5edc5);\n  text-shadow: #fafafa 0 1px 0;\n  border-bottom: 1px solid #eee098;\n  color: #cb9810;\n  font-weight: bold;\n  font-size: 1.1em;\n  line-height: 1.0em;\n  padding: 13px 30px 11px;\n  position: relative; }\nbody.logged_in .flash.flash_notice {\n    background-color: #dce9dd;\n    background-image: linear-gradient(180deg, #dce9dd, #ccdfcd);\n    border-bottom: 1px solid #adcbaf;\n    color: #416347; }\nbody.logged_in .flash.flash_error {\n    background-color: #f5e4e4;\n    background-image: linear-gradient(180deg, #f5e4e4, #f1dcdc);\n    border-bottom: 1px solid #e0c2c0;\n    color: #b33c33; }\nbody.logged_out .flash {\n  box-shadow: none;\n  text-shadow: #fff 0 1px 0;\n  background: none;\n  color: #666;\n  font-weight: bold;\n  line-height: 1.0em;\n  padding: 0;\n  margin-bottom: 8px; }\n.ui-datepicker {\n  background: #fff;\n  background-clip: padding-box;\n  color: #fff;\n  display: none;\n  margin-top: 2px;\n  padding: 0;\n  text-align: center;\n  width: 160px; }\n.ui-datepicker a {\n    text-decoration: none; }\n.ui-datepicker a:hover {\n      cursor: pointer; }\n.ui-datepicker .ui-datepicker-header {\n    height: 14px;\n    background-color: #6a7176;\n    background-image: linear-gradient(180deg, #6a7176, #4d5256);\n    border-bottom: 1px solid #44484b;\n    padding: 12px 5px 7px 4px;\n    margin: 0px 0px 2px 2px;\n    width: 147px;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    position: relative;\n    z-index: 2000; }\n.ui-datepicker .ui-datepicker-header:before {\n      content: \"\";\n      position: absolute;\n      right: 45%;\n      top: -6px;\n      width: 0px;\n      height: 0px;\n      border-left: 8.5px solid rgba(0, 0, 0, 0);\n      border-right: 8.5px solid rgba(0, 0, 0, 0);\n      border-bottom: 10px solid #676e73; }\n.ui-datepicker .ui-datepicker-header .ui-datepicker-title {\n      text-shadow: #000 0 1px 0;\n      color: #fff;\n      display: block;\n      font-size: 1.1em;\n      font-weight: bold;\n      line-height: 0.8em;\n      text-align: center; }\n.ui-datepicker .ui-datepicker-header .ui-datepicker-title .ui-datepicker-month {\n        margin: -4px 0 0 0; }\n.ui-datepicker .ui-datepicker-header .ui-datepicker-title .ui-datepicker-year {\n        margin: -4px 0 0 0; }\n.ui-datepicker .ui-datepicker-header a {\n      color: #fff;\n      display: block;\n      height: 19px;\n      margin-top: -4px;\n      width: 10px; }\n.ui-datepicker .ui-datepicker-header a.ui-datepicker-prev {\n        float: left;\n        width: 0;\n        height: 0;\n        margin: 0px 0px 0px 4px;\n        border-top: 5px solid transparent;\n        border-right: 5px solid white;\n        border-bottom: 5px solid transparent; }\n.ui-datepicker .ui-datepicker-header a.ui-datepicker-next {\n        float: right;\n        width: 0;\n        height: 0;\n        margin: 0px 4px 0px 0px;\n        border-top: 5px solid transparent;\n        border-left: 5px solid white;\n        border-bottom: 5px solid transparent; }\n.ui-datepicker .ui-datepicker-header a span {\n        display: none; }\n.ui-datepicker table.ui-datepicker-calendar {\n    border-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.26);\n    background-color: #f4f4f4;\n    border: solid 1px #63686e;\n    left: 2px;\n    margin-bottom: 0px;\n    position: relative;\n    top: -2px;\n    width: 156px; }\n.ui-datepicker table.ui-datepicker-calendar td, .ui-datepicker table.ui-datepicker-calendar th {\n      padding: 0px;\n      text-align: center; }\n.ui-datepicker table.ui-datepicker-calendar thead th {\n      background-color: #dbdddf;\n      color: #333333;\n      font-weight: normal;\n      font-size: 0.8em;\n      padding-top: 1px; }\n.ui-datepicker table.ui-datepicker-calendar tbody {\n      color: #666666; }\n.ui-datepicker table.ui-datepicker-calendar tbody td {\n        border: none;\n        height: 24px;\n        width: 22px; }\n.ui-datepicker table.ui-datepicker-calendar tbody td a {\n          border-radius: 3px;\n          color: #666666;\n          font-weight: bold;\n          font-size: 0.85em;\n          padding: 4px; }\n.ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-active {\n            background-color: #5a5f64;\n            color: #fff; }\n.ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-active.ui-state-hover {\n              background-color: #5a5f64;\n              color: #fff; }\n.ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-hover {\n            background-color: #eceef0; }\n.ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-highlight {\n            background-color: #dbdddf; }\ntable tr td {\n  vertical-align: top; }\ntable tr th {\n  text-align: left; }\ntable.index_table {\n  width: 100%;\n  margin-bottom: 10px;\n  border: 0;\n  border-spacing: 0; }\ntable.index_table th {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px;\n    border-right: none;\n    padding-left: 12px;\n    padding-right: 12px; }\ntable.index_table th a, table.index_table th a:link, table.index_table th a:visited {\n      color: #5E6469;\n      text-decoration: none;\n      display: block;\n      white-space: nowrap; }\ntable.index_table th.sortable a {\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAABGCAYAAAAAVo4aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAH5JREFUeNpi3LhlOwMU1AExGxDXwARYoHQLEFdD2cxAXAliMKFJgEAFEHfBJEHGMKLhMpgkTsAEdch/NNwCk2xCdiEQtML4LEgCf6EubUX3Cgh0oNvJ+P//f7wOGpUclRwYSZb41CyidNbB8giNM+9oXhmVHHm5bJjUSAABBgDKKiwMMUxPwgAAAABJRU5ErkJggg==\") no-repeat 0 4px;\n      padding-left: 13px; }\ntable.index_table th.sorted-asc a {\n      background-position: 0 -27px; }\ntable.index_table th.sorted-desc a {\n      background-position: 0 -56px; }\ntable.index_table th.sorted-asc, table.index_table th.sorted-desc {\n      background-color: #e2e2e2;\n      background-image: linear-gradient(180deg, #e2e2e2, #d2d4d6); }\ntable.index_table th:last-child {\n      border-right: solid 1px #d4d4d4; }\ntable.index_table tr.even td {\n    background: #f4f5f5; }\ntable.index_table tr.selected td {\n    background: #d9e4ec; }\ntable.index_table td {\n    padding: 10px 12px 8px 12px;\n    border-bottom: 1px solid #e8e8e8;\n    vertical-align: top; }\n.panel_contents table {\n  margin-top: 5px; }\n.panel_contents table th {\n    padding-top: 10px;\n    background: none;\n    color: #5E6469;\n    box-shadow: none;\n    text-shadow: #fff 0 1px 0;\n    text-transform: uppercase;\n    border-bottom: 1px solid #ccc; }\n.panel_contents table tr.odd td {\n    background: #ecedee; }\n.panel_contents table tr.even td {\n    background: #f4f5f5; }\n.attributes_table {\n  overflow: hidden; }\n.attributes_table table col.even {\n  background: #f4f5f5; }\n.attributes_table table col.odd {\n  background: #ecedee; }\n.attributes_table table th, .attributes_table table td {\n  padding: 8px 12px 6px 12px;\n  vertical-align: top;\n  border-bottom: 1px solid #e8e8e8; }\n.attributes_table table th {\n  box-shadow: none;\n  background: none;\n  width: 150px;\n  font-size: 0.9em;\n  padding-left: 0;\n  text-transform: uppercase;\n  color: #5E6469;\n  text-shadow: #fff 0 1px 0; }\n.attributes_table table td .empty {\n  color: #bbb;\n  font-size: 0.8em;\n  text-transform: uppercase;\n  letter-spacing: 0.2em; }\n.sidebar_section .attributes_table th {\n  width: 50px; }\n#collection_selection_toggle_panel:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0; }\n#collection_selection_toggle_panel > .resource_selection_toggle_cell {\n  float: left; }\n.ui-widget-overlay {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001; }\n.ui-dialog {\n  position: fixed;\n  z-index: 1002;\n  background: #f4f4f4;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 4px #ddd;\n  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px; }\n.ui-dialog .ui-dialog-titlebar {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px; }\n.ui-dialog .ui-dialog-titlebar span {\n      font-size: 1.1em; }\n.ui-dialog ul {\n    list-style-type: none; }\n.ui-dialog li {\n    margin: 10px 0; }\n.ui-dialog label {\n    margin-right: 10px; }\n.ui-dialog .ui-dialog-buttonpane, .ui-dialog form {\n    padding: 7px 15px 13px; }\n.ui-dialog .ui-dialog-buttonpane button {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #838a90;\n    background-image: linear-gradient(180deg, #838a90, #414549);\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n    border: solid 1px #484e53;\n    border-color: #484e53;\n    border-top-color: #616a71;\n    border-right-color: #484e53;\n    border-bottom-color: #363b3f;\n    border-left-color: #484e53;\n    color: #efefef; }\n.ui-dialog .ui-dialog-buttonpane button.disabled {\n      opacity: 0.5;\n      cursor: default; }\n.ui-dialog .ui-dialog-buttonpane button:not(.disabled):hover {\n      background-color: #8b9297;\n      background-image: linear-gradient(180deg, #8b9297, #484d51); }\n.ui-dialog .ui-dialog-buttonpane button:not(.disabled):active {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n      background-color: #71797f;\n      background-image: linear-gradient(180deg, #71797f, #35383b); }\n.ui-dialog .ui-dialog-buttonpane button:last-child {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469; }\n.ui-dialog .ui-dialog-buttonpane button:last-child.disabled {\n      opacity: 0.5;\n      cursor: default; }\n.ui-dialog .ui-dialog-buttonpane button:last-child:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n.ui-dialog .ui-dialog-buttonpane button:last-child:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.active_admin_dialog.ui-dialog .ui-dialog-titlebar-close {\n  display: none; }\n.blank_slate_container {\n  clear: both;\n  text-align: center; }\n.blank_slate_container .blank_slate {\n    border-radius: 3px;\n    border: 1px dashed #DADADA;\n    color: #AAA;\n    display: inline-block;\n    font-size: 1.2em;\n    font-weight: bold;\n    padding: 14px 25px;\n    text-align: center; }\n.blank_slate_container .blank_slate small {\n      display: block;\n      font-size: 0.9em;\n      font-weight: normal; }\n.admin_dashboard .blank_slate_container .blank_slate {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n.with_sidebar .blank_slate_container .blank_slate {\n  margin-top: 80px; }\n.breadcrumb {\n  display: block;\n  font-size: 0.9em;\n  font-weight: normal;\n  line-height: 1.0em;\n  margin-bottom: 12px;\n  text-transform: uppercase; }\n.breadcrumb a, .breadcrumb a:link, .breadcrumb a:visited, .breadcrumb a:active {\n    color: #8a949e;\n    text-decoration: none; }\n.breadcrumb a:hover {\n    text-decoration: underline; }\n.breadcrumb .breadcrumb_sep {\n    margin: 0 2px;\n    color: #aab2ba; }\n.dropdown_menu {\n  display: inline; }\n.dropdown_menu .dropdown_menu_button {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469;\n    position: relative;\n    padding-right: 22px !important;\n    cursor: pointer; }\n.dropdown_menu .dropdown_menu_button.disabled {\n      opacity: 0.5;\n      cursor: default; }\n.dropdown_menu .dropdown_menu_button:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n.dropdown_menu .dropdown_menu_button:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.dropdown_menu .dropdown_menu_button:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 3px 3px 0;\n      border-style: solid;\n      border-color: #FFF transparent;\n      right: 12px;\n      top: 45%; }\n.dropdown_menu .dropdown_menu_button:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 3px 3px 0;\n      border-style: solid;\n      border-color: #777 transparent;\n      right: 12px;\n      top: 45%; }\n.dropdown_menu .dropdown_menu_nipple {\n    content: \"\";\n    position: absolute;\n    top: -6px;\n    display: block;\n    width: 0;\n    height: 0;\n    border-width: 0 6px 6px;\n    border-style: solid;\n    border-color: #545a5e transparent;\n    z-index: 100; }\n.dropdown_menu .dropdown_menu_nipple:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 0 5px 5px;\n      border-style: solid;\n      border-color: #838a90 transparent;\n      left: -5px;\n      top: 1px; }\n.dropdown_menu .dropdown_menu_nipple:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 0 5px 5px;\n      border-style: solid;\n      border-color: #686e74 transparent;\n      left: -5px;\n      top: 2px; }\n.dropdown_menu .dropdown_menu_list_wrapper {\n    display: inline-block;\n    position: absolute;\n    background-color: white;\n    padding: 2px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0 1px 3px, #838a90 0px 1px 0px 0px inset;\n    background-color: #5E6469;\n    background-color: #686e74;\n    background-image: linear-gradient(180deg, #686e74, #52575c);\n    border: solid 1px #464a4e;\n    border-top-color: #545a5e;\n    border-bottom-color: #35383b;\n    border-radius: 4px;\n    z-index: 2000;\n    display: none; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list {\n      display: block;\n      background-color: #FFF;\n      border: solid 1px #464a4e;\n      box-shadow: #6a7176 0px 1px 0px 0px;\n      border-radius: 3px;\n      margin: 0;\n      overflow: hidden;\n      padding: 8px;\n      list-style-type: none;\n      padding: 0; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li {\n        display: block;\n        border-bottom: solid 1px #ebebeb;\n        box-sizing: border-box; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li a {\n          display: block;\n          box-sizing: padding-box;\n          font-size: 0.95em;\n          font-weight: bold;\n          padding: 7px 16px 5px;\n          text-decoration: none;\n          text-align: center;\n          white-space: nowrap; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li a:hover {\n            background-color: #75a1c2;\n            background-image: linear-gradient(180deg, #75a1c2, #608cb4);\n            text-shadow: #5a83aa 0 1px 0;\n            color: #FFF; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li a:active {\n            background-color: #608cb4;\n            background-image: linear-gradient(180deg, #608cb4, #75a1c2);\n            color: #FFF; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li:first-child a {\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li:last-child {\n          border: none; }\n.dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li:last-child a {\n            border-bottom-left-radius: 2px;\n            border-bottom-right-radius: 2px; }\na.member_link {\n  margin-right: 7px;\n  white-space: nowrap; }\na.button, a:link.button, a:visited.button, input[type=submit], input[type=button], button {\n  border-radius: 200px;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n  background-color: #838a90;\n  background-image: linear-gradient(180deg, #838a90, #414549);\n  text-shadow: #000 0 1px 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n  border: solid 1px #484e53;\n  border-color: #484e53;\n  border-top-color: #616a71;\n  border-right-color: #484e53;\n  border-bottom-color: #363b3f;\n  border-left-color: #484e53;\n  color: #efefef; }\na.button.disabled, a:link.button.disabled, a:visited.button.disabled, input[type=submit].disabled, input[type=button].disabled, button.disabled {\n    opacity: 0.5;\n    cursor: default; }\na.button:not(.disabled):hover, a:link.button:not(.disabled):hover, a:visited.button:not(.disabled):hover, input[type=submit]:not(.disabled):hover, input[type=button]:not(.disabled):hover, button:not(.disabled):hover {\n    background-color: #8b9297;\n    background-image: linear-gradient(180deg, #8b9297, #484d51); }\na.button:not(.disabled):active, a:link.button:not(.disabled):active, a:visited.button:not(.disabled):active, input[type=submit]:not(.disabled):active, input[type=button]:not(.disabled):active, button:not(.disabled):active {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n    background-color: #71797f;\n    background-image: linear-gradient(180deg, #71797f, #35383b); }\ntable.index_grid td {\n  border: none;\n  background: none;\n  padding: 0 20px 20px 0;\n  margin: 0; }\n.columns {\n  clear: both;\n  padding: 0; }\n.columns .column {\n    float: left; }\na, a:link, a:visited {\n  color: #38678b;\n  text-decoration: underline; }\na:hover {\n  text-decoration: none; }\n.paginated_collection_contents {\n  clear: both; }\n.pagination {\n  float: right;\n  font-size: 0.9em;\n  margin-left: 10px; }\n.pagination a {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469; }\n.pagination a.disabled {\n      opacity: 0.5;\n      cursor: default; }\n.pagination a:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n.pagination a:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.pagination span.page.current {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #838a90;\n    background-image: linear-gradient(180deg, #838a90, #414549);\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n    border: solid 1px #484e53;\n    border-color: #484e53;\n    border-top-color: #616a71;\n    border-right-color: #484e53;\n    border-bottom-color: #363b3f;\n    border-left-color: #484e53;\n    color: #efefef; }\n.pagination span.page.current.disabled {\n      opacity: 0.5;\n      cursor: default; }\n.pagination span.page.current:not(.disabled):hover {\n      background-color: #8b9297;\n      background-image: linear-gradient(180deg, #8b9297, #484d51); }\n.pagination span.page.current:not(.disabled):active {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n      background-color: #71797f;\n      background-image: linear-gradient(180deg, #71797f, #35383b); }\n.pagination a, .pagination span.page.current {\n    border-radius: 0px;\n    margin-right: 4px;\n    padding: 2px 5px; }\n.pagination_information {\n  float: right;\n  margin-bottom: 5px;\n  color: #b3bcc1; }\n.pagination_information b {\n    color: #5c6469; }\n.download_links {\n  float: left; }\n.pagination_per_page {\n  float: right;\n  margin-left: 4px; }\n.pagination_per_page select {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469;\n    border-radius: 0px;\n    padding: 1px 5px; }\n.pagination_per_page select.disabled {\n      opacity: 0.5;\n      cursor: default; }\n.pagination_per_page select:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n.pagination_per_page select:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.comments .pagination {\n  float: left;\n  margin-bottom: 30px; }\n.comments .pagination_information {\n  float: left;\n  color: #000; }\n.section, .panel {\n  background: #f4f4f4;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 4px #ddd;\n  margin-bottom: 20px; }\n.section > h3, .panel > h3 {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px; }\n.section > h3 .header_action, .panel > h3 .header_action {\n      float: right; }\n.section > div, .panel > div {\n    padding: 3px 15px 15px 15px; }\n.section hr, .panel hr {\n    border: none;\n    border-bottom: 1px solid #E8E8E8; }\n.sidebar_section {\n  background: #f4f4f4;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 4px #ddd;\n  margin-bottom: 20px; }\n.sidebar_section > h3 {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px; }\n.sidebar_section > h3 .header_action {\n      float: right; }\n.sidebar_section > div {\n    padding: 3px 15px 15px 15px; }\n.sidebar_section hr {\n    border: none;\n    border-bottom: 1px solid #E8E8E8; }\n.columns {\n  margin-bottom: 10px; }\n.scopes li .count {\n  color: #8e979e;\n  font-weight: normal;\n  font-size: 0.9em;\n  line-height: 10px; }\n.scopes li:first-child a {\n  margin-left: 10px; }\n.status_tag {\n  background: #cacaca;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  padding: 3px 5px 2px 5px;\n  font-size: 0.8em; }\n.status_tag.yes {\n    background: #6090DB; }\n.status_tag.no {\n    background: grey; }\n.table_tools {\n  margin-bottom: 16px; }\n.table_tools:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0; }\n.table_tools .dropdown_menu {\n  float: left; }\na.table_tools_button, .table_tools .dropdown_menu_button {\n  border-radius: 200px;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n  background-color: #FFFFFF;\n  background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n  border: solid 1px #c7c7c7;\n  border-color: #c7c7c7;\n  border-top-color: #d3d3d3;\n  border-right-color: #c7c7c7;\n  border-bottom-color: #c2c2c2;\n  border-left-color: #c7c7c7;\n  text-shadow: #fff 0 1px 0;\n  color: #5E6469;\n  background-color: #FFFFFF;\n  background-image: linear-gradient(180deg, #FFFFFF, #F0F0F0);\n  border-color: #d0d0d0;\n  border-top-color: #d9d9d9;\n  border-right-color: #d0d0d0;\n  border-bottom-color: #c5c5c5;\n  border-left-color: #d0d0d0;\n  font-size: 0.9em;\n  padding: 4px 14px 4px;\n  margin: 0; }\na.table_tools_button.disabled, .table_tools .dropdown_menu_button.disabled {\n    opacity: 0.5;\n    cursor: default; }\na.table_tools_button:not(.disabled):hover, .table_tools .dropdown_menu_button:not(.disabled):hover {\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\na.table_tools_button:not(.disabled):active, .table_tools .dropdown_menu_button:not(.disabled):active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n    border-color: #b9b9b9;\n    border-top-color: #c2c2c2;\n    border-right-color: #b9b9b9;\n    border-bottom-color: #b7b7b7;\n    border-left-color: #b9b9b9;\n    background-color: #F3F3F3;\n    background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\na.table_tools_button:not(.disabled):hover, .table_tools .dropdown_menu_button:not(.disabled):hover {\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #F6F6F6); }\na.table_tools_button:not(.disabled):active, .table_tools .dropdown_menu_button:not(.disabled):active {\n    border-color: #c8c8c8;\n    border-top-color: #d7d7d7;\n    border-right-color: #c8c8c8;\n    border-bottom-color: #c3c3c3;\n    border-left-color: #c8c8c8;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17) inset;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E8E8E8); }\n.table_tools_segmented_control {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n.table_tools_segmented_control li {\n    float: left; }\n.table_tools_segmented_control li a {\n      border-width: 1px .5px 1px .5px;\n      border-radius: 0; }\n.table_tools_segmented_control li:first-child a {\n      border-left-width: 1px;\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px; }\n.table_tools_segmented_control li:last-child a {\n      border-right-width: 1px;\n      border-top-right-radius: 12px;\n      border-bottom-right-radius: 12px; }\n.table_tools_segmented_control li.selected a {\n      background-color: #F0F0F0;\n      background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD);\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1) inset;\n      cursor: default; }\n.table_tools_segmented_control li.selected a:hover {\n        background-color: #F0F0F0;\n        background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD); }\n.indexes {\n  float: right; }\n.indexes li .count {\n    color: #8e979e;\n    font-weight: normal;\n    font-size: 0.9em;\n    line-height: 10px; }\n.unsupported_browser {\n  padding: 10px 30px;\n  color: #211e14;\n  background-color: #fae692;\n  background-color: #feefae;\n  background-image: linear-gradient(180deg, #feefae, #fae692);\n  border-bottom: 1px solid #b3a569; }\n.unsupported_browser h1 {\n    font-size: 13px;\n    font-weight: bold; }\n.unsupported_browser p {\n    margin-bottom: 0.5em; }\n.ui-tabs-nav {\n  list-style: none;\n  display: block;\n  width: auto;\n  margin-bottom: -12px;\n  padding-left: 0;\n  overflow: auto;\n  margin-left: 15px; }\n.ui-tabs-nav li {\n    display: block;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    float: left; }\n.ui-tabs-nav li:first-child a {\n      border-left-width: 1px;\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px; }\n.ui-tabs-nav li:last-child a {\n      border-right-width: 1px;\n      border-top-right-radius: 12px;\n      border-bottom-right-radius: 12px; }\n.ui-tabs-nav li a {\n      border-radius: 200px;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 1.0em;\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      line-height: 12px;\n      margin-right: 3px;\n      padding: 7px 16px 6px;\n      text-decoration: none;\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n      border: solid 1px #c7c7c7;\n      border-color: #c7c7c7;\n      border-top-color: #d3d3d3;\n      border-right-color: #c7c7c7;\n      border-bottom-color: #c2c2c2;\n      border-left-color: #c7c7c7;\n      text-shadow: #fff 0 1px 0;\n      color: #5E6469;\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F0F0F0);\n      border-color: #d0d0d0;\n      border-top-color: #d9d9d9;\n      border-right-color: #d0d0d0;\n      border-bottom-color: #c5c5c5;\n      border-left-color: #d0d0d0;\n      text-decoration: none;\n      border-radius: 0;\n      border-width: 1px .5px 1px .5px;\n      margin-right: 0;\n      padding: 4px 14px 4px; }\n.ui-tabs-nav li a.disabled {\n        opacity: 0.5;\n        cursor: default; }\n.ui-tabs-nav li a:not(.disabled):hover {\n        background-color: #FFFFFF;\n        background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n.ui-tabs-nav li a:not(.disabled):active {\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n        border-color: #b9b9b9;\n        border-top-color: #c2c2c2;\n        border-right-color: #b9b9b9;\n        border-bottom-color: #b7b7b7;\n        border-left-color: #b9b9b9;\n        background-color: #F3F3F3;\n        background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n.ui-tabs-nav li a:not(.disabled):hover {\n        background-color: #FFFFFF;\n        background-image: linear-gradient(180deg, #FFFFFF, #F6F6F6); }\n.ui-tabs-nav li.ui-tabs-active a {\n      cursor: default;\n      background-color: #F0F0F0;\n      background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD);\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1) inset; }\n.ui-tabs-nav li.ui-tabs-active a a:hover {\n        background-color: #F0F0F0;\n        background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD); }\n.tab-content {\n  border: 1px solid #D3D3D3;\n  padding: 15px;\n  padding-top: 30px;\n  text-align: left; }\nbody.logged_out {\n  background: #e8e9ea; }\nbody.logged_out #content_wrapper {\n    width: 500px;\n    margin: 70px auto; }\nbody.logged_out #content_wrapper #active_admin_content {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n      background: #fff;\n      padding: 13px 30px; }\nbody.logged_out h2 {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px;\n    background-color: #6a7176;\n    background-image: linear-gradient(180deg, #6a7176, #4d5256);\n    border-bottom: 1px solid #44484b;\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n    border: none;\n    color: #fff;\n    margin: -13px -30px 20px -30px; }\nbody.logged_out #login {\n    /* Login Form */ }\nbody.logged_out #login form fieldset {\n      box-shadow: none;\n      background: none;\n      padding: 0;\n      margin-bottom: 0; }\nbody.logged_out #login form fieldset li {\n        padding: 10px 0; }\nbody.logged_out #login form fieldset input[type=text], body.logged_out #login form fieldset input[type=email], body.logged_out #login form fieldset input[type=password] {\n        width: 70%; }\nbody.logged_out #login form fieldset.buttons {\n        margin-left: 20%; }\nbody.logged_out #login a {\n      float: right;\n      margin-top: -32px; }\n#footer {\n  padding: 30px 30px;\n  font-size: 0.8em;\n  clear: both; }\n#footer p {\n    padding-top: 10px; }\n#index_footer {\n  padding-top: 5px;\n  text-align: right;\n  font-size: 0.85em; }\n.index_content {\n  clear: both; }\n#wrapper {\n  width: 100%; }\n.index #wrapper {\n  display: table; }\n#active_admin_content {\n  margin: 0;\n  padding: 30px; }\n#active_admin_content #main_content_wrapper {\n    float: left;\n    width: 100%; }\n#active_admin_content #main_content_wrapper #main_content {\n      margin-right: 300px; }\n#active_admin_content.without_sidebar #main_content_wrapper #main_content {\n    margin-right: 0; }\n#active_admin_content #sidebar {\n    float: left;\n    width: 270px;\n    margin-left: -270px; }\n#title_bar {\n  background-color: #efefef;\n  background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n  text-shadow: #fff 0 1px 0;\n  border: solid 1px #cdcdcd;\n  border-color: #d4d4d4;\n  border-top-color: #e6e6e6;\n  border-right-color: #d4d4d4;\n  border-bottom-color: #cdcdcd;\n  border-left-color: #d4d4d4;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 18px;\n  margin-bottom: 0.5em;\n  color: #5E6469;\n  padding: 5px 10px 3px 10px;\n  box-sizing: border-box;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n  display: table;\n  border-bottom-color: #EEE;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  padding: 10px 30px;\n  z-index: 800; }\n#title_bar:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0; }\n#title_bar #titlebar_left, #title_bar #titlebar_right {\n    height: 50px;\n    vertical-align: middle;\n    display: table-cell; }\n#title_bar #titlebar_right {\n    text-align: right; }\n#title_bar h2 {\n    margin: 0;\n    padding: 0;\n    font-size: 2.6em;\n    line-height: 100%;\n    font-weight: bold; }\n#title_bar .action_items span.action_item > a, #title_bar .action_items span.action_item > .dropdown_menu > a {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469;\n    padding: 12px 17px 10px;\n    margin: 0px; }\n#title_bar .action_items span.action_item > a.disabled, #title_bar .action_items span.action_item > .dropdown_menu > a.disabled {\n      opacity: 0.5;\n      cursor: default; }\n#title_bar .action_items span.action_item > a:not(.disabled):hover, #title_bar .action_items span.action_item > .dropdown_menu > a:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n#title_bar .action_items span.action_item > a:not(.disabled):active, #title_bar .action_items span.action_item > .dropdown_menu > a:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\nbody {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-size: 72%;\n  background: #FFF;\n  color: #323537; }\n", "",{"version":3,"sources":["/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/_base.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/_normalize.scss","active_admin.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/_typography.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_variables.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/_header.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_gradients.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_shadows.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_rounded.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/_forms.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_sections.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_utilities.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_typography.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/mixins/_buttons.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_comments.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_flash_messages.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_date_picker.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_tables.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_batch_actions.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_modal_dialog.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_blank_slates.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_breadcrumbs.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_dropdown_menu.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_buttons.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_grid.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_links.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_pagination.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_panels.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_columns.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_scopes.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_status_tags.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_table_tools.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_index_list.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_unsupported_browser.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/components/_tabs.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/pages/_logged_out.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/structure/_footer.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/structure/_main_structure.scss","/home/vlad/Downloads/Hotels/node_modules/@activeadmin/activeadmin/src/scss/structure/_title_bar.scss"],"names":[],"mappings":"AAAA,qBAAA;ACAA,2EAAA;AAEA;+ECC+E;ADE/E;;;;ECGE;ADGF;EACE,iBAAiB;EAAE,MAAA;EACnB,0BAA0B;EAAE,MAAA;EAC5B,8BAA8B;EAAE,MAAA,EAAO;AAGzC;+ECC+E;ADE/E;;ECCE;ADGF;EACE,SAAS,EAAA;AAGX;;ECDE;ADKF;;;;;;EAME,cAAc,EAAA;AAGhB;;;ECFE;ADOF;EACE,cAAc;EACd,gBAAgB,EAAA;AAGlB;+ECN+E;ADS/E;;;ECLE;ADUF;;;EAEO,MAAA;EACL,cAAc,EAAA;AAGhB;;ECPE;ADWF;EACE,gBAAgB,EAAA;AAGlB;;;ECRE;ADaF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;AAG5B;;;ECPE;ADYF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;AAGzB;+ECT+E;ADY/E;;;ECRE;ADaF;EACE,6BAA6B;EAAE,MAAA;EAC/B,qCAAqC;EAAE,MAAA,EAAO;AAGhD;;;ECRE;ADaF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,yCAAiC;UAAjC,iCAAiC;EAAE,MAAA,EAAO;AAG5C;;ECRE;ADYF;;EAEE,oBAAoB,EAAA;AAGtB;;ECVE;ADcF;;EAEE,mBAAmB,EAAA;AAGrB;;;ECXE;ADgBF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;AAGzB;;ECZE;ADgBF;EACE,kBAAkB,EAAA;AAGpB;;ECdE;ADkBF;EACE,sBAAsB;EACtB,WAAW,EAAA;AAGb;;EChBE;ADoBF;EACE,cAAc,EAAA;AAGhB;;;ECjBE;ADsBF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;AAG1B;EACE,eAAe,EAAA;AAGjB;EACE,WAAW,EAAA;AAGb;+ECvB+E;AD0B/E;;ECvBE;AD2BF;;EAEE,qBAAqB,EAAA;AAGvB;;ECzBE;AD6BF;EACE,aAAa;EACb,SAAS,EAAA;AAGX;;EC3BE;AD+BF;EACE,kBAAkB,EAAA;AAGpB;;EC7BE;ADiCF;EACE,gBAAgB,EAAA;AAGlB;+EChC+E;ADmC/E;;;EC/BE;ADoCF;;;;;EAKE,uBAAuB;EAAE,MAAA;EACzB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;AAGpB;;;EC7BE;ADkCF;;EACQ,MAAA;EACN,iBAAiB,EAAA;AAGnB;;;EC9BE;ADmCF;;EACS,MAAA;EACP,oBAAoB,EAAA;AAGtB;;;;EC9BE;ADoCF;;;;EAIE,0BAA0B;EAAE,MAAA,EAAO;AAGrC;;ECjCE;ADqCF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;AAGZ;;ECnCE;ADuCF;;;;EAIE,8BAA8B,EAAA;AAGhC;;ECrCE;ADyCF;EACE,8BAA8B,EAAA;AAGhC;;;;;ECpCE;AD2CF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;AAG9B;;;EClCE;ADuCF;EACE,qBAAqB;EAAE,MAAA;EACvB,wBAAwB;EAAE,MAAA,EAAO;AAGnC;;ECnCE;ADuCF;EACE,cAAc,EAAA;AAGhB;;;ECpCE;AACF;;ED0CE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;AAGrB;;ECrCE;AACF;;ED0CE,YAAY,EAAA;AAGd;;;ECtCE;AACF;ED2CE,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;AAG/B;;ECvCE;AACF;;ED4CE,wBAAwB,EAAA;AAG1B;;;ECxCE;AD6CF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;AAGxB;+EC1C+E;AD6C/E;;;ECzCE;AD8CF;;EAEE,cAAc,EAAA;AAGhB;;EC5CE;ADgDF;EACE,kBAAkB,EAAA;AAGpB;+EC/C+E;ADkD/E;;EC/CE;ADmDF;EACE,qBAAqB,EAAA;AAGvB;;ECjDE;ADqDF;EACE,aAAa,EAAA;AAGf;+ECpD+E;ADuD/E;;ECpDE;AACF;EDwDE,aAAa,EAAA;AEnaf;EAAO,kBAAiB,EAAA;AACxB;EAAO,cAAc;EAAE,2DAA2D,EAAA;AAGlF;EACE,mBAAmB;EACnB,cClBqB,EAAA;ADgBvB;IAGQ,SAAS,EAAA;AAGjB;EAAK,cAAc;EAAE,cAAc;EAAE,oBAAoB,EAAA;AACzD;EAAK,cAAc;EAAE,qBAAqB,EAAA;AAC1C;EAAK,gBAAgB;EAAE,cAAc;EAAE,kBAAkB,EAAA;AACzD;EAAK,gBAAgB;EAAE,iBAAiB;EAAE,qBAAqB,EAAA;AAC/D;EAAK,cAAc;EAAE,iBAAiB;EAAE,oBAAoB,EAAA;AAC5D;EAAK,cAAc;EAAE,iBAAiB,EAAA;AAGtC;EACE,iBAAiB,EAAA;AADnB;IAGc,2BAA2B;IAAE,UAAU,EAAA;AAHrD;IAIW,2BAA2B;IAAE,UAAU,EAAA;AAGlD;EAAqB,sBAAsB,EAAA;AAC3C;EAAqB,uBAAuB,EAAA;AAE5C;EAAc,aAAa;EAAE,WAAW;EAAE,kBAAkB,EAAA;AAC5D;EAAgB,iBAAiB,EAAA;AACjC;EAAc,kBAAkB,EAAA;AAChC;EAAc,cAAc,EAAA;AAE5B;;EACc,8BAA8B,EAAA;AAC5C;EAAc,iBAAiB;EAAE,kBAAkB,EAAA;AACnD;EAAc,WAAU,EAAA;AAExB;EAAc,eAAe;EAAE,gBAAgB,EAAA;AAC/C;EAAc,oDAAoD;EAAE,gBAAgB,EAAA;AAGpF;;EACc,SAAS,EAAA;AACvB;EAAc,uBAAuB;EAAE,mBAAmB,EAAA;AAE1D;EAAc,qBAAqB,EAAA;AACnC;EAAc,wBAAwB,EAAA;AAEtC;EAAc,mBAAmB,EAAA;AACjC;EAAc,iBAAiB,EAAA;AAC/B;EAAc,kBAAkB,EAAA;AAGhC;EAAc,oBAAoB;EAAE,WAAU,EAAA;AAC9C;EAAc,iBAAiB,EAAA;AAC/B;EAAc,mBAAmB,EAAA;AACjC;EAAgB,yBAAyB,EAAA;AAGzC;EAAc,eAAe;EAAE,sBAAsB;EAAE,oBAAoB,EAAA;AAC3E;EAAc,gBAAgB;EAAE,kBAAkB;EAAE,qBAAqB,EAAA;AACzE;EAAc,aAAa,EAAA;AAE3B;EAAc,WAAW,EAAA;AACzB;EAAc,WAAW,EAAA;AACzB;EAAc,gBAAe,EAAA;AAC7B;EAAc,gBAAe;EAAE,WAAW,EAAA;AAC1C;EAAc,gBAAe;EAAE,WAAW,EAAA;AAE1C;EAAc,cAAa;EAAE,eAAc,EAAA;AAC3C;EAAc,eAAc;EAAE,gBAAe,EAAA;AAC7C;EAAc,aAAY;EAAE,cAAa,EAAA;AACzC;EAAc,gBAAe;EAAE,iBAAgB,EAAA;AElG/C;ECGE,yBAK6C;EAJ7C,2DAAuD;EAKvD,gCAAoD;ECTpD,yCADgE;EAahE,yBADuD;EFPvD,cAAc;EACd,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,YAAY,EAAA;AAVd;IAaI,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,cDY4B;ICX5B,kBAAkB;IAClB,kBAAkB;IAClB,wBDayB;ICZzB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB,EAAA;AAtBpB;MAyBM,qBAAqB,EAAA;AAzB3B;QA4BQ,WAAW,EAAA;AA5BnB;MAiCM,kBAAkB;MAClB,SAAS,EAAA;AAlCf;IAsCc,cDVkB,EAAA;AC5BhC;IAyCI,QAAQ;IACR,kBAAkB;IAClB,YACF,EAAA;AA5CF;IA+CI,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,SAAS;IACT,UAAU,EAAA;AAnDd;MAsDM,gCAAA,EAAiC;AAtDvC;QAuDqB,cAAc,EAAA;AAvDnC;MA2DM,qBAAqB;MACrB,iBAAiB;MACjB,eAAe;MACf,kBAAkB;MAClB,gBAAgB;MAChB,kBAAkB;MAqClB,oBAAA,EAAqB;AArG3B;QAmEQ,qBAAqB;QACrB,0BAA0B;QAC1B,kBAAkB;QGrExB,mBHsE2B,EAAA;AAtE7B;QA0EQ,mBDxDmD;QCyDnD,WAAW,EAAA;AA3EnB;QA+EQ,wKAA0E;QAC1E,mBAAmB,EAAA;AAhF3B;QAoFQ,gLAAuG;QACvG,mBAAmB,EAAA;AArF3B;QAyFQ,mBDtEiD;QCuEjD,WAAW,EAAA;AA1FnB;QGAE,gBAWkB;QAClB,6BHkF+B;QGjF/B,4BHiF+B;QACzB,gCD5EiD;QC6EjD,gLAAqG;QACrG,aAAa,EAAA;AAjGrB;QAuGQ,mBDpFiD;QIfvD,6BHoGiC;QGnGjC,yBHmG4B;QGlG5B,gCHkGsC;QGjGtC,+BHiG2C;QExG3C,0BFyGuC;QACjC,kBAAkB;QAClB,WAAW;QACX,gBAAgB;QAChB,4BAA4B;QAC5B,eAAe;QACf,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,gBAAgB;QAChB,aAAa,EAAA;AAnHrB;UAsHU,kBAAkB;UAClB,WAAW,EAAA;AAvHrB;YAyHY,gBAAgB;YAChB,cAAc,EAAA;AA1H1B;cA2HsB,WAAW;cAAE,gBAAgB,EAAA;AA3HnD;YGAE,gBH+HgC,EAAA;AA/HlC;YAmIY,gLAAgF;YAChF,mBAAmB,EAAA;AApI/B;YAwIY,gMAA+E;YAC/E,WAAW,EAAA;AAzIvB;YGIE,6BHyIwC;YGxIxC,4BHwImC;YGvInC,gCHuI6C;YGtI7C,+BHsIkD;YACxC,aAAa;YACb,SAAS;YACT,UAAU;YAEV;;8FH2hBkF,EGzhBC;AApJ/F;cAsJc,WAAW;cACX,cAAc;cACd,kBAAkB;cAClB,SAAS;cACT,UAAU;cACV,yBAAyB;cACzB,wBAAwB;cACxB,WAAW,EAAA;AA7JzB;IAsKI,WAAW,EAAA;AAtKf;IA0KI,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,iBAAiB,EAAA;AAhLrB;MAkLQ,qBAAqB,EAAA;AAlL7B;MAmLc,WAAW,EAAA;AAnLzB;MAsLM,eAAc,EAAA;AItLpB;EACE,4BAAA;EA6EA,iCAAA;EA4BA,gBAAA;EAoGA,oBAAA;EAYA,YAAA,EAAa;AA1Nf;IAE6D,SAAQ;IAAE,UAAS,EAAA;AAFhF;IAGW,gBAAiB,EAAA;AAH5B;IAMI,SAAS;IACT,eAAe;IACf,mBAAmB,EAAA;AARvB;MCgBE,mBAAmB;MFhBnB,kBEiBoB;MHTpB,gCGUqC,EAAA;ADlBvC;MAaM,WAAW,EAAA;AAbjB;QAca,cAAc;QHXzB,yBAJgC;QAKhC,2DAAuD;QCQvD,yBADuD;QGTvD,yBAAyB;QCQzB,qBDPuC;QCQvC,yBDR8B;QCS9B,2BDTuC;QCUvC,4BDVgD;QCWhD,0BDXuC;QACvC,6DAA0D;QAE1D,cAAc;QACd,iBAAiB;QACjB,iBAAiB;QACjB,oBAAoB;QACpB,cNGqB;QMDrB,0BAA0B,EAAA;ADZ5B;MAkBM,aAAa,EAAA;AAlBnB;QAoBQ,cAAc;QACd,UAAU;QACV,WAAW;QACX,gBAAgB;QAChB,iBAAiB;QACjB,cLZe,EAAA;AKbvB;UA2BU,YAAY;UACZ,WLFwB,EAAA;AK1BlC;MAkCM,kBAAkB,EAAA;AAlCxB;QAoCQ,eAAe;QACf,iBAAiB,EAAA;AArCzB;QAuCyB,cAAe,EAAA;AAvCxC;MA2CM,iBAAgB;MAChB,cAAa,EAAA;AA5CnB;QA8CQ,iBAAgB;QAChB,sBAAqB;QACrB,kBAAiB,EAAA;AAhDzB;IAsDqB,kBAAmB,EAAA;AAtDxC;IA0DM,kBAAkB;IAClB,wBAAwB;IACxB,UAAU;IACV,UAAU;IACV,YAAY,EAAA;AA9DlB;IAmEM,iBAAiB,EAAA;AAnEvB;IA0EM,mCAA2D,EAAA;AA1EjE;IAkFM,kBAAiB;IACjB,UAAU;IACV,gBAAgB,EAAA;AApFtB;MAuFQ,WAAW;MACX,UAAU;MACV,SAAS;MACT,kBAAkB,EAAA;AA1F1B;QA6FU,UAAU;QACV,SAAS,EAAA;AA9FnB;MAmGQ,WAAW;MACX,WAAW;MACX,SAAS,EAAA;AArGjB;;;;;;;;;IAoHI,uBAA+C;IAC/C,yBAAmC;IDrHrC,kBADyB;ICwHvB,iBAAiB;IGvHnB,2DAA2D;IHyHzD,aAAa;IACb,qBAA+C,EAAA;AA1HnD;;;;;;;;;MA6HM,yBAAmC;MF7HvC,2BE8HmC,EAAA;AA9HrC;IAmII,wBAAgD,EAAA;AAnIpD;IAwII,UAAA;IAQA,yBAAA;IASA,gCAAA;IAeA,kBAAA;IAaA,kBAAA;IAKA,WAAA,EAAY;AA1LhB;MA0IM,iBAAiB;MACjB,kBAAkB;MAClB,WAAU;MACV,qBAAqB,EAAA;AA7I3B;MAmJQ,WAAU;MAAE,WAAU;MAAE,mBAAkB,EAAA;AAnJlD;QAoJgB,aAAa,EAAA;AApJ7B;QAqJgB,eAAc;QAAE,SAAQ;QAAE,UAAS,EAAA;AArJnD;MA4JQ,qBAAoB,EAAA;AA5J5B;QA8JU,uBAAsB,EAAA;AA9JhC;UAgKY,WAAU;UACV,WAAU,EAAA;AAjKtB;YAkKoB,mBAAkB,EAAA;AAlKtC;MA0KM,iBAAiB,EAAA;AA1KvB;QA4KQ,UAAU;QACV,iBAAgB;QAChB,mBAAmB;QACnB,+BAA+B;QAC/B,mBAAmB,EAAA;AAhL3B;UAiLgB,uBAAsB,EAAA;AAjLtC;MAuLM,UAAU,EAAA;AAvLhB;MA4LM,cLtKe;MKuKf,iBAAiB;MACjB,qBAAoB,EAAA;AA9L1B;MAiMM,cL3Ke;MK4Kf,qBAAoB;MACpB,kBAAiB,EAAA;AAnMvB;QAoMW,UAAS;QAAE,YAAW;QAAE,kBAAiB,EAAA;AApMpD;MAyMQ,yBLnLa,EAAA;AKtBrB;IAgNI,mBAAsC;IDhNxC,kBCiNsB;IACpB,cL5LiB;IK6LjB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,kBAAiB,EAAA;AAtNrB;MAuNS,iBAAgB;MAAE,UAAS;MAAE,YAAW;MAAE,kBAAiB,EAAA;AAvNpE;IDAE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOgB8C;IPf9C,2DAAuD;ICQvD,yBADuD;IMUvD,oFAAgF;IAChF,yBAAyB;IFZzB,qBEauC;IFZvC,yBEY8B;IFX9B,2BEWuC;IFVvC,4BEUgD;IFThD,0BESuC;IACvC,cAAc;IJsMZ,eAAe,EAAA;AIpNjB;MACE,YAAY;MACZ,eAAe,EAAA;AAef;MPxBF,yBOyBkD;MPxBlD,2DAAuD,EAAA;AO2BrD;MACE,gEAA8D;MP7BlE,yBO8BiD;MP7BjD,2DAAuD,EAAA;AGJzD;IAmOI,gBAAgB,EAAA;AAnOpB;MAoOqD,kBAAkB,EAAA;AApOvE;IAwOI,WAAW;IACX,mBAAmB,EAAA;AAzOvB;MA4OM,WAAW;MACX,eAAe,EAAA;AA7OrB;IAkPI,WAAU;IACV,UAAU,EAAA;AAnPd;MDAE,oBKAsB;MACtB,qBAAqB;MACrB,iBAAiB;MACjB,gBAAgB;MDHhB,2DAA2D;MCK3D,iBAAiB;MACjB,iBAAiB;MACjB,qBAAqB;MACrB,qBAAqB;MPLrB,yBOqCyB;MPpCzB,2DAAuD;MOqCvD,kFAA8E;MAC9E,yBAAyB;MFhCzB,qBEiCuC;MFhCvC,yBEgC8B;MF/B9B,2BE+BuC;MF9BvC,4BE8BgD;MF7BhD,0BE6BuC;MN/BvC,yBADuD;MMkCvD,cThCqB,EAAA;ASHrB;QACE,YAAY;QACZ,eAAe,EAAA;AAoCf;QP7CF,yBO8C6B;QP7C7B,2DAAuD,EAAA;AOgDrD;QACE,iEAA8D;QF3ClE,qBE4C2C;QF3C3C,yBE2CkC;QF1ClC,2BE0C2C;QFzC3C,4BEyCoD;QFxCpD,0BEwC2C;QPnD3C,yBOoD6B;QPnD7B,2DAAuD,EAAA;AGyPzD;EAGI,cAAc;EACd,yBAAyB;EACzB,cLrPmB;EKsPnB,gBAAgB;EAChB,iBAAiB,EAAA;AAPrB;EAWI,YAbiE,EAAA;AAErE;EAeI,YAA0E,EAAA;AAc9E;EAEI,mBAAmB;EACnB,WAAW,EAAA;AAHf;IAOQ,iBAA8C;IAC9C,WAbmI,EAAA;AAK3I;IAWQ,YAf6F,EAAA;AAIrG;IAgBc,kBAAkB,EAAA;AAhBhC;IAkBQ,kBAAkB;IAClB,mBAAmB,EAAA;AAnB3B;IAsBQ,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB,EAAA;AAzBxB;MA0BgB,wBAAwB,EAAA;AA1BxC;IAgCQ,sBAAsB;IACtB,YAnCgG,EAAA;AAExG;MAoCU,gBAAgB,EAAA;AApC1B;ED1RE,oBKAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EDHhB,2DAA2D;ECK3D,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EPLrB,yBOqCyB;EPpCzB,2DAAuD;EOqCvD,kFAA8E;EAC9E,yBAAyB;EFhCzB,qBEiCuC;EFhCvC,yBEgC8B;EF/B9B,2BE+BuC;EF9BvC,4BE8BgD;EF7BhD,0BE6BuC;EN/BvC,yBADuD;EMkCvD,cThCqB,EAAA;ASHrB;IACE,YAAY;IACZ,eAAe,EAAA;AAoCf;IP7CF,yBO8C6B;IP7C7B,2DAAuD,EAAA;AOgDrD;IACE,iEAA8D;IF3ClE,qBE4C2C;IF3C3C,yBE2CkC;IF1ClC,2BE0C2C;IFzC3C,4BEyCoD;IFxCpD,0BEwC2C;IPnD3C,yBOoD6B;IPnD7B,2DAAuD,EAAA;AQJzD;EAII,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB,EAAA;AHNlB;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;IACX,SAAS,EAAA;AGLb;IASM,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,cAAmC,EAAA;AAbzC;MAeQ,gBAAgB;MAChB,iBAAiB;MACjB,SAAS;MACT,cVLe,EAAA;AUbvB;IAsBM,kBAAkB,EAAA;AAtBxB;EA0BI,SAAS;EACT,UAAU;EACV,kBAAkB,EAAA;AA5BtB;IA+BM,SAAS;IACT,UAAU;IACV,gBAAgB;IP7BpB,gBAAgB,EAAA;AOJlB;IAoCS,UAAU,EAAA;AApCnB;IAqCuB,UAAU;IAAE,eAAe,EAAA;ACtClD;ETIE,yBSF2B;ETG3B,2DAAuD;ECQvD,4BADuD;EQRrD,gCAAgC;EAChC,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB,EAAA;AAVtB;ITIE,yBSS6B;ITR7B,2DAAuD;ISSnD,gCAAgC;IAChC,cAAc,EAAA;AAfpB;ITIE,yBSc6B;ITb7B,2DAAuD;IScnD,gCAAgC;IAChC,cAAc,EAAA;AAKpB;ERpBE,gBAAgB;EAQhB,yBADuD;EQiBrD,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,kBAAkB,EAAA;ACjCtB;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,YAAY,EAAA;AARd;IAWI,qBAAqB,EAAA;AAXzB;MAaM,eAAe,EAAA;AAbrB;IAkBI,YAAY;IVfd,yBAK6C;IAJ7C,2DAAuD;IAKvD,gCAAoD;IUWlD,yBAAyB;IACzB,uBAAuB;IACvB,YAAY;IACZ,2BAA2B;IAC3B,4BAA4B;IAC5B,kBAAkB;IAClB,aAAa,EAAA;AA1BjB;MA6BO,WAAW;MACX,kBAAkB;MAClB,UAAU;MACV,SAAS;MACT,UAAU;MACV,WAAW;MACX,yCAAyC;MACzC,0CAA0C;MAC1C,iCAAiC,EAAA;AArCxC;MTYE,yBADuD;MS+BnD,WAAW;MACX,cAAc;MACd,gBAAgB;MAChB,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB,EAAA;AA/CxB;QAkDQ,kBAAkB,EAAA;AAlD1B;QAqDQ,kBAAkB,EAAA;AArD1B;MA2DM,WAAW;MACX,cAAc;MACd,YAAY;MACZ,gBAAgB;MAChB,WAAW,EAAA;AA/DjB;QAkEQ,WAAW;QACX,QAAQ;QACR,SAAS;QACT,uBAAuB;QACvB,iCAAiC;QACjC,6BAA6B;QAC7B,oCAAoC,EAAA;AAxE5C;QA2EQ,YAAY;QACZ,QAAQ;QACR,SAAS;QACT,uBAAuB;QACvB,iCAAiC;QACjC,4BAA4B;QAC5B,oCAAoC,EAAA;AAjF5C;QAqFQ,aAAa,EAAA;AArFrB;IRAE,gBAiBkB;IAClB,+BAFgC;IAGhC,8BAHgC;IDhBhC,yCS4F4C;IAC1C,yBAAyB;IACzB,yBAAyB;IACzB,SAAS;IACT,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,YAAY,EAAA;AAnGhB;MAsGM,YAAY;MACZ,kBAAkB,EAAA;AAvGxB;MA2GM,yBAAyB;MACzB,cAAc;MACd,mBAAmB;MACnB,gBAAgB;MAChB,gBAAgB,EAAA;AA/GtB;MAmHM,cAAc,EAAA;AAnHpB;QAsHQ,YAAY;QACZ,YAAY;QACZ,WAAW,EAAA;AAxHnB;URAE,kBADyB;UQ6HjB,cAAc;UACd,iBAAiB;UACjB,iBAAiB;UACjB,YAAY,EAAA;AA/HtB;YAkIY,yBAAyB;YACzB,WAAW,EAAA;AAnIvB;cAqIc,yBAAyB;cACzB,WAAW,EAAA;AAtIzB;YA0IY,yBAAyB,EAAA;AA1IrC;YA6IY,yBAAyB,EAAA;AC5IrC;EAEI,mBAAmB,EAAA;AAFvB;EAMI,gBAAgB,EAAA;AAMpB;EACE,WAAW;EACX,mBAAmB;EACnB,SAAS;EACT,iBAAiB,EAAA;AAJnB;IXVE,yBAJgC;IAKhC,2DAAuD;ICQvD,yBADuD;IGTvD,yBAAyB;ICQzB,qBDPuC;ICQvC,yBDR8B;ICS9B,2BDTuC;ICUvC,4BDVgD;ICWhD,0BDXuC;IACvC,6DAA0D;IAE1D,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,cNGqB;IMDrB,0BAA0B;IOSxB,kBAAkB;IAClB,kBba0B;IaZ1B,mBbY0B,EAAA;AatB9B;MAaM,cbbiB;MacjB,qBAAqB;MACrB,cAAc;MACd,mBAAmB,EAAA;AAhBzB;MAoBM,iWAAoD;MAAE,kBAAkB,EAAA;AApB9E;MAuBqB,4BAA4B,EAAA;AAvBjD;MAwBuB,4BAA4B,EAAA;AAxBnD;MXVE,yBWqC2D;MXpC3D,2DAAuD,EAAA;AWSzD;MA+BM,+BAA+B,EAAA;AA/BrC;IAoCe,mBb7BkC,EAAA;AaPjD;IAuCI,mBb/B0B,EAAA;AaR9B;IA2CI,2BbrB0B;IasB1B,gCAAgC;IAChC,mBAAmB,EAAA;AAMvB;EACE,eAAe,EAAA;AADjB;IAGI,iBAAiB;IACjB,gBAAgB;IAChB,cbxDmB;IGTrB,gBAAgB;IAQhB,yBADuD;IU6DrD,yBAAyB;IACzB,6BAA6B,EAAA;AATjC;IAWc,mBAA2C,EAAA;AAXzD;IAYe,mBbxDkC,EAAA;Aa4DjD;EAAoB,gBAAgB,EAAA;AAEpC;EACa,mBb/DoC,EAAA;Aa8DjD;EAEa,mBAA2C,EAAA;AAFxD;EAII,0BbnD0B;EaoD1B,mBAAmB;EACnB,gCAAgC,EAAA;AANpC;EV9EE,gBAAgB;EDqBhB,gBAAgB;EWoEd,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,cbpFmB;EGDrB,yBADuD,EAAA;AUuEzD;EAoBM,WAAW;EACX,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB,EAAA;AAK3B;EAAwC,WAAW,EAAA;AN9GjD;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,SAAS,EAAA;AONb;EAGI,WAAU,EAAA;ACHd;EACE,eAAe;EACf,8BAA0B;EAC1B,MAAM;EAAE,OAAO;EAAE,QAAQ;EAAE,SAAS;EACpC,aAAa,EAAA;AAGf;EACE,eAAe;EACf,aAAa;ETQb,mBAAmB;EFhBnB,kBEiBoB;EHTpB,gCGUqC;ESRrC,uCAAoC,EAAA;AAJtC;IbHE,yBAJgC;IAKhC,2DAAuD;ICQvD,yBADuD;IGTvD,yBAAyB;ICQzB,qBDPuC;ICQvC,yBDR8B;ICS9B,2BDTuC;ICUvC,4BDVgD;ICWhD,0BDXuC;IACvC,6DAA0D;IAE1D,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,cNGqB;IMDrB,0BAA0B,EAAA;ASN5B;MAQW,gBAAiB,EAAA;AAR5B;IAWO,qBAAsB,EAAA;AAX7B;IAYO,cAAe,EAAA;AAZtB;IAaU,kBAAmB,EAAA;AAb7B;IAgBI,sBACF,EAAA;AAjBF;IXNE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOgB8C;IPf9C,2DAAuD;ICQvD,yBADuD;IMUvD,oFAAgF;IAChF,yBAAyB;IFZzB,qBEauC;IFZvC,yBEY8B;IFX9B,2BEWuC;IFVvC,4BEUgD;IFThD,0BESuC;IACvC,cAAc,EAAA;AAdd;MACE,YAAY;MACZ,eAAe,EAAA;AAef;MPxBF,yBOyBkD;MPxBlD,2DAAuD,EAAA;AO2BrD;MACE,gEAA8D;MP7BlE,yBO8BiD;MP7BjD,2DAAuD,EAAA;AaEzD;IXNE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOqCyB;IPpCzB,2DAAuD;IOqCvD,kFAA8E;IAC9E,yBAAyB;IFhCzB,qBEiCuC;IFhCvC,yBEgC8B;IF/B9B,2BE+BuC;IF9BvC,4BE8BgD;IF7BhD,0BE6BuC;IN/BvC,yBADuD;IMkCvD,cThCqB,EAAA;ASHrB;MACE,YAAY;MACZ,eAAe,EAAA;AAoCf;MP7CF,yBO8C6B;MP7C7B,2DAAuD,EAAA;AOgDrD;MACE,iEAA8D;MF3ClE,qBE4C2C;MF3C3C,yBE2CkC;MF1ClC,2BE0C2C;MFzC3C,4BEyCoD;MFxCpD,0BEwC2C;MPnD3C,yBOoD6B;MPnD7B,2DAAuD,EAAA;Aa0BzD;EAC8B,aAAc,EAAA;AChC5C;EACE,WAAW;EACX,kBAAkB,EAAA;AAFpB;IZCE,kBADyB;IYMvB,0BhBmCmC;IgBlCnC,WhBiB4B;IgBhB5B,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB,EAAA;AAZtB;MAeM,cAAc;MACd,gBAAgB;MAChB,mBAAmB,EAAA;AAKzB;EACE,gBAAgB;EAChB,mBAAmB,EAAA;AAGrB;EACE,gBAAgB,EAAA;AC5BlB;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB,EAAA;AAN3B;IASI,cjBgBuB;IiBfvB,qBAAqB,EAAA;AAVzB;IAaY,0BAA0B,EAAA;AAbtC;IAgBI,aAAa;IACb,cjBSiC,EAAA;AkB1BrC;EACE,eAAe,EAAA;AADjB;IdCE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOqCyB;IPpCzB,2DAAuD;IOqCvD,kFAA8E;IAC9E,yBAAyB;IFhCzB,qBEiCuC;IFhCvC,yBEgC8B;IF/B9B,2BE+BuC;IF9BvC,4BE8BgD;IF7BhD,0BE6BuC;IN/BvC,yBADuD;IMkCvD,cThCqB;IkBTnB,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe,EAAA;ATIjB;MACE,YAAY;MACZ,eAAe,EAAA;AAoCf;MP7CF,yBO8C6B;MP7C7B,2DAAuD,EAAA;AOgDrD;MACE,iEAA8D;MF3ClE,qBE4C2C;MF3C3C,yBE2CkC;MF1ClC,2BE0C2C;MFzC3C,4BEyCoD;MFxCpD,0BEwC2C;MPnD3C,yBOoD6B;MPnD7B,2DAAuD,EAAA;AgBLzD;MAUM,YAAY;MACZ,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,uBAAuB;MACvB,mBAAmB;MACnB,8BAA8B;MAC9B,WAAW;MACX,QAAQ,EAAA;AAlBd;MAsBM,YAAY;MACZ,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,uBAAuB;MACvB,mBAAmB;MACnB,8BAA8B;MAC9B,WAAW;MACX,QAAQ,EAAA;AA9Bd;IAqCI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,QAAQ;IACR,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,iCAAoD;IACpD,YAAY,EAAA;AA9ChB;MAmDM,YAAY;MACZ,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,uBAAuB;MACvB,mBAAmB;MACnB,iCAAsD;MACtD,UAAU;MACV,QAAQ,EAAA;AA3Dd;MAiEM,YAAY;MACZ,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,uBAAuB;MACvB,mBAAmB;MACnB,iCAAqD;MACrD,UAAU;MACV,QAAQ,EAAA;AAzEd;IA8EI,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,uEAAyF;IACzF,yBlBrEmB;IEVrB,yBgBgF+C;IhB/E/C,2DAAuD;IgBgFrD,yBAA6C;IAC7C,yBAA4C;IAC5C,4BAAgD;IAChD,kBAAkB;IAClB,aAAa;IACb,aAAa,EAAA;AA1FjB;MA6FM,cAAc;MACd,sBAAsB;MACtB,yBAA6C;MAC7C,mCAAuD;MACvD,kBAAkB;MAClB,SAAS;MACT,gBAAgB;MAChB,YAAY;MAEZ,qBAAqB;MACrB,UAAU,EAAA;AAvGhB;QA0GQ,cAAc;QACd,gCAAgC;QAChC,sBAAsB,EAAA;AA5G9B;UA+GU,cAAc;UACd,uBAAuB;UACvB,iBAAiB;UACjB,iBAAiB;UACjB,qBAAqB;UACrB,qBAAqB;UACrB,kBAAkB;UAClB,mBAAmB,EAAA;AAtH7B;YhBIE,yBAcyB;YAbzB,2DAAuD;YCQvD,4BADuD;Ye+G7C,WAAW,EAAA;AA3HvB;YhBIE,yBAkByB;YAjBzB,2DAAuD;YgB2H7C,WAAW,EAAA;AAhIvB;UAuIY,2BAA2B;UAC3B,4BAA4B,EAAA;AAxIxC;UAkJU,YAAY,EAAA;AAlJtB;YA+IY,8BAA8B;YAC9B,+BAA+B,EAAA;AChJ3C;EACE,iBAAiB;EACjB,mBAAmB,EAAA;AAGrB;EfJE,oBKAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EDHhB,2DAA2D;ECK3D,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EPLrB,yBOgB8C;EPf9C,2DAAuD;ECQvD,yBADuD;EMUvD,oFAAgF;EAChF,yBAAyB;EFZzB,qBEauC;EFZvC,yBEY8B;EFX9B,2BEWuC;EFVvC,4BEUgD;EFThD,0BESuC;EACvC,cAAc,EAAA;AAdd;IACE,YAAY;IACZ,eAAe,EAAA;AAef;IPxBF,yBOyBkD;IPxBlD,2DAAuD,EAAA;AO2BrD;IACE,gEAA8D;IP7BlE,yBO8BiD;IP7BjD,2DAAuD,EAAA;AkBJzD;EAAsB,YAAY;EAAE,gBAAgB;EAAE,sBAAsB;EAAE,SAAS,EAAA;AAGvF;EACE,WAAW;EACX,UAAU,EAAA;AAFZ;IAGY,WAAW,EAAA;ACPvB;EACE,crBgBkB;EqBflB,0BAA0B,EAAA;AAE5B;EAAU,qBAAqB,EAAA;ACJ/B;EACE,WAAW,EAAA;AAGb;EACE,YAAY;EACZ,gBAAgB;EAChB,iBAAiB,EAAA;AAHnB;IlBHE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOqCyB;IPpCzB,2DAAuD;IOqCvD,kFAA8E;IAC9E,yBAAyB;IFhCzB,qBEiCuC;IFhCvC,yBEgC8B;IF/B9B,2BE+BuC;IF9BvC,4BE8BgD;IF7BhD,0BE6BuC;IN/BvC,yBADuD;IMkCvD,cThCqB,EAAA;ASHrB;MACE,YAAY;MACZ,eAAe,EAAA;AAoCf;MP7CF,yBO8C6B;MP7C7B,2DAAuD,EAAA;AOgDrD;MACE,iEAA8D;MF3ClE,qBE4C2C;MF3C3C,yBE2CkC;MF1ClC,2BE0C2C;MFzC3C,4BEyCoD;MFxCpD,0BEwC2C;MPnD3C,yBOoD6B;MPnD7B,2DAAuD,EAAA;AoBDzD;IlBHE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOgB8C;IPf9C,2DAAuD;ICQvD,yBADuD;IMUvD,oFAAgF;IAChF,yBAAyB;IFZzB,qBEauC;IFZvC,yBEY8B;IFX9B,2BEWuC;IFVvC,4BEUgD;IFThD,0BESuC;IACvC,cAAc,EAAA;AAdd;MACE,YAAY;MACZ,eAAe,EAAA;AAef;MPxBF,yBOyBkD;MPxBlD,2DAAuD,EAAA;AO2BrD;MACE,gEAA8D;MP7BlE,yBO8BiD;MP7BjD,2DAAuD,EAAA;AoBDzD;IlBHE,kBkBiBsB;IACpB,iBAAiB;IACjB,gBAAgB,EAAA;AAIpB;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc,EAAA;AAHhB;IAIM,cAAc,EAAA;AAGpB;EACE,WAAW,EAAA;AAGb;EACE,YAAY;EACZ,gBAAgB,EAAA;AAFlB;IlBlCE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOqCyB;IPpCzB,2DAAuD;IOqCvD,kFAA8E;IAC9E,yBAAyB;IFhCzB,qBEiCuC;IFhCvC,yBEgC8B;IF/B9B,2BE+BuC;IF9BvC,4BE8BgD;IF7BhD,0BE6BuC;IN/BvC,yBADuD;IMkCvD,cThCqB;IIbrB,kBkBuCsB;IACpB,gBAAgB,EAAA;Ab9BlB;MACE,YAAY;MACZ,eAAe,EAAA;AAoCf;MP7CF,yBO8C6B;MP7C7B,2DAAuD,EAAA;AOgDrD;MACE,iEAA8D;MF3ClE,qBE4C2C;MF3C3C,yBE2CkC;MF1ClC,2BE0C2C;MFzC3C,4BEyCoD;MFxCpD,0BEwC2C;MPnD3C,yBOoD6B;MPnD7B,2DAAuD,EAAA;AoBwCzD;EAEI,WAAW;EACX,mBAAmB,EAAA;AAHvB;EAMI,WAAW;EACX,WAAW,EAAA;ACnDf;EjBgBE,mBAAmB;EFhBnB,kBEiBoB;EHTpB,gCGUqC;EAKrC,mBAAmB,EAAA;AAEnB;IJtBA,yBAJgC;IAKhC,2DAAuD;ICQvD,yBADuD;IGTvD,yBAAyB;ICQzB,qBDPuC;ICQvC,yBDR8B;ICS9B,2BDTuC;ICUvC,4BDVgD;ICWhD,0BDXuC;IACvC,6DAA0D;IAE1D,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,cNGqB;IMDrB,0BAA0B,EAAA;AAgBxB;MACE,YAAY,EAAA;AAIhB;IAAQ,2BNGY,EAAA;AMDpB;IACE,YAAY;IACZ,gCAAgC,EAAA;AiBjCpC;EjBYE,mBAAmB;EFhBnB,kBEiBoB;EHTpB,gCGUqC;EAKrC,mBAAmB,EAAA;AAEnB;IJtBA,yBAJgC;IAKhC,2DAAuD;ICQvD,yBADuD;IGTvD,yBAAyB;ICQzB,qBDPuC;ICQvC,yBDR8B;ICS9B,2BDTuC;ICUvC,4BDVgD;ICWhD,0BDXuC;IACvC,6DAA0D;IAE1D,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,cNGqB;IMDrB,0BAA0B,EAAA;AAgBxB;MACE,YAAY,EAAA;AAIhB;IAAQ,2BNGY,EAAA;AMDpB;IACE,YAAY;IACZ,gCAAgC,EAAA;AkBtCpC;EACE,mBAAmB,EAAA;ACDrB;EAGM,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB,EAAA;AANvB;EASM,iBAAiB,EAAA;ACTvB;EACE,mBAAyC;EACzC,WAAW;EACX,yBAAyB;EACzB,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB,EAAA;AANlB;IAQU,mBAAoB,EAAA;AAR9B;IASU,gBAAiB,EAAA;ACT3B;EAEE,mBAAmB,EAAA;ApBDnB;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;IACX,SAAS,EAAA;AoBDb;EACE,WAAW,EAAA;AAGb;EvBRE,oBKAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EDHhB,2DAA2D;ECK3D,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EPLrB,yBOqCyB;EPpCzB,2DAAuD;EOqCvD,kFAA8E;EAC9E,yBAAyB;EFhCzB,qBEiCuC;EFhCvC,yBEgC8B;EF/B9B,2BE+BuC;EF9BvC,4BE8BgD;EF7BhD,0BE6BuC;EN/BvC,yBADuD;EMkCvD,cThCqB;EEVrB,yByBOyB;EzBNzB,2DAAuD;EKMvD,qBoBCuC;EpBAvC,yBoBA8B;EpBC9B,2BoBDuC;EpBEvC,4BoBFgD;EpBGhD,0BoBHuC;EACvC,gBAAgB;EAChB,qBAAqB;EACrB,SAAS,EAAA;AlBJT;IACE,YAAY;IACZ,eAAe,EAAA;AAoCf;IP7CF,yBO8C6B;IP7C7B,2DAAuD,EAAA;AOgDrD;IACE,iEAA8D;IF3ClE,qBE4C2C;IF3C3C,yBE2CkC;IF1ClC,2BE0C2C;IFzC3C,4BEyCoD;IFxCpD,0BEwC2C;IPnD3C,yBOoD6B;IPnD7B,2DAAuD,EAAA;AyBIzD;IzBLE,yByBe6B;IzBd7B,2DAAuD,EAAA;AyBIzD;IpBEE,qBoBY2C;IpBX3C,yBoBWkC;IpBVlC,2BoBU2C;IpBT3C,4BoBSoD;IpBRpD,0BoBQ2C;IACvC,iDAA8C;IzBpBlD,yByBqB6B;IzBpB7B,2DAAuD,EAAA;AyByBzD;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS,EAAA;AAHX;IAMI,WAAW,EAAA;AANf;MASM,+BAA+B;MAC/B,gBAAgB,EAAA;AAVtB;MAcM,sBAAsB;MACtB,4BAA4B;MAC5B,+BAA+B,EAAA;AAhBrC;MAoBM,uBAAuB;MACvB,6BAA6B;MAC7B,gCAAgC,EAAA;AAtBtC;MzB1BE,yByBoD6B;MzBnD7B,2DAAuD;MyBoDnD,gDAA6C;MAC7C,eAAe,EAAA;AA5BrB;QzB1BE,yByByD+B;QzBxD/B,2DAAuD,EAAA;A0BLzD;EACE,YAAY,EAAA;AADd;IAKM,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB,EAAA;ACRvB;EACE,kBAAkB;EAClB,cAAc;EACd,yBAAyB;E3BCzB,yB2BAyB;E3BCzB,2DAAuD;E2BAvD,gCAAgC,EAAA;AALlC;IAQI,eAAe;IACf,iBAAiB,EAAA;AATrB;IAaI,oBAAoB,EAAA;ACbxB;EACE,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,iBAAiB,EAAA;AAPnB;IAUI,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW,EAAA;AAdf;MAiBM,sBAAsB;MACtB,4BAA4B;MAC5B,+BAA+B,EAAA;AAnBrC;MAuBM,uBAAuB;MACvB,6BAA6B;MAC7B,gCAAgC,EAAA;AAzBtC;M1BCE,oBKAsB;MACtB,qBAAqB;MACrB,iBAAiB;MACjB,gBAAgB;MDHhB,2DAA2D;MCK3D,iBAAiB;MACjB,iBAAiB;MACjB,qBAAqB;MACrB,qBAAqB;MPLrB,yBOqCyB;MPpCzB,2DAAuD;MOqCvD,kFAA8E;MAC9E,yBAAyB;MFhCzB,qBEiCuC;MFhCvC,yBEgC8B;MF/B9B,2BE+BuC;MF9BvC,4BE8BgD;MF7BhD,0BE6BuC;MN/BvC,yBADuD;MMkCvD,cThCqB;MEVrB,yB4B0B6B;M5BzB7B,2DAAuD;MKMvD,qBuBoB2C;MvBnB3C,yBuBmBkC;MvBlBlC,2BuBkB2C;MvBjB3C,4BuBiBoD;MvBhBpD,0BuBgB2C;MACvC,qBAAqB;MACrB,gBAAgB;MAChB,+BAA+B;MAC/B,eAAe;MACf,qBAAqB,EAAA;ArBzBzB;QACE,YAAY;QACZ,eAAe,EAAA;AAoCf;QP7CF,yBO8C6B;QP7C7B,2DAAuD,EAAA;AOgDrD;QACE,iEAA8D;QF3ClE,qBE4C2C;QF3C3C,yBE2CkC;QF1ClC,2BE0C2C;QFzC3C,4BEyCoD;QFxCpD,0BEwC2C;QPnD3C,yBOoD6B;QPnD7B,2DAAuD,EAAA;A4BLzD;Q5BIE,yB4BoCiC;Q5BnCjC,2DAAuD,EAAA;A4BLzD;MA+CQ,eAAe;M5B3CrB,yB4B4C+B;M5B3C/B,2DAAuD;M4B4CjD,gDAA6C,EAAA;AAjDrD;Q5BIE,yB4BgDiC;Q5B/CjC,2DAAuD,EAAA;A4BsDzD;EACE,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,gBAAgB,EAAA;AC/DlB;EACE,mBAAmB,EAAA;AADrB;IAII,YAAY;IACZ,iBAAiB,EAAA;AALrB;M5BCE,yCADgE;M4BQ5D,gBAAgB;MAChB,kBAAkB,EAAA;AATxB;I7BIE,yBAJgC;IAKhC,2DAAuD;ICQvD,yBADuD;IGTvD,yBAAyB;ICQzB,qBDPuC;ICQvC,yBDR8B;ICS9B,2BDTuC;ICUvC,4BDVgD;ICWhD,0BDXuC;IACvC,6DAA0D;IAE1D,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,cNGqB;IMDrB,0BAA0B;IJT1B,yBAK6C;IAJ7C,2DAAuD;IAKvD,gCAAoD;ICGpD,yBADuD;I4BKrD,wCAAqC;IACrC,YAAY;IACZ,WAAW;IACX,8BAA8B,EAAA;AApBlC;IAwBI,eAAA,EAAgB;AAxBpB;M5BKE,gBAAgB;M4BuBV,gBAAgB;MAChB,UAAU;MAOV,gBAAgB,EAAA;AApCxB;QA8Ba,eAAe,EAAA;AA9B5B;QAiCU,UAAU,EAAA;AAjCpB;QAmCoB,gBAAgB,EAAA;AAnCpC;MAwCQ,YAAY;MAAE,iBAAiB,EAAA;ACxCvC;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW,EAAA;AAHb;IAMI,iBACF,EAAA;AAIF;EAAgB,gBAAgB;EAAE,iBAAiB;EAAE,iBAAiB,EAAA;AAEtE;EAAiB,WAAW,EAAA;ACb5B;EACE,WAAW,EAAA;AAGb;EACE,cAAc,EAAA;AAGhB;EACE,SAAS;EACT,ajCuB2B,EAAA;AiCzB7B;IAKI,WAAW;IACX,WAAW,EAAA;AANf;MASM,mBAAqD,EAAA;AAT3D;IAayD,eAAe,EAAA;AAbxE;IAgBI,WAAW;IACX,YjCSiB;IiCRjB,mBjCQiB,EAAA;AkClCrB;EhCIE,yBAJgC;EAKhC,2DAAuD;ECQvD,yBADuD;EGTvD,yBAAyB;ECQzB,qBDPuC;ECQvC,yBDR8B;ECS9B,2BDTuC;ECUvC,4BDVgD;ECWhD,0BDXuC;EACvC,6DAA0D;EAE1D,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,cNGqB;EMDrB,0BAA0B;E4BV1B,sBAAsB;EACtB,yCAAyC;EACzC,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,kBlCuB2B;EkCtB3B,YAAY,EAAA;A3BVZ;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;IACX,SAAS,EAAA;A2BNb;IAcI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB,EAAA;AAhBvB;IAoBI,iBAAiB,EAAA;AApBrB;IAwBI,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB,EAAA;AA5BrB;I9BCE,oBKAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IDHhB,2DAA2D;ICK3D,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IPLrB,yBOqCyB;IPpCzB,2DAAuD;IOqCvD,kFAA8E;IAC9E,yBAAyB;IFhCzB,qBEiCuC;IFhCvC,yBEgC8B;IF/B9B,2BE+BuC;IF9BvC,4BE8BgD;IF7BhD,0BE6BuC;IN/BvC,yBADuD;IMkCvD,cThCqB;IkCqBf,uBAAuB;IACvB,WAAW,EAAA;AzBzBjB;MACE,YAAY;MACZ,eAAe,EAAA;AAoCf;MP7CF,yBO8C6B;MP7C7B,2DAAuD,EAAA;AOgDrD;MACE,iEAA8D;MF3ClE,qBE4C2C;MF3C3C,yBE2CkC;MF1ClC,2BE0C2C;MFzC3C,4BEyCoD;MFxCpD,0BEwC2C;MPnD3C,yBOoD6B;MPnD7B,2DAAuD,EAAA;AN6BzD;EYjCE,2DAA2D;EZmC3D,gBAAgB;EAChB,cAAc;EACd,gBIzB0B;EJ0B1B,cIvBkB,EAAA","file":"active_admin.scss","sourcesContent":["/* Active Admin CSS */\n// Normalize\n@import \"./normalize\";\n\n// Partials\n@import \"./typography\";\n@import \"./header\";\n@import \"./forms\";\n@import \"./components/comments\";\n@import \"./components/flash_messages\";\n@import \"./components/date_picker\";\n@import \"./components/tables\";\n@import \"./components/batch_actions\";\n@import \"./components/modal_dialog\";\n@import \"./components/blank_slates\";\n@import \"./components/breadcrumbs\";\n@import \"./components/dropdown_menu\";\n@import \"./components/buttons\";\n@import \"./components/grid\";\n@import \"./components/links\";\n@import \"./components/pagination\";\n@import \"./components/panels\";\n@import \"./components/columns\";\n@import \"./components/scopes\";\n@import \"./components/status_tags\";\n@import \"./components/table_tools\";\n@import \"./components/index_list\";\n@import \"./components/unsupported_browser\";\n@import \"./components/tabs\";\n@import \"./pages/logged_out\";\n@import \"./structure/footer\";\n@import \"./structure/main_structure\";\n@import \"./structure/title_bar\";\n\nbody {\n  @include sans-family;\n  line-height: 1.5;\n  font-size: 72%;\n  background: $body-background-color;\n  color: $text-color;\n}\n","/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/* Active Admin CSS */\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\nhtml {\n  font-size: 100.01%; }\n\nbody {\n  font-size: 75%;\n  font-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  color: #5E6469; }\n  h1 img, h2 img, h3 img, h4 img, h5 img, h6 img {\n    margin: 0; }\n\nh1 {\n  font-size: 3em;\n  line-height: 1;\n  margin-bottom: 0.5em; }\n\nh2 {\n  font-size: 2em;\n  margin-bottom: 0.75em; }\n\nh3 {\n  font-size: 1.5em;\n  line-height: 1;\n  margin-bottom: 1em; }\n\nh4 {\n  font-size: 1.2em;\n  line-height: 1.25;\n  margin-bottom: 1.25em; }\n\nh5 {\n  font-size: 1em;\n  font-weight: bold;\n  margin-bottom: 1.5em; }\n\nh6 {\n  font-size: 1em;\n  font-weight: bold; }\n\np {\n  margin: 0 0 1.5em; }\n  p .left {\n    margin: 1.5em 1.5em 1.5em 0;\n    padding: 0; }\n  p .right {\n    margin: 1.5em 0 1.5em 1.5em;\n    padding: 0; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\nblockquote {\n  margin: 1.5em;\n  color: #666;\n  font-style: italic; }\n\nstrong, dfn {\n  font-weight: bold; }\n\nem, dfn {\n  font-style: italic; }\n\nsup, sub {\n  line-height: 0; }\n\nabbr,\nacronym {\n  border-bottom: 1px dotted #666; }\n\naddress {\n  margin: 0 0 1.5em;\n  font-style: italic; }\n\ndel {\n  color: #666; }\n\npre {\n  margin: 1.5em 0;\n  white-space: pre; }\n\npre, code, tt {\n  font: 1em 'andale mono', 'lucida console', monospace;\n  line-height: 1.5; }\n\nli ul,\nli ol {\n  margin: 0; }\n\nul, ol {\n  margin: 0 1.5em 1.5em 0;\n  padding-left: 1.5em; }\n\nul {\n  list-style-type: disc; }\n\nol {\n  list-style-type: decimal; }\n\ndl {\n  margin: 0 0 1.5em 0; }\n\ndl dt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 1.5em; }\n\ntable {\n  margin-bottom: 1.4em;\n  width: 100%; }\n\nth {\n  font-weight: bold; }\n\nthead th {\n  background: #c3d9ff; }\n\nth, td, caption {\n  padding: 4px 10px 4px 5px; }\n\n.small {\n  font-size: .8em;\n  margin-bottom: 1.875em;\n  line-height: 1.875em; }\n\n.large {\n  font-size: 1.2em;\n  line-height: 2.5em;\n  margin-bottom: 1.25em; }\n\n.hide {\n  display: none; }\n\n.quiet {\n  color: #666; }\n\n.loud {\n  color: #000; }\n\n.highlight {\n  background: #ff0; }\n\n.added {\n  background: #060;\n  color: #fff; }\n\n.removed {\n  background: #900;\n  color: #fff; }\n\n.first {\n  margin-left: 0;\n  padding-left: 0; }\n\n.last {\n  margin-right: 0;\n  padding-right: 0; }\n\n.top {\n  margin-top: 0;\n  padding-top: 0; }\n\n.bottom {\n  margin-bottom: 0;\n  padding-bottom: 0; }\n\n#header {\n  background-color: #6a7176;\n  background-image: linear-gradient(180deg, #6a7176, #4d5256);\n  border-bottom: 1px solid #44484b;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n  text-shadow: #000 0 1px 0;\n  display: table;\n  height: 20px;\n  width: 100%;\n  overflow: visible;\n  position: inherit;\n  padding: 5px 0;\n  z-index: 900; }\n  #header h1 {\n    display: table-cell;\n    vertical-align: middle;\n    white-space: nowrap;\n    color: #cdcdcd;\n    margin-right: 20px;\n    margin-bottom: 0px;\n    padding: 3px 30px 0 30px;\n    font-size: 1.3em;\n    font-weight: normal;\n    line-height: 1.2; }\n    #header h1 a {\n      text-decoration: none; }\n      #header h1 a:hover {\n        color: #fff; }\n    #header h1 img {\n      position: relative;\n      top: -2px; }\n  #header a, #header a:link {\n    color: #cdcdcd; }\n  #header .header-item {\n    top: 2px;\n    position: relative;\n    height: 20px; }\n  #header ul.tabs {\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n    margin: 0;\n    padding: 0; }\n    #header ul.tabs li {\n      /* Hover on li, display the ul */ }\n      #header ul.tabs li:hover > ul {\n        display: block; }\n    #header ul.tabs > li {\n      display: inline-block;\n      margin-right: 4px;\n      margin-top: 5px;\n      margin-bottom: 5px;\n      font-size: 1.0em;\n      position: relative;\n      /* Drop down menus */ }\n      #header ul.tabs > li a {\n        text-decoration: none;\n        padding: 6px 10px 4px 10px;\n        position: relative;\n        border-radius: 10px; }\n      #header ul.tabs > li.current > a {\n        background: #7b8389;\n        color: #fff; }\n      #header ul.tabs > li.has_nested > a {\n        background: url(\"data:image/png;base64,R0lGODlhBwAEAKIAAL6+vry8vIiIiJWVlf///3t7ewAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==\") no-repeat calc(100% - 7px) 50%;\n        padding-right: 20px; }\n      #header ul.tabs > li.has_nested.current > a {\n        background: #7b8389 url(\"data:image/png;base64,R0lGODlhBwAEAKIAAG1tbWxsbElJSVBQUP///0JCQgAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==\") no-repeat calc(100% - 7px) 50%;\n        padding-right: 20px; }\n      #header ul.tabs > li:hover > a {\n        background: #7b8389;\n        color: #fff; }\n      #header ul.tabs > li.has_nested:hover > a {\n        border-radius: 0;\n        border-top-right-radius: 10px;\n        border-top-left-radius: 10px;\n        border-bottom: 5px solid #7b8389;\n        background: #7b8389 url(\"data:image/png;base64,R0lGODlhBwAEAKIAAG1tbWxsbElJSVBQUP///0JCQgAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==\") no-repeat calc(100% - 7px) 50%;\n        z-index: 1020; }\n      #header ul.tabs > li ul {\n        background: #7b8389;\n        border-top-right-radius: 10px;\n        border-top-left-radius: 0;\n        border-bottom-right-radius: 10px;\n        border-bottom-left-radius: 10px;\n        box-shadow: 0 1px 3px #444;\n        position: absolute;\n        width: 120%;\n        min-width: 175px;\n        max-width: calc(100% + 20px);\n        margin-top: 5px;\n        float: left;\n        display: none;\n        padding: 3px 0px 5px 0;\n        list-style: none;\n        z-index: 1010; }\n        #header ul.tabs > li ul li {\n          position: relative;\n          margin: 0px; }\n          #header ul.tabs > li ul li a {\n            background: none;\n            display: block; }\n            #header ul.tabs > li ul li a:hover {\n              color: #fff;\n              background: none; }\n          #header ul.tabs > li ul li.current a {\n            border-radius: 0; }\n          #header ul.tabs > li ul li.has_nested > a {\n            background: url(\"data:image/gif;base64,R0lGODlhBAAHAKECAKqqqszMzPkVFfkVFSH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAIALAAAAAAEAAcAAAIJlA0XKbH9nmAFADs=\") no-repeat calc(100% - 7px) 55%;\n            padding-right: 20px; }\n          #header ul.tabs > li ul li.has_nested:hover > a {\n            background: url(\"data:image/gif;base64,R0lGODlhBAAHAMIEAG1tbWxsbElJSVBQUPkVFfkVFfkVFfkVFSH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAEAAcAAAMKGKqy02G8OGeACQA7\") no-repeat calc(100% - 7px) 55%;\n            color: #fff; }\n          #header ul.tabs > li ul li ul {\n            border-top-right-radius: 10px;\n            border-top-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n            border-bottom-left-radius: 10px;\n            margin-top: 0;\n            top: -3px;\n            left: 100%;\n            /* Create an invisible backdrop that adds 8px margin around the dropdown menu or submenu\n               that maintains the hover. This makes it much easier to navigate to submenus in\n               particular without losing hover accientally, especially near rounded corners. */ }\n            #header ul.tabs > li ul li ul:after {\n              content: \"\";\n              display: block;\n              position: absolute;\n              top: -8px;\n              left: -8px;\n              height: calc(100% + 16px);\n              width: calc(100% + 16px);\n              z-index: -2; }\n  #header #tabs {\n    width: 100%; }\n  #header #utility_nav {\n    color: #aaa;\n    display: table-cell;\n    white-space: nowrap;\n    margin: 0;\n    padding: 0;\n    padding-right: 26px;\n    text-align: right; }\n    #header #utility_nav a {\n      text-decoration: none; }\n    #header #utility_nav a:hover {\n      color: #fff; }\n    #header #utility_nav li {\n      display: inline; }\n\nform {\n  /* Reset margins & Padding */\n  /* Nested Fieldsets and Legends */\n  /* Text Fields */\n  /* semantic_errors */\n  /* Buttons */ }\n  form ul, form ol, form li, form fieldset, form legend, form input, form textarea, form select, form p {\n    margin: 0;\n    padding: 0; }\n  form ol, form ul {\n    list-style: none; }\n  form fieldset {\n    border: 0;\n    padding: 10px 0;\n    margin-bottom: 20px; }\n    form fieldset.inputs {\n      background: #f4f4f4;\n      border-radius: 4px;\n      box-shadow: inset 0 1px 4px #ddd; }\n    form fieldset legend {\n      width: 100%; }\n      form fieldset legend span {\n        display: block;\n        background-color: #efefef;\n        background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n        text-shadow: #fff 0 1px 0;\n        border: solid 1px #cdcdcd;\n        border-color: #d4d4d4;\n        border-top-color: #e6e6e6;\n        border-right-color: #d4d4d4;\n        border-bottom-color: #cdcdcd;\n        border-left-color: #d4d4d4;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n        font-size: 1em;\n        font-weight: bold;\n        line-height: 18px;\n        margin-bottom: 0.5em;\n        color: #5E6469;\n        padding: 5px 10px 3px 10px; }\n    form fieldset ol > li {\n      padding: 10px; }\n      form fieldset ol > li label {\n        display: block;\n        width: 20%;\n        float: left;\n        font-size: 1.0em;\n        font-weight: bold;\n        color: #5E6469; }\n        form fieldset ol > li label abbr {\n          border: none;\n          color: #aaa; }\n    form fieldset ol > li.has_many_container {\n      padding: 20px 10px; }\n      form fieldset ol > li.has_many_container h3 {\n        font-size: 12px;\n        font-weight: bold; }\n      form fieldset ol > li.has_many_container .has_many_fields {\n        margin: 10px 0; }\n    form fieldset ol > li > li label {\n      line-height: 100%;\n      padding-top: 0; }\n      form fieldset ol > li > li label input {\n        line-height: 100%;\n        vertical-align: middle;\n        margin-top: -0.1em; }\n  form .has_many_fields {\n    position: relative; }\n  form .has_many_container .handle {\n    position: absolute;\n    top: calc(50% - 3em / 2);\n    right: 2px;\n    padding: 0;\n    cursor: move; }\n  form .has_many_container.ui-sortable .has_many_container {\n    margin-right: 2em; }\n  form .ui-sortable input[type=text], form .ui-sortable input[type=password], form .ui-sortable input[type=email], form .ui-sortable input[type=number], form .ui-sortable input[type=url], form .ui-sortable input[type=tel], form .ui-sortable textarea {\n    width: calc(80% - 22px - 2em - 1px); }\n  form fieldset > ol > li fieldset {\n    position: relative;\n    padding: 0;\n    margin-bottom: 0; }\n    form fieldset > ol > li fieldset:not(.inputs) ol {\n      float: left;\n      width: 74%;\n      margin: 0;\n      padding: 0 0 0 20%; }\n      form fieldset > ol > li fieldset:not(.inputs) ol li {\n        padding: 0;\n        border: 0; }\n    form fieldset > ol > li fieldset.inputs ol {\n      float: left;\n      width: 100%;\n      margin: 0; }\n  form input[type=text],\n  form input[type=password],\n  form input[type=email],\n  form input[type=number],\n  form input[type=url],\n  form input[type=tel],\n  form input[type=date],\n  form input[type=time],\n  form textarea {\n    width: calc(80% - 22px);\n    border: 1px solid #c9d0d6;\n    border-radius: 3px;\n    font-size: 0.95em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    outline: none;\n    padding: 8px 10px 7px; }\n    form input[type=text]:focus,\n    form input[type=password]:focus,\n    form input[type=email]:focus,\n    form input[type=number]:focus,\n    form input[type=url]:focus,\n    form input[type=tel]:focus,\n    form input[type=date]:focus,\n    form input[type=time]:focus,\n    form textarea:focus {\n      border: 1px solid #99a2aa;\n      box-shadow: 0 0 4px #99a2aa; }\n  form input[type=date] {\n    width: calc(100% - 22px); }\n  form fieldset > ol > li {\n    /* Hints */\n    /* Date and Time Fields */\n    /* Check Boxes or Radio fields */\n    /* Boolean Field */\n    /* Hidden fields */\n    /* Errors */ }\n    form fieldset > ol > li p.inline-hints {\n      font-size: 0.95em;\n      font-style: italic;\n      color: #666;\n      margin: 0.5em 0 0 20%; }\n    form fieldset > ol > li.date_select fieldset ol li, form fieldset > ol > li.time_select fieldset ol li, form fieldset > ol > li.datetime_select fieldset ol li {\n      float: left;\n      width: auto;\n      margin: 0 0.5em 0 0; }\n      form fieldset > ol > li.date_select fieldset ol li label, form fieldset > ol > li.time_select fieldset ol li label, form fieldset > ol > li.datetime_select fieldset ol li label {\n        display: none; }\n      form fieldset > ol > li.date_select fieldset ol li input, form fieldset > ol > li.time_select fieldset ol li input, form fieldset > ol > li.datetime_select fieldset ol li input {\n        display: inline;\n        margin: 0;\n        padding: 0; }\n    form fieldset > ol > li.check_boxes fieldset ol, form fieldset > ol > li.radio fieldset ol {\n      margin-bottom: -0.6em; }\n      form fieldset > ol > li.check_boxes fieldset ol li, form fieldset > ol > li.radio fieldset ol li {\n        margin: 0.1em 0 0.5em 0; }\n        form fieldset > ol > li.check_boxes fieldset ol li label, form fieldset > ol > li.radio fieldset ol li label {\n          float: none;\n          width: 100%; }\n          form fieldset > ol > li.check_boxes fieldset ol li label input, form fieldset > ol > li.radio fieldset ol li label input {\n            margin-right: 0.2em; }\n    form fieldset > ol > li.boolean {\n      min-height: 1.1em; }\n      form fieldset > ol > li.boolean label {\n        width: 80%;\n        padding-left: 20%;\n        padding-right: 10px;\n        text-transform: none !important;\n        font-weight: normal; }\n        form fieldset > ol > li.boolean label input {\n          margin: 0 0.5em 0 0.2em; }\n    form fieldset > ol > li.hidden {\n      padding: 0; }\n    form fieldset > ol > li p.inline-errors {\n      color: #932419;\n      font-weight: bold;\n      margin: 0.3em 0 0 20%; }\n    form fieldset > ol > li ul.errors {\n      color: #932419;\n      margin: 0.5em 0 0 20%;\n      list-style: square; }\n      form fieldset > ol > li ul.errors li {\n        padding: 0;\n        border: none;\n        display: list-item; }\n    form fieldset > ol > li.error input[type=text], form fieldset > ol > li.error input[type=password], form fieldset > ol > li.error input[type=email], form fieldset > ol > li.error input[type=number], form fieldset > ol > li.error input[type=url], form fieldset > ol > li.error input[type=tel], form fieldset > ol > li.error textarea {\n      border: 1px solid #932419; }\n  form ul.errors {\n    background: #fae6e4;\n    border-radius: 4px;\n    color: #932419;\n    font-weight: bold;\n    margin-bottom: 10px;\n    padding: 10px;\n    list-style: square; }\n    form ul.errors li {\n      margin-left: 15px;\n      padding: 0;\n      border: none;\n      display: list-item; }\n  form input[type=submit], form input[type=button], form button {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #838a90;\n    background-image: linear-gradient(180deg, #838a90, #414549);\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n    border: solid 1px #484e53;\n    border-color: #484e53;\n    border-top-color: #616a71;\n    border-right-color: #484e53;\n    border-bottom-color: #363b3f;\n    border-left-color: #484e53;\n    color: #efefef;\n    cursor: pointer; }\n    form input[type=submit].disabled, form input[type=button].disabled, form button.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    form input[type=submit]:not(.disabled):hover, form input[type=button]:not(.disabled):hover, form button:not(.disabled):hover {\n      background-color: #8b9297;\n      background-image: linear-gradient(180deg, #8b9297, #484d51); }\n    form input[type=submit]:not(.disabled):active, form input[type=button]:not(.disabled):active, form button:not(.disabled):active {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n      background-color: #71797f;\n      background-image: linear-gradient(180deg, #71797f, #35383b); }\n  form .buttons, form .actions {\n    margin-top: 15px; }\n    form .buttons input[type=submit], form .buttons input[type=button], form .buttons button, form .actions input[type=submit], form .actions input[type=button], form .actions button {\n      margin-right: 10px; }\n  form .actions .create_another {\n    float: none;\n    margin-bottom: 10px; }\n    form .actions .create_another label {\n      float: none;\n      display: inline; }\n  form fieldset.buttons li, form fieldset.actions li {\n    float: left;\n    padding: 0; }\n    form fieldset.buttons li.cancel a, form fieldset.actions li.cancel a {\n      border-radius: 200px;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 1.0em;\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      line-height: 12px;\n      margin-right: 3px;\n      padding: 7px 16px 6px;\n      text-decoration: none;\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n      border: solid 1px #c7c7c7;\n      border-color: #c7c7c7;\n      border-top-color: #d3d3d3;\n      border-right-color: #c7c7c7;\n      border-bottom-color: #c2c2c2;\n      border-left-color: #c7c7c7;\n      text-shadow: #fff 0 1px 0;\n      color: #5E6469; }\n      form fieldset.buttons li.cancel a.disabled, form fieldset.actions li.cancel a.disabled {\n        opacity: 0.5;\n        cursor: default; }\n      form fieldset.buttons li.cancel a:not(.disabled):hover, form fieldset.actions li.cancel a:not(.disabled):hover {\n        background-color: #FFFFFF;\n        background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n      form fieldset.buttons li.cancel a:not(.disabled):active, form fieldset.actions li.cancel a:not(.disabled):active {\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n        border-color: #b9b9b9;\n        border-top-color: #c2c2c2;\n        border-right-color: #b9b9b9;\n        border-bottom-color: #b7b7b7;\n        border-left-color: #b9b9b9;\n        background-color: #F3F3F3;\n        background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n\n.sidebar_section label {\n  display: block;\n  text-transform: uppercase;\n  color: #5E6469;\n  font-size: 0.9em;\n  font-weight: bold; }\n\n.sidebar_section select {\n  width: 240px; }\n\n.sidebar_section input[type=text], .sidebar_section input[type=password], .sidebar_section input[type=email], .sidebar_section input[type=url], .sidebar_section input[type=tel], .sidebar_section textarea {\n  width: 220px; }\n\nform.filter_form .filter_form_field {\n  margin-bottom: 10px;\n  clear: both; }\n  form.filter_form .filter_form_field.select_and_search input[type=text] {\n    margin-left: 16px;\n    width: 88px; }\n  form.filter_form .filter_form_field.select_and_search select {\n    width: 108px; }\n  form.filter_form .filter_form_field.filter_check_boxes label {\n    margin-bottom: 3px; }\n  form.filter_form .filter_form_field.filter_check_boxes fieldset {\n    margin-bottom: 0px;\n    padding-bottom: 0px; }\n  form.filter_form .filter_form_field.filter_check_boxes .check_boxes_wrapper label {\n    font-weight: normal;\n    margin-bottom: 3px;\n    text-transform: none;\n    font-size: 1.0em; }\n    form.filter_form .filter_form_field.filter_check_boxes .check_boxes_wrapper label input {\n      vertical-align: baseline; }\n  form.filter_form .filter_form_field.filter_date_range input[type=text] {\n    box-sizing: border-box;\n    width: 114px; }\n    form.filter_form .filter_form_field.filter_date_range input[type=text] + input {\n      margin-left: 6px; }\n\nform.filter_form a.clear_filters_btn {\n  border-radius: 200px;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n  background-color: #FFFFFF;\n  background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n  border: solid 1px #c7c7c7;\n  border-color: #c7c7c7;\n  border-top-color: #d3d3d3;\n  border-right-color: #c7c7c7;\n  border-bottom-color: #c2c2c2;\n  border-left-color: #c7c7c7;\n  text-shadow: #fff 0 1px 0;\n  color: #5E6469; }\n  form.filter_form a.clear_filters_btn.disabled {\n    opacity: 0.5;\n    cursor: default; }\n  form.filter_form a.clear_filters_btn:not(.disabled):hover {\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n  form.filter_form a.clear_filters_btn:not(.disabled):active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n    border-color: #b9b9b9;\n    border-top-color: #c2c2c2;\n    border-right-color: #b9b9b9;\n    border-bottom-color: #b7b7b7;\n    border-left-color: #b9b9b9;\n    background-color: #F3F3F3;\n    background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n\n.comments .active_admin_comment {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  max-width: 700px; }\n  .comments .active_admin_comment:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0; }\n  .comments .active_admin_comment .active_admin_comment_meta {\n    width: 130px;\n    float: left;\n    overflow: hidden;\n    font-size: 0.9em;\n    color: #767e84; }\n    .comments .active_admin_comment .active_admin_comment_meta .active_admin_comment_author {\n      font-size: 1.2em;\n      font-weight: bold;\n      margin: 0;\n      color: #5E6469; }\n  .comments .active_admin_comment .active_admin_comment_body {\n    margin-left: 150px; }\n\n.comments form.active_admin_comment {\n  margin: 0;\n  padding: 0;\n  margin-left: 150px; }\n  .comments form.active_admin_comment fieldset.inputs {\n    margin: 0;\n    padding: 0;\n    background: none;\n    box-shadow: none; }\n  .comments form.active_admin_comment li {\n    padding: 0; }\n  .comments form.active_admin_comment fieldset.buttons {\n    padding: 0;\n    margin-top: 5px; }\n\nbody.logged_in .flash {\n  background-color: #f7f1d3;\n  background-image: linear-gradient(180deg, #f7f1d3, #f5edc5);\n  text-shadow: #fafafa 0 1px 0;\n  border-bottom: 1px solid #eee098;\n  color: #cb9810;\n  font-weight: bold;\n  font-size: 1.1em;\n  line-height: 1.0em;\n  padding: 13px 30px 11px;\n  position: relative; }\n  body.logged_in .flash.flash_notice {\n    background-color: #dce9dd;\n    background-image: linear-gradient(180deg, #dce9dd, #ccdfcd);\n    border-bottom: 1px solid #adcbaf;\n    color: #416347; }\n  body.logged_in .flash.flash_error {\n    background-color: #f5e4e4;\n    background-image: linear-gradient(180deg, #f5e4e4, #f1dcdc);\n    border-bottom: 1px solid #e0c2c0;\n    color: #b33c33; }\n\nbody.logged_out .flash {\n  box-shadow: none;\n  text-shadow: #fff 0 1px 0;\n  background: none;\n  color: #666;\n  font-weight: bold;\n  line-height: 1.0em;\n  padding: 0;\n  margin-bottom: 8px; }\n\n.ui-datepicker {\n  background: #fff;\n  background-clip: padding-box;\n  color: #fff;\n  display: none;\n  margin-top: 2px;\n  padding: 0;\n  text-align: center;\n  width: 160px; }\n  .ui-datepicker a {\n    text-decoration: none; }\n    .ui-datepicker a:hover {\n      cursor: pointer; }\n  .ui-datepicker .ui-datepicker-header {\n    height: 14px;\n    background-color: #6a7176;\n    background-image: linear-gradient(180deg, #6a7176, #4d5256);\n    border-bottom: 1px solid #44484b;\n    padding: 12px 5px 7px 4px;\n    margin: 0px 0px 2px 2px;\n    width: 147px;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    position: relative;\n    z-index: 2000; }\n    .ui-datepicker .ui-datepicker-header:before {\n      content: \"\";\n      position: absolute;\n      right: 45%;\n      top: -6px;\n      width: 0px;\n      height: 0px;\n      border-left: 8.5px solid rgba(0, 0, 0, 0);\n      border-right: 8.5px solid rgba(0, 0, 0, 0);\n      border-bottom: 10px solid #676e73; }\n    .ui-datepicker .ui-datepicker-header .ui-datepicker-title {\n      text-shadow: #000 0 1px 0;\n      color: #fff;\n      display: block;\n      font-size: 1.1em;\n      font-weight: bold;\n      line-height: 0.8em;\n      text-align: center; }\n      .ui-datepicker .ui-datepicker-header .ui-datepicker-title .ui-datepicker-month {\n        margin: -4px 0 0 0; }\n      .ui-datepicker .ui-datepicker-header .ui-datepicker-title .ui-datepicker-year {\n        margin: -4px 0 0 0; }\n    .ui-datepicker .ui-datepicker-header a {\n      color: #fff;\n      display: block;\n      height: 19px;\n      margin-top: -4px;\n      width: 10px; }\n      .ui-datepicker .ui-datepicker-header a.ui-datepicker-prev {\n        float: left;\n        width: 0;\n        height: 0;\n        margin: 0px 0px 0px 4px;\n        border-top: 5px solid transparent;\n        border-right: 5px solid white;\n        border-bottom: 5px solid transparent; }\n      .ui-datepicker .ui-datepicker-header a.ui-datepicker-next {\n        float: right;\n        width: 0;\n        height: 0;\n        margin: 0px 4px 0px 0px;\n        border-top: 5px solid transparent;\n        border-left: 5px solid white;\n        border-bottom: 5px solid transparent; }\n      .ui-datepicker .ui-datepicker-header a span {\n        display: none; }\n  .ui-datepicker table.ui-datepicker-calendar {\n    border-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.26);\n    background-color: #f4f4f4;\n    border: solid 1px #63686e;\n    left: 2px;\n    margin-bottom: 0px;\n    position: relative;\n    top: -2px;\n    width: 156px; }\n    .ui-datepicker table.ui-datepicker-calendar td, .ui-datepicker table.ui-datepicker-calendar th {\n      padding: 0px;\n      text-align: center; }\n    .ui-datepicker table.ui-datepicker-calendar thead th {\n      background-color: #dbdddf;\n      color: #333333;\n      font-weight: normal;\n      font-size: 0.8em;\n      padding-top: 1px; }\n    .ui-datepicker table.ui-datepicker-calendar tbody {\n      color: #666666; }\n      .ui-datepicker table.ui-datepicker-calendar tbody td {\n        border: none;\n        height: 24px;\n        width: 22px; }\n        .ui-datepicker table.ui-datepicker-calendar tbody td a {\n          border-radius: 3px;\n          color: #666666;\n          font-weight: bold;\n          font-size: 0.85em;\n          padding: 4px; }\n          .ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-active {\n            background-color: #5a5f64;\n            color: #fff; }\n            .ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-active.ui-state-hover {\n              background-color: #5a5f64;\n              color: #fff; }\n          .ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-hover {\n            background-color: #eceef0; }\n          .ui-datepicker table.ui-datepicker-calendar tbody td a.ui-state-highlight {\n            background-color: #dbdddf; }\n\ntable tr td {\n  vertical-align: top; }\n\ntable tr th {\n  text-align: left; }\n\ntable.index_table {\n  width: 100%;\n  margin-bottom: 10px;\n  border: 0;\n  border-spacing: 0; }\n  table.index_table th {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px;\n    border-right: none;\n    padding-left: 12px;\n    padding-right: 12px; }\n    table.index_table th a, table.index_table th a:link, table.index_table th a:visited {\n      color: #5E6469;\n      text-decoration: none;\n      display: block;\n      white-space: nowrap; }\n    table.index_table th.sortable a {\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAABGCAYAAAAAVo4aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAH5JREFUeNpi3LhlOwMU1AExGxDXwARYoHQLEFdD2cxAXAliMKFJgEAFEHfBJEHGMKLhMpgkTsAEdch/NNwCk2xCdiEQtML4LEgCf6EubUX3Cgh0oNvJ+P//f7wOGpUclRwYSZb41CyidNbB8giNM+9oXhmVHHm5bJjUSAABBgDKKiwMMUxPwgAAAABJRU5ErkJggg==\") no-repeat 0 4px;\n      padding-left: 13px; }\n    table.index_table th.sorted-asc a {\n      background-position: 0 -27px; }\n    table.index_table th.sorted-desc a {\n      background-position: 0 -56px; }\n    table.index_table th.sorted-asc, table.index_table th.sorted-desc {\n      background-color: #e2e2e2;\n      background-image: linear-gradient(180deg, #e2e2e2, #d2d4d6); }\n    table.index_table th:last-child {\n      border-right: solid 1px #d4d4d4; }\n  table.index_table tr.even td {\n    background: #f4f5f5; }\n  table.index_table tr.selected td {\n    background: #d9e4ec; }\n  table.index_table td {\n    padding: 10px 12px 8px 12px;\n    border-bottom: 1px solid #e8e8e8;\n    vertical-align: top; }\n\n.panel_contents table {\n  margin-top: 5px; }\n  .panel_contents table th {\n    padding-top: 10px;\n    background: none;\n    color: #5E6469;\n    box-shadow: none;\n    text-shadow: #fff 0 1px 0;\n    text-transform: uppercase;\n    border-bottom: 1px solid #ccc; }\n  .panel_contents table tr.odd td {\n    background: #ecedee; }\n  .panel_contents table tr.even td {\n    background: #f4f5f5; }\n\n.attributes_table {\n  overflow: hidden; }\n\n.attributes_table table col.even {\n  background: #f4f5f5; }\n\n.attributes_table table col.odd {\n  background: #ecedee; }\n\n.attributes_table table th, .attributes_table table td {\n  padding: 8px 12px 6px 12px;\n  vertical-align: top;\n  border-bottom: 1px solid #e8e8e8; }\n\n.attributes_table table th {\n  box-shadow: none;\n  background: none;\n  width: 150px;\n  font-size: 0.9em;\n  padding-left: 0;\n  text-transform: uppercase;\n  color: #5E6469;\n  text-shadow: #fff 0 1px 0; }\n\n.attributes_table table td .empty {\n  color: #bbb;\n  font-size: 0.8em;\n  text-transform: uppercase;\n  letter-spacing: 0.2em; }\n\n.sidebar_section .attributes_table th {\n  width: 50px; }\n\n#collection_selection_toggle_panel:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0; }\n\n#collection_selection_toggle_panel > .resource_selection_toggle_cell {\n  float: left; }\n\n.ui-widget-overlay {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001; }\n\n.ui-dialog {\n  position: fixed;\n  z-index: 1002;\n  background: #f4f4f4;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 4px #ddd;\n  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px; }\n  .ui-dialog .ui-dialog-titlebar {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px; }\n    .ui-dialog .ui-dialog-titlebar span {\n      font-size: 1.1em; }\n  .ui-dialog ul {\n    list-style-type: none; }\n  .ui-dialog li {\n    margin: 10px 0; }\n  .ui-dialog label {\n    margin-right: 10px; }\n  .ui-dialog .ui-dialog-buttonpane, .ui-dialog form {\n    padding: 7px 15px 13px; }\n  .ui-dialog .ui-dialog-buttonpane button {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #838a90;\n    background-image: linear-gradient(180deg, #838a90, #414549);\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n    border: solid 1px #484e53;\n    border-color: #484e53;\n    border-top-color: #616a71;\n    border-right-color: #484e53;\n    border-bottom-color: #363b3f;\n    border-left-color: #484e53;\n    color: #efefef; }\n    .ui-dialog .ui-dialog-buttonpane button.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    .ui-dialog .ui-dialog-buttonpane button:not(.disabled):hover {\n      background-color: #8b9297;\n      background-image: linear-gradient(180deg, #8b9297, #484d51); }\n    .ui-dialog .ui-dialog-buttonpane button:not(.disabled):active {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n      background-color: #71797f;\n      background-image: linear-gradient(180deg, #71797f, #35383b); }\n  .ui-dialog .ui-dialog-buttonpane button:last-child {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469; }\n    .ui-dialog .ui-dialog-buttonpane button:last-child.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    .ui-dialog .ui-dialog-buttonpane button:last-child:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n    .ui-dialog .ui-dialog-buttonpane button:last-child:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n\n.active_admin_dialog.ui-dialog .ui-dialog-titlebar-close {\n  display: none; }\n\n.blank_slate_container {\n  clear: both;\n  text-align: center; }\n  .blank_slate_container .blank_slate {\n    border-radius: 3px;\n    border: 1px dashed #DADADA;\n    color: #AAA;\n    display: inline-block;\n    font-size: 1.2em;\n    font-weight: bold;\n    padding: 14px 25px;\n    text-align: center; }\n    .blank_slate_container .blank_slate small {\n      display: block;\n      font-size: 0.9em;\n      font-weight: normal; }\n\n.admin_dashboard .blank_slate_container .blank_slate {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.with_sidebar .blank_slate_container .blank_slate {\n  margin-top: 80px; }\n\n.breadcrumb {\n  display: block;\n  font-size: 0.9em;\n  font-weight: normal;\n  line-height: 1.0em;\n  margin-bottom: 12px;\n  text-transform: uppercase; }\n  .breadcrumb a, .breadcrumb a:link, .breadcrumb a:visited, .breadcrumb a:active {\n    color: #8a949e;\n    text-decoration: none; }\n  .breadcrumb a:hover {\n    text-decoration: underline; }\n  .breadcrumb .breadcrumb_sep {\n    margin: 0 2px;\n    color: #aab2ba; }\n\n.dropdown_menu {\n  display: inline; }\n  .dropdown_menu .dropdown_menu_button {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469;\n    position: relative;\n    padding-right: 22px !important;\n    cursor: pointer; }\n    .dropdown_menu .dropdown_menu_button.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    .dropdown_menu .dropdown_menu_button:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n    .dropdown_menu .dropdown_menu_button:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n    .dropdown_menu .dropdown_menu_button:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 3px 3px 0;\n      border-style: solid;\n      border-color: #FFF transparent;\n      right: 12px;\n      top: 45%; }\n    .dropdown_menu .dropdown_menu_button:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 3px 3px 0;\n      border-style: solid;\n      border-color: #777 transparent;\n      right: 12px;\n      top: 45%; }\n  .dropdown_menu .dropdown_menu_nipple {\n    content: \"\";\n    position: absolute;\n    top: -6px;\n    display: block;\n    width: 0;\n    height: 0;\n    border-width: 0 6px 6px;\n    border-style: solid;\n    border-color: #545a5e transparent;\n    z-index: 100; }\n    .dropdown_menu .dropdown_menu_nipple:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 0 5px 5px;\n      border-style: solid;\n      border-color: #838a90 transparent;\n      left: -5px;\n      top: 1px; }\n    .dropdown_menu .dropdown_menu_nipple:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 0 5px 5px;\n      border-style: solid;\n      border-color: #686e74 transparent;\n      left: -5px;\n      top: 2px; }\n  .dropdown_menu .dropdown_menu_list_wrapper {\n    display: inline-block;\n    position: absolute;\n    background-color: white;\n    padding: 2px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0 1px 3px, #838a90 0px 1px 0px 0px inset;\n    background-color: #5E6469;\n    background-color: #686e74;\n    background-image: linear-gradient(180deg, #686e74, #52575c);\n    border: solid 1px #464a4e;\n    border-top-color: #545a5e;\n    border-bottom-color: #35383b;\n    border-radius: 4px;\n    z-index: 2000;\n    display: none; }\n    .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list {\n      display: block;\n      background-color: #FFF;\n      border: solid 1px #464a4e;\n      box-shadow: #6a7176 0px 1px 0px 0px;\n      border-radius: 3px;\n      margin: 0;\n      overflow: hidden;\n      padding: 8px;\n      list-style-type: none;\n      padding: 0; }\n      .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li {\n        display: block;\n        border-bottom: solid 1px #ebebeb;\n        box-sizing: border-box; }\n        .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li a {\n          display: block;\n          box-sizing: padding-box;\n          font-size: 0.95em;\n          font-weight: bold;\n          padding: 7px 16px 5px;\n          text-decoration: none;\n          text-align: center;\n          white-space: nowrap; }\n          .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li a:hover {\n            background-color: #75a1c2;\n            background-image: linear-gradient(180deg, #75a1c2, #608cb4);\n            text-shadow: #5a83aa 0 1px 0;\n            color: #FFF; }\n          .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li a:active {\n            background-color: #608cb4;\n            background-image: linear-gradient(180deg, #608cb4, #75a1c2);\n            color: #FFF; }\n        .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li:first-child a {\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px; }\n        .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li:last-child {\n          border: none; }\n          .dropdown_menu .dropdown_menu_list_wrapper .dropdown_menu_list li:last-child a {\n            border-bottom-left-radius: 2px;\n            border-bottom-right-radius: 2px; }\n\na.member_link {\n  margin-right: 7px;\n  white-space: nowrap; }\n\na.button, a:link.button, a:visited.button, input[type=submit], input[type=button], button {\n  border-radius: 200px;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n  background-color: #838a90;\n  background-image: linear-gradient(180deg, #838a90, #414549);\n  text-shadow: #000 0 1px 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n  border: solid 1px #484e53;\n  border-color: #484e53;\n  border-top-color: #616a71;\n  border-right-color: #484e53;\n  border-bottom-color: #363b3f;\n  border-left-color: #484e53;\n  color: #efefef; }\n  a.button.disabled, a:link.button.disabled, a:visited.button.disabled, input[type=submit].disabled, input[type=button].disabled, button.disabled {\n    opacity: 0.5;\n    cursor: default; }\n  a.button:not(.disabled):hover, a:link.button:not(.disabled):hover, a:visited.button:not(.disabled):hover, input[type=submit]:not(.disabled):hover, input[type=button]:not(.disabled):hover, button:not(.disabled):hover {\n    background-color: #8b9297;\n    background-image: linear-gradient(180deg, #8b9297, #484d51); }\n  a.button:not(.disabled):active, a:link.button:not(.disabled):active, a:visited.button:not(.disabled):active, input[type=submit]:not(.disabled):active, input[type=button]:not(.disabled):active, button:not(.disabled):active {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n    background-color: #71797f;\n    background-image: linear-gradient(180deg, #71797f, #35383b); }\n\ntable.index_grid td {\n  border: none;\n  background: none;\n  padding: 0 20px 20px 0;\n  margin: 0; }\n\n.columns {\n  clear: both;\n  padding: 0; }\n  .columns .column {\n    float: left; }\n\na, a:link, a:visited {\n  color: #38678b;\n  text-decoration: underline; }\n\na:hover {\n  text-decoration: none; }\n\n.paginated_collection_contents {\n  clear: both; }\n\n.pagination {\n  float: right;\n  font-size: 0.9em;\n  margin-left: 10px; }\n  .pagination a {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469; }\n    .pagination a.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    .pagination a:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n    .pagination a:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n  .pagination span.page.current {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #838a90;\n    background-image: linear-gradient(180deg, #838a90, #414549);\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0px rgba(255, 255, 255, 0.2) inset;\n    border: solid 1px #484e53;\n    border-color: #484e53;\n    border-top-color: #616a71;\n    border-right-color: #484e53;\n    border-bottom-color: #363b3f;\n    border-left-color: #484e53;\n    color: #efefef; }\n    .pagination span.page.current.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    .pagination span.page.current:not(.disabled):hover {\n      background-color: #8b9297;\n      background-image: linear-gradient(180deg, #8b9297, #484d51); }\n    .pagination span.page.current:not(.disabled):active {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 0px #FFF;\n      background-color: #71797f;\n      background-image: linear-gradient(180deg, #71797f, #35383b); }\n  .pagination a, .pagination span.page.current {\n    border-radius: 0px;\n    margin-right: 4px;\n    padding: 2px 5px; }\n\n.pagination_information {\n  float: right;\n  margin-bottom: 5px;\n  color: #b3bcc1; }\n  .pagination_information b {\n    color: #5c6469; }\n\n.download_links {\n  float: left; }\n\n.pagination_per_page {\n  float: right;\n  margin-left: 4px; }\n  .pagination_per_page select {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469;\n    border-radius: 0px;\n    padding: 1px 5px; }\n    .pagination_per_page select.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    .pagination_per_page select:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n    .pagination_per_page select:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n\n.comments .pagination {\n  float: left;\n  margin-bottom: 30px; }\n\n.comments .pagination_information {\n  float: left;\n  color: #000; }\n\n.section, .panel {\n  background: #f4f4f4;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 4px #ddd;\n  margin-bottom: 20px; }\n  .section > h3, .panel > h3 {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px; }\n    .section > h3 .header_action, .panel > h3 .header_action {\n      float: right; }\n  .section > div, .panel > div {\n    padding: 3px 15px 15px 15px; }\n  .section hr, .panel hr {\n    border: none;\n    border-bottom: 1px solid #E8E8E8; }\n\n.sidebar_section {\n  background: #f4f4f4;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 4px #ddd;\n  margin-bottom: 20px; }\n  .sidebar_section > h3 {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px; }\n    .sidebar_section > h3 .header_action {\n      float: right; }\n  .sidebar_section > div {\n    padding: 3px 15px 15px 15px; }\n  .sidebar_section hr {\n    border: none;\n    border-bottom: 1px solid #E8E8E8; }\n\n.columns {\n  margin-bottom: 10px; }\n\n.scopes li .count {\n  color: #8e979e;\n  font-weight: normal;\n  font-size: 0.9em;\n  line-height: 10px; }\n\n.scopes li:first-child a {\n  margin-left: 10px; }\n\n.status_tag {\n  background: #cacaca;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  padding: 3px 5px 2px 5px;\n  font-size: 0.8em; }\n  .status_tag.yes {\n    background: #6090DB; }\n  .status_tag.no {\n    background: grey; }\n\n.table_tools {\n  margin-bottom: 16px; }\n  .table_tools:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0; }\n\n.table_tools .dropdown_menu {\n  float: left; }\n\na.table_tools_button, .table_tools .dropdown_menu_button {\n  border-radius: 200px;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n  background-color: #FFFFFF;\n  background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n  border: solid 1px #c7c7c7;\n  border-color: #c7c7c7;\n  border-top-color: #d3d3d3;\n  border-right-color: #c7c7c7;\n  border-bottom-color: #c2c2c2;\n  border-left-color: #c7c7c7;\n  text-shadow: #fff 0 1px 0;\n  color: #5E6469;\n  background-color: #FFFFFF;\n  background-image: linear-gradient(180deg, #FFFFFF, #F0F0F0);\n  border-color: #d0d0d0;\n  border-top-color: #d9d9d9;\n  border-right-color: #d0d0d0;\n  border-bottom-color: #c5c5c5;\n  border-left-color: #d0d0d0;\n  font-size: 0.9em;\n  padding: 4px 14px 4px;\n  margin: 0; }\n  a.table_tools_button.disabled, .table_tools .dropdown_menu_button.disabled {\n    opacity: 0.5;\n    cursor: default; }\n  a.table_tools_button:not(.disabled):hover, .table_tools .dropdown_menu_button:not(.disabled):hover {\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n  a.table_tools_button:not(.disabled):active, .table_tools .dropdown_menu_button:not(.disabled):active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n    border-color: #b9b9b9;\n    border-top-color: #c2c2c2;\n    border-right-color: #b9b9b9;\n    border-bottom-color: #b7b7b7;\n    border-left-color: #b9b9b9;\n    background-color: #F3F3F3;\n    background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n  a.table_tools_button:not(.disabled):hover, .table_tools .dropdown_menu_button:not(.disabled):hover {\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #F6F6F6); }\n  a.table_tools_button:not(.disabled):active, .table_tools .dropdown_menu_button:not(.disabled):active {\n    border-color: #c8c8c8;\n    border-top-color: #d7d7d7;\n    border-right-color: #c8c8c8;\n    border-bottom-color: #c3c3c3;\n    border-left-color: #c8c8c8;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17) inset;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E8E8E8); }\n\n.table_tools_segmented_control {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n  .table_tools_segmented_control li {\n    float: left; }\n    .table_tools_segmented_control li a {\n      border-width: 1px .5px 1px .5px;\n      border-radius: 0; }\n    .table_tools_segmented_control li:first-child a {\n      border-left-width: 1px;\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px; }\n    .table_tools_segmented_control li:last-child a {\n      border-right-width: 1px;\n      border-top-right-radius: 12px;\n      border-bottom-right-radius: 12px; }\n    .table_tools_segmented_control li.selected a {\n      background-color: #F0F0F0;\n      background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD);\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1) inset;\n      cursor: default; }\n      .table_tools_segmented_control li.selected a:hover {\n        background-color: #F0F0F0;\n        background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD); }\n\n.indexes {\n  float: right; }\n  .indexes li .count {\n    color: #8e979e;\n    font-weight: normal;\n    font-size: 0.9em;\n    line-height: 10px; }\n\n.unsupported_browser {\n  padding: 10px 30px;\n  color: #211e14;\n  background-color: #fae692;\n  background-color: #feefae;\n  background-image: linear-gradient(180deg, #feefae, #fae692);\n  border-bottom: 1px solid #b3a569; }\n  .unsupported_browser h1 {\n    font-size: 13px;\n    font-weight: bold; }\n  .unsupported_browser p {\n    margin-bottom: 0.5em; }\n\n.ui-tabs-nav {\n  list-style: none;\n  display: block;\n  width: auto;\n  margin-bottom: -12px;\n  padding-left: 0;\n  overflow: auto;\n  margin-left: 15px; }\n  .ui-tabs-nav li {\n    display: block;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    float: left; }\n    .ui-tabs-nav li:first-child a {\n      border-left-width: 1px;\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px; }\n    .ui-tabs-nav li:last-child a {\n      border-right-width: 1px;\n      border-top-right-radius: 12px;\n      border-bottom-right-radius: 12px; }\n    .ui-tabs-nav li a {\n      border-radius: 200px;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 1.0em;\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      line-height: 12px;\n      margin-right: 3px;\n      padding: 7px 16px 6px;\n      text-decoration: none;\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n      border: solid 1px #c7c7c7;\n      border-color: #c7c7c7;\n      border-top-color: #d3d3d3;\n      border-right-color: #c7c7c7;\n      border-bottom-color: #c2c2c2;\n      border-left-color: #c7c7c7;\n      text-shadow: #fff 0 1px 0;\n      color: #5E6469;\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F0F0F0);\n      border-color: #d0d0d0;\n      border-top-color: #d9d9d9;\n      border-right-color: #d0d0d0;\n      border-bottom-color: #c5c5c5;\n      border-left-color: #d0d0d0;\n      text-decoration: none;\n      border-radius: 0;\n      border-width: 1px .5px 1px .5px;\n      margin-right: 0;\n      padding: 4px 14px 4px; }\n      .ui-tabs-nav li a.disabled {\n        opacity: 0.5;\n        cursor: default; }\n      .ui-tabs-nav li a:not(.disabled):hover {\n        background-color: #FFFFFF;\n        background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n      .ui-tabs-nav li a:not(.disabled):active {\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n        border-color: #b9b9b9;\n        border-top-color: #c2c2c2;\n        border-right-color: #b9b9b9;\n        border-bottom-color: #b7b7b7;\n        border-left-color: #b9b9b9;\n        background-color: #F3F3F3;\n        background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n      .ui-tabs-nav li a:not(.disabled):hover {\n        background-color: #FFFFFF;\n        background-image: linear-gradient(180deg, #FFFFFF, #F6F6F6); }\n    .ui-tabs-nav li.ui-tabs-active a {\n      cursor: default;\n      background-color: #F0F0F0;\n      background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD);\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1) inset; }\n      .ui-tabs-nav li.ui-tabs-active a a:hover {\n        background-color: #F0F0F0;\n        background-image: linear-gradient(180deg, #F0F0F0, #FDFDFD); }\n\n.tab-content {\n  border: 1px solid #D3D3D3;\n  padding: 15px;\n  padding-top: 30px;\n  text-align: left; }\n\nbody.logged_out {\n  background: #e8e9ea; }\n  body.logged_out #content_wrapper {\n    width: 500px;\n    margin: 70px auto; }\n    body.logged_out #content_wrapper #active_admin_content {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n      background: #fff;\n      padding: 13px 30px; }\n  body.logged_out h2 {\n    background-color: #efefef;\n    background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n    text-shadow: #fff 0 1px 0;\n    border: solid 1px #cdcdcd;\n    border-color: #d4d4d4;\n    border-top-color: #e6e6e6;\n    border-right-color: #d4d4d4;\n    border-bottom-color: #cdcdcd;\n    border-left-color: #d4d4d4;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 18px;\n    margin-bottom: 0.5em;\n    color: #5E6469;\n    padding: 5px 10px 3px 10px;\n    background-color: #6a7176;\n    background-image: linear-gradient(180deg, #6a7176, #4d5256);\n    border-bottom: 1px solid #44484b;\n    text-shadow: #000 0 1px 0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n    border: none;\n    color: #fff;\n    margin: -13px -30px 20px -30px; }\n  body.logged_out #login {\n    /* Login Form */ }\n    body.logged_out #login form fieldset {\n      box-shadow: none;\n      background: none;\n      padding: 0;\n      margin-bottom: 0; }\n      body.logged_out #login form fieldset li {\n        padding: 10px 0; }\n      body.logged_out #login form fieldset input[type=text], body.logged_out #login form fieldset input[type=email], body.logged_out #login form fieldset input[type=password] {\n        width: 70%; }\n      body.logged_out #login form fieldset.buttons {\n        margin-left: 20%; }\n    body.logged_out #login a {\n      float: right;\n      margin-top: -32px; }\n\n#footer {\n  padding: 30px 30px;\n  font-size: 0.8em;\n  clear: both; }\n  #footer p {\n    padding-top: 10px; }\n\n#index_footer {\n  padding-top: 5px;\n  text-align: right;\n  font-size: 0.85em; }\n\n.index_content {\n  clear: both; }\n\n#wrapper {\n  width: 100%; }\n\n.index #wrapper {\n  display: table; }\n\n#active_admin_content {\n  margin: 0;\n  padding: 30px; }\n  #active_admin_content #main_content_wrapper {\n    float: left;\n    width: 100%; }\n    #active_admin_content #main_content_wrapper #main_content {\n      margin-right: 300px; }\n  #active_admin_content.without_sidebar #main_content_wrapper #main_content {\n    margin-right: 0; }\n  #active_admin_content #sidebar {\n    float: left;\n    width: 270px;\n    margin-left: -270px; }\n\n#title_bar {\n  background-color: #efefef;\n  background-image: linear-gradient(180deg, #efefef, #dfe1e2);\n  text-shadow: #fff 0 1px 0;\n  border: solid 1px #cdcdcd;\n  border-color: #d4d4d4;\n  border-top-color: #e6e6e6;\n  border-right-color: #d4d4d4;\n  border-bottom-color: #cdcdcd;\n  border-left-color: #d4d4d4;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px #FFF inset;\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 18px;\n  margin-bottom: 0.5em;\n  color: #5E6469;\n  padding: 5px 10px 3px 10px;\n  box-sizing: border-box;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n  display: table;\n  border-bottom-color: #EEE;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  padding: 10px 30px;\n  z-index: 800; }\n  #title_bar:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0; }\n  #title_bar #titlebar_left, #title_bar #titlebar_right {\n    height: 50px;\n    vertical-align: middle;\n    display: table-cell; }\n  #title_bar #titlebar_right {\n    text-align: right; }\n  #title_bar h2 {\n    margin: 0;\n    padding: 0;\n    font-size: 2.6em;\n    line-height: 100%;\n    font-weight: bold; }\n  #title_bar .action_items span.action_item > a, #title_bar .action_items span.action_item > .dropdown_menu > a {\n    border-radius: 200px;\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.0em;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 12px;\n    margin-right: 3px;\n    padding: 7px 16px 6px;\n    text-decoration: none;\n    background-color: #FFFFFF;\n    background-image: linear-gradient(180deg, #FFFFFF, #E7E7E7);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset;\n    border: solid 1px #c7c7c7;\n    border-color: #c7c7c7;\n    border-top-color: #d3d3d3;\n    border-right-color: #c7c7c7;\n    border-bottom-color: #c2c2c2;\n    border-left-color: #c7c7c7;\n    text-shadow: #fff 0 1px 0;\n    color: #5E6469;\n    padding: 12px 17px 10px;\n    margin: 0px; }\n    #title_bar .action_items span.action_item > a.disabled, #title_bar .action_items span.action_item > .dropdown_menu > a.disabled {\n      opacity: 0.5;\n      cursor: default; }\n    #title_bar .action_items span.action_item > a:not(.disabled):hover, #title_bar .action_items span.action_item > .dropdown_menu > a:not(.disabled):hover {\n      background-color: #FFFFFF;\n      background-image: linear-gradient(180deg, #FFFFFF, #F1F1F1); }\n    #title_bar .action_items span.action_item > a:not(.disabled):active, #title_bar .action_items span.action_item > .dropdown_menu > a:not(.disabled):active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22) inset, 0 1px 0 0px #EEE;\n      border-color: #b9b9b9;\n      border-top-color: #c2c2c2;\n      border-right-color: #b9b9b9;\n      border-bottom-color: #b7b7b7;\n      border-left-color: #b9b9b9;\n      background-color: #F3F3F3;\n      background-image: linear-gradient(180deg, #F3F3F3, #D8D8D8); }\n\nbody {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-size: 72%;\n  background: #FFF;\n  color: #323537; }\n","// Adapted from Blueprint CSS Framework\n//\n// Copyright (c) 2007 - 2010 blueprintcss.org\n//\n// Permission is hereby granted, free of charge, to any person\n// obtaining a copy of this software and associated documentation\n// files (the \"Software\"), to deal in the Software without\n// restriction, including without limitation the rights to use,\n// copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the\n// Software is furnished to do so, subject to the following\n// conditions:\n//\n// The above copyright notice and this permission notice shall be\n// included in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n// OTHER DEALINGS IN THE SOFTWARE.\n\n// Default font settings.  The font-size percentage is of 16px. (0.75 * 16px = 12px) */\nhtml { font-size:100.01%; }\nbody { font-size: 75%; font-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif; }\n\n// Headings\nh1,h2,h3,h4,h5,h6 {\n  font-weight: normal;\n  color: $primary-color;\n  img { margin: 0; }\n}\n\nh1 { font-size: 3em; line-height: 1; margin-bottom: 0.5em; }\nh2 { font-size: 2em; margin-bottom: 0.75em; }\nh3 { font-size: 1.5em; line-height: 1; margin-bottom: 1em; }\nh4 { font-size: 1.2em; line-height: 1.25; margin-bottom: 1.25em; }\nh5 { font-size: 1em; font-weight: bold; margin-bottom: 1.5em; }\nh6 { font-size: 1em; font-weight: bold; }\n\n\np {\n  margin: 0 0 1.5em;\n\n  .left     { margin: 1.5em 1.5em 1.5em 0; padding: 0; }\n  .right { margin: 1.5em 0 1.5em 1.5em; padding: 0; }\n}\n\n.left              { float: left !important; }\n.right             { float: right !important; }\n\nblockquote  { margin: 1.5em; color: #666; font-style: italic; }\nstrong,dfn    { font-weight: bold; }\nem,dfn      { font-style: italic; }\nsup, sub    { line-height: 0; }\n\nabbr,\nacronym     { border-bottom: 1px dotted #666; }\naddress     { margin: 0 0 1.5em; font-style: italic; }\ndel         { color:#666; }\n\npre         { margin: 1.5em 0; white-space: pre; }\npre,code,tt { font: 1em 'andale mono', 'lucida console', monospace; line-height: 1.5; }\n\n// Lists\nli ul,\nli ol       { margin: 0; }\nul, ol      { margin: 0 1.5em 1.5em 0; padding-left: 1.5em; }\n\nul          { list-style-type: disc; }\nol          { list-style-type: decimal; }\n\ndl          { margin: 0 0 1.5em 0; }\ndl dt       { font-weight: bold; }\ndd          { margin-left: 1.5em;}\n\n// Tables\ntable       { margin-bottom: 1.4em; width:100%; }\nth          { font-weight: bold; }\nthead th    { background: #c3d9ff; }\nth,td,caption { padding: 4px 10px 4px 5px; }\n\n// Helper Classes\n.small      { font-size: .8em; margin-bottom: 1.875em; line-height: 1.875em; }\n.large      { font-size: 1.2em; line-height: 2.5em; margin-bottom: 1.25em; }\n.hide       { display: none; }\n\n.quiet      { color: #666; }\n.loud       { color: #000; }\n.highlight  { background:#ff0; }\n.added      { background:#060; color: #fff; }\n.removed    { background:#900; color: #fff; }\n\n.first      { margin-left:0; padding-left:0; }\n.last       { margin-right:0; padding-right:0; }\n.top        { margin-top:0; padding-top:0; }\n.bottom     { margin-bottom:0; padding-bottom:0; }\n","// Variables used throughout Active Admin.\n// They can be overridden by prepending your own\n// to 'app/assets/stylesheets/active_admin.scss'.\n\n// Images\n$menu-arrow-light-icon-url: 'data:image/png;base64,R0lGODlhBwAEAKIAAL6+vry8vIiIiJWVlf///3t7ewAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==' !default;\n$menu-arrow-dark-icon-url: 'data:image/png;base64,R0lGODlhBwAEAKIAAG1tbWxsbElJSVBQUP///0JCQgAAAAAAACH5BAEAAAUALAAAAAAHAAQAAAMLWLol80MoF5mQKgEAOw==' !default;\n$menu-arrow-right-light-icon-url: 'data:image/gif;base64,R0lGODlhBAAHAKECAKqqqszMzPkVFfkVFSH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAIALAAAAAAEAAcAAAIJlA0XKbH9nmAFADs=' !default;\n$menu-arrow-right-dark-icon-url: 'data:image/gif;base64,R0lGODlhBAAHAMIEAG1tbWxsbElJSVBQUPkVFfkVFfkVFfkVFSH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAEAAcAAAMKGKqy02G8OGeACQA7' !default;\n\n$orderable-icon-url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAABGCAYAAAAAVo4aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAH5JREFUeNpi3LhlOwMU1AExGxDXwARYoHQLEFdD2cxAXAliMKFJgEAFEHfBJEHGMKLhMpgkTsAEdch/NNwCk2xCdiEQtML4LEgCf6EubUX3Cgh0oNvJ+P//f7wOGpUclRwYSZb41CyidNbB8giNM+9oXhmVHHm5bJjUSAABBgDKKiwMMUxPwgAAAABJRU5ErkJggg==' !default;\n\n// Colors\n$body-background-color: #FFF !default;\n$primary-color: #5E6469 !default;\n$secondary-color: #f0f0f0 !default;\n$text-color: #323537 !default;\n$link-color: #38678b !default;\n$section-header-text-color: $primary-color !default;\n$current-menu-item-background: lighten($primary-color, 12%) !default;\n$hover-menu-item-background: lighten($primary-color, 12%) !default;\n$table-stripe-color: lighten($primary-color, 57%) !default;\n$table-selected-color: #d9e4ec !default;\n$error-color: #932419 !default;\n$blank-slate-primary-color: #AAA !default;\n$breadcrumbs-color: #8a949e !default;\n$breadcrumbs-separator-color: #aab2ba !default;\n$required-field-marker-color: #aaa !default;\n$form-label-color: $section-header-text-color !default;\n$page-header-text-color: #cdcdcd !default;\n\n// Sizes\n$border-width: 1px !default;\n$horizontal-page-margin: 30px !default;\n$sidebar-width: 270px !default;\n$cell-padding: 5px 10px 3px 10px !default;\n$cell-horizontal-padding: 12px !default;\n$section-padding: 15px !default;\n$text-input-horizontal-padding: 10px !default;\n$text-input-total-padding: $text-input-horizontal-padding * 2 + $border-width * 2;\n\n$blank-slate-border: 1px dashed #DADADA !default;\n","// ----------------------------------- Header\n#header {\n  @include primary-gradient;\n  @include shadow;\n  @include text-shadow(#000);\n  display: table;\n  height: 20px;\n  width: 100%;\n  overflow: visible;\n  position: inherit;\n  padding: 5px 0;\n  z-index: 900;\n\n  h1 {\n    display: table-cell;\n    vertical-align: middle;\n    white-space: nowrap;\n    color:  $page-header-text-color;\n    margin-right: 20px;\n    margin-bottom: 0px;\n    padding: 3px $horizontal-page-margin 0 $horizontal-page-margin;\n    font-size: 1.3em;\n    font-weight: normal;\n    line-height: 1.2;\n\n    a {\n      text-decoration: none;\n\n      &:hover {\n        color: #fff;\n      }\n    }\n\n    img {\n      position: relative;\n      top: -2px;\n    }\n  }\n\n  a, a:link { color: $page-header-text-color; }\n\n  .header-item {\n    top: 2px;\n    position: relative;\n    height: 20px\n  }\n\n  ul.tabs {\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n\n    li {\n      /* Hover on li, display the ul */\n      &:hover > ul { display: block;}\n    }\n\n    & > li {\n      display: inline-block;\n      margin-right: 4px;\n      margin-top: 5px;\n      margin-bottom: 5px;\n      font-size: 1.0em;\n      position: relative;\n\n      a {\n        text-decoration: none;\n        padding: 6px 10px 4px 10px;\n        position: relative;\n        @include rounded(10px);\n      }\n\n      &.current > a {\n        background: $current-menu-item-background;\n        color: #fff;\n      }\n\n      &.has_nested > a {\n        background: url($menu-arrow-light-icon-url) no-repeat calc(100% - 7px) 50%;\n        padding-right: 20px;\n      }\n\n      &.has_nested.current > a {\n        background: $current-menu-item-background url($menu-arrow-dark-icon-url) no-repeat calc(100% - 7px) 50%;\n        padding-right: 20px;\n      }\n\n      &:hover > a {\n        background: $hover-menu-item-background;\n        color: #fff;\n      }\n\n      &.has_nested:hover > a {\n        @include rounded-top(10px);\n        border-bottom: 5px solid $hover-menu-item-background;\n        background: $hover-menu-item-background url($menu-arrow-dark-icon-url) no-repeat calc(100% - 7px) 50%;\n        z-index: 1020;\n      }\n\n\n      /* Drop down menus */\n      ul {\n        background: $hover-menu-item-background;\n        @include rounded-all(0,10px,10px,10px);\n        @include shadow(0, 1px, 3px, #444);\n        position: absolute;\n        width: 120%;\n        min-width: 175px;\n        max-width: calc(100% + 20px);\n        margin-top: 5px;\n        float: left;\n        display: none;\n        padding: 3px 0px 5px 0;\n        list-style: none;\n        z-index: 1010;\n\n        li {\n          position: relative;\n          margin: 0px;\n          a {\n            background: none;\n            display: block;\n            &:hover { color: #fff; background: none; }\n          }\n\n          &.current {\n            a { @include rounded(0) }\n          }\n\n          &.has_nested > a {\n            background: url($menu-arrow-right-light-icon-url) no-repeat calc(100% - 7px) 55%;\n            padding-right: 20px;\n          }\n\n          &.has_nested:hover > a {\n            background: url($menu-arrow-right-dark-icon-url) no-repeat calc(100% - 7px) 55%;\n            color: #fff;\n          }\n\n          ul {\n            @include rounded-all(10px,10px,10px,10px);\n            margin-top: 0;\n            top: -3px;\n            left: 100%;\n\n            /* Create an invisible backdrop that adds 8px margin around the dropdown menu or submenu\n               that maintains the hover. This makes it much easier to navigate to submenus in\n               particular without losing hover accientally, especially near rounded corners. */\n            &:after {\n              content: \"\";\n              display: block;\n              position: absolute;\n              top: -8px;\n              left: -8px;\n              height: calc(100% + 16px);\n              width: calc(100% + 16px);\n              z-index: -2;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  #tabs {\n    width: 100%;\n  }\n\n  #utility_nav {\n    color: #aaa;\n    display: table-cell;\n    white-space: nowrap;\n    margin: 0;\n    padding: 0;\n    padding-right: 26px;\n    text-align: right;\n\n    a { text-decoration: none; }\n    a:hover { color: #fff; }\n\n    li {\n      display:inline;\n    }\n  }\n\n}\n","$secondary-gradient-start: #efefef !default;\n$secondary-gradient-stop: #dfe1e2 !default;\n\n@mixin gradient($start, $end){\n  background-color: $start;\n  background-image: linear-gradient(180deg, $start, $end);\n}\n\n@mixin primary-gradient {\n  @include gradient(lighten($primary-color, 5%), darken($primary-color, 7%));\n  border-bottom: 1px solid darken($primary-color, 11%);\n}\n\n@mixin secondary-gradient {\n  @include gradient($secondary-gradient-start, $secondary-gradient-stop);\n}\n\n@mixin highlight-gradient {\n  @include gradient(#75a1c2, #608cb4);\n}\n\n@mixin reverse-highlight-gradient {\n  @include gradient(#608cb4, #75a1c2);\n}\n\n@mixin no-gradient {\n  background: none;\n}\n","@mixin shadow($x: 0, $y: 1px, $blur: 2px, $color: rgba(0,0,0,0.37)) {\n  box-shadow: $x $y $blur $color;\n}\n\n@mixin no-shadow {\n  box-shadow: none;\n}\n\n@mixin inset-shadow($x: 0, $y: 1px, $blur: 2px, $color: #aaa) {\n  box-shadow: inset $x $y $blur $color;\n}\n\n@mixin text-shadow($color: #fff, $x: 0, $y: 1px, $blur: 0) {\n  text-shadow: $color $x $y $blur;\n}\n","@mixin rounded($radius: 3px) {\n  border-radius: $radius;\n}\n\n@mixin rounded-all($top-left:3px, $top-right:3px, $bottom-right:3px, $bottom-left:3px) {\n  border-top-right-radius: $top-right;\n  border-top-left-radius: $top-left;\n  border-bottom-right-radius: $bottom-right;\n  border-bottom-left-radius: $bottom-left;\n}\n\n@mixin rounded-top($radius: 3px) {\n  @include rounded(0);\n  border-top-right-radius: $radius;\n  border-top-left-radius: $radius;\n}\n\n@mixin rounded-bottom($radius: 3px) {\n  @include rounded(0);\n  border-bottom-right-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n","// -------------------------------------- Active Admin Forms\nform {\n  /* Reset margins & Padding */\n  ul, ol, li, fieldset, legend, input, textarea, select, p { margin:0; padding:0; }\n  ol, ul { list-style: none }\n\n  fieldset {\n    border: 0;\n    padding: 10px 0;\n    margin-bottom: 20px;\n\n    &.inputs { @include section-background; }\n\n    legend {\n      width: 100%;\n      span { display: block; @include section-header; }\n    }\n\n    ol > li {\n      padding: 10px;\n      label {\n        display: block;\n        width: 20%;\n        float: left;\n        font-size: 1.0em;\n        font-weight: bold;\n        color: $form-label-color;\n        abbr {\n          border: none;\n          color:  $required-field-marker-color;\n        }\n      }\n    }\n\n    ol > li.has_many_container {\n      padding: 20px 10px;\n      h3 {\n        font-size: 12px;\n        font-weight: bold;\n      }\n      .has_many_fields { margin: 10px 0 }\n    }\n\n    ol > li > li label {\n      line-height:100%;\n      padding-top:0;\n      input {\n        line-height:100%;\n        vertical-align:middle;\n        margin-top:-0.1em;\n      }\n    }\n  }\n\n  // relative so the absolutely-positioned handle will fit\n  .has_many_fields { position: relative }\n\n  .has_many_container {\n    .handle {\n      position: absolute;\n      top: calc(50% - 3em / 2);\n      right: 2px;\n      padding: 0;\n      cursor: move;\n    }\n\n    // If a sortable is nested in a sortable, give the parent handle space!\n    &.ui-sortable .has_many_container {\n      margin-right: 2em;\n    }\n  }\n\n  .ui-sortable {\n    // give the handle space!\n    input[type=text], input[type=password], input[type=email], input[type=number], input[type=url], input[type=tel], textarea {\n      width: calc(80% - #{$text-input-total-padding} - 2em - 1px);\n    }\n  }\n\n  /* Nested Fieldsets and Legends */\n\n  fieldset > ol > li {\n    fieldset {\n      position:relative;\n      padding: 0;\n      margin-bottom: 0;\n\n      &:not(.inputs) ol {\n        float: left;\n        width: 74%;\n        margin: 0;\n        padding: 0 0 0 20%;\n\n        li {\n          padding: 0;\n          border: 0;\n        }\n      }\n\n      &.inputs ol {\n        float: left;\n        width: 100%;\n        margin: 0;\n      }\n    }\n  }\n\n  /* Text Fields */\n  input[type=text],\n  input[type=password],\n  input[type=email],\n  input[type=number],\n  input[type=url],\n  input[type=tel],\n  input[type=date],\n  input[type=time],\n  textarea {\n    width: calc(80% - #{$text-input-total-padding});\n    border: $border-width solid #c9d0d6;\n    @include rounded;\n    font-size: 0.95em;\n    @include sans-family;\n    outline: none;\n    padding: 8px $text-input-horizontal-padding 7px;\n\n    &:focus {\n      border: $border-width solid #99a2aa;\n      @include shadow(0,0,4px,#99a2aa);\n    }\n  }\n\n  input[type=date] {\n    width: calc(100% - #{$text-input-total-padding});\n  }\n\n  fieldset > ol > li {\n\n    /* Hints */\n    p.inline-hints {\n      font-size: 0.95em;\n      font-style: italic;\n      color:#666;\n      margin: 0.5em 0 0 20%;\n    }\n\n    /* Date and Time Fields */\n    &.date_select, &.time_select, &.datetime_select {\n      fieldset ol li {\n        float:left; width:auto; margin:0 0.5em 0 0;\n        label { display: none; }\n        input { display:inline; margin:0; padding:0;  }\n      }\n    }\n\n    /* Check Boxes or Radio fields */\n    &.check_boxes, &.radio {\n      fieldset ol {\n        margin-bottom:-0.6em;\n        li {\n          margin:0.1em 0 0.5em 0;\n          label {\n            float:none;\n            width:100%;\n            input { margin-right:0.2em; }\n          }\n        }\n      }\n    }\n\n    /* Boolean Field */\n    &.boolean {\n      min-height: 1.1em;\n      label {\n        width: 80%;\n        padding-left:20%;\n        padding-right: 10px;\n        text-transform: none !important;\n        font-weight: normal;\n        input { margin:0 0.5em 0 0.2em; }\n      }\n    }\n\n    /* Hidden fields */\n    &.hidden {\n      padding: 0;\n    }\n\n    /* Errors */\n    p.inline-errors {\n      color: $error-color;\n      font-weight: bold;\n      margin:0.3em 0 0 20%;\n    }\n    ul.errors {\n      color: $error-color;\n      margin:0.5em 0 0 20%;\n      list-style:square;\n      li { padding:0; border:none; display:list-item; }\n    }\n\n    &.error {\n      input[type=text], input[type=password], input[type=email], input[type=number], input[type=url], input[type=tel], textarea {\n        border: $border-width solid $error-color;\n      }\n    }\n  }\n\n  /* semantic_errors */\n  ul.errors {\n    background: lighten($error-color, 60%);\n    @include rounded(4px);\n    color: $error-color;\n    font-weight: bold;\n    margin-bottom: 10px;\n    padding: 10px;\n    list-style:square;\n    li { margin-left:15px; padding:0; border:none; display:list-item; }\n  }\n\n  /* Buttons */\n\n  input[type=submit], input[type=button], button {\n    @include dark-button;\n    cursor: pointer;\n\n  }\n\n  .buttons, .actions {\n    margin-top: 15px;\n    input[type=submit], input[type=button], button { margin-right: 10px; }\n  }\n\n  .actions .create_another {\n    float: none;\n    margin-bottom: 10px;\n\n    label {\n      float: none;\n      display: inline;\n    }\n  }\n\n  fieldset.buttons li, fieldset.actions li {\n    float:left;\n    padding: 0;\n\n    &.cancel a { @include light-button; }\n  }\n}\n\n// -------------------------------------- Sidebar Forms\n\n$sidebar-inner-content-width: $sidebar-width - ($section-padding * 2);\n\n.sidebar_section {\n\n  label {\n    display: block;\n    text-transform: uppercase;\n    color:  $form-label-color;\n    font-size: 0.9em;\n    font-weight: bold;\n  }\n\n  select {\n    width: $sidebar-inner-content-width;\n  }\n\n  input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], textarea {\n    width: $sidebar-inner-content-width - ($text-input-horizontal-padding * 2);\n  }\n\n}\n\n// -------------------------------------- Filter Forms\n\n$filter-field-seperator-width: 12px;\n\n$side-by-side-filter-input-width: ($sidebar-inner-content-width / 2) - ($text-input-horizontal-padding * 2) - $filter-field-seperator-width;\n$side-by-side-filter-select-width: ($sidebar-inner-content-width / 2) - $filter-field-seperator-width;\n\n$date-range-filter-input-width: ($sidebar-inner-content-width / 2) - ($filter-field-seperator-width / 2);\n\nform.filter_form {\n  .filter_form_field {\n    margin-bottom: 10px;\n    clear: both;\n\n    &.select_and_search {\n      input[type=text] {\n        margin-left: $filter-field-seperator-width + 4;\n        width: $side-by-side-filter-input-width;\n      }\n      select {\n        width: $side-by-side-filter-select-width;\n      }\n    }\n\n    &.filter_check_boxes {\n      label { margin-bottom: 3px; }\n      fieldset {\n        margin-bottom: 0px;\n        padding-bottom: 0px;\n      }\n      .check_boxes_wrapper label {\n        font-weight: normal;\n        margin-bottom: 3px;\n        text-transform: none;\n        font-size: 1.0em;\n        input { vertical-align: baseline; }\n      }\n    }\n\n    &.filter_date_range {\n      input[type=text] {\n        box-sizing: border-box;\n        width: $date-range-filter-input-width;\n\n        + input {\n          margin-left: 6px;\n        }\n      }\n    }\n  }\n  a.clear_filters_btn { @include light-button; }\n}\n","@mixin section-header {\n  @include secondary-gradient;\n  @include text-shadow;\n  border: solid 1px #cdcdcd;\n  @include border-colors(#e6e6e6, #d4d4d4, #cdcdcd);\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 0 1px #FFF inset;\n\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 18px;\n  margin-bottom: 0.5em;\n  color: $section-header-text-color;\n\n  padding: 5px 10px 3px 10px;\n}\n\n@mixin section-background {\n  background: #f4f4f4;\n  @include rounded(4px);\n  @include inset-shadow(0,1px,4px, #ddd);\n}\n\n@mixin section {\n  @include section-background;\n  margin-bottom: 20px;\n\n  > h3 {\n    @include section-header;\n\n    .header_action {\n      float: right;\n    }\n  }\n\n  > div { padding: 3px $section-padding $section-padding $section-padding; }\n\n  hr {\n    border: none;\n    border-bottom: 1px solid #E8E8E8;\n  }\n}\n","@mixin clearfix {\n  &:after {\n    visibility: hidden;\n    display: block;\n    content: \"\";\n    clear: both;\n    height: 0;\n  }\n}\n\n@mixin border-colors($top, $sides, $bottom) {\n  border-color: $sides;\n  border-top-color: $top;\n  border-right-color: $sides;\n  border-bottom-color: $bottom;\n  border-left-color: $sides;\n}\n","@mixin sans-family {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n","@mixin basic-button {\n  @include rounded(200px);\n  display: inline-block;\n  font-weight: bold;\n  font-size: 1.0em;\n  @include sans-family;\n  line-height: 12px;\n  margin-right: 3px;\n  padding: 7px 16px 6px;\n  text-decoration: none;\n\n  &.disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n\n}\n\n@mixin default-button {\n  @include basic-button;\n  @include gradient(lighten($primary-color, 15%), darken($primary-color, 12%));\n  @include text-shadow(#000);\n  box-shadow: 0 1px 1px rgba(0,0,0,0.10), 0 1px 0 0px rgba(255,255,255, 0.2) inset;\n  border: solid 1px #484e53;\n  @include border-colors(#616a71, #484e53, #363b3f);\n  color: #efefef;\n\n  &:not(.disabled) {\n    &:hover{\n      @include gradient(lighten($primary-color, 18%), darken($primary-color, 9%));\n    }\n\n    &:active {\n      box-shadow: 0 1px 3px rgba(0,0,0,0.40) inset, 0 1px 0 0px #FFF;\n      @include gradient(lighten($primary-color, 8%), darken($primary-color, 17%));\n    }\n  }\n}\n\n@mixin light-button {\n  @include basic-button;\n  @include gradient(#FFFFFF, #E7E7E7);\n  box-shadow: 0 1px 1px rgba(0,0,0,0.10), 0 1px 0 0 rgba(255,255,255, 0.8) inset;\n  border: solid 1px #c7c7c7;\n  @include border-colors(#d3d3d3, #c7c7c7, #c2c2c2);\n  @include text-shadow;\n  color: $primary-color;\n\n  &:not(.disabled) {\n    &:hover {\n      @include gradient(#FFFFFF, #F1F1F1);\n    }\n\n    &:active {\n      box-shadow: 0 1px 2px rgba(0,0,0,0.22) inset, 0 1px 0 0px #EEE;\n      @include border-colors(#c2c2c2, #b9b9b9, #b7b7b7);\n      @include gradient(#F3F3F3, #D8D8D8);\n    }\n  }\n\n}\n\n@mixin dark-button {\n  @include default-button;\n}\n","// -------------------------------------- Admin Notes\n.comments {\n\n  .active_admin_comment {\n    @include clearfix;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    max-width: 700px;\n\n    .active_admin_comment_meta {\n      width: 130px;\n      float: left;\n      overflow: hidden;\n      font-size: 0.9em;\n      color: lighten($primary-color, 10%);\n      .active_admin_comment_author {\n        font-size: 1.2em;\n        font-weight: bold;\n        margin: 0;\n        color: $primary-color;\n      }\n    }\n    .active_admin_comment_body {\n      margin-left: 150px;\n    }\n  }\n  form.active_admin_comment {\n    margin: 0;\n    padding: 0;\n    margin-left: 150px;\n\n    fieldset.inputs {\n      margin: 0;\n      padding: 0;\n      background: none;\n      @include no-shadow;\n    }\n    li { padding: 0; }\n    fieldset.buttons { padding: 0; margin-top: 5px;}\n  }\n}\n","body.logged_in {\n  .flash {\n    @include gradient(#f7f1d3, #f5edc5);\n    @include text-shadow(#fafafa);\n    border-bottom: 1px solid #eee098;\n    color: #cb9810;\n    font-weight: bold;\n    font-size: 1.1em;\n    line-height: 1.0em;\n    padding: 13px 30px 11px;\n    position: relative;\n\n    &.flash_notice {\n      @include gradient(#dce9dd, #ccdfcd);\n      border-bottom: 1px solid #adcbaf;\n      color: #416347;\n    }\n    &.flash_error {\n      @include gradient(#f5e4e4, #f1dcdc);\n      border-bottom: 1px solid #e0c2c0;\n      color: #b33c33;\n    }\n  }\n}\n\nbody.logged_out {\n  .flash {\n    @include no-shadow;\n    @include text-shadow(#fff);\n    background: none;\n    color: #666;\n    font-weight: bold;\n    line-height: 1.0em;\n    padding: 0;\n    margin-bottom: 8px;\n  }\n}\n","// -------------------------------------- Date Picker\n.ui-datepicker {\n  background: #fff;\n  background-clip: padding-box;\n  color: #fff;\n  display: none;\n  margin-top: 2px;\n  padding: 0;\n  text-align: center;\n  width: 160px;\n\n  a {\n    text-decoration: none;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  .ui-datepicker-header {\n    height: 14px;\n    @include primary-gradient;\n    padding: 12px 5px 7px 4px;\n    margin: 0px 0px 2px 2px;\n    width: 147px;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    position: relative;\n    z-index: 2000;\n\n    &:before {\n       content: \"\";\n       position: absolute;\n       right: 45%;\n       top: -6px;\n       width: 0px;\n       height: 0px;\n       border-left: 8.5px solid rgba(0, 0, 0, 0);\n       border-right: 8.5px solid rgba(0, 0, 0, 0);\n       border-bottom: 10px solid #676e73;\n    }\n\n    .ui-datepicker-title {\n      @include text-shadow(#000);\n      color: #fff;\n      display: block;\n      font-size: 1.1em;\n      font-weight: bold;\n      line-height: 0.8em;\n      text-align: center;\n\n      .ui-datepicker-month {\n        margin: -4px 0 0 0;\n      }\n      .ui-datepicker-year {\n        margin: -4px 0 0 0;\n      }\n    }\n\n\n    a {\n      color: #fff;\n      display: block;\n      height: 19px;\n      margin-top: -4px;\n      width: 10px;\n\n      &.ui-datepicker-prev {\n        float: left;\n        width: 0;\n        height: 0;\n        margin: 0px 0px 0px 4px;\n        border-top: 5px solid transparent;\n        border-right: 5px solid white;\n        border-bottom: 5px solid transparent;\n      }\n      &.ui-datepicker-next {\n        float: right;\n        width: 0;\n        height: 0;\n        margin: 0px 4px 0px 0px;\n        border-top: 5px solid transparent;\n        border-left: 5px solid white;\n        border-bottom: 5px solid transparent;\n      }\n\n      span {\n        display: none;\n      }\n    }\n  }\n\n  table.ui-datepicker-calendar {\n    @include rounded-bottom;\n    @include shadow(0,1px,6px,rgba(0,0,0,0.26));\n    background-color: #f4f4f4;\n    border: solid 1px #63686e;\n    left: 2px;\n    margin-bottom: 0px;\n    position: relative;\n    top: -2px;\n    width: 156px;\n\n    td, th {\n      padding: 0px;\n      text-align: center;\n    }\n\n    thead th {\n      background-color: #dbdddf;\n      color: #333333;\n      font-weight: normal;\n      font-size: 0.8em;\n      padding-top: 1px;\n    }\n\n    tbody {\n      color: #666666;\n\n      td {\n        border: none;\n        height: 24px;\n        width: 22px;\n\n        a {\n          @include rounded;\n          color: #666666;\n          font-weight: bold;\n          font-size: 0.85em;\n          padding: 4px;\n\n          &.ui-state-active {\n            background-color: #5a5f64;\n            color: #fff;\n            &.ui-state-hover {\n              background-color: #5a5f64;\n              color: #fff;\n            }\n          }\n          &.ui-state-hover {\n            background-color: #eceef0;\n          }\n          &.ui-state-highlight {\n            background-color: #dbdddf;\n          }\n        }\n      }\n    }\n  }\n}\n","// ----------------------------------- Tables\n\ntable tr {\n  td {\n    vertical-align: top;\n  }\n\n  th {\n    text-align: left;\n  }\n}\n\n// --------- Index Tables\n\ntable.index_table {\n  width: 100%;\n  margin-bottom: 10px;\n  border: 0;\n  border-spacing: 0;\n\n  th {\n    @include section-header;\n    border-right: none;\n    padding-left: $cell-horizontal-padding;\n    padding-right: $cell-horizontal-padding;\n\n    a, a:link, a:visited {\n      color: $section-header-text-color;\n      text-decoration: none;\n      display: block;\n      white-space: nowrap;\n    }\n\n    &.sortable a {\n      background: url($orderable-icon-url) no-repeat 0 4px; padding-left: 13px;\n    }\n\n    &.sorted-asc a { background-position: 0 -27px; }\n    &.sorted-desc a {  background-position: 0 -56px;}\n\n    &.sorted-asc, &.sorted-desc {\n      @include gradient(darken($secondary-gradient-start, 5%), darken($secondary-gradient-stop, 5%));\n    }\n\n    &:last-child {\n      border-right: solid 1px #d4d4d4;\n    }\n\n  }\n\n  tr.even td { background: $table-stripe-color; }\n\n  tr.selected td {\n    background: $table-selected-color;\n  }\n\n  td {\n    padding: 10px $cell-horizontal-padding 8px $cell-horizontal-padding;\n    border-bottom: 1px solid #e8e8e8;\n    vertical-align: top;\n  }\n}\n\n// --------- Tables inside Panels\n\n.panel_contents table {\n  margin-top: 5px;\n  th {\n    padding-top: 10px;\n    background: none;\n    color: $primary-color;\n    @include no-shadow;\n    @include text-shadow;\n    text-transform: uppercase;\n    border-bottom: 1px solid #ccc;\n  }\n  tr.odd td { background: darken($table-stripe-color, 3%); }\n  tr.even td { background: $table-stripe-color; }\n}\n\n// -------------------------------------- Resource Attributes Table\n.attributes_table { overflow: hidden; }\n\n.attributes_table table {\n  col.even { background: $table-stripe-color; }\n  col.odd  { background: darken($table-stripe-color, 3%); }\n  th, td {\n    padding: 8px $cell-horizontal-padding 6px $cell-horizontal-padding;\n    vertical-align: top;\n    border-bottom: 1px solid #e8e8e8;\n  }\n  th {\n    @include no-shadow;\n    @include no-gradient;\n    width: 150px;\n    font-size: 0.9em;\n    padding-left: 0;\n    text-transform: uppercase;\n    color: $primary-color;\n    @include text-shadow;\n  }\n  td {\n    .empty {\n      color: #bbb;\n      font-size: 0.8em;\n      text-transform: uppercase;\n      letter-spacing: 0.2em;\n    }\n  }\n}\n\n.sidebar_section .attributes_table th { width: 50px; }\n","#collection_selection_toggle_panel {\n  @include clearfix;\n  >.resource_selection_toggle_cell {\n    float:left;\n  }\n}\n",".ui-widget-overlay {\n  position: fixed;\n  background: rgba(0,0,0,.2);\n  top: 0; left: 0; right: 0; bottom: 0;\n  z-index: 1001;\n}\n\n.ui-dialog {\n  position: fixed;\n  z-index: 1002;\n  @include section-background;\n  box-shadow: rgba(0,0,0,0.5) 0 0 10px;\n\n  .ui-dialog-titlebar {\n    @include section-header;\n    span { font-size: 1.1em }\n  }\n\n  ul { list-style-type: none }\n  li { margin: 10px 0 }\n  label { margin-right: 10px }\n\n  .ui-dialog-buttonpane, form {\n    padding: 7px 15px 13px\n  }\n  .ui-dialog-buttonpane button {\n    & { @include dark-button } // OK\n    &:last-child { @include light-button } // Cancel\n  }\n}\n\n.active_admin_dialog.ui-dialog {\n  .ui-dialog-titlebar-close { display: none }\n}\n",".blank_slate_container {\n  clear: both;\n  text-align: center;\n\n  .blank_slate {\n    @include rounded;\n    border:  $blank-slate-border;\n    color: $blank-slate-primary-color;\n    display: inline-block;\n    font-size: 1.2em;\n    font-weight: bold;\n    padding: 14px 25px;\n    text-align: center;\n\n    small {\n      display: block;\n      font-size: 0.9em;\n      font-weight: normal;\n    }\n  }\n}\n\n.admin_dashboard .blank_slate_container .blank_slate {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.with_sidebar .blank_slate_container .blank_slate {\n  margin-top: 80px;\n}\n",".breadcrumb {\n  display: block;\n  font-size: 0.9em;\n  font-weight: normal;\n  line-height: 1.0em;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n\n  a, a:link, a:visited, a:active {\n    color: $breadcrumbs-color;\n    text-decoration: none;\n  }\n\n  a:hover { text-decoration: underline; }\n\n  .breadcrumb_sep {\n    margin: 0 2px;\n    color: $breadcrumbs-separator-color;\n  }\n}\n",".dropdown_menu {\n  display: inline;\n\n  .dropdown_menu_button {\n    @include light-button;\n    position: relative;\n    padding-right: 22px !important;\n    cursor: pointer;\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 3px 3px 0;\n      border-style: solid;\n      border-color: #FFF transparent;\n      right: 12px;\n      top: 45%;\n    }\n\n    &:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 3px 3px 0;\n      border-style: solid;\n      border-color: #777 transparent;\n      right: 12px;\n      top: 45%;\n    }\n  }\n\n  .dropdown_menu_nipple {\n\n    // The nipple's border\n    content: \"\";\n    position: absolute;\n    top: -6px;\n    display: block;\n    width: 0;\n    height: 0;\n    border-width: 0 6px 6px;\n    border-style: solid;\n    border-color: darken($primary-color, 4%) transparent;\n    z-index: 100;\n\n    // The nipple's inner shadow\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 0 5px 5px;\n      border-style: solid;\n      border-color: lighten($primary-color, 15%) transparent;\n      left: -5px;\n      top: 1px;\n    }\n\n    // The nipple's background color\n\n    &:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-width: 0 5px 5px;\n      border-style: solid;\n      border-color: lighten($primary-color, 4%) transparent;\n      left: -5px;\n      top: 2px;\n    }\n  }\n\n  .dropdown_menu_list_wrapper {\n    display: inline-block;\n    position: absolute;\n    background-color: white;\n    padding: 2px;\n    box-shadow: rgba(0,0,0,0.4) 0 1px 3px, lighten($primary-color, 15%) 0px 1px 0px 0px inset;\n    background-color: $primary-color;\n    @include gradient(lighten($primary-color, 4%), darken($primary-color, 5%));\n    border: solid 1px darken($primary-color, 10%);\n    border-top-color: darken($primary-color, 4%);\n    border-bottom-color: darken($primary-color, 17%);\n    border-radius: 4px;\n    z-index: 2000;\n    display: none;\n\n    .dropdown_menu_list {\n      display: block;\n      background-color: #FFF;\n      border: solid 1px darken($primary-color, 10%);\n      box-shadow: lighten($primary-color, 5%) 0px 1px 0px 0px;\n      border-radius: 3px;\n      margin: 0;\n      overflow: hidden;\n      padding: 8px;\n\n      list-style-type: none;\n      padding: 0;\n\n      li {\n        display: block;\n        border-bottom: solid 1px #ebebeb;\n        box-sizing: border-box;\n\n        a {\n          display: block;\n          box-sizing: padding-box;\n          font-size: 0.95em;\n          font-weight: bold;\n          padding: 7px 16px 5px;\n          text-decoration: none;\n          text-align: center;\n          white-space: nowrap;\n\n          &:hover {\n            @include highlight-gradient;\n            @include text-shadow(#5a83aa);\n            color: #FFF;\n          }\n\n          &:active {\n            @include reverse-highlight-gradient;\n            color: #FFF;\n          }\n\n        }\n\n        &:first-child {\n          a {\n            border-top-left-radius: 2px;\n            border-top-right-radius: 2px;\n          }\n\n        }\n\n        &:last-child {\n          a {\n            border-bottom-left-radius: 2px;\n            border-bottom-right-radius: 2px;\n          }\n          border: none;\n        }\n      }\n    }\n  }\n}\n","a.member_link {\n  margin-right: 7px;\n  white-space: nowrap;\n}\n\na.button, a:link.button, a:visited.button, input[type=submit], input[type=button], button { @include dark-button; }\n","// -------------------------------------- Index as Grid\ntable.index_grid td { border: none; background: none; padding: 0 20px 20px 0; margin: 0;}\n\n// -------------------------------------- Columns\n.columns {\n  clear: both;\n  padding: 0;\n  .column { float: left; }\n}\n","a, a:link, a:visited {\n  color: $link-color;\n  text-decoration: underline;\n}\na:hover { text-decoration: none; }\n",".paginated_collection_contents {\n  clear: both;\n}\n\n.pagination {\n  float: right;\n  font-size: 0.9em;\n  margin-left: 10px;\n\n  a {\n    @include light-button;\n  }\n\n  span.page.current {\n    @include default-button;\n  }\n\n  a, span.page.current {\n    @include rounded(0px);\n    margin-right: 4px;\n    padding: 2px 5px;\n  }\n}\n\n.pagination_information {\n  float: right;\n  margin-bottom: 5px;\n  color: #b3bcc1;\n  b { color: #5c6469; }\n}\n\n.download_links {\n  float: left;\n}\n\n.pagination_per_page {\n  float: right;\n  margin-left: 4px;\n  select {\n    @include light-button;\n    @include rounded(0px);\n    padding: 1px 5px;\n  }\n}\n\n.comments {\n  .pagination {\n    float: left;\n    margin-bottom: 30px;\n  }\n  .pagination_information {\n    float: left;\n    color: #000;\n  }\n}\n","// ----------------------------------- Helper class to apply to elements to make them sections\n.section, .panel{ @include section; }\n\n// ----------------------------------- Sidebar Sections\n\n.sidebar_section { @include section; }\n",".columns {\n  margin-bottom: 10px;\n}\n",".scopes {\n  li {\n    .count {\n      color: #8e979e;\n      font-weight: normal;\n      font-size: 0.9em;\n      line-height: 10px;\n    }\n    &:first-child a {\n      margin-left: 10px;\n    }\n  }\n}\n",".status_tag {\n  background: darken($secondary-color, 15%);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  padding: 3px 5px 2px 5px;\n  font-size: 0.8em;\n\n  &.yes { background: #6090DB }\n  &.no  { background: grey }\n\n}\n",".table_tools {\n  @include clearfix;\n  margin-bottom: 16px;\n}\n\n.table_tools .dropdown_menu {\n  float: left;\n}\n\na.table_tools_button, .table_tools .dropdown_menu_button {\n  @include light-button;\n  @include gradient(#FFFFFF, #F0F0F0);\n  @include border-colors(#d9d9d9, #d0d0d0, #c5c5c5);\n  font-size: 0.9em;\n  padding: 4px 14px 4px;\n  margin: 0;\n\n  &:not(.disabled) {\n    &:hover {\n      @include gradient(#FFFFFF, #F6F6F6);\n    }\n\n    &:active {\n      @include border-colors(#d7d7d7, #c8c8c8, #c3c3c3);\n      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.17) inset;\n      @include gradient(#FFFFFF, #E8E8E8);\n    }\n  }\n}\n\n.table_tools_segmented_control {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n\n  li {\n    float: left;\n\n    a {\n      border-width: 1px .5px 1px .5px;\n      border-radius: 0;\n    }\n\n    &:first-child a {\n      border-left-width: 1px;\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px;\n    }\n\n    &:last-child a {\n      border-right-width: 1px;\n      border-top-right-radius: 12px;\n      border-bottom-right-radius: 12px;\n    }\n\n    &.selected a {\n      @include gradient(#F0F0F0, #FDFDFD);\n      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1) inset;\n      cursor: default;\n\n      &:hover {\n        @include gradient(#F0F0F0, #FDFDFD);\n      }\n    }\n\n  }\n}\n",".indexes {\n  float: right;\n\n  li {\n    .count {\n      color: #8e979e;\n      font-weight: normal;\n      font-size: 0.9em;\n      line-height: 10px;\n    }\n  }\n}\n",".unsupported_browser {\n  padding: 10px 30px;\n  color: #211e14;\n  background-color: #fae692;\n  @include gradient(#feefae, #fae692);\n  border-bottom: 1px solid #b3a569;\n\n  h1 {\n    font-size: 13px;\n    font-weight: bold;\n  }\n\n  p {\n    margin-bottom: 0.5em;\n  }\n}\n",".ui-tabs-nav {\n  list-style: none;\n  display: block;\n  width: auto;\n  margin-bottom: -12px;\n  padding-left: 0;\n  overflow: auto;\n  margin-left: 15px;\n\n  li {\n    display: block;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    float: left;\n\n    &:first-child a {\n      border-left-width: 1px;\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px;\n    }\n\n    &:last-child a {\n      border-right-width: 1px;\n      border-top-right-radius: 12px;\n      border-bottom-right-radius: 12px;\n    }\n\n    a {\n      @include light-button;\n      @include gradient(#FFFFFF, #F0F0F0);\n      @include border-colors(#d9d9d9, #d0d0d0, #c5c5c5);\n      text-decoration: none;\n      border-radius: 0;\n      border-width: 1px .5px 1px .5px;\n      margin-right: 0;\n      padding: 4px 14px 4px;\n\n      &:not(.disabled) {\n        &:hover {\n          @include gradient(#FFFFFF, #F6F6F6);\n        }\n      }\n    }\n\n    &.ui-tabs-active {\n      a {\n        cursor: default;\n        @include gradient(#F0F0F0, #FDFDFD);\n        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1) inset;\n\n        a:hover {\n          @include gradient(#F0F0F0, #FDFDFD);\n        }\n      }\n    }\n  }\n}\n\n.tab-content {\n  border: 1px solid #D3D3D3;\n  padding: 15px;\n  padding-top: 30px;\n  text-align: left;\n}\n","body.logged_out {\n  background: #e8e9ea;\n\n  #content_wrapper{\n    width: 500px;\n    margin: 70px auto;\n    #active_admin_content {\n      @include shadow;\n      background: #fff;\n      padding: 13px 30px;\n    }\n  }\n\n  h2 {\n    @include section-header;\n    @include primary-gradient;\n    @include text-shadow(#000);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n    border: none;\n    color: #fff;\n    margin: -13px -30px 20px -30px;\n  }\n\n  #login {\n    /* Login Form */\n    form {\n      fieldset {\n        @include no-shadow;\n        background: none;\n        padding: 0;\n        li { padding: 10px 0; }\n\n        input[type=text], input[type=email], input[type=password] {\n          width: 70%;\n        }\n        &.buttons { margin-left: 20%; }\n        margin-bottom: 0;\n      }\n    }\n\n    a { float: right; margin-top: -32px; }\n  }\n\n}\n","#footer {\n  padding: 30px 30px;\n  font-size: 0.8em;\n  clear: both;\n\n  p {\n    padding-top: 10px\n  }\n}\n\n// -------------------------------------- Index Footer (Under Table)\n#index_footer { padding-top: 5px; text-align: right; font-size: 0.85em; }\n\n.index_content { clear: both; }\n","#wrapper {\n  width: 100%;\n}\n\n.index #wrapper {\n  display: table;\n}\n\n#active_admin_content {\n  margin: 0;\n  padding: $horizontal-page-margin;\n\n  #main_content_wrapper {\n    float: left;\n    width: 100%;\n\n    #main_content{\n      margin-right: $sidebar-width + ($section-padding * 2);\n    }\n  }\n\n  &.without_sidebar #main_content_wrapper #main_content{ margin-right: 0; }\n\n  #sidebar {\n    float: left;\n    width: $sidebar-width;\n    margin-left: -$sidebar-width;\n  }\n}\n","#title_bar {\n  @include section-header;\n  @include clearfix;\n  box-sizing: border-box;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\n  display: table;\n  border-bottom-color: #EEE;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  padding: 10px $horizontal-page-margin;\n  z-index: 800;\n\n  #titlebar_left, #titlebar_right {\n    height: 50px;\n    vertical-align: middle;\n    display: table-cell;\n  }\n\n  #titlebar_right {\n    text-align: right;\n  }\n\n  h2 {\n    margin: 0;\n    padding: 0;\n    font-size: 2.6em;\n    line-height: 100%;\n    font-weight: bold;\n  }\n\n  .action_items {\n    span.action_item {\n      & > a, & > .dropdown_menu > a {\n        @include light-button;\n        padding: 12px 17px 10px;\n        margin: 0px;\n      }\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/jquery-ui/ui/data.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery-ui/ui/data.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.extend($.expr[":"], {
    data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
      return function (elem) {
        return !!$.data(elem, dataName);
      };
    }) : // Support: jQuery <1.8
    function (elem, i, match) {
      return !!$.data(elem, match[3]);
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/disable-selection.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/disable-selection.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/
// This file is deprecated
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.fn.extend({
    disableSelection: function () {
      var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.on(eventType + ".ui-disableSelection", function (event) {
          event.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.off(".ui-disableSelection");
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/escape-selector.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery-ui/ui/escape-selector.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Internal use only
  return $.ui.escapeSelector = function () {
    var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
    return function (selector) {
      return selector.replace(selectorEscape, "\\$1");
    };
  }();
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/focusable.js":
/*!************************************************!*\
  !*** ./node_modules/jquery-ui/ui/focusable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Selectors
  $.ui.focusable = function (element, hasTabindex) {
    var map,
        mapName,
        img,
        focusableIfVisible,
        fieldset,
        nodeName = element.nodeName.toLowerCase();

    if ("area" === nodeName) {
      map = element.parentNode;
      mapName = map.name;

      if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
        return false;
      }

      img = $("img[usemap='#" + mapName + "']");
      return img.length > 0 && img.is(":visible");
    }

    if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
      focusableIfVisible = !element.disabled;

      if (focusableIfVisible) {
        // Form controls within a disabled fieldset are disabled.
        // However, controls within the fieldset's legend do not get disabled.
        // Since controls generally aren't placed inside legends, we skip
        // this portion of the check.
        fieldset = $(element).closest("fieldset")[0];

        if (fieldset) {
          focusableIfVisible = !fieldset.disabled;
        }
      }
    } else if ("a" === nodeName) {
      focusableIfVisible = element.href || hasTabindex;
    } else {
      focusableIfVisible = hasTabindex;
    }

    return focusableIfVisible && $(element).is(":visible") && visible($(element));
  }; // Support: IE 8 only
  // IE 8 doesn't resolve inherit to visible/hidden for computed values


  function visible(element) {
    var visibility = element.css("visibility");

    while (visibility === "inherit") {
      element = element.parent();
      visibility = element.css("visibility");
    }

    return visibility !== "hidden";
  }

  $.extend($.expr[":"], {
    focusable: function focusable(element) {
      return $.ui.focusable(element, $.attr(element, "tabindex") != null);
    }
  });
  return $.ui.focusable;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/form-reset-mixin.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery-ui/ui/form-reset-mixin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Form Reset Mixin
//>>group: Core
//>>description: Refresh input widgets when their form is reset
//>>docs: http://api.jqueryui.com/form-reset-mixin/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./form */ "./node_modules/jquery-ui/ui/form.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.ui.formResetMixin = {
    _formResetHandler: function _formResetHandler() {
      var form = $(this); // Wait for the form reset to actually happen before refreshing

      setTimeout(function () {
        var instances = form.data("ui-form-reset-instances");
        $.each(instances, function () {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function _bindFormResetHandler() {
      this.form = this.element.form();

      if (!this.form.length) {
        return;
      }

      var instances = this.form.data("ui-form-reset-instances") || [];

      if (!instances.length) {
        // We don't use _on() here because we use a single event handler per form
        this.form.on("reset.ui-form-reset", this._formResetHandler);
      }

      instances.push(this);
      this.form.data("ui-form-reset-instances", instances);
    },
    _unbindFormResetHandler: function _unbindFormResetHandler() {
      if (!this.form.length) {
        return;
      }

      var instances = this.form.data("ui-form-reset-instances");
      instances.splice($.inArray(this, instances), 1);

      if (instances.length) {
        this.form.data("ui-form-reset-instances", instances);
      } else {
        this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    }
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/form.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery-ui/ui/form.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Support: IE8 Only
  // IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
  // with a string, so we need to find the proper form.
  return $.fn.form = function () {
    return typeof this[0].form === "string" ? this.closest("form") : $(this[0].form);
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/ie.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery-ui/ui/ie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // This file is deprecated
  return $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/keycode.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/keycode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/labels.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/labels.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ./escape-selector */ "./node_modules/jquery-ui/ui/escape-selector.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.fn.labels = function () {
    var ancestor, selector, id, labels, ancestors; // Check control.labels first

    if (this[0].labels && this[0].labels.length) {
      return this.pushStack(this[0].labels);
    } // Support: IE <= 11, FF <= 37, Android <= 2.3 only
    // Above browsers do not support control.labels. Everything below is to support them
    // as well as document fragments. control.labels does not work on document fragments


    labels = this.eq(0).parents("label"); // Look for the label based on the id

    id = this.attr("id");

    if (id) {
      // We don't search against the document in case the element
      // is disconnected from the DOM
      ancestor = this.eq(0).parents().last(); // Get a full set of top level ancestors

      ancestors = ancestor.add(ancestor.length ? ancestor.siblings() : this.siblings()); // Create a selector for the label based on the id

      selector = "label[for='" + $.ui.escapeSelector(id) + "']";
      labels = labels.add(ancestors.find(selector).addBack(selector));
    } // Return whatever we have found for labels


    return this.pushStack(labels);
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/plugin.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/plugin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // $.ui.plugin is deprecated. Use $.widget() extensions instead.
  return $.ui.plugin = {
    add: function add(module, option, set) {
      var i,
          proto = $.ui[module].prototype;

      for (i in set) {
        proto.plugins[i] = proto.plugins[i] || [];
        proto.plugins[i].push([option, set[i]]);
      }
    },
    call: function call(instance, name, args, allowDisconnected) {
      var i,
          set = instance.plugins[name];

      if (!set) {
        return;
      }

      if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
        return;
      }

      for (i = 0; i < set.length; i++) {
        if (instance.options[set[i][0]]) {
          set[i][1].apply(instance.element, args);
        }
      }
    }
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/position.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery-ui/ui/position.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  (function () {
    var cachedScrollbarWidth,
        max = Math.max,
        abs = Math.abs,
        rhorizontal = /left|center|right/,
        rvertical = /top|center|bottom/,
        roffset = /[\+\-]\d+(\.[\d]+)?%?/,
        rposition = /^\w+/,
        rpercent = /%$/,
        _position = $.fn.position;

    function getOffsets(offsets, width, height) {
      return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)];
    }

    function parseCss(element, property) {
      return parseInt($.css(element, property), 10) || 0;
    }

    function getDimensions(elem) {
      var raw = elem[0];

      if (raw.nodeType === 9) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: {
            top: 0,
            left: 0
          }
        };
      }

      if ($.isWindow(raw)) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: {
            top: elem.scrollTop(),
            left: elem.scrollLeft()
          }
        };
      }

      if (raw.preventDefault) {
        return {
          width: 0,
          height: 0,
          offset: {
            top: raw.pageY,
            left: raw.pageX
          }
        };
      }

      return {
        width: elem.outerWidth(),
        height: elem.outerHeight(),
        offset: elem.offset()
      };
    }

    $.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (cachedScrollbarWidth !== undefined) {
          return cachedScrollbarWidth;
        }

        var w1,
            w2,
            div = $("<div " + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>"),
            innerDiv = div.children()[0];
        $("body").append(div);
        w1 = innerDiv.offsetWidth;
        div.css("overflow", "scroll");
        w2 = innerDiv.offsetWidth;

        if (w1 === w2) {
          w2 = div[0].clientWidth;
        }

        div.remove();
        return cachedScrollbarWidth = w1 - w2;
      },
      getScrollInfo: function getScrollInfo(within) {
        var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"),
            overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"),
            hasOverflowX = overflowX === "scroll" || overflowX === "auto" && within.width < within.element[0].scrollWidth,
            hasOverflowY = overflowY === "scroll" || overflowY === "auto" && within.height < within.element[0].scrollHeight;
        return {
          width: hasOverflowY ? $.position.scrollbarWidth() : 0,
          height: hasOverflowX ? $.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(element) {
        var withinElement = $(element || window),
            isWindow = $.isWindow(withinElement[0]),
            isDocument = !!withinElement[0] && withinElement[0].nodeType === 9,
            hasOffset = !isWindow && !isDocument;
        return {
          element: withinElement,
          isWindow: isWindow,
          isDocument: isDocument,
          offset: hasOffset ? $(element).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: withinElement.scrollLeft(),
          scrollTop: withinElement.scrollTop(),
          width: withinElement.outerWidth(),
          height: withinElement.outerHeight()
        };
      }
    };

    $.fn.position = function (options) {
      if (!options || !options.of) {
        return _position.apply(this, arguments);
      } // Make a copy, we don't want to modify arguments


      options = $.extend({}, options);
      var atOffset,
          targetWidth,
          targetHeight,
          targetOffset,
          basePosition,
          dimensions,
          target = $(options.of),
          within = $.position.getWithinInfo(options.within),
          scrollInfo = $.position.getScrollInfo(within),
          collision = (options.collision || "flip").split(" "),
          offsets = {};
      dimensions = getDimensions(target);

      if (target[0].preventDefault) {
        // Force left top to allow flipping
        options.at = "left top";
      }

      targetWidth = dimensions.width;
      targetHeight = dimensions.height;
      targetOffset = dimensions.offset; // Clone to reuse original targetOffset later

      basePosition = $.extend({}, targetOffset); // Force my and at to have valid horizontal and vertical positions
      // if a value is missing or invalid, it will be converted to center

      $.each(["my", "at"], function () {
        var pos = (options[this] || "").split(" "),
            horizontalOffset,
            verticalOffset;

        if (pos.length === 1) {
          pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"];
        }

        pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
        pos[1] = rvertical.test(pos[1]) ? pos[1] : "center"; // Calculate offsets

        horizontalOffset = roffset.exec(pos[0]);
        verticalOffset = roffset.exec(pos[1]);
        offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0]; // Reduce to just the positions without the offsets

        options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]];
      }); // Normalize collision option

      if (collision.length === 1) {
        collision[1] = collision[0];
      }

      if (options.at[0] === "right") {
        basePosition.left += targetWidth;
      } else if (options.at[0] === "center") {
        basePosition.left += targetWidth / 2;
      }

      if (options.at[1] === "bottom") {
        basePosition.top += targetHeight;
      } else if (options.at[1] === "center") {
        basePosition.top += targetHeight / 2;
      }

      atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
      basePosition.left += atOffset[0];
      basePosition.top += atOffset[1];
      return this.each(function () {
        var collisionPosition,
            using,
            elem = $(this),
            elemWidth = elem.outerWidth(),
            elemHeight = elem.outerHeight(),
            marginLeft = parseCss(this, "marginLeft"),
            marginTop = parseCss(this, "marginTop"),
            collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width,
            collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height,
            position = $.extend({}, basePosition),
            myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

        if (options.my[0] === "right") {
          position.left -= elemWidth;
        } else if (options.my[0] === "center") {
          position.left -= elemWidth / 2;
        }

        if (options.my[1] === "bottom") {
          position.top -= elemHeight;
        } else if (options.my[1] === "center") {
          position.top -= elemHeight / 2;
        }

        position.left += myOffset[0];
        position.top += myOffset[1];
        collisionPosition = {
          marginLeft: marginLeft,
          marginTop: marginTop
        };
        $.each(["left", "top"], function (i, dir) {
          if ($.ui.position[collision[i]]) {
            $.ui.position[collision[i]][dir](position, {
              targetWidth: targetWidth,
              targetHeight: targetHeight,
              elemWidth: elemWidth,
              elemHeight: elemHeight,
              collisionPosition: collisionPosition,
              collisionWidth: collisionWidth,
              collisionHeight: collisionHeight,
              offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
              my: options.my,
              at: options.at,
              within: within,
              elem: elem
            });
          }
        });

        if (options.using) {
          // Adds feedback as second argument to using callback, if present
          using = function using(props) {
            var left = targetOffset.left - position.left,
                right = left + targetWidth - elemWidth,
                top = targetOffset.top - position.top,
                bottom = top + targetHeight - elemHeight,
                feedback = {
              target: {
                element: target,
                left: targetOffset.left,
                top: targetOffset.top,
                width: targetWidth,
                height: targetHeight
              },
              element: {
                element: elem,
                left: position.left,
                top: position.top,
                width: elemWidth,
                height: elemHeight
              },
              horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
              vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
            };

            if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
              feedback.horizontal = "center";
            }

            if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
              feedback.vertical = "middle";
            }

            if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
              feedback.important = "horizontal";
            } else {
              feedback.important = "vertical";
            }

            options.using.call(this, props, feedback);
          };
        }

        elem.offset($.extend(position, {
          using: using
        }));
      });
    };

    $.ui.position = {
      fit: {
        left: function left(position, data) {
          var within = data.within,
              withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
              outerWidth = within.width,
              collisionPosLeft = position.left - data.collisionPosition.marginLeft,
              overLeft = withinOffset - collisionPosLeft,
              overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
              newOverRight; // Element is wider than within

          if (data.collisionWidth > outerWidth) {
            // Element is initially over the left side of within
            if (overLeft > 0 && overRight <= 0) {
              newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
              position.left += overLeft - newOverRight; // Element is initially over right side of within
            } else if (overRight > 0 && overLeft <= 0) {
              position.left = withinOffset; // Element is initially over both left and right sides of within
            } else {
              if (overLeft > overRight) {
                position.left = withinOffset + outerWidth - data.collisionWidth;
              } else {
                position.left = withinOffset;
              }
            } // Too far left -> align with left edge

          } else if (overLeft > 0) {
            position.left += overLeft; // Too far right -> align with right edge
          } else if (overRight > 0) {
            position.left -= overRight; // Adjust based on position and margin
          } else {
            position.left = max(position.left - collisionPosLeft, position.left);
          }
        },
        top: function top(position, data) {
          var within = data.within,
              withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
              outerHeight = data.within.height,
              collisionPosTop = position.top - data.collisionPosition.marginTop,
              overTop = withinOffset - collisionPosTop,
              overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
              newOverBottom; // Element is taller than within

          if (data.collisionHeight > outerHeight) {
            // Element is initially over the top of within
            if (overTop > 0 && overBottom <= 0) {
              newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
              position.top += overTop - newOverBottom; // Element is initially over bottom of within
            } else if (overBottom > 0 && overTop <= 0) {
              position.top = withinOffset; // Element is initially over both top and bottom of within
            } else {
              if (overTop > overBottom) {
                position.top = withinOffset + outerHeight - data.collisionHeight;
              } else {
                position.top = withinOffset;
              }
            } // Too far up -> align with top

          } else if (overTop > 0) {
            position.top += overTop; // Too far down -> align with bottom edge
          } else if (overBottom > 0) {
            position.top -= overBottom; // Adjust based on position and margin
          } else {
            position.top = max(position.top - collisionPosTop, position.top);
          }
        }
      },
      flip: {
        left: function left(position, data) {
          var within = data.within,
              withinOffset = within.offset.left + within.scrollLeft,
              outerWidth = within.width,
              offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
              collisionPosLeft = position.left - data.collisionPosition.marginLeft,
              overLeft = collisionPosLeft - offsetLeft,
              overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
              myOffset = data.my[0] === "left" ? -data.elemWidth : data.my[0] === "right" ? data.elemWidth : 0,
              atOffset = data.at[0] === "left" ? data.targetWidth : data.at[0] === "right" ? -data.targetWidth : 0,
              offset = -2 * data.offset[0],
              newOverRight,
              newOverLeft;

          if (overLeft < 0) {
            newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;

            if (newOverRight < 0 || newOverRight < abs(overLeft)) {
              position.left += myOffset + atOffset + offset;
            }
          } else if (overRight > 0) {
            newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;

            if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
              position.left += myOffset + atOffset + offset;
            }
          }
        },
        top: function top(position, data) {
          var within = data.within,
              withinOffset = within.offset.top + within.scrollTop,
              outerHeight = within.height,
              offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
              collisionPosTop = position.top - data.collisionPosition.marginTop,
              overTop = collisionPosTop - offsetTop,
              overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
              top = data.my[1] === "top",
              myOffset = top ? -data.elemHeight : data.my[1] === "bottom" ? data.elemHeight : 0,
              atOffset = data.at[1] === "top" ? data.targetHeight : data.at[1] === "bottom" ? -data.targetHeight : 0,
              offset = -2 * data.offset[1],
              newOverTop,
              newOverBottom;

          if (overTop < 0) {
            newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;

            if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
              position.top += myOffset + atOffset + offset;
            }
          } else if (overBottom > 0) {
            newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;

            if (newOverTop > 0 || abs(newOverTop) < overBottom) {
              position.top += myOffset + atOffset + offset;
            }
          }
        }
      },
      flipfit: {
        left: function left() {
          $.ui.position.flip.left.apply(this, arguments);
          $.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          $.ui.position.flip.top.apply(this, arguments);
          $.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  })();

  return $.ui.position;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/safe-active-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/safe-active-element.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.ui.safeActiveElement = function (document) {
    var activeElement; // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>

    try {
      activeElement = document.activeElement;
    } catch (error) {
      activeElement = document.body;
    } // Support: IE 9 - 11 only
    // IE may return null instead of an element
    // Interestingly, this only seems to occur when NOT in an iframe


    if (!activeElement) {
      activeElement = document.body;
    } // Support: IE 11 only
    // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>


    if (!activeElement.nodeName) {
      activeElement = document.body;
    }

    return activeElement;
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/safe-blur.js":
/*!************************************************!*\
  !*** ./node_modules/jquery-ui/ui/safe-blur.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.ui.safeBlur = function (element) {
    // Support: IE9 - 10 only
    // If the <body> is blurred, IE will switch windows, see #9420
    if (element && element.nodeName.toLowerCase() !== "body") {
      $(element).trigger("blur");
    }
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/scroll-parent.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/scroll-parent.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.fn.scrollParent = function (includeHidden) {
    var position = this.css("position"),
        excludeStaticParent = position === "absolute",
        overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        scrollParent = this.parents().filter(function () {
      var parent = $(this);

      if (excludeStaticParent && parent.css("position") === "static") {
        return false;
      }

      return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
    }).eq(0);
    return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/tabbable.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery-ui/ui/tabbable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ./focusable */ "./node_modules/jquery-ui/ui/focusable.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.extend($.expr[":"], {
    tabbable: function tabbable(element) {
      var tabIndex = $.attr(element, "tabindex"),
          hasTabindex = tabIndex != null;
      return (!hasTabindex || tabIndex >= 0) && $.ui.focusable(element, hasTabindex);
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/unique-id.js":
/*!************************************************!*\
  !*** ./node_modules/jquery-ui/ui/unique-id.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.fn.extend({
    uniqueId: function () {
      var uuid = 0;
      return function () {
        return this.each(function () {
          if (!this.id) {
            this.id = "ui-id-" + ++uuid;
          }
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        if (/^ui-id-\d+$/.test(this.id)) {
          $(this).removeAttr("id");
        }
      });
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/version.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/version.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.ui = $.ui || {};
  return $.ui.version = "1.12.1";
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widget.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/widget.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = function (orig) {
    return function (elems) {
      var events, elem, i;

      for (i = 0; (elem = elems[i]) != null; i++) {
        try {
          // Only trigger remove when necessary to save time
          events = $._data(elem, "events");

          if (events && events.remove) {
            $(elem).triggerHandler("remove");
          } // Http://bugs.jquery.com/ticket/8235

        } catch (e) {}
      }

      orig(elems);
    };
  }($.cleanData);

  $.widget = function (name, base, prototype) {
    var existingConstructor, constructor, basePrototype; // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)

    var proxiedPrototype = {};
    var namespace = name.split(".")[0];
    name = name.split(".")[1];
    var fullName = namespace + "-" + name;

    if (!prototype) {
      prototype = base;
      base = $.Widget;
    }

    if ($.isArray(prototype)) {
      prototype = $.extend.apply(null, [{}].concat(prototype));
    } // Create selector for plugin


    $.expr[":"][fullName.toLowerCase()] = function (elem) {
      return !!$.data(elem, fullName);
    };

    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];

    constructor = $[namespace][name] = function (options, element) {
      // Allow instantiation without "new" keyword
      if (!this._createWidget) {
        return new constructor(options, element);
      } // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)


      if (arguments.length) {
        this._createWidget(options, element);
      }
    }; // Extend with the existing constructor to carry over any static properties


    $.extend(constructor, existingConstructor, {
      version: prototype.version,
      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend({}, prototype),
      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    });
    basePrototype = new base(); // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from

    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function (prop, value) {
      if (!$.isFunction(value)) {
        proxiedPrototype[prop] = value;
        return;
      }

      proxiedPrototype[prop] = function () {
        function _super() {
          return base.prototype[prop].apply(this, arguments);
        }

        function _superApply(args) {
          return base.prototype[prop].apply(this, args);
        }

        return function () {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;
          this._super = _super;
          this._superApply = _superApply;
          returnValue = value.apply(this, arguments);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue;
        };
      }();
    });
    constructor.prototype = $.widget.extend(basePrototype, {
      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    }); // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.

    if (existingConstructor) {
      $.each(existingConstructor._childConstructors, function (i, child) {
        var childPrototype = child.prototype; // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base

        $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
      }); // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected

      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push(constructor);
    }

    $.widget.bridge(name, constructor);
    return constructor;
  };

  $.widget.extend = function (target) {
    var input = widgetSlice.call(arguments, 1);
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for (; inputIndex < inputLength; inputIndex++) {
      for (key in input[inputIndex]) {
        value = input[inputIndex][key];

        if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
          // Clone objects
          if ($.isPlainObject(value)) {
            target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : // Don't extend strings, arrays, etc. with objects
            $.widget.extend({}, value); // Copy everything else by reference
          } else {
            target[key] = value;
          }
        }
      }
    }

    return target;
  };

  $.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name;

    $.fn[name] = function (options) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call(arguments, 1);
      var returnValue = this;

      if (isMethodCall) {
        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if (!this.length && options === "instance") {
          returnValue = undefined;
        } else {
          this.each(function () {
            var methodValue;
            var instance = $.data(this, fullName);

            if (options === "instance") {
              returnValue = instance;
              return false;
            }

            if (!instance) {
              return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
            }

            if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
              return $.error("no such method '" + options + "' for " + name + " widget instance");
            }

            methodValue = instance[options].apply(instance, args);

            if (methodValue !== instance && methodValue !== undefined) {
              returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
              return false;
            }
          });
        }
      } else {
        // Allow multiple hashes to be passed on init
        if (args.length) {
          options = $.widget.extend.apply(null, [options].concat(args));
        }

        this.each(function () {
          var instance = $.data(this, fullName);

          if (instance) {
            instance.option(options || {});

            if (instance._init) {
              instance._init();
            }
          } else {
            $.data(this, fullName, new object(options, this));
          }
        });
      }

      return returnValue;
    };
  };

  $.Widget = function ()
  /* options, element */
  {};

  $.Widget._childConstructors = [];
  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: false,
      // Callbacks
      create: null
    },
    _createWidget: function _createWidget(options, element) {
      element = $(element || this.defaultElement || this)[0];
      this.element = $(element);
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;
      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if (element !== this) {
        $.data(element, this.widgetFullName, this);

        this._on(true, this.element, {
          remove: function remove(event) {
            if (event.target === element) {
              this.destroy();
            }
          }
        });

        this.document = $(element.style ? // Element within the document
        element.ownerDocument : // Element is window or document
        element.document || element);
        this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
      }

      this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);

      this._create();

      if (this.options.disabled) {
        this._setOptionDisabled(this.options.disabled);
      }

      this._trigger("create", null, this._getCreateEventData());

      this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,
    destroy: function destroy() {
      var that = this;

      this._destroy();

      $.each(this.classesElementLookup, function (key, value) {
        that._removeClass(value, key);
      }); // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()

      this.element.off(this.eventNamespace).removeData(this.widgetFullName);
      this.widget().off(this.eventNamespace).removeAttr("aria-disabled"); // Clean up events and states

      this.bindings.off(this.eventNamespace);
    },
    _destroy: $.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(key, value) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if (arguments.length === 0) {
        // Don't return a reference to the internal hash
        return $.widget.extend({}, this.options);
      }

      if (typeof key === "string") {
        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split(".");
        key = parts.shift();

        if (parts.length) {
          curOption = options[key] = $.widget.extend({}, this.options[key]);

          for (i = 0; i < parts.length - 1; i++) {
            curOption[parts[i]] = curOption[parts[i]] || {};
            curOption = curOption[parts[i]];
          }

          key = parts.pop();

          if (arguments.length === 1) {
            return curOption[key] === undefined ? null : curOption[key];
          }

          curOption[key] = value;
        } else {
          if (arguments.length === 1) {
            return this.options[key] === undefined ? null : this.options[key];
          }

          options[key] = value;
        }
      }

      this._setOptions(options);

      return this;
    },
    _setOptions: function _setOptions(options) {
      var key;

      for (key in options) {
        this._setOption(key, options[key]);
      }

      return this;
    },
    _setOption: function _setOption(key, value) {
      if (key === "classes") {
        this._setOptionClasses(value);
      }

      this.options[key] = value;

      if (key === "disabled") {
        this._setOptionDisabled(value);
      }

      return this;
    },
    _setOptionClasses: function _setOptionClasses(value) {
      var classKey, elements, currentElements;

      for (classKey in value) {
        currentElements = this.classesElementLookup[classKey];

        if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
          continue;
        } // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.


        elements = $(currentElements.get());

        this._removeClass(currentElements, classKey); // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().


        elements.addClass(this._classes({
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        }));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(value) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value); // If the widget is becoming disabled, then nothing is interactive


      if (value) {
        this._removeClass(this.hoverable, null, "ui-state-hover");

        this._removeClass(this.focusable, null, "ui-state-focus");
      }
    },
    enable: function enable() {
      return this._setOptions({
        disabled: false
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: true
      });
    },
    _classes: function _classes(options) {
      var full = [];
      var that = this;
      options = $.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, options);

      function processClassString(classes, checkOption) {
        var current, i;

        for (i = 0; i < classes.length; i++) {
          current = that.classesElementLookup[classes[i]] || $();

          if (options.add) {
            current = $($.unique(current.get().concat(options.element.get())));
          } else {
            current = $(current.not(options.element).get());
          }

          that.classesElementLookup[classes[i]] = current;
          full.push(classes[i]);

          if (checkOption && options.classes[classes[i]]) {
            full.push(options.classes[classes[i]]);
          }
        }
      }

      this._on(options.element, {
        "remove": "_untrackClassesElement"
      });

      if (options.keys) {
        processClassString(options.keys.match(/\S+/g) || [], true);
      }

      if (options.extra) {
        processClassString(options.extra.match(/\S+/g) || []);
      }

      return full.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(event) {
      var that = this;
      $.each(that.classesElementLookup, function (key, value) {
        if ($.inArray(event.target, value) !== -1) {
          that.classesElementLookup[key] = $(value.not(event.target).get());
        }
      });
    },
    _removeClass: function _removeClass(element, keys, extra) {
      return this._toggleClass(element, keys, extra, false);
    },
    _addClass: function _addClass(element, keys, extra) {
      return this._toggleClass(element, keys, extra, true);
    },
    _toggleClass: function _toggleClass(element, keys, extra, add) {
      add = typeof add === "boolean" ? add : extra;
      var shift = typeof element === "string" || element === null,
          options = {
        extra: shift ? keys : extra,
        keys: shift ? element : keys,
        element: shift ? this.element : element,
        add: add
      };
      options.element.toggleClass(this._classes(options), add);
      return this;
    },
    _on: function _on(suppressDisabledCheck, element, handlers) {
      var delegateElement;
      var instance = this; // No suppressDisabledCheck flag, shuffle arguments

      if (typeof suppressDisabledCheck !== "boolean") {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      } // No element argument, shuffle and use this.element


      if (!handlers) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $(element);
        this.bindings = this.bindings.add(element);
      }

      $.each(handlers, function (event, handler) {
        function handlerProxy() {
          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
            return;
          }

          return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
        } // Copy the guid so direct unbinding works


        if (typeof handler !== "string") {
          handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match(/^([\w:-]*)\s*(.*)$/);
        var eventName = match[1] + instance.eventNamespace;
        var selector = match[2];

        if (selector) {
          delegateElement.on(eventName, selector, handlerProxy);
        } else {
          element.on(eventName, handlerProxy);
        }
      });
    },
    _off: function _off(element, eventName) {
      eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
      element.off(eventName).off(eventName); // Clear the stack to avoid memory leaks (#10056)

      this.bindings = $(this.bindings.not(element).get());
      this.focusable = $(this.focusable.not(element).get());
      this.hoverable = $(this.hoverable.not(element).get());
    },
    _delay: function _delay(handler, delay) {
      function handlerProxy() {
        return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
      }

      var instance = this;
      return setTimeout(handlerProxy, delay || 0);
    },
    _hoverable: function _hoverable(element) {
      this.hoverable = this.hoverable.add(element);

      this._on(element, {
        mouseenter: function mouseenter(event) {
          this._addClass($(event.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(event) {
          this._removeClass($(event.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(element) {
      this.focusable = this.focusable.add(element);

      this._on(element, {
        focusin: function focusin(event) {
          this._addClass($(event.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(event) {
          this._removeClass($(event.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(type, event, data) {
      var prop, orig;
      var callback = this.options[type];
      data = data || {};
      event = $.Event(event);
      event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(); // The original event may come from any element
      // so we need to reset the target on the new event

      event.target = this.element[0]; // Copy original event properties over to the new event

      orig = event.originalEvent;

      if (orig) {
        for (prop in orig) {
          if (!(prop in event)) {
            event[prop] = orig[prop];
          }
        }
      }

      this.element.trigger(event, data);
      return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
    }
  };
  $.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (method, defaultEffect) {
    $.Widget.prototype["_" + method] = function (element, options, callback) {
      if (typeof options === "string") {
        options = {
          effect: options
        };
      }

      var hasOptions;
      var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
      options = options || {};

      if (typeof options === "number") {
        options = {
          duration: options
        };
      }

      hasOptions = !$.isEmptyObject(options);
      options.complete = callback;

      if (options.delay) {
        element.delay(options.delay);
      }

      if (hasOptions && $.effects && $.effects.effect[effectName]) {
        element[method](options);
      } else if (effectName !== method && element[effectName]) {
        element[effectName](options.duration, options.easing, callback);
      } else {
        element.queue(function (next) {
          $(this)[method]();

          if (callback) {
            callback.call(element[0]);
          }

          next();
        });
      }
    };
  });
  return $.widget;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/button.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/button.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), // These are only for backcompat
    // TODO: Remove after 1.12
    __webpack_require__(/*! ./controlgroup */ "./node_modules/jquery-ui/ui/widgets/controlgroup.js"), __webpack_require__(/*! ./checkboxradio */ "./node_modules/jquery-ui/ui/widgets/checkboxradio.js"), __webpack_require__(/*! ../keycode */ "./node_modules/jquery-ui/ui/keycode.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: true
    },
    _getCreateOptions: function _getCreateOptions() {
      var disabled,
          // This is to support cases like in jQuery Mobile where the base widget does have
      // an implementation of _getCreateOptions
      options = this._super() || {};
      this.isInput = this.element.is("input");
      disabled = this.element[0].disabled;

      if (disabled != null) {
        options.disabled = disabled;
      }

      this.originalLabel = this.isInput ? this.element.val() : this.element.html();

      if (this.originalLabel) {
        options.label = this.originalLabel;
      }

      return options;
    },
    _create: function _create() {
      if (!this.option.showLabel & !this.options.icon) {
        this.options.showLabel = true;
      } // We have to check the option again here even though we did in _getCreateOptions,
      // because null may have been passed on init which would override what was set in
      // _getCreateOptions


      if (this.options.disabled == null) {
        this.options.disabled = this.element[0].disabled || false;
      }

      this.hasTitle = !!this.element.attr("title"); // Check to see if the label needs to be set or if its already correct

      if (this.options.label && this.options.label !== this.originalLabel) {
        if (this.isInput) {
          this.element.val(this.options.label);
        } else {
          this.element.html(this.options.label);
        }
      }

      this._addClass("ui-button", "ui-widget");

      this._setOption("disabled", this.options.disabled);

      this._enhance();

      if (this.element.is("a")) {
        this._on({
          "keyup": function keyup(event) {
            if (event.keyCode === $.ui.keyCode.SPACE) {
              event.preventDefault(); // Support: PhantomJS <= 1.9, IE 8 Only
              // If a native click is available use it so we actually cause navigation
              // otherwise just trigger a click event

              if (this.element[0].click) {
                this.element[0].click();
              } else {
                this.element.trigger("click");
              }
            }
          }
        });
      }
    },
    _enhance: function _enhance() {
      if (!this.element.is("button")) {
        this.element.attr("role", "button");
      }

      if (this.options.icon) {
        this._updateIcon("icon", this.options.icon);

        this._updateTooltip();
      }
    },
    _updateTooltip: function _updateTooltip() {
      this.title = this.element.attr("title");

      if (!this.options.showLabel && !this.title) {
        this.element.attr("title", this.options.label);
      }
    },
    _updateIcon: function _updateIcon(option, value) {
      var icon = option !== "iconPosition",
          position = icon ? this.options.iconPosition : value,
          displayBlock = position === "top" || position === "bottom"; // Create icon

      if (!this.icon) {
        this.icon = $("<span>");

        this._addClass(this.icon, "ui-button-icon", "ui-icon");

        if (!this.options.showLabel) {
          this._addClass("ui-button-icon-only");
        }
      } else if (icon) {
        // If we are updating the icon remove the old icon class
        this._removeClass(this.icon, null, this.options.icon);
      } // If we are updating the icon add the new icon class


      if (icon) {
        this._addClass(this.icon, null, value);
      }

      this._attachIcon(position); // If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
      // the iconSpace if there is one.


      if (displayBlock) {
        this._addClass(this.icon, null, "ui-widget-icon-block");

        if (this.iconSpace) {
          this.iconSpace.remove();
        }
      } else {
        // Position is beginning or end so remove the ui-widget-icon-block class and add the
        // space if it does not exist
        if (!this.iconSpace) {
          this.iconSpace = $("<span> </span>");

          this._addClass(this.iconSpace, "ui-button-icon-space");
        }

        this._removeClass(this.icon, null, "ui-wiget-icon-block");

        this._attachIconSpace(position);
      }
    },
    _destroy: function _destroy() {
      this.element.removeAttr("role");

      if (this.icon) {
        this.icon.remove();
      }

      if (this.iconSpace) {
        this.iconSpace.remove();
      }

      if (!this.hasTitle) {
        this.element.removeAttr("title");
      }
    },
    _attachIconSpace: function _attachIconSpace(iconPosition) {
      this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function _attachIcon(iconPosition) {
      this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function _setOptions(options) {
      var newShowLabel = options.showLabel === undefined ? this.options.showLabel : options.showLabel,
          newIcon = options.icon === undefined ? this.options.icon : options.icon;

      if (!newShowLabel && !newIcon) {
        options.showLabel = true;
      }

      this._super(options);
    },
    _setOption: function _setOption(key, value) {
      if (key === "icon") {
        if (value) {
          this._updateIcon(key, value);
        } else if (this.icon) {
          this.icon.remove();

          if (this.iconSpace) {
            this.iconSpace.remove();
          }
        }
      }

      if (key === "iconPosition") {
        this._updateIcon(key, value);
      } // Make sure we can't end up with a button that has neither text nor icon


      if (key === "showLabel") {
        this._toggleClass("ui-button-icon-only", null, !value);

        this._updateTooltip();
      }

      if (key === "label") {
        if (this.isInput) {
          this.element.val(value);
        } else {
          // If there is an icon, append it, else nothing then append the value
          // this avoids removal of the icon when setting label text
          this.element.html(value);

          if (this.icon) {
            this._attachIcon(this.options.iconPosition);

            this._attachIconSpace(this.options.iconPosition);
          }
        }
      }

      this._super(key, value);

      if (key === "disabled") {
        this._toggleClass(null, "ui-state-disabled", value);

        this.element[0].disabled = value;

        if (value) {
          this.element.blur();
        }
      }
    },
    refresh: function refresh() {
      // Make sure to only check disabled if its an element that supports this otherwise
      // check for the disabled class to determine state
      var isDisabled = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");

      if (isDisabled !== this.options.disabled) {
        this._setOptions({
          disabled: isDisabled
        });
      }

      this._updateTooltip();
    }
  }); // DEPRECATED

  if ($.uiBackCompat !== false) {
    // Text and Icons options
    $.widget("ui.button", $.ui.button, {
      options: {
        text: true,
        icons: {
          primary: null,
          secondary: null
        }
      },
      _create: function _create() {
        if (this.options.showLabel && !this.options.text) {
          this.options.showLabel = this.options.text;
        }

        if (!this.options.showLabel && this.options.text) {
          this.options.text = this.options.showLabel;
        }

        if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) {
          if (this.options.icons.primary) {
            this.options.icon = this.options.icons.primary;
          } else {
            this.options.icon = this.options.icons.secondary;
            this.options.iconPosition = "end";
          }
        } else if (this.options.icon) {
          this.options.icons.primary = this.options.icon;
        }

        this._super();
      },
      _setOption: function _setOption(key, value) {
        if (key === "text") {
          this._super("showLabel", value);

          return;
        }

        if (key === "showLabel") {
          this.options.text = value;
        }

        if (key === "icon") {
          this.options.icons.primary = value;
        }

        if (key === "icons") {
          if (value.primary) {
            this._super("icon", value.primary);

            this._super("iconPosition", "beginning");
          } else if (value.secondary) {
            this._super("icon", value.secondary);

            this._super("iconPosition", "end");
          }
        }

        this._superApply(arguments);
      }
    });

    $.fn.button = function (orig) {
      return function () {
        if (!this.length || this.length && this[0].tagName !== "INPUT" || this.length && this[0].tagName === "INPUT" && this.attr("type") !== "checkbox" && this.attr("type") !== "radio") {
          return orig.apply(this, arguments);
        }

        if (!$.ui.checkboxradio) {
          $.error("Checkboxradio widget missing");
        }

        if (arguments.length === 0) {
          return this.checkboxradio({
            "icon": false
          });
        }

        return this.checkboxradio.apply(this, arguments);
      };
    }($.fn.button);

    $.fn.buttonset = function () {
      if (!$.ui.controlgroup) {
        $.error("Controlgroup widget missing");
      }

      if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) {
        return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]);
      }

      if (arguments[0] === "option" && arguments[1] === "items") {
        return this.controlgroup.apply(this, [arguments[0], "items.button"]);
      }

      if (_typeof(arguments[0]) === "object" && arguments[0].items) {
        arguments[0].items = {
          button: arguments[0].items
        };
      }

      return this.controlgroup.apply(this, arguments);
    };
  }

  return $.ui.button;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/checkboxradio.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/checkboxradio.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../escape-selector */ "./node_modules/jquery-ui/ui/escape-selector.js"), __webpack_require__(/*! ../form-reset-mixin */ "./node_modules/jquery-ui/ui/form-reset-mixin.js"), __webpack_require__(/*! ../labels */ "./node_modules/jquery-ui/ui/labels.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.widget("ui.checkboxradio", [$.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: true,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function _getCreateOptions() {
      var disabled, labels;
      var that = this;
      var options = this._super() || {}; // We read the type here, because it makes more sense to throw a element type error first,
      // rather then the error for lack of a label. Often if its the wrong type, it
      // won't have a label (e.g. calling on a div, btn, etc)

      this._readType();

      labels = this.element.labels(); // If there are multiple labels, use the last one

      this.label = $(labels[labels.length - 1]);

      if (!this.label.length) {
        $.error("No label found for checkboxradio widget");
      }

      this.originalLabel = ""; // We need to get the label text but this may also need to make sure it does not contain the
      // input itself.

      this.label.contents().not(this.element[0]).each(function () {
        // The label contents could be text, html, or a mix. We concat each element to get a
        // string representation of the label, without the input as part of it.
        that.originalLabel += this.nodeType === 3 ? $(this).text() : this.outerHTML;
      }); // Set the label option if we found label text

      if (this.originalLabel) {
        options.label = this.originalLabel;
      }

      disabled = this.element[0].disabled;

      if (disabled != null) {
        options.disabled = disabled;
      }

      return options;
    },
    _create: function _create() {
      var checked = this.element[0].checked;

      this._bindFormResetHandler();

      if (this.options.disabled == null) {
        this.options.disabled = this.element[0].disabled;
      }

      this._setOption("disabled", this.options.disabled);

      this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");

      this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");

      if (this.type === "radio") {
        this._addClass(this.label, "ui-checkboxradio-radio-label");
      }

      if (this.options.label && this.options.label !== this.originalLabel) {
        this._updateLabel();
      } else if (this.originalLabel) {
        this.options.label = this.originalLabel;
      }

      this._enhance();

      if (checked) {
        this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");

        if (this.icon) {
          this._addClass(this.icon, null, "ui-state-hover");
        }
      }

      this._on({
        change: "_toggleClasses",
        focus: function focus() {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
        },
        blur: function blur() {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
        }
      });
    },
    _readType: function _readType() {
      var nodeName = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type;

      if (nodeName !== "input" || !/radio|checkbox/.test(this.type)) {
        $.error("Can't create checkboxradio on element.nodeName=" + nodeName + " and element.type=" + this.type);
      }
    },
    // Support jQuery Mobile enhanced option
    _enhance: function _enhance() {
      this._updateIcon(this.element[0].checked);
    },
    widget: function widget() {
      return this.label;
    },
    _getRadioGroup: function _getRadioGroup() {
      var group;
      var name = this.element[0].name;
      var nameSelector = "input[name='" + $.ui.escapeSelector(name) + "']";

      if (!name) {
        return $([]);
      }

      if (this.form.length) {
        group = $(this.form[0].elements).filter(nameSelector);
      } else {
        // Not inside a form, check all inputs that also are not inside a form
        group = $(nameSelector).filter(function () {
          return $(this).form().length === 0;
        });
      }

      return group.not(this.element);
    },
    _toggleClasses: function _toggleClasses() {
      var checked = this.element[0].checked;

      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);

      if (this.options.icon && this.type === "checkbox") {
        this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", checked)._toggleClass(this.icon, null, "ui-icon-blank", !checked);
      }

      if (this.type === "radio") {
        this._getRadioGroup().each(function () {
          var instance = $(this).checkboxradio("instance");

          if (instance) {
            instance._removeClass(instance.label, "ui-checkboxradio-checked", "ui-state-active");
          }
        });
      }
    },
    _destroy: function _destroy() {
      this._unbindFormResetHandler();

      if (this.icon) {
        this.icon.remove();
        this.iconSpace.remove();
      }
    },
    _setOption: function _setOption(key, value) {
      // We don't allow the value to be set to nothing
      if (key === "label" && !value) {
        return;
      }

      this._super(key, value);

      if (key === "disabled") {
        this._toggleClass(this.label, null, "ui-state-disabled", value);

        this.element[0].disabled = value; // Don't refresh when setting disabled

        return;
      }

      this.refresh();
    },
    _updateIcon: function _updateIcon(checked) {
      var toAdd = "ui-icon ui-icon-background ";

      if (this.options.icon) {
        if (!this.icon) {
          this.icon = $("<span>");
          this.iconSpace = $("<span> </span>");

          this._addClass(this.iconSpace, "ui-checkboxradio-icon-space");
        }

        if (this.type === "checkbox") {
          toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";

          this._removeClass(this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check");
        } else {
          toAdd += "ui-icon-blank";
        }

        this._addClass(this.icon, "ui-checkboxradio-icon", toAdd);

        if (!checked) {
          this._removeClass(this.icon, null, "ui-icon-check ui-state-checked");
        }

        this.icon.prependTo(this.label).after(this.iconSpace);
      } else if (this.icon !== undefined) {
        this.icon.remove();
        this.iconSpace.remove();
        delete this.icon;
      }
    },
    _updateLabel: function _updateLabel() {
      // Remove the contents of the label ( minus the icon, icon space, and input )
      var contents = this.label.contents().not(this.element[0]);

      if (this.icon) {
        contents = contents.not(this.icon[0]);
      }

      if (this.iconSpace) {
        contents = contents.not(this.iconSpace[0]);
      }

      contents.remove();
      this.label.append(this.options.label);
    },
    refresh: function refresh() {
      var checked = this.element[0].checked,
          isDisabled = this.element[0].disabled;

      this._updateIcon(checked);

      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);

      if (this.options.label !== null) {
        this._updateLabel();
      }

      if (isDisabled !== this.options.disabled) {
        this._setOptions({
          "disabled": isDisabled
        });
      }
    }
  }]);
  return $.ui.checkboxradio;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/controlgroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/controlgroup.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Controlgroup
//>>group: Widgets
//>>description: Visually groups form control widgets
//>>docs: http://api.jqueryui.com/controlgroup/
//>>demos: http://jqueryui.com/controlgroup/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/controlgroup.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;
  return $.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: true,
      items: {
        "button": "input[type=button], input[type=submit], input[type=reset], button, a",
        "controlgroupLabel": ".ui-controlgroup-label",
        "checkboxradio": "input[type='checkbox'], input[type='radio']",
        "selectmenu": "select",
        "spinner": ".ui-spinner-input"
      }
    },
    _create: function _create() {
      this._enhance();
    },
    // To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
    _enhance: function _enhance() {
      this.element.attr("role", "toolbar");
      this.refresh();
    },
    _destroy: function _destroy() {
      this._callChildMethod("destroy");

      this.childWidgets.removeData("ui-controlgroup-data");
      this.element.removeAttr("role");

      if (this.options.items.controlgroupLabel) {
        this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
      }
    },
    _initWidgets: function _initWidgets() {
      var that = this,
          childWidgets = []; // First we iterate over each of the items options

      $.each(this.options.items, function (widget, selector) {
        var labels;
        var options = {}; // Make sure the widget has a selector set

        if (!selector) {
          return;
        }

        if (widget === "controlgroupLabel") {
          labels = that.element.find(selector);
          labels.each(function () {
            var element = $(this);

            if (element.children(".ui-controlgroup-label-contents").length) {
              return;
            }

            element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
          });

          that._addClass(labels, null, "ui-widget ui-widget-content ui-state-default");

          childWidgets = childWidgets.concat(labels.get());
          return;
        } // Make sure the widget actually exists


        if (!$.fn[widget]) {
          return;
        } // We assume everything is in the middle to start because we can't determine
        // first / last elements until all enhancments are done.


        if (that["_" + widget + "Options"]) {
          options = that["_" + widget + "Options"]("middle");
        } else {
          options = {
            classes: {}
          };
        } // Find instances of this widget inside controlgroup and init them


        that.element.find(selector).each(function () {
          var element = $(this);
          var instance = element[widget]("instance"); // We need to clone the default options for this type of widget to avoid
          // polluting the variable options which has a wider scope than a single widget.

          var instanceOptions = $.widget.extend({}, options); // If the button is the child of a spinner ignore it
          // TODO: Find a more generic solution

          if (widget === "button" && element.parent(".ui-spinner").length) {
            return;
          } // Create the widget if it doesn't exist


          if (!instance) {
            instance = element[widget]()[widget]("instance");
          }

          if (instance) {
            instanceOptions.classes = that._resolveClassesValues(instanceOptions.classes, instance);
          }

          element[widget](instanceOptions); // Store an instance of the controlgroup to be able to reference
          // from the outermost element for changing options and refresh

          var widgetElement = element[widget]("widget");
          $.data(widgetElement[0], "ui-controlgroup-data", instance ? instance : element[widget]("instance"));
          childWidgets.push(widgetElement[0]);
        });
      });
      this.childWidgets = $($.unique(childWidgets));

      this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function _callChildMethod(method) {
      this.childWidgets.each(function () {
        var element = $(this),
            data = element.data("ui-controlgroup-data");

        if (data && data[method]) {
          data[method]();
        }
      });
    },
    _updateCornerClass: function _updateCornerClass(element, position) {
      var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";

      var add = this._buildSimpleOptions(position, "label").classes.label;

      this._removeClass(element, null, remove);

      this._addClass(element, null, add);
    },
    _buildSimpleOptions: function _buildSimpleOptions(position, key) {
      var direction = this.options.direction === "vertical";
      var result = {
        classes: {}
      };
      result.classes[key] = {
        "middle": "",
        "first": "ui-corner-" + (direction ? "top" : "left"),
        "last": "ui-corner-" + (direction ? "bottom" : "right"),
        "only": "ui-corner-all"
      }[position];
      return result;
    },
    _spinnerOptions: function _spinnerOptions(position) {
      var options = this._buildSimpleOptions(position, "ui-spinner");

      options.classes["ui-spinner-up"] = "";
      options.classes["ui-spinner-down"] = "";
      return options;
    },
    _buttonOptions: function _buttonOptions(position) {
      return this._buildSimpleOptions(position, "ui-button");
    },
    _checkboxradioOptions: function _checkboxradioOptions(position) {
      return this._buildSimpleOptions(position, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function _selectmenuOptions(position) {
      var direction = this.options.direction === "vertical";
      return {
        width: direction ? "auto" : false,
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (direction ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        }[position]
      };
    },
    _resolveClassesValues: function _resolveClassesValues(classes, instance) {
      var result = {};
      $.each(classes, function (key) {
        var current = instance.options.classes[key] || "";
        current = $.trim(current.replace(controlgroupCornerRegex, ""));
        result[key] = (current + " " + classes[key]).replace(/\s+/g, " ");
      });
      return result;
    },
    _setOption: function _setOption(key, value) {
      if (key === "direction") {
        this._removeClass("ui-controlgroup-" + this.options.direction);
      }

      this._super(key, value);

      if (key === "disabled") {
        this._callChildMethod(value ? "disable" : "enable");

        return;
      }

      this.refresh();
    },
    refresh: function refresh() {
      var children,
          that = this;

      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);

      if (this.options.direction === "horizontal") {
        this._addClass(null, "ui-helper-clearfix");
      }

      this._initWidgets();

      children = this.childWidgets; // We filter here because we need to track all childWidgets not just the visible ones

      if (this.options.onlyVisible) {
        children = children.filter(":visible");
      }

      if (children.length) {
        // We do this last because we need to make sure all enhancment is done
        // before determining first and last
        $.each(["first", "last"], function (index, value) {
          var instance = children[value]().data("ui-controlgroup-data");

          if (instance && that["_" + instance.widgetName + "Options"]) {
            var options = that["_" + instance.widgetName + "Options"](children.length === 1 ? "only" : value);
            options.classes = that._resolveClassesValues(options.classes, instance);
            instance.element[instance.widgetName](options);
          } else {
            that._updateCornerClass(children[value](), value);
          }
        }); // Finally call the refresh method on each of the child widgets.

        this._callChildMethod("refresh");
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/datepicker.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/datepicker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// jscs:disable maximumLineLength

/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */

/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../keycode */ "./node_modules/jquery-ui/ui/keycode.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.extend($.ui, {
    datepicker: {
      version: "1.12.1"
    }
  });
  var datepicker_instActive;

  function datepicker_getZindex(elem) {
    var position, value;

    while (elem.length && elem[0] !== document) {
      // Ignore z-index if position is set to a value where z-index is ignored by the browser
      // This makes behavior of this function consistent across browsers
      // WebKit always returns auto if the element is positioned
      position = elem.css("position");

      if (position === "absolute" || position === "relative" || position === "fixed") {
        // IE returns 0 when zIndex is not specified
        // other browsers return a string
        // we ignore the case of nested elements with an explicit value of 0
        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
        value = parseInt(elem.css("zIndex"), 10);

        if (!isNaN(value) && value !== 0) {
          return value;
        }
      }

      elem = elem.parent();
    }

    return 0;
  }
  /* Date picker manager.
     Use the singleton instance of this class, $.datepicker, to interact with the date picker.
     Settings for (groups of) date pickers are maintained in an instance object,
     allowing multiple different settings on the same page. */


  function Datepicker() {
    this._curInst = null; // The current instance in use

    this._keyEvent = false; // If the last event was a key event

    this._disabledInputs = []; // List of date picker inputs that have been disabled

    this._datepickerShowing = false; // True if the popup picker is showing , false if not

    this._inDialog = false; // True if showing within a "dialog", false if not

    this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division

    this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class

    this._appendClass = "ui-datepicker-append"; // The name of the append marker class

    this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class

    this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class

    this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class

    this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class

    this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class

    this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class

    this.regional = []; // Available regional settings, indexed by language code

    this.regional[""] = {
      // Default regional settings
      closeText: "Done",
      // Display text for close link
      prevText: "Prev",
      // Display text for previous month link
      nextText: "Next",
      // Display text for next month link
      currentText: "Today",
      // Display text for current month link
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      // Names of months for drop-down and formatting
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      // For formatting
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      // For formatting
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      // For formatting
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      // Column headings for days starting at Sunday
      weekHeader: "Wk",
      // Column header for week of the year
      dateFormat: "mm/dd/yy",
      // See format options on parseDate
      firstDay: 0,
      // The first day of the week, Sun = 0, Mon = 1, ...
      isRTL: false,
      // True if right-to-left language, false if left-to-right
      showMonthAfterYear: false,
      // True if the year select precedes month, false for month then year
      yearSuffix: "" // Additional text to append to the year in the month headers

    };
    this._defaults = {
      // Global defaults for all the date picker instances
      showOn: "focus",
      // "focus" for popup on focus,
      // "button" for trigger button, or "both" for either
      showAnim: "fadeIn",
      // Name of jQuery animation for popup
      showOptions: {},
      // Options for enhanced animations
      defaultDate: null,
      // Used when field is blank: actual date,
      // +/-number for offset from today, null for today
      appendText: "",
      // Display text following the input box, e.g. showing the format
      buttonText: "...",
      // Text for trigger button
      buttonImage: "",
      // URL for trigger button image
      buttonImageOnly: false,
      // True if the image appears alone, false if it appears on a button
      hideIfNoPrevNext: false,
      // True to hide next/previous month links
      // if not applicable, false to just disable them
      navigationAsDateFormat: false,
      // True if date formatting applied to prev/today/next links
      gotoCurrent: false,
      // True if today link goes back to current selection instead
      changeMonth: false,
      // True if month can be selected directly, false if only prev/next
      changeYear: false,
      // True if year can be selected directly, false if only prev/next
      yearRange: "c-10:c+10",
      // Range of years to display in drop-down,
      // either relative to today's year (-nn:+nn), relative to currently displayed year
      // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
      showOtherMonths: false,
      // True to show dates in other months, false to leave blank
      selectOtherMonths: false,
      // True to allow selection of dates in other months, false for unselectable
      showWeek: false,
      // True to show week of the year, false to not show it
      calculateWeek: this.iso8601Week,
      // How to calculate the week of the year,
      // takes a Date and returns the number of the week for it
      shortYearCutoff: "+10",
      // Short year values < this are in the current century,
      // > this are in the previous century,
      // string value starting with "+" for current year + value
      minDate: null,
      // The earliest selectable date, or null for no limit
      maxDate: null,
      // The latest selectable date, or null for no limit
      duration: "fast",
      // Duration of display/closure
      beforeShowDay: null,
      // Function that takes a date and returns an array with
      // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
      // [2] = cell title (optional), e.g. $.datepicker.noWeekends
      beforeShow: null,
      // Function that takes an input field and
      // returns a set of custom settings for the date picker
      onSelect: null,
      // Define a callback function when a date is selected
      onChangeMonthYear: null,
      // Define a callback function when the month or year is changed
      onClose: null,
      // Define a callback function when the datepicker is closed
      numberOfMonths: 1,
      // Number of months to show at a time
      showCurrentAtPos: 0,
      // The position in multipe months at which to show the current month (starting at 0)
      stepMonths: 1,
      // Number of months to step back/forward
      stepBigMonths: 12,
      // Number of months to step back/forward for the big links
      altField: "",
      // Selector for an alternate field to store selected dates into
      altFormat: "",
      // The date format to use for the alternate field
      constrainInput: true,
      // The input is constrained by the current date format
      showButtonPanel: false,
      // True to show button panel, false to not show it
      autoSize: false,
      // True to size the input for the date format, false to leave as is
      disabled: false // The initial disabled state

    };
    $.extend(this._defaults, this.regional[""]);
    this.regional.en = $.extend(true, {}, this.regional[""]);
    this.regional["en-US"] = $.extend(true, {}, this.regional.en);
    this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }

  $.extend(Datepicker.prototype, {
    /* Class name added to elements to indicate already configured with a date picker. */
    markerClassName: "hasDatepicker",
    //Keep track of the maximum number of rows displayed (see #7043)
    maxRows: 4,
    // TODO rename to "widget" when switching to widget factory
    _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    },

    /* Override the default settings for all instances of the date picker.
     * @param  settings  object - the new settings to use as defaults (anonymous object)
     * @return the manager object
     */
    setDefaults: function setDefaults(settings) {
      datepicker_extendRemove(this._defaults, settings || {});
      return this;
    },

    /* Attach the date picker to a jQuery selection.
     * @param  target	element - the target input field or division or span
     * @param  settings  object - the new settings to use for this date picker instance (anonymous)
     */
    _attachDatepicker: function _attachDatepicker(target, settings) {
      var nodeName, inline, inst;
      nodeName = target.nodeName.toLowerCase();
      inline = nodeName === "div" || nodeName === "span";

      if (!target.id) {
        this.uuid += 1;
        target.id = "dp" + this.uuid;
      }

      inst = this._newInst($(target), inline);
      inst.settings = $.extend({}, settings || {});

      if (nodeName === "input") {
        this._connectDatepicker(target, inst);
      } else if (inline) {
        this._inlineDatepicker(target, inst);
      }
    },

    /* Create a new instance object. */
    _newInst: function _newInst(target, inline) {
      var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars

      return {
        id: id,
        input: target,
        // associated target
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        // current selection
        drawMonth: 0,
        drawYear: 0,
        // month being drawn
        inline: inline,
        // is datepicker inline or not
        dpDiv: !inline ? this.dpDiv : // presentation div
        datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
      };
    },

    /* Attach the date picker to an input field. */
    _connectDatepicker: function _connectDatepicker(target, inst) {
      var input = $(target);
      inst.append = $([]);
      inst.trigger = $([]);

      if (input.hasClass(this.markerClassName)) {
        return;
      }

      this._attachments(input, inst);

      input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);

      this._autoSize(inst);

      $.data(target, "datepicker", inst); //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)

      if (inst.settings.disabled) {
        this._disableDatepicker(target);
      }
    },

    /* Make attachments based on settings. */
    _attachments: function _attachments(input, inst) {
      var showOn,
          buttonText,
          buttonImage,
          appendText = this._get(inst, "appendText"),
          isRTL = this._get(inst, "isRTL");

      if (inst.append) {
        inst.append.remove();
      }

      if (appendText) {
        inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
        input[isRTL ? "before" : "after"](inst.append);
      }

      input.off("focus", this._showDatepicker);

      if (inst.trigger) {
        inst.trigger.remove();
      }

      showOn = this._get(inst, "showOn");

      if (showOn === "focus" || showOn === "both") {
        // pop-up date picker when in the marked field
        input.on("focus", this._showDatepicker);
      }

      if (showOn === "button" || showOn === "both") {
        // pop-up date picker when button clicked
        buttonText = this._get(inst, "buttonText");
        buttonImage = this._get(inst, "buttonImage");
        inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
          src: buttonImage,
          alt: buttonText,
          title: buttonText
        }) : $("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage ? buttonText : $("<img/>").attr({
          src: buttonImage,
          alt: buttonText,
          title: buttonText
        })));
        input[isRTL ? "before" : "after"](inst.trigger);
        inst.trigger.on("click", function () {
          if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
            $.datepicker._hideDatepicker();
          } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
            $.datepicker._hideDatepicker();

            $.datepicker._showDatepicker(input[0]);
          } else {
            $.datepicker._showDatepicker(input[0]);
          }

          return false;
        });
      }
    },

    /* Apply the maximum length for the date format. */
    _autoSize: function _autoSize(inst) {
      if (this._get(inst, "autoSize") && !inst.inline) {
        var findMax,
            max,
            maxI,
            i,
            date = new Date(2009, 12 - 1, 20),
            // Ensure double digits
        dateFormat = this._get(inst, "dateFormat");

        if (dateFormat.match(/[DM]/)) {
          findMax = function findMax(names) {
            max = 0;
            maxI = 0;

            for (i = 0; i < names.length; i++) {
              if (names[i].length > max) {
                max = names[i].length;
                maxI = i;
              }
            }

            return maxI;
          };

          date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")));
          date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay());
        }

        inst.input.attr("size", this._formatDate(inst, date).length);
      }
    },

    /* Attach an inline date picker to a div. */
    _inlineDatepicker: function _inlineDatepicker(target, inst) {
      var divSpan = $(target);

      if (divSpan.hasClass(this.markerClassName)) {
        return;
      }

      divSpan.addClass(this.markerClassName).append(inst.dpDiv);
      $.data(target, "datepicker", inst);

      this._setDate(inst, this._getDefaultDate(inst), true);

      this._updateDatepicker(inst);

      this._updateAlternate(inst); //If disabled option is true, disable the datepicker before showing it (see ticket #5665)


      if (inst.settings.disabled) {
        this._disableDatepicker(target);
      } // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
      // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height


      inst.dpDiv.css("display", "block");
    },

    /* Pop-up the date picker in a "dialog" box.
     * @param  input element - ignored
     * @param  date	string or Date - the initial date to display
     * @param  onSelect  function - the function to call when a date is selected
     * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
     * @param  pos int[2] - coordinates for the dialog's position within the screen or
     *					event - with x/y coordinates or
     *					leave empty for default (screen centre)
     * @return the manager object
     */
    _dialogDatepicker: function _dialogDatepicker(input, date, onSelect, settings, pos) {
      var id,
          browserWidth,
          browserHeight,
          scrollX,
          scrollY,
          inst = this._dialogInst; // internal instance

      if (!inst) {
        this.uuid += 1;
        id = "dp" + this.uuid;
        this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>");

        this._dialogInput.on("keydown", this._doKeyDown);

        $("body").append(this._dialogInput);
        inst = this._dialogInst = this._newInst(this._dialogInput, false);
        inst.settings = {};
        $.data(this._dialogInput[0], "datepicker", inst);
      }

      datepicker_extendRemove(inst.settings, settings || {});
      date = date && date.constructor === Date ? this._formatDate(inst, date) : date;

      this._dialogInput.val(date);

      this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null;

      if (!this._pos) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;
        scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = // should use actual width/height below
        [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
      } // Move input on screen for focus, but hidden behind dialog


      this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");

      inst.settings.onSelect = onSelect;
      this._inDialog = true;
      this.dpDiv.addClass(this._dialogClass);

      this._showDatepicker(this._dialogInput[0]);

      if ($.blockUI) {
        $.blockUI(this.dpDiv);
      }

      $.data(this._dialogInput[0], "datepicker", inst);
      return this;
    },

    /* Detach a datepicker from its control.
     * @param  target	element - the target input field or division or span
     */
    _destroyDatepicker: function _destroyDatepicker(target) {
      var nodeName,
          $target = $(target),
          inst = $.data(target, "datepicker");

      if (!$target.hasClass(this.markerClassName)) {
        return;
      }

      nodeName = target.nodeName.toLowerCase();
      $.removeData(target, "datepicker");

      if (nodeName === "input") {
        inst.append.remove();
        inst.trigger.remove();
        $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp);
      } else if (nodeName === "div" || nodeName === "span") {
        $target.removeClass(this.markerClassName).empty();
      }

      if (datepicker_instActive === inst) {
        datepicker_instActive = null;
      }
    },

    /* Enable the date picker to a jQuery selection.
     * @param  target	element - the target input field or division or span
     */
    _enableDatepicker: function _enableDatepicker(target) {
      var nodeName,
          inline,
          $target = $(target),
          inst = $.data(target, "datepicker");

      if (!$target.hasClass(this.markerClassName)) {
        return;
      }

      nodeName = target.nodeName.toLowerCase();

      if (nodeName === "input") {
        target.disabled = false;
        inst.trigger.filter("button").each(function () {
          this.disabled = false;
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        });
      } else if (nodeName === "div" || nodeName === "span") {
        inline = $target.children("." + this._inlineClass);
        inline.children().removeClass("ui-state-disabled");
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
      }

      this._disabledInputs = $.map(this._disabledInputs, function (value) {
        return value === target ? null : value;
      }); // delete entry
    },

    /* Disable the date picker to a jQuery selection.
     * @param  target	element - the target input field or division or span
     */
    _disableDatepicker: function _disableDatepicker(target) {
      var nodeName,
          inline,
          $target = $(target),
          inst = $.data(target, "datepicker");

      if (!$target.hasClass(this.markerClassName)) {
        return;
      }

      nodeName = target.nodeName.toLowerCase();

      if (nodeName === "input") {
        target.disabled = true;
        inst.trigger.filter("button").each(function () {
          this.disabled = true;
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        });
      } else if (nodeName === "div" || nodeName === "span") {
        inline = $target.children("." + this._inlineClass);
        inline.children().addClass("ui-state-disabled");
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
      }

      this._disabledInputs = $.map(this._disabledInputs, function (value) {
        return value === target ? null : value;
      }); // delete entry

      this._disabledInputs[this._disabledInputs.length] = target;
    },

    /* Is the first field in a jQuery collection disabled as a datepicker?
     * @param  target	element - the target input field or division or span
     * @return boolean - true if disabled, false if enabled
     */
    _isDisabledDatepicker: function _isDisabledDatepicker(target) {
      if (!target) {
        return false;
      }

      for (var i = 0; i < this._disabledInputs.length; i++) {
        if (this._disabledInputs[i] === target) {
          return true;
        }
      }

      return false;
    },

    /* Retrieve the instance data for the target control.
     * @param  target  element - the target input field or division or span
     * @return  object - the associated instance data
     * @throws  error if a jQuery problem getting data
     */
    _getInst: function _getInst(target) {
      try {
        return $.data(target, "datepicker");
      } catch (err) {
        throw "Missing instance data for this datepicker";
      }
    },

    /* Update or retrieve the settings for a date picker attached to an input field or division.
     * @param  target  element - the target input field or division or span
     * @param  name	object - the new settings to update or
     *				string - the name of the setting to change or retrieve,
     *				when retrieving also "all" for all instance settings or
     *				"defaults" for all global defaults
     * @param  value   any - the new value for the setting
     *				(omit if above is an object or to retrieve a value)
     */
    _optionDatepicker: function _optionDatepicker(target, name, value) {
      var settings,
          date,
          minDate,
          maxDate,
          inst = this._getInst(target);

      if (arguments.length === 2 && typeof name === "string") {
        return name === "defaults" ? $.extend({}, $.datepicker._defaults) : inst ? name === "all" ? $.extend({}, inst.settings) : this._get(inst, name) : null;
      }

      settings = name || {};

      if (typeof name === "string") {
        settings = {};
        settings[name] = value;
      }

      if (inst) {
        if (this._curInst === inst) {
          this._hideDatepicker();
        }

        date = this._getDateDatepicker(target, true);
        minDate = this._getMinMaxDate(inst, "min");
        maxDate = this._getMinMaxDate(inst, "max");
        datepicker_extendRemove(inst.settings, settings); // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided

        if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
          inst.settings.minDate = this._formatDate(inst, minDate);
        }

        if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
          inst.settings.maxDate = this._formatDate(inst, maxDate);
        }

        if ("disabled" in settings) {
          if (settings.disabled) {
            this._disableDatepicker(target);
          } else {
            this._enableDatepicker(target);
          }
        }

        this._attachments($(target), inst);

        this._autoSize(inst);

        this._setDate(inst, date);

        this._updateAlternate(inst);

        this._updateDatepicker(inst);
      }
    },
    // Change method deprecated
    _changeDatepicker: function _changeDatepicker(target, name, value) {
      this._optionDatepicker(target, name, value);
    },

    /* Redraw the date picker attached to an input field or division.
     * @param  target  element - the target input field or division or span
     */
    _refreshDatepicker: function _refreshDatepicker(target) {
      var inst = this._getInst(target);

      if (inst) {
        this._updateDatepicker(inst);
      }
    },

    /* Set the dates for a jQuery selection.
     * @param  target element - the target input field or division or span
     * @param  date	Date - the new date
     */
    _setDateDatepicker: function _setDateDatepicker(target, date) {
      var inst = this._getInst(target);

      if (inst) {
        this._setDate(inst, date);

        this._updateDatepicker(inst);

        this._updateAlternate(inst);
      }
    },

    /* Get the date(s) for the first entry in a jQuery selection.
     * @param  target element - the target input field or division or span
     * @param  noDefault boolean - true if no default date is to be used
     * @return Date - the current date
     */
    _getDateDatepicker: function _getDateDatepicker(target, noDefault) {
      var inst = this._getInst(target);

      if (inst && !inst.inline) {
        this._setDateFromField(inst, noDefault);
      }

      return inst ? this._getDate(inst) : null;
    },

    /* Handle keystrokes. */
    _doKeyDown: function _doKeyDown(event) {
      var onSelect,
          dateStr,
          sel,
          inst = $.datepicker._getInst(event.target),
          handled = true,
          isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

      inst._keyEvent = true;

      if ($.datepicker._datepickerShowing) {
        switch (event.keyCode) {
          case 9:
            $.datepicker._hideDatepicker();

            handled = false;
            break;
          // hide on tab out

          case 13:
            sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);

            if (sel[0]) {
              $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
            }

            onSelect = $.datepicker._get(inst, "onSelect");

            if (onSelect) {
              dateStr = $.datepicker._formatDate(inst); // Trigger custom callback

              onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
            } else {
              $.datepicker._hideDatepicker();
            }

            return false;
          // don't submit the form

          case 27:
            $.datepicker._hideDatepicker();

            break;
          // hide on escape

          case 33:
            $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");

            break;
          // previous month/year on page up/+ ctrl

          case 34:
            $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");

            break;
          // next month/year on page down/+ ctrl

          case 35:
            if (event.ctrlKey || event.metaKey) {
              $.datepicker._clearDate(event.target);
            }

            handled = event.ctrlKey || event.metaKey;
            break;
          // clear on ctrl or command +end

          case 36:
            if (event.ctrlKey || event.metaKey) {
              $.datepicker._gotoToday(event.target);
            }

            handled = event.ctrlKey || event.metaKey;
            break;
          // current on ctrl or command +home

          case 37:
            if (event.ctrlKey || event.metaKey) {
              $.datepicker._adjustDate(event.target, isRTL ? +1 : -1, "D");
            }

            handled = event.ctrlKey || event.metaKey; // -1 day on ctrl or command +left

            if (event.originalEvent.altKey) {
              $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
            } // next month/year on alt +left on Mac


            break;

          case 38:
            if (event.ctrlKey || event.metaKey) {
              $.datepicker._adjustDate(event.target, -7, "D");
            }

            handled = event.ctrlKey || event.metaKey;
            break;
          // -1 week on ctrl or command +up

          case 39:
            if (event.ctrlKey || event.metaKey) {
              $.datepicker._adjustDate(event.target, isRTL ? -1 : +1, "D");
            }

            handled = event.ctrlKey || event.metaKey; // +1 day on ctrl or command +right

            if (event.originalEvent.altKey) {
              $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
            } // next month/year on alt +right


            break;

          case 40:
            if (event.ctrlKey || event.metaKey) {
              $.datepicker._adjustDate(event.target, +7, "D");
            }

            handled = event.ctrlKey || event.metaKey;
            break;
          // +1 week on ctrl or command +down

          default:
            handled = false;
        }
      } else if (event.keyCode === 36 && event.ctrlKey) {
        // display the date picker on ctrl+home
        $.datepicker._showDatepicker(this);
      } else {
        handled = false;
      }

      if (handled) {
        event.preventDefault();
        event.stopPropagation();
      }
    },

    /* Filter entered characters - based on date format. */
    _doKeyPress: function _doKeyPress(event) {
      var chars,
          chr,
          inst = $.datepicker._getInst(event.target);

      if ($.datepicker._get(inst, "constrainInput")) {
        chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
        chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
        return event.ctrlKey || event.metaKey || chr < " " || !chars || chars.indexOf(chr) > -1;
      }
    },

    /* Synchronise manual entry and field/alternate field. */
    _doKeyUp: function _doKeyUp(event) {
      var date,
          inst = $.datepicker._getInst(event.target);

      if (inst.input.val() !== inst.lastVal) {
        try {
          date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst));

          if (date) {
            // only if valid
            $.datepicker._setDateFromField(inst);

            $.datepicker._updateAlternate(inst);

            $.datepicker._updateDatepicker(inst);
          }
        } catch (err) {}
      }

      return true;
    },

    /* Pop-up the date picker for a given input field.
     * If false returned from beforeShow event handler do not show.
     * @param  input  element - the input field attached to the date picker or
     *					event - if triggered by focus
     */
    _showDatepicker: function _showDatepicker(input) {
      input = input.target || input;

      if (input.nodeName.toLowerCase() !== "input") {
        // find from button/image trigger
        input = $("input", input.parentNode)[0];
      }

      if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) {
        // already here
        return;
      }

      var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
      inst = $.datepicker._getInst(input);

      if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
        $.datepicker._curInst.dpDiv.stop(true, true);

        if (inst && $.datepicker._datepickerShowing) {
          $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
        }
      }

      beforeShow = $.datepicker._get(inst, "beforeShow");
      beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};

      if (beforeShowSettings === false) {
        return;
      }

      datepicker_extendRemove(inst.settings, beforeShowSettings);
      inst.lastVal = null;
      $.datepicker._lastInput = input;

      $.datepicker._setDateFromField(inst);

      if ($.datepicker._inDialog) {
        // hide cursor
        input.value = "";
      }

      if (!$.datepicker._pos) {
        // position below input
        $.datepicker._pos = $.datepicker._findPos(input);
        $.datepicker._pos[1] += input.offsetHeight; // add the height
      }

      isFixed = false;
      $(input).parents().each(function () {
        isFixed |= $(this).css("position") === "fixed";
        return !isFixed;
      });
      offset = {
        left: $.datepicker._pos[0],
        top: $.datepicker._pos[1]
      };
      $.datepicker._pos = null; //to avoid flashes on Firefox

      inst.dpDiv.empty(); // determine sizing offscreen

      inst.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      });

      $.datepicker._updateDatepicker(inst); // fix width for dynamic number of date pickers
      // and adjust position before showing


      offset = $.datepicker._checkOffset(inst, offset, isFixed);
      inst.dpDiv.css({
        position: $.datepicker._inDialog && $.blockUI ? "static" : isFixed ? "fixed" : "absolute",
        display: "none",
        left: offset.left + "px",
        top: offset.top + "px"
      });

      if (!inst.inline) {
        showAnim = $.datepicker._get(inst, "showAnim");
        duration = $.datepicker._get(inst, "duration");
        inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
        $.datepicker._datepickerShowing = true;

        if ($.effects && $.effects.effect[showAnim]) {
          inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
        } else {
          inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
        }

        if ($.datepicker._shouldFocusInput(inst)) {
          inst.input.trigger("focus");
        }

        $.datepicker._curInst = inst;
      }
    },

    /* Generate the date picker content. */
    _updateDatepicker: function _updateDatepicker(inst) {
      this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)

      datepicker_instActive = inst; // for delegate hover events

      inst.dpDiv.empty().append(this._generateHTML(inst));

      this._attachHandlers(inst);

      var origyearshtml,
          numMonths = this._getNumberOfMonths(inst),
          cols = numMonths[1],
          width = 17,
          activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");

      if (activeCell.length > 0) {
        datepicker_handleMouseover.apply(activeCell.get(0));
      }

      inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");

      if (cols > 1) {
        inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", width * cols + "em");
      }

      inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
      inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");

      if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) {
        inst.input.trigger("focus");
      } // Deffered render of the years select (to avoid flashes on Firefox)


      if (inst.yearshtml) {
        origyearshtml = inst.yearshtml;
        setTimeout(function () {
          //assure that inst.yearshtml didn't change.
          if (origyearshtml === inst.yearshtml && inst.yearshtml) {
            inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
          }

          origyearshtml = inst.yearshtml = null;
        }, 0);
      }
    },
    // #6694 - don't focus the input if it's already focused
    // this breaks the change event in IE
    // Support: IE and jQuery <1.9
    _shouldFocusInput: function _shouldFocusInput(inst) {
      return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
    },

    /* Check positioning to remain on screen. */
    _checkOffset: function _checkOffset(inst, offset, isFixed) {
      var dpWidth = inst.dpDiv.outerWidth(),
          dpHeight = inst.dpDiv.outerHeight(),
          inputWidth = inst.input ? inst.input.outerWidth() : 0,
          inputHeight = inst.input ? inst.input.outerHeight() : 0,
          viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
          viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
      offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
      offset.left -= isFixed && offset.left === inst.input.offset().left ? $(document).scrollLeft() : 0;
      offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0; // Now check if datepicker is showing outside window viewport - move to a better place if so.

      offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
      offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
      return offset;
    },

    /* Find an object's position on the screen. */
    _findPos: function _findPos(obj) {
      var position,
          inst = this._getInst(obj),
          isRTL = this._get(inst, "isRTL");

      while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
        obj = obj[isRTL ? "previousSibling" : "nextSibling"];
      }

      position = $(obj).offset();
      return [position.left, position.top];
    },

    /* Hide the date picker from view.
     * @param  input  element - the input field attached to the date picker
     */
    _hideDatepicker: function _hideDatepicker(input) {
      var showAnim,
          duration,
          postProcess,
          onClose,
          inst = this._curInst;

      if (!inst || input && inst !== $.data(input, "datepicker")) {
        return;
      }

      if (this._datepickerShowing) {
        showAnim = this._get(inst, "showAnim");
        duration = this._get(inst, "duration");

        postProcess = function postProcess() {
          $.datepicker._tidyDialog(inst);
        }; // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed


        if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
          inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
        } else {
          inst.dpDiv[showAnim === "slideDown" ? "slideUp" : showAnim === "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess);
        }

        if (!showAnim) {
          postProcess();
        }

        this._datepickerShowing = false;
        onClose = this._get(inst, "onClose");

        if (onClose) {
          onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : "", inst]);
        }

        this._lastInput = null;

        if (this._inDialog) {
          this._dialogInput.css({
            position: "absolute",
            left: "0",
            top: "-100px"
          });

          if ($.blockUI) {
            $.unblockUI();
            $("body").append(this.dpDiv);
          }
        }

        this._inDialog = false;
      }
    },

    /* Tidy up after a dialog display. */
    _tidyDialog: function _tidyDialog(inst) {
      inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },

    /* Close date picker if clicked elsewhere. */
    _checkExternalClick: function _checkExternalClick(event) {
      if (!$.datepicker._curInst) {
        return;
      }

      var $target = $(event.target),
          inst = $.datepicker._getInst($target[0]);

      if ($target[0].id !== $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length === 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) || $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst) {
        $.datepicker._hideDatepicker();
      }
    },

    /* Adjust one of the date sub-fields. */
    _adjustDate: function _adjustDate(id, offset, period) {
      var target = $(id),
          inst = this._getInst(target[0]);

      if (this._isDisabledDatepicker(target[0])) {
        return;
      }

      this._adjustInstDate(inst, offset + (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
      period);

      this._updateDatepicker(inst);
    },

    /* Action for current link. */
    _gotoToday: function _gotoToday(id) {
      var date,
          target = $(id),
          inst = this._getInst(target[0]);

      if (this._get(inst, "gotoCurrent") && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
      } else {
        date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
      }

      this._notifyChange(inst);

      this._adjustDate(target);
    },

    /* Action for selecting a new month/year. */
    _selectMonthYear: function _selectMonthYear(id, select, period) {
      var target = $(id),
          inst = this._getInst(target[0]);

      inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);

      this._notifyChange(inst);

      this._adjustDate(target);
    },

    /* Action for selecting a day. */
    _selectDay: function _selectDay(id, month, year, td) {
      var inst,
          target = $(id);

      if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
        return;
      }

      inst = this._getInst(target[0]);
      inst.selectedDay = inst.currentDay = $("a", td).html();
      inst.selectedMonth = inst.currentMonth = month;
      inst.selectedYear = inst.currentYear = year;

      this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
    },

    /* Erase the input field and hide the date picker. */
    _clearDate: function _clearDate(id) {
      var target = $(id);

      this._selectDate(target, "");
    },

    /* Update the input field with the selected date. */
    _selectDate: function _selectDate(id, dateStr) {
      var onSelect,
          target = $(id),
          inst = this._getInst(target[0]);

      dateStr = dateStr != null ? dateStr : this._formatDate(inst);

      if (inst.input) {
        inst.input.val(dateStr);
      }

      this._updateAlternate(inst);

      onSelect = this._get(inst, "onSelect");

      if (onSelect) {
        onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]); // trigger custom callback
      } else if (inst.input) {
        inst.input.trigger("change"); // fire the change event
      }

      if (inst.inline) {
        this._updateDatepicker(inst);
      } else {
        this._hideDatepicker();

        this._lastInput = inst.input[0];

        if (_typeof(inst.input[0]) !== "object") {
          inst.input.trigger("focus"); // restore focus
        }

        this._lastInput = null;
      }
    },

    /* Update any alternate field to synchronise with the main field. */
    _updateAlternate: function _updateAlternate(inst) {
      var altFormat,
          date,
          dateStr,
          altField = this._get(inst, "altField");

      if (altField) {
        // update alternate field too
        altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
        date = this._getDate(inst);
        dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
        $(altField).val(dateStr);
      }
    },

    /* Set as beforeShowDay function to prevent selection of weekends.
     * @param  date  Date - the date to customise
     * @return [boolean, string] - is this date selectable?, what is its CSS class?
     */
    noWeekends: function noWeekends(date) {
      var day = date.getDay();
      return [day > 0 && day < 6, ""];
    },

    /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
     * @param  date  Date - the date to get the week for
     * @return  number - the number of the week within the year that contains this date
     */
    iso8601Week: function iso8601Week(date) {
      var time,
          checkDate = new Date(date.getTime()); // Find Thursday of this week starting on Monday

      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      time = checkDate.getTime();
      checkDate.setMonth(0); // Compare with Jan 1

      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
    },

    /* Parse a string value into a date object.
     * See formatDate below for the possible formats.
     *
     * @param  format string - the expected format of the date
     * @param  value string - the date in the above format
     * @param  settings Object - attributes include:
     *					shortYearCutoff  number - the cutoff year for determining the century (optional)
     *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
     *					dayNames		string[7] - names of the days from Sunday (optional)
     *					monthNamesShort string[12] - abbreviated names of the months (optional)
     *					monthNames		string[12] - names of the months (optional)
     * @return  Date - the extracted date value or null if value is blank
     */
    parseDate: function parseDate(format, value, settings) {
      if (format == null || value == null) {
        throw "Invalid arguments";
      }

      value = _typeof(value) === "object" ? value.toString() : value + "";

      if (value === "") {
        return null;
      }

      var iFormat,
          dim,
          extra,
          iValue = 0,
          shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          shortYearCutoff = typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10),
          dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
          dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
          monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
          monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
          year = -1,
          month = -1,
          day = -1,
          doy = -1,
          literal = false,
          date,
          // Check whether a format character is doubled
      lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

        if (matches) {
          iFormat++;
        }

        return matches;
      },
          // Extract a number from the string value
      getNumber = function getNumber(match) {
        var isDoubled = lookAhead(match),
            size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2,
            minSize = match === "y" ? size : 1,
            digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
            num = value.substring(iValue).match(digits);

        if (!num) {
          throw "Missing number at position " + iValue;
        }

        iValue += num[0].length;
        return parseInt(num[0], 10);
      },
          // Extract a name from the string value and convert to an index
      getName = function getName(match, shortNames, longNames) {
        var index = -1,
            names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
          return [[k, v]];
        }).sort(function (a, b) {
          return -(a[1].length - b[1].length);
        });
        $.each(names, function (i, pair) {
          var name = pair[1];

          if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
            index = pair[0];
            iValue += name.length;
            return false;
          }
        });

        if (index !== -1) {
          return index + 1;
        } else {
          throw "Unknown name at position " + iValue;
        }
      },
          // Confirm that a literal character matches the string value
      checkLiteral = function checkLiteral() {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw "Unexpected literal at position " + iValue;
        }

        iValue++;
      };

      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              day = getNumber("d");
              break;

            case "D":
              getName("D", dayNamesShort, dayNames);
              break;

            case "o":
              doy = getNumber("o");
              break;

            case "m":
              month = getNumber("m");
              break;

            case "M":
              month = getName("M", monthNamesShort, monthNames);
              break;

            case "y":
              year = getNumber("y");
              break;

            case "@":
              date = new Date(getNumber("@"));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;

            case "!":
              date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;

            case "'":
              if (lookAhead("'")) {
                checkLiteral();
              } else {
                literal = true;
              }

              break;

            default:
              checkLiteral();
          }
        }
      }

      if (iValue < value.length) {
        extra = value.substr(iValue);

        if (!/^\s+/.test(extra)) {
          throw "Extra/unparsed characters found in date: " + extra;
        }
      }

      if (year === -1) {
        year = new Date().getFullYear();
      } else if (year < 100) {
        year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
      }

      if (doy > -1) {
        month = 1;
        day = doy;

        do {
          dim = this._getDaysInMonth(year, month - 1);

          if (day <= dim) {
            break;
          }

          month++;
          day -= dim;
        } while (true);
      }

      date = this._daylightSavingAdjust(new Date(year, month - 1, day));

      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        throw "Invalid date"; // E.g. 31/02/00
      }

      return date;
    },

    /* Standard date formats. */
    ATOM: "yy-mm-dd",
    // RFC 3339 (ISO 8601)
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    // RFC 822
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    // ISO 8601
    _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000,

    /* Format a date object into a string value.
     * The format can be combinations of the following:
     * d  - day of month (no leading zero)
     * dd - day of month (two digit)
     * o  - day of year (no leading zeros)
     * oo - day of year (three digit)
     * D  - day name short
     * DD - day name long
     * m  - month of year (no leading zero)
     * mm - month of year (two digit)
     * M  - month name short
     * MM - month name long
     * y  - year (two digit)
     * yy - year (four digit)
     * @ - Unix timestamp (ms since 01/01/1970)
     * ! - Windows ticks (100ns since 01/01/0001)
     * "..." - literal text
     * '' - single quote
     *
     * @param  format string - the desired format of the date
     * @param  date Date - the date value to format
     * @param  settings Object - attributes include:
     *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
     *					dayNames		string[7] - names of the days from Sunday (optional)
     *					monthNamesShort string[12] - abbreviated names of the months (optional)
     *					monthNames		string[12] - names of the months (optional)
     * @return  string - the date in the above format
     */
    formatDate: function formatDate(format, date, settings) {
      if (!date) {
        return "";
      }

      var iFormat,
          dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
          dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
          monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
          monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
          // Check whether a format character is doubled
      lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

        if (matches) {
          iFormat++;
        }

        return matches;
      },
          // Format a number, with leading zero if necessary
      formatNumber = function formatNumber(match, value, len) {
        var num = "" + value;

        if (lookAhead(match)) {
          while (num.length < len) {
            num = "0" + num;
          }
        }

        return num;
      },
          // Format a name, short or long as requested
      formatName = function formatName(match, value, shortNames, longNames) {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      },
          output = "",
          literal = false;

      if (date) {
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
              literal = false;
            } else {
              output += format.charAt(iFormat);
            }
          } else {
            switch (format.charAt(iFormat)) {
              case "d":
                output += formatNumber("d", date.getDate(), 2);
                break;

              case "D":
                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                break;

              case "o":
                output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                break;

              case "m":
                output += formatNumber("m", date.getMonth() + 1, 2);
                break;

              case "M":
                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                break;

              case "y":
                output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                break;

              case "@":
                output += date.getTime();
                break;

              case "!":
                output += date.getTime() * 10000 + this._ticksTo1970;
                break;

              case "'":
                if (lookAhead("'")) {
                  output += "'";
                } else {
                  literal = true;
                }

                break;

              default:
                output += format.charAt(iFormat);
            }
          }
        }
      }

      return output;
    },

    /* Extract all possible characters from the date format. */
    _possibleChars: function _possibleChars(format) {
      var iFormat,
          chars = "",
          literal = false,
          // Check whether a format character is doubled
      lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

        if (matches) {
          iFormat++;
        }

        return matches;
      };

      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            chars += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
            case "m":
            case "y":
            case "@":
              chars += "0123456789";
              break;

            case "D":
            case "M":
              return null;
            // Accept anything

            case "'":
              if (lookAhead("'")) {
                chars += "'";
              } else {
                literal = true;
              }

              break;

            default:
              chars += format.charAt(iFormat);
          }
        }
      }

      return chars;
    },

    /* Get a setting value, defaulting if necessary. */
    _get: function _get(inst, name) {
      return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
    },

    /* Parse existing date and initialise date picker. */
    _setDateFromField: function _setDateFromField(inst, noDefault) {
      if (inst.input.val() === inst.lastVal) {
        return;
      }

      var dateFormat = this._get(inst, "dateFormat"),
          dates = inst.lastVal = inst.input ? inst.input.val() : null,
          defaultDate = this._getDefaultDate(inst),
          date = defaultDate,
          settings = this._getFormatConfig(inst);

      try {
        date = this.parseDate(dateFormat, dates, settings) || defaultDate;
      } catch (event) {
        dates = noDefault ? "" : dates;
      }

      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      inst.currentDay = dates ? date.getDate() : 0;
      inst.currentMonth = dates ? date.getMonth() : 0;
      inst.currentYear = dates ? date.getFullYear() : 0;

      this._adjustInstDate(inst);
    },

    /* Retrieve the default date shown on opening. */
    _getDefaultDate: function _getDefaultDate(inst) {
      return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
    },

    /* A date may be specified as an exact value or a relative one. */
    _determineDate: function _determineDate(inst, date, defaultDate) {
      var offsetNumeric = function offsetNumeric(offset) {
        var date = new Date();
        date.setDate(date.getDate() + offset);
        return date;
      },
          offsetString = function offsetString(offset) {
        try {
          return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
        } catch (e) {// Ignore
        }

        var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            matches = pattern.exec(offset);

        while (matches) {
          switch (matches[2] || "d") {
            case "d":
            case "D":
              day += parseInt(matches[1], 10);
              break;

            case "w":
            case "W":
              day += parseInt(matches[1], 10) * 7;
              break;

            case "m":
            case "M":
              month += parseInt(matches[1], 10);
              day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
              break;

            case "y":
            case "Y":
              year += parseInt(matches[1], 10);
              day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
              break;
          }

          matches = pattern.exec(offset);
        }

        return new Date(year, month, day);
      },
          newDate = date == null || date === "" ? defaultDate : typeof date === "string" ? offsetString(date) : typeof date === "number" ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());

      newDate = newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate;

      if (newDate) {
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
      }

      return this._daylightSavingAdjust(newDate);
    },

    /* Handle switch to/from daylight saving.
     * Hours may be non-zero on daylight saving cut-over:
     * > 12 when midnight changeover, but then cannot generate
     * midnight datetime, so jump to 1AM, otherwise reset.
     * @param  date  (Date) the date to check
     * @return  (Date) the corrected date
     */
    _daylightSavingAdjust: function _daylightSavingAdjust(date) {
      if (!date) {
        return null;
      }

      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    },

    /* Set the date(s) directly. */
    _setDate: function _setDate(inst, date, noChange) {
      var clear = !date,
          origMonth = inst.selectedMonth,
          origYear = inst.selectedYear,
          newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

      inst.selectedDay = inst.currentDay = newDate.getDate();
      inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
      inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();

      if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
        this._notifyChange(inst);
      }

      this._adjustInstDate(inst);

      if (inst.input) {
        inst.input.val(clear ? "" : this._formatDate(inst));
      }
    },

    /* Retrieve the date(s) directly. */
    _getDate: function _getDate(inst) {
      var startDate = !inst.currentYear || inst.input && inst.input.val() === "" ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
      return startDate;
    },

    /* Attach the onxxx handlers.  These are declared statically so
     * they work with static code transformers like Caja.
     */
    _attachHandlers: function _attachHandlers(inst) {
      var stepMonths = this._get(inst, "stepMonths"),
          id = "#" + inst.id.replace(/\\\\/g, "\\");

      inst.dpDiv.find("[data-handler]").map(function () {
        var handler = {
          prev: function prev() {
            $.datepicker._adjustDate(id, -stepMonths, "M");
          },
          next: function next() {
            $.datepicker._adjustDate(id, +stepMonths, "M");
          },
          hide: function hide() {
            $.datepicker._hideDatepicker();
          },
          today: function today() {
            $.datepicker._gotoToday(id);
          },
          selectDay: function selectDay() {
            $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);

            return false;
          },
          selectMonth: function selectMonth() {
            $.datepicker._selectMonthYear(id, this, "M");

            return false;
          },
          selectYear: function selectYear() {
            $.datepicker._selectMonthYear(id, this, "Y");

            return false;
          }
        };
        $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
      });
    },

    /* Generate the HTML for the current state of the date picker. */
    _generateHTML: function _generateHTML(inst) {
      var maxDraw,
          prevText,
          prev,
          nextText,
          next,
          currentText,
          gotoDate,
          controls,
          buttonPanel,
          firstDay,
          showWeek,
          dayNames,
          dayNamesMin,
          monthNames,
          monthNamesShort,
          beforeShowDay,
          showOtherMonths,
          selectOtherMonths,
          defaultDate,
          html,
          dow,
          row,
          group,
          col,
          selectedDate,
          cornerClass,
          calender,
          thead,
          day,
          daysInMonth,
          leadDays,
          curRows,
          numRows,
          printDate,
          dRow,
          tbody,
          daySettings,
          otherMonth,
          unselectable,
          tempDate = new Date(),
          today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())),
          // clear time
      isRTL = this._get(inst, "isRTL"),
          showButtonPanel = this._get(inst, "showButtonPanel"),
          hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
          navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
          numMonths = this._getNumberOfMonths(inst),
          showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
          stepMonths = this._get(inst, "stepMonths"),
          isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1,
          currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)),
          minDate = this._getMinMaxDate(inst, "min"),
          maxDate = this._getMinMaxDate(inst, "max"),
          drawMonth = inst.drawMonth - showCurrentAtPos,
          drawYear = inst.drawYear;

      if (drawMonth < 0) {
        drawMonth += 12;
        drawYear--;
      }

      if (maxDate) {
        maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));
        maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;

        while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
          drawMonth--;

          if (drawMonth < 0) {
            drawMonth = 11;
            drawYear--;
          }
        }
      }

      inst.drawMonth = drawMonth;
      inst.drawYear = drawYear;
      prevText = this._get(inst, "prevText");
      prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));
      prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" + " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>";
      nextText = this._get(inst, "nextText");
      nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));
      next = this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" + " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>";
      currentText = this._get(inst, "currentText");
      gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
      currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
      controls = !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>" : "";
      buttonPanel = showButtonPanel ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" + ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
      firstDay = parseInt(this._get(inst, "firstDay"), 10);
      firstDay = isNaN(firstDay) ? 0 : firstDay;
      showWeek = this._get(inst, "showWeek");
      dayNames = this._get(inst, "dayNames");
      dayNamesMin = this._get(inst, "dayNamesMin");
      monthNames = this._get(inst, "monthNames");
      monthNamesShort = this._get(inst, "monthNamesShort");
      beforeShowDay = this._get(inst, "beforeShowDay");
      showOtherMonths = this._get(inst, "showOtherMonths");
      selectOtherMonths = this._get(inst, "selectOtherMonths");
      defaultDate = this._getDefaultDate(inst);
      html = "";

      for (row = 0; row < numMonths[0]; row++) {
        group = "";
        this.maxRows = 4;

        for (col = 0; col < numMonths[1]; col++) {
          selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
          cornerClass = " ui-corner-all";
          calender = "";

          if (isMultiMonth) {
            calender += "<div class='ui-datepicker-group";

            if (numMonths[1] > 1) {
              switch (col) {
                case 0:
                  calender += " ui-datepicker-group-first";
                  cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                  break;

                case numMonths[1] - 1:
                  calender += " ui-datepicker-group-last";
                  cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                  break;

                default:
                  calender += " ui-datepicker-group-middle";
                  cornerClass = "";
                  break;
              }
            }

            calender += "'>";
          }

          calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && row === 0 ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && row === 0 ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
          "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>";
          thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "";

          for (dow = 0; dow < 7; dow++) {
            // days of the week
            day = (dow + firstDay) % 7;
            thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
          }

          calender += thead + "</tr></thead><tbody>";
          daysInMonth = this._getDaysInMonth(drawYear, drawMonth);

          if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
            inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
          }

          leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
          curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate

          numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows; //If multiple months, use the higher number of rows (see #7043)

          this.maxRows = numRows;
          printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));

          for (dRow = 0; dRow < numRows; dRow++) {
            // create date picker rows
            calender += "<tr>";
            tbody = !showWeek ? "" : "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>";

            for (dow = 0; dow < 7; dow++) {
              // create date picker days
              daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [true, ""];
              otherMonth = printDate.getMonth() !== drawMonth;
              unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
              tbody += "<td class='" + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + ( // highlight weekends
              otherMonth ? " ui-datepicker-other-month" : "") + ( // highlight days from other months
              printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || // user pressed key
              defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? // or defaultDate is current printedDate and defaultDate is selectedDate
              " " + this._dayOverClass : "") + ( // highlight selected day
              unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + ( // highlight unselectable days
              otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + ( // highlight custom dates
              printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + ( // highlight selected day
              printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + ( // highlight today (if different)
              (!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + ( // cell title
              unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + ( // actions
              otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
              unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + ( // highlight selected day
              otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
              "' href='#'>" + printDate.getDate() + "</a>") + "</td>"; // display selectable date

              printDate.setDate(printDate.getDate() + 1);
              printDate = this._daylightSavingAdjust(printDate);
            }

            calender += tbody + "</tr>";
          }

          drawMonth++;

          if (drawMonth > 11) {
            drawMonth = 0;
            drawYear++;
          }

          calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (numMonths[0] > 0 && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
          group += calender;
        }

        html += group;
      }

      html += buttonPanel;
      inst._keyEvent = false;
      return html;
    },

    /* Generate the month and year header. */
    _generateMonthYearHeader: function _generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
      var inMinYear,
          inMaxYear,
          month,
          years,
          thisYear,
          determineYear,
          year,
          endYear,
          changeMonth = this._get(inst, "changeMonth"),
          changeYear = this._get(inst, "changeYear"),
          showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
          html = "<div class='ui-datepicker-title'>",
          monthHtml = ""; // Month selection


      if (secondary || !changeMonth) {
        monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
      } else {
        inMinYear = minDate && minDate.getFullYear() === drawYear;
        inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
        monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";

        for (month = 0; month < 12; month++) {
          if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
            monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
          }
        }

        monthHtml += "</select>";
      }

      if (!showMonthAfterYear) {
        html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
      } // Year selection


      if (!inst.yearshtml) {
        inst.yearshtml = "";

        if (secondary || !changeYear) {
          html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
        } else {
          // determine range of years to display
          years = this._get(inst, "yearRange").split(":");
          thisYear = new Date().getFullYear();

          determineYear = function determineYear(value) {
            var year = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
            return isNaN(year) ? thisYear : year;
          };

          year = determineYear(years[0]);
          endYear = Math.max(year, determineYear(years[1] || ""));
          year = minDate ? Math.max(year, minDate.getFullYear()) : year;
          endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
          inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";

          for (; year <= endYear; year++) {
            inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
          }

          inst.yearshtml += "</select>";
          html += inst.yearshtml;
          inst.yearshtml = null;
        }
      }

      html += this._get(inst, "yearSuffix");

      if (showMonthAfterYear) {
        html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
      }

      html += "</div>"; // Close datepicker_header

      return html;
    },

    /* Adjust one of the date sub-fields. */
    _adjustInstDate: function _adjustInstDate(inst, offset, period) {
      var year = inst.selectedYear + (period === "Y" ? offset : 0),
          month = inst.selectedMonth + (period === "M" ? offset : 0),
          day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
          date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();

      if (period === "M" || period === "Y") {
        this._notifyChange(inst);
      }
    },

    /* Ensure a date is within any min/max bounds. */
    _restrictMinMax: function _restrictMinMax(inst, date) {
      var minDate = this._getMinMaxDate(inst, "min"),
          maxDate = this._getMinMaxDate(inst, "max"),
          newDate = minDate && date < minDate ? minDate : date;

      return maxDate && newDate > maxDate ? maxDate : newDate;
    },

    /* Notify change of month/year. */
    _notifyChange: function _notifyChange(inst) {
      var onChange = this._get(inst, "onChangeMonthYear");

      if (onChange) {
        onChange.apply(inst.input ? inst.input[0] : null, [inst.selectedYear, inst.selectedMonth + 1, inst]);
      }
    },

    /* Determine the number of months to show. */
    _getNumberOfMonths: function _getNumberOfMonths(inst) {
      var numMonths = this._get(inst, "numberOfMonths");

      return numMonths == null ? [1, 1] : typeof numMonths === "number" ? [1, numMonths] : numMonths;
    },

    /* Determine the current maximum date - ensure no time components are set. */
    _getMinMaxDate: function _getMinMaxDate(inst, minMax) {
      return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
    },

    /* Find the number of days in a given month. */
    _getDaysInMonth: function _getDaysInMonth(year, month) {
      return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
    },

    /* Find the day of the week of the first of a month. */
    _getFirstDayOfMonth: function _getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    },

    /* Determines if we should allow a "next/prev" month display change. */
    _canAdjustMonth: function _canAdjustMonth(inst, offset, curYear, curMonth) {
      var numMonths = this._getNumberOfMonths(inst),
          date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

      if (offset < 0) {
        date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
      }

      return this._isInRange(inst, date);
    },

    /* Is the given date in the accepted range? */
    _isInRange: function _isInRange(inst, date) {
      var yearSplit,
          currentYear,
          minDate = this._getMinMaxDate(inst, "min"),
          maxDate = this._getMinMaxDate(inst, "max"),
          minYear = null,
          maxYear = null,
          years = this._get(inst, "yearRange");

      if (years) {
        yearSplit = years.split(":");
        currentYear = new Date().getFullYear();
        minYear = parseInt(yearSplit[0], 10);
        maxYear = parseInt(yearSplit[1], 10);

        if (yearSplit[0].match(/[+\-].*/)) {
          minYear += currentYear;
        }

        if (yearSplit[1].match(/[+\-].*/)) {
          maxYear += currentYear;
        }
      }

      return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
    },

    /* Provide the configuration settings for formatting/parsing. */
    _getFormatConfig: function _getFormatConfig(inst) {
      var shortYearCutoff = this._get(inst, "shortYearCutoff");

      shortYearCutoff = typeof shortYearCutoff !== "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
      return {
        shortYearCutoff: shortYearCutoff,
        dayNamesShort: this._get(inst, "dayNamesShort"),
        dayNames: this._get(inst, "dayNames"),
        monthNamesShort: this._get(inst, "monthNamesShort"),
        monthNames: this._get(inst, "monthNames")
      };
    },

    /* Format the given date for display. */
    _formatDate: function _formatDate(inst, day, month, year) {
      if (!day) {
        inst.currentDay = inst.selectedDay;
        inst.currentMonth = inst.selectedMonth;
        inst.currentYear = inst.selectedYear;
      }

      var date = day ? _typeof(day) === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
      return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
    }
  });
  /*
   * Bind hover events for datepicker elements.
   * Done via delegate so the binding only occurs once in the lifetime of the parent div.
   * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
   */

  function datepicker_bindHover(dpDiv) {
    var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return dpDiv.on("mouseout", selector, function () {
      $(this).removeClass("ui-state-hover");

      if (this.className.indexOf("ui-datepicker-prev") !== -1) {
        $(this).removeClass("ui-datepicker-prev-hover");
      }

      if (this.className.indexOf("ui-datepicker-next") !== -1) {
        $(this).removeClass("ui-datepicker-next-hover");
      }
    }).on("mouseover", selector, datepicker_handleMouseover);
  }

  function datepicker_handleMouseover() {
    if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
      $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
      $(this).addClass("ui-state-hover");

      if (this.className.indexOf("ui-datepicker-prev") !== -1) {
        $(this).addClass("ui-datepicker-prev-hover");
      }

      if (this.className.indexOf("ui-datepicker-next") !== -1) {
        $(this).addClass("ui-datepicker-next-hover");
      }
    }
  }
  /* jQuery extend now ignores nulls! */


  function datepicker_extendRemove(target, props) {
    $.extend(target, props);

    for (var name in props) {
      if (props[name] == null) {
        target[name] = props[name];
      }
    }

    return target;
  }
  /* Invoke the datepicker functionality.
     @param  options  string - a command, optionally followed by additional parameters or
  					Object - settings for attaching new datepicker functionality
     @return  jQuery object */


  $.fn.datepicker = function (options) {
    /* Verify an empty collection wasn't passed - Fixes #6976 */
    if (!this.length) {
      return this;
    }
    /* Initialise the date picker. */


    if (!$.datepicker.initialized) {
      $(document).on("mousedown", $.datepicker._checkExternalClick);
      $.datepicker.initialized = true;
    }
    /* Append datepicker main container to body if not exist. */


    if ($("#" + $.datepicker._mainDivId).length === 0) {
      $("body").append($.datepicker.dpDiv);
    }

    var otherArgs = Array.prototype.slice.call(arguments, 1);

    if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
      return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
    }

    if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
      return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
    }

    return this.each(function () {
      typeof options === "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
    });
  };

  $.datepicker = new Datepicker(); // singleton instance

  $.datepicker.initialized = false;
  $.datepicker.uuid = new Date().getTime();
  $.datepicker.version = "1.12.1";
  return $.datepicker;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/dialog.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/dialog.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./button */ "./node_modules/jquery-ui/ui/widgets/button.js"), __webpack_require__(/*! ./draggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js"), __webpack_require__(/*! ./mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js"), __webpack_require__(/*! ./resizable */ "./node_modules/jquery-ui/ui/widgets/resizable.js"), __webpack_require__(/*! ../focusable */ "./node_modules/jquery-ui/ui/focusable.js"), __webpack_require__(/*! ../keycode */ "./node_modules/jquery-ui/ui/keycode.js"), __webpack_require__(/*! ../position */ "./node_modules/jquery-ui/ui/position.js"), __webpack_require__(/*! ../safe-active-element */ "./node_modules/jquery-ui/ui/safe-active-element.js"), __webpack_require__(/*! ../safe-blur */ "./node_modules/jquery-ui/ui/safe-blur.js"), __webpack_require__(/*! ../tabbable */ "./node_modules/jquery-ui/ui/tabbable.js"), __webpack_require__(/*! ../unique-id */ "./node_modules/jquery-ui/ui/unique-id.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: true,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: true,
      closeText: "Close",
      draggable: true,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: false,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        // Ensure the titlebar is always visible
        using: function using(pos) {
          var topOffset = $(this).css(pos).offset().top;

          if (topOffset < 0) {
            $(this).css("top", pos.top - topOffset);
          }
        }
      },
      resizable: true,
      show: null,
      title: null,
      width: 300,
      // Callbacks
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: true,
      height: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      width: true
    },
    resizableRelatedOptions: {
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true
    },
    _create: function _create() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      };
      this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      };
      this.originalTitle = this.element.attr("title");

      if (this.options.title == null && this.originalTitle != null) {
        this.options.title = this.originalTitle;
      } // Dialogs can't be disabled


      if (this.options.disabled) {
        this.options.disabled = false;
      }

      this._createWrapper();

      this.element.show().removeAttr("title").appendTo(this.uiDialog);

      this._addClass("ui-dialog-content", "ui-widget-content");

      this._createTitlebar();

      this._createButtonPane();

      if (this.options.draggable && $.fn.draggable) {
        this._makeDraggable();
      }

      if (this.options.resizable && $.fn.resizable) {
        this._makeResizable();
      }

      this._isOpen = false;

      this._trackFocus();
    },
    _init: function _init() {
      if (this.options.autoOpen) {
        this.open();
      }
    },
    _appendTo: function _appendTo() {
      var element = this.options.appendTo;

      if (element && (element.jquery || element.nodeType)) {
        return $(element);
      }

      return this.document.find(element || "body").eq(0);
    },
    _destroy: function _destroy() {
      var next,
          originalPosition = this.originalPosition;

      this._untrackInstance();

      this._destroyOverlay();

      this.element.removeUniqueId().css(this.originalCss) // Without detaching first, the following becomes really slow
      .detach();
      this.uiDialog.remove();

      if (this.originalTitle) {
        this.element.attr("title", this.originalTitle);
      }

      next = originalPosition.parent.children().eq(originalPosition.index); // Don't try to place the dialog next to itself (#8613)

      if (next.length && next[0] !== this.element[0]) {
        next.before(this.element);
      } else {
        originalPosition.parent.append(this.element);
      }
    },
    widget: function widget() {
      return this.uiDialog;
    },
    disable: $.noop,
    enable: $.noop,
    close: function close(event) {
      var that = this;

      if (!this._isOpen || this._trigger("beforeClose", event) === false) {
        return;
      }

      this._isOpen = false;
      this._focusedElement = null;

      this._destroyOverlay();

      this._untrackInstance();

      if (!this.opener.filter(":focusable").trigger("focus").length) {
        // Hiding a focused element doesn't trigger blur in WebKit
        // so in case we have nothing to focus on, explicitly blur the active element
        // https://bugs.webkit.org/show_bug.cgi?id=47182
        $.ui.safeBlur($.ui.safeActiveElement(this.document[0]));
      }

      this._hide(this.uiDialog, this.options.hide, function () {
        that._trigger("close", event);
      });
    },
    isOpen: function isOpen() {
      return this._isOpen;
    },
    moveToTop: function moveToTop() {
      this._moveToTop();
    },
    _moveToTop: function _moveToTop(event, silent) {
      var moved = false,
          zIndices = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +$(this).css("z-index");
      }).get(),
          zIndexMax = Math.max.apply(null, zIndices);

      if (zIndexMax >= +this.uiDialog.css("z-index")) {
        this.uiDialog.css("z-index", zIndexMax + 1);
        moved = true;
      }

      if (moved && !silent) {
        this._trigger("focus", event);
      }

      return moved;
    },
    open: function open() {
      var that = this;

      if (this._isOpen) {
        if (this._moveToTop()) {
          this._focusTabbable();
        }

        return;
      }

      this._isOpen = true;
      this.opener = $($.ui.safeActiveElement(this.document[0]));

      this._size();

      this._position();

      this._createOverlay();

      this._moveToTop(null, true); // Ensure the overlay is moved to the top with the dialog, but only when
      // opening. The overlay shouldn't move after the dialog is open so that
      // modeless dialogs opened after the modal dialog stack properly.


      if (this.overlay) {
        this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
      }

      this._show(this.uiDialog, this.options.show, function () {
        that._focusTabbable();

        that._trigger("focus");
      }); // Track the dialog immediately upon openening in case a focus event
      // somehow occurs outside of the dialog before an element inside the
      // dialog is focused (#10152)


      this._makeFocusTarget();

      this._trigger("open");
    },
    _focusTabbable: function _focusTabbable() {
      // Set focus to the first match:
      // 1. An element that was focused previously
      // 2. First element inside the dialog matching [autofocus]
      // 3. Tabbable element inside the content element
      // 4. Tabbable element inside the buttonpane
      // 5. The close button
      // 6. The dialog itself
      var hasFocus = this._focusedElement;

      if (!hasFocus) {
        hasFocus = this.element.find("[autofocus]");
      }

      if (!hasFocus.length) {
        hasFocus = this.element.find(":tabbable");
      }

      if (!hasFocus.length) {
        hasFocus = this.uiDialogButtonPane.find(":tabbable");
      }

      if (!hasFocus.length) {
        hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
      }

      if (!hasFocus.length) {
        hasFocus = this.uiDialog;
      }

      hasFocus.eq(0).trigger("focus");
    },
    _keepFocus: function _keepFocus(event) {
      function checkFocus() {
        var activeElement = $.ui.safeActiveElement(this.document[0]),
            isActive = this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement);

        if (!isActive) {
          this._focusTabbable();
        }
      }

      event.preventDefault();
      checkFocus.call(this); // support: IE
      // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
      // so we check again later

      this._delay(checkFocus);
    },
    _createWrapper: function _createWrapper() {
      this.uiDialog = $("<div>").hide().attr({
        // Setting tabIndex makes the div focusable
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo());

      this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");

      this._on(this.uiDialog, {
        keydown: function keydown(event) {
          if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) {
            event.preventDefault();
            this.close(event);
            return;
          } // Prevent tabbing out of dialogs


          if (event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented()) {
            return;
          }

          var tabbables = this.uiDialog.find(":tabbable"),
              first = tabbables.filter(":first"),
              last = tabbables.filter(":last");

          if ((event.target === last[0] || event.target === this.uiDialog[0]) && !event.shiftKey) {
            this._delay(function () {
              first.trigger("focus");
            });

            event.preventDefault();
          } else if ((event.target === first[0] || event.target === this.uiDialog[0]) && event.shiftKey) {
            this._delay(function () {
              last.trigger("focus");
            });

            event.preventDefault();
          }
        },
        mousedown: function mousedown(event) {
          if (this._moveToTop(event)) {
            this._focusTabbable();
          }
        }
      }); // We assume that any existing aria-describedby attribute means
      // that the dialog content is marked up properly
      // otherwise we brute force the content as the description


      if (!this.element.find("[aria-describedby]").length) {
        this.uiDialog.attr({
          "aria-describedby": this.element.uniqueId().attr("id")
        });
      }
    },
    _createTitlebar: function _createTitlebar() {
      var uiDialogTitle;
      this.uiDialogTitlebar = $("<div>");

      this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");

      this._on(this.uiDialogTitlebar, {
        mousedown: function mousedown(event) {
          // Don't prevent click on close button (#8838)
          // Focusing a dialog that is partially scrolled out of view
          // causes the browser to scroll it into view, preventing the click event
          if (!$(event.target).closest(".ui-dialog-titlebar-close")) {
            // Dialog isn't getting focus when dragging (#8063)
            this.uiDialog.trigger("focus");
          }
        }
      }); // Support: IE
      // Use type="button" to prevent enter keypresses in textboxes from closing the
      // dialog in IE (#9312)


      this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
        label: $("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: false
      }).appendTo(this.uiDialogTitlebar);

      this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");

      this._on(this.uiDialogTitlebarClose, {
        click: function click(event) {
          event.preventDefault();
          this.close(event);
        }
      });

      uiDialogTitle = $("<span>").uniqueId().prependTo(this.uiDialogTitlebar);

      this._addClass(uiDialogTitle, "ui-dialog-title");

      this._title(uiDialogTitle);

      this.uiDialogTitlebar.prependTo(this.uiDialog);
      this.uiDialog.attr({
        "aria-labelledby": uiDialogTitle.attr("id")
      });
    },
    _title: function _title(title) {
      if (this.options.title) {
        title.text(this.options.title);
      } else {
        title.html("&#160;");
      }
    },
    _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = $("<div>");

      this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");

      this.uiButtonSet = $("<div>").appendTo(this.uiDialogButtonPane);

      this._addClass(this.uiButtonSet, "ui-dialog-buttonset");

      this._createButtons();
    },
    _createButtons: function _createButtons() {
      var that = this,
          buttons = this.options.buttons; // If we already have a button pane, remove it

      this.uiDialogButtonPane.remove();
      this.uiButtonSet.empty();

      if ($.isEmptyObject(buttons) || $.isArray(buttons) && !buttons.length) {
        this._removeClass(this.uiDialog, "ui-dialog-buttons");

        return;
      }

      $.each(buttons, function (name, props) {
        var click, buttonOptions;
        props = $.isFunction(props) ? {
          click: props,
          text: name
        } : props; // Default to a non-submitting button

        props = $.extend({
          type: "button"
        }, props); // Change the context for the click callback to be the main element

        click = props.click;
        buttonOptions = {
          icon: props.icon,
          iconPosition: props.iconPosition,
          showLabel: props.showLabel,
          // Deprecated options
          icons: props.icons,
          text: props.text
        };
        delete props.click;
        delete props.icon;
        delete props.iconPosition;
        delete props.showLabel; // Deprecated options

        delete props.icons;

        if (typeof props.text === "boolean") {
          delete props.text;
        }

        $("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet).on("click", function () {
          click.apply(that.element[0], arguments);
        });
      });

      this._addClass(this.uiDialog, "ui-dialog-buttons");

      this.uiDialogButtonPane.appendTo(this.uiDialog);
    },
    _makeDraggable: function _makeDraggable() {
      var that = this,
          options = this.options;

      function filteredUi(ui) {
        return {
          position: ui.position,
          offset: ui.offset
        };
      }

      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function start(event, ui) {
          that._addClass($(this), "ui-dialog-dragging");

          that._blockFrames();

          that._trigger("dragStart", event, filteredUi(ui));
        },
        drag: function drag(event, ui) {
          that._trigger("drag", event, filteredUi(ui));
        },
        stop: function stop(event, ui) {
          var left = ui.offset.left - that.document.scrollLeft(),
              top = ui.offset.top - that.document.scrollTop();
          options.position = {
            my: "left top",
            at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top,
            of: that.window
          };

          that._removeClass($(this), "ui-dialog-dragging");

          that._unblockFrames();

          that._trigger("dragStop", event, filteredUi(ui));
        }
      });
    },
    _makeResizable: function _makeResizable() {
      var that = this,
          options = this.options,
          handles = options.resizable,
          // .ui-resizable has position: relative defined in the stylesheet
      // but dialogs have to use absolute or fixed positioning
      position = this.uiDialog.css("position"),
          resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw";

      function filteredUi(ui) {
        return {
          originalPosition: ui.originalPosition,
          originalSize: ui.originalSize,
          position: ui.position,
          size: ui.size
        };
      }

      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: options.maxWidth,
        maxHeight: options.maxHeight,
        minWidth: options.minWidth,
        minHeight: this._minHeight(),
        handles: resizeHandles,
        start: function start(event, ui) {
          that._addClass($(this), "ui-dialog-resizing");

          that._blockFrames();

          that._trigger("resizeStart", event, filteredUi(ui));
        },
        resize: function resize(event, ui) {
          that._trigger("resize", event, filteredUi(ui));
        },
        stop: function stop(event, ui) {
          var offset = that.uiDialog.offset(),
              left = offset.left - that.document.scrollLeft(),
              top = offset.top - that.document.scrollTop();
          options.height = that.uiDialog.height();
          options.width = that.uiDialog.width();
          options.position = {
            my: "left top",
            at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top,
            of: that.window
          };

          that._removeClass($(this), "ui-dialog-resizing");

          that._unblockFrames();

          that._trigger("resizeStop", event, filteredUi(ui));
        }
      }).css("position", position);
    },
    _trackFocus: function _trackFocus() {
      this._on(this.widget(), {
        focusin: function focusin(event) {
          this._makeFocusTarget();

          this._focusedElement = $(event.target);
        }
      });
    },
    _makeFocusTarget: function _makeFocusTarget() {
      this._untrackInstance();

      this._trackingInstances().unshift(this);
    },
    _untrackInstance: function _untrackInstance() {
      var instances = this._trackingInstances(),
          exists = $.inArray(this, instances);

      if (exists !== -1) {
        instances.splice(exists, 1);
      }
    },
    _trackingInstances: function _trackingInstances() {
      var instances = this.document.data("ui-dialog-instances");

      if (!instances) {
        instances = [];
        this.document.data("ui-dialog-instances", instances);
      }

      return instances;
    },
    _minHeight: function _minHeight() {
      var options = this.options;
      return options.height === "auto" ? options.minHeight : Math.min(options.minHeight, options.height);
    },
    _position: function _position() {
      // Need to show the dialog to get the actual offset in the position plugin
      var isVisible = this.uiDialog.is(":visible");

      if (!isVisible) {
        this.uiDialog.show();
      }

      this.uiDialog.position(this.options.position);

      if (!isVisible) {
        this.uiDialog.hide();
      }
    },
    _setOptions: function _setOptions(options) {
      var that = this,
          resize = false,
          resizableOptions = {};
      $.each(options, function (key, value) {
        that._setOption(key, value);

        if (key in that.sizeRelatedOptions) {
          resize = true;
        }

        if (key in that.resizableRelatedOptions) {
          resizableOptions[key] = value;
        }
      });

      if (resize) {
        this._size();

        this._position();
      }

      if (this.uiDialog.is(":data(ui-resizable)")) {
        this.uiDialog.resizable("option", resizableOptions);
      }
    },
    _setOption: function _setOption(key, value) {
      var isDraggable,
          isResizable,
          uiDialog = this.uiDialog;

      if (key === "disabled") {
        return;
      }

      this._super(key, value);

      if (key === "appendTo") {
        this.uiDialog.appendTo(this._appendTo());
      }

      if (key === "buttons") {
        this._createButtons();
      }

      if (key === "closeText") {
        this.uiDialogTitlebarClose.button({
          // Ensure that we always pass a string
          label: $("<a>").text("" + this.options.closeText).html()
        });
      }

      if (key === "draggable") {
        isDraggable = uiDialog.is(":data(ui-draggable)");

        if (isDraggable && !value) {
          uiDialog.draggable("destroy");
        }

        if (!isDraggable && value) {
          this._makeDraggable();
        }
      }

      if (key === "position") {
        this._position();
      }

      if (key === "resizable") {
        // currently resizable, becoming non-resizable
        isResizable = uiDialog.is(":data(ui-resizable)");

        if (isResizable && !value) {
          uiDialog.resizable("destroy");
        } // Currently resizable, changing handles


        if (isResizable && typeof value === "string") {
          uiDialog.resizable("option", "handles", value);
        } // Currently non-resizable, becoming resizable


        if (!isResizable && value !== false) {
          this._makeResizable();
        }
      }

      if (key === "title") {
        this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
      }
    },
    _size: function _size() {
      // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
      // divs will both have width and height set, so we need to reset them
      var nonContentHeight,
          minContentHeight,
          maxContentHeight,
          options = this.options; // Reset content sizing

      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      });

      if (options.minWidth > options.width) {
        options.width = options.minWidth;
      } // Reset wrapper sizing
      // determine the height of all the non-content elements


      nonContentHeight = this.uiDialog.css({
        height: "auto",
        width: options.width
      }).outerHeight();
      minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
      maxContentHeight = typeof options.maxHeight === "number" ? Math.max(0, options.maxHeight - nonContentHeight) : "none";

      if (options.height === "auto") {
        this.element.css({
          minHeight: minContentHeight,
          maxHeight: maxContentHeight,
          height: "auto"
        });
      } else {
        this.element.height(Math.max(0, options.height - nonContentHeight));
      }

      if (this.uiDialog.is(":data(ui-resizable)")) {
        this.uiDialog.resizable("option", "minHeight", this._minHeight());
      }
    },
    _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var iframe = $(this);
        return $("<div>").css({
          position: "absolute",
          width: iframe.outerWidth(),
          height: iframe.outerHeight()
        }).appendTo(iframe.parent()).offset(iframe.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      if (this.iframeBlocks) {
        this.iframeBlocks.remove();
        delete this.iframeBlocks;
      }
    },
    _allowInteraction: function _allowInteraction(event) {
      if ($(event.target).closest(".ui-dialog").length) {
        return true;
      } // TODO: Remove hack when datepicker implements
      // the .ui-front logic (#8989)


      return !!$(event.target).closest(".ui-datepicker").length;
    },
    _createOverlay: function _createOverlay() {
      if (!this.options.modal) {
        return;
      } // We use a delay in case the overlay is created from an
      // event that we're going to be cancelling (#2804)


      var isOpening = true;

      this._delay(function () {
        isOpening = false;
      });

      if (!this.document.data("ui-dialog-overlays")) {
        // Prevent use of anchors and inputs
        // Using _on() for an event handler shared across many instances is
        // safe because the dialogs stack and must be closed in reverse order
        this._on(this.document, {
          focusin: function focusin(event) {
            if (isOpening) {
              return;
            }

            if (!this._allowInteraction(event)) {
              event.preventDefault();

              this._trackingInstances()[0]._focusTabbable();
            }
          }
        });
      }

      this.overlay = $("<div>").appendTo(this._appendTo());

      this._addClass(this.overlay, null, "ui-widget-overlay ui-front");

      this._on(this.overlay, {
        mousedown: "_keepFocus"
      });

      this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
    },
    _destroyOverlay: function _destroyOverlay() {
      if (!this.options.modal) {
        return;
      }

      if (this.overlay) {
        var overlays = this.document.data("ui-dialog-overlays") - 1;

        if (!overlays) {
          this._off(this.document, "focusin");

          this.document.removeData("ui-dialog-overlays");
        } else {
          this.document.data("ui-dialog-overlays", overlays);
        }

        this.overlay.remove();
        this.overlay = null;
      }
    }
  }); // DEPRECATED
  // TODO: switch return back to widget declaration at top of file when this is removed

  if ($.uiBackCompat !== false) {
    // Backcompat for dialogClass option
    $.widget("ui.dialog", $.ui.dialog, {
      options: {
        dialogClass: ""
      },
      _createWrapper: function _createWrapper() {
        this._super();

        this.uiDialog.addClass(this.options.dialogClass);
      },
      _setOption: function _setOption(key, value) {
        if (key === "dialogClass") {
          this.uiDialog.removeClass(this.options.dialogClass).addClass(value);
        }

        this._superApply(arguments);
      }
    });
  }

  return $.ui.dialog;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/draggable.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/draggable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js"), __webpack_require__(/*! ../data */ "./node_modules/jquery-ui/ui/data.js"), __webpack_require__(/*! ../plugin */ "./node_modules/jquery-ui/ui/plugin.js"), __webpack_require__(/*! ../safe-active-element */ "./node_modules/jquery-ui/ui/safe-active-element.js"), __webpack_require__(/*! ../safe-blur */ "./node_modules/jquery-ui/ui/safe-blur.js"), __webpack_require__(/*! ../scroll-parent */ "./node_modules/jquery-ui/ui/scroll-parent.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.widget("ui.draggable", $.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: true,
      appendTo: "parent",
      axis: false,
      connectToSortable: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      grid: false,
      handle: false,
      helper: "original",
      iframeFix: false,
      opacity: false,
      refreshPositions: false,
      revert: false,
      revertDuration: 500,
      scope: "default",
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: false,
      snapMode: "both",
      snapTolerance: 20,
      stack: false,
      zIndex: false,
      // Callbacks
      drag: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      if (this.options.helper === "original") {
        this._setPositionRelative();
      }

      if (this.options.addClasses) {
        this._addClass("ui-draggable");
      }

      this._setHandleClassName();

      this._mouseInit();
    },
    _setOption: function _setOption(key, value) {
      this._super(key, value);

      if (key === "handle") {
        this._removeHandleClassName();

        this._setHandleClassName();
      }
    },
    _destroy: function _destroy() {
      if ((this.helper || this.element).is(".ui-draggable-dragging")) {
        this.destroyOnClear = true;
        return;
      }

      this._removeHandleClassName();

      this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(event) {
      var o = this.options; // Among others, prevent a drag on a resizable-handle

      if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
        return false;
      } //Quit if we're not on a valid handle


      this.handle = this._getHandle(event);

      if (!this.handle) {
        return false;
      }

      this._blurActiveElement(event);

      this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);

      return true;
    },
    _blockFrames: function _blockFrames(selector) {
      this.iframeBlocks = this.document.find(selector).map(function () {
        var iframe = $(this);
        return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      if (this.iframeBlocks) {
        this.iframeBlocks.remove();
        delete this.iframeBlocks;
      }
    },
    _blurActiveElement: function _blurActiveElement(event) {
      var activeElement = $.ui.safeActiveElement(this.document[0]),
          target = $(event.target); // Don't blur if the event occurred on an element that is within
      // the currently focused element
      // See #10527, #12472

      if (target.closest(activeElement).length) {
        return;
      } // Blur any element that currently has focus, see #4261


      $.ui.safeBlur(activeElement);
    },
    _mouseStart: function _mouseStart(event) {
      var o = this.options; //Create and append the visible helper

      this.helper = this._createHelper(event);

      this._addClass(this.helper, "ui-draggable-dragging"); //Cache the helper size


      this._cacheHelperProportions(); //If ddmanager is used for droppables, set the global draggable


      if ($.ui.ddmanager) {
        $.ui.ddmanager.current = this;
      }
      /*
       * - Position generation -
       * This block generates everything position related - it's the core of draggables.
       */
      //Cache the margins of the original element


      this._cacheMargins(); //Store the helper's css position


      this.cssPosition = this.helper.css("position");
      this.scrollParent = this.helper.scrollParent(true);
      this.offsetParent = this.helper.offsetParent();
      this.hasFixedAncestor = this.helper.parents().filter(function () {
        return $(this).css("position") === "fixed";
      }).length > 0; //The element's absolute position on the page minus margins

      this.positionAbs = this.element.offset();

      this._refreshOffsets(event); //Generate the original position


      this.originalPosition = this.position = this._generatePosition(event, false);
      this.originalPageX = event.pageX;
      this.originalPageY = event.pageY; //Adjust the mouse offset relative to the helper if "cursorAt" is supplied

      o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt); //Set a containment if given in the options

      this._setContainment(); //Trigger event + callbacks


      if (this._trigger("start", event) === false) {
        this._clear();

        return false;
      } //Recache the helper size


      this._cacheHelperProportions(); //Prepare the droppable offsets


      if ($.ui.ddmanager && !o.dropBehaviour) {
        $.ui.ddmanager.prepareOffsets(this, event);
      } // Execute the drag once - this causes the helper not to be visible before getting its
      // correct position


      this._mouseDrag(event, true); // If the ddmanager is used for droppables, inform the manager that dragging has started
      // (see #5003)


      if ($.ui.ddmanager) {
        $.ui.ddmanager.dragStart(this, event);
      }

      return true;
    },
    _refreshOffsets: function _refreshOffsets(event) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: false,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      };
      this.offset.click = {
        left: event.pageX - this.offset.left,
        top: event.pageY - this.offset.top
      };
    },
    _mouseDrag: function _mouseDrag(event, noPropagation) {
      // reset any necessary cached properties (see #5009)
      if (this.hasFixedAncestor) {
        this.offset.parent = this._getParentOffset();
      } //Compute the helpers position


      this.position = this._generatePosition(event, true);
      this.positionAbs = this._convertPositionTo("absolute"); //Call plugins and callbacks and use the resulting position if something is returned

      if (!noPropagation) {
        var ui = this._uiHash();

        if (this._trigger("drag", event, ui) === false) {
          this._mouseUp(new $.Event("mouseup", event));

          return false;
        }

        this.position = ui.position;
      }

      this.helper[0].style.left = this.position.left + "px";
      this.helper[0].style.top = this.position.top + "px";

      if ($.ui.ddmanager) {
        $.ui.ddmanager.drag(this, event);
      }

      return false;
    },
    _mouseStop: function _mouseStop(event) {
      //If we are using droppables, inform the manager about the drop
      var that = this,
          dropped = false;

      if ($.ui.ddmanager && !this.options.dropBehaviour) {
        dropped = $.ui.ddmanager.drop(this, event);
      } //if a drop comes from outside (a sortable)


      if (this.dropped) {
        dropped = this.dropped;
        this.dropped = false;
      }

      if (this.options.revert === "invalid" && !dropped || this.options.revert === "valid" && dropped || this.options.revert === true || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
        $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
          if (that._trigger("stop", event) !== false) {
            that._clear();
          }
        });
      } else {
        if (this._trigger("stop", event) !== false) {
          this._clear();
        }
      }

      return false;
    },
    _mouseUp: function _mouseUp(event) {
      this._unblockFrames(); // If the ddmanager is used for droppables, inform the manager that dragging has stopped
      // (see #5003)


      if ($.ui.ddmanager) {
        $.ui.ddmanager.dragStop(this, event);
      } // Only need to focus if the event occurred on the draggable itself, see #10527


      if (this.handleElement.is(event.target)) {
        // The interaction is over; whether or not the click resulted in a drag,
        // focus the element
        this.element.trigger("focus");
      }

      return $.ui.mouse.prototype._mouseUp.call(this, event);
    },
    cancel: function cancel() {
      if (this.helper.is(".ui-draggable-dragging")) {
        this._mouseUp(new $.Event("mouseup", {
          target: this.element[0]
        }));
      } else {
        this._clear();
      }

      return this;
    },
    _getHandle: function _getHandle(event) {
      return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true;
    },
    _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;

      this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function _removeHandleClassName() {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function _createHelper(event) {
      var o = this.options,
          helperIsFunction = $.isFunction(o.helper),
          helper = helperIsFunction ? $(o.helper.apply(this.element[0], [event])) : o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;

      if (!helper.parents("body").length) {
        helper.appendTo(o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo);
      } // Http://bugs.jqueryui.com/ticket/9446
      // a helper function can return the original element
      // which wouldn't have been set to relative in _create


      if (helperIsFunction && helper[0] === this.element[0]) {
        this._setPositionRelative();
      }

      if (helper[0] !== this.element[0] && !/(fixed|absolute)/.test(helper.css("position"))) {
        helper.css("position", "absolute");
      }

      return helper;
    },
    _setPositionRelative: function _setPositionRelative() {
      if (!/^(?:r|a|f)/.test(this.element.css("position"))) {
        this.element[0].style.position = "relative";
      }
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(obj) {
      if (typeof obj === "string") {
        obj = obj.split(" ");
      }

      if ($.isArray(obj)) {
        obj = {
          left: +obj[0],
          top: +obj[1] || 0
        };
      }

      if ("left" in obj) {
        this.offset.click.left = obj.left + this.margins.left;
      }

      if ("right" in obj) {
        this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
      }

      if ("top" in obj) {
        this.offset.click.top = obj.top + this.margins.top;
      }

      if ("bottom" in obj) {
        this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
      }
    },
    _isRootNode: function _isRootNode(element) {
      return /(html|body)/i.test(element.tagName) || element === this.document[0];
    },
    _getParentOffset: function _getParentOffset() {
      //Get the offsetParent and cache its position
      var po = this.offsetParent.offset(),
          document = this.document[0]; // This is a special case where we need to modify a offset calculated on start, since the
      // following happened:
      // 1. The position of the helper is absolute, so it's position is calculated based on the
      // next positioned parent
      // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
      // the document, which means that the scroll is included in the initial calculation of the
      // offset of the parent, and never recalculated upon drag

      if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
        po.left += this.scrollParent.scrollLeft();
        po.top += this.scrollParent.scrollTop();
      }

      if (this._isRootNode(this.offsetParent[0])) {
        po = {
          top: 0,
          left: 0
        };
      }

      return {
        top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition !== "relative") {
        return {
          top: 0,
          left: 0
        };
      }

      var p = this.element.position(),
          scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

      return {
        top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
        left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var isUserScrollable,
          c,
          ce,
          o = this.options,
          document = this.document[0];
      this.relativeContainer = null;

      if (!o.containment) {
        this.containment = null;
        return;
      }

      if (o.containment === "window") {
        this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
        return;
      }

      if (o.containment === "document") {
        this.containment = [0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
        return;
      }

      if (o.containment.constructor === Array) {
        this.containment = o.containment;
        return;
      }

      if (o.containment === "parent") {
        o.containment = this.helper[0].parentNode;
      }

      c = $(o.containment);
      ce = c[0];

      if (!ce) {
        return;
      }

      isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));
      this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
      this.relativeContainer = c;
    },
    _convertPositionTo: function _convertPositionTo(d, pos) {
      if (!pos) {
        pos = this.position;
      }

      var mod = d === "absolute" ? 1 : -1,
          scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

      return {
        top: // The absolute mouse position
        pos.top + // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.top * mod + // The offsetParent's offset without borders (offset + border)
        this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
        left: // The absolute mouse position
        pos.left + // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.left * mod + // The offsetParent's offset without borders (offset + border)
        this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
      };
    },
    _generatePosition: function _generatePosition(event, constrainPosition) {
      var containment,
          co,
          top,
          left,
          o = this.options,
          scrollIsRootNode = this._isRootNode(this.scrollParent[0]),
          pageX = event.pageX,
          pageY = event.pageY; // Cache the scroll


      if (!scrollIsRootNode || !this.offset.scroll) {
        this.offset.scroll = {
          top: this.scrollParent.scrollTop(),
          left: this.scrollParent.scrollLeft()
        };
      }
      /*
       * - Position constraining -
       * Constrain the position to a mix of grid, containment.
       */
      // If we are not dragging yet, we won't check for options


      if (constrainPosition) {
        if (this.containment) {
          if (this.relativeContainer) {
            co = this.relativeContainer.offset();
            containment = [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top];
          } else {
            containment = this.containment;
          }

          if (event.pageX - this.offset.click.left < containment[0]) {
            pageX = containment[0] + this.offset.click.left;
          }

          if (event.pageY - this.offset.click.top < containment[1]) {
            pageY = containment[1] + this.offset.click.top;
          }

          if (event.pageX - this.offset.click.left > containment[2]) {
            pageX = containment[2] + this.offset.click.left;
          }

          if (event.pageY - this.offset.click.top > containment[3]) {
            pageY = containment[3] + this.offset.click.top;
          }
        }

        if (o.grid) {
          //Check for grid elements set to 0 to prevent divide by 0 error causing invalid
          // argument errors in IE (see ticket #6950)
          top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
          pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
          left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
          pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
        }

        if (o.axis === "y") {
          pageX = this.originalPageX;
        }

        if (o.axis === "x") {
          pageY = this.originalPageY;
        }
      }

      return {
        top: // The absolute mouse position
        pageY - // Click offset (relative to the element)
        this.offset.click.top - // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.top - // The offsetParent's offset without borders (offset + border)
        this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
        left: // The absolute mouse position
        pageX - // Click offset (relative to the element)
        this.offset.click.left - // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.left - // The offsetParent's offset without borders (offset + border)
        this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function _clear() {
      this._removeClass(this.helper, "ui-draggable-dragging");

      if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
        this.helper.remove();
      }

      this.helper = null;
      this.cancelHelperRemoval = false;

      if (this.destroyOnClear) {
        this.destroy();
      }
    },
    // From now on bulk stuff - mainly helpers
    _trigger: function _trigger(type, event, ui) {
      ui = ui || this._uiHash();
      $.ui.plugin.call(this, type, [event, ui, this], true); // Absolute position and offset (see #6884 ) have to be recalculated after plugins

      if (/^(drag|start|stop)/.test(type)) {
        this.positionAbs = this._convertPositionTo("absolute");
        ui.offset = this.positionAbs;
      }

      return $.Widget.prototype._trigger.call(this, type, event, ui);
    },
    plugins: {},
    _uiHash: function _uiHash() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  });
  $.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(event, ui, draggable) {
      var uiSortable = $.extend({}, ui, {
        item: draggable.element
      });
      draggable.sortables = [];
      $(draggable.options.connectToSortable).each(function () {
        var sortable = $(this).sortable("instance");

        if (sortable && !sortable.options.disabled) {
          draggable.sortables.push(sortable); // RefreshPositions is called at drag start to refresh the containerCache
          // which is used in drag. This ensures it's initialized and synchronized
          // with any changes that might have happened on the page since initialization.

          sortable.refreshPositions();

          sortable._trigger("activate", event, uiSortable);
        }
      });
    },
    stop: function stop(event, ui, draggable) {
      var uiSortable = $.extend({}, ui, {
        item: draggable.element
      });
      draggable.cancelHelperRemoval = false;
      $.each(draggable.sortables, function () {
        var sortable = this;

        if (sortable.isOver) {
          sortable.isOver = 0; // Allow this sortable to handle removing the helper

          draggable.cancelHelperRemoval = true;
          sortable.cancelHelperRemoval = false; // Use _storedCSS To restore properties in the sortable,
          // as this also handles revert (#9675) since the draggable
          // may have modified them in unexpected ways (#8809)

          sortable._storedCSS = {
            position: sortable.placeholder.css("position"),
            top: sortable.placeholder.css("top"),
            left: sortable.placeholder.css("left")
          };

          sortable._mouseStop(event); // Once drag has ended, the sortable should return to using
          // its original helper, not the shared helper from draggable


          sortable.options.helper = sortable.options._helper;
        } else {
          // Prevent this Sortable from removing the helper.
          // However, don't set the draggable to remove the helper
          // either as another connected Sortable may yet handle the removal.
          sortable.cancelHelperRemoval = true;

          sortable._trigger("deactivate", event, uiSortable);
        }
      });
    },
    drag: function drag(event, ui, draggable) {
      $.each(draggable.sortables, function () {
        var innermostIntersecting = false,
            sortable = this; // Copy over variables that sortable's _intersectsWith uses

        sortable.positionAbs = draggable.positionAbs;
        sortable.helperProportions = draggable.helperProportions;
        sortable.offset.click = draggable.offset.click;

        if (sortable._intersectsWith(sortable.containerCache)) {
          innermostIntersecting = true;
          $.each(draggable.sortables, function () {
            // Copy over variables that sortable's _intersectsWith uses
            this.positionAbs = draggable.positionAbs;
            this.helperProportions = draggable.helperProportions;
            this.offset.click = draggable.offset.click;

            if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) {
              innermostIntersecting = false;
            }

            return innermostIntersecting;
          });
        }

        if (innermostIntersecting) {
          // If it intersects, we use a little isOver variable and set it once,
          // so that the move-in stuff gets fired only once.
          if (!sortable.isOver) {
            sortable.isOver = 1; // Store draggable's parent in case we need to reappend to it later.

            draggable._parent = ui.helper.parent();
            sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true); // Store helper option to later restore it

            sortable.options._helper = sortable.options.helper;

            sortable.options.helper = function () {
              return ui.helper[0];
            }; // Fire the start events of the sortable with our passed browser event,
            // and our own helper (so it doesn't create a new one)


            event.target = sortable.currentItem[0];

            sortable._mouseCapture(event, true);

            sortable._mouseStart(event, true, true); // Because the browser event is way off the new appended portlet,
            // modify necessary variables to reflect the changes


            sortable.offset.click.top = draggable.offset.click.top;
            sortable.offset.click.left = draggable.offset.click.left;
            sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
            sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;

            draggable._trigger("toSortable", event); // Inform draggable that the helper is in a valid drop zone,
            // used solely in the revert option to handle "valid/invalid".


            draggable.dropped = sortable.element; // Need to refreshPositions of all sortables in the case that
            // adding to one sortable changes the location of the other sortables (#9675)

            $.each(draggable.sortables, function () {
              this.refreshPositions();
            }); // Hack so receive/update callbacks work (mostly)

            draggable.currentItem = draggable.element;
            sortable.fromOutside = draggable;
          }

          if (sortable.currentItem) {
            sortable._mouseDrag(event); // Copy the sortable's position because the draggable's can potentially reflect
            // a relative position, while sortable is always absolute, which the dragged
            // element has now become. (#8809)


            ui.position = sortable.position;
          }
        } else {
          // If it doesn't intersect with the sortable, and it intersected before,
          // we fake the drag stop of the sortable, but make sure it doesn't remove
          // the helper by using cancelHelperRemoval.
          if (sortable.isOver) {
            sortable.isOver = 0;
            sortable.cancelHelperRemoval = true; // Calling sortable's mouseStop would trigger a revert,
            // so revert must be temporarily false until after mouseStop is called.

            sortable.options._revert = sortable.options.revert;
            sortable.options.revert = false;

            sortable._trigger("out", event, sortable._uiHash(sortable));

            sortable._mouseStop(event, true); // Restore sortable behaviors that were modfied
            // when the draggable entered the sortable area (#9481)


            sortable.options.revert = sortable.options._revert;
            sortable.options.helper = sortable.options._helper;

            if (sortable.placeholder) {
              sortable.placeholder.remove();
            } // Restore and recalculate the draggable's offset considering the sortable
            // may have modified them in unexpected ways. (#8809, #10669)


            ui.helper.appendTo(draggable._parent);

            draggable._refreshOffsets(event);

            ui.position = draggable._generatePosition(event, true);

            draggable._trigger("fromSortable", event); // Inform draggable that the helper is no longer in a valid drop zone


            draggable.dropped = false; // Need to refreshPositions of all sortables just in case removing
            // from one sortable changes the location of other sortables (#9675)

            $.each(draggable.sortables, function () {
              this.refreshPositions();
            });
          }
        }
      });
    }
  });
  $.ui.plugin.add("draggable", "cursor", {
    start: function start(event, ui, instance) {
      var t = $("body"),
          o = instance.options;

      if (t.css("cursor")) {
        o._cursor = t.css("cursor");
      }

      t.css("cursor", o.cursor);
    },
    stop: function stop(event, ui, instance) {
      var o = instance.options;

      if (o._cursor) {
        $("body").css("cursor", o._cursor);
      }
    }
  });
  $.ui.plugin.add("draggable", "opacity", {
    start: function start(event, ui, instance) {
      var t = $(ui.helper),
          o = instance.options;

      if (t.css("opacity")) {
        o._opacity = t.css("opacity");
      }

      t.css("opacity", o.opacity);
    },
    stop: function stop(event, ui, instance) {
      var o = instance.options;

      if (o._opacity) {
        $(ui.helper).css("opacity", o._opacity);
      }
    }
  });
  $.ui.plugin.add("draggable", "scroll", {
    start: function start(event, ui, i) {
      if (!i.scrollParentNotHidden) {
        i.scrollParentNotHidden = i.helper.scrollParent(false);
      }

      if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
        i.overflowOffset = i.scrollParentNotHidden.offset();
      }
    },
    drag: function drag(event, ui, i) {
      var o = i.options,
          scrolled = false,
          scrollParent = i.scrollParentNotHidden[0],
          document = i.document[0];

      if (scrollParent !== document && scrollParent.tagName !== "HTML") {
        if (!o.axis || o.axis !== "x") {
          if (i.overflowOffset.top + scrollParent.offsetHeight - event.pageY < o.scrollSensitivity) {
            scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
          } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
            scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
          }
        }

        if (!o.axis || o.axis !== "y") {
          if (i.overflowOffset.left + scrollParent.offsetWidth - event.pageX < o.scrollSensitivity) {
            scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
          } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
            scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
          }
        }
      } else {
        if (!o.axis || o.axis !== "x") {
          if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
            scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
          } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
            scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
          }
        }

        if (!o.axis || o.axis !== "y") {
          if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
            scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
          } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
            scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
          }
        }
      }

      if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
        $.ui.ddmanager.prepareOffsets(i, event);
      }
    }
  });
  $.ui.plugin.add("draggable", "snap", {
    start: function start(event, ui, i) {
      var o = i.options;
      i.snapElements = [];
      $(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function () {
        var $t = $(this),
            $o = $t.offset();

        if (this !== i.element[0]) {
          i.snapElements.push({
            item: this,
            width: $t.outerWidth(),
            height: $t.outerHeight(),
            top: $o.top,
            left: $o.left
          });
        }
      });
    },
    drag: function drag(event, ui, inst) {
      var ts,
          bs,
          ls,
          rs,
          l,
          r,
          t,
          b,
          i,
          first,
          o = inst.options,
          d = o.snapTolerance,
          x1 = ui.offset.left,
          x2 = x1 + inst.helperProportions.width,
          y1 = ui.offset.top,
          y2 = y1 + inst.helperProportions.height;

      for (i = inst.snapElements.length - 1; i >= 0; i--) {
        l = inst.snapElements[i].left - inst.margins.left;
        r = l + inst.snapElements[i].width;
        t = inst.snapElements[i].top - inst.margins.top;
        b = t + inst.snapElements[i].height;

        if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
          if (inst.snapElements[i].snapping) {
            inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
              snapItem: inst.snapElements[i].item
            }));
          }

          inst.snapElements[i].snapping = false;
          continue;
        }

        if (o.snapMode !== "inner") {
          ts = Math.abs(t - y2) <= d;
          bs = Math.abs(b - y1) <= d;
          ls = Math.abs(l - x2) <= d;
          rs = Math.abs(r - x1) <= d;

          if (ts) {
            ui.position.top = inst._convertPositionTo("relative", {
              top: t - inst.helperProportions.height,
              left: 0
            }).top;
          }

          if (bs) {
            ui.position.top = inst._convertPositionTo("relative", {
              top: b,
              left: 0
            }).top;
          }

          if (ls) {
            ui.position.left = inst._convertPositionTo("relative", {
              top: 0,
              left: l - inst.helperProportions.width
            }).left;
          }

          if (rs) {
            ui.position.left = inst._convertPositionTo("relative", {
              top: 0,
              left: r
            }).left;
          }
        }

        first = ts || bs || ls || rs;

        if (o.snapMode !== "outer") {
          ts = Math.abs(t - y1) <= d;
          bs = Math.abs(b - y2) <= d;
          ls = Math.abs(l - x1) <= d;
          rs = Math.abs(r - x2) <= d;

          if (ts) {
            ui.position.top = inst._convertPositionTo("relative", {
              top: t,
              left: 0
            }).top;
          }

          if (bs) {
            ui.position.top = inst._convertPositionTo("relative", {
              top: b - inst.helperProportions.height,
              left: 0
            }).top;
          }

          if (ls) {
            ui.position.left = inst._convertPositionTo("relative", {
              top: 0,
              left: l
            }).left;
          }

          if (rs) {
            ui.position.left = inst._convertPositionTo("relative", {
              top: 0,
              left: r - inst.helperProportions.width
            }).left;
          }
        }

        if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
          inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
            snapItem: inst.snapElements[i].item
          }));
        }

        inst.snapElements[i].snapping = ts || bs || ls || rs || first;
      }
    }
  });
  $.ui.plugin.add("draggable", "stack", {
    start: function start(event, ui, instance) {
      var min,
          o = instance.options,
          group = $.makeArray($(o.stack)).sort(function (a, b) {
        return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
      });

      if (!group.length) {
        return;
      }

      min = parseInt($(group[0]).css("zIndex"), 10) || 0;
      $(group).each(function (i) {
        $(this).css("zIndex", min + i);
      });
      this.css("zIndex", min + group.length);
    }
  });
  $.ui.plugin.add("draggable", "zIndex", {
    start: function start(event, ui, instance) {
      var t = $(ui.helper),
          o = instance.options;

      if (t.css("zIndex")) {
        o._zIndex = t.css("zIndex");
      }

      t.css("zIndex", o.zIndex);
    },
    stop: function stop(event, ui, instance) {
      var o = instance.options;

      if (o._zIndex) {
        $(ui.helper).css("zIndex", o._zIndex);
      }
    }
  });
  return $.ui.draggable;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/mouse.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/mouse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../ie */ "./node_modules/jquery-ui/ui/ie.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var mouseHandled = false;
  $(document).on("mouseup", function () {
    mouseHandled = false;
  });
  return $.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var that = this;
      this.element.on("mousedown." + this.widgetName, function (event) {
        return that._mouseDown(event);
      }).on("click." + this.widgetName, function (event) {
        if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
          $.removeData(event.target, that.widgetName + ".preventClickEvent");
          event.stopImmediatePropagation();
          return false;
        }
      });
      this.started = false;
    },
    // TODO: make sure destroying one instance of mouse doesn't mess with
    // other instances of mouse
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName);

      if (this._mouseMoveDelegate) {
        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
      }
    },
    _mouseDown: function _mouseDown(event) {
      // don't let more than one widget handle mouseStart
      if (mouseHandled) {
        return;
      }

      this._mouseMoved = false; // We may have missed mouseup (out of window)

      this._mouseStarted && this._mouseUp(event);
      this._mouseDownEvent = event;
      var that = this,
          btnIsLeft = event.which === 1,
          // event.target.nodeName works around a bug in IE 8 with
      // disabled inputs (#7620)
      elIsCancel = typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;

      if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
        return true;
      }

      this.mouseDelayMet = !this.options.delay;

      if (!this.mouseDelayMet) {
        this._mouseDelayTimer = setTimeout(function () {
          that.mouseDelayMet = true;
        }, this.options.delay);
      }

      if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
        this._mouseStarted = this._mouseStart(event) !== false;

        if (!this._mouseStarted) {
          event.preventDefault();
          return true;
        }
      } // Click event may never have fired (Gecko & Opera)


      if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
        $.removeData(event.target, this.widgetName + ".preventClickEvent");
      } // These delegates are required to keep context


      this._mouseMoveDelegate = function (event) {
        return that._mouseMove(event);
      };

      this._mouseUpDelegate = function (event) {
        return that._mouseUp(event);
      };

      this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
      event.preventDefault();
      mouseHandled = true;
      return true;
    },
    _mouseMove: function _mouseMove(event) {
      // Only check for mouseups outside the document if you've moved inside the document
      // at least once. This prevents the firing of mouseup in the case of IE<9, which will
      // fire a mousemove event if content is placed under the cursor. See #7778
      // Support: IE <9
      if (this._mouseMoved) {
        // IE mouseup check - mouseup happened when mouse was out of window
        if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
          return this._mouseUp(event); // Iframe mouseup check - mouseup occurred in another document
        } else if (!event.which) {
          // Support: Safari <=8 - 9
          // Safari sets which to 0 if you press any of the following keys
          // during a drag (#14461)
          if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) {
            this.ignoreMissingWhich = true;
          } else if (!this.ignoreMissingWhich) {
            return this._mouseUp(event);
          }
        }
      }

      if (event.which || event.button) {
        this._mouseMoved = true;
      }

      if (this._mouseStarted) {
        this._mouseDrag(event);

        return event.preventDefault();
      }

      if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
        this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
        this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
      }

      return !this._mouseStarted;
    },
    _mouseUp: function _mouseUp(event) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);

      if (this._mouseStarted) {
        this._mouseStarted = false;

        if (event.target === this._mouseDownEvent.target) {
          $.data(event.target, this.widgetName + ".preventClickEvent", true);
        }

        this._mouseStop(event);
      }

      if (this._mouseDelayTimer) {
        clearTimeout(this._mouseDelayTimer);
        delete this._mouseDelayTimer;
      }

      this.ignoreMissingWhich = false;
      mouseHandled = false;
      event.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(event) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet()
    /* event */
    {
      return this.mouseDelayMet;
    },
    // These are placeholder methods, to be overriden by extending plugin
    _mouseStart: function _mouseStart()
    /* event */
    {},
    _mouseDrag: function _mouseDrag()
    /* event */
    {},
    _mouseStop: function _mouseStop()
    /* event */
    {},
    _mouseCapture: function _mouseCapture()
    /* event */
    {
      return true;
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/resizable.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/resizable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js"), __webpack_require__(/*! ../disable-selection */ "./node_modules/jquery-ui/ui/disable-selection.js"), __webpack_require__(/*! ../plugin */ "./node_modules/jquery-ui/ui/plugin.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.widget("ui.resizable", $.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: false,
      animate: false,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: false,
      autoHide: false,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: false,
      ghost: false,
      grid: false,
      handles: "e,s,se",
      helper: false,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      // See #7960
      zIndex: 90,
      // Callbacks
      resize: null,
      start: null,
      stop: null
    },
    _num: function _num(value) {
      return parseFloat(value) || 0;
    },
    _isNumber: function _isNumber(value) {
      return !isNaN(parseFloat(value));
    },
    _hasScroll: function _hasScroll(el, a) {
      if ($(el).css("overflow") === "hidden") {
        return false;
      }

      var scroll = a && a === "left" ? "scrollLeft" : "scrollTop",
          has = false;

      if (el[scroll] > 0) {
        return true;
      } // TODO: determine which cases actually cause this to happen
      // if the element doesn't have the scroll set, see if it's possible to
      // set the scroll


      el[scroll] = 1;
      has = el[scroll] > 0;
      el[scroll] = 0;
      return has;
    },
    _create: function _create() {
      var margins,
          o = this.options,
          that = this;

      this._addClass("ui-resizable");

      $.extend(this, {
        _aspectRatio: !!o.aspectRatio,
        aspectRatio: o.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
      }); // Wrap the element if it cannot hold child nodes

      if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
        this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        }));
        this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
        this.elementIsWrapper = true;
        margins = {
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom"),
          marginLeft: this.originalElement.css("marginLeft")
        };
        this.element.css(margins);
        this.originalElement.css("margin", 0); // support: Safari
        // Prevent Safari textarea resize

        this.originalResizeStyle = this.originalElement.css("resize");
        this.originalElement.css("resize", "none");

        this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        })); // Support: IE9
        // avoid IE jump (hard set the margin)


        this.originalElement.css(margins);

        this._proportionallyResize();
      }

      this._setupHandles();

      if (o.autoHide) {
        $(this.element).on("mouseenter", function () {
          if (o.disabled) {
            return;
          }

          that._removeClass("ui-resizable-autohide");

          that._handles.show();
        }).on("mouseleave", function () {
          if (o.disabled) {
            return;
          }

          if (!that.resizing) {
            that._addClass("ui-resizable-autohide");

            that._handles.hide();
          }
        });
      }

      this._mouseInit();
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      var wrapper,
          _destroy = function _destroy(exp) {
        $(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
      }; // TODO: Unwrap at same DOM position


      if (this.elementIsWrapper) {
        _destroy(this.element);

        wrapper = this.element;
        this.originalElement.css({
          position: wrapper.css("position"),
          width: wrapper.outerWidth(),
          height: wrapper.outerHeight(),
          top: wrapper.css("top"),
          left: wrapper.css("left")
        }).insertAfter(wrapper);
        wrapper.remove();
      }

      this.originalElement.css("resize", this.originalResizeStyle);

      _destroy(this.originalElement);

      return this;
    },
    _setOption: function _setOption(key, value) {
      this._super(key, value);

      switch (key) {
        case "handles":
          this._removeHandles();

          this._setupHandles();

          break;

        default:
          break;
      }
    },
    _setupHandles: function _setupHandles() {
      var o = this.options,
          handle,
          i,
          n,
          hname,
          axis,
          that = this;
      this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      });
      this._handles = $();

      if (this.handles.constructor === String) {
        if (this.handles === "all") {
          this.handles = "n,e,s,w,se,sw,ne,nw";
        }

        n = this.handles.split(",");
        this.handles = {};

        for (i = 0; i < n.length; i++) {
          handle = $.trim(n[i]);
          hname = "ui-resizable-" + handle;
          axis = $("<div>");

          this._addClass(axis, "ui-resizable-handle " + hname);

          axis.css({
            zIndex: o.zIndex
          });
          this.handles[handle] = ".ui-resizable-" + handle;
          this.element.append(axis);
        }
      }

      this._renderAxis = function (target) {
        var i, axis, padPos, padWrapper;
        target = target || this.element;

        for (i in this.handles) {
          if (this.handles[i].constructor === String) {
            this.handles[i] = this.element.children(this.handles[i]).first().show();
          } else if (this.handles[i].jquery || this.handles[i].nodeType) {
            this.handles[i] = $(this.handles[i]);

            this._on(this.handles[i], {
              "mousedown": that._mouseDown
            });
          }

          if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
            axis = $(this.handles[i], this.element);
            padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();
            padPos = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
            target.css(padPos, padWrapper);

            this._proportionallyResize();
          }

          this._handles = this._handles.add(this.handles[i]);
        }
      }; // TODO: make renderAxis a prototype function


      this._renderAxis(this.element);

      this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));

      this._handles.disableSelection();

      this._handles.on("mouseover", function () {
        if (!that.resizing) {
          if (this.className) {
            axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
          }

          that.axis = axis && axis[1] ? axis[1] : "se";
        }
      });

      if (o.autoHide) {
        this._handles.hide();

        this._addClass("ui-resizable-autohide");
      }
    },
    _removeHandles: function _removeHandles() {
      this._handles.remove();
    },
    _mouseCapture: function _mouseCapture(event) {
      var i,
          handle,
          capture = false;

      for (i in this.handles) {
        handle = $(this.handles[i])[0];

        if (handle === event.target || $.contains(handle, event.target)) {
          capture = true;
        }
      }

      return !this.options.disabled && capture;
    },
    _mouseStart: function _mouseStart(event) {
      var curleft,
          curtop,
          cursor,
          o = this.options,
          el = this.element;
      this.resizing = true;

      this._renderProxy();

      curleft = this._num(this.helper.css("left"));
      curtop = this._num(this.helper.css("top"));

      if (o.containment) {
        curleft += $(o.containment).scrollLeft() || 0;
        curtop += $(o.containment).scrollTop() || 0;
      }

      this.offset = this.helper.offset();
      this.position = {
        left: curleft,
        top: curtop
      };
      this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: el.width(),
        height: el.height()
      };
      this.originalSize = this._helper ? {
        width: el.outerWidth(),
        height: el.outerHeight()
      } : {
        width: el.width(),
        height: el.height()
      };
      this.sizeDiff = {
        width: el.outerWidth() - el.width(),
        height: el.outerHeight() - el.height()
      };
      this.originalPosition = {
        left: curleft,
        top: curtop
      };
      this.originalMousePosition = {
        left: event.pageX,
        top: event.pageY
      };
      this.aspectRatio = typeof o.aspectRatio === "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
      cursor = $(".ui-resizable-" + this.axis).css("cursor");
      $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

      this._addClass("ui-resizable-resizing");

      this._propagate("start", event);

      return true;
    },
    _mouseDrag: function _mouseDrag(event) {
      var data,
          props,
          smp = this.originalMousePosition,
          a = this.axis,
          dx = event.pageX - smp.left || 0,
          dy = event.pageY - smp.top || 0,
          trigger = this._change[a];

      this._updatePrevProperties();

      if (!trigger) {
        return false;
      }

      data = trigger.apply(this, [event, dx, dy]);

      this._updateVirtualBoundaries(event.shiftKey);

      if (this._aspectRatio || event.shiftKey) {
        data = this._updateRatio(data, event);
      }

      data = this._respectSize(data, event);

      this._updateCache(data);

      this._propagate("resize", event);

      props = this._applyChanges();

      if (!this._helper && this._proportionallyResizeElements.length) {
        this._proportionallyResize();
      }

      if (!$.isEmptyObject(props)) {
        this._updatePrevProperties();

        this._trigger("resize", event, this.ui());

        this._applyChanges();
      }

      return false;
    },
    _mouseStop: function _mouseStop(event) {
      this.resizing = false;
      var pr,
          ista,
          soffseth,
          soffsetw,
          s,
          left,
          top,
          o = this.options,
          that = this;

      if (this._helper) {
        pr = this._proportionallyResizeElements;
        ista = pr.length && /textarea/i.test(pr[0].nodeName);
        soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
        soffsetw = ista ? 0 : that.sizeDiff.width;
        s = {
          width: that.helper.width() - soffsetw,
          height: that.helper.height() - soffseth
        };
        left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null;
        top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;

        if (!o.animate) {
          this.element.css($.extend(s, {
            top: top,
            left: left
          }));
        }

        that.helper.height(that.size.height);
        that.helper.width(that.size.width);

        if (this._helper && !o.animate) {
          this._proportionallyResize();
        }
      }

      $("body").css("cursor", "auto");

      this._removeClass("ui-resizable-resizing");

      this._propagate("stop", event);

      if (this._helper) {
        this.helper.remove();
      }

      return false;
    },
    _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      };
      this.prevSize = {
        width: this.size.width,
        height: this.size.height
      };
    },
    _applyChanges: function _applyChanges() {
      var props = {};

      if (this.position.top !== this.prevPosition.top) {
        props.top = this.position.top + "px";
      }

      if (this.position.left !== this.prevPosition.left) {
        props.left = this.position.left + "px";
      }

      if (this.size.width !== this.prevSize.width) {
        props.width = this.size.width + "px";
      }

      if (this.size.height !== this.prevSize.height) {
        props.height = this.size.height + "px";
      }

      this.helper.css(props);
      return props;
    },
    _updateVirtualBoundaries: function _updateVirtualBoundaries(forceAspectRatio) {
      var pMinWidth,
          pMaxWidth,
          pMinHeight,
          pMaxHeight,
          b,
          o = this.options;
      b = {
        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
      };

      if (this._aspectRatio || forceAspectRatio) {
        pMinWidth = b.minHeight * this.aspectRatio;
        pMinHeight = b.minWidth / this.aspectRatio;
        pMaxWidth = b.maxHeight * this.aspectRatio;
        pMaxHeight = b.maxWidth / this.aspectRatio;

        if (pMinWidth > b.minWidth) {
          b.minWidth = pMinWidth;
        }

        if (pMinHeight > b.minHeight) {
          b.minHeight = pMinHeight;
        }

        if (pMaxWidth < b.maxWidth) {
          b.maxWidth = pMaxWidth;
        }

        if (pMaxHeight < b.maxHeight) {
          b.maxHeight = pMaxHeight;
        }
      }

      this._vBoundaries = b;
    },
    _updateCache: function _updateCache(data) {
      this.offset = this.helper.offset();

      if (this._isNumber(data.left)) {
        this.position.left = data.left;
      }

      if (this._isNumber(data.top)) {
        this.position.top = data.top;
      }

      if (this._isNumber(data.height)) {
        this.size.height = data.height;
      }

      if (this._isNumber(data.width)) {
        this.size.width = data.width;
      }
    },
    _updateRatio: function _updateRatio(data) {
      var cpos = this.position,
          csize = this.size,
          a = this.axis;

      if (this._isNumber(data.height)) {
        data.width = data.height * this.aspectRatio;
      } else if (this._isNumber(data.width)) {
        data.height = data.width / this.aspectRatio;
      }

      if (a === "sw") {
        data.left = cpos.left + (csize.width - data.width);
        data.top = null;
      }

      if (a === "nw") {
        data.top = cpos.top + (csize.height - data.height);
        data.left = cpos.left + (csize.width - data.width);
      }

      return data;
    },
    _respectSize: function _respectSize(data) {
      var o = this._vBoundaries,
          a = this.axis,
          ismaxw = this._isNumber(data.width) && o.maxWidth && o.maxWidth < data.width,
          ismaxh = this._isNumber(data.height) && o.maxHeight && o.maxHeight < data.height,
          isminw = this._isNumber(data.width) && o.minWidth && o.minWidth > data.width,
          isminh = this._isNumber(data.height) && o.minHeight && o.minHeight > data.height,
          dw = this.originalPosition.left + this.originalSize.width,
          dh = this.originalPosition.top + this.originalSize.height,
          cw = /sw|nw|w/.test(a),
          ch = /nw|ne|n/.test(a);

      if (isminw) {
        data.width = o.minWidth;
      }

      if (isminh) {
        data.height = o.minHeight;
      }

      if (ismaxw) {
        data.width = o.maxWidth;
      }

      if (ismaxh) {
        data.height = o.maxHeight;
      }

      if (isminw && cw) {
        data.left = dw - o.minWidth;
      }

      if (ismaxw && cw) {
        data.left = dw - o.maxWidth;
      }

      if (isminh && ch) {
        data.top = dh - o.minHeight;
      }

      if (ismaxh && ch) {
        data.top = dh - o.maxHeight;
      } // Fixing jump error on top/left - bug #2330


      if (!data.width && !data.height && !data.left && data.top) {
        data.top = null;
      } else if (!data.width && !data.height && !data.top && data.left) {
        data.left = null;
      }

      return data;
    },
    _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(element) {
      var i = 0,
          widths = [],
          borders = [element.css("borderTopWidth"), element.css("borderRightWidth"), element.css("borderBottomWidth"), element.css("borderLeftWidth")],
          paddings = [element.css("paddingTop"), element.css("paddingRight"), element.css("paddingBottom"), element.css("paddingLeft")];

      for (; i < 4; i++) {
        widths[i] = parseFloat(borders[i]) || 0;
        widths[i] += parseFloat(paddings[i]) || 0;
      }

      return {
        height: widths[0] + widths[2],
        width: widths[1] + widths[3]
      };
    },
    _proportionallyResize: function _proportionallyResize() {
      if (!this._proportionallyResizeElements.length) {
        return;
      }

      var prel,
          i = 0,
          element = this.helper || this.element;

      for (; i < this._proportionallyResizeElements.length; i++) {
        prel = this._proportionallyResizeElements[i]; // TODO: Seems like a bug to cache this.outerDimensions
        // considering that we are in a loop.

        if (!this.outerDimensions) {
          this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
        }

        prel.css({
          height: element.height() - this.outerDimensions.height || 0,
          width: element.width() - this.outerDimensions.width || 0
        });
      }
    },
    _renderProxy: function _renderProxy() {
      var el = this.element,
          o = this.options;
      this.elementOffset = el.offset();

      if (this._helper) {
        this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

        this._addClass(this.helper, this._helper);

        this.helper.css({
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          position: "absolute",
          left: this.elementOffset.left + "px",
          top: this.elementOffset.top + "px",
          zIndex: ++o.zIndex //TODO: Don't modify option

        });
        this.helper.appendTo("body").disableSelection();
      } else {
        this.helper = this.element;
      }
    },
    _change: {
      e: function e(event, dx) {
        return {
          width: this.originalSize.width + dx
        };
      },
      w: function w(event, dx) {
        var cs = this.originalSize,
            sp = this.originalPosition;
        return {
          left: sp.left + dx,
          width: cs.width - dx
        };
      },
      n: function n(event, dx, dy) {
        var cs = this.originalSize,
            sp = this.originalPosition;
        return {
          top: sp.top + dy,
          height: cs.height - dy
        };
      },
      s: function s(event, dx, dy) {
        return {
          height: this.originalSize.height + dy
        };
      },
      se: function se(event, dx, dy) {
        return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
      },
      sw: function sw(event, dx, dy) {
        return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
      },
      ne: function ne(event, dx, dy) {
        return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
      },
      nw: function nw(event, dx, dy) {
        return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
      }
    },
    _propagate: function _propagate(n, event) {
      $.ui.plugin.call(this, n, [event, this.ui()]);
      n !== "resize" && this._trigger(n, event, this.ui());
    },
    plugins: {},
    ui: function ui() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  });
  /*
   * Resizable Extensions
   */

  $.ui.plugin.add("resizable", "animate", {
    stop: function stop(event) {
      var that = $(this).resizable("instance"),
          o = that.options,
          pr = that._proportionallyResizeElements,
          ista = pr.length && /textarea/i.test(pr[0].nodeName),
          soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
          soffsetw = ista ? 0 : that.sizeDiff.width,
          style = {
        width: that.size.width - soffsetw,
        height: that.size.height - soffseth
      },
          left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null,
          top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;
      that.element.animate($.extend(style, top && left ? {
        top: top,
        left: left
      } : {}), {
        duration: o.animateDuration,
        easing: o.animateEasing,
        step: function step() {
          var data = {
            width: parseFloat(that.element.css("width")),
            height: parseFloat(that.element.css("height")),
            top: parseFloat(that.element.css("top")),
            left: parseFloat(that.element.css("left"))
          };

          if (pr && pr.length) {
            $(pr[0]).css({
              width: data.width,
              height: data.height
            });
          } // Propagating resize, and updating values for each animation step


          that._updateCache(data);

          that._propagate("resize", event);
        }
      });
    }
  });
  $.ui.plugin.add("resizable", "containment", {
    start: function start() {
      var element,
          p,
          co,
          ch,
          cw,
          width,
          height,
          that = $(this).resizable("instance"),
          o = that.options,
          el = that.element,
          oc = o.containment,
          ce = oc instanceof $ ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;

      if (!ce) {
        return;
      }

      that.containerElement = $(ce);

      if (/document/.test(oc) || oc === document) {
        that.containerOffset = {
          left: 0,
          top: 0
        };
        that.containerPosition = {
          left: 0,
          top: 0
        };
        that.parentData = {
          element: $(document),
          left: 0,
          top: 0,
          width: $(document).width(),
          height: $(document).height() || document.body.parentNode.scrollHeight
        };
      } else {
        element = $(ce);
        p = [];
        $(["Top", "Right", "Left", "Bottom"]).each(function (i, name) {
          p[i] = that._num(element.css("padding" + name));
        });
        that.containerOffset = element.offset();
        that.containerPosition = element.position();
        that.containerSize = {
          height: element.innerHeight() - p[3],
          width: element.innerWidth() - p[1]
        };
        co = that.containerOffset;
        ch = that.containerSize.height;
        cw = that.containerSize.width;
        width = that._hasScroll(ce, "left") ? ce.scrollWidth : cw;
        height = that._hasScroll(ce) ? ce.scrollHeight : ch;
        that.parentData = {
          element: ce,
          left: co.left,
          top: co.top,
          width: width,
          height: height
        };
      }
    },
    resize: function resize(event) {
      var woset,
          hoset,
          isParent,
          isOffsetRelative,
          that = $(this).resizable("instance"),
          o = that.options,
          co = that.containerOffset,
          cp = that.position,
          pRatio = that._aspectRatio || event.shiftKey,
          cop = {
        top: 0,
        left: 0
      },
          ce = that.containerElement,
          continueResize = true;

      if (ce[0] !== document && /static/.test(ce.css("position"))) {
        cop = co;
      }

      if (cp.left < (that._helper ? co.left : 0)) {
        that.size.width = that.size.width + (that._helper ? that.position.left - co.left : that.position.left - cop.left);

        if (pRatio) {
          that.size.height = that.size.width / that.aspectRatio;
          continueResize = false;
        }

        that.position.left = o.helper ? co.left : 0;
      }

      if (cp.top < (that._helper ? co.top : 0)) {
        that.size.height = that.size.height + (that._helper ? that.position.top - co.top : that.position.top);

        if (pRatio) {
          that.size.width = that.size.height * that.aspectRatio;
          continueResize = false;
        }

        that.position.top = that._helper ? co.top : 0;
      }

      isParent = that.containerElement.get(0) === that.element.parent().get(0);
      isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));

      if (isParent && isOffsetRelative) {
        that.offset.left = that.parentData.left + that.position.left;
        that.offset.top = that.parentData.top + that.position.top;
      } else {
        that.offset.left = that.element.offset().left;
        that.offset.top = that.element.offset().top;
      }

      woset = Math.abs(that.sizeDiff.width + (that._helper ? that.offset.left - cop.left : that.offset.left - co.left));
      hoset = Math.abs(that.sizeDiff.height + (that._helper ? that.offset.top - cop.top : that.offset.top - co.top));

      if (woset + that.size.width >= that.parentData.width) {
        that.size.width = that.parentData.width - woset;

        if (pRatio) {
          that.size.height = that.size.width / that.aspectRatio;
          continueResize = false;
        }
      }

      if (hoset + that.size.height >= that.parentData.height) {
        that.size.height = that.parentData.height - hoset;

        if (pRatio) {
          that.size.width = that.size.height * that.aspectRatio;
          continueResize = false;
        }
      }

      if (!continueResize) {
        that.position.left = that.prevPosition.left;
        that.position.top = that.prevPosition.top;
        that.size.width = that.prevSize.width;
        that.size.height = that.prevSize.height;
      }
    },
    stop: function stop() {
      var that = $(this).resizable("instance"),
          o = that.options,
          co = that.containerOffset,
          cop = that.containerPosition,
          ce = that.containerElement,
          helper = $(that.helper),
          ho = helper.offset(),
          w = helper.outerWidth() - that.sizeDiff.width,
          h = helper.outerHeight() - that.sizeDiff.height;

      if (that._helper && !o.animate && /relative/.test(ce.css("position"))) {
        $(this).css({
          left: ho.left - cop.left - co.left,
          width: w,
          height: h
        });
      }

      if (that._helper && !o.animate && /static/.test(ce.css("position"))) {
        $(this).css({
          left: ho.left - cop.left - co.left,
          width: w,
          height: h
        });
      }
    }
  });
  $.ui.plugin.add("resizable", "alsoResize", {
    start: function start() {
      var that = $(this).resizable("instance"),
          o = that.options;
      $(o.alsoResize).each(function () {
        var el = $(this);
        el.data("ui-resizable-alsoresize", {
          width: parseFloat(el.width()),
          height: parseFloat(el.height()),
          left: parseFloat(el.css("left")),
          top: parseFloat(el.css("top"))
        });
      });
    },
    resize: function resize(event, ui) {
      var that = $(this).resizable("instance"),
          o = that.options,
          os = that.originalSize,
          op = that.originalPosition,
          delta = {
        height: that.size.height - os.height || 0,
        width: that.size.width - os.width || 0,
        top: that.position.top - op.top || 0,
        left: that.position.left - op.left || 0
      };
      $(o.alsoResize).each(function () {
        var el = $(this),
            start = $(this).data("ui-resizable-alsoresize"),
            style = {},
            css = el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        $.each(css, function (i, prop) {
          var sum = (start[prop] || 0) + (delta[prop] || 0);

          if (sum && sum >= 0) {
            style[prop] = sum || null;
          }
        });
        el.css(style);
      });
    },
    stop: function stop() {
      $(this).removeData("ui-resizable-alsoresize");
    }
  });
  $.ui.plugin.add("resizable", "ghost", {
    start: function start() {
      var that = $(this).resizable("instance"),
          cs = that.size;
      that.ghost = that.originalElement.clone();
      that.ghost.css({
        opacity: 0.25,
        display: "block",
        position: "relative",
        height: cs.height,
        width: cs.width,
        margin: 0,
        left: 0,
        top: 0
      });

      that._addClass(that.ghost, "ui-resizable-ghost"); // DEPRECATED
      // TODO: remove after 1.12


      if ($.uiBackCompat !== false && typeof that.options.ghost === "string") {
        // Ghost option
        that.ghost.addClass(this.options.ghost);
      }

      that.ghost.appendTo(that.helper);
    },
    resize: function resize() {
      var that = $(this).resizable("instance");

      if (that.ghost) {
        that.ghost.css({
          position: "relative",
          height: that.size.height,
          width: that.size.width
        });
      }
    },
    stop: function stop() {
      var that = $(this).resizable("instance");

      if (that.ghost && that.helper) {
        that.helper.get(0).removeChild(that.ghost.get(0));
      }
    }
  });
  $.ui.plugin.add("resizable", "grid", {
    resize: function resize() {
      var outerDimensions,
          that = $(this).resizable("instance"),
          o = that.options,
          cs = that.size,
          os = that.originalSize,
          op = that.originalPosition,
          a = that.axis,
          grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid,
          gridX = grid[0] || 1,
          gridY = grid[1] || 1,
          ox = Math.round((cs.width - os.width) / gridX) * gridX,
          oy = Math.round((cs.height - os.height) / gridY) * gridY,
          newWidth = os.width + ox,
          newHeight = os.height + oy,
          isMaxWidth = o.maxWidth && o.maxWidth < newWidth,
          isMaxHeight = o.maxHeight && o.maxHeight < newHeight,
          isMinWidth = o.minWidth && o.minWidth > newWidth,
          isMinHeight = o.minHeight && o.minHeight > newHeight;
      o.grid = grid;

      if (isMinWidth) {
        newWidth += gridX;
      }

      if (isMinHeight) {
        newHeight += gridY;
      }

      if (isMaxWidth) {
        newWidth -= gridX;
      }

      if (isMaxHeight) {
        newHeight -= gridY;
      }

      if (/^(se|s|e)$/.test(a)) {
        that.size.width = newWidth;
        that.size.height = newHeight;
      } else if (/^(ne)$/.test(a)) {
        that.size.width = newWidth;
        that.size.height = newHeight;
        that.position.top = op.top - oy;
      } else if (/^(sw)$/.test(a)) {
        that.size.width = newWidth;
        that.size.height = newHeight;
        that.position.left = op.left - ox;
      } else {
        if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
          outerDimensions = that._getPaddingPlusBorderDimensions(this);
        }

        if (newHeight - gridY > 0) {
          that.size.height = newHeight;
          that.position.top = op.top - oy;
        } else {
          newHeight = gridY - outerDimensions.height;
          that.size.height = newHeight;
          that.position.top = op.top + os.height - newHeight;
        }

        if (newWidth - gridX > 0) {
          that.size.width = newWidth;
          that.position.left = op.left - ox;
        } else {
          newWidth = gridX - outerDimensions.width;
          that.size.width = newWidth;
          that.position.left = op.left + os.width - newWidth;
        }
      }
    }
  });
  return $.ui.resizable;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/sortable.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/sortable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js"), __webpack_require__(/*! ../data */ "./node_modules/jquery-ui/ui/data.js"), __webpack_require__(/*! ../ie */ "./node_modules/jquery-ui/ui/ie.js"), __webpack_require__(/*! ../scroll-parent */ "./node_modules/jquery-ui/ui/scroll-parent.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  return $.widget("ui.sortable", $.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: false,
    options: {
      appendTo: "parent",
      axis: false,
      connectWith: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      dropOnEmpty: true,
      forcePlaceholderSize: false,
      forceHelperSize: false,
      grid: false,
      handle: false,
      helper: "original",
      items: "> *",
      opacity: false,
      placeholder: false,
      revert: false,
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1000,
      // Callbacks
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(x, reference, size) {
      return x >= reference && x < reference + size;
    },
    _isFloating: function _isFloating(item) {
      return /left|right/.test(item.css("float")) || /inline|table-cell/.test(item.css("display"));
    },
    _create: function _create() {
      this.containerCache = {};

      this._addClass("ui-sortable"); //Get the items


      this.refresh(); //Let's determine the parent's offset

      this.offset = this.element.offset(); //Initialize mouse events for interaction

      this._mouseInit();

      this._setHandleClassName(); //We're ready to go


      this.ready = true;
    },
    _setOption: function _setOption(key, value) {
      this._super(key, value);

      if (key === "handle") {
        this._setHandleClassName();
      }
    },
    _setHandleClassName: function _setHandleClassName() {
      var that = this;

      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");

      $.each(this.items, function () {
        that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      for (var i = this.items.length - 1; i >= 0; i--) {
        this.items[i].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(event, overrideHandle) {
      var currentItem = null,
          validHandle = false,
          that = this;

      if (this.reverting) {
        return false;
      }

      if (this.options.disabled || this.options.type === "static") {
        return false;
      } //We have to refresh the items data once first


      this._refreshItems(event); //Find out if the clicked node (or one of its parents) is a actual item in this.items


      $(event.target).parents().each(function () {
        if ($.data(this, that.widgetName + "-item") === that) {
          currentItem = $(this);
          return false;
        }
      });

      if ($.data(event.target, that.widgetName + "-item") === that) {
        currentItem = $(event.target);
      }

      if (!currentItem) {
        return false;
      }

      if (this.options.handle && !overrideHandle) {
        $(this.options.handle, currentItem).find("*").addBack().each(function () {
          if (this === event.target) {
            validHandle = true;
          }
        });

        if (!validHandle) {
          return false;
        }
      }

      this.currentItem = currentItem;

      this._removeCurrentsFromItems();

      return true;
    },
    _mouseStart: function _mouseStart(event, overrideHandle, noActivation) {
      var i,
          body,
          o = this.options;
      this.currentContainer = this; //We only need to call refreshPositions, because the refreshItems call has been moved to
      // mouseCapture

      this.refreshPositions(); //Create and append the visible helper

      this.helper = this._createHelper(event); //Cache the helper size

      this._cacheHelperProportions();
      /*
       * - Position generation -
       * This block generates everything position related - it's the core of draggables.
       */
      //Cache the margins of the original element


      this._cacheMargins(); //Get the next scrolling parent


      this.scrollParent = this.helper.scrollParent(); //The element's absolute position on the page minus margins

      this.offset = this.currentItem.offset();
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      };
      $.extend(this.offset, {
        click: {
          //Where the click happened, relative to the element
          left: event.pageX - this.offset.left,
          top: event.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        // This is a relative to absolute position minus the actual position calculation -
        // only used for relative positioned helper
        relative: this._getRelativeOffset()
      }); // Only after we got the offset, we can change the helper's position to absolute
      // TODO: Still need to figure out a way to make relative sorting possible

      this.helper.css("position", "absolute");
      this.cssPosition = this.helper.css("position"); //Generate the original position

      this.originalPosition = this._generatePosition(event);
      this.originalPageX = event.pageX;
      this.originalPageY = event.pageY; //Adjust the mouse offset relative to the helper if "cursorAt" is supplied

      o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt); //Cache the former DOM position

      this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }; // If the helper is not the original, hide the original so it's not playing any role during
      // the drag, won't cause anything bad this way

      if (this.helper[0] !== this.currentItem[0]) {
        this.currentItem.hide();
      } //Create the placeholder


      this._createPlaceholder(); //Set a containment if given in the options


      if (o.containment) {
        this._setContainment();
      }

      if (o.cursor && o.cursor !== "auto") {
        // cursor option
        body = this.document.find("body"); // Support: IE

        this.storedCursor = body.css("cursor");
        body.css("cursor", o.cursor);
        this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
      }

      if (o.opacity) {
        // opacity option
        if (this.helper.css("opacity")) {
          this._storedOpacity = this.helper.css("opacity");
        }

        this.helper.css("opacity", o.opacity);
      }

      if (o.zIndex) {
        // zIndex option
        if (this.helper.css("zIndex")) {
          this._storedZIndex = this.helper.css("zIndex");
        }

        this.helper.css("zIndex", o.zIndex);
      } //Prepare scrolling


      if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
        this.overflowOffset = this.scrollParent.offset();
      } //Call callbacks


      this._trigger("start", event, this._uiHash()); //Recache the helper size


      if (!this._preserveHelperProportions) {
        this._cacheHelperProportions();
      } //Post "activate" events to possible containers


      if (!noActivation) {
        for (i = this.containers.length - 1; i >= 0; i--) {
          this.containers[i]._trigger("activate", event, this._uiHash(this));
        }
      } //Prepare possible droppables


      if ($.ui.ddmanager) {
        $.ui.ddmanager.current = this;
      }

      if ($.ui.ddmanager && !o.dropBehaviour) {
        $.ui.ddmanager.prepareOffsets(this, event);
      }

      this.dragging = true;

      this._addClass(this.helper, "ui-sortable-helper"); // Execute the drag once - this causes the helper not to be visiblebefore getting its
      // correct position


      this._mouseDrag(event);

      return true;
    },
    _mouseDrag: function _mouseDrag(event) {
      var i,
          item,
          itemElement,
          intersection,
          o = this.options,
          scrolled = false; //Compute the helpers position

      this.position = this._generatePosition(event);
      this.positionAbs = this._convertPositionTo("absolute");

      if (!this.lastPositionAbs) {
        this.lastPositionAbs = this.positionAbs;
      } //Do scrolling


      if (this.options.scroll) {
        if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
          if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
            this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
          } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
            this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
          }

          if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
            this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
          } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
            this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
          }
        } else {
          if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
            scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
          } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
            scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
          }

          if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
            scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
          } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
            scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
          }
        }

        if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
          $.ui.ddmanager.prepareOffsets(this, event);
        }
      } //Regenerate the absolute position used for position checks


      this.positionAbs = this._convertPositionTo("absolute"); //Set the helper position

      if (!this.options.axis || this.options.axis !== "y") {
        this.helper[0].style.left = this.position.left + "px";
      }

      if (!this.options.axis || this.options.axis !== "x") {
        this.helper[0].style.top = this.position.top + "px";
      } //Rearrange


      for (i = this.items.length - 1; i >= 0; i--) {
        //Cache variables and intersection, continue if no intersection
        item = this.items[i];
        itemElement = item.item[0];
        intersection = this._intersectsWithPointer(item);

        if (!intersection) {
          continue;
        } // Only put the placeholder inside the current Container, skip all
        // items from other containers. This works because when moving
        // an item from one container to another the
        // currentContainer is switched before the placeholder is moved.
        //
        // Without this, moving items in "sub-sortables" can cause
        // the placeholder to jitter between the outer and inner container.


        if (item.instance !== this.currentContainer) {
          continue;
        } // Cannot intersect with itself
        // no useless actions that have been done before
        // no action if the item moved is the parent of the item checked


        if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) && (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)) {
          this.direction = intersection === 1 ? "down" : "up";

          if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
            this._rearrange(event, item);
          } else {
            break;
          }

          this._trigger("change", event, this._uiHash());

          break;
        }
      } //Post events to containers


      this._contactContainers(event); //Interconnect with droppables


      if ($.ui.ddmanager) {
        $.ui.ddmanager.drag(this, event);
      } //Call callbacks


      this._trigger("sort", event, this._uiHash());

      this.lastPositionAbs = this.positionAbs;
      return false;
    },
    _mouseStop: function _mouseStop(event, noPropagation) {
      if (!event) {
        return;
      } //If we are using droppables, inform the manager about the drop


      if ($.ui.ddmanager && !this.options.dropBehaviour) {
        $.ui.ddmanager.drop(this, event);
      }

      if (this.options.revert) {
        var that = this,
            cur = this.placeholder.offset(),
            axis = this.options.axis,
            animation = {};

        if (!axis || axis === "x") {
          animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
        }

        if (!axis || axis === "y") {
          animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
        }

        this.reverting = true;
        $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function () {
          that._clear(event);
        });
      } else {
        this._clear(event, noPropagation);
      }

      return false;
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp(new $.Event("mouseup", {
          target: null
        }));

        if (this.options.helper === "original") {
          this.currentItem.css(this._storedCSS);

          this._removeClass(this.currentItem, "ui-sortable-helper");
        } else {
          this.currentItem.show();
        } //Post deactivating events to containers


        for (var i = this.containers.length - 1; i >= 0; i--) {
          this.containers[i]._trigger("deactivate", null, this._uiHash(this));

          if (this.containers[i].containerCache.over) {
            this.containers[i]._trigger("out", null, this._uiHash(this));

            this.containers[i].containerCache.over = 0;
          }
        }
      }

      if (this.placeholder) {
        //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
        // it unbinds ALL events from the original node!
        if (this.placeholder[0].parentNode) {
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
        }

        if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
          this.helper.remove();
        }

        $.extend(this, {
          helper: null,
          dragging: false,
          reverting: false,
          _noFinalSort: null
        });

        if (this.domPosition.prev) {
          $(this.domPosition.prev).after(this.currentItem);
        } else {
          $(this.domPosition.parent).prepend(this.currentItem);
        }
      }

      return this;
    },
    serialize: function serialize(o) {
      var items = this._getItemsAsjQuery(o && o.connected),
          str = [];

      o = o || {};
      $(items).each(function () {
        var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[\-=_](.+)/);

        if (res) {
          str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
        }
      });

      if (!str.length && o.key) {
        str.push(o.key + "=");
      }

      return str.join("&");
    },
    toArray: function toArray(o) {
      var items = this._getItemsAsjQuery(o && o.connected),
          ret = [];

      o = o || {};
      items.each(function () {
        ret.push($(o.item || this).attr(o.attribute || "id") || "");
      });
      return ret;
    },

    /* Be careful with the following core functions */
    _intersectsWith: function _intersectsWith(item) {
      var x1 = this.positionAbs.left,
          x2 = x1 + this.helperProportions.width,
          y1 = this.positionAbs.top,
          y2 = y1 + this.helperProportions.height,
          l = item.left,
          r = l + item.width,
          t = item.top,
          b = t + item.height,
          dyClick = this.offset.click.top,
          dxClick = this.offset.click.left,
          isOverElementHeight = this.options.axis === "x" || y1 + dyClick > t && y1 + dyClick < b,
          isOverElementWidth = this.options.axis === "y" || x1 + dxClick > l && x1 + dxClick < r,
          isOverElement = isOverElementHeight && isOverElementWidth;

      if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"]) {
        return isOverElement;
      } else {
        return l < x1 + this.helperProportions.width / 2 && // Right Half
        x2 - this.helperProportions.width / 2 < r && // Left Half
        t < y1 + this.helperProportions.height / 2 && // Bottom Half
        y2 - this.helperProportions.height / 2 < b; // Top Half
      }
    },
    _intersectsWithPointer: function _intersectsWithPointer(item) {
      var verticalDirection,
          horizontalDirection,
          isOverElementHeight = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
          isOverElementWidth = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
          isOverElement = isOverElementHeight && isOverElementWidth;

      if (!isOverElement) {
        return false;
      }

      verticalDirection = this._getDragVerticalDirection();
      horizontalDirection = this._getDragHorizontalDirection();
      return this.floating ? horizontalDirection === "right" || verticalDirection === "down" ? 2 : 1 : verticalDirection && (verticalDirection === "down" ? 2 : 1);
    },
    _intersectsWithSides: function _intersectsWithSides(item) {
      var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height),
          isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width),
          verticalDirection = this._getDragVerticalDirection(),
          horizontalDirection = this._getDragHorizontalDirection();

      if (this.floating && horizontalDirection) {
        return horizontalDirection === "right" && isOverRightHalf || horizontalDirection === "left" && !isOverRightHalf;
      } else {
        return verticalDirection && (verticalDirection === "down" && isOverBottomHalf || verticalDirection === "up" && !isOverBottomHalf);
      }
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var delta = this.positionAbs.top - this.lastPositionAbs.top;
      return delta !== 0 && (delta > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var delta = this.positionAbs.left - this.lastPositionAbs.left;
      return delta !== 0 && (delta > 0 ? "right" : "left");
    },
    refresh: function refresh(event) {
      this._refreshItems(event);

      this._setHandleClassName();

      this.refreshPositions();
      return this;
    },
    _connectWith: function _connectWith() {
      var options = this.options;
      return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(connected) {
      var i,
          j,
          cur,
          inst,
          items = [],
          queries = [],
          connectWith = this._connectWith();

      if (connectWith && connected) {
        for (i = connectWith.length - 1; i >= 0; i--) {
          cur = $(connectWith[i], this.document[0]);

          for (j = cur.length - 1; j >= 0; j--) {
            inst = $.data(cur[j], this.widgetFullName);

            if (inst && inst !== this && !inst.options.disabled) {
              queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
            }
          }
        }
      }

      queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

      function addItems() {
        items.push(this);
      }

      for (i = queries.length - 1; i >= 0; i--) {
        queries[i][0].each(addItems);
      }

      return $(items);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = $.grep(this.items, function (item) {
        for (var j = 0; j < list.length; j++) {
          if (list[j] === item.item[0]) {
            return false;
          }
        }

        return true;
      });
    },
    _refreshItems: function _refreshItems(event) {
      this.items = [];
      this.containers = [this];

      var i,
          j,
          cur,
          inst,
          targetData,
          _queries,
          item,
          queriesLength,
          items = this.items,
          queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
        item: this.currentItem
      }) : $(this.options.items, this.element), this]],
          connectWith = this._connectWith(); //Shouldn't be run the first time through due to massive slow-down


      if (connectWith && this.ready) {
        for (i = connectWith.length - 1; i >= 0; i--) {
          cur = $(connectWith[i], this.document[0]);

          for (j = cur.length - 1; j >= 0; j--) {
            inst = $.data(cur[j], this.widgetFullName);

            if (inst && inst !== this && !inst.options.disabled) {
              queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
                item: this.currentItem
              }) : $(inst.options.items, inst.element), inst]);
              this.containers.push(inst);
            }
          }
        }
      }

      for (i = queries.length - 1; i >= 0; i--) {
        targetData = queries[i][1];
        _queries = queries[i][0];

        for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
          item = $(_queries[j]); // Data for target checking (mouse manager)

          item.data(this.widgetName + "-item", targetData);
          items.push({
            item: item,
            instance: targetData,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(fast) {
      // Determine whether items are being displayed horizontally
      this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false; //This has to be redone because due to the item being moved out/into the offsetParent,
      // the offsetParent's position will change

      if (this.offsetParent && this.helper) {
        this.offset.parent = this._getParentOffset();
      }

      var i, item, t, p;

      for (i = this.items.length - 1; i >= 0; i--) {
        item = this.items[i]; //We ignore calculating positions of all connected containers when we're not over them

        if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
          continue;
        }

        t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

        if (!fast) {
          item.width = t.outerWidth();
          item.height = t.outerHeight();
        }

        p = t.offset();
        item.left = p.left;
        item.top = p.top;
      }

      if (this.options.custom && this.options.custom.refreshContainers) {
        this.options.custom.refreshContainers.call(this);
      } else {
        for (i = this.containers.length - 1; i >= 0; i--) {
          p = this.containers[i].element.offset();
          this.containers[i].containerCache.left = p.left;
          this.containers[i].containerCache.top = p.top;
          this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
          this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        }
      }

      return this;
    },
    _createPlaceholder: function _createPlaceholder(that) {
      that = that || this;
      var className,
          o = that.options;

      if (!o.placeholder || o.placeholder.constructor === String) {
        className = o.placeholder;
        o.placeholder = {
          element: function element() {
            var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                element = $("<" + nodeName + ">", that.document[0]);

            that._addClass(element, "ui-sortable-placeholder", className || that.currentItem[0].className)._removeClass(element, "ui-sortable-helper");

            if (nodeName === "tbody") {
              that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $("<tr>", that.document[0]).appendTo(element));
            } else if (nodeName === "tr") {
              that._createTrPlaceholder(that.currentItem, element);
            } else if (nodeName === "img") {
              element.attr("src", that.currentItem.attr("src"));
            }

            if (!className) {
              element.css("visibility", "hidden");
            }

            return element;
          },
          update: function update(container, p) {
            // 1. If a className is set as 'placeholder option, we don't force sizes -
            // the class is responsible for that
            // 2. The option 'forcePlaceholderSize can be enabled to force it even if a
            // class name is specified
            if (className && !o.forcePlaceholderSize) {
              return;
            } //If the element doesn't have a actual height by itself (without styles coming
            // from a stylesheet), it receives the inline height from the dragged item


            if (!p.height()) {
              p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
            }

            if (!p.width()) {
              p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
            }
          }
        };
      } //Create the placeholder


      that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem)); //Append it after the actual current item

      that.currentItem.after(that.placeholder); //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)

      o.placeholder.update(that, that.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(sourceTr, targetTr) {
      var that = this;
      sourceTr.children().each(function () {
        $("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(targetTr);
      });
    },
    _contactContainers: function _contactContainers(event) {
      var i,
          j,
          dist,
          itemWithLeastDistance,
          posProperty,
          sizeProperty,
          cur,
          nearBottom,
          floating,
          axis,
          innermostContainer = null,
          innermostIndex = null; // Get innermost container that intersects with item

      for (i = this.containers.length - 1; i >= 0; i--) {
        // Never consider a container that's located within the item itself
        if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
          continue;
        }

        if (this._intersectsWith(this.containers[i].containerCache)) {
          // If we've already found a container and it's more "inner" than this, then continue
          if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
            continue;
          }

          innermostContainer = this.containers[i];
          innermostIndex = i;
        } else {
          // container doesn't intersect. trigger "out" event if necessary
          if (this.containers[i].containerCache.over) {
            this.containers[i]._trigger("out", event, this._uiHash(this));

            this.containers[i].containerCache.over = 0;
          }
        }
      } // If no intersecting containers found, return


      if (!innermostContainer) {
        return;
      } // Move the item into the container if it's not there already


      if (this.containers.length === 1) {
        if (!this.containers[innermostIndex].containerCache.over) {
          this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));

          this.containers[innermostIndex].containerCache.over = 1;
        }
      } else {
        // When entering a new container, we will find the item with the least distance and
        // append our item near it
        dist = 10000;
        itemWithLeastDistance = null;
        floating = innermostContainer.floating || this._isFloating(this.currentItem);
        posProperty = floating ? "left" : "top";
        sizeProperty = floating ? "width" : "height";
        axis = floating ? "pageX" : "pageY";

        for (j = this.items.length - 1; j >= 0; j--) {
          if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
            continue;
          }

          if (this.items[j].item[0] === this.currentItem[0]) {
            continue;
          }

          cur = this.items[j].item.offset()[posProperty];
          nearBottom = false;

          if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
            nearBottom = true;
          }

          if (Math.abs(event[axis] - cur) < dist) {
            dist = Math.abs(event[axis] - cur);
            itemWithLeastDistance = this.items[j];
            this.direction = nearBottom ? "up" : "down";
          }
        } //Check if dropOnEmpty is enabled


        if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
          return;
        }

        if (this.currentContainer === this.containers[innermostIndex]) {
          if (!this.currentContainer.containerCache.over) {
            this.containers[innermostIndex]._trigger("over", event, this._uiHash());

            this.currentContainer.containerCache.over = 1;
          }

          return;
        }

        itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);

        this._trigger("change", event, this._uiHash());

        this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));

        this.currentContainer = this.containers[innermostIndex]; //Update the placeholder

        this.options.placeholder.update(this.currentContainer, this.placeholder);

        this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));

        this.containers[innermostIndex].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(event) {
      var o = this.options,
          helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : o.helper === "clone" ? this.currentItem.clone() : this.currentItem; //Add the helper to the DOM if that didn't happen already

      if (!helper.parents("body").length) {
        $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
      }

      if (helper[0] === this.currentItem[0]) {
        this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left")
        };
      }

      if (!helper[0].style.width || o.forceHelperSize) {
        helper.width(this.currentItem.width());
      }

      if (!helper[0].style.height || o.forceHelperSize) {
        helper.height(this.currentItem.height());
      }

      return helper;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(obj) {
      if (typeof obj === "string") {
        obj = obj.split(" ");
      }

      if ($.isArray(obj)) {
        obj = {
          left: +obj[0],
          top: +obj[1] || 0
        };
      }

      if ("left" in obj) {
        this.offset.click.left = obj.left + this.margins.left;
      }

      if ("right" in obj) {
        this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
      }

      if ("top" in obj) {
        this.offset.click.top = obj.top + this.margins.top;
      }

      if ("bottom" in obj) {
        this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
      }
    },
    _getParentOffset: function _getParentOffset() {
      //Get the offsetParent and cache its position
      this.offsetParent = this.helper.offsetParent();
      var po = this.offsetParent.offset(); // This is a special case where we need to modify a offset calculated on start, since the
      // following happened:
      // 1. The position of the helper is absolute, so it's position is calculated based on the
      // next positioned parent
      // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
      // the document, which means that the scroll is included in the initial calculation of the
      // offset of the parent, and never recalculated upon drag

      if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
        po.left += this.scrollParent.scrollLeft();
        po.top += this.scrollParent.scrollTop();
      } // This needs to be actually done for all browsers, since pageX/pageY includes this
      // information with an ugly IE fix


      if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie) {
        po = {
          top: 0,
          left: 0
        };
      }

      return {
        top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition === "relative") {
        var p = this.currentItem.position();
        return {
          top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      } else {
        return {
          top: 0,
          left: 0
        };
      }
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var ce,
          co,
          over,
          o = this.options;

      if (o.containment === "parent") {
        o.containment = this.helper[0].parentNode;
      }

      if (o.containment === "document" || o.containment === "window") {
        this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (o.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
      }

      if (!/^(document|window|parent)$/.test(o.containment)) {
        ce = $(o.containment)[0];
        co = $(o.containment).offset();
        over = $(ce).css("overflow") !== "hidden";
        this.containment = [co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
      }
    },
    _convertPositionTo: function _convertPositionTo(d, pos) {
      if (!pos) {
        pos = this.position;
      }

      var mod = d === "absolute" ? 1 : -1,
          scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
      return {
        top: // The absolute mouse position
        pos.top + // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.top * mod + // The offsetParent's offset without borders (offset + border)
        this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
        left: // The absolute mouse position
        pos.left + // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.left * mod + // The offsetParent's offset without borders (offset + border)
        this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
      };
    },
    _generatePosition: function _generatePosition(event) {
      var top,
          left,
          o = this.options,
          pageX = event.pageX,
          pageY = event.pageY,
          scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName); // This is another very weird special case that only happens for relative elements:
      // 1. If the css position is relative
      // 2. and the scroll parent is the document or similar to the offset parent
      // we have to refresh the relative offset during the scroll so there are no jumps

      if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
        this.offset.relative = this._getRelativeOffset();
      }
      /*
       * - Position constraining -
       * Constrain the position to a mix of grid, containment.
       */


      if (this.originalPosition) {
        //If we are not dragging yet, we won't check for options
        if (this.containment) {
          if (event.pageX - this.offset.click.left < this.containment[0]) {
            pageX = this.containment[0] + this.offset.click.left;
          }

          if (event.pageY - this.offset.click.top < this.containment[1]) {
            pageY = this.containment[1] + this.offset.click.top;
          }

          if (event.pageX - this.offset.click.left > this.containment[2]) {
            pageX = this.containment[2] + this.offset.click.left;
          }

          if (event.pageY - this.offset.click.top > this.containment[3]) {
            pageY = this.containment[3] + this.offset.click.top;
          }
        }

        if (o.grid) {
          top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
          pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
          left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
          pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
        }
      }

      return {
        top: // The absolute mouse position
        pageY - // Click offset (relative to the element)
        this.offset.click.top - // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.top - // The offsetParent's offset without borders (offset + border)
        this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
        left: // The absolute mouse position
        pageX - // Click offset (relative to the element)
        this.offset.click.left - // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.left - // The offsetParent's offset without borders (offset + border)
        this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
      };
    },
    _rearrange: function _rearrange(event, i, a, hardRefresh) {
      a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? i.item[0] : i.item[0].nextSibling); //Various things done here to improve the performance:
      // 1. we create a setTimeout, that calls refreshPositions
      // 2. on the instance, we have a counter variable, that get's higher after every append
      // 3. on the local scope, we copy the counter variable, and check in the timeout,
      // if it's still the same
      // 4. this lets only the last addition to the timeout stack through

      this.counter = this.counter ? ++this.counter : 1;
      var counter = this.counter;

      this._delay(function () {
        if (counter === this.counter) {
          //Precompute after each DOM insertion, NOT on mousemove
          this.refreshPositions(!hardRefresh);
        }
      });
    },
    _clear: function _clear(event, noPropagation) {
      this.reverting = false; // We delay all events that have to be triggered to after the point where the placeholder
      // has been removed and everything else normalized again

      var i,
          delayedTriggers = []; // We first have to update the dom position of the actual currentItem
      // Note: don't do it if the current item is already removed (by a user), or it gets
      // reappended (see #4088)

      if (!this._noFinalSort && this.currentItem.parent().length) {
        this.placeholder.before(this.currentItem);
      }

      this._noFinalSort = null;

      if (this.helper[0] === this.currentItem[0]) {
        for (i in this._storedCSS) {
          if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
            this._storedCSS[i] = "";
          }
        }

        this.currentItem.css(this._storedCSS);

        this._removeClass(this.currentItem, "ui-sortable-helper");
      } else {
        this.currentItem.show();
      }

      if (this.fromOutside && !noPropagation) {
        delayedTriggers.push(function (event) {
          this._trigger("receive", event, this._uiHash(this.fromOutside));
        });
      }

      if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
        // Trigger update callback if the DOM position has changed
        delayedTriggers.push(function (event) {
          this._trigger("update", event, this._uiHash());
        });
      } // Check if the items Container has Changed and trigger appropriate
      // events.


      if (this !== this.currentContainer) {
        if (!noPropagation) {
          delayedTriggers.push(function (event) {
            this._trigger("remove", event, this._uiHash());
          });
          delayedTriggers.push(function (c) {
            return function (event) {
              c._trigger("receive", event, this._uiHash(this));
            };
          }.call(this, this.currentContainer));
          delayedTriggers.push(function (c) {
            return function (event) {
              c._trigger("update", event, this._uiHash(this));
            };
          }.call(this, this.currentContainer));
        }
      } //Post events to containers


      function delayEvent(type, instance, container) {
        return function (event) {
          container._trigger(type, event, instance._uiHash(instance));
        };
      }

      for (i = this.containers.length - 1; i >= 0; i--) {
        if (!noPropagation) {
          delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
        }

        if (this.containers[i].containerCache.over) {
          delayedTriggers.push(delayEvent("out", this, this.containers[i]));
          this.containers[i].containerCache.over = 0;
        }
      } //Do what was originally in plugins


      if (this.storedCursor) {
        this.document.find("body").css("cursor", this.storedCursor);
        this.storedStylesheet.remove();
      }

      if (this._storedOpacity) {
        this.helper.css("opacity", this._storedOpacity);
      }

      if (this._storedZIndex) {
        this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
      }

      this.dragging = false;

      if (!noPropagation) {
        this._trigger("beforeStop", event, this._uiHash());
      } //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
      // it unbinds ALL events from the original node!


      this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

      if (!this.cancelHelperRemoval) {
        if (this.helper[0] !== this.currentItem[0]) {
          this.helper.remove();
        }

        this.helper = null;
      }

      if (!noPropagation) {
        for (i = 0; i < delayedTriggers.length; i++) {
          // Trigger all delayed events
          delayedTriggers[i].call(this, event);
        }

        this._trigger("stop", event, this._uiHash());
      }

      this.fromOutside = false;
      return !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
        this.cancel();
      }
    },
    _uiHash: function _uiHash(_inst) {
      var inst = _inst || this;
      return {
        helper: inst.helper,
        placeholder: inst.placeholder || $([]),
        position: inst.position,
        originalPosition: inst.originalPosition,
        offset: inst.positionAbs,
        item: inst.currentItem,
        sender: _inst ? _inst.element : null
      };
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/tabs.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/tabs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../escape-selector */ "./node_modules/jquery-ui/ui/escape-selector.js"), __webpack_require__(/*! ../keycode */ "./node_modules/jquery-ui/ui/keycode.js"), __webpack_require__(/*! ../safe-active-element */ "./node_modules/jquery-ui/ui/safe-active-element.js"), __webpack_require__(/*! ../unique-id */ "./node_modules/jquery-ui/ui/unique-id.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: false,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      // Callbacks
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function () {
      var rhash = /#.*$/;
      return function (anchor) {
        var anchorUrl, locationUrl;
        anchorUrl = anchor.href.replace(rhash, "");
        locationUrl = location.href.replace(rhash, ""); // Decoding may throw an error if the URL isn't UTF-8 (#9518)

        try {
          anchorUrl = decodeURIComponent(anchorUrl);
        } catch (error) {}

        try {
          locationUrl = decodeURIComponent(locationUrl);
        } catch (error) {}

        return anchor.hash.length > 1 && anchorUrl === locationUrl;
      };
    }(),
    _create: function _create() {
      var that = this,
          options = this.options;
      this.running = false;

      this._addClass("ui-tabs", "ui-widget ui-widget-content");

      this._toggleClass("ui-tabs-collapsible", null, options.collapsible);

      this._processTabs();

      options.active = this._initialActive(); // Take disabling tabs via class attribute from HTML
      // into account and update option properly.

      if ($.isArray(options.disabled)) {
        options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function (li) {
          return that.tabs.index(li);
        }))).sort();
      } // Check for length avoids error when initializing empty list


      if (this.options.active !== false && this.anchors.length) {
        this.active = this._findActive(options.active);
      } else {
        this.active = $();
      }

      this._refresh();

      if (this.active.length) {
        this.load(options.active);
      }
    },
    _initialActive: function _initialActive() {
      var active = this.options.active,
          collapsible = this.options.collapsible,
          locationHash = location.hash.substring(1);

      if (active === null) {
        // check the fragment identifier in the URL
        if (locationHash) {
          this.tabs.each(function (i, tab) {
            if ($(tab).attr("aria-controls") === locationHash) {
              active = i;
              return false;
            }
          });
        } // Check for a tab marked active via a class


        if (active === null) {
          active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
        } // No active tab, set to false


        if (active === null || active === -1) {
          active = this.tabs.length ? 0 : false;
        }
      } // Handle numbers: negative, out of range


      if (active !== false) {
        active = this.tabs.index(this.tabs.eq(active));

        if (active === -1) {
          active = collapsible ? false : 0;
        }
      } // Don't allow collapsible: false and active: false


      if (!collapsible && active === false && this.anchors.length) {
        active = 0;
      }

      return active;
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        tab: this.active,
        panel: !this.active.length ? $() : this._getPanelForTab(this.active)
      };
    },
    _tabKeydown: function _tabKeydown(event) {
      var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest("li"),
          selectedIndex = this.tabs.index(focusedTab),
          goingForward = true;

      if (this._handlePageNav(event)) {
        return;
      }

      switch (event.keyCode) {
        case $.ui.keyCode.RIGHT:
        case $.ui.keyCode.DOWN:
          selectedIndex++;
          break;

        case $.ui.keyCode.UP:
        case $.ui.keyCode.LEFT:
          goingForward = false;
          selectedIndex--;
          break;

        case $.ui.keyCode.END:
          selectedIndex = this.anchors.length - 1;
          break;

        case $.ui.keyCode.HOME:
          selectedIndex = 0;
          break;

        case $.ui.keyCode.SPACE:
          // Activate only, no collapsing
          event.preventDefault();
          clearTimeout(this.activating);

          this._activate(selectedIndex);

          return;

        case $.ui.keyCode.ENTER:
          // Toggle (cancel delayed activation, allow collapsing)
          event.preventDefault();
          clearTimeout(this.activating); // Determine if we should collapse or activate

          this._activate(selectedIndex === this.options.active ? false : selectedIndex);

          return;

        default:
          return;
      } // Focus the appropriate tab, based on which key was pressed


      event.preventDefault();
      clearTimeout(this.activating);
      selectedIndex = this._focusNextTab(selectedIndex, goingForward); // Navigating with control/command key will prevent automatic activation

      if (!event.ctrlKey && !event.metaKey) {
        // Update aria-selected immediately so that AT think the tab is already selected.
        // Otherwise AT may confuse the user by stating that they need to activate the tab,
        // but the tab will already be activated by the time the announcement finishes.
        focusedTab.attr("aria-selected", "false");
        this.tabs.eq(selectedIndex).attr("aria-selected", "true");
        this.activating = this._delay(function () {
          this.option("active", selectedIndex);
        }, this.delay);
      }
    },
    _panelKeydown: function _panelKeydown(event) {
      if (this._handlePageNav(event)) {
        return;
      } // Ctrl+up moves focus to the current tab


      if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
        event.preventDefault();
        this.active.trigger("focus");
      }
    },
    // Alt+page up/down moves focus to the previous/next tab (and activates)
    _handlePageNav: function _handlePageNav(event) {
      if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
        this._activate(this._focusNextTab(this.options.active - 1, false));

        return true;
      }

      if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
        this._activate(this._focusNextTab(this.options.active + 1, true));

        return true;
      }
    },
    _findNextTab: function _findNextTab(index, goingForward) {
      var lastTabIndex = this.tabs.length - 1;

      function constrain() {
        if (index > lastTabIndex) {
          index = 0;
        }

        if (index < 0) {
          index = lastTabIndex;
        }

        return index;
      }

      while ($.inArray(constrain(), this.options.disabled) !== -1) {
        index = goingForward ? index + 1 : index - 1;
      }

      return index;
    },
    _focusNextTab: function _focusNextTab(index, goingForward) {
      index = this._findNextTab(index, goingForward);
      this.tabs.eq(index).trigger("focus");
      return index;
    },
    _setOption: function _setOption(key, value) {
      if (key === "active") {
        // _activate() will handle invalid values and update this.options
        this._activate(value);

        return;
      }

      this._super(key, value);

      if (key === "collapsible") {
        this._toggleClass("ui-tabs-collapsible", null, value); // Setting collapsible: false while collapsed; open first panel


        if (!value && this.options.active === false) {
          this._activate(0);
        }
      }

      if (key === "event") {
        this._setupEvents(value);
      }

      if (key === "heightStyle") {
        this._setupHeightStyle(value);
      }
    },
    _sanitizeSelector: function _sanitizeSelector(hash) {
      return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function refresh() {
      var options = this.options,
          lis = this.tablist.children(":has(a[href])"); // Get disabled tabs from class attribute from HTML
      // this will get converted to a boolean if needed in _refresh()

      options.disabled = $.map(lis.filter(".ui-state-disabled"), function (tab) {
        return lis.index(tab);
      });

      this._processTabs(); // Was collapsed or no tabs


      if (options.active === false || !this.anchors.length) {
        options.active = false;
        this.active = $(); // was active, but active tab is gone
      } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {
        // all remaining tabs are disabled
        if (this.tabs.length === options.disabled.length) {
          options.active = false;
          this.active = $(); // activate previous tab
        } else {
          this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
        } // was active, active tab still exists

      } else {
        // make sure active index is correct
        options.active = this.tabs.index(this.active);
      }

      this._refresh();
    },
    _refresh: function _refresh() {
      this._setOptionDisabled(this.options.disabled);

      this._setupEvents(this.options.event);

      this._setupHeightStyle(this.options.heightStyle);

      this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      });
      this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }); // Make sure one tab is in the tab order

      if (!this.active.length) {
        this.tabs.eq(0).attr("tabIndex", 0);
      } else {
        this.active.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        });

        this._addClass(this.active, "ui-tabs-active", "ui-state-active");

        this._getPanelForTab(this.active).show().attr({
          "aria-hidden": "false"
        });
      }
    },
    _processTabs: function _processTabs() {
      var that = this,
          prevTabs = this.tabs,
          prevAnchors = this.anchors,
          prevPanels = this.panels;
      this.tablist = this._getList().attr("role", "tablist");

      this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"); // Prevent users from focusing disabled tabs via click


      this.tablist.on("mousedown" + this.eventNamespace, "> li", function (event) {
        if ($(this).is(".ui-state-disabled")) {
          event.preventDefault();
        }
      }) // Support: IE <9
      // Preventing the default action in mousedown doesn't prevent IE
      // from focusing the element, so if the anchor gets focused, blur.
      // We don't have to worry about focusing the previously focused
      // element since clicking on a non-focusable element should focus
      // the body anyway.
      .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        if ($(this).closest("li").is(".ui-state-disabled")) {
          this.blur();
        }
      });
      this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      });

      this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");

      this.anchors = this.tabs.map(function () {
        return $("a", this)[0];
      }).attr({
        role: "presentation",
        tabIndex: -1
      });

      this._addClass(this.anchors, "ui-tabs-anchor");

      this.panels = $();
      this.anchors.each(function (i, anchor) {
        var selector,
            panel,
            panelId,
            anchorId = $(anchor).uniqueId().attr("id"),
            tab = $(anchor).closest("li"),
            originalAriaControls = tab.attr("aria-controls"); // Inline tab

        if (that._isLocal(anchor)) {
          selector = anchor.hash;
          panelId = selector.substring(1);
          panel = that.element.find(that._sanitizeSelector(selector)); // remote tab
        } else {
          // If the tab doesn't already have aria-controls,
          // generate an id by using a throw-away element
          panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id;
          selector = "#" + panelId;
          panel = that.element.find(selector);

          if (!panel.length) {
            panel = that._createPanel(panelId);
            panel.insertAfter(that.panels[i - 1] || that.tablist);
          }

          panel.attr("aria-live", "polite");
        }

        if (panel.length) {
          that.panels = that.panels.add(panel);
        }

        if (originalAriaControls) {
          tab.data("ui-tabs-aria-controls", originalAriaControls);
        }

        tab.attr({
          "aria-controls": panelId,
          "aria-labelledby": anchorId
        });
        panel.attr("aria-labelledby", anchorId);
      });
      this.panels.attr("role", "tabpanel");

      this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"); // Avoid memory leaks (#10056)


      if (prevTabs) {
        this._off(prevTabs.not(this.tabs));

        this._off(prevAnchors.not(this.anchors));

        this._off(prevPanels.not(this.panels));
      }
    },
    // Allow overriding how to find the list for rare usage scenarios (#7715)
    _getList: function _getList() {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function _createPanel(id) {
      return $("<div>").attr("id", id).data("ui-tabs-destroy", true);
    },
    _setOptionDisabled: function _setOptionDisabled(disabled) {
      var currentItem, li, i;

      if ($.isArray(disabled)) {
        if (!disabled.length) {
          disabled = false;
        } else if (disabled.length === this.anchors.length) {
          disabled = true;
        }
      } // Disable tabs


      for (i = 0; li = this.tabs[i]; i++) {
        currentItem = $(li);

        if (disabled === true || $.inArray(i, disabled) !== -1) {
          currentItem.attr("aria-disabled", "true");

          this._addClass(currentItem, null, "ui-state-disabled");
        } else {
          currentItem.removeAttr("aria-disabled");

          this._removeClass(currentItem, null, "ui-state-disabled");
        }
      }

      this.options.disabled = disabled;

      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, disabled === true);
    },
    _setupEvents: function _setupEvents(event) {
      var events = {};

      if (event) {
        $.each(event.split(" "), function (index, eventName) {
          events[eventName] = "_eventHandler";
        });
      }

      this._off(this.anchors.add(this.tabs).add(this.panels)); // Always prevent the default action, even when disabled


      this._on(true, this.anchors, {
        click: function click(event) {
          event.preventDefault();
        }
      });

      this._on(this.anchors, events);

      this._on(this.tabs, {
        keydown: "_tabKeydown"
      });

      this._on(this.panels, {
        keydown: "_panelKeydown"
      });

      this._focusable(this.tabs);

      this._hoverable(this.tabs);
    },
    _setupHeightStyle: function _setupHeightStyle(heightStyle) {
      var maxHeight,
          parent = this.element.parent();

      if (heightStyle === "fill") {
        maxHeight = parent.height();
        maxHeight -= this.element.outerHeight() - this.element.height();
        this.element.siblings(":visible").each(function () {
          var elem = $(this),
              position = elem.css("position");

          if (position === "absolute" || position === "fixed") {
            return;
          }

          maxHeight -= elem.outerHeight(true);
        });
        this.element.children().not(this.panels).each(function () {
          maxHeight -= $(this).outerHeight(true);
        });
        this.panels.each(function () {
          $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
        }).css("overflow", "auto");
      } else if (heightStyle === "auto") {
        maxHeight = 0;
        this.panels.each(function () {
          maxHeight = Math.max(maxHeight, $(this).height("").height());
        }).height(maxHeight);
      }
    },
    _eventHandler: function _eventHandler(event) {
      var options = this.options,
          active = this.active,
          anchor = $(event.currentTarget),
          tab = anchor.closest("li"),
          clickedIsActive = tab[0] === active[0],
          collapsing = clickedIsActive && options.collapsible,
          toShow = collapsing ? $() : this._getPanelForTab(tab),
          toHide = !active.length ? $() : this._getPanelForTab(active),
          eventData = {
        oldTab: active,
        oldPanel: toHide,
        newTab: collapsing ? $() : tab,
        newPanel: toShow
      };
      event.preventDefault();

      if (tab.hasClass("ui-state-disabled") || // tab is already loading
      tab.hasClass("ui-tabs-loading") || // can't switch durning an animation
      this.running || // click on active header, but not collapsible
      clickedIsActive && !options.collapsible || // allow canceling activation
      this._trigger("beforeActivate", event, eventData) === false) {
        return;
      }

      options.active = collapsing ? false : this.tabs.index(tab);
      this.active = clickedIsActive ? $() : tab;

      if (this.xhr) {
        this.xhr.abort();
      }

      if (!toHide.length && !toShow.length) {
        $.error("jQuery UI Tabs: Mismatching fragment identifier.");
      }

      if (toShow.length) {
        this.load(this.tabs.index(tab), event);
      }

      this._toggle(event, eventData);
    },
    // Handles show/hide for selecting tabs
    _toggle: function _toggle(event, eventData) {
      var that = this,
          toShow = eventData.newPanel,
          toHide = eventData.oldPanel;
      this.running = true;

      function complete() {
        that.running = false;

        that._trigger("activate", event, eventData);
      }

      function show() {
        that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active");

        if (toShow.length && that.options.show) {
          that._show(toShow, that.options.show, complete);
        } else {
          toShow.show();
          complete();
        }
      } // Start out by hiding, then showing, then completing


      if (toHide.length && this.options.hide) {
        this._hide(toHide, this.options.hide, function () {
          that._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");

          show();
        });
      } else {
        this._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");

        toHide.hide();
        show();
      }

      toHide.attr("aria-hidden", "true");
      eventData.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }); // If we're switching tabs, remove the old tab from the tab order.
      // If we're opening from collapsed state, remove the previous tab from the tab order.
      // If we're collapsing, then keep the collapsing tab in the tab order.

      if (toShow.length && toHide.length) {
        eventData.oldTab.attr("tabIndex", -1);
      } else if (toShow.length) {
        this.tabs.filter(function () {
          return $(this).attr("tabIndex") === 0;
        }).attr("tabIndex", -1);
      }

      toShow.attr("aria-hidden", "false");
      eventData.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function _activate(index) {
      var anchor,
          active = this._findActive(index); // Trying to activate the already active panel


      if (active[0] === this.active[0]) {
        return;
      } // Trying to collapse, simulate a click on the current active header


      if (!active.length) {
        active = this.active;
      }

      anchor = active.find(".ui-tabs-anchor")[0];

      this._eventHandler({
        target: anchor,
        currentTarget: anchor,
        preventDefault: $.noop
      });
    },
    _findActive: function _findActive(index) {
      return index === false ? $() : this.tabs.eq(index);
    },
    _getIndex: function _getIndex(index) {
      // meta-function to give users option to provide a href string instead of a numerical index.
      if (typeof index === "string") {
        index = this.anchors.index(this.anchors.filter("[href$='" + $.ui.escapeSelector(index) + "']"));
      }

      return index;
    },
    _destroy: function _destroy() {
      if (this.xhr) {
        this.xhr.abort();
      }

      this.tablist.removeAttr("role").off(this.eventNamespace);
      this.anchors.removeAttr("role tabIndex").removeUniqueId();
      this.tabs.add(this.panels).each(function () {
        if ($.data(this, "ui-tabs-destroy")) {
          $(this).remove();
        } else {
          $(this).removeAttr("role tabIndex " + "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
        }
      });
      this.tabs.each(function () {
        var li = $(this),
            prev = li.data("ui-tabs-aria-controls");

        if (prev) {
          li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls");
        } else {
          li.removeAttr("aria-controls");
        }
      });
      this.panels.show();

      if (this.options.heightStyle !== "content") {
        this.panels.css("height", "");
      }
    },
    enable: function enable(index) {
      var disabled = this.options.disabled;

      if (disabled === false) {
        return;
      }

      if (index === undefined) {
        disabled = false;
      } else {
        index = this._getIndex(index);

        if ($.isArray(disabled)) {
          disabled = $.map(disabled, function (num) {
            return num !== index ? num : null;
          });
        } else {
          disabled = $.map(this.tabs, function (li, num) {
            return num !== index ? num : null;
          });
        }
      }

      this._setOptionDisabled(disabled);
    },
    disable: function disable(index) {
      var disabled = this.options.disabled;

      if (disabled === true) {
        return;
      }

      if (index === undefined) {
        disabled = true;
      } else {
        index = this._getIndex(index);

        if ($.inArray(index, disabled) !== -1) {
          return;
        }

        if ($.isArray(disabled)) {
          disabled = $.merge([index], disabled).sort();
        } else {
          disabled = [index];
        }
      }

      this._setOptionDisabled(disabled);
    },
    load: function load(index, event) {
      index = this._getIndex(index);

      var that = this,
          tab = this.tabs.eq(index),
          anchor = tab.find(".ui-tabs-anchor"),
          panel = this._getPanelForTab(tab),
          eventData = {
        tab: tab,
        panel: panel
      },
          complete = function complete(jqXHR, status) {
        if (status === "abort") {
          that.panels.stop(false, true);
        }

        that._removeClass(tab, "ui-tabs-loading");

        panel.removeAttr("aria-busy");

        if (jqXHR === that.xhr) {
          delete that.xhr;
        }
      }; // Not remote


      if (this._isLocal(anchor[0])) {
        return;
      }

      this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData)); // Support: jQuery <1.8
      // jQuery <1.8 returns false if the request is canceled in beforeSend,
      // but as of 1.8, $.ajax() always returns a jqXHR object.

      if (this.xhr && this.xhr.statusText !== "canceled") {
        this._addClass(tab, "ui-tabs-loading");

        panel.attr("aria-busy", "true");
        this.xhr.done(function (response, status, jqXHR) {
          // support: jQuery <1.8
          // http://bugs.jquery.com/ticket/11778
          setTimeout(function () {
            panel.html(response);

            that._trigger("load", event, eventData);

            complete(jqXHR, status);
          }, 1);
        }).fail(function (jqXHR, status) {
          // support: jQuery <1.8
          // http://bugs.jquery.com/ticket/11778
          setTimeout(function () {
            complete(jqXHR, status);
          }, 1);
        });
      }
    },
    _ajaxSettings: function _ajaxSettings(anchor, event, eventData) {
      var that = this;
      return {
        // Support: IE <11 only
        // Strip any hash that exists to prevent errors with the Ajax request
        url: anchor.attr("href").replace(/#.*$/, ""),
        beforeSend: function beforeSend(jqXHR, settings) {
          return that._trigger("beforeLoad", event, $.extend({
            jqXHR: jqXHR,
            ajaxSettings: settings
          }, eventData));
        }
      };
    },
    _getPanelForTab: function _getPanelForTab(tab) {
      var id = $(tab).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + id));
    }
  }); // DEPRECATED
  // TODO: Switch return back to widget declaration at top of file when this is removed

  if ($.uiBackCompat !== false) {
    // Backcompat for ui-tab class (now ui-tabs-tab)
    $.widget("ui.tabs", $.ui.tabs, {
      _processTabs: function _processTabs() {
        this._superApply(arguments);

        this._addClass(this.tabs, "ui-tab");
      }
    });
  }

  return $.ui.tabs;
});

/***/ }),

/***/ "./node_modules/jquery-ujs/src/rails.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ujs/src/rails.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, undefined) {
  /**
   * Unobtrusive scripting adapter for jQuery
   * https://github.com/rails/jquery-ujs
   *
   * Requires jQuery 1.8.0 or later.
   *
   * Released under the MIT license
   *
   */
  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ($.rails !== undefined) {
    $.error('jquery-ujs has already been loaded!');
  } // Shorthand to make it a little easier to call public rails functions from within rails.js


  var rails;
  var $document = $(document);
  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',
    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',
    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',
    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',
    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',
    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',
    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function csrfToken() {
      return $('meta[name=csrf-token]').attr('content');
    },
    // URL param that must contain the CSRF token
    csrfParam: function csrfParam() {
      return $('meta[name=csrf-param]').attr('content');
    },
    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function CSRFProtection(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },
    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function refreshCSRFTokens() {
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },
    // Triggers an event on an element and returns false if the event result is false
    fire: function fire(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },
    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function (_confirm) {
      function confirm(_x) {
        return _confirm.apply(this, arguments);
      }

      confirm.toString = function () {
        return _confirm.toString();
      };

      return confirm;
    }(function (message) {
      return confirm(message);
    }),
    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function ajax(options) {
      return $.ajax(options);
    },
    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function href(element) {
      return element[0].href;
    },
    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function isRemote(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },
    // Submits "remote" forms and links with ajax
    handleRemote: function handleRemote(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || $.ajaxSettings && $.ajaxSettings.dataType;

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray(); // memoized value from clicked submit button

          var button = element.data('ujs:submit-button');

          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }

          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET',
          data: data,
          dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function beforeSend(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }

            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function success(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function complete(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function error(xhr, status, _error) {
            element.trigger('ajax:error', [xhr, status, _error]);
          },
          crossDomain: rails.isCrossDomain(url)
        }; // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled

        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        } // Only pass url to `ajax` options if not blank


        if (url) {
          options.url = url;
        }

        return rails.ajax(options);
      } else {
        return false;
      }
    },
    // Determines if the request is a cross domain request.
    isCrossDomain: function isCrossDomain(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url; // This is a workaround to a IE bug.

        urlAnchor.href = urlAnchor.href; // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.

        return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },
    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function handleMethod(link) {
      var href = rails.href(link),
          method = link.data('method'),
          target = link.attr('target'),
          csrfToken = rails.csrfToken(),
          csrfParam = rails.csrfParam(),
          form = $('<form method="post" action="' + href + '"></form>'),
          metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) {
        form.attr('target', target);
      }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },
    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function formElements(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function disableFormElements(form) {
      rails.formElements(form, rails.disableSelector).each(function () {
        rails.disableFormElement($(this));
      });
    },
    disableFormElement: function disableFormElement(element) {
      var method, replacement;
      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function enableFormElements(form) {
      rails.formElements(form, rails.enableSelector).each(function () {
        rails.enableFormElement($(this));
      });
    },
    enableFormElement: function enableFormElement(element) {
      var method = element.is('button') ? 'html' : 'val';

      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }

      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

    /* For 'data-confirm' attribute:
       - Fires `confirm` event
       - Shows the confirmation dialog
       - Fires the `confirm:complete` event
        Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
       Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
       Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
       return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
    */
    allowAction: function allowAction(element) {
      var message = element.data('confirm'),
          answer = false,
          callback;

      if (!message) {
        return true;
      }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }

        callback = rails.fire(element, 'confirm:complete', [answer]);
      }

      return answer && callback;
    },
    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function blankInputs(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
          input,
          valueToCheck,
          radiosForNameWithNoneSelected,
          radioName,
          selector = specifiedSelector || 'input,textarea',
          requiredInputs = form.find(selector),
          checkedRadioButtonNames = {};
      requiredInputs.each(function () {
        input = $(this);

        if (input.is('input[type=radio]')) {
          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name'); // Skip if we've already seen the radio with this name.

          if (!checkedRadioButtonNames[radioName]) {
            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find('input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            } // We only need to check each name once.


            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();

          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },
    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function nonBlankInputs(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },
    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function stopEverything(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },
    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function disableElement(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state

        element.html(replacement);
      }

      element.bind('click.railsDisable', function (e) {
        // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },
    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function enableElement(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state

        element.removeData('ujs:enable-with'); // clean up cache
      }

      element.unbind('click.railsDisable'); // enable element

      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {
    $.ajaxPrefilter(function (options, originalOptions, xhr) {
      if (!options.crossDomain) {
        rails.CSRFProtection(xhr);
      }
    }); // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching

    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });
      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });
    $document.on('ajax:complete', rails.linkDisableSelector, function () {
      rails.enableElement($(this));
    });
    $document.on('ajax:complete', rails.buttonDisableSelector, function () {
      rails.enableFormElement($(this));
    });
    $document.on('click.rails', rails.linkClickSelector, function (e) {
      var link = $(this),
          method = link.data('method'),
          data = link.data('params'),
          metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);
      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) {
          return true;
        }

        var handleRemote = rails.handleRemote(link); // Response from rails.handleRemote() will either be false or a deferred object promise.

        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail(function () {
            rails.enableElement(link);
          });
        }

        return false;
      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });
    $document.on('click.rails', rails.buttonClickSelector, function (e) {
      var button = $(this);
      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);
      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);
      var handleRemote = rails.handleRemote(button); // Response from rails.handleRemote() will either be false or a deferred object promise.

      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail(function () {
          rails.enableFormElement(button);
        });
      }

      return false;
    });
    $document.on('change.rails', rails.inputChangeSelector, function (e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);
      rails.handleRemote(link);
      return false;
    });
    $document.on('submit.rails', rails.formSubmitSelector, function (e) {
      var form = $(this),
          remote = rails.isRemote(form),
          blankRequiredInputs,
          nonBlankFileInputs;
      if (!rails.allowAction(form)) return rails.stopEverything(e); // Skip other logic when required values are missing or file upload is present

      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);

          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function () {
            rails.disableFormElements(form);
          }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]); // Re-enable form elements if event bindings return false (canceling normal form submission)

          if (!aborted) {
            setTimeout(function () {
              rails.enableFormElements(form);
            }, 13);
          }

          return aborted;
        }

        rails.handleRemote(form);
        return false;
      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function () {
          rails.disableFormElements(form);
        }, 13);
      }
    });
    $document.on('click.rails', rails.formInputClickSelector, function (event) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(event); // Register the pressed submit button

      var name = button.attr('name'),
          data = name ? {
        name: name,
        value: button.val()
      } : null;
      var form = button.closest('form');

      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }

      form.data('ujs:submit-button', data); // Save attributes from button

      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });
    $document.on('ajax:send.rails', rails.formSubmitSelector, function (event) {
      if (this === event.target) rails.disableFormElements($(this));
    });
    $document.on('ajax:complete.rails', rails.formSubmitSelector, function (event) {
      if (this === event.target) rails.enableFormElements($(this));
    });
    $(function () {
      rails.refreshCSRFTokens();
    });
  }
})(jQuery);

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.5.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.5
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2020-03-14
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        if (typeof props.top === "number") {
          props.top += "px";
        }

        if (typeof props.left === "number") {
          props.left += "px";
        }

        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=active_admin-7aae3eeb127785f2e3f6.js.map
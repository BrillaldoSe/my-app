"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../tsup-config/react-import.js
var import_react;
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
    import_react = __toESM(require("react"));
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports2, module2) {
    "use strict";
    init_react_import();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// index.ts
var core_exports = {};
__export(core_exports, {
  Action: () => Action,
  ActionBar: () => ActionBar,
  AutoField: () => AutoField,
  Button: () => Button,
  Drawer: () => Drawer,
  DropZone: () => DropZone,
  FieldLabel: () => FieldLabel,
  Group: () => Group,
  IconButton: () => IconButton,
  Label: () => Label,
  Puck: () => Puck,
  Render: () => Render,
  createUsePuck: () => createUsePuck,
  migrate: () => migrate,
  overrideKeys: () => overrideKeys,
  renderContext: () => renderContext,
  resolveAllData: () => resolveAllData,
  transformProps: () => transformProps,
  usePuck: () => usePuck
});
module.exports = __toCommonJS(core_exports);
init_react_import();

// types/API/index.ts
init_react_import();

// types/API/DropZone.ts
init_react_import();

// types/API/Viewports.ts
init_react_import();

// types/index.ts
init_react_import();

// types/API/Overrides.ts
init_react_import();
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "components",
  "componentItem",
  "outline",
  "puck",
  "preview"
];

// types/AppState.tsx
init_react_import();

// types/Config.tsx
init_react_import();

// types/Data.tsx
init_react_import();

// types/Fields.ts
init_react_import();

// types/Props.tsx
init_react_import();

// types/Utils.tsx
init_react_import();

// components/ActionBar/index.tsx
init_react_import();

// lib/get-class-name-factory.ts
init_react_import();
var import_classnames = __toESM(require_classnames());
var getClassNameFactory = (rootClass, styles2, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles2[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles2[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (let modifier in modifiers) {
      prefixedModifiers[styles2[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles2[rootClass];
    return config.baseClass + (0, import_classnames.default)(__spreadValues({
      [c]: !!c
    }, prefixedModifiers));
  } else {
    return config.baseClass + styles2[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;

// css-module:D:\Puck\puck\packages\core\components\ActionBar\styles.module.css#css-module
init_react_import();
var styles_module_default = { "ActionBar": "_ActionBar_4176q_1", "ActionBar-label": "_ActionBar-label_4176q_35", "ActionBar-action": "_ActionBar-action_4176q_59", "ActionBar-group": "_ActionBar-group_4176q_75" };

// components/ActionBar/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
var ActionBar = ({
  label,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "div",
  {
    className: getClassName(),
    onClick: (e) => {
      e.stopPropagation();
    },
    children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBar.Group, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("label"), children: label }) }),
      children
    ]
  }
);
var Action = ({
  children,
  label,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "button",
  {
    type: "button",
    className: getClassName("action"),
    onClick,
    title: label,
    children
  }
);
var Group = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("group"), children });
var Label = ({ label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("label"), children: label });
ActionBar.Action = Action;
ActionBar.Label = Label;
ActionBar.Group = Group;

// components/AutoField/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\AutoField\styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "InputWrapper": "_InputWrapper_jou96_1", "Input-label": "_Input-label_jou96_9", "Input-labelIcon": "_Input-labelIcon_jou96_27", "Input-disabledIcon": "_Input-disabledIcon_jou96_41", "Input-input": "_Input-input_jou96_51", "Input": "_Input_jou96_1", "Input--readOnly": "_Input--readOnly_jou96_147", "Input-radioGroupItems": "_Input-radioGroupItems_jou96_169", "Input-radio": "_Input-radio_jou96_169", "Input-radioInner": "_Input-radioInner_jou96_203", "Input-radioInput": "_Input-radioInput_jou96_293" };

// components/AutoField/index.tsx
var import_react23 = require("react");

// components/AutoField/fields/index.tsx
init_react_import();

// components/AutoField/fields/ArrayField/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\AutoField\fields\ArrayField\styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "ArrayField": "_ArrayField_1hvyq_9", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1hvyq_25", "ArrayField-addButton": "_ArrayField-addButton_1hvyq_35", "ArrayField--hasItems": "_ArrayField--hasItems_1hvyq_65", "ArrayField-inner": "_ArrayField-inner_1hvyq_117", "ArrayFieldItem": "_ArrayFieldItem_1hvyq_133", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1hvyq_155", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1hvyq_163", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1hvyq_193", "ArrayField--addDisabled": "_ArrayField--addDisabled_1hvyq_253", "ArrayFieldItem-body": "_ArrayFieldItem-body_1hvyq_331", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1hvyq_349", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1hvyq_365", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1hvyq_377" };

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
init_react_import();
var import_react3 = require("react");

// ../../node_modules/lucide-react/dist/esm/shared/src/utils.js
init_react_import();
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// ../../node_modules/lucide-react/dist/esm/Icon.js
init_react_import();
var import_react2 = require("react");

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
init_react_import();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return (0, import_react2.createElement)(
      "svg",
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), rest),
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react3.forwardRef)(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return (0, import_react3.createElement)(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
      }, props));
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
init_react_import();
var ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
init_react_import();
var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

// ../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js
init_react_import();
var CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/copy.js
init_react_import();
var Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/corner-left-up.js
init_react_import();
var CornerLeftUp = createLucideIcon("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
init_react_import();
var EllipsisVertical = createLucideIcon("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/globe.js
init_react_import();
var Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/hash.js
init_react_import();
var Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/layers.js
init_react_import();
var Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);

// ../../node_modules/lucide-react/dist/esm/icons/layout-grid.js
init_react_import();
var LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/link.js
init_react_import();
var Link = createLucideIcon("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/list.js
init_react_import();
var List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/lock-open.js
init_react_import();
var LockOpen = createLucideIcon("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/lock.js
init_react_import();
var Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/monitor.js
init_react_import();
var Monitor = createLucideIcon("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/panel-left.js
init_react_import();
var PanelLeft = createLucideIcon("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/panel-right.js
init_react_import();
var PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/plus.js
init_react_import();
var Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/redo-2.js
init_react_import();
var Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/search.js
init_react_import();
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
init_react_import();
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
init_react_import();
var Smartphone = createLucideIcon("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/tablet.js
init_react_import();
var Tablet = createLucideIcon("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/trash.js
init_react_import();
var Trash = createLucideIcon("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/type.js
init_react_import();
var Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/undo-2.js
init_react_import();
var Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-in.js
init_react_import();
var ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-out.js
init_react_import();
var ZoomOut = createLucideIcon("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// components/IconButton/index.ts
init_react_import();

// components/IconButton/IconButton.tsx
init_react_import();
var import_react4 = require("react");

// css-module:D:\Puck\puck\packages\core\components\IconButton\IconButton.module.css#css-module
init_react_import();
var IconButton_module_default = { "IconButton": "_IconButton_j8m2j_1", "IconButton--disabled": "_IconButton--disabled_j8m2j_39", "IconButton-title": "_IconButton-title_j8m2j_65" };

// components/Loader/index.tsx
init_react_import();

// lib/index.ts
init_react_import();

// lib/filter.ts
init_react_import();

// lib/reorder.ts
init_react_import();
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// lib/replace.ts
init_react_import();
var replace = (list, index, newItem) => {
  const result = Array.from(list);
  result.splice(index, 1);
  result.splice(index, 0, newItem);
  return result;
};

// css-module:D:\Puck\puck\packages\core\components\Loader\styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "Loader": "_Loader_13wp6_25", "loader-animation": "_loader-animation_13wp6_1" };

// components/Loader/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default4);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    __spreadValues({
      className: getClassName2(),
      style: {
        width: size,
        height: size,
        color
      },
      "aria-label": "loading"
    }, props)
  );
};

// components/IconButton/IconButton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default);
var IconButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  title
}) => {
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const ElementType = href ? "a" : "button";
  const el = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    ElementType,
    {
      className: getClassName3({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href,
      title,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: getClassName3("title"), children: title }),
        children,
        loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          "\xA0\xA0",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Loader, { size: 14 })
        ] })
      ]
    }
  );
  return el;
};

// components/AutoField/fields/ArrayField/index.tsx
var import_react15 = require("react");

// components/DragIcon/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\DragIcon\styles.module.css#css-module
init_react_import();
var styles_module_default5 = { "DragIcon": "_DragIcon_msidm_1", "DragIcon--disabled": "_DragIcon--disabled_msidm_15" };

// components/DragIcon/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var getClassName4 = get_class_name_factory_default("DragIcon", styles_module_default5);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: getClassName4({ disabled: isDragDisabled }), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });

// store/index.ts
init_react_import();

// reducer/index.ts
init_react_import();

// reducer/data.ts
init_react_import();

// lib/root-droppable-id.ts
init_react_import();
var rootAreaId = "root";
var rootZone = "default-zone";
var rootDroppableId = `${rootAreaId}:${rootZone}`;

// lib/insert.ts
init_react_import();
var insert = (list, index, item) => {
  const result = Array.from(list);
  result.splice(index, 0, item);
  return result;
};

// lib/remove.ts
init_react_import();
var remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};

// lib/setup-zone.ts
init_react_import();
var setupZone = (data, zoneKey) => {
  if (zoneKey === rootDroppableId) {
    return data;
  }
  const newData = __spreadProps(__spreadValues({}, data), {
    zones: data.zones ? __spreadValues({}, data.zones) : {}
  });
  newData.zones[zoneKey] = newData.zones[zoneKey] || [];
  return newData;
};

// lib/get-item.ts
init_react_import();
function getItem(selector, data, dynamicProps = {}) {
  if (!selector.zone || selector.zone === rootDroppableId) {
    const item2 = data.content[selector.index];
    return (item2 == null ? void 0 : item2.props) ? __spreadProps(__spreadValues({}, item2), { props: dynamicProps[item2.props.id] || item2.props }) : void 0;
  }
  const item = setupZone(data, selector.zone).zones[selector.zone][selector.index];
  return (item == null ? void 0 : item.props) ? __spreadProps(__spreadValues({}, item), { props: dynamicProps[item.props.id] || item.props }) : void 0;
}

// lib/reduce-related-zones.ts
init_react_import();

// lib/generate-id.ts
init_react_import();
var import_uuid = require("uuid");
var generateId = (type) => type ? `${type}-${(0, import_uuid.v4)()}` : (0, import_uuid.v4)();

// lib/get-zone-id.ts
init_react_import();
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};

// lib/reduce-related-zones.ts
function reduceRelatedZones(item, data, fn) {
  return __spreadProps(__spreadValues({}, data), {
    zones: Object.keys(data.zones || {}).reduce(
      (acc, key) => {
        const [parentId] = getZoneId(key);
        if (parentId === item.props.id) {
          const zones = data.zones;
          return fn(acc, key, zones[key]);
        }
        return __spreadProps(__spreadValues({}, acc), { [key]: data.zones[key] });
      },
      {}
    )
  });
}
var findRelatedByZoneId = (zoneId, data) => {
  const [zoneParentId] = getZoneId(zoneId);
  return (data.zones[zoneId] || []).reduce(
    (acc, zoneItem) => {
      const related = findRelatedByItem(zoneItem, data);
      if (zoneItem.props.id === zoneParentId) {
        return __spreadProps(__spreadValues(__spreadValues({}, acc), related), { [zoneId]: zoneItem });
      }
      return __spreadValues(__spreadValues({}, acc), related);
    },
    {}
  );
};
var findRelatedByItem = (item, data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zoneId) => {
      const [zoneParentId] = getZoneId(zoneId);
      if (item.props.id === zoneParentId) {
        const related = findRelatedByZoneId(zoneId, data);
        return __spreadProps(__spreadValues(__spreadValues({}, acc), related), {
          [zoneId]: data.zones[zoneId]
        });
      }
      return acc;
    },
    {}
  );
};
var removeRelatedZones = (item, data) => {
  const newData = __spreadValues({}, data);
  const related = findRelatedByItem(item, data);
  Object.keys(related).forEach((key) => {
    delete newData.zones[key];
  });
  return newData;
};
function duplicateRelatedZones(item, data, newId) {
  return reduceRelatedZones(item, data, (acc, key, zone) => {
    const dupedZone = zone.map((zoneItem) => __spreadProps(__spreadValues({}, zoneItem), {
      props: __spreadProps(__spreadValues({}, zoneItem.props), { id: generateId(zoneItem.type) })
    }));
    const dupeOfDupes = dupedZone.reduce(
      (dupeOfDupes2, item2, index) => __spreadValues(__spreadValues({}, dupeOfDupes2), duplicateRelatedZones(zone[index], data, item2.props.id).zones),
      acc
    );
    const [_, zoneId] = getZoneId(key);
    return __spreadProps(__spreadValues({}, dupeOfDupes), {
      [key]: zone,
      [`${newId}:${zoneId}`]: dupedZone
    });
  });
}

// reducer/data.ts
var zoneCache = {};
var replaceAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: replace(data.content, action.destinationIndex, action.data)
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, newData), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: replace(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        action.data
      )
    })
  });
};
function insertAction(data, action, config) {
  const emptyComponentData = {
    type: action.componentType,
    props: __spreadProps(__spreadValues({}, config.components[action.componentType].defaultProps || {}), {
      id: action.id || generateId(action.componentType)
    })
  };
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: insert(
        data.content,
        action.destinationIndex,
        emptyComponentData
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, data), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: insert(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        emptyComponentData
      )
    })
  });
}
var reorderAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: reorder(
        data.content,
        action.sourceIndex,
        action.destinationIndex
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, data), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: reorder(
        newData.zones[action.destinationZone],
        action.sourceIndex,
        action.destinationIndex
      )
    })
  });
};
function reduceData(data, action, config) {
  if (action.type === "insert") {
    return insertAction(data, action, config);
  }
  if (action.type === "duplicate") {
    const item = getItem(
      { index: action.sourceIndex, zone: action.sourceZone },
      data
    );
    const newItem = __spreadProps(__spreadValues({}, item), {
      props: __spreadProps(__spreadValues({}, item.props), {
        id: generateId(item.type)
      })
    });
    const dataWithRelatedDuplicated = duplicateRelatedZones(
      item,
      data,
      newItem.props.id
    );
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, dataWithRelatedDuplicated), {
        content: insert(data.content, action.sourceIndex + 1, newItem)
      });
    }
    return __spreadProps(__spreadValues({}, dataWithRelatedDuplicated), {
      zones: __spreadProps(__spreadValues({}, dataWithRelatedDuplicated.zones), {
        [action.sourceZone]: insert(
          dataWithRelatedDuplicated.zones[action.sourceZone],
          action.sourceIndex + 1,
          newItem
        )
      })
    });
  }
  if (action.type === "reorder") {
    return reorderAction(data, action);
  }
  if (action.type === "move") {
    if (action.sourceZone === action.destinationZone && action.sourceIndex === action.destinationIndex) {
      return data;
    }
    const newData = setupZone(
      setupZone(data, action.sourceZone),
      action.destinationZone
    );
    const item = getItem(
      { zone: action.sourceZone, index: action.sourceIndex },
      newData
    );
    if (action.sourceZone === action.destinationZone) {
      return reorderAction(data, __spreadProps(__spreadValues({}, action), { type: "reorder" }));
    }
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, newData), {
        content: remove(newData.content, action.sourceIndex),
        zones: __spreadProps(__spreadValues({}, newData.zones), {
          [action.destinationZone]: insert(
            newData.zones[action.destinationZone],
            action.destinationIndex,
            item
          )
        })
      });
    }
    if (action.destinationZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, newData), {
        content: insert(newData.content, action.destinationIndex, item),
        zones: __spreadProps(__spreadValues({}, newData.zones), {
          [action.sourceZone]: remove(
            newData.zones[action.sourceZone],
            action.sourceIndex
          )
        })
      });
    }
    return __spreadProps(__spreadValues({}, newData), {
      zones: __spreadProps(__spreadValues({}, newData.zones), {
        [action.sourceZone]: remove(
          newData.zones[action.sourceZone],
          action.sourceIndex
        ),
        [action.destinationZone]: insert(
          newData.zones[action.destinationZone],
          action.destinationIndex,
          item
        )
      })
    });
  }
  if (action.type === "replace") {
    return replaceAction(data, action);
  }
  if (action.type === "remove") {
    const item = getItem({ index: action.index, zone: action.zone }, data);
    const dataWithRelatedRemoved = setupZone(
      removeRelatedZones(item, data),
      action.zone
    );
    if (action.zone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, dataWithRelatedRemoved), {
        content: remove(data.content, action.index)
      });
    }
    return __spreadProps(__spreadValues({}, dataWithRelatedRemoved), {
      zones: __spreadProps(__spreadValues({}, dataWithRelatedRemoved.zones), {
        [action.zone]: remove(
          dataWithRelatedRemoved.zones[action.zone],
          action.index
        )
      })
    });
  }
  if (action.type === "registerZone") {
    if (zoneCache[action.zone]) {
      return __spreadProps(__spreadValues({}, data), {
        zones: __spreadProps(__spreadValues({}, data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      });
    }
    return setupZone(data, action.zone);
  }
  if (action.type === "unregisterZone") {
    const _zones = __spreadValues({}, data.zones || {});
    if (_zones[action.zone]) {
      zoneCache[action.zone] = _zones[action.zone];
      delete _zones[action.zone];
    }
    return __spreadProps(__spreadValues({}, data), { zones: _zones });
  }
  if (action.type === "setData") {
    if (typeof action.data === "object") {
      return __spreadValues(__spreadValues({}, data), action.data);
    }
    return __spreadValues(__spreadValues({}, data), action.data(data));
  }
  return data;
}

// reducer/state.ts
init_react_import();
var reduceUi = (ui, action) => {
  if (action.type === "setUi") {
    if (typeof action.ui === "object") {
      return __spreadValues(__spreadValues({}, ui), action.ui);
    }
    return __spreadValues(__spreadValues({}, ui), action.ui(ui));
  }
  if (action.type === "duplicate") {
    return __spreadProps(__spreadValues({}, ui), {
      itemSelector: { index: action.sourceIndex + 1, zone: action.sourceZone }
    });
  }
  if (action.type === "remove") {
    return __spreadProps(__spreadValues({}, ui), {
      itemSelector: null
    });
  }
  return ui;
};

// reducer/actions.tsx
init_react_import();

// reducer/index.ts
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction == null ? void 0 : onAction(action, newAppState, state);
    return newAppState;
  };
}
var setAction = (state, action) => {
  if (typeof action.state === "object") {
    return __spreadValues(__spreadValues({}, state), action.state);
  }
  return __spreadValues(__spreadValues({}, state), action.state(state));
};
function createReducer({
  config,
  record,
  onAction
}) {
  return storeInterceptor(
    (state, action) => {
      const data = reduceData(state.data, action, config);
      const ui = reduceUi(state.ui, action);
      if (action.type === "set") {
        return setAction(state, action);
      }
      return { data, ui };
    },
    record,
    onAction
  );
}

// components/ViewportControls/default-viewports.ts
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" }
];

// store/index.ts
var import_zustand2 = require("zustand");
var import_middleware2 = require("zustand/middleware");

// lib/resolve-data.ts
init_react_import();

// lib/resolve-component-data.ts
init_react_import();

// lib/get-changed.ts
init_react_import();
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
    const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
    return __spreadProps(__spreadValues({}, acc), {
      [item]: oldItemProps[item] !== newItemProps[item]
    });
  }, {}) : {};
};

// lib/resolve-component-data.ts
var cache = { lastChange: {} };
var resolveAllComponentData = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (content, config, metadata = {}, onResolveStart, onResolveEnd) {
  return yield Promise.all(
    content.map((item) => __async(void 0, null, function* () {
      return yield resolveComponentData(
        item,
        config,
        metadata,
        onResolveStart,
        onResolveEnd
      );
    }))
  );
});
var resolveComponentData = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (item, config, metadata = {}, onResolveStart, onResolveEnd) {
  const configForItem = config.components[item.type];
  if (configForItem.resolveData) {
    const { item: oldItem = null, resolved = {} } = cache.lastChange[item.props.id] || {};
    if (item && item === oldItem) {
      return resolved;
    }
    const changed = getChanged(item, oldItem);
    if (onResolveStart) {
      onResolveStart(item);
    }
    const { props: resolvedProps, readOnly = {} } = yield configForItem.resolveData(item, {
      changed,
      lastData: oldItem,
      metadata
    });
    const resolvedItem = __spreadProps(__spreadValues({}, item), {
      props: __spreadValues(__spreadValues({}, item.props), resolvedProps)
    });
    if (Object.keys(readOnly).length) {
      resolvedItem.readOnly = readOnly;
    }
    cache.lastChange[item.props.id] = {
      item,
      resolved: resolvedItem
    };
    if (onResolveEnd) {
      onResolveEnd(resolvedItem);
    }
    return resolvedItem;
  }
  return item;
});

// lib/apply-dynamic-props.ts
init_react_import();
var applyDynamicProps = (data, dynamicProps, rootData) => {
  return __spreadProps(__spreadValues({}, data), {
    root: rootData ? __spreadValues(__spreadValues({}, data.root), rootData ? rootData : {}) : data.root,
    content: data.content.map((item) => {
      return dynamicProps[item.props.id] ? __spreadValues(__spreadValues({}, item), dynamicProps[item.props.id]) : item;
    }),
    zones: Object.keys(data.zones || {}).reduce((acc, zoneKey) => {
      return __spreadProps(__spreadValues({}, acc), {
        [zoneKey]: data.zones[zoneKey].map((item) => {
          return dynamicProps[item.props.id] ? __spreadValues(__spreadValues({}, item), dynamicProps[item.props.id]) : item;
        })
      });
    }, {})
  });
};

// lib/resolve-root-data.ts
init_react_import();
var cache2 = {};
function resolveRootData(data, config, metadata) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    if (((_a = config.root) == null ? void 0 : _a.resolveData) && data.root.props) {
      if (((_b = cache2.lastChange) == null ? void 0 : _b.original) === data.root) {
        return cache2.lastChange.resolved;
      }
      const changed = getChanged(data.root, (_c = cache2.lastChange) == null ? void 0 : _c.original);
      const rootWithProps = data.root;
      const resolvedRoot = yield (_e = config.root) == null ? void 0 : _e.resolveData(rootWithProps, {
        changed,
        lastData: ((_d = cache2.lastChange) == null ? void 0 : _d.original) || {},
        metadata: metadata || {}
      });
      cache2.lastChange = {
        original: data.root,
        resolved: resolvedRoot
      };
      return __spreadProps(__spreadValues(__spreadValues({}, data.root), resolvedRoot), {
        props: __spreadValues(__spreadValues({}, data.root.props), resolvedRoot.props)
      });
    }
    return data.root;
  });
}

// lib/flatten-data.ts
init_react_import();
var flattenData = (data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zone) => [...acc, ...data.zones[zone]],
    data.content
  );
};

// lib/resolve-data.ts
var import_fast_deep_equal = __toESM(require("fast-deep-equal"));
var resolveData = (newAppState, appStoreData) => {
  const {
    state: appState,
    config,
    dispatch,
    resolveDataRuns,
    setComponentLoading,
    unsetComponentLoading,
    metadata,
    permissions
  } = appStoreData;
  const deferredSetStates = {};
  const _setComponentLoading = (id, loading, defer2 = 0) => {
    if (deferredSetStates[id]) {
      clearTimeout(deferredSetStates[id]);
      delete deferredSetStates[id];
    }
    deferredSetStates[id] = setTimeout(() => {
      if (loading) {
        setComponentLoading(id);
      } else {
        unsetComponentLoading(id);
      }
      delete deferredSetStates[id];
    }, defer2);
  };
  const runResolvers = () => __async(void 0, null, function* () {
    const newData = newAppState.data;
    const flatContent = flattenData(newData).filter(
      (item) => {
        var _a;
        return !!((_a = config.components[item.type]) == null ? void 0 : _a.resolveData);
      }
    );
    const applyIfChange = (dynamicDataMap, dynamicRoot) => {
      const processed = applyDynamicProps(
        __spreadValues({}, appState.data),
        dynamicDataMap,
        dynamicRoot
      );
      const processedAppState = __spreadProps(__spreadValues({}, appState), { data: processed });
      const containsChanges = !(0, import_fast_deep_equal.default)(appState, processedAppState);
      if (containsChanges) {
        dispatch({
          type: "set",
          state: (prev) => __spreadProps(__spreadValues({}, prev), {
            data: applyDynamicProps(prev.data, dynamicDataMap, dynamicRoot),
            ui: resolveDataRuns > 0 ? __spreadValues(__spreadValues({}, prev.ui), newAppState.ui) : prev.ui
          }),
          recordHistory: resolveDataRuns > 0
        });
      }
    };
    const promises = [];
    promises.push(
      (() => __async(void 0, null, function* () {
        _setComponentLoading("puck-root", true, 50);
        const dynamicRoot = yield resolveRootData(newData, config, metadata);
        applyIfChange({}, dynamicRoot);
        _setComponentLoading("puck-root", false);
      }))()
    );
    flatContent.forEach((item) => {
      promises.push(
        (() => __async(void 0, null, function* () {
          permissions.resolvePermissions({ item }, true);
          const dynamicData = yield resolveComponentData(
            item,
            config,
            metadata,
            (item2) => {
              _setComponentLoading(item2.props.id, true, 50);
            },
            (item2) => {
              deferredSetStates[item2.props.id];
              _setComponentLoading(item2.props.id, false);
            }
          );
          const dynamicDataMap = { [item.props.id]: dynamicData };
          applyIfChange(dynamicDataMap);
        }))()
      );
    });
    yield Promise.all(promises);
  });
  return runResolvers();
};

// store/index.ts
var import_react10 = require("react");

// store/slices/history.ts
init_react_import();
var import_react6 = require("react");

// lib/use-hotkey.ts
init_react_import();
var import_react5 = require("react");
var import_zustand = require("zustand");
var import_middleware = require("zustand/middleware");
var keyCodeMap = {
  ControlLeft: "ctrl",
  ControlRight: "ctrl",
  MetaLeft: "meta",
  MetaRight: "meta",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z"
};
var useHotkeyStore = (0, import_zustand.create)()(
  (0, import_middleware.subscribeWithSelector)((set) => ({
    held: {},
    hold: (key) => set((s) => s.held[key] ? s : { held: __spreadProps(__spreadValues({}, s.held), { [key]: true }) }),
    release: (key) => set((s) => s.held[key] ? { held: __spreadProps(__spreadValues({}, s.held), { [key]: false }) } : s),
    reset: (held = {}) => set(() => ({ held })),
    triggers: {}
  }))
);
var monitorHotkeys = (doc) => {
  const onKeyDown = (e) => {
    const key = keyCodeMap[e.code];
    if (key) {
      useHotkeyStore.getState().hold(key);
      const { held, triggers } = useHotkeyStore.getState();
      Object.values(triggers).forEach(({ combo, cb }) => {
        const conditionMet = Object.entries(combo).every(
          ([key2, value]) => value === !!held[key2]
        ) && Object.entries(held).every(
          ([key2, value]) => value === !!combo[key2]
        );
        if (conditionMet) {
          e.preventDefault();
          cb();
        }
      });
      if (key !== "meta" && key !== "ctrl" && key !== "shift") {
        useHotkeyStore.getState().release(key);
      }
    }
  };
  const onKeyUp = (e) => {
    const key = keyCodeMap[e.code];
    if (key) {
      if (key === "meta") {
        useHotkeyStore.getState().reset();
      } else {
        useHotkeyStore.getState().release(key);
      }
    }
  };
  doc.addEventListener("keydown", onKeyDown);
  doc.addEventListener("keyup", onKeyUp);
  return () => {
    doc.removeEventListener("keydown", onKeyDown);
    doc.removeEventListener("keyup", onKeyUp);
  };
};
var useMonitorHotkeys = () => {
  (0, import_react5.useEffect)(() => monitorHotkeys(document), []);
};
var useHotkey = (combo, cb) => {
  (0, import_react5.useEffect)(
    () => useHotkeyStore.setState((s) => ({
      triggers: __spreadProps(__spreadValues({}, s.triggers), {
        [`${Object.keys(combo).join("+")}`]: { combo, cb }
      })
    })),
    []
  );
};

// store/slices/history.ts
var EMPTY_HISTORY_INDEX = 0;
function debounce(func, timeout3 = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout3);
  };
}
var tidyState = (state) => {
  return __spreadProps(__spreadValues({}, state), {
    ui: __spreadProps(__spreadValues({}, state.ui), {
      field: {
        focus: null
      }
    })
  });
};
var createHistorySlice = (set, get) => {
  const record = debounce((state) => {
    const { histories, index } = get().history;
    const history = {
      state,
      id: generateId("history")
    };
    const newHistories = [...histories.slice(0, index + 1), history];
    set({
      history: __spreadProps(__spreadValues({}, get().history), {
        histories: newHistories,
        index: newHistories.length - 1
      })
    });
  }, 250);
  return {
    initialAppState: {},
    index: EMPTY_HISTORY_INDEX,
    histories: [],
    hasPast: () => get().history.index > EMPTY_HISTORY_INDEX,
    hasFuture: () => get().history.index < get().history.histories.length - 1,
    prevHistory: () => {
      const { history } = get();
      return history.hasPast() ? history.histories[history.index - 1] : null;
    },
    nextHistory: () => {
      const s = get().history;
      return s.hasFuture() ? s.histories[s.index + 1] : null;
    },
    currentHistory: () => get().history.histories[get().history.index],
    back: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasPast()) {
        const state = tidyState(
          ((_a = history.prevHistory()) == null ? void 0 : _a.state) || history.initialAppState
        );
        dispatch({
          type: "set",
          state
        });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index - 1 }) });
      }
    },
    forward: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasFuture()) {
        const state = (_a = history.nextHistory()) == null ? void 0 : _a.state;
        dispatch({ type: "set", state: state ? tidyState(state) : {} });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index + 1 }) });
      }
    },
    setHistories: (histories) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = history.histories[history.histories.length - 1]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { histories, index: histories.length - 1 }) });
    },
    setHistoryIndex: (index) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = history.histories[history.index]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { index }) });
    },
    record
  };
};
function useRegisterHistorySlice(appStore, {
  histories,
  index,
  initialAppState
}) {
  (0, import_react6.useEffect)(
    () => appStore.setState({
      history: __spreadProps(__spreadValues({}, appStore.getState().history), {
        histories,
        index,
        initialAppState
      })
    }),
    [histories, index, initialAppState]
  );
  const back = () => {
    appStore.getState().history.back();
  };
  const forward = () => {
    appStore.getState().history.forward();
  };
  useHotkey({ meta: true, z: true }, back);
  useHotkey({ meta: true, shift: true, z: true }, forward);
  useHotkey({ meta: true, y: true }, forward);
  useHotkey({ ctrl: true, z: true }, back);
  useHotkey({ ctrl: true, shift: true, z: true }, forward);
  useHotkey({ ctrl: true, y: true }, forward);
}

// store/slices/nodes.ts
init_react_import();
var import_fast_deep_equal2 = __toESM(require("fast-deep-equal"));
var import_react7 = require("react");
var partialDeepEqual = (newItem, existingItem) => {
  const filteredExistingItem = Object.keys(newItem).reduce(
    (acc, key) => __spreadProps(__spreadValues({}, acc), { [key]: existingItem[key] }),
    {}
  );
  return (0, import_fast_deep_equal2.default)(newItem, filteredExistingItem);
};
var generateNodesSlice = (data, appStore) => {
  const nodeIndex = {};
  const forAllData = (cb) => {
    data.content.forEach((data2, index) => {
      cb(data2, rootAreaId, rootZone, index);
    });
    Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
      const [parentId, zone] = zoneCompound.split(":");
      content.forEach((data2, index) => {
        cb(data2, parentId, zone, index);
      });
    });
  };
  forAllData((data2, parentId, zone, index) => {
    nodeIndex[data2.props.id] = { data: data2, parentId, zone, path: [], index };
  });
  const nodes = appStore.getState().nodes;
  const registerNode = nodes.registerNode;
  Object.keys(nodeIndex).forEach((componentId) => {
    const details = nodeIndex[componentId];
    let currentDetails = details;
    let path = [];
    while ((currentDetails == null ? void 0 : currentDetails.parentId) !== rootAreaId) {
      path.unshift(`${currentDetails.parentId}:${currentDetails.zone}`);
      currentDetails = nodeIndex[currentDetails.parentId];
    }
    path.unshift(rootDroppableId);
    nodeIndex[componentId].path = path;
    registerNode(componentId, nodeIndex[componentId]);
  });
  const rootProps = data.root.props || data.root;
  registerNode("root", {
    data: { type: "root", props: __spreadValues({ id: "root" }, rootProps) }
  });
  Object.keys(nodes.nodes).forEach((key) => {
    if (!nodeIndex[key] && key !== "root") {
      nodes.unregisterNode(key);
    }
  });
};
var createNodesSlice = (set, get) => ({
  nodes: {},
  registerNode: (id, node) => {
    const s = get().nodes;
    if (s.nodes[id] && partialDeepEqual(node, s.nodes[id])) {
      return;
    }
    const emptyNode = {
      id,
      methods: { sync: () => null },
      data: { props: { id }, type: "unknown" },
      parentId: "",
      zone: "",
      path: [],
      element: null,
      index: -1
    };
    const existingNode = s.nodes[id];
    set({
      nodes: __spreadProps(__spreadValues({}, s), {
        nodes: __spreadProps(__spreadValues({}, s.nodes), {
          [id]: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, emptyNode), existingNode), node), {
            id
          })
        })
      })
    });
  },
  unregisterNode: (id) => {
    const s = get().nodes;
    const existingNode = s.nodes[id];
    if (existingNode) {
      const newNodes = __spreadValues({}, s.nodes);
      delete newNodes[id];
      set({
        nodes: __spreadProps(__spreadValues({}, s), {
          nodes: newNodes
        })
      });
    }
  }
});
var useRegisterNodesSlice = (appStore) => {
  (0, import_react7.useEffect)(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => generateNodesSlice(data, appStore)
    );
  }, []);
};

// store/slices/permissions.ts
init_react_import();
var import_react8 = require("react");
var createPermissionsSlice = (set, get) => {
  const resolvePermissions = (..._0) => __async(void 0, [..._0], function* (params = {}, force) {
    const { state, permissions } = get();
    const { cache: cache3, globalPermissions } = permissions;
    const resolveDataForItem = (item2, force2 = false) => __async(void 0, null, function* () {
      var _a, _b, _c;
      const {
        config,
        state: appState,
        setComponentLoading,
        unsetComponentLoading
      } = get();
      const componentConfig = item2.type === "root" ? config.root : config.components[item2.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item2, (_a = cache3[item2.props.id]) == null ? void 0 : _a.lastData);
        if (Object.values(changed).some((el) => el === true) || force2) {
          setComponentLoading(item2.props.id);
          const resolvedPermissions = yield componentConfig.resolvePermissions(
            item2,
            {
              changed,
              lastPermissions: ((_b = cache3[item2.props.id]) == null ? void 0 : _b.lastPermissions) || null,
              permissions: initialPermissions,
              appState,
              lastData: ((_c = cache3[item2.props.id]) == null ? void 0 : _c.lastData) || null
            }
          );
          const latest = get().permissions;
          set({
            permissions: __spreadProps(__spreadValues({}, latest), {
              cache: __spreadProps(__spreadValues({}, latest.cache), {
                [item2.props.id]: {
                  lastData: item2,
                  lastPermissions: resolvedPermissions
                }
              }),
              resolvedPermissions: __spreadProps(__spreadValues({}, latest.resolvedPermissions), {
                [item2.props.id]: resolvedPermissions
              })
            })
          });
          unsetComponentLoading(item2.props.id);
        }
      }
    });
    const resolveDataForRoot = (force2 = false) => {
      const { state: appState } = get();
      resolveDataForItem(
        // Shim the root data in by conforming to component data shape
        {
          type: "root",
          props: __spreadProps(__spreadValues({}, appState.data.root.props), { id: "puck-root" })
        },
        force2
      );
    };
    const { item, type, root } = params;
    if (item) {
      yield resolveDataForItem(item, force);
    } else if (type) {
      flattenData(state.data).filter((item2) => item2.type === type).map((item2) => __async(void 0, null, function* () {
        yield resolveDataForItem(item2, force);
      }));
    } else if (root) {
      resolveDataForRoot(force);
    } else {
      resolveDataForRoot(force);
      flattenData(state.data).map((item2) => __async(void 0, null, function* () {
        yield resolveDataForItem(item2, force);
      }));
    }
  });
  const refreshPermissions = (params) => resolvePermissions(params, true);
  return {
    cache: {},
    globalPermissions: {
      drag: true,
      edit: true,
      delete: true,
      duplicate: true,
      insert: true
    },
    resolvedPermissions: {},
    getPermissions: ({ item, type, root } = {}) => {
      const { config, permissions } = get();
      const { globalPermissions, resolvedPermissions } = permissions;
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["puck-root"];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    resolvePermissions,
    refreshPermissions
  };
};
var useRegisterPermissionsSlice = (appStore, globalPermissions) => {
  (0, import_react8.useEffect)(() => {
    const { permissions } = appStore.getState();
    const { globalPermissions: existingGlobalPermissions } = permissions;
    appStore.setState({
      permissions: __spreadProps(__spreadValues({}, permissions), {
        globalPermissions: __spreadValues(__spreadValues({}, existingGlobalPermissions), globalPermissions)
      })
    });
    permissions.resolvePermissions();
  }, [globalPermissions]);
  (0, import_react8.useEffect)(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      () => {
        appStore.getState().permissions.resolvePermissions();
      }
    );
  }, []);
  (0, import_react8.useEffect)(() => {
    return appStore.subscribe(
      (s) => s.config,
      () => {
        appStore.getState().permissions.resolvePermissions();
      }
    );
  }, []);
};

// store/slices/fields.ts
init_react_import();
var import_react9 = require("react");
var createFieldsStore = (_set, _get) => {
  return {
    fields: {},
    loading: false,
    lastResolvedData: {}
  };
};
var useRegisterFieldsSlice = (appStore, id) => {
  const resolveFields = (0, import_react9.useCallback)(
    (reset) => __async(void 0, null, function* () {
      var _a, _b;
      const { fields, lastResolvedData } = appStore.getState().fields;
      const nodeStore = appStore.getState().nodes;
      const node = nodeStore.nodes[id || "root"];
      const componentData = node == null ? void 0 : node.data;
      const parentNode = (node == null ? void 0 : node.parentId) ? nodeStore.nodes[node.parentId] : null;
      const parent = (parentNode == null ? void 0 : parentNode.data) || null;
      const { getComponentConfig, state } = appStore.getState();
      const componentConfig = getComponentConfig(componentData == null ? void 0 : componentData.type);
      if (!componentData || !componentConfig) return;
      const defaultFields = componentConfig.fields || {};
      const resolver = componentConfig.resolveFields;
      let lastFields = fields;
      if (reset) {
        appStore.setState((s) => ({
          fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields })
        }));
        lastFields = defaultFields;
      }
      if (resolver) {
        const timeout3 = setTimeout(() => {
          appStore.setState((s) => ({
            fields: __spreadProps(__spreadValues({}, s.fields), { loading: true })
          }));
        }, 50);
        const lastData = ((_a = lastResolvedData.props) == null ? void 0 : _a.id) === id ? lastResolvedData : null;
        const changed = getChanged(componentData, lastData);
        const newFields = yield resolver(componentData, {
          changed,
          fields: defaultFields,
          lastFields,
          lastData,
          appState: state,
          parent
        });
        clearTimeout(timeout3);
        if (((_b = appStore.getState().selectedItem) == null ? void 0 : _b.props.id) !== id) {
          return;
        }
        appStore.setState({
          fields: {
            fields: newFields,
            loading: false,
            lastResolvedData: componentData
          }
        });
      } else {
        appStore.setState((s) => ({
          fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields })
        }));
      }
    }),
    [id]
  );
  (0, import_react9.useEffect)(() => {
    resolveFields(true);
    return appStore.subscribe(
      (s) => s.nodes.nodes[id || "root"],
      () => resolveFields()
    );
  }, [id]);
};

// store/index.ts
var defaultAppState = {
  data: { content: [], root: {}, zones: {} },
  ui: {
    leftSideBarVisible: true,
    rightSideBarVisible: true,
    arrayState: {},
    itemSelector: null,
    componentList: {},
    isDragging: false,
    previewMode: "edit",
    viewports: {
      current: {
        width: defaultViewports[0].width,
        height: defaultViewports[0].height || "auto"
      },
      options: [],
      controlsVisible: true
    },
    field: { focus: null }
  }
};
var defaultPageFields = {
  title: { type: "text" }
};
var createAppStore = (initialAppStore) => (0, import_zustand2.create)()(
  (0, import_middleware2.subscribeWithSelector)((set, get) => __spreadProps(__spreadValues({
    state: defaultAppState,
    config: { components: {} },
    componentState: {},
    plugins: [],
    overrides: {},
    viewports: defaultViewports,
    zoomConfig: {
      autoZoom: 1,
      rootHeight: 0,
      zoom: 1
    },
    status: "LOADING",
    iframe: {},
    metadata: {}
  }, initialAppStore), {
    fields: createFieldsStore(set, get),
    history: createHistorySlice(set, get),
    nodes: createNodesSlice(set, get),
    permissions: createPermissionsSlice(set, get),
    getComponentConfig: (type) => {
      var _a;
      const { config, selectedItem } = get();
      const rootFields = ((_a = config.root) == null ? void 0 : _a.fields) || defaultPageFields;
      return type && type !== "root" ? config.components[type] : selectedItem ? config.components[selectedItem.type] : __spreadProps(__spreadValues({}, config.root), { fields: rootFields });
    },
    dispatch: (action) => set((s) => {
      var _a, _b;
      const { record } = get().history;
      const dispatch = createReducer({ config: s.config, record });
      const state = dispatch(s.state, action);
      const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state.data) : null;
      (_b = (_a = get()).onAction) == null ? void 0 : _b.call(_a, action, state, get().state);
      return __spreadProps(__spreadValues({}, s), { state, selectedItem });
    }),
    setZoomConfig: (zoomConfig) => set({ zoomConfig }),
    setStatus: (status) => set({ status }),
    setComponentState: (componentState) => set({ componentState }),
    setComponentLoading: (id) => {
      var _a;
      const { setComponentState, componentState } = get();
      setComponentState(__spreadProps(__spreadValues({}, componentState), {
        [id]: __spreadProps(__spreadValues({}, componentState[id]), {
          loadingCount: (((_a = componentState[id]) == null ? void 0 : _a.loadingCount) || 0) + 1
        })
      }));
    },
    unsetComponentLoading: (id) => {
      var _a;
      const { setComponentState, componentState } = get();
      setComponentState(__spreadProps(__spreadValues({}, componentState), {
        [id]: __spreadProps(__spreadValues({}, componentState[id]), {
          loadingCount: Math.max(
            (((_a = componentState[id]) == null ? void 0 : _a.loadingCount) || 0) - 1,
            0
          )
        })
      }));
    },
    // Helper
    setUi: (ui, recordHistory) => set((s) => {
      const dispatch = createReducer({
        config: s.config,
        record: () => {
        }
      });
      const state = dispatch(s.state, {
        type: "setUi",
        ui,
        recordHistory
      });
      const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state.data) : null;
      return __spreadProps(__spreadValues({}, s), { state, selectedItem });
    }),
    resolveDataRuns: 0,
    resolveData: (newAppState) => set((s) => {
      resolveData(newAppState, get());
      return __spreadProps(__spreadValues({}, s), { resolveDataRuns: s.resolveDataRuns + 1 });
    })
  }))
);
var appStoreContext = (0, import_react10.createContext)(createAppStore());
function useAppStore(selector) {
  const context = (0, import_react10.useContext)(appStoreContext);
  return (0, import_zustand2.useStore)(context, selector);
}
function useAppStoreApi() {
  return (0, import_react10.useContext)(appStoreContext);
}

// components/Sortable/index.tsx
init_react_import();
var import_react13 = require("@dnd-kit/react");

// lib/dnd/dnd-kit/safe.ts
init_react_import();
var import_react11 = require("@dnd-kit/react");
var import_sortable = require("@dnd-kit/react/sortable");
function useDroppableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    } };
  }
  return (0, import_react11.useDroppable)(input);
}
function useDraggableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    } };
  }
  return (0, import_react11.useDraggable)(input);
}
function useSortableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    }, status: "idle", handleRef: () => {
    } };
  }
  return (0, import_sortable.useSortable)(input);
}

// lib/dnd/use-sensors.ts
init_react_import();
var import_react12 = require("react");

// lib/dnd/PointerSensor.ts
init_react_import();
var import_state2 = require("@dnd-kit/state");
var import_abstract = require("@dnd-kit/abstract");
var import_geometry = require("@dnd-kit/geometry");
var import_utilities = require("@dnd-kit/dom/utilities");
var _clearTimeout;
var _PointerSensor = class _PointerSensor extends import_abstract.Sensor {
  constructor(manager, options) {
    super(manager);
    this.manager = manager;
    this.options = options;
    this.listeners = new import_utilities.Listeners();
    this.cleanup = /* @__PURE__ */ new Set();
    this.source = void 0;
    this.started = false;
    __privateAdd(this, _clearTimeout);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    (0, import_state2.effect)(() => {
      const unbindGlobal = this.bindGlobal(options != null ? options : {});
      return () => {
        unbindGlobal();
      };
    });
  }
  bind(source, options = this.options) {
    const unbind = (0, import_state2.effect)(() => {
      var _a;
      const target = (_a = source.handle) != null ? _a : source.element;
      const listener = (event) => {
        if ((0, import_utilities.isPointerEvent)(event)) {
          this.handlePointerDown(event, source, options);
        }
      };
      if (target) {
        patchWindow(target.ownerDocument.defaultView);
        target.addEventListener("pointerdown", listener);
        return () => {
          target.removeEventListener("pointerdown", listener);
        };
      }
    });
    return unbind;
  }
  bindGlobal(options) {
    const documents = /* @__PURE__ */ new Set();
    for (const draggable of this.manager.registry.draggables.value) {
      if (draggable.element) {
        documents.add((0, import_utilities.getDocument)(draggable.element));
      }
    }
    for (const droppable of this.manager.registry.droppables.value) {
      if (droppable.element) {
        documents.add((0, import_utilities.getDocument)(droppable.element));
      }
    }
    const unbindFns = Array.from(documents).map(
      (doc) => this.listeners.bind(doc, [
        {
          type: "pointermove",
          listener: (event) => this.handlePointerMove(event, doc, options)
        },
        {
          type: "pointerup",
          listener: this.handlePointerUp,
          options: {
            capture: true
          }
        },
        {
          // Cancel activation if there is a competing Drag and Drop interaction
          type: "dragstart",
          listener: this.handleDragStart
        }
      ])
    );
    return () => {
      unbindFns.forEach((unbind) => unbind());
    };
  }
  handlePointerDown(event, source, options = {}) {
    if (this.disabled || !event.isPrimary || event.button !== 0 || !(0, import_utilities.isElement)(event.target) || source.disabled) {
      return;
    }
    const offset = (0, import_utilities.getFrameTransform)(source.element);
    this.initialCoordinates = {
      x: event.clientX * offset.scaleX + offset.x,
      y: event.clientY * offset.scaleY + offset.y
    };
    this.source = source;
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
    event.stopImmediatePropagation();
    if (!(constraints == null ? void 0 : constraints.delay) && !(constraints == null ? void 0 : constraints.distance)) {
      this.handleStart(source, event);
    } else {
      const { delay } = constraints;
      if (delay) {
        const timeout3 = setTimeout(
          () => this.handleStart(source, event),
          delay.value
        );
        __privateSet(this, _clearTimeout, () => {
          clearTimeout(timeout3);
          __privateSet(this, _clearTimeout, void 0);
        });
      }
    }
    const cleanup = () => {
      var _a;
      (_a = __privateGet(this, _clearTimeout)) == null ? void 0 : _a.call(this);
      this.initialCoordinates = void 0;
      this.source = void 0;
    };
    this.cleanup.add(cleanup);
  }
  handlePointerMove(event, doc, options) {
    if (!this.source) {
      return;
    }
    const ownerDocument = this.source.element && (0, import_utilities.getDocument)(this.source.element);
    if (doc !== ownerDocument) {
      return;
    }
    const coordinates = {
      x: event.clientX,
      y: event.clientY
    };
    const offset = (0, import_utilities.getFrameTransform)(this.source.element);
    coordinates.x = coordinates.x * offset.scaleX + offset.x;
    coordinates.y = coordinates.y * offset.scaleY + offset.y;
    if (this.manager.dragOperation.status.dragging) {
      event.preventDefault();
      event.stopPropagation();
      this.manager.actions.move({ to: coordinates });
      return;
    }
    if (!this.initialCoordinates) {
      return;
    }
    const delta = {
      x: coordinates.x - this.initialCoordinates.x,
      y: coordinates.y - this.initialCoordinates.y
    };
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, this.source) : activationConstraints;
    const { distance, delay } = constraints != null ? constraints : {};
    if (distance) {
      if (distance.tolerance != null && (0, import_geometry.exceedsDistance)(delta, distance.tolerance)) {
        return this.handleCancel();
      }
      if ((0, import_geometry.exceedsDistance)(delta, distance.value)) {
        return this.handleStart(this.source, event);
      }
    }
    if (delay) {
      if ((0, import_geometry.exceedsDistance)(delta, delay.tolerance)) {
        return this.handleCancel();
      }
    }
  }
  handlePointerUp(event) {
    if (!this.source) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const { status } = this.manager.dragOperation;
    if (!status.idle) {
      const canceled = !status.initialized;
      this.manager.actions.stop({ canceled });
    } else if (this.started) {
      setTimeout(() => {
        if (!this.manager.dragOperation.status.idle) {
          this.manager.actions.stop({ canceled: false });
        }
      }, 10);
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.handleCancel();
    }
  }
  handleStart(source, event) {
    var _a;
    const { manager, initialCoordinates } = this;
    (_a = __privateGet(this, _clearTimeout)) == null ? void 0 : _a.call(this);
    if (!initialCoordinates || manager.dragOperation.status.initialized || this.started) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    this.started = true;
    event.preventDefault();
    (0, import_state2.batch)(() => {
      manager.actions.setDragSource(source.id);
      manager.actions.start({ coordinates: initialCoordinates, event });
    });
    const ownerDocument = (0, import_utilities.getDocument)(event.target);
    const unbind = this.listeners.bind(ownerDocument, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: preventDefault,
        options: {
          passive: false
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: preventDefault
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    ownerDocument.body.setPointerCapture(event.pointerId);
    this.cleanup.add(unbind);
    this.cleanup.add(() => {
      this.started = false;
    });
  }
  handleDragStart(event) {
    const { target } = event;
    if (!(0, import_utilities.isElement)(target)) {
      return;
    }
    const isNativeDraggable = (0, import_utilities.isHTMLElement)(target) && target.draggable && target.getAttribute("draggable") === "true";
    if (isNativeDraggable) {
      this.handleCancel();
    } else {
      preventDefault(event);
    }
  }
  handleCancel() {
    const { dragOperation } = this.manager;
    if (dragOperation.status.initialized) {
      this.manager.actions.stop({ canceled: true });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  destroy() {
    this.listeners.clear();
  }
};
_clearTimeout = new WeakMap();
_PointerSensor.configure = (0, import_abstract.configurator)(_PointerSensor);
var PointerSensor = _PointerSensor;
function preventDefault(event) {
  event.preventDefault();
}
function noop() {
}
var windows = /* @__PURE__ */ new WeakSet();
function patchWindow(window2) {
  if (!window2 || windows.has(window2)) {
    return;
  }
  window2.addEventListener("touchmove", noop, {
    capture: false,
    passive: false
  });
  windows.add(window2);
}

// lib/dnd/use-sensors.ts
var import_utilities2 = require("@dnd-kit/dom/utilities");
var useSensors = ({
  other,
  mouse,
  touch
} = {
  touch: { delay: { value: 200, tolerance: 10 } },
  other: { delay: { value: 200, tolerance: 10 }, distance: { value: 5 } }
}) => {
  const [sensors] = (0, import_react12.useState)(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && (0, import_utilities2.isElement)(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
          return mouse;
        }
        if (pointerType === "touch") {
          return touch;
        }
        return other;
      }
    })
  ]);
  return sensors;
};

// lib/dnd/collision/dynamic/index.ts
init_react_import();
var import_abstract9 = require("@dnd-kit/abstract");

// lib/dnd/collision/directional/index.ts
init_react_import();
var import_abstract2 = require("@dnd-kit/abstract");

// lib/dnd/collision/collision-debug.ts
init_react_import();
var DEBUG = false;
var debugElements = {};
var timeout;
var collisionDebug = (a, b, id, color, label) => {
  if (!DEBUG) return;
  const debugId = `${id}-debug`;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Object.entries(debugElements).forEach(([id2, { svg }]) => {
      svg.remove();
      delete debugElements[id2];
    });
  }, 1e3);
  requestAnimationFrame(() => {
    var _a, _b;
    const existingEl = debugElements[debugId];
    let line = (_a = debugElements[debugId]) == null ? void 0 : _a.line;
    let text = (_b = debugElements[debugId]) == null ? void 0 : _b.text;
    if (!existingEl) {
      const svgNs = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNs, "svg");
      line = document.createElementNS(svgNs, "line");
      text = document.createElementNS(svgNs, "text");
      svg.setAttribute("id", debugId);
      svg.setAttribute(
        "style",
        "position: fixed; height: 100%; width: 100%; pointer-events: none; top: 0px; left: 0px;"
      );
      svg.appendChild(line);
      svg.appendChild(text);
      text.setAttribute("fill", `black`);
      document.body.appendChild(svg);
      debugElements[debugId] = { svg, line, text };
    }
    line.setAttribute("x1", a.x.toString());
    line.setAttribute("x2", b.x.toString());
    line.setAttribute("y1", a.y.toString());
    line.setAttribute("y2", b.y.toString());
    line.setAttribute("style", `stroke:${color};stroke-width:2`);
    text.setAttribute("x", (a.x - (a.x - b.x) / 2).toString());
    text.setAttribute("y", (a.y - (a.y - b.y) / 2).toString());
    if (label) {
      text.innerHTML = label;
    }
  });
};

// lib/dnd/collision/directional/index.ts
var distanceChange = "increasing";
var directionalCollision = (input, previous) => {
  var _a;
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  if (!dragShape || !dropShape) return null;
  const dropCenter = dropShape.center;
  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) + Math.pow(dropCenter.y - previous.y, 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - position.current.x, 2) + Math.pow(dropCenter.y - position.current.y, 2)
  );
  distanceChange = distanceToCurrent === distanceToPrevious ? distanceChange : distanceToCurrent < distanceToPrevious ? "decreasing" : "increasing";
  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString(),
    "rebeccapurple"
  );
  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: import_abstract2.CollisionType.Collision
    };
  }
  return null;
};

// lib/dnd/collision/dynamic/get-direction.ts
init_react_import();
var getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  } else if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};

// lib/dnd/collision/dynamic/get-midpoint-impact.ts
init_react_import();
var getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;
  if (direction === "down") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset2;
  } else if (direction === "up") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset2;
  } else if (direction === "left") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset2 >= dragRect.left;
  }
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};

// lib/dnd/collision/dynamic/track-movement-interval.ts
init_react_import();
var import_geometry2 = require("@dnd-kit/geometry");
var INTERVAL_SENSITIVITY = 10;
var intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
};
var trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;
  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y
  };
  intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
  if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
    intervalCache.previous = import_geometry2.Point.from(point);
  }
  return intervalCache;
};

// ../../node_modules/@dnd-kit/collision/dist/index.js
init_react_import();
var import_abstract3 = require("@dnd-kit/abstract");
var import_geometry3 = require("@dnd-kit/geometry");
var import_abstract4 = require("@dnd-kit/abstract");
var import_geometry4 = require("@dnd-kit/geometry");
var import_abstract5 = require("@dnd-kit/abstract");
var import_geometry5 = require("@dnd-kit/geometry");
var import_abstract6 = require("@dnd-kit/abstract");
var import_geometry6 = require("@dnd-kit/geometry");
var import_abstract7 = require("@dnd-kit/abstract");
var import_geometry7 = require("@dnd-kit/geometry");
var import_abstract8 = require("@dnd-kit/abstract");
var import_geometry8 = require("@dnd-kit/geometry");
var pointerIntersection = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = import_geometry3.Point.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: import_abstract3.CollisionType.PointerIntersection,
      priority: import_abstract3.CollisionPriority.High
    };
  }
  return null;
};
var closestCorners = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const { left, top, right, bottom } = droppable.shape.boundingRectangle;
  const corners = [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: left,
      y: bottom
    },
    {
      x: right,
      y: bottom
    }
  ];
  const distance = corners.reduce(
    (acc, corner) => {
      var _a;
      return acc + import_geometry5.Point.distance(
        import_geometry5.Point.from(corner),
        (_a = shape == null ? void 0 : shape.current.center) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: import_abstract5.CollisionType.Collision,
    priority: import_abstract5.CollisionPriority.Normal
  };
};

// lib/dnd/collision/dynamic/store.ts
init_react_import();
var import_vanilla = require("zustand/vanilla");
var collisionStore = (0, import_vanilla.createStore)(() => ({
  fallbackEnabled: false
}));

// lib/dnd/collision/dynamic/index.ts
var flushNext = "";
var createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => (input) => {
  var _a, _b, _c, _d, _e;
  const { dragOperation, droppable } = input;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  const { shape: dropShape } = droppable;
  if (!dragShape || !dropShape) {
    return null;
  }
  const { center: dragCenter } = dragShape;
  const { fallbackEnabled } = collisionStore.getState();
  const interval = trackMovementInterval(position.current, dragAxis);
  dragOperation.data = __spreadProps(__spreadValues({}, dragOperation.data), {
    direction: interval.direction
  });
  const collisionMap = dragOperation.data.collisionMap || {};
  dragOperation.data.collisionMap = collisionMap;
  collisionMap[droppable.id] = {
    direction: interval.direction
  };
  const { center: dropCenter } = dropShape;
  const overMidpoint = getMidpointImpact(
    dragShape,
    dropShape,
    interval.direction,
    midpointOffset
  );
  if (((_b = dragOperation.source) == null ? void 0 : _b.id) === droppable.id) {
    const collision = directionalCollision(input, interval.previous);
    collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
    if (collision) {
      return __spreadProps(__spreadValues({}, collision), {
        priority: import_abstract9.CollisionPriority.Highest
      });
    }
  }
  const intersectionArea = dragShape.intersectionArea(dropShape);
  const intersectionRatio = intersectionArea / dropShape.area;
  if (intersectionArea && overMidpoint) {
    collisionDebug(
      dragCenter,
      dropCenter,
      droppable.id.toString(),
      "green",
      interval.direction
    );
    const collision = {
      id: droppable.id,
      value: intersectionRatio,
      priority: import_abstract9.CollisionPriority.High,
      type: import_abstract9.CollisionType.Collision
    };
    const shouldFlushId = flushNext === droppable.id;
    flushNext = "";
    return __spreadProps(__spreadValues({}, collision), { id: shouldFlushId ? "flush" : collision.id });
  }
  if (fallbackEnabled && ((_c = dragOperation.source) == null ? void 0 : _c.id) !== droppable.id) {
    const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
    const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
    if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
      const fallbackCollision = closestCorners(input);
      if (fallbackCollision) {
        const direction = getDirection(dragAxis, {
          x: dragShape.center.x - (((_d = droppable.shape) == null ? void 0 : _d.center.x) || 0),
          y: dragShape.center.y - (((_e = droppable.shape) == null ? void 0 : _e.center.y) || 0)
        });
        collisionMap[droppable.id] = {
          direction
        };
        if (intersectionArea) {
          collisionDebug(
            dragCenter,
            dropCenter,
            droppable.id.toString(),
            "red",
            direction || ""
          );
          flushNext = droppable.id;
          return __spreadProps(__spreadValues({}, fallbackCollision), {
            priority: import_abstract9.CollisionPriority.Low
          });
        }
        collisionDebug(
          dragCenter,
          dropCenter,
          droppable.id.toString(),
          "orange",
          direction || ""
        );
        return __spreadProps(__spreadValues({}, fallbackCollision), { priority: import_abstract9.CollisionPriority.Lowest });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
  delete collisionMap[droppable.id];
  return null;
};

// components/Sortable/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove
}) => {
  const sensors = useSensors({
    mouse: { distance: { value: 5 } }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react13.DragDropProvider,
    {
      sensors,
      onDragStart: (event) => {
        var _a, _b;
        return onDragStart((_b = (_a = event.operation.source) == null ? void 0 : _a.id.toString()) != null ? _b : "");
      },
      onDragOver: (event, manager) => {
        var _a, _b;
        event.preventDefault();
        const { operation } = event;
        const { source, target } = operation;
        if (!source || !target) return;
        let sourceIndex = source.data.index;
        let targetIndex = target.data.index;
        const collisionData = (_b = (_a = manager.dragOperation.data) == null ? void 0 : _a.collisionMap) == null ? void 0 : _b[target.id];
        if (sourceIndex !== targetIndex && source.id !== target.id) {
          const collisionPosition = collisionData.direction === "up" ? "before" : "after";
          if (targetIndex >= sourceIndex) {
            targetIndex = targetIndex - 1;
          }
          if (collisionPosition === "after") {
            targetIndex = targetIndex + 1;
          }
          onMove({
            source: sourceIndex,
            target: targetIndex
          });
        }
      },
      onDragEnd: () => {
        setTimeout(() => {
          onDragEnd();
        }, 250);
      },
      children
    }
  );
};
var Sortable = ({
  id,
  index,
  disabled,
  children,
  type = "item"
}) => {
  const {
    ref: sortableRef,
    status,
    handleRef
  } = useSortableSafe({
    id,
    type,
    index,
    disabled,
    data: { index },
    collisionDetector: createDynamicCollisionDetector("y")
  });
  return children({ status, ref: sortableRef, handleRef });
};

// components/AutoField/context.tsx
init_react_import();
var import_react14 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var NestedFieldContext = (0, import_react14.createContext)({});
var useNestedFieldContext = () => {
  const context = (0, import_react14.useContext)(NestedFieldContext);
  return __spreadProps(__spreadValues({}, context), {
    readOnlyFields: context.readOnlyFields || {}
  });
};
var NestedFieldProvider = ({
  children,
  name,
  subName,
  wildcardName = name,
  readOnlyFields
}) => {
  const subPath = `${name}.${subName}`;
  const wildcardSubPath = `${wildcardName}.${subName}`;
  const subReadOnlyFields = (0, import_react14.useMemo)(
    () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
      const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
      if (isLocal) {
        const subPathPattern = new RegExp(
          `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
        );
        const localName = readOnlyKey.replace(subPathPattern, "");
        return __spreadProps(__spreadValues({}, acc), {
          [localName]: readOnlyFields[readOnlyKey]
        });
      }
      return acc;
    }, {}),
    [name, subName, wildcardName, readOnlyFields]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};

// components/AutoField/fields/ArrayField/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var getClassName5 = get_class_name_factory_default("ArrayField", styles_module_default3);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default3);
var ArrayField = ({
  field,
  onChange,
  value: _value,
  name,
  label,
  labelIcon,
  readOnly,
  id,
  Label: Label2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", __spreadValues({}, props))
}) => {
  const thisArrayState = useAppStore((s) => s.state.ui.arrayState[id]);
  const setUi = useAppStore((s) => s.setUi);
  const { readOnlyFields, localName = name } = useNestedFieldContext();
  const value = _value;
  const arrayState = thisArrayState || {
    items: Array.from(value || []).map((item, idx) => {
      return {
        _originalIndex: idx,
        _arrayId: `${id}-${idx}`
      };
    }),
    openId: ""
  };
  const [localState, setLocalState] = (0, import_react15.useState)({ arrayState, value });
  (0, import_react15.useEffect)(() => {
    var _a;
    const _arrayState = (_a = appStore.getState().state.ui.arrayState[id]) != null ? _a : arrayState;
    setLocalState({ arrayState: _arrayState, value });
  }, [value]);
  const appStore = useAppStoreApi();
  const mapArrayStateToUi = (0, import_react15.useCallback)(
    (partialArrayState) => {
      const state = appStore.getState().state;
      return {
        arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
          [id]: __spreadValues(__spreadValues({}, arrayState), partialArrayState)
        })
      };
    },
    [arrayState, appStore]
  );
  const getHighestIndex = (0, import_react15.useCallback)(() => {
    return arrayState.items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, [arrayState]);
  const regenerateArrayState = (0, import_react15.useCallback)(
    (value2) => {
      let highestIndex = getHighestIndex();
      const newItems = Array.from(value2 || []).map((item, idx) => {
        var _a;
        const arrayStateItem = arrayState.items[idx];
        const newItem = {
          _originalIndex: typeof (arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) !== "undefined" ? arrayStateItem._originalIndex : highestIndex + 1,
          _arrayId: ((_a = arrayState.items[idx]) == null ? void 0 : _a._arrayId) || `${id}-${highestIndex + 1}`
        };
        if (newItem._originalIndex > highestIndex) {
          highestIndex = newItem._originalIndex;
        }
        return newItem;
      });
      return __spreadProps(__spreadValues({}, arrayState), { items: newItems });
    },
    [arrayState]
  );
  (0, import_react15.useEffect)(() => {
    if (arrayState.items.length > 0) {
      setUi(mapArrayStateToUi(arrayState));
    }
  }, []);
  const [draggedItem, setDraggedItem] = (0, import_react15.useState)("");
  const isDragging = !!draggedItem;
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const forceReadOnly = !canEdit;
  const valueRef = (0, import_react15.useRef)(value);
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && localState.arrayState.items.length >= field.max || readOnly;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        SortableProvider,
        {
          onDragStart: (id2) => setDraggedItem(id2),
          onDragEnd: () => {
            setDraggedItem("");
            onChange(valueRef.current);
          },
          onMove: (move) => {
            if (arrayState.items[move.source]._arrayId !== draggedItem) {
              return;
            }
            const newValue = reorder(localState.value, move.source, move.target);
            const newArrayStateItems = reorder(
              arrayState.items,
              move.source,
              move.target
            );
            const state = appStore.getState().state;
            const newUi = {
              arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
                [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
              })
            };
            setUi(newUi, false);
            setLocalState({
              value: newValue,
              arrayState: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
            });
            valueRef.current = newValue;
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            "div",
            {
              className: getClassName5({
                hasItems: Array.isArray(value) && value.length > 0,
                addDisabled
              }),
              children: [
                localState.arrayState.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: getClassName5("inner"), "data-dnd-container": true, children: localState.arrayState.items.map((item, i) => {
                  const { _arrayId = `${id}-${i}`, _originalIndex = i } = item;
                  const data = Array.from(localState.value || [])[i] || {};
                  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    Sortable,
                    {
                      id: _arrayId,
                      index: i,
                      disabled: readOnly,
                      children: ({ status, ref, handleRef }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                        "div",
                        {
                          ref,
                          className: getClassNameItem({
                            isExpanded: arrayState.openId === _arrayId,
                            isDragging: status === "dragging",
                            readOnly
                          }),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                              "div",
                              {
                                ref: handleRef,
                                onClick: (e) => {
                                  if (isDragging) return;
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (arrayState.openId === _arrayId) {
                                    setUi(
                                      mapArrayStateToUi({
                                        openId: ""
                                      })
                                    );
                                  } else {
                                    setUi(
                                      mapArrayStateToUi({
                                        openId: _arrayId
                                      })
                                    );
                                  }
                                },
                                className: getClassNameItem("summary"),
                                children: [
                                  field.getItemSummary ? field.getItemSummary(data, i) : `Item #${_originalIndex}`,
                                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: getClassNameItem("rhs"), children: [
                                    !readOnly && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: getClassNameItem("actions"), children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                                        IconButton,
                                        {
                                          type: "button",
                                          disabled: !!addDisabled,
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            const existingValue = [...value || []];
                                            existingValue.splice(
                                              i,
                                              0,
                                              existingValue[i]
                                            );
                                            const newUi = mapArrayStateToUi(
                                              regenerateArrayState(existingValue)
                                            );
                                            setUi(newUi, false);
                                            onChange(existingValue);
                                          },
                                          title: "Duplicate",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Copy, { size: 16 })
                                        }
                                      ) }),
                                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                                        IconButton,
                                        {
                                          type: "button",
                                          disabled: field.min !== void 0 && field.min >= localState.arrayState.items.length,
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            const existingValue = [...value || []];
                                            const existingItems = [
                                              ...arrayState.items || []
                                            ];
                                            existingValue.splice(i, 1);
                                            existingItems.splice(i, 1);
                                            setUi(
                                              mapArrayStateToUi({
                                                items: existingItems
                                              }),
                                              false
                                            );
                                            onChange(existingValue);
                                          },
                                          title: "Delete",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Trash, { size: 16 })
                                        }
                                      ) })
                                    ] }),
                                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DragIcon, {}) })
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: getClassNameItem("body"), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
                              const subField = field.arrayFields[subName];
                              const indexName = `${name}[${i}]`;
                              const subPath = `${indexName}.${subName}`;
                              const localIndexName = `${localName}[${i}]`;
                              const localWildcardName = `${localName}[*]`;
                              const localSubPath = `${localIndexName}.${subName}`;
                              const localWildcardSubPath = `${localWildcardName}.${subName}`;
                              const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
                              const label2 = subField.label || subName;
                              return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                                NestedFieldProvider,
                                {
                                  name: localIndexName,
                                  wildcardName: localWildcardName,
                                  subName,
                                  readOnlyFields,
                                  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                                    AutoFieldPrivate,
                                    {
                                      name: subPath,
                                      label: label2,
                                      id: `${_arrayId}_${subName}`,
                                      readOnly: subReadOnly,
                                      field: __spreadProps(__spreadValues({}, subField), {
                                        label: label2
                                        // May be used by custom fields
                                      }),
                                      value: data[subName],
                                      onChange: (val, ui) => {
                                        onChange(
                                          replace(value, i, __spreadProps(__spreadValues({}, data), {
                                            [subName]: val
                                          })),
                                          ui
                                        );
                                      }
                                    }
                                  )
                                },
                                subPath
                              );
                            }) }) })
                          ]
                        }
                      )
                    },
                    _arrayId
                  );
                }) }),
                !addDisabled && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    className: getClassName5("addButton"),
                    onClick: () => {
                      if (isDragging) return;
                      const existingValue = value || [];
                      const newValue = [
                        ...existingValue,
                        field.defaultItemProps || {}
                      ];
                      const newArrayState = regenerateArrayState(newValue);
                      setUi(mapArrayStateToUi(newArrayState), false);
                      onChange(newValue);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Plus, { size: 21 })
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};

// components/AutoField/fields/DefaultField/index.tsx
init_react_import();
var import_jsx_runtime8 = require("react/jsx-runtime");
var getClassName6 = get_class_name_factory_default("Input", styles_module_default2);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  value: _value,
  name,
  label,
  labelIcon,
  Label: Label2,
  id
}) => {
  const value = _value;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
        field.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          className: getClassName6("input"),
          autoComplete: "off",
          type: field.type,
          title: label || name,
          name,
          value: (value == null ? void 0 : value.toString) ? value.toString() : "",
          onChange: (e) => {
            if (field.type === "number") {
              const numberValue = Number(e.currentTarget.value);
              if (typeof field.min !== "undefined" && numberValue < field.min) {
                return;
              }
              if (typeof field.max !== "undefined" && numberValue > field.max) {
                return;
              }
              onChange(numberValue);
            } else {
              onChange(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0,
          placeholder: field.type === "text" || field.type === "number" ? field.placeholder : void 0,
          step: field.type === "number" ? field.step : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
init_react_import();
var import_react19 = require("react");

// components/ExternalInput/index.tsx
init_react_import();
var import_react18 = require("react");

// css-module:D:\Puck\puck\packages\core\components\ExternalInput\styles.module.css#css-module
init_react_import();
var styles_module_default6 = { "ExternalInput-actions": "_ExternalInput-actions_6kqow_1", "ExternalInput-button": "_ExternalInput-button_6kqow_9", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_6kqow_47", "ExternalInput--readOnly": "_ExternalInput--readOnly_6kqow_61", "ExternalInput-detachButton": "_ExternalInput-detachButton_6kqow_69", "ExternalInput": "_ExternalInput_6kqow_1", "ExternalInputModal": "_ExternalInputModal_6kqow_157", "ExternalInputModal-grid": "_ExternalInputModal-grid_6kqow_177", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_6kqow_199", "ExternalInputModal-filters": "_ExternalInputModal-filters_6kqow_209", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_6kqow_247", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_6kqow_265", "ExternalInputModal-table": "_ExternalInputModal-table_6kqow_265", "ExternalInputModal-thead": "_ExternalInputModal-thead_6kqow_297", "ExternalInputModal-th": "_ExternalInputModal-th_6kqow_297", "ExternalInputModal-td": "_ExternalInputModal-td_6kqow_327", "ExternalInputModal-tr": "_ExternalInputModal-tr_6kqow_337", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_6kqow_351", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_6kqow_403", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_6kqow_411", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_6kqow_445", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_6kqow_453", "ExternalInputModal-search": "_ExternalInputModal-search_6kqow_453", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_6kqow_527", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_6kqow_577", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_6kqow_597", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_6kqow_625", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_6kqow_651", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_6kqow_659", "ExternalInputModal-footer": "_ExternalInputModal-footer_6kqow_659", "ExternalInputModal-field": "_ExternalInputModal-field_6kqow_685" };

// components/Modal/index.tsx
init_react_import();
var import_react16 = require("react");

// css-module:D:\Puck\puck\packages\core\components\Modal\styles.module.css#css-module
init_react_import();
var styles_module_default7 = { "Modal": "_Modal_pvj02_1", "Modal--isOpen": "_Modal--isOpen_pvj02_29", "Modal-inner": "_Modal-inner_pvj02_37" };

// components/Modal/index.tsx
var import_react_dom = require("react-dom");
var import_jsx_runtime9 = require("react/jsx-runtime");
var getClassName7 = get_class_name_factory_default("Modal", styles_module_default7);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = (0, import_react16.useState)(null);
  (0, import_react16.useEffect)(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {});
  }
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassName7({ isOpen }), onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: getClassName7("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};

// components/Heading/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\Heading\styles.module.css#css-module
init_react_import();
var styles_module_default8 = { "Heading": "_Heading_etk6p_1", "Heading--xxxxl": "_Heading--xxxxl_etk6p_23", "Heading--xxxl": "_Heading--xxxl_etk6p_35", "Heading--xxl": "_Heading--xxl_etk6p_43", "Heading--xl": "_Heading--xl_etk6p_51", "Heading--l": "_Heading--l_etk6p_59", "Heading--m": "_Heading--m_etk6p_67", "Heading--s": "_Heading--s_etk6p_75", "Heading--xs": "_Heading--xs_etk6p_83" };

// components/Heading/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var getClassName8 = get_class_name_factory_default("Heading", styles_module_default8);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Tag,
    {
      className: getClassName8({
        [size]: true
      }),
      children
    }
  );
};

// components/Button/index.ts
init_react_import();

// components/Button/Button.tsx
init_react_import();
var import_react17 = require("react");

// css-module:D:\Puck\puck\packages\core\components\Button\Button.module.css#css-module
init_react_import();
var Button_module_default = { "Button": "_Button_tiiyj_1", "Button--medium": "_Button--medium_tiiyj_57", "Button--large": "_Button--large_tiiyj_73", "Button-icon": "_Button-icon_tiiyj_87", "Button--primary": "_Button--primary_tiiyj_95", "Button--secondary": "_Button--secondary_tiiyj_133", "Button--flush": "_Button--flush_tiiyj_167", "Button--disabled": "_Button--disabled_tiiyj_175", "Button--fullWidth": "_Button--fullWidth_tiiyj_189", "Button-spinner": "_Button-spinner_tiiyj_199" };

// lib/filter-data-attrs.ts
init_react_import();
var dataAttrRe = /^(data-.*)$/;
var filterDataAttrs = (props) => {
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
};

// components/Button/Button.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var getClassName9 = get_class_name_factory_default("Button", Button_module_default);
var Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    variant = "primary",
    type,
    disabled,
    tabIndex,
    newTab,
    fullWidth,
    icon,
    size = "medium",
    loading: loadingProp = false
  } = _b, props = __objRest(_b, [
    "children",
    "href",
    "onClick",
    "variant",
    "type",
    "disabled",
    "tabIndex",
    "newTab",
    "fullWidth",
    "icon",
    "size",
    "loading"
  ]);
  const [loading, setLoading] = (0, import_react17.useState)(loadingProp);
  (0, import_react17.useEffect)(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    ElementType,
    __spreadProps(__spreadValues({
      className: getClassName9({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href
    }, dataAttrs), {
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: getClassName9("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: getClassName9("spinner"), children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};

// components/ExternalInput/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default6);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default6);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const [data, setData] = (0, import_react18.useState)([]);
  const [isOpen, setOpen] = (0, import_react18.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react18.useState)(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = (0, import_react18.useState)(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = (0, import_react18.useState)(hasFilterFields);
  const mappedData = (0, import_react18.useMemo)(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = (0, import_react18.useMemo)(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || (0, import_react18.isValidElement)(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = (0, import_react18.useState)(field.initialQuery || "");
  const search = (0, import_react18.useCallback)(
    (query, filters2) => __async(void 0, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      const listData = dataCache[cacheKey] || (yield field.fetchList({ query, filters: filters2 }));
      if (listData) {
        setData(listData);
        setIsLoading(false);
        dataCache[cacheKey] = listData;
      }
    }),
    [id, field]
  );
  const Footer = (0, import_react18.useCallback)(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  (0, import_react18.useEffect)(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: getClassName10({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassName10("actions"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName10("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Link, { size: "16" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "button",
            {
              type: "button",
              className: getClassName10("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Search, { size: "18" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    IconButton,
                    {
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    "div",
                    {
                      className: getClassNameModal("field"),
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                        AutoFieldPrivate,
                        {
                          field: filterField,
                          name: fieldName,
                          id: `external_field_${fieldName}_filter`,
                          label: filterField.label || fieldName,
                          value: filters[fieldName],
                          onChange: (value2) => {
                            const newFilters = __spreadProps(__spreadValues({}, filters), {
                              [fieldName]: value2
                            });
                            setFilters(newFilters);
                            search(searchQuery, newFilters);
                          }
                        }
                      )
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var ExternalField = ({
  field,
  onChange,
  value,
  name,
  label,
  labelIcon,
  Label: Label2,
  id,
  readOnly
}) => {
  var _a, _b, _c;
  const validField = field;
  const deprecatedField = field;
  (0, import_react19.useEffect)(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Link, { size: 16 }),
      el: "div",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        ExternalInput,
        {
          name,
          field: __spreadProps(__spreadValues({}, validField), {
            // DEPRECATED
            placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
            mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
            mapRow: validField.mapRow,
            fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(void 0, null, function* () {
              return yield deprecatedField.adaptor.fetchList(
                deprecatedField.adaptorParams
              );
            }) : validField.fetchList
          }),
          onChange,
          value,
          id,
          readOnly
        }
      )
    }
  );
};

// components/AutoField/fields/RadioField/index.tsx
init_react_import();
var import_react20 = require("react");

// lib/safe-json-parse.ts
init_react_import();
var safeJsonParse = (str) => {
  try {
    const jsonValue = JSON.parse(str);
    return jsonValue;
  } catch (e) {
    return str;
  }
};

// components/AutoField/fields/RadioField/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var getClassName11 = get_class_name_factory_default("Input", styles_module_default2);
var RadioField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  id,
  label,
  labelIcon,
  Label: Label2
}) => {
  const flatOptions = (0, import_react20.useMemo)(
    () => field.type === "radio" ? field.options.map(({ value: value2 }) => value2) : [],
    [field]
  );
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    Label2,
    {
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassName11("radioGroupItems"), id, children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "label",
        {
          className: getClassName11("radio"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "input",
              {
                type: "radio",
                className: getClassName11("radioInput"),
                value: option.value,
                name,
                onChange: (e) => {
                  var _a;
                  const jsonValue = (_a = safeJsonParse(e.target.value)) != null ? _a : e.target.value;
                  if (flatOptions.indexOf(jsonValue) > -1) {
                    onChange(jsonValue);
                  } else {
                    onChange(e.target.value);
                  }
                },
                disabled: readOnly,
                checked: value === option.value
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassName11("radioInner"), children: option.label || option.value })
          ]
        },
        option.label + option.value
      )) })
    }
  );
};

// components/AutoField/fields/SelectField/index.tsx
init_react_import();
var import_react21 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var getClassName12 = get_class_name_factory_default("Input", styles_module_default2);
var SelectField = ({
  field,
  onChange,
  label,
  labelIcon,
  Label: Label2,
  value,
  name,
  readOnly,
  id
}) => {
  const flatOptions = (0, import_react21.useMemo)(
    () => field.type === "select" ? field.options.map(({ value: value2 }) => value2) : [],
    [field]
  );
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "select",
        {
          id,
          title: label || name,
          className: getClassName12("input"),
          disabled: readOnly,
          onChange: (e) => {
            var _a;
            const jsonValue = (_a = safeJsonParse(e.target.value)) != null ? _a : e.target.value;
            if (flatOptions.indexOf(jsonValue) > -1) {
              onChange(jsonValue);
            } else {
              onChange(e.target.value);
            }
          },
          value,
          children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "option",
            {
              label: option.label,
              value: option.value
            },
            option.label + option.value
          ))
        }
      )
    }
  );
};

// components/AutoField/fields/TextareaField/index.tsx
init_react_import();
var import_jsx_runtime16 = require("react/jsx-runtime");
var getClassName13 = get_class_name_factory_default("Input", styles_module_default2);
var TextareaField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  label,
  labelIcon,
  Label: Label2,
  id
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Type, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "textarea",
        {
          id,
          className: getClassName13("input"),
          autoComplete: "off",
          name,
          value: typeof value === "undefined" ? "" : value,
          onChange: (e) => onChange(e.currentTarget.value),
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          rows: 5,
          placeholder: field.type === "textarea" ? field.placeholder : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ObjectField/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\AutoField\fields\ObjectField\styles.module.css#css-module
init_react_import();
var styles_module_default9 = { "ObjectField": "_ObjectField_ws9nw_9", "ObjectField-fieldset": "_ObjectField-fieldset_ws9nw_25" };

// components/AutoField/fields/ObjectField/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var getClassName14 = get_class_name_factory_default("ObjectField", styles_module_default9);
var ObjectField = ({
  field,
  onChange,
  value,
  name,
  label,
  labelIcon,
  Label: Label2,
  readOnly,
  id
}) => {
  const { readOnlyFields, localName = name } = useNestedFieldContext();
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  const data = value || {};
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: getClassName14(), children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("fieldset", { className: getClassName14("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${name}.${subName}`;
        const localSubPath = `${localName || name}.${subName}`;
        const subReadOnly = readOnly ? readOnly : readOnlyFields[localSubPath];
        const label2 = subField.label || subName;
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          NestedFieldProvider,
          {
            name: localName || id,
            subName,
            readOnlyFields,
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              AutoFieldPrivate,
              {
                name: subPath,
                label: subPath,
                id: `${id}_${subName}`,
                readOnly: subReadOnly,
                field: __spreadProps(__spreadValues({}, subField), {
                  label: label2
                  // May be used by custom fields
                }),
                value: data[subName],
                onChange: (val, ui) => {
                  onChange(
                    __spreadProps(__spreadValues({}, data), {
                      [subName]: val
                    }),
                    ui
                  );
                }
              }
            )
          },
          subPath
        );
      }) }) })
    }
  );
};

// lib/use-safe-id.ts
init_react_import();
var import_react22 = __toESM(require("react"));
var useSafeId = () => {
  if (typeof import_react22.default.useId !== "undefined") {
    return import_react22.default.useId();
  }
  const [id] = (0, import_react22.useState)(generateId());
  return id;
};

// components/AutoField/index.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var getClassName15 = get_class_name_factory_default("Input", styles_module_default2);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default2);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(El, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: getClassName15("label"), children: [
      icon ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: getClassName15("labelIcon"), children: icon }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, {}),
      label,
      readOnly && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: getClassName15("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const Wrapper = (0, import_react23.useMemo)(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Wrapper,
    {
      label,
      icon,
      className: getClassName15({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};
function AutoFieldInternal(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const dispatch = useAppStore((s) => s.dispatch);
  const overrides = useAppStore((s) => s.overrides);
  const readOnly = useAppStore((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.readOnly;
  });
  const nestedFieldContext = (0, import_react23.useContext)(NestedFieldContext);
  const { id, Label: Label2 = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const labelIcon = field.labelIcon;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const defaultFields = {
    array: ArrayField,
    external: ExternalField,
    object: ObjectField,
    select: SelectField,
    textarea: TextareaField,
    radio: RadioField,
    text: DefaultField,
    number: DefaultField
  };
  const render = __spreadProps(__spreadValues({}, overrides.fieldTypes), {
    array: ((_a = overrides.fieldTypes) == null ? void 0 : _a.array) || defaultFields.array,
    external: ((_b = overrides.fieldTypes) == null ? void 0 : _b.external) || defaultFields.external,
    object: ((_c = overrides.fieldTypes) == null ? void 0 : _c.object) || defaultFields.object,
    select: ((_d = overrides.fieldTypes) == null ? void 0 : _d.select) || defaultFields.select,
    textarea: ((_e = overrides.fieldTypes) == null ? void 0 : _e.textarea) || defaultFields.textarea,
    radio: ((_f = overrides.fieldTypes) == null ? void 0 : _f.radio) || defaultFields.radio,
    text: ((_g = overrides.fieldTypes) == null ? void 0 : _g.text) || defaultFields.text,
    number: ((_h = overrides.fieldTypes) == null ? void 0 : _h.number) || defaultFields.number
  });
  const mergedProps = __spreadProps(__spreadValues({}, props), {
    field,
    label,
    labelIcon,
    Label: Label2,
    id: resolvedId
  });
  const onFocus = (0, import_react23.useCallback)(
    (e) => {
      if (mergedProps.name && (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA")) {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [mergedProps.name]
  );
  const onBlur = (0, import_react23.useCallback)((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  if (field.type === "custom") {
    if (!field.render) {
      return null;
    }
    const CustomField = field.render;
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: getClassNameWrapper(), onFocus, onBlur, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: getClassName15(), children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CustomField, __spreadValues({}, mergedProps)) }) });
  }
  const children = defaultFields[field.type](mergedProps);
  const Render2 = render[field.type];
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
        localName: nestedFieldContext.localName
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Render2, __spreadProps(__spreadValues({}, mergedProps), { children }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  const isFocused = useAppStore((s) => s.state.ui.field.focus === props.name);
  const { value, onChange } = props;
  const [localValue, setLocalValue] = (0, import_react23.useState)(value);
  const onChangeLocal = (0, import_react23.useCallback)(
    (val, ui) => {
      setLocalValue(val);
      onChange(val, ui);
    },
    [onChange]
  );
  (0, import_react23.useEffect)(() => {
    if (!isFocused) {
      setLocalValue(value);
    }
  }, [value]);
  const localProps = {
    value: localValue,
    onChange: onChangeLocal
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AutoFieldInternal, __spreadValues(__spreadValues({}, props), localProps));
}
function AutoField(props) {
  const DefaultLabel = (0, import_react23.useMemo)(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName15({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AutoFieldInternal, __spreadProps(__spreadValues({}, props), { Label: DefaultLabel }));
}

// components/Drawer/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\Drawer\styles.module.css#css-module
init_react_import();
var styles_module_default10 = { "Drawer": "_Drawer_fgw6v_1", "Drawer-draggable": "_Drawer-draggable_fgw6v_15", "Drawer-draggableBg": "_Drawer-draggableBg_fgw6v_23", "Drawer-draggableFg": "_Drawer-draggableFg_fgw6v_41", "DrawerItem-draggable": "_DrawerItem-draggable_fgw6v_49", "DrawerItem--disabled": "_DrawerItem--disabled_fgw6v_75", "DrawerItem": "_DrawerItem_fgw6v_49", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_fgw6v_95", "DrawerItem-name": "_DrawerItem-name_fgw6v_131" };

// components/Drawer/index.tsx
var import_react36 = require("react");

// components/DragDropContext/index.tsx
init_react_import();
var import_react34 = require("@dnd-kit/react");
var import_react35 = require("react");
var import_dom = require("@dnd-kit/dom");

// components/DropZone/index.tsx
init_react_import();
var import_react33 = require("react");

// components/DraggableComponent/index.tsx
init_react_import();
var import_react26 = require("react");

// css-module:D:\Puck\puck\packages\core\components\DraggableComponent\styles.module.css#css-module
init_react_import();
var styles_module_default11 = { "DraggableComponent": "_DraggableComponent_q7wd5_1", "DraggableComponent-overlay": "_DraggableComponent-overlay_q7wd5_23", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_q7wd5_57", "DraggableComponent--hover": "_DraggableComponent--hover_q7wd5_89", "DraggableComponent--isLocked": "_DraggableComponent--isLocked_q7wd5_89", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_q7wd5_107", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_q7wd5_131", "DraggableComponent-actions": "_DraggableComponent-actions_q7wd5_131" };

// components/DraggableComponent/index.tsx
var import_react_dom2 = require("react-dom");

// lib/get-deep-scroll-position.ts
init_react_import();
function getDeepScrollPosition(element) {
  let totalScroll = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (parent) {
      totalScroll.x += parent.scrollLeft;
      totalScroll.y += parent.scrollTop;
    }
    current = parent;
  }
  return totalScroll;
}

// components/DropZone/context.tsx
init_react_import();
var import_react24 = require("react");
var import_zustand3 = require("zustand");
var import_jsx_runtime19 = require("react/jsx-runtime");
var dropZoneContext = (0, import_react24.createContext)(null);
var ZoneStoreContext = (0, import_react24.createContext)(
  (0, import_zustand3.createStore)(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {}
  }))
);
var ZoneStoreProvider = ({
  children,
  store
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const [hoveringComponent, setHoveringComponent] = (0, import_react24.useState)();
  const [activeZones, setActiveZones] = (0, import_react24.useState)({});
  const dispatch = useAppStore((s) => s.dispatch);
  const registerZone = (0, import_react24.useCallback)(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps(__spreadValues({}, latest), { [zoneCompound]: true }));
    },
    [setActiveZones, dispatch]
  );
  const unregisterZone = (0, import_react24.useCallback)(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "unregisterZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps(__spreadValues({}, latest), {
        [zoneCompound]: false
      }));
    },
    [setActiveZones, dispatch]
  );
  const memoValue = (0, import_react24.useMemo)(
    () => __spreadValues({
      hoveringComponent,
      setHoveringComponent,
      registerZone,
      unregisterZone,
      activeZones
    }, value),
    [value, hoveringComponent, activeZones]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: memoValue && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(dropZoneContext.Provider, { value: memoValue, children }) });
};

// lib/use-context-store.ts
init_react_import();
var import_react25 = require("react");
var import_zustand4 = require("zustand");
var import_shallow = require("zustand/react/shallow");
function useContextStore(context, selector) {
  const store = (0, import_react25.useContext)(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return (0, import_zustand4.useStore)(store, (0, import_shallow.useShallow)(selector));
}

// components/DraggableComponent/index.tsx
var import_shallow2 = require("zustand/react/shallow");
var import_jsx_runtime20 = require("react/jsx-runtime");
var getClassName16 = get_class_name_factory_default("DraggableComponent", styles_module_default11);
var DEBUG2 = false;
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(ActionBar, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ActionBar.Group, { children })
] });
var DraggableComponent = ({
  children,
  depth,
  componentType,
  id,
  index,
  zoneCompound,
  isLoading = false,
  isSelected = false,
  debug,
  label,
  isEnabled,
  autoDragAxis,
  userDragAxis,
  inDroppableZone = true
}) => {
  const zoom = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) === id ? s.zoomConfig.zoom : 1;
    }
  );
  const overrides = useAppStore((s) => s.overrides);
  const selectedItem = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) === id ? s.selectedItem : null;
    }
  );
  const dispatch = useAppStore((s) => s.dispatch);
  const iframe = useAppStore((s) => s.iframe);
  const ctx = (0, import_react26.useContext)(dropZoneContext);
  const [localZones, setLocalZones] = (0, import_react26.useState)({});
  const registerLocalZone = (0, import_react26.useCallback)(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps(__spreadValues({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones]
  );
  const unregisterLocalZone = (0, import_react26.useCallback)(
    (zoneCompound2) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = __spreadValues({}, obj);
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const path = useAppStore((s) => {
    var _a;
    return (_a = s.nodes.nodes[id]) == null ? void 0 : _a.path;
  });
  const item = useAppStore((s) => {
    var _a;
    return (_a = s.nodes.nodes[id]) == null ? void 0 : _a.data;
  });
  const permissions = useAppStore(
    (0, import_shallow2.useShallow)((s) => s.permissions.getPermissions({ item }))
  );
  const userIsDragging = useContextStore(
    ZoneStoreContext,
    (s) => !!s.draggedItem
  );
  const canCollide = permissions.drag || userIsDragging;
  const disabled = !isEnabled || !canCollide;
  const [dragAxis, setDragAxis] = (0, import_react26.useState)(userDragAxis || autoDragAxis);
  const { ref: sortableRef, status } = useSortableSafe({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx == null ? void 0 : ctx.areaId,
      zone: zoneCompound,
      index,
      componentType,
      containsActiveZone,
      depth,
      path: path || [],
      inDroppableZone
    },
    collisionPriority: isEnabled ? depth : 0,
    collisionDetector: createDynamicCollisionDetector(dragAxis),
    disabled,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    }
  });
  const thisIsDragging = status === "dragging";
  const ref = (0, import_react26.useRef)(null);
  const refSetter = (0, import_react26.useCallback)(
    (el) => {
      sortableRef(el);
      if (el) {
        ref.current = el;
      }
    },
    [sortableRef]
  );
  const [portalEl, setPortalEl] = (0, import_react26.useState)();
  (0, import_react26.useEffect)(() => {
    var _a, _b, _c;
    setPortalEl(
      iframe.enabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-puck-preview]")) != null ? _c : document.body
    );
  }, [iframe.enabled, ref.current]);
  const getStyle = (0, import_react26.useCallback)(() => {
    var _a, _b, _c;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const deepScrollPosition = getDeepScrollPosition(ref.current);
    const portalContainerEl = iframe.enabled ? null : (_a = ref.current) == null ? void 0 : _a.closest("[data-puck-preview]");
    const portalContainerRect = portalContainerEl == null ? void 0 : portalContainerEl.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const scroll = {
      x: deepScrollPosition.x - portalScroll.x - ((_b = portalContainerRect == null ? void 0 : portalContainerRect.left) != null ? _b : 0),
      y: deepScrollPosition.y - portalScroll.y - ((_c = portalContainerRect == null ? void 0 : portalContainerRect.top) != null ? _c : 0)
    };
    const style2 = {
      left: `${rect.left + scroll.x}px`,
      top: `${rect.top + scroll.y}px`,
      height: `${rect.height}px`,
      width: `${rect.width}px`
    };
    return style2;
  }, [ref.current]);
  const [style, setStyle] = (0, import_react26.useState)();
  const sync = (0, import_react26.useCallback)(() => {
    setStyle(getStyle());
  }, [ref.current, iframe]);
  (0, import_react26.useEffect)(() => {
    if (ref.current && !userIsDragging) {
      const observer = new ResizeObserver(sync);
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current, userIsDragging]);
  const registerNode = useAppStore((s) => s.nodes.registerNode);
  (0, import_react26.useEffect)(() => {
    var _a;
    registerNode(id, { methods: { sync }, element: (_a = ref.current) != null ? _a : null });
    return () => {
      registerNode(id, { methods: { sync: () => null }, element: null });
    };
  }, [id, zoneCompound, index, componentType, sync]);
  const CustomActionBar = (0, import_react26.useMemo)(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const onClick = (0, import_react26.useCallback)(
    (e) => {
      e.stopPropagation();
      dispatch({
        type: "setUi",
        ui: {
          itemSelector: { index, zone: zoneCompound }
        }
      });
    },
    [index, zoneCompound, id]
  );
  const appStore = useAppStoreApi();
  const onSelectParent = (0, import_react26.useCallback)(() => {
    const { nodes } = appStore.getState().nodes;
    const node = nodes[id];
    const parentNode = (node == null ? void 0 : node.parentId) ? nodes[node == null ? void 0 : node.parentId] : null;
    if (!parentNode) {
      return;
    }
    dispatch({
      type: "setUi",
      ui: {
        itemSelector: {
          zone: `${parentNode.parentId}:${parentNode.zone}`,
          index: parentNode.index
        }
      }
    });
  }, [ctx, path]);
  const onDuplicate = (0, import_react26.useCallback)(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound]);
  const onDelete = (0, import_react26.useCallback)(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound]);
  const [hover, setHover] = (0, import_react26.useState)(false);
  const indicativeHover = (ctx == null ? void 0 : ctx.hoveringComponent) === id;
  (0, import_react26.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    const el = ref.current;
    const _onMouseOver = (e) => {
      if (userIsDragging) {
        if (thisIsDragging) {
          setHover(true);
        } else {
          setHover(false);
        }
      } else {
        setHover(true);
      }
      e.stopPropagation();
    };
    const _onMouseOut = (e) => {
      e.stopPropagation();
      setHover(false);
    };
    el.setAttribute("data-puck-component", id);
    el.setAttribute("data-puck-dnd", id);
    el.style.position = "relative";
    el.addEventListener("click", onClick);
    el.addEventListener("mouseover", _onMouseOver);
    el.addEventListener("mouseout", _onMouseOut);
    if (thisIsDragging) {
      el.setAttribute("data-puck-dragging", "");
    } else {
      el.removeAttribute("data-puck-dragging");
    }
    return () => {
      el.removeAttribute("data-puck-component");
      el.removeAttribute("data-puck-dnd");
      el.removeEventListener("click", onClick);
      el.removeEventListener("mouseover", _onMouseOver);
      el.removeEventListener("mouseout", _onMouseOut);
      el.removeAttribute("data-puck-dragging");
    };
  }, [
    ref,
    onClick,
    containsActiveZone,
    zoneCompound,
    id,
    userIsDragging,
    thisIsDragging,
    inDroppableZone
  ]);
  (0, import_react26.useEffect)(() => {
    if (ref.current && disabled) {
      ref.current.setAttribute("data-puck-disabled", "");
      return () => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.removeAttribute("data-puck-disabled");
      };
    }
  }, [disabled, ref]);
  const [isVisible, setIsVisible] = (0, import_react26.useState)(false);
  (0, import_react26.useEffect)(() => {
    sync();
    if ((isSelected || hover || indicativeHover) && !userIsDragging) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isSelected, hover, indicativeHover, iframe, userIsDragging]);
  const syncActionsPosition = (0, import_react26.useCallback)(
    (el) => {
      if (el) {
        const view = el.ownerDocument.defaultView;
        if (view) {
          const rect = el.getBoundingClientRect();
          const diffLeft = rect.x;
          const exceedsBoundsLeft = diffLeft < 0;
          const diffTop = rect.y;
          const exceedsBoundsTop = diffTop < 0;
          if (exceedsBoundsLeft) {
            el.style.transformOrigin = "left top";
            el.style.left = "0px";
          }
          if (exceedsBoundsTop) {
            el.style.top = "12px";
            if (!exceedsBoundsLeft) {
              el.style.transformOrigin = "right top";
            }
          }
        }
      }
    },
    [zoom]
  );
  (0, import_react26.useEffect)(() => {
    if (userDragAxis) {
      setDragAxis(userDragAxis);
      return;
    }
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "inline" || computedStyle.display === "inline-block") {
        setDragAxis("x");
        return;
      }
    }
    setDragAxis(autoDragAxis);
  }, [ref, userDragAxis, autoDragAxis]);
  const parentAction = (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CornerLeftUp, { size: 16 }) });
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropZoneProvider,
    {
      value: __spreadProps(__spreadValues({}, ctx), {
        areaId: id,
        zoneCompound,
        index,
        depth: depth + 1,
        registerLocalZone,
        unregisterLocalZone
      }),
      children: [
        isVisible && (0, import_react_dom2.createPortal)(
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "div",
            {
              className: getClassName16({
                isSelected,
                isDragging: thisIsDragging,
                hover: hover || indicativeHover
              }),
              style: __spreadValues({}, style),
              "data-puck-overlay": true,
              children: [
                debug,
                isLoading && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassName16("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Loader, {}) }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "div",
                  {
                    className: getClassName16("actionsOverlay"),
                    style: {
                      top: actionsOverlayTop / zoom
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      "div",
                      {
                        className: getClassName16("actions"),
                        style: {
                          transform: `scale(${1 / zoom}`,
                          top: actionsTop / zoom,
                          right: 0,
                          paddingLeft: actionsSide,
                          paddingRight: actionsSide
                        },
                        ref: syncActionsPosition,
                        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                          CustomActionBar,
                          {
                            parentAction,
                            label: DEBUG2 ? id : label,
                            children: [
                              permissions.duplicate && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Copy, { size: 16 }) }),
                              permissions.delete && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Trash, { size: 16 }) })
                            ]
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassName16("overlay") })
              ]
            }
          ),
          portalEl || document.body
        ),
        children(refSetter)
      ]
    }
  );
};

// css-module:D:\Puck\puck\packages\core\components\DropZone\styles.module.css#css-module
init_react_import();
var styles_module_default12 = { "DropZone": "_DropZone_yl3dm_1", "DropZone--isActive": "_DropZone--isActive_yl3dm_19", "DropZone--hasChildren": "_DropZone--hasChildren_yl3dm_27", "DropZone--userIsDragging": "_DropZone--userIsDragging_yl3dm_43", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_yl3dm_51", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_yl3dm_53", "DropZone--isRootZone": "_DropZone--isRootZone_yl3dm_53", "DropZone--isDestination": "_DropZone--isDestination_yl3dm_73", "DropZone-item": "_DropZone-item_yl3dm_97", "DropZone-hitbox": "_DropZone-hitbox_yl3dm_105", "DropZone--isEnabled": "_DropZone--isEnabled_yl3dm_121", "DropZone--isAnimating": "_DropZone--isAnimating_yl3dm_139" };

// components/DropZone/lib/use-min-empty-height.ts
init_react_import();
var import_react27 = require("react");
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const appStore = useAppStoreApi();
  const [prevHeight, setPrevHeight] = (0, import_react27.useState)(0);
  const [isAnimating, setIsAnimating] = (0, import_react27.useState)(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  (0, import_react27.useEffect)(() => {
    if (draggedItem && ref.current) {
      if (isZone) {
        const rect = ref.current.getBoundingClientRect();
        setPrevHeight(rect.height);
        setIsAnimating(true);
        return;
      }
    }
    setPrevHeight(0);
    setTimeout(() => {
      const { nodes } = appStore.getState().nodes;
      Object.entries(nodes).forEach(([_, node]) => {
        node == null ? void 0 : node.methods.sync();
      });
      setIsAnimating(false);
    }, 400);
  }, [ref.current, draggedItem, zoneCompound]);
  return [prevHeight || userMinEmptyHeight, isAnimating];
};

// lib/assign-refs.ts
init_react_import();
function assignRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ref.current = node;
  }
}
function assignRefs(refs, node) {
  refs.forEach((ref) => {
    assignRef(ref, node);
  });
}

// components/DropZone/lib/use-content-with-preview.ts
init_react_import();
var import_react30 = require("react");

// lib/dnd/use-rendered-callback.ts
init_react_import();
var import_react28 = require("@dnd-kit/react");
var import_react29 = require("react");
function useRenderedCallback(callback, deps) {
  const manager = (0, import_react28.useDragDropManager)();
  return (0, import_react29.useCallback)(
    (...args) => __async(this, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [...deps, manager]
  );
}

// components/DropZone/lib/use-content-with-preview.ts
var useContentIdsWithPreview = (contentIds, zoneCompound) => {
  const { draggedItemId, preview, previewExists } = useContextStore(
    ZoneStoreContext,
    (s) => {
      var _a;
      return {
        draggedItemId: (_a = s.draggedItem) == null ? void 0 : _a.id,
        preview: s.previewIndex[zoneCompound],
        previewExists: Object.keys(s.previewIndex || {}).length > 0
      };
    }
  );
  const isDragging = useAppStore((s) => s.state.ui.isDragging);
  const [contentIdsWithPreview, setContentIdsWithPreview] = (0, import_react30.useState)(contentIds);
  const [localPreview, setLocalPreview] = (0, import_react30.useState)(
    preview
  );
  const updateContent = useRenderedCallback(
    (contentIds2, preview2, isDragging2) => {
      if (isDragging2 && !previewExists) {
        return;
      }
      if (preview2) {
        if (preview2.type === "insert") {
          setContentIdsWithPreview(
            insert(
              contentIds2.filter((id) => id !== preview2.props.id),
              preview2.index,
              preview2.props.id
            )
          );
        } else {
          setContentIdsWithPreview(
            insert(
              contentIds2.filter((id) => id !== preview2.props.id),
              preview2.index,
              preview2.props.id
            )
          );
        }
      } else {
        setContentIdsWithPreview(
          previewExists ? contentIds2.filter((id) => id !== draggedItemId) : contentIds2
        );
      }
      setLocalPreview(preview2);
    },
    [draggedItemId, previewExists]
  );
  (0, import_react30.useEffect)(() => {
    updateContent(contentIds, preview, isDragging);
  }, [contentIds, preview, isDragging]);
  return [contentIdsWithPreview, localPreview];
};

// components/DropZone/lib/use-drag-axis.ts
init_react_import();
var import_react31 = require("react");
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const status = useAppStore((s) => s.status);
  const [dragAxis, setDragAxis] = (0, import_react31.useState)(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = (0, import_react31.useCallback)(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "grid") {
        setDragAxis(GRID_DRAG_AXIS);
      } else if (computedStyle.display === "flex" && computedStyle.flexDirection === "row") {
        setDragAxis(FLEX_ROW_DRAG_AXIS);
      } else {
        setDragAxis(DEFAULT_DRAG_AXIS);
      }
    }
  }, [ref.current]);
  (0, import_react31.useEffect)(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, []);
  (0, import_react31.useEffect)(calculateDragAxis, [status, collisionAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
var import_shallow3 = require("zustand/react/shallow");

// components/Render/index.tsx
init_react_import();
var import_react32 = __toESM(require("react"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var renderContext = import_react32.default.createContext({
  config: { components: {} },
  data: { root: {}, content: [] },
  metadata: {}
});
function Render({
  config,
  data,
  metadata = {}
}) {
  var _a;
  const defaultedData = __spreadProps(__spreadValues({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = defaultedData.root.props || defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  if ((_a = config.root) == null ? void 0 : _a.render) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      DropZoneProvider,
      {
        value: {
          mode: "render",
          depth: 0
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          config.root.render,
          __spreadProps(__spreadValues({}, rootProps), {
            puck: {
              renderDropZone: DropZonePure,
              isEditing: false,
              dragRef: null
            },
            title,
            editMode: false,
            id: "puck-root",
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropZoneRenderPure, { zone: rootZone })
          })
        )
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    DropZoneProvider,
    {
      value: {
        mode: "render",
        depth: 0
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropZoneRenderPure, { zone: rootZone })
    }
  ) });
}

// components/DropZone/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var getClassName17 = get_class_name_factory_default("DropZone", styles_module_default12);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var DropZoneEditPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropZoneEdit, __spreadValues({}, props));
var DropZoneChild = ({
  zone,
  zoneCompound,
  componentId,
  preview,
  index,
  isEnabled,
  dragAxis,
  collisionAxis,
  inDroppableZone
}) => {
  var _a, _b;
  const metadata = useAppStore((s) => s.metadata);
  const puckProps = {
    renderDropZone: DropZoneEditPure,
    isEditing: true,
    dragRef: null,
    metadata
  };
  const ctx = (0, import_react33.useContext)(dropZoneContext);
  const { depth } = ctx;
  const contentItem = useAppStore(
    (0, import_shallow3.useShallow)((s) => {
      let content = s.state.data.content || [];
      if (zoneCompound !== rootDroppableId) {
        content = setupZone(s.state.data, zoneCompound).zones[zoneCompound];
      }
      return content.find((item2) => item2.props.id === componentId);
    })
  );
  const item = contentItem != null ? contentItem : (preview == null ? void 0 : preview.componentType) ? { type: preview.componentType, props: preview.props } : null;
  const componentConfig = useAppStore(
    (s) => (item == null ? void 0 : item.type) ? s.config.components[item.type] : null
  );
  const overrides = useAppStore((s) => s.overrides);
  const isLoading = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.componentState[componentId]) == null ? void 0 : _a2.loadingCount) > 0;
    }
  );
  const isSelected = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.selectedItem) == null ? void 0 : _a2.props.id) === componentId || false;
    }
  );
  let label = (_b = (_a = componentConfig == null ? void 0 : componentConfig.label) != null ? _a : item == null ? void 0 : item.type.toString()) != null ? _b : "Component";
  const renderPreview = (0, import_react33.useMemo)(
    () => function Preview4() {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DrawerItemInner, { name: label, children: overrides.componentItem });
    },
    [componentId, label, overrides]
  );
  if (!item) return;
  const defaultedProps = __spreadProps(__spreadValues(__spreadValues({}, componentConfig == null ? void 0 : componentConfig.defaultProps), item.props), {
    puck: puckProps,
    editMode: true
    // DEPRECATED
  });
  let Render2 = componentConfig ? componentConfig.render : () => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: { padding: 48, textAlign: "center" }, children: [
    "No configuration for ",
    item.type
  ] });
  let componentType = item.type;
  const isPreview = componentId === (preview == null ? void 0 : preview.props.id) && preview.type === "insert";
  if (isPreview) {
    Render2 = renderPreview;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    DraggableComponent,
    {
      id: componentId,
      componentType,
      zoneCompound,
      depth: depth + 1,
      index,
      isLoading,
      isSelected,
      label,
      isEnabled,
      autoDragAxis: dragAxis,
      userDragAxis: collisionAxis,
      inDroppableZone,
      children: (dragRef) => (componentConfig == null ? void 0 : componentConfig.inline) && !isPreview ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        Render2,
        __spreadProps(__spreadValues({}, defaultedProps), {
          puck: __spreadProps(__spreadValues({}, defaultedProps.puck), {
            dragRef
          })
        })
      ) }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { ref: dragRef, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Render2, __spreadValues({}, defaultedProps)) })
    }
  );
};
var DropZoneEdit = (0, import_react33.forwardRef)(
  function DropZoneEditInternal({
    zone,
    allow,
    disallow,
    style,
    className,
    minEmptyHeight: userMinEmptyHeight = 128,
    collisionAxis
  }, userRef) {
    const ctx = (0, import_react33.useContext)(dropZoneContext);
    const {
      // These all need setting via context
      areaId,
      depth,
      registerLocalZone,
      unregisterLocalZone,
      activeZones
    } = ctx;
    const path = useAppStore(
      (s) => {
        var _a;
        return areaId ? (_a = s.nodes.nodes[areaId]) == null ? void 0 : _a.path : null;
      }
    );
    let zoneCompound = rootDroppableId;
    if (areaId) {
      if (zone !== rootDroppableId) {
        zoneCompound = `${areaId}:${zone}`;
      }
    }
    const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
    const {
      isDeepestZone,
      inNextDeepestArea,
      draggedComponentType,
      userIsDragging
    } = useContextStore(ZoneStoreContext, (s) => {
      var _a, _b, _c;
      return {
        isDeepestZone: (_a = s.zoneDepthIndex[zoneCompound]) != null ? _a : false,
        inNextDeepestArea: s.nextAreaDepthIndex[areaId || ""],
        draggedItemId: (_b = s.draggedItem) == null ? void 0 : _b.id,
        draggedComponentType: (_c = s.draggedItem) == null ? void 0 : _c.data.componentType,
        userIsDragging: !!s.draggedItem
      };
    });
    (0, import_react33.useEffect)(() => {
      if (ctx == null ? void 0 : ctx.registerZone) {
        ctx == null ? void 0 : ctx.registerZone(zoneCompound);
      }
      return () => {
        if (ctx == null ? void 0 : ctx.unregisterZone) {
          ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
        }
      };
    }, []);
    const contentIds = useAppStore(
      (0, import_shallow3.useShallow)((s) => {
        let content = s.state.data.content || [];
        if (zoneCompound !== rootDroppableId) {
          content = setupZone(s.state.data, zoneCompound).zones[zoneCompound];
        }
        return content.map(({ props }) => props.id);
      })
    );
    const ref = (0, import_react33.useRef)(null);
    const acceptsTarget = (0, import_react33.useCallback)(
      (componentType) => {
        if (!componentType) {
          return true;
        }
        if (disallow) {
          const defaultedAllow = allow || [];
          const filteredDisallow = (disallow || []).filter(
            (item) => defaultedAllow.indexOf(item) === -1
          );
          if (filteredDisallow.indexOf(componentType) !== -1) {
            return false;
          }
        } else if (allow) {
          if (allow.indexOf(componentType) === -1) {
            return false;
          }
        }
        return true;
      },
      [allow, disallow]
    );
    (0, import_react33.useEffect)(() => {
      if (registerLocalZone) {
        registerLocalZone(zoneCompound, acceptsTarget(draggedComponentType));
      }
      return () => {
        if (unregisterLocalZone) {
          unregisterLocalZone(zoneCompound);
        }
      };
    }, [draggedComponentType, zoneCompound]);
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    let isEnabled = true;
    if (userIsDragging) {
      isEnabled = isDeepestZone;
    }
    if (isEnabled) {
      isEnabled = acceptsTarget(draggedComponentType);
    }
    const [contentIdsWithPreview, preview] = useContentIdsWithPreview(
      contentIds,
      zoneCompound
    );
    const isDropEnabled = isEnabled && (preview ? contentIdsWithPreview.length === 1 : contentIdsWithPreview.length === 0);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: acceptsTarget(draggedComponentType),
        path: path || []
      }
    };
    const { ref: dropRef } = useDroppableSafe(droppableConfig);
    const isAreaSelected = useAppStore(
      (s) => (s == null ? void 0 : s.selectedItem) && areaId === (s == null ? void 0 : s.selectedItem.props.id)
    );
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "div",
      {
        className: `${getClassName17({
          isRootZone,
          userIsDragging,
          hoveringOverArea,
          isEnabled,
          isAreaSelected,
          hasChildren: contentIds.length > 0,
          isActive: activeZones == null ? void 0 : activeZones[zoneCompound],
          isAnimating
        })}${className ? ` ${className}` : ""}`,
        ref: (node) => {
          assignRefs([ref, dropRef, userRef], node);
        },
        "data-testid": `dropzone:${zoneCompound}`,
        "data-puck-dropzone": zoneCompound,
        style: __spreadProps(__spreadValues({}, style), {
          "--min-empty-height": `${minEmptyHeight}px`,
          backgroundColor: RENDER_DEBUG ? getRandomColor() : style == null ? void 0 : style.backgroundColor
        }),
        children: contentIdsWithPreview.map((componentId, i) => {
          return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            DropZoneChild,
            {
              zone,
              zoneCompound,
              componentId,
              preview,
              dragAxis,
              isEnabled,
              index: i,
              collisionAxis,
              inDroppableZone: acceptsTarget(draggedComponentType)
            },
            componentId
          );
        })
      }
    );
  }
);
var DropZoneRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropZoneRender, __spreadValues({}, props));
var DropZoneRender = (0, import_react33.forwardRef)(
  function DropZoneRenderInternal({ className, style, zone }, ref) {
    const ctx = (0, import_react33.useContext)(dropZoneContext);
    const { areaId = "root" } = ctx || {};
    const { config, data, metadata } = (0, import_react33.useContext)(renderContext);
    let zoneCompound = rootDroppableId;
    let content = (data == null ? void 0 : data.content) || [];
    (0, import_react33.useEffect)(() => {
      if (ctx == null ? void 0 : ctx.registerZone) {
        ctx == null ? void 0 : ctx.registerZone(zoneCompound);
      }
      return () => {
        if (ctx == null ? void 0 : ctx.unregisterZone) {
          ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
        }
      };
    }, []);
    if (!data || !config) {
      return null;
    }
    if (areaId !== rootAreaId && zone !== rootZone) {
      zoneCompound = `${areaId}:${zone}`;
      content = setupZone(data, zoneCompound).zones[zoneCompound];
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          DropZoneProvider,
          {
            value: {
              areaId: item.props.id,
              depth: 1
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              Component.render,
              __spreadProps(__spreadValues({}, item.props), {
                puck: {
                  renderDropZone: DropZoneRenderPure,
                  metadata: metadata || {}
                }
              })
            )
          },
          item.props.id
        );
      }
      return null;
    }) });
  }
);
var DropZonePure = (props) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropZone, __spreadValues({}, props));
var DropZone = (0, import_react33.forwardRef)(
  function DropZone2(props, ref) {
    const ctx = (0, import_react33.useContext)(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropZoneEdit, __spreadProps(__spreadValues({}, props), { ref })) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropZoneRender, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);

// lib/dnd/NestedDroppablePlugin.ts
init_react_import();
var import_abstract10 = require("@dnd-kit/abstract");
var import_state3 = require("@dnd-kit/state");

// lib/throttle.ts
init_react_import();
function timeout2(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}
function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;
  return function(...args) {
    const now = time();
    const context = this;
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}

// lib/get-frame.ts
init_react_import();
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};

// lib/global-position.ts
init_react_import();
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    var _a;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (((_a = this.frameEl.contentWindow) == null ? void 0 : _a.innerWidth) || 1);
    }
  }
  get x() {
    return this.original.x;
  }
  get y() {
    return this.original.y;
  }
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top
      };
    }
    return this.original;
  }
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor
      };
    }
    return this.original;
  }
};

// lib/bubble-pointer-event.ts
init_react_import();
var BaseEvent = typeof PointerEvent !== "undefined" ? PointerEvent : Event;
var BubbledPointerEvent = class extends BaseEvent {
  constructor(type, data) {
    super(type, data);
    this._originalTarget = null;
    this.originalTarget = data.originalTarget;
  }
  // Necessary for Firefox
  set originalTarget(target) {
    this._originalTarget = target;
  }
  // Necessary for Firefox
  get originalTarget() {
    return this._originalTarget;
  }
};

// lib/dnd/NestedDroppablePlugin.ts
var depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.depth > bData.depth) {
      return 1;
    }
    if (bData.depth > aData.depth) {
      return -1;
    }
    return 0;
  });
};
var getZoneId2 = (candidate) => {
  let id = candidate == null ? void 0 : candidate.id;
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    if (data.containsActiveZone) {
      id = null;
    } else {
      id = data.zone;
    }
  } else if (candidate.type === "void") {
    return "void";
  }
  return id;
};
var getPointerCollisions = (position, manager) => {
  const candidates = [];
  let elements = position.target.ownerDocument.elementsFromPoint(
    position.x,
    position.y
  );
  const previewFrame = elements.find(
    (el) => el.getAttribute("data-puck-preview")
  );
  const drawer = elements.find((el) => el.getAttribute("data-puck-drawer"));
  if (drawer) {
    elements = [drawer];
  }
  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const dropzoneId = element.getAttribute("data-puck-dropzone");
      if (dropzoneId) {
        const droppable = manager.registry.droppables.get(dropzoneId);
        if (droppable) {
          candidates.push(droppable);
        }
      }
      const id = element.getAttribute("data-puck-dnd");
      if (id) {
        const droppable = manager.registry.droppables.get(id);
        if (droppable) {
          candidates.push(droppable);
        }
      }
    }
  }
  return candidates;
};
var findDeepestCandidate = (position, manager) => {
  var _a;
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === (draggable == null ? void 0 : draggable.id)
    );
    const draggedCandidateId = draggable == null ? void 0 : draggable.id;
    let filteredCandidates = [...sortedCandidates];
    if (draggedCandidateId && draggedCandidateIndex > -1) {
      filteredCandidates.splice(draggedCandidateIndex, 1);
    }
    filteredCandidates = filteredCandidates.filter((candidate) => {
      const candidateData = candidate.data;
      if (draggedCandidateId && draggedCandidateIndex > -1) {
        if (candidateData.path.indexOf(draggedCandidateId) > -1) {
          return false;
        }
      }
      if (candidate.type === "dropzone") {
        const candidateData2 = candidate.data;
        if (!candidateData2.isDroppableTarget) {
          return false;
        }
        if (candidateData2.areaId === draggedCandidateId) {
          return false;
        }
      } else if (candidate.type === "component") {
        const candidateData2 = candidate.data;
        if (!candidateData2.inDroppableZone) {
          return false;
        }
      }
      return true;
    });
    filteredCandidates.reverse();
    const zone = getZoneId2(filteredCandidates[0]);
    const area = (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: "default-zone",
    area: null
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends import_abstract10.Plugin {
  constructor(manager, options) {
    super(manager);
    if (typeof window === "undefined") {
      return;
    }
    const cleanupEffect = (0, import_state3.effects)(() => {
      const handleMove = (event) => {
        const target = event instanceof BubbledPointerEvent ? event.originalTarget || event.target : event.target;
        const position = new GlobalPosition(target, {
          x: event.clientX,
          y: event.clientY
        });
        const elements = document.elementsFromPoint(
          position.global.x,
          position.global.y
        );
        const overEl = elements.some((el) => el.id === id);
        if (overEl) {
          onChange(findDeepestCandidate(position, manager), manager);
        }
      };
      const handleMoveThrottled = throttle(handleMove, 50);
      const handlePointerMove = (event) => {
        handleMoveThrottled(event);
      };
      document.body.addEventListener("pointermove", handlePointerMove, {
        capture: true
        // dndkit's PointerSensor prevents propagation during drag
      });
      this.destroy = () => {
        document.body.removeEventListener("pointermove", handlePointerMove, {
          capture: true
        });
        cleanupEffect();
      };
    });
  }
};

// lib/insert-component.ts
init_react_import();
var insertComponent = (componentType, zone, index, {
  config,
  dispatch,
  resolveData: resolveData2,
  state
}) => {
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const insertedData = insertAction(state.data, insertActionData, config);
  dispatch(__spreadProps(__spreadValues({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = {
    index,
    zone
  };
  dispatch({ type: "setUi", ui: { itemSelector } });
  resolveData2({
    data: insertedData,
    ui: __spreadProps(__spreadValues({}, state.ui), { itemSelector })
  });
};

// components/DragDropContext/index.tsx
var import_use_debounce = require("use-debounce");
var import_zustand5 = require("zustand");

// lib/get-deep-dir.ts
init_react_import();
function getDeepDir(el) {
  function findDir(node) {
    if (!node) return "ltr";
    const d = node.getAttribute("dir");
    return d || findDir(node.parentElement);
  }
  return el ? findDir(el) : "ltr";
}

// components/DragDropContext/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var DEBUG3 = false;
var dragListenerContext = (0, import_react35.createContext)({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = (0, import_react35.useContext)(dragListenerContext);
  (0, import_react35.useEffect)(() => {
    if (setDragListeners) {
      setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
        [type]: [...old[type] || [], fn]
      }));
    }
  }, deps);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = (0, import_react35.useRef)(null);
  return (0, import_react35.useCallback)((manager) => {
    collisionStore.setState({ fallbackEnabled: false });
    const fallbackId = generateId();
    lastFallbackDisable.current = fallbackId;
    setTimeout(() => {
      if (lastFallbackDisable.current === fallbackId) {
        collisionStore.setState({ fallbackEnabled: true });
        manager.collisionObserver.forceUpdate(true);
      }
    }, timeout3);
  }, []);
};
var DragDropContextClient = ({
  children,
  disableAutoScroll
}) => {
  const config = useAppStore((s) => s.config);
  const dispatch = useAppStore((s) => s.dispatch);
  const resolveData2 = useAppStore((s) => s.resolveData);
  const metadata = useAppStore((s) => s.metadata);
  const appStore = useAppStoreApi();
  const id = useSafeId();
  const debouncedParamsRef = (0, import_react35.useRef)(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = (0, import_react35.useState)(
    () => (0, import_zustand5.createStore)(() => ({
      zoneDepthIndex: {},
      nextZoneDepthIndex: {},
      areaDepthIndex: {},
      nextAreaDepthIndex: {},
      draggedItem: null,
      previewIndex: {}
    }))
  );
  const getChanged2 = (0, import_react35.useCallback)(
    (params, id2) => {
      const { zoneDepthIndex = {}, areaDepthIndex = {} } = zoneStore.getState() || {};
      const stateHasZone = Object.keys(zoneDepthIndex).length > 0;
      const stateHasArea = Object.keys(areaDepthIndex).length > 0;
      let zoneChanged = false;
      let areaChanged = false;
      if (params.zone && !zoneDepthIndex[params.zone]) {
        zoneChanged = true;
      } else if (!params.zone && stateHasZone) {
        zoneChanged = true;
      }
      if (params.area && !areaDepthIndex[params.area]) {
        areaChanged = true;
      } else if (!params.area && stateHasArea) {
        areaChanged = true;
      }
      return { zoneChanged, areaChanged };
    },
    [zoneStore]
  );
  const setDeepestAndCollide = (0, import_react35.useCallback)(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged2(params, id);
      if (!zoneChanged && !areaChanged) return;
      zoneStore.setState({
        zoneDepthIndex: params.zone ? { [params.zone]: true } : {},
        areaDepthIndex: params.area ? { [params.area]: true } : {}
      });
      tempDisableFallback(manager);
      setTimeout(() => {
        manager.collisionObserver.forceUpdate(true);
      }, 50);
      debouncedParamsRef.current = null;
    },
    [zoneStore]
  );
  const setDeepestDb = (0, import_use_debounce.useDebouncedCallback)(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  (0, import_react35.useEffect)(() => {
    if (DEBUG3) {
      zoneStore.subscribe(
        (s) => {
          var _a, _b;
          return console.log(
            s.previewIndex,
            (_a = Object.entries(s.zoneDepthIndex || {})[0]) == null ? void 0 : _a[0],
            (_b = Object.entries(s.areaDepthIndex || {})[0]) == null ? void 0 : _b[0]
          );
        }
      );
    }
  }, []);
  const [plugins] = (0, import_react35.useState)(() => [
    ...disableAutoScroll ? import_dom.defaultPreset.plugins.filter((plugin) => plugin !== import_dom.AutoScroller) : import_dom.defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged2(params, id);
          const isDragging = manager.dragOperation.status.dragging;
          if (areaChanged || zoneChanged) {
            let nextZoneDepthIndex = {};
            let nextAreaDepthIndex = {};
            if (params.zone) {
              nextZoneDepthIndex = { [params.zone]: true };
            }
            if (params.area) {
              nextAreaDepthIndex = { [params.area]: true };
            }
            zoneStore.setState({ nextZoneDepthIndex, nextAreaDepthIndex });
          }
          if (params.zone !== "void" && (state == null ? void 0 : state.zoneDepthIndex["void"])) {
            setDeepestAndCollide(params, manager);
            return;
          }
          if (areaChanged) {
            if (isDragging) {
              const debouncedParams = debouncedParamsRef.current;
              const isSameParams = debouncedParams && debouncedParams.area === params.area && debouncedParams.zone === params.zone;
              if (!isSameParams) {
                cancelDb();
                setDeepestDb(params, manager);
                debouncedParamsRef.current = params;
              }
            } else {
              cancelDb();
              setDeepestAndCollide(params, manager);
            }
            return;
          }
          if (zoneChanged) {
            setDeepestAndCollide(params, manager);
          }
          cancelDb();
        }
      },
      id
    )
  ]);
  const sensors = useSensors();
  const [dragListeners, setDragListeners] = (0, import_react35.useState)({});
  const dragMode = (0, import_react35.useRef)(null);
  const initialSelector = (0, import_react35.useRef)(void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { id, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_react34.DragDropProvider,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            var _a;
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = ((_a = previewIndex[zone]) == null ? void 0 : _a.props.id) === source.id ? previewIndex[zone] : null;
            setTimeout(() => {
              var _a2, _b;
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || (target == null ? void 0 : target.type) === "void") {
                zoneStore.setState({ previewIndex: {} });
                (_a2 = dragListeners.dragend) == null ? void 0 : _a2.forEach((fn) => {
                  fn(event, manager);
                });
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: null,
                    isDragging: false
                  }
                });
                return;
              }
              if (thisPreview) {
                zoneStore.setState({ previewIndex: {} });
                const state = appStore.getState().state;
                if (thisPreview.type === "insert") {
                  insertComponent(
                    thisPreview.componentType,
                    thisPreview.zone,
                    thisPreview.index,
                    { config, dispatch, resolveData: resolveData2, state }
                  );
                } else if (initialSelector.current) {
                  dispatch({
                    type: "move",
                    sourceIndex: initialSelector.current.index,
                    sourceZone: initialSelector.current.zone,
                    destinationIndex: thisPreview.index,
                    destinationZone: thisPreview.zone,
                    recordHistory: false
                  });
                }
              }
              setTimeout(() => {
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: { index, zone },
                    isDragging: false
                  },
                  recordHistory: true
                });
              }, 50);
              (_b = dragListeners.dragend) == null ? void 0 : _b.forEach((fn) => {
                fn(event, manager);
              });
            }, 250);
          },
          onDragOver: (event, manager) => {
            var _a, _b, _c, _d, _e;
            event.preventDefault();
            const draggedItem = (_a = zoneStore.getState()) == null ? void 0 : _a.draggedItem;
            if (!draggedItem) return;
            cancelDb();
            const { source, target } = event.operation;
            if (!target || !source || target.type === "void") return;
            const [sourceId] = source.id.split(":");
            const [targetId] = target.id.split(":");
            const sourceData = source.data;
            let sourceZone = sourceData.zone;
            let sourceIndex = sourceData.index;
            let targetZone = "";
            let targetIndex = 0;
            if (target.type === "component") {
              const targetData = target.data;
              targetZone = targetData.zone;
              targetIndex = targetData.index;
              const collisionData = (_c = (_b = manager.dragOperation.data) == null ? void 0 : _b.collisionMap) == null ? void 0 : _c[targetId];
              const dir = getDeepDir(target.element);
              const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" || dir === "ltr" && (collisionData == null ? void 0 : collisionData.direction) === "left" || dir === "rtl" && (collisionData == null ? void 0 : collisionData.direction) === "right" ? "before" : "after";
              if (targetIndex >= sourceIndex && sourceZone === targetZone) {
                targetIndex = targetIndex - 1;
              }
              if (collisionPosition === "after") {
                targetIndex = targetIndex + 1;
              }
            } else {
              targetZone = target.id.toString();
              targetIndex = 0;
            }
            const path = ((_d = appStore.getState().nodes.nodes[target.id]) == null ? void 0 : _d.path) || [];
            if (targetId === sourceId || path.find((path2) => {
              const [pathId] = path2.split(":");
              return pathId === sourceId;
            })) {
              return;
            }
            if (dragMode.current === "new") {
              zoneStore.setState({
                previewIndex: {
                  [targetZone]: {
                    componentType: sourceData.componentType,
                    type: "insert",
                    index: targetIndex,
                    zone: targetZone,
                    props: {
                      id: source.id.toString()
                    }
                  }
                }
              });
            } else {
              if (!initialSelector.current) {
                initialSelector.current = {
                  zone: sourceData.zone,
                  index: sourceData.index
                };
              }
              const item = getItem(
                initialSelector.current,
                appStore.getState().state.data,
                {}
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [targetZone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: targetIndex,
                      zone: targetZone,
                      props: item.props
                    }
                  }
                });
              }
            }
            (_e = dragListeners.dragover) == null ? void 0 : _e.forEach((fn) => {
              fn(event, manager);
            });
          },
          onDragStart: (event, manager) => {
            var _a;
            dispatch({
              type: "setUi",
              ui: { itemSelector: null, isDragging: true }
            });
            const { source } = event.operation;
            if (source && source.type !== "void") {
              const sourceData = source.data;
              const { data } = appStore.getState().state;
              const item = getItem(
                {
                  zone: sourceData.zone,
                  index: sourceData.index
                },
                data
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [sourceData.zone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: sourceData.index,
                      zone: sourceData.zone,
                      props: item.props
                    }
                  }
                });
              }
            }
            (_a = dragListeners.dragstart) == null ? void 0 : _a.forEach((fn) => {
              fn(event, manager);
            });
          },
          onBeforeDragStart: (event) => {
            var _a;
            const isNewComponent = ((_a = event.operation.source) == null ? void 0 : _a.data.type) === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            DropZoneProvider,
            {
              value: {
                mode: "edit",
                areaId: "root",
                depth: 0
              },
              children
            }
          ) })
        }
      )
    }
  ) });
};
var DragDropContext = ({
  children,
  disableAutoScroll
}) => {
  const status = useAppStore((s) => s.status);
  if (status === "LOADING") {
    return children;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DragDropContextClient, { disableAutoScroll, children });
};

// components/Drawer/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var getClassName18 = get_class_name_factory_default("Drawer", styles_module_default10);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default10);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = (0, import_react36.useMemo)(
    () => children || (({ children: children2 }) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-puck-drawer-item": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(CustomInner, { name, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DragIcon, {}) })
      ] }) }) })
    }
  );
};
var DrawerItemDraggable = ({
  children,
  name,
  label,
  id,
  isDragDisabled
}) => {
  const { ref } = useDraggableSafe({
    id,
    data: { type: "drawer", componentType: name },
    disabled: isDragDisabled
  });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: getClassName18("draggable"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassName18("draggableBg"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassName18("draggableFg"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      DrawerItemInner,
      {
        name,
        label,
        dragRef: ref,
        isDragDisabled,
        children
      }
    ) })
  ] });
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const resolvedId = id || name;
  const [dynamicId, setDynamicId] = (0, import_react36.useState)(generateId(resolvedId));
  if (typeof index !== "undefined") {
    console.error(
      "Warning: The `index` prop on Drawer.Item is deprecated and no longer required."
    );
  }
  useDragListener(
    "dragend",
    () => {
      setDynamicId(generateId(resolvedId));
    },
    [resolvedId]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    DrawerItemDraggable,
    {
      name,
      label,
      id: dynamicId,
      isDragDisabled,
      children
    }
  ) }, dynamicId);
};
var Drawer = ({
  children,
  droppableId,
  direction
}) => {
  if (droppableId) {
    console.error(
      "Warning: The `droppableId` prop on Drawer is deprecated and no longer required."
    );
  }
  if (direction) {
    console.error(
      "Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging."
    );
  }
  const id = useSafeId();
  const { ref } = useDroppableSafe({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      className: getClassName18(),
      ref,
      "data-puck-dnd": id,
      "data-puck-drawer": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// components/Puck/index.tsx
init_react_import();
var import_react51 = require("react");

// components/SidebarSection/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\SidebarSection\styles.module.css#css-module
init_react_import();
var styles_module_default13 = { "SidebarSection": "_SidebarSection_4u4iw_1", "SidebarSection-title": "_SidebarSection-title_4u4iw_23", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_4u4iw_39", "SidebarSection-content": "_SidebarSection-content_4u4iw_47", "SidebarSection--noPadding": "_SidebarSection--noPadding_4u4iw_55", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_4u4iw_81", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_4u4iw_139", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_4u4iw_81", "SidebarSection-heading": "_SidebarSection-heading_4u4iw_163", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_4u4iw_171" };

// lib/use-breadcrumbs.ts
init_react_import();
var import_react37 = require("react");
var useBreadcrumbs = (renderCount) => {
  const selectedId = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => {
    var _a;
    return (_a = s.nodes.nodes[selectedId]) == null ? void 0 : _a.path;
  });
  const appStore = useAppStoreApi();
  return (0, import_react37.useMemo)(() => {
    const breadcrumbs = (path == null ? void 0 : path.map((zoneCompound) => {
      var _a, _b;
      const [componentId] = zoneCompound.split(":");
      if (componentId === "root") {
        return {
          label: "Page",
          selector: null
        };
      }
      const node = appStore.getState().nodes.nodes[componentId];
      const label = node ? (_b = (_a = config.components[node.data.type]) == null ? void 0 : _a.label) != null ? _b : node.data.type : "Component";
      return {
        label,
        selector: node ? {
          index: node.index,
          zone: node.path[node.path.length - 1]
        } : null
      };
    })) || [];
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [path, renderCount]);
};

// components/SidebarSection/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var getClassName19 = get_class_name_factory_default("SidebarSection", styles_module_default13);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  noPadding,
  isLoading
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(1);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: getClassName19({ noBorderTop, noPadding }),
      style: { background },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("title"), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: getClassName19("breadcrumbs"), children: [
          showBreadcrumbs ? breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: getClassName19("breadcrumb"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "button",
              {
                type: "button",
                className: getClassName19("breadcrumbLabel"),
                onClick: () => setUi({ itemSelector: breadcrumb.selector }),
                children: breadcrumb.label
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronRight, { size: 16 })
          ] }, i)) : null,
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("heading"), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Heading, { rank: "2", size: "xs", children: title }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("content"), children }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Loader, { size: 32 }) })
      ]
    }
  );
};

// components/MenuBar/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\MenuBar\styles.module.css#css-module
init_react_import();
var styles_module_default14 = { "MenuBar": "_MenuBar_12cki_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_12cki_27", "MenuBar-inner": "_MenuBar-inner_12cki_57", "MenuBar-history": "_MenuBar-history_12cki_89" };

// components/MenuBar/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var getClassName20 = get_class_name_factory_default("MenuBar", styles_module_default14);
function MenuBar({
  menuOpen = false,
  renderHeaderActions,
  setMenuOpen
}) {
  const back = useAppStore((s) => s.history.back);
  const forward = useAppStore((s) => s.history.forward);
  const hasFuture = useAppStore((s) => s.history.hasFuture());
  const hasPast = useAppStore((s) => s.history.hasPast());
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "div",
    {
      className: getClassName20({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: getClassName20("inner"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: getClassName20("history"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(IconButton, { title: "undo", disabled: !hasPast, onClick: back, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Undo2, { size: 21 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(IconButton, { title: "redo", disabled: !hasFuture, onClick: forward, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Redo2, { size: 21 }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, { children: renderHeaderActions && renderHeaderActions() })
      ] })
    }
  );
}

// css-module:D:\Puck\puck\packages\core\components\Puck\styles.module.css#css-module
init_react_import();
var styles_module_default15 = { "Puck": "_Puck_vv9a8_37", "Puck-portal": "_Puck-portal_vv9a8_47", "PuckLayout-inner": "_PuckLayout-inner_vv9a8_61", "PuckLayout--mounted": "_PuckLayout--mounted_vv9a8_85", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_vv9a8_93", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_vv9a8_105", "PuckLayout-mounted": "_PuckLayout-mounted_vv9a8_133", "PuckLayout": "_PuckLayout_vv9a8_61", "PuckLayout-header": "_PuckLayout-header_vv9a8_215", "PuckLayout-headerInner": "_PuckLayout-headerInner_vv9a8_233", "PuckLayout-headerToggle": "_PuckLayout-headerToggle_vv9a8_253", "PuckLayout-rightSideBarToggle": "_PuckLayout-rightSideBarToggle_vv9a8_267", "PuckLayout-leftSideBarToggle": "_PuckLayout-leftSideBarToggle_vv9a8_269", "PuckLayout-headerTitle": "_PuckLayout-headerTitle_vv9a8_277", "PuckLayout-headerPath": "_PuckLayout-headerPath_vv9a8_285", "PuckLayout-headerTools": "_PuckLayout-headerTools_vv9a8_299", "PuckLayout-menuButton": "_PuckLayout-menuButton_vv9a8_311", "PuckLayout--menuOpen": "_PuckLayout--menuOpen_vv9a8_321", "PuckLayout-leftSideBar": "_PuckLayout-leftSideBar_vv9a8_269", "PuckLayout-rightSideBar": "_PuckLayout-rightSideBar_vv9a8_267" };

// components/Puck/components/Fields/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\Puck\components\Fields\styles.module.css#css-module
init_react_import();
var styles_module_default16 = { "PuckFields": "_PuckFields_1a2ck_1", "PuckFields--isLoading": "_PuckFields--isLoading_1a2ck_11", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_1a2ck_19", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_1a2ck_49", "PuckFields-field": "_PuckFields-field_1a2ck_63", "PuckFields--wrapFields": "_PuckFields--wrapFields_1a2ck_71" };

// components/Puck/components/Fields/index.tsx
var import_react38 = require("react");
var import_shallow4 = require("zustand/react/shallow");
var import_jsx_runtime27 = require("react/jsx-runtime");
var getClassName21 = get_class_name_factory_default("PuckFields", styles_module_default16);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children });
};
var createOnChange = (fieldName, appStore) => (value, updatedUi) => {
  var _a, _b;
  let currentProps;
  const { dispatch, resolveData: resolveData2, config, state, selectedItem } = appStore.getState();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const rootProps = data.root.props || data.root;
  if (selectedItem) {
    currentProps = selectedItem.props;
  } else {
    currentProps = rootProps;
  }
  const newProps = __spreadProps(__spreadValues({}, currentProps), {
    [fieldName]: value
  });
  if (selectedItem && itemSelector) {
    const replaceActionData = {
      type: "replace",
      destinationIndex: itemSelector.index,
      destinationZone: itemSelector.zone || rootDroppableId,
      data: __spreadProps(__spreadValues({}, selectedItem), { props: newProps })
    };
    const replacedData = replaceAction(data, replaceActionData);
    const setActionData = {
      type: "set",
      state: {
        data: __spreadValues(__spreadValues({}, data), replacedData),
        ui: __spreadValues(__spreadValues({}, ui), updatedUi)
      }
    };
    if ((_a = config.components[selectedItem.type]) == null ? void 0 : _a.resolveData) {
      resolveData2(setAction(state, setActionData));
    } else {
      dispatch(__spreadProps(__spreadValues({}, setActionData), {
        recordHistory: true
      }));
    }
  } else {
    if (data.root.props) {
      if ((_b = config.root) == null ? void 0 : _b.resolveData) {
        resolveData2({
          ui: __spreadValues(__spreadValues({}, ui), updatedUi),
          data: __spreadProps(__spreadValues({}, data), {
            root: { props: newProps }
          })
        });
      } else {
        dispatch({
          type: "set",
          state: {
            ui: __spreadValues(__spreadValues({}, ui), updatedUi),
            data: __spreadProps(__spreadValues({}, data), {
              root: { props: newProps }
            })
          },
          recordHistory: true
        });
      }
    } else {
      dispatch({
        type: "setData",
        data: { root: newProps }
      });
    }
  }
};
var FieldsChild = ({ fieldName }) => {
  const field = useAppStore((s) => s.fields.fields[fieldName]);
  const isReadOnly = useAppStore(
    (s) => ((s.selectedItem ? s.selectedItem.readOnly : s.state.data.root.readOnly) || {})[fieldName]
  );
  const value = useAppStore((s) => {
    const rootProps = s.state.data.root.props || s.state.data.root;
    return s.selectedItem ? s.selectedItem.props[fieldName] : rootProps[fieldName];
  });
  const id = useAppStore((s) => {
    if (!field) return null;
    return s.selectedItem ? `${s.selectedItem.props.id}_${field.type}_${fieldName}` : `root_${field.type}_${fieldName}`;
  });
  const permissions = useAppStore(
    (0, import_shallow4.useShallow)((s) => {
      const { selectedItem, permissions: permissions2 } = s;
      return selectedItem ? permissions2.getPermissions({ item: selectedItem }) : permissions2.getPermissions({ root: true });
    })
  );
  const appStore = useAppStoreApi();
  const onChange = (0, import_react38.useCallback)(createOnChange(fieldName, appStore), [
    fieldName
  ]);
  if (!field || !id) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: getClassName21("field"), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    AutoFieldPrivate,
    {
      field,
      name: fieldName,
      id,
      readOnly: !permissions.edit || isReadOnly,
      value,
      onChange
    }
  ) }, id);
};
var Fields = ({ wrapFields = true }) => {
  const overrides = useAppStore((s) => s.overrides);
  const componentResolving = useAppStore((s) => {
    var _a, _b;
    const loadingCount = s.selectedItem ? (_a = s.componentState[s.selectedItem.props.id]) == null ? void 0 : _a.loadingCount : (_b = s.componentState["puck-root"]) == null ? void 0 : _b.loadingCount;
    return (loadingCount != null ? loadingCount : 0) > 0;
  });
  const itemSelector = useAppStore((0, import_shallow4.useShallow)((s) => s.state.ui.itemSelector));
  const id = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const appStore = useAppStoreApi();
  useRegisterFieldsSlice(appStore, id);
  const fieldsLoading = useAppStore((s) => s.fields.loading);
  const fieldNames = useAppStore(
    (0, import_shallow4.useShallow)((s) => Object.keys(s.fields.fields))
  );
  const isLoading = fieldsLoading || componentResolving;
  const Wrapper = (0, import_react38.useMemo)(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "form",
    {
      className: getClassName21({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Wrapper, { isLoading, itemSelector, children: fieldNames.map((fieldName) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(FieldsChild, { fieldName }, fieldName)) }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: getClassName21("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: getClassName21("loadingOverlayInner"), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Loader, { size: 16 }) }) })
      ]
    }
  );
};

// components/Puck/components/Components/index.tsx
init_react_import();

// lib/use-component-list.tsx
init_react_import();
var import_react39 = require("react");

// components/ComponentList/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\ComponentList\styles.module.css#css-module
init_react_import();
var styles_module_default17 = { "ComponentList": "_ComponentList_1gojt_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1gojt_9", "ComponentList-content": "_ComponentList-content_1gojt_17", "ComponentList-title": "_ComponentList-title_1gojt_33", "ComponentList-titleIcon": "_ComponentList-titleIcon_1gojt_105" };

// components/ComponentList/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var getClassName22 = get_class_name_factory_default("ComponentList", styles_module_default17);
var ComponentListItem = ({
  name,
  label
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) => s.permissions.getPermissions({
      type: name
    }).insert
  );
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: overrides.componentItem });
};
var ComponentList = ({
  children,
  title,
  id
}) => {
  const config = useAppStore((s) => s.config);
  const setUi = useAppStore((s) => s.setUi);
  const componentList = useAppStore((s) => s.state.ui.componentList);
  const { expanded = true } = componentList[id] || {};
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: getClassName22({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "button",
      {
        type: "button",
        className: getClassName22("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, componentList), {
            [id]: __spreadProps(__spreadValues({}, componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: getClassName22("titleIcon"), children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ChevronUp, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: getClassName22("content"), children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var useComponentList = () => {
  const [componentList, setComponentList] = (0, import_react39.useState)();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);
  (0, import_react39.useEffect)(() => {
    var _a, _b, _c;
    if (Object.keys(uiComponentList).length > 0) {
      const matchedComponents = [];
      let _componentList;
      _componentList = Object.entries(uiComponentList).map(
        ([categoryKey, category]) => {
          if (category.visible === false || !category.components) {
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                matchedComponents.push(componentName);
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      if (remainingComponents.length > 0 && !((_a = uiComponentList.other) == null ? void 0 : _a.components) && ((_b = uiComponentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            ComponentList,
            {
              id: "other",
              title: ((_c = uiComponentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, uiComponentList]);
  return componentList;
};

// components/Puck/components/Components/index.tsx
var import_react40 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const componentList = useComponentList();
  const Wrapper = (0, import_react40.useMemo)(() => overrides.components || "div", [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ComponentList, { id: "all" }) });
};

// components/Puck/components/Preview/index.tsx
init_react_import();
var import_react42 = require("react");

// components/AutoFrame/index.tsx
init_react_import();
var import_react41 = require("react");
var import_object_hash = __toESM(require("object-hash"));
var import_react_dom3 = require("react-dom");
var import_jsx_runtime31 = require("react/jsx-runtime");
var styleSelector = 'style, link[rel="stylesheet"]';
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    collected.push(style);
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring\u2026",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null
}) => {
  const { document: doc, window: win } = useFrame();
  (0, import_react41.useEffect)(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(void 0, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles2 = getStyles(styleSheet);
        if (!styles2) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles2;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      return mirror;
    });
    const addEl = (el) => __async(void 0, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = (0, import_object_hash.default)(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = (0, import_object_hash.default)(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(void 0, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.innerHTML = "";
      doc.head.append(...filtered);
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = (0, import_object_hash.default)(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children });
};
var autoFrameContext = (0, import_react41.createContext)({});
var useFrame = () => (0, import_react41.useContext)(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onReady = () => {
    },
    onNotReady = () => {
    },
    frameRef
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onReady",
    "onNotReady",
    "frameRef"
  ]);
  const [loaded, setLoaded] = (0, import_react41.useState)(false);
  const [ctx, setCtx] = (0, import_react41.useState)({});
  const [mountTarget, setMountTarget] = (0, import_react41.useState)();
  const [stylesLoaded, setStylesLoaded] = (0, import_react41.useState)(false);
  (0, import_react41.useEffect)(() => {
    var _a2;
    if (frameRef.current) {
      const doc = frameRef.current.contentDocument;
      const win = frameRef.current.contentWindow;
      setCtx({
        document: doc || void 0,
        window: win || void 0
      });
      setMountTarget(
        (_a2 = frameRef.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root")
      );
      if (doc && win && stylesLoaded) {
        onReady();
      } else {
        onNotReady();
      }
    }
  }, [frameRef, loaded, stylesLoaded]);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        CopyHostStyles,
        {
          debug,
          onStylesLoaded: () => setStylesLoaded(true),
          children: (0, import_react_dom3.createPortal)(children, mountTarget)
        }
      ) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:D:\Puck\puck\packages\core\components\Puck\components\Preview\styles.module.css#css-module
init_react_import();
var styles_module_default18 = { "PuckPreview": "_PuckPreview_1cdnb_1", "PuckPreview-frame": "_PuckPreview-frame_1cdnb_11" };

// components/Puck/components/Preview/index.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var getClassName23 = get_class_name_factory_default("PuckPreview", styles_module_default18);
var useBubbleIframeEvents = (ref) => {
  const status = useAppStore((s) => s.status);
  (0, import_react42.useEffect)(() => {
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEvent("pointermove", __spreadProps(__spreadValues({}, event), {
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target
        }));
        iframe.dispatchEvent(evt);
      };
      const register = () => {
        var _a;
        unregister();
        (_a = iframe.contentDocument) == null ? void 0 : _a.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            capture: true
          }
        );
      };
      const unregister = () => {
        var _a;
        (_a = iframe.contentDocument) == null ? void 0 : _a.removeEventListener(
          "pointermove",
          handlePointerMove
        );
      };
      register();
      return () => {
        unregister();
      };
    }
  }, [status]);
};
var Preview3 = ({ id = "puck-preview" }) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const root = useAppStore((s) => s.state.data.root);
  const config = useAppStore((s) => s.config);
  const setStatus = useAppStore((s) => s.setStatus);
  const iframe = useAppStore((s) => s.iframe);
  const overrides = useAppStore((s) => s.overrides);
  const metadata = useAppStore((s) => s.metadata);
  const renderData = useAppStore(
    (s) => s.state.ui.previewMode === "edit" ? null : s.state.data
  );
  const Page = (0, import_react42.useCallback)(
    (pageProps) => {
      var _a, _b;
      return ((_a = config.root) == null ? void 0 : _a.render) ? (_b = config.root) == null ? void 0 : _b.render(__spreadValues({
        id: "puck-root"
      }, pageProps)) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: pageProps.children });
    },
    [config.root]
  );
  const Frame = (0, import_react42.useMemo)(() => overrides.iframe, [overrides]);
  const rootProps = root.props || root;
  const ref = (0, import_react42.useRef)(null);
  useBubbleIframeEvents(ref);
  const inner = !renderData ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Page,
    __spreadProps(__spreadValues({}, rootProps), {
      puck: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata
      },
      editMode: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropZonePure, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Render, { data: renderData, config });
  (0, import_react42.useEffect)(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: getClassName23(),
      id,
      "data-puck-preview": true,
      onClick: () => {
        dispatch({ type: "setUi", ui: { itemSelector: null } });
      },
      children: iframe.enabled ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          "data-rfd-iframe": true,
          onReady: () => {
            setStatus("READY");
          },
          onNotReady: () => {
            setStatus("MOUNTED");
          },
          frameRef: ref,
          children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "div",
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          ref,
          "data-puck-entry": true,
          children: inner
        }
      )
    }
  );
};

// components/Puck/components/Outline/index.tsx
init_react_import();

// lib/area-contains-zones.ts
init_react_import();

// lib/find-zones-for-area.ts
init_react_import();
var findZonesForArea = (data, area) => {
  const { zones = {} } = data;
  const result = Object.keys(zones).filter(
    (zoneId) => getZoneId(zoneId)[0] === area
  );
  return result.reduce((acc, key) => {
    return __spreadProps(__spreadValues({}, acc), { [key]: zones[key] });
  }, {});
};

// lib/area-contains-zones.ts
var areaContainsZones = (data, area) => {
  const zones = Object.keys(findZonesForArea(data, area));
  return zones.length > 0;
};

// components/LayerTree/index.tsx
init_react_import();

// css-module:D:\Puck\puck\packages\core\components\LayerTree\styles.module.css#css-module
init_react_import();
var styles_module_default19 = { "LayerTree": "_LayerTree_qx85z_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_qx85z_21", "LayerTree-helper": "_LayerTree-helper_qx85z_33", "Layer": "_Layer_qx85z_1", "Layer-inner": "_Layer-inner_qx85z_57", "Layer--containsZone": "_Layer--containsZone_qx85z_69", "Layer-clickable": "_Layer-clickable_qx85z_77", "Layer--isSelected": "_Layer--isSelected_qx85z_121", "Layer-chevron": "_Layer-chevron_qx85z_153", "Layer--childIsSelected": "_Layer--childIsSelected_qx85z_155", "Layer-zones": "_Layer-zones_qx85z_163", "Layer-title": "_Layer-title_qx85z_191", "Layer-name": "_Layer-name_qx85z_209", "Layer-icon": "_Layer-icon_qx85z_221", "Layer-zoneIcon": "_Layer-zoneIcon_qx85z_231" };

// lib/scroll-into-view.ts
init_react_import();
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};

// components/LayerTree/index.tsx
var import_react43 = require("react");

// lib/on-scroll-end.ts
init_react_import();
var onScrollEnd = (frame, cb) => {
  let scrollTimeout;
  const callback = function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      cb();
      frame == null ? void 0 : frame.removeEventListener("scroll", callback);
    }, 50);
  };
  frame == null ? void 0 : frame.addEventListener("scroll", callback);
  setTimeout(() => {
    if (!scrollTimeout) {
      cb();
    }
  }, 50);
};

// components/LayerTree/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var getClassName24 = get_class_name_factory_default("LayerTree", styles_module_default19);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default19);
var LayerTree = ({
  data,
  config,
  zoneContent,
  itemSelector,
  setItemSelector,
  zone,
  label
}) => {
  const zones = data.zones || {};
  const ctx = (0, import_react43.useContext)(dropZoneContext);
  const nodes = useAppStore((s) => s.nodes.nodes);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: getClassName24("zoneTitle"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassName24("zoneIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Layers, { size: "16" }) }),
      " ",
      label
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("ul", { className: getClassName24(), children: [
      zoneContent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassName24("helper"), children: "No items" }),
      zoneContent.map((item, i) => {
        var _a, _b, _c, _d;
        const isSelected = (itemSelector == null ? void 0 : itemSelector.index) === i && (itemSelector.zone === zone || itemSelector.zone === rootDroppableId && !zone);
        const zonesForItem = findZonesForArea(data, item.props.id);
        const containsZone = Object.keys(zonesForItem).length > 0;
        const { setHoveringComponent = () => {
        }, hoveringComponent } = ctx || {};
        const selectedItem = itemSelector && data ? getItem(itemSelector, data) : null;
        const isHovering = hoveringComponent === item.props.id;
        const path = selectedItem ? (_b = (_a = nodes[selectedItem == null ? void 0 : selectedItem.props.id]) == null ? void 0 : _a.path) != null ? _b : [] : [];
        const childIsSelected = (_c = path == null ? void 0 : path.some((candidate) => {
          const [candidateId] = candidate.split(":");
          return candidateId === item.props.id;
        })) != null ? _c : false;
        const componentConfig = config.components[item.type];
        const label2 = (_d = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _d : item.type.toString();
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
          "li",
          {
            className: getClassNameLayer({
              isSelected,
              isHovering,
              containsZone,
              childIsSelected
            }),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
                "button",
                {
                  type: "button",
                  className: getClassNameLayer("clickable"),
                  onClick: () => {
                    if (isSelected) {
                      setItemSelector(null);
                      return;
                    }
                    const id = zoneContent[i].props.id;
                    const frame = getFrame();
                    const el = frame == null ? void 0 : frame.querySelector(
                      `[data-puck-component="${id}"]`
                    );
                    if (!el) {
                      console.error(
                        "Scroll failed. No element was found for",
                        id
                      );
                      return;
                    }
                    scrollIntoView(el);
                    onScrollEnd(frame, () => {
                      setItemSelector({
                        index: i,
                        zone
                      });
                    });
                  },
                  onMouseOver: (e) => {
                    e.stopPropagation();
                    setHoveringComponent(item.props.id);
                  },
                  onMouseOut: (e) => {
                    e.stopPropagation();
                    setHoveringComponent(null);
                  },
                  children: [
                    containsZone && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      "div",
                      {
                        className: getClassNameLayer("chevron"),
                        title: isSelected ? "Collapse" : "Expand",
                        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ChevronDown, { size: "12" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: getClassNameLayer("title"), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("icon"), children: item.type === "Text" || item.type === "Heading" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Type, { size: "16" }) : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(LayoutGrid, { size: "16" }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("name"), children: label2 })
                    ] })
                  ]
                }
              ) }),
              containsZone && Object.keys(zonesForItem).map((zoneKey, idx) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("zones"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                LayerTree,
                {
                  config,
                  data,
                  zoneContent: zones[zoneKey],
                  setItemSelector,
                  itemSelector,
                  zone: zoneKey,
                  label: getZoneId(zoneKey)[1]
                }
              ) }, idx))
            ]
          },
          `${item.props.id}_${i}`
        );
      })
    ] })
  ] });
};

// components/Puck/components/Outline/index.tsx
var import_react44 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var Outline = () => {
  const state = useAppStore((s) => s.state);
  const config = useAppStore((s) => s.config);
  const outlineOverride = useAppStore((s) => s.overrides.outline);
  const { data, ui } = state;
  const { itemSelector } = ui;
  const appStore = useAppStoreApi();
  const setItemSelector = (0, import_react44.useCallback)(
    (newItemSelector) => {
      const { dispatch } = appStore.getState();
      dispatch({
        type: "setUi",
        ui: { itemSelector: newItemSelector }
      });
    },
    [appStore]
  );
  const Wrapper = (0, import_react44.useMemo)(() => outlineOverride || "div", [outlineOverride]);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(dropZoneContext.Consumer, { children: (ctx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    (ctx == null ? void 0 : ctx.activeZones) && (ctx == null ? void 0 : ctx.activeZones[rootDroppableId]) && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      LayerTree,
      {
        config,
        data,
        label: areaContainsZones(data, "root") ? rootDroppableId : "",
        zoneContent: data.content,
        setItemSelector,
        itemSelector
      }
    ),
    Object.entries(findZonesForArea(data, "root")).map(
      ([zoneKey, zone]) => {
        return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          LayerTree,
          {
            config,
            data,
            label: zoneKey,
            zone: zoneKey,
            zoneContent: zone,
            setItemSelector,
            itemSelector
          },
          zoneKey
        );
      }
    )
  ] }) }) });
};

// components/Puck/components/Canvas/index.tsx
init_react_import();

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
init_react_import();

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
init_react_import();
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles2) {
  var margin = {
    top: parse(styles2.marginTop),
    right: parse(styles2.marginRight),
    bottom: parse(styles2.marginBottom),
    left: parse(styles2.marginLeft)
  };
  var padding = {
    top: parse(styles2.paddingTop),
    right: parse(styles2.paddingRight),
    bottom: parse(styles2.paddingBottom),
    left: parse(styles2.paddingLeft)
  };
  var border = {
    top: parse(styles2.borderTopWidth),
    right: parse(styles2.borderRightWidth),
    bottom: parse(styles2.borderBottomWidth),
    left: parse(styles2.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles2 = window.getComputedStyle(el);
  return calculateBox(borderBox, styles2);
};

// components/Puck/components/Canvas/index.tsx
var import_react46 = require("react");

// components/ViewportControls/index.tsx
init_react_import();
var import_react45 = require("react");

// css-module:D:\Puck\puck\packages\core\components\ViewportControls\styles.module.css#css-module
init_react_import();
var styles_module_default20 = { "ViewportControls": "_ViewportControls_1hukc_1", "ViewportControls-divider": "_ViewportControls-divider_1hukc_29", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_1hukc_41", "ViewportButton--isActive": "_ViewportButton--isActive_1hukc_75", "ViewportButton-inner": "_ViewportButton-inner_1hukc_75" };

// components/ViewportControls/index.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var icons = {
  Smartphone: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Monitor, { size: 16 })
};
var getClassName25 = get_class_name_factory_default("ViewportControls", styles_module_default20);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default20);
var ViewportButton = ({
  children,
  height = "auto",
  title,
  width,
  onClick
}) => {
  const viewports = useAppStore((s) => s.state.ui.viewports);
  const [isActive, setIsActive] = (0, import_react45.useState)(false);
  (0, import_react45.useEffect)(() => {
    setIsActive(width === viewports.current.width);
  }, [width, viewports.current.width]);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: getClassNameButton({ isActive }), children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    IconButton,
    {
      title,
      disabled: isActive,
      onClick: (e) => {
        e.stopPropagation();
        onClick({ width, height });
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom
}) => {
  var _a, _b;
  const viewports = useAppStore((s) => s.viewports);
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = (0, import_react45.useMemo)(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Auto)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: getClassName25(), children: [
    viewports.map((viewport, i) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      ViewportButton,
      {
        height: viewport.height,
        width: viewport.width,
        title: viewport.label ? `Switch to ${viewport.label} viewport` : "Switch viewport",
        onClick: onViewportChange,
        children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
      },
      i
    )),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      IconButton,
      {
        title: "Zoom viewport out",
        disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.max(
              zoomOptions.findIndex((option) => option.value === zoom) - 1,
              0
            )].value
          );
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ZoomOut, { size: 16 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      IconButton,
      {
        title: "Zoom viewport in",
        disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.min(
              zoomOptions.findIndex((option) => option.value === zoom) + 1,
              zoomOptions.length - 1
            )].value
          );
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ZoomIn, { size: 16 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "select",
      {
        className: getClassName25("zoomSelect"),
        value: zoom.toString(),
        onChange: (e) => {
          onZoom(parseFloat(e.currentTarget.value));
        },
        children: zoomOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "option",
          {
            value: option.value,
            label: option.label
          },
          option.label
        ))
      }
    )
  ] });
};

// css-module:D:\Puck\puck\packages\core\components\Puck\components\Canvas\styles.module.css#css-module
init_react_import();
var styles_module_default21 = { "PuckCanvas": "_PuckCanvas_l3m6c_1", "PuckCanvas-controls": "_PuckCanvas-controls_l3m6c_31", "PuckCanvas-inner": "_PuckCanvas-inner_l3m6c_41", "PuckCanvas-root": "_PuckCanvas-root_l3m6c_59", "PuckCanvas--ready": "_PuckCanvas--ready_l3m6c_109", "PuckCanvas-loader": "_PuckCanvas-loader_l3m6c_119", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_l3m6c_139" };

// lib/get-zoom-config.ts
init_react_import();
var RESET_ZOOM_SMALLER_THAN_FRAME = true;
var getZoomConfig = (uiViewport, frame, zoom) => {
  const box = getBox(frame);
  const { width: frameWidth, height: frameHeight } = box.contentBox;
  const viewportHeight = uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  let rootHeight = 0;
  let autoZoom = 1;
  if (uiViewport.width > frameWidth || viewportHeight > frameHeight) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);
    zoom = widthZoom;
    if (widthZoom < heightZoom) {
      rootHeight = viewportHeight / zoom;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }
    autoZoom = zoom;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }
  return { autoZoom, rootHeight, zoom };
};

// components/Puck/components/Canvas/index.tsx
var import_shallow5 = require("zustand/react/shallow");
var import_jsx_runtime36 = require("react/jsx-runtime");
var getClassName26 = get_class_name_factory_default("PuckCanvas", styles_module_default21);
var ZOOM_ON_CHANGE = true;
var Canvas = () => {
  const {
    dispatch,
    overrides,
    setUi,
    zoomConfig,
    setZoomConfig,
    status,
    iframe
  } = useAppStore(
    (0, import_shallow5.useShallow)((s) => ({
      dispatch: s.dispatch,
      overrides: s.overrides,
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      status: s.status,
      iframe: s.iframe
    }))
  );
  const { leftSideBarVisible, rightSideBarVisible, viewports } = useAppStore(
    (0, import_shallow5.useShallow)((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      viewports: s.state.ui.viewports
    }))
  );
  const frameRef = (0, import_react46.useRef)(null);
  const [showTransition, setShowTransition] = (0, import_react46.useState)(false);
  const defaultRender = (0, import_react46.useMemo)(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = (0, import_react46.useMemo)(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = (0, import_react46.useCallback)(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  const resetAutoZoom = (0, import_react46.useCallback)(
    (newViewports = viewports) => {
      if (frameRef.current) {
        setZoomConfig(
          getZoomConfig(
            newViewports == null ? void 0 : newViewports.current,
            frameRef.current,
            zoomConfig.zoom
          )
        );
      }
    },
    [frameRef, zoomConfig, viewports]
  );
  (0, import_react46.useEffect)(() => {
    setShowTransition(false);
    resetAutoZoom(viewports);
  }, [frameRef, leftSideBarVisible, rightSideBarVisible]);
  (0, import_react46.useEffect)(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (viewports.current.height === "auto") {
      setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom]);
  (0, import_react46.useEffect)(() => {
    if (ZOOM_ON_CHANGE) {
      setShowTransition(true);
      resetAutoZoom(viewports);
    }
  }, [viewports.current.width]);
  (0, import_react46.useEffect)(() => {
    const cb = () => {
      setShowTransition(false);
      resetAutoZoom();
    };
    window.addEventListener("resize", cb);
    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);
  const [showLoader, setShowLoader] = (0, import_react46.useState)(false);
  (0, import_react46.useEffect)(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      className: getClassName26({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader
      }),
      onClick: () => dispatch({
        type: "setUi",
        ui: { itemSelector: null },
        recordHistory: true
      }),
      children: [
        viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: getClassName26("controls"), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          ViewportControls,
          {
            autoZoom: zoomConfig.autoZoom,
            zoom: zoomConfig.zoom,
            onViewportChange: (viewport) => {
              setShowTransition(true);
              const uiViewport = __spreadProps(__spreadValues({}, viewport), {
                height: viewport.height || "auto",
                zoom: zoomConfig.zoom
              });
              const newUi = {
                viewports: __spreadProps(__spreadValues({}, viewports), { current: uiViewport }),
                itemSelector: null
              };
              setUi(newUi);
              if (ZOOM_ON_CHANGE) {
                resetAutoZoom(__spreadProps(__spreadValues({}, viewports), { current: uiViewport }));
              }
            },
            onZoom: (zoom) => {
              setShowTransition(true);
              setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom }));
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: getClassName26("inner"), ref: frameRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "div",
            {
              className: getClassName26("root"),
              style: {
                width: iframe.enabled ? viewports.current.width : "100%",
                height: zoomConfig.rootHeight,
                transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
                transition: showTransition ? "width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out" : "",
                overflow: iframe.enabled ? void 0 : "auto"
              },
              suppressHydrationWarning: true,
              id: "puck-canvas-root",
              onTransitionEnd: () => {
                window.dispatchEvent(
                  new CustomEvent("viewportchange", {
                    bubbles: true,
                    cancelable: false
                  })
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CustomPreview, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Preview3, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: getClassName26("loader"), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};

// lib/use-loaded-overrides.ts
init_react_import();
var import_react47 = require("react");

// lib/load-overrides.ts
init_react_import();
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      const overridesType = _overridesType;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps(__spreadValues({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps(__spreadValues({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};

// lib/use-loaded-overrides.ts
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return (0, import_react47.useMemo)(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/DefaultOverride/index.tsx
init_react_import();
var import_jsx_runtime37 = require("react/jsx-runtime");
var DefaultOverride = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children });

// lib/use-inject-css.ts
init_react_import();
var import_react48 = require("react");
var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = (0, import_react48.useState)();
  (0, import_react48.useEffect)(() => {
    setEl(document.createElement("style"));
  }, []);
  (0, import_react48.useEffect)(() => {
    var _a;
    if (!el || typeof window === "undefined") {
      return;
    }
    el.innerHTML = initialStyles;
    if (iframeEnabled) {
      const frame = getFrame();
      (_a = frame == null ? void 0 : frame.head) == null ? void 0 : _a.appendChild(el);
    }
    document.head.appendChild(el);
  }, [iframeEnabled, el]);
  return el;
};
var useInjectGlobalCss = (iframeEnabled) => {
  return useInjectStyleSheet(styles, iframeEnabled);
};

// lib/use-preview-mode-hotkeys.ts
init_react_import();
var import_react49 = require("react");
var usePreviewModeHotkeys = () => {
  const appStore = useAppStoreApi();
  const toggleInteractive = (0, import_react49.useCallback)(() => {
    const dispatch = appStore.getState().dispatch;
    dispatch({
      type: "setUi",
      ui: (ui) => ({
        previewMode: ui.previewMode === "edit" ? "interactive" : "edit"
      })
    });
  }, [appStore]);
  useHotkey({ meta: true, i: true }, toggleInteractive);
  useHotkey({ ctrl: true, i: true }, toggleInteractive);
};

// lib/use-puck.ts
init_react_import();
var import_react50 = require("react");
var import_zustand6 = require("zustand");
var generateUsePuck = (store) => {
  const history = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index
  };
  const storeData = {
    appState: store.state,
    config: store.config,
    dispatch: store.dispatch,
    getPermissions: store.permissions.getPermissions,
    refreshPermissions: store.permissions.refreshPermissions,
    history,
    selectedItem: store.selectedItem || null
  };
  const get = () => storeData;
  return __spreadProps(__spreadValues({}, storeData), { get });
};
var UsePuckStoreContext = (0, import_react50.createContext)(
  null
);
var useRegisterUsePuckStore = (appStore) => {
  const [usePuckStore] = (0, import_react50.useState)(
    () => (0, import_zustand6.createStore)(() => generateUsePuck(appStore.getState()))
  );
  (0, import_react50.useEffect)(() => {
    return appStore.subscribe(
      (store) => {
        const pickedStore = {
          state: store.state,
          config: store.config,
          dispatch: store.dispatch,
          permissions: store.permissions,
          history: store.history,
          selectedItem: store.selectedItem
        };
        return pickedStore;
      },
      (pickedStore) => {
        usePuckStore.setState(generateUsePuck(pickedStore));
      }
    );
  }, []);
  return usePuckStore;
};
function createUsePuck() {
  return function usePuck2(selector) {
    const usePuckApi = (0, import_react50.useContext)(UsePuckStoreContext);
    if (!usePuckApi) {
      throw new Error("usePuck must be used inside <Puck>.");
    }
    const result = (0, import_zustand6.useStore)(
      usePuckApi,
      selector != null ? selector : (s) => s
    );
    return result;
  };
}
function usePuck() {
  (0, import_react50.useEffect)(() => {
    console.warn(
      "You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUsePuck` and provide a selector for improved performance."
    );
  }, []);
  return createUsePuck()((s) => s);
}

// components/Puck/index.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var getClassName27 = get_class_name_factory_default("Puck", styles_module_default15);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default15);
var FieldSideBar = () => {
  const title = useAppStore(
    (s) => {
      var _a, _b;
      return s.selectedItem ? (_b = (_a = s.config.components[s.selectedItem.type]) == null ? void 0 : _a["label"]) != null ? _b : s.selectedItem.type.toString() : "Page";
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SidebarSection, { noPadding: true, noBorderTop: true, showBreadcrumbs: true, title, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Fields, {}) });
};
var propsContext = (0, import_react51.createContext)({});
function PropsProvider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(propsContext.Provider, { value: props, children: props.children });
}
var usePropsContext = () => (0, import_react51.useContext)(propsContext);
function PuckProvider({ children }) {
  const {
    config,
    data: initialData,
    ui: initialUi,
    onChange,
    permissions = {},
    plugins,
    overrides,
    viewports = defaultViewports,
    iframe: _iframe,
    initialHistory: _initialHistory,
    metadata,
    onAction
  } = usePropsContext();
  const iframe = __spreadValues({
    enabled: true,
    waitForStyles: true
  }, _iframe);
  const [generatedAppState] = (0, import_react51.useState)(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const initial = __spreadValues(__spreadValues({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 638px)").matches) {
        clientUiState = __spreadProps(__spreadValues({}, clientUiState), {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        });
      }
      const viewportWidth = window.innerWidth;
      const viewportDifferences = Object.entries(viewports).map(([key, value]) => ({
        key,
        diff: Math.abs(viewportWidth - value.width)
      })).sort((a, b) => a.diff > b.diff ? 1 : -1);
      const closestViewport = viewportDifferences[0].key;
      if (iframe.enabled) {
        clientUiState = __spreadProps(__spreadValues({}, clientUiState), {
          viewports: __spreadProps(__spreadValues({}, initial.viewports), {
            current: __spreadProps(__spreadValues({}, initial.viewports.current), {
              height: ((_b = (_a = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _a.current) == null ? void 0 : _b.height) || ((_c = viewports[closestViewport]) == null ? void 0 : _c.height) || "auto",
              width: ((_e = (_d = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _d.current) == null ? void 0 : _e.width) || ((_f = viewports[closestViewport]) == null ? void 0 : _f.width)
            })
          })
        });
      }
    }
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_g = initialData == null ? void 0 : initialData.root) == null ? void 0 : _g.props)) {
      console.error(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps = ((_h = initialData == null ? void 0 : initialData.root) == null ? void 0 : _h.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues(__spreadValues({}, (_i = config.root) == null ? void 0 : _i.defaultProps), rootProps);
    return __spreadProps(__spreadValues({}, defaultAppState), {
      data: __spreadProps(__spreadValues({}, initialData), {
        root: __spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps }),
        content: initialData.content || []
      }),
      ui: __spreadProps(__spreadValues(__spreadValues({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps(__spreadValues({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
  });
  const { appendData = true } = _initialHistory || {};
  const blendedHistories = [
    ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
    ...appendData ? [{ state: generatedAppState }] : []
  ].map((history) => __spreadProps(__spreadValues({}, history), {
    // Inject default data to enable partial history injections
    state: __spreadValues(__spreadValues({}, generatedAppState), history.state)
  }));
  const initialHistoryIndex = (_initialHistory == null ? void 0 : _initialHistory.index) || blendedHistories.length - 1;
  const initialAppState = blendedHistories[initialHistoryIndex].state;
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const generateAppStore = (0, import_react51.useCallback)(() => {
    return {
      state: initialAppState,
      config,
      plugins: plugins || [],
      overrides: loadedOverrides,
      viewports,
      iframe,
      onAction,
      metadata
    };
  }, [
    initialAppState,
    config,
    plugins,
    loadedOverrides,
    viewports,
    iframe,
    onAction,
    metadata
  ]);
  const [appStore] = (0, import_react51.useState)(() => createAppStore(generateAppStore()));
  (0, import_react51.useEffect)(() => {
    appStore.setState(__spreadValues({}, generateAppStore()));
  }, [
    initialAppState,
    config,
    plugins,
    loadedOverrides,
    viewports,
    iframe,
    onAction,
    metadata
  ]);
  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState
  });
  (0, import_react51.useEffect)(() => {
    appStore.subscribe((s) => {
      if (onChange) onChange(s.state.data);
    });
  }, []);
  useRegisterNodesSlice(appStore);
  useRegisterPermissionsSlice(appStore, permissions);
  const uPuckStore = useRegisterUsePuckStore(appStore);
  (0, import_react51.useEffect)(() => {
    const { state, resolveData: resolveData2 } = appStore.getState();
    resolveData2(state);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(appStoreContext.Provider, { value: appStore, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(UsePuckStoreContext.Provider, { value: uPuckStore, children }) });
}
function PuckLayout({ children }) {
  const {
    onChange,
    onPublish,
    renderHeader,
    renderHeaderActions,
    headerTitle,
    headerPath,
    iframe: _iframe,
    dnd,
    initialHistory: _initialHistory
  } = usePropsContext();
  const iframe = __spreadValues({
    enabled: true,
    waitForStyles: true
  }, _iframe);
  useInjectGlobalCss(iframe.enabled);
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const [menuOpen, setMenuOpen] = (0, import_react51.useState)(false);
  const appStore = useAppStoreApi();
  (0, import_react51.useEffect)(() => {
    return appStore.subscribe((s) => {
      if (onChange) onChange(s.state.data);
    });
  }, [appStore]);
  const rootProps = useAppStore(
    (s) => s.state.data.root.props || s.state.data.root.props
  );
  const dispatch = useAppStore((s) => s.dispatch);
  const toggleSidebars = (0, import_react51.useCallback)(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  (0, import_react51.useEffect)(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui) => __spreadValues(__spreadValues({}, ui), ui.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const defaultHeaderRender = (0, import_react51.useMemo)(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a) => {
        var _b = _a, { actions } = _b, props = __objRest(_b, ["actions"]);
        const Comp = renderHeader;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = (0, import_react51.useMemo)(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const overrides = useAppStore((s) => s.overrides);
  const CustomPuck = (0, import_react51.useMemo)(
    () => overrides.puck || DefaultOverride,
    [overrides]
  );
  const CustomHeader = (0, import_react51.useMemo)(
    () => overrides.header || defaultHeaderRender,
    [overrides]
  );
  const CustomHeaderActions = (0, import_react51.useMemo)(
    () => overrides.headerActions || defaultHeaderActionsRender,
    [overrides]
  );
  const [mounted, setMounted] = (0, import_react51.useState)(false);
  (0, import_react51.useEffect)(() => {
    setMounted(true);
  }, []);
  const ready = useAppStore((s) => s.status === "READY");
  useMonitorHotkeys();
  (0, import_react51.useEffect)(() => {
    if (ready && iframe.enabled) {
      const frameDoc = getFrame();
      if (frameDoc) {
        return monitorHotkeys(frameDoc);
      }
    }
  }, [ready, iframe.enabled]);
  usePreviewModeHotkeys();
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: `Puck ${getClassName27()}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CustomPuck, { children: children || /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "div",
      {
        className: getLayoutClassName({
          leftSideBarVisible,
          menuOpen,
          mounted,
          rightSideBarVisible
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("inner"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            CustomHeader,
            {
              actions: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CustomHeaderActions, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                Button,
                {
                  onClick: () => {
                    const data = appStore.getState().state.data;
                    onPublish && onPublish(data);
                  },
                  icon: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Globe, { size: "14px" }),
                  children: "Publish"
                }
              ) }) }),
              children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("header", { className: getLayoutClassName("header"), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("headerInner"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("headerToggle"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    "div",
                    {
                      className: getLayoutClassName("leftSideBarToggle"),
                      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        IconButton,
                        {
                          onClick: () => {
                            toggleSidebars("left");
                          },
                          title: "Toggle left sidebar",
                          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PanelLeft, { focusable: "false" })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    "div",
                    {
                      className: getLayoutClassName("rightSideBarToggle"),
                      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        IconButton,
                        {
                          onClick: () => {
                            toggleSidebars("right");
                          },
                          title: "Toggle right sidebar",
                          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PanelRight, { focusable: "false" })
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: getLayoutClassName("headerTitle"), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Heading, { rank: "2", size: "xs", children: [
                  headerTitle || (rootProps == null ? void 0 : rootProps.title) || "Page",
                  headerPath && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                      "code",
                      {
                        className: getLayoutClassName("headerPath"),
                        children: headerPath
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("headerTools"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: getLayoutClassName("menuButton"), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    IconButton,
                    {
                      onClick: () => {
                        return setMenuOpen(!menuOpen);
                      },
                      title: "Toggle menu bar",
                      children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ChevronDown, { focusable: "false" })
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    MenuBar,
                    {
                      dispatch,
                      onPublish,
                      menuOpen,
                      renderHeaderActions: () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CustomHeaderActions, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        Button,
                        {
                          onClick: () => {
                            const data = appStore.getState().state.data;
                            onPublish && onPublish(data);
                          },
                          icon: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Globe, { size: "14px" }),
                          children: "Publish"
                        }
                      ) }),
                      setMenuOpen
                    }
                  )
                ] })
              ] }) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("leftSideBar"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Components, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SidebarSection, { title: "Outline", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Outline, {}) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Canvas, {}),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: getLayoutClassName("rightSideBar"), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FieldSideBar, {}) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { id: "puck-portal-root", className: getClassName27("portal") })
  ] });
}
function Puck(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PropsProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PuckProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PuckLayout, __spreadValues({}, props)) })) }));
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Outline = Outline;
Puck.Preview = Preview3;

// lib/migrate.ts
init_react_import();
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return __spreadProps(__spreadValues({}, data), {
        root: {
          props: __spreadValues({}, rootProps)
        }
      });
    }
    return data;
  }
];
function migrate(data) {
  return migrations == null ? void 0 : migrations.reduce((acc, migration) => migration(acc), data);
}

// lib/transform-props.ts
init_react_import();

// lib/default-data.ts
init_react_import();
var defaultData = (data) => __spreadProps(__spreadValues({}, data), {
  root: data.root || {},
  content: data.content || []
});

// lib/transform-props.ts
function transformProps(data, propTransforms) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return __spreadProps(__spreadValues({}, item), {
        props: propTransforms[item.type](item.props)
      });
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = __spreadValues({}, defaultedData.root);
  if (propTransforms["root"]) {
    if (defaultedData.root.props) {
      newRoot.props = propTransforms["root"](rootProps);
    } else {
      newRoot = propTransforms["root"](rootProps);
    }
  }
  const afterPropTransforms = __spreadProps(__spreadValues({}, defaultedData), {
    root: newRoot,
    content: defaultedData.content.map(mapItem),
    zones: Object.keys(data.zones || {}).reduce(
      (acc, zoneKey) => __spreadProps(__spreadValues({}, acc), {
        [zoneKey]: data.zones[zoneKey].map(mapItem)
      }),
      {}
    )
  });
  return afterPropTransforms;
}

// lib/resolve-all-data.ts
init_react_import();
function resolveAllData(_0, _1) {
  return __async(this, arguments, function* (data, config, metadata = {}, onResolveStart, onResolveEnd) {
    const defaultedData = defaultData(data);
    const dynamicRoot = yield resolveRootData(
      defaultedData,
      config,
      metadata
    );
    const { zones = {} } = data;
    const zoneKeys = Object.keys(zones);
    const resolvedZones = {};
    for (let i = 0; i < zoneKeys.length; i++) {
      const zoneKey = zoneKeys[i];
      resolvedZones[zoneKey] = yield resolveAllComponentData(
        zones[zoneKey],
        config,
        metadata,
        onResolveStart,
        onResolveEnd
      );
    }
    return __spreadProps(__spreadValues({}, defaultedData), {
      root: dynamicRoot,
      content: yield resolveAllComponentData(
        defaultedData.content,
        config,
        metadata,
        onResolveStart,
        onResolveEnd
      ),
      zones: resolvedZones
    });
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Action,
  ActionBar,
  AutoField,
  Button,
  Drawer,
  DropZone,
  FieldLabel,
  Group,
  IconButton,
  Label,
  Puck,
  Render,
  createUsePuck,
  migrate,
  overrideKeys,
  renderContext,
  resolveAllData,
  transformProps,
  usePuck
});
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-check-big.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/corner-left-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/ellipsis-vertical.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/link.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock-open.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/monitor.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/redo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/smartphone.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tablet.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/type.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/undo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

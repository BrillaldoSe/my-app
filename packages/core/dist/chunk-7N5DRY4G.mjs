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
import React from "react";
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
  }
});

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

// lib/resolve-all-data.ts
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

// lib/root-droppable-id.ts
init_react_import();
var rootAreaId = "root";
var rootZone = "default-zone";
var rootDroppableId = `${rootAreaId}:${rootZone}`;

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

export {
  __spreadValues,
  __spreadProps,
  __objRest,
  __commonJS,
  __toESM,
  __privateGet,
  __privateAdd,
  __privateSet,
  __async,
  init_react_import,
  rootAreaId,
  rootZone,
  rootDroppableId,
  setupZone,
  getChanged,
  resolveComponentData,
  resolveRootData,
  transformProps,
  resolveAllData
};

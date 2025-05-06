import {
  __spreadProps,
  __spreadValues,
  init_react_import,
  resolveAllData,
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  transformProps
} from "./chunk-7N5DRY4G.mjs";

// rsc.tsx
init_react_import();

// components/ServerRender/index.tsx
init_react_import();
import { Fragment, jsx } from "react/jsx-runtime";
function DropZoneRender({
  zone,
  data,
  areaId = "root",
  config,
  metadata = {}
}) {
  let zoneCompound = rootDroppableId;
  let content = (data == null ? void 0 : data.content) || [];
  if (!data || !config) {
    return null;
  }
  if (areaId !== rootAreaId && zone !== rootZone) {
    zoneCompound = `${areaId}:${zone}`;
    content = setupZone(data, zoneCompound).zones[zoneCompound];
  }
  return /* @__PURE__ */ jsx(Fragment, { children: content.map((item) => {
    const Component = config.components[item.type];
    if (Component) {
      return /* @__PURE__ */ jsx(
        Component.render,
        __spreadProps(__spreadValues({}, item.props), {
          puck: {
            renderDropZone: ({ zone: zone2 }) => /* @__PURE__ */ jsx(
              DropZoneRender,
              {
                zone: zone2,
                data,
                areaId: item.props.id,
                config,
                metadata
              }
            ),
            metadata
          }
        }),
        item.props.id
      );
    }
    return null;
  }) });
}
function Render({
  config,
  data,
  metadata
}) {
  var _a;
  if ((_a = config.root) == null ? void 0 : _a.render) {
    const rootProps = data.root.props || data.root;
    const title = rootProps.title || "";
    return /* @__PURE__ */ jsx(
      config.root.render,
      __spreadProps(__spreadValues({}, rootProps), {
        puck: {
          renderDropZone: ({ zone }) => /* @__PURE__ */ jsx(
            DropZoneRender,
            {
              zone,
              data,
              config,
              metadata
            }
          ),
          isEditing: false,
          dragRef: null
        },
        title,
        editMode: false,
        id: "puck-root",
        children: /* @__PURE__ */ jsx(
          DropZoneRender,
          {
            config,
            data,
            zone: rootZone,
            metadata
          }
        )
      })
    );
  }
  return /* @__PURE__ */ jsx(
    DropZoneRender,
    {
      config,
      data,
      zone: rootZone,
      metadata
    }
  );
}
export {
  Render,
  resolveAllData,
  transformProps
};

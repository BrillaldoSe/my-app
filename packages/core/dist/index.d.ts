import { F as FieldProps, a as Field, D as DropZoneProps, C as Config, U as UserGenerics, b as Data, c as UiState, O as OnAction, P as Permissions, d as Plugin, e as Overrides, f as PuckAction, V as Viewports, I as IframeConfig, g as InitialHistory, M as Metadata, H as History, h as ComponentData, i as Fields, A as AppState, j as ComponentConfig } from './resolve-all-data-3XjIPfNh.js';
export { K as Adaptor, G as ArrayField, r as ArrayState, a2 as AsFieldProps, B as BaseData, y as BaseField, w as ComponentDataMap, x as Content, W as CustomField, $ as DefaultComponentProps, Y as DefaultRootFieldProps, _ as DefaultRootProps, Z as DefaultRootRenderProps, k as Direction, l as DragAxis, Q as ExternalField, L as ExternalFieldWithAdaptor, a4 as ExtractPropsFromConfig, a5 as ExtractRootPropsFromConfig, p as FieldRenderFunctions, q as ItemWithId, v as MappedItem, N as NumberField, J as ObjectField, n as OverrideKey, s as PuckComponent, X as PuckContext, E as RadioField, u as RootData, R as RootDataWithProps, t as RootDataWithoutProps, S as SelectField, T as TextField, z as TextareaField, m as Viewport, a3 as WithChildren, a0 as WithId, a1 as WithPuckProps, o as overrideKeys, a7 as resolveAllData, a6 as transformProps } from './resolve-all-data-3XjIPfNh.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default, { ReactNode, SyntheticEvent, ReactElement } from 'react';

declare const ActionBar: {
    ({ label, children, }: {
        label?: string;
        children?: ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Action: ({ children, label, onClick, }: {
        children: ReactNode;
        label?: string;
        onClick: (e: SyntheticEvent) => void;
    }) => react_jsx_runtime.JSX.Element;
    Label: ({ label }: {
        label: string;
    }) => react_jsx_runtime.JSX.Element;
    Group: ({ children }: {
        children: ReactNode;
    }) => react_jsx_runtime.JSX.Element;
};
declare const Action: ({ children, label, onClick, }: {
    children: ReactNode;
    label?: string;
    onClick: (e: SyntheticEvent) => void;
}) => react_jsx_runtime.JSX.Element;
declare const Group: ({ children }: {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Label: ({ label }: {
    label: string;
}) => react_jsx_runtime.JSX.Element;

declare const FieldLabel: ({ children, icon, label, el, readOnly, className, }: {
    children?: ReactNode;
    icon?: ReactNode;
    label: string;
    el?: "label" | "div";
    readOnly?: boolean;
    className?: string;
}) => react_jsx_runtime.JSX.Element;
type FieldNoLabel<Props extends any = any> = Omit<Field<Props>, "label">;
declare function AutoField<ValueType = any, FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>>(props: FieldProps<FieldType, ValueType>): react_jsx_runtime.JSX.Element;

declare const Button: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, icon, size, loading: loadingProp, ...props }: {
    children: ReactNode;
    href?: string;
    onClick?: (e: any) => void | Promise<void>;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    newTab?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    size?: "medium" | "large";
    loading?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const Drawer: {
    ({ children, droppableId, direction, }: {
        children: ReactNode;
        droppableId?: string;
        direction?: "vertical" | "horizontal";
    }): react_jsx_runtime.JSX.Element;
    Item: ({ name, children, id, label, index, isDragDisabled, }: {
        name: string;
        children?: (props: {
            children: ReactNode;
            name: string;
        }) => ReactElement;
        id?: string;
        label?: string;
        index?: number;
        isDragDisabled?: boolean;
    }) => react_jsx_runtime.JSX.Element;
};

declare const DropZone: react.ForwardRefExoticComponent<DropZoneProps & react.RefAttributes<HTMLDivElement>>;

declare const IconButton: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, title, }: {
    children: ReactNode;
    href?: string;
    onClick?: (e: SyntheticEvent) => void | Promise<void>;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    newTab?: boolean;
    fullWidth?: boolean;
    title: string;
}) => react_jsx_runtime.JSX.Element;

type PuckProps<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    children?: ReactNode;
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
    ui?: Partial<UiState>;
    onChange?: (data: G["UserData"]) => void;
    onPublish?: (data: G["UserData"]) => void;
    onAction?: OnAction<G["UserData"]>;
    permissions?: Partial<Permissions>;
    plugins?: Plugin[];
    overrides?: Partial<Overrides>;
    renderHeader?: (props: {
        children: ReactNode;
        dispatch: (action: PuckAction) => void;
        state: G["UserAppState"];
    }) => ReactElement;
    renderHeaderActions?: (props: {
        state: G["UserAppState"];
        dispatch: (action: PuckAction) => void;
    }) => ReactElement;
    headerTitle?: string;
    headerPath?: string;
    viewports?: Viewports;
    iframe?: IframeConfig;
    dnd?: {
        disableAutoScroll?: boolean;
    };
    initialHistory?: InitialHistory;
    metadata?: Metadata;
};
declare function Puck<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(props: PuckProps<UserConfig>): react_jsx_runtime.JSX.Element;
declare namespace Puck {
    var Components: () => react_jsx_runtime.JSX.Element;
    var Fields: ({ wrapFields }: {
        wrapFields?: boolean;
    }) => react_jsx_runtime.JSX.Element;
    var Outline: () => react_jsx_runtime.JSX.Element;
    var Preview: ({ id }: {
        id?: string;
    }) => react_jsx_runtime.JSX.Element;
}

declare const renderContext: react__default.Context<{
    config: Config;
    data: Data;
    metadata: Metadata;
}>;
declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
    metadata?: Metadata;
}): react_jsx_runtime.JSX.Element;

declare function migrate(data: Data): Data;

type HistorySlice<D = any> = {
    index: number;
    hasPast: () => boolean;
    hasFuture: () => boolean;
    histories: History<D>[];
    record: (data: D) => void;
    back: VoidFunction;
    forward: VoidFunction;
    currentHistory: () => History;
    nextHistory: () => History<D> | null;
    prevHistory: () => History<D> | null;
    setHistories: (histories: History[]) => void;
    setHistoryIndex: (index: number) => void;
    initialAppState: D;
};

type NodeMethods = {
    sync: () => void;
};
type PuckNode = {
    id: string;
    methods: NodeMethods;
    data: ComponentData;
    parentId: string | null;
    zone: string;
    path: string[];
    index: number;
    element: HTMLElement | null;
};
type NodesSlice = {
    nodes: Record<string, PuckNode | undefined>;
    registerNode: (id: string, node: Partial<PuckNode>) => void;
    unregisterNode: (id: string, node?: Partial<PuckNode>) => void;
};

type PermissionsArgs<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    item?: G["UserComponentData"] | null;
    type?: keyof G["UserProps"];
    root?: boolean;
};
type GetPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>) => Permissions;
type ResolvePermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;
type RefreshPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;
type Cache = Record<string, {
    lastPermissions: Partial<Permissions>;
    lastData: ComponentData | null;
}>;
type PermissionsSlice = {
    cache: Cache;
    globalPermissions: Permissions;
    resolvedPermissions: Record<string, Partial<Permissions> | undefined>;
    getPermissions: GetPermissions<Config>;
    resolvePermissions: ResolvePermissions<Config>;
    refreshPermissions: RefreshPermissions<Config>;
};

type ComponentOrRootData = Omit<ComponentData<any>, "type">;
type FieldsSlice = {
    fields: Fields | Partial<Fields>;
    loading: boolean;
    lastResolvedData: Partial<ComponentOrRootData>;
};

type Status = "LOADING" | "MOUNTED" | "READY";
type ZoomConfig = {
    autoZoom: number;
    rootHeight: number;
    zoom: number;
};
type ComponentState = Record<string, {
    loadingCount: number;
}>;
type AppStore<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    state: G["UserAppState"];
    dispatch: (action: PuckAction) => void;
    config: UserConfig;
    componentState: ComponentState;
    setComponentState: (componentState: ComponentState) => void;
    setComponentLoading: (id: string) => void;
    unsetComponentLoading: (id: string) => void;
    resolveDataRuns: number;
    resolveData: (newAppState: AppState) => void;
    plugins: Plugin[];
    overrides: Partial<Overrides>;
    viewports: Viewports;
    zoomConfig: ZoomConfig;
    setZoomConfig: (zoomConfig: ZoomConfig) => void;
    status: Status;
    setStatus: (status: Status) => void;
    iframe: IframeConfig;
    selectedItem?: G["UserData"]["content"][0] | null;
    setUi: (ui: Partial<UiState>, recordHistory?: boolean) => void;
    getComponentConfig: (type?: string) => ComponentConfig | null | undefined;
    onAction?: (action: PuckAction, newState: AppState, state: AppState) => void;
    metadata: Metadata;
    fields: FieldsSlice;
    history: HistorySlice;
    nodes: NodesSlice;
    permissions: PermissionsSlice;
};

type WithGet<T> = T & {
    get: () => T;
};
type UsePuckData<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    appState: AppState;
    config: Config;
    dispatch: AppStore["dispatch"];
    getPermissions: GetPermissions<UserConfig>;
    refreshPermissions: RefreshPermissions<UserConfig>;
    selectedItem: G["UserComponentData"] | null;
    history: {
        back: HistorySlice["back"];
        forward: HistorySlice["forward"];
        setHistories: HistorySlice["setHistories"];
        setHistoryIndex: HistorySlice["setHistoryIndex"];
        histories: HistorySlice["histories"];
        index: HistorySlice["index"];
        hasPast: boolean;
        hasFuture: boolean;
    };
};
type UsePuckStore<UserConfig extends Config = Config> = WithGet<UsePuckData<UserConfig>>;
/**
 * createUsePuck
 *
 * Create a typed usePuck hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed usePuck function
 */
declare function createUsePuck<UserConfig extends Config = Config>(): <T = UsePuckData<UserConfig, UserGenerics<UserConfig>>>(selector: (state: UsePuckStore<UserConfig>) => T) => T;
declare function usePuck<UserConfig extends Config = Config>(): UsePuckStore<UserConfig>;

export { Action, ActionBar, AppState, AutoField, Button, ComponentConfig, ComponentData, Config, Data, Drawer, DropZone, Field, FieldLabel, FieldProps, Fields, Group, History, IconButton, IframeConfig, InitialHistory, Label, Metadata, OnAction, Overrides, Permissions, Plugin, Puck, PuckAction, Render, UiState, type UsePuckData, UserGenerics, Viewports, createUsePuck, migrate, renderContext, usePuck };

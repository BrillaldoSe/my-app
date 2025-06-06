import { CSSProperties, ReactElement, JSX, ReactNode } from 'react';

type ItemSelector = {
    index: number;
    zone?: string;
};

type DropZoneProps = {
    zone: string;
    allow?: string[];
    disallow?: string[];
    style?: CSSProperties;
    minEmptyHeight?: number;
    className?: string;
    collisionAxis?: DragAxis;
};

type FieldOption = {
    label: string;
    value: string | number | boolean;
};
type FieldOptions = Array<FieldOption> | ReadonlyArray<FieldOption>;
type BaseField = {
    label?: string;
    labelIcon?: ReactElement;
};
type TextField = BaseField & {
    type: "text";
    placeholder?: string;
};
type NumberField = BaseField & {
    type: "number";
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
};
type TextareaField = BaseField & {
    type: "textarea";
    placeholder?: string;
};
type SelectField = BaseField & {
    type: "select";
    options: FieldOptions;
};
type RadioField = BaseField & {
    type: "radio";
    options: FieldOptions;
};
type ArrayField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "array";
    arrayFields: {
        [SubPropName in keyof Props[0]]: Field<Props[0][SubPropName]>;
    };
    defaultItemProps?: Props[0];
    getItemSummary?: (item: Props[0], index?: number) => string;
    max?: number;
    min?: number;
};
type ObjectField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "object";
    objectFields: Props extends any[] ? never : {
        [SubPropName in keyof Props]: Field<Props[SubPropName]>;
    };
};
type Adaptor<AdaptorParams = {}, TableShape extends Record<string, any> = {}, PropShape = TableShape> = {
    name: string;
    fetchList: (adaptorParams?: AdaptorParams) => Promise<TableShape[] | null>;
    mapProp?: (value: TableShape) => PropShape;
};
type ExternalFieldWithAdaptor<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    adaptor: Adaptor<any, any, Props>;
    adaptorParams?: object;
    getItemSummary: (item: Props, index?: number) => string;
};
type ExternalField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    fetchList: (params: {
        query: string;
        filters: Record<string, any>;
    }) => Promise<any[] | null>;
    mapProp?: (value: any) => Props;
    mapRow?: (value: any) => Record<string, string | number | ReactElement>;
    getItemSummary?: (item: Props, index?: number) => string;
    showSearch?: boolean;
    renderFooter?: (props: {
        items: any[];
    }) => ReactElement;
    initialQuery?: string;
    filterFields?: Record<string, Field>;
    initialFilters?: Record<string, any>;
};
type CustomField<Props extends any = {}> = BaseField & {
    type: "custom";
    render: (props: {
        field: CustomField<Props>;
        name: string;
        id: string;
        value: Props;
        onChange: (value: Props) => void;
        readOnly?: boolean;
    }) => ReactElement;
};
type Field<Props extends any = any> = TextField | NumberField | TextareaField | SelectField | RadioField | ArrayField<Props extends {
    [key: string]: any;
} ? Props : any> | ObjectField<Props extends {
    [key: string]: any;
} ? Props : any> | ExternalField<Props extends {
    [key: string]: any;
} ? Props : any> | ExternalFieldWithAdaptor<Props extends {
    [key: string]: any;
} ? Props : any> | CustomField<Props>;
type Fields<ComponentProps extends DefaultComponentProps = DefaultComponentProps> = {
    [PropName in keyof Omit<ComponentProps, "editMode">]: Field<ComponentProps[PropName]>;
};
type FieldProps<F = Field<any>, ValueType = any> = {
    field: F;
    value: ValueType;
    id?: string;
    onChange: (value: ValueType, uiState?: Partial<UiState>) => void;
    readOnly?: boolean;
};

type PuckComponent<Props> = (props: WithId<WithPuckProps<Props>>) => JSX.Element;
type ComponentConfig<RenderProps extends DefaultComponentProps = DefaultComponentProps, FieldProps extends DefaultComponentProps = RenderProps, DataShape = Omit<ComponentData<FieldProps>, "type">> = {
    render: PuckComponent<RenderProps>;
    label?: string;
    defaultProps?: FieldProps;
    fields?: Fields<FieldProps>;
    permissions?: Partial<Permissions>;
    inline?: boolean;
    resolveFields?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean>>;
        fields: Fields<FieldProps>;
        lastFields: Fields<FieldProps>;
        lastData: DataShape | null;
        appState: AppState;
        parent: ComponentData | null;
    }) => Promise<Fields<FieldProps>> | Fields<FieldProps>;
    resolveData?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean>>;
        lastData: DataShape | null;
        metadata: Metadata;
    }) => Promise<{
        props?: Partial<FieldProps>;
        readOnly?: Partial<Record<keyof FieldProps, boolean>>;
    }> | {
        props?: Partial<FieldProps>;
        readOnly?: Partial<Record<keyof FieldProps, boolean>>;
    };
    resolvePermissions?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean>>;
        lastPermissions: Partial<Permissions>;
        permissions: Partial<Permissions>;
        appState: AppState;
        lastData: DataShape | null;
    }) => Promise<Partial<Permissions>> | Partial<Permissions>;
};
type Category<ComponentName> = {
    components?: ComponentName[];
    title?: string;
    visible?: boolean;
    defaultExpanded?: boolean;
};
type Config<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = any, CategoryName extends string = string> = {
    categories?: Record<CategoryName, Category<keyof Props>> & {
        other?: Category<keyof Props>;
    };
    components: {
        [ComponentName in keyof Props]: Omit<ComponentConfig<Props[ComponentName], Props[ComponentName]>, "type">;
    };
    root?: Partial<ComponentConfig<WithChildren<RootProps>, AsFieldProps<RootProps>, RootData<AsFieldProps<RootProps>>>>;
};

type WithId<Props> = Props & {
    id: string;
};
type WithPuckProps<Props> = Props & {
    puck: PuckContext;
    editMode?: boolean;
};
type AsFieldProps<Props> = Omit<Props, "children" | "puck" | "editMode">;
type WithChildren<Props> = Props & {
    children: ReactNode;
};
type ExtractPropsFromConfig<UserConfig> = UserConfig extends Config<infer P, any, any> ? P : never;
type ExtractRootPropsFromConfig<UserConfig> = UserConfig extends Config<any, infer P, any> ? P : never;
type UserGenerics<UserConfig extends Config = Config, UserProps extends ExtractPropsFromConfig<UserConfig> = ExtractPropsFromConfig<UserConfig>, UserRootProps extends ExtractRootPropsFromConfig<UserConfig> = ExtractRootPropsFromConfig<UserConfig>, UserData extends Data<UserProps, UserRootProps> | Data = Data<UserProps, UserRootProps>, UserAppState extends AppState<UserData> = AppState<UserData>, UserComponentData extends ComponentData = UserData["content"][0]> = {
    UserConfig: UserConfig;
    UserProps: UserProps;
    UserRootProps: UserRootProps;
    UserData: UserData;
    UserAppState: UserAppState;
    UserComponentData: UserComponentData;
};

type PuckContext = {
    renderDropZone: React.FC<DropZoneProps>;
    metadata: Metadata;
    isEditing: boolean;
    dragRef: ((element: Element | null) => void) | null;
};
type DefaultRootFieldProps = {
    title?: string;
};
type DefaultRootRenderProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = WithPuckProps<WithChildren<Props>>;
type DefaultRootProps = DefaultRootRenderProps;
type DefaultComponentProps = {
    [key: string]: any;
};

type BaseData<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = {
    readOnly?: Partial<Record<keyof Props, boolean>>;
};
type RootDataWithProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = BaseData<Props> & {
    props: Props;
};
type RootDataWithoutProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = Props;
type RootData<Props extends DefaultComponentProps = DefaultRootFieldProps> = Partial<RootDataWithProps<AsFieldProps<Props>>> & Partial<RootDataWithoutProps<Props>>;
type ComponentData<Props extends DefaultComponentProps = DefaultComponentProps, Name = string> = {
    type: Name;
    props: WithId<Props>;
} & BaseData<Props>;
type MappedItem = ComponentData;
type ComponentDataMap<Props extends Record<string, DefaultComponentProps> = DefaultComponentProps> = {
    [K in keyof Props]: ComponentData<Props[K], K extends string ? K : never>;
}[keyof Props];
type Content<PropsMap extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = ComponentDataMap<PropsMap>[];
type Data<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = {
    root: RootData<RootProps>;
    content: Content<Props>;
    zones?: Record<string, Content<Props>>;
};
type Metadata = {
    [key: string]: any;
};

type ItemWithId = {
    _arrayId: string;
    _originalIndex: number;
};
type ArrayState = {
    items: ItemWithId[];
    openId: string;
};
type UiState = {
    leftSideBarVisible: boolean;
    rightSideBarVisible: boolean;
    itemSelector: ItemSelector | null;
    arrayState: Record<string, ArrayState | undefined>;
    previewMode: "interactive" | "edit";
    componentList: Record<string, {
        components?: string[];
        title?: string;
        visible?: boolean;
        expanded?: boolean;
    }>;
    isDragging: boolean;
    viewports: {
        current: {
            width: number;
            height: number | "auto";
        };
        controlsVisible: boolean;
        options: Viewport[];
    };
    field: {
        focus?: string | null;
    };
};
type AppState<UserData extends Data = Data> = {
    data: UserData;
    ui: UiState;
};

type RenderFunc<Props extends {
    [key: string]: any;
} = {
    children: ReactNode;
}> = (props: Props) => ReactElement;
declare const overrideKeys: readonly ["header", "headerActions", "fields", "fieldLabel", "components", "componentItem", "outline", "puck", "preview"];
type OverrideKey = (typeof overrideKeys)[number];
type OverridesGeneric<Shape extends {
    [key in OverrideKey]: any;
}> = Shape;
type Overrides = OverridesGeneric<{
    fieldTypes: Partial<FieldRenderFunctions>;
    header: RenderFunc<{
        actions: ReactNode;
        children: ReactNode;
    }>;
    actionBar: RenderFunc<{
        label?: string;
        children: ReactNode;
        parentAction: ReactNode;
    }>;
    headerActions: RenderFunc<{
        children: ReactNode;
    }>;
    preview: RenderFunc;
    fields: RenderFunc<{
        children: ReactNode;
        isLoading: boolean;
        itemSelector?: ItemSelector | null;
    }>;
    fieldLabel: RenderFunc<{
        children?: ReactNode;
        icon?: ReactNode;
        label: string;
        el?: "label" | "div";
        readOnly?: boolean;
        className?: string;
    }>;
    components: RenderFunc;
    componentItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    iframe: RenderFunc<{
        children: ReactNode;
        document?: Document;
    }>;
    outline: RenderFunc;
    puck: RenderFunc;
}>;
type FieldRenderFunctions = Omit<{
    [Type in Field["type"]]: React.FunctionComponent<FieldProps<Extract<Field, {
        type: Type;
    }>, any> & {
        children: ReactNode;
        name: string;
    }>;
}, "custom"> & {
    [key: string]: React.FunctionComponent<FieldProps<any> & {
        children: ReactNode;
        name: string;
    }>;
};

type Direction = "left" | "right" | "up" | "down" | null;
type DragAxis = "dynamic" | "y" | "x";

type iconTypes = "Smartphone" | "Monitor" | "Tablet";
type Viewport = {
    width: number;
    height?: number | "auto";
    label?: string;
    icon?: iconTypes | ReactNode;
};
type Viewports = Viewport[];

type Permissions = {
    drag: boolean;
    duplicate: boolean;
    delete: boolean;
    edit: boolean;
    insert: boolean;
} & Record<string, boolean>;
type IframeConfig = {
    enabled?: boolean;
    waitForStyles?: boolean;
};
type OnAction<UserData extends Data = Data> = (action: PuckAction, appState: AppState<UserData>, prevAppState: AppState<UserData>) => void;
type Plugin = {
    overrides: Partial<Overrides>;
};
type History<D = any> = {
    state: D;
    id?: string;
};
type InitialHistoryAppend<AS = Partial<AppState>> = {
    histories: History<AS>[];
    index?: number;
    appendData?: true;
};
type InitialHistoryNoAppend<AS = Partial<AppState>> = {
    histories: [History<AS>, ...History<AS>[]];
    index?: number;
    appendData?: false;
};
type InitialHistory<AS = Partial<AppState>> = InitialHistoryAppend<AS> | InitialHistoryNoAppend<AS>;

type InsertAction = {
    type: "insert";
    componentType: string;
    destinationIndex: number;
    destinationZone: string;
    id?: string;
};
type DuplicateAction = {
    type: "duplicate";
    sourceIndex: number;
    sourceZone: string;
};
type ReplaceAction = {
    type: "replace";
    destinationIndex: number;
    destinationZone: string;
    data: any;
};
type ReorderAction = {
    type: "reorder";
    sourceIndex: number;
    destinationIndex: number;
    destinationZone: string;
};
type MoveAction = {
    type: "move";
    sourceIndex: number;
    sourceZone: string;
    destinationIndex: number;
    destinationZone: string;
};
type RemoveAction = {
    type: "remove";
    index: number;
    zone: string;
};
type SetUiAction = {
    type: "setUi";
    ui: Partial<UiState> | ((previous: UiState) => Partial<UiState>);
};
type SetDataAction = {
    type: "setData";
    data: Partial<Data> | ((previous: Data) => Partial<Data>);
};
type SetAction<UserData extends Data = Data> = {
    type: "set";
    state: Partial<AppState<UserData>> | ((previous: AppState<UserData>) => Partial<AppState<UserData>>);
};
type RegisterZoneAction = {
    type: "registerZone";
    zone: string;
};
type UnregisterZoneAction = {
    type: "unregisterZone";
    zone: string;
};
type PuckAction = {
    recordHistory?: boolean;
} & (ReorderAction | InsertAction | MoveAction | ReplaceAction | RemoveAction | DuplicateAction | SetAction | SetDataAction | SetUiAction | RegisterZoneAction | UnregisterZoneAction);

type PropTransform<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = Partial<{
    [ComponentName in keyof Props]: (props: Props[ComponentName] & {
        [key: string]: any;
    }) => Props[ComponentName];
} & {
    root: (props: RootProps & {
        [key: string]: any;
    }) => RootProps;
}>;
declare function transformProps<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps>(data: Partial<Data>, propTransforms: PropTransform<Props, RootProps>): Data;

declare function resolveAllData<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends Record<string, any> = DefaultRootFieldProps>(data: Partial<Data>, config: Config, metadata?: Metadata, onResolveStart?: (item: ComponentData) => void, onResolveEnd?: (item: ComponentData) => void): Promise<Data<Props, RootProps>>;

export { type DefaultComponentProps as $, type AppState as A, type BaseData as B, type Config as C, type DropZoneProps as D, type RadioField as E, type FieldProps as F, type ArrayField as G, type History as H, type IframeConfig as I, type ObjectField as J, type Adaptor as K, type ExternalFieldWithAdaptor as L, type Metadata as M, type NumberField as N, type OnAction as O, type Permissions as P, type ExternalField as Q, type RootDataWithProps as R, type SelectField as S, type TextField as T, type UserGenerics as U, type Viewports as V, type CustomField as W, type PuckContext as X, type DefaultRootFieldProps as Y, type DefaultRootRenderProps as Z, type DefaultRootProps as _, type Field as a, type WithId as a0, type WithPuckProps as a1, type AsFieldProps as a2, type WithChildren as a3, type ExtractPropsFromConfig as a4, type ExtractRootPropsFromConfig as a5, transformProps as a6, resolveAllData as a7, type Data as b, type UiState as c, type Plugin as d, type Overrides as e, type PuckAction as f, type InitialHistory as g, type ComponentData as h, type Fields as i, type ComponentConfig as j, type Direction as k, type DragAxis as l, type Viewport as m, type OverrideKey as n, overrideKeys as o, type FieldRenderFunctions as p, type ItemWithId as q, type ArrayState as r, type PuckComponent as s, type RootDataWithoutProps as t, type RootData as u, type MappedItem as v, type ComponentDataMap as w, type Content as x, type BaseField as y, type TextareaField as z };

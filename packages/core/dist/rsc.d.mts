import * as react_jsx_runtime from 'react/jsx-runtime';
import { C as Config, U as UserGenerics, M as Metadata } from './resolve-all-data-3XjIPfNh.mjs';
export { a7 as resolveAllData, a6 as transformProps } from './resolve-all-data-3XjIPfNh.mjs';
import 'react';

declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: G["UserData"];
    metadata?: Metadata;
}): react_jsx_runtime.JSX.Element;

export { Render };

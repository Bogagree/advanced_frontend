import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildPlugins} from './buildBlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].ts',
            path: paths.buid,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers()
    }
}
module.exports = {
    presets: [
        [
            require.resolve('babel-preset-react-app'),
            {
                flow: false,
                typescript: true,
                useESModules: true,
                absoluteRuntime: false,
            },
        ],
    ],

    plugins: [
        require.resolve('babel-plugin-lodash'),
    ],
};

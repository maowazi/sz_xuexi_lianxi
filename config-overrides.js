const path = require("path");
const {override,fixBabelImports,addWebpackAlias} = require("customize-cra");

module.exports = override(
    fixBabelImports("import",{
        libraryName:"antd",
        libraryDirectory:"es",
        style:"css"
    }),
    addWebpackAlias({
        ["@"]:path.resolve(__dirname,"./src"),
        ["components"]:path.resolve(__dirname,"./src/components"),
        ["action"]:path.resolve(__dirname,"./src/action"),
        ["api"]:path.resolve(__dirname,"./src/api"),
        ["routers"]:path.resolve(__dirname,"./src/routers"),
        ["store"]:path.resolve(__dirname,"./src/store"),
        ["utils"]:path.resolve(__dirname,"./src/utils"),
        ["views"]:path.resolve(__dirname,"./src/views"),
        ["component"]:path.resolve(__dirname,"./src/component"),
        ["layout"]:path.resolve(__dirname,"./src/layout")
    })
)
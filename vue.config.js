const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  productionSourceMap: true,
  outputDir: 'docs',
  configureWebpack: config => {
    // プロダクトモードでのみ追加
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          // Prerender SPA Plugin を登録
          new PrerenderSPAPlugin({
            // 出力先 dist や www など
            staticDir: path.join(__dirname, 'docs'),
            // 生成したいページ
            routes: ['/', '/access', '/care', '/doctor', '/guide', '/pageNotFound'],

            postProcess (renderedRoute) {
              if (renderedRoute.originalRoute === "/pageNotFound"){
                // pageNotFoundの場合は404.htmlを生成する
                renderedRoute.route = "/";
                renderedRoute.outputPath = path.join(this.staticDir, "404.html")
              }else{
                // Ignore any redirects.
                renderedRoute.route = renderedRoute.originalRoute
              }

              // Basic whitespace removal. (Don't use this in production.)
              renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')

              // Remove /index.html from the output path if the dir name ends with a .html file extension.
              // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
              if (renderedRoute.route.endsWith('.html')) {
                renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
              }
      
              return renderedRoute
            },
          })
        ]
      }
    }
  }
}
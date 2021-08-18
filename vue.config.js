module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        data: `
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/_variables.scss";
        `
      }
    }
  }
}
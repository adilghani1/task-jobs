export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "final_task",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Monstreat&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "@/assets/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", "@/plugins/axios", "@/plugins/capitalize"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  axios: {
    baseURL: "https://api.publish.jobs/api/",
    headers: {
      common: {
        Authorization: `Bearer ${"664|TZZ7zHnAkQRnVuY5wP0s2xQLoCKzZ7Kl1oLTjEeO"}`, // replace with your token variable name
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  // router: {
  //   middleware: ["auth"],
  //   base : "/"
  // },
  // auth: {
  //     // Options
  //     strategies: {
  //       local: {
  //         token: {
  //           property: '',
  //           global: true,
  //           // required: true,
  //           type: 'Bearer'
  //         },
  //         // user:{

  //         //   property:'data',
  //         //   autoFetch: true,
  //         // },
  //         // endpoints: {
  //         //   login: { url: '/Authenticate/login', method: 'post' },
  //         //   user:false,
  //         //   logout: { url: 'logout', method: 'post' },
  //         // }
  //       }
  //     },
  //     // rewriteRedirects: false,
  //     // redirect: {
  //     //   login: '/login',
  //     //   home: '/welcome',
  //     //   // wellcome:'/home',
  //     //   callback: '/login',
  //     //   logout: '/login',
  //     // },
  //   },
  // rewriteRedirects: false,
  // initialState: () => ({
  //   loggedIn: true,
  // }),

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

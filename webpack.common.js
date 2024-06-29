const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

const paths = [
  '/',
  '/artists.html/',
  '/artists/brothers.html/',
  '/artists/buerak.html/',
  '/artists/crispy.html/',
  '/artists/dosvidosh.html/',
  '/artists/garage.html/',
  '/artists/gothic.html/',
  '/artists/hadndadn.html/',
  '/artists/kdimb.html/',
  '/artists/kity.html/',
  '/artists/laavu.html/',
  '/artists/localcode.html/',
  '/artists/mirele.html/',
  '/artists/nonconf.html/',
  '/artists/sbpch.html/',
  '/artists/serdobol.html/',
  '/artists/sirotkin.html/',
  '/artists/sort.html/',
  '/artists/sova.html/',
  '/artists/ushko.html/',
  '/genres.html/',
  '/genres/bedroompop.html/',
  '/genres/dancepunk.html/',
  '/genres/downtempo.html/',
  '/genres/dreampop.html/',
  '/genres/electropop.html/',
  '/genres/garagerock.html/',
  '/genres/house.html/',
  '/genres/hyperpop.html/',
  '/genres/indiefolk.html/',
  '/genres/indiepop.html/',
  '/genres/indierock.html/',
  '/genres/lofi.html/',
  '/genres/noiserock.html/',
  '/genres/poppunk.html/',
  '/genres/poprock.html/',
  '/genres/postpunk.html/',
  '/genres/psyrock.html/',
  '/genres/punkrock.html/',
  '/genres/shoegaze.html/',
  '/genres/spokenword.html/',
  '/genres/techno.html/',
  '/materials.html/',
  '/materials/howdimanova.html/',
  '/materials/newrussianwave.html/',
  '/materials/ravemoscow.html/',
  '/materials/sadrussianmusic.html/',
  '/materials/top10punkrockalbums.html/',
  '/tests/yourgenretest.html/'
]

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    materials: './src/materials.js',
    genres: './src/genres.js',
    artists: './src/artists.js',
    test: './src/javascript/test.js',
    filter: './src/javascript/filter.js',
    menuBar: './src/menubar.jsx',
    search: './src/search.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new SitemapPlugin({ base: 'https://hseadc.github.io/vrub/', paths }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Main page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.ejs',
      filename: './index.html',
      chunks: ['index', 'menuBar', 'search'] //откуда берет стиль
    }),

    // 404 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.ejs',
      filename: './404.html',
      chunks: ['index'] //откуда берет стиль
    }),

    // Search
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search.html',
      filename: './search.html',
      chunks: ['search', 'menuBar'] //откуда берет стиль
    }),

    // Materials
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials.ejs',
      filename: './materials.html',
      chunks: ['index', 'menuBar', 'filter', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/sadrussianmusic.ejs',
      filename: './articles/sadrussianmusic.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/newrussianwave.ejs',
      filename: './articles/newrussianwave.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/yakutianpunk.ejs',
      filename: './articles/yakutianpunk.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/ravemoscow.ejs',
      filename: './articles/ravemoscow.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/top10punkrockalbums.ejs',
      filename: './articles/top10punkrockalbums.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/howdimanova.ejs',
      filename: './articles/howdimanova.html',
      chunks: ['index', 'menuBar', 'search']
    }),

    // Genres
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres.ejs',
      filename: './genres.html',
      chunks: ['index', 'menuBar', 'search', 'filter']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/shoegaze.ejs',
      filename: './genres/shoegaze.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/bedroompop.ejs',
      filename: './genres/bedroompop.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/dancepunk.ejs',
      filename: './genres/dancepunk.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/downtempo.ejs',
      filename: './genres/downtempo.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/dreampop.ejs',
      filename: './genres/dreampop.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/electropop.ejs',
      filename: './genres/electropop.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/garagerock.ejs',
      filename: './genres/garagerock.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/house.ejs',
      filename: './genres/house.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/hyperpop.ejs',
      filename: './genres/hyperpop.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/indiefolk.ejs',
      filename: './genres/indiefolk.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/indiepop.ejs',
      filename: './genres/indiepop.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/indierock.ejs',
      filename: './genres/indierock.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/lofi.ejs',
      filename: './genres/lofi.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/noiserock.ejs',
      filename: './genres/noiserock.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/poppunk.ejs',
      filename: './genres/poppunk.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/poprock.ejs',
      filename: './genres/poprock.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/postpunk.ejs',
      filename: './genres/postpunk.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/psyrock.ejs',
      filename: './genres/psyrock.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/punkrock.ejs',
      filename: './genres/punkrock.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/spokenword.ejs',
      filename: './genres/spokenword.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/techno.ejs',
      filename: './genres/techno.html',
      chunks: ['index', 'menuBar', 'search']
    }),

    // Artists
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists.ejs',
      filename: './artists.html',
      chunks: ['index', 'menuBar', 'search', 'filter']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/serdobol.ejs',
      filename: './artists/serdobol.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/hadndadn.ejs',
      filename: './artists/hadndadn.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sirotkin.ejs',
      filename: './artists/sirotkin.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/ushko.ejs',
      filename: './artists/ushko.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sova.ejs',
      filename: './artists/sova.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sbpch.ejs',
      filename: './artists/sbpch.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/mirele.ejs',
      filename: './artists/mirele.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/crispy.ejs',
      filename: './artists/crispy.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/laavu.ejs',
      filename: './artists/laavu.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/localcode.ejs',
      filename: './artists/localcode.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/brothers.ejs',
      filename: './artists/brothers.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sort.ejs',
      filename: './artists/sort.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/gothic.ejs',
      filename: './artists/gothic.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/kdimb.ejs',
      filename: './artists/kdimb.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/buerak.ejs',
      filename: './artists/buerak.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/nonconf.ejs',
      filename: './artists/nonconf.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/dosvidosh.ejs',
      filename: './artists/dosvidosh.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/kity.ejs',
      filename: './artists/kity.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/garage.ejs',
      filename: './artists/garage.html',
      chunks: ['index', 'menuBar', 'search']
    }),

    // Тесты
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/yourgenretest.ejs',
      filename: './tests/yourgenretest.html',
      chunks: ['index', 'menuBar', 'search']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/page.html',
      filename: './pages/page.html',
      chunks: ['page']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'heading',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/basement.html'),
        location: 'basement',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/recs.html'),
        location: 'recommendations',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}

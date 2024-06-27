const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

const paths = ['/', '/artists.html/', '/genres.html/', '/materials.html/']

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    materials: './src/materials.js',
    genres: './src/genres.js',
    artists: './src/artists.js',
    articles: './src/articles.js',
    shoegaze: './src/shoegaze.js',
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
      template: './src/404.html',
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
      chunks: ['index', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/sadrussianmusic.html',
      filename: './articles/sadrussianmusic.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/newrussianwave.html',
      filename: './articles/newrussianwave.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/yakutianpunk.html',
      filename: './articles/yakutianpunk.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/ravemoscow.html',
      filename: './articles/ravemoscow.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/top10punkrockalbums.html',
      filename: './articles/top10punkrockalbums.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/howdimanova.html',
      filename: './articles/howdimanova.html',
      chunks: ['index']
    }),

    // Genres
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres.ejs',
      filename: './genres.html',
      chunks: ['index', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/shoegaze.html',
      filename: './genres/shoegaze.html',
      chunks: ['index']
    }),

    // Artists
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists.ejs',
      filename: './artists.html',
      chunks: ['index', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/serdobol.html',
      filename: './artists/serdobol.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/hadndadn.html',
      filename: './artists/hadndadn.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sirotkin.html',
      filename: './artists/sirotkin.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/ushko.html',
      filename: './artists/ushko.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sova.html',
      filename: './artists/sova.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sbpch.html',
      filename: './artists/sbpch.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/mirele.html',
      filename: './artists/mirele.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/crispy.html',
      filename: './artists/crispy.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/laavu.html',
      filename: './artists/laavu.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/localcode.html',
      filename: './artists/localcode.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/brothers.html',
      filename: './artists/brothers.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/sort.html',
      filename: './artists/sort.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/gothic.html',
      filename: './artists/gothic.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/kdimb.html',
      filename: './artists/kdimb.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/buerak.html',
      filename: './artists/buerak.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/nonconf.html',
      filename: './artists/nonconf.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/dosvidosh.html',
      filename: './artists/dosvidosh.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/kity.html',
      filename: './artists/kity.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/artists/garage.html',
      filename: './artists/garage.html',
      chunks: ['index']
    }),

    // Жанры
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/shoegaze.html',
      filename: './genres/shoegaze.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/bedroompop.html',
      filename: './genres/bedroompop.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/dancepunk.html',
      filename: './genres/dancepunk.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/downtempo.html',
      filename: './genres/downtempo.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/dreampop.html',
      filename: './genres/dreampop.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/electropop.html',
      filename: './genres/electropop.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/garagerock.html',
      filename: './genres/garagerock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/house.html',
      filename: './genres/house.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/hyperpop.html',
      filename: './genres/hyperpop.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/indiefolk.html',
      filename: './genres/indiefolk.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/indiepop.html',
      filename: './genres/indiepop.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/indierock.html',
      filename: './genres/indierock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/lofi.html',
      filename: './genres/lofi.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/noiserock.html',
      filename: './genres/noiserock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/poppunk.html',
      filename: './genres/poppunk.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/poprock.html',
      filename: './genres/poprock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/postpunk.html',
      filename: './genres/postpunk.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/psyrock.html',
      filename: './genres/psyrock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/punkrock.html',
      filename: './genres/punkrock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/spokenword.html',
      filename: './genres/spokenword.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/genres/techno.html',
      filename: './genres/techno.html',
      chunks: ['index']
    }),

    // Тесты
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/yourgenretest.html',
      filename: './tests/yourgenretest.html',
      chunks: ['index']
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

run 
===============
./node_modules/.bin/webpack src/index.js dist/bundle.js




Later
===========================

The Manifest
======
You might be wondering how webpack and its plugins seem to "know" what files are being generated. The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles. If you're interested in managing webpack's output in other ways, the manifest would be a good place to start.

The manifest data can be extracted into a json file for easy consumption using the WebpackManifestPlugin.

We won't go through a full example of how to use this plugin within your projects, but you can read up on the concept page and the caching guide to find out how this ties into long term caching.

https://github.com/danethurber/webpack-manifest-plugin
https://webpack.js.org/concepts/manifest
https://webpack.js.org/guides/caching


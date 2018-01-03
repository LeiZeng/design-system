import { createServer } from 'http';
import { createFactory } from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { readFile } from 'fs';
import * as path from 'path';
import { promisify } from 'util';

import App from '../App';
import {
  faviconUrl as favicon,
  containerId,
} from './constants';
import Html from './Html';

const readFileAsync = promisify(readFile);

console.log('Server booting...');
const isProd = process.env.NODE_ENV === 'production';
console.log('Production optimization enabled? ', isProd);
const AppFactory = createFactory(App);
const PORT = process.env.PORT || 3007;
const publicPath = (assets: any) =>
    assets.replace('/assets', '.')
        .replace(/\?.*$/i, '');

createServer(async (req, res) => {
  const manifest = require(path.resolve(process.cwd(), './build/manifest.json'));
  const { httpVersion, method, url } = req;

  console.log(`${httpVersion} ${method} ${url}`);
  try {
    if (url === '/' || (url && url.indexOf('/index.html') === 0)) {
      res.setHeader('Content-Type', 'text/html');
      res.write(Html({favicon, style: manifest['main.css'], containerId}));
      const stream = renderToNodeStream(AppFactory());
      stream.pipe(res, { end: false });
      stream.on('end', () => {
      res.end(`</div>
        <script src="${manifest['main.js']}"></script>
      </body>
      </html>`);
      });
    } else if (url
        && (
        url.indexOf('/assets') === 0
        || url.indexOf('/static') === 0
        || url.indexOf('/service-worker.js') === 0
        || url.indexOf('/manifest.json') === 0)
    ) {
        if (url.includes('.css')) {
            res.setHeader('Content-Type', 'text/css');
        } else {
            res.setHeader('Content-Type', 'application/javascript');
        }
        const data = await readFileAsync(path.resolve(`./build/${publicPath(url)}`));
        res.end(data);
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('404 Not Found');
    }
  } catch (e) {
      console.error(e);
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.end('500 Internal Error');
  }
}).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});

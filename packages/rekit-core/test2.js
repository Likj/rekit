const Watchpack = require('watchpack');
const chokidar = require('chokidar');

const rekit = require('./');
rekit.core.paths.setProjectRoot('/Users/pwang7/workspace/a1');

const { app } = rekit.core;

const DIR = '/Users/pwang7/workspace/a1/src';

const readDir = () => {
  console.time('read dir');
  const results = app.readDir(DIR, true);
  console.timeEnd('read dir');
  return results;
};

const w = chokidar.watch(DIR, { persistent: false });

w.on('add', (...args) => console.log('on add: ', args));
w.on('change', (...args) => console.log('on change: ', args));
w.on('unlink', (...args) => console.log('on unlink: ', args));
w.on('addDir', (...args) => console.log('on addDir: ', args));
w.on('unlinkDir', (...args) => console.log('on unlinkDir: ', args));
w.on('ready', (...args) => console.log('on ready: ', w.getWatched()));

// const wp = new Watchpack({
//   aggregateTimeout: 1000,
//   poll: false,
//   // TODO: make ignored configurable
//   ignored: /node_modules|\.git/,
// });

console.log('watched: ', w.getWatched());

// // TODO: make watch dir configurable
// wp.watch([], [DIR], Date.now() - 10);

// // wp.on('aggregated', () => {
// //   console.log('aggregated');
// //   const res = readDir();
// //   // console.log(res);
// // });

// wp.on('change', (...args) => {
//   console.log('watch pack on change: ', args);
// });

// wp.on('remove', file => {
//   console.log('on remove: ', file);
//   // app.setFileChanged(file);
// });

console.log('Watching dir: ', DIR);

// // rekit.core.paths.setProjectRoot('/Users/pwang7/workspace/rekitebaynode');
// let prjData;
// console.log(rekit.core.plugin.getPlugins().map(p => p.name));
// console.time('Load project data');
// rekit.core.vio.reset();
// prjData = rekit.core.app.getProjectData();
// console.timeEnd('Load project data');

// // console.time('Load project data 2');
// // rekit.core.vio.reset();
// // rekit.core.app.getProjectData();
// // console.timeEnd('Load project data 2');

// // console.time('Load project data 3');
// // rekit.core.vio.reset();
// // rekit.core.app.getProjectData();
// // console.timeEnd('Load project data 3');

// // console.log(prjData);
// Object.values(prjData.elementById).forEach(ele => {
//   if (ele.id.endsWith('.marko')) console.log(ele);
// });

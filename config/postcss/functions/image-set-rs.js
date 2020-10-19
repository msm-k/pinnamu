/**
 * @file rpath function.
 */
const rpath = require('./rpath');

/**
 * Specify display resolution file path.
 *
 * @param {string} filePath file path
 * @return {string} converted file path
 */
module.exports = (filePath) => {

  const dotIndex = filePath.lastIndexOf('.');

  // No extension
  if (dotIndex === -1) {

    return filePath;

  }

  return `image-set(resolve(${rpath(filePath, 1)}) 96dpi, resolve(${rpath(filePath, 2)}) 192dpi, resolve(${rpath(filePath, 3)}) 288dpi)`;

};

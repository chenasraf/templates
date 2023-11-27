// @ts-check
const BASE = 'gen/react'
/**
 * @param {string} folder
 * @returns import('simple-scaffold').ScaffoldConfig
 */
const gen = (folder) => {
  return {
    templates: [`${BASE}/component`],
    output: `src/components/${folder}`,
    data: {
      element: 'div',
    },
  }
}

/** @type {import('simple-scaffold').ScaffoldConfigFile} */
module.exports = {
  atom: gen('atoms'),
  molecule: gen('molecules'),
  organism: gen('organisms'),
  page: {
    templates: [`${BASE}/page`],
    output: `src/pages`,
  },
  utils: {
    templates: [`${BASE}/utils`],
    output: `src/utils`,
    name: '<utils>',
  },
}

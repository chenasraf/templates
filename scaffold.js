// @ts-check
const BASE = 'gen/react'
/**
 * @param {string} folder
 * @returns import('simple-scaffold').ScaffoldConfig
 */
const reactComp = (folder) => {
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
  editorfiles: {
    templates: ['gen/editorfiles'],
    output: '.',
    name: '-',
  },
  github: {
    templates: ['gen/github'],
    output: '.',
    name: '-',
  },
  'github.pnpm': {
    templates: ['gen/github-pnpm'],
    output: '.',
    name: '-',
  },
  'react.atom': reactComp('atoms'),
  'react.molecule': reactComp('molecules'),
  'react.organism': reactComp('organisms'),
  'react.page': {
    templates: [`${BASE}/page`],
    output: `src/pages`,
  },
  'react.utils': {
    templates: [`${BASE}/utils`],
    output: `src/utils`,
    name: '<utils>',
  },
}

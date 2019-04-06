import { urlPatterns } from './constants/urls';

export const extractUrl = (message): string => {
  const keys = Object.keys(urlPatterns);

  for (let i = 0; i < keys.length; i++) {
    const match = message.match(urlPatterns[keys[i]]);

    if (match && match[0]) {
      return match[0];
    }
  }

  return null;
};

const entities = {
  'amp': '&',
  'apos': '\'',
  'lt': '<',
  'gt': '>',
  'quot': '"',
  'nbsp': '\xa0'
};
const entityPattern = /&([a-z]+);/ig;

export const decodeHtmlEntities = (input: string): string => (
  input.replace(entityPattern, (match, entity) => {
    entity = entity.toLowerCase();

    if (entities.hasOwnProperty(entity)) {
      return entities[entity];
    }

    return match;
  })
  .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
);

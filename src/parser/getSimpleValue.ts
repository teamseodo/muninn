import { ElementPassArg } from './types';

import transformValue from './transformValue';

function getSimpleValue({ $, el }: ElementPassArg, config) {
  const { html, attr } = config;
  const element = $(el);

  let value;

  if (html) {
    value = element.html();
  } else if (attr) {
    value = element.attr(attr);
  } else {
    value = element.text();
  }

  return transformValue(value, config);
}

export default getSimpleValue;

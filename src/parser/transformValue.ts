import { Config } from '../config/types';
import Methods from './methods';
import execRegex from './regex/execRegex';

function transformValue(value: any, config: Config) {
  const { trim, regex, type, methods = [], transform } = config;

  if (typeof value === 'string' && trim !== false) {
    value = value.trim();
  }

  if (regex) {
    value = execRegex(value, regex);
  }

  if (type) {
    methods.push(type);
  }

  methods.forEach((name) => {
    if (Methods[name]) {
      value = Methods[name](value);
    }
  });

  if (typeof transform === 'function') {
    value = transform(value);
  }

  return value;
}

export default transformValue;

/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toMatchSelectorAssertion
 * @flow
 */

import type { Matcher } from '../../../../types/Matcher';
import type { EnzymeObject } from '../../../../types/EnzymeObject';
import name from '../utils/name';
import html from '../utils/html';

export default function toMatchSelector(enzymeWrapper:EnzymeObject, selector:string) : Matcher {
  const pass = enzymeWrapper.is(selector);
  const wrapperName = `<${name(enzymeWrapper)}>`;
  const wrapperHtml = html(enzymeWrapper);

  return {
    pass,
    message: `Expected ${wrapperName} component to match the selector "${selector}", but it didn't.`,
    negatedMessage: `Expected ${wrapperName} component not to match the selector "${selector}", but it did.`,
    contextualInformation: {
      actual: wrapperHtml,
    },
  };
}

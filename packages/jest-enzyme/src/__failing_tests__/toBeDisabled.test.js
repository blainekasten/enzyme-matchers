const { shallow, mount } = require('enzyme');
const React = require('react');

describe('failing test', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const Fixture = (props) => <input disabled={props.disabled} />;

      it('fails toBeDisabled', () => {
        expect(
          builder(<Fixture />).find('input')
        ).toBeDisabled();
      });

      it('fails NOT toBeDisabled', () => {
        expect(
          builder(<Fixture disabled />).find('input')
        ).not.toBeDisabled();
      });
    });
  });
});

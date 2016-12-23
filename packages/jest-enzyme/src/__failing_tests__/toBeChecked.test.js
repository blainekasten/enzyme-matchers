const { shallow, mount } = require('enzyme');
const React = require('react');

describe('failing test', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const Fixture = (props) => <input defaultChecked={props.defaultChecked} />;

      it('fails toBeChecked', () => {
        expect(
          builder(<Fixture />).find('input')
        ).toBeChecked();
      });

      it('fails NOT toBeChecked', () => {
        expect(
          builder(<Fixture defaultChecked />).find('input')
        ).not.toBeChecked();
      });
    });
  });
});

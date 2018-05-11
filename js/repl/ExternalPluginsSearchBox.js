// @flow
import { css } from "emotion";
import React from "react";
import { connectSearchBox } from "react-instantsearch/es/connectors";

export class SearchBox extends React.PureComponent {
  handleChange = (event: SyntheticInputEvent<*>) => {
    this.props.refine(event.target.value);
  };

  render() {
    return (
      <input
        className={style}
        onChange={this.handleChange}
        placeholder="Type in a package name (ex. babel-plugin-lodash)"
        ref={this.props.inputRef}
        type="text"
        value={this.props.currentRefinement}
      />
    );
  }
}

const style = css`
  background: #191a1f;
  border: 0;
  color: #fff;
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  width: 100%;

  &::placeholder {
    color: #9ea5b3;
    opacity: 0.5;
  }
`;

const ConnectedSearchBox = connectSearchBox(SearchBox);

export default ConnectedSearchBox;

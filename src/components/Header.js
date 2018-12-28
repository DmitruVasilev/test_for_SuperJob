import React from 'react';
import styled from 'styled-components';
import CheckboxOn from '../images/checkbox-on.svg';

const HeaderBlock = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const InputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
`;

const LabelCheckbox = styled.label`
  position: relative;
  font-size: 8px;
  line-height: 12px;
  padding: 0 0 0 20px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  & span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background: white;
    border: 1px solid #8c8b8c;
    border-radius: 3px;
    transition: 0.2s;
  }

  & input:checked + span::before {
    background: url(${CheckboxOn});
  }

  :hover span::before {
    border: 1px solid #5f5e5f;
  }
  & input:focus + span::before {
    border: 1px solid #5f5e5f;
  }
`;

const InputSearch = styled.input`
  width: 170px;
  font-size: 8px;
  line-height: 12px;
  padding: 3.5px 4px;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.37);
  border-radius: 1px;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
`;

const AddProject = styled.button`
  font-size: 7px;
  line-height: 8px;
  padding: 5px 24.5px;
  margin-left: auto;
  color: #ffffff;
  border-radius: 1px;
  background-color: #00aa87;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.12);
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #00816c;
  }
  :focus {
    background-color: #00826c;
  }
`;

class Header extends React.Component {
  state = {
    searchValue: '',
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    return (
      <HeaderBlock>
        <InputSearch
          type="search"
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
        />
        <LabelCheckbox htmlFor="checkbox">
          <InputCheckbox id="checkbox" type="checkbox" />
          <span />
          Только открытые
        </LabelCheckbox>
        <AddProject type="button">Добавить проект</AddProject>
      </HeaderBlock>
    );
  }
}

export default Header;

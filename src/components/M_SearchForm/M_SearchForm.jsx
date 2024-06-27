// import './M_SearchForm.scss'
import React from 'react'

import A_Input from '../A_Input/A_Input.jsx'
import A_Button from '../A_Button/A_Button.jsx'

export default class M_SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  renderResetButton = () => {
    const { handleSearchInput } = this.props
    return (
      <A_Button
        text="X"
        type="resetField"
        disabled={false}
        handleClick={() => handleSearchInput('')}
      />
    )
  }

  render() {
    const {
      handleSearchInput,
      handleSearchSubmit,
      searchInputValue,
      isSearchButtonDisabled
    } = this.props

    return (
      <div className="M_SearchForm">
        <A_Input
          value={searchInputValue}
          placeholder="Исполнитель, жанр, слово"
          handleSearchInput={handleSearchInput}
          handleSearchSubmit={handleSearchSubmit}
        />

        {searchInputValue != '' && this.renderResetButton()}

        <A_Button
          text="Поиск"
          type="primary"
          handleClick={andleSearchSubmit}
          disabled={isSearchButtonDisabled}
        />
      </div>
    )
  }
}

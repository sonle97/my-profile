import React from 'react';
import { components } from 'react-select';
import SelectStyled from './style';

const customStyles = {
  option: (provided: any) => ({
    ...provided,
  }),
  container: (base: any) => ({
    ...base,
  }),
  control: (base: any) => ({
    ...base,
  }),
  menu: (base: any) => ({
    ...base,
  }),
  menuList: (base: any) => ({
    ...base,
  }),
  singleValue: (provided: any) => {
    return { ...provided };
  },
  placeholder: (base: any) => ({
    ...base,
  }),
};

const Option = (props: any) => {
  const { isMulti } = props;
  return (
    <div>
      <components.Option {...props}>
        {isMulti && (
          <input
            className="mr-3"
            type="checkbox"
            checked={props.isSelected}
            onChange={(e: any) => console.log(e)}
          />
        )}

        <div className="text-sm">{props.label}</div>
      </components.Option>
    </div>
  );
};

const Selectize = (props: any) => {
  const {
    placeholder,
    options,
    onChange,
    defaultValue,
    isMulti = false,
  } = props;

  return (
    <SelectStyled
      className="selectize-container shadow-7 text-left"
      classNamePrefix="selectize"
      placeholder={placeholder || 'Select …'}
      closeMenuOnSelect={false}
      styles={customStyles}
      isClearable={true}
      isSearchable={true}
      isMulti={isMulti}
      components={{ Option }}
      options={options}
      defaultValue={defaultValue || ''}
      hideSelectedOptions={false}
      onChange={(e: any) => onChange && onChange(e)}
      menuPlacement="auto"
      maxMenuHeight={300}
      menuIsOpen={true}
      {...props}
    />
  );
};

export default Selectize;

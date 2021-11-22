import styled from '@emotion/styled';
import Select from 'react-select';

export default styled(Select)`
  font-size: 15px;
  .selectize__value-container {
    padding: 6px 8px;
    .selectize__placeholder {
      color: rgb(128, 128, 128);
    }
  }
  .selectize__menu-list {
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #90a4ae;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #90a4ae;
    }
    .selectize__option {
      padding: 5px 10px;
    }
  }
`;

import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../../icons/icon-search.svg';

const SearchForm = styled.form`
  position: relative;
  width: 252px;
  height: 50px;

  padding-left: 14px;
  padding-right: 14px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  margin: 20px auto 0 auto;
`;

const Label = styled.label`
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 20px;
  outline: 0;
`;

const Search = styled(IconSearch)`
  width: 25px;
`;

const SearchBtn = styled.button`
   
}
`;

export { Input, SearchBtn, SearchForm, Search, Label };

import Notiflix from 'notiflix';
import { useState } from 'react';
import { SearchBtn, SearchForm, Input, Search, Label } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handlerChange = e => setQuery(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      Notiflix.Notify.failure('Please enter a valid value');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handlerSubmit}>
        <Label>
          <Input
            onChange={handlerChange}
            placeholder="Movie Search"
            value={query}
            type="text"
          ></Input>
        </Label>
        <SearchBtn type="submit">
          <Search width="20" />
        </SearchBtn>
      </SearchForm>
    </>
  );
};

export default Form;

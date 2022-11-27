import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filtersSlice';
import { nanoid } from 'nanoid';
import { Boks, Text, Label, Input } from './StatusFilter/filter.styled';

export const ChangeFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterInputId = nanoid();

  const handleFilterChange = event => {
    dispatch(onChangeFilter(event.currentTarget.value));
  };

  return (
    <Boks>
      <Label htmlFor={filterInputId}>
        <Text>Search for contacts</Text>
        <Input
          type="text"
          name="filter"
          id={filterInputId}
          value={filter}
          onChange={handleFilterChange}
        />
      </Label>
    </Boks>
  );
};

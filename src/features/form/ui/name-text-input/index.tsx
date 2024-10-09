import { TextInput, useAppDispatch, useAppSelector, useDebounce, useFirstRender } from '../../../../shared';
import { setName } from '../../model';

export const NameTextInput = () => {
  const name = useAppSelector((state) => state.form.name);
  const dispatch = useAppDispatch();

  const debouncedName = useDebounce(name, 300);
  const isFirstRender = useFirstRender();

  return <TextInput label="Имя" helperText="Поле обязательно к заполнению" type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))} isSuccess={debouncedName ? true : false} isError={!name && !isFirstRender ? true : false} />;
};

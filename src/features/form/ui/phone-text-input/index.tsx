import { TextInput, useAppDispatch, useAppSelector, useDebounce, useFirstRender } from '../../../../shared';
import { setPhone } from '../../model';

export const PhoneTextInput = () => {
  const phone = useAppSelector((state) => state.form.phone);
  const dispatch = useAppDispatch();

  const debouncedPhone = useDebounce(phone, 300);
  const isFirstRender = useFirstRender();

  return <TextInput label="Телефон" helperText="Поле обязательно к заполнению" type="tel" value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} isSuccess={debouncedPhone ? true : false} isError={!phone && !isFirstRender ? true : false} />;
};

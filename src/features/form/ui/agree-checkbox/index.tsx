import { setChecked } from '../..';
import { Checkbox, useAppDispatch, useAppSelector } from '../../../../shared';

export const AgreeCheckbox = () => {
  const checked = useAppSelector((state) => state.form.checked);
  const dispatch = useAppDispatch();

  return (
    <Checkbox checked={checked} onChange={(e) => dispatch(setChecked(e.target.checked))}>
      Согласен, отказываюсь
    </Checkbox>
  );
};

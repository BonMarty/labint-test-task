import { Button, useAppSelector } from '../../../../shared';
import { getDisabled } from '../../utils';

export const SendButton = () => {
  const form = useAppSelector((state) => state.form);

  return (
    <Button variant="primary" disabled={getDisabled(form)}>
      Отправить
    </Button>
  );
};

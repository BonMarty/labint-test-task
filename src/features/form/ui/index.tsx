import { AgreeCheckbox } from './agree-checkbox';
import { NameTextInput } from './name-text-input';
import { PhoneTextInput } from './phone-text-input';
import { SendButton } from './send-button';

export const Form = () => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <NameTextInput />
      <PhoneTextInput />
      <AgreeCheckbox />
      <SendButton />
    </form>
  );
};

import { Form } from '../../../features';
import { Container } from '../../../shared';
import { SendFormHeadline } from './send-form-headline';

export const SendForm = () => {
  return (
    <section className="px-4 py-14 1920:py-20" id="form">
      <Container maxWidth="max-w-[800px]" className="space-y-[30px] md:space-y-8 1920:space-y-11">
        <SendFormHeadline />
        <Form />
      </Container>
    </section>
  );
};

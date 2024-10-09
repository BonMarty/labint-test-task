export interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  helperText?: string;
  isSuccess?: boolean;
  isError?: boolean;
}

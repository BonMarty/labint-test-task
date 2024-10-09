export const getBorder = (value: string | number | readonly string[] | undefined, isError: boolean | undefined) => {
  if (isError) {
    return 'border-dangerous';
  }

  if (value) {
    ('border-migGray');
  }

  return 'border-extralightGray';
};

export type BodySize = 12 | 14 | 16 | 18;
export type BodyWeight = 'regular' | 'semibold';

export interface BodyProps extends React.ComponentPropsWithoutRef<'p'> {
  size: BodySize;
  weight: BodyWeight;
}

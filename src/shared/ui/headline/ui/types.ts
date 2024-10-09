export interface Headline1Props extends React.ComponentPropsWithoutRef<'h1'> {
  variant: 1;
}

export interface Headline2Props extends React.ComponentPropsWithoutRef<'h2'> {
  variant: 2;
}

export interface Headline3Props extends React.ComponentPropsWithoutRef<'h3'> {
  variant: 3;
}

export interface Headline4Props extends React.ComponentPropsWithoutRef<'h4'> {
  variant: 4;
}

export interface Headline5Props extends React.ComponentPropsWithoutRef<'h5'> {
  variant: 5;
}

export interface Headline6Props extends React.ComponentPropsWithoutRef<'h6'> {
  variant: 6;
}

export type HeadlineProps = Headline1Props | Headline2Props | Headline3Props | Headline4Props | Headline5Props | Headline6Props;

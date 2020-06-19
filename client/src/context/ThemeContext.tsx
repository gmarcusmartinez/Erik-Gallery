import React from 'react';
const defaultCtx = {
  theme: '',
  changeTheme: Function,
};

export const ThemeContext = React.createContext(defaultCtx);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const changeTheme: any = (option: string) => {
    setTheme(option);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

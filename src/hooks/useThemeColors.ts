type ThemeColors = {
  secondary: string;
  primary: string;
  background: string;
  red: string;
};
const useThemeColors = (): ThemeColors => {
  return {
    secondary: '#ffa800',
    primary: '#ffffff',
    background: '#14213d',
    red: '#ff2727',
  };
};

export default useThemeColors;

import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";

import { useAppSelector } from "./redux/hooks/useAppSelector";
import { setThemeStatus } from "./redux/reducers/themeReducer";


function App() {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);

  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: number) => dispatch(setName(newAge));
  const switchTheme = (switchTheme: string) => dispatch(setThemeStatus(switchTheme));

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  }
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(parseInt(e.target.value));
  }

  const handleSwitchTheme = () => {
    if(theme.status === 'light') {
      switchTheme('dark');
    } else {
      switchTheme('light');
    }
  }

  return (
    <div style={{ 
      backgroundColor: theme.status === 'light' ? '#FFF' : '#000',
      color: theme.status === 'light' ? '#000' : '#FFF',
      width: 1920,
      height: 1080
     }}>
      Meu nome é: {user.name} e tenho {user.age} anos.<br/>
      Tema: {theme.status}
      <hr />
      <input type='text' value={user.name} onChange={handleNameInput} />
      <input type='text' value={user.age} onChange={handleAgeInput} />

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;

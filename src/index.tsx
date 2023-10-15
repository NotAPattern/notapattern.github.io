import { render } from 'solid-js/web';

import App from './App';
import { Theme } from '@types';
import { ThemeProvider } from '@uikit';
import './index.css';

const root = document.getElementById('root');

render(
  () => (
    <ThemeProvider theme={Theme.LIGHT}>
      <App />
    </ThemeProvider>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!
);

import * as ReactDOM from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    // Crea el root para renderizar el componente en el div
    const root = ReactDOM.createRoot(div);

    // Aquí puedes renderizar tu componente en el root
    // root.render(<Thing />);

    // Luego, desmontas el componente usando root.unmount()
    root.unmount();
  });
});

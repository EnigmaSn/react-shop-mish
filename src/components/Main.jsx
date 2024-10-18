import { Shop } from './Shop';
import { ContextProvider } from '../context';

const Main = () => {
  return (
    <>
      <main className="content container mx-auto mb-auto p-5">
        <ContextProvider>
          <Shop />
        </ContextProvider>
      </main>
    </>
  );
};

export { Main };

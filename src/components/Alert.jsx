import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

const Alert = () => {
  const { closeAlert, alertName } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div id="toast-container" className="top-8">
      <div className="toast">{alertName} добавлен в корзину</div>
    </div>
  );
};

export { Alert };

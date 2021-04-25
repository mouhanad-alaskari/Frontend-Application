import MainPage from '../Screens/MainPage';
import Product from '../Screens/Product';

const EmptyPage = () => {
  return (
    <div>
      NOT FOUND!!
    </div>
  );
};

export const RoutesList = [
  { path: "/main", component: MainPage, exact: true },
  { path: "/product", component: Product, exact: true },
  { path: "/*", component: EmptyPage, exact: true },
];

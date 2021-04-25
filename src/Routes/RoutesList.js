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
  { title: 'Main Page', path: "/main", component: MainPage, exact: true },
  { title: 'Product', path: "/product", component: Product, exact: true },
  { title: '', path: "/*", component: EmptyPage, exact: true },
];

export const NavList = [
  { title: 'Main Page', path: "/main", },
  { title: 'Product', path: "/product", },
];

export default  [
  {
    name: '权限', path: "/",
    routes: [
      { name: 'home', path: "/home", component: "Micro" },
      { path: "/", redirect: "/home" },
    ],
  },
  { name: '404', path: '/*', component: '@/pages/404' },
];

import MainPage from "../Pages/MainPage";
import FirstProjectPage from "../Pages/FirstProjectPage";

export const routes = [
    {path: '/', name: 'Главная', exact: true, isMain: true, page: MainPage},
    {path: '/first', name: 'Первый проект', exact: true, page: FirstProjectPage}
]
import MainPage from "../Pages/MainPage";
import FirstProjectPage from "../Pages/FirstProjectPage";
import PhysicsPage from "../Pages/PhysicsPage";

export const routes = [
    {path: '/', name: 'Главная', exact: true, isMain: true, page: MainPage},
    {path: '/first', name: 'Вращающиеся кубы', exact: true, page: FirstProjectPage},
    {path: '/physic', name: 'Кубы падающие по законам физики', exact: true, page: PhysicsPage}
]
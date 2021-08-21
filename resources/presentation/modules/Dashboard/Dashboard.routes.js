import Home from "./Home/Home";
import Pessoas from "./Pessoas/Pessoas";
import CargasHorarias from "./CargasHorarias/CargasHorarias";
import Cargos from "./Cargos/Cargos";
import NotFound from "../../components/NotFound";

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/pessoas',
        component: Pessoas,
    },
    {
        path: '/cargas-horarias',
        component: CargasHorarias,
    },
    {
        path: '/cargos',
        component: Cargos
    },
    {
        path: '/**',
        component: NotFound
    },
];

export default routes;

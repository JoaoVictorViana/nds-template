import ListarCargos from "./ListarCargos/ListarCargos";
import NovoCargo from "./NovoCargo/NovoCargo";

const routes = [
    {
        path: '/cargos',
        component: ListarCargos,
        exact: true
    },
    {
        path: '/cargos/novo',
        component: NovoCargo
    }

];

export default routes;

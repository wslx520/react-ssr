import Home from './Home'
import Grid from './Grid'
import {fetchPopularRepos} from './api'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/popular/:id',
        component: Grid,
        fetchInitialData: (path = '') => {
            console.log('ppppppppppp',path);
            return fetchPopularRepos(path.split('/').pop())
        }
            
    }
]

export default routes;
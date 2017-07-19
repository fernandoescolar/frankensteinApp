import HomePage from 'components/pages/home-page'
import OtherPage from 'components/pages/other-page'

export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', style: 'fa fa-home' },
    { name: 'other', path: '/other', component: OtherPage, display: 'Other', style: 'fa fa-home' }
]
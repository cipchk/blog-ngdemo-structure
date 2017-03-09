import { LayoutComponent } from '../layout/layout.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'trade', loadChildren: './trade/trade.module#TradeModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    },
    // Not found
    { path: '**', redirectTo: 'dashboard' }
]

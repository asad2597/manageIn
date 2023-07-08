import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routeLink: 'product/level1.1',
                label: 'Level 1 1.1'
            },
            {
                routeLink: 'product/level1.2',
                label: 'Level 1 1.2',
                items: [
                    {
                        routeLink: 'product/level2.1',
                        label: 'Level 2 2.1'
                    },
                    {
                        routeLink: 'product/level2.2',
                        label: 'Level 2 2.2',
                        items: [
                            {
                                routeLink: 'product/level3.1',
                                label: 'Level 3 3.1'
                            },
                            {
                                routeLink: 'product/level3.2',
                                label: 'Level 3 3.2',
                            },
                            {
                                routeLink: 'product/level3.3',
                                label: 'Level 3 3.3'
                            }
                        ]
                    },
                    {
                        routeLink: 'product/level2.3',
                        label: 'Level 2 2.3'
                    }
                ]
            },
            {
                routeLink: 'product/level1.3',
                label: 'Level 1 1.3',
                items: 
                [
                    {
                        routeLink: 'product/level4',
                        label: 'Level 4 4.1'
                    }
                ]
            },
            
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tag',
        label: 'Coupen',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    }
]
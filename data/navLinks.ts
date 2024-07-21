type INavLink = {
    name: string
    href: string
}

export const navLinks: INavLink[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Login',
        href: '/auth/login'
    }
]
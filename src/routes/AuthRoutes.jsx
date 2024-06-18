

const AuthRoutes = [
    {
        path: "/login",
        element: <WithoutAuth><Login /></WithoutAuth>,
    },
    {
        path: "/register",
        element: <WithoutAuth><Register /></WithoutAuth>,
    },
]

protected $middlewareGroups = [
    'web' => [
        \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class,
        \Inertia\Middleware::class, // Ajout du middleware Inertia
    ],
];


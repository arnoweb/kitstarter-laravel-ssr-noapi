<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends BaseController
{
    public function index()
    {

        $menuItems = $this->getMenuItems(); // Get menu items
        \Log::info('Menu Items:', $menuItems);

        return Inertia::render('Home', [
            'title' => 'POC Web application fullstack SSR universelle',
            'subtitle' => 'Laravel+Inertia+React - sans API intermédiaire pour lié le front et le back',
            'description' => '',
            'menuItems' => $this->getMenuItems(),
            'features' => [
                'title' => 'Architecture',
                'items' => [
                    'Backend PHP : Le serveur Backend PHP - Laravel gère les routes, il redirige les requêtes vers le serveur NodeJS (Express)',
                    'Middleware PHP Inertia : envoie des composants React et de leurs propriétés au serveur NodeJS',
                    'Backend NodeJS : le serveur NodeJS (Express) intercepte les requêtes et il utilise Vite SSR pour exécuter React et pré-rend les pages HTML',
                    'Backend PHP : le HTML est renvoyé/injecté dans la réponse PHP Laravel (template Blade), qui retourne le HTML au client (navigateur)',
                    'Le client (navigateur): il reçoit une page pré-rendue avec le contenu HTML (composants REACT) visible et le JS hydrate les composants',
                ]
            ],
            'services' => [
                'title' => 'Avantages de l\'architecture universelle sans API',
                'items' => [
                    'Simplification/accélération des développements',
                    'Zéro API à écrire, à maintenir, un seul langage pour les règles métiers, un seul routing',
                    'Performances assurées grâce au SSR (Server Side Rendering)',
                    'SEO et Accessibilité'
                ]
            ]
        ]);
    }
}

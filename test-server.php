<?php
// Simple test server for Pix centralized system
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-PIX-APP');

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];

// Handle preflight OPTIONS requests
if ($method === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Simple routing
if ($path === '/health') {
    echo json_encode([
        'status' => 'ok',
        'message' => 'Pix centralized server is running',
        'timestamp' => time(),
        'version' => '2.0.0',
        'software' => [
            'name' => 'pix',
            'version' => '2.0.0'
        ]
    ]);
} elseif (strpos($path, '/api/v1/accounts/verify_credentials') !== false) {
    // Mock user verification
    $headers = getallheaders();
    $auth = $headers['Authorization'] ?? '';
    
    if (strpos($auth, 'Bearer ') === 0) {
        echo json_encode([
            'id' => '1',
            'username' => 'testuser',
            'display_name' => 'Test User',
            'email' => 'test@example.com',
            'avatar' => 'https://example.com/avatar.jpg',
            'created_at' => '2024-01-01T00:00:00.000Z'
        ]);
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
    }
} elseif (strpos($path, '/api/v1/') !== false) {
    // Generic API response
    echo json_encode([
        'message' => 'Pix API endpoint',
        'path' => $path,
        'method' => $method
    ]);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}
?>
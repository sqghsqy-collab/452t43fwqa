/**
 * Simple integration test for Pix mobile app
 * Tests connection to centralized server
 */

const CENTRALIZED_CONFIG = {
  SERVER_URL: 'https://work-1-cdynxmooyzsakrhz.prod-runtime.all-hands.dev',
  API_BASE: '/api/v1',
  APP_NAME: 'Pix',
};

async function testServerHealth() {
  try {
    console.log('🔍 Testing server health...');
    const response = await fetch(`${CENTRALIZED_CONFIG.SERVER_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-PIX-APP': CENTRALIZED_CONFIG.APP_NAME,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Server health check passed:', data);
      return true;
    } else {
      console.log('❌ Server health check failed:', response.status);
      return false;
    }
  } catch (error) {
    console.log('❌ Server health check error:', error.message);
    return false;
  }
}

async function testAPIEndpoint() {
  try {
    console.log('🔍 Testing API endpoint...');
    const response = await fetch(`${CENTRALIZED_CONFIG.SERVER_URL}${CENTRALIZED_CONFIG.API_BASE}/accounts/verify_credentials`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer test-token',
        'Content-Type': 'application/json',
        'X-PIX-APP': CENTRALIZED_CONFIG.APP_NAME,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ API endpoint test passed:', data);
      return true;
    } else {
      console.log('❌ API endpoint test failed:', response.status);
      return false;
    }
  } catch (error) {
    console.log('❌ API endpoint test error:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting Pix Mobile App Integration Tests\n');
  
  const healthTest = await testServerHealth();
  const apiTest = await testAPIEndpoint();
  
  console.log('\n📊 Test Results:');
  console.log(`Health Check: ${healthTest ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`API Test: ${apiTest ? '✅ PASS' : '❌ FAIL'}`);
  
  if (healthTest && apiTest) {
    console.log('\n🎉 All tests passed! The mobile app can successfully connect to the centralized server.');
    process.exit(0);
  } else {
    console.log('\n💥 Some tests failed. Please check the server configuration.');
    process.exit(1);
  }
}

// Run tests
runTests();
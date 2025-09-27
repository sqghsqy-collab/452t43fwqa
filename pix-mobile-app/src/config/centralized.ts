/**
 * Pix Centralized Configuration
 * Configuration for the centralized version of Pix (formerly Pixelfed)
 */

export const CENTRALIZED_CONFIG = {
  // Main server URL - Update this to your centralized server
  SERVER_URL: 'https://work-1-cdynxmooyzsakrhz.prod-runtime.all-hands.dev',
  
  // API endpoints
  API_BASE: '/api/v1',
  
  // OAuth Configuration
  GOOGLE_OAUTH: {
    CLIENT_ID: 'your-google-client-id',
    REDIRECT_URI: 'com.pix://oauth/google',
  },
  
  FACEBOOK_OAUTH: {
    APP_ID: 'your-facebook-app-id',
    REDIRECT_URI: 'com.pix://oauth/facebook',
  },
  
  // App Configuration
  APP_NAME: 'Pix',
  APP_VERSION: '2.0.0',
  
  // Features - Disabled federation features
  FEATURES: {
    FEDERATION: false,
    ACTIVITYPUB: false,
    WEBFINGER: false,
    REMOTE_FOLLOW: false,
    MULTI_SERVER: false,
    
    // Enabled centralized features
    SOCIAL_LOGIN: true,
    AWS_INTEGRATION: true,
    CENTRALIZED_SEARCH: true,
    LOCAL_TIMELINE: true,
  },
  
  // AWS Integration
  AWS: {
    S3_BUCKET: 'your-pix-media-bucket',
    CLOUDFRONT_URL: 'https://your-cloudfront-domain.com',
    REGION: 'us-east-1',
  },
}

export default CENTRALIZED_CONFIG
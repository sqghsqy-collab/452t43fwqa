# Pix Mobile App

A centralized photo-sharing mobile application built with React Native and Expo, formerly based on Pixelfed.

## Overview

Pix is a centralized social media platform focused on photo sharing. This mobile app connects to a centralized Pix server and provides features like:

- **Centralized Authentication**: Single server authentication with Google/Facebook OAuth
- **Photo Sharing**: Upload and share photos with the community
- **Social Features**: Follow users, like posts, comment on content
- **Real-time Updates**: Live notifications and timeline updates
- **AWS Integration**: Scalable media storage and delivery

## Key Changes from Pixelfed

- **Centralized Architecture**: Removed federation and ActivityPub support
- **Single Server**: All users connect to one centralized server
- **Social Login**: Added Google and Facebook authentication
- **Simplified UI**: Streamlined interface focused on core features
- **AWS Integration**: Built-in support for AWS services

## Features

### ✅ Implemented
- Centralized server configuration
- OAuth integration (Google/Facebook)
- Health check system
- Integration testing utilities
- Centralized API communication

### 🚧 In Development
- User authentication flow
- Photo upload and sharing
- Timeline and feed
- User profiles
- Social interactions

## Technical Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation 6
- **State Management**: React Context + Hooks
- **Authentication**: Google Sign-In, Facebook SDK
- **Storage**: AsyncStorage
- **API**: RESTful API communication
- **Testing**: Custom integration tests

## Configuration

The app is configured to work with a centralized Pix server. Update the configuration in `src/config/centralized.ts`:

```typescript
export const CENTRALIZED_CONFIG = {
  SERVER_URL: 'https://your-pix-server.com',
  API_BASE: '/api/v1',
  // ... other settings
}
```

## Testing

Run integration tests to verify server connectivity:

```bash
npm test
# or
node test-integration.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on device/simulator:
```bash
npm run android  # Android
npm run ios      # iOS
npm run web      # Web
```

## Project Structure

```
pix-mobile-app/
├── src/
│   ├── config/          # App configuration
│   ├── components/      # Reusable UI components
│   ├── screens/         # App screens
│   ├── services/        # API and external services
│   └── utils/           # Utility functions
├── test-integration.js  # Integration tests
└── package.json
```

## License

AGPL-3.0 - Same as the original Pixelfed project

## Contributing

This is a centralized version of Pixelfed. For the original federated version, see the main Pixelfed repository.
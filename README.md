# Mobile Shop App

This is a Next.js mobile application built with Capacitor for native mobile functionality.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Android Studio (for Android development)
- Java Development Kit (JDK)

## Local Development Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd testb1g1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```env
   NEXT_PUBLIC_API_URL=https://b1g1testtask.vercel.app
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Building for Mobile

### Android Setup

1. Build the web app:
   ```bash
   npm run build
   ```

2. Initialize Capacitor:
   ```bash
   npx cap sync
   ```

3. Open in Android Studio:
   ```bash
   npx cap open android
   ```

4. Run the app:
   - Connect your Android device or start an emulator
   - Click the "Run" button in Android Studio

## API Documentation

The app uses a REST API with the following endpoints:

### Get Shops

```http
GET /api/shops
```

Returns a list of available shops.

Response example:
```json
[
  {
    "id": 1,
    "name": "Baden",
    "price": 29,
    "discountedPrice": 24,
    "vouchers": 120,
    "savings": 1034
  }
]
```

## Features

- QR Code scanning using Capacitor MLKit
- Shop listing and details
- Discount voucher system
- Mobile-first responsive design

## Project Structure

```
src/
├── app/
│   ├── api/          # API routes
│   ├── components/   # React components
│   ├── services/     # API services
│   ├── store/        # State management
│   ├── types/        # TypeScript types
│   └── utils/        # Utility functions
├── public/           # Static assets
└── styles/          # Global styles
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Sync Capacitor
npx cap sync

# Open Android project
npx cap open android
```

## Troubleshooting

### QR Scanner Issues
- Ensure camera permissions are granted
- Check if the device supports MLKit barcode scanning
- Clear app cache if scanner shows white screen

### Build Issues
- Make sure all dependencies are installed
- Check Node.js version compatibility
- Verify Android Studio/Xcode setup

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.



















































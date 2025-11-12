#!/usr/bin/env node

const os = require('os');

function getLocalIP() {
  try {
    const interfaces = os.networkInterfaces();
    const addresses = [];

    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        // Skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        if (iface.family === 'IPv4' && !iface.internal) {
          addresses.push(iface.address);
        }
      }
    }

    return addresses;
  } catch (error) {
    console.log('⚠️  Unable to automatically detect network interfaces.');
    console.log('   This might be due to sandboxed environment restrictions.\n');
    return [];
  }
}

function showNetworkInfo(port = 3000) {
  const localIPs = getLocalIP();

  console.log('\n🚀 Portfolio Development Server is running!');
  console.log('📱 You can now access your portfolio from mobile devices:\n');

  if (localIPs.length > 0) {
    localIPs.forEach(ip => {
      console.log(`   🌐 http://${ip}:${port}`);
    });
  } else {
    console.log('   🌐 Find your local IP address and visit: http://YOUR_IP_ADDRESS:3000');
    console.log('   💡 You can find your IP by running: ipconfig (Windows) or ifconfig (macOS/Linux)');
  }

  console.log('\n💻 Local access: http://localhost:3000');
  console.log('\n📋 Instructions:');
  console.log('   1. Make sure your mobile device is connected to the same Wi-Fi network');
  console.log('   2. Open your mobile browser and visit the URLs shown above');
  console.log('   3. If you have firewall restrictions, you may need to allow incoming connections\n');
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  showNetworkInfo(port);
}

module.exports = { showNetworkInfo, getLocalIP };

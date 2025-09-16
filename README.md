# NVX Snapshot Relay – CH5 Demo

This project is a minimal **Crestron CH5 (React + TypeScript + Vite)** demo that shows how to display an NVX **Image Preview** through our **Snapshot Relay**.  
The relay removes credentials from the source URL and republishes a clean local HTTP endpoint, so CH5 UI components can show the snapshot without certificate prompts or `user:pass@` in the URL.

- **Buy SIMPL/SIMPL# module license:** https://oniointeractive.lemonsqueezy.com/buy/b0527a0f-6b2f-499f-9c7d-8a0a0cc75c0d  
- **Download the driver and docs:** https://drive.google.com/drive/folders/1K5xf8ljW9jzQPrhTq89GThjB2Mcei3tF?usp=sharing
- **Simpl Module Video Walkthrough:** https://youtu.be/aWpA1Bpv9WE

---

## What this demo does

Renders a `<ch5-video>` component pointed at the relay URL, e.g.:
http://<processor-ip>:8080/streams/<streamId>


No certificates and no embedded credentials are required on the client side.

---

## Prerequisites

- Node.js 18+
- Snapshot Relay running on your Crestron processor (port **8080** reachable on your network)
- Your NVX (or other device) snapshot verified and working through the relay

---

## Quick start

```bash
npm i
npm run dev
```

Open http://localhost:5173/ and you should see the video surface.

## Configuration

In src/App.tsx, set the relay endpoint for both url and snapshotURL:
```
<ch5-video
  url="http://<processor-ip>:8080/streams/<streamId>"
  snapshotURL="http://<processor-ip>:8080/streams/<streamId>"
  ...
/>
```

Typical relay format: http://<processor-ip>:8080/streams/<streamId>

Optional: play/stop via CH5 signals
If you want to drive play/stop from a signal, set an alias in receiveStatePlay:
```receiveStatePlay="playVideo"```

Publish to it from code using CrComLib:
```
import '@crestron/ch5-webcomponent';
import CrComLib from '@crestron/ch5-crcomlib/build_bundles/umd/cr-com-lib';

CrComLib.publishEvent('b', 'playVideo', true);  // start
CrComLib.publishEvent('b', 'playVideo', false); // stop
```

Install the packages if needed:
```
npm i @crestron/ch5-webcomponent @crestron/ch5-crcomlib
```

## Notes

If your app is served over HTTPS while the relay is HTTP, the browser may block mixed content. For local testing, keep both on HTTP or terminate TLS in front of the relay.
On VC-4 (Linux), ensure TCP 8080 is allowed in the OS firewall if accessing from other hosts.

## License
MIT for this demo project. The Snapshot Relay SIMPL/SIMPL# driver is licensed per processor (see purchase link above).

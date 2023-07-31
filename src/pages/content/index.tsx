import { createRoot } from 'react-dom/client';
const div = document.createElement('div');
document.body.appendChild(div);

const root = createRoot(div);
root.render(
    <div>
      Content from content/index.tsx
    </div>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}

import { createRoot } from 'react-dom/client';
const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#__root');
if (!rootContainer) throw new Error("Can't find Options root element");
const root = createRoot(rootContainer);
root.render(
    <div>
    </div>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}

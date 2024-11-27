// page.js
import { useEffect, useRef } from 'react';
import ChatModal from './components/ChatModal';
export default function HomePage() {
    const viewer = useRef(null);
  
    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            enableOfficeEditing:true,//
            initialDoc: '/files/example.docx',
            licenseKey: 'demo:1732014365003:7ef3c2a003000000002c9f3512bce4f73972cfbb7657c2c3a7c784a22f'  // sign up to get a free trial key at https://dev.apryse.com
          },
          viewer.current
        ).then((instance) => {
          const { docViewer } = instance;
          // you can now call WebViewer APIs here...
        });
      });
    }, []);
  
    return (
      <div className='MyComponent'>
        <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
        <ChatModal/>
      </div>
    );
  }
  
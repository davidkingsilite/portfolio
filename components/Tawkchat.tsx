// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/686d8c5f35bd5b190bfa29fe/1ivluolb9';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->


'use client';

import { useEffect } from 'react';

export default function TawkChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/686d8c5f35bd5b190bfa29fe/1ivluolb9';
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
}

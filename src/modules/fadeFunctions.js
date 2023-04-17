export function fadeOut(nodeRef, callback) {
   if (!nodeRef.style.opacity) nodeRef.style.opacity = 1;

   if ((+nodeRef.style.opacity) > 0) {
      nodeRef.style.opacity = (+nodeRef.style.opacity) - 0.05;
      requestAnimationFrame(fadeOut.bind(undefined, nodeRef, callback));
   } else {
      if (callback) callback();
   }
}

export function fadeIn(nodeRef, callback) {
   if (!nodeRef.style.opacity) nodeRef.style.opacity = 0;

   if ((+nodeRef.style.opacity) < 1) {
      nodeRef.style.opacity = (+nodeRef.style.opacity) + 0.05;
      requestAnimationFrame(fadeIn.bind(undefined, nodeRef, callback));
   } else {
      if (callback) callback();
   }
}
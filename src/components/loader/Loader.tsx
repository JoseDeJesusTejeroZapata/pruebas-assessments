import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from './loader.json'; // Asegúrate de que la ruta al archivo JSON sea correcta

const Loader = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current, // Ahora TypeScript sabe que esto es un HTMLDivElement
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData, // Tu animación JSON
      });

      return () => anim.destroy(); // Opcional: limpiar al desmontar
    }
  }, []);

  // Estilos para el contenedor del loader y el efecto de blur
  const containerStyles: React.CSSProperties = {
    position: 'fixed', // O 'absolute' si prefieres
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo blanco semitransparente
    backdropFilter: 'blur(5px)', // Efecto de blur
    zIndex: 1000, // Asegura que esté al frente de todo
  };

  return (
    <div style={containerStyles}>
      <div ref={animationContainer}></div>
    </div>
  );
};

export default Loader;

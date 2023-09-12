import {useEffect, useState} from 'react';

// Imports for images
import softwareEngineerImg from './assets/softwareEngineer.png';
import graduationImg from './assets/graduation.png';

// Import for style
import './style/style.css';

export default function Root() {
  // To open or close map modal, changing map modal id
  const [mapModalId, setMapModalId] = useState('mapModal_unclicked');

  // When the user clicks on closing cross, close the map modal
  const closeMapModal = () => {
    // Now the EventListener is called to communicate the closure of the map modal
    window.dispatchEvent(
      new CustomEvent('closeMapModal', {
        detail: {
          fromApp: false,
        },
      })
    );
  };

  useEffect(() => {
    // Listener to set the map modal id correctly to close the map modal
    const handleCloseMapModal = () => {
      setMapModalId('mapModal_unclicked');
    };
    window.addEventListener('closeMapModal', handleCloseMapModal);

    // Listener to set the map modal id correctly to open the map modal
    const handleOpenMapModal = () => {
      setMapModalId('mapModal_clicked');
    };
    window.addEventListener('openMapModal', handleOpenMapModal);

    return () => {
      window.removeEventListener('openMapModal', handleOpenMapModal);
      window.removeEventListener('closeMapModal', handleCloseMapModal);
    };
  }, []);

  return (
    <>
      <div id={mapModalId}>
        <div id="mapModalContent">
          <span
            id="closingCross"
            data-testid="closingCross"
            onClick={closeMapModal}
          >
            &times;
          </span>
          <div id="mapModalTitleDiv" data-testid="mapModalTitleDiv">
            Today I will graduate in Software Engineering at the University of
            Genoa which is located here, in Via Dodecaneso 35
          </div>
          <div id="mapModalImagesDiv">
            <img
              id="softwareEngineerImg"
              src={softwareEngineerImg}
              alt="Software Engineer image"
              data-testid="softwareEngineerImg"
            />
            <img
              id="graduationImg"
              src={graduationImg}
              alt="Graduation image"
              data-testid="graduationImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

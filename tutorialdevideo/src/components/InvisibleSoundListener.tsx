import { useEffect } from 'react';
import { invisibleElevatorMusic } from '../utils/elevatorMusic';

export default function InvisibleSoundListener() {
  useEffect(() => {
    invisibleElevatorMusic.setupInvisibleAutoplay();
  }, []);

  return null; // Invisible: no UI rendered, sound plays automatically on user interaction
}

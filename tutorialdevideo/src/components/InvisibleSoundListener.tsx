import { useEffect } from 'react';
import { invisibleElevatorMusic } from '../utils/elevatorMusic';

export default function InvisibleSoundListener() {
  useEffect(() => {
    invisibleElevatorMusic.setupInvisibleAutoplay();
  }, []);

  return null;
}

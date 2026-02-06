import { useRef, useCallback } from 'react';

interface AudioPlayerHook {
  play: (audioId: string) => void;
  pause: (audioId: string) => void;
  toggle: (audioId: string) => void;
  registerAudio: (audioId: string, nextAudioId?: string) => void;
}

// Global state to track currently playing audio
let currentlyPlayingId: string | null = null;
const audioRegistry: Map<string, { nextId?: string }> = new Map();

export const useAudioPlayer = (): AudioPlayerHook => {
  const play = useCallback((audioId: string) => {
    // Pause currently playing audio if different
    if (currentlyPlayingId && currentlyPlayingId !== audioId) {
      const currentAudio = document.getElementById(currentlyPlayingId) as HTMLAudioElement;
      if (currentAudio) {
        currentAudio.pause();
      }
    }
    
    const audio = document.getElementById(audioId) as HTMLAudioElement;
    if (audio) {
      audio.play();
      currentlyPlayingId = audioId;
    }
  }, []);

  const pause = useCallback((audioId: string) => {
    const audio = document.getElementById(audioId) as HTMLAudioElement;
    if (audio) {
      audio.pause();
      if (currentlyPlayingId === audioId) {
        currentlyPlayingId = null;
      }
    }
  }, []);

  const toggle = useCallback((audioId: string) => {
    const audio = document.getElementById(audioId) as HTMLAudioElement;
    if (audio) {
      if (audio.paused) {
        play(audioId);
      } else {
        pause(audioId);
      }
    }
  }, [play, pause]);

  const registerAudio = useCallback((audioId: string, nextAudioId?: string) => {
    audioRegistry.set(audioId, { nextId: nextAudioId });
    
    const audio = document.getElementById(audioId) as HTMLAudioElement;
    if (audio) {
      // Remove existing listener to prevent duplicates
      audio.onended = () => {
        currentlyPlayingId = null;
        const registration = audioRegistry.get(audioId);
        if (registration?.nextId) {
          const nextAudio = document.getElementById(registration.nextId) as HTMLAudioElement;
          if (nextAudio) {
            nextAudio.play();
            currentlyPlayingId = registration.nextId;
          }
        }
      };
    }
  }, []);

  return { play, pause, toggle, registerAudio };
};

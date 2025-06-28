// Type declarations for react-speech-recognition
// Project: https://github.com/JamesBrill/react-speech-recognition

declare module 'react-speech-recognition' {
  /** Options for starting speech recognition */
  export interface SpeechRecognitionOptions {
    continuous?: boolean;
    language?: string;
  }

  /** Start listening to user speech */
  export function startListening(options?: SpeechRecognitionOptions): void;
  /** Stop listening */
  export function stopListening(): void;
  /** Abort listening */
  export function abortListening(): void;

  /** Hook return shape */
  export interface SpeechRecognitionHook {
    transcript: string;
    interimTranscript: string;
    finalTranscript: string;
    listening: boolean;
    resetTranscript: () => void;
    browserSupportsSpeechRecognition: boolean;
    isMicrophoneBlocked: boolean;
  }

  /** React hook to access speech recognition */
  export function useSpeechRecognition(): SpeechRecognitionHook;

  /** Default export for programmatic control */
  const SpeechRecognition: {
    startListening: (options?: SpeechRecognitionOptions) => void;
    stopListening: () => void;
    abortListening: () => void;
  };
  export default SpeechRecognition;
}

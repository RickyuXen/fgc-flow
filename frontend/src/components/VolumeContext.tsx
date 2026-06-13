import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type VolumeContextType = {
  volume: number; // Range from 0 to 1
  setVolume: (volume: number) => void;
};

// Create the context
const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

// Define the props type for VolumeProvider, now including className
type VolumeProviderProps = {
  children: ReactNode;
};

// VolumeProvider component
export function VolumeProvider({ children }: VolumeProviderProps) {
  const [volume, setVolume] = useState(0.5); // Default volume is 50%

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      <div>{children}</div>
    </VolumeContext.Provider>
  );
}

// Custom hook to use the context
export function useVolume(): VolumeContextType {
  const context = useContext(VolumeContext);
  if (!context) {
    throw new Error("useVolume must be used within a VolumeProvider");
  }
  return context;
}

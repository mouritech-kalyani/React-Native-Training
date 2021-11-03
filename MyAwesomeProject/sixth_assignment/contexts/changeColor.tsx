import React, {useState, useCallback, useMemo} from 'react';
import {ChangeColors} from '../types/color';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export interface ColorManager {
  colorInfo: ChangeColors | null;
  updateColorInfo: (colorData: ChangeColors) => void;
}

const ChangeContext = React.createContext<ColorManager>({
    colorInfo: null,
    updateColorInfo: (): void => {},
});

export const useColorContext = (): ColorManager => React.useContext(ChangeContext);

const ChangeColorProvider = ({children}: Props) => {
  const [colorInfo, setColorInfo] = useState<ChangeColors | null>(null);

  const updateColorInfo = useCallback((colorData: ChangeColors) => {
    setColorInfo(colorData);
  }, []);

  const colorManager = useMemo((): ColorManager => {
    return {
        colorInfo: colorInfo,
        updateColorInfo,
    };
  }, [updateColorInfo, colorInfo]);

  return (
    <ChangeContext.Provider value={colorManager}>{children}</ChangeContext.Provider>
  );
};

export {ChangeColorProvider, ChangeContext};

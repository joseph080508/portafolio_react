import { useTheme } from "../../context/useTheme";
import ShapeGrid from "../ShapeGrid/ShapeGrid";

const GlobalBackground = () => {
  const { darkMode } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <ShapeGrid
        shape="square"
        direction="diagonal"
        lineColor={darkMode ? "#2a2734" : "#cbd5e1"}
        hoverColor={darkMode ? "#ffffff" : "#0f172a"}
        hoverFillColor={darkMode ? "#ffffff" : "#0f172a"}
        fillOpacity={0.15}
        cellSize={40}
        speed={0.5}
        tiltX={0}
        tiltY={0}
        rainbow={false}
        backgroundColor="transparent"
      />
    </div>
  );
};

export default GlobalBackground;

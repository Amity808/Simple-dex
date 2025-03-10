import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import {
  ConnectButtonStyle,
  HeaderStyle,
  LogoStyle,
} from "../../Styles/Header";
import { formatAddress } from "../../utils/helpers";
import DarkSvg from "../../assests/dark.svg"
import LightSvg from "../../assests/light.svg"
import { useThemeToggleContext } from "../../context/ThemeContext.tsx";

interface toggleInterface {
  toggleTheme: () => void;
}
export const Header:React.FC<toggleInterface> = ({ toggleTheme }) => {
  const { isDarkMode } = useThemeToggleContext();
  return (
    <HeaderStyle>
      <Logo />
      {isDarkMode
      ? <img src={LightSvg} onClick={toggleTheme} alt="dark mode" className="" style={{ width: "24px", height: "24px"}} /> :
      <img src={DarkSvg}  onClick={toggleTheme} alt="light mode" className="theme-icon" style={{ width: "24px", height: "24px"}}  />
      }
      <ConnectButton />
    </HeaderStyle>
  );
};

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="img">
        <img src="/scrollswap.svg" alt="uniswap logo" className="" />
      </div>
      <h3>ScrollSwap</h3>
    </LogoStyle>
  );
};

export const ConnectButton = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const handleButtonClick = () => {
    open();
  };
  return (
    <ConnectButtonStyle onClick={handleButtonClick}>
      {isConnected ? formatAddress(address ?? "") : "Connect Wallet"}
    </ConnectButtonStyle>
  );
};
